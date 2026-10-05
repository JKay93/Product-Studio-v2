<!-- studio {"id":"world:decision:architecture","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World architecture decisions

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

## Knowledge and departure [world:req:memory-departure]

Separate personal memory from each World's knowledge and derived memory. Preserve ownership and source provenance on context, summaries, outputs, jobs and caches, so access checks also cover derived material. Implement selected organizational learning export only with organizational authorization and user acceptance.

Supabase row-level security and private-storage policies provide additional protection. Service-role operations bypass row-level security, so privileged worker paths require explicit authorization and scoped queries.

Departure revokes grants, pending approvals and queued work, invalidates affected caches, and prevents later results from being incorporated. Recheck running work before further effects. Retain authorized organizational archives and personal continuity separately. Previously transmitted provider prompts cannot be recalled; completed external effects cannot be undone by revocation.

## Deferred complexity and open choices [world:req:lean-architecture]

Do not introduce Redis, a separate vector database, Kubernetes, services per Agent, or universal external-runtime interoperability for the initial release. Phase6 selects direct Anthropic behind a replaceable adapter and one pg-boss worker. Deployment host and future memory-import formats remain later choices.

See [Tech stack](TECH_STACK.md) for selected tools, [Code organization](CODE_ORGANIZATION.md) for module boundaries, and [Product decisions](PRODUCT_DECISIONS.md) for intended behavior. Verification follows the [Roadmap](ROADMAP.md); this record does not claim backend correctness.

## Knowledge library boundary [world:req:knowledge-library-boundary]

The user approved Knowledge-first Phase 5 on 2026-10-05. Reference documents are distinct from behavioral Memory; personal documents belong to the user, organization documents to their World. The library uses immutable item/content-version/passage records, bounded paginated read/search endpoints and private Storage; it must not place every document body into the workspace snapshot. Existing memory source-version references are not a retrievable document version archive.

Personal owners manage their library. Organization owners/admins manage World documents; members read only documents explicitly published to their World library, and unpublished drafts remain owner/admin-visible. Folders do not grant permissions; current note rules are not silently copied to file documents. Publication, storage completion, parsing and retrieval all recheck exact current authority. Authenticated original-file delivery supports denying new requests after revocation; already delivered content cannot be recalled. Avoid bearer signed URLs when immediate new-request revocation is required.

Initial retrieval is PostgreSQL keyword search with exact version/page/paragraph references; embeddings, providers, automatic learning and cross-World export remain later capabilities. Start with interactive UI assessment, then saved text, bounded TXT/Markdown/text-PDF import, search and real boundary proof. The approved plan resolves slices; actual implementation/evidence remains in CURRENT_RUN.md.

### Implemented saved text library [world:req:knowledge-saved-text]

Slice 5.2 adds a dedicated Knowledge repository/API using the verified caller JWT. Paginated metadata lists, title filters and explicit detail/history requests keep document bodies out of workspace snapshots. Immutable authored versions and paragraph references retain exact history; compare-and-swap, actor-bound request IDs and current World authority protect updates and retries. Selection is saved per actor/library. Archive/restore is reversible and rechecks current authority.

Members see only currently published active documents and their ancestor folders; unpublished histories and draft-only/empty folder names stay concealed. Archiving, unpublishing or revoking authority denies subsequent member reads, including earlier versions. Owner/admin management and private personal ownership remain separate. World locks coordinate reads/mutations with revocation. Legacy deliberate text/memory records retain their original source/editor and permissions, without duplicate editable copies. Two additive migrations extend the Phase 4 foundation. Slice 5.3 now implements imports and private original delivery; ranked passage search remains slice 5.4.

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

Approved Phase 7 extension: additive bounded run/node/dependency records retain the same root actor and World/Session across delegation. Saved relationships select work but do not grant permission. Waiting parents release capacity and resume through idempotent continuations; descendants contribute untrusted results with retained authority/source provenance. Existing and new job read/control/worker/effect paths enforce lineage, graph revision, current grants and source visibility. Lock order is World, run, sorted jobs, source items, budget. Children cannot create internal tasks or reset run deadlines. Exact scoped opt-out applies only within owner/World restrictions; owner activity is scoped metadata without private work content. Implementation and actual proof are recorded in CURRENT_RUN.md, not assumed by this decision.

Phase6 reuses the protected workspace, Chat, Work and Knowledge reader. An authenticated command binds immutable input, request identity, current World/Agent/Session authority and finite delegation to a saved job and transactional outbox. Queue payloads contain only the job ID. Recent permitted user/assistant turns, effective scoped instructions and bounded relevant source passages become context; organizational work excludes private personal configuration/memory and borrowed owners' private data. Reference content is untrusted context. Exact source/version/location provenance survives derived responses and is checked again before display or effects.

One shared Node process uses pinned pg-boss with an initialized queue schema. Its dedicated development login has reviewed queue access and narrow job functions, no application-table access, elevated flags, role memberships or runtime privileged-connection fallback. The child receives only its restricted connection and explicitly enabled provider credential, with certificate/hostname verification. Capability, attempt and lease fences protect claims, checkpoints and finalization; no stored user refresh token or long database transaction spans provider networking. Cancellation, retry and recovery recheck authority and retain uncertain provider charges.

The server-only Anthropic adapter counts bounded input before dispatch and streams visible text while keeping thinking private. Atomic conservative input/output reservations enforce a cumulative US$4 development-test ceiling, including concurrent retries and uncertain charges. Reliable provider usage settles the reservation even when output fails quality or proposal validation; unknown usage remains reserved. Current limits are recorded in the implementation and Tech stack. The root controls paid synthetic tests; account balance is not inferred from estimated token cost.

Meeting output is a proposal. Editing uses expected revisions; approval binds the exact proposal revision and digest. Idempotent approval creates assigned internal tasks, and editable follow-up drafts persist without external sending. Client scope-generation guards prevent late reads from replacing newer mutations or another scope. Actual source/revocation/race and worker recovery proof precede acceptance; see the current run. Real delegation, approval opt-out, automatic learning and portable exports remain later phases.
