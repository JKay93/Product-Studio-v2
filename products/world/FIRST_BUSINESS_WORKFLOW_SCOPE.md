<!-- studio {"id":"world:proposal:first-business-workflow","scope":"world","type":"proposal","status":"draft"} -->
# First business workflow: pilot scope

Business pilot W1–W6 remains proposed. On 19 October 2026 the user separately authorised W0: reusable connections/operations, typed mappings and send-and-wait, reusing existing components before the business workflow. W0 is independently reviewed and pushed as 2fbc71c886be87ba14146bdae18502d6d7fef99f; final CI/local activation status is in [the current run](runs/2026-10-19-flow-foundation.md). Authenticated internal responses come first; automatic WhatsApp/email reply correlation, public response links and business acceptance semantics remain later scope. No paid provider tests or account setup are authorised by this scope.

## Outcome and boundaries

Turn the existing enquiry-to-invoice foundation into one usable SME pilot: enquiry → requirements → quote → exact acceptance → order → vendors → delivery → invoice. An agent helps configure the reusable flow; deterministic steps execute without model calls. Use agents for interpretation/drafting and genuine exceptions. The pilot business decides actual commercial rules and automation boundaries.

This is a completion/integration project. The engine, canvas and business records already exist. Broad Knowledge redesign, an integration marketplace, new Swarm coordination, accounting reconciliation, payment collection and InvoiceNow submission are outside the proposed first slice unless a real pilot requirement makes one essential.

## Existing capabilities verified in source

| Capability | Current implementation | Remaining qualification |
| --- | --- | --- |
| Flow authoring | Flows tab, editable React Flow canvas, typed configuration, draft/publish/enable/pause, immutable versions | Need a guided configuration path using the pilot's actual facts |
| Agent authoring | `propose_flow` creates/edits an actual disabled draft with an authoritative receipt | Need scoped discovery of available operations, connection readiness and existing flow/configuration; saved-draft capability is not live execution proof |
| Execution | Durable runs, conditions, waits/timeouts, approvals, vendor joins, cancellation, history, records and reconciliation | Business exception paths need to be configured and verified for the chosen pilot |
| Commerce | Requirements, quotes, exact customer/quote-version acceptance, orders, selected vendors, delivery, invoice totals/number uniqueness and credit notes | Real document format, pricing, numbering and commercial policy are unspecified; printable page appearance previously unverified |
| Knowledge | Existing search/read, templates and document creation/editing | Flow-level selection, mapping and version binding of business sources is incomplete; Drive access is not automatic Knowledge synchronisation |
| Connections | Scoped encrypted credentials, Google OAuth/Picker, Meta signup/signed text webhooks, email provisioning and outbound dispatch | Live account/provider operation has not been demonstrated by the existing source tests; current account readiness was not queried in this planning task |
| Reliability | Deduplicated inbound events, current authority checks, exact approvals, version-pinned runs, uncertainty records and no blind resend | Extend the existing proofs to the pilot's interactions and real providers |

Important concrete limitations:

- WhatsApp inbound text is recorded as enquiry/requirements evidence. It does not itself authenticate quote acceptance, staff approval, vendor confirmation or delivery confirmation. Those interactions need a deliberate mapped mechanism.
- Current sender-to-run tracking stores one active run per connection/customer. Multiple simultaneous orders from the same customer need explicit disambiguation.
- The WhatsApp outbound adapter sends free-form text within its enforced service window. Approved-template sending is absent; long-running customer updates or first-contact vendor messages need templates or another channel.
- Google selected-file access is implemented, but expired access currently requires reconnect even when a refresh token was returned. Automatic refresh must be completed before treating long-running Drive workflows as dependable.
- Flow management/execution is currently limited to the World owner/admin initiating the work; a general staff/operator permission role is not implemented.
- Invoice generation/printing exists; InvoiceNow submission explicitly remains unavailable pending provider and merchant onboarding.

## Proposed tasks and acceptance

| ID | Work | Reuse / build | Observable acceptance |
| --- | --- | --- | --- |
| W1 | Specify the pilot's business contract | Configure existing steps; add a reusable setup profile for business facts, required order fields, commercial terms, vendors and channel bindings where missing | One realistic example maps through the whole process; unknown facts are identified rather than invented; required fields are collected at the appropriate stage |
| W2 | Make conversational flow building operational | Extend existing flow drafting with bounded, authorised inspection of flow definitions, operation schemas, connection status and relevant Knowledge; preview changes and save disabled drafts | A business description creates a valid editable flow with mapped data, clear unresolved setup and no invented account/resource IDs; live activation stays deliberate |
| W3 | Complete customer/vendor interaction routing | Add exact quote acceptance interactions, vendor responses, delivery confirmation and multiple-order correlation; preserve raw inbound evidence | A message reaches the intended order, ambiguous replies request clarification, duplicates are ignored and an outdated quote cannot create an order |
| W4 | Bind business Knowledge and documents | Select/version approved SOPs, product/pricing references and quote/invoice templates; bind values to deterministic commerce calculation | Source changes do not silently alter accepted terms or issued documents; user can inspect the source/version used; transactional records stay in Flows with explicit document/file links |
| W5 | Finish and verify the selected live connections | Configure existing Meta/email/Google adapters; add WhatsApp template sending and Google token refresh if selected channels require them; verify webhook hosting and onboarding | Actual test accounts receive the intended messages/files, account expiry/revocation blocks correctly, provider receipts are stored and uncertain sends are not repeated automatically |
| W6 | Complete operator handling and pilot tests | Improve existing run detail/action controls only where the workflow requires it; exercise business exceptions and recovery | Owner can identify the blocked step, supply missing data, review/reject a send, resolve vendor failure and cancel safely; actual invoice print/export is inspected |

Recommended sequence: W1–W4 first in test mode, W5 with real account access when ready, then W6 complete pilot verification. Functional operator controls are included throughout; broad visual redesign stays deferred. For an initial pilot, recommend WhatsApp customer intake, vendor email and human review of outbound commercial documents/messages. This is a proposal, not an approved automation policy.

If the pilot requires ordinary staff operation, scoped operator permissions become an explicit additional task before those staff receive access. If InvoiceNow submission is required, provider selection/onboarding/document mapping becomes an explicit prerequisite to live invoicing rather than a claim that generated invoices already satisfy it.

## Verification and metrics

Reuse the current regression suite and real SQL boundary/race checks. Add representative order scenarios: normal order; missing requirements; revised/declined/expired quote; duplicate and out-of-order events; two orders from one customer; partial vendor confirmation/rejection/timeout; partial or late delivery; cancelled work; connection expiry/revocation; uncertain send; concurrent acceptance/delivery/invoice issuance; stale staff approval; wrong-World access and permitted staff access if in scope. Test mode sends nothing and makes no model calls.

Report scenario pass rate, active processing latency separately from customer/vendor/approval waiting time, and actual aggregate model calls/tokens/cost. Do not present human or business waiting time as runtime latency or claim production readiness from simulated provider tests. Live agent/provider tests require a fresh scoped cumulative spending allowance; earlier comparison headroom is not reassigned.

## Needed from the user

Before approving implementation, provide or confirm:

1. One realistic order example: what the business sells, a typical enquiry, required details, how the quote is priced, vendor involvement and what counts as delivery. An anonymised example is sufficient.
2. First channels: proposed WhatsApp for customers and email for vendors; identify if vendors also require WhatsApp. Identify whether Google Drive is essential in the first pilot.
3. Automation boundaries and commercial sequence: who approves quotes/vendor requests/invoices, how customers accept, when invoicing happens, and any deposit/payment gate. Confirm whether owner/admin-only operation is sufficient initially.

Existing quote/invoice/SOP templates and pricing material are helpful if available; placeholders are sufficient to start the functional test slice. Do not invent tax status or business registrations.

Later, for live verification: a business WhatsApp account/number and authorised Meta signup; platform Meta app/signing/webhook setup; a verified sender/domain and email-provider access; Google OAuth/Picker app setup and account consent if Drive is used; an HTTPS endpoint reachable by provider callbacks. Platform app setup is distinct from each SME's account connection. Credentials should be supplied through the connection/configuration process when that stage is ready. No credentials are needed for the first simulated slice.

W0 authority does not authorise the remaining pilot or new paid tests. Before W1–W6, the user confirms the pilot example and channel/automation choices and authorises that scope.

## n8n connection research addendum — 19 October 2026

The user asked to inspect how n8n connects services before implementation. Reviewed official current documentation for credential definitions/selection, Google managed OAuth, WhatsApp trigger/actions, declarative node metadata, data mapping, Webhook, Wait and HTTP Request. This was documentation research; no external account connection or live workflow was executed, and no n8n code/assets/templates were copied.

n8n separates reusable credential objects, provider nodes/operations, per-node parameter mapping and execution/wait state. A credential can be created centrally or from a node's picker; credential definitions describe authentication fields and testing, and stored values are encrypted. Node definitions describe available resources/operations, fields and requests. [Credential UI](https://docs.n8n.io/build/understand-workflows/create-and-edit-credentials.md), [credential definitions](https://docs.n8n.io/connect/create-nodes/build-your-node/reference/credentials-files.md), [node tutorial](https://docs.n8n.io/connect/create-nodes/build-your-node/tutorial-build-a-declarative-style-node.md).

Outputs from earlier nodes can be referenced in later parameters, including drag/drop mapping in the editor. This is a major practical gap in World's current typed business forms and limited string mappings. [Data mapping](https://docs.n8n.io/build/work-with-data/reference-data.md).

WhatsApp has separate incoming trigger and outbound action nodes. The outbound node offers Send, Send Template, media operations and Send and Wait for Response. The latter supports approval, free-text form and custom-form responses with configurable waiting limits; a form response must not be misdescribed as arbitrary natural-language chat acceptance. Wait persists execution data and resumes on time, webhook or form submission, with execution-specific resume URLs. [WhatsApp actions](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp), [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait).

n8n Cloud provides managed Sign in with Google for documented supported nodes including Drive; self-hosting needs custom app credentials. WhatsApp still requires Meta app/business assets; sending and triggering use different documented credential types. Provider setup is not eliminated by the canvas. Test and production webhooks are distinct, and n8n documents WhatsApp's single-webhook-per-app caveat. [Google OAuth](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service), [WhatsApp credentials](https://docs.n8n.io/integrations/builtin/credentials/whatsapp), [WhatsApp trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger), [Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook).

HTTP Request supports custom API operations and reuse of predefined credentials. For World, general arbitrary-URL requests remain later scope; first use reviewed provider handlers and bounded allowed endpoints. [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest).

Recommended scope adjustment (W0 subsequently authorised separately): add **W0, a small reusable connector/operation catalogue, credential picker with readiness checks, typed step input/output mapping and a reusable send/wait interaction contract**, before W1–W4. Begin with the existing WhatsApp, Email and Drive adapters. Keep World's existing engine, scoped credentials and authority, quote-version binding, deduplication and uncertainty controls. Reuse the same contracts in the editor and agent drafting so an agent sees actual operations, authorised connection references and unresolved setup without secrets. Implement provider-specific handlers independently. Reusable nodes should serve future business workflows; avoid designing each integration around this single enquiry-to-invoice example.

Illustrative application: WhatsApp trigger → normalise enquiry → read approved pricing/template → create quote → send/wait for exact acceptance → create order → request/wait for vendors → delivery confirmation → create invoice → optional Drive export/send. Business rules, pricing and invoice provider choice still need configuration; n8n wiring alone does not supply those semantics.
