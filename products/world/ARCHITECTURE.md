<!-- studio {"id":"world:decision:architecture","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World architecture decisions

## Assembled request capacity [world:req:request-capacity-runtime]

Implemented2026-10-10: operational input ceiling32000tokens, output4096unchanged.
The full admitted guidance, native tool schemas, history and sources are counted
before reservation/dispatch; this change does not trim context or expand source
access. Additive059 coordinates component/single-call reservation bounds131200
microUSD and measured input usage32000, retaining exact replay, authority and
cumulative/Session/run/discussion budgets. Existing per-token estimates and25%
reservation margin remain; smaller requests reserve their counted size, not32000.
This is World policy, distinct from the active model's physical context window.
Model-aware compaction remains future work. Verification and research:
[request ceiling run](runs/2026-10-10-request-ceiling-clarification.md).

## Template-aware private document execution [world:req:autonomous-document-runtime]

Implemented2026-10-10 within the existing job, restricted worker, PostgreSQL and
Knowledge stack. A seventh native tool saves one owner-private document draft or
updates an exact owned version/generation/revision. It terminates with a trusted
receipt; native retry is idempotent and another job cannot silently duplicate the
same title/folder. Existing immutable history and CRDT snapshots survive updates;
stale writers fail before overwrite. Publication remains a separate human command.

Document intent is semantic Agent judgment, not an immutable keyword rule.
Ordinary conversation/brainstorming does not request a save. Lazy document-type
search combines permitted existing documents and bounded template metadata;
explicit selection, applicable mandatory/default/convention and reliable unique
matches guide choice. Material ambiguity gets one focused decision. A complete
selected version must be read before saving; required headings and inferred
headings/table headers/field labels are structure checks, not semantic accuracy.
Current bounds remain three model calls/two retrievals, complete reads at most
64passages/12000characters, discovery at most50candidates/16000characters.
Larger sources fail truthfully rather than silently using the first excerpt.

Private templates, saved receipt metadata and exposed version identifiers retain
exact provenance through replies, history and learning evidence. Source-free saved
draft outputs also remain owner-private. Receiving audience and current authority
are rechecked; metadata is untrusted context and cannot grant authority. Quiet
template declaration binds a saved version; organizational default/mandatory/
project convention requires owner/admin authority and a published source version.

Question cards carry only material choices; repeated matching question prose is
removed without stripping code, quoted material or document Open Questions.
Existing grouped-round/lifecycle controls resume once with all answers and the
original task. A neutral nonblank reply supports card-only decisions. Failures
persist only closed stage/code/provider reasons; manual recovery retains accounting
and permissions, and never blindly redispatches uncertain paid work. Historical
failures with no retained diagnostic are not retroactively explained. Additive
057/058 and exact proof receipts are recorded in the autonomous-document run.

## Knowledge rich documents and collaboration [world:req:rich-document-runtime]

Implemented2026-10-09: Tiptap/Yjs uses the existing authenticated HTTP application
and database, without another worker or hosted collaboration service. A bounded
private CRDT draft serves the authenticated document owner and their active clients;
published members, archived documents and cited/historical passages retain immutable
saved snapshots. The approved reference flow narrows unpublished access to the
first creation actor. Current durably autosaved versions may be admitted to that
actor’s personally owned Agents only in a private direct audience. Shared Sessions,
other Agents and managers cannot retrieve that private draft or its derived output.
Caller JWT, current World authority, creation permissions and RLS apply
on every read/effect. Server schema/projection validation and a purpose-bound HMAC
attestation fence direct RPC forgery; revisions handle simultaneous writers.

Autosave persists working edits, with deduplicated private snapshots and deliberate
saved-head publication. Restore starts a fresh generation and retains earlier
published content. Expiring identity-bound relative cursors and in-memory retry
requests support active clients. Unsaved disconnected edits survive reconnection
in the same open tab; tab/device recovery of unacknowledged edits is deferred.
Existing encrypted originals, exact saved Markdown and Unicode passage anchors
remain authoritative. Additive056 stamps immutable authenticated creator ownership,
indexes exact durable draft generation/revision/digest as immutable private sources,
and revalidates the receiving execution plus actual retained viewer. Private
dependencies include descendant citations and inherited memory provenance; human
projection/release/notice reads gate before privileged identity switching. Explicit
Publish/history/Restore actions serialize behind in-flight sync without queueing
periodic polls; exact retry intents and stop/access/generation checks remain intact.
See [reference-flow run](runs/2026-10-09-knowledge-document-flow.md) for current proof
and the rich-collaboration run for earlier mechanics.

Accepted2026-10-09 capability bundle: closed native history/Knowledge search/read and
Agent/Knowledge proposal tools are offered from current SQL authority. At most three
model calls and two retrievals execute per attempt, with one native call per response.
Tool results are bounded untrusted reference data; exact native continuation stays
in process, including opaque thinking blocks, never persisted or displayed. Immutable
original passages retain canonical citation slots and current source checks. Durable
per-call dispatch/usage records extend one existing job/attempt spending envelope
incrementally under existing locks; uncertain calls stay held and cannot automatically
redispatch. Expired uncertainty becomes a recoverable failure with explicit fresh
retry, retaining the old charge. Server-owned bounded-stop outcomes avoid accepting
arbitrary model prose after an unfinished lookup. Knowledge proposals bind exact
payload/actor/job/current authority and save through the existing unpublished version
writer. Additive053/054 and proof limits are in the capability bundle run.


World uses a modular monolith with a web application, API and database. One shared background worker supports the provider workflow in Phase 6; bounded Knowledge PDF processing uses its guarded parser process. This keeps infrastructure small while separating Agent identity, authority, knowledge and model access. These approved choices were recorded on 2026-10-03. Phases 1–3 established the shared UI; Phase 4 implements real identity, persistence and authority. Phase6 construction and its acceptance evidence are tracked in CURRENT_RUN.md.

## Runtime and domain boundaries [world:req:runtime-boundaries]

Next.js serves the React interface and API. Supabase provides PostgreSQL, authentication and private storage. One Node worker uses pg-boss for background work. Agents run through shared application and worker capacity; an Agent or World does not require its own service or permanent machine.

Domain modules cover Agents, Worlds, Sessions, authority, knowledge, actions and meeting work. Integrations live behind adapters. Agent identity, configuration and memory persist in platform records independently of provider conversation state. A thin model adapter supports one provider initially and leaves room for provider replacement later.

Build the real UI first with typed mock adapters. Replace adapters incrementally as backend slices become available. Mock and real implementations share contracts; the mock journey is not security evidence.

### Implemented Phase 4 foundation [world:req:phase4-foundation]

Demo and backend modes reuse WorkspaceContent and explicit asynchronous workspace commands. Domain contracts use opaque IDs, request IDs and expected revisions; framework and provider SDKs remain in adapters. Backend mode never substitutes demo identities after an authentication or authorization failure.

Request-local Supabase SSR clients verify caller claims. Next.js proxy refresh preserves cookies and SDK headers; private responses use no-store and mutation routes check origin. Ordinary application data requests carry the caller's verified JWT to PostgREST/RLS. Privileged PostgreSQL credentials exist only in ignored development migration and fixture tooling, never application requests or browser bundles.

Thirteen ordered, additive migrations define ownership constraints, default-deny RLS, scoped snapshots and narrow actor-bound mutation functions. Function search paths and execution grants are explicit. Bootstrap and Agent creation are idempotent; drafts/configuration use compare-and-swap and message retries cannot erase newer drafts. Organization mutations require a current authority version. Protected operations share-lock the World; membership/grant revocation takes an exclusive lock and advances authority, so old tokens and stale versions cannot authorize subsequent work.

Personal configuration, memory and drafts remain private. Organization Session review requires explicit review authority; borrowed-Agent usage exposes scoped metadata to its owner. Memory correction retains immutable historical source versions and validates owner/World provenance. Phase 4 stores configuration and deliberate text records; it does not execute models, delegation, automatic learning or exports. Actual proof and review are recorded through CURRENT_RUN.md.

## Enforced authority [world:req:enforced-authority]

Effective authority is the intersection of Universe rules, World rules, Agent-owner rules and Session grants. Security-critical restrictions are enforced by server-side controls and the action gateway, rather than model instructions.

Recheck current authority when retrieving context, dispatching work, resuming it and applying effects. Missing scope fails closed. A grant of World membership does not imply access to every World resource. Standing delegation grants are separately scoped and revocable.

Approval belongs to a specific action and payload version. Editing the proposed action invalidates its old approval. Waiting approval is persisted so the worker can release capacity and resume later. Retries and duplicate job delivery must produce one logical effect. Scoped approval opt-out is validated on the server and cannot bypass other authority layers.

### Implemented Universe foundation [world:req:universe-foundation]

Accepted for controlled development on 2026-10-06: a closed Universe action/worker-command catalog describes current supported operations without granting authority. Restricted SQL remains authoritative. Worker input rejects unsupported kinds, and current authority is checked before provider token counting as well as subsequent execution/effect fences. Additive028 records exact manual or existing scoped-policy internal-task decisions atomically with the effect, retaining original/effect-time authority, policy and proposal revisions/digest. Ordinary app roles and the worker cannot directly access these private receipts; no historical backfill or new receipt UI is introduced.

Optional metadata-only execution observation and root efficiency/fixture scoring interfaces support the user's three combined-layer metrics. Standard startup does not yet persist observations or cover complete request/queue/root lineage timing. Unsupported nonzero/malformed provider cache usage retains uncertain accounting; ordinary valid zero-cache usage is accepted. Full four-layer namespace resolution, enterprise authoring and Agent learning remain deferred. The bounded World controls are now implemented below. Exact Universe inventory, proof and measurement limits: [Universe foundation report](UNIVERSE_FOUNDATION_REPORT.md).

### World policy authoring compatibility [world:req:world-policy-authoring]

The approved product direction is defaults/settings toggles first, enterprise-authored World harnesses later; see PRODUCT_DECISIONS.md [world:req:world-harness-configuration]. Design toggles as an authoring interface over shared policy definitions and evaluation, rather than a separate toggle-only enforcement path. Future enterprise authoring must reuse those authority boundaries and the same action checks; it cannot grant new permissions merely by writing instructions. Keep behavioral guidance distinct from enforceable permissions/constraints. Extend the existing modular monolith; enterprise syntax/editor, arbitrary-code support and a generalized resolver are not selected or implemented by this decision. Later authoring may need additive schemas and UI, but should not require replacing the policy foundation.

Accepted World foundation on2026-10-06: closed `world-v1` defaults allow borrowed personal Agents and bounded delegation under existing grants, with the internal-task World approval floor off. Off preserves individual required-approval defaults and valid explicit scoped exceptions; it is not a waiver. Settings use caller-JWT adapters and additive029 private policy/request records. Real owner/admin changes serialize on the World lock, increment policy and World authority, and audit atomically; no-op/exact replay cannot rotate again. All old active work is conservatively stale, including unrelated work; completed receipts and saved grants/graphs remain intact. Protected Agent-use, team-start/worker/effect and scoped-approval functions enforce these restrictions beyond the UI. Existing predicate identity and restricted worker privileges are preserved. Enterprise authors must later target the same definitions/checks. [Rules, inventory and verification](WORLD_POLICY_RULES.md) document current behavior and limitations.

### Implemented Agent owner foundation [world:req:agent-owner-foundation]

Accepted for controlled development on2026-10-06: `owner-v1` provides Agent-wide outgoing delegation and mandatory internal-task approval constraints, preserving existing defaults and World-specific owner consent/grants. Private settings are owner-only; organization settings require owning-World owner/admin authority rechecked under locks. Additive030 captures an immutable independent owner revision on every root/child job and checks it during execution/retry/effects. Owner saves serialize on the Agent identity, without rotating participating Worlds. Stable shared Agent locks coordinate with existing World/run/job execution locks. Off/on cannot revive old jobs; current-access retained reads and exact requesting-actor manual approval remain separate. Team auto effects inherit contributing-Agent floors; ordinary work uses its root's floor. The scoped UI distinguishes root versus prospective linked-team requirements. No extra model judge or changed provider context is introduced. This is enforced owner policy, not complete Self guidance composition or learning. [Agent owner rules](AGENT_OWNER_RULES.md) contain inventory, conflicts and proof.

### Session foundation and timed guest access [world:req:session-foundation]

The closed `session-v1` contract distinguishes persistent work from finite runs. Caller-JWT authoring stores purpose/output guidance and optional restrictions on Agents, resources, supported actions, delegation, approval floors, cumulative spend and stricter execution bounds. Default Sessions preserve prior access, approvals and limits. Session owner or destination-World owner/admin authoring remains subject to existing Session access; these controls cannot create grants or waive another layer. Guidance is serialized through the existing bounded worker compiler without another model policy call.

Additive031 keeps versioned private policies/receipts and a Session reservation fence, captures immutable policy/access/closure/deadline bindings on roots and children, and rechecks current authority at execution and effect boundaries. Access windows apply separately to participation, requester grants, source consent and destination admission. Effective expiry intersects applicable outer windows with alternative valid grants. A foreign organization Agent remains owned by its source World; explicit source-owner/admin consent and destination admission plus scoped requester grants permit a timed visit. Source identity discovery exposes only safe metadata and grants no authority; outgoing consent requires no destination membership or private Session visibility. Source configuration/memory remain excluded. World default/max guest duration uses shared definitions within the Universe30-day cap.

Pausing stops automation but permits currently authorized retained review/manual approval. Closing or overall work expiry blocks new effects; reopen/extension cannot revive stale work. A finite run deadline is distinct and does not alone prevent current authorized approval of a completed proposal. Narrowed resources govern fresh context, history, child aggregation, retained reads and exact effects; withheld content keeps durable work identity for authorized recovery. Shared Session claim/reservation ordering precedes run/job locks, while policy edits never update jobs. Source-role revocation and guest actions use consistent membership-to-consent locking. Existing receipts, uncertain spending, outer restrictions and approval defaults remain intact. [Session rules](SESSION_RULES.md) and its run carry inventory, protected acceptance evidence and remaining limits; full Passport/external-runtime/enterprise authoring/learning remain deferred.

## Knowledge and departure [world:req:memory-departure]

### Phase 8 learning design [world:req:phase8-memory-runtime]

The accepted Phase 8 design adds a client-safe `memory-v1` contract and caller-scoped commands to the existing Agent-work boundary. Private database records hold stable entries, immutable versions, exact decision receipts, selected-text projections, portable releases, notices and job admission bindings. Knowledge remains reference material, distinct from behavioral memory; legacy source-linked Knowledge records do not silently become Agent instructions. Current implementation and acceptance evidence belong to [the learning report](LEARNING_CONTINUITY_REPORT.md) and current run.

Suggest/Off controls inferred proposals. Optional bounded drafts accompany the normal model generation; no unconditional second extraction request is required. Authorized human decisions alone adopt a suggestion, publish exact World text, share an exact preference to a named World or accept an organization-authorized portable release. These decisions preserve inherited ownership and source restrictions. Agent borrowing excludes the owner's private store and private configuration.

The context compiler admits at most five current lessons of at most1000 characters each, with safe origin labels. Sessions can narrow memory IDs and learning participation. Private job dependencies bind exact versions/revisions, projection controls and first-context Knowledge source revisions, including an empty first context. Existing authority helpers apply these checks to roots, contributors, retries, aggregation and effects; a change cannot revive an old execution merely by switching access back on. Completed lawful organizational history and personal accepted continuity use separate retained-view rules. No memory grants tools, permissions, approval waivers or budget authority.

Departure extends the existing membership/revocation path rather than introducing a second authorization engine. A guarded idempotent command supports self-leaving and authorized administrative removal, protects the last owner, stops affected pending work and unaccepted transfers, and preserves existing lawful archives. Already transmitted prompts and completed effects cannot be recalled. Production retention/purge and external cancellation remain deferred.

Separate personal memory from each World's knowledge and derived memory. Preserve ownership and source provenance on context, summaries, outputs, jobs and caches, so access checks also cover derived material. Implement selected organizational learning export only with organizational authorization and user acceptance.

Supabase row-level security and private-storage policies provide additional protection. Service-role operations bypass row-level security, so privileged worker paths require explicit authorization and scoped queries.

Departure revokes grants, pending approvals and queued work, invalidates affected caches, and prevents later results from being incorporated. Recheck running work before further effects. Retain authorized organizational archives and personal continuity separately. Previously transmitted provider prompts cannot be recalled; completed external effects cannot be undone by revocation.

## Deferred complexity and open choices [world:req:lean-architecture]

Do not introduce Redis, a separate vector database, Kubernetes, services per Agent, or universal external-runtime interoperability for the initial release. Phase6 selects direct Anthropic behind a replaceable adapter and one pg-boss worker. Deployment host and future memory-import formats remain later choices.

See [Tech stack](TECH_STACK.md) for selected tools, [Code organization](CODE_ORGANIZATION.md) for module boundaries, and [Product decisions](PRODUCT_DECISIONS.md) for intended behavior. Verification follows the [Roadmap](ROADMAP.md); this record does not claim backend correctness.

## Knowledge library boundary [world:req:knowledge-library-boundary]

The user approved Knowledge-first Phase 5 on 2026-10-05. Reference documents are distinct from behavioral Memory; personal documents belong to the user, organization documents to their World. The library uses immutable item/content-version/passage records, bounded paginated read/search endpoints and private Storage; it must not place every document body into the workspace snapshot. Existing memory source-version references are not a retrievable document version archive.

Personal owners manage their library. Organization owners/admins manage World documents; members read only documents explicitly published to their World library, and unpublished drafts are document-owner-private under the superseding 2026-10-09 reference-flow decision. Folders do not grant permissions; current note rules are not silently copied to file documents. Publication, storage completion, parsing and retrieval all recheck exact current authority. Authenticated original-file delivery supports denying new requests after revocation; already delivered content cannot be recalled. Avoid bearer signed URLs when immediate new-request revocation is required.

Initial retrieval is PostgreSQL keyword search with exact version/page/paragraph references; embeddings, providers, automatic learning and cross-World export remain later capabilities. Start with interactive UI assessment, then saved text, bounded TXT/Markdown/text-PDF import, search and real boundary proof. The approved plan resolves slices; actual implementation/evidence remains in CURRENT_RUN.md.

### Implemented saved text library [world:req:knowledge-saved-text]

Slice 5.2 adds a dedicated Knowledge repository/API using the verified caller JWT. Paginated metadata lists, title filters and explicit detail/history requests keep document bodies out of workspace snapshots. Immutable authored versions and paragraph references retain exact history; compare-and-swap, actor-bound request IDs and current World authority protect updates and retries. Selection is saved per actor/library. Archive/restore is reversible and rechecks current authority.

Members see only currently published active documents and their ancestor folders; unpublished histories and draft-only/empty folder names stay concealed. Archiving, unpublishing or revoking authority denies subsequent member reads, including earlier versions. World management and personal ownership remain separate; the 2026-10-09 reference flow narrows unpublished document access to its authenticated creation actor. World locks coordinate reads/mutations with revocation. Legacy deliberate text/memory records retain their original source/editor and permissions, without duplicate editable copies. Two additive migrations extend the Phase 4 foundation. Slice 5.3 now implements imports and private original delivery; ranked passage search remains slice 5.4.

### Private original encryption [world:req:knowledge-original-encryption]

Actual development testing found hosted Storage could replay a previously cached authenticated original after membership revocation, even with no-store. Current database/RLS checks and the application original endpoint denied new access correctly. Metadata cache directives cannot establish immediate hosted URL revocation. The reviewed technical resolution is application-managed authenticated encryption for new originals, retaining exact recoverable plaintext and its immutable hash/length/source identity. A cached Storage response can contain ciphertext; fresh application requests must deny plaintext after revocation. Already delivered plaintext cannot be recalled.

Use server-only AES-256-GCM with a random 96-bit nonce, 128-bit tag and bounded version/key-ID envelope. Canonical authenticated context binds World/import/actor/object path/format/plaintext digest/length. Retain the separate ignored server key for all retained versions; never expose it to browser, parser child or database. Authenticate the entire envelope before parsing or returning plaintext, and recheck current caller authority before retrieval/decryption and immediately before finalization/delivery. Caller-JWT private Storage/RLS remains in force; no service-role bypass. Plaintext file limits remain distinct from precise envelope overhead.

New records cannot fall back to plaintext. Retries verify/decrypt an existing immutable object rather than overwrite it with a newly randomized ciphertext. Attest actual cipher identity and exact plaintext/source identity on accepted upload/finalization. Storage RLS cannot inspect object bodies; direct callers voluntarily uploading their own plaintext outside the application must not turn those bytes into an accepted source. Earlier nonsensitive plaintext test fixtures remain explicitly legacy evidence; encryption does not erase their cached copies. This implementation is independently reviewed and accepted for controlled development, with actual ciphertext replay, current-access denial, exact original recovery after server restart and immutable-source proof recorded in the import run. No production acceptance is claimed.

### Implemented private imports [world:req:knowledge-private-imports]

Four additive migrations (015–018) provide immutable import identity, private object paths, processing leases, original/source metadata and actor/attempt/authority-bound attestations. Caller-JWT APIs reserve, upload, resume, extract and finalize a draft preview; publication is a separate exact-version command. Fresh checks occur before Storage access, after delayed retrieval before decryption, and before finalization or original delivery. Database locks reject stale finalization across membership revocation. Recovery keeps one logical import and existing immutable object; malformed, forged, wrong-scope or failed content never becomes a ready document.

TXT/Markdown use strict UTF-8 and bounded request processing. Selectable-text PDF uses a separate data-only PDF.js process behind a Windows Job Object launcher: 5 MiB, 50 pages, 100,000 codepoints, 1,000 passages, 10-second wall, 5-second process/job CPU, 256 MiB job/process memory, 128 MiB V8 heap, bounded output and two concurrent parser jobs. Parser environment/filesystem/evaluation/network boundaries exclude credentials and remote resources. Unsupported hosts fail closed; no unrestricted production parser or shared durable queue is deployed. Scanned/encrypted/damaged and limit-exceeding documents report failure without publication. Source locations use consistent Unicode codepoint offsets and retain the exact parser/version and original digest.

### Passage search boundary [world:req:knowledge-passage-search]

Phase5 uses PostgreSQL simple full-text tokenization, weighted title/body vectors and ranked bounded passages inside the existing database. Each matching document contributes its strongest passage; a more specific query can locate another passage. A dedicated caller-JWT search repository/API keeps snippets out of workspace snapshots. Derived passage records are as private as their source; current authority, item publication, archive state and exact current version filter ordinary retrieval. World search includes published active documents only; a personal owner searches their private active current documents without needing World-audience publication. Opening a result rechecks current source authority and identifies the exact immutable version.

Queries are bounded to200 Unicode codepoints/12 terms; result pages default10/max20 and snippets max320 codepoints. Pagination binds query, World and authority version and exposes no global total. Authored and imported locations share Unicode codepoint offsets; reader navigation uses the same passage ranges. Client results are invalidated on query/scope changes and known archive/version mutations. No model answer, embedding service, automatic learning or provider call is introduced. Implementation acceptance and actual runtime proof remain in the Phase5 completion run.

## Working Agent execution [world:req:working-agent-execution]

Long-conversation continuity implemented on 2026-10-08: original records remain saved. The latest 10,000 eligible turns supply 12 recent and up to 24 lexical-relevant older turns, ordered chronologically and excerpted within about 12,000 characters. Current World/Session/Agent/requester and retained-source checks apply before admission; the existing 8,000 input-token guard remains. Reference history never grants permissions or policy authority. Lexical recovery can miss facts and synonyms; finite context is not lossless recall. No separate paid summary call is added. The current run records the real 1,000-turn correction/decision/isolation proof and exact limitations.

Chat request decisions use caller-JWT scoped APIs and private question records. Up to three optional questions per completed Chat job remain inactive until an exact requester decision. Answer/change/reject use compare-and-swap revisions, current Session/Agent/source authority and metadata-only audit. Saved answers continue as ordinary idempotent Chat requests, with recovery after reload or failure. Internal meeting proposal approval/edit/reject retains the existing exact revision/digest and effects gateway; questions cannot authorise arbitrary external actions. All 43 migrations rebuild cleanly; installed migration bytes remain immutable.

Graph refinement authorised2026-10-07: saved scoped relationships permit reciprocal and shared-target connections without recursive ownership. Compile the root's reachable network breadth-first into a finite unique-identity assignment plan before dispatch; existing-participant references do not add waiting dependencies or new jobs. Preserve existing guards and bounds; protect all source/owner/World/Session restrictions independently of the graph. Shared incoming responsibilities must remain represented, and findings are counted once. References are distinct from future model-driven help messages/shared reply distribution. Directory grouping and shared profile metadata use focused caller-scoped repositories rather than expanding private workspace snapshots; aggregate usage is direct Agent attempt usage under explicit viewer scope. Actual verification lives in [the graph/profile run](runs/2026-10-07-agent-graph-implementation.md).

Context hardening accepted for controlled development on 2026-10-06: the existing compiler uses complete structured user-data context for reference excerpts, scoped history and delegated findings, with origin and original-to-final source mappings. Trusted system guidance/configuration remains separate. Source identity includes item/version and exact start/end/page/paragraph; deterministic aggregation and source buttons preserve multiple passages from one version. Reference text is bounded per field with explicit truncation flags; required configuration/assignment and malformed or unmappable references fail before provider transmission instead of being silently sliced. Full admitted metadata/provenance remains available to current-source checks. Additive026/027 extend only fenced context assembly;027 resolves an invocation-detected SQL alias collision without modifying installed026. Narrow idle-pool handling logs a fixed diagnostic and permits reconnection without logging connection objects. Twenty-seven migrations, focused offline tests, actual restricted-role/source/approval checks, rollback reconstruction with compiler mappings and nested fake-provider queue proof are recorded in the current run. This fixes context correctness; it does not implement the general four-layer resolver, automatic learning or prove injection immunity/real-provider response quality.

Approved Phase 7 extension: additive bounded run/node/dependency records retain the same root actor and World/Session across delegation. Saved relationships select work but do not grant permission. Waiting parents release capacity and resume through idempotent continuations; descendants contribute untrusted results with retained authority/source provenance. Existing and new job read/control/worker/effect paths enforce lineage, graph revision, current grants and source visibility. Lock order is World, run, sorted jobs, source items, budget. Children cannot create internal tasks or reset run deadlines. Exact scoped opt-out applies only within owner/World restrictions; owner activity is scoped metadata without private work content. Implementation and actual proof are recorded in CURRENT_RUN.md, not assumed by this decision.

Phase6 reuses the protected workspace, Chat, Work and Knowledge reader. An authenticated command binds immutable input, request identity, current World/Agent/Session authority and finite delegation to a saved job and transactional outbox. Queue payloads contain only the job ID. Recent permitted user/assistant turns, effective scoped instructions and bounded relevant source passages become context; organizational work excludes private personal configuration/memory and borrowed owners' private data. Reference content is untrusted context. Exact source/version/location provenance survives derived responses and is checked again before display or effects.

One shared Node process uses pinned pg-boss with an initialized queue schema. Its dedicated development login has reviewed queue access and narrow job functions, no application-table access, elevated flags, role memberships or runtime privileged-connection fallback. The child receives only its restricted connection and explicitly enabled provider credential, with certificate/hostname verification. Capability, attempt and lease fences protect claims, checkpoints and finalization; no stored user refresh token or long database transaction spans provider networking. Cancellation, retry and recovery recheck authority and retain uncertain provider charges.

The server-only Anthropic adapter counts bounded input before dispatch and streams visible text while keeping thinking private. Atomic conservative input/output reservations enforce a cumulative US$4 development-test ceiling, including concurrent retries and uncertain charges. Reliable provider usage settles the reservation even when output fails quality or proposal validation; unknown usage remains reserved. Current limits are recorded in the implementation and Tech stack. The root controls paid synthetic tests; account balance is not inferred from estimated token cost.

Meeting output is a proposal. Editing uses expected revisions; approval binds the exact proposal revision and digest. Idempotent approval creates assigned internal tasks, and editable follow-up drafts persist without external sending. Client scope-generation guards prevent late reads from replacing newer mutations or another scope. Actual source/revocation/race and worker recovery proof precede acceptance; see the current run. Real delegation, approval opt-out, automatic learning and portable exports remain later phases.
