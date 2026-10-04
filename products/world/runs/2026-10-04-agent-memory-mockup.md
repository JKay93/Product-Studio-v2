<!-- studio {"id":"world:run:2026-10-04-agent-memory-mockup","scope":"world","type":"run","status":"draft"} -->
# Agent memory mockup

## Goal and scope
Extend the approved Agent canvas as a separate interactive mockup showing Knowledge in the selected-Agent rail: memories, sources, learned procedures and proposed learning. Demonstrate a full management workspace and reversible sample controls before application implementation. Phase 3 remains postponed; no app/backend/provider/publishing work.

## Tasks and acceptance criteria
- `world:task:memory-mock-build` — Builder: reuse approved canvas in a new thread-owned fragment; default selected Mandy/Knowledge; compact rail with sample scopes, source provenance and permitted edit/forget/accept/dismiss actions. Manage knowledge & memory opens a full local workspace and returns to Agents without losing selection/canvas. Borrowed Mira exposes shared current-World material only, no private sample contents or editing authority. Instructions stays separate. Escaped edits, reversible forgetting, sandbox-safe controls, responsive down320; preserve canvas behavior.
- `world:task:memory-mock-review` — QA: read-only review actual candidate, exercise memory controls, borrowed visibility, management transition and responsive layout; reuse prior unaffected canvas evidence and preserve pointer-runtime limitation.
- `world:task:memory-mock-present` — Orchestrator: present inline, consolidate evidence and decisions, verify application unchanged, deliver studio continuity.

## Outcomes and evidence
Build/review complete, accepted for mockup feedback. Candidate: `C:/Users/jingk/.codex/visualizations/2026/10/03/01a100ee-8856-7b50-89d1-27b3c2816217/world-agent-memory.html`, SHA256 `F1E0C99253047C0E8C5EB91B87DFAF4DB0D7248D96B8B0DBE627DEF2F7395CB8`. Syntax passed. Original canvas retained unchanged at SHA256 `D23F59184976120B1B316290BF51D37D8BADF94F67E2F37B4C663B1E5B4DC3DA`.

Routing hash `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`. Reused Builder `/root/world_canvas_mock_builder` (requested gpt-6.1-sol/low/none) and independent QA `/root/world_canvas_mock_review` (requested gpt-6.1-sol/medium/none); refreshed current role/routing and compared receipts before each follow-up. Actual activation/token/cost unknown. Visualize and project-local UI UX Pro Max read; scoped undo/destructive-action UX search informed reversible sample actions. No duplicate worker paperwork.

- Initial review found an overly long rail and missing long-text wrap protection. One bounded correction moved provenance/actions to details, kept title/scope/one-line previews, made Manage prominent and protected long edited text.
- Independent source review of corrected candidate: PASS for feedback; compact layout, escaped edits, own-memory actions, private filtering, borrowed read-only guards, World-scoped acceptance, separate Instructions and preserved canvas state. QA browser unavailable; runtime evidence below is Orchestrator-provided, not independent browser execution.
- Actual sandbox checks: default Mandy/Knowledge; clicking a row opens details/provenance. Literal `<b>`/ampersand edits remain text; blank edit rejected. Forget reduces memory count and Undo restores it. Acceptance moves suggestion into PM Leaderboard memory; dismissal removes suggestion and offers Undo. Neither exports to personal memory.
- Borrowed Mira rail/full manager: private sample text absent from DOM; edit/forget/accept/dismiss/undo controls absent. Manager return preserves selection and identical canvas transform `translate(-229px,-10px) scale(1)`.
- Browser widths 320/1024: no global horizontal overflow (iframe client/scroll widths 274/274 and 978/978). An 800-character unbroken edit wraps in the details dialog and full manager. Temporary viewport restored. Memory edits intentionally reset on reload, as labeled; this is sample behavior only.
- Original canvas direct pointer/wheel runtime limitation retained. No claim of real learning, persistence, authorization or release readiness. MyWorld remains clean at `3807e4365a3d4739b555bf3db3dd7ed9cb6c14e7`; no application changes. Studio records delivered separately under standing authorization.

## Questions
None blocking. Sample interactions demonstrate presentation only, no real learning or authority enforcement.

## Decisions
Knowledge rail placement and compact/full management split accepted in discussion. Detailed storage/consolidation/learning lifecycle remains a recommendation, not a backend implementation decision. Private owner memory must remain hidden when inspecting a borrowed Agent. Organization learning export continues to require organization permission and user acceptance; this preview does not implement export.

## Deferred work
Real persistent memory, automated learning, measured procedure improvement and backend authorization await future scope. Phase 3 remains postponed. Application changes await a build request after mockup feedback.

## Handoff
Present the updated mockup inline. Next: user feedback on Knowledge rail/details/full management; application build only when requested. Phase 3 remains postponed. Original canvas and prior run remain available. Root owns continuity and acceptance.
