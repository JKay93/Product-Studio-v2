<!-- studio {"id":"world:reference:world-policy-rules","scope":"world","type":"document","status":"approved","links":[{"relation":"requires","target":"world:decision:product"},{"relation":"implements","target":"world:req:world-policy-authoring"}]} -->
# World policy controls and conflict rules

## Purpose and boundary [world:req:world-policy-control-boundary]

The first World policy controls govern operations supported by the current runtime. World owners/admins manage organizational settings; a personal World owner manages their own settings. These controls restrict otherwise-permitted work. Enabling a control grants no membership, Agent consent, resource access or Session authority. Universe hard boundaries and owner/Session restrictions remain necessary.

The implementation uses a closed versioned policy definition. Future enterprise authoring must reuse the same definitions and protected checks; no general instruction parser, custom-code execution or enterprise editor is introduced. Accepted for controlled development on 2026-10-06 after independent review and protected proofs. Work is authorized by the user's continuation, with the bounded technical choices delegated to the team.

## First controls [world:req:world-policy-first-controls]

| Control | Default | Meaning |
| --- | --- | --- |
| Allow colleagues' personal Agents | On | Another user's personal Agent may be used only with existing owner participation consent and current grants, membership and Session permission. Off blocks that use in this World. The actor's own personal Agent and organization-owned Agents retain their separate permission paths. |
| Allow delegated work | On | Existing saved relationships may drive bounded team execution under current access and runtime limits. Off blocks new team execution and subsequent protected team execution. Saved relationships remain intact. |
| Require approval for every internal task | Off | On requires explicit exact approval even where an otherwise-valid scoped waiver exists. Off permits existing authorized scoped exceptions; each actor/World/Session/Agent still defaults to approval required. Off is not a World-wide approval waiver. |

Defaults preserve accepted behavior. There is no enableable external-runtime Agent control, provider selector or Knowledge suppression switch in this slice because those semantics/capabilities are not implemented.

## Resolution table [world:req:world-policy-conflicts]

| Situation | Result |
| --- | --- |
| World setting permits work; owner consent, grant or Session access is missing | Access unavailable. A permissive setting supplies no authority. |
| World blocks borrowing but a colleague grant exists | World restriction blocks use. Grant remains recorded; its owner has not silently revoked or transferred it. |
| Borrowing is enabled again | Only otherwise-valid current consent/grants resume. Expired or revoked grants remain unavailable. Old active job authority is not revived. |
| Saved relationship asks for delegation while World disables delegation | Execution blocked. The relationship does not grant authority. |
| World approval requirement conflicts with a scoped waiver | Explicit exact approval required. |
| World approval requirement is off, but scoped approval remains required or the owner cannot waive | Explicit exact approval required. |
| Settings change while a job is active | Existing conservative authority fences reject stale later execution. Start new work using fresh valid authority; the change does not recall transmitted prompts. |
| Settings are switched off and on again | Revisions remain advanced. A previous job or stale request cannot recover authority merely because values match again. |
| Completed task effect precedes a settings change | Its historical receipt is unchanged. New effects and reads still require current applicable access. |
| Completed delegated result is viewed after delegation is disabled | Reading is not fresh delegation. Retain access subject to current membership, sources and Agent permissions. |
| Settings/proposal revisions are stale | Refresh and retry using the exact current revisions; do not silently broaden authority. |
| Imported/enterprise prose writes a permission field | It grants nothing. This slice has no executable enterprise authoring path. |

## Change mechanics [world:req:world-policy-change-mechanics]

Settings use current owner/admin authority, expected revisions and actor-bound request identity. Real changes serialize with the existing World lock, advance World authority/policy revision and record audit evidence. Exact request replay or a true no-op must not duplicate changes/audits. Server checks apply at direct protected RPCs, execution and effects, beyond disabled controls in the UI. Policy settings do not expose another Agent's private personality, instructions or personal memory.

Advancing World authority is conservative: even an unrelated active job can become stale after a real settings change. This matches the existing authority model and prevents a quick off/on restoration from reviving old work. More selective invalidation would require separately reviewed dependency/version semantics; it is not silently introduced here.

## Verification and metrics [world:req:world-policy-verification]

Require direct-RPC/role/privacy proofs, own/colleague/organization Agent cases, valid/missing/revoked/expired grants, nested delegation and retained reads, floor versus scoped waiver/exact approval, revision/replay/races, unchanged completed receipts and unchanged budgets. Reuse current Settings/scope controls and show saved/pending/error/read-only states with keyboard labels; switching Worlds must not show or save stale data.

The combined harness metrics remain Output Accuracy %, end-to-end latency and token/cost efficiency. This policy layer adds deterministic database checks rather than an AI permission judge. Measure actual overhead where possible; do not equate permission-test passing with model semantic accuracy or infer production latency/cost gains from fake local execution. Complete root/child/retry measurements and representative SME rubrics remain separate measurement work.

## Implemented paths and evidence [world:req:world-policy-implementation]

Settings > Permissions contains the World controls with current defaults, owner/admin editing, member read-only state, save confirmation, pending/error/retry and World-scoped loading. The existing workspace controller refreshes authority after saving. A keyed World card prevents an old read or save from replacing another World's state. The effective internal-task policy displays when the World requires approval; an underlying scoped waiver is preserved and cannot bypass this floor.

The client-safe `src/modules/world-policy/index.ts` defines `world-v1`; dedicated request/database adapters reuse the authenticated agent-work API. Immutable additive migration029 stores private policy and actor-bound request receipts, serializes changes, audits real changes and enforces borrowing, team execution and internal-task approval through protected SQL. The existing Agent-use predicate is replaced without changing its identity, preserving bound RLS references. Inherited implementation helpers and private tables remain inaccessible to ordinary callers and the restricted worker. Settings reads currently take the same exclusive World lock; selective invalidation and reducing read contention are deferred trade-offs.

Application inventory:10 new and8 modified files,18 total. Ten contain runtime implementation changes (five new including SQL, five modified); six are verification files (five new, one modified); two are project instructions/migration-byte configuration. The five new runtime files are the domain definition, database adapter, request adapter, settings card and migration029. No worker/provider/context-compilation file changes or extra AI policy call are introduced.

Verification:174 tests across31 files; affected24 tests across4 files, typecheck and full lint; independently reviewed final candidate; actual caller/worker rollback proofs for grants, delegation, approval floors, exact manual effects and stale work; two-connection World-lock proof; all29 migrations reconstructed in an isolated rolled-back schema; authenticated HTTP owner/admin/member, closed input, origin/privacy, replay/conflict and authority-refresh proof. Physical mobile/responsive browser verification was not performed for this card. See the [run record](runs/2026-10-06-world-policy-foundation.md) for receipts, immutable SQL hash and delivery.

No paid model calls were made. Final ledger remains320,952 microUSD committed or held, including228,000 uncertain held and92,952 known actual accounting; this includes earlier synthetic reservations and is not a provider invoice. Output Accuracy %, real end-to-end latency and realized token/cost savings were not measured by this slice. Deterministic enforcement adds database work; no zero-overhead or semantic-accuracy improvement claim is made.
