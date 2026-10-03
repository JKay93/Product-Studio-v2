# Product-Studio-v2

A local harness for coordinated product delivery. User owns direction; Orchestrator
coordinates and accepts; Builder implements; independent QA/reviewer verifies.
PM, Designer and Technical Specialist join only for concrete uncertainty.

## Rules

Read [AGENTS.md](AGENTS.md), [standing orders](operating-system/STANDING_ORDERS.md)
and [workflow](operating-system/WORKFLOW.md).
Agents use bounded task messages and concise replies. Orchestrator records every
work run and maintains durable approved decisions under products/<project>/.
Workers return results for consolidation instead of duplicate reports. Follow
[run records and handoff](operating-system/RUN_RECORDS.md). Missing historical
documents or extra specifications do not block a clear authorized task.
Orchestrator first creates/reuses Codex-Work/<project>/ beside this studio and
maintains its root AGENTS.md with the harness reference and approved project rules.
Orchestrator owns this instruction file. Existing instructions are preserved;
workers read them directly before project work. Agents choose ordinary methods
within scope and raise material questions when needed, without routine approval gates.
Implementation is delegated, normally with one independent review. Preserve
approved decisions, project isolation, bounded retries and financial authority.
Orchestrator continues across task completions until the whole user goal is done.
Only consequential missing authority, genuine blockers or explicit pause interrupt
the run. Accepted work is automatically committed/pushed to the verified project
GitHub repository under standing user authorization; no reminder is needed.

## Roles and routing

[harness/role-routing.json](harness/role-routing.json) is the only current route
source. Read it before every dispatch, verify host support, explicitly request
model/effort and fork_turns: "none", and retain route/hash/agent-ID receipts.
Configuration cannot change the parent session or prove backend model activation.

| Role | Instruction file | Responsibility |
| --- | --- | --- |
| Orchestrator | [ORCHESTRATOR.md](operating-system/roles/ORCHESTRATOR.md) | Scope, sequencing, delegation, authority, corrections, acceptance |
| Builder | [BUILDER.md](operating-system/roles/BUILDER.md) | Bounded implementation and affected tests |
| Product Manager | [PRODUCT_MANAGER.md](operating-system/roles/PRODUCT_MANAGER.md) | Scope, behavior, priority, acceptance criteria |
| Designer / productDesign | [DESIGNER.md](operating-system/roles/DESIGNER.md) | Journeys, interactions, visual choices, accessibility |
| Technical Specialist | [TECHNICAL_SPECIALIST.md](operating-system/roles/TECHNICAL_SPECIALIST.md) | Architecture, interfaces/data/security, difficult debugging |
| QA / qaRelease | [REVIEWER.md](operating-system/roles/REVIEWER.md) | Independent checks and actionable findings |

Orchestrator owns run records and accepted project decisions; workers need not write
separate reports. Replies preserve results, criterion/check outcomes, material
questions, critical choices and deferred work needed for the concise handoff.

## Knowledge and execution

Use exact known sources directly. Scoped retrieval combines one existing project
folder's Markdown with shared studio rules. It excludes other projects and
inactive records; it includes approved rules/decisions separately from keyword hits.
The index is local SQLite, rebuilt incrementally from source hashes and links.
It is not semantic/vector search, chat memory, or a complete-context guarantee.
Task messages and JSON state are not indexed. Run archives are also excluded;
read CURRENT_RUN.md and its referenced record directly on resumption. A newly
selected product starts its current run without inventing missing history.

Workers receive focused context, relevant paths, preserved decisions, write scope
and checks. Fresh workers inherit no conversation history; they can read necessary
dependencies. Reuse current sources, retrieve only needed project context and use
only necessary roles/checks. Required concise continuity belongs to Orchestrator;
validated machine state may supplement it.
The host launches agents; the CLI validates state/evidence. It cannot enforce host
permissions, buy compute, change sessions or schedule work.

## Local commands and layout

Node.js 24+; no package installation or API key required.

```sh
npm test
npm run check
npm run index
npm run retrieve -- --project existing-project --query "onboarding"
```

Retrieval requires an existing project slug; it never creates a project or documents.

| Folder | Purpose |
| --- | --- |
| operating-system/ | Governance and role instructions |
| products/<project>/ | Approved product context, current-run pointer, archived run records and optional machine state |
| harness/ | Validation, routing, retrieval and metrics |
| harness/templates/ | Optional machine JSON schema examples, not agent prose deliverables |
| graph/ | Source metadata and retrieval conventions |
| docs/ | Workspace entry point and historical setup notes |
| .runtime/ | Ignored, rebuildable local index |

See [harness guide](harness/README.md). Acceptance, push, merge and release require
separate evidence and authority. No background automation is active by default.
Destination: https://github.com/JKay93/Product-Studio-v2.git; never original Product-Studio.
Copy [docs/WORKSPACE_AGENTS.md](docs/WORKSPACE_AGENTS.md) into the parent workspace
as AGENTS.md to direct future work here.
