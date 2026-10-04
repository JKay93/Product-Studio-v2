<!-- studio {"id":"world:run:2026-10-05-phase4-connection-status","scope":"world","type":"run","status":"draft"} -->
# Phase 4 connection and acceptance check

## Goal and scope
User requests a real connection check, Phase 4 acceptance status and Phase 5 briefing. Inspect accepted source and use locally provided credentials for read-only connectivity checks. No migration, account creation, provider call, production publication or new spending in this run.

## Tasks and acceptance criteria
- `world:task:phase4-connection-check` — Orchestrator: check Supabase API configuration and authenticated PostgreSQL connection with read-only queries; never expose credentials. Distinguish reachable services from actual authentication/query success.
- `world:task:phase4-status-audit` — Independent QA: compare actual candidate with PHASE_4_PLAN.md; identify missing implementation and evidence without treating connectivity as phase completion.
- `world:task:phase4-status-delivery` — Orchestrator: record results, preserve roadmap numbering and brief the remaining Phase 4 work and Phase 5 scope.

## Outcomes and evidence
Started from clean app and studio working trees. App candidate remains `6b0f6976e91a1ad6dffcf54541926c689f944f5d`. Local ignored World/.env.local exists with Supabase URL, publishable key and database URI; Next.js aliases preserved and canonical variable names added during prior setup check. No secrets retained here. Database client psql and bundled Python PostgreSQL clients are absent. A temporary pg8000 client was installed outside the repositories for the requested read-only check. Supabase /auth/v1/settings returned HTTP 200 with the configured publishable key; email signup and confirmation are enabled. PostgreSQL TLS verification stopped with verify code 19 (self-signed certificate in certificate chain). No database authentication/query succeeded, so password validity, applied schema and real access tests remain unverified. Certificate verification was not disabled. No SQL migrations or live acceptance tests executed.

User supplied C:/Users/jingk/Downloads/prod-ca-2021.crt. Certificate SHA256 `700723581420DD1AC98FD7E9AC529F0EF210EADCAF87FC868A3AD7D114C2F3B7`; copied unchanged to World/supabase/certs/prod-ca-2021.crt. Retest PASSED: CA and hostname verified, database authentication succeeded, SELECT 1 executed in a read-only transaction and rolled back. Catalog queries found none of the four checked baseline tables or five public command functions; the World baseline is not installed. Supabase API still HTTP 200. Local ignored database URI now uses sslmode=verify-full and the copied certificate path; all required variables remain present. No database mutations occurred.

## Questions
CA dependency resolved with the user-provided certificate. No unanswered question for the connection/status check.

## Decisions
Connection success removes a setup blocker only; Phase 4 completion still requires real authenticated persistence, ownership, grants, isolation and revocation evidence. Do not change mode to backend or modify remote schema during a status request.

## Deferred work
Independent QA returned PARTIAL for Phase 4 at the actual candidate. Shared async UI controller, real Auth/session refresh, personal Agent/Session loading and reload, saved configuration/relationships, organization membership/ownership, standing grants, memory provenance, revocation and the real boundary matrix remain pending per the previous run. Phase 5 provider/worker execution is not started by this briefing.

## Handoff
Status check complete: API configuration PASS; PostgreSQL authenticated read-only connection PASS with provided CA; Phase 4 acceptance PARTIAL. Next: apply/test the authorized development baseline and implement 4.2–4.3. The connection blocker is resolved; missing implementation and real acceptance tests remain. Phase 5 remains the single-provider meeting-notes → editable actions → approved internal tasks → follow-up drafts workflow, with background retry/resume, stale-approval invalidation, idempotency and revocation/late-result checks. Reviewer `/root/world_phase4_status_audit` requested qa gpt-6.1-sol/medium/none after reading current route/role; routing SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`. Actual activation/token/cost unknown. Root owns records and final acceptance; reviewer is read-only.
