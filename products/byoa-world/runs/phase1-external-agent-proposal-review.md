<!-- studio {"id":"byoa-world:review:phase1-external-agent-proposal","scope":"byoa-world","type":"review","status":"draft","links":[{"relation":"reference","target":"byoa-world:technical-context:agent-world-boundary"},{"relation":"reference","target":"byoa-world:contract:main"}]} -->
# Review: Phase 1 external-agent proposal

- Reviewer identity / role: bounded Technical Specialist review; owner: Technical Specialist; last material update: 2026-09-29.
- Candidate revision and contract/requirement revision: architecture proposal dated 2026-09-29, inspected against application `0312413d556767efae1d692198aa8edc7845e11b`; contract Phase 1 direction and handoff dated 2026-09-29. This is a draft proposal review, not implementation acceptance or authorization.
- Verdict: **PARTIAL**. The responsibility split is sound. Bound the concrete slice and delivery semantics below before implementation; a generic remote connector is not yet specified.
- Acceptance criteria checked and evidence: source inspection confirms Session grant rechecks and owner-only Review acceptance, but no external identity, machine ingress, persistent work receipts or runtime registration exists. No code tests or provider calls were performed in this review.
- Document/template comparison: retains all fields of `operating-system/templates/review.md`; findings, scope and checks expand its required-fixes and residual-risk fields. No material structural departure.
- Preserved decisions checked: provider access remains runtime-side; Session owns permission/lifecycle, Review owns contributions and canonical acceptance; three existing feature owners and public interfaces; fictional fixed input, fresh sessions, no memory import, no new spending or deployment. Phase 0 acceptance is unchanged.
- Required fixes: agree the bounded scope below and express its checks in a builder assignment before dispatch. Keep the broader proposal as future design, without claiming local proof validates HTTPS staging.
- Residual risk / verification limitations: no remote runtime, encrypted transport, provider retention, containment or private-data readiness was verified. This review does not approve a particular external product integration. The orchestrator records final acceptance.

## Concrete gaps and smallest resolution

| Observed gap / source | Resolution for this slice |
| --- | --- |
| `agents/connection/service.js` supports hard-coded provider identities and only synthetic/live modes. | Add an explicitly labeled external-fixture mode with one independently launched deterministic harness, plus the existing synthetic reviewer. Use participant role/name metadata rather than presenting the harness as Codex. No provider invocation. |
| `app/server.js` automatically grants a local owner cookie and all APIs require that cookie. | Preserve loopback-only owner preview; separate machine authentication and thin routing. Owner pairs one runtime to one session participant. A short-lived enrollment secret is consumed atomically once; store only credential verifiers. No credential in URL, model prompt, log or ordinary workspace response. |
| `SessionService` dispatch assumes in-process sequential results; restart stops running sessions. | Session owns durable work/attempt IDs, minimal claim/ack/result receipts and current authority checks. Persist identity before offering work. Same-process harness reconnect reuses the attempt; server restart remains fail-closed, revokes authority and requires a fresh owner session. Do not promise restart resume. |
| `ReviewService.submit()` immediately saves via audit; repository saves the entire state. | Commit receipt/deduplication and contribution as one durable state update. An identical retry returns the original receipt without another contribution; conflicting content for an existing event or completed attempt fails. Do not save a contribution before its receipt or vice versa. |
| `ReviewService.propose()` requires exactly two contributors and provider-specific labels; server shares all prior contribution bodies. | Retain an explicit two-participant pair, generalize labels only for that pair and authorize the drafter-to-reviewer sharing edge. No general participant catalogue or implied permission to redistribute contributions. |
| Proposal describes HTTPS while current app binds HTTP loopback. | First prove protocol and permissions through outbound-initiated loopback HTTP polling, visibly restricted to a local fictional test. A separate HTTPS staging phase must replace automatic owner admission and verify actual remote infrastructure. |

## Recommended vertical slice for user agreement

A known local owner starts the fixed fictional task, pairs a separately running no-provider harness as drafter, and grants only that session's selected fixture. The harness polls World, receives one work envelope, and returns a bounded attributed draft. World feeds that draft to the explicitly authorized synthetic reviewer, forms a proposal, and leaves revision and acceptance to the human. Include stop, enrollment expiry, session expiry, owner revocation, reconnect and duplicate delivery/result handling.

Ownership: `agents/connection` owns pairing, verifier and harness adapter; `work/session` owns grants, envelope selection, work identity and lifecycle; `collaboration/document-review` owns validated contributions/proposals and human acceptance; `app/` only composes routes and services through public interfaces. Place a small deterministic harness outside the World process. Use an isolated explicit test state path, never default existing `.data/` or a migration of it. Keep existing synthetic/live launch modes unchanged. Rollback disables the external-fixture route and revokes its World credentials; preserve test evidence.

Specify one protocol version with exact schemas, byte limits, timeouts, error codes and canonical payload comparison. Identity derives from the credential; caller-supplied session/participant/work IDs must match bound authority. Offer and acknowledgment do not mean execution or contribution commit. Timeout is indeterminate, with no automatic new attempt. External cancellation acknowledgment is separately reported from World revocation. Runtime capability and usage statements remain reported claims; the fixture harness uses no model provider.

## Acceptance checks for the future candidate

1. Launch World and harness as separate processes with a fresh isolated fixture store; one complete draft/review/proposal path works and no canonical change occurs before human acceptance. Owner revision checks and existing preview regressions pass.
2. A harness-only fake provider-secret sentinel is absent from captured World requests, persisted World state and logs. Only a World credential crosses the boundary. This proves separation in the tested route; it cannot prove an arbitrary or malicious runtime never returns a secret in text.
3. Missing/wrong credentials, forged participant/session IDs, cross-participant reads, excluded resources, owner APIs and canonical writes are denied. Prompt text cannot expand authority. Unsupported protocol or required capability fails before context delivery.
4. Enrollment expiry and two simultaneous redemption attempts yield at most one credential. Raw enrollment/World secrets never appear in durable state, URLs, ordinary owner views or logs. Credential scope and revocation are checked on every machine request.
5. Drop the response after result commit, then resend: exactly one contribution and the same receipt. Repeat claim/ack and reconnect use the same work/attempt. Reject changed replays, stale attempts, oversized payloads, invalid source IDs and out-of-order lifecycle events.
6. Stop, expiry, completion and owner revocation prevent further context delivery and late writes, including a result racing revocation. World reports remote stop as unknown unless acknowledged; an acknowledgment is a runtime claim. Restart fails closed and cannot revive credentials or paid work.
7. Inject persistence failure around result receipt/contribution commit; neither an unreceipted contribution nor receipt without its contribution is published as committed. Preserve the last valid store and fail closed. Existing `.data/` and budget records remain untouched.

These checks do not complete RM-06 or RM-06A. HTTPS staging still requires actual owner authentication, deployment/access decisions, encrypted transport, remote lifecycle tests and intended infrastructure isolation. Provider/account retention and runtime containment must be verified before private inputs.

## Unresolved direction choice

Recommend agreeing **local separate-process polling with a deterministic fictional harness and synthetic reviewer first**, followed by a separately scoped HTTPS staging decision. If the intended next proof must connect another machine or a real agent product, select that runtime and staging/authentication scope first; the present automatic local-owner route is insufficient. General onboarding, private inputs, existing-memory import, remote deployment and new paid calls remain outside this proposal.

## Source references

- [Phase 1 handoff](../handoffs/PHASE-1-HANDOFF.md), [contract](../CONTRACT.md), [state](../STATE.md), [roadmap RM-06/RM-06A](../ROADMAP.md), [Phase 0 closeout](../closeouts/PHASE-0-CLOSEOUT.md).
- [Architecture proposal](../architecture/AGENT-WORLD-BOUNDARY.md), [modularity](../architecture/MODULARITY.md), [organization decision](../decisions/001-project-organization.md).
- Application revision above: `src/features/agents/connection/service.js`, `src/features/work/session/service.js`, `src/features/collaboration/document-review/service.js`, `src/app/server.js`, `src/app/repository.js`. Source inspected locally; no `.data/` reads or edits.
