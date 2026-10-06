<!-- studio {"id":"world:reference:session-rules","scope":"world","type":"document","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"},{"relation":"depends_on","target":"world:reference:agent-owner-rules"}]} -->
# Session rules and timed guest access

A Session is the persistent agreement for a piece of work in one World. Its conversations and authorized outputs survive individual execution runs. Session settings narrow current permissions; they cannot grant resources, cancel owner restrictions or override Universe and World rules. This foundation uses authenticated settings and database enforcement, alongside bounded purpose and output guidance for the model.

Implemented, independently reviewed and accepted for controlled development on2026-10-06. Implementation and acceptance evidence belong to [the Session run](runs/2026-10-06-session-foundation.md). The earlier [proposal](SESSION_RULES_PROPOSAL.md) is historical discussion.

## Controls and defaults [world:req:session-effective-controls]

| Control | Default and boundary |
| --- | --- |
| Purpose and output guidance | Empty; optional, at most 2,000 characters each. Guidance grants no authority and does not permanently change the Agent. |
| State | Open. Paused stops automation but permits currently authorized retained review/manual approval. Closed stops new effects while preserving currently authorized history. |
| Agent and resource subsets | Unrestricted within existing access. An explicit empty list permits none; selecting an ID grants nothing. Each list is bounded to 100 unique IDs. |
| Supported actions | Existing replies, meeting proposals, follow-up drafts and internal-task creation. A subset can only remove operations. |
| Delegation | On, subject to existing relationships, grants and Universe/World/owner bounds. No new Agent creation. |
| Mandatory internal-task approval | Off as an extra floor. Existing approval defaults still apply; this control cannot create a waiver. |
| Cumulative Session budget | Unset, retaining outer limits. Optional ceiling of US$0–4 includes all Session runs, children, retries and uncertain reservations. |
| Execution bounds | Optional stricter ceilings: US$0.50 per run, depth2, six children, two concurrent steps across the Session, three attempts per job and 900 seconds per execution. Existing outer/run limits remain in force. |
| Overall Session work deadline | Unset. When set, stops new work/actions at expiry; it is independent from the per-run execution timer and access windows. |

The Session owner or destination World owner/admin may manage policy only with existing Session access. Being a borrowed Agent's requester, or merely being a member, grants no new settings or waiver authority. Saves use a closed schema, current World authority, expected revision and idempotent request identity. Real changes invalidate subsequent automated execution under old settings; no-op and exact replay do not rotate revisions.

## Time and retained work [world:req:session-time-boundaries]

An execution run has a finite deadline. Its expiry stops further execution, but an already completed proposal can still be reviewed and explicitly approved under current access and constraints. An optional overall Session deadline is stricter and also stops new manual effects. Extending an expired overall deadline or reopening a closed Session cannot revive pending effects from the invalidated period. Fresh authorized work requires fresh execution bindings.

Participation, source consent, destination admission and Session grants have separate access windows. Access requires all applicable conditions to be current. Alternative grants are alternatives, rather than an intersection of unrelated permissions. Starts are inclusive; expiry is exclusive. Time windows do not extend budgets or reset consumed spend. Current permissions still govern retained reads; invalid execution generations do not by themselves erase completed history.

New foreign organization guest consent and admission require finite expiries within the existing 30-day Universe ceiling. Destination World settings default to seven days and a maximum of 30 days; owner/admin can choose a default and maximum between one and 30 days with default no larger than maximum. Existing personal participation may retain its unbounded legacy window. Existing finite Session grants cannot become unbounded.

## Agent from World B visiting World A [world:req:session-guest-admission]

An organization-owned Agent remains owned by B. Its visit to A requires a current source-owner/admin consent, destination-owner/admin admission, and the requester's valid scoped grant. Destination membership or admin status alone does not replace guest consent and the Agent grant. Both Worlds' relevant time limits apply, as do the Agent owner's restrictions and A's local policy.

The first request uses an Agent ID deliberately shared by its owner through the quiet Copy Agent ID control in Identity settings. A's owner/admin verifies only the safe Agent/source identity and admits the visit. B's owner/admin can inspect that outgoing request and consent from B's Permissions page without joining A or reading its private Sessions. Knowing the ID grants no authority. Full Passport sharing and discovery remain deferred.

The source's private configuration, personal memory and unrelated Knowledge are not imported. B's local production workflow does not automatically become A's workflow. Losing the source consent issuer's owner/admin authority revokes their issued guest consent; restoring their role alone does not restore consent. Explicit new consent creates a new access generation. Extension, revocation/restoration and maximum-duration changes cannot revive execution or pending effects with stale guest bindings.

Jing can therefore request work in A from B's Designer for an agreed interval while Designer retains its identity and owner restrictions. Jing approves the exact resulting tasks when approval is required. Designer's owner authorizes the visit, rather than receiving a second approval request for every task.

## Enforcement and flow [world:req:session-runtime-enforcement]

1. Authenticated Session authoring stores a versioned closed policy. Permission forms store scoped, versioned time windows and guest consent.
2. Enqueue binds the requester, World, Agent, Session policy/access generations, closure generation and applicable work deadline. Children and retries retain these immutable bindings.
3. Claim, context retrieval, reservation, completion and effects recheck current authority. Session narrowing applies to fresh Knowledge, cited history, child aggregation and exact effect provenance. User-supplied task text is input, not proof of ownership of a referenced document.
4. A shared Session reservation fence serializes cumulative spending before the existing run/global reservation checks. Actual usage and uncertain holds remain accounted for; settlement remains possible after revocation.
5. Bounded purpose/output guidance is serialized through the existing compiler before provider transmission. It is not a competing permission prompt or an additional model judge.
6. Exact task approval and scoped opt-out use existing protected effect paths. Team effects recheck every contributing Agent, rather than the root alone. Retained reads use current access and source checks without pretending they are new execution. Narrowing resources redacts protected output/citations/proposals/tasks while retaining durable work identity; restoring current access can restore viewing but cannot revive stale execution.

Policy edits lock the Session without updating jobs. Session claim/reservation ordering precedes run/job locks; source membership revocation and guest access use the same membership-to-guest order. A waiting parent does not hold a running lease, so a concurrency ceiling of one can still process children before the parent resumes.

## UI and implementation [world:req:session-ui-and-inventory]

Chat has an optional Session details control, using the existing workspace and dialog primitives. Permissions reuses existing Agent participation/grant forms for access starts/expiry and adds guest admission and World duration settings. No compulsory setup wizard or new navigation shell is introduced. Unsaved conflict edits remain available for correction; stale actor/World responses cannot replace the current workspace.

Application inventory: 14 new files and 16 changed files. Seven new implementation files are the Session domain contract, database repository, workspace request adapter, three UI patterns (Session details, access windows, World guest duration) and migration031. Seven new verification files are three unit/UI suites and four protected integration scripts/helpers. Existing controller/API/worker compiler/collaboration and UI wiring are extended rather than duplicated; two existing test suites and the migration reconstruction harness are updated. Administrative changes are root AGENTS.md and the immutable-migration Git attribute. No extra service or model judge is introduced.

Migration031 adds seven private control/receipt/serialization tables, time-window columns on existing participation/grants and immutable Session/guest capture fields on existing jobs. Ordinary caller and worker roles cannot directly access those private tables. Protected authoring and existing worker/action functions mediate every operation. Installed migration bytes remain immutable. Actual runtime acceptance and delivery evidence are recorded in the run; source review alone does not establish database behavior.

Acceptance:199tests/36files, type/full lint, independent contract/source/UI review, actual protected rollback proof, all31 migration reconstruction/actual compiler, installed concurrency with the real restricted worker login, authenticated API plus exact fixture cleanup/ledger checks and read-only live Session defaults all passed. No paid provider calls. The updated standard restricted worker is restored for the user's existing testing authority under the unchanged cumulativeUS$4 ceiling. Full three-metric provider benchmarking remains unmeasured below.

## Three metrics and remaining scope [world:req:session-measurement-limits]

| Metric | What this foundation can establish |
| --- | --- |
| Output accuracy % | Permission/source/approval fixtures verify deterministic correctness. They do not measure semantic task accuracy or guarantee compliance with prose. |
| End-to-end latency | Protected checks add database work. Real request-to-final-output timing across queueing, delegation and retries still needs representative workflow measurement. |
| Token and cost efficiency | No extra model policy call is added. Optional guidance adds bounded context; cumulative limits account for all provider work and uncertainty. Real token savings and cost improvements remain unmeasured. |

No paid calls are authorized for this verification run. The existing cumulative US$4 testing ceiling is unchanged. Full Passport interoperability, external runtimes/actions, arbitrary enterprise harness authoring, automatic learning/portable memory, IFTTT scheduling, production and representative paid benchmarks remain deferred. Already transmitted provider context cannot be recalled; completed effects are not undone by later rule changes.
