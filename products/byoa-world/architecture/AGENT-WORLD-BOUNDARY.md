<!-- studio {"id":"byoa-world:technical-context:agent-world-boundary","scope":"byoa-world","type":"technical-context","status":"draft","links":[{"relation":"reference","target":"byoa-world:contract:main"},{"relation":"reference","target":"byoa-world:rule:modularity"}]} -->
# Technical context: external agent / World boundary

- Technical Specialist owner: Technical Specialist.
- Last material update: 2026-09-29; inspected application HEAD `0312413d556767efae1d692198aa8edc7845e11b` and working source.
- Requirements and decisions: [contract](../CONTRACT.md), [roadmap](../ROADMAP.md), [modularity](MODULARITY.md), and the user's current external-runtime direction.
- Status: architecture proposal only; no application change, provider call or new spending.
- Template: [technical-context](../../../operating-system/templates/technical-context.md), the smallest fit for observed state plus proposed boundary; all core sections retained.

## Current state — observed

### 1. What the prototype currently does

The accepted Phase 0 fictional workflow demonstrates World-mediated collaboration, not a generic attachment to an independently running agent. World currently launches Codex and calls Claude itself:

| Component / actual source | Observed responsibility and limitation |
| --- | --- |
| [`createConnections()`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/agents/connection/service.js) | Two hard-coded identities (`codex`, `claude`); in-process `capabilities/run/cancel` adapter seam. No external participant registration or authenticated agent ingress. |
| [`boundedLiveAdapters()`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/agents/connection/adapters/bounded-live.js), [`draftWithCodex()`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/agents/connection/codex-draft-check.js) | World invokes a bounded Codex child using subscription authentication; this is not a connection to the user's existing conversation or memory. |
| [`start-live.js`](https://github.com/JKay93/BYOA-World/blob/0312413/src/app/start-live.js), [`reviewSyntheticDraft()`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/agents/connection/collaboration-connectors.js) | World reads the Claude key from its launch environment and sends the API request. The key is absent from browser configuration, but the World process still possesses it. |
| [`SessionService`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/work/session/service.js) | `start/readContext/authorize/dispatch/terminate` own fixed live fixtures, context grants, sequential handoff, expiry and stop; authorization is rechecked before contribution commit. |
| [`ReviewService`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/collaboration/document-review/service.js) | Contributions and proposals are separate from canonical output; `accept()` requires the human owner and current revision. Proposal composition assumes the two current participants. |
| [`createApp()`](https://github.com/JKay93/BYOA-World/blob/0312413/src/app/server.js), [`repository()`](https://github.com/JKay93/BYOA-World/blob/0312413/src/app/repository.js) | Loopback HTTP, local owner cookie/CSRF, single JSON workspace with atomic replacement. This is not remote identity or tenant authentication. |

Data flow is owner → World-selected fictional context → Codex draft → Claude review → local proposal → human acceptance. Session state persists context snapshots, contribution/proposal bodies and disclosure payloads; activity contains IDs and status metadata. Durable Claude reservations live in [`live-budget.js`](https://github.com/JKay93/BYOA-World/blob/0312413/src/features/agents/connection/live-budget.js). These controls apply to the current fixed workflow, not arbitrary external spending.

Runtime/load limit: one local owner/workspace and one active session, in-process sequential dispatch. There is no durable external delivery queue, replay protocol, capability negotiation or remote identity binding. Current activity and disclosure records expose the handoff; they cannot observe every action inside another runtime.

Security/privacy limit: World grant checks constrain World resources. Codex read confinement, external retention and general confidentiality are not proven. Marker filtering is not a general data-loss prevention boundary. Personal agent memory is not imported for initial tests. See [boundary findings](../research/knowledge-boundaries.md).

## Planned state — not yet implemented

### 2. Smallest changes

Preserve the three feature owners and human acceptance path. Replace the assumption “participant equals provider adapter” with “participant is bound to an authenticated external runtime connection.” Retain synthetic/local adapters as compatibility paths; do not broaden their fixed-fictional input policy during this proposal.

| Owner | Bounded change / public boundary |
| --- | --- |
| `agents/connection` | Add runtime connection identity, negotiated capabilities and one external adapter behind its public `index.js`; translate canonical work/events without provider credentials. |
| `work/session` | Bind participant grants to runtime identity and session; persist work IDs, dispatch state and revocation; authorize context delivery and every inbound result. |
| `collaboration/document-review` | Accept authenticated, attributable contributions through its existing service; remove provider-name/two-participant assumptions only as needed for the selected test pair. Preserve owner-only canonical acceptance. |
| `app/` | Compose a separate machine-authenticated ingress and owner enrollment action; keep transport routing thin and owner cookies out of connectors. |
| External connector / runtime | Translate World work into the runtime's supported interface, execute under its owner's controls, and return bounded results. It runs outside World. |

### 3. Connector boundary

The connector is a small bridge colocated with, embedded in, or owned by the external harness. World sends task/context through this bridge; the bridge uses whatever supported runtime interface is available. A CLI wrapper is one possible adapter, alongside an SDK/plugin, local service or remote harness API. No claim is made that every named product exposes such an interface.

Prefer one outbound-initiated HTTPS polling connector for the first external-runtime slice: the runtime-side bridge obtains work from World and posts results, so no inbound port on the user's device is required. This is a recommendation, not an implemented endpoint or requirement to build every transport. World-hosted push, WebSocket or local IPC adapters can follow if a verified use case needs them; all carry the same semantics.

### 4. Responsibility split

| World controls | Runtime owner / provider controls |
| --- | --- |
| World identity, membership, selected context, grants, work lifecycle, result validation, audit and human acceptance | Provider/subscription authentication, model choice, runtime execution, local tools, local files/memory and their permissions |
| What World sends and which World writes it accepts | What happens after receipt, provider retention and runtime logs; external tool side effects |
| Dispatch count, time limits and requested budget envelope; stop future World delivery | Enforce token/tool/cost ceilings before execution, provider billing and cancellation within runtime capability |

World must not receive, store or relay provider API keys, subscription tokens or provider login sessions in this target route. A World credential is different. External tools remain under their owner's authority; World grants neither authorize nor sandbox those tools. For initial tests the runtime must use a fresh project session with explicitly shared fictional context and no personal memory import.

### 5. Distinct World authentication

An authenticated human explicitly pairs a runtime with a participant. A single-use, short-lived enrollment exchange yields a revocable World credential scoped to that session, participant, runtime connection and allowed actions. Store only its verifier server-side, redact secrets from logs, use authenticated encrypted transport, and never place it in a model prompt. The credential grants only that participant's assigned work/context and contribution/status submission, not owner acceptance or access to another participant.

Every request resolves identity from the credential, then checks current session/grant state; body-supplied IDs alone convey no authority. Expiry, stop, completion or owner revocation disables delivery and rejects subsequent writes immediately. Reconnection requires valid current authority. Human authentication for staging must replace the preview's automatic local-owner cookie issuance; this proposal does not select a general account system.

### 6. One canonical semantic protocol, multiple adapters

Define a small versioned World work protocol, not a provider-shaped API or a separate contract per transport:

| Message / field group | Minimum semantics |
| --- | --- |
| Handshake | `protocolVersion`, `runtimeConnectionId`, supported input/output kinds, cancel and usage-report capabilities; reject unsupported major versions or required capabilities. |
| Work envelope | `worldId`, `projectId`, `sessionId`, `participantId`, `workId`, `attemptId`, deadline, task, explicitly shared context IDs/revisions and authorized shared contributions, requested resource limits. No whole workspace or private memory. |
| Lifecycle | Offered → acknowledged → running → succeeded / failed / cancelled / indeterminate; distinguish delivery acknowledgement from execution and committed contribution. |
| Result / event | `eventId`, sequence, `workId/attemptId`, status, bounded contribution, source IDs, runtime run reference and optional usage with provenance. World assigns canonical contribution IDs after validation. |
| Cancellation | Work ID, reason and revocation state; acknowledge where supported. Missing acknowledgement remains unknown, not “remote work stopped.” |

Persist work/attempt identities and deduplication before delivery. Redelivery uses the same attempt ID; a runtime deduplicates before execution. World deduplicates result/event IDs and rejects conflicting replays, stale attempts, excessive payloads and writes after revocation. Sequence numbers support replay/order checks. An ambiguous timeout is indeterminate: no automatic new paid attempt. Explicit retry creates a new attempt under renewed budget validation. This avoids claiming exactly-once execution across a network failure.

### 7. Data, security and flow effects

Target flow: human authorizes → World prepares participant-specific envelope → outbound bridge claims work → external harness executes using its own provider access → authenticated result returns → World rechecks grant/revision and records contribution → human accepts proposal. Revocation interrupts World access at any stage; in-flight replies are rejected after revocation.

Treat returned text, capability statements, provenance and usage as untrusted inputs. A runtime-reported cost is labeled **reported**, not independently measured or proof of a hard cap. Unknown usage remains unknown; World can withhold future work but cannot cap an independently controlled provider account. A runtime must confirm enforceable limits before a bounded paid test; the existing US$1 ledger remains authoritative for prior Claude experiments and is not reset or implicitly delegated by this design.

Persist only required connection/grant metadata, delivery state and accepted workflow artifacts. Keep disclosure metadata separate from payload bodies; existing full fictional-payload storage is not a privacy-ready retention policy. Before private pilot, define access/retention/deletion for World context snapshots, bodies, connector logs and backups, and show intended recipients before dispatch. Do not infer permission to redistribute an agent-private contribution to another participant; sharing must be explicit and session-scoped.

Revocation cannot erase already transmitted data, prove provider deletion, force a remote harness to halt, or undo its external tool effects. Fresh sessions and credential separation reduce coupling but do not establish host isolation or non-disclosure. A runtime with broader local access needs its own verified containment and policy; World cannot provide it through protocol instructions.

### Dependencies, sequence, migration and rollback

First specify/test the protocol with a fake external harness, then implement one outbound adapter and pairing/revocation path, then a bounded fictional staging integration. Keep existing preview paths available behind explicit mode selection. Add versioned storage migration for connection/work records without overwriting existing workspace/evidence/budget files; reject unsupported versions. Rollback disables the new route and revokes its World credentials while preserving records for reconciliation.

## Decisions and risks

- **Approved direction:** external runtime/provider neutrality, runtime-side provider access, fresh project sessions for initial tests; Phase 0 fictional prototype accepted. Isolation/provider verification belongs to Phase 1 staging before private pilot. See [roadmap](../ROADMAP.md) for milestone status.
- **Proposed design:** outbound-first connector, exact enrollment flow, protocol fields, replay/receipt handling and storage migration. This document does not authorize their implementation or provider spend.
- **Preserved boundaries:** selected context, attribution, stop/revocation and human-only canonical acceptance; no spatial interface, marketplace, memory import or unrelated redesign.
- **Technical Specialist evidence needed:** one actual runtime's supported integration/authentication route and capability limits; then contract tests for schema negotiation, forged identity, cross-session access, reconnect, duplicate delivery/result, revocation races and uncertain usage. No claim of interoperability until tested against that runtime.
- **Staging owner / reviewer evidence needed before private pilot:** authenticated remote deployment boundary, end-to-end grant enforcement, runtime containment, provider policy/retention and cancellation behavior, payload retention rules and cost-limit behavior. Phase 0 completion does not imply these pass.
- **Sources:** code/function links above are observed implementation; [Phase 0 technical record](PHASE-0-TECHNICAL.md) is historical design with addenda, not evidence that every proposed interface exists. Current independent evidence is linked from [STATE.md](../STATE.md).
