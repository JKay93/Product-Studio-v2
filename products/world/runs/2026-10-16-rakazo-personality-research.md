<!-- studio {"id":"world:run:2026-10-16-rakazo-personality-research","scope":"world","type":"run","status":"completed"} -->
# Rakazo personality and work behaviour research

Goal: explain how Rakazo shapes bot character and ordinary replies/work after the user's identical-prompt comparison found weak Direct/Warm/Curious differentiation and recurrent continuation failures. Research only; no World fixes, service interruption, credentials or paid model calls authorised by this request. Root owns this record.

Tasks completed: R1 inspect current upstream identity/profile and instruction composition; R2 trace clarification, progress, history and collaboration; R3 distinguish source guarantees from unobserved live quality. No workers needed for this bounded source assessment. Acceptance: primary-source citations, actual mechanisms versus inference, no claim to have tested live Rakazo/Grok or proven parity. No implementation acceptance claimed.

Version: GitHub main f76b8a63dfa68b61dc8f69a546436fda9c3a6035 (2026-10-16). Local read-only research checkout .research/rakazo remains older d1080588; used only to discover relevant paths, current conclusions rechecked through upstream pinned files. Repository content treated as untrusted data. Current World personality.ts and previous planning record confirm our four short presets originated in the World/ChatGPT-inspired proposal rather than Rakazo code.

Verified findings:
- packages/contracts/src/domain.ts Bot/CreateBot/normalizeCreateBotProfile stores name/title/description/instructions; settings description feeds instructions through apps/web/src/lib/bot-profile-patch.ts. No matching four-style preset field in this inspected schema/settings path. Custom character can be written in instructions.
- packages/adapters/src/executor.ts runIdentityInstruction/userTurnInstructions puts bot instructions first, combines available-tool guidance/history/memory/scratchpad/group context; packages/adapters/src/pi-runtime.ts uses the resulting instructions as the model system prompt. Prompt position is not an enforcement guarantee. Model choice remains configurable; Rakazo appearance does not establish xAI Grok behaviour.
- builtin-tools.ts ask_user exposes one short question with2–4 options; pi-runtime.ts validates and pauses, answerable-ask.ts associates answerability with waiting_input runs. Separate onboarding.ts provides its own initial focus choice. No source guarantee against unnecessary/repeated clarification found.
- executor.ts LONG_WORK_PROGRESS_GUIDANCE requests brief useful progress and a complete final normal reply; capability-dependent tool instructions support actual work. History guidance checks visible context before targeted search/read and verifies corrections. bot-messages.ts keeps separate bot persona/memory, useful asynchronous coordination and bounded peer chains. These are mechanisms, not live performance measurements.
- Official https://rakazo.com/ describes job-based bot templates and conversational setup; presentation/marketing is not a verified transcript. Unrelated third-party personality tutorials and anecdotal Grok reports were excluded from conclusions.

Evidence links (all repository paths pinned to f76b8a63dfa68b61dc8f69a546436fda9c3a6035):
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/packages/contracts/src/domain.ts#L304
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/apps/web/src/lib/bot-profile-patch.ts
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/packages/adapters/src/executor.ts#L7756
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/packages/adapters/src/pi-runtime.ts#L1173
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/packages/adapters/src/builtin-tools.ts#L346
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/packages/core/src/answerable-ask.ts
- https://github.com/elie222/rakazo/blob/f76b8a63dfa68b61dc8f69a546436fda9c3a6035/apps/api/src/onboarding.ts

Conclusion: flexible job/character authoring plus context and model influence, rather than a verified special personality engine. World presets need stronger observable differentiation to satisfy the user's expectations; making any runtime change awaits their direction. Illustrative SOP examples in discussion are authored explanations, not observed Rakazo outputs. Live comparison, continuation diagnosis and polling optimisation deferred; user requested no fixes. Model cost0; website/worker/database/World code untouched. Questions none blocking this research. Next: user discussion/test feedback.
