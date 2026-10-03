<!-- studio {"id":"world:run:chat-first-onboarding-2026-10-04","scope":"world","type":"run","status":"draft"} -->
# Chat-first onboarding proposal

## Goal [world:run:onboarding:goal]

Discuss the user's signup-to-chat idea with Designer and PM, research relevant official Grok, Claude, ChatGPT, OpenClaw and Hermes patterns, and propose the best first-use experience for nontechnical SME users. User explicitly prioritizes UX over adopting their suggestion literally. Proposal only; no application implementation or replacement of approved product decisions.

## Tasks and acceptance [world:run:onboarding:tasks]

| ID | Owner | Criteria | Status |
| --- | --- | --- | --- |
| O1 | Designer | Compare relevant documented consumer chat/bot patterns; propose initial chat, inline creation, mobile/keyboard and error states using existing Calm Fluent guidance. Separate observed evidence from design inference. | Complete |
| O2 | PM | Assess creation options, first useful outcome, ownership/context/approval boundaries and organization invitation flow. Research official OpenClaw/Hermes patterns and define measurable acceptance criteria. | Complete |
| O3 | Orchestrator | Verify official ChatGPT references, exchange PM/Designer findings, synthesize a concrete recommendation and trade-offs, record unresolved proposals and delivery. | Complete; proposal prepared |
| O4 | Designer | User requested a visual of the Agent empty state. Create an interactive, conversation-only Calm Fluent mockup; inline creation preserves drafts and stays separate from Send. No production application changes. | Complete |
| O5 | Orchestrator | Inspect desktop/mobile rendering and actual creation/rename/draft interactions, then present the preview and record evidence. Proposal remains draft. | Verified; ready to present |

## Questions [world:run:onboarding:questions]

No user answer is required to research and propose. Automatic primary-Agent creation versus explicit lightweight confirmation is an open product choice, not approved behavior. The World application repository remains unanswered from phase 1, but does not block this discussion.

## Decisions [world:run:onboarding:decisions]

Preserve personal Agent ownership, private personal content, isolated Worlds/Sessions, scoped standing access and default consequential approvals. Current approved behavior asks users without an Agent to create one; any proposed change stays draft until user acceptance. Use existing Calm Fluent theme and World-only local UI UX Pro Max. Workers give concise results; Orchestrator owns records. Actual model activation, token usage and cost are unknown.

Dispatch routing SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`: Designer `/root/world_chat_first_designer`, requested gpt-6.1-sol medium fork none; PM `/root/world_chat_first_pm`, requested gpt-6.1-sol medium fork none. Host supports the requested routes; actual activation is unknown. Designer researches Grok/Claude and local UX guidance, PM OpenClaw/Hermes, Orchestrator official ChatGPT references; counterparts exchange findings directly.

## Outcomes [world:run:onboarding:outcomes]

Designer and PM exchanged findings directly and converged on signup -> chat shell -> one explicit inline Create my Agent -> first message. Orchestrator checked the cited official sources and consolidated the proposal. No application changes or new approved product decisions resulted.

## Proposed journey [world:run:onboarding:proposal]

Open the Calm Fluent chat workspace immediately, with visible Personal space context. If no Agent exists, show a compact creation card in the chat area, a default name and optional rename. One Create my Agent action establishes the owned identity. No required role questionnaire, provider, connector, canvas or Session-title setup.

Allow an editable first-message draft before creation, with an obvious explanation that creating the Agent enables sending. Creation preserves the draft and focuses the composer; Send is a separate action. Show the created Agent's identity and offer pasted meeting notes or sample notes that fill an editable draft. Create/name the first Session from sent work rather than asking for a title upfront. Response leads to editable actions, explicit approved internal tasks in an authorized organization context, then follow-up drafts. More Agents and advanced configuration appear when needed. No personal conversation silently changes Worlds to assign colleagues.

Explicit creation adds one action but makes persistent identity/ownership understandable and preserves existing approved behavior. Automatic provisioning is a possible test variant but changes that behavior and can hide creation. A separate welcome assistant adds a second identity and memory/handoff uncertainty. These are design inferences, not measured conversion or usability results.

Existing users open their authorized Agent chat directly. Organization invitations explicitly name the organization and its visibility before joining; personal Agent ownership remains unchanged, and personal/organization drafts stay separate. An expired or revoked invitation must not remove access to personal chat. Failure/retry preserves drafts and reconciles existing creation to avoid duplicate primary Agents. Mobile preserves visible context and does not automatically summon the keyboard on arrival.

Acceptance for a future prototype: a user can reach first useful work without required customization; understands Agent owner and active World before sending; can reopen the same identity/conversation; can retry creation without losing the draft or creating duplicates; can review sample input before submission. Consequential approvals, private personal memory and World isolation remain in force. Test first-task completion, assistance needed and context comprehension with actual target users; establish targets from a baseline.

## Research evidence [world:run:onboarding:research]

- [ChatGPT quickstart](https://learn.chatgpt.com/docs/quickstart) describes sign in, start a chat and send a message. [Projects](https://learn.chatgpt.com/docs/projects) allows starting without a project and grouping ongoing work later.
- [Claude guide](https://support.claude.com/en/articles/8114491-get-started-with-claude) describes typing a prompt, submitting and refining through conversation, with personalization explored later.
- [Grok overview](https://docs.x.ai/grok/overview) describes general chat. [Grok Bot](https://docs.x.ai/grok-bot/get-started) separately introduces teammates, suggested/custom creation and a first task; it is not evidence that general Grok uses the user's exact signup layout.
- [OpenClaw quickstart](https://docs.openclaw.ai/start/getting-started) offers minimal setup when usable AI access exists and later configuration. [Hermes quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart) prioritizes a working conversation before gateways and additional features. These developer-oriented products do not establish SME usability.
- Designer's local skill search supported skippable tutorials. The progressive-disclosure query had no verified targeted match after one retry; forms guidance used the skill defaults as a disclosed fallback. Existing Calm Fluent styling was preserved.

Official documentation was inspected; signed-in competitor onboarding screens and target-user usability were not tested. Sources support patterns, not proof of World's proposed flow.

## Empty-state preview [world:run:onboarding:preview]

User requested a visual on 2026-10-04. Designer followed up on its verified gpt-6.1-sol medium fork-none route under the same routing hash above. It created `C:/Users/jingk/.codex/visualizations/2026/10/03/01a100ee-8856-7b50-89d1-27b3c2816217/world-agent-empty-state.html` as a conversation-only interactive fragment. One Calm Fluent chat shell shows Personal space, an inline creation card, default/optional name, draft composer and explicit creation. No production application code changed.

Root inspected rendered desktop/mobile screenshots and verified the actual interactions with Playwright/installed Edge: draft before creation, disabled Send with a reason, optional rename, example input without submission/overwriting an existing draft, creation preserving the draft and focusing the composer, and honest local-preview sending. Final frame widths 1024/320px had no horizontal overflow or runtime errors. Screenshots `world-agent-empty-desktop-final.png` and `world-agent-empty-mobile-final.png` share the fragment's directory. Small icons use host-provided Lucide; major identity tiles use visible initials. Header says Approvals on and footer specifies consequential actions, preserving the approved rule. Root accepted the mockup for presentation only; UX/product changes remain proposed and unvalidated with target users.

## Deferred [world:run:onboarding:deferred]

Implementation follows user acceptance of the concrete proposal. Provider selection, backend authority, integrations and production publication remain later work. No new spending.

## Handoff [world:run:onboarding:handoff]

Status: proposal and interactive empty-state preview prepared and verified for user feedback. Proposed UX remains draft; record accepted onboarding changes in PRODUCT_DECISIONS/DESIGN before implementing the relevant phase 2 slice. This administrative run record and pointer are delivered to the verified studio repository; remote verification is retained in host history. Phase 1 evidence remains in `2026-10-03-phase-1-foundation.md`.
