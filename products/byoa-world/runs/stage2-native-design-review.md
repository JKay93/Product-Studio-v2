<!-- studio {"id":"byoa-world:review:stage2-native-design","scope":"byoa-world","type":"review","status":"draft","links":[{"relation":"requires","target":"byoa-world:technical-specification:stage2-native-participation"},{"relation":"requires","target":"byoa-world:prd:stage2-native-participation"},{"relation":"requires","target":"byoa-world:design:stage-2-native-participation"},{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"}]} -->
# Review: Stage 2 native participation design

- Reviewer identity / role: `/root/native_qa`, independent QA. Updated 2026-10-01.
- Requested routing: QA, `gpt-6.1-sol / medium / fork_turns none`, explicitly submitted by orchestrator; returned identity `/root/native_qa`. Routing file SHA256 `8E7006FA200C6A88958E5AAEE409AB93C60A3FD7E3765241B3FE7C27246E3A45`; current file reread and matched. Actual backend activation is unknown; requested settings are not independent activation evidence.
- Candidate revision: four-file native package below; PRD/design/technical revision 2 and summary native 1 with reconciled checkpoint. Governing authority: current CONTRACT, Decisions 002/004, native handoff, ROADMAP BYOA-AGD-01–10 / BYOA-AGT-01–08, MODULARITY and studio standing orders.
- Verdict: **PASS for the corrected design package to be presented for user review.** No remaining required design correction found. This is not user approval, implementation acceptance, permission to resume Stage 2.1 or live spending authority.

## Actual reviewed candidate

SHA256 hashes were read after the final correction signal. Any material change invalidates affected review evidence.

| File | SHA256 |
| --- | --- |
| [Approval summary](../architecture/STAGE-2-NATIVE-PACKAGE.md) | `22F9B7BB7A9A599C94AED6FFC9DD74371F8899CE33C6ACED0644729747C5C78A` |
| [Native PRD](../features/agents/connection/STAGE-2-NATIVE-PRD.md) | `0CAC23DD16EDD6D72A03FDD88DC397F91D397A186BBD2A2A32A80C52CE169ECD` |
| [Native design](../design-system/STAGE-2-NATIVE-PARTICIPATION-DESIGN.md) | `C7790544B28C1014B8DD7968B0131E5431BB884FD3B8B966E10B1DF1FC774991` |
| [Native technical plan](../architecture/STAGE-2-NATIVE-PARTICIPATION-PLAN.md) | `529F4C1873206E84C42847F48B18C6E28387B98DA0F07B170ECBA8EFDF3561F1` |

## Acceptance criteria checked and evidence

| Criterion | Actual document/source finding |
| --- | --- |
| Concrete complementary task and rubric | Frozen fictional bakery fixture consistently specifies SGD14−9=5 contribution, 20-box scenario producing SGD100/day and conditional SGD500/week; staffing 30+4×20=110 and 30-box ceiling=150. Six rubric rows preserve assumptions, cutoff including Friday for Monday, capacity, substantial five-day B planning, provenance and human acceptance. No demand commitment or profitability claim is inferred. |
| Exact A→B work and quality eligibility | Two distinct fresh executions required. B consumes immutable committed A bytes/revision/digest and the frozen note. Corrected owner checkpoint assesses A business suitability; automatic checks cover structural/provenance/termination/limits without semantic guarantee. Continuation binds exact A/epoch, is deduplicated and grants no canonical write, edit or extra inference. Failure/unsuitable A blocks B; B failure retains A for explicitly labelled partial review. |
| Evidence-based native route and credential separation | Separate Node worker owns Anthropic adapter and runtime credentials; no key in World/browser/prompts/arguments/logs. Official public documentation independently checked in this review supports the snapshot, standard rates, context and generated-output limit basis. Local same-user process separation is truthfully limited; fictional-only operation remains required. Availability/readiness is not account entitlement evidence. |
| Runtime-neutral permissions/lifecycle | Feature ports and v2 envelope separate owner and machine credentials, bind World/Session/participant/operator/payer/epoch, freeze inputs and enforce intersection/denial. Neither agent accepts, expands scope or dispatches extra work. Stop/restart revoke content authority; a separate narrow settlement/reconciliation receipt port can reconcile already incurred expense without committing late content. |
| Company funding and accounting | Requester/role/operator/test payer are distinct. No employee personal fallback, automatic top-up, historical allowance reset or company-direct double compute. Both maximum reservations are held before A; SQLite transaction admission includes concurrent held/settled expense and one inference in flight. Journal intent, duplicate/conflicting receipts, failed/missing usage, unknown holds and append-only reconciliation are specified. Reported counts/computed estimates/invoices/customer charges remain separate. |
| Concrete exposure proposal | Two inference calls plus at most two free count requests; no retries/tools/cache/thinking/fallback. A output 1,500, B 2,000; estimate admission 4,000/6,000. Conservative reserve uses full 200,000 input tokens each at USD 1/M plus 3,500 output at USD 5/M: USD0.4175, rounded proposed allowance USD 0.42. Counting estimates/byte bounds/deadlines are correctly excluded as hard billing proofs. Route/configuration/account terms must be reverified before separately authorized execution. |
| Human review/save/history | Original note/A/B remain attributable; review edits are copies. Atomic owner acceptance checks current note/proposal revision and deduplicates command/receipt. Explicit replacement confirmation, stale conflicts and lost-ack recovery are specified. Retained human review after end/restart does not revive grants; no hidden redispatch. |
| Accepted foundation and safe migration/rollback | Read-only inspection of foundation SQLite, planning-note public service and local-owner source confirms v1 exact schema validation, transactions, ownership and existing public seams. Native plan requires an additive v2 migration on a consistent backed-up copied store, preservation checks and failed-migration rollback. Old v1 rejection is acknowledged; rollback is v2-capable human-only with dispatch off, retaining history/newer writes/unknown holds. No automatic downgrade/legacy import. |
| Modularity and future meaningful checks | Cohesive agents/connection, work/session, collaboration/document-review and work/usage owners; thin composition and separate worker; no feature-internal cross-domain dependencies. Existing foundation boundary test was inspected and extension is explicitly required. Proposed checks exercise stop races, exact handoff, denial, duplicates/concurrency, journal/storage failure, atomic acceptance, migration and actual keyboard/narrow/200% zoom. Mocks cannot satisfy real cooperation. |

Primary-source spot checks used [models overview](https://platform.claude.com/docs/en/models/overview), [pricing](https://platform.claude.com/docs/en/about-claude/pricing), [token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting) and [Messages API](https://platform.claude.com/docs/en/api/messages/create), accessed 2026-10-01. These support the documented selected-route assumptions; this review did not authenticate or call a provider.

## Findings, correction and disposition

The initial working candidate needed two bounded consistency fixes; both are resolved in the final hashes above.

| Finding | Necessary correction | Final disposition |
| --- | --- | --- |
| F1 — Reservation/UI disagreement | Technical plan held A+B at Start, while UI described B awaiting a new reservation and potentially losing remaining funding. Align disclosure/status with held B funds and specific eligibility/authority/deadline/ledger/rate blockers. | **Resolved.** PRD/design require total reserve before inference, disallow competition for B funding and distinguish activation from a fresh allocation. No insufficient-remaining-funding story survives as permitted behavior. |
| F2 — Business suitability before dependent dispatch was undefined | PRD stopped infeasible/out-of-scope A, but technical/UI used valid complete commit without defining semantic assessment. Make the actual eligibility mechanism coherent and avoid claiming automatic business-quality enforcement. | **Resolved.** All four records now specify immutable A owner review and Continue/Reject, exact-hash/epoch continuation, no canonical acceptance or extra call, same 240s deadline including waiting, and expiry/denial/duplicate tests. |

No unrelated improvement requests or new approval gates were added. The checkpoint is a proposed package choice for user review; this QA verdict does not approve it on the user's behalf.

## Document/template comparison and preserved decisions

Actual PRD retains prd.md header and Problem/outcome/scope, individual requirements with behavior/exceptions/evidence, and Experience/system/readiness. Fixture, rubric and funding tables elaborate those sections. Actual design retains design.md mode/owner/requirements, Users/journeys, Design system and Adaptation/access/acceptance; wireframes and state/acceptance tables make consequential actions concrete. Technical record retains technical-specification.md interfaces/behavior, approach/dependencies and verification/readiness and explicitly maps technical-context.md observed/planned/decisions/risks/source fields into its combined structure. The mapping is reasonable and the observed/proposed distinction is maintained. Summary explicitly serves as orchestration entry point, not a substitute for specialist templates. This review preserves review.md identity/candidate/verdict/checks/template/decisions/fixes/limitations fields.

Decisions 002/004 are preserved: Calm human foundation, one note/World, explicit Save/conflict/recovery, approved stack, feature public boundaries, scoped runtime-neutral authority, native-first and optional later BYOA, company-funded work, original histories/unknown usage, paused implementation and stopped weekly pilot. Commercial billing/private readiness remain later. Review did not modify or treat superseded external receipts as native approval.

## Residual risks and verification limitations

- Documentation only: no app edits, runnable native screens/adapter, installation, preflight, credential access, migration, tests, model inference, pilot, spend or publication were performed by this reviewer. Read-only source spot checks establish reuse accuracy, not implementation correctness. Historical foundation evidence does not verify changed native screens.
- The 240-second deadline includes human A review and four potentially 60-second HTTP requests. Valid work can expire before B finishes; the proposal promises a bounded attempt, not completion. Any later deadline/call/allowance change must update affected approved package/evidence.
- Model usefulness, actual account entitlement, request serialization/enforcement, credential-canary behavior, live usage reconciliation and two-real-execution output quality remain unverified. Current public documentation must be rechecked at execution; the documented Haiku lifecycle does not assure indefinite availability.
- Same-user local process operation is not private-data isolation. Production tenancy/company administration, provider retention/handling, secret management and paid/private readiness remain necessary before their separately authorized use.
- Fresh allowance, real sponsor/provider project and resolution or isolation of prior shared-account unknown exposure remain required before any real run. USD 0.42 is proposed raw standard token expense, not approved spend, tax-inclusive purchase authority or customer price.

Orchestrator owns final acceptance; user approval, explicit Stage 2.1 resume and concrete live authority remain separate and pending.

