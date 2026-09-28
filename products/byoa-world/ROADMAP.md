<!-- studio {"id":"byoa-world:roadmap:main","scope":"byoa-world","type":"roadmap","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# BYOA World roadmap

Owner: PM; final acceptance: orchestrator within delegated authority.
Last material update: 2026-09-29. Planning horizon: feasibility first, followed by
candidate product horizons. Product direction remains draft; this roadmap does not authorize
features, a technology stack or deployment. Existing foundation acceptance is historical.

## Outcomes and sequence

| Item | Intended outcome | Status | Owner | Dependencies | Exit criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| RM-01 | Project foundation available for new chats | accepted | Orchestrator | Organization decision | Project records and modularity rules exist; source provenance recorded; scoped retrieval and links checked; independent review accepted | [Foundation snapshot and acceptance record](https://github.com/JKay93/Product-Studio-v2/blob/f10e4a4/products/byoa-world/STATE.md); [repository bootstrap record](https://github.com/JKay93/Product-Studio-v2/commit/d441600) |
| RM-02 | Initial product direction is clear enough to plan | candidate | PM | RM-01; handoff and latest user direction | Sources digested; strategy, roadmap and MoSCoW inventory reviewed; first task, agent setups, required assurances and scope chosen; required direction approval recorded | Draft [strategy](STRATEGY.md), this roadmap and [product backlog](PRODUCT_BACKLOG.md); user review pending |
| RM-03 | First implementation slice has sufficient design and architecture | proposed | Technical Specialist / Designer as needed | Relevant RM-02 requirements | Supported connection routes assessed; Session, context and action boundaries defined for selected setups; remote-execution limits stated; task rubric, negative tests and data/retention inspection approach specified | Pending; no stack, protocol or security design selected |
| RM-04 | First bounded slice proves connection and shared work within stated boundaries (Phase 0) | proposed | Builder; independent reviewer | Applicable RM-02 and RM-03 records; implementation authorization | Meet Phase 0 criteria below; resolve material review findings; record code candidate, specification revisions, limitations and orchestrator acceptance | Pending; no prototype or validation results |
| RM-05 | Accepted slice reaches its authorized delivery state | proposed | Orchestrator | Accepted RM-04 candidate; delivery authority | Requested repository/release actions verified against the delivered revision; environment verification and recovery reference supplied if deployment is in scope | Pending; initial README push is not product delivery |

## Phase 0: connect agents and share work within boundaries

User-directed priority: first establish how the platform fits together through two
linked feasibility questions. The following experiment is a PM proposal for review.

| Track | Deliverable | Proposed exit criteria |
| --- | --- | --- |
| A — Connect independent agents | Supported-route assessment and minimal connection prototype | Assess subscription-supported routes and APIs separately using current official evidence. Identify authentication/identity, retained state, task/status/result exchange, billing and limitations. Demonstrate a complete Session across at least two independently operated agent setups. Record any subscription or API route not demonstrated as an unresolved limitation; do not label it supported. |
| B — Share useful work with knowledge boundaries | One joint task, controlled shared artifact and inspectable trace | Both agents make necessary, attributable contributions; a human accepts the combined output against a pre-agreed rubric. Agent-private material is not automatically imported; company context is disclosed only as authorized. Test unauthorized requests and private-context probes with synthetic data; inspect disclosure and persistence; demonstrate proposal review and expiry/revocation. State what the platform enforces and what the remote runtime cannot guarantee. |

Both tracks require a small identity/owner record, Session, scoped grants, context
access, mediated actions, communication, proposed outputs, review and audit. Record
usage constraints and unavailable cost information. A basic non-spatial interface is
enough. This is not a generic KMS, complete Passport, enterprise policy suite or public
marketplace. Negative tests cover the agreed threat cases, not a universal security
guarantee. Failed feasibility results should lead to a documented scope or execution
model decision rather than silently weakening the boundary.

## Candidate horizons after feasibility

These are PM recommendations, not user-approved ordering or date commitments.
Personal-first versus small-team-first is still open. RM-06 onward extend the stable
roadmap; RM-05 remains the authorized-delivery checkpoint for the first accepted slice.

| Item / phase | What we are proving / deliverable | Status | Owner | Dependencies | Proposed exit criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| RM-06 / 1 — Useful personal World | One person repeatedly completes useful work with their agent, selected context and reviewable output | proposed | PM + delivery team | RM-04 evidence; pilot scope decision; RM-05 where delivery is needed | A selected recurring workflow reaches accepted output across agreed pilot runs; record completion, manual coordination, rework and cost visibility against a baseline set before pilot | Pending |
| RM-07 / 2 — Shared World | People and agents coordinate on persistent projects | proposed | PM + delivery team | Shared-work feasibility; pilot decision; RM-06 only if personal-first chosen | A small team completes the chosen joint workflow with membership/roles, attributable handoffs, concurrent contribution handling and review; identify who can see and change each resource | Pending |
| RM-08 / 3 — Organizational control and context | Teams work around existing systems and rules | proposed | PM + technical specialist + delivery team | Proven pilot workflow; organizational requirements | Selected connectors preserve source access restrictions; owners can configure and inspect required approvals, budgets, retention and audit; test denied access and policy changes | Pending |
| RM-09 / 4 — External-agent engagements | A World safely commissions an agent it does not operate | proposed | PM + technical specialist + delivery team | Bounded Sessions and tested assurance model | Verify expected agent/operator at the agreed evidence level; invite with scoped access; agree output/retention terms; review deliverables; expire/revoke access and document residual data exposure | Pending |
| RM-10 / 5 — Paid expertise | Customers pay for useful agent outcomes | proposed | PM + delivery team | Validated engagement workflow; commercial/legal/payment decisions and authorization | A separately authorized paid pilot shows willingness to pay; service and compute charges are distinguishable; acceptance, failed work and disputes have defined handling | Pending |
| RM-11 / 6 — Discovery and network | Connections across Worlds add value beyond standalone use | proposed | PM + delivery team | Repeat demand and reliable engagement evidence | Demonstrate an agreed discovery or cross-World workflow with useful matching and permission boundaries; portable work evidence exposes no private client data; evaluate added value against direct invitations | Pending |

## Now, next and later

- Now: user review of [strategy](STRATEGY.md), this roadmap and the
  [MoSCoW product backlog](PRODUCT_BACKLOG.md). [Sources](sources/README.md) distinguish
  the original handoff, latest user direction and recommendations.
- Next: choose the first task, candidate agent setups and acceptable information
  boundary; then specify the bounded feasibility work. The [contract](CONTRACT.md)
  records current authority. No provider connection has been validated by these drafts.
- Design and technical planning may proceed together once their inputs are sufficiently
  clear. These items are outcomes, not compulsory sequential committees.
- Later: use evidence to refine horizons rather than commit to the entire platform.
  The Gather/Pokémon interface stays in the optional backlog with no scheduled phase.

## Updates

This is the single milestone-status source. [Backlog](BACKLOG.md) holds actionable
work; [state](STATE.md) holds the current handoff and links here rather than duplicating
the roadmap. Keep milestone IDs stable. Record material changes with their rationale
and authority; preserve previous assessments in Git and referenced evidence. Do not
retroactively redefine accepted work. Reassess only evidence affected by changed inputs.

Use the [shared roadmap template](../../operating-system/templates/roadmap.md) as an
adaptable guide. Review when scope, dependencies or evidence change, without a new
time-based approval gate.

### Material change — 2026-09-29

User requested planning drafts after prioritizing connection and knowledge-safe shared
work. RM-01 and its acceptance evidence are unchanged. RM-02 now has reviewable draft
inputs, not approved direction. RM-03/RM-04 are refined toward the proposed feasibility
slice; RM-05 retains its delivery meaning. RM-06–RM-11 add provisional later horizons.
This refines earlier generic placeholders; it does not retroactively accept product
work or approve the assistant's previously suggested personal-first sequence.
