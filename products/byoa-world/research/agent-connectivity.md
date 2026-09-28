<!-- studio {"id":"byoa-world:discovery:agent-connectivity","scope":"byoa-world","type":"discovery","status":"draft","links":[{"relation":"reference","target":"byoa-world:contract:main"}]} -->
# Discovery evidence: agent connectivity

- Researcher owner: Technical Specialist.
- Last material update: 2026-09-29.
- Method, sources and date range: official OpenAI and Anthropic documentation fetched
  on 2026-09-29, plus read-only inspection of locally installed commands and login
  status. No provider request, API call, purchase or credential extraction was made.

## Scope and limitations

The question is which supported routes could connect two independently operated agent
setups to the bounded Phase 0 preview. On 2026-09-29 the user selected **Codex
Subscription plus Claude API** as the target pair. The assessment keeps alternative
routes visible without treating them as the implementation target, and distinguishes
documented capability, local availability and an end-to-end route actually demonstrated
by BYOA World.

Official documentation can establish product interfaces, but it cannot establish the
user's entitlements, remaining usage, provider terms for a particular account, or the
behavior of an integration that has not been run. Local command inspection establishes
only this machine's current tool availability. Provider documentation can change.

## Findings

### Capability matrix

| Candidate route | Documented interface and authentication | Local evidence | Billing / retention boundary | Phase 0 assessment |
| --- | --- | --- | --- | --- |
| **Codex CLI / app-server using ChatGPT login — selected target** | OpenAI describes `codex exec` for bounded jobs, the Codex SDK for programmatic workflows, and app-server for product integrations needing conversations, streamed events, interruption, tools and approvals. The installed app-server exposes stdio and authenticated WebSocket transports. | `codex-cli 0.158.0-alpha.2.1` is installed. `codex login status` reported `Logged in using ChatGPT`. One authorized `codex exec` smoke returned the exact requested JSON from an empty temporary directory with ephemeral state and read-only sandbox; the JSONL stream contained no tool-call event. | Uses the existing ChatGPT-backed Codex login in this observed setup. The smoke consumed subscription usage but made no purchase. Context sent to the remote runtime is disclosed to that runtime. Read-only sandboxing is not proof of read confinement or tool disablement. | One-response CLI route verified. App-server lifecycle, cancellation, usage visibility and safe tool denial remain unverified. Keep synthetic as default and restrict any configurable live adapter to synthetic context until those gaps are resolved. |
| OpenAI API / official SDK | The API and SDK use an API key; Responses supports direct model calls and the Agents SDK supports application-owned orchestration. API usage is attributed to the selected organization/project. | No key presence or API entitlement was inspected, and no request was made. | Metered API usage is separate from a ChatGPT subscription. OpenAI documents provider-side retention and account-specific data controls; `store: false` does not create a universal no-retention guarantee. | Supported developer route, but excluded from the zero-new-spend preview. Add only after credentials, allowance, model and retention settings are explicitly chosen. |
| Claude Code CLI using a Claude subscription | Anthropic documents Claude Code login with a Claude Pro or Max plan and non-interactive `claude -p` output in text, JSON or streamed JSON. Permission mode and allowed/disallowed tools are CLI controls. | No `claude` executable was found on PATH, so login state and subscription access could not be checked. | Subscription usage is distinct from Claude Platform API usage. The CLI runs as an independently operated local process and may have filesystem/tool authority unless explicitly constrained. | Not locally available. Installation/login and a no-tools, synthetic-context smoke test are prerequisites; absence must remain visible rather than being replaced by a fake live claim. |
| **Claude API — selected target** | Anthropic documents the Messages API and official SDKs as API-key or workload-identity routes. The Agent SDK runs in an operator-controlled process; managed agents are a separate platform surface. | `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL` were not set, and neither `.env` nor `.env.local` exists in the application repository. Values were not printed. No request was made. | Requires Claude Platform access and metered usage. API credentials must stay server-side. Provider retention and workspace controls need account-specific review. | Supported developer route in principle, but a live call is blocked until a credential and explicit bounded spending allowance exist. It is not evidence that a Claude consumer subscription can fund API calls. |
| Claude Code routine trigger | Anthropic documents an experimental per-routine HTTP trigger that consumes Claude Code subscription usage and uses a routine-scoped token. | No Claude Code installation, web routine or token was inspected. | A trigger starts a configured cloud routine; it is not a general messages API and has separate limits and lifecycle semantics. | Too specialized for Phase 0's interactive contribution contract. Record as a later experiment, not the initial adapter. |

### Local Codex smoke evidence

The durable sanitized evidence is recorded here rather than retaining the raw host
transcript, which contained an opaque local thread identifier. The executable resolved to
`C:/Users/jingk/AppData/Local/OpenAI/Codex/bin/faa963e871dd422c/codex.exe`.
The run used an empty `%TEMP%/byoa-codex-smoke` working directory with `exec`,
`--ephemeral`, `--skip-git-repo-check`, `--ignore-user-config`, `--sandbox read-only`
and `--json`. It exited `0`. The only completed item was an `agent_message`:

```json
{"status":"ok","route":"codex-subscription","kind":"isolated-smoke"}
```

Lifecycle events were `thread.started`, `turn.started` and `turn.completed`; no command,
file, network, MCP or other tool item appeared. The run reported 14,472 input tokens,
12,416 cached input tokens and 23 output tokens. This is evidence of one authenticated
response path, not evidence that tools are technically disabled or that the route is
appropriate for private information.

### Sources

- OpenAI, [Codex as a platform](https://developers.openai.com/blog/codex-as-a-platform),
  describing the CLI, SDK and app-server integration layers.
- OpenAI, [Building consistent workflows with Codex CLI and Agents SDK](https://developers.openai.com/cookbook/examples/codex/codex_mcp_agents_sdk/building_consistent_workflows_codex_cli_agents_sdk),
  which directs deeper integrations toward app-server and newer automation toward the
  Codex SDK. The page is archived, so it is corroborating rather than sole evidence.
- OpenAI, [Developer quickstart](https://platform.openai.com/docs/quickstart/make-your-first-api-request)
  and [API authentication reference](https://platform.openai.com/docs/api-reference/authentication),
  for API-key-backed SDK use and server-side credential handling.
- OpenAI, [data controls](https://developers.openai.com/api/docs/guides/your-data),
  for API storage and retention limits.
- Anthropic, [Claude Code setup](https://docs.anthropic.com/en/docs/claude-code/getting-started)
  and [CLI reference](https://docs.anthropic.com/en/docs/claude-code/cli-usage),
  for subscription login and non-interactive structured output.
- Anthropic, [API overview](https://platform.claude.com/docs/en/api/overview) and
  [authentication](https://platform.claude.com/docs/en/manage-claude/authentication),
  for API/SDK credentials and workspace scope.
- Anthropic, [Claude Code routine trigger](https://platform.claude.com/docs/en/api/claude-code/routines-fire),
  for the distinct experimental subscription-backed trigger route.

### Contrary or inconclusive evidence

- A successful isolated Codex CLI response does not prove app-server compatibility,
  reliable cancellation, complete tool denial, a stable product API or a particular
  remaining usage budget. No tool event was observed, but prompt compliance is not an
  enforcement boundary.
- Official docs support Claude Code automation, but this host currently has no Claude
  executable. No Claude subscription-backed integration has been demonstrated.
- API SDK availability does not imply an API key, billing allowance or account-level
  retention configuration. Consumer subscriptions and developer API billing must not
  be treated as interchangeable.
- None of these sources proves two-agent interoperability, privacy preservation after
  disclosure, remote deletion, or a successful BYOA World Session.

## Implications and follow-up

Build the first working preview with two deterministic synthetic connectors named and
visually labeled as simulated Codex and simulated Claude participants. This validates
the platform contract, permissions, status, contribution, review and stop behavior
without provider cost or credentials. Keep provider adapters behind the same narrow
connector interface and disabled by default.

The first live experiments should enable one selected route at a time. The Codex CLI
smoke establishes a subscription-backed response path, so a configurable one-shot
adapter may be built with an empty temporary working directory, scrubbed environment,
ephemeral state, read-only sandbox, strict output/timeout limits and fail-closed handling
of any tool/action event. It may receive synthetic context only because read confinement
and complete tool denial are not established. App-server remains the candidate for richer
lifecycle control after its protocol and approval behavior are verified. The selected
Claude API route requires a server-side credential, model, small spending allowance and
retention configuration. Claude Code remains an alternative, not part of the selected
target pair.

Assumptions still unvalidated are provider entitlement, supported embedding terms,
structured event stability, cancellation semantics, cost visibility and remote
retention. The Technical Specialist owns the supported-route check; the builder owns
adapter contract tests; the independent reviewer checks that simulated and live states
cannot be confused.

This record follows the discovery-evidence template. It reports technical product
documentation and machine observations rather than customer research; participant
sampling fields are therefore represented by the source corpus and local inspection.
