<!-- studio {"id":"byoa-world:strategy:main","scope":"byoa-world","type":"strategy","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# Product strategy: BYOA World

- Product Manager owner: Product Manager.
- Last material update: 2026-10-03. Current user direction is [Decision 008](decisions/008-account-agents-world-experience.md); unrelated hypotheses remain draft.
- Approved direction and source: [Decision 008](decisions/008-account-agents-world-experience.md), 2026-10-03: account-owned agents and the five-step hosted-first journey. Preserve Decision 004's company funding and basic usage controls. Original S1/S2 sources and former stage priorities remain historical context; documentation updates add no implementation/spending authority.

- Selected template: [Product strategy template](../../operating-system/templates/strategy.md).
- Status: draft for user review; not an approved specification, technical design,
  provider compatibility claim, or additional implementation authority beyond the contract.

## Current direction — 2026-10-03

Humans and independently owned agents work together in Worlds. Users create account-owned agents, usually an orchestrator, and select an orchestrator/team for a World. Multiple orchestrators are allowed. BYOA-hosted execution comes first, through Agent Creation → Chat → Knowledge → Agent Actions → Sub-agent Collaboration. Agent identity/configuration is separate from runtime; eventual external operators retain credentials and ownership. Company-funded work and scoped access remain. [Decision 008](decisions/008-account-agents-world-experience.md) supersedes the fixed two-agent-first sequence in older strategy text below; the [roadmap](ROADMAP.md) is current.

## Vision, purpose and users

### Long-term outcome and near-term purpose

BYOA World provides a persistent workspace where humans and agents cooperate under
explicit rules. The World work/permission contract remains runtime/provider-neutral.
The initial agent experience uses ready-made, platform-operated agents for SME
onboarding; externally operated agents remain optional after native workflow
verification. This expands runtime operation responsibility without selecting model
training, universal runtime support or imported personal memory.

### Primary users and urgent jobs

The intended initial audience is SME owners/admins and employees completing company
work. They should be able to select ready-made roles, supply scoped project context,
inspect linked deliverables and explicitly accept saved work. Requiring employees
to operate runtimes or configure personal provider access is not the default journey.
Human-only work remains usable, and optional BYOA remains part of the product.

Company work uses company-funded access. The person requesting work, the agent
operator and the payer are separate identities. A company may fund native usage
through an eventual purchased balance or supply its own approved agent/provider
access. No personal employee balance fallback or duplicate charge for directly
paid provider compute. This is a design principle, not an implemented billing system.
SME usability, recurring need, willingness to pay and profitability remain unvalidated.

### How the parts tie together

| Concept | Product responsibility |
| --- | --- |
| Agent | Attributable worker with roles/skills and scoped work access; native runtimes are platform-operated, BYOA runtimes can remain with their owner. |
| World | Persistent personal/team/company environment with members, projects, resources and rules. |
| Universe | Enforcement layer for identity, allowed actions, isolation, Session lifecycle and audit. |
| Session | One engagement: purpose, participants, context, permitted actions, budget, outputs and expiry. |
| Grant | Explicit permission scoped to an agent, resource, action, purpose and time. |
| Passport | Evidence of the exact agent and owner/operator; not a universal trust score. |

An owner selects native agents or later connects a supported BYOA agent; World admits it to a bounded Session, and it receives
selected context and requests permitted actions. It exchanges contributions with
other participants, submits a proposed result, and an authorized reviewer decides
what becomes shared state. The Session ends with attributable outputs, revoked or
expired access, and an explicit account of retention. This is a proposed journey,
not a selected protocol or security architecture.

### Long-term product and business direction

Preserve personal/team/company Worlds; projects, roles and persistent work; human-only,
BYOA, company/default and external-agent participation; layered rules and approachable
policy templates; scoped grants, approvals, audit and safe contributions; native
artifacts plus external KMS/tool connections, search and context packaging; Passport
evidence and invitations; ownership, retention and learning controls; budgets,
metering and initially native execution with optional company-provided access; paid expertise and portable work history;
eventual discovery, marketplace and cross-World collaboration. Optional graph and
Gather/Pokémon visualizations remain referenceable candidates.

The business hypothesis from S1 is a platform/World subscription with possible human
seats, included activity and higher-volume tiers, optional managed-inference margin,
and later engagement fees. Agent service price should be distinguishable from compute
cost. Pricing, willingness to pay and unit economics are unvalidated. We need useful
standalone value before relying on network effects.

## Evidence and positioning

### Validated evidence and links

No customer, interoperability or security validation has been completed by this
documentation task. The following sources establish provenance and direction, not
proof of feasibility or market demand:

- **S1 — Product & Architecture Handoff, 27 September 2026**, local source
  `C:/Users/jingk/Downloads/byoa_world_handoff.pdf`; inspected for this drafting task.
  Sections 1–8 establish the thesis and primitives; 9–15 identity, context, change,
  compute and memory; 16–20 interface, inventory and business direction; 21–22 open
  questions and principles. Local provenance is also in [sources](sources/README.md).
- **S2 — User direction in this planning conversation, recorded 29 September 2026:**
  first establish how everything ties together; test agent participation through
  subscriptions and APIs, then shared work with two-way knowledge boundaries.
  The Gather/Pokémon interface is explicitly optional and deferred.
- **S2 (documentation request) — User request, 29 September 2026:** write roadmap and PM strategy for review,
  and add a project backlog using MoSCoW.
- **S3 — PM recommendations:** the experiment, candidate users, measures, and later
  sequencing below. These remain proposals. Earlier assistant suggestions are not
  user approval, including the personal-World-before-shared-World order.

The [contract](CONTRACT.md) and [organization decision](decisions/001-project-organization.md)
retain their existing authority. Decision 004 approves the named native-first/company-funded direction and documentation update. The revised native technical/UI package and implementation remain subject to their actual authority.

### Alternatives, strengths and constraints

The value hypothesis is reduced coordination effort **with inspectable boundaries**.
Manual copying between agent chats, a single-provider workspace, and bespoke runtime
orchestration are alternatives to investigate. Their comparative strengths and our
advantage have not been researched or validated. BYOA alone is not assumed to be a
moat, and a public marketplace is not needed to establish initial value.

## Strategic choices

| Pillar | Intended outcome | Measure | Assumption | Risk |
| --- | --- | --- | --- | --- |
| Make agent work approachable for SMEs | Ready-made roles produce useful linked work before runtime setup is required | Native A/B handoff, owner acceptance and observed onboarding success; optional BYOA verified separately | Selected native provider/runtime supports bounded execution and useful role outputs | Usability/SME demand unvalidated; native operation adds cost and credential responsibility |
| Fund company work accountably | Company access funds employee work with understood charges | Payer binding, per-call/task usage, reservations/limits and later paid-pilot unit economics | Usage/prices/limits can be verified for selected routes | Missing usage, concurrent overruns, failure costs and commercial mispricing |
| Share useful work within boundaries | Agents produce accepted joint work with controlled disclosure and actions | Task acceptance rubric; attributable contributions; no unauthorized gateway actions in agreed tests | A bounded task can use sufficiently limited context | Private information may appear in outputs; remote retention cannot be fully controlled |
| Make participation inspectable | Owners can understand, review and stop work | Owner identifies participants, supplied context, permissions, accepted output and stop control | A basic control surface and trace are sufficient initially | Audit gaps or confusing controls hide unintended access |
| Establish standalone value before expansion | One workflow justifies continued use | Useful accepted output, observed coordination/rework and user feedback; any later comparison requires real observations | A person or small team has a recurring coordination problem | Platform overhead exceeds benefit; network effects cannot rescue a weak initial workflow |

### Application to the current design milestone

The foundation remains accepted. Stage 2 now designs native agents first and basic
usage/reservation controls; Stage 2.1 remains held until the revised package is
approved and implementation resumed. Preserve the runtime-neutral contract and
the external Codex route as reuse evidence; it does not verify a native pair or
automated cost accounting. No training/recreation of an employee's existing private
agent is required. Optional BYOA follows native collaboration verification.

Pricing remains to be designed using measured complete-workflow costs, including
failed/uncertain attempts and selected tool charges. Currency balances, abstract
credits, markup and company subscription/seat charges are proposals. The illustrative
$10 provider cost / $13 company charge does not approve a 30% markup or establish
profitability. Basic execution limits come before real native calls; actual payments
and purchased balances come before a separately approved paid SME pilot.

Historical feasibility experiments and Phase 0/pilot directions below retain their
original evidence meaning. They do not instruct a new weekly pilot or supersede
the latest authority. ROADMAP.md owns the current sequence and milestone status.

## Success and boundaries

### Outcome metric and baseline

Proposed native outcome: A produces an attributable brief, B uses that actual
committed brief for a substantive complementary plan, and the owner deliberately
accepts the selected revision. Task/roles/rubric are Stage 2 choices. SME usability
and productivity remain unvalidated; no manual baseline, copy count, time-saving
claim or weekly-success quota gates this design task. Record actual observations
if a later comparison is selected; never fabricate them.

### Guardrail metric and next-stage evidence

| Question | Proposed evidence | Interpretation or readiness boundary |
| --- | --- | --- |
| Does native cooperation produce useful work? | Real separately attributable A/B executions, exact handoff, source trace and owner rubric/acceptance | Requires revised package and bounded live authority; simulations test flow only |
| Do World permissions hold? | Fictional unauthorized context/action, cross-World/resource, stale/duplicate result, stop/expiry/restart cases | No unauthorized writes in agreed tests; remote handling/isolation needs separate evidence |
| Can an owner understand work and limits? | Owner identifies roles/operators/payer, recipient inputs, proposed/canonical state, allowance, uncertainty and stop | Calm workspace and readable controls; no external pairing in default onboarding |
| Is company work funded and bounded? | Company payer binding, step/task usage/rate basis, concurrent reservations, insufficient funds, duplicate settlement and failed/unknown usage | No employee personal fallback or duplicate compute charge; unknown remains unknown; test balances are not payment evidence |
| Is a paid/private SME pilot ready? | Selected identity, access, company administration, billing/reconciliation, retention/recovery and actual reviewed controls | Later separately authorized pilot; bring readiness forward before private input; no commercial rate selected here |

Native operation adds runtime, credential, spend-control and reconciliation
responsibilities. All of these need verification for the selected route. Current
provider usage reports may not expose every billable item; calculate using applicable
price rules and reconcile rather than present an unverifiable exact charge.

### Non-goals and dependencies

Non-goals include replacing existing SaaS by default, training foundation models,
universal trust scoring, mandatory crypto, a permanently running machine per agent,
and treating World networking itself as proprietary differentiation.

The native prototype depends on selecting roles, supported runtime/model access, a bounded
task and artifact, acceptable disclosure/retention limits, and implementation authority.
Broader feature scope remains in the backlog rather than becoming a dependency by default.

### Evidence or event that should trigger review

Review when connection evidence, confidentiality needs, task usefulness or user
direction changes. Unavailable supported access, unexpected disclosure, or excessive
manual rescue calls for reconsidering the workflow or execution model.

### Decisions for the native Stage 2 package

1. Select one SME-relevant fictional/public task, two complementary roles and rubric.
2. Select supported native provider/model/runtime operation, access protection,
   scope/disclosure, failure handling and preserved World interfaces.
3. Define company payer and prototype allowance, usage/prices, reservations/ceilings,
   reconciliation and honest UI; no live allowance or commercial price is inferred.
4. Present revised technical/design/verification package before implementation.
   Add optional BYOA after native verification; paid/private company use needs readiness.

The [roadmap](ROADMAP.md) owns milestone status and exit criteria. The
[MoSCoW product backlog](PRODUCT_BACKLOG.md) preserves candidate features and revisit
triggers; [BACKLOG.md](BACKLOG.md) tracks delivery/planning tasks. Revisit strategy
when connection evidence, confidentiality needs, task usefulness, or user direction
changes—not simply because a calendar phase ends.

### Historical local preview direction — 2026-09-29

The user authorized proceeding toward a first usable local platform preview. It
contains one owner, one project, two preconfigured participant slots and synthetic
context. Launch planning is an editable sample assumption, not the selected long-term
use case. Deterministic adapters can demonstrate the interaction and enforcement
model while provider routes are investigated, but must be labeled simulation. Live
independent-agent connectivity and two-way knowledge assurance require their own
evidence; a polished preview does not prove Phase 0. See the three feature PRDs
linked in the [project map](README.md).

## Historical user-directed refinement: external-agent participation — 2026-09-29

The user requires that externally operated agents can retain model-provider credentials
in their existing environments. BYOA should integrate with the agent/harness through
a runtime/provider-agnostic boundary, not require users to hand over provider keys.
CLI, application, cloud/company-hosted and custom runtimes are architectural cases,
not all promised launch integrations. See the [technical assessment](architecture/AGENT-WORLD-BOUNDARY.md)
for observed prototype gaps and proposed minimal changes. Humans without agents remain
in scope; this principle does not require every user to bring or host an agent.
The [Phase 0 closeout](closeouts/PHASE-0-CLOSEOUT.md) records the accepted prototype scope and
Phase 1's required private-data readiness checkpoint. Broader strategy recommendations
remain draft; these explicit directions do not approve every candidate horizon.
