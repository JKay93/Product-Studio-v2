<!-- studio {"id":"world:proposal:session-rules","scope":"world","type":"document","status":"draft","links":[{"relation":"depends_on","target":"world:decision:product"},{"relation":"depends_on","target":"world:reference:agent-owner-rules"}]} -->
# Session rules proposal

A Session is the work agreement for a particular piece of work: its purpose, participants, usable resources, permitted actions and limits. It sits within one World. An Agent's Passport identifies it; current membership, consent and grants authorize its participation. A Session may narrow that authority, never enlarge it by merely listing an Agent, resource or tool.

This is the historical proposal before the user approved Session foundation and timed guest access. It adds no runtime behavior itself. Consult [current Session rules](SESSION_RULES.md) and [implementation evidence](runs/2026-10-06-session-foundation.md) for the implemented contract; the gaps below describe the earlier baseline. Complete external Passport interoperability remains deferred.

## Session and execution [world:req:session-purpose-boundary]

Keep Session separate from execution run. The Session retains conversations, context, outputs and applicable work settings. One Session can contain several finite runs, such as reviewing meeting notes today and updating an action plan tomorrow. Finishing or expiring one run does not delete the Session, the persistent Agent or previously authorized work.

Task wording and output preferences guide the model. Security constraints live in authenticated, versioned settings checked by code; neither chat prose nor a reference document can edit those settings. Purpose does not prove authorization or guarantee that a model followed the task accurately.

## Proposed rules [world:req:session-rule-table]

| Area | Session controls | Boundary and proposed default |
| --- | --- | --- |
| Purpose and outputs | Goal, assignments, expected format and completion criteria | Start directly in Chat; infer a draft purpose from the user's request. Ordinary changes in wording do not change permissions. Formal output can override a casual style for this task without rewriting Self. |
| World and requester | One World and authenticated initiating actor | Children retain that World, Session and requester. Work in another World requires separately authorized work there. |
| Participants and delegation | Root Agent and permitted existing sub-agents | Use saved relationships and valid consent/grants; edges grant no access. Session can narrow allowed participants or prohibit delegation. Creating a new persistent Agent is a separate capability, outside this slice. |
| Resources | Permitted knowledge, supplied files and temporary context | Existing World/source permissions remain the outer boundary. Initially reuse authorized World retrieval; offer an explicit narrower resource subset when needed. Selected resources do not grant access. Never include another owner's private memory simply because their Agent participates. |
| Actions and approval | Supported operations and stricter approval requirements | Current operations are replies, meeting proposals, follow-up drafts and internal-task creation. Exact task approval remains default. Existing authorized scoped opt-out survives only when World, owner and Session floors permit it. Session cannot enable external sending or unsupported tools. |
| Budget and execution bounds | Session spending ceiling and stricter per-run limits | Provider work must fit every applicable ceiling; children and retries share accounting. Current finite run limits are the baseline, not extra credit. A fresh run cannot reset cumulative Session or platform spend. |
| Work state | Open, paused or closed | Proposed: pause stops further automated execution; authorized retained review/manual approval may remain available. Close stops new execution/effects and expires temporary grants/pending approvals while retaining permitted history. Reopen requires current authority and never revives stale jobs. |
| Changes and evidence | Versioned settings, exact approvals and source references | Recheck current rules at protected actions. Completed effects retain their original evidence. Changes that invalidate active work require a fresh authorized run; already transmitted context cannot be recalled. |

Session restrictions combine with Universe, World and applicable owner constraints, plus the requester's current permissions. A permissive Session cannot cancel another layer's restriction. The UI should explain a blocked action using an applicable effective reason, without exposing another owner's private settings.

Approval mode edits must remain explicit authenticated commands, not an inferred interpretation of “just do it.” Authorized Session management roles must be settled before implementation; membership alone does not confer the right to change these controls.

## Example launch meeting [world:req:session-meeting-example]

Jing is a project manager in ACME. Mandy is ACME's orchestrator. Researcher and a colleague's personal Designer are existing linked Agents. ACME allows borrowed personal Agents and delegation; Designer's owner has consented to ACME use and Jing has the necessary scoped grant.

Jing opens a Chat Session and asks: “Turn these launch-meeting notes into assigned internal tasks and a follow-up draft. Check the launch checklist. Do not send anything.” The Session purpose is launch follow-up. The user sees normal Chat, with optional Session details showing participants, approval and limits; no compulsory configuration wizard.

For this example, a proposed narrower resource setting permits the supplied notes and published launch checklist only. A proposed Session spending ceiling is US$0.50, with no run exceeding the current US$0.50 team ceiling and15-minute deadline or the remaining global ceiling. These are illustrative settings, not spending authorization or a promise of actual cost. Up to six child nodes, depth2 and two concurrent jobs remain the current run bounds; Session settings could only lower them.

Mandy delegates research checking to Researcher and design dependencies to Designer. Designer has outgoing delegation off, but can receive work as a leaf. Its owner requires internal-task approval, so using its contribution makes the team proposal require approval even if Jing had an otherwise valid scoped waiver. The owner does not receive a second approval request; Jing, the authorized requester, reviews the exact proposal.

The proposed resource restriction must govern each child's context too. Current delegation copies bounded root input; selective child context and enforceable Session resource subsets are gaps, not assumed features. No unrelated payroll record or Designer private memory becomes available through the hierarchy.

Mandy returns three proposed tasks with assignees and a follow-up draft. Jing changes an assignee; approval binds the resulting proposal revision/digest. Clicking Approve creates those exact internal tasks once. The draft remains unsent. Finishing that run leaves the Session open for later follow-up and preserves authorized history.

If an admin disables delegation before the next protected action, the old run cannot keep delegating under yesterday's rules. Completed effects retain their evidence. A new root-only run is possible only if its current permissions still permit it. Revoked source/grant access blocks later affected reads/effects. An expired team run cannot bypass its original deadline through children or retry. An ordinary job's authorized explicit retry currently renews its execution window, while retaining attempt limits, current-rule checks, immutable owner binding and prior spend. Fresh work must fit remaining ceilings; a stricter overall Session deadline would be an additional proposed constraint.

## Current mechanics and build gaps [world:req:session-foundation-gaps]

| Already present | Still proposed or incomplete |
| --- | --- |
| Persistent World-scoped conversations/drafts; actor/World/Session/Agent-bound jobs and grants | Explicit purpose/output contract and managed Session settings/lifecycle |
| Human Session participants and existing owner/admin participant management; graph delegation with same requester, World and Session; owner consent/current access checks | Agent/sub-agent allowlist, optional delegation narrowing and explicitly defined authority for new Session policy controls |
| Authorized, published/current-source retrieval and private-memory boundaries | Enforced Session resource subsets and narrower per-child context |
| Exact task approval, scoped waiver, World/owner floors and durable effect receipts | Session action allowlist and additional approval floor through the same effect checks |
| Run depth2/six children/two concurrent jobs/15-minute deadline/three attempts; US$0.50 team run ceiling and cumulative US$4 development ceiling | Editable stricter Session/run bounds and cumulative Session spending ledger across multiple runs |
| Current-authority checks, cancellation/retry and retained results | Session pause/close/reopen semantics and temporary-grant expiration tied to them |

Source anchors: World `src/modules/sessions/index.ts`, `src/modules/working-agent/index.ts`, `src/modules/collaboration/index.ts`, `src/modules/universe/index.ts`; SQL006 human participation,020 ordinary-job retry,023 bounded lineage/run accounting and subsequent024–030 authority/context/approval/policy refinements. These existing mechanisms are not a complete generalized Session harness or full Passport protocol.

## Build and evaluation [world:req:session-next-slice]

After agreement, reuse current Session/authority/API/context/worker/effect paths. First add versioned Session settings and explicit management authority with closed supported fields; then wire current-action checks and narrowly scoped context, preserving old defaults. No separate workflow-specific rule engine or competing system prompt is needed. A future IFTTT workflow supplies a purpose, participants, resources and supported actions to the same contract; each trigger starts bounded work under current rules and remaining budget. Trigger scheduling and external actions still need their own implementations/authority.

Acceptance should cover cross-World and private-memory denial, unauthorized settings edits, root/child resource scope, World/owner/Session conflicts, exact approval, off/on and pause/reopen without stale revival, cumulative budget across runs/retries, and safe retained history. Measure output accuracy against the expected tasks, assignees, source fidelity and constraints; measure latency from request through queue/delegation/retry to final output; measure all provider tokens/cost, including failures. Deterministic permission tests alone establish none of those three real workflow metrics.

The next step is user discussion of this contract and the first bounded implementation, not automatic Phase8 or learning. Runtime/provider/settings remain unchanged during this proposal run.
