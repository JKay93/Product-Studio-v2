import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import {
  closeSync,
  existsSync,
  fsyncSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  statSync,
  unlinkSync,
  writeFileSync
} from "node:fs";
import path from "node:path";
import { validateCheckpoint, validateTaskContract } from "./bounded-handoff.mjs";

export const STATE_SCHEMA = "dexter.product_studio.harness_state.v1";
export const STATE_VERSION = 1;
export const DEFAULT_SOFT_CHECKPOINT_MINUTES = null;
export const DEFAULT_HARD_RUN_MINUTES = null;
export const DELIVERY_STATES = ["implemented", "reviewed", "accepted", "merged", "preview_verified"];

const IMMUTABLE_SHA = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i;
const REVIEW_ROLES = new Set(["builder", "productDesign", "qaRelease"]);
const INDEPENDENT_REVIEW_ROLES = new Set(["productDesign", "qaRelease"]);
const MATERIAL_TASK_KEYS = [
  "status",
  "deliveryState",
  "candidateRevision",
  "reviews",
  "blockers",
  "activeAgents",
  "nextAction",
  "merge",
  "preview",
  "checks",
  "acceptance",
  "evidence",
  "filesChanged"
];
const NON_MATERIAL_EVENT_TYPES = new Set(["heartbeat", "checkpoint", "metadata", "agent-presence"]);

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isNonNegativeNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (isObject(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function hashText(value) {
  return createHash("sha256").update(value).digest("hex");
}

function hashJson(value) {
  return hashText(stable(value));
}

export function hashFileSha256(root, filePath) {
  const target = safeRelative(root, filePath, "file");
  if (!existsSync(target.absolute)) throw new Error(`file does not exist: ${filePath}`);
  return createHash("sha256").update(readFileSync(target.absolute)).digest("hex");
}

function clone(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function nowIso(value) {
  const parsed = value === undefined ? new Date() : new Date(value);
  if (!Number.isFinite(parsed.getTime())) throw new Error(`invalid ISO date: ${value}`);
  return parsed.toISOString();
}

function normalizedSha(value) {
  if (isObject(value)) return value.sha ?? value.hash ?? value.revision ?? null;
  return value;
}

function immutableSha(value, label = "revision") {
  const sha = normalizedSha(value);
  if (!hasText(sha) || !IMMUTABLE_SHA.test(sha.trim())) {
    throw new Error(`${label} must be an immutable 40- or 64-character Git SHA`);
  }
  return sha.trim().toLowerCase();
}

function revisionKind(value) {
  if (!isObject(value)) return "commit";
  const kind = value.kind ?? value.type;
  return kind === "tree" ? "tree" : "commit";
}

function optionalSha(value, label) {
  if (value === undefined || value === null || value === "") return null;
  return immutableSha(value, label);
}

function normalizePath(value) {
  return String(value).replaceAll("\\", "/");
}

function safeRelative(root, value, label = "path") {
  if (!hasText(value)) throw new Error(`${label} must be a non-empty relative path`);
  const normalized = normalizePath(value.trim());
  if (normalized.startsWith("/") || /^[A-Za-z]:\//.test(normalized)) {
    throw new Error(`${label} must be relative: ${value}`);
  }
  const parts = normalized.split("/");
  if (parts.some((part) => part === "..")) throw new Error(`${label} must not traverse outside the workspace: ${value}`);
  const cleaned = parts.filter((part) => part && part !== ".").join("/");
  if (!cleaned) return { relative: ".", absolute: path.resolve(root) };
  const absolute = path.resolve(root, cleaned);
  const absoluteRoot = path.resolve(root);
  if (absolute !== absoluteRoot && !absolute.startsWith(`${absoluteRoot}${path.sep}`)) {
    throw new Error(`${label} resolves outside the workspace: ${value}`);
  }
  return { relative: cleaned, absolute };
}

function loadJson(root, filePath, label) {
  const target = safeRelative(root, filePath, label);
  if (!existsSync(target.absolute)) throw new Error(`${label} does not exist: ${filePath}`);
  let value;
  try {
    value = JSON.parse(readFileSync(target.absolute, "utf8"));
  } catch (error) {
    throw new Error(`${label} contains invalid JSON: ${error.message}`);
  }
  return { ...target, value };
}

/**
 * Serialize every state-file read/modify/write operation. Atomic rename keeps
 * readers from observing a partial document, while this lock keeps two
 * completions from reading the same old state and dropping one another.
 * A lock is deliberately never removed as stale: silently breaking a lock
 * after a crash would be less safe than requiring an operator to inspect it.
 */
export function withStateFileLock(root, filePath, callback, options = {}) {
  const target = safeRelative(root, filePath, "state file");
  mkdirSync(path.dirname(target.absolute), { recursive: true });
  const lockPath = `${target.absolute}.lock`;
  const waitMs = Number(options.waitMs ?? 25);
  const timeoutMs = Number(options.timeoutMs ?? 30_000);
  const started = Date.now();
  let descriptor;
  while (descriptor === undefined) {
    try {
      descriptor = openSync(lockPath, "wx", 0o600);
      writeFileSync(descriptor, `${process.pid}\n`, "utf8");
      fsyncSync(descriptor);
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      if (Date.now() - started >= timeoutMs) {
        throw new Error(`state file is locked: ${target.relative}`);
      }
      // This is a synchronous CLI/controller API. A short bounded wait avoids
      // a hot spin while preserving a single serialized critical section.
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, waitMs);
    }
  }
  try {
    return callback(target);
  } finally {
    try { closeSync(descriptor); } finally { unlinkSync(lockPath); }
  }
}

/**
 * Replace a JSON file only after the new document has been fully serialized.
 * The temporary file is in the same directory so rename is atomic on the
 * filesystem used by the studio.  No caller can observe a half-written state.
 */
export function writeJsonAtomic(filePath, value) {
  const directory = path.dirname(filePath);
  mkdirSync(directory, { recursive: true });
  const temporary = path.join(directory, `.${path.basename(filePath)}.${process.pid}.${randomUUID()}.tmp`);
  let descriptor;
  try {
    const body = `${JSON.stringify(value, null, 2)}\n`;
    descriptor = openSync(temporary, "wx", 0o600);
    writeFileSync(descriptor, body, "utf8");
    fsyncSync(descriptor);
    closeSync(descriptor);
    descriptor = undefined;
    renameSync(temporary, filePath);
    try {
      const directoryDescriptor = openSync(directory, "r");
      try { fsyncSync(directoryDescriptor); } finally { closeSync(directoryDescriptor); }
    } catch {
      // Directory fsync is not available on every supported filesystem. The
      // same-directory rename still provides the required atomic replacement.
    }
  } catch (error) {
    if (descriptor !== undefined) closeSync(descriptor);
    try { unlinkSync(temporary); } catch { /* best-effort cleanup */ }
    throw error;
  }
}

function git(repoRoot, args, { allowFailure = false } = {}) {
  try {
    return execFileSync("git", args, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
  } catch (error) {
    if (allowFailure) return null;
    const detail = `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    throw new Error(`git ${args.join(" ")} failed${detail ? `: ${detail}` : ""}`);
  }
}

function gitBuffer(repoRoot, args) {
  try {
    return execFileSync("git", args, { cwd: repoRoot, stdio: ["ignore", "pipe", "pipe"] });
  } catch (error) {
    const detail = `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    throw new Error(`git ${args.join(" ")} failed${detail ? `: ${detail}` : ""}`);
  }
}

function resolveRepo(root, repoValue) {
  if (!hasText(repoValue)) return path.resolve(root);
  const candidate = safeRelative(root, repoValue, "repository").absolute;
  const gitRoot = git(candidate, ["rev-parse", "--show-toplevel"], { allowFailure: true });
  if (gitRoot) return path.resolve(gitRoot);
  const rootGit = git(root, ["rev-parse", "--show-toplevel"], { allowFailure: true });
  if (rootGit) return path.resolve(rootGit);
  throw new Error(`repository is not inside a Git worktree: ${repoValue}`);
}

function gitCommitExists(repoRoot, revision) {
  if (!revision) return false;
  return git(repoRoot, ["cat-file", "-e", `${revision}^{commit}`], { allowFailure: true }) !== null;
}

function fullRevision(repoRoot, revision) {
  return git(repoRoot, ["rev-parse", `${revision}^{commit}`], { allowFailure: true });
}

function fullTreeRevision(repoRoot, revision) {
  return git(repoRoot, ["rev-parse", `${revision}^{tree}`], { allowFailure: true });
}

function resolveGitRevision(repoRoot, value, label = "revision") {
  const sha = immutableSha(value, label);
  const kind = revisionKind(value);
  if (kind === "tree") {
    const tree = fullTreeRevision(repoRoot, sha);
    if (!tree) throw new Error(`${label} is not present as a Git tree: ${sha}`);
    return { sha: tree, kind: "tree" };
  }
  const commit = fullRevision(repoRoot, sha);
  if (commit) return { sha: commit, kind: "commit" };
  // A bare 40/64-character revision may legitimately be a tree. Do not
  // require every candidate produced by the Git workflow to be a commit.
  const tree = fullTreeRevision(repoRoot, sha);
  if (tree) return { sha: tree, kind: "tree" };
  throw new Error(`${label} is not present as a Git commit or tree: ${sha}`);
}

function gitChangedFiles(repoRoot, baseRevision, candidateRevision) {
  const output = gitBuffer(repoRoot, ["diff", "--name-status", "-z", `${baseRevision}..${candidateRevision}`]).toString("utf8");
  const fields = output.split("\0").filter(Boolean);
  const changes = [];
  for (let index = 0; index < fields.length;) {
    const status = fields[index++];
    if (/^R|^C/.test(status)) {
      const from = fields[index++];
      const to = fields[index++];
      changes.push({ change: status.startsWith("R") ? "renamed" : "added", from, path: to });
    } else {
      changes.push({ change: status === "A" ? "added" : status === "D" ? "deleted" : "modified", path: fields[index++] });
    }
  }
  return changes;
}

function gitPathHash(repoRoot, revision, filePath) {
  const bytes = gitBuffer(repoRoot, ["show", `${revision}:${filePath}`]);
  return createHash("sha256").update(bytes).digest("hex");
}

function gitTreeHash(repoRoot, revision) {
  return fullTreeRevision(repoRoot, revision);
}

function currentTreeMetadata(root, repoValue, baseRevision, candidateRevision) {
  const repoRoot = resolveRepo(root, repoValue);
  const candidateInfo = resolveGitRevision(repoRoot, candidateRevision, "candidate revision");
  const baseInfo = resolveGitRevision(repoRoot, baseRevision, "base revision");
  const candidate = candidateInfo.sha;
  const base = baseInfo.sha;
  const rawChanges = gitChangedFiles(repoRoot, base, candidate);
  const changedPaths = rawChanges.map((item) => item.path);
  const filesChanged = rawChanges.map((item) => {
    const fullPath = path.resolve(repoRoot, item.path);
    const hashRevision = item.change === "deleted" ? base : candidate;
    const result = {
      path: normalizePath(item.path),
      fullPath,
      change: item.change,
      sha256: gitPathHash(repoRoot, hashRevision, item.path)
    };
    if (item.from) result.from = normalizePath(item.from);
    return result;
  });
  const status = git(repoRoot, ["status", "--porcelain"]);
  return {
    repoRoot,
    baseRevision: base,
    candidateRevision: candidate,
    baseKind: baseInfo.kind,
    candidateKind: candidateInfo.kind,
    baseTree: gitTreeHash(repoRoot, base),
    candidateTree: gitTreeHash(repoRoot, candidate),
    changedPaths,
    filesChanged,
    cleanWorkingTree: status.length === 0,
    uncommittedChanges: status.length === 0 ? [] : status.split("\n")
  };
}

function emptyBudget(now, options = {}) {
  const hardValue = options.hardMinutes ?? options.runBudgetMinutes ?? DEFAULT_HARD_RUN_MINUTES;
  const hardMinutes = hardValue === null ? null : Number(hardValue);
  const softValue = options.softMinutes ?? options.checkpointMinutes ?? DEFAULT_SOFT_CHECKPOINT_MINUTES;
  const softMinutes = softValue === null ? null : Number(softValue);
  if (hardMinutes !== null && (!Number.isInteger(hardMinutes) || hardMinutes <= 0)) throw new Error("hard run budget must be a positive integer number of minutes");
  if (softMinutes !== null && (!Number.isInteger(softMinutes) || softMinutes <= 0)) throw new Error("soft checkpoint budget must be a positive integer number of minutes");
  return {
    softMinutes,
    hardMinutes,
    activeElapsedSeconds: 0,
    pausedHumanWaitSeconds: 0,
    // A run is idle until a task is dispatched (or an explicit budget start
    // command is issued). Pre-dispatch wall time is never billable active time.
    active: false,
    humanPaused: false,
    workersStopped: true,
    lastAccountingAt: now,
    extensions: [],
    softCheckpointDue: false,
    hardExceeded: false,
    checkpointCount: 0,
    lastCheckpointAt: null,
    lastCheckpointElapsedSeconds: 0,
    nextCheckpointElapsedSeconds: softMinutes === null ? null : softMinutes * 60
  };
}

function normalizeReviewRole(role) {
  if (role === "designer") return "productDesign";
  if (role === "qa") return "qaRelease";
  return role;
}

function normalizeResult(value) {
  if (typeof value !== "string") return null;
  const upper = value.trim().toUpperCase();
  if (["PASS", "PASSED", "OK"].includes(upper)) return "PASS";
  if (["PARTIAL", "PENDING", "INCOMPLETE"].includes(upper)) return "PARTIAL";
  if (["FAILED", "FAIL", "BLOCKED"].includes(upper)) return "FAILED";
  return null;
}

function normalizeReviews(value) {
  if (value === undefined || value === null) return [];
  if (Array.isArray(value)) return value.filter(isObject).map((review) => ({ ...review, role: normalizeReviewRole(review.role) }));
  if (isObject(value)) return Object.entries(value).filter(([, review]) => isObject(review)).map(([role, review]) => ({ ...review, role: normalizeReviewRole(review.role ?? role) }));
  return [];
}

function reviewMap(reviews) {
  const map = new Map();
  for (const review of normalizeReviews(reviews)) {
    if (hasText(review.role)) map.set(normalizeReviewRole(review.role), review);
  }
  return map;
}

function taskIdList(state) {
  if (isObject(state.tasks)) return Object.keys(state.tasks);
  if (Array.isArray(state.tasks)) return state.tasks.map((task) => task?.taskId).filter(hasText);
  return [];
}

function getTask(state, taskId) {
  if (isObject(state.tasks)) return state.tasks[taskId] ?? null;
  if (Array.isArray(state.tasks)) return state.tasks.find((task) => task?.taskId === taskId) ?? null;
  return null;
}

function setTask(state, task) {
  if (!isObject(state.tasks)) state.tasks = {};
  state.tasks[task.taskId] = task;
}

function eventIdentity(event) {
  return `${event.taskId ?? ""}:${event.attempt ?? ""}:${event.eventId ?? event.id ?? ""}`;
}

function currentTaskMaterial(task) {
  const snapshot = {};
  for (const key of MATERIAL_TASK_KEYS) snapshot[key] = clone(task?.[key]);
  return snapshot;
}

function materialChanged(before, after, event) {
  if (NON_MATERIAL_EVENT_TYPES.has(event.eventType ?? event.type ?? "")) {
    return hashJson(before) !== hashJson(after);
  }
  return hashJson(before) !== hashJson(after);
}

function normalizeStateShape(state) {
  if (!isObject(state)) throw new Error("state must be an object");
  if (state.schema !== STATE_SCHEMA) throw new Error(`schema must be ${STATE_SCHEMA}`);
  if (state.version !== STATE_VERSION) throw new Error(`state version must be ${STATE_VERSION}`);
  if (!isObject(state.run)) throw new Error("state.run must be an object");
  if (!hasText(state.run.runId)) throw new Error("state.run.runId is required");
  if (!isObject(state.run.budget)) throw new Error("state.run.budget is required");
  if (!isObject(state.tasks)) throw new Error("state.tasks must be an object keyed by taskId");
  if (!Array.isArray(state.events)) throw new Error("state.events must be an array");
  if (!Array.isArray(state.archivedEvents)) throw new Error("state.archivedEvents must be an array");
  if (!Array.isArray(state.pendingEvents)) state.pendingEvents = [];
  if (!Array.isArray(state.processedEventIds)) throw new Error("state.processedEventIds must be an array");
  const processed = new Set();
  for (const eventId of state.processedEventIds) {
    if (!hasText(eventId)) throw new Error("state.processedEventIds must contain non-empty strings");
    if (processed.has(eventId)) throw new Error(`duplicate processed event ID: ${eventId}`);
    processed.add(eventId);
  }
  const eventIds = new Set();
  for (const event of state.events) {
    if (!isObject(event) || !hasText(event.eventId)) throw new Error("state.events entries require eventId");
    if (!hasText(event.taskId) || !isPositiveInteger(Number(event.attempt))) throw new Error("state.events entries require taskId and positive attempt");
    if (!hasText(event.contractVersion)) throw new Error("state.events entries require contractVersion");
    const eventTask = state.tasks[event.taskId];
    if (!eventTask) throw new Error(`state event ${event.eventId} references an unknown task`);
    if (eventTask && (Number(event.attempt) !== Number(eventTask.attempt) || String(event.contractVersion) !== String(eventTask.contractVersion))) {
      throw new Error(`state event ${event.eventId} is not bound to its authoritative task`);
    }
    if (eventIds.has(event.eventId)) throw new Error(`duplicate state event ID: ${event.eventId}`);
    eventIds.add(event.eventId);
    if (!processed.has(event.eventId)) throw new Error(`state event is not marked processed: ${event.eventId}`);
  }
  const archivedIds = new Set();
  for (const archived of state.archivedEvents) {
    if (!isObject(archived) || !hasText(archived.eventId)) throw new Error("state.archivedEvents entries require eventId");
    if (!hasText(archived.taskId) || !isPositiveInteger(Number(archived.attempt))) throw new Error("state.archivedEvents entries require taskId and positive attempt");
    if (!hasText(archived.event?.contractVersion ?? archived.contractVersion)) throw new Error("state.archivedEvents entries require contractVersion");
    if (archivedIds.has(archived.eventId) || eventIds.has(archived.eventId)) throw new Error(`duplicate archived event ID: ${archived.eventId}`);
    archivedIds.add(archived.eventId);
    if (!processed.has(archived.eventId)) throw new Error(`archived event is not marked processed: ${archived.eventId}`);
  }
  const pendingIds = new Set();
  for (const pending of state.pendingEvents) {
    if (!isObject(pending) || !hasText(pending.eventId)) throw new Error("state.pendingEvents entries require eventId");
    if (!hasText(pending.taskId) || !isPositiveInteger(Number(pending.attempt))) throw new Error("state.pendingEvents entries require taskId and positive attempt");
    if (!hasText(pending.contractVersion)) throw new Error("state.pendingEvents entries require contractVersion");
    if (!isObject(pending.event)) throw new Error("state.pendingEvents entries require the withheld event");
    if (pendingIds.has(pending.eventId) || processed.has(pending.eventId)) throw new Error(`duplicate pending event ID: ${pending.eventId}`);
    pendingIds.add(pending.eventId);
  }
  const budget = state.run.budget;
  for (const key of ["softMinutes", "hardMinutes"]) {
    if (budget[key] != null && (!Number.isInteger(budget[key]) || budget[key] <= 0)) throw new Error(`state.run.budget.${key} must be a positive integer`);
  }
  if (!isNonNegativeNumber(budget.activeElapsedSeconds)) throw new Error("state.run.budget.activeElapsedSeconds must be non-negative");
  if (!isNonNegativeNumber(budget.pausedHumanWaitSeconds)) throw new Error("state.run.budget.pausedHumanWaitSeconds must be non-negative");
  if (budget.humanPaused === true && budget.workersStopped !== true) throw new Error("humanPaused budget state requires workersStopped=true");
  if (budget.active !== true && budget.active !== false) throw new Error("state.run.budget.active must be boolean");
  if (budget.workersStopped !== true && budget.workersStopped !== false) throw new Error("state.run.budget.workersStopped must be boolean");
  if (!isNonNegativeNumber(budget.checkpointCount) || !Number.isInteger(budget.checkpointCount)) throw new Error("state.run.budget.checkpointCount must be a non-negative integer");
  if (!isNonNegativeNumber(budget.lastCheckpointElapsedSeconds)) throw new Error("state.run.budget.lastCheckpointElapsedSeconds must be non-negative");
  if (budget.nextCheckpointElapsedSeconds != null && (!isNonNegativeNumber(budget.nextCheckpointElapsedSeconds) || budget.nextCheckpointElapsedSeconds <= 0)) throw new Error("state.run.budget.nextCheckpointElapsedSeconds must be positive");
  if (state.run.candidateRevision !== null && state.run.candidateRevision !== undefined) immutableSha(state.run.candidateRevision, "state.run.candidateRevision");
  if (state.run.activeTaskId !== null && state.run.activeTaskId !== undefined && !state.tasks[state.run.activeTaskId]) {
    throw new Error(`state.run.activeTaskId does not reference a task: ${state.run.activeTaskId}`);
  }
  for (const task of Object.values(state.tasks)) {
    if (!isObject(task)) throw new Error("state.tasks entries must be objects");
    if (!hasText(task.taskId)) throw new Error("state taskId is required");
    if (task.runId !== state.run.runId) throw new Error(`task ${task.taskId} does not reference state runId`);
    if (!isPositiveInteger(task.attempt)) throw new Error(`task ${task.taskId} attempt must be a positive integer`);
    if (!hasText(task.contractFile)) throw new Error(`task ${task.taskId} contractFile is required`);
    if (!hasText(task.contractVersion)) throw new Error(`task ${task.taskId} contractVersion is required`);
    if (task.contractHash !== undefined && task.contractHash !== null && !/^[a-f0-9]{64}$/i.test(task.contractHash)) {
      throw new Error(`task ${task.taskId}.contractHash must be a SHA-256 digest`);
    }
    if (task.previewOrigin !== undefined && task.previewOrigin !== null) normalizePreviewOrigin(task.previewOrigin);
    if (task.candidateRevision !== null && task.candidateRevision !== undefined) immutableSha(task.candidateRevision, `task ${task.taskId}.candidateRevision`);
    if (task.deliveryState !== null && task.deliveryState !== undefined && !DELIVERY_STATES.includes(task.deliveryState)) {
      throw new Error(`task ${task.taskId}.deliveryState is invalid`);
    }
    for (const key of ["blockers", "activeAgents", "filesChanged", "evidence"]) {
      if (task[key] !== undefined && !Array.isArray(task[key])) throw new Error(`task ${task.taskId}.${key} must be an array`);
    }
    if (task.retryCounts !== undefined && !isObject(task.retryCounts)) throw new Error(`task ${task.taskId}.retryCounts must be an object`);
    if (task.retryLimits !== undefined && !isObject(task.retryLimits)) throw new Error(`task ${task.taskId}.retryLimits must be an object`);
    if (isObject(task.retryCounts) && isObject(task.retryLimits)) {
      for (const key of ["implementation", "testDebug", "reviewFix"]) {
        if (!isNonNegativeNumber(Number(task.retryCounts[key] ?? 0)) || !Number.isInteger(Number(task.retryCounts[key] ?? 0))) throw new Error(`task ${task.taskId}.retryCounts.${key} must be a non-negative integer`);
        if (!isNonNegativeNumber(Number(task.retryLimits[key] ?? 0)) || !Number.isInteger(Number(task.retryLimits[key] ?? 0))) throw new Error(`task ${task.taskId}.retryLimits.${key} must be a non-negative integer`);
        if (Number(task.retryCounts[key] ?? 0) > Number(task.retryLimits[key] ?? 0)) throw new Error(`task ${task.taskId}.retryCounts.${key} exceeds its trusted limit`);
      }
    }
    if (Array.isArray(task.requiredReviewers)) {
      for (const role of task.requiredReviewers) if (!REVIEW_ROLES.has(normalizeReviewRole(role))) throw new Error(`task ${task.taskId}.requiredReviewers contains invalid role: ${role}`);
    } else throw new Error(`task ${task.taskId}.requiredReviewers must be an array`);
    if (task.reviews !== undefined && !Array.isArray(task.reviews) && !isObject(task.reviews)) throw new Error(`task ${task.taskId}.reviews must be an array or object`);
  }
  return state;
}

export function validateRunState(root, filePath) {
  try {
    const loaded = loadJson(root, filePath, "state file");
    normalizeStateShape(loaded.value);
    for (const task of Object.values(loaded.value.tasks)) trustedTaskContract(root, loaded.value, task);
    return {
      ok: true,
      file: loaded.relative,
      stateRevision: hashJson(loaded.value),
      runId: loaded.value.run.runId,
      taskIds: taskIdList(loaded.value),
      budget: budgetStatus(loaded.value, new Date().toISOString())
    };
  } catch (error) {
    return { ok: false, file: filePath, errors: [error.message], warnings: [] };
  }
}

export function createRunState(options = {}) {
  const now = nowIso(options.now);
  const runId = options.runId ?? options.id;
  if (!hasText(runId)) throw new Error("runId is required");
  const budgetOptions = options.authority ?? options.budget ?? options;
  const budget = emptyBudget(now, budgetOptions);
  const state = {
    schema: STATE_SCHEMA,
    version: STATE_VERSION,
    run: {
      runId,
      product: options.product ?? "",
      repo: options.repo ?? "",
      status: options.status ?? "planned",
      startedAt: now,
      updatedAt: now,
      activeTaskId: null,
      candidateRevision: null,
      reviews: [],
      blockers: [],
      activeAgents: [],
      nextAction: options.nextAction ?? "",
      merge: null,
      preview: null,
      budget,
      authority: {
        spendLimitUsd: 0,
        externalPublication: false,
        credentialsApproved: false,
        ...(isObject(options.authority) ? options.authority : {})
      }
    },
    tasks: {},
    events: [],
    archivedEvents: [],
    pendingEvents: [],
    processedEventIds: [],
    notifications: []
  };
  normalizeStateShape(state);
  return state;
}

export function addTaskToState(state, options = {}) {
  normalizeStateShape(state);
  const taskId = options.taskId ?? options.id;
  if (!hasText(taskId)) throw new Error("taskId is required");
  if (state.tasks[taskId]) throw new Error(`task already exists: ${taskId}`);
  const task = {
    taskId,
    runId: state.run.runId,
    attempt: Number(options.attempt ?? 1),
    contractFile: options.contractFile ?? null,
    contractVersion: options.contractVersion ?? null,
    contractHash: options.contractHash ?? null,
    previewOrigin: options.previewOrigin ?? null,
    mode: options.mode ?? "implement",
    repo: options.repo ?? state.run.repo ?? "",
    baseRevision: optionalSha(options.baseRevision, "baseRevision"),
    candidateRevision: optionalSha(options.candidateRevision, "candidateRevision"),
    status: options.status ?? "ready",
    deliveryState: options.deliveryState ?? null,
    reviews: clone(options.reviews ?? []),
    blockers: clone(options.blockers ?? []),
    activeAgents: clone(options.activeAgents ?? []),
    nextAction: options.nextAction ?? "",
    merge: clone(options.merge ?? null),
    preview: clone(options.preview ?? null),
    requiredReviewers: clone(options.requiredReviewers ?? []),
    retryCounts: clone(options.retryCounts ?? { implementation: 0, testDebug: 0, reviewFix: 0 }),
    retryLimits: clone(options.retryLimits ?? { implementation: 2, testDebug: 2, reviewFix: 1 }),
    writeScope: clone(options.writeScope ?? []),
    checks: clone(options.checks ?? []),
    acceptance: clone(options.acceptance ?? []),
    evidence: clone(options.evidence ?? []),
    filesChanged: clone(options.filesChanged ?? []),
    completionHistory: [],
    createdAt: nowIso(options.now),
    updatedAt: nowIso(options.now)
  };
  if (!isPositiveInteger(task.attempt)) throw new Error("attempt must be a positive integer");
  setTask(state, task);
  state.run.activeTaskId = state.run.activeTaskId ?? taskId;
  state.run.updatedAt = task.createdAt;
  normalizeStateShape(state);
  return task;
}

function budgetStatus(state, now) {
  const budget = state.run.budget;
  const at = Date.parse(nowIso(now));
  let activeElapsedSeconds = budget.activeElapsedSeconds;
  if (budget.active && !budget.humanPaused && budget.workersStopped !== true && hasText(budget.lastAccountingAt)) {
    const last = Date.parse(budget.lastAccountingAt);
    if (Number.isFinite(last) && at > last) activeElapsedSeconds += (at - last) / 1000;
  }
  // Legacy thresholds are informational only and never withhold progress.
  const hardSeconds = budget.hardMinutes == null ? null : budget.hardMinutes * 60;
  const nextCheckpointElapsedSeconds = budget.softMinutes == null ? null : Math.max(
    budget.softMinutes * 60,
    budget.nextCheckpointElapsedSeconds ?? ((budget.checkpointCount ?? 0) + 1) * budget.softMinutes * 60
  );
  return {
    activeElapsedSeconds,
    activeElapsedMinutes: activeElapsedSeconds / 60,
    softCheckpointDue: nextCheckpointElapsedSeconds !== null && activeElapsedSeconds >= nextCheckpointElapsedSeconds,
    hardExceeded: hardSeconds !== null && activeElapsedSeconds >= hardSeconds,
    elapsedTimePolicy: "diagnostic-only",
    hardMinutes: budget.hardMinutes,
    softMinutes: budget.softMinutes,
    checkpointCount: budget.checkpointCount ?? 0,
    lastCheckpointAt: budget.lastCheckpointAt ?? null,
    lastCheckpointElapsedSeconds: budget.lastCheckpointElapsedSeconds ?? 0,
    nextCheckpointElapsedSeconds,
    pausedHumanWaitSeconds: budget.pausedHumanWaitSeconds,
    active: budget.active,
    humanPaused: budget.humanPaused,
    workersStopped: budget.workersStopped
  };
}

function accountBudget(state, now, explicitActiveSeconds = null) {
  const budget = state.run.budget;
  const at = nowIso(now);
  if (explicitActiveSeconds !== null) {
    if (!isNonNegativeNumber(explicitActiveSeconds)) throw new Error("elapsedActiveSeconds must be a non-negative number");
    // One run-level delta is accounted once, regardless of active agent count.
    budget.activeElapsedSeconds += explicitActiveSeconds;
    budget.lastAccountingAt = at;
  } else if (budget.active && !budget.humanPaused && budget.workersStopped !== true) {
    const last = Date.parse(budget.lastAccountingAt ?? at);
    const current = Date.parse(at);
    if (Number.isFinite(last) && current > last) budget.activeElapsedSeconds += (current - last) / 1000;
    budget.lastAccountingAt = at;
  } else {
    budget.lastAccountingAt = at;
  }
  const status = budgetStatus(state, at);
  budget.softCheckpointDue = status.softCheckpointDue;
  budget.hardExceeded = status.hardExceeded;
  return status;
}

function acknowledgeCheckpoint(state, now) {
  const status = accountBudget(state, now);

  const budget = state.run.budget;
  budget.checkpointCount += 1;
  budget.lastCheckpointAt = nowIso(now);
  budget.lastCheckpointElapsedSeconds = status.activeElapsedSeconds;
  budget.nextCheckpointElapsedSeconds = budget.softMinutes == null ? null : Math.max(
    (budget.checkpointCount + 1) * budget.softMinutes * 60,
    status.activeElapsedSeconds + budget.softMinutes * 60
  );
  budget.softCheckpointDue = false;
  return budgetStatus(state, now);
}

export function updateBudget(state, action, options = {}) {
  normalizeStateShape(state);
  const now = nowIso(options.now);
  const budget = state.run.budget;
  let status;
  if (action === "record") {
    status = accountBudget(state, now, Number(options.seconds ?? options.elapsedActiveSeconds ?? 0));
  } else if (action === "checkpoint" || action === "acknowledge-checkpoint") {
    status = acknowledgeCheckpoint(state, now);
  } else if (action === "start" || action === "resume") {
    status = accountBudget(state, now);

    budget.active = true;
    budget.humanPaused = false;
    budget.workersStopped = false;
    budget.lastAccountingAt = now;
    state.run.status = "active";
    status = budgetStatus(state, now);
  } else if (action === "pause") {
    if (options.workersStopped !== true) throw new Error("human-wait pause requires workersStopped=true; paused work still counts");
    status = accountBudget(state, now);
    budget.active = false;
    budget.humanPaused = true;
    budget.workersStopped = true;
    state.run.status = "paused";
    if (options.pausedSeconds !== undefined) {
      const pausedSeconds = Number(options.pausedSeconds);
      if (!isNonNegativeNumber(pausedSeconds)) throw new Error("pausedSeconds must be a non-negative number");
      budget.pausedHumanWaitSeconds += pausedSeconds;
    }
    status = budgetStatus(state, now);
  } else if (action === "extend") {
    // Compatibility no-op: no time extension or approval is needed.
    // Preserve cumulative accounting and historical extension records.
    status = accountBudget(state, now);
  } else if (action === "status") {
    status = budgetStatus(state, now);
    budget.softCheckpointDue = status.softCheckpointDue;
    budget.hardExceeded = status.hardExceeded;
  } else {
    throw new Error(`unknown budget action: ${action}`);
  }
  state.run.updatedAt = now;
  return status;
}

function unwrapCompletion(value) {
  if (!isObject(value)) throw new Error("completion must be a JSON object");
  if (isObject(value.completion)) value = value.completion;
  if (isObject(value.event) && !value.eventId && !value.id) value = value.event;
  return value;
}

function completionEnvelope(value) {
  value = unwrapCompletion(value);
  const eventId = value.eventId ?? value.id;
  if (!hasText(eventId)) throw new Error("completion eventId is required");
  if (!hasText(value.taskId)) throw new Error("completion taskId is required");
  if (!isPositiveInteger(Number(value.attempt))) throw new Error("completion attempt must be a positive integer");
  if (!hasText(value.contractVersion ?? value.taskVersion)) throw new Error("completion contractVersion is required");
  return {
    value,
    eventId: String(eventId),
    taskId: String(value.taskId),
    attempt: Number(value.attempt),
    contractVersion: String(value.contractVersion ?? value.taskVersion)
  };
}

function completionInput(value) {
  const envelope = completionEnvelope(value);
  value = envelope.value;
  const { eventId, taskId, attempt, contractVersion } = envelope;
  if (Object.hasOwn(value, "elapsedActiveSeconds") || isObject(value.timing) && Object.hasOwn(value.timing, "elapsedActiveSeconds")) {
    throw new Error("completion elapsedActiveSeconds is not trusted; record active time through the explicit state budget command");
  }
  const candidateValue = value.candidateRevision ?? value.candidate;
  let candidateRevision = null;
  if (candidateValue !== undefined && candidateValue !== null && candidateValue !== "") candidateRevision = immutableSha(candidateValue, "completion candidateRevision");
  const status = normalizeResult(value.status ?? value.result ?? value.verdict);
  const deliveryState = value.deliveryState ?? value.lifecycleState ?? value.delivery?.state ?? null;
  if (deliveryState !== null && deliveryState !== undefined && deliveryState !== "" && !DELIVERY_STATES.includes(deliveryState)) {
    throw new Error(`completion deliveryState is invalid: ${deliveryState}`);
  }
  return {
    ...clone(value),
    eventId,
    taskId,
    attempt,
    contractVersion,
    candidateRevision,
    status,
    deliveryState: deliveryState || null,
    eventType: value.eventType ?? value.type ?? "completion",
    // `at` is a worker-reported timestamp only. Ingest replaces the
    // authoritative event timestamp with receipt time before accounting or
    // persisting state; reportedAt is retained for audit/debugging.
    reportedAt: value.at ? nowIso(value.at) : null,
    at: new Date().toISOString()
  };
}

function appendArchive(state, event, reason, now) {
  state.pendingEvents = (state.pendingEvents ?? []).filter((pending) => pending.eventId !== event.eventId);
  const archived = {
    eventId: event.eventId,
    taskId: event.taskId,
    attempt: event.attempt,
    candidateRevision: event.candidateRevision,
    reason,
    archivedAt: now,
    event: clone(event)
  };
  state.archivedEvents.push(archived);
  if (!state.processedEventIds.includes(event.eventId)) state.processedEventIds.push(event.eventId);
  state.run.updatedAt = now;
  return archived;
}

function pendingCompletion(state, event) {
  return (state.pendingEvents ?? []).find((pending) => pending.eventId === event.eventId && pending.taskId === event.taskId && Number(pending.attempt) === Number(event.attempt)) ?? null;
}

function removePendingCompletion(state, event) {
  if (!Array.isArray(state.pendingEvents)) return;
  state.pendingEvents = state.pendingEvents.filter((pending) => pending.eventId !== event.eventId);
}

function withholdAndWrite(stateLoaded, state, event, reason, now, extra = {}) {
  state.pendingEvents = state.pendingEvents ?? [];
  const existing = pendingCompletion(state, event);
  if (existing) {
    existing.reason = reason;
    existing.lastWithheldAt = now;
  } else {
    state.pendingEvents.push({
      eventId: event.eventId,
      taskId: event.taskId,
      attempt: event.attempt,
      contractVersion: event.contractVersion,
      candidateRevision: event.candidateRevision,
      reason,
      withheldAt: now,
      lastWithheldAt: now,
      event: clone(event)
    });
  }
  state.run.updatedAt = now;
  normalizeStateShape(state);
  writeJsonAtomic(stateLoaded.absolute, state);
  return {
    ok: true,
    applied: false,
    duplicate: false,
    archived: false,
    withheld: true,
    pending: true,
    ...extra,
    reason,
    notificationDecision: { shouldNotify: false, materialChange: false, reason },
    budget: budgetStatus(state, now),
    stateRevision: hashJson(state),
    runId: state.run.runId,
    taskId: event.taskId,
    eventId: event.eventId
  };
}

function completionAlreadyProcessed(state, event) {
  return state.processedEventIds.includes(event.eventId) ||
    state.events.some((item) => eventIdentity(item) === eventIdentity(event)) ||
    state.archivedEvents.some((item) => item.eventId === event.eventId && item.taskId === event.taskId && item.attempt === event.attempt);
}

function requiredReviewRoles(task, event) {
  // Reviewer policy belongs to the validated task contract. A worker event is
  // evidence, not authority, and may not remove or replace required roles.
  const values = task.requiredReviewers ?? [];
  if (event?.requiredReviewers !== undefined) {
    const supplied = Array.isArray(event.requiredReviewers)
      ? event.requiredReviewers.map(normalizeReviewRole)
      : [];
    const trusted = Array.isArray(values) ? values.map(normalizeReviewRole) : [];
    if (stable(supplied) !== stable(trusted)) throw new Error("completion requiredReviewers cannot override the trusted task contract");
  }
  return Array.isArray(values) ? values.map(normalizeReviewRole).filter((role) => REVIEW_ROLES.has(role)) : [];
}

function blockerList(event) {
  const blockers = event.blockers ?? event.unresolved ?? event.deviations ?? [];
  if (!Array.isArray(blockers)) return [];
  return blockers.map((item) => typeof item === "string" ? item : item?.reason ?? item?.message ?? JSON.stringify(item)).filter(hasText);
}

function transitionIndex(stateValue) {
  return stateValue ? DELIVERY_STATES.indexOf(stateValue) : -1;
}

function assertReviewBindings(task, event, reviews) {
  const candidate = task.candidateRevision ?? event.candidateRevision;
  const required = requiredReviewRoles(task, event);
  const seen = new Set();
  for (const review of reviews) {
    const role = normalizeReviewRole(review.role);
    if (!REVIEW_ROLES.has(role)) throw new Error(`review role is invalid: ${review.role}`);
    if (seen.has(role)) throw new Error(`duplicate review role: ${role}`);
    seen.add(role);
    if (review.taskId !== undefined && review.taskId !== task.taskId) throw new Error(`review ${role} taskId does not match task`);
    if (review.attempt !== undefined && Number(review.attempt) !== task.attempt) throw new Error(`review ${role} attempt does not match task`);
    const reviewCandidate = optionalSha(review.candidateRevision ?? review.candidate, `review ${role}.candidateRevision`);
    if (candidate && reviewCandidate !== candidate) throw new Error(`review ${role} candidateRevision does not match task candidate`);
    if (!hasText(review.contractVersion ?? review.taskVersion)) throw new Error(`review ${role} contractVersion is required`);
    if (String(review.contractVersion ?? review.taskVersion) !== String(task.contractVersion)) throw new Error(`review ${role} contractVersion does not match task contract`);
    if (!normalizeResult(review.result ?? review.status ?? review.verdict)) throw new Error(`review ${role} result must be PASS, PARTIAL, or FAILED`);
  }
  return { required, seen };
}

function verifyMerge(root, task, event) {
  const candidate = task.candidateRevision ?? event.candidateRevision;
  if (!candidate) throw new Error("merged transition requires an immutable candidate revision");
  const merge = event.merge ?? event.delivery?.merge;
  if (!isObject(merge)) throw new Error("merged transition requires merge validation details");
  const repoRoot = resolveRepo(root, merge.repo ?? task.repo);
  const candidateInfo = resolveGitRevision(repoRoot, candidate, "merge candidate");
  const candidateTree = candidateInfo.kind === "tree" ? candidateInfo.sha : gitTreeHash(repoRoot, candidateInfo.sha);
  let mergeCommit = candidateInfo.kind === "commit" ? candidateInfo.sha : null;
  if (candidateInfo.kind === "tree") {
    mergeCommit = fullRevision(repoRoot, merge.mergeCommit ?? merge.mergedRevision ?? merge.targetRevision);
    if (!mergeCommit) throw new Error("tree candidate merge proof requires an immutable mergeCommit");
    if (gitTreeHash(repoRoot, mergeCommit) !== candidateTree) throw new Error("mergeCommit tree does not match the candidate Git tree");
  }
  const targetBranch = merge.targetBranch ?? git(repoRoot, ["branch", "--show-current"]);
  if (!hasText(targetBranch)) throw new Error("merge target branch is required");
  const targetRevision = fullRevision(repoRoot, targetBranch);
  if (!targetRevision) throw new Error(`merge target branch does not exist: ${targetBranch}`);
  let isAncestor = false;
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", mergeCommit, targetRevision], { cwd: repoRoot, stdio: "ignore" });
    isAncestor = true;
  } catch { /* not an ancestor */ }
  if (!isAncestor) throw new Error("merge candidate is not an ancestor of the target branch");
  const upstreamRevision = fullRevision(repoRoot, `${targetBranch}@{upstream}`);
  if (!upstreamRevision) throw new Error("merge target branch has no resolvable upstream; push was not verified");
  if (upstreamRevision !== targetRevision) throw new Error("pushed upstream does not match the merged target branch");
  const dirty = git(repoRoot, ["status", "--porcelain"]);
  if (dirty.length > 0) throw new Error("target repository is not clean; merge/push proof is not final");
  return {
    verified: true,
    repoRoot,
    candidateRevision: candidateInfo.sha,
    candidateKind: candidateInfo.kind,
    candidateTree,
    mergeCommit,
    targetBranch,
    targetRevision,
    upstreamRevision,
    cleanWorkingTree: true,
    verifiedAt: nowIso(event.at)
  };
}

function verifyPreview(task, event, root, trustedContract) {
  const candidate = task.candidateRevision ?? event.candidateRevision;
  if (!candidate) throw new Error("preview verification requires an immutable candidate revision");
  const preview = event.preview ?? event.delivery?.preview;
  if (!isObject(preview)) throw new Error("preview_verified transition requires preview verification details");
  const trustedPreviewOrigin = trustedContract?.normalized?.previewOrigin;
  if (!hasText(trustedPreviewOrigin)) {
    throw new Error("preview verification requires a trusted previewOrigin in the immutable task contract; no fetch performed");
  }
  const approvedOrigin = normalizePreviewOrigin(trustedPreviewOrigin);
  for (const [key, value] of Object.entries({
    approvedOrigin: preview.approvedOrigin,
    previewOrigin: preview.previewOrigin,
    origin: preview.origin
  })) {
    if (value === undefined || value === null) continue;
    if (normalizePreviewOrigin(value) !== approvedOrigin) {
      throw new Error(`completion preview ${key} does not match the trusted task contract previewOrigin`);
    }
  }
  const candidateSha = immutableSha(candidate, "task candidateRevision");
  const claimedIdentity = preview.servedRevision ?? preview.servedCommit ?? preview.commit ?? preview.candidateRevision ?? preview.buildId;
  if (!hasText(claimedIdentity) && !isObject(claimedIdentity)) throw new Error("preview verification requires a served build identity");
  const servedRevision = (hasText(claimedIdentity) && IMMUTABLE_SHA.test(claimedIdentity.trim())) || isObject(claimedIdentity)
    ? optionalSha(claimedIdentity, "preview servedRevision")
    : null;

  // A claimed SHA/build ID is not proof of what was served. Require a fetched
  // artifact from the explicitly approved preview origin with a supplied
  // content hash and verify that its structured payload binds the served build
  // to the frozen candidate. A local file is never identity evidence.
  const artifact = preview.buildIdEvidence ?? preview.buildEvidence ?? preview.identityEvidence ?? preview.fetchedEvidence ?? (
    preview.buildIdUrl ? { url: preview.buildIdUrl, sha256: preview.buildIdSha256 ?? preview.sha256 } : null
  );
  if (!isObject(artifact)) throw new Error("preview served identity requires hashed build-ID evidence");
  const fetchedArtifact = readPreviewArtifact(artifact, approvedOrigin);
  const body = fetchedArtifact.body;
  const artifactText = body.toString("utf8");
  let payload;
  try { payload = JSON.parse(artifactText); } catch { payload = null; }
  const payloadText = payload ? stable(payload) : artifactText;
  const revisionFromValue = (value) => isObject(value) ? value.sha ?? value.hash ?? value.revision : value;
  const containsCandidate = payload && isObject(payload)
    ? [payload.servedRevision, payload.servedCommit, payload.commit, payload.candidateRevision, payload.revision, payload.candidateTree, payload.tree, payload.sha]
      .some((value) => hasText(revisionFromValue(value)) && revisionFromValue(value).toLowerCase() === candidateSha.toLowerCase())
    : payloadText.toLowerCase().includes(candidateSha.toLowerCase());
  if (!containsCandidate) throw new Error("hashed build-ID evidence does not bind the served build to the candidate revision");
  if (servedRevision && servedRevision !== candidateSha) throw new Error("preview served commit does not match the candidate revision");
  if (!servedRevision) {
    const derived = payload?.servedRevision ?? payload?.servedCommit ?? payload?.commit ?? payload?.candidateRevision ?? payload?.revision ?? payload?.candidateTree ?? payload?.tree ?? payload?.sha;
    if (payload && (!hasText(revisionFromValue(derived)) || revisionFromValue(derived).toLowerCase() !== candidateSha.toLowerCase())) throw new Error("preview build evidence does not expose the candidate revision");
    if (!payload && !containsCandidate) throw new Error("preview build evidence does not expose the candidate revision");
  }
  const checks = preview.verification ?? preview.verifications ?? preview.checks;
  if (!Array.isArray(checks) || checks.length === 0) throw new Error("preview verification requires a non-HTTP functional, smoke, browser, or visual check");
  const substantive = checks.filter((check) => {
    const method = isObject(check) ? check.method ?? check.type ?? check.name : null;
    return hasText(method) && ["functional", "smoke", "browser", "visual"].some((kind) => method.toLowerCase().includes(kind));
  });
  if (substantive.length === 0) throw new Error("HTTP 200 alone is insufficient; preview needs a PASS functional, smoke, browser, or visual verification");
  for (const check of substantive) {
    if (!isObject(check) || normalizeResult(check.result ?? check.status ?? check.verdict) !== "PASS") {
      throw new Error("preview functional verification must have an explicit PASS result");
    }
    const evidencePath = check.evidencePath ?? check.evidence?.path;
    const evidenceHash = check.sha256 ?? check.evidenceSha256 ?? check.evidence?.sha256;
    if (!hasText(evidencePath) || !hasText(evidenceHash)) throw new Error("preview functional verification requires hashed local evidence");
    const target = safeRelative(root, evidencePath, "preview evidence path");
    if (!existsSync(target.absolute) || !statSync(target.absolute).isFile()) throw new Error(`preview evidence path missing: ${evidencePath}`);
    if (!/^[a-f0-9]{64}$/i.test(evidenceHash) || hashText(readFileSync(target.absolute)) !== evidenceHash.toLowerCase()) throw new Error(`preview evidence hash mismatch: ${evidencePath}`);
  }
  return {
    verified: true,
    servedRevision: servedRevision ?? candidateSha,
    approvedOrigin,
    servedUrl: fetchedArtifact.url,
    buildIdEvidence: { url: fetchedArtifact.url, sha256: artifact.sha256.toLowerCase(), fetchedAt: fetchedArtifact.fetchedAt },
    checks: clone(substantive),
    verifiedAt: nowIso(event.at)
  };
}

function normalizePreviewOrigin(value) {
  if (!hasText(value)) throw new Error("preview verification requires an approved preview origin");
  let parsed;
  try { parsed = new URL(value); } catch { throw new Error("approved preview origin is invalid"); }
  if (!/^https?:$/.test(parsed.protocol) || parsed.username || parsed.password) {
    throw new Error("approved preview origin must be an HTTP(S) origin without credentials");
  }
  return parsed.origin;
}

function readPreviewArtifact(artifact, approvedOrigin) {
  if (!hasText(artifact.sha256) || !/^[a-f0-9]{64}$/i.test(artifact.sha256)) {
    throw new Error("preview build-ID evidence requires a SHA-256 hash");
  }
  if (!hasText(artifact.url)) throw new Error("preview build-ID evidence requires an approved-origin HTTP(S) URL; local identity files are not accepted");
  let parsed;
  try { parsed = new URL(artifact.url); } catch { throw new Error("preview build-ID evidence URL is invalid"); }
  if (!/^https?:$/.test(parsed.protocol)) throw new Error("preview build-ID evidence URL must use HTTP(S)");
  if (parsed.origin !== approvedOrigin) throw new Error("preview build-ID evidence URL is outside the approved preview origin");
  let body;
  try {
    // Do not follow a redirect to an unapproved host. Same-origin redirects
    // are intentionally rejected as well: the captured URL must be the URL
    // that was fetched and independently approved.
    body = execFileSync("curl", [
      "--fail", "--location", "--silent", "--show-error", "--max-time", "5", "--max-redirs", "0",
      "--proto", "=http,https", "--proto-redir", "=http,https", parsed.toString()
    ], { stdio: ["ignore", "pipe", "pipe"] });
  } catch (error) {
    const detail = `${error.stderr ?? ""}`.trim();
    throw new Error(`approved preview build-ID fetch failed${detail ? `: ${detail}` : ""}`);
  }
  if (hashText(body) !== artifact.sha256.toLowerCase()) throw new Error("preview build-ID evidence hash mismatch");
  return { body, url: parsed.toString(), fetchedAt: new Date().toISOString() };
}

function validateDeliveryTransition(root, task, event, requestedState, trustedContract = null) {
  // Validate even on an implementation transition; a policy override is not
  // harmless merely because the event is not yet at the review gate.
  if (event.requiredReviewers !== undefined) requiredReviewRoles(task, event);
  const currentIndex = transitionIndex(task.deliveryState);
  const nextIndex = transitionIndex(requestedState);
  if (nextIndex < 0) throw new Error(`delivery state is invalid: ${requestedState}`);
  if (currentIndex >= nextIndex) {
    if (currentIndex === nextIndex) return { state: requestedState, proof: null, alreadyAtState: true };
    throw new Error(`delivery cannot move backward from ${task.deliveryState} to ${requestedState}`);
  }
  if (nextIndex !== currentIndex + 1) throw new Error(`delivery must advance one state at a time; expected ${DELIVERY_STATES[currentIndex + 1]}`);
  if (requestedState === "implemented") {
    if (event.status !== "PASS") throw new Error("implemented transition requires PASS completion status");
    if (!task.candidateRevision && !event.candidateRevision) throw new Error("implemented transition requires an immutable candidate revision");
  }
  let proof = null;
  if (requestedState === "reviewed") {
    const reviews = normalizeReviews(event.reviews ?? event.reviewResults);
    const { required, seen } = assertReviewBindings(task, event, reviews);
    if (reviews.length === 0) throw new Error("reviewed transition requires candidate-bound review results");
    if (reviews.some((review) => normalizeResult(review.result ?? review.status ?? review.verdict) !== "PASS")) {
      throw new Error("reviewed transition requires all supplied reviews to be PASS");
    }
    for (const role of required) if (!seen.has(role)) throw new Error(`reviewed transition is missing required reviewer: ${role}`);
  }
  if (requestedState === "accepted") {
    if (event.status !== "PASS") throw new Error("accepted transition requires PASS completion status");
    const reviews = normalizeReviews(event.reviews ?? event.reviewResults ?? task.reviews);
    const { required, seen } = assertReviewBindings(task, event, reviews);
    if (required.length === 0 || !required.some((role) => INDEPENDENT_REVIEW_ROLES.has(role))) {
      throw new Error("accepted transition requires configured independent reviewers");
    }
    for (const role of required) {
      const review = reviews.find((item) => normalizeReviewRole(item.role) === role);
      if (!review || normalizeResult(review.result ?? review.status ?? review.verdict) !== "PASS") {
        throw new Error(`accepted transition requires PASS review from ${role}`);
      }
    }
    if (blockerList(event).length > 0 || blockerList(task).length > 0) throw new Error("accepted transition cannot contain blockers");
  }
  if (requestedState === "merged") proof = verifyMerge(root, task, event);
  if (requestedState === "preview_verified") proof = verifyPreview(task, event, root, trustedContract);
  return { state: requestedState, proof, alreadyAtState: false };
}

function mergeTaskFields(task, event) {
  if (event.status) task.status = event.status;
  if (event.candidateRevision && !task.candidateRevision) task.candidateRevision = event.candidateRevision;
  if (event.filesChanged !== undefined || event.files !== undefined) task.filesChanged = clone(event.filesChanged ?? event.files);
  if (event.checks !== undefined || event.checkResults !== undefined) task.checks = clone(event.checks ?? event.checkResults);
  if (event.acceptance !== undefined || event.acceptanceCriteria !== undefined) task.acceptance = clone(event.acceptance ?? event.acceptanceCriteria);
  if (event.evidence !== undefined) task.evidence = clone(event.evidence);
  if (event.blockers !== undefined || event.unresolved !== undefined || event.deviations !== undefined) task.blockers = blockerList(event);
  if (event.activeAgents !== undefined) task.activeAgents = clone(event.activeAgents);
  if (event.nextAction !== undefined) task.nextAction = clone(event.nextAction);
  if (event.reviews !== undefined || event.reviewResults !== undefined) task.reviews = clone(event.reviews ?? event.reviewResults);
  if (event.merge !== undefined) task.merge = clone(event.merge);
  if (event.preview !== undefined) task.preview = clone(event.preview);
  if (event.requiredReviewers !== undefined) {
    const trusted = (task.requiredReviewers ?? []).map(normalizeReviewRole);
    const supplied = Array.isArray(event.requiredReviewers) ? event.requiredReviewers.map(normalizeReviewRole) : [];
    if (stable(trusted) !== stable(supplied)) throw new Error("completion requiredReviewers cannot override the trusted task contract");
  }
  if (event.retryCounts !== undefined || event.retries !== undefined) {
    const raw = event.retryCounts ?? event.retries;
    if (!isObject(raw)) throw new Error("completion retryCounts must be an object");
    const incoming = {
      implementation: Number(raw.implementation ?? raw.implementationRetries ?? 0),
      testDebug: Number(raw.testDebug ?? raw.testDebugRetries ?? 0),
      reviewFix: Number(raw.reviewFix ?? raw.reviewFixCycles ?? 0)
    };
    const current = task.retryCounts ?? { implementation: 0, testDebug: 0, reviewFix: 0 };
    const limits = task.retryLimits ?? { implementation: 2, testDebug: 2, reviewFix: 1 };
    for (const key of ["implementation", "testDebug", "reviewFix"]) {
      if (!isNonNegativeNumber(incoming[key]) || !Number.isInteger(incoming[key])) throw new Error(`completion retryCounts.${key} must be a non-negative integer`);
      if (incoming[key] < Number(current[key] ?? 0)) throw new Error(`completion retryCounts.${key} cannot decrease authoritative state`);
      if (incoming[key] > Number(limits[key])) throw new Error(`completion retryCounts.${key} exceeds trusted retry limit`);
    }
    task.retryCounts = incoming;
  }
}

function syncRunFromTask(state, task, now) {
  state.run.activeTaskId = task.taskId;
  state.run.candidateRevision = task.candidateRevision ?? null;
  state.run.reviews = clone(task.reviews ?? []);
  state.run.blockers = clone(task.blockers ?? []);
  state.run.activeAgents = clone(task.activeAgents ?? []);
  state.run.merge = clone(task.merge ?? null);
  state.run.preview = clone(task.preview ?? null);
  state.run.updatedAt = now;
  state.run.nextAction = task.nextAction ?? state.run.nextAction;
}

function trustedTaskContract(root, state, task, explicitContractFile = null) {
  if (!hasText(task.contractFile) || !hasText(task.contractVersion)) {
    throw new Error(`task ${task.taskId} has no trusted contract binding`);
  }
  if (!hasText(task.contractHash) || !/^[a-f0-9]{64}$/i.test(task.contractHash)) {
    throw new Error(`task ${task.taskId} has no immutable contract content hash`);
  }
  const bound = safeRelative(root, task.contractFile, "task contract");
  if (explicitContractFile !== null && explicitContractFile !== undefined) {
    const supplied = safeRelative(root, explicitContractFile, "contract file");
    if (supplied.relative !== bound.relative) throw new Error("supplied contract file does not match the trusted task contract binding");
  }
  const currentContractHash = hashFileSha256(root, bound.relative);
  if (currentContractHash !== task.contractHash.toLowerCase()) {
    throw new Error("trusted task contract content hash does not match the immutable task binding");
  }
  const result = validateTaskContract(root, bound.relative);
  if (!result.ok) throw new Error(`task contract validation failed: ${result.errors.join("; ")}`);
  if (result.taskId !== task.taskId || result.attempt !== task.attempt) throw new Error("trusted task contract identity does not match state task");
  if (result.contractVersion !== task.contractVersion) throw new Error("trusted task contract version does not match state task");
  if ((task.previewOrigin ?? null) !== (result.normalized.previewOrigin ?? null)) throw new Error("trusted task previewOrigin does not match the immutable task contract");
  return result;
}

function archiveAndWrite(stateLoaded, state, event, reason, now, extra = {}) {
  appendArchive(state, event, reason, now);
  normalizeStateShape(state);
  writeJsonAtomic(stateLoaded.absolute, state);
  return {
    ok: true,
    applied: false,
    duplicate: false,
    archived: true,
    ...extra,
    reason,
    notificationDecision: { shouldNotify: false, materialChange: false, reason },
    budget: budgetStatus(state, now),
    stateRevision: hashJson(state),
    runId: state.run.runId,
    taskId: event.taskId,
    eventId: event.eventId
  };
}

export function ingestCompletion(root, stateFile, completionFile, options = {}) {
  return withStateFileLock(root, stateFile, (target) => {
    const stateLoaded = loadJson(root, target.relative, "state file");
    const completionLoaded = loadJson(root, completionFile, "completion file");
    const state = clone(stateLoaded.value);
    normalizeStateShape(state);
    // Event identity is the administrative envelope. Suppress an exact
    // duplicate before inspecting worker payload, deadline, or contract-file
    // content so idempotence survives expiry and source-file loss.
    const envelope = completionEnvelope(completionLoaded.value);
    if (completionAlreadyProcessed(state, envelope)) {
      return {
        ok: true,
        applied: false,
        duplicate: true,
        archived: false,
        notificationDecision: { shouldNotify: false, materialChange: false, reason: "duplicate event ignored" },
        stateRevision: hashJson(state),
        runId: state.run.runId,
        taskId: envelope.taskId,
        eventId: envelope.eventId
      };
    }
    const event = completionInput(completionLoaded.value);
    const now = nowIso(options.now);
    event.at = now;
    const task = getTask(state, event.taskId);
    const staleReasons = [];
    if (!task) staleReasons.push("task does not exist in authoritative state");
    else {
      if (event.attempt !== task.attempt) staleReasons.push("attempt does not match authoritative task");
      if (String(event.contractVersion) !== String(task.contractVersion)) staleReasons.push("contractVersion does not match authoritative task");
      if (task.candidateRevision && event.candidateRevision && task.candidateRevision !== event.candidateRevision) staleReasons.push("candidate revision does not match authoritative task");
      if (task.candidateRevision && !event.candidateRevision && event.deliveryState !== null) staleReasons.push("candidate revision is required for a delivery event");
      if (task.runId !== state.run.runId) staleReasons.push("task references a different run");
    }
    if (staleReasons.length > 0) return archiveAndWrite(stateLoaded, state, event, `stale: ${staleReasons.join("; ")}`, now, { stale: true });

    const trustedContract = trustedTaskContract(root, state, task, options.contractFile);
    const checkpointValidation = validateCheckpoint(root, completionFile, trustedContract.file, { now });
    if (!checkpointValidation.ok) throw new Error(`completion validation failed: ${checkpointValidation.errors.join("; ")}`);
    const pending = pendingCompletion(state, event);

    const budget = accountBudget(state, now);
    if (state.run.status === "paused" || state.run.budget.humanPaused) {
      return withholdAndWrite(stateLoaded, state, event, "run is paused for human wait; evidence retained without advancement", now, { paused: true });
    }


    // Checkpoint events record a voluntary progress checkpoint and do not mutate
    // task delivery state. The event still passes the bound checkpoint gate.
    if (event.eventType === "checkpoint") {
      const checkpointBudget = acknowledgeCheckpoint(state, now);
      removePendingCompletion(state, event);
      state.events.push({
        eventId: event.eventId, taskId: event.taskId, attempt: event.attempt,
        contractVersion: event.contractVersion, candidateRevision: event.candidateRevision,
        eventType: event.eventType, status: event.status, at: now,
        reportedAt: event.reportedAt, receivedAt: now
      });
      state.processedEventIds.push(event.eventId);
      state.run.updatedAt = now;
      normalizeStateShape(state);
      writeJsonAtomic(stateLoaded.absolute, state);
      return { ok: true, applied: true, checkpointAcknowledged: true, duplicate: false, archived: false, budget: checkpointBudget, stateRevision: hashJson(state), runId: state.run.runId, taskId: event.taskId, eventId: event.eventId };
    }

    const before = currentTaskMaterial(task);
    const requestedDelivery = event.deliveryState;
    let delivery = null;
    if (requestedDelivery) delivery = validateDeliveryTransition(root, task, event, requestedDelivery, trustedContract);
    if (pending) removePendingCompletion(state, event);
    mergeTaskFields(task, event);
    if (delivery && !delivery.alreadyAtState) {
      task.deliveryState = delivery.state;
      if (delivery.proof) {
        if (delivery.state === "merged") task.merge = delivery.proof;
        if (delivery.state === "preview_verified") task.preview = delivery.proof;
      }
    }
    task.completionHistory.push({
      eventId: event.eventId, attempt: event.attempt,
      contractVersion: event.contractVersion, candidateRevision: event.candidateRevision,
      status: event.status, deliveryState: event.deliveryState,
      reportedAt: event.reportedAt, receivedAt: now
    });
    task.updatedAt = now;
    state.events.push({
      eventId: event.eventId, taskId: event.taskId, attempt: event.attempt,
      contractVersion: event.contractVersion, candidateRevision: event.candidateRevision,
      eventType: event.eventType, status: event.status, deliveryState: event.deliveryState,
      at: now, reportedAt: event.reportedAt, receivedAt: now
    });
    state.processedEventIds.push(event.eventId);
    const after = currentTaskMaterial(task);
    const material = materialChanged(before, after, event);
    const decision = {
      shouldNotify: material,
      materialChange: material,
      reason: material ? "authoritative task state changed" : "event recorded without a material task-state change"
    };
    if (material) state.notifications.push({ notificationId: `${event.eventId}:material`, eventId: event.eventId, taskId: event.taskId, at: now, decision: "notify", reason: decision.reason });
    state.run.status = state.run.status === "blocked" ? state.run.status : "active";
    syncRunFromTask(state, task, now);
    normalizeStateShape(state);
    writeJsonAtomic(stateLoaded.absolute, state);
    return {
      ok: true, applied: true, duplicate: false, archived: false,
      materialChange: material, notificationDecision: decision,
      deliveryState: task.deliveryState, budget,
      stateRevision: hashJson(state), runId: state.run.runId,
      taskId: task.taskId, eventId: event.eventId
    };
  });
}

function globMatches(filePath, scope) {
  const file = normalizePath(filePath);
  const pattern = normalizePath(scope).replace(/\/$/, "");
  if (pattern.endsWith("/**")) {
    const prefix = pattern.slice(0, -3);
    return file === prefix || file.startsWith(`${prefix}/`);
  }
  if (pattern.endsWith("/*")) {
    const prefix = pattern.slice(0, -2);
    const remainder = file.startsWith(`${prefix}/`) ? file.slice(prefix.length + 1) : null;
    return remainder !== null && !remainder.includes("/");
  }
  return file === pattern || file.startsWith(`${pattern}/`);
}

function reviewScopePaths(review) {
  const raw = review.scope ?? review.reviewedScope ?? review.affectedScope;
  const values = Array.isArray(raw) ? raw : isObject(raw) ? (raw.paths ?? raw.files ?? []) : [];
  const direct = values.map((item) => typeof item === "string" ? item : item?.path).filter(hasText);
  if (direct.length > 0) return direct;
  const evidence = Array.isArray(review.evidence) ? review.evidence : [];
  return evidence.flatMap((item) => {
    if (!isObject(item)) return [];
    const scoped = item.scope ?? item.paths ?? item.files;
    if (Array.isArray(scoped)) return scoped.map((value) => typeof value === "string" ? value : value?.path).filter(hasText);
    return hasText(item.path) ? [item.path] : [];
  });
}

function reviewCoverage(review, contract) {
  const acceptance = review.acceptanceCriteria ?? review.acceptance ?? review.acIds ?? [];
  const checks = review.checks ?? review.checkResults ?? review.checkIds ?? [];
  const acceptanceIds = Array.isArray(acceptance) ? acceptance.map((item) => typeof item === "string" ? item : item?.id).filter(hasText) : [];
  const checkIds = Array.isArray(checks) ? checks.map((item) => typeof item === "string" ? item : item?.id).filter(hasText) : [];
  const evidence = Array.isArray(review.evidence) ? review.evidence : [];
  if (acceptanceIds.length === 0 && checkIds.length === 0) return { ok: false, reason: "review lacks acceptance/check coverage binding" };
  if (evidence.length === 0) return { ok: false, reason: "review lacks evidence binding" };
  for (const id of acceptanceIds) if (!contract.normalized.acIds.has(id)) return { ok: false, reason: `review references unknown acceptance id: ${id}` };
  for (const id of checkIds) if (!contract.normalized.checkIds.has(id)) return { ok: false, reason: `review references unknown check id: ${id}` };
  for (const item of evidence) {
    if (!isObject(item) || !hasText(item.path) || !hasText(item.sha256) || !/^[a-f0-9]{64}$/i.test(item.sha256)) {
      return { ok: false, reason: "review evidence must bind a local path and SHA-256 hash" };
    }
  }
  return { ok: true, acceptanceIds, checkIds };
}

export function carryForwardReviews(root, stateFile, taskId, newCandidate, options = {}) {
  return withStateFileLock(root, stateFile, (target) => {
    const stateLoaded = loadJson(root, target.relative, "state file");
    const state = clone(stateLoaded.value);
    normalizeStateShape(state);
    const task = getTask(state, taskId);
    if (!task) throw new Error(`task does not exist: ${taskId}`);
    const nextCandidate = immutableSha(newCandidate, "new candidateRevision");
    const previousCandidate = immutableSha(task.candidateRevision, "existing task candidateRevision");
    const carryEventId = `review-carry-forward:${state.run.runId}:${taskId}:${task.attempt}:${previousCandidate}:${nextCandidate}`;
    if (state.processedEventIds.includes(carryEventId)) return { ok: true, applied: false, duplicate: true, taskId, fromCandidate: previousCandidate, toCandidate: nextCandidate, carried: [], rejected: [] };
    const contract = trustedTaskContract(root, state, task, options.contractFile);
    const now = nowIso(options.now);
    if (options.apply !== false) {
      accountBudget(state, now);
      if (state.run.status === "paused" || state.run.budget.humanPaused) throw new Error("run is paused for human wait");
    }
    if (nextCandidate === previousCandidate) throw new Error("review carry-forward requires a replacement candidate");
    if (task.deliveryState !== "reviewed") throw new Error("review carry-forward requires a task currently in reviewed state");
    const repoRoot = resolveRepo(root, task.repo ?? state.run.repo);
    const oldInfo = resolveGitRevision(repoRoot, previousCandidate, "existing task candidateRevision");
    const newInfo = resolveGitRevision(repoRoot, nextCandidate, "new candidateRevision");
    const oldFull = oldInfo.kind === "commit"
      ? oldInfo.sha
      : fullRevision(repoRoot, options.previousCommit ?? options.reviewedCommit ?? task.reviewedCommit);
    const newFull = newInfo.kind === "commit"
      ? newInfo.sha
      : fullRevision(repoRoot, options.newCommit ?? options.replacementCommit ?? options.candidateCommit);
    if (!oldFull || !newFull) throw new Error("tree review carry-forward requires previousCommit and newCommit mappings");
    if (oldInfo.kind === "tree" && gitTreeHash(repoRoot, oldFull) !== oldInfo.sha) throw new Error("previousCommit does not map to the reviewed candidate tree");
    if (newInfo.kind === "tree" && gitTreeHash(repoRoot, newFull) !== newInfo.sha) throw new Error("newCommit does not map to the replacement candidate tree");
    let descendant = false;
    try { execFileSync("git", ["merge-base", "--is-ancestor", oldFull, newFull], { cwd: repoRoot, stdio: "ignore" }); descendant = true; } catch { /* replacement is not a descendant */ }
    if (!descendant) throw new Error("review carry-forward requires the new immutable candidate to descend from the reviewed candidate");
    const diff = gitChangedFiles(repoRoot, oldInfo.sha, newInfo.sha).map((item) => normalizePath(item.path));
    const reviews = normalizeReviews(task.reviews);
    const carried = [];
    const rejected = [];
    for (const review of reviews) {
      const role = normalizeReviewRole(review.role);
      const reviewCandidate = optionalSha(review.candidateRevision ?? review.candidate, `review ${role}.candidateRevision`);
      const paths = reviewScopePaths(review);
      const coverage = reviewCoverage(review, contract);
      if (!REVIEW_ROLES.has(role) || normalizeResult(review.result ?? review.status ?? review.verdict) !== "PASS") {
        rejected.push({ role, reason: "only candidate-bound PASS reviews may be carried forward" });
        continue;
      }
      if (review.taskId !== task.taskId || Number(review.attempt) !== task.attempt || String(review.contractVersion ?? review.taskVersion) !== String(task.contractVersion)) {
        rejected.push({ role, reason: "review task, attempt, or contract binding does not match the trusted task" });
        continue;
      }
      if (!reviewCandidate || reviewCandidate !== previousCandidate || paths.length === 0) {
        rejected.push({ role, reason: "review lacks an immutable candidate-bound scope" });
        continue;
      }
      if (!coverage.ok) { rejected.push({ role, reason: coverage.reason }); continue; }
      let evidenceValid = true;
      for (const item of review.evidence) {
        const targetEvidence = safeRelative(root, item.path, "review evidence path");
        if (!existsSync(targetEvidence.absolute) || !statSync(targetEvidence.absolute).isFile() || hashText(readFileSync(targetEvidence.absolute)) !== item.sha256.toLowerCase()) {
          evidenceValid = false;
          break;
        }
      }
      if (!evidenceValid) { rejected.push({ role, reason: "review evidence path/hash is not currently verifiable" }); continue; }
      const overlap = diff.filter((file) => paths.some((item) => globMatches(file, item)));
      if (overlap.length > 0) {
        rejected.push({ role, reason: "replacement diff overlaps reviewed scope", overlap });
        continue;
      }
      carried.push({ ...clone(review), role, candidateRevision: nextCandidate, carriedFromCandidate: previousCandidate, carryForwardProof: { immutableDiff: diff, reviewedScope: paths, previousCandidateKind: oldInfo.kind, candidateKind: newInfo.kind, previousCommit: oldFull, newCommit: newFull, unaffected: true } });
    }
    const carriedRoles = new Set(carried.map((review) => review.role));
    const trustedRequired = (task.requiredReviewers ?? []).map(normalizeReviewRole).filter((role) => REVIEW_ROLES.has(role));
    const canRemainReviewed = trustedRequired.length > 0 && trustedRequired.every((role) => carriedRoles.has(role)) && trustedRequired.some((role) => INDEPENDENT_REVIEW_ROLES.has(role));
    if (options.apply !== false) {
      task.reviews = carried;
      task.candidateRevision = nextCandidate;
      task.deliveryState = canRemainReviewed ? "reviewed" : "implemented";
      task.updatedAt = now;
      syncRunFromTask(state, task, now);
      state.events.push({ eventId: carryEventId, taskId, attempt: task.attempt, contractVersion: task.contractVersion, candidateRevision: nextCandidate, eventType: "review-carry-forward", at: now, receivedAt: now });
      state.processedEventIds.push(carryEventId);
      normalizeStateShape(state);
      writeJsonAtomic(stateLoaded.absolute, state);
    }
    return { ok: true, applied: options.apply !== false, duplicate: false, taskId, fromCandidate: previousCandidate, toCandidate: nextCandidate, immutableDiff: diff, carried, rejected, deliveryState: canRemainReviewed ? "reviewed" : "implemented" };
  });
}

export function generateGitCheckpoint(root, contractFile, outputFile, options = {}) {
  const contractResult = validateTaskContract(root, contractFile);
  if (!contractResult.ok) throw new Error(`contract is invalid: ${contractResult.errors.join("; ")}`);
  const contract = contractResult.contract;
  const normalized = contractResult.normalized;
  const repoRoot = resolveRepo(root, normalized.repo);
  const candidate = options.candidate === undefined
    ? fullRevision(repoRoot, "HEAD")
    : resolveGitRevision(repoRoot, options.candidate, "candidate revision").sha;
  if (!candidate) throw new Error("candidate revision is not a Git commit or tree");
  const metadata = currentTreeMetadata(root, normalized.repo, contract.baseRevision, candidate);
  const now = nowIso(options.now);
  const checkpoint = {
    schema: "dexter.product_studio.bounded_checkpoint.v1",
    version: 1,
    contractVersion: contractResult.contractVersion,
    taskId: contract.taskId,
    attempt: contract.attempt,
    mode: contract.mode,
    eventId: `git-checkpoint:${contract.taskId}:${contract.attempt}:${hashText(contractResult.contractVersion)}:${candidate}`,
    repo: normalized.repo,
    baseRevision: metadata.baseRevision,
    candidateRevision: metadata.candidateRevision,
    taskState: "review_pending",
    status: "PARTIAL",
    filesChanged: metadata.filesChanged,
    checks: normalized.checks.map((check) => ({ id: check.id, command: check.command, result: "PARTIAL", administrative: true })),
    acceptanceCriteria: normalized.acceptanceCriteria.map((criterion) => ({ id: criterion.id, result: "PARTIAL", administrative: true })),
    deviations: ["Git metadata was generated administratively; no test or acceptance PASS was inferred."],
    unresolved: ["Independent tests and reviewer judgments are required before PASS or acceptance."],
    evidence: [],
    reviews: [],
    judgment: {
      agent: "harness-git-checkpoint",
      role: "administrative-normalizer",
      outcome: "UNVERIFIED",
      testsRun: [],
      passClaimed: false,
      at: now,
      note: "This checkpoint contains repository metadata only; it does not fabricate tests, reviews, or PASS."
    },
    gitMetadata: {
      generatedAt: now,
      generatedBy: "harness git checkpoint generator",
      repositoryRoot: metadata.repoRoot,
      baseRevision: metadata.baseRevision,
      baseTree: metadata.baseTree,
      candidateRevision: metadata.candidateRevision,
      candidateKind: metadata.candidateKind,
      candidateTree: metadata.candidateTree,
      cleanWorkingTree: metadata.cleanWorkingTree,
      uncommittedChanges: metadata.uncommittedChanges,
      changedPaths: metadata.changedPaths
    },
    routing: contract.routing
  };
  if (!metadata.cleanWorkingTree) checkpoint.unresolved.push("Working tree has uncommitted changes; delivery verification requires a clean tree.");
  writeJsonAtomic(safeRelative(root, outputFile, "checkpoint output").absolute, checkpoint);
  return {
    ok: true,
    file: outputFile,
    candidateRevision: checkpoint.candidateRevision,
    filesChanged: checkpoint.filesChanged.length,
    status: checkpoint.status,
    judgment: checkpoint.judgment,
    cleanWorkingTree: metadata.cleanWorkingTree
  };
}

export function normalizeGitCheckpoint(root, inputFile, outputFile, options = {}) {
  const loaded = loadJson(root, inputFile, "checkpoint file");
  const checkpoint = clone(loaded.value);
  if (!isObject(checkpoint)) throw new Error("checkpoint must be an object");
  const repoRoot = resolveRepo(root, checkpoint.repo);
  const baseRevision = immutableSha(checkpoint.baseRevision, "checkpoint baseRevision");
  const candidateRevision = immutableSha(checkpoint.candidateRevision ?? checkpoint.candidate, "checkpoint candidateRevision");
  const metadata = currentTreeMetadata(root, checkpoint.repo, baseRevision, candidateRevision);
  const existing = Array.isArray(checkpoint.filesChanged) ? checkpoint.filesChanged : [];
  const byPath = new Map(existing.map((item) => [normalizePath(item.path), item]));
  checkpoint.filesChanged = metadata.filesChanged.map((generated) => ({ ...byPath.get(generated.path), ...generated }));
  checkpoint.gitMetadata = {
    ...(isObject(checkpoint.gitMetadata) ? checkpoint.gitMetadata : {}),
    generatedAt: nowIso(options.now),
    generatedBy: "harness git checkpoint normalizer",
    repositoryRoot: repoRoot,
    baseRevision: metadata.baseRevision,
    baseTree: metadata.baseTree,
    candidateRevision: metadata.candidateRevision,
    candidateTree: metadata.candidateTree,
    cleanWorkingTree: metadata.cleanWorkingTree,
    uncommittedChanges: metadata.uncommittedChanges,
    changedPaths: metadata.changedPaths
  };
  if (!isObject(checkpoint.judgment)) {
    checkpoint.judgment = {
      agent: "harness-git-checkpoint",
      role: "administrative-normalizer",
      outcome: "UNVERIFIED",
      testsRun: [],
      passClaimed: false,
      at: nowIso(options.now),
      note: "Metadata normalization does not fabricate tests or PASS."
    };
  }
  writeJsonAtomic(safeRelative(root, outputFile, "checkpoint output").absolute, checkpoint);
  return { ok: true, file: outputFile, candidateRevision, filesChanged: checkpoint.filesChanged.length, preservedStatus: checkpoint.status, judgment: checkpoint.judgment };
}

export function verifyDelivery(root, stateFile, taskId, targetState, options = {}) {
  return withStateFileLock(root, stateFile, (target) => {
    const stateLoaded = loadJson(root, target.relative, "state file");
    const state = clone(stateLoaded.value);
    normalizeStateShape(state);
    const task = getTask(state, taskId);
    if (!task) throw new Error(`task does not exist: ${taskId}`);
    const candidateToken = task.candidateRevision ?? "none";
    const eventId = options.eventId ?? `delivery-verify:${state.run.runId}:${taskId}:${task.attempt}:${targetState}:${candidateToken}`;
    if (state.processedEventIds.includes(eventId) || task.deliveryState === targetState) {
      return { ok: true, applied: false, duplicate: true, taskId, deliveryState: task.deliveryState, proof: targetState === "merged" ? task.merge : targetState === "preview_verified" ? task.preview : null, stateRevision: hashJson(state) };
    }
    const trustedContract = trustedTaskContract(root, state, task, options.contractFile);
    const event = completionInput({
      eventId,
      taskId,
      attempt: task.attempt,
      contractVersion: task.contractVersion,
      candidateRevision: task.candidateRevision,
      status: options.status ?? (targetState === "accepted" || targetState === "implemented" ? "PASS" : "PARTIAL"),
      deliveryState: targetState,
      reviews: options.reviews,
      requiredReviewers: options.requiredReviewers,
      merge: options.merge,
      preview: options.preview,
      at: options.now
    });
    event.at = nowIso(options.now);
    const result = validateDeliveryTransition(root, task, event, targetState, trustedContract);
    if (options.apply === false) return { ok: true, applied: false, duplicate: false, taskId, deliveryState: targetState, proof: result.proof };
    const now = nowIso(options.now);
    const budget = accountBudget(state, now);
    if (state.run.status === "paused" || state.run.budget.humanPaused) {
      return { ok: false, applied: false, blocked: true, paused: true, reason: "run is paused for human wait" };
    }
    task.deliveryState = targetState;
    if (result.proof) {
      if (targetState === "merged") task.merge = result.proof;
      if (targetState === "preview_verified") task.preview = result.proof;
    }
    task.updatedAt = now;
    syncRunFromTask(state, task, now);
    state.events.push({ eventId: event.eventId, taskId, attempt: task.attempt, contractVersion: task.contractVersion, candidateRevision: task.candidateRevision, eventType: "delivery-verify", deliveryState: targetState, at: now, receivedAt: now });
    state.processedEventIds.push(event.eventId);
    normalizeStateShape(state);
    writeJsonAtomic(stateLoaded.absolute, state);
    return { ok: true, applied: true, duplicate: false, taskId, deliveryState: targetState, proof: result.proof, budget, stateRevision: hashJson(state) };
  });
}

export function readState(root, filePath) {
  const loaded = loadJson(root, filePath, "state file");
  normalizeStateShape(loaded.value);
  return { ...loaded, state: loaded.value };
}
