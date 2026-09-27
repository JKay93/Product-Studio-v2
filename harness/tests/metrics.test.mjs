import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createRunState, addTaskToState } from "../state.mjs";
import { measurePilot, measurePilotRecord, measurePilotRecords } from "../metrics.mjs";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

const metricsModule = path.resolve(import.meta.dirname, "..", "metrics.mjs");

function copy(value) {
  return JSON.parse(JSON.stringify(value));
}

function stateFixture({ runId = "pilot-run", elapsed = 0, retryCounts = { implementation: 0, testDebug: 0, reviewFix: 0 } } = {}) {
  const state = createRunState({ runId, product: "pilot-product", now: "2026-09-11T00:00:00Z" });
  addTaskToState(state, {
    taskId: "pilot-task",
    contractFile: "harness/contract.json",
    contractVersion: "pilot.v1",
    retryCounts,
    now: "2026-09-11T00:00:00Z"
  });
  state.run.routingPolicyVersion = "role-routing.v1";
  state.run.budget.activeElapsedSeconds = elapsed;
  state.run.updatedAt = "2026-09-11T00:00:00Z";
  return state;
}

test("measurement is derived from authoritative state and leaves unavailable telemetry null", () => {
  const state = stateFixture({ elapsed: 37, retryCounts: { implementation: 1, testDebug: 2, reviewFix: 1 } });
  state.events.push({
    eventId: "duplicate-event",
    taskId: "pilot-task",
    attempt: 1,
    eventType: "duplicate"
  });
  state.archivedEvents.push({
    eventId: "stale-event",
    taskId: "pilot-task",
    attempt: 1,
    reason: "stale: candidate revision no longer matches"
  });
  state.processedEventIds.push("duplicate-event", "stale-event");

  const record = measurePilotRecord(state, {
    phase: "final",
    routingPolicyVersion: "role-routing.v1",
    founderInterruptions: 0,
    escapedDefects: 0,
    measuredAt: "2026-09-11T00:01:00Z"
  });

  assert.equal(record.runId, "pilot-run");
  assert.equal(record.routingPolicyVersion, "role-routing.v1");
  assert.deepEqual(record.taskScope[0], {
    taskId: "pilot-task",
    attempt: 1,
    mode: "implement",
    contractFile: "harness/contract.json",
    contractVersion: "pilot.v1",
    writeScope: []
  });
  assert.equal(record.acceptanceDeliveryStates[0].deliveryState, null);
  assert.equal(record.activeElapsedSeconds, 37);
  assert.equal(record.duplicateEvents, 1);
  assert.equal(record.staleEvents, 1);
  assert.deepEqual(record.retries, {
    implementation: 1,
    testDebug: 2,
    reviewFix: 1,
    total: 4,
    byTask: [{
      taskId: "pilot-task",
      counts: { implementation: 1, testDebug: 2, reviewFix: 1 }
    }]
  });
  assert.equal(record.founderInterruptions, 0);
  assert.equal(record.escapedDefects, 0);
  assert.equal(record.costUsd, null);
  assert.equal(record.tokens, null);
  assert.match(record.costUsdReason, /not supplied|unavailable/i);
  assert.match(record.tokensReason, /not supplied|unavailable/i);
  assert.equal(record.availability.costUsd.available, false);
  assert.equal(record.availability.tokens.available, false);
  assert.equal(state.run.budget.activeElapsedSeconds, 37, "measurement must not mutate authoritative state");
});

test("baseline and final records retain one run identity and policy version", () => {
  const baseline = stateFixture({ elapsed: 0 });
  const final = copy(baseline);
  final.run.budget.activeElapsedSeconds = 83;
  final.run.updatedAt = "2026-09-11T00:02:00Z";
  final.tasks["pilot-task"].retryCounts = { implementation: 1, testDebug: 0, reviewFix: 1 };
  const pair = measurePilot({ baseline, final }, {
    routingPolicyVersion: "role-routing.v1",
    baseline: { founderInterruptions: 0, escapedDefects: 0 },
    final: { founderInterruptions: 1, escapedDefects: 0 }
  });

  assert.equal(pair.schema, "dexter.product_studio.pilot_metrics.v1");
  assert.equal(pair.sameRunId, true);
  assert.equal(pair.sameRoutingPolicyVersion, true);
  assert.equal(pair.runId, "pilot-run");
  assert.equal(pair.baseline.phase, "baseline");
  assert.equal(pair.final.phase, "final");
  assert.equal(pair.baseline.runId, pair.final.runId);
  assert.equal(pair.baseline.routingPolicyVersion, pair.final.routingPolicyVersion);
  assert.equal(pair.baseline.activeElapsedSeconds, 0);
  assert.equal(pair.final.activeElapsedSeconds, 83);
  assert.equal(pair.final.founderInterruptions, 1);
  assert.equal(pair.records.length, 2);
});

test("pair measurement rejects a baseline from another run", () => {
  const baseline = stateFixture({ runId: "run-a" });
  const final = stateFixture({ runId: "run-b" });
  assert.throws(
    () => measurePilotRecords({ baseline, final }, { routingPolicyVersion: "role-routing.v1" }),
    /same runId/
  );
});

test("pair measurement rejects a lone state instead of manufacturing a baseline", () => {
  assert.throws(
    () => measurePilotRecords(stateFixture(), { routingPolicyVersion: "role-routing.v1" }),
    /explicit distinct state snapshots/
  );
});

test("pair measurement rejects a final snapshot that goes backward in time, elapsed work, or retries", () => {
  const makePair = (change) => {
    const baseline = stateFixture({ elapsed: 60, retryCounts: { implementation: 1, testDebug: 1, reviewFix: 0 } });
    baseline.run.updatedAt = "2026-09-11T00:10:00Z";
    const final = copy(baseline);
    change(final);
    return { baseline, final };
  };
  assert.throws(
    () => measurePilotRecords(makePair((state) => { state.run.updatedAt = "2026-09-11T00:09:00Z"; }), { routingPolicyVersion: "role-routing.v1" }),
    /timestamp cannot precede/
  );
  assert.throws(
    () => measurePilotRecords(makePair((state) => { state.run.budget.activeElapsedSeconds = 59; }), { routingPolicyVersion: "role-routing.v1" }),
    /elapsed time cannot be lower/
  );
  assert.throws(
    () => measurePilotRecords(makePair((state) => { state.tasks["pilot-task"].retryCounts.implementation = 0; }), { routingPolicyVersion: "role-routing.v1" }),
    /retry count cannot be lower/
  );
});

test("measurement validates state and supplied manual metric types", () => {
  const state = stateFixture();
  const badElapsed = copy(state);
  badElapsed.run.budget.activeElapsedSeconds = "0";
  assert.throws(() => measurePilotRecord(badElapsed), /activeElapsedSeconds.*non-negative number/);

  assert.throws(
    () => measurePilotRecord(state, { founderInterruptions: true }),
    /founderInterruptions.*non-negative integer/
  );
  assert.throws(
    () => measurePilotRecord(state, { costUsd: [] }),
    /costUsd.*non-negative number/
  );

  const badRetry = copy(state);
  badRetry.tasks["pilot-task"].retryCounts.implementation = "0";
  assert.throws(() => measurePilotRecord(badRetry), /retryCounts\.implementation.*non-negative integer/);
});

test("active elapsed time requires a frozen snapshot or trusted clock", () => {
  const state = stateFixture({ elapsed: 10 });
  state.run.budget.active = true;
  state.run.budget.humanPaused = false;
  state.run.budget.workersStopped = false;
  state.run.budget.lastAccountingAt = "2026-09-11T00:00:00Z";
  assert.throws(
    () => measurePilotRecord(state, { phase: "final" }),
    /checkpointed\/frozen|trusted measurement clock/
  );
  const measured = measurePilotRecord(state, {
    phase: "final",
    trustedMeasurementClock: { at: "2026-09-11T00:01:00Z", source: "test monotonic clock" }
  });
  assert.equal(measured.activeElapsedSeconds, 70);
  assert.equal(measured.availability.activeElapsedSeconds.source, "test monotonic clock");
});

test("retry totals must agree and synonyms cannot double-count", () => {
  const inconsistent = stateFixture();
  inconsistent.tasks["pilot-task"].retryCounts = { implementation: 1, testDebug: 0, reviewFix: 0, total: 2 };
  assert.throws(() => measurePilotRecord(inconsistent), /total.*sum of retry counters/);
  const duplicateSynonym = stateFixture();
  duplicateSynonym.tasks["pilot-task"].retryCounts = { implementation: 1, implementationRetries: 1 };
  assert.throws(() => measurePilotRecord(duplicateSynonym), /duplicate synonyms/);
});

test("pair measurement requires routing identity", () => {
  const baseline = stateFixture();
  const final = copy(baseline);
  delete baseline.run.routingPolicyVersion;
  delete final.run.routingPolicyVersion;
  assert.throws(
    () => measurePilotRecords({ baseline, final }),
    /require a routing policy version/
  );
});

test("missing duplicate outcome history is not reported as an invented zero", () => {
  const state = stateFixture();
  const record = measurePilotRecord(state, { phase: "baseline", routingPolicyVersion: "role-routing.v1" });
  assert.equal(record.duplicateEvents, null);
  assert.match(record.duplicateEventsReason, /not retained|explicitly recorded/i);
  assert.equal(record.availability.duplicateEvents.available, false);
  // Stale inputs are retained as archived events, so an empty archive is an
  // observable zero rather than an unavailable value.
  assert.equal(record.staleEvents, 0);
});

test("omitted history leaves duplicate and stale counts unavailable", () => {
  const state = stateFixture();
  delete state.events;
  delete state.archivedEvents;
  delete state.processedEventIds;
  const record = measurePilotRecord(state, { phase: "final", routingPolicyVersion: "role-routing.v1" });
  assert.equal(record.duplicateEvents, null);
  assert.equal(record.staleEvents, null);
  assert.match(record.duplicateEventsReason, /history was not retained/i);
  assert.match(record.staleEventsReason, /history was not retained/i);
});

test("standalone CLI writes baseline/final artifacts exclusively", () => {
  const root = mkdtempSync(path.join(tmpdir(), "dexter-pilot-metrics-"));
  try {
    const statePath = path.join(root, "state.json");
    const baselineStatePath = path.join(root, "baseline-state.json");
    const finalStatePath = path.join(root, "final-state.json");
    const baselinePath = path.join(root, "metrics", "baseline.json");
    const finalPath = path.join(root, "metrics", "final.json");
    writeFileSync(statePath, `${JSON.stringify(stateFixture({ elapsed: 19 }), null, 2)}\n`);
    writeFileSync(baselineStatePath, `${JSON.stringify(stateFixture({ elapsed: 0 }), null, 2)}\n`);
    writeFileSync(finalStatePath, `${JSON.stringify(stateFixture({ elapsed: 19 }), null, 2)}\n`);
    const single = JSON.parse(execFileSync("node", [
      metricsModule,
      "--state", statePath,
      "--routing-policy-version", "role-routing.v1",
      "--phase", "final"
    ], { encoding: "utf8" }));
    assert.equal(single.ok, true);
    assert.equal(single.phase, "final");
    assert.equal(single.baseline, undefined, "one --state with one phase must not manufacture a pair");
    const args = [
      metricsModule,
      "--baseline-state", baselineStatePath,
      "--final-state", finalStatePath,
      "--routing-policy-version", "role-routing.v1",
      "--founder-interruptions", "0",
      "--escaped-defects", "0",
      "--baseline-output", baselinePath,
      "--final-output", finalPath
    ];
    const first = JSON.parse(execFileSync("node", args, { encoding: "utf8" }));
    assert.equal(first.ok, true);
    assert.equal(JSON.parse(readFileSync(baselinePath, "utf8")).phase, "baseline");
    assert.equal(JSON.parse(readFileSync(finalPath, "utf8")).phase, "final");
    const before = readFileSync(finalPath, "utf8");
    let second;
    try {
      execFileSync("node", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    } catch (error) {
      second = JSON.parse(error.stdout);
    }
    assert.equal(second.ok, false);
    assert.match(second.error, /refusing to overwrite/i);
    assert.equal(readFileSync(finalPath, "utf8"), before);

    const partialBaseline = path.join(root, "metrics", "partial-baseline.json");
    const existingFinal = path.join(root, "metrics", "existing-final.json");
    writeFileSync(existingFinal, "keep me\n");
    let partial;
    try {
      execFileSync("node", [
        metricsModule,
        "--baseline-state", baselineStatePath,
        "--final-state", finalStatePath,
        "--routing-policy-version", "role-routing.v1",
        "--baseline-output", partialBaseline,
        "--final-output", existingFinal
      ], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    } catch (error) {
      partial = JSON.parse(error.stdout);
    }
    assert.equal(partial.ok, false);
    assert.equal(readFileSync(existingFinal, "utf8"), "keep me\n");
    assert.equal(existsSync(partialBaseline), false, "preflight must prevent a partial baseline artifact");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
