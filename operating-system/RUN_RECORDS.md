<!-- studio {"id":"studio:rule:run-records","scope":"studio","type":"rule","status":"approved"} -->
# Run records and handoff

The orchestrator records every product or harness work run so another agent can resume without the original chat. A run is one coherent user goal across its tasks and continuations; ordinary conversation and individual tool calls do not each require a new record. Recordkeeping supports autonomous work and is not a user approval checkpoint.

## Record location and ownership [studio:req:run-record-ownership]

Keep one concise record at `products/<project>/runs/<run-id>.md`. Maintain `products/<project>/CURRENT_RUN.md` as a short pointer to the active or most recent record and its next action. A self-maintenance run uses project slug `product-studio-v2`. The orchestrator owns both records; sub-agents supply concise results, evidence and questions for consolidation.

Start the record with the goal, tasks and acceptance criteria before substantive work. Update it at meaningful changes: task outcome, material question or decision, deferment, blocker, handoff and run closure. Do not log every tool call or copy conversations. When interruption prevents closure, the next agent reconciles the last checkpoint with actual files and Git state before continuing.

## Required contents [studio:req:run-record-fields]

| Field | What to retain |
| --- | --- |
| Goal and scope | User outcome, selected project, relevant sources and authority boundaries |
| Tasks | Stable IDs, owner or role, dependencies if any, status and intended work |
| Acceptance criteria | Observable conditions and checks defined before task completion |
| Outcomes and evidence | Actual check results, candidate/file or revision references, review and acceptance state; limitations remain explicit |
| Questions | Material questions, answers and unresolved items; say none when none exist |
| Decisions | Critical decisions, rationale and authority; distinguish approved choices, delegated implementation choices and proposals |
| Deferred work | Tasks pushed back, the reason and condition for returning to them; no silent disappearance |
| Handoff | Current status, remaining work, blockers and the next concrete action |

Retain requested routing, route hash and returned agent ID for dispatches in the record or linked structured state. Actual model activation, token usage and cost stay unknown unless exposed by reliable host evidence. Do not invent estimates or write a cost diary.

## Decisions and retrieval [studio:req:run-record-retrieval]

Maintain durable approved product decisions under that product's folder. Update existing records instead of duplicating them; link run decisions to their canonical source. Follow [retrieval conventions](../graph/README.md): one stable scoped document ID and honest status, stable section IDs for requirements, and metadata links for governing relationships. Keep IDs stable when wording or filenames change. Run archives also have stable document IDs, even though they are read directly. Use approval metadata only for genuine approved or authorized decisions, never for unfinished run outcomes. Project A's records cannot govern B.

Run archives remain excluded from ordinary retrieval. `CURRENT_RUN.md` is readable by the index, but resumptions read the pointer and referenced run directly. Use known paths first; use project-scoped retrieval for discovery, with small relevant queries. Reuse context already read and refresh it when sources or decisions change. Optional validated JSON task state may supplement the record; it does not replace the required handoff information.

## Autonomy and questions [studio:req:autonomy-questions]

Agents choose implementation details and proportionate checks within their assignment, write scope and approved boundaries. Ask focused questions when material ambiguity or missing authority affects the outcome. Continue independent work while awaiting an answer. Routine task transitions, ordinary implementation choices and record updates do not need human approval.

Use only needed roles, parallelize independent bounded work when useful, and summarize results once. New spending, destructive work, scope reversals and external release retain their authority requirements. Distinguish implemented, reviewed, accepted, pushed, merged and deployed; record evidence for each claimed state.
