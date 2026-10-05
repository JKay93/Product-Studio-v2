<!-- studio {"id":"world:decision:architecture","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World architecture decisions

World uses a modular monolith with a web application, API and database. One shared background worker supports bounded Knowledge processing in Phase 5 when required and the provider workflow in Phase 6. This keeps infrastructure small while separating Agent identity, authority, knowledge and model access. These approved choices were recorded on 2026-10-03. Phases 1–3 established the shared UI; Phase 4 implements real identity, persistence and authority. Provider and worker execution remain later work.

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

Do not introduce Redis, a separate vector database, Kubernetes, services per Agent, or universal external-runtime interoperability for the initial release. Provider identity, deployment host, exact database schema, job configuration and future memory-import formats remain implementation or later product choices.

See [Tech stack](TECH_STACK.md) for selected tools, [Code organization](CODE_ORGANIZATION.md) for module boundaries, and [Product decisions](PRODUCT_DECISIONS.md) for intended behavior. Verification follows the [Roadmap](ROADMAP.md); this record does not claim backend correctness.

## Knowledge library boundary [world:req:knowledge-library-boundary]

The user approved Knowledge-first Phase 5 on 2026-10-05. Reference documents are distinct from behavioral Memory; personal documents belong to the user, organization documents to their World. The library uses immutable item/content-version/passage records, bounded paginated read/search endpoints and private Storage; it must not place every document body into the workspace snapshot. Existing memory source-version references are not a retrievable document version archive.

Personal owners manage their library. Organization owners/admins manage World documents; members read only documents explicitly published to their World library, and unpublished drafts remain owner/admin-visible. Folders do not grant permissions; current note rules are not silently copied to file documents. Publication, storage completion, parsing and retrieval all recheck exact current authority. Authenticated original-file delivery supports denying new requests after revocation; already delivered content cannot be recalled. Avoid bearer signed URLs when immediate new-request revocation is required.

Initial retrieval is PostgreSQL keyword search with exact version/page/paragraph references; embeddings, providers, automatic learning and cross-World export remain later capabilities. Start with interactive UI assessment, then saved text, bounded TXT/Markdown/text-PDF import, search and real boundary proof. The approved plan resolves slices; actual implementation/evidence remains in CURRENT_RUN.md.
