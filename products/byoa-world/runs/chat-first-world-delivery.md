<!-- studio {"id":"byoa-world:verification:chat-first-offline","scope":"byoa-world","type":"verification","status":"draft","links":[{"relation":"verifies","target":"byoa-world:design:chat-first-world"},{"relation":"requires","target":"byoa-world:technical-specification:chat-first-offline-slice"}]} -->
# Verification and delivery: Chat-first offline World

- Independent reviewer: QA `/root/remaining_budget_qa`; last material update: 2026-10-03. Task identity began 2026-10-02 and is retained.
- Orchestrator acceptance owner: root; actual user product acceptance is not substituted by this walkthrough.
- Candidate: 19-path manifest `tmp/byoa-chat-first-20261002/candidate-manifest.json`, SHA256 `3C13D37AEC15E4BC75EEB88EC6CBADD0021CC1935CA0B98C1BFA827F8A4E81C1`; final assets `index-23DAvSi9.js` / `index-PMgc5Wnq.css`.
- Authority: latest CONTRACT user “build”; design `E9DBC2B8C7D7631B513238A4E9545BB8867A872312149917585CFC9BFB5FB18B`; technical plan `BCE76002C8560EFF26B5F8BDAA9961E8F92A58912169240898D8FC7EAB03B949`.
- Independent [review](chat-first-world-build-review.md), SHA256 `22B57D9FBEC59ED61FA5EDC2BAED92D45F5D9A4DEA6BC5E2F073DB6D4E5E09C5`: PASS for source/isolated offline scope, 51 distinct current checks; affected checks rerun after presentation fixes, unchanged backend evidence reused. Pinned typecheck and final production build pass. Original paid/native milestones are not completed by this evidence.
- [Builder report](chat-first-world-builder.md) and [coordination/routing](chat-first-world-build-20261002.md) retain before/after provenance. Configured requests were Sol low Builder / Sol medium Technical and QA, no-history; actual backend activation unknown.

## Verification

| Acceptance criterion | Result | Evidence | Limitation and owner |
| --- | --- | --- | --- |
| CFW-01/02: Chat default, five surfaces and World switching | PASS core rendered/source | Actual new World at native-disabled `http://127.0.0.1:4354/` opens Chat; simple composer, no welcome. Chat/Work/Knowledge/Incubator/Activity and World selector present. Second World has empty Chat/no first-World document. | User preference/visual acceptance remains theirs; PB-042 stays deferred. |
| CFW-03/05: selected team and offline work | PASS bounded offline | Root explicitly initializes starter definitions, renames orchestrator Mandy, creates user-built Designer, selects Mandy v2 + Researcher v1 + Designer v1, proposes then separately runs fixture. Send creates no work. Immutable originals and dependency attribution retained. | Deterministic fictional fixture, no AI/research, operational readiness, runtime grants or provider accounting. |
| CFW-04: reviewed document saved/reopened | PASS | Root saves new mentioned draft, reloads/reopens it, sends, edits review title/body, saves persisted review, confirms Knowledge acceptance and reopens read-only document after reload. QA independently verifies separate-process reopen, receipt/hash and stale/conflict/idempotency behavior. | Document version1 editing later is deferred; this is a disposable root-owned test World, not actual user product acceptance. |
| CFW-06: recovery/isolation/keyboard | PASS for exercised cases | Source/isolated checks cover owner/World/CSRF, graph integrity, lost acknowledgement, dirty editors and concurrent revisions. Actual navigation dialog retains draft on Escape and returns focus; Save and leave succeeds; keyboard mention selection works; Enter adds newline without sending; Ctrl+S saves draft. | Comprehensive keyboard/screen-reader assessment remains unverified. |
| CFW-06: responsive/targets | PASS exercised widths | Actual final 360px viewport: scroll width345px; 320px:305px, no horizontal overflow. World selector measured44px at both widths and default size. Final CSS applies44px to new feature controls. Temporary viewport reset. | Native200% browser zoom unverified: documented Ctrl+plus produced no change (device ratio1.25/width1280 before and after); no emulation falsely reported as native zoom. Forced-colour/reduced-motion manual checks unverified. |
| Existing human/native foundation | PASS checked scope | Existing World/note/config/public interfaces and mounted legacy Work retained; QA temporary original database byte-preservation tests pass. Protected56 live/runtime source entries and70 historical JS entries unchanged. | No actual live stores/keys/profiles accessed; consumed trials remain preserved and non-replayable. |

Root screenshots: `tmp/byoa-chat-first-20261002/preview/chat-first-build.png`, `narrow-320.png`, `narrow-360.png`. Root CUA tab22 shows actual application, not the previously blocked static local-file concept. Only fresh preview files under this task were created; existing live4353 was not operated. Screenshot demonstrates saved edited document, five surfaces, mixed team attribution and inspectable Details.

Two bounded rendered corrections were completed by Builder: everyday UI/audit-detail separation and accessible mention labels/primary action hierarchy; then44px new control targets. Final pins/checks are current. No further application edits are pending.

## Completion and delivery state

- Local acceptance: **candidate delivered; core offline journey verified**. Full manual accessibility and user product acceptance remain pending; do not report all CFW-06 checks passed or the real-agent Stage2.1 milestone accepted.
- Repository: local changes only; no push/merge in this task.
- Release: not released/deployed. Fresh native-disabled preview4354 is running in root-owned command session29273; its World/config/chat stores are under the task's `preview/worlds.sqlite` path. Opening the app does not admit any provider work.
- Recovery: additive `.chat.sqlite` sidecar; preserve it and existing foundation/config files. Rollback disables only new feature composition/UI, retaining saved data. No deletion/reset/migration of original records performed.

## Residuals

- Native zoom, screen-reader, forced-colours and reduced-motion manual checks remain unverified due available host controls; no hidden substitute or inherited PASS.
- All output is explicitly fictional/offline. Real runtime harness, BYO/nested agents, richer Knowledge editing/retrieval and billing expansion remain outside this slice. Welcome PB-042 deferred.
- Provider/model calls, credentials, new spending, trial replay, weekly pilot, publication and deployment remain held. No request for more funding or another live test is needed to inspect this build.
- Next: user may review this local candidate. Any changed code invalidates affected checks/pins; future live execution requires separate authority and readiness.
