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
| O5 | Orchestrator | Inspect desktop/mobile rendering and actual creation/rename/draft interactions, then present the preview and record evidence. Proposal remains draft. | Presented; user rejected the design |
| O6 | Designer and PM | Inspect the user's Bot creation reference and shell sketch, exchange opinions, and recommend navigation and zero/one/many-Agent behavior. No implementation or new mockup. | Complete; both inspected images and agreed on hierarchy |
| O7 | Orchestrator | Consolidate team opinion, clearly distinguish proposed panel contents from the unlabeled sketch, and preserve user feedback for handoff. | Complete; recommendation prepared |

## Questions [world:run:onboarding:questions]

No user answer is required to research and propose. Automatic primary-Agent creation versus explicit lightweight confirmation is an open product choice, not approved behavior. The World application repository remains unanswered from phase 1, but does not block this discussion.

## Decisions [world:run:onboarding:decisions]

Preserve personal Agent ownership, private personal content, isolated Worlds/Sessions, scoped standing access and default consequential approvals. Current approved behavior asks users without an Agent to create one; any proposed change stays draft until user acceptance. Use existing Calm Fluent theme and World-only local UI UX Pro Max. Workers give concise results; Orchestrator owns records. Actual model activation, token usage and cost are unknown.

Dispatch routing SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`: Designer `/root/world_chat_first_designer`, requested gpt-6.1-sol medium fork none; PM `/root/world_chat_first_pm`, requested gpt-6.1-sol medium fork none. Host supports the requested routes; actual activation is unknown. Designer researches Grok/Claude and local UX guidance, PM OpenClaw/Hermes, Orchestrator official ChatGPT references; counterparts exchange findings directly.

## Outcomes [world:run:onboarding:outcomes]

Designer and PM initially converged on inline creation with a draft-before-creation composer. User rejected the resulting preview and supplied a Bot creation screenshot, then a header/rail/context-panel/canvas sketch. Both agents inspected the supplied images and exchanged feedback. The current recommendation is signup -> workspace shell -> direct canvas Agent creation -> chat composer. The earlier creation card and pre-creation composer are superseded proposals. No application changes or new approved product decisions resulted.

## Proposed journey [world:run:onboarding:proposal]

Open the Calm Fluent workspace shell immediately, with visible Personal space context. Header holds active World and account; the narrow rail holds major destinations. The wider panel changes with the destination: in Chat, selected Agent, New chat and recent conversations. These contents are a recommendation; the user's sketch leaves the panel unlabeled. Agents is the destination for identity/configuration/relationships, avoiding duplicated full Agent lists and nested conversation trees. Use a collapsible approximately 240–280px panel beside a 56–64px rail; mobile combines navigation into one drawer and keeps World/Agent context visible.

With no Agent, keep the panel sparse and show a small avatar preview, optional color/shape, editable default name and Get started directly on the canvas. Create without requiring customization; show the composer after successful creation. With one Agent, show its name directly; with several, add a compact World-scoped Agent selector above its conversations. Optional templates stay secondary. Preserve the light Calm Fluent direction, thin functional dividers and modest corners; the sketch is a layout reference, not an instruction to outline every zone as a large rounded card.

After creation, show the Agent identity and offer pasted meeting notes or sample notes that fill an editable draft without submitting it. Create/name the first Session from sent work rather than asking for a title upfront. Response leads to editable actions, explicit approved internal tasks in an authorized organization context, then follow-up drafts. More Agents and advanced configuration appear when needed. No personal conversation silently changes Worlds to assign colleagues. No required role questionnaire, provider, connector or Session-title setup.

Explicit creation adds one action but makes persistent identity/ownership understandable and preserves existing approved behavior. Automatic provisioning is a possible test variant but changes that behavior and can hide creation. A separate welcome assistant adds a second identity and memory/handoff uncertainty. These are design inferences, not measured conversion or usability results.

Existing users open their authorized Agent chat directly. Organization invitations explicitly name the organization and its visibility before joining; personal Agent ownership remains unchanged, and personal/organization drafts stay separate. An expired or revoked invitation must not remove access to personal chat. Failure/retry preserves creation input and reconciles existing creation to avoid duplicate primary Agents. Mobile preserves visible context and does not automatically summon the keyboard on arrival.

Acceptance for a future prototype: a user can reach first useful work without required customization; understands Agent owner and active World before sending; can reopen the same identity/conversation; can retry creation without losing creation input or creating duplicates; can review sample input before submission. Consequential approvals, private personal memory and World isolation remain in force. Test first-task completion, assistance needed and context comprehension with actual target users; establish targets from a baseline.

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

User feedback: first preview rejected as unsatisfactory; Designer received the user's explicit disappointment. Reference `codex-clipboard-ad9776b1-8943-48d5-aaf1-d2d0f7a43e3a.png` demonstrates direct Bot creation (commentator ignored). Sketch `codex-clipboard-fda7ea51-b7ff-4ab4-9212-227a89d42489.png` demonstrates shell layout. Both are user-provided temporary files under `C:/Users/jingk/AppData/Local/Temp/`, inspected by Designer and PM. Before followups, root refreshed routing and both role instructions; routing hash and agent identities remain those recorded above. Actual activation/cost remains unknown. No replacement visual was requested or created for this opinion exchange.

Implementation follows user acceptance of the concrete proposal. Provider selection, backend authority, integrations and production publication remain later work. No new spending.

## Handoff [world:run:onboarding:handoff]

Status: first preview rejected; reference-informed team recommendation prepared. Proposed UX remains draft; record accepted onboarding changes in PRODUCT_DECISIONS/DESIGN before implementing the relevant phase 2 slice. Root retains these administrative continuity records in the verified studio repository and checks remote delivery in host history. Phase 1 evidence remains in `2026-10-03-phase-1-foundation.md`.
