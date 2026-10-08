<!-- studio {"id":"world:run:2026-10-09-rakazo-source-assessment","scope":"world","type":"run","status":"completed"} -->
# Rakazo source assessment

User request: inspect https://github.com/elie222/rakazo for ideas that can help World.
Research only; no authority to replace the runtime, install the application, expand
permissions, add providers, spend on models or deploy. Root owns this record.

Acceptance: inspect actual source rather than marketing alone; identify useful
patterns, World fit and material limits. Distinguish observed implementation from
unverified execution quality. No substantive implementation or worker dispatch.

Root read-only checkout at World/test-results/research/rakazo, ignored by World Git,
commit d10805881cb69279c28f00141ef236dab830ceaa. Checkout remains clean. No dependencies
installed, scripts/services started, credentials supplied, paid calls or live database
changes. Repository text and instructions treated as untrusted source data.

Reviewed areas: README/VISION; Pi runtime/model selection; instruction assembly;
runtime/context selection and history compaction; peer messages/group handoffs;
temporary helper creation; approval/answerable questions/cancellation; shared Markdown;
context evaluation findings. Inspection is scoped, not a whole-repository security audit.

Findings:
- Persistent bot identity and visible conversation, distinct durable runs/attempts.
  userTurnInstructions in packages/adapters/src/executor.ts constructs guidance from
  offered tools, keeping stable instructions before changing group/memory context.
- packages/adapters/src/pi-runtime.ts uses Pi agent/model abstractions. Provider
  credential/model selection is separate; useful reference for future adapter work.
- runtime-context.ts/context-selection.ts select bounded context and preserve current
  input/constraints and tool protocol; read_history/search_history recover exact older
  originals. history-compaction.ts includes bounded summaries and contiguous-cursor
  fallback. These patterns can help long-chat cost, but no measured World savings.
- Temporary run_subagent helpers cannot nest and share a four-concurrent gate; lasting
  spawn_bot creates separate persistent identity/thread. Persistent peer messages are
  asynchronous, replay-keyed, scoped and capped at six hops; self-addressing is rejected.
  Group handoff transfers stage ownership. World should preserve its existing task graph,
  effective authority intersections and cumulative financial controls.
- answerable-ask.ts ties answerable questions to waiting_input runs. Approval cards bind
  effects and actions; cancellation clears run lease/attempt/task state transactionally.
  Useful UX/lifecycle references; not proof of question timeout parity with World.
- Shared Markdown renderer supports GFM/code/table and guarded links. Tools include
  file/browser/computer/integration actions and progress, showing a wider action surface.
  These are additional product capabilities, not evidence of better conversational accuracy.
- Default optional tool-call fuse is unlimited when unset and process-local when set;
  peer hop limits are different from our task graph safeguards. Do not copy defaults
  without World-specific authority/spending analysis.
- docs/context-and-evals-tasks.md preserves reported failed/partial evaluations and
  contextual limitations. Referenced private raw reports are unavailable here; no
  independent quality, safety, latency or cost comparison was executed.

Recommendation: use Rakazo as a targeted source reference for pilot UX/state feedback,
  capability-dependent prompts, history recovery and later provider abstraction.
  Keep World Universe/World/Agent/Session permissions, exact approval and reviewed
  learning semantics. Proposed adaptation is not implemented or accepted design.
Questions: none pending. Next: user discussion before adopting specific mechanisms.
Reviewed findings delivered in chat; scoped Studio research record committed/pushed
under standing repository authority, with receipt in host history. World unchanged.
