<!-- studio {"id":"world:run:2026-10-29-document-reliability","scope":"world","type":"run","status":"complete"} -->
# Reliable assistant document journey

## Goal and authority
The user approved deterministic template-preserving edits, accurate error and saved-state handling, preparation of a configurable Terra route, complete simulated conversation tests, and clear artifacts/sources/job costs. Zero provider spending, no external sends or publishing, no automatic routing, and no changes to old reference folders or historic financial records. Controlled refresh of the new local app is authorised after review.

References: WORLD_STRATEGY.md, World-Rebuild/AGENTS.md and the previous live-model-comparison record. Starting app revision: c6e0d42820a1ebd712d1ff7513fb5a8bcd1ded53.

## Tasks and acceptance
- D1 Builder — Complete. Typed, version-bound field edits preserve template structure and originals. One recoverable content error allows one correction; permission/version/abort failures stop execution. Only a successful write creates a saved receipt.
- D2 Builder — Complete. Inactive Terra preset, explicit pricing/World/budget gates, receipt-backed draft UI, actual read sources and separate reported cost/held amounts.
- D3 Independent QA — PASS. Reviewed combined code, privacy/World/version/stop safeguards, financial holds, same-job clarification and content revision, legacy saved-review compatibility and future evaluation pricing admission.
- D4 Root — Complete. Real database regression, isolated browser walkthrough, desktop/mobile visual inspection, production builds, local refresh and scoped repository delivery.

## Decisions
One assistant owns planning, retrieval, drafting and revision. The model supplies text changes; code preserves rich structure, marks, headings, table headers and colon labels. Existing empty paragraphs can receive text. No arbitrary rich JSON replacement or native Office fidelity is claimed.

The output is buffered until the turn finishes while tool/progress events remain visible. Document preparation produces a deterministic prepared status; confirmed persistence produces saved status and history. A narrow English direct-action assertion guard catches unsupported claims while retaining factual Q&A such as an already-approved policy. It is not a universal semantic truth classifier; receipt-backed UI status is authoritative.

A saved draft survives a later stop or failure. Current source/document permissions and versions are rechecked before exposing its receipt. Older runs without the new receipt remain usable only after an actual actor-scoped document read, matching World/template/version, and matching self/actual payload hashes. No migration or trust in document ID alone.

The optional Terra preset supplies exact model and upstream identifiers only. Live activation still requires explicit World allowlists, credentials, enabled mode, finite cumulative budget and reviewed base/cache-write/output ceilings. No arbitrary daily expiry was added. Future evaluation plans require cache-write pricing and review dates before database recovery or attempt claims; historical frozen plans/hashes remain unchanged and exportable/offline usable. Automatic current-price verification remains deferred.

## Routing and review
Before dispatch, read current role-routing.json and Builder/Reviewer instructions. Routing SHA256: 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F.

- /root/document_backend and /root/document_ui: requested builder gpt-6.1-sol, low, fork none.
- /root/document_review: requested qa gpt-6.1-sol, medium, fork none.

Follow-up routing was rechecked. Actual activation and host token usage remain unknown. Root owns records; workers supplied concise findings. Review identified typed-schema, factual-Q&A suppression, actual-content revision and legacy-receipt gaps; Builders corrected these and affected tests were rerun. Final independent review: PASS, no remaining blocker.

## Verification and evidence
1. Initial combined regression: 104/104 tests across 24 files, including real dedicated world_m3 identity and budget checks. Synthetic providers only. Full ESLint and separate .next-harness production build passed.
2. Own headless Edge browser on isolated QA port 3106: 16 checks passed. UI signup; initial clarification; visual Knowledge creation/autosave; answer resumes the same job; private draft receipt, read sources and zero charge; exact-version approval; follow-up; separate private revision preserving original; stopped review keeps saved work after reload; desktop and 320px review/editor; no browser errors or external requests.
3. Actual-content test through the real harness/Mastra and mocked streaming provider: clarification, saved Quantity 17, new revision Quantity 23. Supplier Acme and delivery Friday unchanged; original template and first draft preserved. The browser fixture checks lifecycle, not live language quality.
4. Final legacy correction received independent affected verification: 24/24 tests including valid, edited, missing, cross-World, changed-template, revoked-source and tampered-payload legacy receipts.
5. Final full regression: 109/111 initially passed. Two environment conflicts were diagnosed: our QA server held the single-executor database lease, and a simultaneous production build exceeded the synthetic streaming test's five-second test deadline. Closed only the owned QA server and ended the build, then reran those exact two suites with a 30-second test timeout: 2/2 passed. Thus all 111 unique tests across 24 files were verified. No provider retry or product failure was hidden.
6. Final normal production build passed. Only the idle website was refreshed after checking zero active executions. New process 33968 serves port 3105, HTTP 200, explicitly in fixture mode. Normal-site smoke checks passed: sign-in, sampled unauthenticated APIs return 401, desktop/mobile login, unchanged original legacy file, no browser errors/external requests.
7. Read-only before/after hashes of world_dev and world_models_20261029 budget payloads match exactly. No provider calls, historic ledger reset, uncertain-hold clearance or old-request replay. No environment files or reference folders changed.

Ignored local evidence under World-Rebuild/assistant-prototype-qa/: document-reliability-browser.cjs, document-reliability-browser-results.json, document-reliability-browser-summary.json, document-reliability-review-desktop.png, document-reliability-review-mobile.png, document-reliability-editor-mobile.png and document-ledger-before.json. Root inspected the desktop/mobile review screenshots. No credentials or session files are committed.

The restricted process view initially misreported existing services as unavailable; one db:start helper attempt failed without changing services. Host checks confirmed the dedicated database and normal website were already running. Subsequent checks used the verified host processes; no further database start/restart was performed.

## Delivery and next action
World app commit e92eec63c443717ae3100bc1c6476ec6083f352b pushed to JKay93/MyWorld main; remote SHA verified. Normal local website is refreshed with that candidate. This run and CURRENT_RUN.md form the scoped studio delivery.

No unresolved user question or remaining task in this zero-spend build. Actual model quality/cost/speed after the changed tool contract remain unmeasured. For the next live trial, obtain one actual company template/assignment and an explicit bounded allowance. Open-web research, automatic model routing, native Office editing and production hosting remain outside this scope. The current user-facing application remains simulated.
