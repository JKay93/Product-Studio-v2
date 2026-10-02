<!-- studio {"id":"byoa-world:technical-specification:agent-configuration-slice","scope":"byoa-world","type":"technical-specification","status":"superseded","links":[{"relation":"implements","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:default-and-user-built-agents"},{"relation":"requires","target":"byoa-world:technical-context:workspace-revision"}]} -->
# Technical specification: saved agent definitions

**Superseded for future design by [Decision 008](../decisions/008-account-agents-world-experience.md), 2026-10-03.** World-owned definitions and one orchestrator per World describe the delivered historical slice; they are not constraints on the new account-owned agent model. Retain this specification and its evidence for reuse. A replacement implementation design has not been selected or coded.

- Technical Specialist owner: assigned configuration Technical Specialist; orchestrator owns reconciliation and acceptance.
- Last material update: 2026-10-02.
- Requirements/context: CONTRACT, STATE, ROADMAP BYOA-WKD-09 / selected BYOA-WRK-07 increment, Decision 007 and WORKSPACE-REVISION. Latest user instruction reported in the bounded assignment: build these agents now, keep it simple, future Universe harness later. That instruction supplies local configuration implementation authority beyond Decision 007's original recording-only boundary; orchestrator records its exact authority separately.
- State: implementation contract, not delivery evidence. Orchestrator/Researcher/Planner/Reviewer are the stated starter assumption for this slice, not a universal frozen catalogue.
- Template alignment: technical-specification core sections retained below. technical-context observed architecture/data/security and planned target/migration content is condensed into the first two sections; its decisions/risks map to Verification and readiness. A second context document would duplicate WORKSPACE-REVISION.

## Interfaces and behavior

### Observed base and source boundaries

Application paths are relative to sibling `BYOA-World/`. `src/app/foundation/server.ts` composes `WorldService`, `PlanningNoteService`, `LocalOwner`, `SQLiteFoundation` and the existing optional fixed-pair native work. Owner routes require `LocalOwner.authorize(req, mutation)`; mutation bodies use bounded `parseBody`, reject client identity, and use structured FoundationError responses. `client.ts` supplies same-origin cookie/CSRF requests and uncertain-response handling. Preserve those boundaries.

`src/platform/sqlite/foundation.ts` strictly validates its supported schema and owns Worlds, note history, commands and native state. Do not add configuration tables to that database or call a new original-store migration. The shell currently imports Incubator through `src/features/agents/incubator/ui/index.ts`; no saved configuration public entry exists yet. The shell owns World/area navigation and its existing note/name dirty guard; configuration must join that guard. WorkPanel retains its existing independent proposal safeguards.

| New component | Responsibility / public boundary |
| --- | --- |
| `src/features/agents/configuration/index.ts` | Export wire/read types, service and repository port; validate fields and apply owner/World rules. Consumers use this entry, never feature internals. |
| `src/platform/sqlite/configuration.ts` | Sidecar schema, immutable revisions, atomic commands and one-orchestrator constraint; implements feature port. No provider, worker or native-ledger import. |
| Existing Incubator UI public entry | Saved list, direct hierarchy, create/edit form, provenance and honest configuration-only status. Existing fixed A/B descriptors remain separately labelled Work demonstration agents. |
| `app/foundation/{server,client,shell}` | Thin composition, routes and navigation. Inject World authorization and repository; avoid domain validation in the shell. |

### Model and invariants

`AgentDefinition` is a World-scoped identity with a current immutable version. Persist at least:

| Field | Contract |
| --- | --- |
| `agentId`, `worldId` | Server-generated stable identity; World must exist and belong to the authenticated local owner. |
| `revision`, `configVersionId` | Revision starts at 1; edit appends revision+1 with a new opaque version ID. Old version content remains immutable. |
| `name`, `role`, `purpose`, `instructions` | Editable plain text; name 1–80, role 1–80, purpose 1–1000, instructions 1–12000 characters after validation; reject blank/invalid types, unknown fields and oversized requests. Role is descriptive text, not a capability. |
| `kind` | `orchestrator` or `specialist`. Fixed on creation; one orchestrator maximum per World, enforced transactionally and by a unique partial SQLite index. Specialists are direct children of the World orchestrator in the projection; store no arbitrary parent ID or descendants. |
| `origin` | `byoa-template` or `user-created`, server derived from a recognized template or direct creation. |
| `templateId`, `templateRevision` | Nullable immutable provenance. Starter copies pin a catalogue revision; editing a copy never changes its origin and never edits the shared template. |
| `creatorId`, `createdAt`, `updatedAt` | Server-controlled local-owner provenance and timestamps. User is creator of the saved copy; BYOA is template author. |
| `readiness` | Derived read value `configuration-only`; no runtime binding, entitlement or connection is implied. |

Suggested physical tables: `agent_definitions(ownerId, worldId, agentId, kind, currentRevision, origin, templateId, templateRevision, creatorId, createdAt)`, `agent_versions(agentId, revision, configVersionId, name, role, purpose, instructions, updatedAt)`, `agent_commands(ownerId, worldId, commandKey, kind, canonicalPayload, result)`. Use foreign keys within the sidecar and a unique `(ownerId, worldId)` index where kind is orchestrator. Sidecar World references are validated via the existing World service before every operation; there is no cross-database foreign-key claim. Local World deletion is not a delivered feature.

There is no team-version or scheduler table in this slice. Default initialization atomically creates four editable copies: one orchestrator and three specialists. Direct creation adds a specialist; it requires an existing orchestrator. The empty World uses explicit initialization, avoiding two competing paths to create the root. Replacement for now means editing a saved copy or adding a user specialist; task-team selection/replacement semantics remain later work. No retire/delete is necessary for this slice.

Configuration creates no effective resource scopes, tools, model setting, budget setting, grants or execution. Do not expose runtime/tool/access/budget editors that imply implemented enforcement. Do not connect these definitions to `NativeWork.prepare/start`, machine routes or runtime workers. Fixed Offer planner/Operations planner A/B execution remains unchanged and independent of new templates. Existing task history therefore retains its actual attribution; no template edit rewrites it.

### Public operations and HTTP contract

Feature service methods take authenticated owner separately from command payload: `list(owner, worldId)`, `get(owner, worldId, agentId)`, `initializeDefaults(owner, worldId, commandKey)`, `createSpecialist(owner, worldId, fields, commandKey)`, `saveVersion(owner, worldId, agentId, fields, expectedRevision, commandKey)` and `getReceipt(owner, worldId, commandKey)`. Repository port exposes reads and a transaction sufficient to check current revision, append version/update current pointer and store the result atomically. Supply server IDs/clock and World access through injected ports for deterministic tests.

Routes under `/api/foundation/worlds/:worldId/agents`:

| Method/path suffix | Request / result |
| --- | --- |
| GET collection | `{agents: AgentDefinition[]}`; empty means uninitialized. Pure read: no seeding, migration or writing on list/get. |
| GET `/:agentId` | `{agent}` including current version; World/owner mismatch denied without leaking another World's content. |
| POST `/initialize` | `{commandKey}` → `{agents}`; only empty World allowed. Existing configs are never overwritten/reseeded. |
| POST collection | `{commandKey,name,role,purpose,instructions}` → `{agent}`; server assigns specialist kind/user-created origin. |
| PUT `/:agentId` | `{commandKey,expectedRevision,name,role,purpose,instructions}` → `{agent}`. Identity/kind/origin/provenance cannot be rewritten. |
| GET `/commands/:commandKey` | `{receipt: null | {kind,result}}` for owner/World; recovery of interrupted acknowledgement. Match fixed routes before generic agent ID. |

Mutations reuse cookie, Origin and CSRF protection, body limit and error envelope. Allowlist fields exactly; never accept owner/creator/runtime/scopes from the client. Map validation to existing validation status, stale revision/nonempty initialization/duplicate root to conflict, unknown World/agent to existing not-found/denial conventions, storage failure to recoverable unavailable. Use opaque generated keys with bounded length (1–120); reject missing/invalid keys.

Idempotency is `(ownerId, worldId, commandKey)` across configuration commands. Check receipt before expected revision: identical kind and canonical payload returns original result without a new version; same key with any differing payload/kind conflicts. Transactions use `BEGIN IMMEDIATE`, unique constraints and rollback. An initialization racing another initialization either returns its own identical replay or conflicts without partial defaults. Two edits of revision N produce one N+1 and one conflict. Server receipt reflects the original committed version, even if a later edit is now current.

### UI and failure behavior

Incubator shows explicit **Create starter team** for an empty World; clicking issues POST initialize. Merely entering a World or Incubator never creates data. Saved hierarchy shows one orchestrator and direct specialists; selectable details/forms expose the four text fields, origin/creator, revision and **Saved configuration · not connected**. Provide **Create specialist**, **Edit**, **Save** and **Cancel** with accessible labels, keyboard operation and restrained existing Ink Clay presentation. No Chat send, Run or nested-agent control is introduced.

Keep a draft and its baseline revision per selected World/agent (new drafts keyed by World). Report `dirty`, `saving`, `uncertain`, `conflict` and save/discard/recover actions to shell through a public UI callback/guard port. Shell aggregates configuration with existing note/name safeguards for area navigation, World switching, All Worlds and before-unload; selecting a different agent or creating a specialist also uses the guard. Save-and-leave navigates only after a confirmed successful save. During saving disable conflicting navigation; Cancel/discard is deliberate, not an automatic response to an error.

On conflict retain the user's draft and show reload/latest action with explicit discard confirmation; do not automatically overwrite or silently merge. On uncertain acknowledgement retain exact payload/key and draft, check receipt, and if absent permit replay of the same command/key. A found receipt confirms the committed operation; refresh current list/details separately so a later version is not mistaken for the original receipt. Do not invent a new key when recovering. Config drafts do not reset native review drafts or Knowledge state. Errors must have an actionable retry/recover/cancel path rather than an inert generic banner.

## Approach and dependencies

Choose an isolated SQLite sidecar beside the selected preview database, for example `<foundation-file>.agents.sqlite`, explicitly passed at composition startup. Bind it to a single foundation ownerId and reject mismatches; never silently reuse one sidecar for different stores/owners. New sidecar creation is additive local configuration storage, not a foundation migration. Validate schema version/structure, quick-check and foreign keys; refuse unsupported/corrupt data without reset. Full synchronous commits follow the existing prototype durability posture, not a new power-loss guarantee.

Alternative: add configuration tables to the existing v2 foundation database after copied-store migration tests. That would couple this small slice to its strict schema validator and held original-store migration. The sidecar avoids that prerequisite and minimizes original-state risk. Do not duplicate or replace the existing native funding/command ledger. Configuration commands have a separate clearly named table because they carry no financial or execution authority.

Sequence: implement domain/sidecar and owner API, then UI composition/guard, then isolated restart and browser verification. Use a fresh temporary foundation+sidecar pair and only copied stores when preservation comparisons need real schema. Do not launch the original foundation with new migration behavior. Rollback disables the configuration feature while retaining its sidecar; no deleting, downgrading or restoring a backup over newer writes. Existing World/Knowledge/Work routes continue functioning if configuration is unavailable, with an honest Incubator error.

Observability: structured error codes and visible configuration revisions/receipts suffice; no logging full instructions, cookies or secrets. No new external dependencies, provider requests, credentials, spending, broad Universe, harness abstraction, general scheduler, BYOA onboarding or publication is required.

## Verification and readiness

| Meaningful check | Required result |
| --- | --- |
| Initialization/restart | GET leaves empty World and stores unchanged; explicit initialization creates exactly four copies atomically; reopen retains IDs/provenance/version; repeated identical command creates nothing extra. |
| Creation/edit/version | Create user specialist; edit template copy; old revision stays immutable, template catalogue unchanged; reopen preserves current revision. |
| Authorization/validation | Other owner/World cannot read/edit/receipt; unknown fields, identity/provenance spoof, arbitrary parent, malformed revisions/text/key rejected; configuration yields no machine capability or dispatch. |
| Concurrency/idempotency | Racing initializations preserve one root; racing expectedRevision edits yield one commit; same-key different payload conflicts; interrupted response recovers original result with no extra version. |
| UI recovery/navigation | Actual browser create/edit/save/reopen plus dirty area/World/agent switching, save-and-leave, cancel, conflict and uncertain receipt recovery retain drafts correctly. Keyboard and narrow viewport checks cover changed controls. |
| Preservation/boundaries | Typecheck/build and existing foundation/native affected regressions pass; original source/data/ledgers/accepted notes untouched except separately owned authorized app candidate files; existing Work A checkpoint, B handoff/history/acceptance remain usable. Cross-feature consumers use public entries; runtime/provider imports absent from configuration/browser. |

Builder supplies changed-file candidate and actual outcomes, then one independent reviewer checks that candidate. Unaffected earlier evidence may be reused. Definition persistence is completion of this slice, not readiness for agent execution, private data, live inference or a future Universe harness. Those hold their existing separate boundaries.
