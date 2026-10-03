<!-- studio {"id":"studio:guide:workflow","scope":"studio","type":"guide","status":"approved","links":[{"relation":"requires","target":"studio:rule:standing-orders"},{"relation":"requires","target":"studio:rule:run-records"}]} -->
# Delivery workflow

Use focused task messages and concise replies. Orchestrator maintains the required
run record and durable product decisions under products/<project>/; workers do not
need separate reports. Follow [Run records and handoff](RUN_RECORDS.md).

Project setup is orchestrator-owned administration. Create/reuse Codex-Work/<project>/
beside Product-Studio-v2 for the application's code and checkout. Create/maintain its
root AGENTS.md with a shared-harness reference, approved project rules, verified
repository destination and relevant checks; preserve existing instructions. This
instructions file is owned by Orchestrator alongside continuity records.
Read it directly before project work and reference it in all worker briefings.
Application AGENTS.md files are not indexed by this studio's retrieval tool.

1. Identify project, user goal, existing authority and relevant knowledge. On
   resumption read CURRENT_RUN.md and its run record, then reconcile actual state.
   Start/update a concise run record with tasks and acceptance criteria. Read exact
   known sources directly; use scoped retrieval for discovery and reuse current reads.
2. Resolve concrete uncertainty: PM for scope/behavior, Designer for experience,
   Technical Specialist for architecture/interfaces/security or difficult debugging.
   Reuse settled decisions. Specialists answer in chat without creating documents.
3. Read current routing and role instructions. Send Builder a bounded task message
   with goal, facts, source paths, preserved decisions, read/write scope, open
   choices, acceptance checks, authority limits and expected concise reply.
4. Builder chooses routine implementation details within scope, runs affected checks
   and replies with result, candidate, checks, questions and blockers. Orchestrator
   checkpoints outcomes and critical decisions; no duplicate implementation report.
5. Dispatch a separate QA/reviewer proportionate to the change, with candidate,
   criteria, sources and evidence. Review is read-only. Return findings in chat;
   Orchestrator records review/acceptance evidence and any deferred tasks with reasons.
6. Orchestrator accepts or routes one focused correction to its cause's owner.
   Recheck affected evidence. Commit and push accepted work to the verified project
   GitHub repository under standing user authorization. Verify the remote result.
7. If the user's goal has remaining work, dispatch the next task without a user
   checkpoint. End the run only when the whole goal is complete, the user pauses,
   a genuine blocker prevents progress, or missing consequential authority needs
   a human decision. Before stopping, update run status, unanswered questions,
   remaining work and the next action. Give one concise final outcome for the goal.

Read harness/role-routing.json before every dispatch. Explicitly request model,
effort and isolated context. Never inherit or silently substitute routes.
Keep dispatch receipts in host history or optional existing machine task state.
Verify existing workers against current routing before follow-ups.

## Role boundaries [studio:req:role-boundaries]

| Need or cause | Owner |
| --- | --- |
| Product ambiguity, priority, behavior, acceptance criteria | Product Manager |
| Journeys, interaction, visual consistency, accessibility | Designer |
| Architecture, API/data/security choices, difficult debugging | Technical Specialist |
| Implementation and affected tests | Builder |
| Independent candidate checks and required findings | QA/reviewer |
| Sequencing, coordination, authority, final acceptance | Orchestrator |
| Missing product/business authority | User |

New products need enough agreed scope, experience and architecture for the first
slice, resolved through focused messages and recorded accepted decisions. Extra
PRDs or plans are not prerequisites for clear work. Material questions may be asked
when needed; independent work continues without routine permission checkpoints.
Settled fixes go directly to Builder and independent review.

## Context and knowledge [studio:req:context-knowledge]

Fresh workers use fork_turns: "none". Send only task-relevant context, shared
constraints and the selected role's responsibilities, not whole project history.
Source paths let workers read necessary dependencies. Investigate missing context
narrowly or report the specific gap rather than guessing. Never trim applicable
exceptions, approved decisions or security constraints to save context.
Corrections include task-local findings and current candidate information.

products/<project>/ holds approved product context and required run continuity.
Orchestrator maintains canonical decisions and CURRENT_RUN.md plus run records;
workers read task-relevant sources. Application code/tests/dependencies belong in
the separate application repository. Missing historical records do not block work;
start the current record without inventing history. Optional JSON state can track
task identities, routing, retries and evidence alongside the concise handoff.
Retrieval indexes Markdown but excludes run archives; read the current pointer and
record directly on resumption. Task messages and JSON are not automatically indexed.

## Corrections and acceptance [studio:req:corrections-acceptance]

Use bounded retries from standing orders; change approach after failure. Do not
reset counters by renaming tasks or replacing workers. Replan within existing
authority; ask only when a real authority boundary needs the user.
Reviews bind to the actual candidate and relevant user/source revisions.
Cross-repository changes are not atomic; report partial delivery honestly.
Acceptance, push, merge and release are separate evidence-backed claims.
Approved/accepted work is automatically committed and pushed; no renewed push
permission or continuation reminder is needed. Exclude unrelated changes and
preserve remote work. Merge and production release keep their own authority.
All agents reply with the result, necessary evidence and actionable blockers only.
