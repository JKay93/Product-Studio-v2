<!-- studio {"id":"world:run:2026-10-06-chat-usability","scope":"world","type":"run","status":"approved"} -->
# Chat usability corrections

Goal: fix user-reported conversation rows all resembling selection and adopt Enter to send / Shift+Enter for a newline. User confirms live Claude conversation works; broader UI polish remains deferred. No next-phase implementation, provider calls, schema changes or worker restart.

Baseline: MyWorld main abdaf3cc44a7580ebb1b67d545199c3db7d7a338; Studio main f2ac2d679dc51e4dd9f9f36b9de94562691675f2. Standing scoped commit/push authority applies after independent review and root acceptance.

| Task ID | Owner | Acceptance | State |
| --- | --- | --- | --- |
| world:task:chat-selected-state | Builder | Only current Session has persistent selected appearance; inactive rows/actions neutral, distinct hover/focus retained; current Agent independent | Accepted |
| world:task:chat-enter-send | Builder | Enter submits once; Shift+Enter adds a line; composition/IME and disabled/empty draft do not accidentally send; reuse form submit path | Accepted |
| world:task:chat-usability-proof | QA/root | Affected checks and actual browser row/keyboard proof without paid dispatch, independent review, verified scoped delivery | Accepted |

Routing: unchanged 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. Existing Builder world_phase4_personal_ui requested gpt-6.1-sol/low/none; existing QA world_knowledge_text_review gpt-6.1-sol/medium/none. Actual activation/token/cost measurements unknown. Root owns run and canonical records; workers report concise results only.

Questions: none. User requests establish keyboard behavior. Existing US$4 local testing authority/worker remains unchanged; these corrections require no inference.

Decisions/deferred: basic chat usability corrected now. Real collaboration/delegation Phase 7, learning/continuity Phase 8 and pilot Phase 9 remain future work; major UI/Knowledge editor refinements deferred.

Evidence: Builder frozen candidate changes only src/ui/patterns/agent-chat.tsx, src/ui/shell/navigation.css and tests/chat-usability.test.tsx. Shared global disabled-button fill caused the transient all-selected appearance during async Session saves; scoped neutral disabled/menu styling and distinct muted hover preserve the true selection. Plain Enter calls existing form requestSubmit; Shift, IME composing/229, modifiers, repeat, empty and disabled guards prevent accidental sends. Five focused tests PASS (6af98e), typecheck/affected lint PASS (fe8255). Independent QA actual source/test review PASS, no material findings. Root browser confirms saved switch selects one Session, current Agent remains independent; selected background rgb(234,241,251), inactive transparent. Shift+Enter produces two draft lines; clearing then Enter retains empty focused draft with Send disabled (no inference). Screenshot world-chat-usability-fixed.png saved in thread visualization directory. No full backend/build suite rerun needed for this UI-only change; prior evidence remains applicable. Root accepts scoped correction.

Administrative correction: repaired duplicated Phase 6 roadmap summary discovered during this run; no roadmap scope change. User confirms Claude conversation works. No provider calls, environment/schema changes or worker restarts.

Delivery: accepted scoped application changes and canonical Studio records are committed/pushed to their verified repositories; exact application revision and remote receipt appended below, Studio self-commit receipt stays in host completion history. Next: user continues local testing; major UI polish and phases 7–9 remain deferred.

Application delivery verified: MyWorld main 020d3a9cc024d0acf19105c2417b51c717c3a9b8, remote matches local (d59446), working tree clean. Studio delivery follows with remote verification; no deployment.
