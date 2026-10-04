<!-- studio {"id":"world:decision:roadmap","scope":"world","type":"decision","status":"approved","links":[{"relation":"requires","target":"world:decision:product"},{"relation":"requires","target":"world:decision:architecture"},{"relation":"requires","target":"world:decision:tech-stack"},{"relation":"requires","target":"world:decision:code-organization"},{"relation":"requires","target":"world:decision:design"}]} -->
# World - Approved roadmap

Approved by the user on 2026-10-03 and sequence updated on 2026-10-04. The accepted Agent-page build is Phase 3; original phases 3–7 shift to 4–8. Build reusable UI first, then connect real behavior in manageable steps. This roadmap records the approved sequence; implementation and security acceptance require separate evidence.

## First release sequence [world:req:first-release-sequence]

| Phase | What we build | Ready when |
| --- | --- | --- |
| 1. Foundation and design system | Establish World's project folder and local instructions. Install UI UX Pro Max locally for World only. Build the Calm Fluent-inspired theme, shared controls, forms, dialogs, Agent cards and navigation. | Representative components are consistent, support keyboard use, and work on desktop and mobile. |
| 2. Complete UI journey | Typed mock data for primary-Agent creation, World switching, Sessions, meeting work, editable Agent canvas, knowledge, permissions and departure. Include empty, loading, error and revoked-access states. | The full experience is clickable and can be assessed before backend work expands. Mock behavior proves interaction only. |
| 3. Agent canvas and settings | Connected Agent hierarchy with pan, pointer wheel zoom, draggable nodes, global/branch expand and collapse, Cards/List and compact inspector. Dedicated Identity/Instructions/About you/Memory/Knowledge/Skills/Tools; sample edit and learning interactions. | Canvas and settings pass independent review, interaction/build checks and ownership visibility checks. Private unowned configuration is hidden. Demo state proves UI only; button refinements may follow. |
| 4. Identity, persistence and authority | Real signup/login, persistent personal and organization-owned Agents, memberships, isolated Sessions, saved configuration/relationships, standing-access grants and revocation. Establish personal versus World memory ownership and source tracking. | Data survives reopening. Real users cannot access unauthorized Worlds or private memory. Revoked membership immediately blocks further protected work. |
| 5. First working workflow | One provider: pasted meeting notes -> editable actions -> approved internal tasks -> follow-up drafts. Persistence, background processing, retry and resume. | Work survives reopening; edits invalidate stale approvals; retries avoid duplicate tasks; revoked work and late results are rejected. |
| 6. Agent collaboration and autonomy | Connect the editable orchestrator canvas to real delegation. Borrow colleagues' existing Agents through scoped standing access; reflect usage in owner activity. Approval settings and scoped opt-out. | Delegation respects every authority boundary. Approval opt-out has a danger warning, visible status, audit trail and easy restoration. |
| 7. Learning, continuity and safe leaving | Real inspectable/correctable personal preferences and memory, separate World learning, selected organization-authorized portable learning with user acceptance, and complete departure experience. | The Agent retains permitted personal continuity. Organization access and pending work stop; authorized organization archives remain; private personal content stays private. |
| 8. Small SME pilot | Test the complete experience with real identities, Worlds, storage, jobs and provider responses. Independently review critical permission and lifecycle behavior. | A nontechnical user completes the workflow; continuity, standing access, portability, approvals and departure pass the real checks. |

The first usable release includes phases 1–8. Earlier milestones provide working demonstrations; the pilot follows the full checks. Basic revocation and memory separation start in Phase 4; jobs in Phase 5 already recheck current authority and reject late results.

## Related decisions [world:req:roadmap-constraints]

The approved [Architecture](ARCHITECTURE.md), [Tech stack](TECH_STACK.md), [Code organization](CODE_ORGANIZATION.md), [Design](DESIGN.md), and [Product decisions](PRODUCT_DECISIONS.md) provide the constraints for these phases. Each record separates accepted choices from remaining implementation details.

## Later [world:req:later-priorities]

Multiple providers -> memory import -> external Agent runtimes. Broader integrations and production infrastructure follow demonstrated need. No calendar estimates or production deployment are authorized by this roadmap.

## Current status

Phases 1–4 are implemented, independently reviewed and accepted for controlled development. Phase 2 is the complete mock journey/navigation shell; Phase 3 is the Agent canvas/dedicated settings. Phase 4 adds real identity, protected persistence, organization memberships/Agents, scoped standing access, memory provenance and revocation. The shared UI remains reusable across explicit demo and backend modes.

Phase 4 acceptance on 2026-10-05: thirteen additive migrations, three real users/two organizations/anonymous API and authenticated database matrix, deterministic grant/membership revocation and CAS races, 52 tests, typecheck/lint and production/gallery builds passed. Real browser creation, saved messages/drafts/configuration, reload/account isolation and organization memory separation passed. Independent review has no remaining material findings. See [the completion run](CURRENT_RUN.md) for candidate bindings, evidence and verified repository delivery.

Actual signup used the explicitly approved controlled database confirmation; email delivery occurred, but the email-link → session PKCE roundtrip remains unverified. This requires a fresh retained-verifier journey before normal email onboarding/pilot acceptance. Physical mobile keyboard and prior borrowed-Agent button/wording refinements remain later checks. Development acceptance is not production or pilot readiness.

Next is Phase 5: one-provider meeting notes → editable actions → approved internal tasks → follow-up drafts, with durable background work, retry/resume and current-authority checks. It has not started. Phases 6–8 and later priorities retain the sequence above; no production deployment or new spending is authorized. Historical records retain their original numbering and stable retrieval IDs.
