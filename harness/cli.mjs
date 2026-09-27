#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, realpathSync, statSync } from "node:fs";
import path from "node:path";
import { buildIndex, retrieve } from "./retrieval.mjs";
import {
  validateCheckpoint,
  validateHandoff,
  validateRoleRouting,
  validateTaskContract
} from "./bounded-handoff.mjs";
import {
  addTaskToState,
  carryForwardReviews,
  createRunState,
  generateGitCheckpoint,
  hashFileSha256,
  ingestCompletion,
  normalizeGitCheckpoint,
  readState,
  updateBudget,
  validateRunState,
  verifyDelivery,
  withStateFileLock,
  writeJsonAtomic
} from "./state.mjs";

const REQUIRED_NON_TRIVIAL_GATES = ["contractScope", "buildReviewQa"];
const STATUSES = new Set(["planned", "in_progress", "review_pending", "accepted", "retry", "blocked", "escalated"]);
const CLASSIFICATIONS = new Set(["tiny", "non-trivial"]);

function parseArgs(argv) {
  const positional = [];
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value.startsWith("--")) {
      positional.push(value);
      continue;
    }
    const key = value.slice(2);
    const next = argv[index + 1];
    if (next === undefined || next.startsWith("--")) {
      options[key] = true;
    } else {
      options[key] = next;
      index += 1;
    }
  }
  return { positional, options };
}

function findRoot(start = path.resolve(import.meta.dirname, '..')) {
  let current = path.resolve(start);
  while (true) {
    if (existsSync(path.join(current, "AGENTS.md")) &&
        existsSync(path.join(current, "package.json"))) {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error("Could not find Product Studio root.");
    }
    current = parent;
  }
}

function repoPath(root, ...parts) {
  return path.join(root, ...parts);
}

function relativePath(root, filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function readJson(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`${filePath}: invalid JSON: ${error.message}`);
  }
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hashText(value) {
  return createHash("sha256").update(value).digest("hex");
}

function hashFile(filePath) {
  return createHash("sha256").update(readFileSync(filePath)).digest("hex");
}

function stable(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stable).join(",")}]`;
  }
  if (isObject(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function ledgerEventHash(event) {
  const { eventHash: _eventHash, ...rest } = event;
  return hashText(stable(rest));
}

function runNodeScript(root, scriptPath) {
  try {
    const output = execFileSync("node", [scriptPath], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    });
    return { ok: true, command: `node ${scriptPath}`, output: output.trim() };
  } catch (error) {
    return {
      ok: false,
      command: `node ${scriptPath}`,
      output: `${error.stdout ?? ""}${error.stderr ?? ""}`.trim()
    };
  }
}

function validateLiteRun(root, filePath) {
  const absolute = path.resolve(root, filePath);
  const run = readJson(absolute);
  const errors = [];

  if (run.schema !== "dexter.product_studio.lite_run.v1") {
    errors.push("schema must be dexter.product_studio.lite_run.v1");
  }
  if (!hasText(run.id)) errors.push("id is required");
  if (!hasText(run.product)) errors.push("product is required");
  if (!hasText(run.title)) errors.push("title is required");
  if (!STATUSES.has(run.status)) errors.push(`status must be one of ${Array.from(STATUSES).join(", ")}`);
  if (!CLASSIFICATIONS.has(run.classification)) errors.push("classification must be tiny or non-trivial");
  if (!isObject(run.contract)) errors.push("contract is required");
  if (!Array.isArray(run.contract?.acceptanceCriteria) || run.contract.acceptanceCriteria.length === 0) {
    errors.push("contract.acceptanceCriteria must contain at least one criterion");
  }
  if (!Array.isArray(run.requiredGates)) errors.push("requiredGates must be an array");
  if (!isObject(run.gates)) errors.push("gates must be an object");

  if (run.classification === "non-trivial") {
    for (const gate of REQUIRED_NON_TRIVIAL_GATES) {
      if (!run.requiredGates?.includes(gate)) {
        errors.push(`non-trivial run must require ${gate}`);
      }
    }
  }

  const unresolvedHardStops = (run.contract?.hardStops ?? [])
    .filter((stop) => stop && stop.resolved !== true);
  if (run.status === "accepted" && unresolvedHardStops.length > 0) {
    errors.push("accepted run cannot contain unresolved hard stops");
  }

  for (const gate of run.requiredGates ?? []) {
    const record = run.gates?.[gate];
    if (!isObject(record)) {
      errors.push(`required gate ${gate} is missing`);
      continue;
    }
    if (run.status === "accepted" && record.status !== "passed") {
      errors.push(`accepted run requires passed ${gate} gate`);
    }
    if (record.status === "passed" && !hasText(record.verdict)) {
      errors.push(`passed gate ${gate} requires verdict`);
    }
    for (const evidence of record.evidence ?? []) {
      if (!hasText(evidence.path)) {
        errors.push(`gate ${gate} has evidence without path`);
        continue;
      }
      const evidencePath = path.resolve(root, evidence.path);
      const relative = path.relative(root, evidencePath);
      const outside = (value) => value === '..' || value.startsWith(`..${path.sep}`) || path.isAbsolute(value);
      if (outside(relative) || !existsSync(evidencePath) || !statSync(evidencePath).isFile() ||
          outside(path.relative(realpathSync(root), realpathSync(evidencePath)))) {
        errors.push(`gate ${gate} evidence path missing: ${evidence.path}`);
        continue;
      }
      if (hasText(evidence.sha256) && hashFile(evidencePath) !== evidence.sha256) {
        errors.push(`gate ${gate} evidence hash mismatch: ${evidence.path}`);
      }
    }
  }

  let previousHash = "ROOT";
  for (const [index, event] of (run.ledger ?? []).entries()) {
    if (event.previousHash !== previousHash) {
      errors.push(`ledger event ${index} previousHash mismatch`);
    }
    const expected = ledgerEventHash(event);
    if (event.eventHash !== expected) {
      errors.push(`ledger event ${index} eventHash mismatch`);
    }
    previousHash = event.eventHash;
  }

  return { ok: errors.length === 0, file: relativePath(root, absolute), errors };
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function finalizeRun(root, filePath) {
  const validation = validateLiteRun(root, filePath);
  const errors = [...validation.errors];

  const status = git(root, ["status", "--porcelain"]);
  if (status.length > 0) {
    errors.push("repository must be clean before finalize");
  }

  let head = "";
  let upstream = "";
  try {
    head = git(root, ["rev-parse", "HEAD"]);
    upstream = git(root, ["rev-parse", "@{u}"]);
  } catch {
    errors.push("current branch must have an upstream before finalize");
  }
  if (head && upstream && head !== upstream) {
    errors.push("HEAD must match the pushed upstream before finalize");
  }

  return { ok: errors.length === 0, file: validation.file, head, upstream, errors };
}

function check(root) {
  const roleRouting = validateRoleRouting(root);
  const index = buildIndex(root);
  return { ok: roleRouting.ok && index.ok, roleRouting, index };
}

function print(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function stateFileOption(options) {
  return options.file ?? options.state ?? options.stateFile ?? "harness/state.json";
}

function requireOption(options, names, label) {
  for (const name of names) {
    if (options[name] !== undefined && options[name] !== true) return options[name];
  }
  throw new Error(`${label} is required`);
}

function stateInit(root, options) {
  const file = stateFileOption(options);
  return withStateFileLock(root, file, (target) => {
    if (existsSync(target.absolute)) {
      if (options.force === true) {
        throw new Error("refusing to overwrite the existing authoritative state file; --force cannot reset a run or cumulative budget (use a new file/run identity)");
      }
      const existing = readState(root, target.relative);
      return { ok: true, created: false, file: existing.relative, runId: existing.state.run.runId, stateRevision: hashText(JSON.stringify(existing.state)) };
    }
    const state = createRunState({
      runId: requireOption(options, ["run-id", "runId", "id"], "runId"),
      product: options.product,
      repo: options.repo,
      nextAction: options["next-action"] ?? options.nextAction,
      hardMinutes: options["hard-minutes"] ?? options.hardMinutes,
      softMinutes: options["soft-minutes"] ?? options.softMinutes,
      runBudgetMinutes: options["run-budget-minutes"] ?? options.runBudgetMinutes,
      checkpointMinutes: options["checkpoint-minutes"] ?? options.checkpointMinutes,
      now: options.now,
      authority: options.authority ? JSON.parse(options.authority) : undefined
    });
    writeJsonAtomic(target.absolute, state);
    return { ok: true, created: true, file: file, runId: state.run.runId, stateRevision: hashText(JSON.stringify(state)), budget: state.run.budget };
  });
}

function stateTaskInit(root, options) {
  const file = stateFileOption(options);
  const contractFile = requireOption(options, ["contract", "task"], "contract file");
  return withStateFileLock(root, file, (target) => {
    const contractResult = validateTaskContract(root, contractFile);
    if (!contractResult.ok) throw new Error(`task contract validation failed: ${contractResult.errors.join("; ")}`);
    const taskId = requireOption(options, ["task-id", "taskId", "id"], "taskId");
    if (taskId !== contractResult.taskId) throw new Error("taskId does not match task contract");
    if (options.attempt !== undefined && Number(options.attempt) !== contractResult.attempt) throw new Error("attempt does not match task contract");
    const suppliedReviewers = options.reviewers ? String(options.reviewers).split(",").map((item) => item.trim()).filter(Boolean) : null;
    if (suppliedReviewers && JSON.stringify(suppliedReviewers) !== JSON.stringify(contractResult.contract.requiredReviewers)) throw new Error("reviewer policy must come from the trusted task contract");
    const existingValidation = validateRunState(root, target.relative);
    if (!existingValidation.ok) throw new Error(`existing state validation failed: ${existingValidation.errors.join("; ")}`);
    const loaded = readState(root, target.relative);
    if (loaded.state.run.status === "paused" || loaded.state.run.budget.humanPaused) throw new Error("cannot initialize a task while the run is paused for human wait");
    const budget = updateBudget(loaded.state, "start", { now: options.now });
    const task = addTaskToState(loaded.state, {
      taskId,
      runId: loaded.state.run.runId,
      attempt: contractResult.attempt,
      contractFile: contractResult.file,
      contractVersion: contractResult.contractVersion,
      contractHash: hashFileSha256(root, contractResult.file),
      previewOrigin: contractResult.normalized.previewOrigin,
      mode: contractResult.contract.mode,
      repo: contractResult.normalized.repo,
      baseRevision: contractResult.contract.baseRevision,
      candidateRevision: options["candidate-revision"] ?? options.candidateRevision,
      requiredReviewers: contractResult.contract.requiredReviewers,
      retryLimits: {
        implementation: contractResult.normalized.stopBudget.maxImplementationRetries,
        testDebug: contractResult.normalized.stopBudget.maxTestDebugRetries,
        reviewFix: contractResult.normalized.stopBudget.maxReviewFixCycles
      },
      writeScope: contractResult.normalized.writeScope,
      nextAction: options["next-action"] ?? options.nextAction,
      now: options.now
    });
    writeJsonAtomic(loaded.absolute, loaded.state);
    return { ok: true, file, runId: loaded.state.run.runId, task, budget };
  });
}

function stateBudget(root, options, action) {
  const file = stateFileOption(options);
  return withStateFileLock(root, file, (target) => {
    const validation = validateRunState(root, target.relative);
    if (!validation.ok) throw new Error(`state validation failed: ${validation.errors.join("; ")}`);
    const loaded = readState(root, target.relative);
    const budget = updateBudget(loaded.state, action, {
      now: options.now,
      seconds: options.seconds ?? options["elapsed-active-seconds"],
      elapsedActiveSeconds: options.elapsedActiveSeconds,
      workersStopped: options["workers-stopped"] === true || options.workersStopped === true,
      pausedSeconds: options["paused-seconds"] ?? options.pausedSeconds,
      minutes: options.minutes,
      authorizedBy: options["authorized-by"] ?? options.authorizedBy,
      reason: options.reason
    });
    writeJsonAtomic(loaded.absolute, loaded.state);
    return { ok: true, file, runId: loaded.state.run.runId, budget };
  });
}

function stateShow(root, options) {
  const loaded = readState(root, stateFileOption(options));
  return { ok: true, file: loaded.relative, state: loaded.state };
}

function stateCompletionIngest(root, options) {
  const state = requireOption(options, ["state", "state-file", "file"], "state file");
  const completion = requireOption(options, ["completion", "completion-file", "event", "event-file", "checkpoint"], "completion file");
  const contract = requireOption(options, ["contract", "task"], "contract file");
  return ingestCompletion(root, state, completion, { now: options.now, contractFile: contract });
}

function stateCarryForward(root, options) {
  return carryForwardReviews(
    root,
    requireOption(options, ["state", "state-file", "file"], "state file"),
    requireOption(options, ["task-id", "taskId"], "taskId"),
    requireOption(options, ["candidate", "candidate-revision", "candidateRevision", "new-candidate", "newCandidate"], "new candidateRevision"),
    {
      now: options.now,
      contractFile: options.contract ?? options.task,
      previousCommit: options["previous-commit"] ?? options.previousCommit ?? options["reviewed-commit"] ?? options.reviewedCommit,
      newCommit: options["new-commit"] ?? options.newCommit ?? options["replacement-commit"] ?? options.replacementCommit ?? options["candidate-commit"] ?? options.candidateCommit,
      apply: options.apply !== false && options.apply !== "false"
    }
  );
}

function stateDeliveryVerify(root, options) {
  const targetState = requireOption(options, ["delivery-state", "deliveryState", "state-value", "target-state", "target"], "delivery state");
  let merge = options.merge ? JSON.parse(options.merge) : undefined;
  let preview = options.preview ? JSON.parse(options.preview) : undefined;
  if (options["merge-file"]) merge = readJson(path.resolve(root, options["merge-file"]));
  if (options["preview-file"]) preview = readJson(path.resolve(root, options["preview-file"]));
  return verifyDelivery(root, requireOption(options, ["state", "state-file", "file"], "state file"), requireOption(options, ["task-id", "taskId"], "taskId"), targetState, {
    now: options.now,
    eventId: options["event-id"] ?? options.eventId,
    contractFile: options.contract ?? options.task,
    status: options.status,
    reviews: options.reviews ? JSON.parse(options.reviews) : undefined,
    requiredReviewers: options.reviewers ? String(options.reviewers).split(",").map((item) => item.trim()).filter(Boolean) : undefined,
    merge,
    preview,
    apply: options.apply !== false && options.apply !== "false"
  });
}

function checkpointGenerate(root, options, normalize = false) {
  const contract = requireOption(options, ["contract", "task"], "contract file");
  const output = options.output ?? options.out ?? options.file;
  if (!output) throw new Error("checkpoint output file is required (--output)");
  if (normalize) return normalizeGitCheckpoint(root, contract, output, { now: options.now });
  return generateGitCheckpoint(root, contract, output, { candidate: options.candidate ?? options["candidate-revision"], now: options.now });
}

const root = findRoot();
const { positional, options } = parseArgs(process.argv.slice(2));
const [command, subcommand] = positional;

try {
  let output;
  if (command === "check") {
    output = check(root);
  } else if (command === "index" && (subcommand === "build" || subcommand === undefined)) {
    output = buildIndex(root);
  } else if (command === "retrieve") {
    output = retrieve(root, options.project, options.query, options.limit);
  } else if (command === "run" && subcommand === "validate") {
    output = validateLiteRun(root, options.file);
  } else if (command === "run" && subcommand === "finalize") {
    output = finalizeRun(root, options.file);
  } else if (command === "handoff" && subcommand === "routing" && (positional[2] === "validate" || positional[2] === undefined)) {
    output = validateRoleRouting(root, options.file ?? "harness/role-routing.json");
  } else if ((command === "handoff" || command === "task") && subcommand === "contract" && (positional[2] === "validate" || positional[2] === undefined)) {
    output = validateTaskContract(root, options.file);
  } else if ((command === "handoff" || command === "task") && subcommand === "checkpoint" && (positional[2] === "validate" || positional[2] === undefined)) {
    output = validateCheckpoint(root, options.file, options.contract ?? options.task, { now: options.now });
  } else if ((command === "handoff" || command === "task") && subcommand === "validate") {
    output = validateHandoff(root, options.contract ?? options.task, options.checkpoint, { now: options.now });
  } else if (command === "state" && (subcommand === "validate" || subcommand === "check")) {
    output = validateRunState(root, stateFileOption(options));
  } else if (command === "state" && (subcommand === "init" || subcommand === "create")) {
    output = stateInit(root, options);
  } else if (command === "state" && (subcommand === "show" || subcommand === "get")) {
    output = stateShow(root, options);
  } else if (command === "state" && (subcommand === "task" || subcommand === "tasks") && (positional[2] === "init" || positional[2] === "add")) {
    output = stateTaskInit(root, options);
  } else if ((command === "state" || command === "run") && subcommand === "budget") {
    const action = positional[2] ?? "status";
    output = stateBudget(root, options, action);
  } else if ((command === "state" || command === "completion" || command === "handoff") && (subcommand === "completion" || subcommand === "event") && (positional[2] === "ingest" || positional[2] === "record" || positional[2] === undefined)) {
    output = stateCompletionIngest(root, options);
  } else if (command === "completion" && (subcommand === "ingest" || subcommand === "record")) {
    output = stateCompletionIngest(root, options);
  } else if ((command === "state" || command === "run") && subcommand === "ingest") {
    output = stateCompletionIngest(root, options);
  } else if (command === "run" && subcommand === "completion" && (positional[2] === "ingest" || positional[2] === "record" || positional[2] === undefined)) {
    output = stateCompletionIngest(root, options);
  } else if (command === "run" && subcommand === "state" && positional[2] === "completion" && (positional[3] === "ingest" || positional[3] === "record" || positional[3] === undefined)) {
    output = stateCompletionIngest(root, options);
  } else if (command === "state" && (subcommand === "completion" || subcommand === "event") && positional[2] === "ingest") {
    output = stateCompletionIngest(root, options);
  } else if (command === "state" && subcommand === "review" && (positional[2] === "carry-forward" || positional[2] === "carry")) {
    output = stateCarryForward(root, options);
  } else if (command === "state" && subcommand === "delivery" && (positional[2] === "verify" || positional[2] === undefined)) {
    output = stateDeliveryVerify(root, options);
  } else if ((command === "state" || command === "handoff" || command === "task") && subcommand === "checkpoint" && (positional[2] === "generate" || positional[2] === "git")) {
    output = checkpointGenerate(root, options, false);
  } else if ((command === "state" || command === "handoff" || command === "task") && subcommand === "checkpoint" && positional[2] === "normalize") {
    output = checkpointGenerate(root, options, true);
  } else {
    throw new Error("Unknown command. Use check, index build, retrieve, run validate/finalize, state init/task/completion/budget/review/delivery, or handoff contract/checkpoint/routing validate.");
  }
  print(output);
  if (output.ok === false) process.exitCode = 1;
} catch (error) {
  print({ ok: false, error: error.message });
  process.exitCode = 1;
}
