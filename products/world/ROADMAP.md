<!-- studio {"id":"world:decision:roadmap","scope":"world","type":"decision","status":"approved","links":[{"relation":"requires","target":"world:decision:product"},{"relation":"requires","target":"world:decision:architecture"},{"relation":"requires","target":"world:decision:tech-stack"},{"relation":"requires","target":"world:decision:code-organization"},{"relation":"requires","target":"world:decision:design"}]} -->
# World - Approved roadmap

Approved by the user on 2026-10-03. Build reusable UI first, then connect real behavior in manageable steps. This roadmap records the reviewed sequence; it does not claim implementation or security verification.

## First release sequence [world:req:first-release-sequence]

| Phase | What we build | Ready when |
| --- | --- | --- |
| 1. Foundation and design system | Establish World's project folder and local instructions. Install UI UX Pro Max locally for World only. Build the Calm Fluent-inspired theme, shared controls, forms, dialogs, Agent cards and navigation. | Representative components are consistent, support keyboard use, and work on desktop and mobile. |
| 2. Complete UI journey | Typed mock data for primary-Agent creation, World switching, Sessions, meeting work, editable Agent canvas, knowledge, permissions and departure. Include empty, loading, error and revoked-access states. | The full experience is clickable and can be assessed before backend work expands. Mock behavior proves interaction only. |
| 3. Identity and authority | Real login, persistent personal and organization-owned Agents, memberships, isolated Sessions, standing-access grants and revocation. Establish personal versus World memory ownership and source tracking. | Real users cannot access unauthorized Worlds or private memory. Revoked membership immediately blocks further work. |
| 4. First working workflow | One provider: pasted meeting notes -> editable actions -> approved internal tasks -> follow-up drafts. Persistence, background processing, retry and resume. | Work survives reopening; edits invalidate stale approvals; retries avoid duplicate tasks; revoked work and late results are rejected. |
| 5. Agent collaboration and autonomy | Connect the editable orchestrator canvas to real delegation. Borrow colleagues' existing Agents through scoped standing access; reflect usage in owner activity. Approval settings and scoped opt-out. | Delegation respects every authority boundary. Approval opt-out has a danger warning, visible status, audit trail and easy restoration. |
| 6. Continuity and safe leaving | Personal preferences and inspectable memory, separate World learning, selected organization-authorized portable learning with user acceptance, and complete departure experience. | The Agent retains permitted personal continuity. Organization access and pending work stop; authorized organization archives remain; private personal content stays private. |
| 7. Small SME pilot | Test the complete experience with real identities, Worlds, storage, jobs and provider responses. Independently review critical permission and lifecycle behavior. | A nontechnical user completes the workflow; continuity, standing access, portability, approvals and departure pass the real checks. |

The first usable release includes phases 1-7. Earlier milestones provide working demonstrations; the pilot follows the full checks. Basic revocation and memory separation start in phase 3; jobs in phase 4 already recheck current authority and reject late results.

## Related decisions [world:req:roadmap-constraints]

The approved [Architecture](ARCHITECTURE.md), [Tech stack](TECH_STACK.md), [Code organization](CODE_ORGANIZATION.md), [Design](DESIGN.md), and [Product decisions](PRODUCT_DECISIONS.md) provide the constraints for these phases. Each record separates accepted choices from remaining implementation details.

## Later [world:req:later-priorities]

Multiple providers -> memory import -> external Agent runtimes. Broader integrations and production infrastructure follow demonstrated need. No calendar estimates or production deployment are authorized by this roadmap.

## Current status

Latest priority: the user postponed Phase 3 to focus on the Agent page and requested a separate pan/zoom/expand canvas mockup first. Retain the Phase 3 plan for later; do not start backend work or apply the new canvas to the app during mockup review.

User approval checkpoint on 2026-10-04: Phase 2 looks good, with some UI changes deferred for later. Phase 3 is requested for plan review only; no backend implementation authorization is inferred. The current preview includes Agent Workforce. Previous independent review/technical acceptance should not be read as earlier human phase approval.

Phases 1 and 2 are implemented, independently reviewed and accepted in `Codex-Work/World/`, alongside local instructions and the World-only skill. Foundation plus complete mock UI journey and the clarified sidebar shell are pushed to JKay93/MyWorld. Phase 2 includes approved onboarding/chat, World/Agent/Session switching, meeting workflow, editable linked-Agent hierarchy, knowledge, permissions and departure/archive views. Latest typecheck, zero-warning lint, production/gallery builds and 18/18 focused tests passed; independent browser review covered desktop/mobile/landscape and short viewports down to 320x250. Mock behavior proves interactions only; working data resets on refresh and physical mobile keyboard is unverified. Phase 3 identity and authority is next; its [implementation plan](PHASE_3_PLAN.md) is a proposal for review, not backend completion. Read [the current run](CURRENT_RUN.md) for evidence/status. No backend or production deployment is claimed.

The 2026-10-04 Agent workforce refinement replaces the basic relationship form with connected hierarchy, cards/list alternatives and selected-Agent inspector; create returns to Agents, ownership and scoped borrowing remain intact, and the redundant Agents context rail is removed while scope stays reachable. This adds UI detail within Phase 2, not backend completion. The Phase 3 proposal now includes persisted relationship configuration and server validation; real delegation remains Phase 5. See CURRENT_RUN.md for current delivery evidence.
