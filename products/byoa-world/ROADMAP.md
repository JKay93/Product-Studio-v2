<!-- studio {"id":"byoa-world:roadmap:main","scope":"byoa-world","type":"roadmap","status":"approved","links":[{"relation":"requires","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:account-agents-world-experience"}]} -->
# BYOA World roadmap

Owner: Product Manager; orchestrator maintains progress. Updated: 2026-10-03.
Direction: [Decision 008](decisions/008-account-agents-world-experience.md). No committed dates.

## What we are building

A World where humans and independently owned agents work together.

We will prove the experience with BYOA-hosted agents first. Later, people can bring external agents while keeping their own runtime, model credentials and ownership.

**The account owns the agent. The World grants access. The runtime executes work.**

## Build order

| Step | What we build | Done when | Current status |
| --- | --- | --- | --- |
| **1. Agent Creation** · BYOA-01 | Create an account-owned agent, usually an orchestrator. Allow multiple orchestrators and manually created direct sub-agents. Select an orchestrator and its team for a World. | Agents can be saved, edited and reopened; selecting the same team for another World preserves its identity and respects each World's access. | Proposed; existing configuration needs realignment |
| **2. Chat** · BYOA-02 | Simple GPT-like conversation between a human and the selected orchestrator. | The orchestrator responds through the first hosted runtime; conversations remain scoped to their World. | Proposed; existing Chat is synthetic |
| **3. Knowledge** · BYOA-03 | Basic World documents and folders, with reading and editing. | A human can organize, read, edit, save and reopen documents in the correct World. | Proposed; existing saved notes are reusable |
| **4. Agent Actions** · BYOA-04 | Let the orchestrator read authorized World knowledge and create or update documents. | A chat request produces a useful saved document or reviewed update, with clear attribution and appropriate write permission. | Proposed; validator replacement is high priority |
| **5. Sub-agent Collaboration** · BYOA-05 | Orchestrator delegates to a selected direct sub-agent, receives its result and produces World work. | One useful task completes through delegation, result return and a saved document or update. | Proposed; no general live delegation delivered |

Build in this order; each step uses the previous one. The builder owns delivery, with one relevant independent review. Existing evidence can be reused where it still applies; it does not prove these new outcomes.

The complete journey is: **create an agent → select it for a World → chat → use knowledge → delegate → save useful work.**

## Keep the architecture open

Agent identity and configuration remain separate from execution. BYOA hosting is the first runtime implementation.

Hosted and future external agents use the same World-facing interfaces for Chat, Knowledge, Work, Activity and scoped participation. External agents keep their underlying model credentials with their own runtime. We preserve this boundary now; external connectors come later.

Each World keeps the five surfaces: Chat, Work, Knowledge, Incubator and Activity, with World switching. Chat remains the default. Account-owned agent creation and World team selection must be clear; their exact screen placement is still to be designed.

Use the accepted human foundation and restrained Ink Clay theme. Keep authorized access, company funding for company work, basic usage/budget limits, attributable outputs and human control. Natural writing follows instructions and human review; keyword presence is not proof of a useful document.

## Now, next and later

- **Now:** the direction and roadmap are realigned. No application changes or new model calls are part of this update.
- **Next:** inspect the existing configuration for Step 1 reuse and define the smallest change from World-owned agents to account-owned agents with World participation.
- **Later:** authorized agent creation of sub-agents, external runtimes, nested delegation and other deferred work live in the [backlog](PRODUCT_BACKLOG.md#current-priorities-and-deferred-work--2026-10-03). Review it after the five-step journey works.

## Existing work and history

The [accepted human foundation](runs/stage1-foundation-delivery.md), [saved configuration](runs/agent-configuration-delivery.md) and [offline Chat/document loop](runs/chat-first-world-delivery.md) are reuse candidates. Their original scope and evidence remain intact.

The fixed bakery trial did not complete its two-agent workflow. Its [outcome](runs/stage21-final-live-outcome.md), usage and consumed grants remain preserved. Finishing that old trial is not a prerequisite for the new build order.

The [previous detailed stage plan](closeouts/2026-10-03-prior-stage-plan.md) is archived reference. Historical Stage 2.1 is not being marked complete; BYOA-01–05 are the current milestones.

## Change control

This file alone owns milestone status. The contract records authority; decisions record direction; the backlog holds deferred scope; delivery records hold evidence.

This update approves the direction and planning sequence. It does not start implementation, provider preflight, live calls, new spending, migration or publication. Consumed trial grants cannot be reused. The weekly pilot remains stopped.

Template mapping: the build table contains outcomes, measures and status; the adjacent sequencing/review paragraph supplies owners and dependencies, and the history section links evidence. This compact format replaces the former package tables for readability. Now/next/later and change control remain explicit.
