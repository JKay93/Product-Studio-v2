<!-- studio {"id":"world:run:2026-10-04-phase4-start","scope":"world","type":"run","status":"draft"} -->
# Roadmap revision and Phase 4 start

## Goal and scope
User approves the updated eight-phase sequence and asks to start Phase 4. Phase 3 is the accepted Agent canvas/settings UI; original identity/persistence/authority phase becomes Phase 4. Update canonical roadmap/current references, preserve stable retrieval IDs and historical run records, then implement the first bounded backend foundation. No production deployment, new spending, provider calls or real delegation.

## Tasks and acceptance criteria
- `world:task:roadmap-renumber` — Orchestrator: original roadmap has eight phases, completed phases1–3 and current Phase4; implementation plan and live references agree; existing stable document/requirement IDs retained. Commit/push studio update before implementation dispatch.
- `world:task:phase4-foundation` — Builder: start4.1 with typed identity/ownership and scoped repository commands plus a protected personal database baseline. Stable opaque IDs; current demo still passes. Versioned drafts/idempotent messages, owner-only Agent config and personal records; SQL constraints/default-deny RLS and narrow actor-bound commands. No organization/grant/learning backend claims without implemented evidence. Explicit setup/verification entry points; no silent mock fallback. Type/lint/tests/build; real database checks when an authorized environment is available.
- `world:task:phase4-foundation-review` — Independent QA: scoped contracts/database security and existing UI regression; distinguish actual execution evidence from source/unit checks. Missing live environment means Phase4 acceptance remains pending.
- `world:task:phase4-start-deliver` — Orchestrator: accept only verified scope, commit/push reviewed application and studio records separately; document missing environment and next4.2–4.3 personal signup/Agent/Session slice.

## Outcomes and evidence
Started from clean MyWorld `e617d2ca01f78ed528f2b1a8694146e475056d6e` and studio `e69de1c697f66152eeed75493d78bbb42c1723ab`. Verified destinations remain JKay93/MyWorld and JKay93/Product-Studio-v2. No Supabase/Docker/psql tools, database environment variables or project .env configuration found in focused setup inventory. Database choice asked asynchronously; contracts/schema work can proceed independently. Real authenticated acceptance remains unproven.

Implemented credential-independent personal foundation: opaque workspace IDs/explicit owners and asynchronous command contracts; separate server-only caller-JWT RPC adapter; personal schema with owner constraints, scope foreign keys, owner-only RLS and restricted actor-bound writes; idempotent bootstrap/primary creation/request ledger, versioned draft CAS and retry-safe message append. Organization ownership is explicitly prohibited until its policies exist. Existing demo controller remains presentation-only; full shared async controller extraction and live loading/configuration are pending. Request-time backend mode blocks access instead of mounting sample identities.

Review corrections: NULL-safe SQL revisions/payload comparisons, PostgREST composite array mapping, safe typed errors, primary creation alias request keys and dynamic request-time mode evaluation. Frozen source migration SHA256 `E14AAF0FFAA83E73596B96EE49DC20952D21646B73FDD1DC2B87A84679CA9254`; adapter `636D9008A1A079D85A1893CAA052A0BB34117ADA2A807D1DD49223F893B49EF7`; page `C5294CE3776CCB2BB83AD16C7EF2E60606B5738D3E7784ACE172613A7E735E94`.

Builder typecheck/lint/27tests/production build passed; independent QA reran27/27 tests and source review. Root ran the same production artifact with WORLD_MODE=backend on temporary localhost3001: CUA showed only setup block, no demo controls, warning/error logs empty. Temporary server/tab closed; existing3000 preview server untouched. No duplicate production build or dependency installation needed. QA PASS for bounded source preparation, PARTIAL for Phase4; root accepts preparation only. Real migration/RLS/concurrency/API/persistence/identity proof has not run.

Setup entry points: World/.env.example contains variable names only; apply `supabase/migrations/202610040001_personal_foundation.sql` only to authorized nonproduction Supabase. `node tests/integration/run-personal-db.mjs` (World cwd) requires WORLD_TEST_DATABASE_URL and psql, runs rollback fixtures after migrations and exits1 saying no checks ran when unconfigured. Fixture connection requires controlled test-user setup authority; never use production data.

## Questions
User will provide Supabase details later; proceed with the remaining credential-independent preparation and record blockers. Do not provision a new project or local runtime. Connection secrets must use local ignored environment configuration, not records/chat output. No new spending authorized.

## Decisions
User approves Agent-page build as Phase3, identity/persistence/authority as4, workflow5, collaboration6, continuity7, pilot8. Start4.1 first; preserve the accepted UI and avoid another design pass. Historical run phase numbers remain historical. Retain stable IDs when moving the identity plan to PHASE_4_PLAN.md.

## Deferred work
Blockers from missing Supabase details: cannot apply/reconstruct the schema; run authenticated SQL/RLS/isolation/concurrency checks; configure and verify real signup/session refresh; demonstrate persistence across reload/accounts or revoked-token access denial. Supabase URL/publishable key and an authorized disposable integration database connection are needed via ignored local configuration. psql is also currently absent; choose an authorized test execution method when setup is supplied. Do not request privileged service-role credentials for ordinary requests.

Remaining4.1 real verification/controller extraction and4.2–4.8 implementation remain pending; credentials alone do not complete missing code. Full async authenticated UI wiring/signup/configuration/read loading remains4.2–4.3. Organization membership/standing grants/memory/revocation are not implemented in this personal baseline. Automated learning, provider/worker5, real delegation6, portable-learning/departure7, pilot8 remain later. Borrowed-Agent entry wording/control prominence still deferred by user.

## Handoff
Roadmap delivered and remote-verified at studio `5b6111b0b00a3ad179a854ae8928e103a788d103`. Builder `/root/world_phase4_foundation` requested gpt-6.1-sol/low/none under routing SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`; route/role read before dispatch. Independent reviewer `/root/world_phase4_foundation_review` requested qa gpt-6.1-sol/medium/none after fresh routing/role read; final scope-limited PASS. Follow-ups compared the recorded route with refreshed current routing. Root owns instructions, continuity and repository delivery. Actual activation/token/cost unknown.

Preparation accepted and delivered to MyWorld main at `6b0f6976e91a1ad6dffcf54541926c689f944f5d`, remote SHA verified; app tree clean. Delivery removed one trailing blank EOF line in the migration only; no semantic code changes after review. Final migration SHA256 `4470CF2BDF1DD2BFCE6D5B69AE258C3D6D200AB47CDE523E5AD6808D25FB110C`. Studio closure/blockers delivered separately with this run; verify its containing commit externally to avoid self-referential hashes.

Phase4 remains partial and cannot pass without real environment evidence. Next action when user supplies development details: configure authorized environment, apply migration and execute real checks/fix any database issues, then wire4.2–4.3 authenticated personal Agent/Session UI through existing reusable components. Further code must preserve existing demo and ownership boundaries. No unattended automation or provisioning is active.
