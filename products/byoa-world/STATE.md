# Current state

Last material update: 2026-09-29.

- Local synthetic preview accepted by orchestrator after independent PASS, 17 tests
  and desktop/mobile browser verification. Application commit: `748edf9` (local only).
- Preview: `http://127.0.0.1:4317`; running local Node server. Restart with `npm start`
  in sibling `BYOA-World/` if needed. No production release or application push.
- Seven main records now exist: three PRDs, connectivity research, technical plan,
  workspace design and [verification](features/collaboration/document-review/EVIDENCE/VERIFICATION.md).
- Three feature owners: agents/connection, work/session, collaboration/document-review.
  Human owner needs no agent. Both preview participants are clearly labeled simulations.
- Working: selected context, scoped grants, attributed contributions, manual revision,
  explicit acceptance, local persistence, stop/revocation and activity history.
- Codex subscription standalone smoke succeeded; its app adapter remains disabled
  because runtime read confinement is unresolved. Claude API adapter has mocked
  coverage but no live call; local credentials and spending allowance remain absent.
- [ROADMAP.md](ROADMAP.md) owns milestone status. Full Phase 0 live proof remains open.
- Next: user feedback on preview; then resolve provider setup and runtime boundaries.
