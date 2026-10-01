<!-- studio {"id":"byoa-world:design:stage-2-participation","scope":"byoa-world","type":"design","status":"draft","links":[{"relation":"requires","target":"byoa-world:roadmap:main"},{"relation":"requires","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:world-foundation"}]} -->
# Design: two agents working in a World

- Mode: feature composition across agent connection, work Session and document review.
- Designer owner and last material update: Designer specialist; 2026-10-01.
- Status: proposal for Stage 2 discussion; no Stage 2.1 implementation or execution authority.
- Governing sources: [ROADMAP Stage 2](../ROADMAP.md#stage-2--discuss-and-design-agent-participation), [CONTRACT](../CONTRACT.md), [Decision 002](../decisions/002-world-foundation.md), [foundation package](../architecture/STAGE-1-FOUNDATION-PLAN.md).
- Scope: BYOA-AGD-03/05/06/07 experience; technical route and lifecycle contracts remain owned by Technical Specialist. ROADMAP is the milestone-status source.

## Users and journeys

The local human already owns a World and a saved planning note. The user wants A to turn that note into a project brief, then B to use A's brief and its expertise to produce an action plan. B is a contributor, not a synthetic checklist reviewer. The workflow is useful for a general fictional project; software development is not its default category. One A-to-B round, explicit human review and saving establish the initial journey. No chat feed, indefinite conversation, workflow builder or recurring execution is proposed.

Recommended navigation keeps All Worlds, Planning note and World details; add Agents and Work sessions inside the open World. Planning-note editing and explicit Save stay usable without agents. Agents owns connection/operator information; Work sessions owns setup, execution, proposals and retained results. Returning to another World never shows this World's participants or results.

| Screen / step | Human interaction and content | Transition |
| --- | --- | --- |
| Agents | Show known runtimes, participant/operator distinctions and provisional route availability. Connect guides into a prepared work Session; it creates no reusable World-wide grant. | Select or prepare a Session before pairing its A/B slots. |
| Session setup | Name the goal; create a Prepared Session record, pair A = Project brief and B = Action plan to that Session, then preview context. Show exact saved-note snapshot and planned B handoff; actual committed brief becomes inspectable before B dispatch. | Explicit Start, enabled only with saved context, both Session-bound slots ready and applicable execution authority. |
| A working | Show attribution, pending/working state and elapsed indication without fabricated percent complete. B says Waiting for A's brief. | A result is committed before B becomes eligible. |
| B working | A's brief is readable and retained. Show B's exact input includes that committed brief. Distinguish waiting for connection from runtime working. | B's plan committed; human review begins. |
| Human review | Both contributions readable. Human selects the proposed action plan, may edit a local review draft, and explicitly saves the selected plan to the planning note. | Confirmation identifies the target note and replacement; successful durable acknowledgement alone shows Saved. |
| Closed Session | Contributions, input snapshots and acceptance receipt remain discoverable. Human-only note continues to work. | No automatic execution or restored grants on reopen/restart. |

### Context, identity and disclosure

Recommended first disclosure is a frozen snapshot of the current saved note, its title and revision, and the task instruction to A. Unsaved browser text is never silently included. If the note is dirty, offer Save first or Use the last saved version; label the selected version explicitly. Pending save failures block use of unsaved text.

B receives the same frozen saved-note snapshot, A's exact committed brief, the human goal and its action-plan role instruction. This lets B ground its distinct deliverable in original requirements as well as A's interpretation. Both inputs are explicitly disclosed and scoped; B does not receive an entire World, unrelated resources, personal memory or A's runtime credentials. Technical Specialist must confirm the final wire snapshot before approval. Pairing grants are bound to this Prepared Session; a registered runtime is not automatically authorized for another Session.

“Own expertise” means the selected runtime's available capabilities and instruction for planning; this design does not import an agent's private memory or promise that none of its operator/runtime environment can influence its output. Expandable What each agent receives shows exact text, source title, saved revision and the committed handoff. Operator/provider handling remains a separate truthful disclosure: the runtime operator and configured model provider may observe sent material; revocation cannot retract it. Inputs remain fictional or specifically curated public material.

Participant identity is separate from operator identity. Example: “A · Project brief” / “Operated by you” / “Runtime route: awaiting selection.” Two role labels do not prove two genuine participants. Display Real external runtime only after corresponding connection evidence; synthetic/test states must say Synthetic or Concept and cannot satisfy delivery.

### Loading, error and lifecycle states

| State | UI treatment | Allowed next step |
| --- | --- | --- |
| No agents | Explain two participants needed; keep note usable. | Connect participants; no pretend working state. |
| Connecting / unavailable | Participant-specific status and safe explanation. | Cancel setup or resolve route. No new provider/API fallback. |
| Pending / working | Separate queued handoff from confirmed runtime activity. | Inspect sent context; Stop access. |
| A fails or times out | B did not receive a brief; no cooperative success claim. Partial text, if supplied, is explicitly incomplete. | Preserve evidence; close/replan within attempt authority. No automatic retry. |
| B disconnects | A's completed brief remains; B plan absent or incomplete. | Inspect A's work; Stop access; reconnect only through contract-defined recovery. |
| Timeout / uncertain result | “Result unconfirmed”; preserve known output and uncertain usage. | Inspect safe diagnostics. Do not mark failed spending as zero or reset attempt. |
| Stop requested | “Closing access”; distinguish request from durable closure acknowledgement. | Controls remain pending until server confirmation. |
| Stopped / expired | “World access closed. Already shared material may remain with the runtime.” | Retained human review; no new agent result/write accepted. |
| Save failure | Keep human review draft and both contributions; no Saved label. | Deliberate save retry or remain reviewing. |
| Note changed since setup | Show saved target revision is newer; preserve review draft and outputs. | Compare current note with proposed plan, explicitly choose/edit the replacement, then confirm against the current revision. |
| Accepted | Attribution and acceptance receipt show who saved which contribution/review revision into which note revision. | Reopen retained results or the note; duplicate action does not duplicate acceptance. |

Stop denies future World access and late writes; it does not promise to kill the external process, stop inference billing or erase material already disclosed. UI text must not use “Agent terminated” or “Forgot context” without separate evidence. No “Resume” button silently starts a new attempt. Restart restores saved work, not grants. Successful agent execution never substitutes for human acceptance.

Stopping preserves the actual saved-note revision and all completed contributions available at that moment. Stop after B completes retains both A's brief and B's plan; Stop after human acceptance retains the selected saved plan, its acceptance receipt and both original contributions. It never restores the original note, unaccepts work or invents an output that did not complete. The concept tracks these independently from the access state.

### Canonical work and acceptance

Both outputs remain proposals until the human acts. Primary action: Save selected plan to planning note. Confirmation shows the current note alongside the selected plan and explicitly says the plan will replace the note's content. Previous committed note revisions and original proposal text remain retained. The first slice saves only the final action plan; accepting A's brief as a separate resource, multiple notes, rich documents and batch selection remain later choices.

Human edits are local review edits with human attribution; they do not rewrite B's original contribution or redispatch either agent. Requests for agent revision require a separately bounded attempt and authority; they are not a hidden automatic continuation in this one-round proposal. If incomplete work is ever saveable manually, it must be labelled human salvage, not accepted cooperative success; recommended initial UI keeps Save selected plan disabled until a complete B contribution exists.

Old proposals remain human-reviewable after stopped/expired Session, a newer Session or restart. They never restore agent permissions. Conflicts are resource-version conflicts, not reasons to discard retained work. This preserves the historical continuity lesson without inheriting singleton canonical state.

## Design system

Reuse Decision 002's Calm workspace: neutral opaque surfaces, restrained green action emphasis, system sans typography, clear separators, labelled controls and plain save status. Existing foundation design owns final token values. The older design-system README has not been updated to reflect Decision 002; its statement that no framework/design is selected is historical and does not override that decision.

Compose existing navigation, buttons, fields, empty/error states, save feedback and confirmation-dialog conventions. Proposed additions are participant row, context disclosure, compact Session step trail, attributed contribution section and target-version comparison. Feature modules own lifecycle and acceptance rules; shared UI supplies presentation only. Use text labels with status colors; avoid avatars, fabricated activity dashboards and progress percentages.

Local steps show Setup → A brief → B plan → Human review → Closed. The trail is navigation through already available material, not permission to skip missing dependencies. Agent route details, Session identifiers and request correlation belong in optional Inspect details, not the main task surface. Operator and sent context remain easy to find because they affect the human's decision.

Recommended composition: one main current-step pane, with input/contribution detail expanded on demand. Review offers readable stacked contributions at narrow widths and may compare note/proposal at desktop widths. A compact Tweak density option in the concept explores spacing only; approved Calm appearance remains the base.

## Adaptation, access and acceptance

At desktop width, retain the World rail and main Session workspace. At 320–360px and native 200% zoom, rail becomes a wrapping/disclosed navigation area; step trail wraps; comparison panes stack; action labels wrap without clipping. No fixed heights or horizontal scrolling for prose. Work-state changes do not steal keyboard focus or reset review text.

Use native labelled controls and headings; visible keyboard focus, at least 44px coarse-pointer targets, polite status announcements and alerts for actionable errors. Dialogs announce the target and consequence, contain focus and restore it to the initiating action. Collapsed context disclosures stay keyboard accessible. Do not announce each elapsed-time tick. No motion is necessary; respect reduced motion. Contrast requires actual implemented-token checks; the mockup is not a WCAG certification. English initially, long names/text supported.

Prototype: conversation concept `byoa-stage2-participation.html`, in the task's visualization directory. It simulates Setup, A working, B working, Review, partial/disconnected, timeout, stale-note conflict, stop and acceptance locally. Every screen displays Concept; no API/provider call or real connection exists. Its sample project is a fictional community garden gathering. Button interactions explore states, not execute work. Connection labels remain provisional pending AGD-02.

| Design acceptance scenario | Evidence required in Stage 2.1 |
| --- | --- |
| Human sees exact A input and B handoff before execution | Actual server snapshots match displayed disclosure; no unsaved text leakage. |
| B genuinely consumes A's contribution | Real participant/request/result evidence and displayed attributed handoff; no substituted canned brief. |
| Human saves selected final plan | Note changes only after explicit confirmed acceptance; original outputs and old note revisions retained. |
| B fails / Stop / expiry / late result | A retained; partial status truthful; new access/writes denied by server; no fake termination guarantee. |
| Stale note or save failure | User draft and proposals retained; no false success; explicit conflict comparison. |
| Restart / newer Session | Old outputs still reviewable, human-only editing works, no revived grants. |
| Keyboard / 360px / 200% zoom | Actual candidate journey and all states checked; focus preserved and no overlap. |

Open choices: Technical Specialist owns routes, enrollment/reconnect/timeout/allowance details and snapshot contract; user approves coherent Stage 2 package and any new live execution authority; orchestrator records decisions and bounded delivery. The provisional technical recommendation is two independently owner-launched Codex bridges, at most one A and one B call with 60-second bounds and a 15-minute Session; executable/version/login preflight remains pending, and unknown subscription usage is distinct from US$0 new purchases. These are proposed bounds, not live authority or confirmation of usable routes. Studio worker model routing does not set the models used by BYOA participants. Generic A/B labels stay in the concept while the user's role preference remains pending; Product planner → Technical architect can illustrate a fictional software project if chosen, without making every World software-only. No second-provider assumption, paid API authorization, private input or runtime credential collection follows from these screens.

Template alignment: preserves design.md's Users and journeys, Design system, and Adaptation/access/acceptance core sections and fields. Cross-feature placement is deliberate because the concept composes three established features around one World surface; later feature records can reference this shared interaction contract rather than duplicate it. Added state and acceptance tables make the core template concrete; no core content omitted.
