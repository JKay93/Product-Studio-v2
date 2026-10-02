# Review: Stage 2.1 failed-attempt offline correction

- Reviewer identity / role: Independent QA `/root/workspace_qa`, requested Sol medium, fork none; refreshed routing matched recorded provenance. Actual model activation is not independently observable. Read-only application review; only this report authored.
- Candidate revision and contract/requirement revision: Nine-file `tmp/byoa-stage21-failure-fix-20261002/failure-fix-manifest.json`, SHA256 `64DAAB04E809943F12AE6A92B0ABAE70812947BCC8EB8FF7A552554BE9B43804`. All nine source hashes matched before and after verification. CONTRACT SHA256 `E0B40EB5DBA87A734796D92AA517AA36AF57E2D8A77906C430253220E2D0A718`; technical failure report `runs/stage21-live-failure.md` SHA256 `4F0589533316EE0F18724912EBE254BEA35B1BEC227FF5C2F3F727B5CAA9E182`. Builder evidence: `runs/stage21-failure-fix-builder.md`.
- Verdict: **PASS for the bounded offline correction only.** This does not establish the actual failed trial's cause or a successful real trial, and does not authorize retry, reset, reconciliation or release of its unknown hold. The orchestrator records final acceptance.

## Acceptance criteria and evidence

Independent verification passed 54 affected checks across foundation, native Work, worker, bounded transport, diagnostics, live composition, journal and private protocol integration tests. Typechecking and production build passed with the pinned Node runtime. Client assets remain `index-XtBg5eK6.js` and `index-DTMIM4li.css`; there is no UI change. All execution checks used injected fake responses, isolated storage or loopback test processes. No credential, provider, account, authentication, spending or live retry action was performed by QA.

The adapter treats omitted optional cache counters as zero. Explicit null, incorrect types, negative values and nonzero counters remain rejected; unknown usage classes continue to fail closed. Fake-response tests prove this compatibility defect and its correction. They cannot prove that the real provider response omitted those fields.

Future diagnostics reconstruct a validated allowlist: schema version, validated attempt ID, allowed phase/category, optional HTTP status 100–599, strict `req_` request ID and timestamp. The separate file is bounded to 2048 UTF-8 bytes, created exclusively, synchronized, and cannot replace an earlier failure. Tests cover hostile metadata replacement, raw error/secret canaries, status and phase distinctions, transport limits/abort/timeout, journal and permission failures, post-claim binding, journal construction and World submission. Diagnostics failure remains best effort and does not retry a request or alter financial/execution authority. The journal write phase was corrected to cover both count and intent writes. A claim refusal before a validated attempt ID cannot create an attempt-specific file; untyped or unavailable metadata can remain `internal_unknown`.

Read-only canonical SQL confirmed the failed nonsynthetic session remains failed at epoch 2, A remains unknown with maximum exposure 207500 microUSD and no known expense, B remains released with maximum 210000 microUSD and no known expense, and there are no contributions or usage reports. The external authority remains consumed by the original failed session. A's count and intent markers exist without a response marker. Count was admitted, but intent precedes dispatch acknowledgement: it does not establish inference transmission, HTTP outcome or billed cost. B was unsent. A settled estimate of zero is not evidence of zero actual expense. The old generic discarded error cannot recover the actual failure cause; no diagnostic was backfilled.

## Preservation and document comparison

The journal/schema, live domain grant, current failed store, holds and authority were not changed by this correction. No source changes outside the accepted live baseline plus this nine-file fix were found in the preservation comparison; existing dirty JavaScript remained preserved. The earlier 20-file manifest, approved profile and launch helper remain unchanged. Their old source pins intentionally refuse the modified worker; this review does not refresh those pins or make a new launch available. The active user process was not stopped or restarted.

Before/after readable canonical hashes matched:

| File | SHA256 |
| --- | --- |
| `.stage21-live/authority.sqlite` | `378D92944F12725BCB42EF00A2492E358D7C6476CB7C80E69FD0C3ED0AC4CF94` |
| `.stage21-live/workers/journal.sqlite` | `ABA3BFDF3A29B73AAFCDE1EFE18063286C2C3D26594344062B64A0B2D2F4A17A` |

The worker directory still contained only its existing journal, with no diagnostic added to the failed attempt. Windows sharing locks prevent a complete byte-hash claim for the active lock and agent sidecar. The active World database can legitimately change with user actions. The partial storage manifest is not whole-store preservation evidence; read-only selected facts and absence of canonical paths in test execution are the narrower evidence used here.

Compared with `operating-system/templates/review.md`: all core identity, revision, verdict, evidence, preserved-decision, fix and limitation fields are present; sections and the hash table improve readability without changing their meaning. Technical and builder reports truthfully distinguish reproduced offline defects from the unrecoverable real cause.

- Required fixes: None remaining within this bounded correction.
- Residual risk / verification limitations: Existing failed A exposure remains unresolved. Diagnostic persistence is best effort, not a physical power-loss guarantee or complete coverage of failures before validated identity. No real provider outcome, invoice reconciliation, new human checkpoint or live acceptance was tested. Current canonical files could not all be hashed under active Windows locks. Native zoom, forced colours and screen-reader checks remain unverified; this worker-only correction provides no new accessibility evidence. Unaffected prior checks are retained only where source hashes remain unchanged, not represented as newly executed.
