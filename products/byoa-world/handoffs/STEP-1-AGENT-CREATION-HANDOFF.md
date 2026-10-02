<!-- studio {"id":"byoa-world:handoff:step-1-agent-creation","scope":"byoa-world","type":"handoff","status":"approved","links":[{"relation":"requires","target":"byoa-world:roadmap:main"},{"relation":"requires","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:account-agents-world-experience"}]} -->
# Next chat: Agent Creation

Owner: orchestrator. Updated: 2026-10-03. Source: user requests a handoff after realigning the direction and simplifying the roadmap. No handoff template exists; this record keeps direction, observed state, next task and authority together.

## Start here

Use Product-Studio-v2 as the studio; application code is in sibling `BYOA-World/`.

Read studio AGENTS.md and STANDING_ORDERS.md, then project AGENTS.md and the current sections of [CONTRACT](../CONTRACT.md), [STATE](../STATE.md), [ROADMAP](../ROADMAP.md), [Decision 008](../decisions/008-account-agents-world-experience.md) and [current backlog](../PRODUCT_BACKLOG.md#current-priorities-and-deferred-work--2026-10-03). Read older material only for a specific reuse question.

## The direction to preserve

BYOA is a World where humans and independently owned agents work together. Prove it with BYOA-hosted agents first; external agents eventually keep their runtime, model credentials and ownership.

**The account owns the agent. The World grants access. The runtime executes work.** Agent identity/configuration must remain separate from hosted execution. Future external agents use the same World-facing participation and work interfaces; external connectors are not being built now.

Build in this order:

1. **Agent Creation:** account-owned agents, multiple orchestrators, manually created direct sub-agents, and selecting an orchestrator/team for a World.
2. **Chat:** simple GPT-like human ↔ orchestrator conversation.
3. **Knowledge:** World documents/folders, reading and editing.
4. **Agent Actions:** orchestrator reads authorized knowledge and creates/updates documents.
5. **Sub-agent Collaboration:** delegate → return result → orchestrator produces World work.

Keep Chat, Work, Knowledge, Incubator and Activity in each World, with World switching and Chat as default. Preserve restrained Ink Clay; visual refinement is not the next task. Exact placement of account agent management and World team selection is still open.

## What exists

Existing source and project records are now on GitHub: [publication receipt](../runs/github-publication-20261003.md). App snapshot `2dbb8ed` and studio snapshot `8702ceb` were verified on remote main; this handoff's publication follow-up changes no application behavior.

- Accepted human World creation/switching and saved notes; preserve their data and behavior.
- Saved agent definitions/versioning and Incubator configuration. The historical implementation is World-bound, allows one orchestrator per World and keeps definitions separate from runtime. The first two restrictions conflict with the new direction.
- Persistent offline Chat/document flow with synthetic delegation. It does not prove live orchestrator Chat or general hosted delegation.
- Useful native access, attribution and usage/budget controls from earlier work; inspect before reuse rather than assuming compatibility.
- Documentation has been realigned. No application code was changed to implement Decision 008.

The old bakery trial failed; historical Stage 2.1 was not completed. That trial is no longer the next delivery gate. Preserve its evidence and financial accounting without restarting it.

## The next bounded task — BYOA-01 only

Inspect the existing configuration and propose the smallest Agent Creation change:

- Account-owned agent identities/configuration, multiple orchestrators and manually created direct sub-agents.
- Selecting an orchestrator/team for a World without copying its identity or automatically granting access to other Worlds.
- Clear create/edit/save/reopen and selection UI, using the existing foundation.
- Preservation of existing World-bound definitions and history; identify a safe transition before modifying stored data.
- A separate runtime boundary that can support hosted execution next, without implementing external adapters or a broad Universe framework.

Return one concise reuse/change plan: what stays, what changes, how Step 1 will be demonstrated, and any genuine unresolved choice. Do not replan all five steps or write a large package of documents. Current authority covers documentation/planning; begin implementation only under a later user instruction authorizing it.

Useful source entry points, relative to `BYOA-World/`:

- `src/features/agents/configuration/index.ts`
- `src/platform/sqlite/configuration.ts`
- `src/features/agents/incubator/ui/`
- `src/app/foundation/{server.ts,client.ts,shell.tsx}`

The [old configuration specification](../architecture/AGENT-CONFIGURATION-SLICE.md) is explicitly superseded for future design; use it to understand the delivered slice, not to enforce its World-owned restriction. The [configuration delivery](../runs/agent-configuration-delivery.md) links historical evidence. Read application instructions before any code changes.

## Keep the work focused

- PB-043 validator replacement stays high priority for document actions/collaboration. Natural writing follows instructions and human review; narrative keyword gates are not proof of correctness. Preserve protocol, permission, completion, provenance and budget checks. This is future work, not an instruction to start another trial now.
- Authorized orchestrator creation of sub-agents, nested delegation, external onboarding, broader harness/configuration work, welcome/dashboard enhancements, billing and other deferred items are in the backlog. Review them after the core journey works; do not silently expand scope.
- No provider preflight, credential inspection, live model call, new spending, automatic retry, original-data migration, pilot resumption or publication. Historical grants are consumed; arithmetic remaining funds are not new authority.
- Follow freshly read studio model routing for any needed worker. Substantive implementation uses a bounded Builder assignment and one relevant independent review; do not spawn a standing committee. Reuse unaffected evidence and test only the changed behavior when implementation is authorized.
- Keep updates and proposals concise. The user wants useful product progress and is frustrated by repeated testing and drift. Do not make finishing the fixed trial a prerequisite for Agent Creation.
