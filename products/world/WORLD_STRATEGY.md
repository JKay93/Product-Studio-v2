<!-- studio {"id":"world:strategy:rebuild","scope":"world","type":"strategy","status":"proposed"} -->
# World product strategy and delivery plan

Version 1.0 · 29 October 2026 · Applies to World-Rebuild only

**World should help a small business complete repeatable knowledge work using its own information, templates and operating rules, through one accessible assistant.** The customer should spend less time preparing and checking work without losing control over company decisions. The underlying runtime is a means to that outcome, not the product we sell.

This is the development and commercial reference for the new World. The approved foundation is fixed unless the founder deliberately changes it. The proposed customer segment, first commercial job, prices and performance thresholds below are experiments to validate, not proven demand or approved launch commitments. No customer interviews or live-model evaluations were conducted for this report. Online research, product/design/technical critique and the inspected local implementation inform the recommendations.

**Recommendation:** continue the existing foundation, validate one recurring company-document job with prospective customers, and build that job through preparation, revision, review and usable export. Do not fund a broad automation catalogue, agent ecosystem or general office suite before this works repeatedly and customers pay for it.

## Reading and decision guide

| Decision | Read |
| --- | --- |
| What are we building and for whom? | Sections 1–4 |
| What is different and defensible? | Sections 3 and 5 |
| What should the product contain? | Sections 6–9 |
| What do we build next and how do we test it? | Sections 10–12 |
| What do we charge and how do we acquire customers? | Sections 13–15 |
| How do we operate it and prevent drift? | Sections 16–19 |

The founder owns business choices, customer access, funding and intentional changes of direction. The orchestrator owns evidence, sequencing, scope checks and reporting. Product, design, engineering and independent review contribute within those boundaries. A completed task or a high test count is never a substitute for a completed customer outcome.

## 1 Purpose and approved boundaries

### The problem we intend to solve

Small teams often depend on an experienced owner or employee to find the right information, interpret a request, reuse a company document, fill gaps and check the result. Hiring another person may be costly; a general AI tool can help but still leave substantial setup, copying, correction and supervision. World must demonstrate that it removes enough of that residual work to justify another product and subscription.

The ambition is additional useful capacity, not a promise to replace an employee. A task being automatable does not establish a market. The work must recur, have a recognisable acceptable result, fit the customer's tools and be worth paying to improve.

### Decisions already made

- One assistant is the main interface. Users do not need to create agents, assign personalities, design a swarm or draw an automation graph.
- Chat initiates and revises work. Knowledge provides familiar visual pages, tables, company information and reusable templates. Connections and Settings support those journeys.
- The default is light, restrained and consistent. Complex configuration is progressive; the customer should not need a developer to explain basic operations.
- Existing company processes and formats matter. World must adapt to them rather than demand a new invoice, document or task-management process.
- Worlds are standalone access boundaries. Personal is private. There is no automatic transfer of company data, memory, credentials or permissions between Worlds.
- The platform enforces security and permitted capabilities; companies specify their operating rules within those limits. User instructions cannot silently expand either boundary.
- Mastra is the selected framework. Reuse its maintained components while World owns its product, permissions, business records and commercial controls.
- Deterministic procedures run behind tools when appropriate. A user-facing flow builder is not required for the new product.
- The old World and World-Next folders remain reference material. Their former roadmaps, integrations and agent features are not requirements for this rebuild.

These decisions are recorded in [project instructions](../../../World-Rebuild/AGENTS.md) and the fresh-rebuild sections of [product decisions](PRODUCT_DECISIONS.md). This strategy does not authorise spending, external actions or deployment by itself.

## 2 Evidence for the problem

Singapore business pressure is credible. The SBF National Business Survey 2026 manpower release reports rising manpower costs among 68% of surveyed businesses and difficulty finding relevant skills among 41%. The sample is businesses, not exclusively our proposed customer segment. This supports investigating capacity constraints; it does not establish demand for World. [SBF manpower findings](https://www.sbf.org.sg/newsroom/media/press-releases/detail/businesses-turn-to-skills-first-hiring--training-and-job-redesign-as-skills-gaps-widen).

MOM's 30 April 2026 release covers private establishments with at least ten employees. It reports that 28.5% had started AI adoption, including planning and piloting; 3.8% were integrating AI into core processes. Implementation cost and lack of in-house expertise were cited by 44.9% and 42.4%, respectively. This points toward implementation friction. It also warns against making World expensive to set up or dependent on technical expertise. These percentages are not an addressable-market calculation. [MOM AI adoption report release](https://www.mom.gov.sg/newsroom/press-releases/2026/0430-adoption-of-ai-among-firms).

MDDI's March 2026 factsheet reports historical SME AI adoption of 14.5% in 2024 and describes national support for adoption. Its population and definition differ from MOM's. Do not combine these series. A newer IMDA release was located but its primary text was inaccessible during this research, so no unverified 2025 adoption percentage is used here. [MDDI programme factsheet](https://www.mddi.gov.sg/newsroom/national-ai-impact-programme--empowering-enterprises-and-workers-to-transform-with-ai/).

The market is not empty. An October 2026 MDDI speech describes complimentary access to Space for 10,000 SMEs and Slack support for onboarding a workflow. This means both AI access and assisted adoption face subsidised competition. World has no established grant eligibility, approved-vendor status or partnership with these programmes. [MDDI SMEs Go Digital address](https://www.mddi.gov.sg/newsroom/keynote-address-by-minister-josephine-teo-at-smes-go-digital-day-2026/).

**What remains unknown:** which recurring job hurts enough, how frequently it occurs, whether current AI already solves it, the real review burden, acceptable data handling, required file fidelity, willingness to pay and cost of onboarding. Those are customer-research questions. More features will not answer them.

## 3 Positioning and competitive reality

### Customer promise

Working positioning: **A company assistant that prepares work using your information, follows your procedures, and leaves you in control of the result.**

For an initial supported document job, demonstrate: bring the existing template and inputs; receive an editable, traceable draft; correct it; review the exact version; obtain a usable output. Avoid promising arbitrary business automation, legal correctness, autonomous employees or support for every file type.

### Alternatives customers already have

Prices below are public snapshots checked on 29 October 2026, not guaranteed quotations. Currencies, usage limits, taxes, annual commitments and included capabilities differ. Recheck before pricing customer offers; do not compare a subscription seat directly with an API token or a completed job.

| Alternative | Published price reference | Why a customer may choose it | What World would have to prove |
| --- | --- | --- | --- |
| ChatGPT Business and Work | Official page displays $20/user/month annually, minimum two users; $25 monthly. Business workspace and additional usage options. | Familiar assistant, company workspace and broad task capability. | Lower total effort on the chosen company job, not simply chat with files. |
| Claude Team | Standard $20/seat/month annually or $25 monthly; page lists teams of 2–150. Dollar-denominated benchmark, taxes extra. | Projects, connectors, file work, skills and search already overlap strongly. | Better repeatability, template fit and review experience on actual customer examples. |
| Microsoft 365 Copilot Business | Singapore page quotes USD21/user/month annual list, USD18 promotional annual rate; eligible base Microsoft 365 subscription required; GST excluded. | Works within existing Word, Excel, Outlook and Teams. | An advantage large enough to overcome its native document/application access. |
| Manus | Help centre lists Pro from US$20/month and Team from US$20/seat/month; credit-based limits. | Broad delegated tasks and artifact generation, team controls. | More reliable company-specific result and bounded authority for the chosen job. |
| Macro | Page displays $40/seat/month Pro, $200 Max; currency code not explicit in the fetched page. | Broad connected workspace with documents, communication and agents. | A simpler addition to existing work, rather than requiring suite replacement. |
| n8n Cloud | EUR20/month Starter annually for 2,500 executions; EUR50 Pro annually for 10,000. | Mature automation, agents, integrations and configurable execution. | Much less owner setup and maintenance for a supported business outcome. |
| Existing employee process or consultant | Customer-specific cost, not a vendor list price. | Trusted conventions, flexibility and human judgement. | Net time saved after setup, review, corrections and operating effort. |

Sources: [OpenAI pricing](https://learn.chatgpt.com/docs/pricing), [Claude pricing](https://claude.com/pricing), [Microsoft Singapore pricing](https://www.microsoft.com/en-sg/copilot/pricing/business), [Manus membership pricing](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus), [Manus currency](https://help.manus.im/en/articles/11711125-what-is-the-pricing-unit-for-manus-globally-can-i-pay-in-local-currency), [Macro pricing](https://macro.com/pricing), [n8n pricing](https://n8n.io/pricing/). Microsoft's offer is time-limited and subject to its first-year/annual terms; use the list rate for durable comparisons. No foreign-exchange conversion is assumed here.

OpenAI's own project-teammate example includes connected project material and scheduled checks. World cannot claim that established assistants only answer questions or lack context and tools. [ChatGPT project teammate](https://learn.chatgpt.com/use-cases/project-teammate). Similarly, model choice, retrieval, tool use and approval interfaces are available building blocks, not unique advantages.

If a prospect completes the job just as well with an existing assistant and their drive, recommend that route or narrow the problem. Do not manufacture extra configuration to justify World.

## 4 Initial customer and commercial experiment

### Recommended hypothesis

Start discovery with Singapore B2B IT and managed-service consultancies of roughly 10–50 staff, with recurring customer proposals or statements of work, an established template, an identifiable reviewer and no dedicated automation team. The buyer is an owner/director; users are account managers, consultants or sales coordinators.

This is a **recommended research cohort, not a decision to turn World into proposal software**. The broader assistant-first direction remains unchanged. Confirm the cohort and first job with the founder after examining actual work. Eight comparable documents a month is a useful screening floor, not proof of economic viability.

Why consider this cohort: company-specific scope, existing clauses, factual inputs and owner review create more than a summarisation task, while participants may be able to provide digital templates without a connector project. These are inferences to test. IT firms may also be particularly capable of using incumbent AI tools, which makes the competitive test harder and more honest.

| Candidate first job | Opportunity | Main risk | Decision rule |
| --- | --- | --- | --- |
| Proposal or scope draft from discovery notes and approved material | Preparation and review are visible; output can be compared with an accepted original | Bespoke scope, commercial/legal commitments, Word fidelity, insufficient volume | First discovery hypothesis; never invent commitments or approve/send automatically |
| Recurring customer service report | Higher cadence and generally lower contractual risk | Commodity summary or dependence on ticketing/monitoring integrations | Prefer if users show repeatable value from supplied exports without major new connectors |
| Field-service quote or job handover | Clear operational value | Pricing/catalogue/mobile/ERP dependencies | Later unless existing authorised inputs make it a narrow template job |
| Accounting or corporate-service onboarding | Repeatable information collection and review | Sensitive records, specialist obligations and incumbent systems | Defer regulated or sensitive execution until expertise and controls exist |

Do not make invoices, watch-listing automation or a generic SOP generator the commercial wedge simply because they appeared in previous conversations. They are examples, not market validation. An SOP can remain a safe engineering fixture while a different real job validates demand.

**Qualification must establish:** last three real jobs; monthly volume; preparation and review minutes; required output format; source owner; reviewer; usable capacity released; existing tool costs; security restrictions; named budget holder. Reject an early prospect whose essential format or integration cannot be supported honestly within the first slice.

## 5 Core pillars and potential defensibility

| Pillar | Customer outcome | Product obligation | Evidence needed |
| --- | --- | --- | --- |
| Company context | Less repeated explanation and source hunting | Relevant, current, permitted information with traceable versions | Correct source/precedent chosen; old/private/conflicting sources handled |
| Fit to existing work | Output can actually be used | Supported company templates, editable artifacts and usable export | No manual reconstruction of required format; lower total editing time |
| Controlled execution | Useful work without unapproved consequences | Code-enforced roles, scoped tools, exact approvals, durable receipts | Adversarial permission, expiry, replay and recovery tests |
| Simple interaction | Employees can operate it independently | Chat-led work, visible result/status, focused questions, understandable failures | Uncoached first and repeat use |
| Sustainable reliability | Owner can trust delivery and bills | Measured quality, bounded cost, recovery, support and operational controls | Repeat use, paid retention, incident and cost evidence |

Possible future advantages are a library of proven template mappings and deterministic checks, a permission-safe procedure toolkit, an evaluation set of real failure patterns used with permission, and a repeatable low-effort onboarding method. Distribution and trusted customer relationships may compound these advantages.

None is an established moat today. Mastra, OpenRouter, a chat interface, a vector database, agent collaboration or a long integration list would not by themselves create one. Customer documents belong to customers; no cross-company learning or training is assumed. Portability should be a benefit, not deliberately obstructed to create switching costs.

Investor judgement: suitable for a bounded validation investment, not yet justified as a broad platform growth bet. Client judgement: suitable for a controlled trial after format, privacy and production gates pass; not ready for autonomous consequential work. Confidence should rise through repeat paid outcomes, not further architectural novelty.

## 6 Product experience and behaviour

### First useful job

1. A user enters an explicitly named World. The destination and visibility are visible before adding information.
2. They ask for an outcome in normal language and supply the job inputs. No agent creation or workflow construction is required.
3. World uses an already configured company template or helps select a supported one. Unsupported formatting is disclosed before work starts. Initial assisted mapping must not recur on every job.
4. The assistant inspects available permitted sources. It asks only for missing information that materially changes correctness, purpose, authority or destination. Nonessential unknowns become labelled placeholders.
5. The draft opens in the editor beside the conversation. The user sees missing essentials, source references and material assumptions, not a dump of every retrieved record.
6. Direct edits and conversational revisions update the intended artifact with version/conflict protection. Known facts are not repeatedly requested.
7. The user reviews a specific version. Acceptance records review; export, sharing and external delivery are distinct actions with distinct results.
8. On the next comparable job, the user supplies new inputs and reviews the result. Setup is reused within its authorised World and template scope.

### Behaviour contract

- Conversation does not automatically become a job or Knowledge document. An explicit request to create a supported document can save a private draft without redundant save approval.
- Vague intent can warrant one focused question. Asking several truly independent essential questions together is acceptable. Do not follow a prose questionnaire with a duplicate card or start separate jobs for each answer.
- A request card has an owner, job, revision and state. Answer, cancellation, supersession and expiry close it. Expiry never means consent. Waiting should not consume generation calls.
- Read ordinary source documents as data. Only authorised company policy can govern procedure, and only code can enforce access or spending authority.
- Use company-approved facts for rates, contractual clauses and commitments. Calculations use deterministic validated rules. Missing facts are not opportunities for plausible invention.
- Tone is concise and professional by default. User language preferences and saved region are separate; travel does not automatically change language or legal context.
- Show observable results: saved draft, waiting for input, accepted version, export created, delivery confirmed, failed or outcome unknown. Never say sent because a model intended to send.
- Preserve completed work when interrupted. A safe retry does not duplicate a document or external effect. Show what is saved and what remains uncertain.

### UX acceptance targets

For the first supported job, at least four of five representative users should complete repeat use without coaching and explain where their data is stored and what acceptance does. All five must understand whether anything has been sent. Test keyboard operation, focus, contrast, autosave conflicts, permission loss and narrow screens. Complex document layout work may remain desktop-focused; mobile must handle reading, questions and brief review without clipped controls.

These are proposed release targets. The design is unsuccessful if founder guidance is necessary for normal use, even when underlying API tests pass. New controls need a named user decision; internal runtime concepts should stay out of the ordinary journey.

## 7 Feature scope and exclusions

| Capability | First usable commercial slice | Conditional expansion |
| --- | --- | --- |
| Assistant | One assistant; streaming/status; bounded tools; correction; stop; task continuity | Multiple internal specialists only if measured quality benefit exceeds cost and latency |
| Knowledge | Visual pages/tables, relevant retrieval, versions/provenance, private and World visibility | More import formats, richer search and coediting when needed |
| Company templates | One supported real template family; explicit selection; preserved required sections; versioned mapping | Additional families only with fidelity and regression evidence |
| Company rules | Approved operating instructions, role and action limits, visible exceptions | Richer policy administration after repeated demand |
| Review | Exact-version acceptance; separate scoped reviewer access where the pilot requires it | Multi-stage sign-off, delegation and audit exports |
| Output | Editable draft plus the customer's validated required export format | Slides, spreadsheets and structured business records as separately tested artifact families |
| Connections | Only those essential to the validated job; manual authorised input acceptable initially | One at a time, based on repeated measured friction |
| Administration | Secure membership, session handling, spend controls, retention/export/deletion, operational support | SSO/SCIM and advanced procurement requirements when justified |
| Automation | Deterministic preparation/checks behind tools; interactive initiation | Explicitly authorised scheduled/background procedures with service identities |

Not in the initial roadmap: integration-count competition; a mandatory canvas; persistent-agent marketplace; autonomous organisation/swarms; replacing CRM/accounting/email; arbitrary shell or unrestricted browser actions; universal Word/Excel compatibility; automatic invoice issue/payments; unsupervised negotiation; all-industry launch; unbounded memory or self-learning; a new model-routing research project.

Reusable engineering is desirable, but generalising an unused abstraction is not a customer feature. A connector needs an actual supported operation, clear credentials/permissions, failure handling, tests and an owner. A logo or mock configuration form does not count as an integration.

## 8 Current state and what remains

As of application revision `e8e92da408922cdf8d269b0efb2eb1fd7c211f4f`, milestones 1–3 are a tested **local foundation**. The reported 56 passing tests and database/browser/restart checks establish specific local mechanics, not live assistant quality, commercial readiness or security certification. No tests were rerun for this documentation-only strategy task. [Milestone 3 evidence](runs/2026-10-29-milestone3-identity-postgres.md).

| Area | Present now | Gap before customer delivery |
| --- | --- | --- |
| UI and Knowledge | Light Chat/Knowledge shell; visual editing, tables, hierarchy, autosave and version checks | Real customer usability; supported file import/export and format fidelity |
| Identity | Better Auth database sessions; Personal/shared Worlds; owner/admin/member roles | Verified invitations/recovery, abuse controls and production configuration |
| Privacy | Server-checked membership; author-private pages; creator-only chats and runs; current-authority checks | Broader attachment/export/log/operator boundaries; explicit reviewer-sharing model |
| Runtime | Actual Mastra Agent and typed tools; native Workflow review snapshots | Real model behaviour, safe live transport, durable longer tasks and provider accounting |
| Persistence | PostgreSQL domain/auth and native snapshots | Production backup/restore, migrations, monitoring, retention and operational capacity |
| Execution | One executor and a globally locked runtime JSONB record; saved reviews survive restart | Measured concurrency limits; later per-job storage/worker design when required |
| AI and connections | Deterministic offline model; outbound denial; Connections placeholders | No live generation, gateway, external sends or billing enabled |

The accepted local model keeps even shared-World conversations/runs creator-only. It does **not** currently support a manager reviewing an employee's private run. A future review grant must expose only the selected artifact/action to named reviewers; it must not silently give admins all chats. Company-document stewardship when an author leaves also needs an explicit policy before a team pilot. Do not retrofit either change under a vague “admin” permission.

## 9 Harness and technical plan

### Responsibility boundaries

Mastra supplies the model/tool loop, supported routing interfaces and native workflow suspension/storage facilities. World supplies identity, tenant/resource checks, policies, task/business records, artifact versions, approval meaning, receipts, budgets, billing and the customer experience. Framework snapshots describe execution; they cannot grant authority. [Mastra agents](https://mastra.ai/docs/agents/overview), [workflow suspension](https://mastra.ai/docs/workflows/suspend-and-resume), [storage](https://mastra.ai/docs/storage).

Coupling is deliberate and moderate: replacing Mastra would require replacing its adapter, tool/event integration and migrating native snapshots. Chat, Knowledge, company rules and business records should remain behind World-owned interfaces. Use the pinned supported packages and audit upgrades; current online documentation is not proof of behaviour in every pinned version.

The effective permission is the intersection of platform constraints, company policy, current user/session authority and task-specific grants. Lower layers may restrict it, never expand it. Persist actor, World, allowed resources/actions, policy version, tool version, budget, expiry and reviewed payload identifiers. Recheck at admission, retrieval, effect, approval, recovery and dispatch. Prompt instructions are guidance, not a substitute for checks.

### Models and context

OpenRouter is a sensible proposed first live route, with direct-provider compatibility retained. Mastra's framework does not require a hosted Mastra Gateway account. Start with a small approved model catalogue and one default; add a second route only after a matched quality/cost test. Avoid a paid classifier or several agents just to choose a model. [Mastra model router](https://mastra.ai/blog/model-router).

A gateway introduces another processor and failure/billing relationship. Approve providers and fallbacks explicitly. At research time, OpenRouter lists a 5.5% Standard credit-purchase fee and 8% Business fee; inference and account terms must be checked when connecting. Its privacy documentation distinguishes content handling, optional logging, provider policies, metadata and legal exceptions. Do not describe gateway routing or a Singapore database as a guarantee that all data stays in Singapore. [OpenRouter pricing](https://openrouter.ai/pricing), [data handling](https://openrouter.ai/docs/guides/privacy/data-collection).

Separate durable task facts, current source versions, conversation, approved company instructions and user preferences. Retrieve the minimum relevant permitted material; do not load the entire World into every call. Keep essential decisions and unresolved questions outside lossy summaries. Test long conversations after correction, compaction and restart. Never promise that all historical text is always in the model's context.

Reserve cost transactionally before calls; account for every attempt and tool charge; reconcile actual usage and retain unresolved holds. Bound tokens, time, concurrency and retries across the whole job. At most one transient model/read retry is a proposed starting policy, within the original budget. No retries for permission/authentication/validation failures, no automatic quality loops, and no automatic replay of an uncertain external mutation. Routing to another model does not reset the allowance.

### Documents and effects

Preserve originals and provenance. For the first format, state exactly which headings, tables, fields, styles and layout features survive. A rich Knowledge page is not proof of native Office fidelity. Open exported samples in the customer's real application; test required fields and layout there. If preserving a critical template needs an established library or narrowly scoped renderer, reuse one after licence/security review.

For future external actions, approval binds the artifact version, destination/recipient, connector identity, action and expiry. Material edits invalidate it. Record an operation receipt; use provider idempotency/status lookup where available. An ambiguous timeout becomes outcome unknown, not permission to send again. Stop prevents future work; it cannot undo a completed external effect.

Keep the initial product interactive. Background routines later need an explicit company-owned service grant, limits, expiry and revocation, not a permanently reused browser session. A small capacity-limited pilot may use one operated executor if tested; multiple workers require proper leases, fencing, per-job storage, fairness and recovery rather than simply launching another app process.

## 10 Predevelopment discovery and validation

### Founder research pack

Interview 12 qualified businesses before expanding commercial scope. Include the person doing the work and the person approving/paying for it; avoid interviewing only friends who enjoy AI. Record segment, current tools, job frequency, sensitivity, buyer and buying process. This is a practical first sample, not a statistically representative market survey.

Use the last three completed jobs as evidence. Ask:

1. What triggered this job, and what did the customer or colleague initially provide?
2. Show the actual template, source material and final accepted output. Which parts cannot change?
3. Who gathered information, prepared it, checked it and sent it? Where did it wait?
4. How much active preparation, correction and review time did each person spend?
5. What went wrong recently, and what was the consequence?
6. What do you already use—manual process, ChatGPT/Claude/Copilot, templates, macros or an integrator? Why is that insufficient?
7. Which information may leave your systems? Who can authorise access, processing and purchases?
8. What would you do with time released? Would it actually avoid overtime, unblock capacity or improve turnaround?
9. Who would use this next week, who approves the purchase, and what procurement or security review is needed?
10. After seeing a result from your authorised example, would you commit a real job and a paid pilot at the stated scope and price?

Secure permission for anonymised examples and recordings. Do not collect unnecessary customer data or assume an interview permits upload to a model. Keep customer identities and evidence in access-controlled research storage, not the source repository.

### Experiments and exit criteria

| Experiment | Evidence | Proposed gate |
| --- | --- | --- |
| Problem interviews | Twelve firms and recent artifacts/time estimates, including incumbent-tool use | At least five show the same recurring job and nominate a real reviewer/buyer |
| Template feasibility | One candidate template family, samples from three firms; originals preserved | Required structure and output format work without changing their process |
| Historical replay | Three authorised historical cases from each of five partners | World meets mandatory facts/format and materially reduces preparation plus review effort |
| Usability | Five representative users; first use and two repeat jobs | At least four operate independently; all distinguish save, review and send |
| Paid pilot | Four weeks per firm after release gates | At least three of five pay to continue; failures and nonbuyers included |
| Repeat retention | Continued observation after the pilot | At least three paying firms use the supported job for eight weeks without repeated founder rescue |

Do not interpret these small-cohort thresholds as proof of market size. They are investment gates. Interview praise, free signups, a successful demo and payment contingent on unlimited bespoke development are weaker evidence than independent repeated use and renewal.

If the job fails, identify the cause: wrong customer, low frequency, poor file fit, inadequate quality, low trust or unaffordable onboarding. Revisit that hypothesis explicitly. Do not answer failure by adding unrelated integrations.

## 11 Development sequence and release gates

Milestones 1–3 remain completed local engineering stages. The following sequence extends them rather than restarting or renaming unfinished work. Discovery runs alongside engineering preparation; paid calls, customer data, hosting and outreach require their own authority.

| Stage | Work and accountable role | Exit evidence |
| --- | --- | --- |
| D0 Validate the first job | Founder recruits; PM documents baseline; Designer observes; Technical checks artifact feasibility | Named job/buyer, supported artifact contract, five willing partners, prioritised uncertainties |
| M4 Bounded live assistant | Engineering adds approved gateway/provider, streaming, context/source handling, question lifecycle, cumulative budgets and redacted traces; QA independently checks | Same-job end-to-end evaluation, permissions/cost tests, no critical failures, truthful recovery UI |
| M5 Company template and procedure | Engineering preserves one real template family, revision/export, deterministic checks and exact acceptance; design validates repeat use | Three jobs per partner; required content/format intact; measurable time saving; reviewer grants if needed |
| M6 Closed production pilot | Engineering/operations implement secure hosting/auth/recovery, backup restoration, data lifecycle, quotas and incident process; founder agrees terms/support | Security matrix, restore/rollback/load drills and customer-specific data/format checks pass before real use |
| C1 Paid repeatability | Founder/PM validate price, onboarding, renewal and support burden; engineering implements reliable billing/entitlements | Collected payments, sustained use, accepted-job economics and manageable support, not merely invoices issued |
| C2 Controlled expansion | Add adjacent work or one demanded connector; preserve existing gates | Existing cohort retains quality/value; new scope has its own evidence and tests |

M4 and M5 can overlap after the artifact contract is clear. Production hardening can proceed in parallel but is not waived to get a pilot out. Manual invoicing of World's own pilot fee can precede a full subscription billing integration; explicit usage/entitlement controls still apply. This does not mean building customer invoicing software.

### Next build packet

1. Capture a fixture pack: supported original template, representative inputs, expected fields, prohibited inventions, required output and reviewer rules. Synthetic material can prepare the tests; real examples must later validate fit.
2. Specify the provider route and data-processing boundary, then implement it behind the current adapter with external calls disabled by default. Preserve offline regression tests.
3. Add one real-model path only when the founder supplies secure credentials and an explicit cumulative evaluation allowance. No new subscription is needed for documentation or offline development.
4. Test normal chat, vague intent, selected template, revision, cancellation, stale review and permissions through the existing UI. Compare like-for-like; report every attempt, total tokens, elapsed time and costs.
5. Demonstrate a usable exported artifact from the supported template. If the job needs separate manager review, implement a narrow artifact/action grant before claiming that journey works.

### Capacity and estimates

Technical planning ranges, not commitments: discovery/artifact contract 2–3 weeks; bounded AI/artifact slice roughly 4–6 engineering weeks; closed-production-pilot work another 6–10 weeks; paid-service operating/billing improvements another 6–10 weeks. Some work overlaps. An indicative total is 4–7 months assuming two experienced engineers, founder product/customer ownership, approximately half-time design and half-time QA/security/operations, one format family and no regulated workflow. This staffing is not established or funded. One engineer, complex Word fidelity or slow customer access can extend it materially. Re-estimate after the first artifact samples; do not infer delivery speed from available Codex usage.

Use short vertical deliveries with independent review. Keep one primary customer-outcome task in progress, plus necessary reliability work. Each task has a user problem, acceptance criteria, evidence and a defined stop. A backlog is not permission to implement everything in it.

## 12 Measurement and testing

### Outcome and business scorecard

The main outcome is **accepted company jobs completed with less total human effort**. Count accepted outputs actually used for the intended work, not chats, model calls, agents or generated pages.

| Measure | Definition | Proposed first target |
| --- | --- | --- |
| Task success | Jobs meeting every mandatory content/format requirement without critical error, divided by all attempted eligible jobs | At least 90% on the frozen evaluation set; every failure reported |
| Critical failures | Unauthorised disclosure/effect, wrong commercial commitment, fabricated essential fact or hidden missing requirement | Zero in release tests; any observed case blocks affected release scope |
| Net human effort | Preparation + prompting + corrections + review + apportioned recurring setup/support | Median at least 30% lower than current practice, quality no worse |
| First useful result | Time from ready inputs to a saved, usable draft; setup measured separately | Initially aim for p95 under two minutes on the bounded job; validate, then set honest product expectations |
| Interaction responsiveness | Acknowledgement/status after submit | Aim under two seconds; visible progress/cancel rather than a silent wait |
| Avoidable clarification | Repeated known facts or questions unnecessary for the next sound decision | Zero repeated known-fact questions in evaluation; report counts per job |
| Repeat adoption | Paying firms using eligible jobs without founder prompting | At least three firms continue for eight weeks |
| Contribution margin | Revenue less direct provider, infrastructure, payment and delivery-support cost | At least 65% in repeat pilot operation; aim at least 75% as onboarding/support mature |
| Cost per accepted job | All attributable attempted-job costs, including failed work, divided by accepted jobs | Establish baseline before fixing a price/allowance; reduce only without quality loss |

Targets are not current measured results. Safety/authority failures cannot be averaged away by high overall accuracy. A small set with zero failures does not establish a zero real-world failure probability.

### Evaluation design

Freeze at least 30 representative cases across the chosen job, including at least ten unseen holdout cases. Keep case provenance, model/version/settings, template/policy versions, expected mandatory facts and scoring rules. Use authorised/anonymised customer examples when available, with synthetic edge cases for permissions and failure handling.

Compare three routes where access is available: current manual method; the customer's preferred general assistant plus existing tools; World. Give each equivalent authorised inputs, comparable time/support and the same final-output rubric. Use blind artifact review where possible and track correction time. Repeat stochastic cases to expose variability, report distributions and sample sizes, and keep failures in the denominator. Do not advertise broad “Codex parity” from one model, one prompt or scripted responses.

Record correctness, completeness, grounding, required-format fidelity, appropriate questions, total elapsed time excluding separately reported human wait, p50/p95 latency, input/cached/output tokens, all model/tool attempts, costs and review minutes. Model graders are supplementary; their cost and errors count too. Historical percentages from old World are not the new baseline.

### Security and reliability release matrix

| Boundary | Required proof before relevant release |
| --- | --- |
| World and private data | Cross-World/private guessed-ID tests on APIs, search, attachments, exports, traces and native snapshots; admin cannot bypass private semantics |
| Authority changes | Concurrent membership/session revocation during retrieval, writes, approval and recovery; no later effects under stale authority |
| Approval | Payload/template/destination change, replay, duplicate decisions, cancellation and expiry; reapproval required where relevant |
| Untrusted content | Harmless synthetic instruction-in-source cases cannot grant access, alter destinations or reveal synthetic secrets |
| Recovery | Process termination at persistence/effect boundaries; receipts survive; duplicate operations do not repeat effects; unknown outcomes stay visible |
| Documents | Unsupported formats, oversized/hostile files, parser failures, malicious links/macros and safe rendering; no silent content loss |
| Operations | Restore all data domains into isolation, rehearse migrations/rollback and rotate test credentials; alerts reach an operator |
| Costs and abuse | Concurrent quota reservation, cancellation, timeouts, fallback chains, duplicate billing events and hard stop switches |

Testing stays within provider terms: owned/local environments, synthetic identities/data, no live theft/exfiltration attempts, no unauthorised targets or restricted payload generation. Prefer deterministic permission tests and benign markers. No safety test excuses exceeding an approved spend cap. A new live test requires a defined scope and cumulative allowance.

## 13 Pricing and unit economics

### Recommended pricing experiment

Test one understandable company plan before building a tier matrix. **S$299 per company per month** is the lead hypothesis, not an approved selling price. It could cover one company World, up to five users including reviewers, one supported procedure/template family, and a **S$30 monthly gateway-inclusive AI usage allowance** with a hard stop by default. Users see money/usage and remaining allowance; internal token calculations need not dominate the UI. Do not promise a fixed number of successful jobs until costs and failure rates are measured.

Compare willingness to pay at S$149, S$299 and S$499 using a consistent scope, actual output and the buyer's budget. Avoid treating answers to hypothetical price questions as revenue evidence. Do not take payment or publish offers under this report's authority.

Proposed four-week design-partner offer: S$399 for one supported template, defined setup/review sessions, five users and capped usage, with deliverables and failure/refund terms agreed in writing. Test a S$600 one-time setup fee for later customers only when real mapping/configuration work is necessary and clearly explained. Waive/reduce it when setup is genuinely self-service. No annual lock-in until repeat value and retention are established. No unlimited AI or unlimited customisation.

All World figures here are SGD before applicable taxes. Billing, entitlements, taxes and refunds need implementation/operating decisions before public sales. Extra usage must require an owner-approved budget or top-up; no silent auto-overage. Personal Worlds must not silently charge a company's plan. Additional Worlds, enterprise terms and extra seats are deferred pricing decisions.

### Customer value test

Use the customer's own active hours and loaded labour cost. If eight monthly jobs each save 45 minutes and time is valued at an assumed S$60/hour, the capacity value is only S$360/month. That is weak support for S$299, particularly after setup. If 15 net hours are released, the same assumption gives S$900/month, about three times the subscription. Neither is cash savings unless the company can use that capacity, avoid overtime or reduce a real expense. Do not count speculative revenue uplift or a removed employee salary.

Qualify economic value, not just job count. If valuable jobs are too infrequent, lower the supported scope/price or reject that cohort; do not subsidise bespoke work indefinitely to preserve a SaaS label.

### Monthly delivery scenarios

Illustrative assumptions at S$299/month; these are not supplier quotes or actual World usage. Model cost includes gateway/FX allocation. Hosting/storage is per-customer allocation. Support uses an assumed S$60/hour. Payment/refund allowance is rounded S$9. Failed runs and provider retries belong in model cost. Engineering and acquisition are excluded here and considered separately.

| Cost or result | Low support | Base | High support |
| --- | ---: | ---: | ---: |
| Model and tool usage | S$10 | S$25 | S$30 |
| Hosting and storage allocation | S$15 | S$25 | S$40 |
| Recurring human support | S$15 for 15 min | S$45 for 45 min | S$120 for 2 h |
| Payment/refund allowance | S$9 | S$9 | S$9 |
| Total direct monthly cost | S$49 | S$104 | S$199 |
| Contribution per customer | S$250 | S$195 | S$100 |
| Contribution margin | 83.6% | 65.2% | 33.4% |

The high-support case can fail commercially even with a working compute cap. Support and onboarding are therefore product requirements, not merely post-launch staffing problems. Do not silently reduce model quality to rescue margin. Measure more efficient context, better templates and lower correction effort first.

For illustration, S$10,000 monthly fixed operating cost would require 40, 52 or 100 retained customers under these three contribution cases, respectively. Define fixed costs without double-counting support labour already allocated above. This arithmetic is a planning sensitivity, not a funding estimate or forecast.

Illustrative acquisition: ten founder sales hours at S$60 plus S$200 outreach/travel allocation equals S$800 fully loaded acquisition cost. At S$195 recurring contribution, payback is about 4.1 months before churn and other costs. Six setup hours at S$60 plus S$20 allocation costs S$380; a S$600 setup fee leaves S$220 contribution, but setup revenue is not recurring revenue. Track founder time even when no salary is drawn.

### Model cost accounting

Per-job model cost equals the sum over **all** calls of input, cached-input and output quantities multiplied by the applicable dated rates, plus gateway/auxiliary tool charges. Add parsing/OCR where used. Convert billed currency using actual settlement rates and fees. A budget hold is not a settled charge, and unknown usage is not zero. Keep job, customer, provider and invoice ledgers reconcilable. Avoid applying a credit-purchase fee twice.

## 14 Market sizing and commercial viability

There is no defensible measured market share or narrowly qualified addressable-market estimate yet. National SME totals include many businesses with no need for this job. Do not multiply all SMEs by a subscription price and call it reachable revenue.

Build a named-account list by sector, employee band, recurring job, format fit, buyer access and tool environment. Record qualified/disqualified counts and reasons. The first market is the set of businesses the founder can actually reach, onboard and support.

An illustrative funnel is 100 named firms → 40 qualified → 20 discovery/demo meetings → eight pilots → four retained customers. All conversion rates are hypotheses. At S$299, four customers yield S$1,196 monthly recurring revenue, not proof of a scalable company. Measure sales-cycle duration and time spent at each stage.

| Retained customers at S$299/month | Monthly recurring revenue | Annualised recurring revenue |
| --- | ---: | ---: |
| 10 | S$2,990 | S$35,880 |
| 30 | S$8,970 | S$107,640 |
| 100 | S$29,900 | S$358,800 |

Setup fees, taxes, churn, discounts and usage top-ups are excluded. These are scenarios, not forecasts. They show why a handful of happy pilots is useful learning but not enough to fund a large platform team. Before raising or committing substantial funds, build a monthly cash plan with actual staffing, cloud, legal/security, sales, support and contingency costs; set a founder-approved runway and investment ceiling.

## 15 Marketing and getting World into customer hands

### Initial distribution

Use founder-led introductions and a tightly qualified account list. Seek businesses with the selected repeated job, not everyone interested in AI. Relevant professional communities and complementary IT/process advisers can provide introductions, subject to their actual interest and terms; no partnerships are assumed.

The first demonstration should show a prospect's authorised template or a clearly labelled synthetic equivalent, the original inputs, draft, one revision, missing-fact handling and usable output. Include an interruption or exception. Demonstrate reduced work, not a model picker or a technical architecture diagram.

Do not begin with broad paid ads, an integration marketplace or a large free tier. They attract heterogeneous needs before onboarding, retention and support economics are understood. Once the same job succeeds repeatedly, publish customer-approved case studies showing baseline time, review effort, limitations and price. Never use customer names, documents or testimonials without permission.

### Acquisition and onboarding journey

| Stage | Customer experience | Evidence or asset |
| --- | --- | --- |
| Discover | Clear job-specific problem and outcome, supported formats, honest example | One landing page and short demonstration; no unverified savings claims |
| Qualify | Brief review of their recurring work, format, reviewer, data restrictions and budget | Qualification checklist and rejection criteria |
| Evaluate | Try an authorised sample against their existing method/tool | Comparison worksheet, required-field rubric and security summary |
| Buy pilot | Fixed scope, fee, limits, support, data responsibilities and exit terms | Pilot agreement and named sponsor |
| Activate | Company World, users, one template and sources, first successful job | Activation event is a usable reviewed output, not signup |
| Repeat | Inputs and review without recurring founder setup | Weekly usage/effort/error evidence |
| Renew | Buyer sees realised value, cost and remaining limitations | Paid renewal; export and cancellation remain understandable |

Onboarding can be assisted initially, but label that service and measure it. If every firm needs bespoke code, either narrow the job or acknowledge a services business; do not conceal labour in supposedly automated outcomes.

### Launch materials and promotion gates

Before external pilot: product demonstration, supported-format checklist, getting-started page, pricing/usage explanation, security/data-flow summary, processor list, pilot terms, support contact, known limitations and export/offboarding instructions. Before public launch: billing/cancellation/refund flow, status/incident process, accessible marketing pages, permissioned proof points and a support rota.

Pricing experiments, customer recruitment, publication, ads and outbound messages require explicit founder execution authority. This report prepares them; none has been sent or launched.

Use conversion to usable output, repeat paid usage and support effort as channel metrics. Traffic, free accounts and demo compliments are diagnostic only. Test one acquisition channel at a time with a cap and a stopping rule. Referrals become credible after successful use; paid acquisition comes after retention and contribution economics.

## 16 Production and postlaunch operations

### Before real company data

Decide host/domain/region, approved model processors, database/storage locations, secret custody, registration/invitation/recovery policy, operator access and support ownership. Add TLS, production origins, rate/abuse limits, upload controls, encrypted backups and restore verification. Distinguish customer-visible privacy from any exceptional operator access; require audited, time-bounded support access rather than assuming administrators can read everything.

Create a data inventory covering originals, extracted text, embeddings if introduced, chat, drafts, policy versions, workflow snapshots, logs and backups. Define access, processing purposes, retention, export, deletion and backup expiry for each. Avoid indefinite retention by accident. Company author departure and stewardship require an explicit approved policy without exposing personal/private content.

PDPC's management-programme guide supports assigning accountable ownership, risk assessment, operational policies and periodic review; it explicitly does not make following the guide equivalent to legal compliance. Obtain qualified review of the actual contracts, processing, transfer and notification obligations before commercial rollout. [PDPC data protection management guide](https://files.app.optical.gov.sg/pdpc/production/assets/2091f793-09d2-4f30-b102-d21c94af072d.pdf). Do not advertise PDPA compliance, certification or Singapore-only processing merely because controls have been coded.

### Operating responsibilities

| Area | Pilot requirement | After paid launch |
| --- | --- | --- |
| Support | Named operator, business hours and clear emergency route; disclose coverage limits | Track recurring issues, response time and support minutes/customer |
| Incidents | Stop affected actions/route, preserve evidence, assess customer impact, communicate facts | Post-incident correction and regression test; legal notification process reviewed |
| Availability | Published supported hours and capacity; load tests with expected pilot workload | Set a measured service objective; no unsupported contractual uptime promise |
| Backup and recovery | Proposed recovery point <=24 h and recovery time <=8 h for initial pilot, rehearsed and agreed | Tighten when data value and customer requirements justify cost; verify recovery regularly |
| Releases | Staging, versioned migrations, independent checks, rollback and feature disable controls | Canary cohort, changelog and model/template regression gates |
| Cost | Daily anomaly review during pilot, per-job/company ceilings and owner-visible usage | Billing reconciliation, alerts, exception/refund handling and margin review |
| Data exit | Export and deletion request path proven before onboarding | Track requests and propagation to derived stores/backups under documented policy |

RPO/RTO figures are proposed service design targets, not current backup guarantees. The local milestone has no automated production backup service. Do not sell 24/7 support without staff to provide it.

Weekly: review failed/abandoned jobs, correction effort, cost outliers, user confusion and open incidents. Monthly: cohort retention, contribution margin, acquisition payback, support burden, data lifecycle and dependency/model changes. Quarterly or after material change: threat model, restoration exercise, access review, processor/licence review and strategic fit. These are operating plans, not automatically scheduled tasks.

## 17 Risk register and stop conditions

| Risk | Early signal | Response and owner |
| --- | --- | --- |
| No distinct value over existing AI | Comparable quality/effort with incumbent tool | PM/founder narrow or stop the job; do not add generic features |
| Template fidelity costs dominate | Users manually reconstruct outputs or require arbitrary file features | Technical/Designer narrow supported family or choose another job |
| Review burden erases preparation savings | Faster generation but more owner checking | Engineering/PM improve grounding/checks or reject autonomous scope |
| Low job frequency/value | Little repeat use after demo | Founder disqualifies cohort or changes hypothesis explicitly |
| Security or approval failure | Any unauthorised disclosure/effect or stale approval | Stop affected capability; independent investigation and regression gate |
| Human services hidden in SaaS | Repeated per-firm code and >2 support hours/month | Narrow/reprice product or deliberately choose a service model |
| Provider volatility/cost | Quality drift, unexpected billing, unavailable route | Pin/qualify routes, cap spend, safe stop and measured alternative |
| Connector becomes the product | Most effort spent on unrelated service APIs | Defer until a repeated paid-job blocker is established |
| Foundation overengineering | No new customer evidence while infrastructure expands | Founder/orchestrator return work to the next customer-value gate |
| Regulatory or procurement mismatch | Buyers require controls/contracts beyond budget | Disqualify early segment, partner appropriately or explicitly fund work |

At the end of discovery or two structured pilot iterations, continue only if demand, template fit, net time saving and payment evidence justify the next investment. The exact iteration budget must be set before starting. If three of five pilots will not pay to continue, investigate why rather than declare success based on engagement. A deliberate stop preserves capital and knowledge; it is not a reason to revive every old feature.

## 18 Change control and development discipline

This section implements the founder's instruction to prevent drift. It binds future planning to the approved purpose while allowing explicit, evidence-backed changes. It does not override later user instructions or make today's hypotheses immutable.

Before proposing or implementing a material feature, the orchestrator records:

1. Which customer/job and pillar it serves.
2. The observed problem or explicitly labelled assumption.
3. The smallest change and how success/failure will be measured.
4. What existing priority it displaces and its engineering/support/security cost.
5. Whether it changes an approved boundary or requires new spending, data access, deployment or external action.

Classify the idea as **in scope now**, **later candidate**, **experiment**, or **direction change**. In-scope fixes proceed under existing authority. Interesting but unproven additions go into a short parking lot. A direction change needs a clear founder decision, an update to this strategy and an explicit account of what stops; do not quietly keep both roadmaps alive.

If the founder suggests drift, respond plainly: “This would move us from [current job/pillar] to [new scope]. It would delay [gate] and introduce [cost/risk]. I recommend parking/testing it unless you deliberately want to change direction.” Do not reflexively agree and start building. Equally, do not use the document to reject a deliberate authorised pivot after the tradeoff is understood.

Every build packet links the relevant strategy section and includes outcome, scope/exclusions, acceptance tests, data/spend authority, review owner and migration/rollback implications. Product review chooses the problem; design review checks usability; technical review checks feasibility; independent QA checks the actual candidate. A passing test suite does not approve a new product direction.

### Document maintenance

This file is the single canonical rebuild strategy. Project instructions and product decisions link here rather than maintain competing copies. Run records carry implementation evidence; this report carries direction and gates. Old-version documents remain historical and cannot silently supersede the rebuild.

Update after a material customer finding, approved scope/pricing decision or release gate—not every casual idea. Keep date/version, decision, evidence, affected sections and founder authority in the decision register. Refresh supplier prices before procurement or customer offers. Review direction at each gate; no automatic reminder or background work is created by this plan.

## 19 Immediate decisions and next actions

| Needed from founder | Why | Timing |
| --- | --- | --- |
| Confirm or replace the proposed first research cohort/job | Product vision is approved; commercial focus remains a hypothesis | Before recruitment and vertical-specific implementation |
| Introductions to 5–12 suitable firms and permission for anonymised examples | Validate frequency, workflow, current alternatives and output fit | Discovery |
| One real company template and 2–3 representative completed examples | Define the supported artifact contract and scoring rubric | Before claiming format fidelity |
| Buyer/reviewer roles and private/company stewardship decisions | Prevent accidental broadening of access | Before team-review pilot |
| Approved provider/gateway, secure credentials and cumulative test budget | Enable real-model evaluation within authority | Before live calls; not needed for this report |
| Host/domain/region, data and email policies, operating owner | Move from local testing to a safe cloud pilot | Before deployment |
| Pilot terms, price experiment and acquisition authority | Test willingness to pay without accidental promises | Before outreach, collecting payment or publishing offers |

While the founder tests locally, useful zero-spend work is to catalogue usability findings, prepare the fixture/rubric and refine M4 interfaces against this strategy. There is no need to buy more models or add connectors to make this document useful. Those development tasks still need their own implementation scope; this report does not start them.

The next formal decision is small: agree the first customer job to validate and its artifact requirements, then scope M4/M5 around that evidence. Continue the assistant foundation; avoid another rewrite unless a concrete failure demonstrates that it is necessary.

## Decision and evidence register

| Item | Status at version 1.0 | Authority or evidence |
| --- | --- | --- |
| Assistant-first SME product, existing company processes/templates, standalone Worlds, light Knowledge UI, Mastra | Approved foundation | Founder decisions; current project instructions |
| Use this document as direction reference and flag drift | Approved governance | Current founder request |
| IT/MSP cohort and proposal/scope first job | Proposed discovery hypothesis | PM/Designer judgement; no interviews yet |
| S$299 recurring / S$399 pilot / S$600 setup | Proposed experiments | Competitor comparison and illustrative economics, not willingness-to-pay evidence |
| Quality, retention, latency, margin and recovery targets | Proposed gate criteria | Product/design/technical judgement; future measurement required |
| Milestones 1–3 local mechanics | Implemented and previously reviewed | [Current milestone record](runs/2026-10-29-milestone3-identity-postgres.md), app revision e8e92da |
| Live quality, commercial demand, production readiness or moat | Unproven | Must pass the stated evaluation/customer/operating gates |

### Source and interpretation notes

Official vendor pages establish advertised capabilities/prices, not comparative performance. Government/trade surveys establish their stated populations and findings, not World's demand or savings. All external links above were researched on 29 October 2026; verify mutable terms before action. Primary pages opened for the key evidence include MOM, SBF, MDDI, the official competitor pricing/help pages, Mastra, OpenRouter and PDPC's guide. The inaccessible newer IMDA primary release was excluded from numerical conclusions. No survey statistics were converted into a claimed market share.

Internal capability sources: [application README](../../../World-Rebuild/README.md), [milestone 3 setup and limits](../../../World-Rebuild/docs/milestone3.md), current server/runtime code inspected by Technical, and [milestone evidence](runs/2026-10-29-milestone3-identity-postgres.md). Earlier Mastra integration notes contain historical pre-milestone-3 storage descriptions; current runtime/README and verified milestone evidence take precedence. This report is a strategy, not a security certification, customer contract, funding approval or production release.
