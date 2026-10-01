<!-- studio {"id":"byoa-world:roadmap:main","scope":"byoa-world","type":"roadmap","status":"approved","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# BYOA World roadmap — discuss, design, build, verify

- **Owner:** Product Manager; orchestrator maintains status and evidence.
- **Authority:** [CONTRACT.md](CONTRACT.md), [native-first direction](decisions/004-native-agents-company-funding.md), latest discuss/design direction; [organization decision](decisions/001-project-organization.md) and [modularity rules](architecture/MODULARITY.md).
- **Updated:** 2026-10-01. No committed dates.
- **Status:** **approved by the user on 2026-09-30**, with publication and new-chat handoff requested. Approval settles the stage sequence and planning scope; concrete designs, stack and implementation scope remain subject to each design-stage decision. It does not authorize model runs, installation, new spending or production release.
- **Sources:** original ChatGPT PDF handoff S1 and latest user direction S2. The PDF supplies the product thesis, not these stage boundaries.

## How to read this roadmap

**Whole-number stages discuss and design. Their `.1` stages implement, verify and review the agreed design.** Stage **1** settles the World foundation; **1.1** builds it. Stage **2** settles agent participation; **2.1** builds it. Stage 0 preserves feasibility already established. Numbers are stages, not software versions or test counts.

Start with the overview and the current pair. Later stages set decision categories and dependencies; they are not frozen feature specifications. Each design stage ends with a concrete package for the user's decision. Delivery then proceeds inside those choices without asking again for routine fixes.

Work-package IDs such as `BYOA-FND-01` are separate from stage numbers and remain stable if work moves. Status values are **proposed, ready, active, blocked, candidate, accepted, released, paused, dropped**. Acceptance needs an acceptance source; release needs a delivery receipt. **Unless explicitly stated otherwise, all future packages are proposed and evidence is pending.** Passing tests is not user acceptance or release.

### Contents

- [Overview](#outcomes-and-sequence)
- [Stage 0: existing evidence](#stage-0--retained-connection-feasibility)
- [Stage 1: foundation design](#stage-1--discuss-and-design-the-world-foundation) and [1.1: foundation delivery](#stage-11--build-and-verify-the-world-foundation)
- [Stage 2: participation design](#stage-2--discuss-and-design-agent-participation) and [2.1: participation delivery](#stage-21--build-and-verify-agent-participation)
- [Stage 3: ongoing work design](#stage-3--discuss-and-design-ongoing-work) and [3.1: delivery](#stage-31--build-and-verify-ongoing-work)
- [Stage 4: organizational readiness](#stage-4--discuss-organizational-and-private-data-readiness) and [4.1: delivery](#stage-41--deliver-the-selected-organizational-workflow)
- [Stage 5: outside expertise design](#stage-5--discuss-outside-expertise-and-expansion) and [5.1: delivery](#stage-51--deliver-the-selected-outside-engagement)
- [Agent orchestration](#agent-orchestration-and-evidence), [preservation and mapping](#preservation-source-alignment-and-legacy-references), [next steps](#now-next-and-later), [change control](#change-control)

## Outcomes and sequence

| Stage | Outcome and measure | Status | Lead | Dependency | Exit evidence |
| --- | --- | --- | --- | --- | --- |
| **0 — Connection feasibility** | Know which routes work and their limits | Existing evidence retained | Technical Specialist | Existing observations | Original closeout and external-route evidence |
| **1 — Define World foundation** | Agree minimum features, appearance, architecture, stack, file layout, design system and skills | Approved, 2026-10-01 | PM with relevant specialists | Roadmap approval | [Decision 002](decisions/002-world-foundation.md); reviewed revision 2 |
| **1.1 — Deliver World foundation** | Create/reopen a World and work as a human in a saved workspace | Accepted, 2026-10-01 | Orchestrator / user | Approved Stage 1 package | [Closeout](runs/stage1-foundation-delivery.md); positive user feedback and user-reported native 200% zoom PASS |
| **2 — Define agent participation** | Design two built-in agents, cooperative work, company payer and bounded usage | Ready for native-first revision, 2026-10-01 | PM / Technical Specialist / Designer | Accepted foundation | [Decision 004](decisions/004-native-agents-company-funding.md); original external package/reference review retained; revised native package pending |
| **2.1 — Deliver agent participation** | Verify two real built-in agents, controlled usage and human acceptance | Paused by user, 2026-10-01 | Builder | Revised native Stage 2 package, user resume and applicable execution authority | Real journey, enforced denials, usage/budget evidence and saved work |
| **3 — Define ongoing work** | Select useful SME/team workflows, funding administration, resumption and optional BYOA | Proposed | PM / Designer | Observed Stage 2.1 use | Focused feature/design package |
| **3.1 — Deliver ongoing work** | Repeat selected workflow across tasks and Sessions | Proposed | Builder | Approved Stage 3 package | Integrated workflow and recovery evidence |
| **4 — Define organizational readiness** | Agree company/private-data readiness and billing for a selected paid pilot | Proposed; can move earlier if needed | Technical Specialist / PM | Selected team use and data classes | Concrete assurance/operations design |
| **4.1 — Deliver organizational use** | Run selected workflow with verified access and understood handling | Proposed | Builder | Approved Stage 4 package | Readiness evidence before authorized private pilot |
| **5 — Define outside expertise** | Decide whether engagements, commerce or discovery solve a real need | Conditional | PM | Useful platform and observed demand | Bounded engagement design |
| **5.1 — Deliver selected expansion** | Commission attributable outside work under scoped terms | Conditional | Builder | Approved Stage 5 package | Selected engagement and failure/termination evidence |

**Principles:** World's work/permission contract remains runtime/provider-neutral. Built-in agents are the initial participation route for SME usability; optional BYOA follows verified native work. Humans need no personal agent. Provider credentials stay with the runtime component, including a platform-operated runtime. Company work uses company-funded access with no silent personal employee fallback or duplicate provider-compute charge. Personal memory is not imported by default. A World persists; a Session is bounded; ending access preserves accepted work. Basic usage/reservations are required before native execution; payment collection is a later readiness increment. Headless participation remains possible; spatial presentation is optional.

The previous Phase 1 produced useful components but failed to deliver the intended platform. This roadmap preserves them, removes the weekly pilot as a gate and inserts the missing design discussion. **Stage 1.1 is human-first; two-agent collaboration belongs in Stage 2.1.**

## Stage 0 — Retained connection feasibility

**Goal:** use existing evidence without restarting experiments. **Entry:** original accepted prototype and later local work exist. **Minimum output for Stage 1:** reusable-component inventory and honest limitations, not another live test.

| Package | Outcome / criterion | Owner | Status / evidence |
| --- | --- | --- | --- |
| BYOA-OBS-01 | Preserve original live Codex-to-Claude exchange under its actual scope | Technical Specialist | Accepted bounded prototype: [verification](features/collaboration/document-review/EVIDENCE/VERIFICATION.md), [closeout](closeouts/PHASE-0-CLOSEOUT.md) |
| BYOA-OBS-02 | Preserve independently launched Codex route; distinguish synthetic review | Technical Specialist | Observed: [assessment](research/codex-external-route.md), [evidence](features/agents/connection/EVIDENCE/PHASE-1.md) |
| BYOA-OBS-03 | Inventory grants, review, history, persistence, failure and stop controls | Builder / reviewer | Existing components and [continuity review](runs/phase1-continuity-review.md); integration fitness needs inspection |
| BYOA-OBS-04 | Carry forward unresolved runtime and private-data limits | Technical Specialist | [Isolation findings](research/native-isolation-local.md), [knowledge boundaries](research/knowledge-boundaries.md), retained attempts |

**Exit interpretation:** original acceptance stands, without retroactively accepting new criteria. Enough feasibility exists to begin design. Two real independent external participants, universal interoperability and private-data assurances remain unproven. No model run, baseline, retry or full old-suite replay is required to enter Stage 1.

## Stage 1 — Discuss and design the World foundation

**Goal:** agree what the first platform experience is, how it looks and how it will be built. **Entry:** roadmap approval; inspect existing app and records without assuming the prototype stack/layout must be retained.

**Minimum proposed scope for Stage 1.1:** enter the app, create a named World, appear as its human owner, navigate a coherent workspace, create/edit one simple native work item, save it and reopen it. Artifact type, identity method, screens and storage are decisions below. A second World supports scoping verification without broad team administration. Permitted demo inputs must be explicit: fictional or specifically curated public material, no private input. No live agent is needed to complete this journey.

| Package | Questions to discuss / resolve | Lead and contributors | Output / completion criterion | Dependencies |
| --- | --- | --- | --- | --- |
| BYOA-FND-01 — Scope | Who is the first user? What does creating a World mean? Which human task proves the foundation useful? What waits? | PM; user | Journey, must-have/next/later list and non-goals; no hidden agent integration | Roadmap approval |
| BYOA-FND-02 — Reuse | What existing code/data is suitable? What is coupled to weekly fixtures? Adapt, isolate or replace which parts? | Technical Specialist; builder | Current-state/reuse map and preservation plan; evidence linked, not presumed reusable after change | FND-01; read-only inspection can overlap discussion |
| BYOA-FND-03 — Navigation | What is on entry, World list/create, World workspace and work-item screens? Where are owner, resources and settings? | Designer; PM | Screen map, labelled navigation and complete journey with empty/error/saved states | FND-01 |
| BYOA-FND-04 — Appearance | Which references/style/density feel right? How should desktop/narrow screens differ? How is future agent space handled honestly? | Designer; user | Selected direction and concrete wireframes/mockups; no inactive controls pretending functionality exists | FND-03 |
| BYOA-FND-05 — Architecture | Where do UI, domain logic, persistence and authority live? What owns canonical work? What seams will Stage 2 need? | Technical Specialist; builder | Small component/data/lifecycle diagram; responsibilities and failure assumptions; no premature universal framework | FND-01/02; coordinate FND-03 |
| BYOA-FND-06 — Stack | Keep or change current frontend/backend? Which storage, rendering, testing and preview tools fit? What are maintenance/migration trade-offs? | Technical Specialist; Designer | Recommendation with alternatives/consequences; no framework, database or vendor chosen by this roadmap | FND-04/05 |
| BYOA-FND-07 — Files and interfaces | Where do feature code, shared UI, adapters, tests and assets live? How are dependencies and public interfaces controlled? | Technical Specialist; builder | Stack-specific code tree respecting approved modularity; document folders are not mandated code roots | FND-05/06 |
| BYOA-FND-08 — Design system | Which typography, colours, spacing, surfaces, navigation, forms, feedback and focus rules are needed now? | Designer; builder | Small token/component/state inventory; accessible keyboard/contrast/responsive conventions | FND-04/06 |
| BYOA-FND-09 — Skills/tools | Which available skills materially help design, implementation or browser verification? Is anything missing? | Designer / Technical Specialist; orchestrator | Selected/conditional/not-needed inventory with purpose; read selected skill instructions at use; no automatic install | FND-04/06/08 |
| BYOA-FND-10 — Human data/authority | How is local owner identity represented? What can they edit? What stays local? What happens on save failure or restart? | Technical Specialist; PM | Entity/permission table, input/save/recovery rules; demo identity labelled honestly | FND-01/05 |
| BYOA-FND-11 — Delivery plan | Which screens/states/checks prove scope? Which tasks can run independently? | Orchestrator; relevant leads | Bounded Stage 1.1 assignments, acceptance matrix and walkthrough script | FND-03–10 |
| BYOA-FND-12 — Decision | Does the user agree to features, appearance and consequential technical choices? Which details are delegated? | User decides; orchestrator records | Coherent approved package and unresolved blockers; implementation waits for decision | FND-11 |

**Architecture boundary:** Stage 1 establishes World/human/native-resource ownership, storage and extension seams. Detailed enrollment, protocol/authentication, supported runtime routes and cooperative scheduling belong in Stage 2. Avoid building speculative orchestration infrastructure now.

### Planned artifacts

Use the smallest useful record set; combine small documents when clearer. Proposed paths are not instructions to create unapproved feature folders.

| Artifact | Location / template | Owner / purpose |
| --- | --- | --- |
| Foundation requirements | **Proposed** `features/worlds/foundation/PRD.md`; PRD template, created after scope establishes the domain | PM; journey, stable requirements and exclusions |
| Architecture, stack and file layout | **Proposed** `architecture/CONTEXT.md`; technical-context template | Technical Specialist; observed/planned architecture and trade-offs |
| Shared UI foundation | **Proposed** `design-system/FOUNDATION.md`; design template | Designer; selected direction, tokens/components/states and accessibility |
| Screen designs | **Proposed** foundation `DESIGN.md`, or linked section of shared design if smaller | Designer; interactions and responsive behaviour |
| Consequential decisions | `decisions/` using next unused number; decision-record template | Relevant lead; choice, alternatives, consequences, approval source and delegated detail |
| Assignments and evidence | `runs/`; **proposed** foundation `EVIDENCE/VERIFICATION.md`; assignment/review/verification templates | Orchestrator assigns; builder supplies checks; reviewer owns findings |

### Skills selection discussion

| Available category | When useful | Constraint |
| --- | --- | --- |
| Computer-use / browser capabilities | Verify actual screens, interactions, responsive and failure states | Read applicable skill at use; screenshots alone do not prove behaviour |
| Visualize | Explore flows, layouts or architecture interactively | Optional; mockup is not implemented app |
| Imagegen | Create bitmap artwork required by selected direction | Optional; existing/vector/code assets may be more suitable |
| Existing UI/component tools | Reuse suitable available tooling after stack/design choice | Inventory first; no fictional installed frontend skill or silent dependencies |
| Sites | Only when explicitly chosen or appropriate to a supported Site project | Not a generic requirement or automatic migration for this existing app |

**Parallelism:** after FND-01, reuse inspection and screen exploration can run together. Architecture and design reconcile constraints before stack/components settle. File layout and acceptance follow choices. Do not spawn a separate agent for every row.

**Exit / user checkpoint:** user understands the human journey from mockups, the recommended technical approach and exclusions. Record choices and implementation authority before Stage 1.1. Roadmap approval alone does not approve unseen screens or select a stack. **Exclusions:** agent execution, broad team onboarding, private uploads/connectors, marketplace, spatial UI and production release.

## Stage 1.1 — Build and verify the World foundation

**Goal:** deliver approved human workspace. **Entry:** FND-12 approved, records current, preservation plan and bounded builder assignment ready. **Minimum for Stage 2:** persistent Worlds, human ownership, one native resource, navigation and agreed extension boundary.

| Package | Bounded responsibility | Owner / handoff | Dependency | Acceptance evidence |
| --- | --- | --- | --- | --- |
| BYOA-WLD-01 | Prepare approved layout/preview; adapt selected modules; preserve data | Builder; technical review for deviations | FND-12 | Working build/preview, mapped changes, no unexplained rewrite/destructive migration |
| BYOA-WLD-02 | Shared UI, shell, tokens and navigation | UI builder; Designer compares | WLD-01 | Consistent controls/focus, responsive shell, honest available capabilities |
| BYOA-WLD-03 | Approved World create/list/open/rename scope and ownership | Builder | WLD-01; may parallel WLD-02 behind agreed contracts | Create two Worlds, reopen each, verify identity/resources and agreed naming validation |
| BYOA-WLD-04 | Selected resource create/edit/save/open with unsaved/error feedback | Builder | WLD-03 contract, WLD-02 screens | Human task without agent; restart preserves saved work; errors never imply success |
| BYOA-WLD-05 | Integrate and verify actual candidate | Builder; independent reviewer | WLD-02–04 | Journey/failure/UI checks below and affected regressions; corrected defects |
| BYOA-WLD-06 | Show delivered journey and record disposition | Orchestrator; user | Reviewed WLD-05 candidate | User feedback, remaining limits, actual acceptance and next-stage readiness |

| Verification area | Required meaningful observation | Evidence owner |
| --- | --- | --- |
| Human journey | Empty start → create World → work without agent → navigate away/back → restart/reopen | Builder; reviewer |
| Scope/persistence | World A's resource never appears as B's; saved content/ownership remain correct | Builder; reviewer samples boundaries |
| Failure/recovery | Required fields, interrupted save, unavailable server/storage and unsaved edits follow design | Builder; browser reviewer |
| Visual/responsive | Actual key screens match approved mockups at agreed desktop/narrow widths; no clipped controls or unreadable main status | Designer or UI-capable reviewer; candidate screenshots |
| Accessibility | Keyboard journey, visible focus, labelled inputs, useful errors, readable contrast and relevant zoom checks | Reviewer; automated checks where useful plus manual |
| Preservation/regression | Existing work and attempt/budget evidence intact; check changed components without unnecessary live reruns | Builder; orchestrator |

**Completion:** agreed journey works, independent review passes the actual candidate and user sees the result. Static attractive screens or unit tests alone are insufficient. **Exclusions:** agent calls/connector implementation. Routine defects are fixed within scope; material stack/identity/design reversals return to the decision.

## Stage 2 — Discuss and design agent participation

**Goal:** design two real built-in agents with comprehensible human controls and bounded company-funded work. **Entry:** accepted Stage 1.1 foundation and [Decision 004](decisions/004-native-agents-company-funding.md). Stage means a roadmap stage, not a Phase 1 substage. The original external-pair package is retained as reference; its route approval does not authorize native implementation.

**Minimum proposed delivery:** owner selects ready-made A/B roles, prepares a scoped Session using a saved note, previews recipients and limits, observes A's brief becoming B's input for a complementary plan, reviews/edits and explicitly accepts work, ends access and reopens retained results. No customer-launched runtime/pairing is required in the native default journey. Two genuine attributable agent executions are required; different models/providers and a large role catalogue are not. Exact task/roles and models remain to be selected.

| Package | Decisions / discussion | Lead / contributors | Output / criterion | Dependency |
| --- | --- | --- | --- | --- |
| BYOA-AGD-01 | Which SME-relevant fictional/public task needs both agents? What complementary roles and handoff? | PM; user | One bounded brief → plan journey and acceptance rubric; role examples are not selected fixtures | Stage 1.1 |
| BYOA-AGD-02 | Which supported API/runtime/model route supplies native agents? Who operates it and protects provider access? | Technical Specialist | Evidence-based route, component ownership, auth/usage/limit support, alternatives and failure handling; reuse compatible external contract | AGD-01 |
| BYOA-AGD-03 | Distinguish human, agent, operator and payer; provision native roles without external pairing | Technical Specialist; Designer | Session-scoped identity/grants, truthful readiness/revoke states; credentials outside World domain/browser/prompts | AGD-02 |
| BYOA-AGD-04 | Session purpose, frozen inputs, expiry, attempt/result correlation and deduplication | Technical Specialist | Minimal runtime-neutral contract and enforced authority/lifecycle; native route gains no privileged canonical writes | AGD-01–03 |
| BYOA-AGD-05 | Exactly what does each agent receive? Who can observe it and what is retained? | Technical Specialist; PM/Designer | Inspectable recipient inputs and B's actual committed A handoff; truthful handling and negative cases | AGD-04 |
| BYOA-AGD-06 | Native selection/setup, work, contribution review, budget and failure screens | Designer; PM | Calm workspace mockups including preparing, working, partial/stopped, insufficient allowance, unknown cost and narrow/keyboard states | AGD-01/03–05/10 |
| BYOA-AGD-07 | Review/edit/accept/conflict and retained-work rules | PM/Designer; Technical Specialist | Explicit acceptance into existing note; retained outputs after end/restart without revived authority | AGD-04/06 |
| BYOA-AGD-08 | Execution ceilings, stop, failed attempts, uncertainty and permitted demonstration | Technical Specialist; reviewer | Separate offline checks and proposed bounded real-run allowance; no implicit spend or retries | AGD-02–07/10 |
| BYOA-AGD-10 | Company payer, per-call usage/prices, task totals, reservations, concurrency and reconciliation | Technical Specialist; PM | Basic accounting/execution design; raw provider cost distinct from proposed customer charge; test balances only in prototype; no fixed credit conversion/markup selected | AGD-02–04 |
| BYOA-AGD-09 | Agree revised native package and determine actual implementation/execution authority | User; orchestrator records | Coherent approved native PRD, technical/design package, checks and preserved data; maintain hold until user resumes | AGD-01–08/10 |

Package identifiers remain stable; numerical order is not a dependency order. **Required boundaries:** platform/World/operator/Session/resource ceilings; scoped context; runtime-side provider access; no direct agent acceptance of canonical work; stop denies future World access/writes with truthful cancellation/retention limits. Bind funding source to work; never use employee personal funds silently. Record provider usage and applicable rate basis without assuming every route exposes exact dollar cost. Unknown usage is not zero. Reserve before work, account for concurrent/in-flight calls, settle once, retain uncertain reservations and reconcile. Bound each call and overall work; a spending limit cannot promise task completion.

**Artifacts:** revise the native participation package and supersede relevant historical external-only requirements/design; keep reviewed snapshots. Technical Specialist owns runtime/component/API/data and minimal cost contract; PM owns task and funding policy; Designer owns native onboarding/work/review/limit states. **Parallelism:** focused technical and design work after the task/payer requirements; no worker per table row. **Exit:** revised package approved before Stage 2.1. **Exclusions:** full checkout/credit sales, selected commercial rates, real company/tenant production identity, arbitrary runtime support, private memory/input, marketplace, implicit spending and deployment. Real provider runs require separate bounded authority; fake accounting is labelled test evidence.

## Stage 2.1 — Build and verify agent participation

**Goal:** verify real native cooperation in the accepted foundation. **Entry:** revised AGD-09 approval, user ends implementation hold, settled interfaces/preservation and applicable installation/execution authority. **Minimum for Stage 3:** bounded native work, attributable proposals, human acceptance, retained history, usage/budget accounting and understandable failures.

| Package | Bounded work | Owner | Dependency | Acceptance evidence |
| --- | --- | --- | --- | --- |
| BYOA-AGT-01 | Native participant/grant binding, scoped exchange and request/result identities | Builder | Revised AGD-09 | Forged identity, wrong World/resource, expiry/duplicate denials without paid inference |
| BYOA-AGT-02 | Selected native runtime/model adapter and provider access separation | Builder; Technical Specialist for contract deviations | AGT-01 | Two real attributable executions possible; credentials never in domain/browser/prompts; fake routes test-only |
| BYOA-AGT-03 | Native roles/readiness, Session context/limits, status and recovery UI | UI builder; Designer | AGT-01/08 interfaces and approved mockups | Useful selection without external pairing; readable usage states and keyboard/responsive journey |
| BYOA-AGT-04 | A-to-B work, proposal/edit/acceptance and retained history | Builder | AGT-01–03 | B gets A's actual committed contribution; explicit authorized human acceptance alone changes the note |
| BYOA-AGT-08 | Basic payer/usage/price-basis ledger, reservations and execution ceilings | Builder; independent reviewer | AGT-01/02 and AGD-10 | Test per-call/task totals, concurrent reservations, duplicate settlement, insufficient allowance, failed/unknown usage, no personal fallback and no double compute billing; no real credit sale |
| BYOA-AGT-05 | Stop/expiry/restart/late results and accounting failure regressions | Builder; independent reviewer | AGT-01–04/08 | Retained work, no revived grants/duplicate accepted output; unresolved cost not released as zero |
| BYOA-AGT-06 | Separately approved bounded real cooperative demonstration | Orchestrator / user | AGT-01–05/08 review and concrete live allowance | Exact disclosed inputs, real A/B handoff, reported usage/prices/limitations; human document acceptance remains separate |
| BYOA-AGT-07 | Integrated independent review and actual user walkthrough | Reviewer / orchestrator / user | Actual candidate and applicable demonstrations | Useful work, boundaries, UI and budget evidence; recorded limitations and disposition |

**Completion:** agreed native journey and cost guards work on the reviewed candidate, human-only writing remains usable, saved work survives end/restart and the user reviews the delivered experience. Usage reporting/cost reconciliation is verified for the selected route, not promised for every runtime. No synthetic second agent substitutes for real cooperation. **Exclusions:** payment collection, commercial pricing launch, private-data assurance without readiness, arbitrary external runtime integrations, unattended recurring work and production release. Preserve original stores, historical attempts/budgets and additive migration/backup/fallback requirements.

## Stage 3 — Discuss and design ongoing work

**Goal:** select the smallest features that make World useful beyond a demonstration. **Entry:** Stage 2.1 feedback. **Minimum for delivery:** one recurring workflow, required resources/organization and clear resumption/review rules. Listed capabilities remain candidates until discussed.

| Package | Questions / choices | Lead | Output / criterion | Dependency |
| --- | --- | --- | --- | --- |
| BYOA-WKD-01 | Which repeated job matters? What was awkward? What outcome matters without invented baseline? | PM; user | One workflow, success observations and exclusions | Stage 2.1 |
| BYOA-WKD-02 | Need projects, tasks, another human, invitations, roles or concurrency? | PM; Designer/Technical Specialist | Selected hierarchy, membership/conflict rules; personal/team scope clear | WKD-01 |
| BYOA-WKD-03 | Which document/note/artifact types, history, context, navigation/search are necessary? | Designer; PM/Technical Specialist | Resource lifecycle, permission-aware discovery and screens | WKD-01/02 |
| BYOA-WKD-04 | What persists between Sessions? Templates, roles, handoffs, resume without revived grants? | Technical Specialist; PM | Resume/new-Session model and selected reusable workflow; no implicit memory transfer | WKD-02/03 |
| BYOA-WKD-05 | How do company admins fund native/BYOA work and allocate employee/project limits? | PM; Technical Specialist | Selected company membership/payer/admin controls; no personal fallback; readiness requirements before real use | WKD-01/02; basic native route already Stage 2 |
| BYOA-WKD-07 | Which optional BYOA connection adds value after native work is verified? | Technical Specialist; PM/Designer | Reuse external Codex route; select one supported runtime and company-funded access, or defer; no universal compatibility claim | Verified Stage 2.1; observed need |
| BYOA-WKD-06 | Agree features, screens, architecture deltas and checks | User; orchestrator | Approved bounded delivery package; explicit optional BYOA selection/deferment | WKD-01–05/07 |

**Artifacts:** selected feature PRD/design/technical deltas, material decisions and workflow test matrix. **Parallelism:** resource/navigation and membership design overlap after workflow choice; settle persistence/conflict interfaces before concurrent builders. **Exit:** user understands what ongoing work becomes possible and what is deferred. **Exclusions:** entire PDF resource inventory, broad agent catalogue, private data before readiness, spatial UI or assumed productivity savings.

## Stage 3.1 — Build and verify ongoing work

**Goal:** deliver selected repeated-work journey. **Entry:** WKD-06 approved. **Minimum for Stage 4:** observed workflow and identifiable organizational/data needs.

| Package | Work and measurable criterion | Owner | Dependency / evidence |
| --- | --- | --- | --- |
| BYOA-WRK-01 | Selected task/project/member structure, access and company payer/admin limits | Builder | WKD-06; scope/lifecycle/payer checks; real company identity and readiness selected explicitly |
| BYOA-WRK-02 | Selected resources, history and discovery | Builder / Designer | WRK-01 interfaces; create/find/review/reopen evidence |
| BYOA-WRK-03 | Template/resumption/concurrency rules | Builder | WRK-01/02; fresh grants, correct context and retained history |
| BYOA-WRK-04 | Multi-task/Session integration, conflict and recovery | Builder / independent reviewer | Actual candidate; stale-write/interruption checks, search permissions if selected, Stage 1/2 regressions |
| BYOA-WRK-06 | Optional selected BYOA connection through the existing World contract | Builder / independent reviewer | WKD-07 selection; verified native work; supported route/auth and usage authority; preserve denied access and honest reported/unknown costs |
| BYOA-WRK-05 | User walkthrough across return visits | Orchestrator / user | Reviewed screens, keyboard/narrow layouts, empty/error/resume states and user disposition |

**Completion:** selected ongoing workflow succeeds with usable navigation, retained work and controlled contributions. Unselected candidates remain proposed. **Exclusions:** unattended runs, external messages, extra spending or private sources without their authority; no automatic production release.

## Stage 4 — Discuss organizational and private-data readiness

**Goal:** select appropriate real team/information use and establish its boundaries. **Entry:** concrete workflow, infrastructure/runtime operators and data classes. Readiness may move earlier if private data is needed sooner; **numbering never permits private use before readiness**.

| Package | Questions / choices | Lead | Design evidence | Dependency |
| --- | --- | --- | --- | --- |
| BYOA-ORD-01 | Who administers Worlds/members/policy? Which accountability needs are real? | PM / Technical Specialist | Selected workflow, roles and authority hierarchy; no enterprise checklist by default | Demonstrated need |
| BYOA-ORD-02 | Data classes, execution locations, storage/backup, operator/provider exposure and actual isolation? | Technical Specialist | Threat/boundary model, enforceable controls, prior findings reconciled; model behaviour is not isolation proof | ORD-01 |
| BYOA-ORD-03 | Which first source/action? Preserve source permissions, consent, provenance, revocation and side-effect control? | Technical Specialist / Designer | Source-specific contract and UI; GitHub/Drive/Notion examples are not commitments | ORD-01/02 |
| BYOA-ORD-04 | Ownership, retention/deletion/learning limits, export/delete/approval/permission authority? | PM / Technical Specialist | Human/agent matrix and truthful handling; direct edit is not destructive authority | ORD-02/03 |
| BYOA-ORD-05 | Operations, hosting and company billing for native/BYOA work? Which prepaid/payment, rate, refund/failure and reconciliation policy is justified? | Technical Specialist / PM | Selected operational/billing requirements, distinct provider/platform charges, testable funding limits and recovery/release plan; basic metering already Stage 2 | ORD-02–04 |
| BYOA-ORD-06 | Agree pilot scope, infrastructure and verification; identify blockers | User / orchestrator | Approved package; paid/private pilot waits for demonstrated identity, funding, handling and operational readiness | ORD-01–05 |

**Artifacts:** architecture/assurance records, selected integration feature records, handling/operations decisions and readiness matrix. **Parallelism:** administration UX and infrastructure assessment overlap; integration follows resulting data/authority contracts. **Exit:** bounded team/data plan with testable controls and explicit limits. **Exclusions:** universal confidentiality, remote forgetting, broad connectors, unbounded managed inference, employee-funded company work and automatic production launch.

## Stage 4.1 — Deliver the selected organizational workflow

**Goal:** implement selected use on actual infrastructure. **Entry:** ORD-06 and applicable access/spending/release authority. **Minimum for Stage 5:** accountable engagement under observable policies.

| Package | Work and criterion | Owner | Dependency / evidence |
| --- | --- | --- | --- |
| BYOA-ORG-01 | Selected identity/tenant/World/agent/Session/resource isolation and policy ceilings | Builder / Technical Specialist | ORD-06; positive/negative boundary checks on actual infrastructure |
| BYOA-ORG-02 | Selected source/tool with permissions/provenance/action controls | Builder | ORG-01; source revocation, denied resource, partial failure and safe errors |
| BYOA-ORG-03 | Selected company administration, payments/prepaid usage, reconciliation, retention, audit and recovery | Builder / Designer | Approved plan; UI explains limits; restore, uncertainty and budget checks |
| BYOA-ORG-04 | Independent readiness review before private input | Reviewer; specialist only for concrete expertise gap | ORG-01–03; findings resolved, unsupported claims removed |
| BYOA-ORG-05 | Separately authorized selected paid/private SME pilot and user review | Orchestrator / user/operators | ORG-04 plus authority; audit, outcome and accepted handling limits |

**Completion:** selected team workflow works under verified source permissions and understood handling. Review admin/integration screens for keyboard, responsiveness, visual consistency and error states. Revocation proves future denial, not retraction of disclosed information. **Exclusions:** unrelated integrations and public production launch; release requires its own concrete readiness/authority decision.

## Stage 5 — Discuss outside expertise and expansion

**Goal:** decide whether agents operated by others solve an observed need. **Entry:** useful standalone platform, relevant readiness and actual engagement demand. No need means defer.

| Package | Decisions | Lead | Output / criterion | Dependency |
| --- | --- | --- | --- | --- |
| BYOA-EXD-01 | Why are internal participants insufficient? What deliverable/operator relationship? | PM / user | One engagement use case and success/failed-work criteria | Observed demand |
| BYOA-EXD-02 | Identity, ownership/provenance and declared/verified capabilities? | Technical Specialist / Designer | Minimal Passport/profile; no universal trust score or private-client knowledge exposure | EXD-01 |
| BYOA-EXD-03 | Scope, permissions, ownership, acceptance, termination, price if any and disputes? | PM / Technical Specialist | Engagement lifecycle/terms; commissioning World owns deliverables by default unless otherwise agreed | EXD-01/02 |
| BYOA-EXD-04 | Is paid expertise justified? Pricing, service/compute separation, settlement and support? | PM; relevant expertise if needed | Select/defer commerce; evidence and explicit legal/payment/spending authority needs | EXD-03; demand evidence |
| BYOA-EXD-05 | Are invitations insufficient? Need directory, matching or World-to-World work? | PM / Designer/Technical Specialist | Select/defer each; portable evidence and disclosure boundaries | Repeated engagement demand |
| BYOA-EXD-06 | Which increment is useful now? | User / orchestrator | Approved small package; separate commerce/discovery increments where selected | EXD-01–05 |

**Artifacts:** selected engagement PRD/design/technical record and consequential identity/commercial decisions. **Parallelism:** identity investigation and engagement UX overlap; payments/discovery follow chosen need and policy. **Exit:** bounded expansion, not “build a marketplace”. **Exclusions:** assumed network effects, intelligence hosting, autonomous procurement and spatial-world commitments.

## Stage 5.1 — Deliver the selected outside engagement

**Goal:** deliver only selected expansion. **Entry:** EXD-06 and applicable commercial/external-action authority. **Minimum outcome:** attributable scoped work, explicit terms, reviewable delivery and termination.

| Package | Work / criterion | Owner | Dependency / evidence |
| --- | --- | --- | --- |
| BYOA-EXT-01 | Selected profile/evidence and invitation/engagement lifecycle | Builder | EXD-06; operator attribution, verified versus declared evidence and scope inspectable |
| BYOA-EXT-02 | Deliver/review/accept/terminate against existing work model | Builder | EXT-01; rejected/revised/failed/stopped paths; no residual grants or hidden ownership change |
| BYOA-EXT-03 | Commerce or discovery only if selected separately | Builder / relevant specialist | Specific authority; applicable payment/dispute/refund or cross-World disclosure checks |
| BYOA-EXT-04 | Independent review and actual engagement walkthrough | Reviewer / orchestrator / user | Candidate permission/termination and UI evidence; truthful commercial limits; separate release receipt |

**Completion:** selected engagement succeeds with clear identity, scoped access, acceptance and failure handling. Check visual, responsive, keyboard and consequential-action states. **Exclusions:** unselected payments, discovery, federation and spatial features. Direct engagement success does not prove marketplace viability.

## Agent orchestration and evidence

Tables describe work, not a standing committee or one agent per row. Batch related packages using the smallest useful team. Roles denote accountability; one qualified agent may cover related roles. Delegate substantive implementation to a builder with one relevant independent reviewer. Add technical/design specialists for concrete architectural or experience uncertainty, not generic approval rounds.

### Assignment contract

| Required field | What the orchestrator supplies |
| --- | --- |
| Goal / package IDs | One measurable result, current stage and status |
| Authority / inputs | Applicable contract/decision revisions, approved requirements/design and relevant source/evidence paths |
| Edit boundary | Exact application/document areas; exclude unrelated scope and other workers' files |
| Preserved decisions | Stack, public interfaces, visual direction, input/authority limits, existing data/attempts/budgets and non-goals |
| Deliverables | Candidate, implementation notes and evidence; selected template/alignment requirements where applicable |
| Dependencies / handoff | Prior outputs, stable interface agreement, recipient and next work unblocked |
| Checks | Meaningful acceptance scenarios, affected regressions, failure and UI verification where applicable |
| Replan condition | Unsupported route, missing authority, conflicting decision or correction bound; no unchanged retry loop |

### Dispatch sequence

1. PM narrows the journey. Designer and Technical Specialist explore relevant experience/feasibility in parallel when useful.
2. Reconcile screens, data and authority before implementation interfaces. Present one coherent package to the user, not competing agent plans.
3. Record agreed choices once. Parallel UI/domain/adapter builders need distinct edit scopes and settled interfaces; otherwise sequence them.
4. Builder supplies the actual candidate, checks, limitations and changed files. Reviewer compares that candidate with approved records/template, not only its summary.
5. Fix findings inside scope. Default: two implementation corrections and one review correction before replanning; no disguised unchanged retry or accounting reset.
6. Orchestrator verifies integration/preservation and shows the real journey. Feedback becomes bounded correction or an explicit material-scope decision.
7. Record candidate acceptance, user review and publication separately. A user accepting the platform is distinct from accepting an agent's document.

### Completion evidence and live status

| Evidence | Required content |
| --- | --- |
| Scope/design | Approved package, decision sources and deviations |
| Candidate | Revision or local file hashes; reproducible preview instructions |
| Checks | Applicable scenarios and actual outcomes; browser/visual evidence and limitations; reuse unaffected current evidence |
| Independent review | Findings on actual candidate, correction and disposition |
| User review | What the user saw, approved or requested; no inferred acceptance |
| Preservation/delivery | Retained data, attempts and budgets; publication receipt only when authorized and performed |
| Next-stage readiness | Dependencies satisfied, unresolved decisions and precise next assignment |

Maintain this ledger in the relevant stage when execution begins; do not create duplicate milestone-status lists elsewhere:

| Package ID | Status | Assigned owner | Candidate / approved record revisions | Acceptance criteria result | Evidence / review / user decision | Blocker or next action |
| --- | --- | --- | --- | --- | --- | --- |
| BYOA-FND-01–12 | approved | User; orchestrator records | Foundation revision 2, [Decision 002](decisions/002-world-foundation.md) | Coherent reviewed package approved | User: "Looks good, approved", 2026-10-01; [QA review](runs/stage1-61-reassessment.md) | Foundation delivered and accepted |
| BYOA-WLD-01–06 | accepted | Orchestrator / user | [32-file candidate](runs/stage1-foundation-delivery.md), manifest e1326773… | Reviewed automated/browser checks passed; user-reported native 200% zoom PASS | User positive preview feedback, zoom confirmation and "Sure proceed with stage 2", 2026-10-01 | Foundation published at fe4a8db under separate user authority; [receipt](runs/publication-20261001.md) |
| BYOA-AGD-01–08/10 | ready | PM / Technical Specialist / Designer | [Decision 004](decisions/004-native-agents-company-funding.md); original reviewed external package retained | Native-first direction settled; revised package not yet produced | User requested native-first/company-funded roadmap update and Stage 2 handoff | Revise task, native route/experience and basic usage/payer contract; no code/live runs |
| BYOA-AGD-09 | proposed | User / orchestrator | Revised native package pending | Original external approval does not accept native implementation | Decision 004 retains Stage 2.1 hold | Present revised package for approval and user resume; live allowance remains separate |

No manual baseline, copy count, time-saving claim or successful-cycle quota is added as a gate. Verification supports the agreed journey. Later scope is selected from need, not implemented because it appears in this document.

## Preservation, source alignment and legacy references

### What carries forward

| Existing material | Treatment |
| --- | --- |
| Original accepted Phase 0 and published app `0312413` | Preserve acceptance/publication receipts; no retrospective redefinition |
| External Codex route, scoped controls, review and continuity | Inspect and reuse compatible components; revalidate changed integrations |
| Weekly fixtures and runtime diagnostics | Optional regression/reference material, not next product milestone |
| Weekly cycle 1 preflight failure | Preserve consumed reservation, original unknown usage and startup diagnosis; no retry/reset |
| Weekly cycle 2 draft plus synthetic review | Preserve proposal/evidence; human acceptance pending; not two independent agents |
| Unused weekly cycle 3 | Do not run for this planning task; pilot completion is unnecessary |
| Accepted book-swap and other saved work | Preserve canonical work/history; no workspace overwrite |
| User's unsaved rewritten brief | Not recovered; do not claim migration or measured baseline; preserve any surviving draft |
| Original `.data/` and local `.phase1/` evidence | Preserve budgets, usage uncertainty and identities; a new stage/chat never resets accounting |
| Prior pilot-led Phase 1 | Superseded direction, not completed platform; retain code/evidence, no fresh-start rewrite implied |

### Source alignment

S1: **BYOA WORLD — Product & Architecture Handoff, 27 September 2026**, nine pages, `C:/Users/jingk/Downloads/byoa_world_handoff.pdf`; [source register](sources/README.md). S2: latest user request for detailed discussion/design then implementation/verification stages. The [backlog](PRODUCT_BACKLOG.md) retains PB references; earlier phase labels are historical until reconciled after approval.

| PDF theme | Where realized |
| --- | --- |
| §§1–8: host World, independent intelligence, Universe rules, connections, persistent Worlds and Sessions | 1/1.1 human foundation; 2/2.1 independent participants, scoped Sessions and enforcement; 3 ongoing personal/team work |
| §9: agent/operator identity and Passport | Minimal identity in 2; richer declared/verified identity/provenance in conditional 5 |
| §10: native knowledge, external KMS, context, optional graphs | One native resource in 1.1; richer work/context in 3; selected sources in 4; graphs unscheduled |
| §§11–12: proposal/review, gateway and policy | Proposal/gateway in 2.1; broader resource/policy in 3/4 |
| §§13–15: runtime/inference/budgets, engagements, ownership/memory/retention | Bounded execution and basic usage/reservations in 2; company administration and optional BYOA in 3; paid billing/accountable handling in 4; outside engagements in 5; no default memory import/remote forgetting |
| §§16–20: headless core, optional visualization, inventory, business/network | Non-spatial core first; conditional business/discovery in 5; no automatic full inventory commitment |

### Legacy mapping

Historical identifiers keep their original meanings. New `BYOA-*` packages replace prior unapproved P-number tasks for future planning; stage numbers are not task IDs.

| Historical reference | Current destination |
| --- | --- |
| RM-01–RM-05 | Original history under Stage 0; reopened foundation decisions in Stage 1 |
| RM-06 | External-route/continuity evidence informs 1/2; weekly pilot not a gate |
| RM-06A | Stage 4 readiness, earlier if private data needed; still unproven |
| RM-07 | Human foundation 1/1.1, agents 2/2.1, broader teamwork 3/3.1 |
| RM-08 | Organization/context 4/4.1; basic enforcement already 2/2.1 |
| RM-09 | Known-owner participation 2/2.1; outside engagement 5/5.1 |
| RM-10 / RM-11 | Conditional commerce/discovery 5/5.1 |
| Previous proposed P0 | BYOA-OBS; original acceptance unchanged |
| Previous proposed P1.1–P1.2 | BYOA-FND / BYOA-WLD; design before human foundation build |
| Previous proposed P1.3–P1.7 | BYOA-AGD / BYOA-AGT; no longer immediate foundation implementation |
| Previous proposed P2 | BYOA-WKD / BYOA-WRK |
| Previous proposed P3 | BYOA-ORD / BYOA-ORG |
| Previous proposed P4 | BYOA-EXD / BYOA-EXT conditional work |

## Now, next and later

- **Now:** the human foundation remains accepted and published. Native-first/company-funded direction is approved under [Decision 004](decisions/004-native-agents-company-funding.md). Stage 2 is ready for the revised design discussion; Stage 2.1 remains paused. Weekly pilot remains stopped.
- **Handoff:** continue [Stage 2 native participation design](handoffs/STAGE-2-NATIVE-AGENTS-HANDOFF.md). Keep stable package IDs and prior useful controls; original external-pair plans are reference rather than native approval.
- **First work in new chat:** settle one SME-relevant fictional task and complementary roles, inspect reuse, then reconcile native runtime/API access, permissions, company payer, usage/reservations and UI. Present a coherent revised package before coding. Do not repeat foundation planning or launch preflight/inference.
- **Next delivery:** Stage 2.1 only after the revised package is approved and the user resumes implementation. Real inference additionally requires concrete bounded spending/execution authority; the new external-spending allowance remains zero.
- **Later:** ongoing company work and optional BYOA in 3/3.1; billing and private/paid SME readiness in 4/4.1; conditional outside expertise in 5/5.1. Bring any needed private-data readiness earlier; no broad marketplace/payment system is a Stage 2 prototype prerequisite.

## Change control

This is the single milestone-status source. [STATE.md](STATE.md) retains context; contract/decisions retain authority; verification/reviews/closeouts retain evidence. Old handoffs and obsolete pilot next steps are historical, not instructions to resume them.

The original material revision replaced immediate two-agent skeleton implementation with **define/design, then build/verify**, beginning with a human foundation. Decision 004 now brings native-agent onboarding and basic cost control into Stage 2, preserves optional BYOA after native verification, and requires company-funded work. This direction update is not approval of an unseen native technical/UI package. Roadmap approval settles sequence/planning scope. Each design stage then resolves its concrete choices with the user. Record them once; delegate routine implementation details and corrections without repeated approval.

| Change / risk | Owner | Response / review trigger |
| --- | --- | --- |
| New journey, material visual change or approved stack/architecture reversal | PM / relevant lead | Present concrete change and consequences; resolve missing decision before dependent work |
| Unsuitable existing component | Technical Specialist | Evidence-based smallest replacement; preserve data and unaffected checks |
| Unsupported second route | Technical Specialist | Resolve specific dependency; do not relabel simulation or start open-ended experiments |
| Sensitive data, spending or access | Orchestrator / Technical Specialist | Apply recorded authority; prepare concrete plan before asking for missing authorization |
| Failed attempt or changed candidate | Builder / reviewer | Preserve record, change approach, rerun affected checks; no reset/unchanged loop |
| Publication/deployment/external action | Orchestrator | Verify actual authority and candidate; record delivery separately from local acceptance |

Template mapping: [roadmap template](../../operating-system/templates/roadmap.md) outcome/measure, status, owner, dependency, exit/evidence fields appear in overview and stage tables with adjacent entry/exit text. Per-stage tables replace one giant RM list for readability. “Now, next and later” and “Change control” remain explicit. Extra decision/delegation tables support orchestration without declaring every proposal approved or every suggested file mandatory.
