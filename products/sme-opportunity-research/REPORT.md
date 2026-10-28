<!-- studio {"id":"sme-opportunity-research:report:2026-10-28","scope":"sme-opportunity-research","type":"research","status":"proposed"} -->
# Three Singapore SME bets — evidence and investment challenge

**Research cut-off: 28 October 2026. Decision: conduct focused interviews; do not commission a product build yet.**

This study began with SME problems, without using World's features, code or architecture to select opportunities. Product Manager and Designer researched independently, discussed their findings, and challenged the shortlist together. A Technical Specialist examined data access, reliability, integration costs and cheap validation routes. The Orchestrator checked sources and made the final buyer/investor judgments below.

The three bets are **distributor order-change coordination, subcontractor claim readiness, and F&B purchasing decisions**. They concern different economic outcomes: fulfil the agreed order, substantiate work for certification, and make a better input-cost decision. They are app hypotheses, not validated businesses. No customer interviews, product trials, competitor purchases or business outreach were performed. No model-provider test calls were made and World services were left untouched.

Independent review found no material correction: key sources, sample populations, competitor offers, units and arithmetic were checked. The reviewer did not independently reproduce the raw CSV hashes, BCA deduplication or every F&B row because its public-download access failed; those extractions were performed by the Orchestrator. [Evidence notes](EVIDENCE_NOTES.md) retain the source and access limitations.

## 1. What the evidence actually says

Singapore had approximately **369,500 SMEs in 2025** under SingStat's revenue-or-employment definition. That includes very different organisations; it is not our customer count. [SingStat enterprise dataset](https://data.gov.sg/datasets/d_f9c93c1ffcefe660272c101cd733711c/view)

The broad pressures are real, but software addresses only part of them:

| Pressure | Inspected evidence | What it does not prove |
| --- | --- | --- |
| Labour costs and capability | SBF's 2026 manpower study surveyed 511 businesses, including 433 SMEs, during 1 July–1 August; 67% of SME respondents cited rising manpower costs. The sample broadly reflects SBF membership. | That every small firm has an automation problem, or that software creates available workers. Sector subsamples can be tiny. [Full SBF report](https://www.sbf.org.sg/docs/default-source/about-us/sbf-national-business-survey-2026-manpower-wages-supplement.pdf?sfvrsn=6599a99c_1) |
| Demand, rent and cash pressure | SBF's 2025 annual study surveyed 553 businesses, 82% SMEs, from 29 September–17 October. Across all respondents, manpower cost, uncertain demand and rent were leading concerns. | These are mixed-business survey results, not representative estimates for a particular microbusiness segment. A rent or demand problem may have no useful software solution. [Annual survey](https://www.sbf.org.sg/docs/default-source/advocacy-policy/sbf_abs_2025ea2d87c8-9413-4db6-a82a-070319ac5e75.pdf?sfvrsn=a1d71a07_1) |
| Payment friction | Atradius's July 2026 Singapore report describes process/approval/invoicing-related delays as well as payment risk. | Its public page does not provide enough sampling detail for a representative SME prevalence claim. We use it as directional corroboration, not a TAM multiplier. [Atradius](https://atradius.sg/knowledge-and-research/reports/b2b-payment-practices-trends-in-singapore-2026) |
| Outlet operating economics | SIT's 4 March 2026 analysis, by a researcher involved in SGPC's study of 380 establishments, emphasises workflow and menu redesign alongside cost pressure. | An outlet study is not a survey specifically of independent 2–10-outlet owners, nor evidence they will buy another application. [SIT analysis](https://www.singaporetech.edu.sg/news/last-orders-why-are-so-many-singapore-eateries-shutting-down) |

**Evidence rules:** official statistics establish counts/definitions; regulations establish requirements; vendor documentation establishes advertised features/prices; selected customer stories establish reported experiences. None establishes our willingness to pay or competitive advantage. Repeated coverage of the same study is one evidence source. Journeys, proposed losses, prices, channels and validation thresholds below are explicitly hypotheses or our analysis. No invented customer quotations are used.

## 2. Screening and rejected directions

We examined distribution, construction, cleaning, F&B, retail and education administration, with a cross-sector invoicing/accounting check. Depth varied: the final three received detailed workflow and technical diligence; the others were screened for obvious competitive or causal weaknesses. This is not an exhaustive census of Singapore industries.

| Direction | Why it did not become a final bet |
| --- | --- |
| Generic F&B rostering | StaffAny advertises a free single-outlet plan for up to 25 staff; multi-outlet Growth is S$89/roster/month on annual billing or S$119 monthly. A new roster needs a consequential unmet outcome, not simpler scheduling alone. [StaffAny](https://www.staffany.com/pricing/) |
| Cleaning inspection/payment records | NEA's March 2026 OBC guide provides adaptable inspection, rectification and performance-linked payment examples, not a universal software mandate. CleanLog already advertises co-signed, evidence-linked scorecards at S$259/contract/month **in addition to** an Operations & Evidence plan. This is close competitive overlap and duplicates the external-acceptance risk of the construction bet. [NEA guide](https://www.nea.gov.sg/docs/default-source/itm/obc-guides/guide-on-specifications-for-outcome-based-cleaning-contracts-2026-3rd-edition.pdf), [CleanLog](https://cleanlog.com/obc-compliance) |
| Generic tuition-centre administration | Teachworks and Classcard already advertise scheduling, billing and management products. We have no verified owner evidence that a particular residual problem justifies switching. This was a light competitor screen, not a conclusion that education has no opportunities. [Teachworks](https://www.teachworks.com/pricing), [Classcard](https://www.classcardapp.com/pricing) |
| Generic retail inventory | The official May 2026 retail speech explicitly identifies choosing appropriate solutions as a challenge. That favours investigating adoption/process gaps before building another inventory system. We did not establish an unserved inventory job. [Official retail speech](https://www.meti.gov.sg/newsroom/speech-by-senior-minister-of-state-low-yen-ling-at-retail-reimagined---from-now-to-next/) |
| Generic InvoiceNow application | IRAS describes the phased requirements and available free packages. Competing on invoice generation or compliance alone has a strong buy/partner alternative. [IRAS](https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/gst-invoicenow-requirement) |
| Broad AI/automation workspace | No narrow buyer, specific economic outcome or reason to switch emerged from the evidence. Existing assets are not evidence of demand. We did not carry this direction into the shortlist. |

Cleaning was initially shortlisted by PM, then demoted after Designer found its close competitor. F&B cost decisions replaced it to diversify the research, **not because F&B was proven more commercially attractive**. This is an example of counterevidence changing the result.

## 3. Bet A — distributor order-change coordination

**Buyer hypothesis:** owner or operations head of a local recurring-order distributor, initially food/grocery suppliers, with an existing accounting/ERP system and a sales-administration team. Avoid firms whose orders are already structured and reliably synchronised.

**Job:** ensure that what the customer last agreed is what the warehouse picks, the driver delivers and accounts invoices, including amendments, substitutions and short fulfilment.

**Reconstructed current journey:** customer request → administrator interprets item/pack/customer price → checks availability → customer confirms → ERP order → warehouse picks → delivery → shortage/return/credit. The suspected failure is a change between those stages that leaves people using different versions. This is an inference to investigate, not an observed frequency claim.

**Evidence and direct counterevidence:** MEVO's 12 October 2026 Green-Tech Egg Industries case reports 120 recurring WhatsApp orders/day, earlier manual ERP entry, and customer-confirmed ordering integrated with AutoCount. It claims eight staff-hours/day saved. This is a named but vendor-selected success story, without independent controls. More importantly, it shows an existing provider already performs capture, interpretation, confirmation and ERP integration. It does not prove that our proposed post-confirmation gap remains. [MEVO case](https://www.mevo.com.sg/news/green-tech-egg-industries-pte-ltd-to-share-ai-whatsapp-order-automation-success-story-at-smes-go-digital-day-2026/), [MEVO B2B](https://www.mevo.com.sg/mevo-b2b/)

**App hypothesis:** an amendment/exception desk alongside the existing order system. An operator sees the original agreement, latest proposed change, acknowledgement, responsible person and fulfilment discrepancy. Unclear or conflicting changes remain unresolved until a person approves them. Ordinary orders stay in the existing workflow. A customer should not have to learn a new portal merely to acknowledge a change.

**Alternatives to beat:** current administrator and phone confirmation; shared spreadsheet/forms; ERP configuration; MEVO; supplier ordering platforms; additional clerical capacity. An incumbent's configuration may be the best solution. An advertised ERP connection is not proof that its contract allows our integration or that it handles this customer's custom fields.

**Commercial hypothesis:** test S$200–400/company/month, with explicit scope for one ERP format. At an illustrative 500 orders/month and three genuinely avoidable minutes/order, capacity released is 25 hours. At an assumed S$25/hour that is S$625/month of time value, not necessarily payroll cash saved. At a S$300 fee it is only about 2.1× the fee before onboarding and correction effort—already below our proposed 3× value gate. Higher volume or demonstrably recoverable error cost would be necessary. Do not transfer MEVO's selected customer's savings to ordinary distributors.

**Acquisition hypothesis:** one food-supply subvertical, introduced through ERP resellers, bookkeepers or supplier associations, with a real failed-order replay rather than a generic demo. No channel partnership or customer access is established. ERP partners could also become competitors or insist on revenue share.

**Possible defensibility:** reliable mappings and deeply adopted handoffs in one trade, with a low-support route to deployment. These are potential switching costs, not a moat today. Customer aliases/history are customer-controlled data; do not assume ownership or a right to train on them. No network effect or proprietary dataset has been demonstrated.

**Feasibility:** pilotable using authorised exports and manual comparison. A real operational product eventually needs timely order/fulfilment updates, stable line IDs and explicit source-of-truth rules. The expensive risks are duplicate/out-of-order changes, stale stock, units, customer prices and cancellation races. Initially exclude ERP writeback, automatic stock promises, bank feeds and unapproved messages.

**Decisive test:** reconstruct normal and changed orders from the same recent period using messages, ERP exports, pick/delivery records and credits. Then compare our manual exception list against the existing app/process on identical records. Kill if changes are rare, employees already resolve them cheaply, the customer refuses acknowledgement, or MEVO/ERP configuration fixes the issue at acceptable cost.

**Buyer verdict:** I would first investigate the existing supplier/ERP route. I would consider a bounded pilot only after a specific recurring missed change is demonstrated. **Investor verdict:** no investment today; strongest interview priority of the three because there is concrete named operational evidence, but no verified competitive gap.

## 4. Bet B — specialist subcontractor claim readiness

**Buyer hypothesis:** owner/commercial manager of a specialist subcontractor with several concurrent projects and internal QS/accounts support. Start with one trade and main-contractor submission convention, rather than every construction company.

**Job:** connect an instruction/variation and measured work to the exact claim line and supporting record the receiving QS needs. Keep proposed, submitted, acknowledged, certified and paid amounts distinct.

**Reconstructed journey:** contract/BOQ → site instruction or variation → work/measurement → assemble monthly claim → receiver queries/reduces certificate → correct or dispute → payment/retention. Documentary gaps are one possible failure; disputed entitlement, payer insolvency and bargaining power are different causes.

**Evidence:** BCA's August 2026 guidance describes progress claims under written contracts, responses and adjudication. It establishes a real process, not how often missing records cause loss. Software cannot guarantee certification or payment. [BCA guidance](https://www1.bca.gov.sg/growth-and-transformation/procurement/procurement-and-legal-frameworks/security-of-payment-act/)

**Strong counterevidence:** SitePlus already advertises delivery-order/invoice/site-record capture, missing-evidence checks and claim-ready packs, with published S$69/199/399 monthly tiers and processing limits. Its page also shows annual totals; exact billing terms need checking. Episcript advertises variations, claim preparation, certificates and retention. Competitor availability is clear; actual product quality and customer penetration were not tested. [SitePlus](https://siteplus.ai/), [Episcript construction offering](https://www.episcript.com/solutions/construction-management-software)

**App hypothesis:** a claim-line readiness list in the recipient's required workbook/export format. It identifies missing authority, quantity, rate, supporting evidence and prior-certificate reconciliation. A foreman makes a minimal record; a commercial reviewer corrects and approves it. It does not assess legal entitlement or automatically serve claims.

**Alternatives:** Excel/email and shared folders; internal or outsourced QS; claims consultants; SitePlus; Episcript and established construction suites. A skilled human may remain the right solution when every claim requires judgment.

**Commercial hypothesis:** S$100–250/team/month plus honestly scoped setup if useful. Illustratively, three projects × eight reconstruction hours/month × assumed S$35/hour = S$840/month of time value before extra capture/review. Bringing S$100,000 forward by 30 days at an assumed 8% annual funding rate is about **S$658 financing value once**; it is not S$100,000 of new value. Avoid adding time, recovered money and financing benefits when they represent the same underlying event.

**Acquisition hypothesis:** one trade association, independent QS or accountant with several similar subcontractor clients; show an anonymised claim reconstruction. These are proposed channels, not secured access. A QS channel may want a service fee and may prefer incumbent software.

**Defensibility limits:** trade-specific measurement conventions, dependable exports and accepted receiver workflows might support retention. Templates, audit trails and local terminology are copyable. No exclusive channel, superior acceptance rate or proprietary rights exist today.

**Feasibility:** a traceable register and checklist is technically feasible without APIs. Accuracy depends on real contracts and a qualified human's interpretation. Replay revised quantities, unapproved instructions, rejected variations, retention and prior certificates. Preserve original evidence, corrections, uploader identity and versions; a timestamp/photo alone does not prove truth. Do not automate contractual deadlines or legal submissions in an initial product.

**Decisive test:** inspect three delayed/reduced claims plus a successful comparison with owner and QS. Categorise the actual cause. Show a receiving QS the proposed packet in their normal format. Kill if evidence was already complete, more evidence would not affect certification, an incumbent solves it, or recurring expert reconstruction prevents low-price software economics.

**Buyer verdict:** compare SitePlus and a QS-assisted process before buying us. Pilot only a material trade-specific gap accepted by the receiving QS. **Investor verdict:** no investment today; strong need to distinguish documentary friction from a financing/legal/power problem.

## 5. Bet C — F&B purchasing decision follow-through

**Buyer hypothesis:** owner/group operations head of an independent 2–10-outlet F&B group. Chef/procurement, accounts and outlet managers participate. Micro hawkers and large chains are not the initial target.

**Job:** when an important input changes price/specification, choose a feasible response—negotiate, seek credit, substitute, change recipe/portion, reprice or do nothing—and verify whether the decision helped.

**Reconstructed journey:** quote/invoice changes → normalise pack/price → chef checks quality/yield → owner decides → purchasing/recipe/menu/outlet instructions change → subsequent delivery/sales/stock evidence checks the outcome. A missed alert is only one possible failure. Often the owner already knows and cannot act without damaging quality or demand.

**Evidence boundary:** the SIT/SGPC work supports investigating operating-model and cost decisions. It does not isolate software demand for this target group. Menu simplification, central preparation, supplier negotiation or training could be more effective than another app. The 380-establishment study is not an independent replication of reports quoting it. [SIT analysis](https://www.singaporetech.edu.sg/news/last-orders-why-are-so-many-singapore-eateries-shutting-down)

**Direct competition:** Foodrazor lists $59/$99/$149 per outlet/month, with currency unspecified on the inspected page, and already advertises price notifications, inventory, recipes and sales inputs; assisted setup/support are available. Nomni's May 2026 documentation describes latest-price recipe costing, subrecipes, units/yield and thresholds. Neither a price alert nor recipe costing is an unmet category. Pricing/allowances need confirmation: Foodrazor's pricing page describes a Plus allowance in pages while its billing help uses invoices. [Foodrazor pricing](https://foodrazor.com/pricing), [billing help](https://help.foodrazor.com/en/articles/17239512-manage-your-billing), [Nomni recipes](https://support.zeemart.co/en/articles/9418004-using-the-recipes-feature)

**App hypothesis:** a small, evidence-linked decision record comparing viable alternatives, including no action, with chef verification, owner approval, outlet follow-through and a later outcome check. It is worthwhile only if current products/processes fail that step materially. 'Closing the loop' is not sufficient differentiation by itself.

**Alternatives:** owner/chef judgment and supplier calls; spreadsheets; bookkeeper/cost consultant; Foodrazor/Nomni configuration; simpler menus, prep outsourcing or central kitchens. A supplier comparison is meaningless without equivalent grade, usable yield, MOQ, delivery charges, availability and terms.

**Commercial hypothesis:** test S$150–250/group/month for a bounded job. An illustrative three outlets spending S$25,000/month each on food implies S$75,000 purchasing spend. A **realised** 1% saving would be S$750/month; neither spend nor achievable saving is established. If everyone receives labour-intensive recipe cleanup or weekly consulting, this is a service whose price must reflect that work.

**Acquisition hypothesis:** independent F&B accountants, chef/operator networks and procurement advisers; use a real ingredient decision rather than promising general profitability. Relationships and data-sharing rights remain unproven. Paid subsidies would not establish unsubsidised demand.

**Defensibility limits:** credible outcome measurement and repeatable decision execution could retain users. Ingredient catalogues and dashboards are copyable; incumbent support teams may already do this. Any aggregated supplier benchmark needs lawful rights, comparable specifications and protection of confidential prices—none is available today.

**Feasibility:** invoices support purchase-price checks without POS integration. They do not establish consumption, waste or realised dish margin. Those require appropriate stock/transfer/credit data and, for dish analysis, yields, portions, sales mix, discounts and commissions. Lower purchasing can simply mean running down stock. Pilot five high-spend ingredients at one outlet with manually verified invoices, accepted receipts and relevant yield checks; no autonomous purchasing or repricing.

**Decisive test:** reconstruct three material ingredient changes, including a deliberate no-action case. Compare proposed decisions against the owner's existing tool/process using the same records and review time. Verify realised credits or quality-accepted savings on later purchases, net of extra freight/spoilage/effort. Kill if information was already timely, no better action was feasible, existing software suffices, or maintaining inputs costs more than benefit.

**Buyer verdict:** try existing cost-management tools or a bounded process review first. **Investor verdict:** no investment today; lowest confidence of the three in an unmet product gap, but a meaningfully different interview track.

## 6. Market and pricing reality

We downloaded official public CSVs and checked their sections/units. Aggregate extraction and source hashes are retained in [the evidence file](evidence/public-sector-counts-2026-10-28.json); no register contact records were retained.

| Bet | Verified broader reference population | Filters still unverified before a serviceable market can be claimed |
| --- | --- | --- |
| Distribution | 2024: 701 fruit/vegetable, 945 meat/poultry/egg/seafood, 454 general-grocery establishments = **2,100 establishments**. Total wholesale is much broader at 57,715. | Deduplicate establishments to companies; local recurring-order operation; target size; suitable existing system; material amendment loss; unsolved by current vendor; reachable buyer. |
| Construction | January 2026 BCA snapshot: **24,014 registration rows, 15,864 distinct nonblank UENs; 5,952 UENs with at least one ME workhead**. This is an extraction, not an official SME estimate. | Current operation/expiry, actual specialist-subcontractor work, company size, internally prepared multi-project claims, documentary problem, receiver acceptance, competitor gap. |
| F&B | 2024: **8,325 restaurant establishments + 4,707 cafes/food-and-drinks kiosks = 13,032 establishments**. | Group common ownership; independent 2–10-outlet operators; decision authority; comparable records; meaningful actionable changes; willingness to switch/pay. Outlets are not subscriptions. |

[SingStat services dataset and definitions](https://data.gov.sg/datasets/d_38d62de582eb7ee2c58d1bba4cd4132d/view), [BCA published register](https://data.gov.sg/datasets/d_dcda79be4aded5f9e769b8e23ff69b47/view). The services series excludes own-account workers and uses SSIC2025 classifications. BCA's snapshot is historical and includes other registry categories; neither table establishes a currently addressable market. These are alternative populations, not counts to add together.

**TAM/SAM/SOM verdict:** a defensible paid market size is currently **unknown**. Applying an invented '10% of SMEs' would manufacture precision. The correct next calculation is eligible unique buyers × observed annual contract value; obtainable market additionally needs a repeatable acquisition funnel and retention. No reliable public vendor market-share figures were established. Advertised features and customer counts cannot be converted into Singapore share without a common buyer denominator.

Reverse revenue arithmetic helps expose the hurdle without pretending to forecast:

| Illustrative price, not validated | 100 paying companies/groups | 500 paying companies/groups |
| --- | ---: | ---: |
| Distribution S$300/month | S$360,000 ARR | S$1.80m ARR |
| Construction S$175/month | S$210,000 ARR | S$1.05m ARR |
| F&B S$200/month | S$240,000 ARR | S$1.20m ARR |

At S$200/month, S$10m ARR requires about **4,167 paying buyers**. That is a substantial hurdle for these filtered Singapore niches. Regional expansion would introduce new systems, channels and operating conventions; it is not included as automatic upside. A profitable focused software business could still be worthwhile, but the evidence does not support a venture-scale platform thesis today.

**Proposed economics gate:** at S$200/month and a target 70% recurring gross margin, all recurring delivery costs must fit within S$60/customer/month. That includes support, data correction, third-party integrations, hosting and any model use. At that margin, S$840 of acquisition/onboarding expenditure takes six months of contribution to repay, before fixed engineering/admin. These are decision assumptions, not measured costs or universal SaaS standards. Track setup separately; do not hide unpaid founder labour or recurring consultancy.

## 7. Technical boundaries and cheapest validation

All three can be tested with owner-authorised records, spreadsheets/forms and human review. None requires selecting an agent runtime or building a platform first. Technical feasibility is conditional on data rights and correct exception handling, not simply the availability of a database and UI.

- Start read-only, with explicit record freshness, corrections, traceability, permissions and recoverable exports. Do not assume permission to access employee/customer details or site photos.
- Actual bank/ERP/API access, contracts and pricing need verification per customer. Xero's 2026 developer model illustrates that integrations have connection/data tiers, rather than being costless at scale. [Xero developer terms/pricing](https://developer.xero.com/pricing)
- WhatsApp Business messaging requires appropriate permissions and rules; approved templates apply to business-initiated messages and outside the customer-service window. Do not assume access to an owner's personal/group archive. Authorised manual forwarding is a way to test value, not a promise of automatic integration. [WhatsApp Business policy, updated 23 September 2026](https://whatsappbusiness.com/policy/)
- Any future pilot needs a scoped data map, retention/deletion rules, tenant isolation and customer processing authority. This is a feasibility requirement, not a claim that a prototype is legally compliant.
- Compare the proposed workflow against configuring an incumbent **before** building. Measure net effort after capture, correction and review. A polished demo cannot substitute for this comparison.

## 8. Strict buyer and investor decision

| Criterion | Distribution | Construction | F&B decisions |
| --- | --- | --- | --- |
| Real operational process exists | Yes; named vendor-reported case | Yes; formal process established | Yes; sector study plus product documentation |
| Frequency and loss in our exact segment | Unproven | Unproven | Unproven |
| Material unsolved gap after incumbents | Unproven | Unproven | Unproven |
| Cheap bounded validation | Yes, if exports/customer records available | Yes, if owner and QS provide a full cycle | Yes, if records and kitchen checks available |
| Production access/reliability/cost | Not validated | Not validated | Not validated |
| Paid desirability and repeatable acquisition | Unproven | Unproven | Unproven |
| Demonstrated moat | None | None | None |
| Would I invest in the proposed product today? | **No** | **No** | **No** |
| Would I onboard as a normal paying customer today? | **No; incumbent comparison first** | **No; incumbent/QS comparison first** | **No; incumbent/process comparison first** |

These are judgments on the evidence, not assertions that the industries are unattractive. The fact we can build a feature does not make it a bet worth funding.

**Recommendation:** begin with distributor interviews, then construction; use F&B as a separate exploratory track. Interview accessibility can change the order, but an easy friend interview must not become the whole sample. In the earlier cleaning-inclusive shortlist, Designer preferred cleaning for fastest disproof if both sides were available, while PM preferred distribution for positive workflow evidence. Both agreed on no build. After the diversification challenge, both supported replacing cleaning with F&B for learning, without upgrading its commercial verdict.

The [interview pack](INTERVIEW_GUIDES.md) specifies recruitment, neutral questions, evidence requests and stop rules. First triage three owners per track; expand only promising tracks to 8–10 qualified businesses and relevant operational counterparts. These are qualitative discovery targets, not statistically representative sample sizes.

Before a build recommendation, require repeated artifact-backed incidents, quantified **incremental** recoverable benefit after incumbent configuration, an identifiable budget owner, accepted outputs, representative data access, plausible delivery economics and concrete later-authorised paid-pilot commitments. Seek at least three paid design partners in the same narrow segment and continued usage over two natural operating cycles; these are proposed gates, not existing commitments or permission to contact businesses.

**What would change my mind:** a repeated costly failure that existing products cannot economically resolve, where customers accept a specific paid pilot and the manual replay demonstrates better net outcomes. If that evidence does not appear, reject the bet and continue problem discovery. No World rebuild, design-system exercise, broad integration programme or AI spend is justified by this report alone.
