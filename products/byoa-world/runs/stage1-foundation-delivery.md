<!-- studio {"id":"byoa-world:assignment:stage1-foundation-delivery","scope":"byoa-world","type":"assignment","status":"approved","links":[{"relation":"requires","target":"byoa-world:decision:world-foundation"},{"relation":"requires","target":"byoa-world:roadmap:main"}]} -->
# Assignment: Stage 1.1 human foundation

Owner: orchestrator. Updated: 2026-10-01. Entry: user-approved Decision 002.

- Project/goal: BYOA World; deliver BYOA-WLD-01–06 from approved foundation package.
- Sources: studio AGENTS/STANDING_ORDERS, project AGENTS/latest CONTRACT/STATE,
  ROADMAP Stage 1.1, Decision 002, approved foundation plan, organization Decision 001
  and MODULARITY. Calm mockup is conceptual design input, not application code.
- Template: compact assignment.md; final review.md and verification-release-report
  content consolidated here. Preserve candidate, routing, scope, checks, findings,
  limitations and orchestrator disposition; avoid duplicate feature documents.
- Preservation: verified recovery archive/manifest in
  `tmp/byoa-foundation-preservation-20261001/` covers 148 original files, including
  73 ignored data/evidence files. Original files remain in place. Never run pilot/provider
  launchers or rewrite original stores. Package/gitignore additions must be additive.
- Approved decisions: one planning note per World; explicit durable Save; complete
  dirty/pending/error/conflict/uncertain-response behavior; calm accessible responsive
  UI; React/TS/Vite + Node/SQLite; local owner; feature-owned ports/public entries;
  separate startup/database; no automatic legacy import.
- Open implementation choices: compatible project-local version pins, naming/token
  tuning and focused test technique within approved architecture. No silent stack,
  SQLite-driver/runtime or effort substitution.
- Authority: local implementation/setup/test/preview only. Zero new spending; no
  credentials, private input, provider calls, weekly cycles or publication/deployment.
- Blocker handling: report exact failure and evidence; continue unaffected work.
  Two implementation corrections and one review correction before replanning.

## Assignment A — runtime, ownership and persistence

Builder uses GPT-6.1 Sol Low with `fork_turns: none`. Write only application
`package.json`, lockfile, additive `.gitignore`, foundation tsconfigs/build config,
`src/app/foundation/` server/start/HTTP tests, World/planning-note domain modules/tests,
`src/platform/local-owner/`, `src/platform/sqlite/`, `src/shared/contracts/`, and
foundation-specific README sections. No legacy source/data changes. Include note API
now to settle the interface for B; browser/UI files reserved for B.

Deliver Node runtime/dependency pin, TS build/typecheck, distinct startup, SQLite
schema/ports/transactions and HTTP authority/validation, World create/list/open/rename,
one-note create/get/save with revisions, command-key deduplication and lost-response
reconciliation contract. Use exact Unicode/whitespace; bound byte parsing; refuse
unknown/corrupt schemas and partial commits. List API/DTOs explicitly for B.

Meaningful checks: two Worlds and restart; wrong World/note tuple; competing revisions;
one-note constraint; duplicate creation commands; rollback/locked/read-only/invalid
schema; cookie/Origin/CSRF/identity denial; split UTF-8/body limits. Run isolated
affected tests and build/typecheck; do not claim UI complete. Hash candidate files.

## Assignment B — actual human workspace

After A's interfaces settle, builder implements feature-owned World/note React UI,
shared presentation controls/tokens and foundation browser/shell composition.
Integrate approved journey and all feedback/dialog states, keyboard/focus, narrow
layout and safe conflict/lost-ack recovery. No fake agent controls. Validate actual
build and isolated domain/HTTP/browser journeys. Preserve A's reviewed contracts.

## Assignment C/D — review and walkthrough

One independent QA worker (GPT-6.1 Sol Medium / none) reviews actual integrated
candidate, approved architecture, preserved originals and meaningful tests. Browser
verification covers desktop/narrow/zoom/keyboard, saved restart, errors and conflict.
Orchestrator presents actual local preview and records user disposition. Stage 1.1
is not complete until reviewed delivery and user walkthrough; Stage 2 not started.

## Routing and candidate evidence

Routing SHA256: `8E7006FA200C6A88958E5AAEE409AB93C60A3FD7E3765241B3FE7C27246E3A45`.
Active host supports GPT-6.1 Sol Low/Medium. Dispatch details/returned IDs will be
recorded here; actual backend activation remains unknown unless host exposes it.

| Assignment / role | Explicit request | Returned task ID | Host evidence |
| --- | --- | --- | --- |
| A / builder | gpt-6.1-sol / low / none | /root/foundation_builder_a_61 | Host accepted explicit request; actual backend unknown |
| B / builder | gpt-6.1-sol / low / none | /root/foundation_builder_b_61 | Host accepted explicit request; actual backend unknown |
| C / independent QA | gpt-6.1-sol / medium / none | /root/foundation_qa_61 | Host accepted explicit request; actual backend unknown |

B was dispatched after A settled its API/DTOs, with nonoverlapping UI-only writes
while A finishes server/storage checks. A retains server/start/config; B owns
foundation index/browser/shell/client/UI-state/styles, feature-owned ui entries and
shared presentation. Same-origin API includes session bootstrap, Worlds GET/POST,
World GET/PATCH, note GET/POST and note-ID PUT. Mutations carry CSRF and expected
revisions or persisted creation command keys; names trim, title/body preserve exact
text. Shared contract changes require explicit coordination with A.

## Candidate and checks — final local candidate

Integrated candidate: **32 files**, manifest
`tmp/byoa-foundation-preservation-20261001/integrated-candidate-hashes.json`, actual
file-byte SHA256 **`e132677331928d42081e81e37434da5a4eb90f09cda0cc1eb0a820f32a595b9f`**.
This supersedes the interim 29-file entry: its digest was calculated before Windows
newline serialization and was not a valid candidate binding. The corrected interim
31-file binding was `f4c62cd3383d333f82b41c33c27156f22e5061c39cf4f53cbd2751c63f5c571d`;
the final manifest includes the confirmation replan below. QA verified all 32 hashes.
A and independent QA ran **12 focused tests and typecheck: PASS**. Both builders
report final production build/typecheck PASS; final B build follows the dialog replan.
Root's final preservation receipt confirms 145 original files unchanged; three
original setup files receive additive changes (README, package, gitignore).
All 73 ignored `.data/`/`.phase1/` files remain identical. QA also independently
verified preservation and the original package scripts before the UI-only replan.

Root isolated browser initially exposed classic-JSX runtime failure despite successful
build; A explicitly selected automatic JSX and rebuilt. Root then found phantom dirty
state after Save and leave; B correction 1 uses the latest acknowledged draft snapshot
and avoids resetting drafts on normal navigation. Browser retest passed. Independent
review also found focus/footer contrast and a raw-text boundary guard insufficient;
builders corrected contrast and added the resolved/transitive TypeScript AST guard.
B's second original correction reconciles uncertain creation by replaying the same
command and reading current canonical state while retaining the draft. A's second
correction includes the AST guard and inert read-only retained-work access. These
corrections preserve the original task identities and prior evidence.

## Bounded verification replan

Both original builder correction bounds are used. Independent source review found
no remaining required fixes after corrections, but browser native JavaScript
confirmation handling stalled. Replan changes the confirmation implementation to
the approved accessible HTML dialog style already used for unsaved navigation.
Same Builder B route/identity owns only the two feature UI files and a shared
presentation dialog helper; no storage/scope/authority change. Root verifies cancel
and explicit discard, then QA reviews only changed UI and evidence against the
new candidate. Prior persistence/authority/preservation evidence remains applicable;
no model escalation, new pilot, financial reset or additional features.

Making the preview visible resolved viewport control: actual 360px note layout
has no horizontal overflow and all visible button targets exceed 44px. Native 200%
zoom remains a distinct tool limitation; 640px reflow is not claimed as actual zoom.

## Final independent review

Same QA worker `/root/foundation_qa_61` resumed after checking its recorded
gpt-6.1-sol / medium / none request against freshly read routing SHA256 above.
Supported host route matches; actual backend activation still unknown. No new
review committee or model escalation. Review is read-only and bounded to the
two feature UI changes, shared confirmation helper and candidate/evidence binding.

QA verdict: **PASS for the bounded UI replan; no unresolved source fixes**.
All 32 candidate hashes match. Independently reran the two affected architecture
boundary checks: both PASS. Earlier independently rerun 12-test/typecheck and
preservation evidence remains applicable; latest build/typecheck is builder-reported.
The dialog has labelled title/description, a safe Keep editing default, Escape
cancellation, trigger-focus restoration and explicit discard. Reload guards retain
drafts on failure and prevent saves during reconciliation. Feature rules remain
feature-owned. QA assessed root's browser observations; it did not repeat them.

This source PASS does **not** claim native 200% zoom, user acceptance or release.
The prior overall PARTIAL browser verdict is narrowed by completed observations
below; native zoom and user disposition remain unresolved verification items.

## Actual verification and limits

Checks use fictional data in `.foundation/browser-verification-20261001/worlds.sqlite`
on port 4350, isolated from the delivered default database and all original stores.

| Area | Actual observation / result |
| --- | --- |
| Meaningful automated checks | 12 PASS: exact text/reopen, child-process restart, persistent creation replay, ownership/tuple/one-note constraints, revision conflicts, transactional rollback, lock/read-only/FULL faults, incompatible/corrupt schema refusal, HTTP authority/limits and architecture boundaries. SQLite FULL is simulated capacity exhaustion, not an OS power-loss test. |
| Human journey and scope | Created Garden project and Reading group; separate resources; saved/opened again. World name and note saved by Ctrl+S; blank required title gives visible error; empty body is allowed. World later renamed Weekend reading. |
| Text fidelity | Title `  First plan 🌍  ` and body whitespace/newlines plus café/東京/🌍 survived save/reopen. Transport tests also check split UTF-8 and byte limits. |
| Dirty navigation | Keep editing retains draft and returns focus; Save and leave persists before navigation. Retest after correction no longer produces phantom dirty prompts. Explicit discard is available. Unsaved browser crash recovery remains outside scope. |
| Server failure and recovery | Stopped only the known isolated server. Save became uncertain and retained/disabled the draft. Restarting the same store preserved identity and saved Worlds. Recovery renewed session/CSRF without a page reload, then deliberate retry durably saved revision 4. |
| Note conflict on final UI | Two tabs started at revision 5; first saved revision 6, second got 409 with exact local draft retained and newer canonical shown. Keep editing autofocus; cancel kept draft and restored trigger focus. Explicit discard then loaded exact saved revision 6. |
| Name conflict on final UI | Two tabs started with Garden project; first saved Garden planning, stale second name remained in the field with conflict. Escape retained draft and restored trigger focus; explicit discard loaded Garden planning. |
| Appearance / keyboard | Actual desktop screenshot matches selected Calm direction; labelled inputs, save shortcut, visible focus, safe confirmation focus and Escape cancellation checked. Corrected focus contrast >=3.822:1 and sidebar footer 5.282:1 in QA's source assessment. |
| Responsive | Actual 360px viewport: no horizontal overflow (content scroll width 345 including scrollbar), visible buttons >44px. Actual 640 and 1280 layouts also checked. Temporary viewport override reset before delivery. |
| Native zoom | Control+plus/equal did not change browser zoom in the available controls. Actual 200% browser zoom remains unverified; 640px reflow is not equivalent evidence. Finish manually during walkthrough. |

## Retained work and preservation

Verified preservation ZIP contains 148 originals, including 73 ignored evidence
files. Final `preservation-check.json` binds the 32-file candidate and confirms
145 untouched originals plus additive changes to README/package/gitignore.
Original main HEAD remains `0312413d556767efae1d692198aa8edc7845e11b`; prior local
Phase 1 work is retained. No original Product-Studio/OpenClaw edits or migration.

The README's explicit read-only command produced
`BYOA-World/.foundation/retained-work/accepted-book-swap.md`. It validates the accepted
proposal `40ea6e23-a50b-41ed-ac41-ce07de45e47c`, revision 1 and receipt/body correspondence;
all 899 body characters match exact UTF-8 source bytes. The source remains unchanged.
Output SHA256 `d73a3339a2c88d6e2c80bf6d3c3a745057d219db4f95f492c22c3c0eb0920faf`.
The inert Markdown view remains separate from SQLite; no old runtime/provider is
started. `retained-access-check.json` records the proof. Original consumed attempts,
budgets and unknown usage remain unchanged; unused cycle 3 was not run.

## Local delivery and orchestrator disposition

Orchestrator accepts the reviewed source candidate for local walkthrough, with
native 200% zoom explicitly pending. This is not full Stage 1.1 completion or a
new user acceptance. ROADMAP.md remains the single milestone-status source.

Clean preview: **http://127.0.0.1:4330/**, bound to loopback only, default
`.foundation/worlds.sqlite`. Hidden bundled Node process PID 42816; startup log
confirms the URL and browser shows No Worlds yet. Test Worlds were not copied in.
Separate test server PID 29988 is stopped after verification. No publication,
deployment, provider execution, credentials/private input or new spending.
Node 24.19.0's built-in SQLite remains the approved release-candidate adapter;
local demonstration ownership is not account authentication/private-data assurance.

Reproduce from `BYOA-World/`: `npm run build:foundation`,
`npm run typecheck:foundation`, `npm run test:foundation`,
`npm run start:foundation` using the documented pinned bundled runtime. Existing
scripts are preserved; do not launch legacy pilot commands for this walkthrough.

Screenshots are actual verification UI, fictional Garden planning, at
`C:/Users/jingk/.codex/visualizations/2026/09/29/01a0eeca-f817-73b1-97c2-8fc4574329e8/foundation-desktop.jpg`
and `foundation-narrow.jpg` in the same folder. Final clean-start screenshot is
`foundation-clean-start.jpg` in that folder. Browser deliverable tab is marked to
remain open; the preview is also requested in the Codex browser panel.

Walkthrough: create a fictional/public project World; write and save its planning
note; navigate away/back and rename the World. Create a second World to compare
scoping. Inspect desktop/narrow layout and native 200% zoom. Record feedback and
disposition; Stage 2 participation discussion follows the completed foundation.

Final administrative checks: studio harness `check` reports ok=true, no errors or
warnings. Application and studio `git diff --check` pass (line-ending conversion
notices only). After stopping the known isolated test process, the default preview
reload still renders No Worlds yet. A network-listener inventory was unavailable
under host permissions; live preview availability is verified directly in-browser.

## User feedback — 2026-10-01

After the local delivery and screenshots were presented, the user replied
**"looks good"**. Record positive feedback on the presented foundation; no changes
were requested. This does not establish that the user performed the journey or
native 200% zoom test. The candidate and review binding are unchanged; native zoom
remains pending before Stage 1.1 closeout. No Stage 2 implementation or pilot is
started from this reply.

## Final foundation disposition — 2026-10-01

User: **"I have also checked the 200% zoom btw, its fine. Sure proceed with stage 2"**.
Manual native 200% zoom: **user-reported PASS**, resolving the last recorded check.
Orchestrator accepts and closes Stage 1.1 against the unchanged reviewed 32-file
candidate (manifest SHA256 e132677331928d42081e81e37434da5a4eb90f09cda0cc1eb0a820f32a595b9f),
independent source review, recorded automated/browser checks, positive user preview
feedback and this final manual check. No additional user-performed test is invented.
Earlier pending-disposition entries are historical and superseded by this closeout.
No publication or live-agent execution occurred. Stage 2 discussion/design is next;
Stage 2.1 implementation and execution require the participation package decision.
