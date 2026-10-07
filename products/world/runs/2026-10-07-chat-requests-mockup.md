<!-- studio {"id":"world:run:chat-requests-mockup-2026-10-07","scope":"world","type":"run","status":"draft"} -->
# Chat work panel and request mockup

## Goal and scope
Show an interactive proposal for multiple questions, multiple approvals and mixed requests directly above the Chat composer, connected to the conversation's work panel. User requests a mockup only. Preserve approved World navigation and Calm Fluent direction; no application/runtime/database/provider changes or deployment.

## Tasks and acceptance criteria
- MOCK (Builder): one thread-owned inline mockup with three switchable scenarios, bounded request queue with one expanded request, question choice/custom answer, exact-action approve/reject/request changes, pending/completed status, and work-panel links that open the corresponding card. Keep composer available; closing/minimizing never approves. All actions local simulation.
- REVIEW (independent QA): source and interaction checks for scenarios, distinct semantics, no implicit approvals or external effects, accessible controls, narrow layout and script errors.
- VERIFY (Orchestrator): review candidate and inspect responsive states; deliver inline for feedback, record honest simulation limitations.

## Decisions and questions
User accepted placement of questions and approvals above the composer. Queue presentation, completion behavior and panel organization are proposals for feedback. No missing authority or material question blocks mockup.

## Routing and outcomes
Routing SHA256 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. Reuse /root/agent_profile_ui_builder (Builder gpt-6.1-sol/low/none) and /root/agent_network_mock_review (QA gpt-6.1-sol/medium/none), verified against recorded prior routing and current configuration. Actual backend activation and token/cost remain unknown. Root owns continuity; workers return concise results only.

## Reviewed outcome and evidence
MOCK/REVIEW/VERIFY complete. [Portable proposal source](../prototypes/world-chat-requests.html), 36,928 bytes after focused keyboard correction, SHA256 52B7A4671ACA5C5518DD9ABB86C6073F9D28CFDCF6A87347282F27E9F47973F9. Inline source lives in the thread visualization directory as world-chat-requests.html. Three scenarios use one expanded card above the composer, queue counts/arrows/list, independent drafts/decisions and matching work-panel pending entries. Questions support numbered options/custom answers; approvals show action/recipient/scope and explicit approve/reject/change request. Closing/minimizing/Later never approves; composer stays usable. Mixed email approval waits for the budget answer; unrelated sharing remains reviewable and checklist work can continue. All actions are local synthetic simulation.

Independent QA accepted exact final hash after one correction restoring keyboard focus across rebuilt queue/navigation controls. Source and synthetic DOM checks pass draft restoration, identity, dependency, decisions, restoration and no external effects. Root browser checks pass 1024/736/390/320 layouts with no outer/control overflow, draft switching, minimizing/reopening, exact-one approval, change-request history, disabled approval before answer and enabled afterwards, reject history, keyboard focus and Enter-send/Shift+Enter-newline. No script errors observed. Density reduced to flat choice rows and compact custom field; inline composer placeholder and correct icon-only primary collapse preserved. Saved local mixed-preview screenshot is world-chat-requests-reviewed.jpg in the same thread directory. Mockup browser proof is not backend/security evidence.

## Deferred and handoff
Live implementation, model context compaction/retrieval/caching, real external-action tools and production remain outside this preview. UI queue layout and dependency examples remain proposals, not newly approved application behavior. Next: user feedback on the inline mockup; application and running test worker remain unchanged. Repository delivery covers this proposal source and continuity only.
