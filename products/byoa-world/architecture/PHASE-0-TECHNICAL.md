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

## Standalone live collaboration check addendum

The user authorized one subsequent standalone Codex Subscription to Claude API check
after the successful Claude connection check. This is a synthetic-context, one-shot
experiment outside the preview UI. It may demonstrate a sequential provider handoff:
Codex drafts a bounded answer and Claude reviews only that draft plus the same synthetic
brief. It does not demonstrate direct agent-to-agent communication, private-data
isolation, UI integration, provider deletion or durable cancellation.

The Codex child must use the locally observed `codex-cli 0.158.0-alpha.2.1` executable,
resolved to an absolute path and launched directly with an argument array. Run `exec`
with `--ephemeral`, `--skip-git-repo-check`, `--ignore-user-config`, `--strict-config`,
`--sandbox read-only` and `--json`. Set `approval_policy="never"`, disable web search,
the shell tool, agents, apps, browser/computer use, search and skill discovery through
recognized one-run configuration overrides, and disable transcript persistence. The
official Codex configuration schema recognizes these controls, while the installed CLI
has no documented universal `--no-tools` switch. Consequently, these settings reduce
capability but do not establish read confinement or a tool-free execution boundary.

Use an empty random temporary working directory, pass the prompt over standard input,
and bound the child to 45 seconds, 64 KiB stdout and 16 KiB stderr. Terminate its process
tree on timeout, output overflow or an unexpected event. Supply a fresh allowlisted
environment containing only the Windows runtime, temporary-directory and Codex
authentication-path variables needed by this host. `ANTHROPIC_API_KEY`, Claude-related
variables and unrelated inherited variables must be absent from the Codex environment;
never print an environment dump. Parse the JSONL fail closed: accept lifecycle events
and exactly one completed `agent_message`; reject approval, tool, command, file, network,
MCP or otherwise unknown action events. Treat model instructions not to use tools as a
defense in depth, not an enforcement control.

The Claude request remains server-side, uses the already selected bounded model and
token/output limits, and receives no filesystem, shell or Codex credential. Treat both
providers' text as untrusted data: validate the expected schema and marker, cap text
before forwarding, and never interpret returned text as a command. No provider output
may be inserted into the preview or canonical document by this check.

Create a new collaboration-check ledger without modifying or replacing
`.data/claude-live-check.json`. Before either provider call, durably record the new
attempt as reserved under the same original US$1 allowance and carry forward the prior
Claude estimate of US$0.000067. Do not create another US$1 reservation or reset
cumulative usage. Record prior estimate, this-run estimate and cumulative estimate
separately; refuse dispatch if the bounded estimate would exceed the allowance or if
the new ledger already contains an attempted terminal run. A failure after reservation
is still an attempt and must not auto-rerun.

Set `verified: true` only when the Codex process exits successfully with the exact safe
event shape and valid bounded draft, the Claude API returns a valid bounded review, the
ledger is durably completed, and cumulative estimated spend remains within the original
allowance. Store companion claims as `syntheticContextOnly: true`,
`privateIsolationVerified: false`, `uiIntegrated: false` and
`directAgentToAgent: false`. On any ambiguity or partial success, record a failed or
indeterminate result and leave `verified` false.

Technical basis: locally inspected `codex exec --help` and the observed executable on
2026-09-29; OpenAI's [configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference),
[configuration schema](https://learn.chatgpt.com/docs/config-schema.json), and
[sandbox guidance](https://learn.chatgpt.com/docs/sandboxing). The official guidance
distinguishes sandbox restrictions from approval policy and describes `read-only` as an
inspection-capable mode, which is why this experiment remains synthetic-only.

### Startup diagnosis after the first collaboration attempt

The first collaboration attempt ended as `codex_failed_no_claude_request` after 329 ms.
A no-provider reproduction used the runner's exact executable, arguments, empty temporary
working directory and environment allowlist, adding only a deliberately nonexistent model
provider so no model turn could start. It reproduced the startup error `Could not find home
directory`: the allowlist retained `USERPROFILE` but omitted `CODEX_HOME`. Adding `PATH`,
`HOMEDRIVE` and `HOMEPATH` did not change the result. Setting `CODEX_HOME` to the explicit
source value when present, or otherwise to the conventional `.codex` directory beneath the
allowlisted `USERPROFILE`, advanced the same command to the deliberate nonexistent-provider
failure. This establishes startup and strict-config acceptance without a provider request.

The earlier parse-only preflight validated configuration keys by setting `CODEX_HOME` in
the diagnostic shell; it therefore did not exercise the runner's pruned child environment
and could not detect this omission. The runner must test both the exact configuration and
the exact child environment in future no-provider preflights. The failed ledger remains
immutable and is not reset; any separately authorized recovery is a new linked attempt
under the same original US$1 cumulative allowance.

## Integrated live synthetic workflow addendum

The user subsequently authorized a local UI path in which Codex Subscription drafts and
Claude API reviews, followed by human revision or acceptance. This remains one bounded
synthetic workflow. It does not authorize private information, an editable live prompt,
automatic retries, spatial UI, production release or broader connector work. The live
path must use a server-owned fictional community-library book-swap task and one fixed
`shared` context fixture. Selecting live mode automatically selects that fixture; the
server rejects client-supplied live task text or context IDs. The existing editable task
and context controls remain available only for the simulated mode. Human editing begins
at the proposal-review step, after both provider contributions are stored.

### Ownership and interfaces

- `features/work/session` owns the fixed live task/context policy, grants, lifecycle,
  disclosure authorization and terminal stop behavior. The browser may request live mode
  but cannot choose or replace its outbound content.
- `features/agents/connection` owns the live Codex and Claude adapters, the durable Claude
  budget coordinator, provider timeouts, credential boundaries, exact payload construction
  and safe provider diagnostics. Adapters receive only the authorized fixed envelope.
- `features/collaboration/document-review` continues to own attributable contributions,
  proposal composition, owner revision and explicit acceptance. Provider output never
  updates canonical state directly.
- `app/` wires the existing routes and workspace surface to these public feature APIs. It
  may expose safe budget and disclosure views but must not implement provider policy or
  budget arithmetic itself.

The live adapters retain the existing connector contract and run sequentially. Codex
receives only the fixed task and fixed synthetic context. Claude receives a fixed review
instruction plus the accepted bounded Codex draft as untrusted data; the original context
is not sent to Claude again. The Codex child uses
the proven exact executable/configuration path, empty temporary directory, scrubbed
environment and fail-closed event parser. `ANTHROPIC_API_KEY` and all Claude-named
variables remain absent from its environment. Read-only mode still permits inspection and
does not prove filesystem read confinement, so no user-authored content is permitted.

Both adapters must consume the Session's `AbortSignal`. Stopping or expiring a Session
terminates the Codex process tree and aborts the Claude HTTP request. Immediately before
and after each awaited provider result, the server rechecks the signal, active Session and
grant. A late response after stop retains the full conservative reservation even if it
contains usage, and it cannot create a contribution, proposal or canonical write. A live adapter
failure terminally revokes grants and prevents redispatch in that Session. The application
does not retry either provider automatically.

### Durable cumulative Claude budget

The original total allowance remains US$1. The historical base is US$0.001312:
US$0.000067 from `.data/claude-live-check.json` plus US$0.001245 from
`.data/collaboration-live-review.json`. Initialization must validate those two successful
ledgers, their model/usage/cost arithmetic and cumulative relationship, and validate that
the two preserved collaboration-failure ledgers prove no Claude request. A missing,
modified, contradictory or usage-unknown historical record blocks live readiness; it must
never be interpreted as zero. Existing files are read-only inputs and are never reset,
renamed or rewritten.

Store integrated attempt records in a separate append-only budget directory. Acquire an
interprocess lock by exclusive lock-file creation before scanning or adding records. A
stale lock blocks dispatch and requires explicit investigation; it is not deleted by age.
Create each reservation and settlement with exclusive creation, flush it before releasing
the lock, and never overwrite or delete a record. The reservation identity includes the
Session and dispatch IDs so one dispatch cannot reserve twice.

Reserve US$0.05 before starting the live dispatch. This exceeds the selected Claude
model's bounded maximum for a request capped at 12,000 UTF-8 prompt bytes, 2,048 tokens of
conservative protocol overhead and 512 output tokens at the recorded US$1/M input and
US$5/M output prices and leaves additional margin for provider accounting variation.
Under the lock, reject a reservation unless historical known cost, all prior integrated
effective charges and the new US$0.05 reservation total no more than
US$1. An unsettled attempt, a provider failure after reservation, unknown usage, process
crash or uncertain persistence consumes its full US$0.05 reservation permanently. A
successful response with valid bounded usage may settle to its calculated cost; invalid
or above-reservation usage is recorded as uncertain and charged at US$0.05. Budget values
shown in the UI are estimates and must distinguish known measured cost from conservative
reserved/unknown charges.

### Local API and UI behavior

The existing Session start and dispatch routes remain the composition surface. For live
mode, `POST /api/sessions` accepts only the mode request and applies the fixed task/context
server-side. The workspace response adds a safe live-readiness/budget view and disclosure
records. Each disclosure names the recipient, the exact synthetic task/context supplied,
whether the Codex draft is forwarded, and a hash of the serialized outbound payload. It
contains no credential, header, environment value, provider error body or hidden context.
All displayed provider text continues to use text nodes.

The live setup is one compact chat-like path: show the fixed fictional brief as a locked
message, name the automatically shared synthetic context, display the remaining estimated
budget and limitations, and offer one explicit start action. Do not show live context
checkboxes or imply that typed text will be sent. During work, show queued/running/stopped/
failed/contributed states and an unambiguous Stop action. After both contributions, retain
the existing proposal editor, request-changes and explicit accept controls. A disclosure
details view lets the owner inspect what each provider received. Labels must continue to
state that the route is live, the content is synthetic and private isolation is unproven.

### Integrated verification

Automated acceptance covers: fixed live task/context derivation despite hostile client
fields; absence of private sentinel IDs/bodies in both provider inputs and disclosures;
the Claude key absent from the Codex child environment and all state/audit/error output;
historical ledger validation; US$0.001312 carry-forward; concurrent reservation races;
restart handling for unsettled attempts; exact-cap rejection; full-reservation charging
for failed or unknown usage; and no automatic retries. Cancellation tests stop during
Codex, stop during Claude, provider ignoring abort and late success, proving no late
contribution/proposal/canonical mutation while preserving the conservative charge.

One mocked end-to-end UI/server test starts the fixed live Session, records Codex then
Claude contributions, exposes both disclosures, allows owner revision and requires owner
acceptance before canonical state changes. Negative HTTP tests cover edited live task,
extra context, duplicate dispatch, stopped/failed Sessions and missing budget authority.
Desktop and narrow-viewport review must verify the locked fictional brief, automatic
context label, budget language, live/synthetic labeling, disclosure details, Stop control
and readable provider failure state. No additional live call is required for implementation
or review; a future real integrated run remains separate evidence.

## Phase 0 closeout / external-runtime direction

The user accepted the bounded prototype with private-data readiness deferred to
Phase 1 staging. See [closeout](../PHASE-0-CLOSEOUT.md). Current direct-provider/local
execution is historical prototype evidence, not the required external-agent model.
The [Agent-World boundary assessment](AGENT-WORLD-BOUNDARY.md) proposes the smallest
extension under the newly approved runtime-owned credential principle; no external
connector is implemented by this record.
