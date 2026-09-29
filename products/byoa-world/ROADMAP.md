<!-- studio {"id":"byoa-world:roadmap:main","scope":"byoa-world","type":"roadmap","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# BYOA World roadmap

Owner: PM; final acceptance: orchestrator within delegated authority.
Last material update: 2026-09-29. Planning horizon: feasibility first, followed by
candidate product horizons. The user authorized a bounded local platform preview;
later horizons remain proposals. This roadmap is not production deployment or
spending authority. Existing foundation acceptance is historical.

## Outcomes and sequence

| Item | Intended outcome | Status | Owner | Dependencies | Exit criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| RM-01 | Project foundation available for new chats | accepted | Orchestrator | Organization decision | Project records and modularity rules exist; source provenance recorded; scoped retrieval and links checked; independent review accepted | [Foundation snapshot and acceptance record](https://github.com/JKay93/Product-Studio-v2/blob/f10e4a4/products/byoa-world/STATE.md); [repository bootstrap record](https://github.com/JKay93/Product-Studio-v2/commit/d441600) |
| RM-02 | Initial product direction is clear enough to plan | active | PM | RM-01; handoff and latest user direction | Sources digested; strategy, roadmap and MoSCoW inventory reviewed; first task, agent setups, required assurances and scope chosen; required direction approval recorded | Draft [strategy](STRATEGY.md), this roadmap and [product backlog](PRODUCT_BACKLOG.md); bounded local preview direction received; feature PRDs linked below |
| RM-03 | First implementation slice has sufficient design and architecture | active | Technical Specialist / Designer as needed | Relevant RM-02 requirements | Supported connection routes assessed; Session, context and action boundaries defined for selected setups; remote-execution limits stated; task rubric, negative tests and data/retention inspection approach specified | [Technical plan](architecture/PHASE-0-TECHNICAL.md), [design](features/collaboration/document-review/DESIGN.md), and [verification](features/collaboration/document-review/EVIDENCE/VERIFICATION.md) support the local slice; live runtime boundaries remain open |
| RM-04 | First bounded slice proves connection and shared work within stated boundaries (Phase 0) | active | Builder; independent reviewer | Applicable RM-02 and RM-03 records; implementation authorization | Meet Phase 0 criteria below; resolve material review findings; record code candidate, specification revisions, limitations and orchestrator acceptance | Application candidate `831e324`: integrated Codex/Claude output accepted by the user; 58 automated tests, 18 local access checks and three live boundary observations. [Evidence](features/collaboration/document-review/EVIDENCE/VERIFICATION.md) and [limitations](research/knowledge-boundaries.md). Supported private-knowledge/isolation scope decision remains open |
| RM-05 | Accepted slice reaches its authorized delivery state | proposed | Orchestrator | Accepted RM-04 candidate; delivery authority | Requested repository/release actions verified against the delivered revision; environment verification and recovery reference supplied if deployment is in scope | Pending; initial README push is not product delivery |

## Phase 0: connect agents and share work within boundaries

User-directed priority: first establish how the platform fits together through two
linked feasibility questions. A bounded local preview is now authorized. Live
target routes selected by the user are Codex Subscription and Claude API; supported
access and bounded end-to-end operation have been demonstrated with fictional data. Claude API execution
requires an explicit bounded spending allowance and available credentials. Missing
live access does not prevent synthetic local implementation.

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

- Now: preserve the reviewed local implementation and completed live evidence.
- Next: decide the supported knowledge/isolation scope before expanding live inputs.
  Subscription/API collaboration is demonstrated; private-memory portability and
  confidential-data readiness remain unproven.
- Later: refine candidate horizons from evidence. The Gather/Pokemon interface stays
  in the optional backlog with no scheduled phase.

## Updates

Knowledge-boundary live results: all three fixed Claude probes completed and the
orchestrator inspected their responses. No fictional private code/fact disclosure
was observed; direct and indirect override attempts were refused. Recorded cumulative
Claude estimate is US$0.005369, no outstanding reservations. This complements the
18 local enforcement checks, but does not prove broad model confidentiality, private
memory migration or runtime isolation. See [completed observations](research/knowledge-boundaries.md).
RM-04 remains active pending an explicit supported knowledge/isolation scope decision;
the evidence has not silently expanded the platform's assurances.

Integrated live evidence: the user accepted revision 1 of the Codex subscription /
Claude API result at `2026-09-28T19:37:46.358Z`. Session completed, grants ended and
canonical output persisted. Application candidate `831e324` includes the reviewed
live workflow and boundary runner. Historical implementation reviews and the
verification report preserve earlier checkpoints; pending statements there do not
supersede these completed observations. Closeout commits are local, not publication.

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

### Bounded preview and evidence split — 2026-09-29

The user asked to proceed toward a first platform preview, then selected Codex
Subscription and Claude API as live targets. Requirements are owned by
[agent connection](features/agents/connection/PRD.md),
[work session](features/work/session/PRD.md) and
[document review](features/collaboration/document-review/PRD.md). The preview uses
one human owner (no personal agent required), one project, synthetic context and
an editable launch-plan example. Seven capabilities are implemented through these
three cohesive feature areas.

A visibly labeled deterministic demo may satisfy a local-preview checkpoint: task
setup, selected context, two adapter contributions, human review and acceptance,
activity trace, and stop/revocation with real negative enforcement checks. This
checkpoint is not RM-04 acceptance. RM-04 still requires independently operated live
agent evidence and the stated boundary tests; unmet routes remain explicit. No new
production release, external spending or sensitive-data access follows from preview
authorization. Verification records must separate local, simulated and live results.
