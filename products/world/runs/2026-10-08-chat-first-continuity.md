<!-- studio {"id":"world:run:chat-first-continuity-2026-10-08","scope":"world","type":"run","status":"approved","links":[{"relation":"requires","target":"studio:rule:standing-orders"}]} -->
# Chat-first work and long conversation continuity

## Goal and authority
Implement the accepted floating Chat work mockup, remove the redundant primary Work tab, and verify long conversation continuity. User authorised implementation on2026-10-08. Preserve underlying work records, exact approvals, current authority, sources, human data and cumulative US$4 provider cap. No production release or external action tools.

## Tasks and acceptance
- **CF1 / Builder UI / complete:** primary Work navigation removed. Chat floating work menu contains current work, pending requests, outputs and sources; no collaborators section. Only selected output/source/work opens larger detail. Questions and approvals above composer support mixed queues, drafts and explicit decisions. Closing/minimising never consents. Existing meeting editing/approval/recovery remains reachable.
- **CF2 / Builder runtime / complete:** bounded original-history recovery retains recent messages and query-relevant older facts/corrections/decisions with timestamps and excerpt offsets. Real proof verifies original record retention, isolation, malicious history as data and admission limits.
- **CF3 / independent QA / complete:** actual UI/runtime/parser/SQL source independently reviewed; root real database and build checks pass. Final browser reopen hit an automatic approval timeout; earlier actual full-width/menu/detail checks passed. This is a browser tooling limit, not a claim that final mobile UI was fully verified.
- **CF4 / Orchestrator / complete:** canonical decisions, run continuity, controlled-development acceptance and verified repository delivery. Receipts appended below after delivery.

## Dispatch and review
Current routing SHA2561C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. Reused /root/agent_profile_ui_builder and /root/agent_profile_backend_builder (Builder gpt-6.1-sol/low/none); newly spawned /root/chat_requests_backend at explicit same Builder route. Independent /root/agent_network_mock_review uses QA gpt-6.1-sol/medium/none. Actual backend activation, host tokens and cost remain unknown. Workers offline only; root owns live proofs and this record.

QA final UI source PASS: chat-work-surface6C9351C3885F57B982B9D6A73A8965421EAE3C29CB8784CAAFE09855F4B2C478; saved-chat-questions763CBC43BBDB90F2DD89CAB1C47285B8543036B9681D227B2420F679109F77C2; working-chat-presentation0ABFD90C896DFC760F7F0F88CD6820A3E2933CBD33A670D1E2A8BA667A092A29; working-agent-work59334EE24B54D69C49381C303FEAF78BC7A9E3F614E051110EC8FA7B6A15358F; persistent-workspaceB2C951590AFFB8296B07F5822CB634A4BED67B9DB4C245C7889A1DC76E6B6B8B. Combined chat-question/learning parser reviewed; both suffix orders supported. No remaining material source finding.

## Outcomes and evidence
Root installed039–043 after independent review; earlier installed bytes preserved, new byte rules added to .gitattributes. Reviewed hashes:
- 039 conversation_continuity255AD22ED70B91DADD8B3C23503F810BFC04F37CA8814133F6084DF806BE84F1.
- 040 agent_questions58F43070051EB2CA32072B4D422521868AD7C1366FFDAD04CAF8154B8274BA09.
- 041 proposal_rejection1B0809FD40F8A01D4A0D2D9C3AC5B23DA052395E69B67B1985F9D6F20FACE8FB.
- 042 request_decision_auditAD2E74CB85D02104CEBE72F1B27B22F1163FA2B29907F068486B602AC6747F02.
- 043 question_finish_ordinal311A25355FA0515E88F05268912D9FF25A677B493984AD407D4F87BCF8629424.

Real verified-TLS rollback proofs:
- conversation-continuity.mjs PASS with1,000 original turns, older deadline12Oct, later25Oct correction and Singapore decision after500 noise turns. Exact Session/current retained-source boundaries, requester/revocation denial, malicious content as untrusted data, original1,000 records unchanged and bounded chronology/excerpts pass. Whole setup/proof4.6seconds is not model end-to-end latency.
- agent-questions.mjs PASS through actual enqueue, restricted claim/context/finish and deliberate question decisions. Original requester input retained; answer/change/reject, stale/duplicate, cross-scope/nonrequester and unavailable-source cases pass. Exact proposal digest rejection prevents later edit/approval bypass and creates no tasks. Final proofC13DDFFE3895D7B944A65B07EE9CB3CEBA354F139C529FC28ED4D4D05A2F9127 additionally asserts exactly four metadata audit events with original actor/World/request targets; denied operations add none.
- all43 migrations rebuilt in an empty rollback-isolated schema PASS; restricted chat/context/budget/exact effects, outbox expiry, Session cancellation/retained approved effects, participation revocation, bounded nested collaboration/idempotency, child isolation, scoped waiver/audit, immutable passage provenance and actual compiler checks pass. No fixtures/schema retained.

Final offline checks:262 tests / 51 files PASS (maxWorkers4), typecheck and full lint PASS, production and component-gallery builds PASS. First parallel full run260/262 had two five-second journey timeouts under concurrent build load; isolated12/12 journey checks then complete262/262 rerun pass. No timeout/expectation weakened. Gallery initially could not read package-resolution parents under sandbox; authorised escalation build passed. Lint excludes ignored generated test-results outputs, leaving app/tests checked.

Actual browser checks before rebuild: no primary Work, floating menu leaves Chat width786px unchanged, output selection opens detail with Chat503.05px, close restores786px. Actual saved response readable, no collaborators section or paid messages sent. Browser final reopen failed localhost connection and IPv4 automatic approval review timed out983.7seconds without a decision. No browser security bypass. Restored localhost server22164 respondsHTTP200; Codex open preview queued. Physical mobile keyboard and final post-rebuild responsive browser check remain unverified. Restricted worker6933 ready/provider enabled; startup uses only worker connection and existing provider key, never privileged test connection.

Fresh readiness before worker:0 eligible, cumulative431770microUSD ledger unchanged, ceiling4000000. No provider calls or additional test spend this run;228000 older uncertain holds remain unchanged. Human account/session/selection/data not modified. All live fake execution transaction-rolled back.

## Decisions and limitations
Approved by user: remove primary Work navigation; keep work beside Chat in the accepted compact floating menu; sources retained and collaborators omitted. Question choices/custom answers are persisted before ordinary Chat continuation, with deterministic idempotent request identity; response history remains visible even without a separate world_messages record. Saved-answer recovery never silently approves anything. Proposal approval/edit/reject reuse existing protected workflow. No arbitrary external email/publishing tool added.

Implemented continuity: latest10,000 eligible saved turns are candidates;12 recent plus up to24 lexical relevant older turns, chronological excerpts with offsets and total about12,000 characters (proof11,760). Existing8,000 input-token fence remains before reservation/stream. This bounds results, not necessarily database scan/sort cost. Originals remain saved. Lexical recovery can miss synonyms/unmentioned facts and truncation can omit content: this is not a guarantee that every fact reaches every model call. No new paid summary calls/cache pricing or live-Claude accuracy/latency measurement. Retrieved history never grants authority; current access/source checks remain decisive.

## Questions and deferred work
No missing human authority or open product question for this run. Deferred: semantic retrieval/full-history UI pagination, measured live recall evaluation, general injection evaluation, physical mobile keyboard/final browser responsive follow-up, major visual redesign, external tools, production and Phase9 pilot. These remain separate work; no automatic phase start.

## Handoff
Accepted for controlled development. User can test localhost3000 with existing Agent/Claude setup under unchanged cumulativeUS$4 cap. Next is user feedback on Chat work menu, mixed decisions and real continuous conversation; disclose finite recall limits rather than promise losslessness. Application delivery is verified below; Studio delivery accompanies these records.

## Application inventory
36 changed/new tracked application paths (generated next-env excluded):

- .gitattributes
- AGENTS.md
- eslint.config.mjs
- src/adapters/database/request-repository.ts
- src/adapters/models/request-output.ts
- src/adapters/worker/input.ts
- src/adapters/worker/runtime.ts
- src/adapters/workspace/agent-request-request.ts
- src/app/api/agent-requests/route.ts
- src/modules/agent-requests/index.ts
- src/modules/sessions/continuity.ts
- src/ui/patterns/agent-chat.tsx
- src/ui/patterns/agent-inspector.tsx
- src/ui/patterns/chat-work-surface.tsx
- src/ui/patterns/demo-workspace.tsx
- src/ui/patterns/persistent-workspace.tsx
- src/ui/patterns/saved-chat-questions.tsx
- src/ui/patterns/working-agent-work.tsx
- src/ui/patterns/working-chat-presentation.tsx
- src/ui/patterns/workspace-content.tsx
- src/ui/patterns/workspace.css
- src/ui/shell/workspace-navigation.tsx
- supabase/migrations/202610080039_conversation_continuity.sql
- supabase/migrations/202610080040_agent_questions.sql
- supabase/migrations/202610080041_proposal_rejection.sql
- supabase/migrations/202610080042_request_decision_audit.sql
- supabase/migrations/202610080043_question_finish_ordinal.sql
- tests/agent-requests.test.ts
- tests/chat-work-surface.test.tsx
- tests/conversation-continuity.test.ts
- tests/integration/agent-questions.mjs
- tests/integration/conversation-continuity.mjs
- tests/saved-chat-questions.test.tsx
- tests/working-agent-ui.test.tsx
- tests/working-chat-presentation.test.tsx
- tests/workspace.test.tsx


## Repository delivery
MyWorld remote main verified at7204dead21405db68faa738d68cb218af212d2ca (36 paths). Initial982c01f869aa1d1e61ffc7bf36d2e1a38cb07d41 advanced normally; no force push. Studio owns only the four updated product records. Credentials, local fixture configuration, generated builds and unrelated files excluded. Studio graph/routing check PASS. No production deployment.

Correction evidence: the first protected question proof exposed installed040's ambiguous local ordinal/conflict-target identifier. Independently reviewed additive043 corrected only that variable; installed039–042 bytes and permissions stayed intact. Test fixture role setup corrections were confined to its rollback transaction; final question/audit proof passed.

