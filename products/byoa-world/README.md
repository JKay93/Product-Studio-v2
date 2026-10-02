# BYOA World

BYOA is a World where humans and independently owned agents work together. Prove
the experience with hosted agents first: **Agent Creation → Chat → Knowledge →
Agent Actions → Sub-agent Collaboration**. Agents belong to accounts; World access
and runtime execution stay separate. External agents eventually retain their own
runtime, model credentials and ownership.

Continue with the [Step 1 Agent Creation handoff](handoffs/STEP-1-AGENT-CREATION-HANDOFF.md)
and [Decision 008](decisions/008-account-agents-world-experience.md). The human
foundation is accepted; the new account-owned agent design is not implemented.
Preserve Ink Clay, existing data, scoped access, company funding and usage controls.
The old bakery trial is historical evidence, not the next delivery gate.

Start with [product strategy](STRATEGY.md), [roadmap](ROADMAP.md), and the
[MoSCoW product backlog](PRODUCT_BACKLOG.md). The backlog is a reference for
candidate capabilities and deferred ideas, including the optional visual World.

## Project map

| Path | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Project-specific working instructions |
| [CONTRACT.md](CONTRACT.md) | Current scope and authority boundary |
| [STATE.md](STATE.md) | Concise current status and next action |
| [BACKLOG.md](BACKLOG.md) | Planning and documentation follow-ups |
| [STRATEGY.md](STRATEGY.md) | PM-authored product strategy for review |
| [PRODUCT_BACKLOG.md](PRODUCT_BACKLOG.md) | MoSCoW capability and deferred-idea inventory |
| [ROADMAP.md](ROADMAP.md) | Milestone outcomes, dependencies, exit criteria and evidence |
| [architecture/](architecture/README.md) | Shared technical records and module boundaries |
| [design-system/](design-system/README.md) | Shared design-system records when approved |
| [decisions/](decisions/001-project-organization.md) | Durable approved and draft decisions |
| [features/](features/README.md) | Domain and feature records |
| [runs/](runs/README.md) | Optional execution evidence for multi-step work |
| [sources/](sources/README.md) | Authoritative and candidate source register |

Markdown source files are authoritative. Generated retrieval data is rebuildable
and must not replace these records.

## Historical Phase 0 local slice

- [Agent connection requirements](features/agents/connection/PRD.md): two participant routes; Codex Subscription and Claude API are selected live targets.
- [Work session requirements](features/work/session/PRD.md): task, scoped context, lifecycle, trace and stop.
- [Document review requirements](features/collaboration/document-review/PRD.md): attributable contributions and human acceptance.

These records retain historical scope; they are reference inputs for the revised
native package, not current provider/model or implementation authority.
The preview can use clearly labeled deterministic adapters while live access is
verified. Simulation is not proof of independent-agent interoperability. Application
code belongs in the separate BYOA-World repository; these folders contain product
records. Broader delivery authority remains in the contract.
