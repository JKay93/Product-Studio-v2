<!-- studio {"id":"byoa-world:prd:phase1-pilot","scope":"byoa-world","type":"prd","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"}]} -->
# Product requirements: Phase 1 recurring-work pilot

- Product Manager owner: orchestrator acting as pilot planner; user selects workflow.
- Last material update: 2026-09-30.
- Contract, strategy and roadmap: [contract](../../../CONTRACT.md), [strategy](../../../STRATEGY.md), [RM-06](../../../ROADMAP.md).
- Requirement revision: 3; user-approved reliability-only pilot. Manual baseline and time-saving comparison removed; human proposal acceptance remains required.
- Selected template: [PRD](../../../../../operating-system/templates/prd.md); core sections retained.

## Problem, outcome and scope

A human project owner needs an attributable draft, understandable review and a saved decision without copying between chats or losing earlier work. The external book-swap demonstration proves one connection, not repeatable usefulness. A newer session hid the prior retained proposal; saved-work continuity has been repaired and independently reviewed.

Selected workflow: a weekly project brief containing progress, blockers, next actions, owners and explicit unknowns, using a prepared fictional project update. The user confirmed this workflow; it does not settle personal-first versus team-first product direction. Pilot audience is one existing local owner, not a multi-user team.

Observable outcome: the owner completes three separately initiated draft/review/acceptance cycles and can reopen every result after a newer session and server restart.

In scope for the authorized bounded pilot: one external Codex drafter, human editorial review, clearly labeled synthetic checklist, local saved proposals, revisions and acceptance. A second real reviewer is an optional subsequent experiment, not a prerequisite. Weekly-brief fixture support is now authorized for implementation and independent review before any run; retain the original book-swap fixture.

Non-goals: private inputs, personal agent memory, provider fallback, unattended recurring execution, collaboration across owners, new purchases, public hosting or production security claims. Private-data readiness remains RM-06A. Live runs may begin after independent review; no manual baseline and no automatic retries.

## Requirement [byoa-world:req:PILOT-001]

Behavior: owner reviews a fictional input packet and its disclosure, starts one bounded session, connects the external runtime, inspects the draft and synthetic checklist, edits if needed, and explicitly accepts a saved revision. A new session uses fresh identifiers and does not inherit old grants.

Exceptions: a failed or uncertain attempt remains recorded without automatic retry. Unknown usage stays unknown. Feedback and owner edits stay local rather than silently triggering another model call. Missing information appears as an explicit unknown, not an invented project fact.

Acceptance evidence: each pilot row records input fixture/version, session/attempt/proposal/revision identifiers, outcome, system elapsed time, revisions, rubric results, usage availability and failure reason. No human timing or handoff form is required. Three planned runs are the authorized maximum; they are not evidence of completion or permission to accept the resulting work.

## Requirement [byoa-world:req:PILOT-002]

Behavior: owner reopens any saved proposal, distinguishes current agent activity from historical output, reviews the selected revision and retrieves accepted output after restart. Accepting past work must not complete a different active session or restore stopped runtime access.

Exceptions: stale revisions, non-owner writes and late agent results are rejected. Legacy proposal metadata may be incomplete and must be labeled rather than fabricated. Previously accepted versions remain available if a later acceptance changes the current canonical document.

Acceptance evidence: local persistence/restart/history and authorization checks pass before the later pilot. During pilot, inspect all three saved results after a new session and restart. Require zero lost proposals or untraceable acceptance decisions.

## Experience, system and readiness

Journey: one workspace with separately identified current session and saved work, labeled keyboard-operable selection, attributable draft/review, saved revisions and explicit acceptance. Use existing [document review requirements](../../collaboration/document-review/PRD.md).

Data: only fictional input packets, generated drafts, human edits, attribution and safe evidence. World credentials remain distinct from provider credentials. Remote confidentiality is not established.

### Reliability and success measures

The manual comparison is withdrawn by user direction. Test the actual agent workflow using the three reviewed fixed fictional packets. Optional user-written notes remain local and are not baseline evidence or provider input. No speed, effort reduction or time-saving claim follows from this pilot.

| Measure | Proposed threshold | Evidence |
| --- | --- | --- |
| Completion | All 3 runs reach explicit owner-accepted saved revisions; any failure remains counted | Session and acceptance records |
| Quality | Each final brief identifies progress, blockers, next actions/owners and unknowns; no unsupported factual assertions | Owner rubric for each final revision |
| Continuity | All outputs/revisions reopen after newer session and restart | Saved-work inspection |
| Handoff | World delivers the fixed packet and receives the result through the external bridge | Dispatch and receipt records |
| Cost visibility | Every run states measured/estimated/unavailable usage accurately; no new spending | Existing budget evidence and runtime receipt |
| Boundaries | No provider key in World; no restored old grants, unauthorized acceptance or late writes | Reused relevant tests plus affected regressions |

If a threshold fails, report the failed measure and decide one bounded correction or a changed pilot hypothesis. Do not increase run count to hide failures. Three observations are feasibility evidence, not a statistical or market validation claim.

Execution uses reviewed fixed fictional fixtures. No baseline collection is needed. The user has authorized at most three bounded subscription attempts; financial limits remain unchanged. Infrastructure/account selection and retention assessment belong to RM-06A before private inputs.
