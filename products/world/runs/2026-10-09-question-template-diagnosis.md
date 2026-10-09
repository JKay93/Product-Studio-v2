<!-- studio {"id":"world:run:2026-10-09-question-template-diagnosis","scope":"world","type":"run","status":"complete"} -->
# Question cards, template selection and failed reply diagnosis

Goal: answer current user questions about question cards vs Rakazo/Grok Bot,
recurring failure and template-aware document creation. Investigation/proposal only;
save-to-Knowledge modal/visual redesign explicitly deferred. No application changes,
provider requests, migrations, service interruption or paid generation.
Root owns research/records; substantive Builder dispatch not needed for source/DB reads.
Acceptance: primary-source comparison; exact screenshot job trace; distinguish
observed cause from unknown; propose template ambiguity handling preserving access.

Sources: actual World worker/input/execution/runtime, Knowledge tool contracts,
latest Test Agent saved replies/questions/receipts; local read-only Rakazo and current
https://raw.githubusercontent.com/elie222/rakazo/main/packages/adapters/src/builtin-tools.ts
and executor.ts plus packages/core/src/answerable-ask.ts;
https://docs.x.ai/grok-bot/chat-and-collaboration and approvals-security-and-privacy.
Rakazo ask_user offers2–4tappable options; event ask flushes checkpoint and pauses
matching run for input, latest answerable card belongs to waiting_input. Grok docs
show questions/forms alongside messages, return answers to asking Bot and approvals
bound to concrete operations. Neither proves cards exclusively occur midway, nor
consistent live model-quality parity. Recommended distinction is material decision,
not elapsed task time: startup blocker can legitimately need card; discussion and
optional generic work menus should remain ordinary chat. Approval separate.

Exact evidence: screenshot failed Test Agent job7fb4ee43-55d5-40a3-8141-e87db2a002d1,
input Are you using my PRD templates? statusfailed/attempt1, persisted genericerror,
no model-call receipts and no spend records. Five attached sources include both
pages of02_Product_Requirements and01_Product_Strategy plus Launch Checklist.
Preceding completed output is Draft product strategy and explicitly says it follows
Product Strategy template. Saved answers: Lighthearted/entertainment and Drafting a
product strategy. Thus this observed output used a strategy template in line with
saved selection; it does not establish that an explicit PRD request was ignored.
Retrieval/source citations alone never prove structural template compliance.

Diagnostic: automatic review first rejected rollback context replay due temporary
restricted worker-role assumption without specific authorization. User approved
exact zero-provider rollback diagnostic call_f138e197049a4129ba425d27cfdff643.
Within always-rollback transaction only failed job status/lease/deadline/capability
were temporarily restored and restricted worker assumed; current actualcontext plus
local compiler passed:5sources/4history/27318serializedcharacters. Entire transaction
rolled back, no durable job/role changes or model/API requests. This does not explain
historical failure: beforepaidgeneration is established, exact originalcause unknown.
Runtime currently logs closed failure stage/code/provider reason but failRPC persists
only genericerror. Need durable sanitized cause/stage for reliable diagnosis; no
provider bodies/keys/privatecontext dump, no blind automatic retry/charge.

Proposals, not implemented: questions tied to actual paused decision/task, single
answer entry and no duplicated question prose, retained settled answers; find permitted
applicable templates before drafting, distinguish type/purpose/default/access/status,
load complete bounded template structure, bind exact selectedversion and preserve
required headings/placeholders. Explicit current selection first, applicable configured
default next, one clear match use with short attribution; materially ambiguous PRD
templates ask one concrete chooser, then continue same work. No automatic merge or
newestfile heuristic. Template text is source data, never permission/policy authority.
Check output structure against chosen template and flag missingsections. Exactrecovery/
coverage/budget safeguards remain; large/incomplete template needs bounded truthful
handling, not relaxed permission or hidden oversizedcontext.

Questions: controlled diagnostic authority resolved; implementation not started.
Next recommended whole fix: durable failure diagnostics/reproduction, material-only
cards/lifecycle and template discovery→selection→structural checks together. Proposed
regressions: no genericcard for idea chat, unique/default/multiple PRD templates,
answered selection persists, private/published/revoked boundaries, provider/context
failure reasons and zero automatic duplicate jobs. Real model quality still requires
scoped live validation. Save modal and broad visual redesign remain deferred.
