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

## Questions
Pending: existing nonproduction Supabase, local stack or new dedicated development project? Connection secrets must use local ignored environment configuration, not records/chat output. No new spending authorized.

## Decisions
User approves Agent-page build as Phase3, identity/persistence/authority as4, workflow5, collaboration6, continuity7, pilot8. Start4.1 first; preserve the accepted UI and avoid another design pass. Historical run phase numbers remain historical. Retain stable IDs when moving the identity plan to PHASE_4_PLAN.md.

## Deferred work
Remaining4.2–4.8 require first foundation and chosen working Auth/database environment. Automated learning, provider/worker5, real delegation6, portable-learning/departure7, pilot8 remain later. Borrowed-Agent entry wording/control prominence still deferred by user.

## Handoff
Roadmap update underway; then bounded4.1 Builder and independent reviewer. Root owns instructions, continuity and repository delivery. Actual activation/token/cost unknown.
