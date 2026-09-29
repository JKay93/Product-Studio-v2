<!-- studio {"id":"byoa-world:discovery:codex-external-route","scope":"byoa-world","type":"discovery","status":"draft","links":[{"relation":"reference","target":"byoa-world:contract:main"},{"relation":"reference","target":"byoa-world:technical-context:agent-world-boundary"}]} -->
# Discovery evidence: separate Codex runtime route

- Researcher owner: Technical Specialist; orchestrator owns scope and acceptance.
- Last material update: 2026-09-29.
- Method, sources and date range: current official OpenAI documentation, application source inspection, and orchestrator-reported local CLI preflight on 2026-09-29. Uses the discovery-evidence template's three core sections without structural departures.

## Scope and limitations

- Question: can an independently launched, owner-controlled Codex runtime receive a fictional World task and return a draft using existing local subscription authentication, without World launching Codex or receiving provider credentials?
- Corpus: official pages below; application `src/features/agents/connection/codex-draft-check.js`; [modularity rules](../architecture/MODULARITY.md); [proposal review](../runs/phase1-external-agent-proposal-review.md).
- No provider inference, credential-file inspection, private input, `.data/` access, installation, global configuration change or application implementation occurred in this research. CLI preflight is not an end-to-end interoperability test. Phase 0 collaboration evidence remains valid but does not establish this external boundary.

## Findings

| Evidence | Observation and implication |
| --- | --- |
| [Official non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode) | `codex exec` is documented for scripts. It accepts piped input, emits JSONL with `--json`, supports ephemeral runs and reuses saved CLI authentication. This supplies the runtime-side invocation mechanism; it does not supply a World connector. |
| [Official authentication](https://learn.chatgpt.com/docs/auth) | ChatGPT subscription authentication is supported for local Codex CLI work. The same page recommends API-key authentication for programmatic workflows such as CI/CD and warns against exposing execution in public or untrusted environments. Evidence supports a trusted owner-local experiment, not a claim of unrestricted subscription-backed hosted service entitlement. |
| Orchestrator local preflight | Installed executable reports `0.158.0-alpha.2.1`; help exposes `exec`, JSON output, ephemeral runs, stdin and ignoring user config. An allowlisted child environment with explicit Codex home resolution returned `codex login status` exit 0 and sanitized method `ChatGPT`, without a home-resolution error. Raw authentication output was not emitted. Earlier help warnings were resolved in the child environment only; no global setting changed. |
| Existing runner source | Phase 0 already invokes this executable with a fresh temporary working directory, restrictive settings and bounded JSON event parsing. It runs inside World's dispatch path, so reusing it there would not prove independence. Its executable path is machine/version-specific; its configuration and event expectations require version checks. |
| [Official App Server](https://learn.chatgpt.com/docs/app-server) | App Server offers deeper client integration with authentication, history, approvals and events. Its command/WebSocket transport is marked experimental and unsupported for production. It is unnecessary for this one-shot draft and is not recommended for the first route. |

**Conclusion:** the documented CLI mechanism and current local ChatGPT sign-in make the proposed route feasible for a bounded trusted local experiment. There is no identified CLI prerequisite blocker. The external World protocol and bridge do not exist yet, and successful inference through that bridge has not been demonstrated.

Contrary or inconclusive evidence: sign-in status does not establish current entitlement, available quota, successful network inference or policy suitability for a future multi-user service. Ephemeral runs and disabled tools do not establish filesystem containment or provider retention. Existing subscription use consumes account allowance; unknown usage must not be reported as zero. Do not silently fall back to an API key, another paid provider or a new purchase.

## Implications and follow-up

### Smallest next build boundary

Implement a separately owner-launched bridge that initiates outbound polling to loopback World, accepts one fixed fictional draft task, invokes local `codex exec` once and returns its validated draft. This starts a fresh task; it does not attach to an existing chat, import personal agent memory or resume a previous Codex conversation. World neither starts the bridge/Codex process nor accesses Codex authentication. The bridge handles its own runtime configuration; no executable path, shell command, provider credential or permission-setting instruction supplied by World may control execution. Keep the World work envelope provider/runtime agnostic.

| Owner | Responsibility |
| --- | --- |
| World `agents/connection` | Pair one runtime, issue narrowly scoped World credentials, authenticate machine traffic and expose connection status through public interfaces. |
| World `work/session` | Select permitted fictional context; own work/attempt identity, lifecycle, cancellation authority and durable receipts. |
| World `collaboration/document-review` | Validate and attribute the returned draft and preserve explicit human acceptance of canonical output. Reuse the existing workflow; any synthetic reviewer stays visibly synthetic. |
| Separate bridge/runtime | Retain provider authentication locally; poll/claim, invoke a fresh Codex run, bound execution/output, report result and usage if available, preserve attempt identity across transport retries and stop local execution when notified. Never put its World credential in the model prompt or Codex child environment. |
| Thin application composition | Route through public feature interfaces; do not move authentication, work lifecycle or review logic into a generic server handler. |

Before builder dispatch, define exact versioned schemas, limits, enrollment/credential lifetime, result receipts, reconnect semantics and failure responses. Use a fresh explicit test store, preserve existing `.data/` and budget evidence, and keep current synthetic/live routes working. Review changes to the previous deterministic-harness recommendation explicitly: the product proof now requires real external Codex execution; a deterministic fake remains only a test dependency.

New evidence needed focuses on the new boundary: independent launch, only permitted context crossing it, absence of provider authentication from captured World traffic/state, one runtime execution despite network/result retries, and late-result rejection when authority ends. Reuse applicable Phase 0 regression checks rather than presenting them as new capability. A lost or uncertain execution must not automatically cause another model invocation. A runtime cancellation acknowledgment is separate from World's immediate revocation.

### Remaining assumptions and ownership

- Builder: implement the bounded bridge and protocol after the orchestrator records the user's current scope, then provide offline fault checks plus an explicitly bounded real fictional execution. Do not import the Phase 0 runner across feature internals; extract or adapt the runtime-side invocation behind an appropriate public boundary.
- Independent reviewer: assess the actual candidate against the protocol and modularity rules. Orchestrator: accept evidence and update [roadmap](../ROADMAP.md) milestone records; this research does not complete RM-06 or authorize publication.
- Future remote/private readiness: actual remote hosting, HTTPS, owner authentication, runtime containment, provider handling and multi-user subscription suitability remain unverified. Local same-user processes demonstrate architectural separation, not protection against that user's malicious processes or a confidential-data pilot.

Discovery supports the route decision; no connector or external live proof is claimed complete.
