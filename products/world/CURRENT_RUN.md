<!-- studio {"id":"world:document:current-run","scope":"world","type":"document","status":"draft"} -->
# World current run

Run: [Phase 4 connection and acceptance check](runs/2026-10-05-phase4-connection-status.md).

Status: phases 1–3 accepted; Phase 4 remains PARTIAL on accepted source `6b0f6976e91a1ad6dffcf54541926c689f944f5d`. User supplied local Supabase configuration and requests connection/status verification. Read-only API check passed (HTTP 200); PostgreSQL verification is blocked by its self-signed CA chain and needs the trusted database CA certificate. Database credentials/schema remain unverified. Independent QA confirms Phase 4 PARTIAL. Prior source preparation evidence remains in [the Phase 4 start record](runs/2026-10-04-phase4-start.md). Real signup/persistent UI and organization/grant/memory/revocation work remain pending; connection success alone cannot complete Phase 4. No migrations, production publication, provider calls or new spending in this status run.
