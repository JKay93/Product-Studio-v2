<!-- studio {"id":"world:run:2026-10-04-agent-canvas-mockup","scope":"world","type":"run","status":"draft"} -->
# Agent canvas mockup

## Goal and scope
User postpones Phase 3 and prioritizes Agents. Produce a separate interactive conversation mockup first, based on the supplied hierarchy/inspector image and Calm Fluent. Do not modify the application or start backend work. Current MyWorld baseline remains 3807e4365a3d4739b555bf3db3dd7ed9cb6c14e7.

## Tasks and acceptance criteria
- `world:task:canvas-mock-build` — Builder: standalone inline fragment under the thread visualization directory; primary grouped navigation, hierarchy and inspector. Working background drag-pan, cursor-anchored wheel zoom, zoom buttons/fit, individual branch expansion plus expand/collapse all. Node selection updates inspector without work-scope changes; individual node dragging retains connector alignment. Sample data only. Responsive and keyboard/pointer alternatives. No network/backend/publish/app edits.
- `world:task:canvas-mock-review` — independent QA: actual fragment/runtime/reference checks, pan/zoom anchoring, expansions, selection, dimensions and keyboard usability; honest limitations.
- `world:task:canvas-mock-present` — Orchestrator: deliver inline mockup, record evidence/deferred Phase 3 and verify app unchanged.

## Outcomes and evidence
Visualize and project-local UI UX Pro Max guidance read. Scoped UX search dragging movements matched single-pointer/keyboard alternatives. Routing hash `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`; Builder requested gpt-6.1-sol/low/none, returned `/root/world_canvas_mock_builder`; independent QA requested gpt-6.1-sol/medium/none, returned `/root/world_canvas_mock_review`. Configuration and roles refreshed before follow-ups; actual activation/token/cost unknown.

- Build completed: thread-owned fragment `C:/Users/jingk/.codex/visualizations/2026/10/03/01a100ee-8856-7b50-89d1-27b3c2816217/world-agent-canvas.html`, SHA256 `D23F59184976120B1B316290BF51D37D8BADF94F67E2F37B4C663B1E5B4DC3DA`. Syntax checked. Calm Fluent hierarchy, node movement/panning/wheel zoom handlers, expansion controls, fixed inspector, Cards/List, sample creation and keyboard alternatives.
- Independent initial runtime review verified expansion counts/edges (10 nodes/9 edges all expanded; 8/7 after one branch collapse; 1 root collapsed), selection/ownership, honest unconfigured panels, Cards/List, keyboard node movement, pan buttons, zoom limits 25–200% and Fit. No global horizontal overflow at browser widths 1024/1440/320. Three findings corrected: sandbox-blocked native submission, misleading World switch and unconditional resize fitting. Independent correction source review found no new defects; its browser disconnected before corrected runtime checks.
- Orchestrator verified corrected runtime in the actual sandbox: required-field validation; button and Enter creation close the dialog, create/select nodes with the intended parent; static PM Leaderboard scope; manual transform `translate(-222.011px,3.38798px) scale(0.808743)` remains identical after resize and reload. Final focused hierarchy visually inspected. Temporary viewport restored.
- Verification limitation: native browser drag/wheel automation either refused fractional iframe coordinates or completed without a changed transform. Pointer capture, drag connector tracking and cursor anchoring were source-reviewed, not established by runtime evidence. Keyboard/button alternatives passed. Accepted for user exploration as a prototype with this explicit manual-check limitation, not as application or release acceptance.
- MyWorld remained clean at `3807e4365a3d4739b555bf3db3dd7ed9cb6c14e7`; no application edit, backend work or deployment. Product records delivered separately to the verified studio repository.

## Questions
None blocking; canvas dragging includes panning plus sample node movement for exploration. Reference informs layout; fixed Calm Fluent light remains selected.

## Decisions
Explicit request is mockup first. Phase 3 postponed; its plan retained as draft. No inference that mockup feedback authorizes application implementation. No need backend configuration now.

## Deferred work
Application canvas changes await mockup review/build request. Phase 3 identity/authority postponed at user direction. No model/runtime/provider connections, spending or publishing.

## Handoff
Build and review complete with the pointer-runtime limitation above; present inline for feedback. Next: user explores canvas dragging, wheel zoom, expansion and inspector layout. Correct any reported prototype issues before implementing an approved design. Phase 3 remains postponed. Root owns product records; workers do not duplicate paperwork.
