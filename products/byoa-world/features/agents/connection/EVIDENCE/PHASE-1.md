<!-- studio {"id":"byoa-world:verification:phase1-external-codex","scope":"byoa-world","type":"verification","status":"draft","links":[{"relation":"verifies","target":"byoa-world:technical-specification:phase1-external-codex"}]} -->
# Verification and release report: external Codex connection

- Independent reviewer and last material update: external_codex_review; 2026-09-30. Reviewer findings linked below; orchestrator supplies real-run and browser observations.
- Orchestrator acceptance owner: current BYOA World orchestrator.
- Candidate revision: application base `0312413d556767efae1d692198aa8edc7845e11b` plus the exact final dirty-file manifest in the independent review. No commit or publication claimed.
- Contract, requirement, design and technical-specification revisions: route-first continuation in [contract](../../../../CONTRACT.md), [route assessment](../../../../research/codex-external-route.md), and [technical specification](../../../../architecture/PHASE-1-EXTERNAL-CODEX.md), including diagnostic correction. Existing three feature owners and human-acceptance rules preserved.
- Independent review: [bounded candidate and corrections](../../../../runs/phase1-external-codex-review.md).
- Template: verification-release-report; core fields, table and sections retained.

## Verification

| Acceptance criterion | Result | Evidence | Limitation and owner |
| --- | --- | --- | --- |
| Supported owner-local runtime route | Supported mechanism and local ChatGPT status observed | Official sources and sanitized preflight in route assessment | Not proof of future service entitlement or successful inference; Technical Specialist |
| Scoped external authentication and durable delivery | Local checks pass | Independent review: prior 84-test suite passed; final correction adds 2 passing diagnostic tests and rechecks dependency boundaries (86 distinct passing checks across retained evidence, not a fresh full-suite 86 run). Covers HTTP identity, enrollment races, receipts, reconnect, single execution grant, stop/expiry/restart and persistence failure | Fake runtime tests, not remote isolation; reviewer |
| Existing Phase 0 behavior preserved | Existing 58 checks passed within expanded suite | Independent review | No access to or migration of original `.data/`; builder/reviewer |
| Initial actual experiment | Failed before inference/enrollment | Ignored application `.phase1/real-check/{attempt,failure,world}.json`; false CODEX_VERSION_CHANGED due known Windows warnings | Work pending, no credential issued, no matching journal, zero contributions; orchestrator |
| Guarded startup recovery | Live proof FAILED/incomplete | `.phase1/real-check-recovery/{attempt,failure,world}.json`; predecessor hashes preserved; enrolled and acknowledged, then BRIDGE_FAILED; work indeterminate, zero contributions | Inference and usage uncertain. No duration-based non-use claim. Runtime reason was not persisted by the coordinator; orchestrator |
| Diagnostic correction | Safe diagnostic retention added and locally checked | Final review; allowlisted diagnostic projection, no raw stderr or secrets | Cannot retroactively recover the runtime failure reason; no further live attempt |
| Owner preview | Initial external screen rendered correctly in in-app browser at port 4319 | Orchestrator inspected accessibility state and screenshot: External Codex + Synthetic reviewer, fixed fictional task, no proposal | Initial screen only; no successful live proposal or acceptance UI claim |
| Human acceptance | No live proposal or canonical change | Both actual attempts returned no contribution; real checker never calls accept | Explicit human acceptance remains required after a future successful run |

## Completion and delivery state

Diagnostic addendum, 2026-09-30: the user explicitly authorized one fresh attempt
with the existing 60-second runtime limit. Orchestrator invoked the reviewed bridge
once against the already-running, scrubbed local World, reserving
`.phase1/diagnostic-20260930/attempt.json` exclusively before dispatch. `result.json`
records `BRIDGE_FAILED` with diagnostic `process_exit`, exit code 1, indeterminate
work, zero contributions and no proposal. Attempt ID
`c6c031c7-27e9-477b-ad92-b43425954795`. No canonical acceptance occurred. Prior
records were preserved. This establishes process exit, not the underlying CLI
reason or whether inference began; usage remains unknown. No second call was made.
The application candidate did not change, so unaffected local test/review evidence
is reused. Further work requires diagnosis of the process exit, not an unchanged retry.

- Local acceptance: reviewed implementation is available; live interoperability and RM-06 outcome remain **pending**, not accepted. See [roadmap](../../../../ROADMAP.md).
- Repository: local changes only; original published application remains `0312413`. No push or merge this turn.
- Release: not released or deployed; localhost preview only.
- Rollback or recovery reference: stop external launcher; existing Phase 0 launchers remain available. Preserve all `.phase1/` attempt and journal evidence as well as `.data/`. Do not delete reservations or reissue acknowledged work to force a retry.

## Residuals

- Runtime error and model usage for the acknowledged attempt remain unknown. Claude was not used by this external path; its original cumulative budget is unchanged by these checks. Subscription usage is not reported as zero.
- Current diagnostic correction affects only future evidence capture; successful earlier local checks remain relevant. The final review identifies the exact changed candidate and affected checks; it does not convert failed live evidence to success.
- Next work is runtime diagnosis, not broader product features. Any further model attempt requires an explicit bounded decision because the previous acknowledged attempt is indeterminate and automatic inference retries are prohibited. No additional recovery path was added.
- Remote hosting, HTTPS and real owner authentication, private inputs, runtime containment, provider retention and personal-memory import remain outside this slice. Same-user local processes prove only the tested architectural boundary.


## Launch repair verification — 2026-09-30

The restricted outer launch failed during Codex initialization with filesystem access denied. The invocation matched Phase 0. An isolated verification with normal owner runtime-state access succeeded (234-character draft), followed by a successful complete external World handoff. Codex read-only sandbox, disabled tools, ephemeral execution and child environment allowlist were unchanged. No global permissions or configuration changed.

Evidence is preserved in ignored .phase1/launch-diagnosis/: isolated-result.json, normal-context-result.json and world-verification/result.json. Session abccfac7-f193-4035-8ad9-3ebca081b60f, attempt 584fd96a-9c1b-48f0-89ad-797e6bb07ebf: work committed, two contributions (real external Codex draft and synthetic review), proposal ready, no canonical document and no human acceptance. Subscription usage is unmeasured. Earlier failures and their unknown usage remain preserved; original .data/ is untouched.

Safe enum-only stderr diagnostics now distinguish initialization denial. The temporary raw inspection hook was removed; 14 affected checks pass independently. This verifies the bounded owner-local external route, not broader RM-06 completion or private-data readiness. Changes remain local, not pushed or deployed. Next is human review of the proposal and selection of the next bounded Phase 1 slice; no further model attempt is needed for this launch repair.
