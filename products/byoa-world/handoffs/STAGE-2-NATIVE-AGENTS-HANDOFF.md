<!-- studio {"id":"byoa-world:handoff:stage-2-native-agents","scope":"byoa-world","type":"handoff","status":"superseded","links":[{"relation":"requires","target":"byoa-world:roadmap:main"},{"relation":"requires","target":"byoa-world:contract:main"},{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"}]} -->
# Stage 2 handoff — design native agents and company-funded work

**Historical handoff; superseded for next steps on 2026-10-03.** Continue with the [Step 1 Agent Creation handoff](STEP-1-AGENT-CREATION-HANDOFF.md), [Decision 008](../decisions/008-account-agents-world-experience.md), the current [roadmap](../ROADMAP.md) and [contract](../CONTRACT.md). The old two-agent package/trial sequence below is reference, not an instruction to resume it.

Owner: orchestrator. Updated: 2026-10-01. Authority: user requested the necessary
updates and next-chat Stage 2 handoff after reviewing native-first roadmap changes.
No handoff template exists; this record supplies authority, source order, bounded
next assignments, checks and preservation rules.

## Start here

Continue **Stage 2 discussion/design**. Stage 1/1.1 human foundation is accepted.
Stage numbers stand directly in ROADMAP.md: this is not Phase 1 Stage 2 or Phase 2.
Next chat presents a revised native-agent participation package before any Stage
2.1 coding. The implementation hold remains; no model call, runtime/authentication
preflight, credential entry, installation, new spending or migration is authorized.

Read in order; narrow further reading to the actual assignment:

1. Studio AGENTS.md and operating-system/STANDING_ORDERS.md.
2. Project [AGENTS.md](../AGENTS.md), latest [CONTRACT.md](../CONTRACT.md), [STATE.md](../STATE.md).
3. [Decision 004](../decisions/004-native-agents-company-funding.md) and [ROADMAP.md](../ROADMAP.md): Stage 2/2.1, relevant later categories, orchestration/preservation. ROADMAP is the milestone-status source.
4. [Decision 002](../decisions/002-world-foundation.md), [foundation delivery](../runs/stage1-foundation-delivery.md), [MODULARITY](../architecture/MODULARITY.md).
5. [STRATEGY.md](../STRATEGY.md), current [backlog overlay](../PRODUCT_BACKLOG.md), and only relevant historical participation/route/design evidence for reuse.

## Settled direction and preserved choices

- Audience: SMEs; employee company work should use company-funded access. User/admin, agent/operator and payer are distinct. Never silently charge personal employee funds. A personally paid BYOA runtime needs approved company funding/reimbursement; company sponsorship is not automatic.
- Ready-made native agents first; optional BYOA after native collaboration is verified. Default onboarding requires no customer-launched runtime or pairing. Two real attributable executions with complementary deliverables; different providers are optional.
- Reuse A project brief → B complementary plan → human review/edit/explicit acceptance. Exact task/roles and fixture remain open; garden and Product planner → Technical architect were examples, not explicit selections.
- Keep World provider/runtime-neutral. Platform-operated runtime connects through the same scoped work/permission contract. Credentials stay with runtime component and outside World domain/browser/prompts. Placement, protection and operation need technical design.
- Keep named Worlds, one plain-text planning note per World, explicit Save/revision/conflict/recovery, Calm design, React/TypeScript/Vite + Node/SQLite and cohesive feature public interfaces. No new stack selection or foundation rewrite.
- Keep frozen saved inputs, exact A-to-B handoff, attributable retained proposals, human-only canonical acceptance, stop/revocation and restart without revived grants. Existing additive schema migration, backup and compatible fallback principles carry forward; detailed native schema remains to design.
- Basic usage/cost controls move to Stage 2: provider/model/request/attempt usage and applicable price basis, task totals, payer binding, reservations before work, concurrent/in-flight limits, deduplicated settlement/release, failed/unknown outcomes and reconciliation. Proposed customer charges are distinct from raw provider costs. Unknown cost is not zero.
- Commercial pricing is open: dollar balance vs abstract credits, conversion, markup, company subscription/seats, included activity, processor and failure/refund policy. $10/$13 and one-cent-credit examples were illustrative. No native allowance/provider/model is selected; new external-spending authority remains zero.
- Full payments/credit sales are not a Stage 2 prototype prerequisite. Stage 3 covers selected company ongoing-work/admin and optional BYOA; Stage 4 requires paid/private SME readiness. Do not use private inputs before readiness, even if a later stage number is named.

## Existing work and evidence to reuse

Application: sibling BYOA-World/, published main `fe4a8db73a8da7a571857c8e07172fb2249b35c7`.
Accepted 32-file foundation manifest SHA-256:
`e132677331928d42081e81e37434da5a4eb90f09cda0cc1eb0a820f32a595b9f`.
12 focused tests, typecheck/build, independent QA and actual browser preservation,
save/recovery/conflict/World-scope checks are recorded. Native 200% zoom PASS is
user-reported. Publication isolated README/package/gitignore against the old base;
implementation/lock/config blobs remain the accepted ones through Git line-ending
conversion. See [publication receipt](../runs/publication-20261001.md).

Useful code: src/app/foundation/, src/features/worlds/workspace/,
src/features/resources/planning-note/, src/platform/local-owner/,
src/platform/sqlite/ and shared contracts/UI. Human-only preview defaults to
http://127.0.0.1:4330; process availability was not rechecked in this handoff update.
Follow application README for the pinned bundled Node and foundation launch commands;
do not launch historical external/pilot commands to inspect the human foundation.

The earlier external-first Stage 2 plan/route/design are marked superseded for route,
onboarding and funding. Keep their compatible work controls as reference. [Decision 003](../decisions/003-agent-participation.md)
retains the original approval and reviewed identities; exact text snapshots live at
`runs/reviewed-candidates/stage2-external-20261001/`, with manifest.json. Historical
concept UI is not a native onboarding mockup or live execution/persistence evidence.
QA on that package does not accept the new native package.

One bounded external Codex route succeeded historically. It does not prove arbitrary
runtime compatibility, a real external two-agent pair, accurate automated billing
or private-data assurance. Existing local external connector/Session/review code
can be inspected and reused where compatible; keep all prior failed/unknown usage.

## First conversation and bounded planning

Start AGD-01 with one concise recommendation for an SME-relevant fictional/public
task and two complementary roles. Preserve the user's linked-deliverable intent;
avoid a large questionnaire or returning to reviewer-only cooperation. Ask only
about unresolved choices that materially affect the package.

Inspect existing source read-only for reuse; identify the minimal runtime, Session,
proposal, migration and accounting changes. Do not implement the native service or
choose an API provider/model from a historical studio worker route.

Then coordinate the smallest useful team. Read harness/role-routing.json immediately
before dispatch/resume. Explicitly request gpt-6.1-sol Medium, fork_turns none for
PM/Technical Specialist/Designer/QA; Builder is gpt-6.1-sol Low, fork_turns none when
implementation becomes authorized. Verify host availability and record requested
route/agent identity; keep actual activation unknown without host evidence.
Orchestrator configured route is gpt-6-astra Low; a file does not change its session.

Assignments name package IDs, exact source/write scope, preserved decisions,
template/alignment criteria, deliverables, checks and dependencies. PM owns bounded
task/payer requirements; Technical Specialist owns native runtime/API/credential
placement, contracts/data/reuse and cost-limit feasibility; Designer owns ready-made
role/setup/disclosure/work/review/usage/error UI. No standing committee or agent per
row. Consult template catalog and actually read relevant UI/API skills when used;
do not install plugins automatically. Current provider pricing, supported usage and
limit behavior must be verified from primary documentation when selecting a route.

## Package to present before coding

1. One task, complementary roles, linked deliverables and acceptance rubric.
2. Native selection/setup, scoped inputs, operator/payer disclosure, work/handoff,
   review/acceptance, insufficient allowance, failed/unknown cost, stop/reopen screens;
   Calm design reuse and actual future keyboard/narrow/zoom checks.
3. Supported runtime/model/provider recommendation with alternatives, operation and
   credential protection, World contract, identity/grants, ownership and failure rules.
4. Minimal per-call/task usage and cost schema, price basis, funding account binding,
   reservation/limit/concurrency/settlement/reconciliation rules. Test accounting is
   labelled; raw provider expense and any proposed retail charge remain distinct.
5. Feature/file/public-interface plan, read-only reuse map, additive migration/backup
   and compatible rollback. Preserve current ownership/revisions and all legacy work.
6. Bounded Stage 2.1 delivery assignments and meaningful checks: genuine A→B handoff,
   owner acceptance, denied resource/action/late writes, restart/history, failures,
   duplicate/concurrent accounting, no personal fallback or duplicate compute charge.
7. Separate proposed real-run allowance: exact inputs/provider/model, call/step/token/
   tool/deadline limits, enforceable maximum exposure and handling of uncertainty.
   This is for later authorization; do not execute to create the design package.

Record material native choices once; revise relevant PRD/technical/design records
without overwriting historical receipts. User approval of this new package and
resume precedes coding; actual inference/spend additionally needs live authority.

## Preservation and exclusions

Do not resume the weekly pilot or unused cycle 3; no retry/reset or accounting reset.
Preserve .data/, .phase1/, .foundation/, accepted book-swap, proposals/revisions,
attempt identities and original budgets. Stage 1 preservation snapshot is at
tmp/byoa-foundation-preservation-20261001/ outside app Git (148 original files,
including 73 ignored; 145 untouched originals verified). Prior code remains dirty
locally; inspect Git state before edits and do not overwrite or blanket-stage it.
Foundation documents and SQLite are separate from the old pilot startup/store.

No synthetic result masquerades as real agent work. No API key in chat/source/logs,
private employee memory, private customer input, payment collection, new paid account,
installation, deployment or data migration follows from design authority. No original
Product-Studio/OpenClaw changes. No new chat/thread or automation is created by this
handoff. Publish only scoped studio records under existing authority; application
publication requires its actual authorized candidate/scope.
