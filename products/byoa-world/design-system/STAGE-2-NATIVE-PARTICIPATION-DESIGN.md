<!-- studio {"id":"byoa-world:design:stage-2-native-participation","scope":"byoa-world","type":"design","status":"draft","links":[{"relation":"requires","target":"byoa-world:roadmap:main"},{"relation":"requires","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:world-foundation"},{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"}]} -->
# Design: native agents planning a bakery lunch-box trial

- Mode: feature composition within the accepted human World foundation.
- Designer owner and last material update: Designer specialist; 2026-10-01.
- Status: draft Stage 2 package revision 2; owner checkpoint aligned to technical revision 2; screens below are text wireframes, not implemented UI, verified usability or permission to execute.
- Requirements and approved decisions: [native participation PRD](../features/agents/connection/STAGE-2-NATIVE-PRD.md), [CONTRACT](../CONTRACT.md), [Decision 002](../decisions/002-world-foundation.md), [Decision 004](../decisions/004-native-agents-company-funding.md), [native handoff](../handoffs/STAGE-2-NATIVE-AGENTS-HANDOFF.md), [ROADMAP](../ROADMAP.md) BYOA-AGD-03/05/06/07/10. Task details and accounting ceilings are package proposals, not independently approved choices.
- Historical reference: [external participation design](STAGE-2-PARTICIPATION-DESIGN.md) is superseded for external-first onboarding/funding; retain compatible frozen-input, proposal, review, stop and continuity rules.

## Users and journeys

### Proposed task and audience

An SME employee wants ready-made help turning a saved planning note into a practical offer and fulfillment plan. The local prototype requester remains **Local owner**; a fictional company payer label is test accounting, not verified employee membership or an operational company account. No runtime launch, API-key entry or manual pairing appears in default onboarding.

The proposed fixture is **Little Hearth Bakery**, planning one hypothetical Monday–Friday corporate lunch-box trial. A is **Offer planner** and creates a short offer brief. B is **Operations planner** and uses the exact committed A brief, the frozen original note and its own role instruction to create a complementary fulfillment plan incorporating a concise offer summary. B is a planner, not merely a checker. Two role cards alone never establish two real executions.

Fictional facts: SGD14 selling price, SGD9 variable cost, at least SGD4 contribution per box; chicken-and-vegetable or vegan-and-vegetable options; minimum 10 per order, hard maximum 30 per day; 150 staff minutes per day, with 30 fixed minutes plus 4 per box; previous-working-day 15:00 cutoff, 11:30 dispatch, 12:00–12:30 target delivery, one route. Six fictional contacts include four interested in a 20-box order and two undecided; no confirmed orders exist. A conservative 20-box daily planning scenario uses 110 staff minutes and produces SGD100 contribution. These are bakery planning figures, not platform prices or a revenue forecast. Neither proposal makes allergy/nutrition assurances, sends marketing, books orders or contacts customers.

Primary flow: saved fictional note → choose the ready-made A/B workflow → inspect frozen input, permissions, operator and test payer → explicitly start one bounded chain → committed A brief → owner checks read-only A against fixture/rubric and chooses Continue to operations plan → exact A-to-B handoff → committed B plan → human reviews originals and edits selected combined document → explicit confirmation replaces the current planning note → reopen retained work. The human may also continue writing and saving without using agents.

### Workspace composition

Keep **All Worlds**, **Planning note** and **World details**. Add **Agent work** inside an open World, containing the ready-made workflow, setup and retained sessions. Avoid a separate connection console or unavailable catalogue. Session history is a plain list with task name, time, result, access state and review status. Selecting another World must never briefly display the previous World's inputs, proposals or payer summary.

The current-step pane shows **Setup → Offer brief → Check brief → Fulfillment plan → Human review**. Available earlier steps remain inspectable; navigation cannot skip execution dependencies. Keep access state, work result, human acceptance and funding state separate: a stopped session may contain completed proposals and an accepted note; a completed plan may have unresolved usage.

| Screen | Main content and action | Next state |
| --- | --- | --- |
| Empty Agent work | Explain the two complementary deliverables; show Offer planner and Operations planner as ready-made roles; **Prepare lunch-box plan**. | Prepared setup; no runtime/grant/inference merely from opening it. |
| Setup | Saved-note snapshot; exact role instructions and recipient inputs; requester/operator/payer; bounded steps, permissions and test funding. **Start bounded work**. | Server acknowledges session, total A+B reservation held upfront and permitted start; no success inferred from click. |
| Offer brief working | A attribution and confirmed status; B **Waiting for committed offer brief**; input disclosure; usage summary; **Stop access**. | A commits a structurally eligible complete proposal, then the owner checks it; completion alone does not dispatch B. |
| Offer brief checkpoint | Read-only A original and frozen fixture/rubric; **Continue to operations plan** only when suitable, or **Reject brief and stop**. No A editor or canonical-save action. | Owner continuation binds exact A contribution/revision/hash and current grant epoch; B remains held until confirmation and dispatch checks. |
| Fulfillment plan working | Readable retained A original; **B receives offer brief revision …**; inspect exact snapshot/content identity; B status; stop. | B complete → review; failed/unknown → partial state. |
| Human review | A original, B original, editable selected combined document; explicit target note/version and replacement action. | Durable human acceptance receipt or retained conflict/recovery draft. |
| Reopened session | Original snapshots/proposals, human acceptance receipt, final access state and accounting history. **Review saved work** or **Open planning note**. | Human review only; no resumed grants or hidden new attempts. |

### Setup disclosure and consent to the bounded chain

Only a durably saved note revision becomes input. Before freezing, show its title, revision and content; an empty/unsaved note offers **Open planning note and save**. For dirty text, offer **Save first** or deliberate **Use last saved revision N**, with a warning that the browser draft is excluded. Save conflict, uncertain acknowledgement and load error require the existing recovery path; they never become empty input or implicit fresh saved work. The prepared snapshot is immutable even when the planning note later changes.

Expand **What each agent receives** into exact rendered text, not just a resource count. A receives the frozen saved-note snapshot, task goal and offer-role instruction. B receives that same snapshot/goal, operations-role instruction and A's actual committed proposal. Setup labels the A handoff as **Available after A completes**, never substitutes sample A text. At A commit, show the actual brief revision, contribution/attempt identity and content hash in Inspect details for the owner checkpoint; B's disclosed request snapshot binds that exact content. A provider-facing formatting wrapper may differ by adapter but the displayed disclosure must cover every sent content field. No whole-World dump, other resource, personal memory or provider secret is implied.

**Start bounded work** deliberately authorizes the displayed bounded A→B workflow within applicable execution authority and ceiling. Start requires the total A+B reservation held upfront before inference; concurrent work cannot consume B funding. A complete response passes automatic structural/provenance/limit checks, which do not establish semantic quality. The owner then reads the immutable A brief against the frozen fixture and PM rubric, checks scope, capacity/arithmetic, assumptions and invented-booking risks, and chooses **Continue to operations plan** only if suitable. **Reject brief and stop** retains A and blocks B. This checkpoint neither edits A nor accepts canonical work nor adds a model call.

Continuation is bound to the exact A contribution ID/revision/hash, current grant epoch and owner command identity. B receives that confirmed artifact only after transactional eligibility, authority, sharing, deadline and ledger/rate checks against its existing reservation; no new allocation occurs. Identical confirmation replay cannot create another B dispatch; stale/revoked/conflicting confirmation fails. An unknown A outcome or usage, revoked authority, expired deadline or ledger/rate mismatch blocks B despite held funds. The 240-second total deadline includes owner waiting and never restarts at this checkpoint; expiry closes work, retaining A and unresolved A usage, and releases B only with positive evidence it was never sent. A failed/truncated/unconfirmed or infeasible/out-of-scope brief cannot be silently repaired or handed off. Human edits never redispatch agents; a changed input needs a separately authorized task/attempt.

Always show the distinctions that affect the decision:

| Disclosure | Proposed visible wording/rule |
| --- | --- |
| Requester | **Requested by Local owner**; no employee identity verification claim. |
| Agent | **A · Offer planner** and **B · Operations planner**; each retained output has its own execution/contribution identity. |
| Operator | **Native agents operated by the platform**; truthful prototype/local-runtime qualification from the technical package. Do not label the employee as operator merely because they clicked Start. |
| Provider handling | Show selected provider/model and runtime operator before start when configured; they can receive submitted material. Retention handling remains limited to verified statements; stopping cannot retract disclosed text. Route unavailable is explicit. |
| Payer | **Little Hearth Bakery · Test funding only**; bound funding account and allowance identity in Inspect details. Never silently select the requester's personal funds. |
| Permissions | Read only the frozen note and allowed handoff; submit proposals for this session; no canonical save, other-World reads, customer contact, payment or tools in this slice. Server enforcement is required. |
| Authority | Design-only states say **Execution not authorized**. Later Start needs package approval/resume plus separately applicable live allowance; presence of test money never grants real spending authority. |

### Compact text wireframes

These wireframes illustrate information hierarchy; brackets denote controls and disclosures, not working buttons.

```text
BYOA World / Little Hearth Bakery                    Local owner
All Worlds | Planning note | World details | Agent work

Prepare a lunch-box plan
Offer planner → Operations planner → Your review
Fictional trial · nothing will be sent to customers
A creates an offer brief. B builds its fulfillment plan.

Input: Lunch-box trial · Saved revision 3 [View frozen note]
[What each agent receives ▾] A exact text; B handoff pending
Permissions: scoped read + proposal only [Inspect permissions]
Requested by Local owner · Operated by platform
Provider/model: configured route or Unavailable [Handling details]
Payer: Little Hearth Bakery · TEST FUNDING ONLY
Available / reserved / reported provider expense / unresolved hold
Proposed ceiling US$0.42 · A reserve $0.2075 · B reserve $0.21
Per-step/token/deadline caps [Usage basis ▾]
No purchased credit balance. No commercial price or completion guarantee.
[Back to note]                         [Start bounded work]
```

```text
Lunch-box plan                      Access open [Stop access]
Setup → Offer brief → Check brief → Fulfillment plan → Your review
A Offer planner · complete proposal [Read original brief]
A brief read-only · check fixture/rubric [View frozen note and rubric]
[Reject brief and stop] [Continue to operations plan]
Confirmation binds A revision/hash/epoch · not canonical acceptance
240s overall includes this wait; expiry stops safely
B Operations planner · waiting for your brief confirmation / working
B funding reserved at Start · specific dispatch blocker shown if present
Input: frozen note r3 + committed A brief r1 [Exact B input]
Inspect: A contribution ID + content hash / B attempt correlation
Usage: A reported … | B reservation held upfront … | remaining ceiling …
TEST ACCOUNTING · unknown amounts explicitly shown
[Inspect inputs and usage]            (no percent complete)
```

```text
Review lunch-box plan                    Access closed / closing
[Original A brief ▾]  [Original B plan ▾]  [Usage details ▾]
Selected combined document · human review draft
Title [Lunch-box offer and fulfillment plan________________]
Body  [Editable combined offer summary and operations plan___]
Unsaved review edits · original proposals retained
Target: Planning note “Lunch-box trial” · current revision 3
[Keep reviewing]                [Review replacement and save]

Confirmation: current saved note | selected replacement (stack on narrow)
This replaces the note title/body. Prior revisions remain retained.
[Keep reviewing]                [Accept and save to planning note]
```

### Funding, reservation and failure states

Funding sits beside the primary work status, not behind diagnostics. Label all prototype allowance/ledger values **Test accounting**, even if later separately authorized real provider expense is recorded. Raw provider expense, test payer allocation and any future retail/service charge are different fields. Do not show credit purchases, one-cent conversion, markup, price bundles or a fixed complete-task price. The aligned technical proposal selects platform-operated Anthropic Claude Haiku 4.5 via a separate Node worker, with two inference calls plus two non-billable count checks, no tools/retries, 60 seconds per request and 240 seconds for the task including the owner checkpoint wait. A output maximum is 1,500 tokens and B 2,000; count-estimate admission ceilings are 4,000/6,000 input tokens. Proposed conservative maximum exposure is US$0.42 (A reservation US$0.2075, B US$0.21), with both reservations held together at Start before any inference; the expected-envelope estimate of up to US$0.0275 is indicative and is not the enforcement ceiling or a complete-task price. Full rate basis and the conservative model-context reservation rationale belong to the technical package. This is a fresh proposed development allowance, currently unapproved; the historic Claude allowance is not silently reused. Exact numeric call/token/deadline/currency caps belong to the technical specification; render its approved version at setup and retain that version in history. They must agree with actual enforcement. Any estimated amount says **Estimate**, reported usage says **Provider reported**, and uncertainty says **Unknown / awaiting reconciliation**.

| State | User-visible treatment | Permitted next step |
| --- | --- | --- |
| Reserving | **Checking and reserving the full A+B test allowance…**; no provider-working claim until confirmed. Disable duplicate start. | Resolve the same start identity after uncertain response; never create a second billable attempt to recover the UI. |
| Insufficient funding / concurrency hold | **Not started: this company's available allowance is insufficient**; show total A+B required reservation, available amount and other held reservation when safe. | Return to note or inspect usage; no personal fallback, credit purchase or bypass. New limits/funding require applicable authority. |
| Funding denied/unavailable | Distinguish unapproved payer from temporary ledger failure. | Human-only work remains available; resolve authorization/system issue before start. |
| A failed | B **Not started**; A partial content labeled incomplete; reported expense and unresolved hold visible. | Review retained evidence; no automatic retry. Human salvage is separate from cooperative success. |
| Owner rejects A / checkpoint expires | Retain read-only A; **Brief unsuitable — B not started** or **Task deadline expired — B not started**. No semantic-quality guarantee from automated checks. | Stop closes execution; release B reservation only after positive proof no B send, retaining A cost holds. No new attempt/deadline or automatic retry. |
| B dispatch blocked despite held reservation | Preserve exact A where complete; show the precise reason: **A result/usage unconfirmed**, **Authority revoked**, **Task deadline expired**, or **Ledger/rate mismatch**. B funding was held at Start; do not call this insufficient remaining allowance or request a new reservation. | Review retained work, reconcile the same attempt/accounting when applicable, or stop. No fresh allocation, automatic retry or new inference merely to clear the blocker. |
| B failed/truncated | Preserve A and any incomplete B result separately; no complete-chain label. | Human may explicitly save a selected A-only document as **Human acceptance of partial work**, with usual target/conflict confirmation. Never synthesize a complete B original. |
| Result unknown | **Result unconfirmed**; preserve attempt and safe diagnostics. | Reconcile same attempt; new run cannot reset uncertainty or duplicate result. |
| Cost unknown / incomplete usage | **Provider expense unknown; reservation retained pending reconciliation**; known subtotal plus unknown portion, never a false complete total. | Read completed proposals/human review if safe; unknown accounting blocks further use when ceiling cannot be established. |
| Known failed-call usage | Retain actual reported chargeable usage even without useful output. | Show independently from result failure; no automatic refund/zero-cost claim. |
| Accounting unavailable after dispatch | Retain unresolved reservation/attempt, show unavailable reconciliation. | Stop further dispatch; retained work stays readable when its own store is available. |
| Stop requested | **Closing World access…** until durable closure acknowledgement; stop submission failure remains actionable. | Recover closure confirmation; no false **Stopped** label. |
| Stopped/expired | **World access closed. Already sent material may remain with the operator/provider; cancellation may not stop all billed work.** | Human review/save remains possible; late agent writes denied. |
| Reopen/restart | Restore saved session/result and last funding state; no active grant inferred. | Human review or prepare a separately authorized new session, never a one-click hidden retry. |

Stop does not roll back the saved note, delete proposals, unaccept human work or erase billed usage. Stopping after A retains A; after B retains both; after human acceptance retains its receipt and note revision. Native cancellation can be requested, but “provider cancelled” needs actual evidence and never replaces World access closure. On restart, interrupted work is reconciled rather than replayed; unknown outcomes remain unknown.

### Canonical work, explicit Save and recovery

Display separate original A and B proposals. The selected combined document derives from complete B's offer summary plus fulfillment plan; human review edits are visibly human-authored and never overwrite either original. Default successful acceptance replaces the existing single planning note title/body; this slice adds no second note/resource or proposal autosave to canonical work. If B does not complete, selecting A alone is a deliberate partial-work path and does not pass the real A→B cooperation acceptance check.

**Review replacement and save** opens a target-version comparison and consequence confirmation. Only **Accept and save to planning note**, by an authorized human, invokes the revision-checked acceptance path. Retain original outputs, input snapshots, selected review revision and durable receipt linking human/World/note/new revision/session. A proposal never carries the human's canonical-write authority. Repeated action with the same acceptance identity must not create duplicate commits.

Preserve foundation behavior: Saved only follows durable acknowledgement; explicit Save and Ctrl/⌘+S do not become autosave. Review keyboard Save opens the same acceptance confirmation rather than bypassing it. Do not replace Ctrl/⌘+S globally on pages where it already saves a note/name.

| Save state | Required behavior |
| --- | --- |
| Save pending/error | Retain human review text and original proposals; disable duplicate submission while pending; deliberate retry after known failure. Never label Saved from dispatch alone. |
| Stale target revision | Preserve review draft; show newer canonical note beside proposed replacement. Human compares/edits and explicitly confirms against refreshed revision; no overwrite by automatic rebase. |
| Lost acknowledgement | **Save confirmation unavailable**; recover same acceptance command/receipt and canonical revision before retry. If canonical advanced, show conflict; never create a second acceptance to recover a response. |
| Load/storage failure | Distinguish unavailable saved work from empty history/note. Retry read; never seed replacement data. |
| Dirty navigation | Save-and-leave only when valid confirmation/recovery can complete, discard-and-leave with consequence, or keep reviewing; uncertain acknowledgement cannot be discarded into a fake known state. |
| Restart | Committed notes, proposals and receipts survive. Unsaved browser review edits may be lost; do not promise crash recovery absent implementation. |

## Design system

Reuse Calm foundation, not the old pilot UI. Read-only source inspection found the current shell in `BYOA-World/src/app/foundation/shell.tsx`, actual CSS in `styles.css`, planning-note editor in `src/features/resources/planning-note/ui/index.tsx`, World-name form in `src/features/worlds/workspace/ui/index.tsx`, and shared `ConfirmDialog` / `useDraft`. They provide explicit draft/saving/conflict/uncertain states, native dialogs, safe text rendering, logical navigation and human-only operation; these are reuse seams, not existing native-session implementation.

Actual foundation values include #fafbf8 canvas, #f0f3ed rail, #26372e text, #346b4f action green, #dce3db borders, restrained 7px controls, system font fallback, 248px desktop rail and a 700px single-column breakpoint. Reuse rather than declare new shared tokens without need. Existing native ConfirmDialog is presentation only; acceptance, pending/error/recovery state and deliberate alternative choices belong to the feature. Existing useDraft should not be claimed to provide persisted review history or recovered acknowledgement without new implementation.

New feature compositions: role row; input/permission disclosure; small step trail; attributed proposal section; funding summary with unknown state; original/current/replacement comparison; retained-session row. Status uses text and semantic color together. No avatars, simulated conversations, fabricated percentage progress, billing dashboard, seat administration or visual workflow builder. Technical identifiers/hashes belong in Inspect details; role, operator, payer, inputs and ceilings remain easily accessible because they inform the user's decision.

## Adaptation, access and acceptance

Desktop retains the current World rail and a readable current-step pane. At 320–360px and native 200% zoom, navigation wraps/discloses, steps wrap, details become full width and comparisons stack. No fixed card heights, clipped status/action labels or horizontal prose scrolling. Dense accounting rows stack into labeled fields; retain currency/unit and unknown label. World/role names and long text wrap; proposal body remains plain text and cannot render agent-supplied HTML.

Keyboard-only flow includes navigation, disclosure toggles, Start/Stop, read-only A checkpoint/Continue, original proposal reading, review editing, conflict comparison, confirmation and recovery. Use headings, labeled native controls, visible focus, a skip link and associated errors. Dialogs contain focus, announce target/consequence and return focus to the initiating control. Incoming work/status updates do not steal focus, collapse an active disclosure or reset a draft. Use polite meaningful-status announcements, urgent actionable errors and no recurring elapsed-time announcements. Buttons have approximately 44px touch targets; color contrast must be checked on actual rendered candidate, and status never relies on color alone. Motion is unnecessary; respect reduced motion. English initially; retain unambiguous SGD bakery figures separately from provider-accounting currency and timestamps with displayed time basis.

No executable prototype, app changes, preview launch, installation, provider call, spending or pilot was made by this document. Historical foundation browser/zoom evidence covers its accepted candidate; it does not validate native screens. Text wireframes are discussion evidence only.

| Design acceptance criterion | Future Stage 2.1 evidence |
| --- | --- |
| BYOA-NUI-01 Ready-made roles | New local owner prepares workflow without pairing/runtime launch; unavailable provider/authority is truthful; human-only save still works. |
| BYOA-NUI-02 Exact input | Displayed A snapshot matches sent saved revision; unsaved text excluded. B request binds frozen note and owner-confirmed exact A identity/content hash/epoch; complete A alone cannot dispatch B; partial/unsuitable A blocks B. Actual human fixture/rubric check is recorded separately from automatic structural checks. |
| BYOA-NUI-03 Identity and payer | Requester, role/operator and test company funding visibly distinct; wrong/unfunded company denied; no personal fallback or duplicate provider-compute charge. |
| BYOA-NUI-04 Costs and limits | Total A+B reservation held before inference; concurrent work cannot consume B funding; specific eligibility/authority/deadline/ledger/rate blockers stop B despite held funds; owner wait counts toward the original 240s deadline and only proven-unsent B exposure is released; known/failed/unknown usage and step/task ceilings shown from enforced versioned records; unknown never zero/released by UI. |
| BYOA-NUI-05 Human acceptance | A/B retained originals plus edited selected document; explicit target comparison/confirmation; note unchanged until durable authorized acceptance; A-only partial acceptance clearly distinct. |
| BYOA-NUI-06 Failure and continuity | Stop/expiry/failed B retain completed work; late write denial; restart/new session preserves history without renewed grant or replayed attempt. |
| BYOA-NUI-07 Save/conflict/recovery | Actual interrupted-save and stale-note candidate checks retain drafts, deduplicate receipt recovery and require explicit refreshed-version choice. |
| BYOA-NUI-08 Access and layout | Actual keyboard-only successful/partial/conflict/unknown-funding paths; screen-reader labels/announcements; 360px and 200% zoom no overlap/clipping; implemented colors checked. |

Open choices and owners: user/orchestrator approve revised package and resume separately from live spending allowance; Technical Specialist owns actual route, operator/provider handling, exact numeric limits, reservation/reconciliation behavior and transport snapshots; PM owns fixture/rubric/payer policy; Designer reconciles screens with those settled contracts. Commercial balance/credit units, markup, refund/payment policy and real company administration remain later decisions. Studio worker routing is separate from participant model selection; this assignment requested gpt-6.1-sol / medium / fork_turns none, while actual backend activation is unknown.

Template alignment: design.md's mode/owner/requirements fields and Users and journeys, Design system, Adaptation/access/acceptance core sections are preserved. Added tables and text wireframes make the feature states concrete. No core section is omitted; roadmap status remains solely in ROADMAP.md.






