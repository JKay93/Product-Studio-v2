<!-- studio {"id":"byoa-world:strategy:main","scope":"byoa-world","type":"strategy","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# Product strategy: BYOA World

- Product Manager owner: Product Manager.
- Last material update: 2026-09-29.
- Approved direction and source: S2 user direction prioritizes agent connectivity and
  shared work with private-knowledge boundaries; Gather/Pokémon is deferred. The user
  subsequently authorized a bounded local preview. Wider product scope remains draft.
- Selected template: [Product strategy template](../../operating-system/templates/strategy.md).
- Status: draft for user review; not an approved specification, technical design,
  provider compatibility claim, or additional implementation authority beyond the contract.

## Vision, purpose and users

### Long-term outcome and near-term purpose

**We host the World, not the intelligence.** BYOA World aims to give people and
independently owned agents a persistent place to work together under explicit rules.
The near-term question is whether heterogeneous agents can connect and share useful
work while keeping agent-private and company-private knowledge appropriately separated.

### Primary users and urgent jobs

The near-term audience includes a human owner who does not have an agent, as well as
people or small teams bringing independently operated agents. The proposed job is:
“Let participants work together on this project, using only the information and
actions I choose, and let me review what becomes shared work.” The bounded preview
lets the owner participate directly with two preconfigured participants. Providing
a platform default agent is a separate later capability; BYOA is optional for users.

Longer term, company owners need controlled participation around existing systems;
agent owners need to contribute expertise without surrendering their entire runtime
or private memory; contributors need clear tasks, context and ownership; reviewers
need attributable proposals and understandable permissions. Direct human participation is part of the initial workspace. Company-provided and
platform default agents remain participation options in the wider vision.

### How the parts tie together

| Concept | Product responsibility |
| --- | --- |
| Agent | Independently owned intelligence, skills and private state; its runtime can remain with its owner. |
| World | Persistent personal/team/company environment with members, projects, resources and rules. |
| Universe | Enforcement layer for identity, allowed actions, isolation, Session lifecycle and audit. |
| Session | One engagement: purpose, participants, context, permitted actions, budget, outputs and expiry. |
| Grant | Explicit permission scoped to an agent, resource, action, purpose and time. |
| Passport | Evidence of the exact agent and owner/operator; not a universal trust score. |

An owner connects an agent, a World admits it to a bounded Session, and it receives
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
metering and optional managed inference; paid expertise and portable work history;
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
retain their existing authority. The documentation request authorizes these planning documents; it does not
approve their proposed implementation scope.

### Alternatives, strengths and constraints

The value hypothesis is reduced coordination effort **with inspectable boundaries**.
Manual copying between agent chats, a single-provider workspace, and bespoke runtime
orchestration are alternatives to investigate. Their comparative strengths and our
advantage have not been researched or validated. BYOA alone is not assumed to be a
moat, and a public marketplace is not needed to establish initial value.

## Strategic choices

| Pillar | Intended outcome | Measure | Assumption | Risk |
| --- | --- | --- | --- | --- |
| Connect independent agents | Existing agents participate without full recreation | Assess subscription/API routes separately; demonstrate at least two independent setups | Selected providers offer usable, permitted connection routes | Subscription access may not support integration; interoperability may require narrow adapters |
| Share useful work within boundaries | Agents produce accepted joint work with controlled disclosure and actions | Task acceptance rubric; attributable contributions; no unauthorized gateway actions in agreed tests | A bounded task can use sufficiently limited context | Private information may appear in outputs; remote retention cannot be fully controlled |
| Make participation inspectable | Owners can understand, review and stop work | Owner identifies participants, supplied context, permissions, accepted output and stop control | A basic control surface and trace are sufficient initially | Audit gaps or confusing controls hide unintended access |
| Establish standalone value before expansion | One workflow justifies continued use | Completion, manual interventions and rework against a baseline set before pilot | A person or small team has a recurring coordination problem | Platform overhead exceeds benefit; network effects cannot rescue a weak initial workflow |

### Application to the first milestone

**Connect agents before attempting to recreate them.** The handoff explicitly keeps
the agent in its own environment. Test the minimum participation contract across
independent setups; do not require memory, tools, credentials and orchestration to
be migrated into a uniform runtime. APIs and subscription-supported integrations
are separate feasibility questions. A paid subscription is not evidence that an
integration route exists or is permitted. An unsupported route is a research result,
not a reason to bypass provider restrictions.

**Prove collaboration and boundaries together.** Identity, Session scope, context
access, action permissions, attributable proposals, review and audit need small
versions from the start. A chat relay alone does not prove safe shared work.
Security-sensitive restrictions must be enforced outside the model; prompts can
guide behavior but cannot grant authority.

**Separate three kinds of information.** Agent-private material stays private unless
deliberately contributed; company-private material is shared only as authorized;
accepted work products become shared according to agreed ownership. Expertise can
inform a deliverable without automatically importing an agent's memory into a
company KMS. Preventing automatic import is not proof that generated text can never
reveal a secret: evaluate that risk and bound the claims explicitly.

**State the remote-execution limit honestly.** Sending context to an external runtime
discloses it to that runtime. Revocation can prevent future access; it cannot retract
previously disclosed information or prove deletion from an uncontrolled remote
system. Retention policy, operator visibility, and enforceable controls must be
distinguished. If the required assurance needs controlled execution or less context,
that becomes a product/technical decision before use with sensitive data.

**Start with one useful workflow.** Use synthetic private information for boundary
experiments and a deliberately bounded task requiring both agents' contributions.
Choose the first shared artifact and context source for that task. Broader KMS,
connector coverage, policy administration, commerce and visual representation follow
evidence of need. Core participation must remain possible headlessly.

## Success and boundaries

### Outcome metric and baseline

The proposed outcome is accepted joint work through supported connection routes.
Record task completion, manual interventions and rework against the current workflow;
select the task and rubric before testing. All baselines and results are pending.

### Guardrail metric and proposed evidence

| Question | Proposed evidence | Interpretation / limitation |
| --- | --- | --- |
| Can agents connect? | Capability matrix with official supported routes, subscription/API entitlement, identity/state retained, limitations and billing visibility; an end-to-end demonstration across at least two independently operated setups. | Cover both subscription-supported and API routes in the assessment; if either cannot be demonstrated, record that gap explicitly. Two setups do not establish universal compatibility. |
| Can they share useful work? | One agreed task needing both contributions; attributable exchange, combined reviewable output and a human acceptance rubric. Record completion, manual interventions and rework. | Select rubric and task before running; compare with the user's current coordination method when practical. |
| Do boundaries hold in the tested setup? | Synthetic private-context probes, unauthorized resource/action requests, proposal review, expiry/revocation checks, and inspection of disclosed/persisted data. | Zero unauthorized gateway actions in the agreed tests; unexpected private disclosure is a finding to resolve. Passing tests is not proof of universal non-leakage or remote forgetting. |
| Can an owner understand and control it? | Owner can identify who participated, which context was supplied, what was allowed, who accepted output, and how to stop further access. | A simple control surface and readable trace are sufficient; no spatial interface required. |
| Is operation bounded? | Explicit usage allowance, known costs and unavailable cost fields; failure/disconnect behavior documented. | Unknown costs must remain unknown rather than be shown as zero. No new spending is authorized here. |

Proceed to a product pilot only when the chosen task is useful and its supported
connection routes and assurance limits are acceptable. Narrow the workflow or
execution model if it requires unavailable access, excessive manual rescue, or
confidentiality guarantees the selected runtime cannot support.

### Non-goals and dependencies

Non-goals include replacing existing SaaS by default, training foundation models,
universal trust scoring, mandatory crypto, a permanently running machine per agent,
and treating World networking itself as proprietary differentiation.

The first experiment depends on selecting agent setups, supported routes, a bounded
task and artifact, acceptable disclosure/retention limits, and implementation authority.
Broader feature scope remains in the backlog rather than becoming a dependency by default.

### Evidence or event that should trigger review

Review when connection evidence, confidentiality needs, task usefulness or user
direction changes. Unavailable supported access, unexpected disclosure, or excessive
manual rescue calls for reconsidering the workflow or execution model.

### Decisions for review

1. Confirm the two-track feasibility milestone and choose the first recurring task,
   participating agent setups and shared artifact.
2. Define the required knowledge boundary: what may leave the company, who may
   observe it, what may persist, and which assurances require controlled execution.
3. Review the later sequence after feasibility evidence. Personal-first versus a
   small-team-first pilot remains open; neither is treated as approved.

The [roadmap](ROADMAP.md) owns milestone status and exit criteria. The
[MoSCoW product backlog](PRODUCT_BACKLOG.md) preserves candidate features and revisit
triggers; [BACKLOG.md](BACKLOG.md) tracks delivery/planning tasks. Revisit strategy
when connection evidence, confidentiality needs, task usefulness, or user direction
changes—not simply because a calendar phase ends.

### Local preview direction — 2026-09-29

The user authorized proceeding toward a first usable local platform preview. It
contains one owner, one project, two preconfigured participant slots and synthetic
context. Launch planning is an editable sample assumption, not the selected long-term
use case. Deterministic adapters can demonstrate the interaction and enforcement
model while provider routes are investigated, but must be labeled simulation. Live
independent-agent connectivity and two-way knowledge assurance require their own
evidence; a polished preview does not prove Phase 0. See the three feature PRDs
linked in the [project map](README.md).

## User-directed refinement: external-agent participation — 2026-09-29

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
