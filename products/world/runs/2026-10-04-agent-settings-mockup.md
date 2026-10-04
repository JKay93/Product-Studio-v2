<!-- studio {"id":"world:run:2026-10-04-agent-settings-mockup","scope":"world","type":"run","status":"draft"} -->
# Agent settings mockup

## Goal and scope
User requests an interactive mockup of the dedicated Agent settings page discussed after the OpenClaw reference. Separate Identity, Instructions, About you, Memory, Knowledge, Skills and Tools; keep workforce inspection compact. Use a new visualization, preserving earlier mockups and the application. Phase 3 remains postponed.

## Tasks and acceptance criteria
- `world:task:settings-mock-build` — Builder: new inline fragment derived from the memory mockup, Calm Fluent, settings shown initially. Working section navigation and local sample configuration save/discard, separated memory/sources/procedures, permission-aware borrowed Agent view, Manage Agent entry and Back to workforce preserving canvas/selection. No real backend, provider or permissions changes; Channels/Automations and advanced source editing deferred. Native sandbox-safe controls, literal escaped edits, keyboard support and responsive down320.
- `world:task:settings-mock-review` — QA: inspect actual candidate independently; check section separation, bounded local edits, privacy, borrowed controls and return behavior. Runtime evidence may be Orchestrator-provided if the reviewer browser remains unavailable; retain prior canvas drag/wheel verification limitation.
- `world:task:settings-mock-present` — Orchestrator: present inline for nitpicking, record approved navigation and actual evidence, verify app/previous mockups unchanged, deliver studio records under standing authorization.

## Outcomes and evidence
Build and review complete; accepted by Orchestrator for mockup feedback, not application release. Candidate: `C:/Users/jingk/.codex/visualizations/2026/10/03/01a100ee-8856-7b50-89d1-27b3c2816217/world-agent-settings.html`, SHA256 `CB99B4C13F0F8CF0ABFEE34470F6A6B89C3F7FDAB0527FEC9B9571222B4FA9AB`. Builder syntax check passed.

Routing hash `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`. Reused Builder `/root/world_canvas_mock_builder` (requested gpt-6.1-sol/low/none) and independent QA `/root/world_canvas_mock_review` (requested gpt-6.1-sol/medium/none), comparing existing receipts and refreshing routing/role before follow-ups. Actual activation/token/cost unknown. Visualize used with project-local UI UX Pro Max guidance; workers returned concise findings for root consolidation.

- Seven distinct settings sections; compact workforce inspector opens Manage Agent. Sources belong in Knowledge, procedures in Skills, memories and suggestions in Memory. Tools honestly states that no connections are configured.
- Independent source review: PASS for feedback. One bounded correction fixed return focus after showing workforce, stale accessibility labeling and the combined personal/World Memory heading. Borrowed Mira retains World-only read-only scope.
- Orchestrator sandbox runtime: required Name validation, saved literal name/instruction edits remain escaped text, Discard restores saved values, section navigation works. Borrowed Identity has no editing controls; Instructions excludes private base, About you is absent, and Memory shows shared World records without mutation actions. These are UI samples, not backend authorization evidence.
- Corrected runtime: Back focuses Manage Agent; selected Mandy and identical canvas transform `translate(-285.3px, -42px) scale(1.1)` preserved. Forget reduces two memories to one and Undo restores two. Mixed Memory scope clearly labels each item.
- Identity screenshots at 320/1024 browser widths checked; iframe root/document client and scroll widths match at 274/992 respectively. Temporary viewport restored. Independent QA browser unavailable; runtime evidence is root-provided. Previous direct canvas drag/wheel verification limitation retained, with working native button alternatives.
- Previous memory mockup remains `F1E0C99253047C0E8C5EB91B87DFAF4DB0D7248D96B8B0DBE627DEF2F7395CB8`; canvas remains `D23F59184976120B1B316290BF51D37D8BADF94F67E2F37B4C663B1E5B4DC3DA`. MyWorld remains clean at `3807e4365a3d4739b555bf3db3dd7ed9cb6c14e7`. No app/backend/provider/publishing changes. Studio records delivered separately under standing authorization.

## Questions
None blocking; this is an interface proposal, not an application build request.

## Decisions
User accepts dedicated Agent settings with distinct sections instead of placing everything in the right rail. Agent ownership and applicable scope remain visible. Borrowed configuration is limited to owner-shared material and allowed controls. Base personal configuration and current-World rules remain distinguishable; edits cannot change enforced World permissions.

## Deferred work
Application implementation, real persistence/learning, provider connections and Phase 3. Advanced source view, Channels and Automations remain future proposals, outside this preview.

## Handoff
Present the separate settings mockup inline; next is user feedback on settings layout and section organization. Do not infer approval to change the application from mockup feedback. Phase 3 remains postponed.
