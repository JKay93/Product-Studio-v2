<!-- studio {"id":"world:decision:design","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World design decisions

The user selected Calm Fluent-inspired for World after comparing three directions. This approved design direction was recorded on 2026-10-03. UI UX Pro Max supports design work for World only; its availability does not make World's design a studio-wide requirement.

## Visual direction [world:req:visual-direction]

Use cool neutral surfaces, restrained blue accents, modest rounding, subtle depth and clear typography. The interface should make everyday work, responsibility and permissions easy to understand for nontechnical SME users.

Use semantic tokens for surfaces, text, borders, primary actions, approval, danger, focus, spacing, corners and motion. Keep status meaning distinct from decoration and pair color with words or icons. Phase 1 resolved the following implementation values within the approved direction; their authoritative code is `World/src/app/globals.css`.

| Purpose | Values |
| --- | --- |
| Canvas / surface / muted surface | `#F5F7FA` / `#FFFFFF` / `#EEF2F6` |
| Text / muted text | `#1F2937` / `#526176` |
| Decorative / control border | `#D8E0E8` / `#7B8798` |
| Primary / hover / pressed | `#245EA8` / `#1E508F` / `#194378` |
| Selected surface / focus | `#EAF1FB` / `#245EA8` |
| Success text / surface | `#17623B` / `#EAF5EE` |
| Approval text / surface | `#805500` / `#FFF4D6` |
| Danger text / surface | `#B42318` / `#FDEDEA` |

Use system fonts headed by Segoe UI, without a downloaded font. Essential labels, ownership, permissions and activity use at least 14px text; incidental metadata may use 12px. Body text is 16/24px, section headings 20/28px and page headings 28/36px. Shared controls have a 44px minimum height. Control/card/dialog corners are 6/8/12px. Control feedback uses 120ms and overlay entry 180ms; reduced motion removes animations and transitions. Focus uses a visible 2px outline with an offset. Decorative borders do not identify controls alone.

The local skill's generic flat/teal marketing recommendation was rejected; its Fluent 2 and accessibility guidance supported the chosen direction. Rendered checks and final acceptance are tracked in [the current run](CURRENT_RUN.md).

Implement the chosen look through Tailwind tokens and canonical Radix-based components. The theme does not require adopting Microsoft's component framework. Claymorphism and the earlier Warm Swiss proposal are not the selected direction.

## Main experience [world:req:main-experience]

Shared Session experience approved 2026-10-08: selecting an Agent opens its direct
chat, while the Chat + action creates a named shared Session. Reuse the current
compact second rail, creation dialog and composer. The dialog chooses one permitted
Agent, optional existing World members and the supported payer/budget; disclose
room-scoped sharing and unavailable company billing without a compulsory setup tour.
Keep previous conversations reachable under their original permissions.

Own human messages appear on the right; other members have clearly labeled neutral
messages, and Agent responses sit on the left with their identity. Attach each Agent
reply to the message that requested it. Ordinary room messages remain human chat;
the mention picker inserts an editable @Agent request without sending. Enter sends,
Shift+Enter adds a line and drafts stay separate across direct chats and rooms.
Preserve deliberate own-message meeting work and sender-owned question/approval/
retry controls. Keep the floating Work/Outputs/Sources menu and expand details only
after item selection. The approved reference is the
[Session/chat prototype](prototypes/world-sessions-chat.html); actual implementation
and simultaneous-user evidence belong to the
[Session implementation run](runs/2026-10-08-shared-sessions-implementation.md).

Chat-first work authorised2026-10-08 supersedes earlier primary Work navigation: continuous Agent Chat is the place to start, monitor and review work. Remove the primary Work tab. A compact floating Work menu exposes current work, pending requests, outputs and Sources; omit Collaborators from this menu. Opening the menu reserves no permanent column. Selecting a work/output/source opens its detail pane; closing restores Chat width. Agent Overview work links enter the corresponding Agent's Chat work surface.

Questions and consequential approval requests appear above the composer in one navigable queue. Multiple or mixed requests keep separate drafts and exact decisions. Minimise, dismiss, Later and switching never grant approval; unrelated permitted work can continue. Existing meeting proposal editing, exact approval, task receipts and retry/cancel remain usable. The accepted reference is [the floating request prototype](prototypes/world-chat-requests.html); synthetic email/share examples do not authorize adding those external action tools.

Clarification behavior refined 2026-10-08 after user testing: ordinary vague requests
and missing background use concise normal chat. Structured question cards support
material choices for an understood task. Related cards from one reply form one
round: save exact answers, then continue once with the original task and all answers.
Retries must reuse that continuation. The continuation cannot emit another structured
round automatically; remaining clarification stays conversational. Answering questions
never grants action approval. Runtime must stay stopped until the user authorizes
restoration after the spending-protection stop.

Make working on and reviewing useful tasks the primary experience. Offer an Agent relationship canvas that shows the orchestrator and editable sub-agent relationships, with expandable branches. Agent cards emphasize identity, ownership, role, permissions and current activity.

The user's reference image informs the linked cards and relationship layout. Its token balances, breeding, trading and other cryptocurrency content are not World requirements.

When a PM uses a colleague designer's Agent, display its real identity and ownership, the delegation relationship and access scope. Reflect the relationship and activity for the owner as well. Borrowing does not imply cloning or ownership transfer.

## Interaction and quality [world:req:interaction-quality]

### Agent workforce reference [world:req:agent-workforce]

Current navigation direction (2026-10-07): Agents opens a grouped Cards directory, with List as an alternative. User-defined groups organize Agents without granting permissions or defining execution teams. Selecting an Agent opens Overview by default: role, ownership, current work and a Chat action. A separate Collaborators tab contains its interactive relationship network. Manage is a quiet owner/admin configuration action, outside the view tabs; borrowed Agent collaboration inspection does not expose private settings. Task execution belongs under Work, with View work leading to that Agent's permitted tasks. This supersedes the hierarchy-first landing proposal below. User subsequently authorised application implementation and loop testing in [the graph/profile run](runs/2026-10-07-agent-graph-implementation.md); final verification is recorded there. Visual polish remains deferred.

Overview profile refinement: authorised owners can edit a shared description so colleagues understand the Agent's purpose at a glance. Usage offers Daily/Weekly/Monthly/Lifetime, applying the timeframe within the viewer's permitted scope: owner Agent total, borrower own usage in current World, authorised admin current-World usage. Label scope explicitly; Lifetime never exposes another viewer's aggregate. Keep direct Agent usage distinguishable from future delegated/team totals without double counting. Personal instructions/memory, other Worlds' work and private spending remain protected. User postponed Skills discussion/UI; omit new skill display/import functionality from this preview. Sample token/cost/task numbers demonstrate design only, not actual accounting or privacy enforcement.

Implemented profile acceptance2026-10-07: actual metadata persists through caller-scoped profile APIs; unavailable historical tokens and task counts remain unavailable. The Collaborators canvas shows the selected Agent's permitted connected component in the current Session, including reciprocal/shared connections with one visible node per identity. Unrelated Agents stay in the full directory/link picker instead of shrinking this supporting graph. Graph position and viewport persist across Overview/Manage navigation. Saved links select potential collaboration; live work uses explicit Work actions and bounded execution. Final browser/authority/evidence lives in the graph/profile run; major polish remains deferred.

The earlier memory-focused rail mockup is retained as an exploration. Current user direction separates full Agent configuration into a dedicated settings page, described below; the workforce rail remains a quick inspector with Manage Agent. Mock interactions do not establish actual learning, persistence or authorization.

Canvas interaction clarification: the user requests Figma-like drag panning, scroll-wheel zoom and global expand-all, with a separate interactive mockup before application changes. Keep page/navigation/inspector controls outside the canvas transform. Zoom centers on the pointer; fit-to-view and zoom buttons complement wheel input. Support branch collapse/expansion and sample node dragging with attached connectors. Keyboard and single-pointer alternatives keep interactions usable. This specifies the requested prototype behavior; the new visual and application implementation remain subject to review.

On 2026-10-04 the user requested the Agent page shown in a new reference: a connected orchestrator/sub-agent hierarchy with expandable branches, selected-Agent details on the right and a clear creation action. Place it under Agents in the existing grouped navigation, using Calm Fluent tokens and the approved shell without restoring branding/global headers. Reuse existing identity/relationship state and creation, scope and permission controls. Provide working hierarchy, cards and list presentations; selecting a node changes the inspector without changing ownership or silently changing the active chat Agent. Expose ownership, role, delegated responsibility, access scope and consequential approval context. Colleague-Agent borrowing retains identity and its existing scoped grant/owner-activity behavior.

This addition is a UI preview refinement before backend implementation. Use actual mock data rather than inventing online status, model, hosting, knowledge or operational capabilities. Unsupported reference actions such as Share, Playground and external Agent connection remain deferred. Narrow layouts provide a usable list/card view and stacked inspector; keyboard controls are alternatives to spatial navigation. Persistence belongs to Phase 4, real execution to Phase 5 and real delegation to Phase 6.

Make the active World and Session clear. Personal and organizational content remain distinguishable. Standing access and approval settings show their scope. Disabling consequential approval needs an explicit danger warning, visible ongoing status, and an obvious restoration control.

Design empty, loading, error, permission-denied, stale-approval and revoked-access states alongside successful journeys. Use clear labels, visible keyboard focus, readable contrast, responsive layouts and motion that respects reduced-motion preferences. Check representative components on desktop and mobile.

Use a small Storybook gallery to demonstrate shared components and meaningful states. Apply UI UX Pro Max recommendations only when they fit the approved product and stack. Keep implemented theme values in code; do not automatically generate additional design documents through the skill's persistence option.

The approved decision is the visual direction and experience boundaries. Phase 1 will produce the reusable design system; phase 2 will complete the mock journey. Neither preview interaction nor a UI-only demonstration establishes backend security.

### Dedicated Agent configuration [world:req:agent-configuration]

After the OpenClaw reference discussion on 2026-10-04, the user accepted Manage Agent opening a dedicated settings page with distinct Identity, Instructions, About you, Memory, Knowledge, Skills and Tools sections. Keep the workforce rail compact. Settings identifies the selected Agent, owner and applicable scope. Back to workforce returns to the same selection and canvas position. Instructions holds deliberately configured rules, About you holds personal preferences/profile, Memory holds learned facts/decisions, Knowledge holds accessible sources and Skills holds reusable procedures. Base personal configuration and current-World additions stay distinguishable; personal edits cannot loosen World-enforced permissions. Borrowed Agent settings expose only owner-shared/current-World configuration, with editing only where permitted; private owner knowledge/profile/base configuration remains hidden. Demonstrate this in a new standalone mockup first. Channels, Automations and an advanced source editor are later proposals, not current preview scope.

The user subsequently approved implementing the reviewed canvas/settings mockups in the application, using existing identity/World/relationship data and in-memory sample configuration. This accepted Agent-page build is Phase 3. The user has now authorized Phase 4 persistence and enforcement. UI feedback deferred until after this build: an unowned Agent should use an inspection label instead of Manage Agent, and the entry should be less prominent, potentially a text button. This deferred wording feedback does not authorize editing someone else's Agent.

### Onboarding and composer [world:req:onboarding-composer]

On 2026-10-04 the user accepted keeping the direct Agent creation shown in the revised preview: a small avatar, optional color/shape choices, editable default name and Get started placed directly on the workspace canvas. Preserve this direction; later refinement of Agent appearance is deferred. This visual acceptance does not approve production implementation or establish real Agent persistence.

The user accepted the compact chat composer with an inline placeholder and no visible Message your Agent heading. Keep an accessible input name. Place quiet example prompts beneath the composer, following the supplied reference; selecting one fills an editable draft without automatic submission or overwriting existing input. Keep the composer at the bottom of the chat area with conversation above; sending and hiding the empty-state greeting must not pull the input upward. Preserve Calm Fluent, Agent/World context and consequential approvals. Keep ownership and approval details available in the Agent identity view rather than crowding the input with repeated explanatory text.

The input grows upward from one line to a bounded height, then scrolls internally; use roughly 5–6 visible lines on desktop and fewer on mobile. Keep the caret visible and preserve the draft while scrolling or editing. Conversation scrolls independently above the composer. Sending clears the draft and returns the input to one line. Exact height limits belong to implementation, not competitor measurements.

The user accepted the checked mockup on 2026-10-04. Use its revision (`93DF6D0408158CC7654D7005C4EB30FE796D0F6BD0A0BB923228CCE6F447A7A0`, evidence in the onboarding run) as the creation/composer reference. The prototype input limits are 44px minimum, 164px desktop maximum and 116px mobile maximum. Its fixed chat-stage dimensions are for the mockup; production must fit available space and account for the mobile keyboard. Preserve the accepted creation, compact composer and example placement while reusing World’s existing UI components. Sidebar behavior follows the user's subsequent contextual-navigation direction below. Acceptance is visual/interaction approval, not evidence of implemented authentication, persistence, authority or model behavior.

### Contextual navigation [world:req:contextual-navigation]

On 2026-10-04 the user supplied a Canva sidebar image and a video showing contextual panels. Selecting a navigation section should reveal its useful second rail; sections without context should use the freed workspace without an empty column. Replace the distant header Hide context control with a local pane-heading icon and an adjacent reopen icon at the left workspace boundary. Primary navigation labels remain independently expandable/collapsible through an icon near the rail's top. Preserve Calm Fluent; the references guide interaction, not their branding or colors.

The initial team-resolved section mapping used Agent/conversations for Chat, Agent/Sessions for Meeting work, identity selection plus a compact Session selector for Agents, and Agent/Session permission scope for Permissions. The user's subsequent reference-shell direction below supersedes Chat's dropdown-oriented panel and the global header. Activity and first-Agent creation have no secondary rail. The approved Phase 5 Knowledge library now has a useful folder/archive context rail as specified below. Selecting or reselecting a contextual tab reveals its panel; selecting an already open tab does not close it or reset work. Only the local icon hides it. Explicit navigation takes precedence over remembered context hiding; the navigation-label preference remains optional and persistent.

Keep active World, Agent and Session identifiable and their selectors reachable through reused controls when no rail is visible. Icons need specific accessible names, 44px targets, visible focus, state semantics and hover/focus explanations. Hiding a focused panel transfers focus to its adjacent reopen control. Mobile uses one workspace drawer with the selected section's context; contextual selection updates it, contextless selection closes it, and choosing an Agent/Session or pressing Escape returns appropriate focus. Preserve nested Session forms, draft isolation and bounded composer behavior on short screens.

### Reference sidebar shell [world:req:reference-sidebar-shell]

The user clarified and authorized this complete shell revision on 2026-10-04. Remove the global World brand/logo header; put the World selector at the top of the first sidebar. Expanded navigation is default, grouped in this order: Workspace (Chat, Work, Knowledge, Incubator, Agents), Connections (Integrations), Governance (Activity, Settings). Use the correct sidebar-with-left-arrow icon when expanded (`[|<]`, collapse action) and sidebar-with-right-arrow icon when collapsed (`[|>]`, expand action). Collapsed mode retains icon tooltips, group spacing and an icon World selector, while leaving the second sidebar unchanged. References establish structure and interaction, not a dark-theme change.

Chat's second sidebar has search and one fixed square + control on a single top row, followed by independently expandable Agents and Sessions groups with actual counts. Agent rows show avatar/name/role/ownership context; Session rows show selection and relevant metadata. Provide truthful contextual row actions. The + menu offers New agent and New session, using existing creation/session behavior and current World context. Preserve personal ownership of newly created personal Agents; selecting/creating them for organizational work does not silently transfer ownership. Primary onboarding remains direct creation when no personal Agent exists.

The second sidebar's divider supports bounded width resizing. Search takes available width while + stays fixed on the right; neither wraps underneath. Long search placeholders/names/titles truncate as needed. Resizing changes adjacent workspace width without losing drafts/scopes. Use a visible hover/focus divider affordance, pointer capture, keyboard resizing and a single-pointer alternative to dragging. Bound width to keep both input and workspace usable; optional preferences may remember width. Maintain local hide/reopen controls, independent primary collapse and mobile drawer behavior. A compact workspace-local Agent/Session control keeps scope available without restoring a global brand header. Composer stays below independently scrolling conversation.

For this layout pass, Work uses the existing Meeting work flow and Settings exposes the existing Permissions flow. Incubator's workflow and Integrations behavior are undefined: navigation entries may show honest unfinished states, with no invented jobs, connections or new authority. Other contextual mappings stay useful and section-specific. Production/backend/security guarantees remain outside the mock shell.

## Knowledge library page [world:req:knowledge-library-design]

Approved Phase 5 direction on 2026-10-05: preserve the shell without a global logo/header, grouped primary navigation, correct independent primary collapse icons and World selector. User UI assessment supersedes the initial flat-folder panel: Knowledge's second rail is a recursive folder-and-note tree with expandable child folders, nested notes and selected-note indication. Match Chat's compact search/+ row and existing shell divider sizing/presentation; do not add a separate Panel width bar, width presets or second-sidebar collapse/reopen icon. Width is bounded and draggable, with keyboard divider support. The primary collapse affects only primary navigation.

Keep document content clean: Find opens from reader/workspace toolbar chrome outside the article, with match highlighting and Escape/focus return; no permanently embedded Find in this document field. Use library search/filter and readable rows when browsing, a central reading view and compact optional source/version/access details. Mobile reflows the tree into the existing drawer pattern rather than a cramped permanent column. Native keyboard controls and focus return remain required. These changes are mockup feedback; live Chat and backend work are not modified by this run.

Keep source ownership and publication audience visible. Personal and World libraries never mix implicitly. Distinguish sample interactions from saved backend behavior and reference Knowledge from Agent Memory. Use Calm Fluent tokens, existing interaction patterns and project-local UI UX Pro Max guidance; no new theme or infrastructure. Initial mockup is the visual assessment milestone before real library behavior expands.

### Tree and account navigation clarification [world:req:tree-account-navigation]

User feedback approved on 2026-10-05 supersedes folder-content navigation: clicking a folder label or chevron expands/collapses that branch in the tree without replacing the open document. Clicking a file opens it in the reading area. Only the active file has persistent selection styling; ancestor folders indicate expansion by chevrons, and loading/disabled rows must not all resemble selection. Explicit All knowledge/Archived browsing may still show a library list; folder clicks do not.

Place the user's avatar/name and account menu at the bottom of the primary rail; collapsed mode retains an avatar and accessible label. Keep the top World controls and bottom account/Notifications visible; only middle navigation groups scroll when desktop height is limited. Mobile retains its natural scrolling drawer. Settings/signout belong in the account menu; its current Settings route retains World permission management and does not claim a new personal-profile editor. Create World belongs in the existing top World switcher. Invitations belong to Notifications, not that switcher; the present acceptance flow remains reachable through a quiet Notifications entry until a real inbox/delivery feature is built. Remove the repeated administrative action strip from the content area. Reload remains a quiet temporary control during development.

Future updates show document changes automatically: authorized B viewing a document sees A's live edits while editing, beyond refresh-after-save. Live draft changes and immutable saved versions remain distinguishable. Full notification delivery, presence/collaboration and live subscriptions are deferred requirements, not capabilities established by this UI pass.

### File import entry [world:req:knowledge-file-import-ui]

User approved slice5.3 on 2026-10-05: extend the existing Knowledge search/+ menu with Upload files beside New note/New folder. Open a compact dialog with file selection/drop zone, visible supported formats/limits and current personal/World destination plus folder picker. Reuse tree and reader; imported sources show meaningful processing/failed/retry status, and extracted content is inspected before explicit publication. Keep original-file access and immutable source/version information in the existing reader/details flow. No separate upload page or duplicated shell. Dropping onto a folder is a useful optional extension, not a prerequisite for the first upload flow.

### Functional delivery priority [world:req:functional-delivery-priority]

User feedback on 2026-10-05: current design is subpar and the user is absolutely disappointed with the direction; UI UX Pro Max has not produced the expected quality. Feedback delivered to Designer, who acknowledged it. Prioritize complete working paths and actual agent testing, then revisit major UI changes. Phase5 closes before provider/workflow setup. Preserve the accepted shell/theme/components for now; truthful working/failed/retry states, clear Agent/World context and saved context/drafts matter. Fix only usability blockers during functional integration; skill recommendations do not establish user acceptance or justify new visual redesign.

## Chat selection and keyboard behavior [world:req:chat-selection-keyboard]

User feedback on 2026-10-06: only the current Session receives persistent selected-row treatment; inactive rows and contextual action buttons remain neutral, with distinct hover and visible keyboard focus. Selected Agent state remains independent. Enter sends through the existing chat submit path; Shift+Enter inserts a newline. IME composition, disabled sending and empty drafts must not accidentally submit. Preserve bounded growth, bottom placement and draft isolation. This is a basic usability correction; major UI polish remains deferred.

## Real collaboration [world:req:collaboration-ui]

Phase 7 reuses saved canvas identities and responsibilities, Chat and Meeting work. Linked-Agent work is an explicit action beside the ordinary proposal action; actual team steps show assigned Agent, responsibility, attempt, status and expandable findings. Root aggregation enters the existing editable assigned proposal and exact approval flow. Saved results remain available after reload and execution expiry under current access. Progress must stay attached to the same job through edits and approval, without carrying state into another scope.

Internal-task review defaults to required. Its compact status and explicit change control are keyed to the current actor/World/Session/Agent; opting out requires an unchecked danger acknowledgment, stays visibly indicated, records an audit and can be restored. Borrowing alone cannot waive review. Owner activity exposes usage metadata only; names come from already permitted workspace records, otherwise opaque identifiers. Live inspector wording directs team activity to Meeting work rather than claiming an empty activity feed. Major visual redesign remains deferred.
