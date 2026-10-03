<!-- studio {"id":"studio:guide:workflow","scope":"studio","type":"guide","status":"approved"} -->
# Delivery workflow

Use task messages and concise replies; project documents are not deliverables.

1. Identify project, user goal, existing authority and relevant knowledge. Read
   exact known sources directly; use scoped retrieval for discovery.
2. Resolve concrete uncertainty: PM for scope/behavior, Designer for experience,
   Technical Specialist for architecture/interfaces/security or difficult debugging.
   Reuse settled decisions. Specialists answer in chat without creating documents.
3. Read current routing and role instructions. Send Builder a bounded task message
   with goal, facts, source paths, preserved decisions, read/write scope, open
   choices, acceptance checks, authority limits and expected concise reply.
4. Builder implements within scope, runs affected checks and replies with result,
   changed paths/candidate, checks and blockers. No implementation document.
5. Dispatch a separate QA/reviewer with candidate, criteria, relevant sources and
   evidence. Review is read-only. Return PASS/PARTIAL/FAILED and required fixes in
   chat, without a review document.
6. Orchestrator accepts or routes one focused correction to its cause's owner.
   Recheck affected evidence. Commit and push accepted work to the verified project
   GitHub repository under standing user authorization. Verify the remote result.
7. If the user's goal has remaining work, dispatch the next task without a user
   checkpoint. End the run only when the whole goal is complete, the user pauses,
   a genuine blocker prevents progress, or missing consequential authority needs
   a human decision. Give one concise final outcome for the entire goal.

Read harness/role-routing.json before every dispatch. Explicitly request model,
effort and isolated context. Never inherit or silently substitute routes.
Keep dispatch receipts in host history or optional existing machine task state.
Verify existing workers against current routing before follow-ups.

## Role boundaries

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
slice, resolved through focused messages. No new PRDs or plans are required.
Settled fixes go directly to Builder and independent review.

## Context and knowledge

Fresh workers use fork_turns: "none". Send only task-relevant context, shared
constraints and the selected role's responsibilities, not whole project history.
Source paths let workers read necessary dependencies. Investigate missing context
narrowly or report the specific gap rather than guessing. Never trim applicable
exceptions, approved decisions or security constraints to save context.
Corrections include task-local findings and current candidate information.

Existing knowledge under products/<project>/ is optional read-only source material.
Application code/tests/dependencies belong in its application repository; identify
the exact path and authority in each assignment. Empty products folders do not
block delivery when the user goal, authority and checks are clear.
The orchestrator may keep minimal machine state for task identities, decisions,
dispatch receipts, retries and evidence when continuity needs it. Retrieval indexes
Markdown only; task messages and JSON state are not automatically searchable.

## Corrections and acceptance

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
