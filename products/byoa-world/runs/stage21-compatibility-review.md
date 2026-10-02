# Review: Stage 2.1 compatibility correction and root self-check

- Reviewer: independent QA `/root/compatibility_qa`, requested `gpt-6.1-sol / medium / fork_turns none`; current routing SHA256 `8E7006FA200C6A88958E5AAEE409AB93C60A3FD7E3765241B3FE7C27246E3A45` matches recorded request. Actual backend activation remains unknown. QA changed only this report.
- Candidate: `tmp/byoa-stage21-compatibility-20261002/candidate-manifest.json`, 17 entries, SHA256 `B054B1F47A9879D651A9834175F2EEC480AF2BE584267EE7430FC208FC790CB3`. All pins independently matched before and after checks, including all 12 live self-check runtime dependencies and launcher. CONTRACT SHA256 `030859DD65E3AFF6A68F22A8645D0294F4937050C013293196314F6EBB7ED082`; technical delta `architecture/STAGE-21-COMPATIBILITY-CHECK.md` SHA256 `7FBC5DC193BDFC5F939F07A66FCCFC5CCFB5CF9D9074FFF4EC48EE4ACF02B20C`.
- Verdict: **PASS for bounded offline correction and dormant self-check preparation.** Root owns final acceptance and actual approval binding. This is not a provider outcome, recovered failure cause, billing reconciliation or Stage 2.1 human acceptance.

## Acceptance evidence

Independently passed 65 checks: 54 worker, bounded transport, compatibility, diagnostics, self-check and exposure-guard tests; 11 journal, fake live composition and private protocol tests. Typecheck and production build passed using pinned Node v24.19.0. Build retained client assets `index-pjVqHjWa.js` and `index-DTMIM4li.css`. Execution used isolated synthetic stores, injected provider responses and loopback processes only; no provider request, credential/environment inspection, paid launch or canonical store mutation.

Source review confirms the sole response-acceptance widening is bounded observational geography for exact pinned Haiku 4.5. Absent/null/standard geography and other bounded strings pass; wrong types, over64-byte strings and CR/LF/NUL reject. Requests omit geography. Required safe-integer quantities, 200000 input bound, output bound, model, stop/content policy, exact nested metadata counters, unknown usage fields, tiers, nonzero charges and explicit null cache-counter uncertainty remain strict. Missing/null/partial/complete-zero fixtures and malformed charge classes have independent regression evidence. Eighteen diagnostic reasons are reconstructed from an allowlist; arbitrary values, keys, bodies, headers, errors and credentials are excluded. First-failure files use exclusive creation, synchronization and a 2048-byte limit.

The fixed fictional self-check uses production serialization/transport/result validation, at most one count followed by one inference, output64, disabled thinking, standard_only and no tools/cache/geography parameter. Count admission4000 is explicitly an estimate; actual validated input may exceed it. Conservative reservation200320 microUSD covers200000 input at1 plus64 output at5 and fits212500 remaining after preserved415000 unknown holds against627500 aggregate. A failure/crash retains200320, leaving12180 within the aggregate ceiling. Local token estimate is separately labeled and billed expense remains null.

Approval/manifest and exact read-only original+second failed-consumed evidence precede credential access and reservation. Guard validates funding/profile, owner/session/attempt, unknownA207500, releasedB210000, no contributions/usage reports and aggregate authority. Isolated executable tests reject changed failed status, original/second expense, consumed authority, owner and funding. Read-only guard preserves seeded database bytes. Missing approval and source drift deny; fake-root live launch is additionally disabled. Valid DryRun creates no probe marker and instrumented fetch counter remains zero. Source flow returns before environment/key access. Actual `.stage21-selfcheck-review` and `.stage21-root-selfcheck` were absent at review completion.

The dedicated reserved marker is created with wx and fsync before counting; duplicate invocation cannot count or infer. Count refusal consumes the marker and blocks inference. Network failure preserves the full unknown hold, and repeated invocation cannot replay. Success/failure console and saved receipts contain validated quantities/identities rather than output body. Same-run crashes and partial files remain consumed; synchronization is not claimed as a universal physical power-loss guarantee.

## Preservation and findings

Old27 manifest SHA256 `FE0D4C55E49D25F7E76CFDCDB7688C485BDEB61075B1A5B690E1C38C94D98DE0` and old helper SHA256 `2351E095279BBE1FE1020AC64D10DDE0115956FEB1CC348B038BF7BE1CF9A27E` remain unchanged. Four altered adapter/diagnostic/test source pins intentionally fail that old launcher's pre-key candidate check. QA did not refresh historical authority, manifests, launchers or holds.

Before/after readable canonical hashes matched:

| File | SHA256 |
| --- | --- |
| Original authority | `378D92944F12725BCB42EF00A2492E358D7C6476CB7C80E69FD0C3ED0AC4CF94` |
| Original worker journal | `ABA3BFDF3A29B73AAFCDE1EFE18063286C2C3D26594344062B64A0B2D2F4A17A` |
| Second authority | `78FE6978ED06423260DE0C7D2992D6E51E88C694A9724300109841BDC42FF17C` |
| Second worker journal | `147D36F64C4A661F74DB40ADD7D09576EED2BF21D71267169E6F177DBFB917D6` |
| Second original diagnostic | `B91A8AE2CA277A07400C5A1F3BB3F7B363F38275F77E479BB93E0901F86FA1A1` |

Review findings corrected before freeze: dollar estimate renamed from provider-reported expense to local estimate with billed expense null; journal digest helper added to mandatory transitive pins; isolated guard tests and zero-network DryRun assertion added. No required fix remains. Compared with `operating-system/templates/review.md`, identity/revision/verdict/evidence/preserved decisions/fixes/limitations are all retained; compact sections and preservation table implement its core fields.

Residual limitations: fake fixtures cannot identify the discarded second response or prove live provider compatibility. Account/project identity is user-attested, invoices unverified; original/second holds are unknown exposure, not measured billing. No actual probe approval or launch, A/checkpoint/B success, product acceptance, accessibility outcome, pilot, publication or deployment is claimed. Root must create the actual manifest/approval binding only after accepting this frozen candidate, and retain any probe result without paid replay.

## Windows default-root correction review

The preceding PASS and B054 candidate remain initial historical evidence. Root subsequently created the reviewed approval and caught a dormant launcher defect in actual credential-free DryRun: fileURLToPath's default app root retained a trailing separator, so root+sep containment falsely rejected valid pinned files. No probe marker or provider request resulted. The initial fake-root tests used separator-free roots and did not cover this actual default-root case.

Final candidate is the same17-entry manifest, revised SHA256 `0BEB8D59CC1959A1A7681FABC1530B9BB0A55E600A0B90A638680887198EC339`. Only `selfcheck.ts` and `selfcheck-exposure.test.ts` changed. Builder normalizes default and supplied roots with resolve before containment and actual-root identity checks. Independent7 affected selfcheck/exposure checks and typecheck pass; new tests cover trailing-separator valid binding/DryRun with zero fetches, continued alternate-root live denial and manifest path escape rejection. All17 revised pins independently match. Unchanged portions of the prior65-check/build evidence remain reusable; affected prior launcher evidence is superseded by this correction.

Verdict remains **PASS for the corrected offline candidate**, pending root's administrative repinning and actual default helper credential-free DryRun. Actual review approval now exists; no actual probe marker exists. This correction does not grant a replay or new financial allowance.
