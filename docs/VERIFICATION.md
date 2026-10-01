# Setup verification

Prepared on 2026-09-28 in the separate Product-Studio-v2 folder.

## Scope delivered

- Shared studio rules and explicit builder/reviewer responsibilities.
- Optional PM role; project-owned PRD, design, decision and evidence templates.
- No elapsed-time approval gates; pause, retry and revision/evidence controls retained.
- Project-scoped incremental SQLite retrieval, section provenance and generated links.
- Clean local Git repository, no remote destination configured.

## Validation

Full test suite and studio metadata/routing checks are run before handoff. The final
handoff below records the result. Tests cover scoped retrieval, graph errors, stale
content/evidence, time overrun, human pause, bounded retries, duplicate events, review
carry-forward and delivery verification. Independent review found acceptance/push
coupling and two CLI path issues; targeted regressions accompany their corrections.

## Practical limits

This is a local harness foundation, not an automatic agent runtime. Host tooling
launches agents and enforces tool permissions. Financial approval is a governance/host
boundary, not a billing interceptor. PM and Technical Specialist tasks use compact assignments;
the inherited state protocol retains implementation/review role names.

No live product has been migrated. Design-skill selection and token/cost comparison
remain a bounded real-project pilot. Keyword search does not provide vector similarity.
All approved rules and decisions are included separately from limited keyword hits;
very large collections need measured relevance improvements before further machinery.

Model entries are editable configuration inherited from v1; their dispatch policy is
mandatory under the current standing orders. The CLI remains advisory because it
cannot launch agents. Availability and actual dispatch must be verified in the active runtime. No automatic
model changes, OpenClaw changes, schedule, purchase, push or deployment were made.

The original repository remains unchanged. The temporary downloaded reference checkout
is outside this deliverable and is not included in the new repository.

## Final handoff result

- Node.js 24.13.0 on Windows.
- `npm test`: 63 passed, 0 failed, 0 skipped (20.2 seconds).
- `npm run check`: passed; eight studio source documents, twelve sections, no graph
  or routing errors. Repeated indexing changed zero documents.
- Independent reviewer: PASS after three CLI findings were fixed. Focused CLI and
  retrieval regressions each passed 7/7, including generated-directory exclusions.
- Orchestrator decision: accepted as the local v2 foundation. No product pilot,
  remote push, deployment or measured efficiency claim is included in this acceptance.
- Contributors: delegated builders implemented retrieval/CLI and timing/routing;
  orchestrator authored governance/templates and integrated; separate reviewer checked
  implementation and corrections.

## Routing correction — 2026-10-01

The user requested that configured role models be followed after two BYOA Stage 1
specialists were launched without overrides and inherited their parent route.
Their exact backend models were not independently observed. This correction does
not retroactively change their provenance or rerun the planning work.

Administrative changes make routing explicit in AGENTS.md, standing orders, the
orchestrator role and compact assignment template. Model/effort values are unchanged.
Every dispatch must read current routing, verify host support, explicitly supply
model/effort/isolated context and retain requested-versus-observed evidence.
Unsupported routes block dispatch; existing mismatched workers cannot receive new
dependent assignments. This is an operating requirement, not a new native tool interceptor.

Independent review assignment: studio routing-policy documentation correction;
read-only scope is the six changed routing/governance files, including harness/README.md,
and this verification record.
Acceptance: actionable dispatch/follow-up rules, no silent fallback, honest host limits.

| Evidence | Result |
| --- | --- |
| Routing policy SHA256 at reviewer dispatch | `09350BEB81F6505899FC4BFE5754CF06358C3330A381525840F61FE8CC701E65` |
| Requested QA route | `gpt-5.6-sol`, `medium`, `fork_turns: none`; supported by active spawn tool |
| Submitted host request / returned ID | Explicit parameters accepted; `/root/routing_policy_review` |
| Independently observed actual model | Unknown; spawn response reports task name only |
| Configured builder route availability | `gpt-5.6-luna` absent from active spawn tool; no builder dispatch or substitute attempted |
| Parent/orchestrator route activation | Not independently verifiable from available model metadata |
| Routing validation | PASS; no errors or warnings |
| Bounded handoff/routing tests | 16 passed, 0 failed |
| Independent review | One P2 wording finding: replace ambiguous actual-activation reason with independent-host-evidence requirement; corrected. Scope-count wording also corrected. No remaining substantive findings. |

BYOA foundation approval remains pending. No application changes, provider experiments,
weekly pilot, original Product-Studio or OpenClaw changes are part of this correction.

## User-approved GPT-6.1 Sol routing trial — 2026-10-01

The user approved Builder at `gpt-6.1-sol` Low and PM/Designer/Technical Specialist/QA
at `gpt-6.1-sol` Medium, all with isolated context. Orchestrator remains configured
Astra Low. Updated active routing plus the workflow and specialist instructions;
historical fixtures and previous evidence retain their original model values.
Current policy hash: `8E7006FA200C6A88958E5AAEE409AB93C60A3FD7E3765241B3FE7C27246E3A45`.
The host advertises the selected model/efforts and accepted explicit specialist
dispatches. Actual backend activation and per-agent usage/cost remain unobserved.

The previously unavailable Luna builder route is historical; the new Sol Low route
is supported. A bounded builder assignment removed old model-default pins from an
existing routing test while retaining rejection scenarios. All 16 affected tests
passed. Validation of the new routing configuration also passed. Independent review
is recorded with the [Stage 1 reassessment](../products/byoa-world/runs/stage1-61-reassessment.md).
This trial supports a fresh design proposal, not application implementation or a
claim that the new setup is cheaper or better on measured tasks.
