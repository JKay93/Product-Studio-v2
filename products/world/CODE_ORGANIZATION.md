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

Phase4 preparation adds client-safe persistence IDs/ownership/commands in `src/modules/workspace`, a server-only caller-scoped RPC adapter under `src/adapters/database`, and personal migrations/rollback assertions under `supabase`. The integration runner lives in `tests/integration`. Existing demo presentation is preserved; authenticated controller/read/configuration wiring and actual database verification remain pending. Request-time app composition explicitly distinguishes demo from blocked backend mode; new contracts are not yet a connected live workspace.

## Reuse and dependency rules [world:req:reuse-dependencies]

Each domain module exposes a small public interface. Other modules use that interface rather than importing internal files. Separate server-only and client-safe entry points. Domain logic stays independent of framework and provider SDK imports; adapters handle those dependencies.

Before adding a component or contract, search for an existing equivalent. Reuse real common behavior through primitives and interaction patterns. Avoid copied components, giant page files and one oversized configurable component intended to cover unrelated cases.

Keep pages responsible for composition and request boundaries. Keep business rules in their domain modules. Mock and real adapters share typed contracts, avoiding duplicate business rules when the UI connects to the backend.

## Review and ownership [world:req:code-review-ownership]

Use proportionate dependency and cycle checks, duplication checks, and review of files that combine unrelated responsibilities. No arbitrary line-count threshold has been agreed.

The orchestrator maintains World's local `AGENTS.md` as a concise bridge to the shared studio and relevant product decisions. Worker briefings include those sources. UI UX Pro Max remains project-local. The user-provided application GitHub destination is JKay93/MyWorld, verified on 2026-10-04; studio product records are delivered to the studio's verified repository separately.

Tests and checks follow [Tech stack](TECH_STACK.md) and the [Roadmap](ROADMAP.md). Shared studio policies continue to govern delegation, independent review and acceptance.
