<!-- studio {"id":"world:reference:agent-owner-rules","scope":"world","type":"document","status":"approved","links":[{"relation":"requires","target":"world:req:agent-owner-controls"},{"relation":"requires","target":"world:req:policy-change-timing"}]} -->
# Agent owner controls and conflict rules

## Ownership and scope [world:req:agent-owner-boundary]

An Agent keeps its owner's restrictions wherever it works. A personal owner controls their personal Agent; an organization Agent is controlled by its owning World's authorized owner/admin. Another World's administrator cannot rewrite a personal Agent's restrictions, instructions or memory. Permission to use an Agent never grants permission to change its owner settings.

Working guidance, enforced restrictions and personal memory remain distinct. Tone, preferred methods and task instructions guide the model. Supported permission restrictions are enforced through server checks. Learning, reference documents and imported prose cannot silently modify those restrictions. This slice implements the restriction controls; complete Self guidance composition, learning and imports remain separate work.

## First controls [world:req:agent-owner-first-controls]

| Control | Default and scope | Effect |
| --- | --- | --- |
| Allow others to use my Agent | Existing owner consent for each World, plus separately scoped grants | Reuse current participation/sharing controls. No new global sharing switch or automatic grant. |
| Allow my Agent to delegate | On, Agent-wide | Off prevents this Agent from handing work to children. It may still receive work as a leaf under valid consent/grants. Saved relationships remain. |
| Always require internal task approval | Off, Agent-wide additional floor | On requires exact human approval even where a scoped waiver exists. Off preserves individual required-approval defaults and valid explicit exceptions; it is not an automatic-action waiver. |

World and Agent approval floors combine restrictively. A team proposal inherits the approval floor of contributing Agents so an orchestrator cannot bypass a child's requirement through aggregation. The current action is internal-task creation; unsupported external actions cannot be enabled by authoring a rule.

## Approval and privacy [world:req:agent-owner-approval]

The authorized person requesting work approves the exact proposed action. The Agent owner's consent governs whether that requester may use the Agent; it does not require the owner to approve every colleague task. A separate personal-owner approval queue is deferred. Manual approval still checks current actor, World, Session, Agent/grant and source authority plus exact action revision/digest.

Owners manage private owner policy values. Participants may see an effective approval requirement for permitted work without access to another owner's unrelated private configuration, memory or policy editor. Organization review remains limited to authorized organizational work and effective applicable rules.

## Conflicts [world:req:agent-owner-conflicts]

| Situation | Result |
| --- | --- |
| World permits delegation but a parent Agent prohibits it | That Agent cannot delegate. |
| Parent Agent permits delegation but World prohibits it | Team execution blocked. |
| A leaf prohibits delegation | Receiving a task is allowed only through current consent/grants; outgoing delegation remains prohibited. |
| Owner permits sharing but World prohibits borrowed personal Agents | Borrowed use blocked; grant records remain. |
| Either World or a contributing Agent requires internal-task approval | Exact authorized-requester approval required, regardless of a scoped waiver. |
| All added approval floors are off | Existing individual approval choices still apply; approval remains required by default. |
| Session or imported document requests removal of a restriction | No authority to edit an owner's enforced policy. |
| Agent prefers informal language but Session requests a formal report | Guidance adapts for that task; owner identity and stored preference remain unchanged. Full guidance composition is outside this implementation slice. |

## Policy changes and execution [world:req:agent-owner-change-mechanics]

Use an independent monotonic Agent policy revision. Root and child jobs capture it at creation; retry must preserve that original binding. A real owner change cannot be undone by switching the values back, and later execution must reject stale job policy. Exact replay/no-op must not manufacture another revision or repeated effect. Completed effects retain their history; retained reads and exact manual approval remain subject to current permissions rather than re-executing an old job.

The accepted implementation serializes through the existing Agent identity row and avoids rotating every participating World's authority. That keeps a private Agent policy change from requiring broad cross-World writes. Personal owner changes lock that Agent; organization changes lock the owning World then Agent and recheck current management authority. Job insertion captures the revision under a shared Agent lock; nested team checks lock participating Agents in stable order after existing World/run/job locks. A transaction that already holds the shared lock can complete its protected action before a settings change takes effect; subsequent actions must satisfy the new revision.

The scoped approval display separates a root owner requirement from a prospective linked-team requirement. A linked child's requirement cannot disable a valid standalone waiver for the parent. An unavailable descendant makes prospective team policy lookup fail closed before any private values are read. Actual team effects use the frozen set of contributing Agents, not unused edges in today's graph.

## Acceptance and metrics [world:req:agent-owner-verification]

Verify owner versus other-user/admin writes and privacy, defaults, World/owner conflict combinations, root/leaf/nested-parent delegation, current approval floors and manual effects, cross-World revision races, exact saves/replays, stale off/on/retry/late results, retained reads and unchanged grants/budget. Reuse existing Agent settings and authenticated adapters with keyboard labels and safe Agent/World switching.

The combined harness metrics remain Output Accuracy %, end-to-end latency and token/cost efficiency. Deterministic policy checks require no extra model judge. Actual semantic accuracy, complete request-to-root timing and realized cost savings need representative tasks and complete measurements; permission tests alone cannot establish them.

## Implementation and verification [world:req:agent-owner-implementation]

Accepted for controlled development on2026-10-06. Agents > Manage Agent > Identity contains Owner restrictions for the personal owner or owning organization's authorized manager. The private editor is hidden for unowned/read-only Agents. It reuses existing form, confirmation, error/retry and workspace refresh patterns; a keyed Agent/World card prevents pending requests from replacing another Agent's values. Manage World sharing links to the existing participation/grant controls.

The closed client-safe `owner-v1` contract lives in `src/modules/agent-owner-policy/index.ts`, with dedicated caller-JWT database/request adapters and the existing authenticated agent-work API/controller. Additive030 creates private owner policy/request receipts and an immutable owner policy revision on jobs. A trigger covers root and direct child inserts, while current execution, team start, retries and automatic effects enforce snapshots/restrictions. Original private implementation helpers remain revoked; worker access is unchanged. Existing sharing grants, relationships, stored scoped waivers and exact requester effect receipts remain intact. Historical job revision0 is valid until the Agent's first real policy change.

Application inventory:10 new and13 modified files,23 total. Fourteen contain runtime changes:five new (contract, database adapter, request adapter, settings card and SQL030) andnine modified (controller/API, collaboration contract/UI and existing Agent/workspace UI wiring). Seven are verification files:five new (two unit/UI files and three integration proofs), two modified. Project instructions and migration byte configuration account for the other two. Worker, provider and context compiler source files are unchanged.

Verification passed:182tests across33files, Builder30affectedtests across6files/typecheck/full lint, independent14tests across4files and final source/hash review. Actual rollback caller/worker proof covered private owner/org authorization, defaults/CAS/replay, cross-World root/child snapshots, current worker claim/check/context/finish/retry, outgoing parents versus receiving leaves, World/owner floors, standalone waiver versus team manual approval, retained effects and preserved grants/graphs/budget. Two-connection enqueue/settings barriers, all30 migrations reconstructed in an isolated rollback schema, and authenticated local owner/admin/member/origin/no-store/API checks passed. A read-only browser check confirmed the live owner form/defaults under an organization Agent's Identity settings; no real settings or messages were changed. Physical mobile keyboard and responsive viewport testing remain unverified for this slice.

No paid model calls were made. Final committed/held ledger remains320,952microUSD including228,000uncertain held and92,952known actual accounting, below the unchanged cumulativeUS$4 ceiling; it includes prior synthetic reservations and is not a provider invoice. There is no measured model-accuracy improvement, full request-to-root latency result or realized cost saving for this slice. Server checks add database work without an extra model call or a changed provider prompt.

Complete Self working-guidance composition, automatic learning/import, a personal-owner approval queue, broader policy resolution, external tools, enterprise authoring and Phase8 remain deferred. Exact hashes, execution receipts and repository delivery are in the [run record](runs/2026-10-06-agent-owner-foundation.md).
