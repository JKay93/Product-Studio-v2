<!-- studio {"id":"world:proposal:first-release-journeys","scope":"world","type":"guide","status":"draft"} -->
# World: two journeys to make coherent

23 October 2026. Source/evidence walkthrough at MyWorld640a7dd, with an independent Product Manager critique. This is a proposed release focus, not an implementation order, new visual design or completed live test. The user's pause on implementation remains in place.

## Direction supplied by the user

World serves SMEs adopting AI and automating manual work. The main outcome is a business process completed from A to B; another core outcome is producing a document using existing business documents/templates. Agents interpret and perform bounded work, Knowledge supplies permitted context, and Flows make repeatable processes dependable. The operator should not need to understand agent graphs, runtime engines or internal identifiers to obtain these outcomes.

Use the existing fictional office-supplies business as a working example, not as the chosen target market. Start with one owner/operator and their own permitted direct Agent conversation. Team expansion, the first commercial sector, live channel and release model remain undecided. Do not widen private document/Agent access to make a walkthrough appear successful.

## Walkthrough 1: produce and revise a useful document

Example task: “Create an order-handling SOP for our business using the SOP template and past procedure in Knowledge. Mark missing responsibilities as TBD.”

| Step | User action | World should do and show | Current footing / friction |
| --- | --- | --- | --- |
| Prepare once | Save/import a supported template and past procedure in Knowledge; use an owned direct Agent with appropriate access. | Make document purpose and permitted audience clear. Ordinary private draft use must not require publication. | Library/imports/direct chat exist. Formal per-version template metadata is under Document options → Template settings; discoverability needs assessment. Published World-wide default/mandatory policies require separate owner/admin authority. |
| Request | Ask for the SOP in ordinary language; add relevant notes if available. | Search permitted context first. Use a clear applicable template; surface a meaningful conflict between two relevant templates. Ask only for facts that materially affect the next decision. | Native search/read/selection and clarification mechanisms exist. Their natural real-model application remains only partially verified. |
| Receive work | Read the result and open the linked document. | Produce an actual saved private draft; show its title and template/prior-document basis. Open the existing editor alongside Chat for a new observed completion. | Saved-document receipt, Open saved draft and Chat document pane exist. A prose claim alone is not success. Chat discussion alone must not create a document. |
| Review | Read and edit the draft. | Preserve required sections/tables, distinguish supplied facts from assumptions/TBDs, show actual referenced sources, and expose saved/error state without losing text. | Rich editor, source grouping, current draft, version/history and recovery exist. Formatting/schema checks do not prove semantic adherence. |
| Revise | “Change the review period to 14 days; leave everything else as it is.” | Update this same document using its current content, preserving unaffected sections and user edits; show the updated saved result. | Current-document focus and edit fences exist. Real-model revision fidelity needs evidence, not another generic template. |
| Return later | Reopen the document and continue the conversation. | Show the durable latest authorised work and recover relevant context as needed. Do not claim unlimited history or create an unnoticed duplicate. | Persisted history/document retrieval exist with explicit bounds. Long-conversation semantic continuity remains a separate verification task. |

Acceptance: a real saved document exists, has the chosen structure and honest facts/TBDs, reopens, and receives the requested same-document revision without losing unrelated content. Failure retains recoverable work and a truthful explanation. No implicit publication/sharing, no repeated answered questionnaire, and no additional Save confirmation for a clear authorised native create/update request. Shared/borrowed Agent contexts remain subject to their actual tool and privacy restrictions.

## Walkthrough 2: take one order through a repeatable process

Working example: an incoming request for office supplies becomes requirements, an exact quotation, customer acceptance, an order, vendor requests/confirmations, delivery and an invoice. For this walkthrough every connection/event is simulated and visibly labelled; a real customer/vendor receives nothing.

Separate two operations: **design the reusable process once**, then **run each order through that saved version**. Repeated orders should not require rebuilding a canvas or recruiting an Agent team each time.

| Step | User action | World should do and show | Current footing / friction |
| --- | --- | --- | --- |
| Review the process | Open the configured simulated business workflow in Flows. | Present the stages, necessary inputs, approval points and simulation mode. Prior automated evidence covers the configured simulated journey independently of generative authoring. | Canvas and simulated business pilot exist. Do not substitute this preset test for proof that an Agent generated a correct draft. |
| Separate generative-authoring validation | When assessing conversational process creation, separately ask Chat to create a new disabled draft of this supported process. | Return a real saved Flow receipt linked to the editable graph; reject missing/bypassed required stages with useful repair guidance. This is not a prerequisite to walking through an already configured Flow. | Native discovery/proposal/source-bound full business profile exist; complete positive fresh Claude → correct saved draft remains unproven/deferred. Required before promising reliable conversational authoring; it does not validate arbitrary A→B workflow semantics. |
| Prepare a version | Save changes, then deliberately create an immutable execution version for testing. | Explain that a saved draft, an execution version and live enablement are distinct. Show exactly why a test is unavailable. | UI currently says Publish saved version; list tests disable until publishedVersionId exists. This publication freezes a Flow version; Knowledge publication instead changes its shared readable head. The vocabulary deserves clarification. |
| Start one order | Supply dummy customer/items/prices and explicitly start TEST. | Show one identifiable run pinned to the reviewed version. Treat supplied prices/tax/quantities as authoritative business inputs, not invented model facts. | Test order/Test flow and structured commercial intake exist. Two similar test actions and setup prerequisites need a clearer explanation. |
| Review the quotation | Inspect the actual recipient, items, amounts and terms; approve or reject its send. | Wait for exact staff approval. A changed payload/version must not reuse stale approval. | Deterministic records and exact quote-send gates exist and are tested. |
| Receive acceptance | Simulate the customer's acceptance of that exact quotation. | Continue only for the matching quotation/version; customer acceptance never grants staff approval. | Correlated waits/events and acceptance fencing exist. Explain the wait and next action in business terms. |
| Coordinate fulfilment | Approve each exact vendor request, simulate confirmations, then record delivery. | Wait for the assigned vendors; distinguish rejection, timeout and delivery. Do not silently advance because an Agent says work is complete. | Separate vendor sends/confirmation/delivery and typed response forms exist. |
| Issue and send the invoice | Review invoice issue/number reservation and then invoice send as separate actions. | Produce one deterministic invoice record, with correct totals and an inspectable timeline. Keep issue and send decisions separate. | Existing pilot has four gate classes: quotation send, each vendor send, invoice issue and invoice send. InvoiceNow live transmission is unavailable. |
| Recover or repeat | Inspect failure/wait, provide a missing fact, cancel, or start a second order. | Preserve completed work, show who acts next and resume the right run. Duplicate events/retries must not duplicate orders, invoices or sends. | Run details, repair forms, durable waits, effects/reconciliation and concurrency checks exist. An uncertain external result requires checking its receipt, not blind retry. |

First demonstration: one order on the configured happy path, exact input totals and invoice record, every required approval/correlated wait, and an understandable current stage/next action. Subsequent acceptance checks cover a second order, quote revision, duplicate events, missing/rejected vendor confirmation, timeout, cancellation and recovery; reuse existing control evidence where applicable rather than requiring every branch in the first session. No live send, automatic activation or invented success. Run completion means the recorded simulated outcome, not delivered goods or a customer receiving an invoice.

## What the walkthrough reveals

1. **The main risk is the joins between features.** Chat already links saved documents and Flow drafts; Knowledge and Flows already have editors and histories. The next work should make these existing transitions understandable and reliably complete, without introducing another runtime or management layer.
2. **Generation and deterministic execution need separate acceptance.** The existing simulated pilot can pass while generative authoring remains unreliable. Likewise an editor can save perfectly while the Agent chose the wrong template. Keep both kinds of result visible.
3. **State language is part of the functional experience.** Draft, saved, version prepared, enabled, waiting, approved, issued and sent have different consequences. “Publish” currently means different things across Knowledge and Flows; disabled tests need understandable prerequisites.
4. **Template selection is business setup, not a hidden expert chore.** Make it possible to identify a template and see the chosen structural basis without asking users to maintain UUIDs or understand private server records. Keep per-version binding and publication/access controls intact.
5. **Simulation is an internal milestone.** If the selected business process depends on external events or delivery, its pilot needs a deliberately chosen real channel, scoped onboarding and actual delivery/recovery proof. Internal automation can be useful without external integrations. Manual entry and simulated connections help validate the experience but cannot establish live unattended external automation.

## Recommended order of further investment

| Order | Bounded work | Done when | Authority / dependency |
| --- | --- | --- | --- |
| 1 | Agree these two journeys and the visible meaning of each state. | An operator can explain what they provide, review and receive; every step has a clear next action. | Planning now; no need to choose a design system first. |
| 2 | Start with one document create/revise example and one configured simulated order happy path. Follow with reopen and exception/recovery checks. | Durable outputs and expected facts/structure survive; required gates remain correct and next actions make sense. Record observed failures; reuse valid existing control evidence. | Future execution must respect the actual app state, data permissions and any fresh paid-test allowance. No execution authorised by this document. |
| 3, separate authoring track | Before promising conversational Flow creation, close its generative proof and repair only reproduced blockers. | A fresh authorised Agent request saves the correct supported disabled graph with required approvals; no manual result repair passed off as model success. A configured-workflow walkthrough can proceed independently. | Previously deferred live test needs adequate credit and a new bounded approval. |
| 4 | Design the shared shell, Chat/editor handoff and Flow setup/run review around the validated journeys. | Actual rendered layouts, empty/loading/error/waiting states and responsive behaviour match the user's chosen direction. | User owns UI/design direction; this is not permission to start a redesign now. |
| 5 | Select one pilot business/process; if it needs external events or delivery, choose and prove its necessary live channel. | The selected real operational outcome, approvals, receipts and recovery work. Hosting/account onboarding and data/key custody are ready to the extent required by that pilot. | Business, any required credentials/live-effect authority, hosting and spend remain to be selected. |

Automation remains the main product outcome. The document path is a useful early acceptance case because it exercises meaningful AI work with fewer external dependencies; it is not a decision to reposition World as only a document assistant.

## Proposed release boundary

Focus the first pilot on one configured business process plus the document workflow it needs. Keep existing Agent/Knowledge/Flow capabilities and permissions available. Pause further expansion of personality, learning, swarm-management and integration breadth unless one is a demonstrated blocker for these journeys. Do not promise arbitrary workflow generation, autonomous consequential actions, InvoiceNow, all-file/OCR ingestion, or production readiness from a simulated walkthrough. These are proposals, not instructions to delete existing functionality.

## Evidence and limits

Reviewed current source at640a7dd: `World/src/ui/patterns/{agent-job-reply,chat-document-panel,persistent-workspace,knowledge-reader,knowledge-template-settings,flows,flow-run-detail}.tsx`, `World/src/modules/flows/{pilot,requirements}.ts`; relevant document/workflow UI suites and the [capability audit](CAPABILITY_CLEANUP_REPORT.md). Source shows actual links, controls and prerequisites; prior CI1082 is regression/control evidence, not a new model-quality score. Independent Product Manager review recommended keeping full enquiry→invoice as the reference story and separating configured execution from generative authoring.

No browser actions, new tests, provider calls, live execution, service/database/application changes were performed for this walkthrough. Credentials, first sector, live channel and paid-test budget are deliberately unresolved; none blocks this planning output.
