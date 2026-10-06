<!-- studio {"id":"world:report:universe-foundation","scope":"world","type":"document","status":"approved","links":[{"relation":"implements","target":"world:decision:architecture"},{"relation":"requires","target":"world:decision:product"}]} -->
# Universe foundation implementation and assessment

## Result and scope [world:req:universe-foundation-result]

The first Universe foundation is accepted for controlled development on 2026-10-06. It strengthens the existing protected runtime rather than introducing four competing prompts or replacing current permissions with an AI judge. The platform controls which operations can execute; model instructions guide how permitted work is performed. This is a bounded foundation, not the complete four-layer policy engine.

New work adds a closed action/worker-command catalog, an authority check before provider token counting, atomic internal-task decision receipts, and optional privacy-preserving execution measurements. Existing identity, grants, isolation, provenance, approvals, budgets, delegation and recovery remain enforced through their existing application/database paths. Those controls were not all newly written in this run.

## Exact application change inventory [world:req:universe-foundation-files]

Relative to accepted application baseline `55e860372a382e71d5dbccf7cda5942f890d7418`, this delivery creates **5 files** and changes **12 existing files**, for **17 application-repository files**. Product Studio reports/decisions are separate documentation.

| Category | New files | Changed files |
| --- | --- | --- |
| Domain/runtime | `src/modules/universe/index.ts`, `src/modules/harness-metrics/index.ts` | `src/adapters/models/execution.ts`, `src/adapters/models/anthropic.ts`, `src/adapters/worker/input.ts`, `src/adapters/worker/runtime.ts`, `src/modules/collaboration/index.ts` |
| Database | `supabase/migrations/202610060028_universe_task_decisions.sql` | None |
| Tests/benchmark | `tests/harness-metrics.test.ts`, `tests/benchmarks/universe-offline.mjs` | `tests/working-agent.test.ts`, `tests/anthropic.test.ts`, `tests/collaboration-context.test.ts`, `tests/integration/working-agent-reconstruction.mjs`, `tests/integration/collaboration-reconstruction.mjs` |
| Instructions/configuration | None | `AGENTS.md`, `.gitattributes` |

Thus **8 files contain runtime/domain/database implementation**, 7 are verification, and 2 are instructions/configuration. Installed migration 028 is immutable: SHA256 `D322C7711D0EDB75598D7BF9706D041558BEBC7001CA555DEE4F2892531F1B5E`. The development database now has 28 migrations.

## Governed operations and restrictions [world:req:universe-foundation-controls]

| Boundary | What actually governs it |
| --- | --- |
| Identity and admission | Authenticated actor plus exact World/Session/Agent scope and current positive grants. Agent identity or a hierarchy edge alone cannot authorize work. A complete external Passport interoperability protocol remains future work. |
| Context and privacy | Current source visibility and exact versions/locations; scoped history and child findings; private personal configuration excluded from organizational/borrowed contexts. References remain untrusted data. |
| Provider access | Only supported `chat`/`meeting` jobs; current authority checked before count, after reservation and at subsequent protected boundaries. No arbitrary model-generated tool invocation. |
| Worker capability | Restricted login has no application-table access or role escalation. Runtime permits only context, reserve, check, checkpoint, settle, finish and fail RPCs. Database grants independently constrain that login. |
| Internal tasks | Exact approved proposal revision/digest and idempotent request; alternatively an existing authorized scoped waiver whose captured/current policy revisions still match. Current authority, sources, assignees and lineage are rechecked. Children cannot create these effects. |
| Policy changes | Later protected operations satisfy current authority. An intervening approval-policy change prevents the previous waiver from automatically creating tasks. Completed effects retain their historical authorization evidence. |
| Spend and recovery | Finite input/output, attempts, deadline and run/global budgets. Retry/children share accounting. Unknown provider charges remain held; cancellation does not pretend a transmitted request was free. |
| Learning | No automatic learning, permission expansion, portable export or permanent Self rewrite is enabled by this work. |

The closed action catalog contains **`chat.reply`, `meeting.propose`, `internal-task.create`, `follow-up.draft`**. An Agent can converse, use permitted Knowledge, draft meeting actions/follow-ups and perform existing bounded saved-graph delegation. Internal-task creation needs the enforced approval/waiver path. It cannot send external email, access arbitrary files, execute a shell, install tools, permanently delete documents or grant itself new permissions through this runtime. Writing an action name in text grants nothing.

Current per-job limits remain 12,000 input characters, 8,000 input tokens, 2,048 output tokens, 3 attempts and a 900-second deadline, alongside existing collaboration bounds. The cumulative development-testing ceiling remains US$4; accounting is not reset per run. These are current development limits, not universal customer limits.

## Execution flow [world:req:universe-foundation-flow]

1. The caller submits work under an authenticated, current scope. The database saves immutable input and a transactional queue entry; the queue carries the job ID.
2. The restricted worker claims an attempt with capability/lease fences. It obtains permitted context and compiles trusted configuration separately from untrusted references/history/findings.
3. A current authority check runs before provider counting. Valid bounded input receives an atomic conservative budget reservation, followed by another current check.
4. The model streams a response. Checkpoints, current-source/authority fences and finite limits protect progress. The model can propose work but cannot bypass the effect path.
5. Reliable usage settles accounting independently of permission to publish. Unsupported or malformed cache usage is treated as uncertain rather than priced as ordinary tokens. Quality and current authority are checked before durable completion.
6. A meeting proposal remains editable until approval. Exact manual approval or a still-valid scoped waiver saves internal tasks and its decision receipt in the **same database transaction**. Replaying the same approved request does not duplicate effects or receipts.
7. Optional metadata observation records execution stages. Observer failure cannot change accounting or effects.

New receipts record contract/action, actor and World/Session/Agent, job, manual/waiver mode, exact proposal revision/digest, original job authority, effect-time authority, policy revision, request identity and timestamp. They are private application evidence: ordinary users and the restricted worker cannot directly read/write them. They have no new UI viewer. Privileged database administrators remain trusted; this is not cryptographic tamper-proof logging. Existing effects are not backfilled, and rejected/rolled-back operations do not create new successful-effect receipts.

## Three-metric measurement [world:req:universe-foundation-measurement]

The user's three metrics govern the **combined** harness. This delivery establishes measurement contracts and an honest offline baseline, not production performance targets.

| Metric | Required meaning | Evidence in this run |
| --- | --- | --- |
| Output Accuracy % | Fully correct outputs / evaluated outputs, under a frozen task rubric and declared dataset; report safety compliance separately. | Real-provider semantic accuracy remains **unknown**. One deterministic safety fixture, repeated 50 times per variant, scores 75% → 100% across four criteria because the candidate now checks before counting. Full-fixture pass is 0% → 100%. These percentages are **not model accuracy** or 50 distinct tasks. |
| End-to-end latency | Accepted request → usable durable root result; include queue/model/network/children/retries, report approval wait separately. | Real end-to-end latency remains **unknown**. Paired local fake execution median: 0.0158 ms baseline / 0.0254 ms candidate; p95: 0.2345 / 0.1646 ms. These tiny noisy timings cannot establish production speed or overhead. The new pre-count check adds a real database round trip; receipt writes also add database work. |
| Token/cost efficiency | All attempts and children per usable root result; reliable usage plus separate uncertain holds; estimates distinguished from invoices. | Tested input assembly stays **766 characters** in both variants; zero additional AI checks. Fake usage stays 12 input/3 output tokens, estimated 54 microUSD per execution. Real savings remain **unknown**; no paid model calls were made for this slice. |

Benchmark compares frozen baseline execution/input source against the candidate using local shared dependencies, a fake store and fake provider. It does not compare two historical deployments or include database/network/provider time. Final benchmark source SHA256: `3ECDDF17C41DD2A9BDBD49221C01ACFCE863C5015ACA86A0CBACF1F87FC6199F`. The table records the final independent reviewer's rerun; earlier microtimings naturally differ.

The optional observer measures context/check/count/reserve/stream/settle/quality/finish and allows only durations, usage, estimated cost and outcome/stage. It retains no prompt, response, identity, key or raw error. Stage time includes the work performed there: reservation includes its authority check, streaming includes checkpoints. It is not pure governance CPU time. Standard worker startup does **not** yet attach a persistent observer; this is an available measurement interface, not an always-on dashboard. Root efficiency aggregation counts all attempts supplied by its caller and preserves missing/invalid/overflow values as unknown; complete lineage collection and durable request-to-result timing still need wiring.

Current uncached token estimation uses US$2/million input and US$10/million output, consistent with the configured Sonnet pricing reviewed on 2026-10-06. Cached token classes have different treatment, so unsupported nonzero/malformed cache usage fails uncertain; valid known zero-cache counters/breakdowns are accepted. See [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing) and [cache usage documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-caching). A local estimate is not a provider invoice or account balance.

## Verification and assessment [world:req:universe-foundation-assessment]

Independent Builders cross-reviewed disjoint code under the user's explicit exception after the configured QA route was blocked by the host's agent limit. Neither reviewed their own implementation. Technical Specialist supplied the bounded contract. Root independently inspected sources and performed protected proofs. This is meaningful independent review, not a separate security penetration audit.

Verified: 166 offline tests across 29 files; 37 focused affected tests; affected TypeScript/lint; installed exact-byte migration; actual restricted login denials; all 28 migrations reconstructed in rollback isolation; manual/waiver receipts, exact replay, receipt privacy, revoked sources/grants, restored approval, bounded delegation and retained completed effects. Actual fake-provider queue proof completed four dispatches, parent continuation, root approval/reload and shared spend bound. Final delivery/readiness receipts live in the linked [run record](runs/2026-10-06-universe-foundation.md).

Assessment: the foundation is suitably narrow and reusable. Security does not depend on the model remembering to obey a paragraph. It preserves ordinary drafting autonomy and adds no AI permission judge. The added checks have database latency, which must be measured honestly. Prompt injection or missed stylistic/process instructions can still degrade outputs; authorization controls contain executable authority, not all reasoning mistakes. A general namespace resolver, owner-constraint vocabulary and universal denial journal are not yet implemented.

Next: agree the small World-default toggle vocabulary and ownership/conflict cases, then implement it through the same protected paths. Enterprise authoring must use those definitions rather than a second enforcement path. Before claiming improvements across all layers, wire complete root/child/retry measurements and evaluate representative SME workflows with frozen accuracy rubrics and p50/p95 latency. Numerical acceptance thresholds remain a user/product decision. Agent learning, Session authoring, IFTTT builder, external interoperability and Phase8 remain deferred.
