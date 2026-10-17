<!-- studio {"id":"world:run:2026-10-18-flows-implementation","scope":"world","type":"run","status":"complete"} -->
# Flows: enquiry to invoice

## Goal and authority

The user approved the complete first Flows build and a new main-navigation Flows tab: reusable enquiry → requirements → quotation → exact customer acceptance → order → vendors → delivery → invoice. Agent assistance creates disabled definitions; deterministic, versioned execution handles ordinary business transitions. No n8n code, assets or templates may be copied.

Work was isolated in `World-Runtime-20261016`, starting at `6a37e315f6e23f83a687c692e2783ccc37339fd6`. Verified delivery repository: `https://github.com/JKay93/MyWorld.git`. The active primary `World` website, worker, installed migrations001–078, saved data, spending ledger/cap and unrelated dirty configs were outside mutation authority. No new automated provider spending, real sends, external account setup or credentials were authorised. A fresh human controlled-refresh approval is required before interrupting current testing and installing079/080. Standing authority covers accepted source commit/push, separately from installation.

## Tasks and result

| Task | Owner | Result |
| --- | --- | --- |
| R: contracts, durable execution, API,079, real SQL/races | `/root/document_runtime_fixes` Builder | Implemented, corrected and frozen |
| C: commerce, connections/gateway, native Agent draft tool,080 | `/root/flows_connections_builder` Builder | Implemented, corrected and frozen |
| U: navigation, list/forms/supporting map, history/records/recovery | `/root/document_ui_fixes` Builder | Implemented and frozen |
| V: independent actual-source review | `/root/flows_independent_qa` QA | PASS, including final correction |
| Integration, acceptance, evidence and source delivery | root | Accepted, pushed and locally activated |

Current routing was read before dispatch/follow-up: SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`. Builders requested gpt-6.1-sol/low/none; QA requested sol/medium/none. Recorded worker routes matched before follow-ups; actual model activation remains unknown without host evidence. Root owns instructions and continuity records; workers did not duplicate reports.

## Accepted behaviour

- Flow list first, typed step forms and supporting React Flow map, per-order execution/business-record history. Existing design tokens/primitives; no new design overhaul or package dependency.
- Bounded acyclic definitions, immutable published versions and explicit enable/pause. Existing runs retain their version unless explicitly migrated. Maximum32 steps,16 vendors and30-day waits. Current World owner/admin and initiating actor only; ordinary-member execution grants are not implemented.
- Durable waits, conditions, approvals, vendor joins, revision checks, deduplicated events and exact external-action receipts. Staff approval is distinct from acceptance of an exact quotation/customer/version. Authority is rechecked at resume and dispatch.
- Incomplete enquiries retain verified original messages/history and permit staff completion before quote issue. Explicit revised requirements become current run/record/message data. Missing email is required only for a mapped email send. Invalid terms block without losing inbound evidence or issuing an unusable quotation.
- Quotes/orders retain accepted commercial terms. Only an invoice number can be repaired at a blocked, unissued invoice step. Live invoice numbers are unique within a World, including across different flows; test mode has a separate namespace. Issued invoices are immutable; bounded linked credit notes preserve originals.
- Integer money, whole quantities, one declared tax treatment; SGD standard GST9% with required real party/registration facts. Supported currencies are SGD/USD/EUR/GBP/AUD/MYR/HKD; standard GST outside SGD is blocked pending explicit FX support. Minor-unit numeric scale and object-key ordering are handled consistently in SQL and TypeScript.
- External messages use bounded allowlisted, single-pass business-field mappings, exact channel/account matching and scoped recipients. Current requirements reach each selected vendor. Vendor assignment itself does not send. Default invoice email includes actual immutable parties, lines, tax, date, references and totals.
- Test mode cannot dispatch live actions or call a model. Deterministic Flow worker works without provider configuration; the existing Agent worker also services Flows. Native `propose_flow` saves an actual disabled draft and its receipt appears in the next real compiled worker context. Actual Agent tasks retain the normal authority, finite execution and exact spending controls; no second Agent runtime.
- Current cancellation/revocation/migration fences protect external claims and late receipts. Uncertain sends are not automatically repeated. An authorised person can record a verified receipt with a separate audit history; no terminal work is revived.

## Connections and scope limits

The implementation includes a worker-owned authenticated loopback gateway, encrypted scoped credentials, concrete Google OAuth/Picker flow, Meta business signup/webhook handling, verified-domain email provisioning and actual restricted-worker effect dispatch. These remain unconfigured until real accounts/apps are supplied; injected tests do not establish live integration success.

Google supports explicitly selected text files and document text export under drive.file. Official Picker receives only a short-lived, user-specific delegated access token after explicit authenticated selection; server-side file re-verification applies. Stored refresh/client secrets, worker DB/encryption keys and merchant/model credentials never enter browser/model payloads. Expired Google access requires reconnect; folder selection does not grant recursive access. Meta validates HMAC and merchant/sender association before recording deduplicated incoming messages. Free-form WhatsApp sends require the recipient service window; approved template sending is not implemented. Email requires a verified Resend sender/domain. InvoiceNow requires a selected accredited provider and merchant/KYC onboarding; a generated invoice or print page is not submission. Staff approvals are durable/cancellable but currently have no independent expiry. Real provider semantics, hosted Auth/Storage/TLS and production readiness remain unverified.

## Checks and evidence

Final migrations:079 `67397f28af1c050731af926126b483f6b8149a901ef62fb961096709f1174a23`;080 `0185f6efb1d929647f73ba4ca8b2a6d2a16e0d197a7e73aaf2f5870d7d274f90`. Only their digest entries were added/updated; installed001–078 bytes and receipts were not changed.

- Full regression:900/900 tests in134 files PASS. Final affected24/24 and independent40/40 PASS. Typecheck PASS; lint0 errors with3 existing warnings. Design conformance94 productionTSX/8CSS/170 unchanged tokens PASS.
- Actual fresh UTF-8 PostgreSQL18 reconstruction of all80 migrations and reliability PASS:24 Flow groups, private ACLs, exact native compiled context, cancellation/revocation/migration guards, correct per-order messages/immutable approvals, serial invoice-number repair and test namespace. Real two-connection races produced one order for duplicate acceptance, one invoice/send for duplicate delivery, and one issued/one blocked invoice when distinct flows competed for the same World invoice number. Existing Agent/question/document/routine reliability checks also passed. Zero provider calls.
- Production build PASS: `uBDrGTyNcCCKM_rnBUnb5`. Standard Agent worker bundle SHA256 `af8c370fbab060405d1e2eb87914155b0ddc518014f126945665deef34b49c26`; deterministic worker `507908fb9e689ef3557c757c1932c402ff3e7fee4ee93327be45e7a07a3aa0ee`. Catalogue build PASS. Candidate config restored after build; package/lock unchanged.
- Root browser on credential-free catalogue3104 PASS: expanded/collapsed rail, disabled publish, fictional2×1250 order, exact customer acceptance, completed delivery, one2500 invoice, truthful simulated effects. Earlier partial-delivery and500 credit checks passed. At360px both page/main widths360; viewport restored; zero browser errors. Screenshots `.next-flows-integration/flows-final-{overview,invoice,mobile}.jpg`.
- Print HTML generation/escaping is tested, but Browser Use security blocked the blob page navigation. No bypass attempted; actual printed-page/PDF appearance is unverified.

Evidence stays in ignored candidate `.next-flows-integration/`: `tests-final.log`, `reviewed-affected.log`, `schema-reviewed-80.log`, `app-build-host.log`, `catalogue-final.log`, `lint-final.log`, worker bundles and screenshots. Earlier proof clusters55446/55447 and final55448 were stopped after verification; their synthetic data is retained, not reset or deleted.

## Corrections and verification limits

Actual independent review found and corrected cancellation/late-receipt revival, dropped requirements, vendor-record/send confusion, nullable authority handling and final stale staff-edited requirements. Browser testing caught and corrected parent navigation falling through to Activity. First whole-suite855/860 failures involved a Knowledge timeout cascade, sandbox Git failure, moving migration digest and terminal-tool expectation; no Knowledge behaviour was changed and final900 passed.

Sandbox loopback EACCES/temporary-module ENOENT were resolved with narrowly scoped host permission/workspaceTEMP. A stalled sandbox compiler was stopped only after exact owned-process verification; host retry passed. A new disposable cluster initially used WindowsWIN1252 and failed a historical Unicode migration: the transaction rolled back, its empty diagnostic database was retained by rename and a freshUTF8 database passed exact reconstruction. These were environment diagnostics, not relaxed application assertions. Primary services were never stopped.

No semantic model accuracy, model end-to-end latency, live integration parity or token/cost comparison is claimed from these offline tests. Automated model/provider spend was zero; customer/vendor waiting time is separate from active processing.

## Delivery and completed activation

Accepted source pushed and remote verified at MyWorld main `e6c3eb5dd3abad1b432141475897a13c4e516bf4`:92 files,14585 insertions/12 deletions, no new dependencies. Candidate tracked clean. CI `39072290237` completed successfully: application, schema and Linux PDF jobs all PASS. The explicitly approved local refresh is complete; runtime e6c3eb5 is serving schema80. Original dirty next-env/tsconfig and all saved work/financial settings were preserved.

The human answered “Allow the controlled refresh” to the exact pause/install/restart request. Approval covered this local update only. There are no remaining implementation or activation blockers; real external account setup remains a separate prerequisite.

Installer readiness: ignored candidate `.next-flows-integration/install-runtime.mjs` is independently reviewed PASS at SHA256 `cec55926e624a8bda6eee57db2b72c974f0cb0bb2d7fdd576e9cb11db327f688`, syntax checked and executed only after the explicit human approval below. Its exact78→80 migration/hash guards, transactional preservation and restricted-worker ACL checks match committed source. Actual human refresh approval must be recorded before creating an activation-approved receipt; file contents alone do not grant authority. All three clean-checkout CI jobs now pass.

Controlled refresh approved by the human on2026-10-18: “Allow the controlled refresh”, responding to the exact pause/install079+080/restart question. This authorises this local activation only, preserves all saved data/spending/cap and does not authorise provider tests, external sends, connection enablement or credentials. Actual current processes reverified: website27748 productionNext3000, worker32100 prior document bundle. Next preflight, preserve configs, promote accepted source/build separately, then pause/recheck/install/restart/verify.

Final activation outcome: PASS. Accepted source e6c3eb5 was fast-forwarded into primary after preserving/reconciling project instructions and backing up exact config bytes. Separate primary build `3BYWLtgVOpAw47q3qowiz` and worker `af8c370fbab060405d1e2eb87914155b0ddc518014f126945665deef34b49c26` passed. Fresh preflight found zero queued/running jobs and78 migrations; actual service identities were checked before stopping only website27748/worker32100. Reviewed079/080 installed atomically to80, preserving historical receipts, the complete spending table/cap settings, routines and Knowledge item/version/draft/snapshot digests. Website34968 and worker12616 restarted, worker ready log observed, HTTP200 contains the exact new build. Authenticated browser loaded actual Flows and Connections; no flows or connections were enabled or created. Final verification repeated after browser checks: all preservation/aliveness/readiness assertions PASS, zero queued/running jobs and zero automated provider calls. Evidence in primary `.next-flows-integration/{review-receipt,installation-before,installed,website,worker,activation-result}.json`, installer/verifier scripts, build/service logs and `installed-flows.jpg`. First preflight used the workspace cwd and exited before connection; corrected application cwd passed. First post-start verifier ran before the worker ready message; the subsequent actual ready/alive/data checks passed, with no assertion weakened. Project-instruction activation checkpoint pushed/remote-verified as MyWorld fc15303a907fb561af176fe3e95b3c4b2d86bcf8; this is documentation only, running application code remains e6c3eb5. Existing dirty configs remain the only tracked local changes.

Next action belongs to user testing: Flows → Create flow → Save/Publish → Test order → exact quote acceptance → delivery → invoice/history. Keep live connections disabled until actual Google/Meta/email setup and merchant authority exist. No additional automated model test allowance or spending-cap change is implied. User may continue ordinary Agent testing under existing settings.