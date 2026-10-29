<!-- studio {"id":"world:run:2026-10-29-enforced-world-controls","scope":"world","type":"run","status":"complete"} -->
# Enforced World assistant controls

## Goal and authority
User approves World settings plus server enforcement, followed by a zero-spend document journey and permission tests. Documents are reference data; only authenticated settings grant or restrict company authority. Reuse World-Rebuild, verified origin JKay93/MyWorld. Studio records stay in JKay93/Product-Studio-v2. Preserve reference folders, current documents, prior inference ledgers and uncertain holds. No provider calls, paid activation, live sends or production deployment.

## Tasks and acceptance
- G1 Backend Builder: versioned PostgreSQL per-World policy, role-protected API, current-policy enforcement through actual runtime/tools/effects/review, durable per-World inference allowance inside existing transactional global safeguards. Independent tests for policy change, concurrency, forbidden reads/actions and content authority.
- G2 UI Builder: accessible World Settings in existing light layout; owner/admin edit and member read-only. Clear scope, meaningful defaults, finite current model choices, validation, stale-update/world-switch handling. No fake payment/send/edit-existing switches. Focused interaction tests.
- G3 Independent QA: inspect actual integration and controls; assess model/document content cannot grant authority, private/cross-World/role boundaries, policy changes during work, stale approvals and spending reservations. Zero network model usage.
- G4 Root: real isolated PostgreSQL migration/checks, UI desktop/mobile document/settings journey, build/regression checks, safe local activation, scoped commit/push and report.

## Scope decisions
Use explicit policy revision and optimistic settings updates. Platform/session/resource checks always remain the upper boundary. Defaults preserve current draft workflow: readable Knowledge, private draft creation allowed, human review required. Paid AI is disabled until explicitly allowed; configuring policy never turns on server live mode. Company AI limits are cumulative and cannot exceed platform safeguards or reset charges/holds. Knowledge scope limits apply to assistant retrieval/context; do not silently remove a user's own manual Knowledge editing rights. Company document scope defaults remain requester-visible records only; no cross-World sharing or administrator access to private chats. Optional review may end a private draft job without an approval record, never publish or authorize external effects. No delegated reviewer grants in this slice.

## Questions
None required. Implementation details are delegated within this scope; no new paid test allowance.

## Status and handoff
Planning/read-only source inspection complete. Create/reuse correctly routed Builders and independent QA. Actual backend model activation and host cost remain unknown unless exposed.

## Dispatch receipts
G1 domain/API Builder `/root/world_controls_backend`, G2 UI Builder `/root/world_controls_ui`, and G1 runtime Builder `/root/world_controls_runtime` requested gpt-6.1-sol/low/fork-none after reading current role/routing. Routing SHA256 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; actual activation unknown. Backend owns world-policy contracts/store/API/migration and effect checks; runtime Builder owns harness/ports/budget; UI owns components/CSS. Independent QA starts once an implementation slot is available.

Contract decisions: `/api/worlds/[worldId]/policy` GET/PATCH, optimistic expectedVersion, `src/lib/world-policy.ts` and server equivalent. Assistant Knowledge scope is readable/company/none; folder granularity deferred, no UI promise. Model route IDs follow existing platform provider/model syntax; selecting a route does not enable it. Membership/runtime/policy/document lock order is explicit; policy updates do not lock runtime or reset ledgers.

## Implementation and review outcomes
G1/G2 implemented structured policy, scoped API/UI, persistent revisions/change receipts, assistant-only access rules, exact private-draft review, optional private completion without approval, model route controls and per-World allowance inside existing platform constraints. Policy changes fail old active work and permit fresh requests; transaction-local context avoids shared mutable policy across Worlds. Historical charges and uncertain holds are projected when a World ledger did not yet exist, without resetting global records. Manual Knowledge rights and private chat ownership remain unchanged.

Host blocked a new reviewer at its thread limit. Reused independent `/root/document_review`, whose recorded gpt-6.1-sol/medium/fork-none route matches current routing. No substitute-role exception was needed. Independent source review passed after corrections: simulation route must also be selected, historical spending must count, optional-review completion produces no approval, and model/task text cannot grant a disabled draft write. UI received correct review wording and locally defined design tokens.

Root standard regression: 126 passed/11 opt-in skipped across 27 files. Explicit isolated PostgreSQL suites: 13 passed, covering those 11 and two overlapping cases; 137 unique tests verified. The budget test was then strengthened to distinguish concurrent World cap exhaustion from separate platform cap exhaustion; its exact-case rerun passed, preserving original unknown-hold/restart/route assertions. Typecheck, full ESLint and separate QA production build passed; final affected-test lint passed.

Browser checks used owned headless Edge, synthetic accounts and a separate port3106/World_m3 fixture server with no provider key; external requests blocked. Nine document/settings groups passed: defaults, paid cap without activation, desktop/mobile containment/styles, template/private save/exact review, separate revision/original preservation, stale review invalidation/new no-review completion, forbidden draft write, human access despite assistant scope, settings conflict/reload. A focused member browser check separately passed three groups: read-only controls, direct mutation403 and outsider read404. Initial combined QA helper needed corrected run ordering and World selector/loading synchronization; no corresponding product patch was claimed. Actual model generation/content quality was not exercised.

Root captured protected normal/evaluation ledger hashes before work. Isolated world_m3 tests deliberately create synthetic liabilities and accounts; they are not provider charges. Normal/evaluation ledgers remained byte-hash identical after testing and refresh, preserving known evaluationUSD0.11192190 and prior unknown holdUSD0.004648. No new provider calls/spend. Normal site had zero active jobs before controlled pause; additive policy tables installed, production build passed, restarted owned process on3105 as PID12236. Normal browser five readiness/auth/mobile/no-external checks passed; new policy route unauthenticated401. Old reference file hash preserved.

Final independent evidence/docs/source audit passed. Normal site ready in fixture mode. Deferred controls: folder-level policies, manager review grants, other paid model routes, external actions and business spending. Prior cheaper-model repair/context issue remains separate.


## Acceptance and delivery
G1–G4 accepted after independent review and root verification. Final affected-test lint passed; whole candidate build and checks remain valid. Application commit `30eb2dae52542e8a22c3eee640ebe6bf689abdae` pushed to JKay93/MyWorld main and remote SHA verified. App working tree clean. Documentation: World-Rebuild/docs/world-controls.md. Normal localhost3105 is ready in simulated mode; no paid AI activation or new provider spending occurred. Existing normal/evaluation ledgers and reference folders are preserved. Studio records are committed only to JKay93/Product-Studio-v2.

No pending authority questions or required implementation remains for this slice. User can test Settings → Assistant controls and the document workflow. Future live Terra pilot still requires fresh bounded spending authority; prior model comparison allowance remains closed. Deferred items above remain outside this completed scope.
