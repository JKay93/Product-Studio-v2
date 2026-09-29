<!-- studio {"id":"byoa-world:verification:weekly-pilot-readiness","scope":"byoa-world","type":"verification","status":"approved","links":[{"relation":"verifies","target":"byoa-world:prd:phase1-pilot"}]} -->
# Verification and release report: weekly pilot readiness

- Independent reviewer: weekly_pilot_review; last material update: 2026-09-30.
- Orchestrator acceptance owner: root.
- Candidate revision: local working tree; exact 14-file manifest in [review](../../../../runs/phase1-weekly-pilot-review.md).
- Contract/requirements: weekly pilot authorization in [contract](../../../../CONTRACT.md), [PILOT](../PILOT.md) revision 2 and [baseline protocol](../BASELINE.md).
- Independent review: [PASS](../../../../runs/phase1-weekly-pilot-review.md).

## Verification

| Acceptance criterion | Result | Evidence | Limitation and owner |
| --- | --- | --- | --- |
| Exact fictional inputs and book-swap compatibility | PASS local | Server/bridge allowlist; edited/mixed packet tests | No live inference; builder |
| Human baseline gate and frozen baseline across cycles | PASS local | Schema, hash freeze and changed-baseline tests | Actual human baseline pending; user |
| One attempt per cycle including UI, no automatic retries | PASS local | Exclusive reservation, restart, concurrency and failure checks | Trusted owner-local files, not production accounting |
| One-cycle coordinator, result/failure preservation, no acceptance | PASS local | Stubbed success/failure/reservation mismatch; 60-second bound | Real subscription use unmeasured |
| Cycle/version/original packet and saved history | PASS local | Continuity regressions; root selected cycle 1 and expanded packet in preview | Preserve versioned fixture definitions |
| Repeated live outcomes and human acceptance | NOT RUN | No actual baseline or cycle reservations | User baseline required first |

Builder full 95-test suite passed; a subsequently added helper failure/mismatch test passed with five focused pilot checks (96 distinct, not a full 96 rerun). Reviewer independently passed 18 affected checks. Root inspected three choices, exact cycle-one disclosure and retained accepted book-swap without starting a session.

## Completion and delivery state

- Local acceptance: implementation readiness accepted by root after independent PASS and preview inspection; pilot outcomes not complete.
- Repository: local only, no push/merge.
- Release: not released; local preview refreshed.
- Recovery: preserve .data/, .phase1/ and versioned fixtures; no destructive migration/reset.

## Residuals

Await actual user's baseline brief, hands-on minutes and manual handoff count. No invented baseline. Then record .phase1/weekly-pilot/baseline.json and run one authorized cycle at a time with runWeeklyPilot; at most three attempts, failures remain counted, drafts await actual human review/acceptance. Record assistant interventions separately from user effort. No provider calls, new spend or private data in this preparation. Private-data readiness stays separate. Later code/fixture changes invalidate affected evidence.


## In-app baseline UX amendment

Local repair accepted by root after [independent PASS](../../../../runs/phase1-baseline-ui-review.md), 20 independently passed affected tests and isolated browser checks. Candidate hashes are in review. Actual owner form is visible by default, saves authenticated user observations, validates blank/invalid values, preserves false rubric results and persists across reload. Dirty-start prevention and concurrent freeze were verified in a separate test workspace without inference. Original accepted work remains; real baseline and three weekly attempts remain unused. Screenshot: ignored .phase1/baseline-form-ready.png. Unsaved text survives polling/errors only; save before reload. No push/deployment or provider call.


## Reliability-only pilot delivery — 2026-09-30

Baseline removal passed independent review (19 relevant checks); same-version runtime relocation and safe failure projection passed 33 affected checks. Isolated browser checks confirmed enabled start and optional local-note save. The old unsaved user brief was not recovered; preserve the old 4319 page.

Updated preview: http://127.0.0.1:4321/, state .phase1/weekly-pilot/world.json. Original accepted book-swap remains preserved. Cycle 1 failed preflight because the pinned executable moved; reservation and original unknown-usage failure remain preserved, with startup-diagnosis.json added separately. No retry/reset. Reviewed replacement db24ee4aeff81dee retains version 0.158.0-alpha.2.1 and runtime restrictions; version/login checks passed.

Cycle 2 produced a real Codex draft plus synthetic checklist: session e960b1b1-2ae4-451e-a087-5512137ddd4e; attempt 03555b76-7d17-48ee-8f71-772ce3e7cdd5; proposal 2777d942-9c14-42b3-8719-ff89f6a036ac revision 1. Evidence: application .phase1/weekly-pilot/weekly-brief-2/. Elapsed 7335 ms; subscription usage unmeasured; human acceptance pending.

Next: owner reviews cycle 2; cycle 3 is unused. Do not retry cycle 1, claim three successful cycles, time savings or Phase 1 completion. Changes remain local, not pushed/deployed. This supersedes earlier baseline-required next steps.
