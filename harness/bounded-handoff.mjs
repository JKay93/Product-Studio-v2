import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

export const ROLE_ROUTING_SCHEMA = "dexter.product_studio.role_routing.v1";
export const TASK_CONTRACT_SCHEMA = "dexter.product_studio.bounded_task.v1";
export const CHECKPOINT_SCHEMA = "dexter.product_studio.bounded_checkpoint.v1";

const ROUTED_ROLES = ["orchestrator", "builder", "productDesign", "qaRelease"];
const ROLE_ALIASES = {
  orchestrator: ["orchestrator"],
  builder: ["builder"],
  productDesign: ["productDesign", "designer"],
  qaRelease: ["qaRelease", "qa"]
};
const REASONING_EFFORTS = new Set(["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra"]);
const CHECK_RESULTS = new Set(["PASS", "PARTIAL", "FAILED"]);
const TASK_STATES = new Set(["ready", "running", "review_pending", "paused", "blocked", "retry", "accepted", "failed", "partial"]);
const REVIEW_ROLES = new Set(["builder", "productDesign", "qaRelease"]);
const BUILDER_MODES = new Set(["technical-plan", "implement"]);
const DESIGN_MODES = new Set(["design-system", "design-plan", "review"]);
const QA_MODES = new Set(["test-plan", "review"]);
const PLANNING_MODES = new Set(["technical-plan", "design-system", "design-plan", "test-plan"]);
const REVIEW_MODES = new Set(["review"]);
const IMPLEMENT_MODE = "implement";
const IMMUTABLE_SHA = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i;

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (isObject(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function immutableRevision(value, label, errors, { nullable = false } = {}) {
  if (value === null && nullable) return null;
  if (isObject(value)) {
    const sha = value.sha ?? value.hash ?? value.revision;
    const kind = value.kind ?? value.type;
    if (kind !== undefined && !["commit", "tree"].includes(kind)) {
      addError(errors, `${label}.kind must be commit or tree`);
    }
    if (!hasText(sha) || !IMMUTABLE_SHA.test(sha.trim())) {
      addError(errors, `${label} must contain an immutable 40- or 64-character commit/tree SHA`);
      return null;
    }
    return sha.trim().toLowerCase();
  }
  if (!hasText(value) || !IMMUTABLE_SHA.test(value.trim())) {
    addError(errors, `${label} must be an immutable 40- or 64-character commit/tree SHA`);
    return null;
  }
  return value.trim().toLowerCase();
}

function revisionValue(value) {
  if (isObject(value)) return value.sha ?? value.hash ?? value.revision ?? null;
  return value;
}

function canonicalOrAlias(object, canonical, alias) {
  return Object.hasOwn(object, canonical) ? object[canonical] : object[alias];
}

function isPlanningMode(mode) {
  return PLANNING_MODES.has(mode);
}

function modeRoles(mode) {
  if (BUILDER_MODES.has(mode)) return new Set(["builder"]);
  if (mode === "review") return new Set(["productDesign", "qaRelease"]);
  if (DESIGN_MODES.has(mode)) return new Set(["productDesign"]);
  if (QA_MODES.has(mode)) return new Set(["qaRelease"]);
  return new Set();
}

function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

function isNonNegativeInteger(value) {
  return Number.isInteger(value) && value >= 0;
}

function addError(errors, message) {
  errors.push(message);
}

function addWarning(warnings, message) {
  warnings.push(message);
}

function normalizeSlash(value) {
  return value.replaceAll("\\", "/");
}

function safeRelative(value, label, errors) {
  if (!hasText(value)) {
    addError(errors, `${label} must be a non-empty relative path`);
    return null;
  }
  const normalized = normalizeSlash(value.trim());
  if (normalized.startsWith("/") || /^[A-Za-z]:\//.test(normalized)) {
    addError(errors, `${label} must not be absolute: ${value}`);
    return null;
  }
  const parts = normalized.split("/");
  if (parts.some((part) => part === "..")) {
    addError(errors, `${label} must not traverse outside the workspace: ${value}`);
    return null;
  }
  const cleaned = parts.filter((part) => part !== "." && part !== "").join("/");
  if (!cleaned) {
    addError(errors, `${label} must name a file or directory`);
    return null;
  }
  return cleaned;
}

function normalizePreviewOrigin(value, label, errors) {
  if (value === undefined || value === null) return null;
  if (!hasText(value)) {
    addError(errors, `${label} must be a non-empty HTTP(S) origin`);
    return null;
  }
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    addError(errors, `${label} must be a valid HTTP(S) origin`);
    return null;
  }
  if (!/^https?:$/.test(parsed.protocol) || parsed.username || parsed.password) {
    addError(errors, `${label} must be an HTTP(S) origin without credentials`);
    return null;
  }
  return parsed.origin;
}

function pathWithin(root, relative, label, errors) {
  const cleaned = safeRelative(relative, label, errors);
  if (!cleaned) return null;
  const absoluteRoot = path.resolve(root);
  const absolute = path.resolve(absoluteRoot, cleaned);
  if (absolute !== absoluteRoot && !absolute.startsWith(`${absoluteRoot}${path.sep}`)) {
    addError(errors, `${label} resolves outside the workspace: ${relative}`);
    return null;
  }
  return { relative: cleaned, absolute };
}

function readJson(root, filePath, errors, label = "file") {
  const target = pathWithin(root, filePath, label, errors);
  if (!target) return null;
  if (!existsSync(target.absolute)) {
    addError(errors, `${label} does not exist: ${filePath}`);
    return null;
  }
  try {
    return { value: JSON.parse(readFileSync(target.absolute, "utf8")), ...target };
  } catch (error) {
    addError(errors, `${label} contains invalid JSON: ${error.message}`);
    return null;
  }
}

function validDate(value) {
  if (!hasText(value)) return false;
  const time = Date.parse(value);
  return Number.isFinite(time);
}

function uniqueStrings(values, label, errors) {
  if (!Array.isArray(values)) {
    addError(errors, `${label} must be an array of strings`);
    return [];
  }
  const result = [];
  const seen = new Set();
  for (const value of values) {
    if (!hasText(value)) {
      addError(errors, `${label} must contain only non-empty strings`);
      continue;
    }
    if (seen.has(value)) {
      addError(errors, `${label} contains duplicate value: ${value}`);
      continue;
    }
    seen.add(value);
    result.push(value);
  }
  return result;
}

function listField(object, keys, label, errors, { required = false } = {}) {
  const key = keys.find((candidate) => Object.hasOwn(object, candidate));
  if (!key) {
    if (required) addError(errors, `${label} is required`);
    return [];
  }
  return uniqueStrings(object[key], label, errors);
}

function identityOf(contract) {
  return hasText(contract.contractVersion)
    ? contract.contractVersion
    : contract.taskVersion;
}

function normalizeResult(value) {
  if (typeof value !== "string") return null;
  const upper = value.trim().toUpperCase();
  if (upper === "PASSED" || upper === "PASS" || upper === "OK") return "PASS";
  if (upper === "INCOMPLETE" || upper === "PARTIAL" || upper === "PENDING") return "PARTIAL";
  if (upper === "FAILED" || upper === "FAIL" || upper === "BLOCKED") return "FAILED";
  return null;
}

function normalizeMatrix(raw, errors) {
  const entries = [];
  if (Array.isArray(raw)) {
    for (const [index, entry] of raw.entries()) {
      if (!isObject(entry)) {
        addError(errors, `evidenceMatrix[${index}] must be an object`);
        continue;
      }
      entries.push({
        id: entry.id ?? entry.evidenceId,
        acceptanceCriteria: entry.acceptanceCriteria ?? entry.acIds ?? entry.covers,
        checks: entry.checks ?? entry.checkIds,
        required: entry.required !== false
      });
      if (Object.hasOwn(entry, "required") && typeof entry.required !== "boolean") {
        addError(errors, `evidenceMatrix[${index}].required must be boolean`);
      }
    }
  } else if (isObject(raw)) {
    for (const [id, entry] of Object.entries(raw)) {
      if (Array.isArray(entry)) {
        entries.push({ id, acceptanceCriteria: entry, checks: [], required: true });
      } else if (isObject(entry)) {
        entries.push({
          id,
          acceptanceCriteria: entry.acceptanceCriteria ?? entry.acIds ?? entry.covers,
          checks: entry.checks ?? entry.checkIds,
          required: entry.required !== false
        });
        if (Object.hasOwn(entry, "required") && typeof entry.required !== "boolean") {
          addError(errors, `evidenceMatrix.${id}.required must be boolean`);
        }
      } else {
        addError(errors, `evidenceMatrix.${id} must be an object or string array`);
      }
    }
  } else {
    addError(errors, "evidenceMatrix must be a non-empty array or object");
    return [];
  }

  const ids = new Set();
  return entries.map((entry, index) => {
    const id = entry.id;
    if (!hasText(id)) addError(errors, `evidenceMatrix[${index}].id is required`);
    else if (ids.has(id)) addError(errors, `evidenceMatrix contains duplicate id: ${id}`);
    else ids.add(id);
    const acceptanceCriteria = listField(entry, ["acceptanceCriteria"], `evidenceMatrix[${index}].acceptanceCriteria`, errors, { required: false });
    const checks = listField(entry, ["checks"], `evidenceMatrix[${index}].checks`, errors, { required: false });
    if (acceptanceCriteria.length === 0 && checks.length === 0) {
      addError(errors, `evidenceMatrix[${index}] must cover at least one acceptance criterion or check`);
    }
    return { id, acceptanceCriteria, checks, required: entry.required !== false };
  });
}

function validateRoutingEntry(entry, role, errors, expected = null) {
  if (!isObject(entry)) {
    addError(errors, `routing.${role} must be an object`);
    return;
  }
  if (!hasText(entry.model)) addError(errors, `routing.${role}.model is required`);
  if (!hasText(entry.reasoning_effort)) addError(errors, `routing.${role}.reasoning_effort is required`);
  else if (!REASONING_EFFORTS.has(entry.reasoning_effort)) addError(errors, `routing.${role}.reasoning_effort is invalid`);
  if (entry.fork_turns !== "none") addError(errors, `routing.${role}.fork_turns must be \"none\"`);
  if (expected && entry.model !== expected.model) addError(errors, `routing.${role}.model must be ${expected.model}`);
  if (expected && entry.reasoning_effort !== expected.reasoning_effort) {
    addError(errors, `routing.${role}.reasoning_effort must be ${expected.reasoning_effort}`);
  }
}

function routingRoles(value) {
  if (!isObject(value)) return null;
  if (isObject(value.roles)) return value.roles;
  if (isObject(value.requestedRouting)) return value.requestedRouting;
  if (isObject(value.requested)) return value.requested;
  return value;
}

function roleEntry(roles, role, errors, label = "routing") {
  const aliases = ROLE_ALIASES[role] ?? [role];
  const present = aliases.filter((alias) => Object.hasOwn(roles, alias));
  if (present.length === 0) {
    addError(errors, `${label}.${role} is required`);
    return null;
  }
  const first = roles[present[0]];
  for (const alias of present.slice(1)) {
    if (stable(roles[alias]) !== stable(first)) {
      addError(errors, `${label}.${role} aliases must agree`);
    }
  }
  return first;
}

export function validateRoleRouting(root, filePath = "harness/role-routing.json") {
  const errors = [];
  const loaded = readJson(root, filePath, errors, "role routing file");
  if (!loaded) return { ok: false, file: filePath, errors, warnings: [] };
  const routing = loaded.value;
  if (!isObject(routing)) {
    addError(errors, "role routing must be an object");
    return { ok: false, file: loaded.relative, errors, warnings: [] };
  }
  if (routing.schema !== ROLE_ROUTING_SCHEMA) addError(errors, `schema must be ${ROLE_ROUTING_SCHEMA}`);
  if (routing.version !== 1) addError(errors, "role routing version must be 1");
  if (routing.mode !== "advisory") addError(errors, "role routing mode must be advisory");
  if (!isObject(routing.activation)) addError(errors, "role routing activation must be an object");
  else if (routing.activation.autoSessionChange !== false) addError(errors, "role routing must not change the orchestrator session automatically");

  const roles = routingRoles(routing);
  if (!isObject(roles)) {
    addError(errors, "role routing roles must be an object");
  } else {
    for (const role of [...ROUTED_ROLES, ...(Object.hasOwn(roles, "productManager") ? ["productManager"] : [])]) {
      validateRoutingEntry(roleEntry(roles, role, errors, "role routing roles"), role, errors);
    }
  }

  const observed = routing.actualRouting ?? routing.observedRouting ?? routing.observed;
  if (observed === undefined) addError(errors, "role routing actualRouting is required; use status unknown when activation is not independently available");
  else validateActualRouting(observed, errors, "role routing actualRouting", roles);
  return { ok: errors.length === 0, file: loaded.relative, errors, warnings: [] };
}

function validateActualRouting(actual, errors, label, expectedRoles = null) {
  if (!isObject(actual)) {
    addError(errors, `${label} must be an object`);
    return;
  }
  if (!["unknown", "confirmed"].includes(actual.status)) addError(errors, `${label}.status must be unknown or confirmed`);
  if (actual.status === "confirmed") {
    if (!isObject(actual.roles)) addError(errors, `${label}.roles is required when routing is confirmed`);
    else for (const role of ROUTED_ROLES) validateRoutingEntry(roleEntry(actual.roles, role, errors, `${label}.roles`), role, errors, expectedRoles?.[role]);
    if (!validDate(actual.observedAt)) addError(errors, `${label}.observedAt is required when routing is confirmed`);
  }
  if (actual.status === "unknown" && Object.hasOwn(actual, "confirmedBy")) {
    addError(errors, `${label} cannot include confirmedBy when status is unknown`);
  }
}

function validateRequestedRouting(requested, errors, label = "requestedRouting") {
  if (!isObject(requested)) {
    addError(errors, `${label} must be an object`);
    return;
  }
  const roles = routingRoles(requested);
  if (!isObject(roles)) {
    addError(errors, `${label}.roles must be an object`);
    return;
  }
  for (const role of [...ROUTED_ROLES, ...(Object.hasOwn(roles, "productManager") ? ["productManager"] : [])]) {
    validateRoutingEntry(roleEntry(roles, role, errors, label), role, errors);
  }
}

function validateRoutingBundle(routing, errors, label = "routing", { required = true } = {}) {
  if (!isObject(routing)) {
    if (required) addError(errors, `${label} is required`);
    return;
  }
  const requested = routing.requested ?? routing.requestedRouting;
  const observed = routing.observed ?? routing.actual ?? routing.observedRouting ?? routing.actualRouting;
  if (requested === undefined) addError(errors, `${label}.requested is required`);
  else validateRequestedRouting(requested, errors, `${label}.requested`);
  if (observed === undefined) addError(errors, `${label}.observed is required; use status unknown when activation is not independently available`);
  else validateActualRouting(observed, errors, `${label}.observed`, routingRoles(requested));
}

function normalizeChecks(contract, errors) {
  const raw = contract.checks ?? contract.checkCommands;
  if (!Array.isArray(raw) || raw.length === 0) {
    addError(errors, "checks must be a non-empty array of command objects");
    return [];
  }
  const ids = new Set();
  return raw.map((check, index) => {
    if (typeof check === "string") {
      check = { id: `CHECK-${String(index + 1).padStart(2, "0")}`, command: check };
    }
    if (!isObject(check)) {
      addError(errors, `checks[${index}] must be an object`);
      return { id: null, command: null, required: true };
    }
    const id = check.id ?? check.checkId;
    const command = check.command;
    if (!hasText(id)) addError(errors, `checks[${index}].id is required`);
    else if (ids.has(id)) addError(errors, `checks contains duplicate id: ${id}`);
    else ids.add(id);
    if (!hasText(command)) addError(errors, `checks[${index}].command is required`);
    if (Object.hasOwn(check, "cwd") && check.cwd !== "." && safeRelative(check.cwd, `checks[${index}].cwd`, errors) === null) {
      // safeRelative records the useful error.
    }
    if (Object.hasOwn(check, "required") && typeof check.required !== "boolean") {
      addError(errors, `checks[${index}].required must be boolean`);
    }
    return { id, command, cwd: check.cwd, required: check.required !== false };
  });
}

function normalizeAcceptanceCriteria(contract, errors) {
  const raw = contract.acceptanceCriteria ?? contract.acceptance;
  if (!Array.isArray(raw) || raw.length === 0) {
    addError(errors, "acceptanceCriteria must be a non-empty array");
    return [];
  }
  const ids = new Set();
  return raw.map((criterion, index) => {
    if (!isObject(criterion)) {
      addError(errors, `acceptanceCriteria[${index}] must be an object`);
      return { id: null, criterion: null };
    }
    const id = criterion.id ?? criterion.acId;
    const description = criterion.criterion ?? criterion.description;
    if (!hasText(id)) addError(errors, `acceptanceCriteria[${index}].id is required`);
    else if (ids.has(id)) addError(errors, `acceptanceCriteria contains duplicate id: ${id}`);
    else ids.add(id);
    if (!hasText(description)) addError(errors, `acceptanceCriteria[${index}].criterion is required`);
    return { id, criterion: description };
  });
}

function validateStopBudget(stopBudget, errors) {
  if (!isObject(stopBudget)) {
    addError(errors, "stopBudget must be an object");
    return { deadlineAt: null, maxMinutes: null, maxImplementationRetries: null, maxTestDebugRetries: null, maxReviewFixCycles: null };
  }
  // Legacy timing fields are optional diagnostic metadata, never stop conditions.
  const deadlineAt = stopBudget.deadlineAt ?? stopBudget.deadline;
  if (deadlineAt != null && !validDate(deadlineAt)) addError(errors, "stopBudget.deadlineAt must be an ISO date");
  const aliases = {
    maxMinutes: ["maxMinutes", "runBudgetMinutes"],
    maxImplementationRetries: ["maxImplementationRetries", "implementationRetries", "maxRetries"],
    maxTestDebugRetries: ["maxTestDebugRetries", "testDebugRetries", "maxRetries"],
    maxReviewFixCycles: ["maxReviewFixCycles", "reviewFixCycles", "maxReviewRetries"]
  };
  const values = { deadlineAt };
  for (const [name, keys] of Object.entries(aliases)) {
    const key = keys.find((candidate) => Object.hasOwn(stopBudget, candidate));
    const value = key ? stopBudget[key] : undefined;
    if (!(name === "maxMinutes" && value == null) && (!isNonNegativeInteger(value) || (name === "maxMinutes" && value === 0))) {
      addError(errors, `stopBudget.${name} must be a ${name === "maxMinutes" ? "positive" : "non-negative"} integer`);
    }
    values[name] = value;
  }
  return values;
}

export function validateTaskContract(root, filePath) {
  const errors = [];
  const warnings = [];
  const loaded = readJson(root, filePath, errors, "task contract");
  if (!loaded) return { ok: false, file: filePath, errors, warnings };
  const contract = loaded.value;
  if (!isObject(contract)) {
    addError(errors, "task contract must be an object");
    return { ok: false, file: loaded.relative, errors, warnings };
  }
  if (contract.schema !== TASK_CONTRACT_SCHEMA) addError(errors, `schema must be ${TASK_CONTRACT_SCHEMA}`);
  if (contract.version !== 1) addError(errors, "task contract version must be 1");
  if (!hasText(contract.taskId)) addError(errors, "taskId is required");
  if (!isPositiveInteger(contract.attempt)) addError(errors, "attempt must be a positive integer");
  if (!hasText(contract.contractVersion) && !hasText(contract.taskVersion)) {
    addError(errors, "contractVersion is required");
  }
  const mode = contract.mode;
  if (!hasText(mode)) addError(errors, "mode is required");
  else if (![...BUILDER_MODES, ...DESIGN_MODES, ...QA_MODES].includes(mode)) addError(errors, `mode is invalid: ${mode}`);
  if (Object.hasOwn(contract, "role") && !["orchestrator", ...REVIEW_ROLES, "designer", "qa"].includes(contract.role)) {
    addError(errors, "role must be orchestrator, builder, productDesign/designer, or qaRelease/qa");
  }
  if (hasText(mode) && !isPlanningMode(mode) && contract.role !== undefined) {
    const expectedRoles = modeRoles(mode);
    const role = contract.role === "designer" ? "productDesign" : contract.role === "qa" ? "qaRelease" : contract.role;
    if (expectedRoles.size > 0 && !expectedRoles.has(role)) addError(errors, `mode ${mode} does not permit role ${contract.role}`);
  }
  const repo = contract.repo ?? contract.repository;
  if (!hasText(repo)) addError(errors, "repo is required");
  else safeRelative(repo, "repo", errors);
  if (!hasText(contract.goal)) addError(errors, "goal is required");
  if (!hasText(contract.baseRevision)) addError(errors, "baseRevision is required");
  else immutableRevision(contract.baseRevision, "baseRevision", errors);

  const suppliedCandidate = Object.hasOwn(contract, "candidateRevision")
    ? contract.candidateRevision
    : contract.candidate;
  if (isPlanningMode(mode)) {
    if (suppliedCandidate !== undefined && suppliedCandidate !== null) {
      addError(errors, `${mode} contract candidateRevision must be null (planning has no candidate)`);
    }
  } else if (mode === IMPLEMENT_MODE) {
    if (suppliedCandidate !== undefined && suppliedCandidate !== null) {
      addError(errors, "implement contract must not bind a future candidateRevision; checkpoint supplies the produced revision");
    }
  } else if (REVIEW_MODES.has(mode)) {
    if (suppliedCandidate === undefined || suppliedCandidate === null) {
      addError(errors, "review contract requires a frozen candidateRevision");
    } else immutableRevision(suppliedCandidate, "candidateRevision", errors);
  }

  const writeScope = contract.writeScope;
  if (!Array.isArray(writeScope) || writeScope.length === 0) {
    addError(errors, "writeScope must be a non-empty array");
  } else {
    for (const [index, item] of writeScope.entries()) safeRelative(item, `writeScope[${index}]`, errors);
  }

  const acceptanceCriteria = normalizeAcceptanceCriteria(contract, errors);
  const checks = normalizeChecks(contract, errors);
  const matrix = normalizeMatrix(contract.evidenceMatrix, errors);
  const acIds = new Set(acceptanceCriteria.map((criterion) => criterion.id).filter(Boolean));
  const checkIds = new Set(checks.map((check) => check.id).filter(Boolean));
  const matrixAcIds = new Set();
  const matrixCheckIds = new Set();
  for (const entry of matrix) {
    for (const id of entry.acceptanceCriteria) {
      if (!acIds.has(id)) addError(errors, `evidenceMatrix ${entry.id} references unknown acceptance id: ${id}`);
      else matrixAcIds.add(id);
    }
    for (const id of entry.checks) {
      if (!checkIds.has(id)) addError(errors, `evidenceMatrix ${entry.id} references unknown check id: ${id}`);
      else matrixCheckIds.add(id);
    }
  }
  for (const id of acIds) if (!matrixAcIds.has(id)) addError(errors, `evidenceMatrix does not cover acceptance id: ${id}`);
  for (const check of checks) if (check.required && check.id && !matrixCheckIds.has(check.id)) {
    addError(errors, `evidenceMatrix does not cover required check: ${check.id}`);
  }

  const stopBudget = validateStopBudget(contract.stopBudget, errors);
  const previewOrigin = normalizePreviewOrigin(contract.previewOrigin, "previewOrigin", errors);
  if (!Array.isArray(contract.requiredReviewers)) addError(errors, "requiredReviewers must be an array");
  else {
    const reviewers = uniqueStrings(contract.requiredReviewers, "requiredReviewers", errors);
    for (const role of reviewers) {
      const normalizedRole = role === "designer" ? "productDesign" : role === "qa" ? "qaRelease" : role;
      if (!REVIEW_ROLES.has(normalizedRole)) addError(errors, `requiredReviewers contains unknown role: ${role}`);
    }
  }
  validateRoutingBundle(contract.routing, errors);
  if (Object.hasOwn(contract, "paused") && typeof contract.paused !== "boolean") addError(errors, "paused must be boolean");
  if (Object.hasOwn(contract, "retryCounts") && !isObject(contract.retryCounts)) addError(errors, "retryCounts must be an object");

  const result = {
    ok: errors.length === 0,
    file: loaded.relative,
    errors,
    warnings,
    taskId: contract.taskId,
    attempt: contract.attempt,
    contractVersion: identityOf(contract),
    normalized: {
      repo,
      writeScope: Array.isArray(writeScope) ? writeScope : [],
      acceptanceCriteria,
      checks,
      matrix,
      acIds,
      checkIds,
      stopBudget,
      previewOrigin,
      mode,
      candidateRevision: suppliedCandidate === undefined || suppliedCandidate === null
        ? null
        : String(revisionValue(suppliedCandidate)).toLowerCase()
    }
  };
  // The validator needs the parsed contract internally, but CLI output should remain a compact gate result.
  Object.defineProperty(result, "contract", { value: contract, enumerable: false });
  Object.defineProperty(result, "normalized", { value: result.normalized, enumerable: false });
  return result;
}

function scopeMatches(filePath, scope) {
  const normalizedFile = normalizeSlash(filePath);
  const normalizedScope = normalizeSlash(scope).replace(/\/$/, "");
  if (normalizedScope.endsWith("/**")) return normalizedFile === normalizedScope.slice(0, -3) || normalizedFile.startsWith(`${normalizedScope.slice(0, -3)}/`);
  if (normalizedScope.endsWith("/*")) {
    const prefix = normalizedScope.slice(0, -2);
    const remainder = normalizedFile.startsWith(`${prefix}/`) ? normalizedFile.slice(prefix.length + 1) : null;
    return remainder !== null && !remainder.includes("/");
  }
  return normalizedFile === normalizedScope || normalizedFile.startsWith(`${normalizedScope}/`);
}

function fileInWriteScope(filePath, repo, scopes) {
  const normalizedFile = normalizeSlash(filePath);
  const candidates = [normalizedFile];
  if (hasText(repo)) {
    const normalizedRepo = normalizeSlash(repo).replace(/\/$/, "");
    if (normalizedFile.startsWith(`${normalizedRepo}/`)) candidates.push(normalizedFile.slice(normalizedRepo.length + 1));
  }
  return scopes.some((scope) => candidates.some((candidate) => scopeMatches(candidate, scope)));
}

function normalizeFileChanges(raw, errors, contract) {
  if (!Array.isArray(raw)) {
    addError(errors, "filesChanged must be an array of file change objects");
    return [];
  }
  const result = [];
  const paths = new Set();
  for (const [index, change] of raw.entries()) {
    if (!isObject(change)) {
      addError(errors, `filesChanged[${index}] must be an object`);
      continue;
    }
    const file = safeRelative(change.path, `filesChanged[${index}].path`, errors);
    if (!file) continue;
    if (paths.has(file)) addError(errors, `filesChanged contains duplicate path: ${file}`);
    paths.add(file);
    if (!fileInWriteScope(file, contract.repo, contract.writeScope)) addError(errors, `filesChanged path is outside writeScope: ${file}`);
    if (Object.hasOwn(change, "change") && !["added", "modified", "deleted", "renamed"].includes(change.change)) {
      addError(errors, `filesChanged[${index}].change must be added, modified, deleted, or renamed`);
    }
    if (Object.hasOwn(change, "sha256") && (!hasText(change.sha256) || !/^[a-f0-9]{64}$/i.test(change.sha256))) {
      addError(errors, `filesChanged[${index}].sha256 must be a SHA-256 hex string`);
    }
    result.push({ ...change, path: file });
  }
  return result;
}

function normalizeEvidence(raw, errors) {
  const entries = [];
  if (Array.isArray(raw)) {
    for (const [index, item] of raw.entries()) {
      if (!isObject(item)) {
        addError(errors, `evidence[${index}] must be an object`);
        continue;
      }
      entries.push({ ...item, id: item.id ?? item.evidenceId });
    }
  } else if (isObject(raw)) {
    for (const [id, item] of Object.entries(raw)) {
      if (typeof item === "string") entries.push({ id, path: item });
      else if (isObject(item)) entries.push({ ...item, id: item.id ?? id });
      else addError(errors, `evidence.${id} must be an object or path string`);
    }
  } else {
    addError(errors, "evidence must be an array or object");
  }
  const ids = new Set();
  return entries.map((item, index) => {
    if (!hasText(item.id)) addError(errors, `evidence[${index}].id is required`);
    else if (ids.has(item.id)) addError(errors, `evidence contains duplicate id: ${item.id}`);
    else ids.add(item.id);
    const evidencePath = safeRelative(item.path, `evidence[${index}].path`, errors);
    if (Object.hasOwn(item, "sha256") && (!hasText(item.sha256) || !/^[a-f0-9]{64}$/i.test(item.sha256))) {
      addError(errors, `evidence[${index}].sha256 must be a SHA-256 hex string`);
    }
    if (Object.hasOwn(item, "acceptanceCriteria") && !Array.isArray(item.acceptanceCriteria)) addError(errors, `evidence[${index}].acceptanceCriteria must be string array`);
    if (Object.hasOwn(item, "acIds") && !Array.isArray(item.acIds)) addError(errors, `evidence[${index}].acIds must be string array`);
    if (Object.hasOwn(item, "checks") && !Array.isArray(item.checks)) addError(errors, `evidence[${index}].checks must be string array`);
    if (Object.hasOwn(item, "checkIds") && !Array.isArray(item.checkIds)) addError(errors, `evidence[${index}].checkIds must be string array`);
    if (Object.hasOwn(item, "covers") && !Array.isArray(item.covers)) addError(errors, `evidence[${index}].covers must be string array`);
    const acceptanceCriteria = Array.isArray(item.acceptanceCriteria)
      ? item.acceptanceCriteria
      : Array.isArray(item.acIds)
        ? item.acIds
        : (Array.isArray(item.covers) ? item.covers.filter((id) => /^AC[-_]/i.test(id)) : []);
    const checks = Array.isArray(item.checks)
      ? item.checks
      : Array.isArray(item.checkIds)
        ? item.checkIds
        : (Array.isArray(item.covers) ? item.covers.filter((id) => /^CHECK[-_]/i.test(id)) : []);
    if (!Array.isArray(acceptanceCriteria) || acceptanceCriteria.some((id) => !hasText(id))) addError(errors, `evidence[${index}].acceptanceCriteria must be string array`);
    if (!Array.isArray(checks) || checks.some((id) => !hasText(id))) addError(errors, `evidence[${index}].checks must be string array`);
    return { ...item, id: item.id, path: evidencePath, acceptanceCriteria: Array.isArray(acceptanceCriteria) ? acceptanceCriteria : [], checks: Array.isArray(checks) ? checks : [] };
  });
}

function normalizeMappings(raw, label, errors) {
  if (Array.isArray(raw)) {
    return raw.map((item, index) => {
      if (!isObject(item)) {
        addError(errors, `${label}[${index}] must be an object`);
        return { id: null, result: null, evidence: [] };
      }
      const id = item.id ?? item.acId ?? item.checkId;
      const result = normalizeResult(item.result ?? item.status ?? item.verdict);
      if (!hasText(id)) addError(errors, `${label}[${index}].id is required`);
      if (!result) addError(errors, `${label}[${index}] result must be PASS, PARTIAL, or FAILED`);
      if (Object.hasOwn(item, "evidence") && !Array.isArray(item.evidence)) addError(errors, `${label}[${index}].evidence must be an array`);
      return { ...item, id, result, evidence: Array.isArray(item.evidence) ? item.evidence : [] };
    });
  }
  if (isObject(raw)) {
    return Object.entries(raw).map(([id, item], index) => {
      if (typeof item === "string") return { id, result: normalizeResult(item), evidence: [] };
      if (!isObject(item)) {
        addError(errors, `${label}.${id} must be an object or result string`);
        return { id, result: null, evidence: [] };
      }
      const result = normalizeResult(item.result ?? item.status ?? item.verdict);
      if (!result) addError(errors, `${label}.${id} result must be PASS, PARTIAL, or FAILED`);
      if (Object.hasOwn(item, "evidence") && !Array.isArray(item.evidence)) addError(errors, `${label}.${id}.evidence must be an array`);
      return { ...item, id, result, evidence: Array.isArray(item.evidence) ? item.evidence : [] };
    });
  }
  addError(errors, `${label} must be an array or object`);
  return [];
}

function validateEvents(checkpoint, errors, warnings) {
  const raw = checkpoint.events ?? checkpoint.eventLog;
  if (raw === undefined && checkpoint.eventId === undefined) {
    addError(errors, "eventId is required (completion events are keyed by task, attempt, and event ID)");
    return { duplicate: false, stale: false, eventIds: [] };
  }
  const events = raw === undefined ? [checkpoint] : raw;
  if (!Array.isArray(events)) {
    addError(errors, "events must be an array");
    return { duplicate: false, stale: false, eventIds: [] };
  }
  const eventIds = new Set();
  const keys = new Set();
  const processed = checkpoint.processedEventIds;
  if (processed !== undefined) uniqueStrings(processed, "processedEventIds", errors);
  let duplicate = false;
  let stale = false;
  const candidate = revisionValue(checkpoint.candidateRevision);
  for (const [index, event] of events.entries()) {
    if (!isObject(event)) {
      addError(errors, `events[${index}] must be an object`);
      continue;
    }
    const eventId = event.eventId ?? event.id;
    const taskId = event.taskId ?? checkpoint.taskId;
    const attempt = event.attempt ?? checkpoint.attempt;
    const eventCandidate = revisionValue(canonicalOrAlias(event, "candidateRevision", "candidate"));
    const archived = event.archived === true || event.state === "archived" || event.status === "archived";
    if (!hasText(eventId)) addError(errors, `events[${index}].eventId is required`);
    else if (eventIds.has(eventId)) {
      duplicate = true;
      addError(errors, `duplicate event id: ${eventId}`);
    } else eventIds.add(eventId);
    if (taskId !== checkpoint.taskId) {
      stale = true;
      if (archived) addWarning(warnings, `archived stale event ignored: ${eventId ?? index}`);
      else addError(errors, `stale event ${eventId ?? index}: taskId does not match checkpoint`);
    }
    if (attempt !== checkpoint.attempt) {
      stale = true;
      if (!archived) addError(errors, `stale event ${eventId ?? index}: attempt does not match checkpoint`);
    }
    if (candidate !== null && eventCandidate !== null && eventCandidate !== candidate) {
      stale = true;
      if (!archived) addError(errors, `stale event ${eventId ?? index}: candidateRevision does not match checkpoint`);
    }
    if (event.at !== undefined && !validDate(event.at)) addError(errors, `events[${index}].at must be an ISO date`);
    const key = `${taskId}:${attempt}:${eventId}`;
    if (keys.has(key)) {
      duplicate = true;
      addError(errors, `duplicate task attempt event: ${key}`);
    } else keys.add(key);
  }
  if (Array.isArray(processed)) {
    for (const eventId of eventIds) {
      if (processed.includes(eventId)) {
        duplicate = true;
        addError(errors, `duplicate processed event id: ${eventId}`);
      }
      if (processed.filter((id) => id === eventId).length > 1) {
        duplicate = true;
        addError(errors, `duplicate processed event id: ${eventId}`);
      }
    }
  }
  return { duplicate, stale, eventIds: [...eventIds] };
}

function normalizeReviews(raw, errors) {
  if (raw === undefined) return [];
  if (Array.isArray(raw)) {
    return raw.map((review, index) => {
      if (!isObject(review)) {
        addError(errors, `reviews[${index}] must be an object`);
        return { role: null };
      }
      return review;
    });
  }
  if (isObject(raw)) {
    return Object.entries(raw).map(([role, review]) => {
      if (!isObject(review)) {
        addError(errors, `reviews.${role} must be an object`);
        return { role };
      }
      return { ...review, role: review.role ?? role };
    });
  }
  addError(errors, "reviews must be an array or object");
  return [];
}

function validateReviewBindings(reviews, checkpoint, contract, errors) {
  const seenRoles = new Set();
  const reviewState = checkpoint.reviewState ?? (checkpoint.taskState === "accepted" ? "review_pending" : checkpoint.taskState);
  for (const [index, review] of reviews.entries()) {
    const role = review.role === "designer" ? "productDesign" : review.role === "qa" ? "qaRelease" : review.role;
    if (!REVIEW_ROLES.has(role)) addError(errors, `reviews[${index}].role is invalid`);
    else if (seenRoles.has(role)) addError(errors, `reviews contains duplicate role: ${role}`);
    else seenRoles.add(role);
    const result = normalizeResult(review.result ?? review.status ?? review.verdict);
    if (!result) addError(errors, `reviews[${index}] result must be PASS, PARTIAL, or FAILED`);
    if (review.taskId !== checkpoint.taskId) addError(errors, `reviews[${index}] taskId does not match checkpoint`);
    if (review.attempt !== checkpoint.attempt) addError(errors, `reviews[${index}] attempt does not match checkpoint`);
    const reviewVersion = review.contractVersion ?? review.version;
    if (!hasText(reviewVersion)) addError(errors, `reviews[${index}] contract version is required`);
    else if (reviewVersion !== identityOf(contract) && reviewVersion !== contract.version) addError(errors, `reviews[${index}] contract version does not match task contract`);
    if (String(revisionValue(canonicalOrAlias(review, "candidateRevision", "candidate"))).toLowerCase() !== String(revisionValue(checkpoint.candidateRevision)).toLowerCase()) {
      addError(errors, `reviews[${index}] candidateRevision does not match checkpoint`);
    }
    if (review.taskState !== reviewState) addError(errors, `reviews[${index}] taskState does not match review state`);
  }
  return { seenRoles, reviewState };
}

function effectiveNow(checkpoint, options, errors) {
  const value = options?.now ?? checkpoint.checkedAt ?? new Date().toISOString();
  if (!validDate(value)) {
    addError(errors, "validation time must be an ISO date");
    return Date.now();
  }
  return Date.parse(value);
}

function validateRetryCounts(checkpoint, stopBudget, errors) {
  const raw = checkpoint.retryCounts ?? checkpoint.retries;
  if (raw === undefined) return { implementation: 0, testDebug: 0, reviewFix: 0 };
  if (!isObject(raw)) {
    addError(errors, "retryCounts must be an object");
    return { implementation: 0, testDebug: 0, reviewFix: 0 };
  }
  const values = {
    implementation: raw.implementation ?? raw.implementationRetries ?? 0,
    testDebug: raw.testDebug ?? raw.testDebugRetries ?? 0,
    reviewFix: raw.reviewFix ?? raw.reviewFixCycles ?? 0
  };
  for (const [name, value] of Object.entries(values)) if (!isNonNegativeInteger(value)) addError(errors, `retryCounts.${name} must be a non-negative integer`);
  if (isNonNegativeInteger(values.implementation) && isNonNegativeInteger(stopBudget.maxImplementationRetries) && values.implementation > stopBudget.maxImplementationRetries) addError(errors, "implementation retry budget exceeded");
  if (isNonNegativeInteger(values.testDebug) && isNonNegativeInteger(stopBudget.maxTestDebugRetries) && values.testDebug > stopBudget.maxTestDebugRetries) addError(errors, "test/debug retry budget exceeded");
  if (isNonNegativeInteger(values.reviewFix) && isNonNegativeInteger(stopBudget.maxReviewFixCycles) && values.reviewFix > stopBudget.maxReviewFixCycles) addError(errors, "review/fix budget exceeded");
  if (checkpoint.taskState === "retry") {
    const retryKind = checkpoint.retryKind ?? checkpoint.retryType;
    const exhausted = retryKind === "implementation"
      ? values.implementation >= stopBudget.maxImplementationRetries
      : retryKind === "testDebug"
        ? values.testDebug >= stopBudget.maxTestDebugRetries
        : retryKind === "reviewFix"
          ? values.reviewFix >= stopBudget.maxReviewFixCycles
          : values.implementation >= stopBudget.maxImplementationRetries ||
            values.testDebug >= stopBudget.maxTestDebugRetries ||
            values.reviewFix >= stopBudget.maxReviewFixCycles;
    if (exhausted) addError(errors, "retry budget exhausted; task cannot advance another retry");
  }
  return values;
}

function validateEvidenceFiles(root, evidence, errors, warnings, status) {
  for (const item of evidence) {
    if (!item.path) continue;
    const target = pathWithin(root, item.path, `evidence ${item.id ?? "item"}.path`, errors);
    if (!target) continue;
    if (!existsSync(target.absolute) || !statSync(target.absolute).isFile()) {
      if (status === "PASS") addError(errors, `evidence path missing: ${item.path}`);
      else addWarning(warnings, `evidence path missing: ${item.path}`);
      continue;
    }
    if (hasText(item.sha256)) {
      const hash = createHash("sha256").update(readFileSync(target.absolute)).digest("hex");
      if (hash !== item.sha256) addError(errors, `evidence hash mismatch: ${item.path}`);
    }
  }
}

export function validateCheckpoint(root, checkpointFile, contractFile, options = {}) {
  const errors = [];
  const warnings = [];
  const loaded = readJson(root, checkpointFile, errors, "checkpoint");
  if (!loaded) return { ok: false, file: checkpointFile, errors, warnings };
  const checkpoint = loaded.value;
  if (!isObject(checkpoint)) {
    addError(errors, "checkpoint must be an object");
    return { ok: false, file: loaded.relative, errors, warnings };
  }
  const contractResult = validateTaskContract(root, contractFile);
  if (!contractResult.ok) errors.push(...contractResult.errors.map((error) => `contract: ${error}`));
  const contract = contractResult.contract;
  if (!contract) return { ok: false, file: loaded.relative, contractFile, errors, warnings };
  const normalizedContract = contractResult.normalized;

  if (checkpoint.schema !== CHECKPOINT_SCHEMA) addError(errors, `schema must be ${CHECKPOINT_SCHEMA}`);
  if (checkpoint.version !== 1) addError(errors, "checkpoint version must be 1");
  if (checkpoint.taskId !== contract.taskId) addError(errors, "checkpoint taskId does not match task contract");
  if (checkpoint.attempt !== contract.attempt) addError(errors, "checkpoint attempt does not match task contract");
  const checkpointContractVersion = checkpoint.contractVersion ?? checkpoint.taskVersion;
  if (!hasText(checkpointContractVersion)) addError(errors, "checkpoint contractVersion is required");
  else if (checkpointContractVersion !== identityOf(contract)) {
    addError(errors, "checkpoint contract version does not match task contract");
  }
  if (checkpoint.mode === undefined) addError(errors, "checkpoint mode is required");
  else if (checkpoint.mode !== normalizedContract.mode) addError(errors, "checkpoint mode does not match task contract");
  if (!hasText(checkpoint.repo)) addError(errors, "checkpoint repo is required");
  else if (checkpoint.repo !== contractResult.normalized.repo) addError(errors, "checkpoint repo does not match task contract");
  if (!hasText(checkpoint.baseRevision)) addError(errors, "checkpoint baseRevision is required");
  else if (String(revisionValue(checkpoint.baseRevision)).toLowerCase() !== String(revisionValue(contract.baseRevision)).toLowerCase()) addError(errors, "checkpoint baseRevision does not match task contract");
  const checkpointCandidate = Object.hasOwn(checkpoint, "candidateRevision")
    ? checkpoint.candidateRevision
    : checkpoint.candidate;
  let candidateRevision = null;
  if (isPlanningMode(normalizedContract.mode)) {
    if (checkpointCandidate !== null) addError(errors, `${normalizedContract.mode} checkpoint candidateRevision must be null`);
  } else {
    if (checkpointCandidate === undefined || checkpointCandidate === null) addError(errors, "candidateRevision is required and must be immutable");
    else candidateRevision = immutableRevision(checkpointCandidate, "candidateRevision", errors);
    if (normalizedContract.mode === "review" && normalizedContract.candidateRevision !== null && candidateRevision !== normalizedContract.candidateRevision) {
      addError(errors, "checkpoint candidateRevision does not match the frozen review candidate");
    }
  }
  if (!hasText(checkpoint.status) || !CHECK_RESULTS.has(checkpoint.status)) addError(errors, "status must be PASS, PARTIAL, or FAILED");
  const status = checkpoint.status;
  const taskState = checkpoint.taskState ?? checkpoint.state;
  if (!TASK_STATES.has(taskState)) addError(errors, "taskState must be a known task state");
  if (Object.hasOwn(checkpoint, "paused") && typeof checkpoint.paused !== "boolean") addError(errors, "paused must be boolean");
  const paused = checkpoint.paused === true || contract.paused === true || taskState === "paused" || taskState === "blocked";
  if (paused && status === "PASS") addError(errors, "paused or blocked task cannot advance with PASS");
  if (taskState === "accepted" && status !== "PASS") addError(errors, "accepted task state requires PASS; PARTIAL/FAILED cannot be accepted");
  if (status === "PASS" && !["review_pending", "accepted"].includes(taskState)) addError(errors, "PASS task state must be review_pending or accepted");

  effectiveNow(checkpoint, options, errors);
  const stopBudget = normalizedContract.stopBudget;
  if (isPositiveInteger(checkpoint.attempt) && isNonNegativeInteger(stopBudget.maxImplementationRetries) && checkpoint.attempt > stopBudget.maxImplementationRetries + 1) {
    addError(errors, "task attempt exceeds implementation retry budget");
  }
  const retryCounts = validateRetryCounts(checkpoint, stopBudget, errors);
  const eventGate = validateEvents(checkpoint, errors, warnings);
  if (status === "PASS" && eventGate.stale) addError(errors, "stale event cannot advance the task");
  if (status === "PASS" && eventGate.duplicate) addError(errors, "duplicate event cannot advance the task twice");

  const fileChanges = normalizeFileChanges(checkpoint.filesChanged ?? checkpoint.files, errors, {
    repo: normalizedContract.repo,
    writeScope: normalizedContract.writeScope
  });
  const checks = normalizeMappings(checkpoint.checks ?? checkpoint.checkResults, "checks", errors);
  const acceptance = normalizeMappings(checkpoint.acceptanceCriteria ?? checkpoint.acceptance ?? checkpoint.acMapping, "acceptance", errors);
  const evidence = normalizeEvidence(checkpoint.evidence ?? checkpoint.evidenceMatrix, errors);
  for (const item of evidence) {
    if (!Array.isArray(item.covers)) continue;
    for (const id of item.covers) {
      if (normalizedContract.acIds.has(id)) item.acceptanceCriteria.push(id);
      else if (normalizedContract.checkIds.has(id)) item.checks.push(id);
      else if (!hasText(id)) addError(errors, `evidence ${item.id}.covers must contain strings`);
    }
  }
  validateEvidenceFiles(root, evidence, errors, warnings, status);

  const knownCheckIds = normalizedContract.checkIds;
  const knownAcIds = normalizedContract.acIds;
  const seenChecks = new Set();
  for (const check of checks) {
    if (!knownCheckIds.has(check.id)) addError(errors, `checkpoint references unknown check: ${check.id}`);
    if (seenChecks.has(check.id)) addError(errors, `checkpoint contains duplicate check: ${check.id}`);
    seenChecks.add(check.id);
    const definition = normalizedContract.checks.find((item) => item.id === check.id);
    if (!hasText(check.command)) addError(errors, `check ${check.id} command is required`);
    if (definition && hasText(check.command) && check.command !== definition.command) addError(errors, `check ${check.id} command does not match task contract`);
  }
  const seenAc = new Set();
  for (const criterion of acceptance) {
    if (!knownAcIds.has(criterion.id)) addError(errors, `checkpoint references unknown acceptance id: ${criterion.id}`);
    if (seenAc.has(criterion.id)) addError(errors, `checkpoint contains duplicate acceptance id: ${criterion.id}`);
    seenAc.add(criterion.id);
  }
  for (const id of knownAcIds) {
    if (!seenAc.has(id)) addError(errors, `checkpoint is missing acceptance id: ${id}`);
  }
  const evidenceIds = new Set(evidence.map((item) => item.id));
  const coveredAc = new Set();
  const coveredChecks = new Set();
  for (const item of evidence) {
    for (const id of item.acceptanceCriteria) {
      if (!knownAcIds.has(id)) addError(errors, `evidence ${item.id} references unknown acceptance id: ${id}`);
      else coveredAc.add(id);
    }
    for (const id of item.checks) {
      if (!knownCheckIds.has(id)) addError(errors, `evidence ${item.id} references unknown check id: ${id}`);
      else coveredChecks.add(id);
    }
  }
  const expectedEvidence = new Set(normalizedContract.matrix.filter((entry) => entry.required).map((entry) => entry.id));
  if (!Array.isArray(checkpoint.deviations)) addError(errors, "deviations must be an array");
  if (!Array.isArray(checkpoint.unresolved)) addError(errors, "unresolved must be an array");
  const deviations = Array.isArray(checkpoint.deviations) ? checkpoint.deviations : [];
  const unresolved = Array.isArray(checkpoint.unresolved) ? checkpoint.unresolved : [];
  if (status === "PASS") {
    for (const id of knownAcIds) {
      const result = acceptance.find((item) => item.id === id)?.result;
      if (result !== "PASS") addError(errors, `PASS requires acceptance id ${id} to be PASS`);
      if (!coveredAc.has(id)) addError(errors, `PASS evidence does not cover acceptance id ${id}`);
    }
    for (const definition of normalizedContract.checks) {
      if (!definition.required) continue;
      const result = checks.find((item) => item.id === definition.id)?.result;
      if (result !== "PASS") addError(errors, `PASS requires check ${definition.id} to be PASS`);
      if (!coveredChecks.has(definition.id)) addError(errors, `PASS evidence does not cover check ${definition.id}`);
    }
    for (const id of expectedEvidence) if (!evidenceIds.has(id)) addError(errors, `PASS is missing evidence matrix item ${id}`);
    if (deviations.length > 0) addError(errors, "PASS cannot contain deviations");
    if (unresolved.length > 0) addError(errors, "PASS cannot contain unresolved blockers");
  } else if (status === "PARTIAL") {
    const hasIncompleteOutcome = acceptance.some((item) => item.result !== "PASS") ||
      checks.some((item) => item.result !== "PASS") ||
      deviations.length > 0 || unresolved.length > 0 ||
      knownCheckIds.size !== new Set(checks.map((item) => item.id)).size;
    if (!hasIncompleteOutcome) addError(errors, "PARTIAL must identify unfinished criteria, verification, deviations, or blockers");
  } else if (status === "FAILED") {
    const hasFailure = acceptance.some((item) => item.result === "FAILED") ||
      checks.some((item) => item.result === "FAILED") ||
      deviations.length > 0 || unresolved.length > 0;
    if (!hasFailure) addError(errors, "FAILED must identify a failed criterion/check or unresolved blocker");
  }

  const checkpointRouting = checkpoint.routing ?? ((Object.hasOwn(checkpoint, "requestedRouting") || Object.hasOwn(checkpoint, "actualRouting"))
    ? { requested: checkpoint.requestedRouting, actual: checkpoint.actualRouting }
    : undefined);
  validateRoutingBundle(checkpointRouting, errors, "checkpoint routing");
  const expectedRouting = routingRoles(contract.routing?.requested ?? contract.routing?.requestedRouting);
  const reportedRouting = routingRoles(checkpointRouting?.requested ?? checkpointRouting?.requestedRouting);
  if (isObject(expectedRouting) && isObject(reportedRouting)) {
    for (const role of ROUTED_ROLES) {
      validateRoutingEntry(roleEntry(reportedRouting, role, errors, "checkpoint routing.requested"), role, errors,
        roleEntry(expectedRouting, role, errors, "contract routing.requested"));
    }
  }

  const reviews = normalizeReviews(checkpoint.reviews ?? checkpoint.reviewResults, errors);
  const reviewInfo = validateReviewBindings(reviews, checkpoint, contract, errors);
  const requiredReviewers = Array.isArray(contract.requiredReviewers) ? contract.requiredReviewers : [];
  if (status === "PASS" && taskState === "accepted") {
    const normalizedRequiredReviewers = requiredReviewers.map((role) => role === "designer" ? "productDesign" : role === "qa" ? "qaRelease" : role);
    if (normalizedContract.mode === "implement" && !normalizedRequiredReviewers.some((role) => role === "productDesign" || role === "qaRelease")) {
      addError(errors, "accepted implementation PASS requires an independent productDesign/designer or qaRelease/qa reviewer; builder alone cannot accept");
    }
    for (const role of requiredReviewers) {
      const normalizedRole = role === "designer" ? "productDesign" : role === "qa" ? "qaRelease" : role;
      const review = reviews.find((item) => {
        const itemRole = item.role === "designer" ? "productDesign" : item.role === "qa" ? "qaRelease" : item.role;
        return itemRole === normalizedRole;
      });
      if (!review) addError(errors, `accepted PASS requires review from ${role}`);
      else if (normalizeResult(review.result ?? review.status ?? review.verdict) !== "PASS") addError(errors, `accepted PASS requires ${role} review to be PASS`);
    }
  }
  return {
    ok: errors.length === 0,
    file: loaded.relative,
    contractFile,
    errors,
    warnings,
    taskId: checkpoint.taskId,
    attempt: checkpoint.attempt,
    contractVersion: checkpointContractVersion,
    candidateRevision: candidateRevision,
    status,
    taskState,
    acceptanceAllowed: status === "PASS" && taskState === "accepted" && errors.length === 0,
    filesChanged: fileChanges,
    checks,
    acceptance,
    reviews,
    reviewState: reviewInfo.reviewState,
    retryCounts,
    eventGate,
    paused
  };
}

export function validateHandoff(root, contractFile, checkpointFile, options = {}) {
  const contract = validateTaskContract(root, contractFile);
  if (!checkpointFile) return { ok: contract.ok, contract, errors: contract.errors, warnings: contract.warnings };
  const checkpoint = validateCheckpoint(root, checkpointFile, contractFile, options);
  return {
    ok: contract.ok && checkpoint.ok,
    contract,
    checkpoint,
    errors: [...contract.errors, ...checkpoint.errors.filter((error) => !error.startsWith("contract: "))],
    warnings: [...contract.warnings, ...checkpoint.warnings]
  };
}
