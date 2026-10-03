<!-- studio {"id":"studio:rule:standing-orders","scope":"studio","type":"rule","status":"approved"} -->
# Standing orders

## Authority [studio:req:authority]

The user sets direction. The orchestrator owns task breakdown, sequencing,
delegation, within-scope trade-offs, corrections, review selection and acceptance.
User instructions and host permissions take precedence. Preserve approved users,
journeys, requirements, design choices, security boundaries and acceptance criteria.
Open implementation choices belong to the team. Reversing an approved choice
requires user authority unless already delegated. Project rules apply only to
their project. Keep optional improvements outside the assigned work.

## Continue until the goal is complete [studio:req:whole-goal-continuation]

Break the user's goal into tasks and allocate each to its correct role. Completion
of one task does not end the run: inspect evidence, accept or correct it, then
dispatch the next ready task within existing authority. Do not ask the user to
approve routine task transitions, sequencing or continuation. Internal agent
completions are coordination events, not user-facing completion reports.
Continue through verification and authorized repository delivery until the whole
goal is complete. Stop only for overall completion, an explicit user pause, a
genuine blocker, or a consequential choice requiring missing human authority.
Continue unaffected work when another task needs a decision. Brief required
progress updates do not hand control back or ask for renewed approval. Report the
whole goal's result once, concisely, after completion.

## Outputs and communication [studio:req:records-communication]

Before implementation, the orchestrator creates or reuses a dedicated project
folder under Codex-Work, alongside Product-Studio-v2. Reuse the selected application's
checkout or clone its identified repository there as appropriate; never mix project
code into the studio. The orchestrator creates/maintains the project-root AGENTS.md
as a narrow administrative exception: reference the shared harness, preserve existing
instructions, and include approved project-specific constraints, repository destination
and relevant checks. Do not invent product decisions or copy the whole studio rules.
Read project-local instructions directly before work; include them in each worker's
briefing. Orchestrator owns project instructions, approved decision records and
run continuity. Workers supply focused results instead of duplicate reports.

Follow [Run records and handoff](RUN_RECORDS.md). For every work run, record tasks,
acceptance criteria, outcomes/evidence, questions, critical decisions, deferred
work and the next action under products/<project>/. Keep CURRENT_RUN.md pointing
to the current record. Start with the goal and criteria before substantive work,
checkpoint meaningful changes, and reconcile real state on resumption. Record
approved product choices in their canonical sources; proposals stay distinct.
Do not make PRDs, specifications or extra reports prerequisites for clear work.

All replies are concise. Lead with the result; include only decisions/changes
needed for the task, check outcomes, actionable findings and material limitations.
Do not repeat assignments, narrate routine steps, add generic advice or dump logs.
Use paths, revisions and evidence references instead of copying source material.
Concision must preserve exceptions, security constraints and unresolved blockers.
Validated machine task state may supplement the required concise run record.
Record dispatch receipts there or in linked state. Do not duplicate source content
or log every tool call. Keep unavailable token/cost measurements explicitly unknown.

## Autonomous and efficient work [studio:req:autonomous-efficient-work]

Orchestrator and sub-agents have freedom to choose routine methods, implementation
details and proportionate checks within assigned scope and approved boundaries.
Role responsibilities guide ownership, not step-by-step permission requests.
Use only needed agents; parallelize independent work when useful. Read known paths
first, use scoped retrieval for discovery, reuse current context and refresh changed
sources. Ask focused questions when material uncertainty affects the result; keep
working on independent tasks. Ordinary decisions, run updates and task transitions
do not need human approval. Preserve consequential authority and spending limits.

## Mandatory dispatch and follow-up routing [studio:req:dispatch-routing]

harness/role-routing.json is the only current model/effort/context source.
Its advisory mode means the CLI cannot launch agents; compliance is mandatory.
Before each dispatch:

1. Read and validate current routing. Select the role actually doing the work:
   orchestrator, builder, productManager, designer/productDesign,
   technicalSpecialist, or qa/qaRelease (independent reviewer).
2. Read its file under operating-system/roles/. Verify the configured model/effort
   is supported by the active host. Unsupported routes block dispatch until an
   authorized substitute is selected; continue unaffected work.
3. Explicitly pass model, reasoning_effort and fork_turns: "none" to the host.
   Full-history forks inherit the parent and cannot satisfy this rule.
4. Send a bounded task message: role and role-file reference, goal, relevant facts
   and paths, preserved user decisions, read/write scope, open choices, acceptance
   checks, authority boundaries and expected concise reply. Include the shared
   run-record ownership and concise-output rules in every fresh message.
5. Retain role, requested route, routing-file hash/revision, returned agent ID and
   observed activation or unknown in host history or existing machine task state.
   Successful submission does not prove backend model activation.

Before follow-ups, compare the worker's recorded route with its role and current
configuration. Inherited, mismatched or unrecorded workers receive no new dependent
work; dispatch a correctly routed replacement with a focused handoff.
Preserve earlier provenance; do not interrupt unrelated work merely to relabel it.
The file cannot change the orchestrator's own session. Report mismatch or
unverifiable activation honestly; changes use host/user model controls.
Historical examples and verification records never override active routing.

## Delivery and authority boundaries [studio:req:delivery-authority]

Delegate substantive implementation to Builder. The orchestrator may directly
edit governance, references and administrative configuration. Normally use a
bounded task message, Builder checks, one independent review and acceptance.
PM, Designer and Technical Specialist join only for concrete uncertainty.

Proceed with authorized reversible work. Ask only for missing consequential
authority: new spending, destructive migration, sensitive access changes,
product-direction reversal, or external publication/release beyond authorization.
New spending defaults to zero; existing subscriptions are not new purchases.
Unknown usage/cost stays unknown. Repository/release authority comes from user
instructions or applicable existing project authority, without a new document.

Standing user authorization covers committing and pushing approved work to the
selected project's verified GitHub repository. Approval includes explicit user
approval or orchestrator acceptance within delegated scope after required checks
and independent review; a Builder PASS alone is insufficient. After acceptance,
commit the authorized changes/deletions and push without asking or waiting for a
reminder. For a multi-task goal, repository delivery is an internal checkpoint;
continue remaining tasks. Verify destination and remote revision, preserve
unrelated changes, never force-push or overwrite divergent work, and report actual
delivery state. A real repository-policy/authentication failure is a blocker.
This studio's destination is JKay93/Product-Studio-v2, never original Product-Studio.
Production deployment, new spending and other consequential actions retain their
own authority boundaries.

Time is diagnostic, never an extension gate. Defaults are two implementation
corrections, two test/debug retries and one review correction after initial attempts.
Change approach after failure; never repeat unchanged denials, reset counters by
renaming tasks, or reset financial usage when replanning.
Acceptance requires agreed checks and independent review of the actual candidate.
Changed code/requirements invalidate affected evidence; reuse unaffected checks.
Distinguish implemented, reviewed, accepted, pushed, merged and deployed.
A user pause stops dependent work. No unattended automation is active by default.
