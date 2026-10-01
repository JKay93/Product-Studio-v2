# Current state

## Current direction — native-first Stage 2 design

The user approved updating the native-first/company-funded roadmap and requested
the next-chat handoff on 2026-10-01. Start with
[Stage 2 handoff](handoffs/STAGE-2-NATIVE-AGENTS-HANDOFF.md),
[Decision 004](decisions/004-native-agents-company-funding.md) and ROADMAP.md.
This is Stage 2 directly, not Phase 1 Stage 2 or a new Phase 2.

Keep the accepted human foundation and Calm workspace: Worlds and planning notes,
explicit save/conflict/recovery, React/TypeScript/Vite + Node/SQLite. Decision 002
and [delivery evidence](runs/stage1-foundation-delivery.md) retain the reviewed
32-file candidate and user-reported 200% zoom PASS. Application foundation is
published at `fe4a8db73a8da7a571857c8e07172fb2249b35c7`. Studio content/receipt
publication was verified at `994a702` / `9a40a19`; see
[publication evidence](runs/publication-20261001.md). Earlier Phase 1 connector/pilot
working changes and ignored stores remain local and preserved. Preview startup is
documented at http://127.0.0.1:4330; current process availability has not been
rechecked in this documentation task.

Next chat designs two real built-in agents doing complementary brief → plan work
through the same scoped World contract. Company work uses company-funded access;
employee/requester, agent/operator and payer are distinct. Design basic per-call
usage, price basis, reservations/ceilings, concurrency, settlement and uncertainty
before native execution. Payment collection/commercial pricing are later readiness
work; dollar/credit examples and markup were illustrative, not selected rates.
Exact task/roles, provider/model, runtime placement and live allowance remain open.

The previous external-first participation package is historical reference. Decision
004 supersedes its route/onboarding/funding assumptions; retain useful Session,
input disclosure, attributable contributions, human acceptance, stop and migration
principles. Original reviewed text snapshots are retained at
`runs/reviewed-candidates/stage2-external-20261001/`. Prior QA covered the original
package, not a new native design. One bounded external Codex route worked; universal
interoperability, a real external pair, accurate automated billing and private-data
assurance are not established.

Stage 2.1 implementation remains held. No app edits, preflight/login, provider
inference, new spending, installation, migration or deployment occur in this update.
Do not resume the weekly pilot. Preserve all original saved work, reservations,
attempt identities, budgets and usage uncertainty. New external spending remains
zero. Read the routing file before every worker dispatch: Builder GPT-6.1 Sol Low;
PM/Designer/Technical Specialist/QA Medium; explicit fork_turns none. These are
studio worker requests, not product participant models or backend activation proof.

Last material update: 2026-10-01. Owner: orchestrator.

## Historical context — earlier authority and observations

The entries below retain their original dated meaning. Follow the current direction
and latest CONTRACT.md/Decision 004 for next work; old pilot next steps are historical.

Phase 0 is accepted under the user's explicitly revised prototype scope; see
[roadmap](ROADMAP.md) for milestone status and [closeout](closeouts/PHASE-0-CLOSEOUT.md) for
acceptance evidence and publication receipt. Private-data assurances remain unproven
and are carried into Phase 1 readiness before a confidential pilot.

Application main `0312413` has been pushed to GitHub. It contains the accepted real
Codex-to-Claude fictional workflow, human acceptance, local controls and diagnostic.
Live inputs still use the fixed fictional fixture. That published revision has no
external-agent connector; the local Phase 1 candidate is described below.

New approved principle: external agents keep provider credentials at their runtime;
BYOA should integrate with the agent via a runtime/provider-agnostic boundary.
The [architecture assessment](architecture/AGENT-WORLD-BOUNDARY.md) proposes the
smallest change; it is not implemented. The old [Phase 1 handoff](handoffs/PHASE-1-HANDOFF.md) is historical; use the current handoff above.

Local `.data/` holds accepted output, raw observations and cumulative budget history;
Git ignores it. Preserve it. Claude estimate US$0.005369 of original US$1, zero held
reservations; no fresh allowance follows from Phase 1 or a new clone/chat.
No keys in documents/source/chat. No providers called in this closeout.

Use the established feature/domain folder layout, concise assignments and proportional
review. Avoid unnecessary agent rounds and broad repeated reads. No deployment,
installation, new spend or private-data use is implied by Phase 0 acceptance.
Studio publication evidence is recorded in the closeout, after verified pushes.

Phase 1 proposal review completed locally: [Technical Specialist review](runs/phase1-external-agent-proposal-review.md)
is PARTIAL, with a concrete recommended slice and seven acceptance checks. Orchestrator
accepts the review findings as planning input, not implementation acceptance. Recommended
initial scope was a separate local fictional harness polling World plus a synthetic reviewer.
The user subsequently questioned repeating Phase 0 and agreed to verify a real external
Codex route first. That direction supersedes the scripted-harness-first recommendation;
fixture tests remain useful checks, not the Phase 1 demonstration.

The [Codex route assessment](research/codex-external-route.md) records official interface
support, installed CLI help and a sanitized ChatGPT login-status check. The selected
next route is an owner-launched bridge beside Codex, polling World and retaining provider
authentication at the runtime. No model inference or application change occurred in
the route assessment itself. The subsequent bounded implementation is now local,
with [independent review](runs/phase1-external-codex-review.md) and
[verification evidence](features/agents/connection/EVIDENCE/PHASE-1.md).

The real check first stopped before enrollment because startup warnings were parsed
as a version mismatch. A reviewed, guarded startup-only recovery passed preflight,
enrolled, received work and obtained execution authority, then failed without a draft.
World marked the attempt indeterminate; no canonical output changed. Model usage and
the underlying runtime error remain unknown. Diagnostics now preserve safe failure
details for future attempts; they cannot reconstruct this failure. No further automatic
model retry or recovery is authorized. Preserve both ignored `.phase1/real-check/`
and `.phase1/real-check-recovery/` plus bridge journals; original `.data/` is untouched.
RM-06 remains incomplete; runtime diagnosis is next, and private-data readiness unproven.
Current application changes and Phase 1 records are local only, not pushed or deployed.

User-authorized diagnostic on 2026-09-30 completed once, with the 60-second runtime
limit. Evidence `.phase1/diagnostic-20260930/result.json`: `process_exit`, exit code 1;
work indeterminate, zero contributions, no proposal or acceptance. Session
`1a11126f-5deb-48ab-a60f-b49ea88ebda7`, attempt
`c6c031c7-27e9-477b-ad92-b43425954795`. The process failure is now identified, but
underlying CLI error and inference/usage remain unknown. No further attempt was run.
Next diagnosis must resolve why the CLI exits; do not repeat the unchanged model call.

Publication confirmed: studio package `8b6ff53` pushed to origin/main, including the
architecture proposal, reviewed Phase 0 closeout and Phase 1 handoff. Application
remote main was independently confirmed at `0312413`. The closeout delivery receipt
records exact revisions and excluded local evidence. RM-05 delivery is accepted.


## Launch repair verification — 2026-09-30

The restricted outer launch failed during Codex initialization with filesystem access denied. The invocation matched Phase 0. An isolated verification with normal owner runtime-state access succeeded (234-character draft), followed by a successful complete external World handoff. Codex read-only sandbox, disabled tools, ephemeral execution and child environment allowlist were unchanged. No global permissions or configuration changed.

Evidence is preserved in ignored .phase1/launch-diagnosis/: isolated-result.json, normal-context-result.json and world-verification/result.json. Session abccfac7-f193-4035-8ad9-3ebca081b60f, attempt 584fd96a-9c1b-48f0-89ad-797e6bb07ebf: work committed, two contributions (real external Codex draft and synthetic review), proposal ready, no canonical document and no human acceptance. Subscription usage is unmeasured. Earlier failures and their unknown usage remain preserved; original .data/ is untouched.

Safe enum-only stderr diagnostics now distinguish initialization denial. The temporary raw inspection hook was removed; 14 affected checks pass independently. This verifies the bounded owner-local external route, not broader RM-06 completion or private-data readiness. Changes remain local, not pushed or deployed. Next is human review of the proposal and selection of the next bounded Phase 1 slice; no further model attempt is needed for this launch repair.


## User acceptance recorded

The user explicitly accepted the displayed Saturday book-swap proposal in chat. Receipt: application .phase1/launch-diagnosis/world-verification/user-acceptance.json, original session abccfac7-f193-4035-8ad9-3ebca081b60f. The current workspace contains a newer session without a proposal; the original was unavailable for the normal UI acceptance action. User acceptance is recorded, but no canonical document was created in World and the newer workspace was not replaced. This does not accept broader Phase 1 or authorize a new provider run.


## Saved-work continuity diagnosis and pilot definition

User authorized local continuity repair and pilot definition. Read-only inspection confirms original proposal 40ea6e23-a50b-41ed-ac41-ce07de45e47c, revision 1, remains retained unchanged; the prior UI failure did not mean deletion. Current-only selection and active-session requirements hid and blocked owner review of old work. Implementation/review is underway to separate saved owner review from runtime lifecycle, preserving denied late agent access and the newer current session. The [pilot definition](features/work/session/PILOT.md) proposes a weekly project brief, pending user preference; no new live run is authorized by the draft. See [roadmap](ROADMAP.md) for current milestone status.


## Saved-work continuity delivered

Local continuity fix passed [independent review](runs/phase1-continuity-review.md). Saved proposals can be selected, revised and accepted after newer sessions, restart or expiry; prior accepted snapshots remain saved, and old agent authority stays closed. The exact original book-swap proposal 40ea6e23-a50b-41ed-ac41-ce07de45e47c revision 1 was reopened and accepted through the owner UI under the user's earlier explicit acceptance. Canonical output and per-proposal acceptance are now persisted. Newer session 67c0d608-7218-4678-80d2-1674696fcc75 remains stopped with no grants. Receipt: application .phase1/launch-diagnosis/world-verification/canonical-acceptance.json. This supersedes the earlier inability to record canonical acceptance.

Builder full 90-test suite passed and a subsequently added expiry check passed with both continuity tests (91 distinct checks, not one full 91-test rerun). Reviewer independently passed 29 relevant checks. Root verified real retained proposal selection and acceptance in the browser and persisted state. No provider calls in this task. Changes are local, not pushed/deployed. [Pilot definition](features/work/session/PILOT.md) is reviewed as a draft; weekly project brief remains provisional pending user preference. No pilot runs performed.


## Weekly project brief pilot selected

The user confirmed the proposed weekly project brief and proceeding with items 1–3. Three fixed fictional cycle fixtures and bounded external execution are being prepared under the current contract. Baseline human effort and final proposal acceptance require actual user observations, so no success or speed comparison is yet claimed. No weekly pilot call has run. The existing book-swap and accepted history remain preserved.


## Weekly pilot implementation ready, baseline pending

Three exact weekly-brief fixtures, baseline freeze and one-attempt-per-cycle controls passed independent review. [Readiness](features/work/session/EVIDENCE/WEEKLY-PILOT.md) records candidate/tests/browser evidence. Root verified cycle selection/disclosure; accepted book-swap remains saved. No actual baseline received, weekly cycle reserved or provider call made. Next user input: [manual baseline](features/work/session/BASELINE.md), brief plus hands-on minutes and copy/handoff count. Do not fabricate it or dispatch beforehand. Then runWeeklyPilot handles one cycle at a time under the three-attempt authorization; new proposals await actual human acceptance.


## In-app baseline repair verified

User-requested baseline form now appears prominently on opening the weekly pilot preview. It shows the exact fictional exercise, blank brief/time/handoff inputs and explicit Yes/No self-review. Owner cookie/CSRF protected save validates values and uses atomic persistence with a shared save/reservation lock. Baseline remains editable before the first attempt and immutable after freeze. Unsaved drafts survive polling and errors (not page reload); dirty changes block start, and concurrent freeze shows saved values while retaining unsaved content separately. Previous stopped activity is labeled separately from next-task readiness.

[Independent review](runs/phase1-baseline-ui-review.md) PASS with exact candidate hashes and 20 affected tests. Root isolated browser verified blank validation, mouse save, false self-check retention, reload, dirty-start refusal and concurrent freeze without pairing or inference. Real preview refreshed and verified empty baseline form plus retained accepted book-swap. Actual baseline/weekly reservations remain absent; test records are isolated in .phase1/baseline-ui-test-* and are not pilot observations. No model calls or publication. User can now complete/save baseline inside World; next step remains connecting the independently launched runtime.


## Reliability-only pilot authorized

User explicitly approved removing the manual baseline and testing actual external-agent workflow. PILOT revision 3 supersedes the exercise/timer/handoff prerequisite and excludes time-saving claims. Builder removes gating while retaining fixed fixtures, durable attempt caps, no retries and human acceptance. Any existing baseline records remain preserved; optional local notes are not agent inputs. Unsaved rewritten text was reported by the user but browser inventory currently exposes no tab and no baseline.json exists; user asked to paste it for preservation. Do not claim it recovered or refresh their existing page.


## Reliability-only pilot delivery — 2026-09-30

Baseline removal passed independent review (19 relevant checks); same-version runtime relocation and safe failure projection passed 33 affected checks. Isolated browser checks confirmed enabled start and optional local-note save. The old unsaved user brief was not recovered; preserve the old 4319 page.

Updated preview: http://127.0.0.1:4321/, state .phase1/weekly-pilot/world.json. Original accepted book-swap remains preserved. Cycle 1 failed preflight because the pinned executable moved; reservation and original unknown-usage failure remain preserved, with startup-diagnosis.json added separately. No retry/reset. Reviewed replacement db24ee4aeff81dee retains version 0.158.0-alpha.2.1 and runtime restrictions; version/login checks passed.

Cycle 2 produced a real Codex draft plus synthetic checklist: session e960b1b1-2ae4-451e-a087-5512137ddd4e; attempt 03555b76-7d17-48ee-8f71-772ce3e7cdd5; proposal 2777d942-9c14-42b3-8719-ff89f6a036ac revision 1. Evidence: application .phase1/weekly-pilot/weekly-brief-2/. Elapsed 7335 ms; subscription usage unmeasured; human acceptance pending.

Next: owner reviews cycle 2; cycle 3 is unused. Do not retry cycle 1, claim three successful cycles, time savings or Phase 1 completion. Changes remain local, not pushed/deployed. This supersedes earlier baseline-required next steps.
