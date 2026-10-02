<!-- studio {"id":"byoa-world:design:workspace-proposal","scope":"byoa-world","type":"design","status":"draft","links":[{"relation":"requires","target":"byoa-world:decision:ink-clay-visual-direction"},{"relation":"requires","target":"byoa-world:decision:native-package-offline-delivery"},{"relation":"constrains","target":"byoa-world:roadmap:main"}]} -->
# Design: Chat, Work, Knowledge and Agent Incubator

**Latest user decision, 2026-10-02:** visual/navigation concept approved with one orchestrator and direct sub-agents only. Sub-sub-agents, deeper nodes and nested delegation are deferred. The static example below retains the reviewed historical three-level illustration; its supporting-agent row is superseded and must be removed in the next candidate. First implementation must show only the orchestrator and direct specialists. This concept approval is distinct from authorizing expanded coding or execution.

- Mode: foundation workspace refinement with a proposed agent-configuration experience.
- Designer owner and last material update: Designer specialist; 2026-10-02.
- Status: **proposed for review**, following the user's workspace direction. This design is not application implementation or acceptance of the current offline candidate.
- Requirements and approved decisions: latest [CONTRACT](../CONTRACT.md), [STATE](../STATE.md), [ROADMAP](../ROADMAP.md), [Decision 005](../decisions/005-ink-clay-visual-direction.md), [Decision 006](../decisions/006-native-package-offline-delivery.md), and the existing [Ink Clay design](CLAY-WORLD-PROPOSAL.md). Preserve accepted human behaviour and approved complementary A/B workflow.
- Prototype: [interactive local concept](previews/workspace-proposal.html). It is self-contained HTML with synthetic content and local view switching; no app code, dependencies, storage, provider requests, billing or execution.
- Technical alignment: [workspace revision](../architecture/WORKSPACE-REVISION.md), especially WSR-01 first shell and WSR-02–05 later conversation/resource/configuration/delegation outcomes.
- Selected template: [design.md](../../../operating-system/templates/design.md). Its three core sections, top-level ownership/mode/requirements fields, journey/state content, component conventions and access/acceptance fields are preserved below. Added scope and sequencing tables clarify what the mockup demonstrates versus future delivery.

## Users and journeys

An SME owner needs one coherent place to think with agents, inspect work, understand shared knowledge and shape a team. The earlier presentation led with a bounded execution demonstration rather than this product structure. The revised workspace gives four visible destinations; Incubator leads this design review so the hierarchy and agent identity are immediately understandable. A future normal entry destination remains an open experience choice, not a requirement to reopen Incubator on every visit.

### Navigation and screen composition

| Destination | User purpose | Proposed experience | First delivery boundary |
| --- | --- | --- | --- |
| Chat | Explore a goal with a person or agent | Conversation list/thread; clear distinction between exploratory text and a task | Honest empty/not-connected destination until persistent conversation is approved and implemented. The prototype contains only a labeled sample exchange. |
| Work | Turn a goal into attributable work and review its outcome | Tasks, actual participants, inputs, retained outputs, owner checkpoint and human decision | Recompose the current approved two-role offline journey; preserve existing lifecycle and acceptance controls. No new scheduler or orchestrator execution. |
| Knowledge | Understand resources and what may be shared | World resources with ownership, provenance and exact selected context | Present the existing native planning note with real save/conflict/recovery behaviour. Broader resource collection/import is later scope. |
| Incubator | Build and inspect an agent team | Configured hierarchy/list, selected-agent role/instructions/knowledge/limits | Read-only team/configuration example plus truthful approved A/B role information. Persistent agent creation and nested delegation are later real capabilities to design, not decorative endpoints. |

The sidebar follows the user-requested OpenMax-like four-destination arrangement. It keeps the current World prominent and separates navigation from content. This is a new arrangement, not an authorization to imitate every OpenMax feature or add further top-level destinations.

The supplied reference3 was inspected directly: its useful structure is a central orchestrator, branching specialists, deeper descendants and a right-hand selected-agent inspector. Adopt that information hierarchy. Replace its dark, luminous presentation with approved off-white/ink/cobalt and restrained tactile cards. Do not adopt its online dots, selected providers/models, fabricated activity, runtime hosting assertions, share controls or external-agent import as established functionality.

### Incubator primary flow

1. Open the named World and choose Incubator. Read the explicit **Proposed configuration** label before interpreting the team map.
2. Inspect the root, specialist branches and descendants. The synthetic team demonstrates Mira → Offer planner A / Operations planner B / Knowledge curator → Menu researcher / Capacity planner / Source reviewer.
3. Select any agent. The right-hand inspector updates its name, role, parent, purpose and execution boundary; Role, Instructions, Knowledge and Limits are actual local preview switches.
4. Switch to List for the same agents and relationships in linear form. The selected agent persists across switches. Full card buttons work with keyboard Tab and Enter/Space, without canvas dragging.
5. Explore Work to see an actual-task composition that is separate from the configured team. Only approved Offer planner A and Operations planner B appear as task participants in the sample workflow.

Mira, Knowledge curator and supporting descendants are synthetic **configuration proposals**, not saved user-created agents. Team position never establishes current execution, tool availability, knowledge access or automatic delegation. A/B reference the approved roles with a reviewed offline candidate, but nothing in this mockup runs even those roles. The first application slice must clearly distinguish configured samples from stored configurations and actual task participants.

### Work, knowledge and chat content expectations

The Work sample shows A’s offer brief → owner read-only checkpoint → B’s operations plan, with human-only final note acceptance kept separate. It does not present the orchestrator or supporting descendants as having executed the approved task. A future shell must reuse the exact retained A handoff, actual attributable contributions, frozen inputs, expiry/stop, usage/reservation uncertainty and deliberate revision-checked acceptance. View selection is never a run or an acceptance action.

Knowledge contains illustrative native note/resource rows, ownership and access explanation. A native saved planning note and retained agent output have different edit/acceptance rules. Company-private context and agent-private context remain distinct; no private agent memory is imported by default. Richer resource ownership and selection require further design and private-data readiness where applicable.

Chat’s synthetic example demonstrates exploratory language and a suggested task handoff. Its disabled compose field is clearly labeled as unavailable in this concept. A real Chat → Work handoff must create a reviewable draft with inputs and participants; sending a chat message cannot silently execute paid work, save canonical knowledge or approve a proposal. The first shell should show an honest empty/unconnected state rather than presenting the sample conversation as actual history.

### Edge, empty, loading and error states

| Situation | Intended product behaviour | Static concept treatment |
| --- | --- | --- |
| No configured team | Explain that a team has not been configured; offer the approved next step | Demonstrates a clearly labeled sample only; no saved-empty-state claim |
| No selected agent | Neutral inspector: select an agent to inspect its purpose and boundaries | Default sample selection is Mira; selection never implies availability |
| New/unsupported configuration | Separate draft, saved version, configured role and runnable capability | Creation disabled with adjacent Stage 3/future explanation; no fake save |
| Loading or storage read failure | Show loading or unavailable with a recovery route; never call a read failure empty | Not simulated as if real storage were present |
| Unsaved native note when navigating | Preserve draft; use existing explicit save/navigation guard and recovery convention | No editor/storage in concept; first shell must preserve this accepted behaviour |
| Unavailable role/runtime/funding | Text names the blocker; no green online dot or fabricated readiness | Selected agent reads concept only; approved A/B remain offline/live held |
| Task failure, expiry, stop or uncertain usage | Keep contributions and owner review available; preserve closed grants, reservations and uncertainty | Represented by design constraints, not synthetic passing activity |
| Large team / long names | List/filter or bounded expand controls; clear parent relationships; wrap names | Seven-agent map; responsive linear branches and List alternative |

## Design system

### Approved tokens and material

Reuse the [Ink Clay token and contrast tables](CLAY-WORLD-PROPOSAL.md#one-coherent-palette): canvas `#F6F7FB`, white surfaces, ink `#202B45`, supporting slate `#596579`, primary cobalt `#3454C5`, periwinkle `#E3E8FC`, apricot `#FBE6D4`, sidebar `#EEF0F7`, control boundary `#788398` and decorative dividers `#DCE1EB`. These are approved product colours, not generated recommendations. A neutral cool card supports a proposed third specialty without creating a new semantic status colour.

Agent cards and small identity figures carry restrained clay: 20–24px rounding, subtle outer shadow and soft inset lighting. A simple face motif is illustrative agent identity, not a portrait or personality claim. The sidebar World emblem gets the same modest treatment. Inspectors, resource rows, task controls, numeric accounting and note surfaces remain crisp and mostly flat. Depth does not determine clickability; actual cards have semantic buttons, solid boundaries, readable labels and visible focus.

### Components and composition

| Component | Convention | Meaning/access requirement |
| --- | --- | --- |
| Four-destination rail | Icon plus word, selected white row with cobalt text | Current page exposed with `aria-current`; no icon-only navigation |
| World identity | Quiet name/context card above navigation | Future switching uses real scoped identity; do not flash another World’s data |
| Team view switch | Hierarchy and List pressed buttons | Both views expose the same parent relationships and selection |
| Agent card | Small clay figure, name, role, one-line purpose, explicit proposal/selection text | Colour alone cannot carry role, selection or runtime status |
| Hierarchy connectors | Thin static structural lines, conventional top-down branches | Card name/accessibility label and List parent text carry the same relationship |
| Selected-agent inspector | Role/Instructions/Knowledge/Limits buttons and read-only content | Exact requested/effective access must be distinct in future configurations; examples have no effective grant |
| Work/task surface | Flat readable panels; role accents only on A/B identity | Actual participants and artifacts, never inferred from team membership |
| Proposal banner | Compact written synthetic/concept label | No fabricated activity or ready/live state; no simulated spending |
| Later affordance | Disabled creation control with adjacent reason | No button that pretends to create/save an agent |

Use system fonts, 16px base text, 1.5 line height, 28–32px page titles, 13–14px supporting/detail text and a 4/8/12/16/24/32px spacing rhythm. Small 11–12px card/status metadata is supplementary; purpose and names remain readable. Agent selection uses a cobalt border and the literal **Selected** label. Cobalt with white action text meets the approved 6.52:1 pair; slate on periwinkle/apricot uses the prior verified 4.83/4.88:1 pairs. Clay lighting carries no text and no sole information.

### UI UX Pro Max fit and evidence

Read the user-selected task-local [SKILL.md](../../../../tmp/byoa-ui-skills/ui-ux-pro-max/SKILL.md). No global registration, package install or persisted generated design system was performed. The default Python command was unavailable; the bundled Python runtime successfully ran the search.

| Search | Returned identity | Product judgment |
| --- | --- | --- |
| `SME agent workspace claymorphism --design-system -p "BYOA Workspace" -f markdown` | Hero + Features + CTA; Minimalism & Swiss Style; blue/orange palette; Outfit/Work Sans | Enterprise readability is useful, but the landing pattern and new palette/font recommendations are off-task. Rejected as a workspace blueprint. |
| `claymorphism --domain style -n 1` | Active Claymorphism style; rounded 16–24px cards, inner/outer shadow, light-mode support, conditional accessibility | Verified narrower requested style. Adopt selective soft depth; reject chunky universal borders, bouncing motion, childlike treatment and replacement pastel palette. |

The skill’s accessibility, keyboard, minimum-target, responsive and reduced-motion guidance informs the concept. A query result is guidance, not product authority. The approved palette and existing stack remain governing; this HTML artifact chooses no new application framework.

## Adaptation, access and acceptance

### Responsive and access behaviour

- Wide desktop: sidebar, center team map and persistent right inspector. The map uses normal document layout rather than a canvas requiring pan/zoom.
- Below 1200px: inspector moves below the map in a two-column internal layout. All agent details remain reachable in ordinary document order.
- Below 800px: four destinations become a labeled top navigation; inspector stacks, gutters shrink, title and content wrap. Below 470px, branches become a vertical indented hierarchy with connectors. The List alternative is useful at every width.
- Keyboard: skip link; full semantic buttons; visible cobalt outline; Enter/Space selection; focus restored to the selected card after repaint; agent selection announced by the polite inspector region. Destination changes focus the main content. No pointer-only drag, hover-only disclosure or keyboard trap.
- Motion: no continuous animation or live-looking pulse. Reduced-motion rule prevents any later added transition from being required; forced-colour rules preserve selection and connector boundaries.
- Content: only synthetic names/task/context; no remote fonts or images; no fake hosting/model selection for proposed roles. Body copy and long labels can wrap. Translation/RTL and large-team performance require later specific validation.

### Recommended bounded first delivery and later outcomes

| Sequence | Deliverable | Preserve / defer |
| --- | --- | --- |
| First workspace shell and Incubator view | Four destinations; real existing note under Knowledge; real existing offline work under Work; honest unconnected Chat; read-only configured-team projection with hierarchy/list/inspector | Preserve World scoping, explicit note save/conflict/recovery, actual native participants, human checkpoint/acceptance, closed grants and all source/store/evidence. Do not implement recursive execution or invent activity. |
| Later bounded Chat | Persistent attributed conversations and deliberate Chat → draft task handoff | Design ownership, retention, stop and exact context disclosure before runtime activation. |
| Later richer Knowledge | Selected multi-resource organization and provenance | Explicit company/agent-private separation; no automatic private-memory import. |
| Later functional Incubator | Agent creation/editing, instruction/resource selection and versioned configurations | Designed/approved configuration schema, operator/funding boundaries, actual save/version/conflict handling and draft-versus-runnable validation. |
| Later constrained delegation | Real nested execution and descendant task tracking | Separately scoped grants, ceilings, depth/concurrency/attempt limits, attribution and owner authority; no inherited permission or unlimited recursive spawning. |

These later steps are proposed sequencing for Stage 3, not a grant to build all of them now. The real outcome is a usable agent-building workspace, delivered in bounded capabilities after the current shell is agreed. Live execution and spending remain separate authority questions under the contract.

### Prototype checks and acceptance criteria

The static candidate must expose four truthful views, default hierarchy, seven selectable cards, persistent selection on List/Hierarchy switching, four inspector sections, all required synthetic labels, no external requests and no real save/run/accept controls.

Verification on 2026-10-02: bundled Node parsed the actual inline script successfully; structural checks passed for unique HTML IDs, all four view IDs, seven sample agents, and absence of network/storage APIs or external resource links. The orchestrator rendered this candidate in a loopback browser and reported: desktop Ink Clay composition inspected; Operations planner selection and Limits detail updated; selection survived List switching; all four destinations navigated; narrow 320px and 360px views remained readable with no horizontal overflow (client/scroll width 305/305 and 345/345 respectively). [Desktop screenshot](C:/Users/jingk/.codex/visualizations/2026/10/01/01a0f80d-8db0-7ce0-b4ed-48901c9a6858/workspace-proposal.png) records the concept. The source link above remains durable; `http://127.0.0.1:4344/workspace-proposal.html` is an ephemeral local preview, not publication or proof of a running application.

These are static-artifact checks and limited reported rendered checks. A full keyboard journey, native browser 200% zoom, screen-reader announcements, exact 375/768/1024/1440px viewport matrix and contrast across rendered states remain unverified for this candidate. Earlier foundation zoom evidence does not transfer automatically.

Future application acceptance must prove that sidebar navigation does not discard an unsaved note or leak another World, stored role configurations remain distinct from actual task participants, disabled roles show a reason, and existing checkpoint/history/stop/acceptance/uncertain-usage behaviour survives the shell change. A successful static prototype never proves those server/storage properties.

Open choices for user/design review: normal entry destination; desired first real Chat capability; whether the example orchestrator should be named or role-only; the bounded agent-creation schema and permissible depth. These do not block inspection of the coherent workspace proposal. Technical responsibility and staged constraints are coordinated with the Technical Specialist; the orchestrator owns roadmap status and final review acceptance.
