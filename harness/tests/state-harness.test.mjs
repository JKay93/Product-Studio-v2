import assert from "node:assert/strict";
import { execFile, execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";

const sourceRoot = path.resolve(import.meta.dirname, "..");
const execFileAsync = promisify(execFile);

function fixtureRoot() {
  const root = mkdtempSync(path.join(tmpdir(), "dexter-state-harness-"));
  cpSync(sourceRoot, path.join(root, "harness"), { recursive: true });
  mkdirSync(path.join(root, "operating-system"), { recursive: true });
  mkdirSync(path.join(root, "graph"), { recursive: true });
  writeFileSync(path.join(root, "operating-system", "STANDING_ORDERS.md"), "# test\n");
  writeFileSync(path.join(root, "graph", "studio.graph.json"), '{"nodes":[],"edges":[]}\n');
  writeFileSync(path.join(root, "AGENTS.md"), "# test\n");
  writeFileSync(path.join(root, "package.json"), '{"name":"test-studio"}\n');
  return root;
}

function run(root, args) {
  try {
    return JSON.parse(execFileSync("node", ["harness/cli.mjs", ...args], { cwd: root, encoding: "utf8" }));
  } catch (error) {
    return JSON.parse(error.stdout || "{}");
  }
}

async function runAsync(root, args) {
  try {
    const result = await execFileAsync("node", ["harness/cli.mjs", ...args], { cwd: root, encoding: "utf8" });
    return JSON.parse(result.stdout);
  } catch (error) {
    return JSON.parse(String(error.stdout || "{}"));
  }
}

function startHttpServer(handler) {
  return new Promise((resolve, reject) => {
    const server = createServer(handler);
    const onError = (error) => reject(error);
    server.once("error", onError);
    server.listen(0, "127.0.0.1", () => {
      server.removeListener("error", onError);
      const address = server.address();
      resolve({ server, origin: `http://127.0.0.1:${address.port}` });
    });
  });
}

function stopHttpServer(server) {
  return new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  });
}

function writeJson(root, filePath, value) {
  const target = path.join(root, filePath);
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
  return filePath;
}

function readJson(root, filePath) {
  return JSON.parse(readFileSync(path.join(root, filePath), "utf8"));
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function sha256(filePath) {
  return createHash("sha256").update(readFileSync(filePath)).digest("hex");
}

function sha256Text(value) {
  return createHash("sha256").update(value).digest("hex");
}

function gitRepo(root) {
  git(root, ["init", "-q"]);
  git(root, ["config", "user.email", "test@example.invalid"]);
  git(root, ["config", "user.name", "Harness Test"]);
  writeFileSync(path.join(root, "tracked.txt"), "base\n");
  git(root, ["add", "tracked.txt"]);
  git(root, ["commit", "-qm", "base"]);
  const base = git(root, ["rev-parse", "HEAD"]);
  writeFileSync(path.join(root, "tracked.txt"), "candidate\n");
  git(root, ["add", "tracked.txt"]);
  git(root, ["commit", "-qm", "candidate"]);
  return { base, candidate: git(root, ["rev-parse", "HEAD"]) };
}

function initTask(root, { runId = "run-1", taskId = "task-1", candidate, reviewers = "", previewOrigin } = {}) {
  assert.equal(run(root, ["state", "init", "--file", "harness/state.json", "--run-id", runId, "--repo", ".", "--now", "2026-09-11T00:00:00Z"]).ok, true);
  const contract = JSON.parse(readFileSync(path.join(root, "harness/templates/bounded-task.example.json"), "utf8"));
  contract.contractVersion = "state-test.v1";
  contract.taskId = taskId;
  contract.attempt = 1;
  contract.repo = "harness";
  contract.baseRevision = existsSync(path.join(root, ".git"))
    ? git(root, ["rev-parse", "HEAD^"])
    : "0000000000000000000000000000000000000000";
  contract.writeScope = ["tracked.txt"];
  contract.requiredReviewers = reviewers ? reviewers.split(",").map((item) => item.trim()).filter(Boolean) : ["productDesign", "qaRelease"];
  if (previewOrigin !== undefined) contract.previewOrigin = previewOrigin;
  writeJson(root, "harness/contract.json", contract);
  const args = ["state", "task", "init", "--file", "harness/state.json", "--task-id", taskId, "--now", "2026-09-11T00:00:00Z"];
  args.push("--contract", "harness/contract.json");
  if (candidate) args.push("--candidate-revision", candidate);
  if (reviewers) args.push("--reviewers", reviewers);
  const initialized = run(root, args);
  assert.equal(initialized.ok, true, JSON.stringify(initialized));
}

function completion(root, value, file = "harness/completion.json") {
  const contract = readJson(root, "harness/contract.json");
  const candidate = value.candidateRevision ?? value.candidate ?? "1111111111111111111111111111111111111111";
  const reviewState = value.taskState ?? "review_pending";
  const checkpoint = {
    schema: "dexter.product_studio.bounded_checkpoint.v1",
    version: 1,
    contractVersion: value.contractVersion ?? contract.contractVersion,
    taskId: value.taskId,
    attempt: value.attempt,
    mode: contract.mode,
    eventId: value.eventId,
    repo: contract.repo,
    baseRevision: contract.baseRevision,
    candidateRevision: candidate,
    taskState: reviewState,
    status: value.status ?? "PASS",
    deliveryState: value.deliveryState,
    filesChanged: value.filesChanged ?? [],
    checks: [{ id: "CHECK-01", command: "npm test", result: value.status ?? "PASS" }],
    acceptanceCriteria: [{ id: "AC-01", result: value.status ?? "PASS" }],
    deviations: value.deviations ?? [],
    unresolved: value.unresolved ?? [],
    evidence: [{ id: "E-01", path: "tracked.txt", sha256: sha256(path.join(root, "tracked.txt")), acceptanceCriteria: ["AC-01"], checks: ["CHECK-01"] }],
    reviews: (value.reviews ?? []).map((review) => ({
      ...review,
      taskId: review.taskId ?? value.taskId,
      attempt: review.attempt ?? value.attempt,
      contractVersion: review.contractVersion ?? contract.contractVersion,
      candidateRevision: review.candidateRevision ?? candidate,
      taskState: review.taskState ?? "review_pending"
    })),
    routing: contract.routing,
    at: value.at
  };
  for (const key of ["nextAction", "blockers", "activeAgents", "retryCounts", "requiredReviewers", "merge", "preview", "elapsedActiveSeconds", "timing"]) {
    if (value[key] !== undefined) checkpoint[key] = value[key];
  }
  writeJson(root, file, checkpoint);
  return run(root, ["state", "completion", "ingest", "--state", "harness/state.json", "--completion", file, "--contract", "harness/contract.json", "--now", value.now ?? "2026-09-11T00:01:00Z"]);
}

test("state is durable across tasks and uses one shared budget", () => {
  const root = fixtureRoot();
  try {
    initTask(root);
    const recorded = run(root, ["state", "budget", "record", "--file", "harness/state.json", "--seconds", "2700", "--now", "2026-09-11T00:45:00Z"]);
    assert.equal(recorded.ok, true);
    assert.equal(recorded.budget.activeElapsedSeconds, 2700);
    assert.equal(recorded.budget.softCheckpointDue, false);
    assert.equal(run(root, ["state", "budget", "checkpoint", "--file", "harness/state.json", "--now", "2026-09-11T00:45:00Z"]).ok, true);
    const replacementContract = readJson(root, "harness/contract.json");
    replacementContract.taskId = "replacement";
    replacementContract.attempt = 2;
    writeJson(root, "harness/replacement-contract.json", replacementContract);
    assert.equal(run(root, ["state", "task", "init", "--file", "harness/state.json", "--task-id", "replacement", "--attempt", "2", "--contract", "harness/replacement-contract.json", "--now", "2026-09-11T00:46:00Z"]).ok, true);
    const state = readJson(root, "harness/state.json");
    assert.equal(state.run.budget.activeElapsedSeconds, 2760);
    assert.equal(state.tasks.replacement.attempt, 2);
    const pause = run(root, ["state", "budget", "pause", "--file", "harness/state.json", "--workers-stopped", "--now", "2026-09-11T00:50:00Z"]);
    assert.equal(pause.ok, true);
    assert.equal(pause.budget.activeElapsedSeconds, 3000);
    assert.equal(run(root, ["state", "budget", "status", "--file", "harness/state.json", "--now", "2026-09-11T02:00:00Z"]).budget.activeElapsedSeconds, 3000);
    const extension = run(root, ["state", "budget", "extend", "--file", "harness/state.json", "--minutes", "10", "--authorized-by", "founder", "--reason", "explicit correction window", "--now", "2026-09-11T02:01:00Z"]);
    assert.equal(extension.ok, true);
    assert.equal(extension.budget.hardMinutes, null);
    assert.equal(extension.budget.activeElapsedSeconds, 3000);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("duplicate completion is idempotent and does not notify twice", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const event = { eventId: "event-1", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", deliveryState: "implemented", nextAction: "Review" };
    const first = completion(root, event);
    assert.equal(first.ok, true, JSON.stringify(first));
    assert.equal(first.applied, true);
    const duplicate = completion(root, event);
    assert.equal(duplicate.ok, true);
    assert.equal(duplicate.duplicate, true);
    const state = readJson(root, "harness/state.json");
    assert.equal(state.events.length, 1);
    assert.equal(state.notifications.length, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("safety-stop completions remain pending and the same event applies once after each stop clears", () => {
  const scenarios = [
    {
      name: "human pause",
      setup(root) {
        run(root, ["state", "budget", "pause", "--file", "harness/state.json", "--workers-stopped", "--now", "2026-09-11T00:01:00Z"]);
      },
      clear(root) {
        return run(root, ["state", "budget", "resume", "--file", "harness/state.json", "--now", "2026-09-11T00:03:00Z"]);
      },
      eventId: "human-stop-replay"
    },
  ];

  for (const scenario of scenarios) {
    const root = fixtureRoot();
    try {
      const { candidate } = gitRepo(root);
      initTask(root, { candidate });
      scenario.setup(root);
      const event = { eventId: scenario.eventId, taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", deliveryState: "implemented", now: "2026-09-11T00:02:00Z" };
      const held = completion(root, event);
      assert.equal(held.ok, true, `${scenario.name}: ${JSON.stringify(held)}`);
      assert.equal(held.withheld, true, scenario.name);
      assert.equal(held.archived, false, scenario.name);
      let state = readJson(root, "harness/state.json");
      assert.equal(state.pendingEvents.length, 1, scenario.name);
      assert.equal(state.pendingEvents[0].eventId, scenario.eventId, scenario.name);
      assert.equal(state.processedEventIds.includes(scenario.eventId), false, scenario.name);
      assert.equal(scenario.clear(root).ok, true, scenario.name);
      const applied = completion(root, { ...event, now: "2026-09-11T00:04:00Z" });
      assert.equal(applied.ok, true, `${scenario.name}: ${JSON.stringify(applied)}`);
      assert.equal(applied.applied, true, `${scenario.name}: ${JSON.stringify(applied)}`);
      assert.equal(applied.archived, false, scenario.name);
      const duplicate = completion(root, { ...event, now: "2026-09-11T00:05:00Z" });
      assert.equal(duplicate.duplicate, true, scenario.name);
      state = readJson(root, "harness/state.json");
      assert.equal(state.pendingEvents.length, 0, scenario.name);
      assert.equal(state.events.filter((item) => item.eventId === scenario.eventId).length, 1, scenario.name);
      assert.equal(state.notifications.filter((item) => item.eventId === scenario.eventId).length, 1, scenario.name);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("stale candidate completion is archived without advancement or notification", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const stale = completion(root, {
      eventId: "stale-1",
      taskId: "task-1",
      attempt: 1,
      candidateRevision: "2222222222222222222222222222222222222222",
      status: "PASS",
      deliveryState: "implemented"
    });
    assert.equal(stale.ok, true, JSON.stringify(stale));
    assert.equal(stale.archived, true);
    const state = readJson(root, "harness/state.json");
    assert.equal(state.tasks["task-1"].deliveryState, null);
    assert.equal(state.archivedEvents.length, 1);
    assert.equal(state.notifications.length, 0);
    assert.equal(completion(root, {
      eventId: "stale-1",
      taskId: "task-1",
      attempt: 1,
      candidateRevision: "2222222222222222222222222222222222222222",
      status: "PASS"
    }).duplicate, true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("duplicate and stale identity checks precede deadline and current-contract validation", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const event = { eventId: "ordering-event", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", deliveryState: "implemented" };
    assert.equal(completion(root, event).applied, true);
    assert.equal(run(root, ["state", "budget", "record", "--file", "harness/state.json", "--seconds", "7200", "--now", "2026-09-11T00:10:00Z"]).ok, true);
    let before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const afterDeadline = completion(root, { ...event, now: "2026-09-11T00:11:00Z" });
    assert.equal(afterDeadline.duplicate, true, JSON.stringify(afterDeadline));
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);

    rmSync(path.join(root, "harness/contract.json"));
    const malformedDuplicate = readJson(root, "harness/completion.json");
    malformedDuplicate.candidateRevision = "not-a-sha";
    malformedDuplicate.elapsedActiveSeconds = 999999;
    writeJson(root, "harness/malformed-duplicate.json", malformedDuplicate);
    before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const afterContractLoss = run(root, ["state", "completion", "ingest", "--state", "harness/state.json", "--completion", "harness/malformed-duplicate.json", "--contract", "harness/contract.json", "--now", "2026-09-11T00:12:00Z"]);
    assert.equal(afterContractLoss.duplicate, true, JSON.stringify(afterContractLoss));
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);

    const stale = readJson(root, "harness/completion.json");
    stale.eventId = "old-contract-event";
    stale.contractVersion = "state-test.v0";
    writeJson(root, "harness/old-contract-completion.json", stale);
    const staleResult = run(root, ["state", "completion", "ingest", "--state", "harness/state.json", "--completion", "harness/old-contract-completion.json", "--contract", "harness/contract.json", "--now", "2026-09-11T00:13:00Z"]);
    assert.equal(staleResult.ok, true, JSON.stringify(staleResult));
    assert.equal(staleResult.stale, true);
    assert.equal(staleResult.archived, true);
    const state = readJson(root, "harness/state.json");
    assert.equal(state.archivedEvents.at(-1).eventId, "old-contract-event");
    assert.equal(state.processedEventIds.includes("old-contract-event"), true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("invalid completion and failed delivery gates leave state byte-for-byte unchanged", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate, reviewers: "productDesign,qaRelease" });
    const before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const invalid = completion(root, { eventId: "bad", taskId: "task-1", attempt: 1, candidateRevision: "not-a-sha", status: "PASS" });
    assert.equal(invalid.ok, false);
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);
    const preview = run(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "preview_verified", "--preview", JSON.stringify({ servedRevision: candidate, httpStatus: 200 })]);
    assert.equal(preview.ok, false);
    assert.match(preview.error, /HTTP 200|functional|smoke|browser|visual|expected implemented/i);
    assert.equal(readJson(root, "harness/state.json").tasks["task-1"].deliveryState, null);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("long runs advance without extension and retain cumulative time across replacement tasks", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    // Persist legacy thresholds to verify compatibility without restoring gates.
    const legacy = readJson(root, "harness/state.json");
    Object.assign(legacy.run.budget, { hardMinutes: 120, softMinutes: 45, nextCheckpointElapsedSeconds: 2700 });
    writeJson(root, "harness/state.json", legacy);
    const recorded = run(root, ["state", "budget", "record", "--file", "harness/state.json", "--seconds", "86400", "--now", "2026-09-11T00:01:00Z"]);
    assert.equal(recorded.ok, true);
    assert.equal(recorded.budget.hardExceeded, true);
    assert.equal(recorded.budget.softCheckpointDue, true);
    const accepted = completion(root, { eventId: "after-long-run", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", deliveryState: "implemented" });
    assert.equal(accepted.ok, true, JSON.stringify(accepted));
    assert.equal(accepted.applied, true);
    const replacementContract = readJson(root, "harness/contract.json");
    replacementContract.taskId = "replacement";
    replacementContract.attempt = 2;
    writeJson(root, "harness/replacement-contract.json", replacementContract);
    const replacement = run(root, ["state", "task", "init", "--file", "harness/state.json", "--task-id", "replacement", "--attempt", "2", "--contract", "harness/replacement-contract.json", "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(replacement.ok, true, JSON.stringify(replacement));
    const state = readJson(root, "harness/state.json");
    assert.equal(state.run.budget.activeElapsedSeconds, 86460);
    assert.equal(state.tasks.replacement.attempt, 2);
    assert.equal(state.pendingEvents.length, 0);
    const compatibility = run(root, ["state", "budget", "extend", "--file", "harness/state.json", "--minutes", "10", "--now", "2026-09-11T00:03:00Z"]);
    assert.equal(compatibility.ok, true, JSON.stringify(compatibility));
    assert.equal(compatibility.budget.hardMinutes, 120);
    assert.equal(compatibility.budget.activeElapsedSeconds, 86520);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("review carry-forward requires immutable descendant scope proof", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const reviewed = completion(root, {
      eventId: "reviewed-1",
      taskId: "task-1",
      attempt: 1,
      candidateRevision: candidate,
      status: "PASS",
      deliveryState: "implemented",
      reviews: [{ role: "qaRelease", candidateRevision: candidate, result: "PASS", scope: ["unrelated/**"], acceptanceCriteria: ["AC-01"], checks: ["CHECK-01"], evidence: [{ path: "tracked.txt", sha256: sha256(path.join(root, "tracked.txt")) }] }]
    });
    assert.equal(reviewed.ok, true, JSON.stringify(reviewed));
    const rootState = readJson(root, "harness/state.json");
    rootState.tasks["task-1"].deliveryState = "reviewed";
    Object.assign(rootState.run.budget, { hardMinutes: 120, softMinutes: 45, nextCheckpointElapsedSeconds: 2700, activeElapsedSeconds: 86400 });
    writeJson(root, "harness/state.json", rootState);
    writeFileSync(path.join(root, "new-file.txt"), "new\n");
    git(root, ["add", "new-file.txt"]);
    git(root, ["commit", "-qm", "correction"]);
    const replacement = git(root, ["rev-parse", "HEAD"]);
    const carried = run(root, ["state", "review", "carry-forward", "--state", "harness/state.json", "--task-id", "task-1", "--candidate-revision", replacement, "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(carried.ok, true);
    assert.equal(carried.carried.length, 1);
    assert.equal(carried.carried[0].carryForwardProof.unaffected, true);
    const state = readJson(root, "harness/state.json");
    assert.equal(state.tasks["task-1"].candidateRevision, replacement);
    state.tasks["task-1"].reviews[0].scope = undefined;
    writeJson(root, "harness/state.json", state);
    const rejected = run(root, ["state", "review", "carry-forward", "--state", "harness/state.json", "--task-id", "task-1", "--candidate-revision", candidate, "--now", "2026-09-11T00:03:00Z"]);
    assert.equal(rejected.ok, false);
    assert.match(rejected.error, /reviewed|descend|candidate|scope/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("merged delivery cannot be spoofed by a pushed flag without Git ancestry and upstream proof", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const state = readJson(root, "harness/state.json");
    state.tasks["task-1"].deliveryState = "accepted";
    writeJson(root, "harness/state.json", state);
    const before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const result = run(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "merged", "--merge", JSON.stringify({ targetBranch: "master", pushed: true })]);
    assert.equal(result.ok, false);
    assert.match(result.error, /upstream|push|clean|ancestor/i);
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("Git checkpoint generation supplies full paths and hashes without fabricating PASS", () => {
  const root = fixtureRoot();
  try {
    const { base, candidate } = gitRepo(root);
    const contract = JSON.parse(readFileSync(path.join(root, "harness/templates/bounded-task.example.json"), "utf8"));
    contract.repo = "harness";
    contract.baseRevision = base;
    contract.writeScope = ["tracked.txt"];
    contract.taskId = "git-task";
    writeJson(root, "harness/contract.json", contract);
    const generated = run(root, ["handoff", "checkpoint", "generate", "--contract", "harness/contract.json", "--output", "harness/generated.json", "--candidate", candidate, "--now", "2026-09-11T00:00:00Z"]);
    assert.equal(generated.ok, true);
    const checkpoint = readJson(root, "harness/generated.json");
    assert.equal(checkpoint.status, "PARTIAL");
    assert.equal(checkpoint.judgment.passClaimed, false);
    assert.equal(checkpoint.checks[0].result, "PARTIAL");
    assert.equal(checkpoint.filesChanged[0].fullPath, path.join(root, "tracked.txt"));
    assert.match(checkpoint.filesChanged[0].sha256, /^[a-f0-9]{64}$/);
    assert.equal(checkpoint.gitMetadata.candidateRevision, candidate);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("state task initialization requires a validated contract binding", () => {
  const root = fixtureRoot();
  try {
    assert.equal(run(root, ["state", "init", "--file", "harness/state.json", "--run-id", "run-1", "--now", "2026-09-11T00:00:00Z"]).ok, true);
    const missing = run(root, ["state", "task", "init", "--file", "harness/state.json", "--task-id", "task-1", "--now", "2026-09-11T00:00:00Z"]);
    assert.equal(missing.ok, false);
    assert.match(missing.error, /contract file/i);
    assert.deepEqual(readJson(root, "harness/state.json").tasks, {});
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("state init --force cannot replace the authoritative run or budget", () => {
  const root = fixtureRoot();
  try {
    assert.equal(run(root, ["state", "init", "--file", "harness/state.json", "--run-id", "run-1", "--now", "2026-09-11T00:00:00Z"]).ok, true);
    assert.equal(run(root, ["state", "budget", "record", "--file", "harness/state.json", "--seconds", "17", "--now", "2026-09-11T00:01:00Z"]).ok, true);
    const before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const forced = run(root, ["state", "init", "--force", "--file", "harness/state.json", "--run-id", "replacement-run", "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(forced.ok, false, JSON.stringify(forced));
    assert.match(forced.error, /refus|authoritative|force|budget/i);
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("same-version contract content mutation is rejected by the immutable digest", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const contract = readJson(root, "harness/contract.json");
    contract.goal = "A content mutation with no contract-version change.";
    writeJson(root, "harness/contract.json", contract);
    const before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const result = completion(root, { eventId: "mutated-contract", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS" });
    assert.equal(result.ok, false, JSON.stringify(result));
    assert.match(result.error, /content hash|immutable|contract/i);
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("telemetry excludes pre-dispatch wall time and supports optional legacy checkpoint reminders", () => {
  const root = fixtureRoot();
  try {
    assert.equal(run(root, ["state", "init", "--file", "harness/state.json", "--run-id", "run-1", "--now", "2026-09-11T00:00:00Z"]).ok, true);
    const legacy = readJson(root, "harness/state.json");
    Object.assign(legacy.run.budget, { softMinutes: 45, nextCheckpointElapsedSeconds: 2700 });
    writeJson(root, "harness/state.json", legacy);
    const beforeDispatch = run(root, ["state", "budget", "status", "--file", "harness/state.json", "--now", "2026-09-11T02:00:00Z"]);
    assert.equal(beforeDispatch.budget.activeElapsedSeconds, 0);
    initTask(root);
    const first = run(root, ["state", "budget", "record", "--file", "harness/state.json", "--seconds", "2700", "--now", "2026-09-11T00:45:00Z"]);
    assert.equal(first.budget.softCheckpointDue, true);
    const ack = run(root, ["state", "budget", "checkpoint", "--file", "harness/state.json", "--now", "2026-09-11T00:45:00Z"]);
    assert.equal(ack.ok, true);
    assert.equal(ack.budget.checkpointCount, 1);
    assert.equal(ack.budget.softCheckpointDue, false);
    const next = run(root, ["state", "budget", "record", "--file", "harness/state.json", "--seconds", "2700", "--now", "2026-09-11T01:30:00Z"]);
    assert.equal(next.budget.softCheckpointDue, true);
    assert.equal(next.budget.nextCheckpointElapsedSeconds, 5400);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("completion policy, retry counters, and timestamps remain worker-untrusted", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const override = completion(root, { eventId: "policy-override", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", deliveryState: "implemented", requiredReviewers: ["builder"] });
    assert.equal(override.ok, false);
    assert.match(override.error, /reviewer|trusted|override/i);
    const first = completion(root, { eventId: "retry-up", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", retryCounts: { implementation: 1, testDebug: 0, reviewFix: 0 } });
    assert.equal(first.ok, true, JSON.stringify(first));
    const before = readFileSync(path.join(root, "harness/state.json"), "utf8");
    const decrease = completion(root, { eventId: "retry-down", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", retryCounts: { implementation: 0, testDebug: 0, reviewFix: 0 } });
    assert.equal(decrease.ok, false);
    assert.match(decrease.error, /decrease|authoritative/i);
    assert.equal(readFileSync(path.join(root, "harness/state.json"), "utf8"), before);
    const future = completion(root, { eventId: "future-time", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", at: "2099-01-01T00:00:00Z" });
    assert.equal(future.ok, true, JSON.stringify(future));
    assert.ok(readJson(root, "harness/state.json").run.budget.activeElapsedSeconds < 120 * 60);
    const elapsed = completion(root, { eventId: "untrusted-elapsed", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", elapsedActiveSeconds: 999999 });
    assert.equal(elapsed.ok, false);
    assert.match(elapsed.error, /elapsedActiveSeconds|trusted/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("preview verification uses the trusted contract HTTP origin and fetched build identity", async () => {
  let requests = 0;
  const buildEvidence = (candidate) => JSON.stringify({ buildId: "build-1", candidateRevision: candidate });
  const server = await startHttpServer((_request, response) => {
    requests += 1;
    response.writeHead(200, { "content-type": "application/json" });
    response.end(buildEvidence(candidate));
  });
  const root = fixtureRoot();
  let candidate;
  try {
    ({ candidate } = gitRepo(root));
    initTask(root, { candidate, previewOrigin: server.origin });
    assert.equal(completion(root, { eventId: "implemented-preview", taskId: "task-1", attempt: 1, candidateRevision: candidate, status: "PASS", deliveryState: "implemented" }).ok, true);
    const state = readJson(root, "harness/state.json");
    state.tasks["task-1"].deliveryState = "merged";
    writeJson(root, "harness/state.json", state);
    const checkHash = sha256(path.join(root, "tracked.txt"));
    const body = buildEvidence(candidate);
    const preview = await runAsync(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "preview_verified", "--preview", JSON.stringify({ servedRevision: "build-1", buildIdEvidence: { url: `${server.origin}/build-id.json`, sha256: sha256Text(body) }, checks: [{ method: "browser smoke", result: "PASS", evidencePath: "tracked.txt", sha256: checkHash }] }), "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(preview.ok, true, JSON.stringify(preview));
    assert.equal(preview.deliveryState, "preview_verified");
    assert.equal(preview.proof.approvedOrigin, server.origin);
    assert.equal(requests, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
    await stopHttpServer(server.server);
  }
});

test("payload-selected preview origin is rejected before any fetch", async () => {
  let trustedRequests = 0;
  let selectedRequests = 0;
  const trusted = await startHttpServer((_request, response) => {
    trustedRequests += 1;
    response.writeHead(200);
    response.end("not expected");
  });
  const selected = await startHttpServer((_request, response) => {
    selectedRequests += 1;
    response.writeHead(200);
    response.end("not expected");
  });
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate, previewOrigin: trusted.origin });
    const state = readJson(root, "harness/state.json");
    state.tasks["task-1"].deliveryState = "merged";
    writeJson(root, "harness/state.json", state);
    const body = JSON.stringify({ buildId: "build-1", candidateRevision: candidate });
    const result = await runAsync(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "preview_verified", "--preview", JSON.stringify({ approvedOrigin: selected.origin, servedRevision: "build-1", buildIdEvidence: { url: `${selected.origin}/build-id.json`, sha256: sha256Text(body) }, checks: [{ method: "browser smoke", result: "PASS", evidencePath: "tracked.txt", sha256: sha256(path.join(root, "tracked.txt")) }] }), "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(result.ok, false, JSON.stringify(result));
    assert.match(result.error, /trusted task contract|does not match|origin/i);
    assert.equal(trustedRequests, 0);
    assert.equal(selectedRequests, 0);
    assert.equal(readJson(root, "harness/state.json").tasks["task-1"].deliveryState, "merged");
  } finally {
    rmSync(root, { recursive: true, force: true });
    await stopHttpServer(trusted.server);
    await stopHttpServer(selected.server);
  }
});

test("preview redirects are rejected even when the artifact URL starts on the trusted origin", async () => {
  let requests = 0;
  const server = await startHttpServer((_request, response) => {
    requests += 1;
    response.writeHead(302, { location: "/build-id.json" });
    response.end();
  });
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate, previewOrigin: server.origin });
    const state = readJson(root, "harness/state.json");
    state.tasks["task-1"].deliveryState = "merged";
    writeJson(root, "harness/state.json", state);
    const result = await runAsync(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "preview_verified", "--preview", JSON.stringify({ servedRevision: "build-1", buildIdEvidence: { url: `${server.origin}/build-id.json`, sha256: "a".repeat(64) }, checks: [{ method: "browser smoke", result: "PASS", evidencePath: "tracked.txt", sha256: sha256(path.join(root, "tracked.txt")) }] }), "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(result.ok, false, JSON.stringify(result));
    assert.match(result.error, /fetch|redirect|curl/i);
    assert.equal(requests, 1);
    assert.equal(readJson(root, "harness/state.json").tasks["task-1"].deliveryState, "merged");
  } finally {
    rmSync(root, { recursive: true, force: true });
    await stopHttpServer(server.server);
  }
});

test("preview verification rejects local identity files and missing trusted origins without fetching", async () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate, previewOrigin: "http://127.0.0.1:43123" });
    const state = readJson(root, "harness/state.json");
    state.tasks["task-1"].deliveryState = "merged";
    writeJson(root, "harness/state.json", state);
    const buildEvidence = JSON.stringify({ buildId: "build-1", candidateRevision: candidate });
    writeFileSync(path.join(root, "build-id.json"), buildEvidence);
    const local = await runAsync(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "preview_verified", "--preview", JSON.stringify({ servedRevision: "build-1", buildIdEvidence: { path: "build-id.json", sha256: sha256(path.join(root, "build-id.json")) }, checks: [{ method: "browser smoke", result: "PASS", evidencePath: "tracked.txt", sha256: sha256(path.join(root, "tracked.txt")) }] }), "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(local.ok, false, JSON.stringify(local));
    assert.match(local.error, /URL|local|origin|fetch/i);

    const missingRoot = fixtureRoot();
    let missingServer;
    let missingRequests = 0;
    try {
      missingServer = await startHttpServer((_request, response) => {
        missingRequests += 1;
        response.writeHead(200);
        response.end("not expected");
      });
      const { candidate: missingCandidate } = gitRepo(missingRoot);
      initTask(missingRoot, { candidate: missingCandidate });
      const missingState = readJson(missingRoot, "harness/state.json");
      missingState.tasks["task-1"].deliveryState = "merged";
      writeJson(missingRoot, "harness/state.json", missingState);
      const missingBody = JSON.stringify({ buildId: "build-1", candidateRevision: missingCandidate });
      const missingTrusted = await runAsync(missingRoot, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-1", "--delivery-state", "preview_verified", "--preview", JSON.stringify({ servedRevision: "build-1", buildIdEvidence: { url: `${missingServer.origin}/build-id.json`, sha256: sha256Text(missingBody) }, checks: [{ method: "browser smoke", result: "PASS", evidencePath: "tracked.txt", sha256: sha256(path.join(missingRoot, "tracked.txt")) }] }), "--now", "2026-09-11T00:03:00Z"]);
      assert.equal(missingTrusted.ok, false, JSON.stringify(missingTrusted));
      assert.match(missingTrusted.error, /trusted previewOrigin|no fetch|contract/i);
      assert.equal(missingRequests, 0);
    } finally {
      rmSync(missingRoot, { recursive: true, force: true });
      if (missingServer) await stopHttpServer(missingServer.server);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("delivery verification is idempotent and generated checkpoint IDs include task identity", () => {
  const root = fixtureRoot();
  try {
    const { base, candidate } = gitRepo(root);
    initTask(root, { candidate, taskId: "task-a" });
    const second = readJson(root, "harness/contract.json");
    second.taskId = "task-b";
    writeJson(root, "harness/contract-b.json", second);
    assert.equal(run(root, ["state", "task", "init", "--file", "harness/state.json", "--task-id", "task-b", "--contract", "harness/contract-b.json", "--candidate-revision", candidate, "--now", "2026-09-11T00:00:00Z"]).ok, true);
    const first = run(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-a", "--delivery-state", "implemented", "--now", "2026-09-11T00:01:00Z"]);
    assert.equal(first.ok, true, JSON.stringify(first));
    const secondCall = run(root, ["state", "delivery", "verify", "--state", "harness/state.json", "--task-id", "task-a", "--delivery-state", "implemented", "--now", "2026-09-11T00:02:00Z"]);
    assert.equal(secondCall.duplicate, true);
    const state = readJson(root, "harness/state.json");
    assert.equal(state.events.filter((event) => event.eventType === "delivery-verify").length, 1);
    const contractA = readJson(root, "harness/contract.json");
    const contractB = readJson(root, "harness/contract-b.json");
    const a = run(root, ["handoff", "checkpoint", "generate", "--contract", "harness/contract.json", "--output", "harness/a.json", "--candidate", candidate, "--now", "2026-09-11T00:00:00Z"]);
    const b = run(root, ["handoff", "checkpoint", "generate", "--contract", "harness/contract-b.json", "--output", "harness/b.json", "--candidate", candidate, "--now", "2026-09-11T00:00:00Z"]);
    assert.equal(a.ok, true);
    assert.equal(b.ok, true);
    assert.notEqual(readJson(root, "harness/a.json").eventId, readJson(root, "harness/b.json").eventId);
    void base; void contractA; void contractB;
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("Git checkpoint generation accepts a tree candidate", () => {
  const root = fixtureRoot();
  try {
    const { base } = gitRepo(root);
    const contract = JSON.parse(readFileSync(path.join(root, "harness/templates/bounded-task.example.json"), "utf8"));
    contract.repo = "harness";
    contract.baseRevision = base;
    contract.writeScope = ["tracked.txt"];
    contract.taskId = "tree-task";
    writeJson(root, "harness/tree-contract.json", contract);
    const tree = git(root, ["rev-parse", "HEAD^{tree}"]);
    const generated = run(root, ["handoff", "checkpoint", "generate", "--contract", "harness/tree-contract.json", "--output", "harness/tree-checkpoint.json", "--candidate", tree, "--now", "2026-09-11T00:00:00Z"]);
    assert.equal(generated.ok, true, JSON.stringify(generated));
    const checkpoint = readJson(root, "harness/tree-checkpoint.json");
    assert.equal(checkpoint.gitMetadata.candidateKind, "tree");
    assert.equal(checkpoint.candidateRevision, tree);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("completion template supports ingestion after binding real fixture identities and evidence", () => {
  const root = fixtureRoot();
  try {
    const { candidate } = gitRepo(root);
    initTask(root, { candidate });
    const contract = readJson(root, "harness/contract.json");
    const example = readJson(root, "harness/templates/completion.example.json");
    assert.equal(Object.hasOwn(example, "elapsedActiveSeconds"), false);
    // Replace illustrative identities and evidence with this synthetic test run.
    Object.assign(example, {
      contractVersion: contract.contractVersion, taskId: contract.taskId,
      attempt: contract.attempt, repo: contract.repo,
      baseRevision: contract.baseRevision, candidateRevision: candidate,
      routing: contract.routing
    });
    example.evidence[0].path = "tracked.txt";
    example.evidence[0].sha256 = sha256(path.join(root, "tracked.txt"));
    writeJson(root, "harness/template-completion.json", example);
    const result = run(root, ["state", "completion", "ingest", "--state", "harness/state.json", "--completion", "harness/template-completion.json", "--contract", "harness/contract.json", "--now", "2026-09-11T00:01:00Z"]);
    assert.equal(result.ok, true, JSON.stringify(result));
    assert.equal(result.applied, true);
    assert.equal(readJson(root, "harness/state.json").tasks["task-1"].deliveryState, "implemented");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
