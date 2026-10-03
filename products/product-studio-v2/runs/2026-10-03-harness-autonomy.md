<!-- studio {"id":"product-studio-v2:run:harness-autonomy-2026-10-03","scope":"product-studio-v2","type":"run","status":"draft"} -->
# Harness autonomy and run records

## Goal and scope [product-studio-v2:run:harness-autonomy:goal]

On 2026-10-03 the user clarified that the harness should give orchestrator and sub-agents freedom within scope, use retrieval for token/cost efficiency, and require the orchestrator to document every run for future agents. Capture tasks, acceptance criteria, questions, critical decisions, deferred work and handoff state.

Selected project: Product-Studio-v2 self-maintenance. Change active rules and guides plus the workspace entry point. Preserve model routes, host permissions, financial limits, project isolation and standing repository authority. No World application implementation is included.

## Tasks and acceptance criteria [product-studio-v2:run:harness-autonomy:tasks]

| ID | Owner | Task and acceptance criteria | Status |
| --- | --- | --- | --- |
| T1 | Orchestrator | Replace contradictory blanket documentation bans and optional continuity with required orchestrator-owned records. All user-requested fields are present; worker roles do not need duplicate reports. | Complete; reviewed and accepted |
| T2 | Orchestrator | Align workflow, role instructions, active workspace entry point and guides. Resume instructions read current pointer and record; routine choices remain autonomous; material questions and consequential authority stay distinct. | Complete; reviewed and accepted |
| T3 | Independent reviewer and Orchestrator | Read actual candidate; check rule consistency, relative links, scoped retrieval and record completeness. Existing runtime and routing behavior remain unchanged. Address required findings before acceptance. | Complete; checks and independent review passed |
| T4 | Orchestrator | Commit only accepted changes to verified JKay93/Product-Studio-v2, push without force and verify remote delivery. Update this handoff with actual outcomes. | Complete; accepted candidate published and verified |
| T5 | Orchestrator | Incorporate the user's retrieval-ID correction: stable document and section IDs, real metadata relationships, unique/scope-valid graph, addressable requirement retrieval and passing existing retrieval tests. | Complete; reviewed and accepted |

T3 depends on T1, T2 and T5; T4 depends on T3. Administrative rules and source metadata are edited by Orchestrator. No substantive application implementation is assigned.

## Questions [product-studio-v2:run:harness-autonomy:questions]

The user also identified missing retrieval IDs during this run. Add stable section IDs and actual metadata relationships to the World decision records and shared policies, and a stable document ID to this run. Verify the graph and scoped retrieval. No user answer is needed; continue independent work.

## Critical decisions [product-studio-v2:run:harness-autonomy:decisions]

- User-directed: each work run needs a compact handoff record owned by Orchestrator; a conversation alone is insufficient continuity.
- User-directed: agents work freely within scope, with efficient retrieval and necessary questions rather than routine approval gates.
- Implementation choice: keep archived run records under products/<project>/runs/ and a CURRENT_RUN.md pointer in the product root. Read the archive directly on resumption; preserve its existing exclusion from ordinary retrieval.
- Preserve role-routing.json unchanged: it selects model/effort/context. Operational behavior belongs in standing orders, workflow and role rules. Actual host activation and token/cost usage remain unknown.

Canonical shared policy: [Run records and handoff](../../../operating-system/RUN_RECORDS.md). This log is observational; it cannot manufacture user approval or PASS evidence.

## Outcomes and evidence [product-studio-v2:run:harness-autonomy:outcomes]

Initial inspection found autonomy and scoped retrieval already present, but blanket no-document rules and optional machine state contradicted the user's recordkeeping expectation. Active rules, guides, all role instructions and the workspace entry point now align with required Orchestrator-owned records and autonomy within scope. Workspace AGENTS.md matches its tracked source. Routing and retrieval code are unchanged.

The user's ID correction was applied to shared policies, roles, World decisions and this run. Harness metadata/check passed with zero graph errors, 33 addressable requirement nodes and 52 edges. A World-scoped query returns `world:req:enforced-authority` and only World/studio context. Archived runs remain excluded from normal retrieval. All seven existing retrieval tests passed. Review and delivery evidence follows.

Independent-review dispatch: `/root/harness_autonomy_records_review`, role QA; requested `gpt-6.1-sol`, medium, fork none; routing SHA256 `1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F`. Actual activation, token use and cost are unknown. Requested route is supported by the host tool catalog; submission alone does not prove activation.

Independent review returned PASS with no blocking findings, confirming rule consistency, required fields, autonomous scope, correct source links/IDs, preserved World content and unchanged routing/runtime. Orchestrator accepted the rules and metadata candidate. The CLI still does not automatically write run records; no measured cost savings are claimed.

Delivered candidate: commit `428ab5c5cb7a66cdac45646ce19c05b784409dcf` on `main` at `https://github.com/JKay93/Product-Studio-v2.git`. Push succeeded without force; remote branch revision was read back and matched. The active parent workspace entry point was updated locally and matches its tracked source `docs/WORKSPACE_AGENTS.md`. This closing receipt records that verified candidate, avoiding a self-referential current-record commit hash.

## Deferred work [product-studio-v2:run:harness-autonomy:deferred]

- Automatic record generation or runtime enforcement: outside this rules-alignment task. The current host/orchestrator writes records; the CLI validates/retrieves existing data.
- World phase 1 implementation: remains ready and unstarted; this task changes the harness, not the application.
- Historical run backfill: not assigned; do not invent earlier criteria, outcomes or metrics.

## Handoff [product-studio-v2:run:harness-autonomy:handoff]

Status: complete. All assigned criteria passed; no blocking questions or remaining harness tasks. Future agents should apply RUN_RECORDS.md to their next selected work run. World phase 1 remains ready and unstarted, as a separate product task. Deferred items above stay explicit. No new spending or production publication was performed.
