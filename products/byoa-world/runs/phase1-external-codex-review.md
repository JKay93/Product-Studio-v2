<!-- studio {"id":"byoa-world:review:phase1-external-codex","scope":"byoa-world","type":"review","status":"draft","links":[{"relation":"reference","target":"byoa-world:contract:main"},{"relation":"reference","target":"byoa-world:technical-specification:phase1-external-codex"}]} -->
# Review: bounded external Codex candidate

- Reviewer identity / role: independent reviewer subagent external_codex_review; updated 2026-09-30.
- Candidate revision and contract/requirement revision: BYOA-World base `0312413d556767efae1d692198aa8edc7845e11b` plus the exact dirty-file manifest below. Manifest SHA-256 `c448f19994ee8ff9400c2fad1929f8ff9a334fbaf154949a0835799f90cd7e3a` (UTF-8 sorted manifest lines, LF separators, no trailing newline). CONTRACT.md SHA-256 `ac94bbe1e05da7f1bfeb9377bee83f2689f553ce31a95d3f166dde59eaf91a91`; PHASE-1-EXTERNAL-CODEX.md SHA-256 `681180ac0524049eeadbd0fee006a062a6d6c9eccceff2ff116071d069f46ede`.
- Verdict: **PASS for the bounded owner-local external Codex implementation and recorded real World verification.** The later user-authorized launch repair and successful verification supersede the earlier incomplete outcome below; human acceptance remains outstanding and full Phase 1 readiness is not established.
- Acceptance criteria checked and evidence: independent reviewer ran `node --test` before the diagnostic-only correction: **84 passed, 0 failed**, including the 10 external boundary tests and 16 preflight/recovery checks (counting nested cases). Reviewed final protocol, bridge, transaction, launcher/checker, UI and documentation sources. Builder reports syntax and whitespace checks passing; reviewer also observed clean whitespace check during inspection.

| Criterion | Evidence and conclusion |
| --- | --- |
| Independent runtime, subscription auth outside World | Separate bridge invoked by owner or sibling coordinator; World cannot dispatch external mode. World worker environment allowlist excludes provider keys, USERPROFILE and CODEX_HOME; sentinel test passes. Bridge checks pinned CLI version and ChatGPT login method; no credential file read or API fallback. |
| Narrow context and authority | Fixed task and exact fictional context validated at both ends; strict request fields, binding checks, one-use expiring enrollment, hashed credentials, owner cookie/CSRF separated from bearer route. Forgery/source/race tests pass. |
| Durable single execution and delivery | Exclusive local reservation before ack; World grants execution once atomically. Cached result retries preserve event identity and return same receipt. Different-journal race invokes once; unknown attempt fails closed. |
| Atomic receipt and output | Receipt, contributions and proposal commit in one repository transaction; injected persistence failure leaves original persisted state and restores memory, subsequent requests return unavailable. Duplicate/conflicting completion tests pass. |
| Authority termination | Stop/revoke/expiry/completion reject late traffic; runtime failure/deadline makes attempt indeterminate. Crash-snapshot restart preserves proposal but stops session and drops credential authority. Local execution bounded; remote cancellation remains explicitly unconfirmed. |
| Human acceptance and honest labels | Proposal does not change canonical state; owner acceptance required. External Codex draft and deterministic synthetic reviewer labeled separately. No Claude call on this path; subscription usage recorded as unmeasured. |
| Phase 0 preservation | Existing 58 checks pass alongside new checks. External launcher uses .phase1; reviewer did not access .data, credentials or providers. No migration or deletion of original evidence. |

- Document/template comparison: technical specification preserves owner/update/requirements/state fields and all three technical-specification core sections, including responsibility table, exact interfaces, lifecycle/error behavior, dependencies/rollback/observability and verification/readiness. No material structural departure. This review retains all review-template fields and adds the evidence table and manifest for traceability.
- Preserved decisions checked: feature/domain organization, cross-feature public exports (automated boundary test passes), fixed fictional inputs, agent-owned provider authentication, no personal-memory import, human canonical acceptance, no API fallback, no new spending/publishing/deployment, original .data and budget evidence preserved by scope.
- Required fixes: **none outstanding.** During review, found a fresh-journal/competing-bridge route that could repeat acknowledged inference. Builder corrected it with a durable first-only execution grant and refusal of acknowledged work without a cached result; final tests cover competing journals and uncertain failure.
- Residual risk / verification limitations: no real inference or GUI visual check performed by reviewer. Redirect refusal is inspected in fetch configuration, not separately fault-injected. Tests use fake runtime output and sentinel keys, proving their tested paths rather than universal non-disclosure. Same-user local processes are not isolated; remote deployment, HTTPS/owner authentication, provider retention, private inputs and subscription service suitability remain outside this slice. Runtime cancellation is best effort; unknown subscription usage is not zero. CLI executable is pinned to this installed machine/version. A lost enrollment reply needs a fresh owner-started session; bridge process restart cannot recover an undisclosed token automatically. No publication or full Phase 1 readiness acceptance is claimed.

The orchestrator records final acceptance and the separate real-run evidence.

## Startup correction review, 2026-09-30

Root reported that the original one-shot failed with CODEX_VERSION_CHANGED before enrollment or inference: the installed CLI returned the expected version on stdout and observed Windows access-denied startup warnings on stderr. This reviewer did not read credentials or original runtime stores; this historical observation is attributed to the orchestrator. No successful model exchange is claimed.

Reviewed the corrected bounded stream parser, new feature-owned preflight-recovery module, its public export, explicit coordinator option and isolated worker state selection. Version stdout must match exactly; only two complete observed warning forms are removed from stderr; unknown diagnostics, actual version mismatch, mixed authentication output and API login reject. No raw diagnostics are logged.

The explicit recovery requires original startup stage/code plus pending work, unredeemed enrollment, no credential/ack/deadline/receipt/output/execution activity and no matching journal/temp. It hashes the original three records without changing them, reserves once in a different fixed directory, and refuses an existing recovery reservation or state. The original one-shot lock is not reset. Automated tests independently passed for valid and negative preflight cases, unchanged predecessor hashes, exclusive reservation and twelve uncertain predecessor variants. No new required fix identified. Guard evaluation on the actual predecessor remains the orchestrator's execution responsibility; reviewer ran only fake/local tests. This recovery is permissible only for this evidenced pre-inference startup failure, not an uncertain inference rerun.

## Final offline diagnostic review, 2026-09-30

The orchestrator reports the real recovery reached acknowledgment and then failed: failure evidence records bridge_execution / BRIDGE_FAILED; World marks the attempt indeterminate, with zero contributions and a reserved journal. Runtime inference and subscription usage are unknown. Short elapsed time does not establish that no provider call occurred. Real interoperability is not validated.

Reviewed only the affected second correction: coordinator now waits for child close, parses bounded failure output through feature-owned bridgeFailureEvidence, and retains only existing allowlisted diagnostic codes/events/items/integer exit status and boolean cleanup flags. Raw messages, paths, credentials and stderr cannot enter evidence through this parser. No new dispatch or retry path; prior reservations and failure evidence remain untouched. Two new diagnostic tests independently pass; the dependency-boundary test independently passes. Reused the unaffected 84-test prior run: 86 distinct tests now have applicable passing evidence (not a claim of a new full-suite 86-test run).

No required correction remains in this narrow change. The discarded diagnostic cannot be reconstructed from the old failure record; the real-run cause remains unresolved. A future inference attempt would require a separately justified plan and authority, not deletion/reset of reservations. Orchestrator owns incomplete-outcome reporting and next-step selection.

## Launch diagnosis and successful verification review, 2026-09-30

The refreshed contract records the user's authority to diagnose launch failure, verify the correction in isolation, then retest the World flow. Prior failed evidence remains historical and preserved. The orchestrator diagnosed access-denied runtime initialization under its outer workspace-restricted launch context, and reports a 234-character isolated success in normal owner context with identical executable, arguments, child environment filtering and model restrictions. No global permissions or agent sandbox settings were weakened in application code.

Independently reviewed the final runner/classifier: stderr capture remains capped at 16 KiB in memory, output is only fixed allowlisted categories, timeout/output/cleanup and child process limits remain intact, and the temporary raw-stderr callback has been removed. Two new classifier tests and the affected runner, diagnostic parser and boundary checks passed independently: **14/14**. Reused unaffected previous evidence; **88 distinct tests** now have applicable passing evidence, without claiming a new full-suite 88-test run. No reviewer inference was made.

Reviewer read the sanitized `.phase1/launch-diagnosis/world-verification/result.json`: status proposed, work committed, two contributions, proposal proposed, canonical absent, humanAccepted false, usage unmeasured. Session `abccfac7-f193-4035-8ad9-3ebca081b60f`; attempt `584fd96a-9c1b-48f0-89ad-797e6bb07ebf`. Combined with the reviewed sibling-process launch and bridge code plus orchestrator execution evidence, this supports the bounded independent external Codex outcome. It does not establish remote hosting, multi-user entitlement, OS isolation, provider retention, private-data safety or zero subscription usage.

Required fixes: none. Human acceptance is correctly left to the user. Remaining launch prerequisite is an owner context where the local Codex runtime can initialize; the unchanged restricted model execution settings must be retained. Earlier unknown usage remains unknown. Orchestrator owns final acceptance, UI verification and readiness reporting.

## Exact candidate file manifest

SHA-256 followed by repository-relative path:

```text
44e3ebe00852d5f549182c32519c538d8012228bfc5d1fdfc9940feecb26c204  .gitignore
b8bedd5ed2f6b81f0ad8fab6742dd589ffe449b6e50c398e36456110f3e191c4  package.json
3e6ff916371542f54267cd43a7f8c49c04c9c65d6091a103d5a78820c5b7d4c7  README.md
474abd82c8e5f5486a1535f358afc22f9b9c8a18810b480f42db057e20ce3822  src/app/check-external-codex.js
c3fa38f88db02dcf5406f22748539cd0bf29e60eaaeb88e912164b57d8853d25  src/app/external-launch.js
194c851066c211243fd13642aece0d996783e38566b1db7b403dbcd0e0b288a1  src/app/repository.js
700acb2018a62943efeaeea701cba8382135f607ddaf1d840d7eb8edba31ced2  src/app/run-external-codex.js
d908b014019399432e42fc9eeb95fbef8a972e17ebcc2d842acd15bcc5ab9f8f  src/app/serve-external.js
d33859a9f2ea4dadd56acfe6787da65696e59381b640c7715964baa915e9246b  src/app/server.js
753676f6fd89c39133bb4d1c3b95728e05ede8964c55ece07a13ebcc5b99aa3b  src/app/start-external.js
353606f55de67b7b372a3e5f46fd94c766e92618781d9923e7dd51ff8adf8383  src/app/tests/external-workflow.test.js
7f7d38d9c12e3fca493d216695292a2d27ec21edc03f30636ad742f2445d3d4a  src/app/ui.js
0e5d70f0e57edec8aeb7138a40881a87dd76d3a066043c194e575bb599a3023b  src/features/agents/connection/bridge-failure.js
851a9a1fbb46684ce17d19fa2320a2f6a3a447bbef7c9ae0e377af3b0bdf18d4  src/features/agents/connection/codex-draft-check.js
581b2b5907ddc2fd0c3c45a3376f8a48e69f54364420063e6c98e64cd1c6434f  src/features/agents/connection/codex-stderr-diagnostic.js
dd477ea29dafc83152214eb516eeedc975201cc53fe888d1cfef153529fb2408  src/features/agents/connection/collaboration-connectors.js
dd7e5ea2f3a8ba1ee9a61456a480a22d20e1929edf039c76f7f19909ee051cf9  src/features/agents/connection/external-bridge.js
152416bd1624cfdaafeb87541b4a03ca992f76ca5eae1bd4ec85eb1b1538b6fa  src/features/agents/connection/external-protocol.js
bc12df564b0da678b6e23f9bfa4995616de29bf31a45b910611e32688567360a  src/features/agents/connection/index.js
60f0f848a3cbe6161205f0c54b93fac83164a605b20287dd280a3169d1cdd713  src/features/agents/connection/preflight-recovery.js
0c5d986b021a9aea3a4dded3174a251ebbbef1e6603ff561540c84b70ddaee16  src/features/agents/connection/service.js
809dbfcdd09cb76b656c91f22f4b8003a7c8b86b456774a005313b408127c648  src/features/agents/connection/tests/bridge-failure.test.js
265eefa6749b49300b85cb1c8d2615116261483a8d6cb860a4d303243404598e  src/features/agents/connection/tests/codex-stderr-diagnostic.test.js
1dd7986915b2903a2098217b122fdda4d816c154b1706e195835416705ee742c  src/features/agents/connection/tests/fixtures/external-bridge-process.js
a7d9dcaff0f8e22f7203193df08611bd49286c54ad6a06bdaa4f8690d9f81925  src/features/agents/connection/tests/preflight-recovery.test.js
1d02bc64bbc2d58f3eec7886dd3dd2cdfaa0aaa5114d9542b43a3c0ddb66cd30  src/features/agents/connection/ui/panel.js
fd4f28b7cacbf7bb59c29a0b67e0195235f10bb925f37975433db15f0e47d0f9  src/features/collaboration/document-review/service.js
be9f158cba270bcdfd9e3953f02c431e274945fa7fba2576352d82b96a86633e  src/features/collaboration/document-review/ui/panel.js
4331f477d0e31f2de2410dffc2f73408af0e153f86b8c26f54964f1acd3581dd  src/features/work/session/external-work.js
a8552a90a3489465e487fbcb048475549ad99fd07b40254426801733cc0a4afc  src/features/work/session/service.js
bc713224a1bb49b0a32623cef4baedfbb809aa65c0543127bac2aa15942bcc99  src/features/work/session/ui/panel.js
```
