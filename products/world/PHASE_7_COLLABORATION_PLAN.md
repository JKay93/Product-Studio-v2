<!-- studio {"id":"world:plan:phase7-collaboration","scope":"world","type":"plan","status":"approved","links":[{"relation":"requires","target":"world:decision:roadmap"},{"relation":"requires","target":"world:decision:product"},{"relation":"requires","target":"world:decision:architecture"}]} -->
# Phase 7 — Agent collaboration and scoped autonomy

## Goal [world:req:phase7-goal]

Approved 2026-10-06: make the existing orchestrator/sub-agent canvas execute useful delegated work. Deliver the whole phase, including colleague borrowing, progress/results, scoped approval settings, recovery and authorization proof. Reuse the Phase 6 protected jobs/provider/worker/Knowledge/Chat/Work architecture and existing relationships/settings; major UI redesign remains deferred.

First real demonstration: a meeting-follow-up orchestrator delegates action extraction, permitted Knowledge checking and follow-up drafting to linked Agents, then combines their results into the existing editable meeting proposal and approval workflow. A colleague's Agent retains its identity and owner, and the owner can see scoped borrowing activity without receiving unrelated private Session content.

## Scope and safeguards [world:req:phase7-scope]

- Saved relationships select eligible delegates; a graph edge alone grants no access. Standing access remains explicit, scoped, expiring/revocable and separate from ownership. Execution uses the intersection of World, owner, Session and platform restrictions.
- Bound assignment, child execution, aggregation, retry and cancellation. Revalidate every delegate and source before retrieval, dispatch, resume and effects. Reject revoked/stale results and avoid duplicate tasks.
- Preserve task identity, input/version, permitted provenance, parent/child linkage and attempt/lease fences across reload/crash. Parent aggregation treats delegate output as untrusted work results.
- The finite deadline bounds execution/retry/automatic effects, not the lifetime of saved work. Completed tasks/results and failed/cancelled states remain readable under current authority. A saved proposal awaiting a fresh exact manual approval does not disappear when provider execution expires; approval rechecks current caller, lineage, sources and payload.
- Show actual assigned Agent, task, status, result/failure and cancellation/retry in reused Work/Chat/canvas surfaces. Keep pending approval durable and owner usage visible.
- Approval remains required by default. Authorized users can explicitly disable it only for a named World/Agent/Session/internal-task action scope, with a danger warning, persistent visible status, immutable audit and restoration. Lower-level opt-out cannot relax owner or World requirements; modifying payloads cannot reuse stale approval.
- Reuse one direct Claude adapter and restricted worker. No external sending, arbitrary tools/code execution, external Agent runtimes, automatic learning/export, production release or purchases.
- Initial implementation bounds: depth at most 2, at most 6 delegated child jobs per run, at most 2 concurrent children, existing 900-second finite deadline and 3-attempt limit, per-run US$0.50 ceiling within the unchanged cumulative US$4 cap. Bounds may tighten through reviewed implementation choices, never widen financial authority.

## Tasks and acceptance [world:req:phase7-acceptance]

| Task ID | Owner | Observable acceptance |
| --- | --- | --- |
| world:task:phase7-delegation | Builder/specialist | Saved orchestrator relationships produce bounded real child jobs and aggregation; nested links cannot cause cycles or unbounded work; current Agent identity is retained |
| world:task:phase7-standing-access | Builder/QA | A colleague's Agent participates only through current exact permission; repeated delegation works without repeated access prompts; owner sees truthful scoped usage; revocation stops further execution |
| world:task:phase7-autonomy | Builder/QA | Consequential internal-task effects default to exact approval; scoped opt-out warns, displays, audits and restores; higher authority and edited/stale payload restrictions remain enforced |
| world:task:phase7-run-visibility | Builder | Actual task/progress/result/failure, retry/cancel and reload use existing Work/Chat/canvas/settings patterns without duplicate shells |
| world:task:phase7-recovery-proof | QA/root | Real database/API/queue crash/retry/idempotency, cross-World/owner/source privacy, grant/member/relationship/policy revocation races and shared run/global spend bounds pass |
| world:task:phase7-live-delivery | Root/QA | Synthetic live team workflow and browser use pass inside remaining authorized credit; independent frozen-candidate review precedes accepted scoped push to both verified repositories |

## Authority and blocked-work policy [world:req:phase7-authority]

User permits routine implementation decisions and continuing unaffected work while asleep. This does not authorize self-approval of missing consequential/destructive authority. Keep real user's standing access and approval protections unchanged; fixture checks use isolated controlled development identities/Worlds. Existing provider credit and cumulative US$4 cap continue without reset or replenishment. Only root controls live provider proof; workers/reviewers use fake providers. Preserve known charges and uncertain reservations, including human testing.

New migrations are additive, reviewed before supplied development database application, with immutable installed migration hashes. Existing setup/test administrative access cannot become application/worker runtime credentials. Any automatic-review rejection remains blocked unless safely resolved within existing authority; record exact rejected action/reason and continue independent tasks. No production deployment, permanent deletion or sending to colleagues.

## Delivery [world:req:phase7-delivery]

Orchestrator records tasks/evidence/questions/decisions/deferments and next actions in the run and CURRENT_RUN.md. Builder returns concise implementation receipts; independent QA reviews the actual candidate. After acceptance push scoped application work to JKay93/MyWorld and scoped canonical records to JKay93/Product-Studio-v2; verify remote revisions. Report the whole result and any concrete pending human approvals together.
