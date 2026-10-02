# Stage 2.1 native offline builder verification

Candidate frozen for independent review, 2026-10-02. Governing authority: Decision 006, native package revision 1, technical/PRD/design revision 2 and Decisions 002/004/005. Requested builder route gpt-6.1-sol / low / fork none; actual backend unknown. Orchestrator owns route/assignment provenance and acceptance. Worker implementation provenance and platform durability limitations are in `stage21-native-worker-builder.md`.

## Implemented candidate

- Native TypeScript public feature ports and v2 wire contracts; frozen saved-note snapshots, distinct A/B identities, scoped machine capabilities, lifecycle/epoch revocation, exact immutable A owner checkpoint and dependent B handoff.
- Named additive SQLite v2 tables with foreign keys, unique attempts/reservations/contributions/receipts, immutable snapshot/contribution triggers and exact schema/trigger validation. Atomic contribution/settlement and note/revision/receipt/grant acceptance. Compatible v2 human-only fallback retains new history; no downgrade/import.
- Company development **synthetic test** accounting, A+B reservations together, one active task, integer microUSD estimates/unknown holds, duplicate/conflicting receipt handling, append-only operator reconciliation with counts/actor/provenance/reason. No live funding activation, personal fallback, customer charge or historic allowance reset.
- Ink/Cobalt foundation shell and cohesive Work UI: exact instructions/input/limits/payer disclosure, explicit synthetic start, owner brief checkpoint, original contributions, partial-A salvage label, saved human review copy, feedback, current/replacement comparison with pinned revision, explicit title-and-body acceptance, history and same-command recovery. World remount prevents stale content; review drafts/pending commands remain scoped in session storage. No implicit note save or redispatch.
- Separate process offline worker demonstration; World never imports the provider adapter. Fixed Haiku adapter and durable exclusive journal use injected transport only. Actual child-process A→checkpoint→B integration is synthetic evidence, not two live agents.

## Verification

Final pinned Node v24.19.0 run: **35 tests passed**, zero failures. Included accepted foundation regressions, dependency boundaries, actual HTTP machine wrappers and separate child-process exact A→B checkpoint, no-retry/lost-response/fsync fault handling, secret canary, malformed/oversized/tool/cache/billable usage rejection, source/identity/resource/action/expiry denials, reservation contention, unknown usage/restart/late-result holds, reconciliation reopening, acceptance conflict/replay after later human edits, copied-v1 migration/rollback/v2 fallback/immutable-trigger refusal and contribution-storage fault rollback. Typecheck and production UI build passed. Diff whitespace check passed after trimming three EOF blank lines; no semantic edits followed the test run.

Preservation backup/inventory: `tmp/byoa-stage21-preservation-20261002/`. Compared **72 original JavaScript/package files: zero changes**. Existing dirty legacy code, package contents and original stores were retained. Initial inventory honestly contains null hashes for three locked active foundation DB/log files; no writer was stopped and no live DB copied/migrated. All tests used temporary synthetic storage or closed synthetic-v1 copies.

Frozen source/config manifest: `tmp/byoa-stage21-preservation-20261002/candidate.json`, SHA256 **624829D8A77C18FE1BC207EB9289D1E6362136B59E01FE48ED10F840C3FDE5D1**. Independent review/browser evidence and orchestrator acceptance remain separate. Later corrections invalidate affected manifest/check evidence.

## Preview and limitations

From `BYOA-World`, run bundled Node `src/app/foundation/start-native-offline.ts`; `FOUNDATION_PORT` optionally selects a free port (default4340). It creates a fresh OS-temp database and prints its path. Create/save the approved fictional bakery note, open Work, prepare and select the session, then explicitly start the synthetic demonstration. It launches the worker separately using operator capabilities through stdin; tokens never appear in browser/arguments/logs. Review A, continue, review/edit/save B, review the replacement and explicitly accept. Original foundation4330 is unrelated and untouched.

No credentials, provider network/authentication/preflight/counting/inference/spending, legacy pilot, installation, publication or original-store migration occurred. Windows directory fsync is unavailable; journal file fsync/exclusive creation is offline evidence and does not establish live crash durability. Provider entitlement/current-price/funding/retention/private-SME readiness and real output usefulness remain unverified and live-disabled. Operator reconciliation is a narrow public transaction port, not company billing administration. Preview history persists within its isolated store; a new preview invocation deliberately creates a new test store.

UI UX Pro Max priority/quick-reference guidance was used. The targeted React search and one narrower retry returned no verified match; accessibility/form/recovery choices use the skill's general guidance and approved design, not invented search recommendations. Actual browser keyboard/narrow/200% zoom verification is orchestrator-owned.

## Final review correction bundle

Implemented the bounded independent-review corrections: review title joins body in immutable proposal revisions, command digests, validation and atomic note/revision/receipt acceptance; a meaningful title/body conflict/replay test passed. Ctrl/Cmd+S on Work opens the same deliberate comparison and never commits; unsaved title/body edits require Save review copy first. Known server conflicts clear misleading uncertain-command recovery and retain the draft with Refresh/fresh comparison guidance. Only interrupted/uncertain acknowledgements retain same-key recovery. Control boundaries use #788398 separately from decorative #DCE1EB dividers. Retained artifact IDs/hashes wrap, containers permit shrinking and mobile columns use minmax(0,1fr) to address the inspected320px overflow.

Final recheck:35tests pass; typecheck/build/dependency boundaries/diff check pass;72 original JS/package hashes still unchanged. The final manifest includes root package/lock/TypeScript/Vite configuration alongside source hashes. Actual final browser title/shortcut/conflict/narrow/zoom checks and independent candidate rebinding remain orchestrator/reviewer-owned. Preview requires a fresh temp store/server because the candidate proposal schema and API now include title; original saved stores remain untouched.

## Composer integration closure

Root's actual accepted title/body walkthrough found that returning from Work displayed the planning-note hook's cached earlier revision. The bounded closure changes only shell composition: the Planning note sidebar action calls the public note.load after the existing dirty/uncertain save-leave/discard navigation gate authorizes navigation. It does not bypass that gate or overwrite a protected draft; the hook's existing World stale-response guard remains governing. No backend, worker or schema changed.

Affected verification refreshed: foundation12tests including dependency-boundary checks pass, typecheck/build/diff check pass. The prior35-test domain/worker/HTTP evidence remains unaffected. Latest build BU3MfZH6.js; final actual Work-to-Planning-note canonical reopen verification and candidate rebind are root/QA-owned. Manifest hash above now identifies this closure candidate.
