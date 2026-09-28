<!-- studio {"id":"byoa-world:design:document-review","scope":"byoa-world","type":"design","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# Design: document review workspace

- Mode: feature.
- Designer owner and last material update: Designer, 2026-09-29.
- Requirements and approved decisions: latest user authorization, relayed in the
  orchestrator assignment, permits a minimal platform preview. Preserve the human
  owner without a personal agent, two preconfigured independent agent participants,
  selected synthetic context, attributable work, proposal review and stopping work.
  Gather/Pokémon visualization remains deferred. This design does not establish
  provider connectivity or knowledge-isolation feasibility.
- Selected template: [design template](../../../../../operating-system/templates/design.md).
- Related direction: [strategy](../../../STRATEGY.md),
  [roadmap](../../../ROADMAP.md), [modularity](../../../architecture/MODULARITY.md).
  This is a reviewable feature design; broader product direction remains draft.

## Users and journeys

### User context and primary flow

A human owner enters one project workspace and commissions two preconfigured
agents. The owner does not need to connect or possess an agent. Keep one continuous
page so the task, disclosed context, participants, contributions and review remain
understandable together. Use three modes, not three separate destinations:

| Mode | Content | Primary action |
| --- | --- | --- |
| Prepare | Project title and purpose; editable task; selected synthetic source cards; two participant cards with identity, role and readiness | Start collaboration |
| Collaborate | Stable task/context summary; separate participant progress; chronological contributions; stop control | Inspect progress; Stop collaboration while work is active |
| Review | Proposed document with attribution and revision state; editable proposal draft where supported; concise change summary; current accepted version clearly distinguished | Accept proposal or Request changes |

Place the project title and a short outcome description above the work. Label the
human as Owner and the agents as participants, not as the owner's interchangeable
identities. Agent cards show display name, role, connection mode and textual state.
Use simple initial/monogram avatars instead of imagery or animated characters.

Context selection must be explicit: selected synthetic material will be supplied
for this run; private/not-supplied material is listed by safe synthetic label only.
Do not display private contents in activity or use private badges as proof of
runtime isolation. Explain selection close to the Start action, before work begins.
Keep the supplied-context snapshot inspectable after Start rather than silently
changing an active run when the user edits a future selection.

Each contribution shows the participant, contribution type and readable sequence
or time. Activity is a useful account of work, not fabricated model reasoning.
When a proposal becomes available, show its content and source contributions.
Edits remain unaccepted until the owner explicitly accepts them. Request changes
collects a short actionable instruction and retains the prior proposal. Accept
creates a clearly labeled accepted result and disables duplicate acceptance of that
same proposal. Explain what actually persists in this preview.

### Edge, empty, loading and error states

| State | Required presentation and recovery |
| --- | --- |
| Empty/invalid task | Helpful task prompt; inline validation when required content is missing; preserve input |
| No selected context | Explain the selection and whether this task can proceed; never substitute hidden context |
| Participant unavailable | Identify which participant is unavailable; show honest recovery or demo option, not false readiness |
| Starting/running/waiting | Textual progress per participant, bounded loading treatment and visible Stop action; do not fabricate completion percentages |
| No contributions yet | Plain-language waiting state in the activity region, not an empty decorative chart |
| Partial failure | Retain task, contributions and any draft; identify the failed operation and available retry without silently accepting duplicate work |
| Proposal ready/changes requested | Show the current proposal version and unresolved requested changes; retain earlier work for inspection |
| Accepted | Distinct accepted-result label with reviewer attribution; show that further edits would be a new proposal |
| Stop pending/stopped/expired | State whether stopping is requested or effective; stop adding simulated work after effective stop; retain readable history and clearly disable unavailable actions |
| Storage/network error | Honest persistence/connection explanation and recovery; never claim saved if saving failed |

### Content and interaction expectations

Display a persistent **Demo preview — simulated agents** label when local fixtures
drive the experience. Demo activity and proposals must remain recognizable as
simulated. Show Live only when an actual connection is established; connection
status does not imply verified confidentiality. Provide a concise nearby limitation:
“Stopping prevents further work here. It cannot retract context already sent to an
external agent.” Adapt wording to actual implementation and avoid implying a live
disclosure in a purely local demo.

Do not show production-ready security claims, universal provider support or invented
costs. Unknown cost remains unavailable. The preview uses synthetic content; any
editing surface must explain its local/session persistence. Avoid technical setup
instructions in the normal workflow and omit nonfunctional navigation destinations.

## Design system

### Existing components, tokens and patterns reused

No existing project UI library or visual language has been selected. Use this
small feature-local palette and interaction vocabulary as a proposed preview
direction; it is not a new cross-project design system:

- Warm ivory page background, white work surfaces, deep ink text, quiet gray-green
  secondary text and thin neutral borders. Forest green anchors the primary action;
  restrained amber identifies waiting/review. Red is reserved for errors or destructive
  implications. Status must always include text, not color alone.
- Readable system sans-serif body and headings with generous line height. A small
  monospace accent may identify a session or version, but avoid exposing raw IDs as
  the main user-facing content. Use strong hierarchy: project title, section title,
  concise label, then supporting detail.
- Moderate rounded corners, consistent spacing and restrained shadows. Favor a
  well-proportioned work surface over many equally weighted dashboard cards.
  No gradients, hero illustration, animated avatars or large decorative metrics are
  needed for this task.
- Controls share visible hover, focus, disabled and busy states. Buttons say the
  action (“Accept proposal”, “Request changes”, “Stop collaboration”). Distinguish
  the primary action from supporting actions without hiding the latter.

### New or changed shared conventions, for foundation work

This is feature work. Keep provisional tokens and visual controls feature-local
until cross-feature reuse is demonstrated. Designer owns visual conventions and
accessibility expectations; Builder implements them; Technical Specialist owns
public interfaces and dependency boundaries. Deliberately promoted shared
conventions belong in [design-system](../../../design-system/README.md), with a
clear owner. That documentation directory does not prescribe application code paths.

### Feature composition, for feature work

Use a compact brand/header followed by project identity. On wide screens, a narrow
left column holds task, context and participants; a wider right column holds activity
and the document review surface. Make the proposal the dominant work area when
review is available. Avoid a navigation sidebar for one destination. The header's
demo label remains visible without competing with the project purpose.

Keep feature UI, interaction state, adapters and relevant tests cohesive under the
approved `features/<domain>/<feature>/` ownership pattern. A page composes public
feature interfaces; it must not become the owner of unrelated agent connection,
session enforcement or review-domain behavior. The technical plan chooses actual
application filenames and public module boundaries; this record selects no stack.

## Adaptation, access and acceptance

### Responsive and platform behavior

At narrow widths, use one column in journey order: project, task/context,
participants, activity, proposal/actions. Collapse long activity only with an
explicit inspect control. Do not hide supplied context or owner actions solely to
fit a phone. Wrap participant metadata and action labels; constrain long document
content without page-wide horizontal scrolling. Preserve task and review state
through resizing. Avoid fixed-height panels that trap essential text.

### Keyboard, screen-reader, contrast and motion requirements

Use semantic headings, form labels, buttons and landmarks; name icon-only controls.
All actions work by keyboard with visible focus. Associate validation text with its
field. Announce meaningful progress and state changes politely without narrating
every token or stealing focus. If a dialog is used, manage initial/return focus and
Escape consistently. Prefer inline change requests when a dialog adds no value.

Meet WCAG AA text contrast; ensure controls and focus remain visible against their
background. Provide comfortable pointer targets and preserve readability with zoom.
Honor reduced motion. Never rely on animation, color or a lock icon to explain
status, disclosure or safety.

### Localization or content constraints

English preview copy; permit label wrapping and user-entered long task/document
text. Use synthetic, non-sensitive sample names and project material. Distinguish
agent-private, company-private and intentionally shared content in plain language.
Do not expose real private context to make the preview look realistic.

### Prototypes, references and open choices with owner

This record is the visual/interaction reference; no external inspiration or imagery
is required. Builder chooses low-level layout within these constraints. PM owns task
wording and the acceptance rubric. Technical Specialist owns real connection,
disclosure, persistence and stop semantics; Designer aligns labels to those facts.
Whether review initially uses a full diff or readable change summary depends on the
chosen document representation; either must make the proposed result understandable.

### Feature acceptance criteria and design evidence, when applicable

- A human with no connected personal agent can understand and start the supported
  preview journey with two clearly identified participants and explicit context.
- Prepare, collaborate and review modes remain in one coherent workspace; proposal
  acceptance, request changes and stop have distinct, understandable outcomes.
- Demo/live, supplied/private context, proposed/accepted output and pending/effective
  stop are distinguishable in text. No unsupported assurance is implied.
- Empty, running, error, review and stopped states preserve useful content and offer
  honest actions; inaccessible or nonfunctional controls are not presented as usable.
- Inspect the actual rendered candidate at desktop and narrow mobile widths and
  exercise keyboard focus, input validation, request changes, acceptance and stop.
  Record candidate-specific screenshots and findings in delivery evidence. No visual
  or usability verification has occurred merely because this design was written.

Design authorship is by the Designer agent; an independent candidate reviewer
should review the implementation rather than treating this author's opinion as
independent acceptance.
