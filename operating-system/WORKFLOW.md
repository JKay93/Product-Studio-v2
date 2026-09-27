<!-- studio {"id":"studio:guide:workflow","scope":"studio","type":"guide","status":"approved"} -->
# Delivery workflow

1. Select the project and read its contract, current state and applicable decisions.
2. Define a compact assignment: goal, owner, edit scope, preserved decisions, open
   implementation choices, acceptance criteria and required evidence/reviewer.
3. Delegate the implementation. Send relevant excerpts and source paths, not the
   whole studio history. Workers may read additional dependencies when needed.
4. Builder implements, runs affected checks and returns a concise evidence-backed report.
5. A separate reviewer checks the candidate against the assignment. Consolidate fixes
   into one correction packet. Do not rerun unrelated evaluation suites by habit.
6. Orchestrator accepts or requests focused corrections. Save the result and next action
   in the project. Separate local acceptance from repository and release delivery.

| Change | Normal roles and verification |
| --- | --- |
| Administrative correction | Orchestrator and direct check |
| Settled bug or bounded implementation | Builder and one independent reviewer |
| Product ambiguity/new feature | PM clarification, then builder/relevant reviewer |
| New screen/journey | Design input before build, UI/functional review |
| Auth, payment, permissions, migration | Specialist risk review and stronger checks |

Choose a capable available model using the host's settings. Route by task complexity,
uncertainty and consequence; escalate after a concrete capability failure. Record
requested and observed routing separately. Configuration alone does not prove activation.
Use deterministic tooling for formatting, indexing and mechanical validation.

Use isolated task context when the runtime supports it. Retain only task-local context
for corrections; a new assignment receives a fresh packet. Do not let context economy
remove exceptions, governing decisions, security constraints or evidence of blockers.

The CLI is not an agent scheduler or permission interceptor. Host permissions and
human authorization remain the enforcement boundary for external actions.
