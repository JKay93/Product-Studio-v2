<!-- studio {"id":"byoa-world:technical-specification:chat-first-offline-slice","scope":"byoa-world","type":"technical-specification","status":"draft","links":[{"relation":"implements","target":"byoa-world:design:chat-first-world"}]} -->
# Technical specification: Chat-first offline slice

- Technical Specialist owner: Agent Configuration Technical; last material update: 2026-10-02.
- Authority: latest CONTRACT, user “build”; Chat-first proposal criteria BYOA-CFW-01–06; Decisions 005 and 007. This authorizes offline application work, not provider execution.
- State: builder-ready specification; candidate implementation and rendered review still required.
- Template mapping: the technical-specification core sections below cover interfaces/invariants/failures, approach/rollout/observability, and tests/readiness. No broader harness design is implied.

## Interfaces and behavior

### Responsibility boundaries

Keep the foundation World, planning note, configuration and native execution features intact. Add one small offline feature with public service/repository contracts, a deterministic fixture adapter, and Chat/Work/document/Activity views. Its new work records are distinct from native sessions. The app composes it through `foundationServer` options; it must never invoke NativeWork, MachineGateway, a worker, provider, account, allowance or capability.

Use a new `<foundation path>.chat.sqlite` sidecar for conversations, messages, drafts, synthetic tasks, review copies, accepted documents and command receipts. Bind its owner to the foundation owner, validate its schema on reopen, use SQLite foreign keys, transactions and FULL durability. Do not migrate the foundation/configuration schemas or reuse the single planning note as a document collection. Sidecar failure disables these new functions with a recoverable error; existing World/note/configuration remain usable. All access first calls public `WorldService.get(owner, world)`; never read another feature's tables directly.

Suggested bounded source ownership:

- `src/shared/contracts/chat.ts`: serializable DTOs and command unions only.
- `src/features/conversations/chat/{index.ts,repository-port.ts,fixture.ts,ui/*}`: service, validation, deterministic adapter and new views. This single feature may own its small task/document projection rather than create a framework of empty features.
- `src/platform/sqlite/chat.ts`: additive sidecar implementing the repository port.
- `src/app/foundation/{server.ts,client.ts,shell.tsx,start.ts,styles.css}`: composition, routes, client and navigation only.
- `tsconfig.foundation.json`, `runtime-launch.cjs`, focused new tests: include new files/checks explicitly. No runtime package installation is needed.

Builder may adjust local file names to existing conventions. Legacy native/live launchers, journals, profiles, funding and authority files are outside this slice. Existing live port 4353 and its storage are off limits.

### Persisted contract

Every record includes ownerId/worldId; nested references are validated against both. IDs are server-generated, time is server-supplied, and browser identity fields are rejected.

| Record | Minimum fields and invariants |
|---|---|
| Conversation | id, title, revision, createdAt, updatedAt; immutable message order; explicit creation, no GET mutation |
| Draft | conversationId, text, selected mention snapshots, revision; one retained draft per conversation, independent of message history |
| Message | id, conversationId, sequence, text, createdAt, human author; explicit mention snapshots; immutable after send |
| Task | id, conversationId, sourceMessageId, title, revision, proposed/completed/stopped state, fixtureId/version/hash, selected participants, input manifest; exactly one task for the chosen source message in this slice |
| Contribution | id, taskId, participant snapshot, simulation assignment, text/hash, dependency contributionId/hash; immutable |
| Review copy | taskId, title, body, revision; editable copy distinct from immutable generated contributions |
| Knowledge document | id, taskId, accepted review revision, immutable version 1 title/body/hash, creator and provenance, receiptId; one accepted document per task |
| Activity | immutable ordered events with conversation/task/document links; a projection of the same committed commands, not an independent execution database |
| Command receipt | owner/world/key, command kind, canonical payload fingerprint, exact result; immutable, durable and recoverable |

Agent snapshots contain saved agentId, configVersionId, revision, name, kind, role, purpose, instructions and origin. Capture them server-side through AgentConfigurationService.get, compare the client-selected version to the current saved version, and reject stale selection before proposal. Once committed, display the snapshot forever even if the saved definition changes; start uses that disclosed proposal snapshot. This requires no historical configuration API or migration. Instructions are attribution/context only: the fixture does not interpret them or acquire permissions. Saved definitions retain `configuration-only` readiness; synthetic attribution cannot upgrade that state or represent actual agent participation.

The team is exactly one saved orchestrator and two distinct saved specialists from this World, selected by the human. Their fixture assignments are explicitly “Research brief” and “Landing-page concept”; saved names/roles may differ. Designer is not an existing default. If the owner wants that named specialist, link to Incubator creation; do not auto-create, rename, recruit or silently pick Planner/Reviewer. Arbitrary `@words` remain text. The accessible picker selects only known saved definitions and shows the pinned version; chips provide clear/remove controls. Sending a message persists conversation text only and never starts a task.

### Public routes and commands

Use the existing owner session, same-origin/CSRF authorization, JSON parser and FoundationError mapping. All new routes sit under `/api/foundation/worlds/:worldId/chat`; enforce exact fields, bounded strings, route ID structure, and ownership on every read and command. Suggested read routes:

- GET `/conversations`, `/conversations/:id` (messages plus durable draft), `/tasks`, `/tasks/:id`, `/documents`, `/documents/:id`, `/activity`, `/commands/:key`.
- POST `/commands` with a discriminated allowlisted command union. This is a feature-local command endpoint, not an extensible runtime protocol.

Commands all require commandKey (1–120 characters); mutable records require expectedRevision. Define createConversation(title), saveDraft(conversationId, expectedRevision, text, mentions), sendMessage(conversationId, expectedDraftRevision, text, mentions), proposeTask(conversationId, sourceMessageId, orchestratorId/version, two specialistId/version selections), runFixture(taskId, expectedRevision), stopProposal(taskId, expectedRevision), saveReview(taskId, expectedRevision, title, body), acceptDocument(taskId, expectedReviewRevision). Builder may expose equivalent semantic routes while retaining these guarantees.

Create an empty conversation explicitly through New chat; a first Send may atomically create it using the same command receipt, rather than strand a user message between two requests. Send inserts the immutable message and clears only its matching durable draft in one transaction. Task proposal is separate from Send; it records the exact source message and fixture context. `runFixture` is the explicit human “Run offline example” authorization. It validates the proposed revision, computes two bounded deterministic contributions, and atomically commits contributions, completed state, initial review copy, events and receipt. No background process or resumable runtime is created. Stop applies to an unrun proposal; do not simulate a cancellable running provider task. Duplicate Run returns the original receipt; a new command cannot run a completed/stopped task again.

Acceptance takes the server's persisted review copy, not arbitrary browser title/body. It checks the exact review revision and absence of a previously accepted document, then inserts document version 1, linkage, event and receipt atomically. Subsequent knowledge editing/versioning is deferred; the finished slice must reopen the accepted document read-only. The existing planning-note editor remains separately available in Knowledge.

Use modest finite limits: conversation title 120 characters; message/draft 20,000; review title 200/body 100,000; at most three selected participant references; list pages at most 50 entries with stable cursors. Never return an unbounded full World history. Do not render user/fixture content as HTML.

### Fixture and truthful UI

Ship exactly one fixture, e.g. `fictional-bakery-landing-v1`, with two invented competitors and an invented business brief. Pin its version/hash in the task. Research produces a brief from these fixture records with explicit fictional citations; the landing concept uses the exact recorded research contribution hash. The selected orchestrator attribution describes this deterministic sequence; neither it nor the specialists performed AI inference or real research. The user's message is preserved as the request and may appear as quoted context; it does not turn this fixture into an arbitrary research engine. Show “Offline example · synthetic fixture · no provider calls” in setup, outputs, document provenance and Activity. Do not manufacture usage, reasoning, live progress, citations to real businesses or claims of instruction execution.

Chat is the initial surface after opening/creating a World. Provide the five primary surfaces Chat, Work, Knowledge, Incubator, Activity and a World switcher; World details remains a secondary control. Blank Chat has New chat and an enabled blank labelled composer, no welcome/dashboard. Setup exposes selected saved versions, fixture context, direct dependency and explicit Run. Chat and Work link to the same task/review; Knowledge opens the same accepted document; Activity links to those existing IDs. Keep the existing legacy WorkPanel mounted as required by its guards and identify its history separately without redirecting synthetic actions into native work.

Extend the existing aggregated dirty/busy/uncertain guard to conversation drafts and review copies, including conversation and World switches. Save draft is explicit and durable; Ctrl/Cmd+S saves the active draft/review. Loading persisted state must not overwrite a local dirty copy. Loading, empty, error, conflict and uncertain states are distinct. If a mutation response is lost, retain its command key and exact payload, query the receipt, and allow retransmission only with that same key/payload after recovery; never allocate a new key to guess success. Disable discard/leave while an acknowledgement is unresolved. Conflict retains local content and offers reload/compare. Render only the currently selected World's response; stale responses cannot populate another World.

## Approach and dependencies

Chosen approach: an additive sidecar and one synchronous fixture, retaining existing public ownership/configuration services. This avoids a destructive migration, native runtime generalization and multi-store document acceptance. Knowledge documents and receipts share one transaction; planning notes remain independent. No provider permission is inherited from saved definitions or from persisted Chat history.

Implement contracts/repository and ownership tests first, compose feature routes second, then integrate the five surfaces and guards. Opening the new sidecar is explicit composition at normal offline startup, not a GET side effect. Unsupported/corrupt storage fails closed and is never reinitialized. Rollback removes only the new composition/UI; retain the sidecar for recovery. No deletion/reset command is part of this slice.

Use Ink Clay tokens and accessible control edges from Decision 005/proposal: system 16px/1.5, 44px controls, visible 3px focus, restrained clay identity, native controls. At narrow widths the rail/World selector wrap above content and history stacks; long names and documents wrap. Preserve reduced motion/forced-colors behavior. Mention choices support keyboard selection, Escape, clear and announcements; Enter inserts a composer newline. Explicit buttons trigger Send/Run/Save; document any shortcut. Preview restores focus after closing.

Observability consists of committed attributable feature events and sanitized errors. It must not log credentials, runtime capability data or invent provider accounting. Activity is unavailable when its read fails, not falsely empty.

## Verification and readiness

No product reversal or external prerequisite blocks this offline plan. Root owns authority records; builder owns implementation; independent review must verify preservation and truthfulness.

| Design criterion | Meaningful evidence |
|---|---|
| CFW-01/02 | Fresh/reopened World enters Chat; blank composer; five navigation destinations and history; no welcome; desktop and 320/360px rendering |
| CFW-03/05 | Send never runs; exact three distinct same-World saved definitions; unknown mentions/stale selection rejected; explicit Run; fixture dependency hash and immutable attribution survive configuration edits |
| CFW-04 | Review edit preserves original contributions; explicit accept writes exactly one document/receipt; lost acknowledgement recovered; stale review rejected; reopen after process restart matches saved hash |
| CFW-06 | Cross-owner/World reads and nested ID substitution denied; key replay/different payload conflict; concurrent draft/review edits retain local changes; dirty World/conversation navigation; sidecar failure retains World/note/config access |
| Preservation | On closed seeded temporary copies, original foundation/config rows and bytes remain unchanged through new feature commands; native A/B regression checks pass; no native option, worker, live file, credential or provider accessed |

Add service/SQLite and real owner/CSRF HTTP tests for these invariants, deterministic fixture tests, and focused UI guard/picker tests. Extend the existing launcher test inclusion to run them; typecheck and production build must pass. Test restart against closed temporary stores. Do not broaden tests into paid transport or live activation.

A bounded rendered preview uses a new disposable foundation/config/chat store under a task-specific temporary directory and unused loopback port (e.g. 4354 after checking availability), with native disabled and a visible synthetic label. It must not open actual live stores or reuse 4353. Verify the complete Chat→proposal→explicit Run→review→Save to Knowledge→reopen→Activity path, keyboard picker/dialog/focus, 320/360px layouts and native 200% zoom. Record which manual accessibility checks actually ran. Candidate report must link touched-file inventory, checks and rendered evidence; implementation readiness does not certify real-agent participation or authorize providers.
