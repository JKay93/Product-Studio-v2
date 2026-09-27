import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

const sourceRoot = path.resolve(import.meta.dirname, "..", "..");

function copyStudio() {
  const target = mkdtempSync(path.join(tmpdir(), "dexter-bounded-handoff-"));
  cpSync(sourceRoot, target, {
    recursive: true,
    // These fixtures exercise harness contracts/indexing, not historical media.
    filter: (source) => !path.relative(sourceRoot, source).split(path.sep)
      .some((part) => [".git", ".runtime", "EVIDENCE", "node_modules"].includes(part))
  });
  return target;
}

function run(root, args) {
  try {
    return JSON.parse(execFileSync("node", ["harness/cli.mjs", ...args], { cwd: root, encoding: "utf8" }));
  } catch (error) {
    return JSON.parse(error.stdout);
  }
}

function readFixture(root, name) {
  return JSON.parse(readFileSync(path.join(root, "harness", "templates", name), "utf8"));
}

function writeFixture(root, name, value) {
  const file = path.join(root, "harness", "templates", name);
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
  return file;
}

function checkpoint(root, mutate = () => {}) {
  const contract = readFixture(root, "bounded-task.example.json");
  const value = readFixture(root, "bounded-checkpoint.example.json");
  mutate(value, contract);
  const checkpointFile = writeFixture(root, "bounded-checkpoint.test.json", value);
  const contractFile = writeFixture(root, "bounded-task.test.json", contract);
  return { checkpointFile, contractFile };
}

test("approved routing is explicit, child-isolated, and advisory", () => {
  const root = copyStudio();
  try {
    const result = run(root, ["handoff", "routing", "validate"]);
    assert.equal(result.ok, true);
    const routing = JSON.parse(readFileSync(path.join(root, "harness", "role-routing.json"), "utf8"));
    assert.equal(routing.activation.autoSessionChange, false);
    for (const role of Object.values(routing.roles)) assert.equal(role.fork_turns, "none");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("malformed nested task fields return structured validation errors", () => {
  const root = copyStudio();
  try {
    const contract = readFixture(root, "bounded-task.example.json");
    contract.acceptanceCriteria = { id: "AC-01" };
    contract.checks = [null];
    contract.evidenceMatrix = "not-an-array";
    const file = writeFixture(root, "malformed-task.test.json", contract);
    const result = run(root, ["handoff", "contract", "validate", "--file", path.relative(root, file)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => error.includes("acceptanceCriteria must be")));
    assert(result.errors.some((error) => error.includes("checks[0] must be an object")));
    assert(result.errors.some((error) => error.includes("evidenceMatrix must be")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("write scope rejects traversal and out-of-scope changed files", () => {
  const root = copyStudio();
  try {
    const traversal = readFixture(root, "bounded-task.example.json");
    traversal.writeScope = ["../outside"];
    const traversalFile = writeFixture(root, "traversal-task.test.json", traversal);
    const traversalResult = run(root, ["handoff", "contract", "validate", "--file", path.relative(root, traversalFile)]);
    assert.equal(traversalResult.ok, false);
    assert(traversalResult.errors.some((error) => error.includes("must not traverse")));

    const files = checkpoint(root, (value) => {
      value.filesChanged = [{ path: "docs/unapproved.md", change: "modified" }];
    });
    const fileResult = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(fileResult.ok, false);
    assert(fileResult.errors.some((error) => error.includes("outside writeScope")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("PASS requires every acceptance, required check, and evidence item", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value) => {
      value.checks = [];
      value.acceptanceCriteria = [];
      value.evidence = [];
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => error.includes("requires acceptance id AC-01")));
    assert(result.errors.some((error) => error.includes("requires check CHECK-01")));
    assert(result.errors.some((error) => error.includes("missing evidence matrix item E-01")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("pause and exhausted retries block advancement", () => {
  for (const mutate of [
    (value) => { value.taskState = "paused"; value.paused = true; },
    (value) => { value.retryCounts = { implementation: 3, testDebug: 0, reviewFix: 0 }; }
  ]) {
    const root = copyStudio();
    try {
      const files = checkpoint(root, mutate);
      const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile), "--now", "2026-09-10T00:00:00Z"]);
      assert.equal(result.ok, false);
      assert(result.errors.some((error) => /blocked|deadline|budget/i.test(error)));
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("duplicate event identity cannot advance a task twice", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value) => {
      value.events = [
        { eventId: "duplicate", taskId: value.taskId, attempt: value.attempt },
        { eventId: "duplicate", taskId: value.taskId, attempt: value.attempt }
      ];
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => /duplicate event|duplicate task attempt/i.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("processed events and exhausted retry states remain blocked", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value) => {
      value.events = [{ eventId: "already-processed", taskId: value.taskId, attempt: value.attempt }];
      value.processedEventIds = ["already-processed"];
      value.taskState = "retry";
      value.status = "FAILED";
      value.retryCounts = { implementation: 2, testDebug: 0, reviewFix: 0 };
      value.unresolved = ["Implementation retry budget exhausted."];
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => error.includes("duplicate processed event id")));
    assert(result.errors.some((error) => error.includes("retry budget exhausted")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("candidate revisions are immutable and stale candidate events cannot advance", () => {
  const root = copyStudio();
  try {
    const mutable = checkpoint(root, (value) => {
      value.candidateRevision = "working-tree-candidate";
    });
    const mutableResult = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, mutable.checkpointFile), "--contract", path.relative(root, mutable.contractFile)]);
    assert.equal(mutableResult.ok, false);
    assert(mutableResult.errors.some((error) => /immutable|SHA/i.test(error)));

    const stale = checkpoint(root, (value) => {
      value.events = [{
        eventId: "stale-candidate",
        taskId: value.taskId,
        attempt: value.attempt,
        candidateRevision: "2222222222222222222222222222222222222222"
      }];
    });
    const staleResult = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, stale.checkpointFile), "--contract", path.relative(root, stale.contractFile)]);
    assert.equal(staleResult.ok, false);
    assert(staleResult.errors.some((error) => /stale event|candidateRevision does not match/i.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("accepted PASS requires candidate-bound independent reviews", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value) => {
      value.taskState = "accepted";
      value.reviewState = "review_pending";
      value.reviews = ["builder", "productDesign", "qaRelease"].map((role) => ({
        role,
        taskId: value.taskId,
        attempt: value.attempt,
        contractVersion: value.contractVersion,
        candidateRevision: value.candidateRevision,
        taskState: "review_pending",
        result: "PASS"
      }));
      value.reviews[2].candidateRevision = "different-candidate";
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => error.includes("candidateRevision does not match")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("unknown actual routing stays distinct from confirmed routing", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value) => {
      value.routing.actual.status = "confirmed";
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => /roles is required|observedAt is required/i.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("confirmed routing must match its configured model policy", () => {
  const root = copyStudio();
  try {
    const routingFile = path.join(root, "harness", "role-routing.json");
    const routing = JSON.parse(readFileSync(routingFile, "utf8"));
    routing.actualRouting = {
      status: "confirmed",
      observedAt: "2026-09-10T00:00:00Z",
      roles: {
        orchestrator: { model: "gpt-6-astra", reasoning_effort: "low", fork_turns: "none" },
        builder: { model: "gpt-5.5", reasoning_effort: "max", fork_turns: "none" },
        productDesign: { model: "gpt-5.6-sol", reasoning_effort: "medium", fork_turns: "none" },
        qaRelease: { model: "gpt-5.6-sol", reasoning_effort: "medium", fork_turns: "none" }
      }
    };
    writeFileSync(routingFile, `${JSON.stringify(routing, null, 2)}\n`);
    const result = run(root, ["handoff", "routing", "validate"]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => error.includes("model must be")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("accepted implementation PASS cannot be accepted by Builder alone", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value, contract) => {
      contract.requiredReviewers = ["builder"];
      value.taskState = "accepted";
      value.reviewState = "review_pending";
      value.reviews = [{
        role: "builder",
        taskId: value.taskId,
        attempt: value.attempt,
        contractVersion: value.contractVersion,
        candidateRevision: value.candidateRevision,
        taskState: "review_pending",
        result: "PASS"
      }];
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, false);
    assert(result.errors.some((error) => /independent|builder alone/i.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("planning checkpoint preserves an explicit null candidate revision", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value, contract) => {
      contract.mode = "technical-plan";
      contract.candidateRevision = null;
      value.mode = "technical-plan";
      value.candidateRevision = null;
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile)]);
    assert.equal(result.ok, true);
    assert.equal(result.candidateRevision, null);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("expired legacy deadlines and minute thresholds are informational", () => {
  const root = copyStudio();
  try {
    const files = checkpoint(root, (value, contract) => {
      contract.stopBudget.deadlineAt = "2020-01-01T00:00:00Z";
      contract.stopBudget.maxMinutes = 1;
      value.taskState = "accepted";
      value.reviews = ["builder", "qaRelease"].map((role) => ({
        role, taskId: value.taskId, attempt: value.attempt, contractVersion: value.contractVersion,
        candidateRevision: value.candidateRevision, taskState: "review_pending", result: "PASS"
      }));
      value.checkedAt = "2026-09-10T00:00:00Z";
    });
    const result = run(root, ["handoff", "checkpoint", "validate", "--file", path.relative(root, files.checkpointFile), "--contract", path.relative(root, files.contractFile), "--now", "2026-09-10T00:00:00Z"]);
    assert.equal(result.ok, true, JSON.stringify(result));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("configured models and optional product manager routing are not hard-coded", () => {
  const root = copyStudio();
  try {
    const file = path.join(root, "harness", "role-routing.json");
    const routing = JSON.parse(readFileSync(file, "utf8"));
    routing.roles.builder.model = "configured-builder-model";
    routing.roles.builder.reasoning_effort = "high";
    routing.roles.productManager = { model: "configured-pm-model", reasoning_effort: "medium", fork_turns: "none" };
    routing.actualRouting = { status: "unknown" };
    writeFileSync(file, JSON.stringify(routing));
    const result = run(root, ["handoff", "routing", "validate"]);
    assert.equal(result.ok, true, JSON.stringify(result));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
