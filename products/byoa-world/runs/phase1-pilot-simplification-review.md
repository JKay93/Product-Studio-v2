<!-- studio {"id":"byoa-world:review:pilot-simplification","scope":"byoa-world","type":"review","status":"approved","links":[{"relation":"implements","target":"byoa-world:contract:main"}]} -->
# Review: reliability-only weekly pilot

- Reviewer identity / role: independent remove_baseline_review agent.
- Candidate revision and contract/requirement revision: local uncommitted candidate identified below; CONTRACT reliability-only pilot revision and PILOT.md revision 3, reflecting the user's explicit approval to remove the manual comparison.
- Verdict: PASS for the bounded implementation. Orchestrator owns final acceptance and live verification.
- Last material update: 2026-09-30.

## Acceptance criteria checked and evidence

Independent execution of `node --test src/app/tests/weekly-pilot.test.js src/app/tests/external-workflow.test.js src/app/tests/saved-work.test.js`: 19 passed, zero failed. All runtime calls in these checks are fixtures, not provider inference. `git diff --check` passed with line-ending warnings only.

The weekly server reservation no longer reads or freezes a baseline. Three exact approved fixtures retain exclusive durable per-cycle reservations, 60-second runtime bounds and no automatic retries. An absent or changed legacy baseline does not block a new unused cycle; prior reservations still block reuse after restart and concurrent requests. The owner-side coordinator has no baseline prerequisite, verifies its reservation/session relationship and produces proposals without accepting them.

Optional notes have a separate atomic file and owner-cookie, exact-origin, CSRF and machine-credential exclusion checks. Test evidence covers persistence through restart, validation, legacy file preservation and exclusion from the actual bridge prompt. The old baseline mutation endpoint returns BASELINE_RETIRED, preserving existing measurement records. No measurements, human attribution or time-saving claims are synthesized.

UI inspection confirms removal of manual timing, handoff counts, self-check prerequisites and dirty-baseline start refusal. Optional notes remain editable independently of cycle state, preserve new unsaved text during polling, and use browser draft storage across reload when available. Legacy saved text remains a read-only reference. Root separately performs isolated browser verification; this review does not claim visual inspection of the user's existing tab.

## Document/template comparison

This compact report follows the review template's identity, candidate, verdict, evidence, preserved decisions, fixes and limitations. PILOT revision 3 explicitly scopes reliability, quality, saved history and human acceptance; its current requirements remove manual comparison and disclaim time savings. BASELINE.md is retained with an explicit superseding notice, not treated as an active prerequisite.

## Preserved decisions checked

Fixed fictional provider input, external runtime/provider authentication separation, owner-only acceptance, no second provider or API fallback, prior saved proposals and acceptance snapshots, original budget/evidence preservation, immutable consumed attempts and denial of late machine writes remain intact. The tests reuse existing external authorization and saved-work regressions.

## Required fixes

None for this candidate.

## Residual risk / verification limitations

The user's old unsaved baseline text exists only in their previously loaded browser page and is not recoverable from this candidate. Do not refresh that page or replace its backend before preserving the text. An old loaded UI expects the old workspace baseline fields; switching its backend alone is not a safe migration. New optional-note draft storage cannot retrospectively recover old text. No live weekly run, user acceptance, remote confidentiality, deployment or publication is established by this review.

## Exact candidate SHA-256

Paths are relative to BYOA-World.

| File | SHA-256 |
| --- | --- |
| src/features/work/session/pilot-gate.js | 9158fe6fc945a85f0212c65b8b875775f2fe6d2a1e565f7a78f018aa93ddbdde |
| src/features/work/session/ui/panel.js | 6393fc1f45cf01ff7bb5f1f4f26d8a3242cdcbadae6b62cea095743fcfcbadb1 |
| src/app/server.js | 46b3f103a51681505532d4d5706a103d4e88cb9fd908b14ca817085ac7203085 |
| src/app/ui.js | 47b24b9b083eb5bc37112c2f658d9eb4597cc855a52c03801b79deea66b68454 |
| src/app/run-weekly-pilot.js | 030a23cd37edf74ce6825289b1f0318f3af34d24c577beca73f98807678f981c |
| src/app/tests/weekly-pilot.test.js | 73c25a070e0b635b682c1f68cb1c2738982ca096228e1ce65913790a3253facc |

## Runtime path and failure-evidence delta review

Independent reviewer: runtime_delta_review. Verdict: PASS for the bounded delta, 2026-09-30.

Reviewed the installed runtime path update from faa963e871dd422c to db24ee4aeff81dee, preserving pinned version 0.158.0-alpha.2.1, read-only sandbox, disabled tools, ephemeral invocation and child environment allowlist. The orchestrator reports direct installed-version/help and subscription-preflight verification; this review did not invoke inference or inspect credentials. The exact absolute executable remains pinned rather than using PATH discovery.

The weekly coordinator now projects failure evidence through the existing allowlisted bridgeFailureEvidence helper. Raw errors are not persisted by this change. The affected fixture check verifies PREFLIGHT_UNAVAILABLE survives while no retry occurs. No cycle reservation or earlier evidence is reset.

Independent affected verification: 33 tests passed, zero failed across codex-draft-check, bridge-failure, preflight-recovery and weekly-pilot. These use fixtures/local subprocesses, not provider calls. git diff --check passed with line-ending warnings only. No required fixes. This does not establish live pilot success or authorize retrying cycle 1.

Updated SHA-256 candidate entries (BYOA-World relative):

| File | SHA-256 |
| --- | --- |
| src/features/agents/connection/codex-draft-check.js | b889c54c019b06e574cce38e4e3dd6e71a99a340fcb6f1e6e0a4dbc86124d3ad |
| src/app/run-weekly-pilot.js | 5a75152b0e463df1b2df0dbf465414fb6b4daa18800b06c1e8bba0af14632b8e |
| src/app/tests/weekly-pilot.test.js | 46c26305f6ee5e42c42ecf85ab1ddea5adf7211a33a8259265f0cd62e70a6543 |
