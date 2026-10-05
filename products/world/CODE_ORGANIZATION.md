<!-- studio {"id":"world:decision:code-organization","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:architecture"}]} -->
# World code organization decisions

Keep product decisions in `Product-Studio-v2/products/world/` and application code in the separate `Codex-Work/World/` folder. Shared studio role and working rules remain in Product-Studio-v2. These approved boundaries were recorded on 2026-10-03. Phase 1 established thin app entries, canonical UI primitives, reusable patterns and shell components. Phase 2 adds framework-free public domain interfaces, a focused mock adapter/controller and separate journey/context/archive views; obsolete layout/navigation was removed. Stories sit beside their components and focused behavior/journey checks live under `tests/`.

## Application structure [world:req:application-structure]

```text
World/
  AGENTS.md
  .agents/skills/ui-ux-pro-max/
  src/
    app/                   Thin pages and API entry points
    ui/
      primitives/          Canonical controls
      patterns/            Reusable interactions
      shell/               Navigation and application layout
    modules/
      agents/
      worlds/
      sessions/
      authority/
      knowledge/
      actions/
      meeting-work/
    adapters/
      database/
      storage/
      models/
      jobs/
    entrypoints/           Worker startup
  supabase/                Migrations and access policies
  tests/
    integration/
    journeys/
```

Create directories as their responsibilities are implemented. The outline is not a requirement to populate empty folders with placeholder code.

Agent-page refinement reuses the workforce composition and inspector, with focused settings, memory, Session relationship and React Flow graph components under `src/ui/patterns`. Public Agent configuration/memory types stay under `src/modules/agents`; sample storage stays in the existing mock adapter/controller. Configuration is Agent keyed, shared sample memory World keyed, and primary personal continuity reuses the existing knowledge contract. Private configuration authority and Session relationship editing are distinct responsibilities.

Phase 4 uses client-safe persistence IDs/ownership/explicit commands in `src/modules/workspace`, server-only caller-scoped RPC adapters under `src/adapters/database`, request-local Auth under `src/adapters/auth`, and the async controller/request repository under `src/adapters/workspace`. Shared `WorkspaceContent` and navigation contracts compose demo and persistent views through explicit commands, avoiding a second creation/chat/canvas implementation. Thin app routes verify callers and preserve cookies/cache/origin boundaries. Additive protected migrations/rollback assertions live under `supabase`; real database/Auth/concurrency/reconstruction runners live under `tests/integration`. Privileged PostgreSQL tooling is test/setup only and never imported by application code. Demo remains explicit and backend never falls back to sample identities. Whole-phase implementation/review status lives in CURRENT_RUN.md.

## Reuse and dependency rules [world:req:reuse-dependencies]

Slice 5.2 exposes Knowledge library contracts and bounded validation through `src/modules/knowledge`; sample learning has an explicit demo-only entry. Caller-scoped database/request adapters live in `src/adapters/database` and `src/adapters/knowledge`, with the thin `src/app/api/knowledge` boundary. Knowledge UI separates controller, context tree, library composition, reader and editor under `src/ui/patterns`, reusing shell/search/+ /divider/dialog primitives. Demo and saved repositories share the same contract. Existing World text records and Agent Memory keep their original editor. Stories sit beside library patterns; focused tests and real integration/concurrency runners live under `tests`. No new dependency was needed.

Slice 5.3 extends that public contract with import identity, format/limits, stages and recovery. Caller-scoped import RPCs stay in the database adapter; client/request/server orchestration and the capped parser stay under `src/adapters/knowledge`; private original access and authenticated envelope stay under `src/adapters/storage`. Thin import/upload/original API routes keep request verification separate. Focused file-picker, upload-dialog, progress and import-command patterns compose the existing Knowledge controller/tree/reader rather than copying the workspace. Demo and live adapters share contracts, while demo PDF processing is explicitly unavailable. Synthetic fixtures, parser limits, live Storage/API, encrypted recovery and race tests remain under `tests`; setup secrets are ignored and never imported by client code.

Each domain module exposes a small public interface. Other modules use that interface rather than importing internal files. Separate server-only and client-safe entry points. Domain logic stays independent of framework and provider SDK imports; adapters handle those dependencies.

Before adding a component or contract, search for an existing equivalent. Reuse real common behavior through primitives and interaction patterns. Avoid copied components, giant page files and one oversized configurable component intended to cover unrelated cases.

Keep pages responsible for composition and request boundaries. Keep business rules in their domain modules. Mock and real adapters share typed contracts, avoiding duplicate business rules when the UI connects to the backend.

## Review and ownership [world:req:code-review-ownership]

Use proportionate dependency and cycle checks, duplication checks, and review of files that combine unrelated responsibilities. No arbitrary line-count threshold has been agreed.

The orchestrator maintains World's local `AGENTS.md` as a concise bridge to the shared studio and relevant product decisions. Worker briefings include those sources. UI UX Pro Max remains project-local. The user-provided application GitHub destination is JKay93/MyWorld, verified on 2026-10-04; studio product records are delivered to the studio's verified repository separately.

Tests and checks follow [Tech stack](TECH_STACK.md) and the [Roadmap](ROADMAP.md). Shared studio policies continue to govern delegation, independent review and acceptance.
