<!-- studio {"id":"byoa-world:technical-specification:phase-0","scope":"byoa-world","type":"technical-specification","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"},{"relation":"implements","target":"byoa-world:prd:connection"},{"relation":"implements","target":"byoa-world:prd:session"},{"relation":"implements","target":"byoa-world:prd:document-review"},{"relation":"reference","target":"byoa-world:design:document-review"},{"relation":"reference","target":"byoa-world:discovery:agent-connectivity"},{"relation":"reference","target":"byoa-world:decision:project-organization"}]} -->
# Technical specification: Phase 0 working preview

- Technical Specialist owner: Technical Specialist.
- Last material update: 2026-09-29.
- Requirements, context and decisions implemented: authorized Phase 0 in
  [CONTRACT.md](../CONTRACT.md), RM-03/RM-04 in [ROADMAP.md](../ROADMAP.md), the
  [connectivity assessment](../research/agent-connectivity.md), and approved
  [project organization](../decisions/001-project-organization.md); the three feature
  PRDs for [connection](../features/agents/connection/PRD.md),
  [Session](../features/work/session/PRD.md), and
  [document review](../features/collaboration/document-review/PRD.md), plus the
  [workspace design](../features/collaboration/document-review/DESIGN.md).
- State: implementation-ready draft until candidate evidence is recorded.

This is one cross-feature specification because the preview's security boundary and
Session state machine span all three features. It follows the technical-specification
template and adds an observed baseline and ownership matrix. Feature requirements remain
in their PRDs; this document owns interfaces, invariants, technical constraints and
verification guidance.

## Observed baseline and selected approach

The application repository contains only its bootstrap README. Node.js `v24.13.0` and
npm `11.6.2` are installed. Codex is installed and logged in using ChatGPT. One isolated
Codex CLI response has been demonstrated with no tool events observed; it did not prove
app-server integration, tool isolation or a complete Session. No Claude API credential
or call and no two-agent live Session have been demonstrated.

Use a dependency-free Node.js local web application for the first preview: native HTTP,
ES modules, HTML, CSS and browser JavaScript. Bind only to `127.0.0.1` on a configurable
high port. This avoids package installation and network dependency while the product
contract is still being tested. Keep source in the sibling `BYOA-World/` repository;
this studio directory contains requirements, design and evidence only.

Persist the single seeded workspace as JSON using a repository-local ignored data file,
with atomic write-then-rename. Tests use an in-memory repository and deterministic IDs
and clock. No credential, provider response containing undisclosed data, or secret goes
into the state file or audit payload.

## Interfaces and behavior

### Module ownership and source layout

```text
src/
  app/                         # HTTP composition, routes, static shell, startup
  features/
    agents/connection/         # connector contract, synthetic/live adapters, status
      index.js                 # only public import surface
      contracts.js
      service.js
      adapters/
      ui/
      tests/
    work/session/              # project/task, selected context, grants, trace, stop
      index.js
      model.js
      context.js
      policy.js
      activity.js
      ui/
      tests/
    collaboration/document-review/  # contributions, proposal, changes, acceptance
      index.js
      model.js
      service.js
      ui/
      tests/
  shared/                      # only demonstrated reuse: IDs, clock, JSON primitives
```

Behavior, UI fragments, adapters and tests stay with their owning feature. `app/` only
composes routes and features. Cross-feature calls import an owner's `index.js`; internal
files are not imported across feature boundaries. Do not add a generic services or utils
folder. This layout is an organizational approach, not a framework/library choice.

| Owner | Public responsibility | May depend on |
| --- | --- | --- |
| `agents/connection` | List the two preconfigured connector capabilities; dispatch bounded work; emit normalized queued/running/contributed/failed/stopped events; cancel an active dispatch. | Shared IDs/clock only. It receives an already-authorized context envelope and cannot read the state store directly. |
| `work/session` | Own the one owner/project/task, context classification and selection, grants, Session state, authorization checks, activity timeline and stop/revoke transition. | Public connection contract for dispatch/cancel. It cannot mutate a document. |
| `collaboration/document-review` | Record attributable contributions; compose one proposed document; request changes; accept exactly one proposal revision into canonical state. | Public Session authorization/status interface. It cannot dispatch connectors directly. |

### Data model and invariants

Use opaque string IDs and ISO timestamps. Validate every mutation on the server.

| Entity | Required fields / invariant |
| --- | --- |
| Owner | Fixed seeded `ownerId`; the human owner has no agent identity. |
| Project | Exactly one project with one task and one canonical document. |
| Participant | Exactly two preconfigured records with `connectorKind`, `displayName`, `mode: synthetic | live`, and capability status. Synthetic mode is visible in every participant and contribution view. |
| Context item | `classification: company_private | shared | agent_private`, content, source label. Phase 0 seeds synthetic examples only. `agent_private` is never accepted as owner-supplied outbound context. |
| Grant | Session, participant, permitted context IDs and actions. Allowed actions are only `read_selected_context`, `contribute`, and `propose_document`; accept/reject/stop remain owner-only. |
| Session | `draft -> running -> stopped | completed`. Stop is terminal. A stopped/expired Session rejects all future dispatch and contribution mutations before adapter invocation. |
| Contribution | Participant, Session, source context IDs, body, timestamp and synthetic/live mode. It never changes canonical document state. |
| Proposal | Revision, source contribution IDs, body, `proposed | changes_requested | accepted`. Only the owner may accept. Acceptance atomically updates canonical document and records the proposal/revision. |
| Audit event | Append-only sequence, actor, action, target, outcome, timestamp and safe metadata. Record denied actions as well as allowed mutations; omit context bodies and credentials. |

The control plane owns canonical Session and document state. Connectors are untrusted
ports. Every outbound dispatch and inbound contribution passes an active-Session and
grant check. Agent output is always a contribution or proposal. The browser never sends
an actor ID that the server trusts as authorization.

### Connector contract

```js
run({ dispatchId, participant, task, contextEnvelope, signal, emit })
  -> Promise<{ contributionText, providerRunId?: string, usage?: object }>

cancel({ dispatchId, providerRunId, reason }) -> Promise<void>
capabilities() -> { mode, available, supportsCancel, limitation }
```

The two Phase 0 synthetic adapters use fixed fixtures and delayed deterministic events;
they make no process or network call. One contributes a requirements outline and the
other contributes boundary risks so both are necessary to the proposed document.
Cancellation checks the supplied `AbortSignal` before every emitted event and before a
contribution is committed.

Future live adapters implement this contract outside the domain service. The selected
target pair is Codex Subscription plus Claude API. The first Codex adapter may use
`codex exec` as a one-shot child process with an empty dedicated temporary working
directory, ephemeral state, read-only sandbox, scrubbed environment allowlist, prompt
over stdin, strict timeout/output cap and process termination on stop. It must parse the
JSONL stream and fail closed if an unexpected tool/action event appears. This reduces
exposure but does not prove read confinement or disable every built-in tool; therefore it
may receive synthetic context only. Deeper app-server integration must add protocol
version checks, explicit denial of approval requests and per-turn cancellation before it
handles anything more sensitive. The Claude API adapter uses the official server-side API
surface, accepts no browser-supplied credential, sets an explicit model/timeout/output
limit, and remains disabled without a credential and explicit spend allowance. Claude
Code is a deferred alternative. No live adapter is required for the first preview.

### Local HTTP surface

| Method and path | Behavior |
| --- | --- |
| `GET /` | Return the responsive workspace and bootstrap state; set an opaque owner session cookie and CSRF token. |
| `GET /api/workspace` | Return safe owner, project, participants, context metadata, Session, contributions, proposal/document and activity state. |
| `POST /api/sessions` | Start the single Session with selected context IDs after owner, CSRF and classification checks. |
| `POST /api/sessions/:id/dispatch` | Authorize and run both synthetic connectors; make normalized status/events visible. Reject duplicates while active. |
| `POST /api/sessions/:id/stop` | Atomically mark stopped, revoke grants and abort active dispatches; idempotent for the same owner. |
| `POST /api/proposals/:id/request-changes` | Record owner feedback and return proposal to proposed-work flow. |
| `POST /api/proposals/:id/accept` | Owner-only atomic acceptance into the canonical document. |

Use JSON request/response bodies with stable error codes such as `SESSION_STOPPED`,
`ACTION_DENIED`, `INVALID_CONTEXT`, `STALE_REVISION` and `CSRF_REJECTED`. Never expose
stack traces to the browser. Long-running synthetic work may use server-sent events or
short polling; choose the smaller implementation and keep domain events transport-neutral.

### Security, privacy and access controls

- Listen on `127.0.0.1` only. Reject unexpected `Host` and `Origin` values. Generate the
  exact preview origin from the bound port rather than trusting forwarded headers.
- Set an opaque, random owner session cookie with `HttpOnly`, `SameSite=Strict` and
  `Path=/`. Keep its server record in memory for the preview. Every mutation requires
  that owner session plus an unpredictable CSRF token and `Content-Type: application/json`.
- Treat UI controls as convenience only. Enforce owner-only review/stop and every grant
  on the server immediately before state mutation or connector dispatch.
- Build a fresh context envelope per participant from explicitly selected IDs. Never
  pass the full state object or hidden context to an adapter. Audit IDs/classification,
  not context bodies.
- Escape all rendered user/agent text and assign via text nodes; do not render model
  output as HTML. Apply a restrictive local Content Security Policy with no remote
  scripts, frames or connections.
- Stop/revoke prevents future platform dispatch and writes. It cannot retract context
  already disclosed to a live remote runtime or prove provider deletion; show that
  limitation whenever a live adapter is eventually enabled.
- Do not spawn shells with interpolated prompts. Live CLI adapters, if later enabled,
  use argument arrays/stdin and fixed executable configuration. Never expose credential
  values, configuration file contents or raw environment variables.

## Approach and dependencies

Build in this order: state model/repositories and authorization; deterministic synthetic
connectors; Session orchestration and stop; contribution/proposal review; local HTTP
boundary; workspace UI; end-to-end and negative tests. The builder may choose filenames
inside the specified owners but must preserve public surfaces and invariants.

The alternative of starting with React/Next.js or another full framework was rejected
for this first preview because no dependency is needed for one local screen and the
host already has a current Node runtime. A framework can be selected later when routing,
component scale or deployment requirements justify its migration cost. Direct provider
SDKs were rejected for the preview because they require credentials and potentially
metered calls; CLI/app-server routes remain experiments, not hidden dependencies.

Rollback is deletion/reversion of the application candidate and ignored local data.
There is no production migration. The JSON schema should carry `schemaVersion: 1`; fail
closed on an unsupported version rather than silently rewriting it.

Observability consists of the safe append-only activity timeline, server request IDs,
connector status transitions and test logs. Show usage as `unavailable` for synthetic
adapters and unknown provider routes; never display zero as an inferred cost.

## Verification and readiness

Required automated checks:

1. Unit tests for Session transitions, classification/grant decisions, proposal revision
   checks, owner-only acceptance and safe audit redaction.
2. Connector contract tests shared by both synthetic adapters, including abort before
   contribution commit and deterministic event order.
3. HTTP tests proving missing/wrong owner cookie, CSRF, Origin, Host and content type are
   rejected; traversal/static-file and script-in-content probes do not execute or escape.
4. Negative boundary tests proving unselected/company-private context is absent from the
   wrong participant envelope, `agent_private` cannot be owner-supplied, stopped Sessions
   cannot dispatch/contribute, and acceptance cannot be performed by an agent identity.
5. One end-to-end test: owner starts one Session, selects synthetic context, both labeled
   synthetic participants contribute, a proposal appears, changes are requested, a new
   revision is proposed and accepted, and the trace attributes every transition.
6. UI verification at desktop and narrow viewport, including keyboard focus, readable
   status, visible simulated labels and an unambiguous stop control.

Builder readiness conditions are the three current PRDs and integrated design being
available, with any conflicting requirement returned to the orchestrator. Preview
acceptance requires passing checks, independent review of the actual candidate and a
local rendered preview. It must say “simulated” and must not claim live interoperability.

Open questions owned by the Technical Specialist are the exact Codex app-server protocol
version and supported product-embedding terms, Claude API credential/model/budget, and
provider-specific retention/cancellation behavior. These do not block the synthetic
preview. A live adapter remains off until its executable or API authentication, explicit
owner run action, bounded spending authority and failure/stop behavior are verified.
