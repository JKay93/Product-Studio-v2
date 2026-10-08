<!-- studio {"id":"world:run:question-loop-fix-2026-10-08","scope":"world","type":"run","status":"accepted"} -->
# Repeated question investigation and fix

User authorizes investigation, implementation and a summarized report. Keep localhost and the Claude worker stopped under the explicit spending-protection instruction; no paid calls or production deployment.

## Tasks and acceptance

- Q1 Root: inspect affected saved jobs/questions narrowly and establish verified cause separately from hypotheses.
- Q2 Builder: repair ordinary-versus-structured clarification guidance and coherent multi-question continuation, preserving exact decisions, current authority, retries and idempotency.
- Q3 QA/Root: independent review plus offline regressions and protected database proof where applicable; no two-answer duplicate continuation, no lost answers, no approval inferred from clarification.
- Q4 Root: consolidate evidence, preserve stopped runtime, commit and verify delivery to MyWorld and Product-Studio-v2.

## Decisions, questions and deferred work

Ordinary conversational clarification belongs in chat; structured questions support material decisions. Approval stays bound to a concrete authorized action. Existing installed migrations remain immutable. No new API spending. No material user question yet. Live Claude retesting and service restoration await fresh user authorization.

## Handoff

Accepted for controlled development. Source/database fix and independent verification complete; repository delivery follows below. Localhost and Claude worker remain stopped. No queue/ledger reset. Actual agent activation, tokens and cost unknown. Live provider retest requires fresh authorization.

## Investigation checkpoint

Read-only verified-TLS inspection of the affected shared conversation establishes 10 jobs: initial `@product work`, eight completed individual-answer continuations, one cancelled individual-answer continuation; nine complete / one cancelled / zero active. The initial two answers each started a separate job; both produced deliverable/audience questions. Later outputs explicitly recognized repeated launch-plan and executive-audience answers. History was therefore not entirely missing. The confirmed failure is per-card continuation plus overly broad structured-question guidance and no follow-on round limit; no claim that Claude spontaneously ran without submissions.

Q2 dispatched `/root/question_loop_builder`, requested Builder gpt-6.1-sol/low/fork none, routing SHA256 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. Actual activation unknown. Design: protected whole-round continuation with original task/all answers, stable retries and one resume; further missing-detail clarification stays conversational. Live database remains root-only, workers offline.

Q3 dispatched `/root/question_loop_qa`, requested independent QA gpt-6.1-sol/medium/fork none, same routing hash; actual activation unknown. Initial source review identified JSON-escape expansion at the worker input limit; Builder is correcting it before live rollback proof. Root spending baseline is 545,816 microUSD / 101 retained rows (includes previous live testing), not the historical 431,770 total. No spending reset. Fresh targeted check confirms zero Node worker processes and zero localhost3000 listeners.

## Result and rules [world:run:question-loop-fix:result]

- Q1 complete: verified per-answer branching and repeated cards in the actual affected conversation. Later replies recognized prior answers; do not describe the defect as wholesale context loss or autonomous job spawning.
- Q2 complete: related questions bind to their original job as one round. Individual exact answers persist, partial rounds wait, complete rounds resume once with original task and all answers. Server-owned identity and exact decision digest make replay/concurrent submissions reuse that job. Old per-question enqueue paths reject. Authority, sources, exact actor and every decision revision revalidate at execution and retained source admission; reopened answers redact stale replies through existing recovery behavior. Clarification never grants action approval.
- Ordinary vague requests such as Work now receive guidance to ask a concise normal chat question. Structured cards are for material choices in an understood task. Continuation output cannot create a successor structured round: database finish enforces suppression, worker parser also removes question-only suffix echoes while preserving normal reply and learning. Later deliberate human chat turns remain available.
- Q3 complete: independent QA PASS on actual final source and installed migration; no blocking finding. Review separately fixed legal JSON-control-character expansion and a retained-read gap. Proof fixtures were corrected to use server-issued shared message/job IDs. Exact cleanup was extended for existing memory/profile foreign keys. No human data/charges were removed.
- Twenty-one changed files: seventeen existing files reused (including the existing exact-byte migration Git attribute), four new files (additive migration046, two root-only protected proof scripts, one cleanup safety test). Application domain/API/UI/worker paths stay in World; no new dependency or service.

## Verification [world:run:question-loop-fix:verification]

- Full offline suite: 286 tests / 54 files PASS; subsequently added five cleanup safety tests pass independently. QA separately ran 33 focused final runtime/parser/UI/compiler tests and five cleanup tests. Typecheck, full lint, affected final lint, whitespace check and final production build PASS.
- All46 migrations rebuild in an empty rollback-isolated schema with actual restricted role, authority/budget/approval/delegation/provenance assertions. Corrected direct/shared question-round rollback proof PASS: incomplete siblings wait, exact actor/replay/legacy bypass, 12,000-character original plus all maximum-size answers retained, no inferred approval, fake repeated card drafts suppressed and reopened answer reads redacted.
- Installed existing Shared Session regression PASS: atomic submission, FIFO, bounded history/fresh replies, current exact question decisions, shared reads, approval/task progression, holds/settlement, direct privacy, source/member/issuer/participation revocation. Synthetic reservation assertions roll back; no provider call.
- Actual two-connection final-answer and simultaneous-retry proof PASS for direct/shared: exactly one continuation each; exact generated zero-spend scopes removed. Initial proof assertions passed but cleanup failed on missing existing memory FK dependencies; corrected helper removed only that exact generated scope, and a healthy rerun completed proof plus cleanup. No spend-row deletion permitted by this proof.
- Reviewed046 installed SHA256 `E84252AEC546D4663BCF14769E69E6CBDD559B0AA496028632A2192615D15EAD`; migrator verified installed001–045 unchanged. Final read-only checks: zero synthetic race Worlds, zero queued/running jobs in affected conversation, zero Node worker processes, zero port3000 listeners. Ledger exactly545816 microUSD /101 rows before and after; zero paid calls during this run.

## Limits and retained setup state [world:run:question-loop-fix:limits]

Ordinary clarification behavior is model guidance, not a guaranteed semantic classifier; live Claude wording has not been retested because services remain stopped. Mechanical successor-card suppression and job cardinality are tested independently of provider compliance. No numerical output-accuracy, model latency or token-efficiency improvement is claimed; fewer duplicate jobs is observed, model metrics remain unmeasured.

First concurrency proof committed its setup GRANT of world_agent_worker membership to the already privileged postgres setup account without recording previous membership. Original membership is unknown, so no blind revoke was performed. QA found no product acceptance blocker: application RPC grants and restricted runtime login/permissions are unchanged. Corrected future proof records and restores only a membership it introduces; healthy rerun preserved its observed pre-test explicit membership. Do not claim original pre-run membership unchanged.

Questions: none pending. Deferred: live Claude/browser retest and runtime restoration await fresh user authorization; broader UX changes and new phases remain outside this fix. Next: user feedback; keep services stopped.

## Delivery [world:run:question-loop-fix:delivery]

Q4 complete for application: accepted MyWorld commit `92b956c81ee97bcce8dfcb5eb90855b90445a3bb` pushed to verified JKay93/MyWorld main; independent remote read matches and local World checkout is clean. Staged046 bytes match installed exact digest; existing migration byte-preservation pattern extended to046. Studio decision/run records and the preceding emergency-stop note are included in this authorized Studio delivery, whose receipt is retained in host history. No deployment or runtime restoration.
