<!-- studio {"id":"world:decision:architecture","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World architecture decisions

World will start as a modular monolith with a web application, API, database and one shared background worker. This keeps infrastructure small while separating Agent identity, authority, knowledge and model access. These approved choices were recorded on 2026-10-03; no application architecture has been implemented yet.

## Runtime and domain boundaries [world:req:runtime-boundaries]

Next.js serves the React interface and API. Supabase provides PostgreSQL, authentication and private storage. One Node worker uses pg-boss for background work. Agents run through shared application and worker capacity; an Agent or World does not require its own service or permanent machine.

Domain modules cover Agents, Worlds, Sessions, authority, knowledge, actions and meeting work. Integrations live behind adapters. Agent identity, configuration and memory persist in platform records independently of provider conversation state. A thin model adapter supports one provider initially and leaves room for provider replacement later.

Build the real UI first with typed mock adapters. Replace adapters incrementally as backend slices become available. Mock and real implementations share contracts; the mock journey is not security evidence.

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
