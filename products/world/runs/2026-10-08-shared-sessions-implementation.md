<!-- studio {"id":"world:run:shared-sessions-implementation-2026-10-08","scope":"world","type":"run","status":"approved","links":[{"relation":"requires","target":"studio:rule:standing-orders"},{"relation":"depends_on","target":"world:run:sessions-chat-mockup-2026-10-08"}]} -->
# Shared Sessions implementation and simultaneous mentions

## Goal, authority and acceptance

User approved implementing the reviewed Session/chat mockup and explicitly asked for simultaneous-user mention testing and a behavior report. World goes to the verified JKay93/MyWorld repository; product records go only to JKay93/Product-Studio-v2. Preserve human data/settings, private direct history, existing governance, immutable migrations and the cumulative US$4 testing cap. Root alone owns live database/worker/browser tests. No production, new provider, external sending, new purchases or automatic collaborator fanout.

Accepted for controlled development on 2026-10-08 after independent source/offline review and actual protected database/API/worker/browser proofs. Repository delivery is recorded below when verified; acceptance is not production readiness.

| Task | Acceptance criteria | Outcome |
| --- | --- | --- |
| SS1 / Backend Builder | Persistent direct/shared distinction; one permitted Agent; eligible members and explicit supported payer/budget; server-authoritative mentions; ordinary human chat; additive protected SQL; retained legacy history and authority | PASS. Existing domain/repository/API/worker extended; reviewed migrations 044/045 installed. |
| SS2 / UI Builder | Approved reusable shell/layout; + creation; sender-correct replies; isolated drafts; Enter/Shift+Enter; floating Work/Outputs/Sources; deliberate questions/approvals and meeting workflow | PASS. Actual components, stories and signed-in local form checked; existing conversations remain reachable. |
| SS3 / QA + root | Independent review and real simultaneous callers/restricted claims, FIFO/context, replay, recovery/cancel/expiry, child progression, exact actor decisions, current access and cumulative budget fences | PASS. 281 tests / 54 files; all-migration reconstruction; protected rollback and actual two-caller/two-worker HTTP proof. No provider calls. |
| SS4 / root | Canonical decisions, behavior/evidence report, local preview/worker and verified repository delivery | Decisions/report and preview/worker complete; delivery receipts follow. |

## Implemented behavior

Direct Agent chats and optional shared Sessions are separate. + creates a named Session containing one permitted Agent and optional existing eligible World members. The supported payer is the creator through the current development provider pool; there are no fabricated company/member funding accounts. Initial room budget is immutable as an additional cap; policy may narrow it. Roots, descendants, retries and uncertain holds all count, with run/global ceilings still enforced.

Selected members receive only exact room-scoped Agent use where the creator already has issuer authority and positive current borrowing/source/access policies permit it. No email is sent. Membership elsewhere never grants Agent/source permission. Borrowed-Agent room authoring is not broadened beyond existing creator authority. Personal direct history is never copied into a room. Pre-existing conversations retain legacy classification and their original permissions; organization conversations remain subject to authorized World review.

Ordinary unmentioned Send stores a human message without a job. Server-derived canonical mention starts one request; a missing browser hint cannot suppress it, and a conflicting non-null hint is rejected. The mention button inserts an editable @Agent request without sending. Deliberate own-message meeting work and existing explicit team work use guarded ordered requests; existing questions/approvals continue without another mention. No automatic fanout is introduced.

| Scenario | Observed result |
| --- | --- |
| Two existing authenticated members mention simultaneously | Exactly two jobs; persisted acceptance ordinals 2 and 3 determine order. Either member may win acceptance; no person has priority. |
| Two restricted workers attempt those roots concurrently | Head acquires a lease; later request returns queued and does not invoke the provider. |
| First request receives context | Includes earlier human discussion; excludes the second request and a later human sentinel. |
| First finishes, second starts | Second sees the fresh first reply and its own requester identity; later human sentinel remains excluded. Both authorized members can read both replies. |
| Both users replay the exact submitted requests | Same message/job IDs; still exactly two initial jobs. |
| Head fails; later root starts; failed head is retried | Retry waits while the later root is active, then proceeds. Completed or failed work is not duplicated automatically. |
| Active request is canceled | Next request can start; canceled late completion is rejected. Already-transmitted provider work may still be aborting briefly; physical zero-overlap is not promised. |
| Meeting root delegates | Existing real teamStart creates guarded children; children progress while following root waits, then parent resumes and the queue advances. |
| Another member attempts a question/action decision | Exact initiating-actor checks reject unauthorized decisions; rendered controls are read-only for other members. |
| Access/issuer role/participation is revoked or expires | Fresh use/read/completion denies stale authority; blocked head work is drained through existing expiry behavior. |
| Shared budget would be exceeded | Valid 39,000 reservation under a 40,000 room cap succeeds; another 1,001 rejects specifically with 42501 / Shared creator budget exhausted. Settlement and uncertain holds retain existing accounting. |

Each run remains bound to its own authenticated requester. Shared context reserves eight recent human turns and four currently permitted prior replies, plus up to 24 relevant older turns within existing compiler limits. Earlier replies are revalidated for original/viewer source authority. Private admitted memory is not exposed as a room artifact. Stored history remains; finite context and lexical retrieval do not guarantee lossless recall.

## Evidence and corrections

Independent QA: full 281/281 tests in 54 files using two test workers, unchanged default timeouts; typecheck and final affected 37/37 pass. Builder affected UI checks, shared actor-owned controls, exact meeting source identity and canonical mention tests pass. Root full lint, production build, final gallery build and diff checks pass. Existing gallery bundle-size warnings remain; no new dependencies, service or model judge.

Protected root checks:

- All 45 migrations rebuilt in an empty rollback-isolated schema. Existing authenticated foundation, actual compiler, ordinary/delegated provenance and collaboration assertions pass; no retained reconstruction fixtures/schema.
- shared-sessions-rollback.mjs --draft passes real protected atomic submission, replay, FIFO/context/fresh replies, exact questions/current decision changes, actual meeting/team progression and initiating actor approval, shared cap/holds/settlement, expiry, issuer/participation/member revocation and direct-history guards. All changes rolled back.
- Installed 044/045 through the existing digest-checked migration runner. SHA256 044: F6F30E803271875AF9A3D482194D7B7A577FF6FBD297EA4935B0467C64A3ACFB; 045: B58E8894B46333DA71C9B2610CF7A81483D742FC4914370FDE55D3643CA42476. Installed 001–043 have no source diff. New migration bytes are protected by Git attributes.
- shared-sessions-app-race.mjs --root-worker-paused passes with two real authenticated caller cookies, two actual restricted worker connections and six exact synthetic jobs overall. No raw fabricated graph in place of teamStart, no privileged runtime, no provider calls/reservations in the committed race test. Wrong-origin/no-auth requests and revoked member are denied. Exact unpaid fixture cleanup and unchanged ledger assertions pass.
- Final live readiness: 45 migrations, zero eligible jobs, zero restricted worker connections before restart, zero Shared race fixture Worlds, cumulative ledger 431,770 microUSD unchanged. Existing older uncertain holds were not reset. User-testing worker restored, provider enabled under the unchanged US$4 ceiling.

Initial database/GitHub timeouts blocked live proof; credential-free checks later confirmed connectivity recovery. The first draft budget proof used 90,000 above the existing 45,600 per-attempt ceiling; its fixture amounts were corrected and independently reviewed without widening runtime policy. Initial HTTP race preflight hit the sandboxed localhost server's sign-in connectivity failure; the server was restarted with authorized existing network access and the actual test then passed. No fixture/schema/provider mutation occurred during the original connectivity failures.

Actual CUA checks: implemented offline components show separate drafts, author labels, own/other controls, Enter versus Shift+Enter, mention insertion and floating menu with item-only detail expansion. New-room fixture uses its selected members/budget and does not inherit another room's question. A real demo direct-chat selection regression was fixed. Offline fixture's fixed sidebar was corrected for narrow screens. At width320, chat scrollWidth320/composer bottom779 under800; at736 no horizontal overflow. Signed-in installed localhost shows existing conversations and the actual creator form; at320 its dialog is288 wide within a320 viewport, bounded768 height and scrollable. Root closed the form without creating human records or changing their Agent/World selection. Screenshot: World/test-results/shared-session-create.jpg (ignored local evidence). Physical mobile keyboard remains untested.

## Inventory, routing and metrics

Application delivery contains 39 files: eight new files and 31 changed files. New files are two additive migrations, two protected integration scripts, three focused test suites and one shared component story. Existing modules/adapters/UI/worker/tests are extended; no parallel chat engine, billing service or provider is introduced. Root AGENTS and migration byte attributes are administrative changes. Generated next-env development route-path noise and test outputs are excluded from delivery.

Current routing SHA256: 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. Backend /root/shared_sessions_backend and UI /root/shared_sessions_ui requested Builder gpt-6.1-sol/low/fork_turns none. Independent /root/shared_sessions_qa requested QA gpt-6.1-sol/medium/fork_turns none. Final QA PASS supports controlled development after root-observed proofs. Actual host backend activation/token/cost remains unknown. Root owns records/acceptance/live work; workers did not duplicate records or run live providers.

Accuracy: deterministic attribution/authority/queue/budget scenarios pass; semantic output accuracy is not benchmarked here. Latency: queueing serializes root replies; no extra model policy call, but representative end-to-end model latency remains unmeasured. Tokens/cost: no additional model judge, bounded shared retrieval, zero provider test calls/spend and unchanged 431,770 microUSD ledger; actual savings are not asserted.

## Delivery, questions and next action

No missing user approval or unresolved implementation blocker. Earlier connectivity question is resolved by observed recovery. Localhost3000/session17663 and restricted user-testing worker/session55015 remain running. Temporary gallery session4056 was stopped after verification; screenshot/test outputs and credentials remain ignored. The signed-in localhost tab8 remains open as the deliverable; its Agent/World selection was preserved. No automatic next phase.

World accepted commit 2fd4d407ca6fe91acf8c36845ed610a80d380c39 pushed to verified JKay93/MyWorld main; exact remote refs/heads/main confirmed at that revision. Studio source/evidence commit 56067c84cc3d7d3628120b8b46bd1e86f795646d pushed to verified JKay93/Product-Studio-v2 main and exact remote revision confirmed. It also delivers the earlier accepted preview commits that connectivity had blocked, without rewriting history. This receipt-only follow-up records successful delivery; no code or acceptance evidence changes.

Next: user tests direct chats and shared Sessions. Company billing, external invitation delivery, broader borrowed-Agent room creation, real-time human collaborative editing, lossless model recall, physical mobile keyboard and production readiness remain deferred. Already transmitted provider context cannot be recalled, and completed effects are not undone by later rule changes.
