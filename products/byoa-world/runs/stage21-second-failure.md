<!-- studio {"id":"byoa-world:investigation:stage21-second-failure","scope":"byoa-world","type":"investigation","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# Stage 2.1 second actual trial failure

Owner: Technical Specialist. Updated 2026-10-02. Requested route: gpt-6.1-sol / medium / fork_turns none; actual backend activation unknown. Sources: project AGENTS/CONTRACT/STATE, studio standing orders, [retry plan](../architecture/STAGE-21-RETRY-PLAN.md), [activation specification](../architecture/STAGE-21-LIVE-ACTIVATION.md), native adapter/worker/diagnostic source and retained sanitized diagnostic. Compact investigation; no full specification template is needed for this diagnosis.

## Actual evidence and limits

The retained `.stage21-retry/workers/diagnostics/8e747cd1-fa52-42d6-9b75-e820cb8d394c.failure.json` records `response_validation`, `provider_usage`, HTTP 200, request `req_011CfdHR4QRrqA4WSAaCSE37`, at `2026-10-02T10:52:16.517Z`. The worker reached result validation after inference returned and its deadline check passed. The HTTP adapter had accepted status/body limit/JSON parsing. This narrows the failure beyond the original attempt, but does not establish valid output, accepted usage or billed expense.

Root's read-only SQLite projection (supplied to this specialist, not independently queried here): Session `f3e7cf3d-9d9b-4dbf-8250-d3527f938668` failed, epoch 2, nonsynthetic; A `8e747cd1-fa52-42d6-9b75-e820cb8d394c` unknown, maximum 207500 microUSD, expense null; B `24f88d77-ec47-494f-b38d-e874f62f25b8` released, maximum 210000 microUSD, expense null; contributions 0 and usage reports 0. Extra prepared Session `1bab89ac-4983-446b-91aa-287cd0ef08c1` is unrelated. Original A's unresolved 207500 remains preserved; combined unresolved A exposure is 415000 microUSD (US$0.415), not confirmed cost. Both one-trial authorities are consumed; no repeat/reset or B dispatch follows.

`anthropic-adapter.ts:15` assigns **the same provider_usage category** to model mismatch, invalid message ID, unsupported stop reason, missing/nontext content, missing/unknown usage, metadata incompatibility, cache-total incompatibility and token-limit failures. Thus the diagnostic does not prove that a usage field was the cause. No actual response values or body are retained in this diagnostic. HTTP 200 alone does not prove content or usage validity. The first attempt's cause remains unknown and cannot be inferred from this second failure.

## Validator compatibility assumptions

Source inspection confirms the following narrow contract, not an independently verified current provider schema:

- Top-level usage accepts exactly nine named fields; any additional field rejects, even a zero-valued field. Standard service tier and absent/null/global geography are supported; other values reject.
- Present cache metadata must contain exactly `ephemeral_1h_input_tokens` and `ephemeral_5m_input_tokens`, both numeric zero. Present tool metadata must contain exactly `web_fetch_requests` and `web_search_requests`, both zero. Present output-token details must contain exactly `thinking_tokens:0`. Empty, partial or extra-key objects reject; absent/null objects pass.
- Omitted cache-total counters now pass; explicit null, wrong types and nonzero values reject. The earlier omission defect is corrected in current source and does not explain this failure without actual response evidence.
- Pinned model/message identity, supported stop reason/text and required safe-integer bounded input/output remain independent possible rejection sites.

Likely schema-compatibility investigation targets are additive usage fields, optional nested counter omission/empty objects, and legacy-model geography response metadata. They are hypotheses only. Current activation specification deliberately requires those exact keysets and unsupported charge classes to fail closed. Source therefore does not establish an implementation defect versus that specification; changing acceptance would require evidence and a reviewed specification delta. Do not simply ignore unknown fields or zero/default required quantities.

Seven direct in-memory fabricated `result()` probes ran successfully with no worker, journal or transport: omitted optional cache totals accepted; partial zero cache object, extra zero usage field, empty tool metadata, unsupported geography, model mismatch and nontext content all rejected as `provider_usage`. These demonstrate ambiguity and brittleness of the guard, not reproduction of the actual response. An initial probe had a bracket syntax error before execution; the corrected seven-case probe exited 0. No application source changed.

## Precise offline next step

Before any further spending, prepare a bounded builder/independent-review assignment to split receipt validation into explicit internal failure predicates and add a small allowlisted `validationReason` enum to future first-failure diagnostics. Distinguish response model/ID/stop/content shape, usage absence/unknown keys, service tier/geography, nested cache/tool/output metadata, cache totals and token bounds. Preserve the generic user error, first-write-only behavior, limits, conservative holds and no retry. Do not backfill this attempt's diagnostic or log raw values/body/headers/keys/environment.

Compare each accepted field/key/value assumption against current first-party Messages response types and model-specific documentation through a separately authorized public documentation check; then build sanitized fake-only fixtures for documented zero/absent/null/empty/partial metadata and each rejected charge class. The existing activation specification's source links are references, not proof of today's full schema. Any proven compatibility correction must retain exact quantities and accounting boundaries, have independent review and invalidate affected candidate pins. Current investigation deliberately made no network/doc refresh because the assignment forbids network access.

If a legitimate already-retained sanitized account-side receipt exists, root may evaluate it under appropriate access authority using the preserved request ID; none was available to this investigation. Offline probes and finer future diagnostics cannot reconstruct the discarded actual response. A third paid attempt is a separate proposal and authority decision, not a validation check or automatic retry.

No credential/environment/provider access, network request, worker/server launch, live retry, spending, store/journal mutation, settlement or reconciliation was performed. Only this investigation record was written. Stage 2.1 remains incomplete, with no A checkpoint, B result or human acceptance.
