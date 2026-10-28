<!-- studio {"id":"sme-opportunity-research:governed-agent-assessment","scope":"sme-opportunity-research","type":"research","status":"proposed"} -->
# Company governed AI project assessment

28 October 2026. Product Manager led the strategy and commercial assessment, with independent Designer and Technical Specialist research and discussion. Orchestrator checked primary competitor sources and challenged the recommendation as buyer and investor. This is desk research, not product testing or customer validation.

**Recommendation: investigate a narrow business outcome before committing to the broad platform. Technical feasibility is credible; client desirability and commercial viability remain unproven; no defensible moat is established.**

The project hypothesis is a hosted environment where a business delegates work under its own procedures and authority limits. Company context, outstanding obligations and decisions persist while individual agent executions can be temporary. The intended benefit is additional usable expertise and working capacity with less management effort. A ledger that merely records tasks would not fulfil that promise: the product must perform useful analysis, preparation or execution and improve completed work.

## What competitors already provide

These are capabilities described by their vendors. Their relative reliability and suitability for a particular SME have not been established through hands-on comparison. We selected Lindy as an additional mainstream comparator and Context as a strong governance comparator; neither is assumed to be the name the user forgot.

| Alternative | What it offers beyond a basic model conversation | What that means for this project |
| --- | --- | --- |
| Manus | Packaged cloud tasks and deliverables, shared project instructions/files/skills/connectors, recurring work and team administration. | Cloud execution and reusable company procedures already have a packaged alternative. |
| Macro | An integrated work environment: email, documents, conversations and tasks supply agents with company context; hosted agents and schedules continue work. Existing AI clients can connect through MCP. | Its value is the work environment and context around the model. We cannot claim shared company context or continuity is unique. |
| Lindy | Business tasks and routines, persistent workspace context, shared skills, integrations and built-in approval before actions with outside impact. | A configured incumbent is a serious baseline, including for nontechnical buyers. |
| Context | Resource-specific authorization, distinct read/write/approval rules, exact-action review and auditability. | Even enforceable governance is an existing competitive proposition. |
| Codex and ChatGPT | Persistent guidance, skills, memory and connected tools; an official example also covers shared scheduled workspace agents. | Direct use must be compared in its configured form, not treated as a chatbot without company customisation. |
| Claude | Company instructions, projects, connected tools and delegated work; Enterprise controls can restrict connector use. | We cannot claim businesses must buy us to customise agents or enforce any permission boundaries. |

[Manus business offering](https://www.manus.im/blog/manus-team-plan), [Macro Agents](https://macro.com/agents/), [Lindy product and pricing](https://www.lindy.ai/pricing), [Context authorization](https://www.context.ai/help/security-and-access/how-does-per-action-authorization-work) and [exact-action approvals](https://www.context.ai/product/approvals), [Codex customisation](https://learn.chatgpt.com/docs/customization/overview), [ChatGPT workspace agent example](https://developers.openai.com/cookbook/articles/chatgpt-agents-sales-meeting-prep), [Claude organisation instructions](https://support.claude.com/en/articles/14546867-set-organization-instructions), [Claude Enterprise roles and connector permissions](https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans).

The April 2026 ChatGPT example describes research-preview access for eligible Business, Enterprise and Edu workspaces. Current plan and rollout availability must be checked rather than assumed from that example. Claude Enterprise permission controls should likewise not be assumed available on every consumer plan.

Manus differentiates through a packaged path from assignment to output. Macro places the model inside the team’s existing work surface. Lindy packages business delegation and integrations. Context makes controlled access and execution central to its proposition. These are our interpretations of the documented offerings, not proof of customer preference or unique capabilities.

The comparison also includes an implementer configuring existing software. n8n already documents approval gates for agent tool calls and suspended workflows. A deterministic, stable process may be served economically by configured automation; an agent is useful where interpretation or judgment adds value. [n8n human oversight](https://blog.n8n.io/production-ai-playbook-human-oversight/)

### Pricing pressure

The live Macro page rendered Free US$0, Pro US$40 and Max US$200 per seat per month. Lindy rendered US$49.99 per active user per month for 5,000 credits with pooled team usage. Manus’s business announcement states a starting US$20 per paid seat monthly for 4,000 credits. Claude’s pricing page shows Team Standard US$20 per seat monthly with annual billing, or US$25 billed monthly, for teams of 2–150. These allowances are not comparable units of work, taxes and conditions differ, and prices require purchase-time confirmation. Search snippets conflicted with some live pages; the fetched pages take priority. [Macro pricing](https://macro.com/pricing/), [Lindy pricing](https://www.lindy.ai/pricing), [Manus announcement](https://www.manus.im/blog/manus-team-plan), [Claude pricing](https://claude.com/pricing)

This creates a demanding bar: a premium must buy a demonstrable improvement in an important job, not just another place to access the same models. It does not establish the price customers would pay us.

## Feasibility

**Technical verdict: conditional yes for bounded supported work; no credible promise of an unrestricted autonomous employee.**

We need not build a foundation model or invent a general harness. OpenAI documents a managed Codex harness handling sessions, orchestration, compaction and recovery; its Agents API currently supports US data residency only and does not support Zero Data Retention, including with self-hosted sandboxes. Anthropic documents Claude Managed Agents as a configurable hosted harness for long-running asynchronous work, currently labelled beta. These are implementation options to evaluate, not runtime selections or evidence that their controls meet every customer requirement. [OpenAI Agents API](https://developers.openai.com/api/docs/guides/agents-api/overview), [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview)

The application must still own the business contract:

- A company-scoped work ledger records jobs, source references, accepted facts, uncertainties, owners, dependencies, approvals and outcomes. Chat history supplements that state.
- Workers receive scoped context and propose typed operations. Credentials and authority are controlled outside the model; a shell, browser or alternative connector must not provide a route around the same restrictions.
- An action broker checks the current user, company, resource, operation and approval. Approval binds the actual recipient, content, attachments, amount and destination where relevant. Material edits invalidate it. Policy revocation must affect pending execution.
- Durable execution records preparation, waiting, execution, success, failure and uncertain outcomes. A lost external response must not become a blind resend or a false success claim. Reconcile against destination receipts or escalate visibly.
- Each finished action retains evidence of the source, applicable policy, authorised payload and external result. Derived memory must respect access, retention and deletion rules too.

This is a proposed architecture, not implemented functionality. Keeping canonical state and action contracts outside the model can reduce provider dependence, but changing providers still requires adapter work and renewed evaluation.

There are two distinct kinds of correctness. Code can check an amount, destination, identity and approved payload. It cannot reliably prove that an ambiguous email is a binding customer commitment or that a technically authorised recommendation is commercially sound. Malicious or misleading source material can corrupt a proposal even when the action gate works. Human judgment remains necessary for consequential ambiguity.

Integration feasibility is also job-specific. An available API, sufficient permission and reliable reconciliation path are prerequisites for unattended actions. No general runtime removes marketplace API restrictions or creates authority to operate personal messaging accounts.

Technical Specialist’s rough planning assumption was two experienced engineers and approximately 6–10 weeks for a tightly bounded pilot, with further months and operational/security work for broader production use. This is not an audited estimate, delivery promise or approved staffing plan.

## Desirability

**Design verdict: plausible for a recurring operational burden; weakly supported for a general company-agent environment.**

SBF’s 2026 manpower study surveyed 511 businesses from 1 July to 1 August, including 433 SMEs. In the SME breakdown, 67% cited rising manpower costs. The sample broadly reflects SBF membership, not every Singapore SME. This establishes a pressure worth investigating; it does not establish demand for this platform or that AI is the right remedy. [SBF methodology and SME breakdown](https://www.sbf.org.sg/docs/default-source/about-us/sbf-national-business-survey-2026-manpower-wages-supplement.pdf)

The founder’s Product Studio experience demonstrates a real desire for customised ways of working. It does not establish that ordinary owners want to write a harness. The application would have to turn existing work examples into proposed procedures, resolve consequential conflicts with an accountable owner and make boundaries understandable without technical configuration.

Designer recommends starting with one actual engagement or job. The operator sees what needs attention and who owns the next step. The approver sees the proposed action, its supporting evidence and the precise decision required. The owner sees cost, access and the net effect on workload. Tentative interpretations, disputed commitments and stale sources must remain distinguishable from accepted facts.

Autonomy should be explicitly granted for a narrow class of action and revocable immediately. More successful runs should not silently grant new authority. A system that repeatedly interrupts people or requires rereading every source may consume more attention than it saves.

### Candidate first jobs

The company environment remains the broader hypothesis. These are alternative ways to test it, not a combined roadmap or a selected market.

| Candidate | Work performed | Why it might be useful | What could defeat it |
| --- | --- | --- | --- |
| Your job-to-invoice example | Establish completed work, assemble evidence, flag missing acceptance, prepare the invoice and obtain approval. | Clear business consequence and observable completion; tests context, authority and recovery together. | Accounting/vertical software may already solve it; disputed completion or poor source records may be the real blocker. |
| PM and Designer’s client-delivery exception desk | Reconcile commitments and progress, identify missing inputs or likely delays, prepare a corrective action for approval and track its resolution. | Tests continuous follow-through across many parallel jobs with fewer financial permissions. | It may become another status dashboard, false alerts or a duplicate tracker. |

The proposed discovery cohort is a 10–50-person B2B service firm with repeat engagements, accessible digital records and a manager repeatedly chasing the work. That is a hypothesis, not an approved customer segment. Choose between candidates using actual frequency, consequence, access and dissatisfaction with existing tools. The watch-dealer example remains useful evidence to investigate, but unsupported listing APIs could obscure the core product test.

## Core product pillars

These are proposed acceptance commitments. They describe what must be true before we sell the promise; none is itself a moat.

1. **Company context and work survive the conversation.** Sources, accepted decisions, open obligations and owners persist and remain inspectable when an agent execution ends or changes.
2. **Authority is enforced at the action.** Company procedures guide preparation; supported external effects require current authority for what will actually happen.
3. **Work reaches a verified outcome or a clear exception.** The system performs useful work, preserves progress, exposes uncertainty and makes recovery someone’s responsibility.
4. **Quality and managerial attention are measured together.** Expertise must produce acceptable deliverables while reducing the combined cost of instruction, review, correction, setup and recovery.

The meaningful difference from direct assistant use would be proving these commitments for one business job with less effort and better economics. Existing products may already be sufficient. We must be willing to recommend them if comparison shows that.

## Viability

**PM verdict: unproven. The biggest risks are differentiation, recurring value, acquisition and support burden.**

Price against a measurable job, not a fictional employee salary. Start by testing a company subscription with a clear work allowance, usage visibility and limits. A separate setup charge may be appropriate when setup is genuinely valuable, but recurring bespoke consulting should not be hidden inside assumed software margins.

The following scenarios are hypothetical. Assume S$300 per account per month and S$35 per hour of usable capacity:

| Scenario | Gross hours avoided | Added review and rework | Capacity value | Value after subscription |
| --- | ---: | ---: | ---: | ---: |
| Weak | 10 | 8 | S$70 | −S$230 |
| Useful | 30 | 10 | S$700 | S$400 |
| Strong | 50 | 10 | S$1,400 | S$1,100 |

These figures are not observed savings or willingness to pay. Setup, policy maintenance and reconciliation also belong in the time measurement. Capacity is not cash saved unless it avoids expenditure or is productively redeployed.

At S$300 revenue, assumed S$40 compute plus S$60 support leaves S$200 monthly contribution, about 67%, before acquisition, development and overhead. A stress case of S$120 compute plus S$180 support leaves zero. These are sensitivity scenarios, not cost forecasts; infrastructure, third-party tools, payments and onboarding must be measured before a margin claim.

At the same hypothetical price, 20, 100 and 500 retained accounts imply S$72,000, S$360,000 and S$1.8 million annual recurring revenue. This is arithmetic, not a market-size or market-share forecast. No credible qualified customer denominator or attainable share is established. For illustration, S$1,200 acquisition cost with S$200 monthly contribution takes six months to recover, ignoring churn and cash timing.

An initial distribution hypothesis is a trusted industry operator or specialist already helping firms with the chosen job. Its access, sales cycle, commissions and implementation cost require validation. Grant-assisted adoption is not a substitute for renewal from business value. A Singapore beachhead can support discovery; it does not by itself establish a venture-scale market. Expansion would need repeated paid demand in adjacent customer groups without losing deployment economics.

## Potential moats

**No moat exists today.** Cloud hosting, model choice, personas, prompts, memory, approval cards and an integration list are copyable capabilities. A broad collection of them does not make the collection defensible.

| Potential advantage | How it could compound | Evidence required |
| --- | --- | --- |
| Reliable methods for a valuable job | Evaluations and recovery patterns improve from real exceptions; fewer failures per deployment. | Better completion and lower review/support effort than configured alternatives across customers. |
| Faster company onboarding | Reusable domain mappings turn ordinary records into reviewed working procedures with little custom work. | Falling setup time and cost for later customers without reduced correctness. |
| Trusted distribution | Specialists repeatedly bring qualified buyers and can deploy the product economically. | Repeat referrals, retention and acceptable acquisition economics, rather than assumed partnerships. |
| Useful operational history | Customer-approved decisions and outcomes make ongoing work more accurate and easier to supervise. | Measured within-customer improvement and voluntary retention with export available. |

Customer-specific switching costs are not automatically a market-wide moat. Customers own their records; confidentiality prevents assuming we can pool their data. Cross-company learning needs explicit rights and privacy-preserving design. More accumulated text can increase ambiguity rather than quality. Dependence created by preventing export would undermine trust.

A credible early differentiation might precede defensibility: consistently finish one important job with less owner attention. It becomes a stronger business only if deployment, reliability or acquisition improves in ways that competitors cannot immediately reproduce economically. Better models may help us, but also help incumbents and reduce our feature advantage.

## Evidence required before building broadly

PM proposes 8–12 artifact-led interviews. These counts and gates are decision rules, not statistical validation. Ask buyer, operator and approver about the most recent missed obligation or delayed invoice: what actually happened, frequency, evidence, consequences, current workarounds and alternatives already tried. Avoid leading with an AI-employee pitch.

Proposed gates for considering a bounded pilot:

- At least five independent firms demonstrate recurring costly work with usable evidence and an accountable procedure owner.
- At least three prefer a concretely priced test over a fair incumbent-configuration alternative. Stated enthusiasm alone does not pass.
- A pilot compares the same work against current practice and a competently configured direct assistant or suitable packaged product. Measure setup, quality, missed obligations, false alerts, review, corrections, recovery and full costs.
- Seek at least 30% lower total human attention with quality at least equal. Also compare directly against the best acceptable incumbent; merely beating a weak manual baseline is insufficient.
- Test no unauthorised effects in a finite control suite, changes after approval, revoked authority, duplicate events, concurrent edits, interrupted execution and uncertain external results. Passing cannot establish universal security or zero future failures.
- Require repeat paid use and at least two renewals at the test price before considering broader expansion. A small pilot cannot establish market size or a moat.

Stop or change direction if the strongest incumbent meets the same job economically; review consumes the benefit; source access is unavailable; the ledger needs duplicate manual updates; users need constant vendor intervention; or ongoing account costs consume revenue. Any future pilot, paid test or implementation needs its own authorised scope.

## Team conclusion and working name

**PM:** credible problem, crowded category, uncertain economics. **Designer:** sell a useful completed job with low supervision, not a configuration project. **Technical Specialist:** buy execution primitives and build only the necessary business contracts; enforcement does not guarantee correct judgment. **Orchestrator as investor:** fund a bounded learning exercise, not a broad platform build today. **Orchestrator as client:** consider a reversible, priced pilot for a recurring problem; buy after demonstrated net benefit over existing options.

Use **company governed AI workspace** as the descriptive category. PM suggested **Company Desk** as a working name; **World** could also remain provisional. No domain, trademark or name-availability check has been performed. The name should not decide the scope.

The next decision is which actual business job warrants a comparison. No new application code, deployment, provider tests, customer outreach or product-market commitment was made in this assessment. Both local reference folders and the empty MyWorld main remain untouched.
