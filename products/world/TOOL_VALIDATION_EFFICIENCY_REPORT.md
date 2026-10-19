# Tool validation and Swarm efficiency comparison

Status: live comparison, independent review, 987-test regression and production build complete; delivered source f86ca9115d120e2c0c45e102a76aa80b697fdb0b, 19 October 2026. Application: JKay93/MyWorld. Canonical continuity: [current run](runs/2026-10-19-swarm-efficiency.md). Local worker reload awaits final CI and scoped current-testing permission.

The original failed generation produced ASP06 before any tool action executed. Its raw invalid arguments were not retained, so the historical failure cannot be identified more precisely as malformed JSON or a specific schema violation. The runtime also stopped before receiving terminal usage, leaving an appropriate uncertain reservation rather than pretending the call was free.

The correction keeps server validation and effect permissions intact. Anthropic's delegation definition uses strict tool shape validation, with the provider's unsupported length/count constraints stated in descriptions and still enforced by the original local and SQL validators. Other tool definitions, model, reasoning effort, task context and original runtime guidance stay unchanged. This reduces malformed JSON/type/required-key failures; it does not replace authorization or guarantee semantic constraints such as distinct eligible agents.

Completed rejected tool responses are drained through the existing bounded stream validation. Malformed JSON and schema rejection receive separate closed codes. Only verified complete usage is recorded with no executable tool; the job then fails without dispatching an effect or automatically retrying. Interrupted responses and unsupported accounting remain uncertain. No tool arguments, provider response bodies, credentials or opaque reasoning are added to diagnostic records.

The provider-specific definition follows [Anthropic strict tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use) and its [schema limitations](https://platform.claude.com/docs/en/build-with-claude/structured-outputs#json-schema-limitations). The exact-request review compiler must use the same tool definition as count, request digest and generation.

## Measurement contract

Use the original frozen ten-criterion inventory rubric. Include the Coordinator and every helper call in usage/cost; retain all prior experiments and failed-call reservations. The new arm uses the same Claude model, settings, roles and prompt, with fresh synthetic identifiers/candidate ordering. It reuses the original before result. This is one case, not a statistically established runtime-wide quality or latency guarantee. Pipeline latency excludes separately measured human review waits and does not include a production queue.

| Entire Swarm | Original before | Rejected prose experiment | Corrected after |
| --- | ---: | ---: | ---: |
| Input tokens | 40,575 | 38,545 | 40,913 |
| Output tokens | 1,395 | 1,437 | 1,459 |
| Total tokens | 41,970 | 39,982 | 42,372 |
| Known cost | US$0.095100 | US$0.091460 | US$0.096416 |
| Generation calls / jobs | 3 / 2 | 3 / 2 | 3 / 2 |
| Pipeline seconds | 18.778 | 22.629 | 27.543 |
| Fixed rubric | 10/10 | 8/10 — rejected | 10/10 |

Independent review scored the corrected output 10/10 against the unchanged rubric: one eligible Product helper actually used; five distinct requirements with rationales; stock, alerts and supplier-order/receiving coverage; complete assumptions and deferred scope retained through consolidation; accurate attribution; no fabricated performed actions, saved documents or unrelated citations. Neither corrected job failed or retried. There is no new uncertain charge in this arm.

Quality matched this case's baseline. Efficiency did not improve: total tokens increased 0.96%, cost 1.38%, and review-excluded pipeline time 46.68%. Provider generation time was 23.117s versus 13.909s; count time was 1.258s versus 1.188s. First-use strict grammar compilation and provider/model variance may contribute, but were not separately measured. No causal speedup claim is supported. The corrected arm's raw 95.704s includes 68.161s of human exact-input review; before was 137.677s raw including 118.899s review. These manual waits are not runtime speedups.

The rejected prose rewrite is absent from the delivered runtime. Accepted efficiency mechanisms preserve full context: repeated source metadata grouping and one fewer check/reservation database round trip per generation. The source-free inventory payload itself was unchanged by these optimizations; the earlier 17.4% byte reduction applied to a repeated-source fixture only.

Budget at continuation start: US$0.186560 confirmed plus US$0.089545 held, leaving US$0.523895 under the original US$0.80 cumulative authority. Protocol 3 allowed one fresh arm, at most three pipeline segments/five new generations, no job replay or quality reroll. Exactly three new generations cost US$0.096416. Cumulative totals are **US$0.282976 confirmed + US$0.089545 held = US$0.372521 accounted**, leaving **US$0.427479**. All ten invocations, including the rejected experiment and historical failed call, remain retained. No further paid comparison is planned for this run.

Private root evidence stays in the ignored application test directory: protocol-revision-3.json, repair-bundle.json (bundle SHA256 f779f57fffa37faf184eecb1729aed78127811a1cc41ced78893dec77e1f1a1b), repair-projection.json, repair-evidence.json, completed-summary.json, comparison-accounting.json and exact reviewed-input receipts. Independent source/native accounting checks: 107/107 pass. A real restricted SQL rollback test proves completed null-tool usage settles once, records a closed failure, creates no delegation, and leaves the fixture pristine after rollback. Live localhost was untouched during these measurements.

## Verification and delivery

Full offline regression passes **987/987** across 144 files with four workers and unchanged assertions/timeouts. The initial full run retained three outdated raw-tool schema expectations and one workspace timeout; the expectations were narrowly updated to the provider wire format, while context, authority and 32,000/32,001-token admission/rejection checks remain intact. The unchanged workspace test also passed separately. Independent review accepted the correction. Typecheck, scoped lint and separate production build pass. No database migration or UI/API implementation change is required.

Accepted source is pushed and remote-verified at [f86ca91](https://github.com/JKay93/MyWorld/commit/f86ca9115d120e2c0c45e102a76aa80b697fdb0b). [Exact-commit CI](https://github.com/JKay93/MyWorld/actions/runs/39257072151) is being checked separately. Primary checkout is fast-forwarded with original dirty configuration/untracked files preserved. The reviewed production worker is prepared separately, SHA256 53223c532f670b3d1ad650778ed6ce0dca08efea99cc7d281e3cbd8b5327f41e. The website and currently running worker have not been interrupted; the owned test database is stopped with all evidence/data retained.
