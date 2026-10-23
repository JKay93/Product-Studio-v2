<!-- studio {"id":"world:run:simulated-order-usability-20261024","scope":"world","type":"run","status":"approved"} -->
# Simulated full-order test and usability fixes — 24 October 2026

Status: COMPLETE. Workflow fixes and minimal dependency security updates are reviewed, tested and delivered as4ae24c9. Final actual browser order and all three clean CI jobs pass.

## Goal and boundaries

Run one complete fictional order through the existing interface, record confusing or broken behavior, fix it and retest. The user explicitly authorises Codex's built-in browser. Personal Chrome is excluded. No Claude/model calls, live sends, live enablement, new credentials/connections, old retries, permission/cap changes or user-data deletion. Preserve existing orders, pending reviews, documents, financial records and immutable SQL001–089. Root owns browser, managed operations, instructions, records and delivery; Builders work in World-Runtime-20261016 with independent QA. Broad redesign and deferred generative Flow proof remain out of scope.

Initial app source640a7dd; Studio56e91c9. Primary's existing dirty next-env.d.ts/tsconfig.json and temp directories are preserved. Original localhost3000/Agent worker have not been restarted. A separate localhost3102 preview uses the same authenticated backend, explicitly disables model dispatch and starts no worker. Only that owned preview was stopped for dependency replacement.

## Tasks and acceptance

| Task | Owner | Outcome |
| --- | --- | --- |
| U1 Full interface walkthrough | Root | PASS, original managed order completed |
| U2 Observed usability/bug repairs | Builder | PASS, UI28ad6be and dependency fixes4ae24c9 delivered |
| U3 Independent review and checks | QA/root | PASS, independent UI/dependency review, clean1088tests and all three CI jobs |
| U4 Actual repaired interface retest | Root | PASS, three full managed TEST orders including final dependency build |
| U5 Delivery/report | Root | PASS, both app commits remote-verified and primary source synced; Studio report delivered separately |

Acceptance requires a fictional TEST order to reach its invoice through four separate exact reviews (quotation send, vendor send, invoice issue/number reservation, invoice send), correlated customer/vendor responses and completed delivery. Partial delivery must block invoicing. No bypass or fake completion. Supporting history remains accessible; exact payload/digest/permission checks stay intact. State actual demo/backend and simulation/live limits honestly.

## Observed issues and repairs

| Observation | Repair |
| --- | --- |
| Prices shown as2400/850 minor units | Decimal SGD24.00/8.50 input, exact safe-integer conversion, no rounding of fractional cents |
| TEST form asked for an actual contact | Fictional TEST hint and seeded fictional pilot phone |
| Verbose run list and old-step map/output obscured current work | Current execution first; clear disclosures for other executions, map and history |
| Reviews dumped repeated whole-order context before the action | Complete resolved action first; original bound payload/digest remain inspectable; unfamiliar envelopes retain full fallback |
| Live review labels incorrectly said simulated | Mode-aware labels |
| Partial delivery offered unrelated invoice-number repair and reset full-delivery checkbox | Specific repair condition, delivery label, explicit incomplete state retained on remount |
| Add/Remove item could submit the order | Regression reproduced native submit behavior; explicit non-submit buttons fix it |

No engine, SQL, provider adapter, approval authority or budget changes. Completed invoices remain discoverable/open; uncertain-effect reconciliation remains exposed when needed.

## Actual managed browser evidence

| Candidate | Execution | Invoice | Result |
| --- | --- | --- | --- |
| Original interface | a555266a-27d4-4b6b-ac09-2534baadf468 | SIM-QA-20261024-01 | Complete, SGD274 |
| Patched UI | 30a16ccc-089b-40aa-86f0-897c7a365410 | SIM-QA-20261024-02 | Complete, SGD274 |

Both used pinned version4590631e-0828-43ba-981b-7abd69fdf796 and distinct fictional customers. Each passed quote review → exact customer acceptance → vendor review → vendor confirmation → partial delivery (invoice blocked) → explicitly completed delivery → invoice issue review → invoice send review. Read-only database transactions verify4approved reviews,3TEST/simulated effects,0linked Agent jobs, invoice27400minor units and partial-delivery block history. Existing old orders/reviews were preserved. The patched interface also passed375px mobile, expanded/minimised navigation and invoice-step map inspection; viewport/navigation restored, zero browser warnings/errors.

Evidence: World-Runtime-20261016/.next-order-usability/ contains before/after screenshots and AX text, order-<execution>.json read-only receipts, build-host.log, regression.json, isolated-recheck.json, design.log, lint.log, preview.json and primary-preservation.json. Preview build46KJodgRoNMzVIE7zB-LV includes the final reviewed input-first code. Native desktop attempt before resumption was stopped by Escape before any order/code changes; subsequent test used built-in tabs19/20 only.

## Review and checks

Builder /root/order_usability_builder requested gpt-6.1-sol/low/none; QA /root/order_usability_qa requested gpt-6.1-sol/medium/none. Routing SHA2561C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; actual backend activation unknown. Same routes were revalidated for follow-ups.

Independent final UI review PASS,24/24 tests across6files. Final blobs: commerce a4d6bea, detail c1eccad, workspace9e5ac8e, pilot74df1bc. Builder42distinct affected cases passed across staged runs. Broad run1088tests/157files:1084passed,4initial failures retained (old in-flight Add/Remove defect; two5000ms contention timeouts; sandbox Git clone denial). All4affected files subsequently passed27/27 in isolation at standard timeout outside the sandbox. Two separate outdated test assertions were corrected and independently rechecked. This is composite coverage, not a claim of one clean1088/1088 run. Production build/typecheck, scoped lint, diff checks and design conformance100TSX/8CSS/170tokens passed. First local build hit a filesystem EPERM; guarded host build succeeded and original generated config bytes were restored.

## New release-check blocker

Exact GitHub run40022710007 for28ad6be failed the production dependency audit before its application tests; Linux PDF passed. Retained audit shows existing Next16.3.8 affected by three upstream advisories published/reviewed22October. Official [image optimisation advisory](https://github.com/advisories/GHSA-2464-fhr4-w9xw) and [cache advisory](https://github.com/advisories/GHSA-673q-mjm6-r5xr) identify16.4.1 as patched; registry recommends16.4.3. This was not caused by the UI changes. Do not weaken the audit gate. Builder is performing a minimal pinned Next/matched-eslint-config update to16.4.3, followed by independent dependency review, audit and relevant rebuild/browser checks. No exploit/payload testing is needed or authorised. Primary services remain untouched; only the isolated preview is stopped for safe replacement.

## Delivery, questions and next action

UI28ad6be0882bbafeddfb94ce7edabeff9edf3d09 pushed and verified on JKay93/MyWorld main; primary source fast-forwarded with original config/package bytes preserved at that point. Studio destination remains JKay93/Product-Studio-v2. No automated model spending or live effect occurred. Questions: none. Next finish minimal dependency fix/review, rebuild and smoke the final preview, deliver exact accepted source, update this record and report the result. Live integrations, PDF print appearance, broader workflow exceptions and generative authoring remain outside these finite simulated checks.

## Final dependency and runtime verification

Dependency source4ae24c9dc0d28528845356a5344bcb7da1165529 is accepted, pushed and remote-verified; primary source fast-forwarded without restarting or reinstalling its active website/worker. Original next-env/tsconfig bytes remain intact. Patched isolated preview3102 uses Next/eslint16.4.3, Storybook/matched framework10.6.3 and compatible transitive Zod4.6.6. The latter also fixes [Zod GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5); Storybook fixes [GHSA-f2ph-cmg5-wxc8](https://github.com/advisories/GHSA-f2ph-cmg5-wxc8) and the related dev-server advisory. Only package.json/lock changed in this follow-up; incidental compatible upgrades were restored. No audit gate, security flags, application logic or schema changed.

Independent dependency QA PASS at package51d6d423/lockd38ad0e4; changed tarball/integrity metadata independently matched the official registry and parent peer ranges. Production and development audits both0 findings, unchanged audit gate PASS, installed dependency tree PASS; independent fake-provider/tool validation36/36 and Builder105/105 affected cases PASS. Final production buildWaOCT1ja4ywTubrlOy_dU and Storybook10.6.3 catalogue build PASS; Next TypeScript pass included. Native CRLF package-lock is intentionally preserved; diff whitespace check recognises CR-at-EOL without permitting trailing spaces.

Final actual managed TEST order973e8249-0235-4d72-8659-b1aa5788924d completed on the final patched build. Customer Orchid QA Final Build (fictional), invoice SIM-QA-20261024-03, SGD274, same pinned flow version. Again verified4separate exact reviews, customer/vendor correlation, partial delivery stays incomplete and blocks invoice, explicit full delivery, invoice issue/send. Read-only database receipt verifies4approved/3simulated/0linkedAgentJobs and partial-delivery history. Final browser warnings/errors0. Fresh initial workspace load showed a temporary unavailable state; existing Reload authorised Worlds recovered, and subsequent deliberate page reload succeeded and reopened saved data. No cause was established and no durable bootstrap-reliability fix is claimed. Final screenshots/text and read-only receipt are in .next-order-usability/final-* and order-973e8249-0235-4d72-8659-b1aa5788924d.json.

Preview process25772/buildWaOCT1ja4ywTubrlOy_dU, localhost3102, model dispatch disabled, no worker. This preview and committed source contain security updates; original running localhost3000/worker remain their previous runtime and were not refreshed. User-facing final link must point to3102. Existing dummy orders, real saved work, pending reviews and all financial records/caps remain preserved; test-generated three fictional orders are deliberately distinct and retained. No Claude calls, live sends or extra API spending occurred.

Exact final CI40025276837 is running application regressions and disposable schema checks; Linux PDF already passed. Do not describe one clean full final CI run until its actual completion. Last required next action: inspect exact final CI, record its outcome, commit/push this Studio record, then report whole-goal completion and preview link. No new product work is planned.

Final clean application CI job120659785225 PASS:1088/1088 tests157/157files (actual downloaded job totals .next-order-usability/ci-test-counts.json). Final audit/type/lint/build/catalogue/recovery steps also passed in that clean job. LinuxPDF job PASS. Only schema/concurrency job remains in progress; awaiting its exact conclusion, not rerunning unchanged checks.


## Closure

Exact [final CI40025276837](https://github.com/JKay93/MyWorld/actions/runs/40025276837) is COMPLETE/SUCCESS on4ae24c9: application, schema/concurrency and Linux PDF all pass. Clean application totals1088/1088 tests in157files, plus audit/type/lint/recovery/application/catalogue builds. Studio harness/routing/graph check passes. All required goal work is complete; no pending question or additional implementation task. Accepted source and final runtime evidence above supersede intermediate pending statements retained for history. The isolated patched preview remains available on3102 with final order selected; original3000/Agent worker are unchanged. Live integrations, broader exceptions, generative Flow authoring and durable diagnosis of the non-reproduced initial workspace-load timeout remain explicitly unproven/deferred, not requirements for this simulated-order goal.

