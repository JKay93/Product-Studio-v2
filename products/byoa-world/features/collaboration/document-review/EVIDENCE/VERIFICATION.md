<!-- studio {"id":"byoa-world:verification:phase0-preview","scope":"byoa-world","type":"verification","status":"draft","links":[{"relation":"verifies","target":"byoa-world:prd:connection"},{"relation":"verifies","target":"byoa-world:prd:session"},{"relation":"verifies","target":"byoa-world:prd:document-review"}]} -->
# Verification and release report: Phase 0 local preview

- Independent reviewer and last material update: `/root/phase0_qa`, 2026-09-29.
- Orchestrator acceptance owner: `/root`.
- Candidate revision: local application commit `748edf9`; SHA-256 manifest in independent review identifies inspected files.
- Contract, requirement, design and technical-specification revisions: [authorized Phase 0 contract](../../../../CONTRACT.md); [connection PRD revision 1](../../../agents/connection/PRD.md), [session PRD revision 1](../../../work/session/PRD.md), [review PRD revision 1](../PRD.md); [design](../DESIGN.md) and [technical specification](../../../../architecture/PHASE-0-TECHNICAL.md), dated 2026-09-29.
- Independent review: [findings and candidate evidence](../../../../runs/phase0-preview-review.md).

## Verification

| Acceptance criterion | Result | Evidence | Limitation and owner |
| --- | --- | --- | --- |
| Two identifiable participants exchange selected context and contributions | PASS, synthetic | Independent suite and source review: fresh per-participant envelope; second participant receives first contribution; demo labels explicit | Fixtures prove workflow, not independent live intelligence; Technical Specialist |
| Context grants and actor authority enforced outside generated text | PASS, bounded local cases | Forbidden company/agent resources denied; actor spoofing, missing cookie/CSRF, Origin/Host/JSON checks; static file allowlist; no private markers in state | One OS-user trust boundary, not production identity or confidential remote execution; Technical Specialist |
| Stop, expiry and restart prevent further contribution writes | PASS | Noncooperative late result rejected; subsequent read/submit/dispatch denied; expiry and restart tests | Remote provider deletion unproven; Technical Specialist |
| Human-only review, changes, revision history and canonical acceptance | PASS, local owner revision | Changes block acceptance until revision; stale/duplicate/agent acceptance rejected; history retained; prior canonical preserved | Feedback does not automatically rerun agents; PM |
| Responsive working interface, honest failure and stopped states | PASS, orchestrator rendered evidence | Orchestrator browser journey and final updated-server desktop/mobile inspection; current-session activity, stopped/read-only and ended-access states confirmed | 390px mobile has no horizontal overflow; browser evidence attributed to orchestrator, not independent browser execution |
| Safe persistence, text rendering and modular organization | PASS | Disk reload test; private markers absent; text nodes and CSP; public-index dependency test; README navigation guide | Local JSON is plaintext; no production hardening claim; builder |
| Template alignment and source scope | PASS | Actual PRDs/design/specification/research compared with selected templates; approved organization preserved | Draft broader strategy is not implementation authority; PM/orchestrator |
| Codex subscription and Claude API live collaboration | PARTIAL / not demonstrated | [Connectivity research](../../../../research/agent-connectivity.md) records one separate Codex CLI response; Claude adapter uses mocked tests only | Codex app adapter disabled; Claude credentials and bounded spending absent; live two-agent proof remains open; Technical Specialist |

## Completion and delivery state

Integrated live user acceptance, September 29: `.data/live-workspace.json` records
Session `fa2a8dc5-98d7-4e4e-9960-09f6409888df`, two real attributed contributions,
accepted proposal revision 1, canonical document and completed Session with empty
grants. User acceptance timestamp: `2026-09-28T19:37:46.358Z`. Codex's draft hash
matches Claude's recorded handoff hash, and disclosure prompt hashes match their
saved text. Claude added an explicit pre-event donation drop-off window. Usage:
253 input / 287 output tokens, US$0.001688 estimated; cumulative Claude estimate
US$0.003000. Budget settlement is retained alongside the reservation in
`.data/live-budget/`. User accepted without revising; revision controls were tested
with mocked providers, not asserted as exercised in this real run. This establishes
the integrated fictional-data workflow and human acceptance, while private isolation,
remote retention and imported private agent knowledge remain unproven.

Follow-up live experiment, September 29: orchestrator observed a real Codex
subscription draft, then user ran Claude API review of that exact saved draft.
Application `.data/collaboration-live-review.json` records `collaboration_completed`
and draft SHA256 `8fd3d4355fb4f8630a60d1371a17ffe7b03a536284e489746a30d415adf12645`.
Claude preserved the plan's structure and added pre-event collection to reduce
day-of sorting. Usage: 180 input / 213 output tokens, estimated US$0.001245 for
review; US$0.001312 cumulative Claude estimate including initial smoke. Codex
subscription usage is separate. Both prior failed attempts made no Claude request.
This is accepted as observed sequential synthetic handoff evidence only. Human
acceptance, integrated UI, private isolation, remote retention and direct
agent-to-agent communication are not verified. The original preview table above
records the earlier candidate; this paragraph supersedes its no-Claude-live-call
finding, not its broader limitations. No additional request made during inspection.

- Local acceptance: accepted by `/root` on 2026-09-29 for the synthetic local preview at `748edf9`, after independent PASS, 17 passing automated checks and final rendered verification. This does not accept the live interoperability milestone.
- Repository: local application commit `748edf9`; no application push or merge asserted.
- Release: not released; local loopback preview only.
- Rollback or recovery reference: application README describes stopping the process and backing up the ignored workspace state; no production migration exists.

## Residuals

- Known risks, deferred items and owners: live provider integration, runtime read confinement, provider retention/cancellation and dollar spending controls remain with Technical Specialist. No real confidential context is appropriate. Manual owner revision is an explicit preview limitation. Gather/Pokemon UI, marketplace, broad integrations and organizational controls remain deferred.
- Evidence invalidated by later changes: changes to runtime, UI or governing requirements invalidate affected checks; final candidate fingerprint is recorded in independent review.
- Next authorized action or genuine blocker: user evaluates the running local preview. Live Claude calls require credentials and bounded spending authority; integrated Codex runtime restrictions remain unresolved. These do not block synthetic preview use.


## Rendered evidence

### Integrated fictional live workflow follow-up

The bounded live UI implementation received independent PASS; see
[integrated review](../../../../runs/integrated-live-workflow-review.md).
Independent 48-test full suite passed, followed by the final 9-test affected
workflow/budget suite including added history-chain and stop-during-Codex cases.
Integrated HTTP/browser verification used mocked providers, not paid calls.
Orchestrator verified exact disclosure inspection, local changes and revision 2
acceptance, stop rejecting late work, preservation of earlier canonical content,
and desktop/mobile layout. Actual live startup with a fake key reached ready
without dispatch. The real integrated provider run remains unverified; prior
standalone success remains distinct evidence. Original US$1 cumulative budget,
fixed fictional inputs and explicit human acceptance govern this candidate.

Final updated-server browser inspection was performed by the orchestrator and relayed to the independent reviewer. Desktop and 390x844 mobile views were checked; no horizontal overflow was observed. Current-session timeline attribution and stopped read-only state were rechecked after the final fix.

- [Stopped desktop workspace](C:/Users/jingk/.codex/visualizations/2026/09/28/01a0e889-46ec-7ad1-abf9-7b01eca77548/byoa-stopped.png)
- [Mobile workspace](C:/Users/jingk/.codex/visualizations/2026/09/28/01a0e889-46ec-7ad1-abf9-7b01eca77548/byoa-mobile.png)

## Phase 0 closeout supersession — 2026-09-29

The user accepted the bounded prototype and deferred private-data readiness to
Phase 1 staging before a confidential pilot. The chronological checks above retain
their original scope; pending statements are historical. Current acceptance and
verified repository delivery are in [PHASE-0-CLOSEOUT.md](../../../../closeouts/PHASE-0-CLOSEOUT.md).
This supersession changes milestone scope/status, not the results of any privacy test.


## Phase 1 saved-work continuity verification

Candidate: exact changed-file hashes in [independent review](../../../../runs/phase1-continuity-review.md); governed by current contract continuity authorization and review/session requirements. Builder 90 full tests plus added expiry regression (91 distinct), reviewer 29 relevant checks pass. Saved owner revision/acceptance survives new session, restart and expiry, preserves later current session, rejects stale/unauthorized writes and late agent results. Historical audit attribution and safe session summaries verified. Root browser selected actual retained proposal 40ea6e23-a50b-41ed-ac41-ce07de45e47c and applied user's explicit acceptance to revision 1. Persisted canonical/acceptance verified; newer session unchanged and grants empty. Evidence: ignored .phase1/launch-diagnosis/world-verification/canonical-acceptance.json and accepted-preview.png.

Orchestrator accepts this bounded local fix following independent PASS and browser evidence. No provider calls, push, merge or deployment. Existing state is retained; no destructive migration. Legacy sessions may lack original task metadata and show Earlier saved work. Pilot definition is planning only; RM-06 and RM-06A remain governed by roadmap.
