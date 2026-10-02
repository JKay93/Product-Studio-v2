<!-- studio {"id":"byoa-world:technical-context:workspace-revision","scope":"byoa-world","type":"technical-context","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:world-foundation"},{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"},{"relation":"requires","target":"byoa-world:decision:ink-clay-visual-direction"},{"relation":"requires","target":"byoa-world:decision:native-package-offline-delivery"}]} -->
# Technical context: Chat, Work, Knowledge and Incubator workspace

**Latest scope correction, 2026-10-02:** user approved the visual/navigation concept but limited the initial hierarchy to orchestrator → direct sub-agents. Descendant configurations, recursive delegation and WSR-05 nested execution are deferred. The depth2/count4 proposals below are unselected historical options, not initial implementation requirements. First-shell agent inspection must omit supporting descendants; configured direct relationships still confer no execution permissions. Live and spending holds continue.

- Technical Specialist owner: workspace Technical Specialist; orchestrator owns package reconciliation and acceptance.
- Last material update: 2026-10-02, revision 1; read-only inspection of the local application public interfaces and linked delivery records. No candidate implementation or new verification is claimed.
- Requirements and decisions: [CONTRACT](../CONTRACT.md), latest workspace direction in [STATE](../STATE.md), [ROADMAP](../ROADMAP.md) BYOA-WKD-08/09/06 and BYOA-WRK-02/03/04/07, Decisions [002](../decisions/002-world-foundation.md), [004](../decisions/004-native-agents-company-funding.md), [005](../decisions/005-ink-clay-visual-direction.md) and [006](../decisions/006-native-package-offline-delivery.md), and [modularity](MODULARITY.md).
- Authority: this is a proposed workspace/technical delta for review. It does not expand Decision 006 into arbitrary teams, nested execution or live permission. No application changes, installations, credentials, provider/authentication preflight, calls, spending, pilot, original-store migration or publication are part of this task.
- Template alignment: [technical-context](../../../operating-system/templates/technical-context.md) core structure is retained: owner/revision/requirements here; observed architecture/data/runtime/security/load below; proposed target/dependencies/sequence/migration/rollback under planned state; decisions/debt/unknowns/source evidence in the final section. Frozen native-package documents remain unchanged; their dated statements are interpreted through Decision 006 and the later workspace direction.

## Current state — observed

### Architecture and component responsibilities

The accepted React/TypeScript/Vite + Node/SQLite human foundation remains the base. The local Stage 2.1 native candidate adds two fixed planners, exact A-to-B handoff with owner confirmation, retained proposals, explicit human acceptance and synthetic usage controls. Its technical review is reuse evidence for that candidate, not user acceptance of the current presentation or proof of live native capability. [Delivery evidence](../runs/stage21-native-delivery.md) records the actual candidate and remaining checks.

Application paths below are relative to sibling `BYOA-World/`, the selected application repository; they identify inspected sources, not authorized changes in this planning task.

| Public source / component | Observed responsibility | Reuse and boundary |
| --- | --- | --- |
| `src/features/worlds/workspace/index.ts` → `WorldService` | Owner-scoped list/get/create/rename, persistent World IDs and revisions | Keep World authority; navigation must never substitute display selection for server ownership |
| `src/features/resources/planning-note/index.ts` → `PlanningNoteService` | One note per World, explicit create/save, expected revision and validation | Keep exact save/conflict/recovery semantics; multiple resources require a new contract rather than relabelling this singleton |
| `src/features/agents/connection/index.ts` | Fixed A/B role descriptors; capability verification binds World/Session/participant/runtime/operator/epoch/time/actions and exact note identity/revision/hash | Reuse descriptors and denial concepts; not a configurable team registry or general delegation verifier |
| `src/features/work/session/index.ts` → `NativeWork` | Prepare/start/claim/result/continue/stop/restart/edit/accept; exact A checkpoint, retained proposals and idempotent commands | Preserve fixed-pair execution; expose read models through the feature public entry. Do not make shell/tree a scheduler |
| `src/features/work/usage/index.ts` | Company-test funding, aggregate held/settled exposure, one active task, unknown holds, synthetic settlement | Reuse invariants; current fixed-price/fixed-two-step state is not real company billing or a general reservation tree |
| `src/features/collaboration/document-review/index.ts` | A/B structural eligibility | Preserve checks for the approved fixture; keywords do not establish semantic correctness for arbitrary roles |
| `src/shared/contracts/foundation.ts`, `native.ts` | World/note and versioned native envelope/result identities | Native `Role` is A/B; one `Snapshot`, optional exact A dependency and pinned model. A general configuration/resource/run contract needs a separately approved additive version |
| `src/app/foundation/{shell.tsx,client.ts,server.ts}` | Composition, owner API client and HTTP routes | Shell composes feature UI and manages navigation; do not place configuration, accounting or delegation domain logic here |
| `src/platform/local-owner/index.ts`, SQLite adapters | Loopback/owner cookie/CSRF boundary; persisted feature ports and transactions | Preserve local owner boundary and copied-store verification. Local demo identity is not multi-employee authorization |
| `runtime-workers/native/index.ts` | Separate protocol worker, exclusive one-shot journal and injected transport | Keep provider/runtime dependency separation; sample hierarchy must not invoke this worker |

### Data flow, storage and integrations

Human writes flow through owner API → World/note services → SQLite. Work snapshots a saved note; A's exact retained contribution becomes B's dependency only after the owner checkpoint. Proposal acceptance uses the current expected note revision and atomic persistence port. Owner review after completion/restart does not revive agent access. Navigation changes must retain dirty drafts and distinguish known conflicts from uncertain acknowledgements; human edits do not redispatch inference.

The current native envelope already records World, Session, participant, runtime, operator, funding account, allowance, work, attempt, epoch, source/dependency hashes and template revision. These are actual task records. They do not establish persistent configured-agent identity, parent-child links, arbitrary tool access or multi-resource retrieval. Configuration relationships and executed task participants need separate records and separate projections.

Preserve original `.data/`, `.phase1/`, `.foundation/`, saved work, canonical notes and original control/accounting histories. Historical external Codex evidence and the original cumulative Claude allowance retain their identities and uncertainty; no new workspace, configuration version or run resets them or silently imports them into a new ledger.

### Runtime, infrastructure and operational limits

The native `start` method rejects live execution. Current fixed pair permits one task at a time and synthetic accounting; a disabled adapter or worker transport test does not prove two real agents. The approved server-pinned Haiku model remains a fixed execution detail, not a user-selectable model catalogue. Sample orchestrator and other sample nodes have **configuration example / not connected** status, with no verified runtime/model entitlement, no online claim and no dispatch control.

The delivery record leaves Windows directory-fsync/power-loss durability and real streaming transport limits unresolved before live execution. Actual native zoom, forced colours, screen reader and complete keyboard checks remain partially unverified. Those limits carry forward; new shell screenshots do not settle them.

### Security, privacy and access boundaries

Role descriptions and hierarchy edges are configuration data, not grants. Even a role called orchestrator has no automatic authority to create runtime participants, copy knowledge, invoke tools, accept documents or change funding. The owner cookie and machine capability remain separate; tree selection, prompt instructions and claimed identity cannot confer server access. Private company resources, personal agent memory, external sources, multi-tenant identity and provider retention assurance remain outside the current fictional-only prototype.

### Observability, expected load and bottlenecks

The current local owner, small note and single fixed task imply modest prototype load; there is no throughput claim. Keep transactions short and provider/network work outside database locks. Display configuration state, runtime readiness, execution state and usage provenance separately. Retained attempt/envelope identities and immutable originals support attribution; new navigation must not duplicate dispatches or settlements. A large tree is primarily a navigation concern until actual bounded concurrency is selected.

## Planned state — not yet implemented

### Proposed changes and target outcomes

The target is a useful workspace where an owner can eventually create a versioned team, select reusable resources, converse with it and approve attributable task results. A shell-only slice is an incremental delivery, not completion of that target. The hierarchy has two distinct meanings:

1. **Configured team:** agent identities, role/instructions, allowed delegation relationships and requested runtime/knowledge/tool/budget settings. A sample configuration is explicitly separate from a saved owner-created team.
2. **Actual work:** task-specific participants/attempts and parent/delegation events that actually happened under server-issued scope. A configured descendant absent from a task is shown as not involved, never fabricated as an execution.

| Workspace area | First bounded shell delivery proposed | Subsequent real capability |
| --- | --- | --- |
| Chat | Honest empty/not connected view, no fake response or send that starts work | Persisted conversations/messages with attribution, explicit context attachment and owner-confirmed task creation; model-backed replies require separate live authority |
| Work | Existing fixed A/B task, checkpoint, outputs, stop, usage, review/history and acceptance through existing public interfaces | Tasks bind selected immutable team/config versions and exact resource revisions; later constrained delegated attempts remain attributable |
| Knowledge | Existing planning note as one real saved resource; existing editor/save/conflict/recovery retained | Multiple versioned native text resources, owner discovery and explicit context selection; integrations/private sources remain later readiness work |
| Incubator | Accessible tree/list plus selected-agent read-only details; clearly labelled proposed sample orchestrator and descendants; approved fixed planners identified | Persisted create/edit/version/retire agent and team configurations; creation precedes and does not imply permission to execute recursively |

The first sample hierarchy may use Designer's Mira orchestrator, A/B planners and illustrative Knowledge curator descendants. Only A/B describe the current executable synthetic sample. For unimplemented nodes, details say **not connected / sample configuration** and explain future creation; do not show real tools, live readiness, verified model or fabricated execution. A/B detail must distinguish configured role/pinned worker from per-task participant, exact disclosed source and effective grant. Display operator/company-test payer/test limits honestly. The knowledge curator is not granted all World content by its name.

### Concrete module and public-interface plan

New feature paths below are proposals, to be created only within an approved bounded assignment. `index.ts` and feature UI entry points expose contracts; cross-feature consumers must not import internal repositories/services.

| Owner/module proposal | Public interface / dependency | Delivery impact |
| --- | --- | --- |
| Existing World workspace UI + thin `app/foundation` composition | Selected World + area + selected configured agent; navigation through existing unsaved/conflict/recovery guard | First slice: compose four destinations, tree/list and detail; route selection must not mutate World stores or start work |
| `features/agents/configuration` | Read-only `list/get` sample definitions initially; later owner `create/saveVersion/retire`, team `saveVersion` | Keep sample registry separate from native role/execution state. Public read model yields provenance, config version and readiness; no capability tokens or secrets |
| Existing `agents/connection` | Runtime binding/readiness and future authenticated capability issue/revoke through public ports | Configuration requests runtime binding; only connection policy confirms it. Current pinned A/B remain the first execution adapter |
| `features/conversations/chat` | Owner `create/list/get/append`, expected conversation version/command key; message actor and resource/config references | Durable human conversation slice first; explicit reviewed task request uses work port. Saving chat alone never starts a provider call |
| New resource collection feature, preserving `resources/planning-note` | `list/get/create/saveRevision`; owner authorization and immutable selected-resource manifest | Add native resources without breaking singleton planning-note APIs/IDs. Keep legacy planning note addressable as an existing resource |
| Existing `work/session`, `work/usage`, review features | Later `prepare` binds team version, config versions, manifest and policy; attempts reserve through aggregate usage port | Do not generalize existing A/B method signatures casually. Specify an additive contract and adapter while retaining approved fixed fixture |
| `platform/sqlite` adapters | Named transaction/repository ports for conversations, config versions, resources and later attempt lineage | Additive schema versions; migrations only on copies until explicitly authorized original-store use; no runtime/provider dependencies |
| Versioned shared wire contract + runtime worker | Envelope contains immutable bindings and precise grants; worker only consumes wire types | Retain fixed model now. Any later runtime/model extension is separately selected and verified, never an arbitrary browser selector |

Do not extract unrelated shell code merely to satisfy this table. Compose current feature-owned UI; add only ports required by the selected slice. Boundary checks should prohibit feature deep imports, worker imports of feature internals, provider dependencies in browser/World, and cycles.

### Configuration and delegation contracts to settle before nested execution

**Configuration lifecycle.** Store stable `agentId`, immutable `configVersionId`, name, role/instructions, operator/runtime profile reference, requested knowledge/tool policy and numeric limits; team versions store root and approved parent-child relationships. Validate duplicate IDs, cycles, depth and missing references. Draft/save, active selection and retirement are separate states. Save with expected version plus idempotency key; stale edits conflict and retain draft. Saved versions are immutable; editing creates a successor. A task binds exact team/config versions and hashes. Later edits/retirement do not rewrite historical runs or silently alter an active task; retirement blocks new starts. Configuration cannot contain provider keys or claim runtime entitlement.

**Effective grant.** Runtime admission derives a per-attempt capability from authenticated actor and owner-approved task scope: World/Session/task/participant/runtime/operator, attempt and parent-attempt identity, explicit resource IDs/revisions/hashes, allowed actions, exact handoff recipient/dependency, expiry/deadline and revocation epoch. A configuration's requested access is an upper bound input to policy, not an effective grant. Parent-child links automatically grant nothing. Child scope must be independently authorized and no broader than the parent's delegable task scope; narrowing is allowed. Resource text/prompt injection, role names and self-declared capability cannot enlarge it. Current note-only `Capability` does not implement this multi-resource/delegation contract; do not claim it does.

**Bounded scheduling proposal.** First generalized offline delegation slice should cap depth at **2 edges from root** and concurrency at **1 in-flight attempt per company-test account across all Worlds/branches**, with a finite admitted attempt count (recommend **4 per task**), fixed runtime/model and no automatic retries. These numbers are proposed policy for approval, not current capability. Initially admit the complete bounded task plan before dispatch; any later dynamic child request requires another transaction that checks remaining task attempt/depth/time/scope limits and company exposure. Reject unknown nodes, cycles, excess depth/count/concurrency and delegation outside the allowlist. No unbounded recursive spawn or self-expansion.

**Funding.** Every descendant binds the same approved company funding route unless the owner explicitly chooses another authorized company route; no employee personal fallback. Atomically reserve account/task/attempt exposure before any dispatch, including sibling/descendant plans. Child reservations subdivide or add to a known aggregate without double-counting the same held amount. Across Worlds, concurrent admission must observe all held, settled and unknown exposure. Budget cannot reset at a child, config edit, Session restart or new chat. Unknown/missing usage stays held, proven-unsent reservations alone release, and idempotent receipts/reconciliation preserve original facts. Real company administration, invoice billing and payment remain separate readiness work.

**Stop/revocation and attribution.** A root stop transaction closes descendant admission, invalidates effective epochs for all active descendants and blocks late content; dispatch/commit races have a single transactional order. A child stop closes its subtree; no automatic replacement attempt. Abort delivery is best effort, not proof of remote cancellation, forgotten context or refund. Restart marks ambiguous dispatches unknown and cannot renew grants. Record configured agent/config/team version separately from actual participant/runtime/operator, parent attempt/delegation event, source/dependency manifest, output digest, funding reservation and receipt provenance. Reconciliation may settle cost without accepting late content. Human review/acceptance remains the sole path to canonical resources and uses current expected target revision.

### Dependencies, sequence, compatibility and rollback

These are bounded proposals linked to ROADMAP, not a second milestone-status ledger. Each implementation starts only after the coherent selected package is agreed. Live hold remains independent throughout.

| Proposed bounded assignment | Outcome and deliberately deferred work | Entry / exit evidence |
| --- | --- | --- |
| WSR-01 shell + read-only configuration projection | Functional World switching and four destinations; real existing Work and note editor; accessible sample hierarchy/list/details. Chat empty; creation disabled/explained; no new dispatch or schema | WKD-08 selected design/technical delta; actual browser journey, preservation, public boundaries and native/foundation affected regressions |
| WSR-02 persistent conversations | Owner-created, saved/reopened conversations, actor attribution, selected resource/config references and explicit pending task request | WKD-06 selection; idempotent append/conflict/restart tests. Provider reply/dispatch excluded unless separately approved |
| WSR-03 multi-resource native Knowledge | Create/list/edit/reopen multiple text resources; explicit task-context manifest and current revision conflicts | WKD-03 + selected WRK-02 contracts; copied-store preservation and cross-resource/World denial. No private/external connector |
| WSR-04 versioned agent/team creation | Real Incubator create/edit/save/retire, validated hierarchy and requested scopes; selected versions retained after restart | WKD-09 policy/config contracts agreed; conflict/cycle/depth/scope/version checks. Configuration cannot trigger nested execution |
| WSR-05 bounded configurable-team execution offline | Bind a real saved team to task, authorize narrower descendants, aggregate reservations, stop subtree/root, exact handoffs and human acceptance; injected synthetic transport | WSR-03/04 contracts + selected WRK-03/04/07 scope; independent review of denial/race/funding/version evidence. Real inference still held |
| WSR-06 separately authorized real demonstration | Only the exact approved bounded route/task/funding envelope; identify genuinely executed agents and measured/reported/unknown usage | Explicit new run/account/allowance authority and current route evidence; live blockers resolved. No automatic retry, arbitrary models or resumed weekly pilot |

WSR-01 can be the first presentation correction within the reopened Stage 2 workspace package. WSR-02–05 implement the selected Stage 3 ongoing-work/configuration package, so they must not be represented as incidental styling under Decision 006. Resource and configuration interfaces should be settled together before connecting conversations to task context; only nonoverlapping UI/domain work can then proceed in parallel. The fixed approved bakery flow remains a regression adapter rather than silently becoming the general scheduler.

First shell delivery requires no schema migration. Later additions require inventory and consistent closed-store backup, supported-version checks, additive transactional migrations tested on copied databases, original World/note/version/owner and control-ledger preservation, and failure rollback without partial writes. Never import or alter historical evidence automatically. Keep a schema-compatible human-only fallback that disables new configuration dispatch and preserves newer writes/history; no downgrade/reset/backup replacement without separate authority and reconciliation.

### Meaningful checks and review bundle

The coherent approval bundle should contain Designer's screens/states, PM's selected first-slice requirements and exclusions, this technical delta/public contracts, stable source revisions and an acceptance matrix. It should explicitly choose first-shell scope versus the subsequent configuration/execution increments, sample labels, navigation draft handling and fixed-model/live boundary. Design approval and implementation authority should be recorded accurately; one relevant independent reviewer checks the actual bounded candidate after builder verification. No frozen native document is rewritten to imply approval of the new scope.

| Verification focus | Evidence needed for the selected candidate |
| --- | --- |
| Shell and truthful state | Keyboard/list selection equals tree selection; narrow viewports and actual zoom legibility; sample vs saved configuration vs actual participants; unimplemented send/create cannot dispatch; operator/test funding/unknown status remain explicit |
| Accepted human behavior | Dirty note/review draft survives area/World navigation gate; explicit save, known conflict, uncertain recovery and owner-only acceptance preserve revisions; reopened canonical state is current after acceptance |
| Fixed native reuse | Exact retained A is B's input only after owner checkpoint; duplicate continuation does not dispatch twice; A/B partial/failure/restart/history/stop states and test usage remain usable through new shell |
| Later conversations/resources | Idempotent messages, interrupted append and stale revision recovery; resource discovery is owner-scoped; selected manifests use exact saved revisions; unselected-resource and cross-World canaries denied |
| Later configurations | Save/reopen/version/conflict/retire; reject cycles, missing references and policy excess; active task remains bound to old config; sample node never becomes execution because of UI selection |
| Later delegation/funding | Parent-child links grant nothing; attempted escalation denied; depth/count/account-wide concurrency enforced under race; sibling admission cannot overspend; stop/commit and restart races retain unknown holds; no implicit retry or personal funds |
| Attribution and acceptance | Every descendant contribution links actual participant/attempt/config/operator/source/dependency; duplicate result settles once, conflicting identity quarantines; revoked late content cannot write; owner acceptance remains atomic and stale targets conflict |
| Preservation and module boundary | Copied-store migrations/fault rollback plus unchanged historical identities/data/control ledger; compatible feature-off fallback; provider secrets/dependencies absent from browser/World and tree read models |

Reuse unaffected evidence; rerun changed shell/integration and selected domain checks. Build/typecheck and boundary checks support the actual candidate, not this planning document. Any synthetic nested execution check is labelled synthetic and does not satisfy a real demonstration.

## Decisions and risks

### Existing decisions, accepted debt and fragile areas

Decision 002 retains human save/conflict/recovery, stack and preservation. Decision 004 retains native-first/company-funded work and runtime-neutral scoped contracts. Decision 005 governs restrained Ink Clay presentation, separate from authority/status semantics. Decision 006 approves the specific fixed native package and offline delivery, not an unrestricted Incubator. The latest workspace direction authorizes this planning and roadmap revision. Broad team configuration and nested execution need concrete selected scope; a read-only sample tree must never be counted as finished agent creation.

Current fixed A/B state/eligibility/accounting constants are deliberately narrow. Generalizing them is substantive behavior and protocol/schema work; avoid duplicating a parallel unchecked ledger or routing arbitrary instructions into an approved fixed worker. Current local-owner identity, same-account process separation, provider retention gaps and fictional-only boundaries remain accepted prototype limits until readiness is demonstrated.

### Unknowns, investigation owner and evidence needed

| Open choice / risk | Owner / evidence to resolve |
| --- | --- |
| Which first workspace slice is approved; which next configurable-team workflow matters? | User/PM/orchestrator; coherent review bundle and recorded selection, with route to real creation/execution retained |
| Chat means human conversation, model reply, task command or combination | PM/Designer; explicit persistence, send and confirmation semantics; Technical Specialist binds selected operations to grants/accounting |
| Resource lifecycle, config retirement, team selection and permissible tools | PM/Technical Specialist/Designer; selected PRD/public contracts; no guessed general tool catalogue or private-source import |
| Delegation ceilings and company account policy | User/Technical Specialist; adopt/revise depth 2, count 4, concurrency 1 proposal; race and aggregate-reservation evidence before enabling execution |
| Live native transport/durability and actual accessibility gaps | Builder/reviewer; resolve delivery-record blockers against the actual changed candidate; separate authority before provider/account access |
| Real SME identity/data/funding readiness | Later selected readiness owners; demonstrated tenancy, service isolation, retention and company payer controls before paid/private work |

### Sources for material technical claims

Observed source claims derive from the public application entries/contracts listed above and their exported World/note service methods, owner API client and worker entry. Delivery limitations derive from [Stage 2.1 delivery](../runs/stage21-native-delivery.md). Governing source context is [native package](STAGE-2-NATIVE-PACKAGE.md) and [native technical plan](STAGE-2-NATIVE-PARTICIPATION-PLAN.md), interpreted through Decisions 002/004/005/006 and latest CONTRACT/STATE/ROADMAP. This record does not newly verify provider availability, rates or account entitlement and makes no fresh internet/provider claim; those remain conditional future evidence.
