import {
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  closeSync,
  writeFileSync,
  unlinkSync
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STATE_SCHEMA, STATE_VERSION } from "./state.mjs";

export const METRICS_SCHEMA = "dexter.product_studio.pilot_metrics.v1";
export const METRICS_VERSION = 1;

const PHASES = new Set(["baseline", "final"]);
const RETRY_KEYS = ["implementation", "testDebug", "reviewFix"];
const RETRY_ALIASES = new Map([
  ["implementation", "implementation"],
  ["implementationRetry", "implementation"],
  ["implementationRetries", "implementation"],
  ["testDebug", "testDebug"],
  ["testDebugRetry", "testDebug"],
  ["testDebugRetries", "testDebug"],
  ["reviewFix", "reviewFix"],
  ["reviewFixRetry", "reviewFix"],
  ["reviewFixRetries", "reviewFix"]
]);
const MANUAL_ALIASES = {
  founderInterruptions: ["founderInterruptions", "founderInterruptionCount"],
  escapedDefects: ["escapedDefects", "escapedDefectCount"],
  costUsd: ["costUsd", "cost"],
  tokens: ["tokens", "tokenCount"]
};

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasOwn(value, key) {
  return isObject(value) && Object.prototype.hasOwnProperty.call(value, key);
}

function clone(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (isObject(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function validNonNegativeNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function validNonNegativeInteger(value) {
  return Number.isInteger(value) && value >= 0;
}

function iso(value, label) {
  const parsed = new Date(value);
  if (!Number.isFinite(parsed.getTime())) throw new TypeError(`${label} must be a valid ISO date`);
  return parsed.toISOString();
}

function validation(label, message) {
  throw new TypeError(`${label} ${message}`);
}

function validateAuthoritativeState(state) {
  if (!isObject(state)) validation("state", "must be an object");
  if (state.schema !== STATE_SCHEMA) validation("state.schema", `must be ${STATE_SCHEMA}`);
  if (state.version !== STATE_VERSION) validation("state.version", `must be ${STATE_VERSION}`);
  if (!isObject(state.run)) validation("state.run", "must be an object");
  if (!hasText(state.run.runId)) validation("state.run.runId", "must be a non-empty string");
  if (!isObject(state.run.budget)) validation("state.run.budget", "must be an object");
  if (!validNonNegativeNumber(state.run.budget.activeElapsedSeconds)) {
    validation("state.run.budget.activeElapsedSeconds", "must be a non-negative number");
  }
  if (hasOwn(state.run.budget, "pausedHumanWaitSeconds") && !validNonNegativeNumber(state.run.budget.pausedHumanWaitSeconds)) {
    validation("state.run.budget.pausedHumanWaitSeconds", "must be a non-negative number");
  }
  if (hasOwn(state.run, "updatedAt")) iso(state.run.updatedAt, "state.run.updatedAt");
  if (!isObject(state.tasks)) validation("state.tasks", "must be an object keyed by task ID");
  for (const [taskId, task] of Object.entries(state.tasks)) {
    if (!isObject(task)) validation(`state.tasks.${taskId}`, "must be an object");
    if (!hasText(task.taskId)) validation(`state.tasks.${taskId}.taskId`, "must be a non-empty string");
    if (task.taskId !== taskId) validation(`state.tasks.${taskId}.taskId`, "must match its key");
    if (task.runId !== state.run.runId) validation(`state.tasks.${taskId}.runId`, "must match state.run.runId");
    if (!validNonNegativeInteger(task.attempt) || task.attempt < 1) validation(`state.tasks.${taskId}.attempt`, "must be a positive integer");
    if (!hasText(task.contractFile)) validation(`state.tasks.${taskId}.contractFile`, "must be a non-empty string");
    if (!hasText(task.contractVersion)) validation(`state.tasks.${taskId}.contractVersion`, "must be a non-empty string");
    if (hasOwn(task, "retryCounts") && !isObject(task.retryCounts)) validation(`state.tasks.${taskId}.retryCounts`, "must be an object");
    if (hasOwn(task, "completionHistory") && !Array.isArray(task.completionHistory)) validation(`state.tasks.${taskId}.completionHistory`, "must be an array");
    if (hasOwn(task, "writeScope") && !Array.isArray(task.writeScope)) validation(`state.tasks.${taskId}.writeScope`, "must be an array");
    if (hasOwn(task, "acceptance") && !Array.isArray(task.acceptance)) validation(`state.tasks.${taskId}.acceptance`, "must be an array");
  }
  for (const key of ["events", "archivedEvents", "processedEventIds"]) {
    if (hasOwn(state, key) && !Array.isArray(state[key])) validation(`state.${key}`, "must be an array");
  }
  for (const [index, event] of (Array.isArray(state.events) ? state.events : []).entries()) {
    if (!isObject(event) || !hasText(event.eventId)) validation(`state.events[${index}]`, "must contain a non-empty eventId");
  }
  for (const [index, event] of (Array.isArray(state.archivedEvents) ? state.archivedEvents : []).entries()) {
    if (!isObject(event) || !hasText(event.eventId)) validation(`state.archivedEvents[${index}]`, "must contain a non-empty eventId");
  }
  for (const [index, eventId] of (Array.isArray(state.processedEventIds) ? state.processedEventIds : []).entries()) {
    if (!hasText(eventId)) validation(`state.processedEventIds[${index}]`, "must be a non-empty string");
  }
  return state;
}

function policyCandidate(state, options) {
  const optionValue = hasOwn(options, "routingPolicyVersion")
    ? options.routingPolicyVersion
    : hasOwn(options, "routingPolicy")
      ? options.routingPolicy
      : undefined;
  const stateValues = [
    ["state.routingPolicyVersion", state.routingPolicyVersion],
    ["state.run.routingPolicyVersion", state.run.routingPolicyVersion],
    ["state.routingPolicy", state.routingPolicy],
    ["state.run.routingPolicy", state.run.routingPolicy],
    ["state.routing", isObject(state.routing) && (hasOwn(state.routing, "version") || hasOwn(state.routing, "policyVersion")) ? state.routing : undefined],
    ["state.run.routing", isObject(state.run.routing) && (hasOwn(state.run.routing, "version") || hasOwn(state.run.routing, "policyVersion")) ? state.run.routing : undefined]
  ].filter(([, value]) => value !== undefined && value !== null);
  const stateValue = stateValues[0]?.[1];
  const stateSource = stateValues[0]?.[0];
  const supplied = optionValue !== undefined && optionValue !== null ? optionValue : stateValue;
  if (supplied === undefined || supplied === null) {
    return {
      value: null,
      source: "unavailable",
      reason: "routing policy version was not supplied by authoritative state or measurement input"
    };
  }
  const normalized = normalizePolicyVersion(supplied);
  const normalizedState = stateValue === undefined || stateValue === null ? null : normalizePolicyVersion(stateValue);
  if (optionValue !== undefined && optionValue !== null && normalizedState !== null && stable(normalized) !== stable(normalizedState)) {
    throw new Error("measurement routing policy version does not match authoritative state");
  }
  return {
    value: normalized,
    source: optionValue !== undefined && optionValue !== null ? "measurement input" : stateSource,
    reason: null
  };
}

function normalizePolicyVersion(value) {
  if (typeof value === "string") {
    if (!hasText(value)) validation("routingPolicyVersion", "must not be empty");
    return value;
  }
  if (Number.isInteger(value) && value >= 0) return value;
  if (!isObject(value)) validation("routingPolicyVersion", "must be a non-empty string, non-negative integer, or version object");
  if (!hasOwn(value, "version") && !hasOwn(value, "policyVersion")) {
    validation("routingPolicyVersion", "object must contain version or policyVersion");
  }
  const version = value.version ?? value.policyVersion;
  if (!(hasText(version) || (Number.isInteger(version) && version >= 0))) {
    validation("routingPolicyVersion.version", "must be a non-empty string or non-negative integer");
  }
  if (hasOwn(value, "schema") && !hasText(value.schema)) validation("routingPolicyVersion.schema", "must be a non-empty string");
  // A routing policy file can contain model records and activation notes. The
  // measurement identity is only its version (and optional schema), not a
  // copy of those operational details.
  return hasText(value.schema)
    ? { schema: value.schema, version }
    : { version };
}

function historyArrays(state) {
  const explicit = [
    ["state.history", state.history],
    ["state.eventHistory", state.eventHistory],
    ["state.completionHistory", state.completionHistory]
  ].filter(([, value]) => value !== undefined);
  if (explicit.length > 0) {
    const [source, value] = explicit[0];
    if (!Array.isArray(value)) validation(source, "must be an array");
    return { entries: value, source, available: true };
  }
  const entries = [];
  if (Array.isArray(state.events)) entries.push(...state.events);
  if (Array.isArray(state.archivedEvents)) entries.push(...state.archivedEvents);
  if (entries.length > 0 || Array.isArray(state.events) || Array.isArray(state.archivedEvents)) {
    return { entries, source: "state.events + state.archivedEvents", available: true };
  }
  return {
    entries: [],
    source: "unavailable",
    available: false,
    reason: "authoritative state does not include event history"
  };
}

function nestedHistoryRecords(item) {
  const records = [item];
  if (isObject(item?.event)) records.push(item.event);
  if (isObject(item?.completion)) records.push(item.completion);
  if (isObject(item?.record)) records.push(item.record);
  return records;
}

function historyText(item) {
  const values = [];
  for (const record of nestedHistoryRecords(item)) {
    for (const key of ["outcome", "result", "status", "type", "eventType", "reason", "message", "decision"]) {
      if (hasText(record?.[key])) values.push(record[key]);
    }
    if (record?.notificationDecision && hasText(record.notificationDecision.reason)) values.push(record.notificationDecision.reason);
  }
  return values.join(" ").toLowerCase();
}

function isDuplicateHistoryItem(item) {
  for (const record of nestedHistoryRecords(item)) {
    if (record?.duplicate === true || record?.isDuplicate === true || record?.duplicateEvent === true) return true;
  }
  return /\bduplicate\b|already[ -]processed|deduplicat/.test(historyText(item));
}

function isStaleHistoryItem(item) {
  for (const record of nestedHistoryRecords(item)) {
    if (record?.stale === true || record?.isStale === true || record?.staleEvent === true) return true;
  }
  return /\bstale\b|out[ -]of[ -]date|older candidate|does not match authoritative/.test(historyText(item));
}

function explicitStateCount(state, keys) {
  const sources = [
    ["state", state],
    ["state.metrics", state.metrics],
    ["state.run.metrics", state.run.metrics]
  ];
  for (const [source, value] of sources) {
    if (!isObject(value)) continue;
    for (const key of keys) {
      if (hasOwn(value, key)) return { value: value[key], source: `${source}.${key}` };
    }
  }
  return null;
}

function eventOutcomeMetrics(state) {
  const history = historyArrays(state);
  const explicitDuplicate = explicitStateCount(state, ["duplicateEvents", "duplicateCount", "duplicates"]);
  const explicitStale = explicitStateCount(state, ["staleEvents", "staleCount", "stale"]);
  const normalizeExplicit = (entry, label) => {
    if (!entry) return null;
    if (!validNonNegativeInteger(entry.value)) validation(entry.source, "must be a non-negative integer");
    return { value: entry.value, source: entry.source, reason: null };
  };
  if (history.available) {
    let duplicateEvents = 0;
    let staleEvents = 0;
    for (const [index, item] of history.entries.entries()) {
      if (!isObject(item)) validation(`${history.source}[${index}]`, "must be an object");
      if (isDuplicateHistoryItem(item)) duplicateEvents += 1;
      if (isStaleHistoryItem(item)) staleEvents += 1;
    }
    const duplicate = normalizeExplicit(explicitDuplicate, "duplicate") ?? (history.source === "state.events + state.archivedEvents" && duplicateEvents === 0
      ? {
          value: null,
          source: history.source,
          reason: "duplicate outcomes are not retained by the authoritative state unless explicitly recorded"
        }
      : { value: duplicateEvents, source: history.source, reason: null });
    const stale = normalizeExplicit(explicitStale, "stale") ?? { value: staleEvents, source: history.source, reason: null };
    return { duplicateEvents: duplicate, staleEvents: stale };
  }
  const normalize = (entry, label) => {
    if (!entry) return { value: null, source: "unavailable", reason: `${label} count is unavailable because event history was not retained` };
    if (!validNonNegativeInteger(entry.value)) validation(entry.source, "must be a non-negative integer");
    return { value: entry.value, source: entry.source, reason: null };
  };
  return { duplicateEvents: normalize(explicitDuplicate, "duplicate"), staleEvents: normalize(explicitStale, "stale") };
}

function retryObject(raw, label) {
  if (!isObject(raw)) validation(label, "must be an object");
  const counts = {};
  const other = {};
  let sawValue = false;
  const seenCanonical = new Set();
  let explicitTotal = null;
  for (const [rawKey, value] of Object.entries(raw)) {
    if (!validNonNegativeInteger(value)) validation(`${label}.${rawKey}`, "must be a non-negative integer");
    sawValue = true;
    const key = RETRY_ALIASES.get(rawKey);
    if (key) {
      if (seenCanonical.has(key)) validation(label, `contains duplicate synonyms for ${key}`);
      seenCanonical.add(key);
      counts[key] = value;
    }
    else if (rawKey !== "total") other[rawKey] = (other[rawKey] ?? 0) + value;
    if (rawKey === "total") {
      if (explicitTotal !== null) validation(label, "contains duplicate total counters");
      explicitTotal = value;
    }
  }
  if (explicitTotal !== null) {
    const calculatedTotal = Object.values(counts).reduce((sum, value) => sum + value, 0) + Object.values(other).reduce((sum, value) => sum + value, 0);
    if (explicitTotal !== calculatedTotal) {
      validation(`${label}.total`, `must equal the sum of retry counters (${calculatedTotal})`);
    }
    counts.total = explicitTotal;
  }
  return { counts, other, sawValue };
}

function retryMetrics(state) {
  const tasks = Object.entries(state.tasks);
  const perTask = [];
  let source = null;
  let missing = [];
  if (tasks.length > 0) {
    for (const [taskId, task] of tasks) {
      const raw = hasOwn(task, "retryCounts") ? task.retryCounts : hasOwn(task, "retries") ? task.retries : undefined;
      if (raw === undefined) {
        missing.push(taskId);
        continue;
      }
      const parsed = retryObject(raw, `state.tasks.${taskId}.retryCounts`);
      if (!parsed.sawValue) missing.push(taskId);
      perTask.push({ taskId, counts: { ...parsed.counts, ...(Object.keys(parsed.other).length > 0 ? { other: parsed.other } : {}) } });
      source = source ?? "state.tasks.*.retryCounts";
    }
  } else if (hasOwn(state.run, "retryCounts") || hasOwn(state.run, "retries")) {
    const raw = hasOwn(state.run, "retryCounts") ? state.run.retryCounts : state.run.retries;
    const parsed = retryObject(raw, "state.run.retryCounts");
    if (parsed.sawValue) {
      perTask.push({ taskId: null, counts: { ...parsed.counts, ...(Object.keys(parsed.other).length > 0 ? { other: parsed.other } : {}) } });
      source = "state.run.retryCounts";
    }
  }
  if (missing.length > 0 || perTask.length === 0) {
    return {
      value: null,
      source: "unavailable",
      reason: missing.length > 0
        ? `retry counters are missing for task(s): ${missing.join(", ")}`
        : "authoritative state does not include retry counters"
    };
  }
  const totals = Object.fromEntries(RETRY_KEYS.map((key) => [key, 0]));
  let explicitTotal = 0;
  let explicitTotalSeen = false;
  const other = {};
  for (const task of perTask) {
    for (const key of RETRY_KEYS) totals[key] += task.counts[key] ?? 0;
    if (hasOwn(task.counts, "total")) {
      explicitTotal += task.counts.total;
      explicitTotalSeen = true;
    }
    for (const [key, value] of Object.entries(task.counts.other ?? {})) other[key] = (other[key] ?? 0) + value;
  }
  const calculatedTotal = RETRY_KEYS.reduce((sum, key) => sum + totals[key], 0) + Object.values(other).reduce((sum, value) => sum + value, 0);
  const value = {
    ...totals,
    total: explicitTotalSeen ? explicitTotal : calculatedTotal,
    byTask: perTask
  };
  if (Object.keys(other).length > 0) value.other = other;
  return { value, source, reason: null };
}

function firstManualCandidate(state, options, name) {
  const aliases = MANUAL_ALIASES[name];
  const containers = [
    ["measurement input", options],
    ["measurement input.telemetry", options.telemetry],
    ["authoritative state", state],
    ["authoritative state.telemetry", state.telemetry],
    ["authoritative state.metrics", state.metrics],
    ["authoritative run", state.run],
    ["authoritative run.telemetry", state.run.telemetry],
    ["authoritative run.metrics", state.run.metrics]
  ];
  for (const [source, container] of containers) {
    if (!isObject(container)) continue;
    for (const key of aliases) {
      if (hasOwn(container, key)) return { value: container[key], source: `${source}.${key}` };
    }
  }
  return null;
}

function normalizeManualMetric(state, options, name) {
  const candidate = firstManualCandidate(state, options, name);
  if (!candidate) {
    return {
      value: null,
      source: "unavailable",
      reason: `${name} was not supplied; the harness cannot infer it from run state`
    };
  }
  let value = candidate.value;
  let reason = null;
  let source = candidate.source;
  if (isObject(value) && (hasOwn(value, "value") || hasOwn(value, "count") || hasOwn(value, "available"))) {
    if (hasText(value.source)) source = value.source;
    if (hasText(value.reason)) reason = value.reason;
    if (value.available === false && !hasOwn(value, "value") && !hasOwn(value, "count")) value = null;
    else value = hasOwn(value, "value") ? value.value : value.count;
  }
  if (value === null) {
    return {
      value: null,
      source,
      reason: reason ?? `${name} was explicitly marked unavailable`
    };
  }
  if (Array.isArray(value)) {
    if (name !== "founderInterruptions" && name !== "escapedDefects") {
      validation(name, name === "costUsd" ? "must be a non-negative number" : "must be a non-negative integer");
    }
    // A supplied list is an observation, not an inferred count. An empty list
    // is therefore a truthful explicit zero; an absent list remains null.
    return { value: value.length, source: `${source} (supplied list)`, reason: null };
  }
  const valid = name === "tokens"
    ? validNonNegativeInteger(value)
    : name === "costUsd"
      ? validNonNegativeNumber(value)
      : validNonNegativeInteger(value);
  if (!valid) validation(name, name === "costUsd" ? "must be a non-negative number" : "must be a non-negative integer");
  return { value, source, reason: null };
}

function metricAvailability(metric) {
  return metric.value === null
    ? { available: false, source: metric.source, reason: metric.reason }
    : { available: true, source: metric.source };
}

function trustedClockValue(options) {
  const candidate = options.trustedMeasurementClock ?? options.trustedClock;
  if (candidate === undefined || candidate === null) return null;
  if (typeof candidate === "string" || typeof candidate === "number") {
    return { at: candidate, source: "trusted measurement clock" };
  }
  if (!isObject(candidate)) validation("trustedMeasurementClock", "must be an ISO timestamp, elapsed seconds, or clock object");
  const at = candidate.at ?? candidate.now ?? candidate.timestamp;
  const elapsedSeconds = candidate.activeElapsedSeconds ?? candidate.elapsedSeconds;
  if (elapsedSeconds !== undefined) {
    if (!validNonNegativeNumber(elapsedSeconds)) validation("trustedMeasurementClock.elapsedSeconds", "must be a non-negative number");
    const source = candidate.source ?? "trusted measurement clock";
    if (!hasText(source)) validation("trustedMeasurementClock.source", "must be a non-empty string");
    return { elapsedSeconds, source };
  }
  if (at === undefined) validation("trustedMeasurementClock", "must provide at/now/timestamp or elapsedSeconds");
  const source = candidate.source ?? "trusted measurement clock";
  if (!hasText(source)) validation("trustedMeasurementClock.source", "must be a non-empty string");
  return { at, source };
}

function activeElapsedMetric(state, options) {
  const budget = state.run.budget;
  const activeInterval = budget.active === true && budget.humanPaused !== true && budget.workersStopped !== true;
  if (!activeInterval) {
    return {
      value: budget.activeElapsedSeconds,
      source: "state.run.budget.activeElapsedSeconds (frozen snapshot)",
      reason: null
    };
  }
  const clock = trustedClockValue(options);
  if (!clock) {
    throw new Error("active elapsed measurement requires a checkpointed/frozen state or a trusted measurement clock");
  }
  if (clock.elapsedSeconds !== undefined) {
    if (clock.elapsedSeconds < budget.activeElapsedSeconds) {
      throw new Error("trusted measurement clock elapsed time cannot be lower than authoritative active elapsed time");
    }
    return {
      value: clock.elapsedSeconds,
      source: clock.source,
      reason: null
    };
  }
  const at = Date.parse(iso(clock.at, "trustedMeasurementClock"));
  const last = Date.parse(iso(budget.lastAccountingAt, "state.run.budget.lastAccountingAt"));
  if (at < last) throw new Error("trusted measurement clock must not precede state.run.budget.lastAccountingAt");
  return {
    value: budget.activeElapsedSeconds + (at - last) / 1000,
    source: clock.source,
    reason: null
  };
}

function taskScope(state) {
  return Object.entries(state.tasks).map(([taskId, task]) => ({
    taskId,
    attempt: task.attempt ?? null,
    mode: task.mode ?? null,
    contractFile: task.contractFile ?? null,
    contractVersion: task.contractVersion ?? null,
    writeScope: Array.isArray(task.writeScope)
      ? clone(task.writeScope)
      : Array.isArray(task.scope)
        ? clone(task.scope)
        : Array.isArray(task.contractScope)
          ? clone(task.contractScope)
          : null
  }));
}

function acceptanceDeliveryStates(state) {
  return Object.entries(state.tasks).map(([taskId, task]) => ({
    taskId,
    status: task.status ?? null,
    deliveryState: task.deliveryState ?? null,
    acceptance: Array.isArray(task.acceptance) ? clone(task.acceptance) : null
  }));
}

function measurementOptions(options) {
  if (options === undefined) return {};
  if (!isObject(options)) validation("options", "must be an object");
  return options;
}

export function measurePilotRecord(state, inputOptions = {}) {
  const options = measurementOptions(inputOptions);
  validateAuthoritativeState(state);
  const phase = options.phase ?? "final";
  if (!PHASES.has(phase)) validation("phase", "must be baseline or final");
  const policy = policyCandidate(state, options);
  const outcomes = eventOutcomeMetrics(state);
  const retries = retryMetrics(state);
  const scope = taskScope(state);
  const acceptanceDelivery = acceptanceDeliveryStates(state);
  const activeElapsed = activeElapsedMetric(state, options);
  const founderInterruptions = normalizeManualMetric(state, options, "founderInterruptions");
  const escapedDefects = normalizeManualMetric(state, options, "escapedDefects");
  const costUsd = normalizeManualMetric(state, options, "costUsd");
  const tokens = normalizeManualMetric(state, options, "tokens");
  const measuredAt = options.measuredAt ?? options.recordedAt ?? state.run.updatedAt ?? new Date().toISOString();
  const record = {
    schema: METRICS_SCHEMA,
    version: METRICS_VERSION,
    recordType: "pilot-metrics-record",
    phase,
    runId: state.run.runId,
    routingPolicyVersion: policy.value,
    routingPolicyVersionReason: policy.value === null ? policy.reason : null,
    measuredAt: iso(measuredAt, "measuredAt"),
    source: {
      kind: "authoritative-state",
      stateSchema: state.schema,
      stateVersion: state.version,
      routingPolicy: policy.source
    },
    taskScope: scope,
    acceptanceDeliveryStates: acceptanceDelivery,
    acceptanceStates: acceptanceDelivery,
    deliveryStates: acceptanceDelivery,
    activeElapsedSeconds: activeElapsed.value,
    activeElapsed: activeElapsed.value,
    duplicateEvents: outcomes.duplicateEvents.value,
    duplicateCount: outcomes.duplicateEvents.value,
    duplicateEventsSuppressed: outcomes.duplicateEvents.value,
    staleEvents: outcomes.staleEvents.value,
    staleCount: outcomes.staleEvents.value,
    staleEventsSuppressed: outcomes.staleEvents.value,
    retries: retries.value,
    retryCounts: retries.value,
    correctionCycles: retries.value === null ? null : retries.value.reviewFix,
    correctionCyclesReason: retries.value === null ? retries.reason : null,
    founderInterruptions: founderInterruptions.value,
    escapedDefects: escapedDefects.value,
    costUsd: costUsd.value,
    cost: costUsd.value,
    tokens: tokens.value,
    tokenCount: tokens.value,
    activeElapsedSecondsReason: activeElapsed.value === null ? activeElapsed.reason : null,
    duplicateEventsReason: outcomes.duplicateEvents.value === null ? outcomes.duplicateEvents.reason : null,
    staleEventsReason: outcomes.staleEvents.value === null ? outcomes.staleEvents.reason : null,
    retriesReason: retries.value === null ? retries.reason : null,
    founderInterruptionsReason: founderInterruptions.value === null ? founderInterruptions.reason : null,
    escapedDefectsReason: escapedDefects.value === null ? escapedDefects.reason : null,
    costUsdReason: costUsd.value === null ? costUsd.reason : null,
    tokensReason: tokens.value === null ? tokens.reason : null,
    availability: {
      routingPolicyVersion: policy.value === null
        ? { available: false, source: policy.source, reason: policy.reason }
        : { available: true, source: policy.source },
      activeElapsedSeconds: metricAvailability(activeElapsed),
      duplicateEvents: metricAvailability(outcomes.duplicateEvents),
      staleEvents: metricAvailability(outcomes.staleEvents),
      retries: metricAvailability(retries),
      correctionCycles: retries.value === null
        ? { available: false, source: retries.source, reason: retries.reason }
        : { available: true, source: `${retries.source}.reviewFix` },
      founderInterruptions: metricAvailability(founderInterruptions),
      escapedDefects: metricAvailability(escapedDefects),
      costUsd: metricAvailability(costUsd),
      tokens: metricAvailability(tokens)
    },
    timing: {
      activeElapsedSeconds: activeElapsed.value,
      pausedHumanWaitSeconds: state.run.budget.pausedHumanWaitSeconds ?? null,
      softCheckpointDue: state.run.budget.softCheckpointDue ?? null,
      hardExceeded: state.run.budget.hardExceeded ?? null
    }
  };
  record.suppressedEvents = {
    duplicate: record.duplicateEvents,
    stale: record.staleEvents
  };
  record.metrics = {
    activeElapsedSeconds: record.activeElapsedSeconds,
    duplicateEvents: record.duplicateEvents,
    staleEvents: record.staleEvents,
    suppressedEvents: clone(record.suppressedEvents),
    correctionCycles: record.correctionCycles,
    retries: clone(record.retries),
    founderInterruptions: record.founderInterruptions,
    escapedDefects: record.escapedDefects,
    costUsd: record.costUsd,
    tokens: record.tokens
  };
  return record;
}

function phaseOptions(options, phase) {
  const override = isObject(options[phase]) ? options[phase] : {};
  const telemetry = {
    ...(isObject(options.telemetry) ? options.telemetry : {}),
    ...(isObject(override.telemetry) ? override.telemetry : {})
  };
  return {
    ...options,
    ...override,
    ...(Object.keys(telemetry).length > 0 ? { telemetry } : {}),
    phase
  };
}

function resolvePairStates(input, options) {
  let baselineState = options.baselineState;
  let finalState = options.finalState;
  const hasInputSnapshots = isObject(input) && isObject(input.baseline) && isObject(input.final) &&
    isObject(input.baseline.run) && isObject(input.final.run);
  if (baselineState === undefined && isObject(input) && isObject(input.baselineState)) baselineState = input.baselineState;
  if (finalState === undefined && isObject(input) && isObject(input.finalState)) finalState = input.finalState;
  if (baselineState === undefined && finalState === undefined && hasInputSnapshots) {
    baselineState = input.baseline;
    finalState = input.final;
  }
  if (baselineState === undefined || finalState === undefined) {
    throw new Error("baseline and final measurement require explicit distinct state snapshots");
  }
  if (baselineState === finalState) {
    throw new Error("baseline and final measurement require distinct state snapshots");
  }
  return { baselineState, finalState };
}

function retryComparableValues(retries) {
  if (retries === null) return null;
  const values = {
    implementation: retries.implementation,
    testDebug: retries.testDebug,
    reviewFix: retries.reviewFix,
    total: retries.total
  };
  for (const [key, value] of Object.entries(retries.other ?? {})) values[`other.${key}`] = value;
  return values;
}

function assertPairOrdering(baseline, final) {
  const baselineAt = Date.parse(baseline.measuredAt);
  const finalAt = Date.parse(final.measuredAt);
  if (finalAt < baselineAt) throw new Error("final measurement timestamp cannot precede baseline timestamp");
  if (final.activeElapsedSeconds < baseline.activeElapsedSeconds) {
    throw new Error("final active elapsed time cannot be lower than baseline");
  }
  const beforeRetries = retryComparableValues(baseline.retries);
  const afterRetries = retryComparableValues(final.retries);
  if (beforeRetries !== null && afterRetries !== null) {
    const keys = new Set([...Object.keys(beforeRetries), ...Object.keys(afterRetries)]);
    for (const key of keys) {
      const before = beforeRetries[key] ?? 0;
      const after = afterRetries[key] ?? 0;
      if (after < before) throw new Error(`final retry count cannot be lower than baseline (${key})`);
    }
  }
}

export function measurePilotRecords(input, inputOptions = {}) {
  const options = measurementOptions(inputOptions);
  const { baselineState, finalState } = resolvePairStates(input, options);
  const baseline = measurePilotRecord(baselineState, phaseOptions(options, "baseline"));
  const final = measurePilotRecord(finalState, phaseOptions(options, "final"));
  if (baseline.runId !== final.runId) throw new Error("baseline and final records must reference the same runId");
  const samePolicy = baseline.routingPolicyVersion !== null &&
    final.routingPolicyVersion !== null &&
    stable(baseline.routingPolicyVersion) === stable(final.routingPolicyVersion);
  if ((baseline.routingPolicyVersion === null) !== (final.routingPolicyVersion === null)) {
    throw new Error("baseline and final records must both provide the same routing policy version");
  }
  if (baseline.routingPolicyVersion !== null && final.routingPolicyVersion !== null && !samePolicy) {
    throw new Error("baseline and final records must reference the same routing policy version");
  }
  if (baseline.routingPolicyVersion === null || final.routingPolicyVersion === null) {
    throw new Error("baseline and final measurement require a routing policy version");
  }
  assertPairOrdering(baseline, final);
  return {
    schema: METRICS_SCHEMA,
    version: METRICS_VERSION,
    recordType: "pilot-metrics",
    runId: baseline.runId,
    routingPolicyVersion: baseline.routingPolicyVersion ?? final.routingPolicyVersion,
    routingPolicyVersionReason: baseline.routingPolicyVersion === null
      ? "routing policy version was unavailable for both records"
      : null,
    sameRunId: true,
    sameRoutingPolicyVersion: samePolicy,
    baseline,
    final,
    records: [baseline, final]
  };
}

/**
 * Measure a pilot. Use `measurePilotRecord` (or pass `phase`) for one phase and
 * pass explicit baseline/final snapshots for a pair. A lone state is measured
 * as one final record; it never manufactures a baseline.
 */
export function measurePilot(input, inputOptions = {}) {
  const options = measurementOptions(inputOptions);
  if (options.record === true || options.phase !== undefined) return measurePilotRecord(input, options);
  const hasPairInput = (isObject(input) && isObject(input.baseline) && isObject(input.final)) ||
    options.baselineState !== undefined || options.finalState !== undefined ||
    (isObject(input) && (input.baselineState !== undefined || input.finalState !== undefined));
  if (!hasPairInput) return measurePilotRecord(input, { ...options, phase: "final" });
  return measurePilotRecords(input, options);
}

export const measurePilotMetric = measurePilotRecord;
export const measureRunMetrics = measurePilotRecords;
export const measurePilotRun = measurePilotRecords;
export const measurePilotState = measurePilotRecord;
export default measurePilot;

function parseArgs(argv) {
  const options = {};
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }
    const equals = arg.indexOf("=");
    if (equals > 2) {
      options[arg.slice(2, equals)] = arg.slice(equals + 1);
      continue;
    }
    const key = arg.slice(2);
    if (["record", "pair", "help"].includes(key)) {
      options[key] = true;
      continue;
    }
    if (index + 1 >= argv.length || argv[index + 1].startsWith("--")) throw new Error(`--${key} requires a value`);
    options[key] = argv[++index];
  }
  return { options, positional };
}

function readJsonFile(filePath, label = "JSON file") {
  const absolute = path.resolve(filePath);
  if (!existsSync(absolute)) throw new Error(`${label} does not exist: ${filePath}`);
  try {
    return JSON.parse(readFileSync(absolute, "utf8"));
  } catch (error) {
    throw new Error(`${label} contains invalid JSON: ${error.message}`);
  }
}

function parseValue(value) {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function exclusiveWrite(filePath, value) {
  const absolute = path.resolve(filePath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  if (existsSync(absolute)) throw new Error(`refusing to overwrite existing metrics file: ${filePath}`);
  const body = `${JSON.stringify(value, null, 2)}\n`;
  let descriptor;
  try {
    descriptor = openSync(absolute, "wx", 0o600);
    writeFileSync(descriptor, body, "utf8");
    closeSync(descriptor);
    descriptor = undefined;
  } catch (error) {
    if (descriptor !== undefined) {
      closeSync(descriptor);
      // The file was created by this call, so removing it cannot delete an
      // existing artifact. A batch caller can then roll back earlier files.
      try { unlinkSync(absolute); } catch { /* best effort */ }
    }
    throw error;
  }
  return absolute;
}

function exclusiveWriteBatch(entries) {
  const targets = entries.map(([filePath]) => path.resolve(filePath));
  if (new Set(targets).size !== targets.length) throw new Error("metrics output files must be distinct");
  for (const target of targets) {
    if (existsSync(target)) throw new Error(`refusing to overwrite existing metrics file: ${target}`);
  }
  const created = [];
  try {
    for (const [filePath, value] of entries) created.push(exclusiveWrite(filePath, value));
  } catch (error) {
    for (const target of created) {
      try { unlinkSync(target); } catch { /* only remove artifacts created by this batch */ }
    }
    throw error;
  }
  return created;
}

function cliOptions(raw, positional) {
  const statePath = raw.state ?? raw["state-file"] ?? positional[0];
  const baselinePath = raw["baseline-state"] ?? raw.baselineState;
  const finalPath = raw["final-state"] ?? raw.finalState;
  if (!statePath && !baselinePath && !finalPath) throw new Error("state file is required (--state, --baseline-state, or positional path)");
  const state = statePath ? readJsonFile(statePath, "state file") : undefined;
  const baselineState = baselinePath ? readJsonFile(baselinePath, "baseline state file") : undefined;
  const finalState = finalPath ? readJsonFile(finalPath, "final state file") : undefined;
  if (baselinePath && finalPath && path.resolve(baselinePath) === path.resolve(finalPath)) {
    throw new Error("baseline and final measurement require distinct state snapshot files");
  }
  const options = {};
  if (raw["routing-policy-version"] !== undefined) options.routingPolicyVersion = parseValue(raw["routing-policy-version"]);
  if (raw["routing-policy-file"]) options.routingPolicyVersion = readJsonFile(raw["routing-policy-file"], "routing policy file");
  if (raw["measured-at"] !== undefined) options.measuredAt = raw["measured-at"];
  if (raw["trusted-clock-at"] !== undefined) {
    options.trustedMeasurementClock = {
      at: raw["trusted-clock-at"],
      source: "CLI trusted measurement clock"
    };
  }
  if (raw["trusted-elapsed-seconds"] !== undefined) {
    options.trustedMeasurementClock = {
      elapsedSeconds: parseValue(raw["trusted-elapsed-seconds"]),
      source: "CLI trusted measurement clock"
    };
  }
  if (raw["founder-interruptions"] !== undefined) options.founderInterruptions = parseValue(raw["founder-interruptions"]);
  if (raw["escaped-defects"] !== undefined) options.escapedDefects = parseValue(raw["escaped-defects"]);
  if (raw["cost-usd"] !== undefined) options.costUsd = parseValue(raw["cost-usd"]);
  if (raw.tokens !== undefined) options.tokens = parseValue(raw.tokens);
  if (raw["telemetry-file"]) {
    const telemetry = readJsonFile(raw["telemetry-file"], "telemetry file");
    if (!isObject(telemetry)) throw new Error("telemetry file must contain a JSON object");
    options.telemetry = telemetry;
  }
  for (const phase of ["baseline", "final"]) {
    const telemetryFile = raw[`${phase}-telemetry-file`];
    if (telemetryFile) {
      const telemetry = readJsonFile(telemetryFile, `${phase} telemetry file`);
      if (!isObject(telemetry)) throw new Error(`${phase} telemetry file must contain a JSON object`);
      options[phase] = { telemetry };
    }
  }
  return { state, baselineState, finalState, options };
}

function print(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function cliUsage() {
  return "Usage: node harness/metrics.mjs --state state.json [--phase baseline|final] | --baseline-state before.json --final-state after.json [--baseline-output file --final-output file]";
}

async function main(argv) {
  const { options: raw, positional } = parseArgs(argv);
  if (raw.help) {
    print({ ok: true, usage: cliUsage() });
    return;
  }
  const loaded = cliOptions(raw, positional);
  const explicitSingle = raw.record === true || raw.phase !== undefined;
  const pairRequested = raw.pair === true || raw["baseline-state"] !== undefined || raw["final-state"] !== undefined || raw["baseline-output"] !== undefined || raw["final-output"] !== undefined || ((raw.output ?? raw.out) !== undefined && !explicitSingle);
  const singleRequested = explicitSingle || !pairRequested;
  let measurement;
  if (singleRequested && pairRequested) throw new Error("choose a single phase or a baseline/final pair, not both");
  if (singleRequested) {
    measurement = measurePilotRecord(loaded.state ?? loaded.finalState ?? loaded.baselineState, {
      ...loaded.options,
      phase: raw.phase ?? "final"
    });
  } else {
    measurement = measurePilotRecords(loaded.state, {
      ...loaded.options,
      baselineState: loaded.baselineState,
      finalState: loaded.finalState
    });
  }
  const output = raw.output ?? raw.out;
  const baselineOutput = raw["baseline-output"];
  const finalOutput = raw["final-output"];
  const outputTargets = [output, baselineOutput, finalOutput].filter(Boolean).map((filePath) => path.resolve(filePath));
  if (new Set(outputTargets).size !== outputTargets.length) throw new Error("metrics output files must be distinct");
  const written = {};
  const writes = [];
  if (baselineOutput || finalOutput) {
    if (!measurement.baseline || !measurement.final) throw new Error("baseline-output/final-output require a baseline/final pair");
    if (baselineOutput) writes.push([baselineOutput, measurement.baseline, "baseline"]);
    if (finalOutput) writes.push([finalOutput, measurement.final, "final"]);
  }
  if (output) writes.push([output, measurement, "pair"]);
  if (writes.length > 0) {
    const created = exclusiveWriteBatch(writes.map(([filePath, value]) => [filePath, value]));
    writes.forEach(([, , key], index) => { written[key] = created[index]; });
  }
  print({ ok: true, ...measurement, ...(Object.keys(written).length > 0 ? { written } : {}) });
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : null;
if (invokedPath === path.resolve(fileURLToPath(import.meta.url))) {
  try {
    await main(process.argv.slice(2));
  } catch (error) {
    print({ ok: false, error: error.message, usage: cliUsage() });
    process.exitCode = 1;
  }
}
