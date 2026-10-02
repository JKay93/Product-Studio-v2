<!-- studio {"id":"byoa-world:prd:stage2-native-participation","scope":"byoa-world","type":"prd","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"},{"relation":"requires","target":"byoa-world:roadmap:main"}]} -->
# Product requirements: native cooperative work and company funding

- Product Manager owner: Product Manager; orchestrator coordinates package acceptance.
- Last material update: 2026-10-01.
- Contract, strategy and roadmap: [CONTRACT](../../../CONTRACT.md), [STRATEGY](../../../STRATEGY.md), [ROADMAP](../../../ROADMAP.md), BYOA-AGD-01/02/08/10; delivery maps to BYOA-AGT-01–08.
- Requirement revision: native draft 2; narrow journey/editorial synchronization by Designer under orchestrator authorization aligns technical revision 2 owner checkpoint; PM fixture, rubric, pricing/caps and policy remain unchanged. Fictional task, roles and allowance below are PM recommendations for package approval; Decision 004 settles native-first/company funding, not this fixture or live spending. Integration: [native package](../../../architecture/STAGE-2-NATIVE-PACKAGE.md), [technical plan](../../../architecture/STAGE-2-NATIVE-PARTICIPATION-PLAN.md), [experience design](../../../design-system/STAGE-2-NATIVE-PARTICIPATION-DESIGN.md).
- Template: [prd.md](../../../../../operating-system/templates/prd.md). Core sections and per-requirement behavior, exceptions and evidence fields retained; task/rubric/funding tables elaborate the template without structural departures.
- Requested worker route: productManager, gpt-6.1-sol / medium / fork_turns none, per harness/role-routing.json version 1. Actual backend activation remains unknown; assignment record owns returned identity/provenance.

## Problem, outcome and scope

**User, context, unmet need, evidence and assumptions.** An SME owner or employee needs an inspectable launch brief and a usable operations plan from one saved World note. They should select ready-made roles without launching runtimes or supplying personal provider access. This is a bounded fictional exercise testing linked work and controls. SME usefulness, demand, time savings and willingness to pay remain hypotheses. [Decision 004](../../../decisions/004-native-agents-company-funding.md) supplies direction; [Decision 002](../../../decisions/002-world-foundation.md) preserves the accepted human foundation.

**Observable outcome.** Two real attributable native executions produce A's offer brief and B's fulfillment/launch plan using the exact retained A artifact. The human sees inputs, operators, payer and usage, can stop, review/edit and explicitly accept a selected document into the existing planning note, then reopen original contributions and accepted work after access ends/restart. A completed model call alone does not establish usefulness or human acceptance.

**In scope.** One local human owner, one fictional SME World, one saved plain-text note, a small fixed two-role set, one bounded Session, immutable input snapshots, linked proposed documents, basic company test funding and bounded accounting. Reuse Calm workspace, explicit Save/revision/conflict/recovery, existing React/TypeScript/Vite + Node/SQLite and cohesive feature interfaces. Product requirements govern the experience; Technical Specialist owns API/credential placement, exact limits and feasibility, Designer owns screens, independent reviewer owns candidate findings.

**Non-goals, dependencies and constraints.** No application edit, preflight, inference, credentials, installation, spending, migration or publication follows from this draft. Stage 2.1 needs revised-package approval and explicit resume; inference needs separate bounded authority. No real company identity/account service, payment collection, purchased credits, automatic top-up, production/private data, personal memory, external message/order placement, broad catalogue or marketplace. Optional BYOA follows native verification. Preserve historical proposals, attempt identities, budgets and failed/unknown usage; never resume weekly pilot or reset unused cycles. ROADMAP alone owns milestone status.

## Requirement [byoa-world:req:native-task-001]

**Behavior.** Recommend a fictional bakery's weekday corporate lunch-box trial. Offer planner A creates a source-grounded launch brief; Operations planner B turns that brief into a complementary fulfillment/staffing/launch plan. B does substantial new planning, rather than only checking A. Distinct providers/models are optional; distinct attributable executions and roles are required.

### Exact frozen fictional note, fixture byoa-world:fixture:bakery-lunch-v1

The following complete text is the fixture's source of business facts. It must be saved as a note revision before Session preparation. Its wording/content is frozen for the approved real demonstration; later edits produce a different snapshot and invalidate affected evidence. The recommended role instruction below is separately disclosed as task instruction.

```text
FICTIONAL TEST DATA — Little Hearth Bakery weekday corporate lunch boxes
This is an invented planning exercise. No real company, customer or order is described.
Goal: plan one hypothetical Monday–Friday trial of corporate lunch-box delivery.
Offer: chicken-and-vegetable box or vegan-and-vegetable box. Do not claim allergy safety, nutritional suitability or legal/regulatory compliance; these need separate verification before real trading.
Selling price: SGD 14 per box. Variable cost assumption: SGD 9 per box, including ingredients, packaging and delivery allocation. Minimum desired contribution: SGD 4 per box. These are fictional assumptions, not researched prices or net profit.
Ordering: minimum 10 boxes per order. Hard total cap 30 boxes per day across both variants. Customers choose their variant quantities by the cutoff.
Staffing capacity: 150 staff-minutes per day allocated to this trial. Fixed preparation/setup takes 30 staff-minutes per day; each box requires 4 additional staff-minutes. No extra staff or overtime is assumed.
Orders close 15:00 on the prior working day. Dispatch target 11:30; delivery target 12:00–12:30 on one delivery route. Monday's cutoff is the preceding Friday. Route feasibility and food handling must be verified before real trading.
Demand evidence: six invented office contacts were asked; four expressed interest in an order of 20 boxes and two were undecided. There are no booked orders, signed commitments or validated demand estimates.
Resources: this saved note only. No private customer information, agent memory, external files, live research, contacting offices, purchasing, order placement or staff scheduling system access.
Deliverables: an offer/launch brief, followed by an operations/launch plan that uses the exact brief and makes assumptions and unresolved checks visible.
```

### Disclosed role instructions and linked artifacts

| Item | Frozen instruction / artifact requirements |
| --- | --- |
| A — Offer planner | Recommend a conservative 20-box daily trial within the 30-box ceiling. Produce `Offer brief` with audience, two variants, price/cost/contribution arithmetic, order/cutoff rules, evidence versus assumptions, trial success observations and unanswered checks. Do not fabricate booked orders, market research or certifications. |
| A retained artifact | Unique World/Session/task/attempt/agent/operator identity, artifact ID/revision and exact bytes/digest; immutable after committed submission. `Committed` means retained proposal, never human acceptance. |
| B — Operations planner | Read the frozen note and exact committed A artifact. Produce `Launch and operations plan` with a concise attributed offer summary plus Monday–Friday ordering, staffing/capacity, dispatch, responsibility/checklist and exception handling. Carry A's 20-box recommendation into the plan; identify any conflict or unsupported assumption rather than silently replacing facts. |
| B retained artifact | Links the actual A artifact ID/revision/digest used, not a freshly generated approximation or example. Shows staffing and contribution calculations, cutoff/variant handling, delivery checks and owners for unresolved work. B's document is the proposed complete document for review. |
| Human review draft | Human may edit a copy of the selected A or B document. Retain original A/B and edited-copy provenance. Only explicit authorized human acceptance against current note revision makes that selected document canonical. |

**Exceptions and error states.** Unsaved/conflicted notes cannot be quietly substituted for the frozen input. A failure/missing artifact blocks B; no canned A result or synthetic B is presented as live work. After A commits, automatic structural/provenance/limit checks do not establish semantic quality. The owner reads the immutable exact A brief against the frozen fixture and rubric, including scope, arithmetic/capacity, assumptions and invented bookings, then chooses **Continue to operations plan** only if suitable. An out-of-scope request or infeasible A result is retained/flagged; **Reject brief and stop** blocks B until a new authorized task is prepared. Continuation binds the exact A contribution ID/revision/hash, current grant epoch and owner command identity; it neither edits A nor accepts canonical work nor adds a model call. Complete A alone never dispatches B; replay cannot duplicate B and stale/revoked/conflicting confirmation is denied. Human edits to A do not silently enter B's frozen handoff; this two-call demonstration has no redispatch. A-only success remains reviewable if B fails. Human may separately accept A after inspecting its partial status; no agent/server auto-acceptance.

**Acceptance criteria and evidence required.** Actual candidate must retain the note revision/digest, disclosed role inputs, two distinct real attempt records, exact A→B correlation and original outputs. Inspectable evidence must show B consumes committed A, not parallel independent drafts. Evaluate the rubric below on the exact candidate. A human's decision is recorded separately from technical checks; missing human acceptance remains pending.

| Rubric ID | Required observable result | Failure condition |
| --- | --- | --- |
| NATIVE-R01 | A and B use only fixture facts; assumptions/unverified checks explicitly labelled | Invented customers/orders/research, private data or unsupported food/compliance assurances |
| NATIVE-R02 | Contribution SGD 14−SGD 9=SGD 5/box meets minimumSGD 4;20 boxes yields SGD 100/day, SGD 500 at 20/day for five days, conditional on actual orders | Net-profit claim; guaranteed revenue/demand; incorrect arithmetic |
| NATIVE-R03 |20 boxes needs 30+4×20=110 staff-minutes/day;30-box ceiling needs 150; variant totals obey cap and min order | Overcapacity, assumed overtime/new staff, variant quotas invented as facts |
| NATIVE-R04 | Plan observes prior-working-day 15:00 cutoff including Friday for Monday,11:30 dispatch and 12:00–12:30 delivery target | Conflicting timing or unverified guaranteed delivery |
| NATIVE-R05 | B cites exact A artifact and provides five-day operational responsibilities, order/variant handling, capacity checks and unresolved launch prerequisites | Reviewer-only output, generic plan disconnected from A, or misleading completed actions |
| NATIVE-R06 | Original note/A/B preserved; edits traceable; explicit human acceptance with revision check; reopen retains work without renewed grants | Automatic canonical write, stale overwrite, lost proposals or revived access |

Every rubric row must pass for a recommendation that the complete task met its specified quality bar. Record actual defects and human disposition; do not average away a constraint failure. Utility/rework feedback may be collected qualitatively without inventing a manual baseline or productivity savings.

## Requirement [byoa-world:req:native-funding-002]

**Behavior.** Before work, show and bind distinct requester, native agent identity, runtime operator and funding account. Company work must use company-funded access. In the local prototype the owner acts as requester and reviewer; a clearly labelled fictional company test account represents company funding, not a verified employee/admin or purchased balance. Platform-operated runtime identity is visible; its credential/provider handling belongs to technical design and disclosure.

| Identity / amount | Product rule |
| --- | --- |
| Requester / reviewer | The human requests scoped work and alone may accept into the note. Requester does not gain company billing administration merely by starting a task. |
| Agents / operator | A and B have separate attributable participant/attempt identities even if they share a runtime/provider/model. Runtime operator is the platform; agent role names do not identify a human payer. |
| Company test payer | Funding binding and currency/unit are frozen with the work; label test accounting throughout. A future development sponsor approving real provider expense is separately identified. No test balance creates spending authority. |
| Raw provider expense | Record actual/reported/estimated/unknown usage and applicable versioned rate basis per call, task totals and selected separate tool expenses. Do not label token cost as full platform profitability. |
| Proposed customer charge | Separate field/policy from raw provider cost; prototype may show `not charged — test accounting`. No selected markup, credit conversion, subscription/seats or retail price. |
| Later company-funded BYOA | Directly company-paid compute cannot be charged again as provider compute. Any agreed platform/service fee is separate. Employee-personal runtime requires approved company access/reimbursement; sponsorship is never inferred. |

**Exceptions and error states.** Missing/invalid payer or insufficient allowance denies before paid work. No employee-personal fallback, automatic top-up or silent funding switch. Failed/aborted work may incur provider charges; output rejection does not imply free compute/refund. Unknown/incomplete cost stays visibly unresolved, with conservative held reservation; it is never settled as zero. Release unspent reservations only with evidence that exposure ended and covered charges are accounted for. Reconciliation can alter accounting, not rerun inference or change human acceptance.

**Acceptance criteria and evidence required.** Offline candidate tests cover missing/insufficient payer, concurrent reservations, in-flight exposure, duplicate results/settlement, restart, failed/unknown/late results, no personal fallback and no duplicate compute charge. Both A and B maximum reservations must be held durably together at Start before any inference; competing work cannot consume B funding. The owner checkpoint and B eligibility/authority/sharing/deadline/ledger/rate checks use the existing held reservation, with no new reservation or allocation between A and B; task and account ceilings account for all concurrent work. Native accounting is tested independently of output usefulness, and mocks remain labelled test evidence. A spending limit cannot guarantee completion.

## Requirement [byoa-world:req:native-allowance-003]

**Behavior.** Design and offline verification require no live allowance. Present a separate concrete real-run request only after package approval/resume and reviewed implementation. Technical Specialist supplies current primary-source route/price evidence, an enforceable maximum exposure and safe failure/usage behavior. No studio worker model route becomes the product agent route by analogy.

Proposed coordination envelope, subject to technical confirmation and separate authorization: exactly two inference calls A→B; at most two provider token-count requests for pre-dispatch verification; A admission estimate at most 4,000 input tokens and output maximum 1,500, B admission estimate at most 6,000 input tokens and output maximum 2,000; at most 60 seconds per provider request and 240 seconds overall including the owner checkpoint wait. No agent tools, browsing, thinking/cache paths, background work, automatic retry or model/provider fallback. Exact system/role instructions, note snapshot and A handoff count toward admission checks. Oversized inputs block, rather than silently truncating the source. Token counting is an estimate, not a guaranteed input billing cap.

Technical recommendation is Claude Haiku 4.5 with a proposed fresh US$0.42 maximum development allowance: conservatively reserve A US$0.2075 and B US$0.2100 using the full 200,000-token model input ceiling, not the 4,000/6,000 admission estimates. At the recommended rate, the expected capped estimate US$0.0275 is indicative, not the enforceable exposure maximum or a promised task price. These remain proposals, not granted funding; authoritative provider/model/rate basis, counting-request terms and exposure proof belong to [the native technical package](../../../architecture/STAGE-2-NATIVE-PARTICIPATION-PLAN.md). The fresh authorization cannot consume or reset historical Claude allowance or disguise old uncertain reservations.

**Exceptions and error states.** Provider-specific charges or limit behavior that prevent a proven ceiling block dispatch. Unsupported accounting, unknown previous exposure, timeout/stop or usage omissions cannot authorize another call. The overall deadline includes waiting for the owner to choose Continue to operations plan and is never reset/extended at the checkpoint. Expiry blocks B and closes execution without retry; B reservation is released only with positive proof it was never dispatched, retaining A and any unknown A-cost hold. Revoked authority, unknown A outcome/usage or ledger/rate mismatch also prevents B dispatch despite held funds. The deadline does not prove remote cancellation or zero spend. Two count requests are not two agent executions. Real call failure exhausts that attempt; any correction involving another call requires a new separately authorized attempt/budget decision, not an automatic retry.

**Acceptance criteria and evidence required.** The eventual allowance request names exact provider/model, price effective/source date, sponsor/payer, frozen prompts/inputs, tools disabled, counts/ceilings/deadlines, maximum aggregate exposure, durable reservation identity, failure/uncertainty rules and explicit authority. Actual demonstration reports measured/reported/estimated/unknown usage separately from reservations; costs reconcile once. No native run is authorized by this PRD or historical experiments.

## Experience, system and readiness

**Journey and design links; accessibility.** Existing World→save note→select ready-made roles→inspect frozen recipients/inputs/operator/company test payer/limits→start with both A+B reservations held→read immutable committed A against fixture/rubric→Continue to operations plan bound to exact A hash/epoch or reject/stop→observe exact A handoff/B plan→review/edit/explicit accept→stop/end→reopen. Designer's native package must reuse Calm conventions and cover preparing/working/partial/failed/stopped, insufficient allowance, unresolved cost and note conflicts. Candidate keyboard, narrow viewport and 200% zoom checks are required for changed screens; prior foundation checks do not prove new UI.

**Data inputs, outputs and boundaries.** A receives only selected saved note snapshot and disclosed role instruction; B receives the same note and exact A proposal, plus its disclosed instruction. No other World/note/file, personal memory or private input is granted. Native runtime obeys the same scoped neutral work/permission contract and cannot accept canonical work. Stop/revocation denies future World reads/actions/writes and dependent dispatch; retained information already supplied may remain with runtime/provider under disclosed limits. Late output is quarantined/retained as ended-attempt evidence, never accepted or passed to B. Restart retains history/accounting and requires fresh authority for new work; no grants revive. Additive migration/backup/fallback planning belongs to Technical Specialist; no migration executes in Stage 2.

**Success and guardrails.** Exact A→B handoff, rubric quality, readable disclosure, saved history, user feedback, explicit acceptance and candidate boundary/accounting checks establish the bounded outcome. Report reliability per actual attempt; no fabricated successes, time savings, universal interoperability/privacy or profitable pricing claims. Protect accepted human foundation and all legacy evidence. Controlled local fictional success does not establish paid/private SME readiness.

**Open product choices and owner.** User decides revised package/task/resume and any fresh real allowance; Technical Specialist finalizes supported runtime/model/provider/limits and maximum exposure; Designer finalizes inspected screens; PM retains task/payer policy. Commercial currency versus credits, conversion/markup, subscription/seats, included use, payment processor and failure/refund policy remain open for later company readiness. No payment system is a Stage 2 prototype prerequisite.

**Readiness conditions.** AGD-09 package approval precedes Stage 2.1 implementation; explicit resume and installation authority apply separately. Reviewed real candidate and concrete live authority precede inference. Company identity/funding/operations and applicable handling/isolation readiness precede a separately authorized real paid/private pilot, even if readiness must move earlier than Stage 4. Original external-only records and reviews remain history; they cannot accept this native candidate.



