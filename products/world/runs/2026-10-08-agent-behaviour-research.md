<!-- studio {"id":"world:run:agent-behaviour-research-2026-10-08","scope":"world","type":"run","status":"complete"} -->
# Agent behaviour and reply presentation research

## Goal and authority

User requests a summarized primary-source comparison of Hermes, OpenClaw, Claude,
Codex and ChatGPT: vague requests, clarification/action, chat behaviour and rich
message presentation. Research and read-only application inspection only. No app,
policy, database, worker, spending or runtime changes authorized by this request.

## Tasks and acceptance

- R1 Root: inspect public primary documentation/source, distinguish documented
  intended behaviour from black-box measured outcomes; cite supporting pages.
- R2 Root: inspect current World working guidance/output rendering and identify
  verified presentation gaps separately from inferred behaviour causes.
- R3 Root: give concise comparison, concrete vague-request examples and proposed
  next priorities; proposals do not become approved product decisions.

Acceptance: cover all five named systems, clarify Markdown versus host widgets,
identify evidence limits, no paid model tests or implementation.

## Outcomes, questions and handoff

Completed primary-source research and source inspection. No question pending.
Existing application/runtime remains unchanged; testing services not interrupted.
No paid comparative model calls, observed behavioural success percentages, latency
or token-cost benchmark. Documentation establishes intended/configurable contracts,
not a guarantee of exact model responses. No subagent dispatch needed for read-only
research/administrative continuity; no implementation or product policy approved.

## Findings and primary evidence

- [Codex recommended prompt](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide):
  bias toward useful implementation with reasonable assumptions, clarification only
  when genuinely blocked and no excessive loops. Recommended prompt, not a claim
  that every currently deployed Codex route has identical instructions.
- [Claude chat published prompt](https://platform.claude.com/docs/en/release-notes/system-prompts/claude-opus-5-5):
  try addressing ambiguous queries before clarification, generally no more than one
  question per response, match effort/format to conversation. This is a published
  app prompt; World uses its own API working prompt, not the app's complete behaviour.
- [Claude Code loop](https://code.claude.com/docs/en/how-claude-code-works):
  gather context, act, verify; natural iterative conversation, no perfect prompt needed.
  [Claude prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
  documents configurable proactive/conservative action and avoiding tool overtrigger.
- [OpenClaw ask-user](https://docs.openclaw.ai/tools/ask-user): user-owned decisions
  rather than routine confirmation/derivable information. Default900s/max3600s bounded
  wait, no-answer outcome, cancellation tied to run, retained history; no-answer
  permits judgment, not invented permission. [Prompt assembly](https://docs.openclaw.ai/concepts/system-prompt)
  separates behaviour contributions from runtime/tool context.
- [Hermes clarification](https://hermes-agent.nousresearch.com/docs/reference/tools-reference/):
  structured/free-text/multi-select, batch1–5 questions, answered/skipped/unanswered
  and submitted/cancelled/timed-out/undelivered outcomes. [Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration)
  bounds clarification wait at default3600s, retains partial answers, resumes on timeout.
  Concrete lifecycle evidence; docs alone do not prove Hermes always chooses the best
  clarification threshold for an arbitrary vague request/model configuration.
- [ChatGPT ordinary conversation](https://learn.chatgpt.com/docs/use-chatgpt): natural
  conversation and iterative refinement. [Deep Research](https://developers.openai.com/api/docs/guides/deep-research)
  describes a distinct ChatGPT clarification/rewrite/research flow; API deep research
  does not automatically include those preparation stages. Do not generalize that
  workflow into mandatory interviews for every chat message.

World verified source gaps: agent-job-reply.tsx:36 renders output as a plain paragraph;
working-chat-presentation.tsx:66 renders output preview as pre-wrap paragraph. No
Markdown renderer dependency found in current package.json. Execution guidance
already defines READY/PARTIALLY READY/BLOCKED; repeated poor interaction is not proof
the policy is absent. Worker input.ts:428 permits enduring-lesson suggestions but
has no explicit exclusion of default execution guidance. That is a verified missing
distinction, not a traced explanation of the user's already-persisted learning card.
Current provider uses own prompt/text API without provider tools; output max2048.

Rich presentation: headings/lists/emphasis/links/quotes/tables/code are Markdown;
questions/approvals/files/charts/interactive previews are host features and typed
artifacts, not executable instructions inside model Markdown. [ChatKit widgets](https://developers.openai.com/api/docs/guides/chatkit-widgets)
explicitly separates Text/Markdown and forms/actions. [ChatGPT visualizations](https://learn.chatgpt.com/docs/visualizations)
and [MCP UI](https://developers.openai.com/plugins/build/app-quickstart) document
interactive results dependent on host/account/tools, not universal API output.

## Proposals and next action

Proposed only: concise proportional normal-chat guidance; reuse admitted context;
one ordinary question for bare Work with no objective, useful first draft when
objective clear/details missing, discussion questions answered without modifying
things, exact consequential approvals separate. Baseline manners/execution behaviour
must not require personal memory adoption. Use a shared safe Markdown renderer for
reply and output preview; keep rich cards and approval authority separate.

Before further behaviour revisions, use a small scenario rubric: greeting, no-context
Work, Work after settled assignment, placeholder-ready launch plan, changed direction,
question-only request, already-answered choice, cancellation/expired card, human
approval and prompt injection. Measure usefulness/instruction adherence separately
from lifecycle safety, latency and actual tokens/cost. This is a recommended next
step, not authority to run model tests or implement. Deliver summarized report in chat.
