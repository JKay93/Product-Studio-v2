<!-- studio {"id":"byoa-world:prd:connection","scope":"byoa-world","type":"prd","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"}]} -->
# Product requirements: agent connection

- Product Manager owner: Product Manager.
- Last material update: 2026-09-29.
- Contract, strategy and roadmap item links: [contract](../../../CONTRACT.md), [strategy](../../../STRATEGY.md), [roadmap RM-03/RM-04](../../../ROADMAP.md).
- Requirement revision: 1. Bounded local preview authorized by the user's instruction to proceed; live provider feasibility remains unverified until evidenced.
- Selected template: [PRD](../../../../../operating-system/templates/prd.md); core structure retained.

## Problem, outcome and scope

- User, context, unmet need, evidence and assumptions: a human owner, including someone without their own agent, needs to see two preconfigured participants working through one interface. User direction prioritizes subscription/API connections before broader product development.
- Observable outcome: the owner can start a task and inspect attributable participant results and honest connection states.
- In scope: two adapter slots, identity/operator labels, task/status/result exchange, supported-route research and a deterministic local demonstration where live access is unavailable.
- Non-goals, dependencies and constraints: no self-service onboarding, migration of private memory, universal provider support or new paid usage. Subscription access is not assumed to confer integration rights. A demo adapter is not an independently operated live agent.
- Selected live targets: Codex Subscription and Claude API, chosen by the user. Verify supported subscription use through the available Codex runtime; do not treat a chat subscription as an API key. Claude API calls require available credentials and explicit bounded spending authority before execution. Missing credentials or allowance block live calls, not local preview work.

## Requirement [byoa-world:req:CONNECTION-001]

- Behavior or user story: the workspace identifies both participants and whether each is a local simulation or a verified live connection. Each exchange is attributed to a participant through a bounded adapter interface.
- Exceptions and error states: disconnected, unsupported and failed routes show an actionable state; no silent replacement of a live connection with simulation.
- Acceptance criteria and evidence required: a local preview completes exchanges through both adapter slots and visibly labels simulation; live claims require a separately recorded end-to-end run with actual independent runtimes. Record provider, route, relevant entitlement, retained state and limitations in connectivity research.

## Requirement [byoa-world:req:CONNECTION-002]

- Behavior or user story: the owner can distinguish a researched route from a tested connection and see failures without losing already submitted work.
- Exceptions and error states: missing credentials, unavailable runtime or unknown cost must remain explicit. Never expose credentials in browser state, activity records or source control.
- Acceptance criteria and evidence required: test failure/unavailable-route handling. Research subscription and API routes separately using official evidence; mark untested and unsupported routes accurately. No new spending without authority.

## Experience, system and readiness

- Journey and design links; accessibility expectations: connection status appears in the shared workspace; state must be readable without relying on color alone. The slice design will be linked from the project map when available.
- Data inputs, outputs and boundaries: adapters receive only session-authorized task/context and return attributed contributions. Agent-private data is not automatically imported.
- Success and guardrail measures: successful exchanges, failures and manual intervention; no misleading live-agent claims or exposed credentials.
- Open product choices and owner: Technical Specialist selects viable routes from evidence; PM/user selects a recurring real task after preview feedback.
- Readiness conditions, only when needed: deterministic synthetic preview may proceed while live-access investigation remains open. Passing it does not complete the live connection exit criterion in RM-04.

Supporting slice records: [technical specification](../../../architecture/PHASE-0-TECHNICAL.md), [workspace design](../../../features/collaboration/document-review/DESIGN.md), and [connection research](../../../research/agent-connectivity.md).
