<!-- studio {"id":"world:decision:roadmap","scope":"world","type":"decision","status":"approved","links":[{"relation":"requires","target":"world:decision:product"},{"relation":"requires","target":"world:decision:architecture"},{"relation":"requires","target":"world:decision:tech-stack"},{"relation":"requires","target":"world:decision:code-organization"},{"relation":"requires","target":"world:decision:design"}]} -->
# World - Approved roadmap

Approved by the user on 2026-10-03, Agent-page sequence updated on 2026-10-04, and Knowledge-first approved on 2026-10-05. The accepted Agent-page build is Phase 3; Knowledge library is Phase 5 and later outcomes follow as phases 6–9. Build reusable UI first, then connect real behavior in manageable steps. This roadmap records the approved sequence; implementation and security acceptance require separate evidence.

## First release sequence [world:req:first-release-sequence]

| Phase | What we build | Ready when |
| --- | --- | --- |
| 1. Foundation and design system | Establish World's project folder and local instructions. Install UI UX Pro Max locally for World only. Build the Calm Fluent-inspired theme, shared controls, forms, dialogs, Agent cards and navigation. | Representative components are consistent, support keyboard use, and work on desktop and mobile. |
| 2. Complete UI journey | Typed mock data for primary-Agent creation, World switching, Sessions, meeting work, editable Agent canvas, knowledge, permissions and departure. Include empty, loading, error and revoked-access states. | The full experience is clickable and can be assessed before backend work expands. Mock behavior proves interaction only. |
| 3. Agent canvas and settings | Connected Agent hierarchy with pan, pointer wheel zoom, draggable nodes, global/branch expand and collapse, Cards/List and compact inspector. Dedicated Identity/Instructions/About you/Memory/Knowledge/Skills/Tools; sample edit and learning interactions. | Canvas and settings pass independent review, interaction/build checks and ownership visibility checks. Private unowned configuration is hidden. Demo state proves UI only; button refinements may follow. |
| 4. Identity, persistence and authority | Real signup/login, persistent personal and organization-owned Agents, memberships, isolated Sessions, saved configuration/relationships, standing-access grants and revocation. Establish personal versus World memory ownership and source tracking. | Data survives reopening. Real users cannot access unauthorized Worlds or private memory. Revoked membership immediately blocks further protected work. |
| 5. Knowledge library | Owned personal/World source documents, folders, reader, immutable versions, archive/restore, bounded TXT/Markdown/text-PDF import, authorized keyword search and passage references. Knowledge stays distinct from behavioral Memory. | Users can add, inspect and find exact source passages; reload/retries/version conflicts and real storage/access/revocation checks pass. Start with interactive mockup for visual assessment. |
| 6. First working Agent and workflow | Direct Claude: streamed persistent chat, permitted Knowledge source links, pasted meeting notes -> editable assigned actions -> approved internal tasks -> follow-up drafts. Background processing, retry, cancel and resume. | Chat and work survive reopening; edits invalidate stale approvals; retries avoid duplicate tasks; revoked work and late results are rejected; cumulative test spending stays within its approved cap. |
| 7. Agent collaboration and autonomy | Connect the editable orchestrator canvas to real delegation. Borrow colleagues' existing Agents through scoped standing access; reflect usage in owner activity. Approval settings and scoped opt-out. | Delegation respects every authority boundary. Approval opt-out has a danger warning, visible status, audit trail and easy restoration. |
| 8. Learning, continuity and safe leaving | Real inspectable/correctable personal preferences and memory, separate World learning, selected organization-authorized portable learning with user acceptance, and complete departure experience. | The Agent retains permitted personal continuity. Organization access and pending work stop; authorized organization archives remain; private personal content stays private. |
| 9. Small SME pilot | Test the complete experience with real identities, Worlds, storage, jobs and provider responses. Independently review critical permission and lifecycle behavior. | A nontechnical user completes the workflow; continuity, standing access, portability, approvals and departure pass the real checks. |

The first usable release includes phases 1–9. Earlier milestones provide working demonstrations; the pilot follows the full checks. Basic revocation and memory separation start in Phase 4; durable Knowledge processing when introduced in Phase 5 and workflow jobs in Phase 6 already recheck current authority and reject late results.

## Related decisions [world:req:roadmap-constraints]

The approved [Architecture](ARCHITECTURE.md), [Tech stack](TECH_STACK.md), [Code organization](CODE_ORGANIZATION.md), [Design](DESIGN.md), and [Product decisions](PRODUCT_DECISIONS.md) provide the constraints for these phases. Each record separates accepted choices from remaining implementation details.

## Later [world:req:later-priorities]

Multiple providers -> memory import -> external Agent runtimes. Broader integrations and production infrastructure follow demonstrated need. No calendar estimates or production deployment are authorized by this roadmap.

## Current status

Priority update2026-10-09: user testing continues; cohesive UI redesign is now
**high priority**, replacing the earlier general deferral of major UI work. See
[Design](DESIGN.md#high-priority-ui-redesign-worldrequi-redesign-priority). This
reprioritization does not start a new implementation phase during the discussion.

Phases1–8 have controlled-development implementations. Subsequent builds added
Agent directories/profiles/graphs, continuous-chat work panels, multi-Agent Sessions,
question lifecycles, safe rich replies, saved region/language preferences, bounded
native tools/Agent creation/Knowledge creation and rich Knowledge live editing.
Current delivered evidence is in [Current run](CURRENT_RUN.md). The broader Agent
quality target remains unmet in the frozen evaluation; latest runtime changes have
not established universal ChatGPT/Codex parity. Development completion and visual
acceptance, pilot acceptance and production readiness remain separate evidence.

Remaining first-release work: user-observed reliability/usability fixes and live
end-to-end checks of the added capability flows; normal email-link/PKCE onboarding;
mobile/physical keyboard checks; deployment-compatible document processing,
retained encryption-key/backup recovery and retention/purge decisions. Phase9 small
SME pilot remains unstarted. Prioritize whole user journeys through Agents, Sessions,
Knowledge, review, learning, borrowing and safe departure rather than isolated
component test totals. No new paid benchmark or production deployment is authorized
by this update.

Later scope remains multiple providers, memory import and external runtimes/Passport
interoperability. Discussed extensions include SaaS connectors, IFTTT-style workflow
authoring, enterprise-authored harnesses and fuller human team collaboration; these
need their own scoped implementation decisions. Billing/production operations also
require concrete decisions before a public service.

The user-authorized combined-harness evaluation before Phase 8 is complete for controlled development: [measured report](HARNESS_EVALUATION.md) and current run contain independent 3/3 workflow and 16/16 content scores, fresh policy/expiry/revocation tests, timing limitations and actual token/cost evidence. No new runtime restriction or migration was required. This small synthetic sample is not pilot acceptance. Phase 8 was authorized on2026-10-07 under the [accepted learning plan](PHASE_8_LEARNING_PLAN.md) and is accepted for controlled development; the [learning report](LEARNING_CONTINUITY_REPORT.md) records the completed runtime and measurements. Pilot Phase 9 remains unstarted.

Phases 1–4 are implemented, independently reviewed and accepted for controlled development. Phase 2 is the complete mock journey/navigation shell; Phase 3 is the Agent canvas/dedicated settings. Phase 4 adds real identity, protected persistence, organization memberships/Agents, scoped standing access, memory provenance and revocation. The shared UI remains reusable across explicit demo and backend modes.

Phase 4 acceptance on 2026-10-05: thirteen additive migrations, three real users/two organizations/anonymous API and authenticated database matrix, deterministic grant/membership revocation and CAS races, 52 tests, typecheck/lint and production/gallery builds passed. Real browser creation, saved messages/drafts/configuration, reload/account isolation and organization memory separation passed. Independent review has no remaining material findings. See [the completion run](CURRENT_RUN.md) for candidate bindings, evidence and verified repository delivery.

Actual signup used the explicitly approved controlled database confirmation; email delivery occurred, but the email-link → session PKCE roundtrip remains unverified. This requires a fresh retained-verifier journey before normal email onboarding/pilot acceptance. Physical mobile keyboard and prior borrowed-Agent button/wording refinements remain later checks. Development acceptance is not production or pilot readiness.

The [Knowledge-first plan](PHASE_5_KNOWLEDGE_PLAN.md) now has all Phase5 implementation and combined checks complete: nested folders/notes, immutable versions, scoped publication, CAS/retries/archive/restore, encrypted TXT/Markdown/selectable-text PDF originals and previews, ranked title/body passage search, exact version/page/paragraph opening and recovery. Twenty additive migrations, actual Storage/API/DB/privacy/revocation/race/reconstruction proof, measured parser caps,102 tests/18 files, typecheck/lint, production/gallery builds and actual desktop/mobile search/focus checks pass. Independent acceptance and verified repository delivery are recorded in CURRENT_RUN.md.

This milestone is controlled development, not production or pilot readiness. PDF's guarded runtime remains Windows-only; retained server keys are required for original recovery, cached ciphertext may replay and fresh app plaintext enforces current access. Existing email-link-session/physical mobile keyboard and deferred UI refinements remain before pilot.

Phase 6 is implemented and independently accepted for controlled development under its [whole-phase plan](PHASE_6_WORKING_AGENT_PLAN.md). Real Claude grounded chat/source opening, persistent follow-up, editable/assigned meeting actions, exact approval/internal tasks and saved follow-up drafts pass. Twenty-three migrations, 126 tests, type/lint/production/gallery and actual restricted-worker/source/revocation/spend/recovery/browser checks pass. Four paid synthetic attempts used US$0.011806 estimated under the cumulative US$4 cap. The user explicitly approved their own local testing; runtime authority and verified repository closure are recorded in CURRENT_RUN.md. Historical records retain original numbering and stable retrieval IDs.

Phase 7 is implemented, independently reviewed and accepted for controlled development under its [collaboration plan](PHASE_7_COLLABORATION_PLAN.md). Saved relationships execute bounded real delegation/aggregation; colleague standing access, metadata-only owner usage and exact scoped internal-task approval/opt-out/audit/restoration pass. Twenty-five installed migrations, 136 tests/26 files, type/lint/production/gallery, actual restricted queue/API/database/privacy/revocation/race/recovery/spend checks and live three-Agent Claude workflow pass. Edited/assigned approved tasks, findings and drafts survive reopening. Three paid synthetic dispatches used US$0.024680 estimated within the unchanged cumulativeUS$4 cap. Runtime and verified repository delivery are recorded in CURRENT_RUN.md. Phase8 learning/continuity/safe leaving is now accepted for controlled development; Phase9 pilot remains unstarted. No production release is authorized.
