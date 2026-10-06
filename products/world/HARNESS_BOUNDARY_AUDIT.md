<!-- studio {"id":"world:research:harness-boundary-audit","scope":"world","type":"document","status":"draft","links":[{"relation":"reference","target":"world:decision:product"},{"relation":"reference","target":"world:research:harness-runtimes"}]} -->
# Harness boundary audit: first hardening step

Read-only source assessment at World commit d6f26fde2be79ea2a6fbeef167dabcdee9d4e71e, 2026-10-06. This separates existing narrow Phase7 controls from proposed four-layer governance. It is not new runtime acceptance, penetration testing, a full security audit or implementation authority. Application files, database, running services and paid provider usage were untouched. Independent review status is recorded in the current run.

## Existing control map [world:req:harness-audit-controls]

| Boundary | Actual mechanism | Limit |
| --- | --- | --- |
| Caller identity | Same-origin authenticated API; verified caller claims and forwarded caller JWT; SQL derives auth.uid(), not an actor nominated by queue data. | Persistent Agent identity is not yet an external cryptographic Passport interoperability protocol. |
| World/Session access | Active membership, participation, Session participant and ownership/admin or scoped unexpired grant; shared World locks serialize protected operations against exclusive authority mutations. | These are actual narrow resource controls, not a general natural-language policy resolver. |
| Worker capability | Restricted login, verified TLS and rejected privileged runtime credentials; narrow RPCs, hashed attempt capability, lease/deadline fencing, revoked raw-table access. | Source inspection does not re-prove the installed development role or every live permission. |
| Source visibility | Current publication/archive/import checks, version binding and source locks on context, checkpoints and completion. | Access-valid source sets do not establish that a displayed source number identifies the intended passage. |
| Delegation | Saved graph, eligible recipients, fixed initiating actor/World/Session, bounded depth/children/concurrency/retries/deadline and shared budget. | Children receive the bounded meeting input and permitted references; a task assignment is not field-level confidentiality minimization. |
| Consequential internal effects | Exact proposal revision/digest, current assignees/authority/sources, idempotent manual approval; scoped warning/audited opt-out with current revision checks. | Only saved internal action records are supported. No arbitrary tool execution or external sending exists. |
| Recovery/results | Fenced attempts and current checks; usage settlement remains possible after revocation solely for accounting. | Transmitted provider context and completed effects cannot be recalled. |

Principal source locations in World: src/app/api/agent-work/route.ts:7-27,68-91; src/adapters/auth/server.ts:37-50; src/adapters/database/worker-connection.ts:7-35; src/adapters/worker/runtime.ts:11-20; src/adapters/models/execution.ts:30-78. SQL: migrations 202610050005_authority_policies.sql:8-24, 202610050006_world_commands.sql:84-113, 202610050020_working_agent.sql:26-40,64-74,91-101,150-155,235-259; latest wrappers in 202610060023_agent_collaboration.sql:21-40,51-87,117-125,132-170,177-185,284-291,327-331 and 202610060024_agent_scoped_approval.sql:68-87. Earlier renamed implementations remain internal dependencies; latest wrappers determine effective exposed behavior.

## Concrete current construction weaknesses [world:req:harness-audit-construction]

**Source references lose their original numbering.** Each child's output can contain local [Source N] references. Migration023:160 copies that text; lines162-167 combine and reorder source arrays without carrying each child's original slot mapping. The final UI numbers its citations by final array order (src/ui/patterns/agent-job-reply.tsx:47-53). Historical assistant text has a similar risk when its citations are merged into a new context (migration020:129-130; src/adapters/worker/input.ts:36). A legitimate reference can consequently identify a different document after aggregation or reuse. This is an accuracy/provenance weakness; inspection did not demonstrate unauthorized document access.

**Prompt construction slices complete serialized objects.** src/adapters/worker/input.ts:16-17,44 truncates JSON strings for configuration, references and findings. Oversized input can end mid-record, omit later configuration fields or omit source slots still present in database/UI records. Configuration persistence admits substantially larger fields (migration007:57-59). This is demonstrable construction behavior, not evidence that a model bypassed SQL authorization. It needs field-aware bounds and an explicit contract for admitted versus omitted records; important instruction fields must not silently vanish.

Knowledge excerpts currently appear inside the system string despite being described as untrusted reference content (input.ts:17). Child findings are placed in user data and labeled untrusted (input.ts:22,43-44). These labels guide the model; they do not mechanically establish instruction integrity. The first compiler hardening slice should keep authoritative guidance distinct from reference content without claiming that message separation solves prompt injection.

## General governance gaps [world:req:harness-audit-governance-gaps]

Organization execution excludes all personal base configuration, even when its owner is the requester (migration020:110-112; child equivalent migration023:139). This preserves private configuration but does not implement owner-mandated restrictions inside a World. We need a deliberate enforcement contract for owner boundaries without exposing unrelated private knowledge/configuration.

Current-World rules shown in Settings are fixed explanatory UI text, not a published editable World-policy compiler (src/ui/patterns/agent-settings.tsx:197-207). The runtime has no generalized four-layer rule schema, mandatory-versus-preference resolution, combined approver requirements, issuer/source explanations, model/tool intersection or conflict outcome. These are absent proposed capabilities, not automatically regressions against the narrower accepted Phase7 scope.

Runtime context retrieves scoped Knowledge and permitted history, not persisted behavioral Memory. Memory edits are separate authenticated operations; automatic learning/export is not enabled. SQL maintains source visibility/provenance, but no general integrity/confidentiality propagation through derived text is implemented. Phase8 remains unstarted.

## Policy-change timing [world:req:harness-audit-policy-timing]

The current internal-task setting is actor/World/Session/Agent-scoped, not a World-wide policy language. Migration024:30 obtains an exclusive World lock for changes. Finish retains shared World authority locks through automatic internal effects; lines68-81 require a current opt-out, matching enqueue snapshot revision and current management authority. Restoring approval before finish leaves a proposal for manual approval. Completed automatic effects record their governing policyRevision. A newly relaxed policy does not retroactively automate a job whose snapshot differs: this is a conservative hold, not stale permission. Source tests cover both restoration/finish orderings (tests/integration/collaboration-concurrency.mjs:305-366), but those database tests were not rerun here.

No database transaction spans a provider request. executeAgent sends the token-count request at line29 before its later check at line35, and streaming follows a check with an unavoidable check-to-network interval. Heartbeats/publication fences can reject subsequent delivery, not recall transmitted context. The implementation must never be described as atomic database-and-network revocation or as live refresh of every arbitrary instruction.

Manual approval stores the request/payload and approved proposal revision but lacks a separate current policy/authority decision receipt (migration020:259); automatic effects do have an explicit policy revision record (migration024:15-17,77-80). This is an audit-hardening gap relative to the accepted timing intent, not a demonstrated authorization bypass. Include complete decision receipts in the later typed-policy slice.

## First proposed hardening slice [world:req:harness-audit-next-slice]

Harden the existing provider-context contract before adding generalized governance:

1. Preserve stable source-version/passage identities and each child/history reference mapping; remap deterministically or explicitly namespace references.
2. Bound individual fields before serialization; retain complete admitted records and consistent source slots. Reject unsupported required guidance sizes clearly rather than silently dropping rules.
3. Separate trusted operating guidance from reference excerpts and derived findings; maintain origin metadata through that assembly.
4. Verify with offline/fake-provider cases for disjoint/reordered child references, history reuse, oversized configuration/records and malicious findings. Retain current authorization, approval, privacy and budget boundaries.

Reuse the worker/RPC/provider stack; any necessary SQL change must be additive and independently reviewed. Root-controlled development database proofs follow implementation; paid calls are unnecessary for the first slice. No new framework, arbitrary tools, automatic learning or major UI change.

Then address typed owner/World constraints and rule-change handling as a separate bounded slice. Policy decisions still needing explicit resolution include the initial owner-boundary vocabulary and whether a newly permissive policy should ever release older held jobs automatically. Until then, preserve the existing conservative behavior. The full research table remains draft.

Evidence this run: six existing offline tests in collaboration-context.test.ts and working-agent.test.ts passed; they do not cover the newly identified source-slot/truncation cases or prove live injection resistance. No full suite, database test, model test or runtime restart was undertaken for this read-only assessment.
