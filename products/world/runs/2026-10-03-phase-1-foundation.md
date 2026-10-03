<!-- studio {"id":"world:run:phase-1-foundation-2026-10-03","scope":"world","type":"run","status":"draft"} -->
# World phase 1 foundation

## Goal and scope [world:run:phase-1:goal]

User authorized phase 1 on 2026-10-03: create the Next.js/TypeScript application foundation, Calm Fluent-inspired theme, reusable controls/Agent cards/navigation and a small component gallery. Code belongs in Codex-Work/World; product decisions and this run belong in Product-Studio-v2/products/world. Read World/AGENTS.md and approved DESIGN, TECH_STACK, CODE_ORGANIZATION, ARCHITECTURE and ROADMAP records. No backend, full phase 2 journey, new spending or production publication is assigned.

## Tasks and acceptance criteria [world:run:phase-1:tasks]

| ID | Owner | Work and completion criteria | Status |
| --- | --- | --- | --- |
| P1 | Designer | Resolve theme values using the World-only skill and approved Calm Fluent direction. Give reusable tokens, typography, interaction/state guidance without a framework swap or extra design reports. | Complete; guidance sent to Builder |
| P2 | Builder | Scaffold an installable Next.js/React/TypeScript project with locked local dependencies and clean boundaries. Preserve AGENTS and skill, keep application code out of studio, and make build/type/lint checks runnable. | Accepted |
| P3 | Builder | Build shared buttons, fields, dialog, Agent cards and responsive navigation/shell; provide a modest Storybook gallery. Actual examples reuse primitives/patterns rather than copied components. | Accepted |
| P4 | Independent reviewer and Orchestrator | Verify rendered desktop/mobile, visible focus, keyboard interactions, form/dialog behavior, representative disabled/error/loading states, contrast and reduced motion; check type/build/lint and proportionate behavior tests. Review actual candidate independently before acceptance. | PASS; accepted |
| P5 | Orchestrator | Record resolved theme/version decisions and check evidence; commit accepted application code and publish only to verified World repository when authorized destination is known. Deliver studio context separately to studio remote. Update run handoff truthfully. | Local application committed; studio delivery in progress; application push awaits destination |

P1 and P2 can proceed independently; P3 incorporates P1. P4 follows implementation; P5 follows acceptance. Orchestrator records outcomes; workers return concise results, questions and critical choices.

## Questions [world:run:phase-1:questions]

Asked user for the World application GitHub repository URL or “local for now.” A destination is necessary for remote application delivery, not local implementation. No other user decision blocks the bounded first phase.

## Decisions [world:run:phase-1:decisions]

Approved: Calm Fluent-inspired direction; World-only UI UX Pro Max; TypeScript/Next.js/React, Tailwind semantic tokens, canonical Radix primitives and a small Storybook gallery. Use the existing architecture boundaries; install backend/runtime libraries only when their actual phase requires them. Designer/Builder may resolve exact token values and compatible dependency versions within scope.

Resolved implementation choices are consolidated in [Design](../DESIGN.md), [Tech stack](../TECH_STACK.md) and [Code organization](../CODE_ORGANIZATION.md). Exact versions and the lockfile live in World; minimum Node 24.15, checked with bundled 24.19. Orchestrator accepted the finished candidate after independent PASS. No phase 2 implementation or backend security claim follows this acceptance.

Actual model activation, token use and cost remain unknown unless host evidence exposes them. Routing receipts will be retained below.

Dispatches under routing SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`: Designer `/root/world_phase1_design`, requested gpt-6.1-sol medium fork none; Builder `/root/world_phase1_builder`, requested gpt-6.1-sol low fork none. Host tool catalog supports these requested routes; actual activation is unknown.

Independent QA `/root/world_phase1_qa` dispatched under the same freshly verified hash, requested gpt-6.1-sol medium fork none. Actual activation remains unknown.

## Outcomes and evidence [world:run:phase-1:outcomes]

World now contains the Next.js scaffold, semantic theme, shared controls/dialog, Agent cards, responsive shell and seven Storybook examples. Pages remain thin; patterns reuse canonical primitives. Sources are formatted, essential Agent facts/activity are 14px, and development overlays are disabled. Sample interactions stay in memory and reset on refresh.

Builder passed typecheck, lint (zero findings), production build, Storybook build and Vitest 3/3 (form validation/local save, focus trap/Escape restoration, mobile navigation). The production build was repeated after affected visual/config changes. Storybook needed sandbox escalation for a bundler ancestor-read denial, then passed with nonblocking chunk/timing warnings.

Independent reviewer `/root/world_phase1_qa` returned PASS on the finished candidate: actual browser checks at 1440/375/320px, no horizontal overflow/runtime errors, visible focus, dialog focus trapping/Escape/return, mobile selection closure, field error associations, disabled/loading states and reduced motion. Verified contrast includes white-on-primary 6.48:1, muted text at least 5.61:1 and control border 3.65:1. This is UI evidence only.

Root inspected desktop/mobile screenshots and accepted the candidate. Final screenshots `world-desktop.png` and `world-mobile.png` are in `C:/Users/jingk/.codex/visualizations/2026/10/03/01a100ee-8856-7b50-89d1-27b3c2816217/`. Local preview is `http://127.0.0.1:3000` (host session 1264); browser-panel opening was queued. App implementation commit `be8e83c7c20142251ba013467499f3c9a61bedac`, administrative handoff HEAD `8f457f34e7267fb8b9de407b1c3a75e75060a69e`; World working tree clean and no remote configured. Local skill hashes still match its recorded upstream snapshot; vendor whitespace was preserved. Studio source/index validation passed without graph errors.

## Deferred work [world:run:phase-1:deferred]

- Full mock user journey: phase 2; this phase demonstrates reusable foundations only.
- Authentication, database/storage policies, provider calls and background worker: later phases, not silently claimed by UI behavior.
- Production hosting and deployment: no authority selected; avoid new spending.
- Application push: awaits verified destination or the user's local-only instruction.

## Handoff [world:run:phase-1:handoff]

Status: phase 1 accepted and committed locally. Studio context delivery is in progress. Application remote delivery awaits the unanswered repository question; do not invent a destination. Once the user supplies the repository, verify it and deliver accepted World commits under standing authorization. Phase 2 complete mock journey is the next planned implementation milestone. No production deployment occurred.
