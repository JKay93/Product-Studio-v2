<!-- studio {"id":"byoa-world:technical-specification:phase1-external-codex","scope":"byoa-world","type":"technical-specification","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"},{"relation":"reference","target":"byoa-world:discovery:codex-external-route"}]} -->
# Technical specification: owner-local external Codex

- Technical Specialist owner: bounded builder; independent reviewer checks candidate; orchestrator accepts evidence.
- Last material update: 2026-09-30.
- Requirements, context and decisions implemented: [route-first contract](../CONTRACT.md), [route assessment](../research/codex-external-route.md), [modularity](MODULARITY.md). Real independent Codex supersedes the proposal review's scripted-harness-first recommendation.
- State: authored before implementation, now implemented locally pending independent acceptance and real-runtime proof; candidate checks are returned to the orchestrator separately. Template core sections retained.

## Interfaces and behavior

| Component | Responsibility and public interface |
| --- | --- |
| agents/connection | External connection definitions, enrollment, SHA-256 verifiers, bearer authentication, strict protocol validation; exports through index.js. Separate bridge and Codex invocation remain feature-owned. |
| work/session | Fixed task/context, work and attempt IDs persisted before claim, claim/ack/result lifecycle, atomic transaction and fail-closed recovery. |
| collaboration/document-review | Validated attributed contribution and clearly synthetic reviewer, proposal, owner acceptance. |
| app | Thin loopback HTTP routing and composition, owner cookie/CSRF, explicit launcher and separate state path. |

Protocol version 1 uses JSON objects with exact keys. All machine calls are POST:
`/machine/enroll` {protocolVersion,enrollmentSecret}; `/machine/claim`
{protocolVersion}; `/machine/ack`, `/machine/status` and `/machine/failure`
{protocolVersion,projectId,sessionId,participantId,workId,attemptId};
`/machine/result` adds {eventId,body,contextIds} to that identity.
No machine call accepts owner identity, commands, paths or provider configuration.
Claim returns {protocolVersion,projectId,sessionId,participantId,workId,attemptId,
deadline,task,context,allowedSharing,status,receipt}. The only sharing edge is draft
to synthetic reviewer. Ack means runtime claimed execution, not committed work.
Only the first atomic ack returns `executionGranted:true`; repeats return false. The
bridge requires that one-time grant before inference, preventing two different local
journals from both running the same attempt. A lost ack response stays uncertain.
Result is permitted only after ack. Result receipt contains receiptId,eventId,
contributionId,workId,attemptId. Exact canonical result retries return the original
receipt while authority remains active; changed result/event/source IDs fail.

Owner starts the fixed LIVE_TASK/LIVE_CONTEXT in external-only mode, then explicitly
pairs the current drafter. Enrollment returns a random 32-byte secret once, expires
in five minutes, and is atomically consumed. Redemption returns a separate random
32-byte World token, bound to session/participant/connection, expiring at the earlier
of session expiry or fifteen minutes. Only hashes persist. Pairing secrets are
transferred through bridge stdin, never command arguments,
logs, model prompts or normal workspace views. Bearer tokens cannot use owner APIs.
Enrollment and machine requests are limited to 40,000 bytes; contributions to
20,000 characters. Responses and runtime stdout are bounded. Error codes distinguish
INVALID_PROTOCOL, INVALID_SCHEMA, AUTH_REQUIRED, AUTH_EXPIRED, SESSION_STOPPED,
IDENTITY_MISMATCH, REPLAY_CONFLICT, WORK_ORDER and PERSISTENCE_FAILED.

One session has one durable work/attempt. Claim reconnect returns that same identity.
Receipts, contribution, synthetic review and proposal commit in one synchronous
transaction. Save failure restores prior in-memory state and disables further
authority for that process. Stop/revocation/expiry/completion immediately deny all
later machine reads and writes. Restart stops sessions and deletes verifier authority;
there is no resume after World restart. UI reports remote cancellation unconfirmed;
World authority ending does not prove the independent process stopped. Runtime failure
reports and the 65-second acknowledged-attempt deadline mark work indeterminate and
stop the session; silence cannot leave it indefinitely running.

## Approach and dependencies

Separate owner-run outbound polling bridge supports only explicit HTTP 127.0.0.1
origins and rejects redirects. It verifies the installed CLI version and sanitized
ChatGPT login status, never reads authentication files, and never falls back to API
authentication. Existing restrictive fresh ephemeral Codex runner is reused within
the connection feature with an optional credential guard. Codex child environment
is allowlisted, excluding World tokens and provider-key variables. Runtime deadline
is at most 60 seconds; total bridge activity at most 120 seconds. Tools and memory
import stay disabled; no filesystem containment claim follows from these settings.

Before inference, bridge exclusively reserves a local attempt journal (no tokens).
Completed bounded text is atomically cached for transport retries. Existing uncertain
reservation blocks inference; restarting may resend cached text but never reruns an
attempt. A lost enrollment response requires a new owner session, not an automatic
credential reset. Transport retry never implies model retry. Status polling aborts
the local run when authority ends; unknown cancellation is reported honestly.

No dependencies or installs. Explicit external launcher uses a new `.phase1/` state
path; it never reads or migrates `.data/`. Its server worker receives an explicit
environment allowlist without provider keys or Codex authentication home. Existing synthetic/live launchers stay intact.
Rollback stops external launcher and disables this route, preserving evidence. Local
HTTP is intentional for this owner-local experiment; HTTPS staging and real owner
authentication are future work. Activity stores IDs/status only, not secrets. Bridge
logs fixed status/error codes, never raw subprocess stderr or authentication output.
The explicit one-shot checker exclusively reserves `.phase1/real-check/attempt.json`,
starts World and bridge as sibling processes and leaves a successful proposal running
for manual human acceptance. It records sanitized success or failure-stage evidence
without reusing the reservation; no automatic real inference retry exists.

## Verification and readiness

Required checks: existing regressions; real HTTP plus separate fake-runtime bridge
process; owner/machine authorization separation; enrollment race and expiry; identity
forgery and invalid source rejection; duplicate result/conflict; stop/expiry/completion
late denial; exclusive journal and cached reconnect without inference rerun; injected
save failure restoring the previous state; secret sentinel absent from World state,
traffic and child environment. Independent reviewer assesses actual candidate.

Orchestrator alone runs one reviewed real Codex fictional execution, leaving proposal
unaccepted for human review. Subscription usage is unknown, not zero; no paid API call
or new purchase. Local success does not establish remote-hosting readiness, containment,
provider retention or suitability for private inputs. These remain orchestrator-owned
Phase 1 readiness gaps linked from the roadmap; this specification is not RM-06 completion.

### Startup correction: 2026-09-30

The original explicit run failed before enrollment/inference: the version parser
combined exact version stdout with known Windows arg0/PATH-alias access-denied
warnings on stderr. Corrected preflight retains separate bounded streams, accepts
only the two complete observed warning forms, and still requires the exact installed
version and a single exact ChatGPT authentication-status line. Unknown diagnostics,
other versions or API authentication fail closed. Paths and raw status output are
never logged.

One explicit `--recover-preflight-once` option validates the original failure stage
and code, pending work, unredeemed enrollment, absence of execution/result evidence
and absence of a matching runtime journal. It hashes and preserves predecessor
attempt/failure/World records, reserves a new exclusive recovery attempt, and uses
`.phase1/real-check-recovery/world.json`. Changed or uncertain predecessor evidence,
any issued credential, acknowledgment, journal or prior recovery blocks dispatch.
Existing `--run-once` stays exclusive. This is a reviewed startup correction, not an
automatic inference retry. Tests cover realistic separate-stream warnings, negative
authentication/version cases, recovery eligibility and immutable predecessor hashes.

The explicit recovery subsequently reached enrollment and acknowledgment, then failed
with indeterminate execution and no contribution. Its runtime diagnostic was emitted
by the bridge but discarded by the coordinator; the cause and inference/usage remain
unknown. The second bounded correction is offline observability only: validate the
emitted diagnostic through the existing code/event/item/exit-status allowlist and
persist it with future failure evidence after child streams close. No raw stderr,
paths or authentication output are retained. Existing failure records are unchanged;
no additional recovery or inference retry is implemented or authorized by this fix.

### Launch-context diagnosis: 2026-09-30

The user subsequently authorized launch diagnosis, isolated verification and then
the full World flow. Comparison with published `0312413` found identical executable,
arguments, fresh working-directory approach and child environment allowlist; the
external route only made the unused provider-key guard optional. A bounded isolated
check identified access-denied initialization in the outer workspace-restricted
context. The orchestrator reports an isolated normal-owner-context run returned a
234-character draft using the exact same restricted Codex settings. This supports a
launch-context cause, not a need to relax the agent's settings. Full-flow acceptance
is recorded separately by the orchestrator.

The bridge must be launched where the owner's Codex runtime can initialize its local
state; preserve read-only model sandbox, disabled tools, ephemeral task and runtime-
owned authentication. No global permission/configuration changes or authentication
file copies are part of this correction. Failure diagnostics retain at most 16 KiB
of stderr only in memory and output allowlisted classifications, including runtime
initialization access denial. The temporary caller inspection hook is removed from
the final candidate. No raw stderr, paths, credentials or arbitrary error strings
enter saved evidence; prior evidence and unmeasured usage remain unchanged.
