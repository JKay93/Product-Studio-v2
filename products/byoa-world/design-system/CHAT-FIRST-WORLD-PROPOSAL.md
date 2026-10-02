<!-- studio {"id":"byoa-world:design:chat-first-world","scope":"byoa-world","type":"design","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:ink-clay-visual-direction"},{"relation":"requires","target":"byoa-world:decision:default-and-user-built-agents"}]} -->
# Design: Chat-first World

- Mode: foundation navigation refinement and bounded feature composition.
- Designer owner and last material update: Designer specialist, 2026-10-02.
- Status: **draft for user review**. Latest authority permits proposal preparation only. Implementation/live testing/spending remain paused. This draft does not supersede approved details until the user approves its concrete changes.
- Sources: [CONTRACT](../CONTRACT.md), [STATE](../STATE.md), [ROADMAP](../ROADMAP.md) BYOA-WKD-08/09 and selected BYOA-WRK-07, [Decision 005](../decisions/005-ink-clay-visual-direction.md), [Decision 007](../decisions/007-default-and-user-built-agents.md), [existing workspace proposal](WORKSPACE-PROPOSAL.md), and latest user instruction to backlog lightweight welcome content.
- Static concept: [chat-first-world-proposal.html](previews/chat-first-world-proposal.html). Local navigation, World switching, example-conversation selection and document-panel opening are demonstrations only. No model calls, research, storage, actual task delegation or Knowledge writes occur.

## Users and journeys

### One World, five connected surfaces

An SME owner opens a World and starts in **Chat**. Chat provides the familiar conversation history, readable thread and composer. Explicit work is a separate deliberate step: speaking to an agent does not automatically grant tools, launch paid work, change permissions or save a canonical document.

| Surface | Purpose | Shared object / boundary |
| --- | --- | --- |
| Chat · Talk | Discuss a goal, address an agent with `@`, return to conversations | Conversation references a proposed or actual work record; a mention alone grants no access |
| Work · Do | Inspect, authorize and track a bounded task, its actual delegation and outputs | The same work identity, participant versions, inputs, ceilings and human decision |
| Knowledge · Know | Find saved context and deliberately accepted documents | The same document identity/revision and acceptance receipt; no automatic chat-to-Knowledge save |
| Incubator · Build | Configure the allowed team and inspect agent definitions | Saved team hierarchy and versions, distinct from who actually participates in a task |
| Activity · Observe | Inspect attributable events and follow them to work/documents | Projection of source records, not another execution engine or approval database |

The World switcher scopes all five surfaces and conversation history. Return visits may restore the last selected conversation within that World; a fresh World entry opens Chat. Draft navigation and cross-World isolation require explicit design/implementation, not assumed browser state. Approved direct orchestrator → specialists remains the initial boundary. Nested delegation and BYOA runtime participation remain later scope.

### Empty Chat

The empty main Chat area has **New chat** and a blank composer only. World name in the header and navigation/history in the rail provide context. There is no welcome hero, World-purpose explanation, suggested task grid, attention panel or dashboard. Lightweight welcome ideas are backlogged by the orchestrator as PB-042, not included in this proposal's initial build. The composer has an accessible label and no prefilled content. Sending will remain unavailable in the static concept.

### Concrete journey: conversation → work → document → Knowledge

The fictional prompt is: **“@Mandy research competitors and have Designer mock up a landing page.”** Mandy is the proposed orchestrator; Researcher and Designer are the only direct specialists in this example. Agent naming/catalogue remains configurable rather than a frozen universal lineup. This concept provides no competitor facts or actual research results.

1. In Chat the user addresses Mandy. Future `@` selection binds a known agent definition/version rather than interpreting arbitrary text as authority. If a Designer is missing, Mandy proposes adding one for human approval; no silent recruitment.
2. Mandy proposes one work item, **Competitor brief + landing-page concept**, with Researcher and Designer, their outputs, exact selected context and dependency. Researcher provides a sourced brief; Designer receives the disclosed brief and produces the document's mockup section. The user can inspect or revise this proposed delegation before explicit authorization.
3. **Review work setup** links to the same Work record. The future setup separates allowed team, actual task participants, requester, operator, payer, inputs/tools and aggregate limits. Starting work requires applicable authority and reservation checks. Sending the exploratory message is not that approval. This static candidate has no Start action.
4. Contributions appear under their actual author/configuration version and bind the exact dependency artifact. Automatic structural checks do not prove business quality. Stop/expiry/unknown outcome retains evidence and cannot trigger hidden replay. Human edits never silently redispatch agents.
5. **Preview document** opens the same draft from Chat or Work. Originals remain inspectable; human review copy is distinct. **Save to Knowledge** is a deliberate human action against the disclosed target/version, with a single retained acceptance receipt. A browser click never indicates saved without durable acknowledgement.
6. Chat, Work, Knowledge and Activity link to the same work/document/receipt. Knowledge is the canonical destination; each surface does not create its own copy or approval. After restart the accepted document and retained work remain discoverable without reviving grants.

### Configured team versus actual delegation

Incubator shows the saved team hierarchy: Mandy → Researcher / Designer. Being on that tree means configured membership, not current work, effective resource access or a working runtime. Work shows the actual task-specific selection and dependency. Replacing a default with a user-built specialist preserves old attribution and does not alter active participants or grant extra authority. Both sources follow the same permissions, funding and human-acceptance contract. An externally brought runtime later cannot inherit access for private descendants.

### Edge, empty, loading and error states

| Situation | Proposed experience |
| --- | --- |
| Unknown/unavailable mention | Named reason; plain text can remain in draft. No dispatch or permission inferred from a typed name |
| Conversation empty/read error | Empty has title + blank composer; loading/unavailable are truthful distinct states, not fabricated history |
| Chat send pending/unknown | Retain draft, deduplicate the same message identity; uncertainty never creates another paid attempt |
| Missing specialist | Suggest a role for human selection; do not automatically add or start it |
| Unsaved draft on World switch | Preserve World-scoped draft and use deliberate navigation/recovery choices; no cross-World flash |
| Work held/failed/expired/stopped | Show actual blocker/state with retained contributions and safe review path; no fake online dots or percentages |
| Expense unknown | Explicit unknown and unresolved reservation; no zero, refund or released-funds claim |
| Document save conflict | Retain review draft and show current canonical version; require deliberate resolution, never automatic overwrite |
| Lost save acknowledgement | Recover same receipt/command and target revision before retry; no duplicate approval |
| Activity unavailable | Say unavailable, not “no activity”; projection must carry source identity/time/attribution |

## Design system

Reuse approved Ink Clay tokens: canvas `#F6F7FB`, white surfaces, ink `#202B45`, cobalt action/focus `#3454C5`, slate `#596579`, periwinkle `#E3E8FC`, apricot `#FBE6D4`, rail `#EEF0F7`, solid control edge `#788398`, decorative divider `#DCE1EB`. Small clay World/agent figures may carry identity. Conversation, composer, task disclosure, document review and numeric accounting remain crisp/flat. No new palette, font dependency or framework choice is introduced.

Use system font, 16px body/1.5 line height, 28px page titles, 14px supporting copy, 4/8/12/16/24/32px spacing and minimum 44px targets. Current destination uses cobalt text plus a solid edge and `aria-current`; identities and statuses always have words. Prior exact token checks retain their limited scope: white/cobalt 6.52:1; slate/periwinkle 4.83:1; slate/apricot 4.88:1. They do not prove rendered full-state accessibility.

New components are World switcher, World-scoped history, familiar composer with mention picker, compact chat-to-work card, shared document-preview panel and cross-surface source links. The document panel is labeled preview/review draft; it never silently implies canonical storage. Rich formatting/import/search and real Activity projection need later selected design, not decorative claims.

### Honest reuse map

| Observed current capability | Reuse / gap |
| --- | --- |
| Shell currently defaults to Incubator | Reuse shell/World scoping, propose changing default to Chat |
| Chat is an unconnected placeholder | Conversation persistence, composer/mentions and work conversion are new bounded work |
| Real saved starter definitions | Reuse definitions/versioning; saved configuration does not mean runnable specialist/orchestrator |
| One native planning note | Reuse explicit Save/conflict/recovery; a Knowledge document collection and acceptance targets need design |
| Fixed A/B Work primitive | Reuse scoped inputs, contributions, checkpoint, stop/history and receipt patterns; it is not generic chat delegation |
| No Activity projection | Propose source-record projection; do not claim one exists |

These observations follow the current assignment/current records, not a new read-only code audit. Technical Specialist must reconcile exact interfaces and stored schemas before implementation. Historical accepted tests and later paid failures retain their original evidence; no new runtime readiness is implied.

### Task-local UI UX Pro Max guidance

Used the existing local skill without installation or generated system persistence. `navigation hierarchy current location --domain ux -n 2` returned Breadcrumbs then Active State; breadcrumbs were off-task for flat navigation. Narrow retry `active navigation state --domain ux -n 1` verified **Navigation / Active State**, applicable to all platforms: visibly highlight current section. `focus route change --domain ux -n 2` returned Focus Appearance/Focus States, not a route-change rule. Narrow `focus not obscured --domain ux -n 1` verified **Accessibility / Focus Not Obscured (Enhanced)**, a web AAA guideline; it is not relabeled AA. The local quick-reference's `focus-on-route-change` supports moving focus to the main region after route changes. The concept adopts visible focus and unobscured controls; full accessibility remains to be verified. Skill/data snapshot hashes and exact checks are in [Designer record](../runs/chat-first-world-designer.md). No remote source version or completeness is claimed.

## Adaptation, access and acceptance

Wide desktop: 232px rail; conversation reading measure near 70 characters; composer within normal document flow. Document preview opens as an inline panel rather than a trapping overlay. At ≤800px the World switcher and five labeled navigation buttons wrap above content; conversation history stacks; task/document comparisons become one column. No fixed footer or height prevents 200% zoom/reflow. Long World/agent/document names wrap.

Keyboard: skip link, native select/buttons, label for composer, current-location semantics, visible 3px cobalt focus outline, Enter/Space navigation. Local view changes focus the main heading; opening/closing preview transfers/restores focus. A future mention picker needs keyboard selection, escape/clear, announced options and unambiguous recipient identity; no canvas/dragging requirement. Future composer supports a documented multiline/send shortcut rather than accidental execution from Enter. Screen-reader announcements are meaningful acknowledged changes, not constant timers. Native dialogs for real permission/save decisions retain focus containment/return. Reduced motion removes nonessential transitions; forced-colour rules preserve boundaries. English initially; translations, RTL, screen reader and native zoom need actual-candidate verification.

### Proposed bounded first implementation finish line

After explicit approval/resume, deliver an **offline chat-led journey for one task with two direct specialists, document review and deliberate Knowledge save**. Use fictional content and conspicuous synthetic execution labeling. Prove conversation/draft continuity; same work/document identities across surfaces; exact proposed versus actual delegation; selected input/permission disclosure; one human acceptance receipt; conflict/recovery; reopened saved document; closed grants; and no hidden dispatch. Keep Activity to linked source events needed for this task. Defaults and user-built definitions can coexist, but only capability-ready selected versions may participate. No nested agents/BYOA runtime or broad Knowledge system is in this finish line.

This offline outcome is a usable product loop, not proof of real research, agent intelligence or live interoperability. Any paid call follows a separately reviewed runtime/task/funding plan and explicit remaining authority; prior consumed trials and unknown expenses cannot be reset. The orchestrator owns roadmap/backlog/authority updates; this document does not publish a competing milestone ledger.

| Design criterion | Evidence required |
| --- | --- |
| BYOA-CFW-01 Chat entry | Fresh World opens Chat with title + blank composer; welcome remains backlogged |
| BYOA-CFW-02 Coherent navigation | Five named surfaces and World-scoped history; current page/focus clear at desktop/narrow sizes |
| BYOA-CFW-03 Deliberate work | Chat proposes task, selected direct specialists and exact inputs; explicit authorization; no silent recruitment/spend |
| BYOA-CFW-04 Shared artifact | One work/document/receipt identity links all surfaces; human review/save only; no auto canonical write |
| BYOA-CFW-05 Configuration truth | Saved allowed team differs from actual task participants; versions/provenance retained |
| BYOA-CFW-06 Preservation/access | Offline actual-candidate keyboard, 320/360px, native 200% zoom, conflict/recovery/restart and cross-World checks; no inherited PASS |

Current evidence is static source checks only; browser rendering, native zoom, keyboard journey and screen-reader behaviour are unverified unless separately reported by the orchestrator. Preview controls demonstrate local navigation only. User owns approval of the coherent bounded proposal; Technical Specialist owns interface/runtime feasibility; Designer owns composition/access rules. Template alignment: design.md's mode/owner/source fields and all three core sections are preserved. Added tables clarify the proposal and reuse limits.
