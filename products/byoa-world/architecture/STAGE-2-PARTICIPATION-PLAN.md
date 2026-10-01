<!-- studio {"id":"byoa-world:prd:stage2-participation-plan","scope":"byoa-world","type":"prd","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"},{"relation":"reference","target":"byoa-world:decision:world-foundation"},{"relation":"reference","target":"byoa-world:rule:modularity"}]} -->
# Stage 2 participation plan

- Product Manager owner: Stage 2 PM; orchestrator integrates specialist findings and records user decisions.
- Last material update: 2026-10-01.
- Requirement revision: 3, discussion/design draft; not an implementation or live-execution approval.
- Sources: [contract](../CONTRACT.md), [roadmap BYOA-AGD-01–09 / BYOA-AGT-01–07](../ROADMAP.md), [Decision 002](../decisions/002-world-foundation.md), [modularity](MODULARITY.md).
- Selected template: [PRD](../../../operating-system/templates/prd.md), smallest useful set. Core problem/scope, requirement behavior/errors/evidence and experience/readiness sections are retained. One cross-feature plan avoids prematurely rewriting historical feature PRDs. Tables map requirements to roadmap packages; the Technical Specialist owns protocol detail and the Designer owns interaction detail.
- Routing provenance: PM assignment requested GPT-6.1 Sol / Medium / no inherited context. Backend activation is unknown; the request is not confirmation of activation. Assignment identity and routing receipt belong in the orchestrator's task record.

## Problem, outcome and scope

The owner can already create a named World, write its planning note, save and reopen it. The current discussion should add useful participation to that workspace: two independently running agents cooperate on the same work, with understandable disclosure, status, review and stop controls.

**Owner-facing proposal:** open a fictional planning note, choose two participants, ask A to develop a project brief using its planning expertise, and ask B to use that actual brief and its complementary expertise to produce a concrete action plan. Return later to inspect both contributions and a proposed note. Edit or request changes, then explicitly accept the chosen revision. Agent activity never silently changes the saved planning note.

The user clarified that agents should work together, each using expertise to fulfill a different linked deliverable: one develops the necessary document and the other uses it for further work. This replaces the initial draft-and-critique-only suggestion. The project-brief → action-plan journey is a concrete proposal, not yet an approved task selection. It keeps one canonical planning note: the brief and plan are retained Session contributions/proposals, not a general new artifact-management system. Expertise is a task role declared by the operator, not a verified qualification or an assumption that all projects are software projects. For a concrete approval example, PM recommends a fictional software feature with Product planner → Technical architect: A produces a project requirements brief; B produces a technical architecture/action plan, not code or a build. This expertise/task choice remains proposed because the human preference is pending; it is not a software-only product restriction. The Designer's fictional community-garden concept illustrates the same generic brief → plan flow. Choose one fixture/role pair before execution and align its input/rubric/copy; neither example expands the scope.

### Evidence and assumptions

| Item | Standing |
| --- | --- |
| Stage 1.1 foundation and Calm workspace | Approved under Decision 002; current parent task reports user acceptance and a satisfactory native 200% zoom observation. Durable closeout is the orchestrator's responsibility, not a status edit in this plan. |
| Two genuine independent participants | Required by the approved roadmap; two providers are optional. Two labels around one result or a synthetic checklist do not satisfy this outcome. |
| Historical external Codex route | Existing evidence of one bounded owner-local route; compatible components may be reused after technical reassessment. This does not prove the proposed pair works. |
| Historical Codex/Claude prototype | Useful review and boundary evidence; its World-side provider access is not the target runtime-side credential boundary. No automatic Claude selection or fresh allowance follows. |
| Selected pair, current route support and authentication | [Actual route assessment](../research/STAGE-2-ROUTE-ASSESSMENT.md) recommends two independent external Codex bridges. User selection and current executable/auth/capability preflight remain pending; no new pair run has occurred. |
| Background execution and return visits | Proposed experience; Session authority/expiry and work outcomes persist independently of an open browser. No unattended service is added. |

### Observable outcome

One owner completes a bounded fictional-data journey in the foundation: prepare a scoped Session → pair A and B to that Session → inspect exact authorized context → Start when both are ready → A produces a project brief → B uses the committed brief to produce an action plan → owner reviews and accepts a specific proposal revision → end agent access → reopen saved work after restart. Failed or partial work remains understandable and retained. Human-only writing remains usable without connecting either agent.

### In scope

- One owner, existing named Worlds, existing plain-text planning note, one bounded Session for that note, and two selected independent runtime connections.
- Minimal connection identity/operator labels, pairing, truthful connection state, reconnect and revoke.
- Explicit task, saved source revision, authorized recipients/actions, handoff, bounded attempts/deadlines and inspectable disclosure.
- Attributable brief/action-plan deliverables, separate proposed work, owner edits/change requests, explicit acceptance, retained history and stop/revocation.
- Existing Calm workspace, React/TypeScript/Vite + Node/SQLite and cohesive feature boundaries unless evidence requires a separately decided material change.

### Non-goals, dependencies and constraints

No weekly pilot, arbitrary runtime support, private inputs, personal-memory import, second-provider requirement, external tools/actions, managed inference, rich document editor, marketplace, multi-owner administration, new spending, application publication or production deployment. Confidentiality, external deletion and remote process cancellation are not promised. Live inputs for the first demonstration are a designated fictional fixture; general note sharing is not authorized merely because the human editor accepts free-form text.

Design work now may inspect public interfaces and existing records, prepare local fixtures/checks and explain missing authority. It must not make new model/provider calls, inspect credentials, consume old attempt reservations, modify application code or launch a live demonstration. AGD-09 approval and applicable implementation authority precede Stage 2.1; live execution needs its own concrete allowance/attempt plan.

## Requirements

Each row is a proposed Stage 2 requirement. IDs remain stable during review. Evidence names the actual implementation candidate and approved requirement/design/technical revisions when delivery begins; this document supplies no completed test results.

| Requirement / roadmap alignment | Behavior and error states | Acceptance criteria and evidence required |
| --- | --- | --- |
| **BYOA-AGD-R01 — useful dependent work** / AGD-01 | A develops a project brief from the selected fictional note, with objective, constraints, assumptions and intended outcome. B waits for A's committed brief, then applies its complementary expertise to produce a concrete action plan grounded in that brief. If A fails, B is blocked rather than supplied invented prerequisite work. | Real records identify both runtime connections, Session/work/attempt IDs, A contribution ID and the A revision/body supplied to B. B's result identifies A's input contribution and translates its objective/constraints into sequenced actions, dependencies, risks and completion criteria. Two unrelated answers, critique-only output or synthetic review fail the complementary-work criterion. |
| **BYOA-AGD-R02 — connection identity** / AGD-02/03 | Owner sees participant name, runtime/operator identity, selected route and evidence standing. Pairing credentials are distinct from provider credentials; missing/unsupported/disconnected states are explicit. Reconnect never silently restores expired Session grants. | Positive pairing and invalid/expired pairing checks; wrong participant/World denial; reconnect/revoke checks; actual screens distinguish connected-idle from working and unavailable from failed. Selected route and version/capability limits are evidenced by the Technical Specialist. |
| **BYOA-AGD-R03 — scoped authorization** / AGD-04 | Owner chooses World, saved note revision, A/B roles, task, actions and expiry before start. Effective permission is the intersection of platform, World, agent-owner, Session and resource ceilings. No selected context means no implied whole-World grant. | Server-side tests deny wrong World/Session/agent/resource/action, unknown IDs and expired authority. Session snapshot identifies the exact source revision and handoff permissions. Agent text or claimed capabilities cannot enlarge authority. |
| **BYOA-AGD-R04 — inspectable disclosure** / AGD-05 | Before dispatch, owner can inspect what A receives and what B receives: selected fictional source/task plus role instructions; B receives the same original saved-note snapshot, human goal and A's exact permitted committed brief. Dirty human edits are excluded. Disclosure cannot imply runtime/provider forgetting or host isolation. | Envelope/disclosure checks match previewed inputs; fixtures outside selection and another agent's private fixtures are denied. No provider credential is sent to World or model text. UI explains runtime/operator/provider exposure and revocation limits. The linked technical assessment owns the proposed wire/storage contract and handling limits. |
| **BYOA-AGD-R05 — bounded work and status** / AGD-04/06/08 | Session progresses through understandable waiting, running, review-ready or failure/end states. Contribution persistence and execution success are distinct. Timeout/unknown usage remain unknown. No automatic inference retry. | Local tests cover acknowledge vs running vs committed result, A success/B failure, disconnect, indeterminate timeout and duplicate/conflicting results. Owner can find committed partial work and a specific next step without losing it. Requested limits, usage provenance and preserved attempt history appear in evidence. |
| **BYOA-AGD-R06 — review and canonical note** / AGD-07 | A's brief and B's action plan remain attributable and separate from the canonical planning note. Proposed default: B's action plan seeds an editable candidate; owner inspects both linked deliverables and decides/edits the final plan. Neither deliverable equals human approval. Acceptance explicitly applies one proposal revision to one expected note revision. | Canonical note is unchanged during dispatch/result/review. Agent acceptance is denied. Owner acceptance commits the selected candidate atomically or fails without loss on a source-note conflict. Repeated acceptance produces no duplicate canonical transition. Accepted history records owner, proposal revision, original source provenance and resulting note revision; note update/acceptance receipt commit atomically and Session grants close. A completed B contribution is required for the initial Save selected plan action; incomplete-work salvage is not presented as cooperative success. |
| **BYOA-AGD-R07 — change requests** / AGD-07/08 | Owner can edit the candidate locally or record feedback/request changes. Proposed minimum: feedback itself does not trigger a model call. A further A/B cycle requires a new explicit bounded run under valid authority and fresh acceptance. | Empty feedback is rejected where required; prior accepted note stays intact; feedback/candidate revisions persist. No automatic redispatch follows owner edits or request-changes. Any later live revision cycle names distinct attempts, permitted inputs and allowance, and cannot reuse an expired grant. |
| **BYOA-AGD-R08 — stop and retention** / AGD-03/04/07/08 | Stop/expiry/revoke denies future retrieval, dispatch and contribution writes. Existing proposals remain owner-reviewable after Session end, a newer Session or restart. Runtime cancellation is requested only where supported and shown separately from World access ending. | Race/late-result tests confirm rejection and unchanged canonical state. Repeated stop is safe; restart does not reopen grants. Reopen retained brief/action-plan/proposal/history and accept as owner after Session end, subject to current note revision checks. No claim of erasing disclosed data. |
| **BYOA-AGD-R09 — foundation preservation** / AGD-06/09 | Human-only create/write/save/reopen, recovery and conflict behavior continue. No automatic historical workspace import, identity expansion or database replacement. | Focused foundation regressions plus preservation inventory verify existing source, canonical work, ignored evidence, attempt IDs and budget uncertainty unchanged except approved additive migrations. Actual integrated screens receive keyboard, narrow-width and 200% zoom review. |

### Proposed review rubric

A's brief should retain the note's stated intent/facts, identify objective/constraints and label assumptions. B must use the actual brief to create a second substantive deliverable: a feasible action plan with ordered steps, dependencies, risks and observable completion criteria. B should identify contradictions or missing facts rather than invent them. The owner can trace why B's plan follows A's brief; a critique alone does not fulfill B's assignment. This rubric checks usefulness of this bounded task, not time savings, universal model quality or a successful-cycle quota. Full text/provenance is available for the owner's judgment; the assistant cannot substitute for canonical acceptance.

## Experience, system and readiness

### Journey and design

Keep the planning note and Save action recognizable in the approved Calm workspace. Add participation through a coherent workspace surface rather than replacing the human editor with a historical pilot page. Create a PREPARED Session with World/source snapshot/task/roles before pairing A/B to its slots. Preview exact recipient inputs, expiry and run limits; Start requires both bound connections ready and applicable authority. PREPARED establishes scope, not execution permission. In progress, show A/B status and dependent handoff. On return, show project brief, action plan and reviewable candidate beside the current saved note, with acceptance clearly distinct from Save and Session completion.

**Integrated design:** [Stage 2 participation design](../design-system/STAGE-2-PARTICIPATION-DESIGN.md) provides Agents and Work sessions navigation, prepared setup, A/B working, exact context disclosure, linked deliverable review, conflict/failure/stop/history states and keyboard/narrow/zoom criteria. Its conversation concept is explicitly simulated; actual Stage 2.1 screens still require candidate verification. Source note and candidate appear in the Save selected plan confirmation, which clearly explains replacement and retained revisions.

Connection state and Session state are distinct. A connected runtime can be idle; a stopped Session can still have saved proposals; a finished execution can still await owner review. Failures and unavailable routes use text and actionable next steps, never color alone. Switching World or returning after restart must not hide retained work or silently start execution.

### Data inputs, outputs and boundaries

| Object | Proposed treatment / authority |
| --- | --- |
| Existing planning note | Owner-managed canonical resource; snapshot a saved revision for the first fictional demonstration. Unsaved text remains local. |
| Session/task | Owner-authorized scope and frozen inputs; separate from the browser connection. Context changes cannot retract prior disclosure. |
| A contribution | Committed attributable project brief tied to its attempt and source; shared to B only by explicit Session permission. |
| B contribution | Substantive action plan tied to the exact A brief input contribution; cannot accept canonical work or fetch additional resources. |
| Proposal | Owner-reviewable brief/action-plan/candidate revisions, independent of live grants. B's deliverable can seed the candidate, but never automatically replaces canonical work. |
| Acceptance | Human owner action with expected note and proposal revisions; transactional note update and provenance/history. |
| Provider access | Remains at each external runtime; World credential is separate. No key/token import. |
| Attempt/usage | Durable identities and reservations; measured/reported/unknown remain distinguishable. Historical budget evidence is preserved. |

**Integrated technical proposal:** [Stage 2 route assessment and minimum contract](../research/STAGE-2-ROUTE-ASSESSMENT.md) owns the evidence matrix, two-bridge recommendation, Session-bound v2 protocol, verifier-only pairing, grant ceilings, deduplication/journals, atomic acceptance and additive SQLite migration. Official interface evidence and old receipts are distinct from current preflight or new real cooperation. Current runtime compatibility/auth/model settings and user selection remain unverified until the proposed preflight; no silent provider/model/effort fallback.

### Observed foundation reuse

Read-only inspection of current application interfaces found:

- `src/features/worlds/workspace/index.ts` exports `WorldService`, repository types and `World`. `list/get/assertOwned/create/rename` supply the existing owner/World boundary.
- `src/features/resources/planning-note/index.ts` exports `PlanningNoteService`, repository types and `PlanningNote`. `get/create/save` check World ownership; `save` validates an expected revision. The repository port exposes owner/World/note/revision parameters.
- These are human-owner interfaces, not an agent-authentication boundary. Do not hand owner identity or an unchecked owner write capability to an agent.

Stage 2 composition should use those public interfaces and feature-owned additions. The technical proposal defines a review-owned composite transaction port for accepted proposal history and note saving, and Session/grant checks before disclosure; builder/reviewer must verify these in the actual candidate. Existing exported services alone do not prove atomic acceptance/history or agent isolation. Cross-feature internal imports and a replacement monolithic workspace are disallowed by [MODULARITY.md](MODULARITY.md).

Historical [connection](../features/agents/connection/PRD.md), [Session](../features/work/session/PRD.md), [document review](../features/collaboration/document-review/PRD.md) and [boundary proposal](AGENT-WORLD-BOUNDARY.md) inform reuse: preserve disclosure/stop/review/continuity behavior, replace synthetic-completion and provider-shaped assumptions where necessary. Their old sample tasks, route selections and RM identifiers do not become current approvals. This package reconciles their applicable behavior by reference and explicitly supersedes their simulation/provider-shaped completion assumptions for the proposed Stage 2 slice. Original feature PRDs remain historical and unchanged; rewriting them is not necessary for discussion approval.

### Success and guardrail measures

| Measure | Evidence / pass condition |
| --- | --- |
| Real dependent cooperation | Two independent runtimes; B's authorized input references A's actual committed contribution; useful linked brief/action-plan deliverables judged against the rubric. |
| Comprehensible owner control | In the actual walkthrough the owner can identify source/recipients, current state, stop effect, what changed and what awaits acceptance. Record actual observations and feedback. |
| Canonical integrity | Zero agent canonical writes; only explicit owner acceptance changes the note; conflict/replay tests do not lose or duplicate work. |
| Enforced scope | Specified wrong-agent/World/Session/resource/action, prompt-expansion, stop/expiry and late-write tests pass outside generated text. |
| Retained work | Reopen brief/action-plan/proposal/accepted revision after newer Session and restart without reviving grants. |
| Truthful operation | No synthetic substitute presented as real, fabricated usage, inferred user acceptance, automatic retry, budget reset or confidentiality claim. |
| Foundation usability | Existing human-only journey remains usable with tested recovery/conflicts, keyboard, narrow width and 200% zoom. |

### Open product choices and owners

| Choice | Proposed default / alternatives | Decision owner and unresolved dependency |
| --- | --- | --- |
| First common task | Recommended example: fictional software feature, Product planner requirements brief → Technical architect architecture/action plan; garden gathering concept shows generic applicability. | User; complementary-work direction is explicit, particular task/roles remain proposed. |
| Agent pair | Recommend two independently owner-launched external Codex bridges with separate bindings, journals and runtime runs. World remains provider-agnostic and invokes no model. Different-provider pair is optional, with additional dependencies. | User package decision; operator-side version/auth/capability/model/effort preflight remains pending. |
| Candidate assembly | B action plan seeds candidate; A brief remains inspectable; owner edits/accepts final plan. Alternative automatic synthesis or third inference step adds scope/attempts and is deferred. | User through package review; PM recommends minimum. |
| Request-changes execution | Save feedback/local edits first; explicit new bounded run for further agent work. Alternative immediate A/B redispatch requires a concrete allowance and UI decision. | User/orchestrator; linked technical plan bounds the initial round, additional inference is excluded. |
| Simultaneous active Sessions | One active participation Session per World; two slots; ≤15-minute Session/grants. No arbitrary multi-task scheduler. | User approves proposed numeric limits; builder enforces linked technical contract. |
| Source conflict | Acceptance fails clearly if note changed; preserve candidate and current note for deliberate reconciliation. No automatic overwrite/merge. | Reconciled technical atomic interface and Designer comparison/reconfirmation; user approves package. |
| Design and implementation approval | One reconciled Stage 2 package covering requirements, route and screens before bounded Stage 2.1 work. | User; orchestrator records approved revision. |
| Live execution | Separate named real-run plan with attempts, timeouts, input fixtures, authentication boundary, usage uncertainty and spending authority. | User/runtime operators/orchestrator; current design authorization supplies no fresh run allowance. |

### AGD coverage and readiness

| Package | Plan coverage / next evidence |
| --- | --- |
| AGD-01 | User-required complementary deliverables; proposed project-brief/action-plan journey and R01/rubric await concrete task selection. |
| AGD-02 | Actual route assessment recommends two external Codex bridges; current preflight and user pair choice remain pending. |
| AGD-03 | R02/R08; linked Session-bound enrollment and actual Designer lifecycle states. |
| AGD-04 | R03/R05; linked v2 protocol, grant ceilings, attempts/receipts and authority matrix. |
| AGD-05 | R04; both receive original snapshot/goal/role, B additionally receives exact committed A brief; linked wire/disclosure contract. |
| AGD-06 | Actual linked integrated design/concept and R05/R09; implemented-screen verification remains future work. |
| AGD-07 | R06/R07/R08; linked atomic acceptance/history/source provenance, closure and conflict recovery. |
| AGD-08 | R05/R08; concrete proposed two-attempt/60-second/15-minute bounds below and linked preflight; live authority pending. |
| AGD-09 | User decides a coherent package after route/design convergence and proportional review; no approval inferred here. |

This is a discussion draft, not a second milestone-status ledger. [ROADMAP.md](../ROADMAP.md) remains the single status source. The package now includes actual UI/technical records, reconciled historical references and an executable proposed check plan. Approval readiness requires the owner's task/role/pair choice and approval of these records; execution readiness additionally requires current preflight and separate live authority. A blocked second route remains a named dependency; a synthetic second participant cannot complete Stage 2.1.

### Bounded Stage 2.1 delivery proposal

After AGD-09 and applicable authority, sequence bounded assignments with distinct edit scopes:

1. **AGT-01:** settle/implement enrollment, grants, protocol exchange and correlated work with isolated no-inference fixtures; verify boundary/deduplication before adapters.
2. **AGT-02/03:** implement the two selected runtime adapters and integrated connection/setup/status screens against settled interfaces. Parallel work only with separate file ownership; credentials stay runtime-side.
3. **AGT-04:** integrate A-to-B dependent work, editable proposal/review, expected-revision acceptance and durable owner history with the planning note.
4. **AGT-05:** perform meaningful denial, stop/expiry, disconnect/restart, conflict and replay checks plus affected foundation/visual regressions. One independent reviewer assesses the actual candidate; focused specialists resolve concrete findings.
5. **AGT-06:** only after local checks and explicit concrete live authority, run the bounded fictional demonstration. Preserve failed attempts/uncertain usage; no automatic rerun or fresh allowance from a new stage.
6. **AGT-07:** show the actual full journey and limitations, obtain real user feedback and canonical acceptance as distinct actions, and record closeout/preservation separately from publication.

### Proposed limits, preservation and recovery

The initial round proposes at most **two inference invocations total: one A and one B**, with B eligible only after A's valid contribution commits. Each invocation is limited to **60 seconds**; Session and World bearer authority last at most **15 minutes**; each bridge delivery lifecycle lasts at most **120 seconds**. A failed/indeterminate A consumes its reserved attempt and blocks B. B failure preserves A's brief. Cached-result transport resend is distinct from another inference invocation; no automatic inference retry is allowed.

The linked technical contract additionally caps each selected source snapshot at 50,000 characters and aggregate UTF-8 work envelope at 256 KiB; contribution at 20,000 characters and result request at 128 KiB; runtime event/output capture at 128 KiB and sanitized stderr at 8 KiB. Exceeding context caps fails before reservation and asks for narrower input, with no silent truncation. These are request/time/output bounds, not a proven inference token or billing cap. Selected participant model/effort is configured and explicitly preflighted by each runtime operator, separate from studio worker routing; unsupported settings block that route, without fallback. Report requested settings separately from runtime-reported backend evidence.

Proposed live financial boundary is **US$0 new external purchase/API spend**, using existing permitted subscription access. Subscription usage is unknown or reported, never labelled free or zero. Preserve all historic attempts/reservations and original Claude ledger; this round cannot consume its old remaining allowance by assumption. Paid API alternatives require a new concrete cumulative allowance/reservation plan before execution.

Before coding, snapshot the current foundation and preserve original/ignored historical data and evidence. Implement the proposed additive SQLite **v1→v2** migration transactionally, with explicit schema validation and copied-store failure checks; retain existing World/note/revision/command rows, with no legacy JSON import. Acceptance must atomically write the note revision, source/proposal provenance and receipt, and close Session authority through the approved transaction/state contract. The old v1-only launcher will reject v2: fallback is a **v2-compatible human-only foundation with participation disabled**, preserving newer records. Restoring an old backup is not an automatic downgrade; it could lose newer writes and needs reconciliation/authority. This migration and fallback are part of the approval package.

### Decisions requested from the owner

The coherent recommendation is two independently launched Codex participants, complementary brief → plan work, prepared Session before pairing, exact recipient preview, one A/B round, owner-selected final plan and retained review/history in the existing Calm workspace. Choose the task/expertise example: recommended Product planner → Technical architect for one fictional software feature; the garden gathering concept remains an illustration of generic use, not an approved task.

1. **Implementation decision:** approve the Stage 2 requirements plus linked technical/design proposals, including selected task/roles/pair, limits and additive migration/fallback, for bounded local Stage 2.1 implementation, offline verification and non-inference preflight. Implementation-only approval makes no new model call and authorizes no credential extraction, private input, spending or publication.
2. **Separate live decision:** approve or defer the concrete fictional two-attempt demonstration—one A then one B, ≤60 seconds each, ≤15-minute Session, no automatic inference retry, US$0 new external purchase/API spend via existing supported subscription access, unknown usage preserved—only after local checks and current operator-side preflight pass. The owner can approve implementation while deferring this decision.

These decisions concern platform delivery and execution; accepting an actual agent-produced final plan remains a later explicit human action in World. No decision is inferred from this draft or the concept.

No code, model call, credentials/private-input access, new spending or publishing occurred in this PM drafting assignment. Technical and Designer findings are integrated by reference; user approval, current runtime preflight and actual delivery/live evidence remain pending. The orchestrator owns the final approval/acceptance record.


