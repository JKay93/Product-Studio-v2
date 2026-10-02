<!-- studio {"id":"byoa-world:design:clay-world-proposal","scope":"byoa-world","type":"design","status":"approved","links":[{"relation":"requires","target":"byoa-world:decision:world-foundation"},{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"},{"relation":"requires","target":"byoa-world:design:stage-2-native-participation"}]} -->
# Design: Ink/Cobalt World

- Mode: foundation visual refinement with native-participation feature composition.
- Designer owner and last material update: Designer specialist; 2026-10-02.
- Status: **visual direction approved 2026-10-02**: the user accepted Ink/Cobalt ("sure, i like it") and instructed "let’s do it". The earlier Warm Clay palette was rejected. This record approves appearance only; the detailed native implementation/runtime package remains unapproved and application coding/live execution remain held.
- Requirements and approved decisions: [Decision 002](../decisions/002-world-foundation.md), [Decision 004](../decisions/004-native-agents-company-funding.md), [CONTRACT](../CONTRACT.md), [STATE](../STATE.md), [ROADMAP](../ROADMAP.md), [native package](../architecture/STAGE-2-NATIVE-PACKAGE.md), [native screen design](STAGE-2-NATIVE-PARTICIPATION-DESIGN.md).
- Preview: [self-contained static concept](previews/clay-world-proposal.html). All names, note content and displayed states are illustrative. There are no executable work, save, permission or billing controls.

## Users and journeys

An SME owner or employee opens a named World, writes and explicitly saves its single planning note, and optionally prepares ready-made agent work. Warmth helps the World feel welcoming; clear working surfaces keep text, decisions and responsibility easy to inspect. Clay belongs to the World identity and the two role cards, where it communicates personality rather than successful execution.

The concept shows Little Hearth Bakery's fictional lunch-box trial, a saved-note example, and the proposed **Offer planner A → Operations planner B → Human review** workflow. A makes a brief; B uses the exact committed, owner-confirmed A artifact plus the frozen note to create an operations plan. B is not merely a checker. Selecting roles never starts inference. The owner checkpoint retains read-only A and binds its identity; it is separate from accepting a replacement note. The proposed overall deadline includes owner waiting, without restarting or creating another attempt.

### Composition and content expectations

| Area | Visual treatment | Meaning preserved |
| --- | --- | --- |
| World sidebar | Quiet cool-neutral rail; one small clay World emblem; clear current-World label and flat World rows | Named Worlds remain distinct; switching cannot flash another World's content or payer |
| World header | Generous title, World context and restrained decorative emblem | Persistent work container, not a spatial game or a claim of live activity |
| Planning note | Flat white paper, solid readable boundary, plain text, explicit save-state copy | One note per World; no automatic canonical save or agent write authority |
| Role selection | Periwinkle A card and apricot B card with small CSS clay figures, role letter/name and written purpose | Ready-made platform roles; colour/art never proves availability or real execution |
| Inputs, permissions, funding | Flat labeled surfaces with readable text; amount/unknown states visible | Exact recipient disclosure; requester/operator/payer separate; no personal fallback |
| Proposals and review | Flat original/replacement panels, attribution and consequence confirmation | Original A/B retained; human edits separate; deliberate revision-checked acceptance |

### Edge, empty, loading and error states

Preserve the [native screen design's state tables](STAGE-2-NATIVE-PARTICIPATION-DESIGN.md), including the owner checkpoint and funding blockers. Visual refinement does not revise those behaviours:

- Empty World/note: direct explanation and human writing path. A storage/read error is **Unavailable**, never an empty record.
- Draft/save: **Unsaved changes**, **Saving…**, **Saved revision N**, **Save failed**, or **Save confirmation unavailable**. Saved follows durable acknowledgement; Ctrl/⌘+S follows the existing explicit-save/acceptance rules. No auto-save convention from the skill is adopted.
- Conflict/recovery: retain human draft and newer canonical note; stacked or side-by-side flat comparison; deliberate refreshed-version confirmation. Recover the same receipt after uncertainty, without a duplicate commit.
- Role unavailable/held: explicit explanation; never a green online dot. In this proposal the visible state is **Concept only · execution not authorized**.
- Reserving/working: text reflects confirmed server state only. No invented progress percentage, animation suggesting current activity or success inferred from the user's click.
- A rejection/expiry or B failure: retain complete A, label incomplete B and any human acceptance of partial work. Unknown expense remains unknown with the unresolved hold visible; held B funding does not override authority/deadline/ledger blockers.
- Stop: **Closing World access…** until acknowledged, then **World access closed**. Already sent material may remain with operator/provider; no cancellation/forgetting or zero-cost claim. Human review stays available after closure and restart; grants do not reopen.

## Design system

### Direction and tactile boundaries

Use approved **Ink/Cobalt**: a cool pale canvas, crisp white surfaces, dark navy text and cobalt actions, with restrained periwinkle Offer and apricot Operations figures. Reuse the sidebar, World/name hierarchy, planning-note/editor structure, system font, explicit state language and responsive composition. The new visual direction is explicitly approved; inherited human-work behaviour and runtime authority are unchanged.

Apply clay only to World identity art and role cards: 24px corners, a very light outer shadow and restrained inner light/shade edges. Treat it as surface illustration. Keep editable text, numeric usage, tables, permissions, dialogs, history and conflict comparison flat, with solid boundaries where interaction must be recognized. Clay shadows must never be the only control edge, focus indicator or selection cue. Future selected cards need the written **Selected** label plus a solid action-colour border. Avoid blanket neumorphism, bouncing mascots, thick bubbly inputs and pastel action buttons.

### One coherent palette

| Token / role | Exact hex | Use |
| --- | --- | --- |
| Canvas | `#F6F7FB` | Cool neutral page background |
| Rail | `#EEF0F7` | Cool neutral sidebar |
| Surface | `#FFFFFF` | Flat work/editor/review surfaces |
| Ink | `#202B45` | Titles and primary text |
| Secondary text | `#596579` | Body supporting copy and labels |
| Action | `#3454C5` | Future primary actions/selected borders; white text |
| Action hover | `#2943A3` | Future hovered action; white text |
| Focus | `#3454C5` | 3px solid focus ring with 3px white separation |
| Control boundary | `#788398` | Important interactive field/control edges |
| Decorative divider | `#DCE1EB` | Non-essential section separators only |
| Agent A identity | `#E3E8FC` | Offer planner card and figure |
| Agent B identity | `#FBE6D4` | Operations planner card and figure |
| World accent | `#E3E8FC` | Decorative periwinkle World object |
| Success ink / wash | `#256347` / `#E5F3E9` | Confirmed successful state, with written status |
| Warning ink / wash | `#754713` / `#FFF0D8` | Pending attention/unknown expense, with explicit words |
| Error ink / wash | `#A13737` / `#FCE9E6` | Failure/conflict, with cause and recovery wording |

Agent identity and semantic status are separate roles even when a colour value is shared. Periwinkle means Offer planner only within the role card, not online/success; apricot means Operations planner, not pending/review. Text, role letters and labels carry the distinction. Light pastel shades are decorative backgrounds, never primary action fills carrying white text.

### Contrast evidence

Calculated locally from exact sRGB hex values using WCAG relative luminance `(Llighter + .05)/(Ldarker + .05)`, without shadows or gradients. Normal text target ≥4.5:1; meaningful control edges/focus target ≥3:1. These are token-pair checks, not a claim of complete rendered/browser accessibility.

| Foreground / background | Ratio | Result |
| --- | ---: | --- |
| Ink / canvas | 13.14:1 | Normal text pass |
| Ink / white surface | 14.07:1 | Normal text pass |
| Secondary / canvas | 5.51:1 | Normal text pass |
| Secondary / periwinkle A | 4.83:1 | Normal text pass |
| Secondary / apricot B | 4.88:1 | Normal text pass |
| White / action | 6.52:1 | Action text pass |
| White / action hover | 8.66:1 | Action text pass |
| Focus / white | 6.52:1 | Ring pass |
| Focus / canvas | 6.09:1 | Ring pass |
| Focus / periwinkle A | 5.35:1 | Ring pass |
| Focus / apricot B | 5.39:1 | Ring pass |
| Control boundary / white | 3.82:1 | Non-text edge pass |
| Warning ink / warning wash | 7.01:1 | Normal text pass |
| Error ink / error wash | 5.75:1 | Normal text pass |
| Success ink / success wash | 6.20:1 | Normal text pass |

Secondary copy uses opaque tokens. Decorative clay shading carries no text or sole state information; do not extrapolate these ratios to translucent/gradient surfaces. Future rendered checks must include hover, selected, focus, pending, error and forced-colour states.

### Typography, rhythm and material

- Typography: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; no font download. Body 16px/1.55, supporting labels 14px/1.5, section titles 20–24px/1.25, World title 32–40px/1.15 with responsive scaling. Use weights 400/600/700 and tabular numerals for usage. Keep prose near 65 characters wide; long names wrap.
- Spacing: 4/8/12/16/24/32/48px scale; 24–32px desktop content gutters, 16px small-screen gutters. Role card padding 24px, ordinary surfaces 24px desktop/16px narrow. Leave ≥8px between future targets and use ≥44px target heights.
- Rounding: 24px role cards; 18px World emblem; 12px working panels; 8px future fields/actions. Flat panel rounding is restrained, not a depth cue.
- Clay card shadow: `0 4px 12px rgba(32,43,69,.04), inset 2px 2px 4px rgba(255,255,255,.55), inset -2px -2px 5px rgba(32,43,69,.035)`. Small figure art may have slightly stronger local lighting without making the whole card difficult to scan. Working surfaces use no inset shadows.
- Motion: static concept; no motion needed. If later approved, subtle 120–180ms colour/shadow transitions only, disabled under reduced motion. No bounce, floating live effect or layout shift.

### Skill evidence and product-fit judgment

Read task-local `tmp/byoa-ui-skills/ui-ux-pro-max/SKILL.md`, then ran its full-path local Python search tool without persist/force/install. Read quick-reference accessibility, touch/interaction, responsive, typography/colour and feedback guidance, plus pro-rules' scope notice (native/mobile rules are not a desktop framework choice).

| Exact query / mode | Actual returned identity | Applied / rejected |
| --- | --- | --- |
| `SME collaboration workspace claymorphism --design-system -p "BYOA World" -f markdown` | Pattern Real-Time / Operations Landing; Style Soft UI Evolution; collaboration indigo palette; Outfit + Work Sans | Soft depth with enterprise readability supports selective clay. Landing hero/CTA/metrics structure is off-task, so rejected. Fonts and raw palette are recommendations, not adopted wholesale. |
| `claymorphism --domain style -n 1` | Style ID claymorphism; active; soft 3D/pastels; 16–24px corners; inner+outer shadows; conditional accessibility; cost low | Verified requested style; limit toy-like treatment to identity/role surfaces and inspect contrast/focus. No automatic bounce or universal thick controls. |
| `collaboration workspace --domain color -n 2` | Remote Work/Collaboration Tool; primary `#6366F1`, secondary `#818CF8`, accent `#059669`, background `#F5F3FF`, foreground `#312E81`, card white, muted foreground `#475569`, ring `#6366F1` | Verified product-category match. Use its quiet collaboration/semantic separation logic; use cobalt action plus restrained periwinkle/apricot identity washes, following the user's later approved direction. Cobalt actions and green confirmed-success copy are separate tokens. |

The system query's landing component was off-task. Scoped style/colour searches provide the relevant verified matches instead. No generated MASTER or unverified landing output was persisted. The palette above combines the user-approved Ink/Cobalt values with Designer accessibility tokens; it is not a verbatim database palette. No external documentation or asset fetch was required for these local searches.

## Adaptation, access and acceptance

The static concept uses semantic headings/regions and a real skip link; art is decorative and hidden from assistive technology. World rows and role cards are static labeled examples, not fake buttons. It intentionally omits executable start/save/continue/accept controls. The plain note area is a read-only illustration, not a functional editor. Future implementation retains labeled native controls, visible focus, safe plain-text rendering, polite acknowledged status changes and actionable errors. Dialog focus must be contained and restored; incoming updates cannot steal focus or erase drafts.

Desktop keeps a 232px World rail and a broad reading pane. At ≤800px the rail becomes a compact top region, role cards stack and disclosures stack; at 320–360px long content wraps without fixed card heights. No sticky/fixed overlay hides content or focus. The concept includes viewport metadata, supports zoom and avoids network assets/scripts. Only English content is shown; longer translated strings must wrap, and provider-accounting currency remains separate from fictional SGD bakery amounts.

| Acceptance item | Current proposal evidence / future verification |
| --- | --- |
| BYOA-CLAY-01 Coherent palette and selective depth | Exact tokens/contrast pairs above; static concept shows swatches, clay roles and flat note/funding/permissions surfaces |
| BYOA-CLAY-02 Preserve authority and truthfulness | Explicit concept/execution-held labeling; no online/live claims or working execution controls; exact native contract remains governing |
| BYOA-CLAY-03 Readable responsive concept | CSS wraps long text and stacks at small width; browser file-protocol access was blocked; no browser visual QA or native zoom verification is claimed. Future app evidence must be reported separately, never inherited from Stage 1 |
| BYOA-CLAY-04 Future interaction accessibility | Before app acceptance: actual keyboard/screen-reader, 320/360px, 200% native zoom, 400% reflow, reduced motion and forced colours; states/controls need rendered contrast checks |
| BYOA-CLAY-05 Preservation | App implementation is held; saved Worlds/notes, attempts, reservations, budgets, original outputs and uncertainty remain untouched |

Approval recorded: **Ink/Cobalt visual refinement with selective small clay World/agent illustrations and flat white work surfaces**, accepted by the user on 2026-10-02. Warm Clay was rejected. The detailed native runtime/package remains unapproved; this appearance decision does not resume Stage 2.1 coding or authorize spending/live work. Implementation, provider selection, execution allowance and publication remain under their existing separate authority.

Routing provenance: assignment requested Designer `gpt-6.1-sol`, `medium`, `fork_turns: none`; backend activation is unknown. Template alignment: design.md's mode/owner/source fields and Users and journeys, Design system, Adaptation/access/acceptance sections are retained, with tables added for the palette and state boundaries. No milestone status is duplicated here.
