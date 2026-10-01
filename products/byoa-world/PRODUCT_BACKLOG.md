<!-- studio {"id":"byoa-world:backlog:product","scope":"byoa-world","type":"backlog","status":"draft","links":[{"relation":"requires","target":"byoa-world:strategy:main"},{"relation":"requires","target":"byoa-world:roadmap:main"}]} -->
# BYOA World product backlog — MoSCoW

Owner: Product Manager. Last material update: 2026-10-01. General inventory remains draft; Decision 004 governs the native-first overlay below.
This is the durable inventory of product candidates, including deferred ideas.
It does not approve features or assign implementation work. [BACKLOG.md](BACKLOG.md)
tracks planning/delivery tasks; [ROADMAP.md](ROADMAP.md) alone owns milestone status.

## How to read and use this backlog

**The original inventory priorities are relative to the initial feasibility milestone, RM-04 / Phase 0; the final carry-forward section explicitly uses Phase 1 priorities.**
They are proposed priorities, not a permanent ranking of the full platform.

- **Must:** without it, the chosen connection/shared-work experiment cannot establish its claim.
- **Should:** materially strengthens the experiment; it can proceed with a stated limitation.
- **Could:** useful if inexpensive, but does not determine feasibility success.
- **Won't this scope:** deliberately outside Phase 0, not rejected forever.

Sources are [S1 handoff, S2 user direction, S3 recommendations](sources/README.md).
“Horizon” is a candidate destination, not a deadline or commitment. Preserve PB IDs
when moving items; record priority changes and their reason here. Pulling an item
into delivery requires a bounded requirement and applicable authority, not just
changing its MoSCoW label. Select actual providers and protocols only after research.

## Current native-first overlay — Decision 004

Historical MoSCoW tables below retain their Phase 0/1 scope; they are not current
delivery priorities. ROADMAP.md alone owns milestone status. [Decision 004](decisions/004-native-agents-company-funding.md)
promotes native onboarding and basic cost controls without approving unseen designs.

| Existing ID | Current priority / intended slice | Roadmap destination / boundary |
| --- | --- | --- |
| PB-019 | Must for selected native Stage 2 journey: two ready-made complementary roles | AGD-01–03 / AGT-02–03; small role set, no broad catalogue or private-agent cloning |
| PB-004/014/028 | Must: bounded native work, company payer, per-call/task usage and price basis, reservations/settlement/unknown cost | AGD-08/10 / AGT-08; test accounting and approved prototype allowance; no real credit sales |
| PB-002/003 | Preserve common participant/grant semantics; external BYOA route optional after native verification | WKD-07 / WRK-06; supported route and company-funded access selected before integration |
| PB-007/008/009/010/013 | Must: attributable linked deliverables, human acceptance, trace, revocation and recoverable failure | Reuse compatible Stage 2 controls; verify changed runtime integration |
| PB-018 | Selected company membership/payer/admin controls when ongoing team work is designed | Stage 3; minimum required real identity/readiness cannot be deferred past actual company use |
| PB-028/029 | Company payments/prepaid usage and operational reconciliation before a paid SME pilot | ORD-05 / ORG-03/05; provider/platform charges distinct; rate, processor, conversion and refund policy open |
| PB-029 | Outside-expertise engagement pricing/settlement remains conditional | Stage 5; separate from earlier company compute billing |

No employee personal-funding fallback, duplicate provider-compute charge, automatic
top-up or unbounded usage is selected. The illustrative credit/markup examples are
not approved rates. This overlay is a planning inventory, not permission to implement
or run models; revised native package approval and current authority still apply.

## Initial feasibility candidates

| ID | Candidate / intended outcome | MoSCoW | Source and rationale | Horizon / revisit or completion trigger |
| --- | --- | --- | --- | --- |
| PB-001 | Subscription-supported and API connection assessment, with entitlement, supported route, limitations and billing visibility | Must | S2 priority; subscription ownership alone does not establish integration support | Phase 0; revisit on provider changes or unsupported routes |
| PB-002 | Connect at least two independently operated agents through a minimal task/context/action/message/result/status/end-Session contract | Must | S1 §6; S2 connection goal; S3 proposes two setups to test interoperability | Phase 0; broaden only when a new runtime exposes a concrete gap |
| PB-003 | Agent and owner/operator identification and authentication for the selected setups | Must | S1 §§3,9; attributable participation needs an identity before full Passport | Phase 0; richer evidence at PB-025 |
| PB-004 | Bounded Sessions with task, participants, resources, allowed actions, usage allowance and expiry | Must | S1 §8; collaboration needs explicit purpose and limits | Phase 0; revisit when a task needs longer-lived participation |
| PB-005 | Enforced grants and mediated actions; owner/World/resource limits; separate human and agent authority; protected credentials | Must | S1 §§4,5,12; prompts cannot enforce authority | Phase 0; technical design must specify actual enforcement and blocked actions |
| PB-006 | Separate agent-private, company-private and deliberately shared context; explicit disclosure and persistence record | Must | S2 critical two-way knowledge boundary; S1 §§10,15 | Phase 0; revisit any unexpected disclosure or incompatible retention requirement |
| PB-007 | One shared task/artifact and agent-to-agent contribution exchange with attribution | Must | S2 shared work; S3 proposes a task requiring both contributions | Phase 0; select artifact type and acceptance rubric before implementation |
| PB-008 | Proposed changes, human review and explicit acceptance into canonical shared state | Must | S1 §11; external/lower-trust contributions should not silently mutate authoritative work | Phase 0 for chosen artifact; cross-tool breadth at PB-022 |
| PB-009 | Audit trace of meaningful actions, context supplied, approvals, outputs and Session end | Must | S1 §§5,8,12; owner needs to inspect what happened | Phase 0; expand retention/export when operational needs emerge |
| PB-010 | Expiry/revocation and synthetic unauthorized-access/private-context tests | Must | S2 boundaries; S3 negative tests needed alongside a useful demo | Phase 0; acceptance covers specified cases, never universal non-leakage |
| PB-011 | Explicit deliverable ownership, retention/learning expectations and operator visibility for the experiment | Must | S1 §15; distinguish policy from enforceable deletion in remote runtimes | Phase 0; revisit whenever runtime control or data sensitivity changes |
| PB-012 | Basic owner control surface, usable by a human without their own agent, to assign, inspect, review and end work; headless agent participation | Must | S1 §16; S2 spatial UI deferred, basic control still necessary | Phase 0; choose simplest usable surface during specification |
| PB-013 | Clear failure/disconnect handling and recovery, avoiding duplicate accepted outputs | Should | S3 reliability recommendation; happy-path demos can conceal coordination burden | Phase 0 if practical; promote if task integrity depends on retries |
| PB-014 | Dollar-oriented usage visibility for available runtime/inference/tool charges; label unknown costs | Should | S1 §13; useful cost understanding distinct from commerce | Phase 0; allowance remains required in PB-004; promote metering if needed to enforce it |
| PB-015 | A selected external context/tool connection for the chosen workflow | Should | S1 §10; real context matters, broad connector catalogue can wait | Phase 0 if workflow needs it; otherwise next pilot; promote if essential to task |
| PB-016 | Minimal reusable task/context templates and readable Session history | Could | S3 reduces experiment setup friction | Phase 0 only if low effort; revisit repeated setup overhead |

## Deferred product inventory

| ID | Candidate / intended outcome | MoSCoW | Source and rationale | Candidate horizon / revisit trigger |
| --- | --- | --- | --- | --- |
| PB-017 | Personal World creation, persistent projects, resources and work state | Won't this scope | S1 §§7,17; feasibility needs a bounded workspace before general product administration | RM-06 or chosen pilot; revisit demonstrated repeat workflow |
| PB-018 | Shared/team/company Worlds, memberships, teams, roles and concurrent work coordination | Won't this scope | S1 §§7,17; broad multiplayer product is beyond two-agent feasibility | RM-07; small-team-first may move this ahead of PB-017 |
| PB-019 | Additional company-agent provisioning and a platform/reference default agent | Won't this scope | S1 §§7,13; BYOA remains optional; direct human owner participation is included in PB-012, not deferred here | Pilot phases; revisit onboarding needs and chosen audience |
| PB-020 | Nontechnical policy configuration, safe templates, layered policy administration and controlled exceptions | Won't this scope | S1 §§4,12,17; minimal enforcement is already PB-005 | RM-08; revisit when owners need to configure differing rules themselves |
| PB-021 | Broader consequential-action approvals and explicit resource-specific direct-edit grants | Won't this scope | S1 §§5,11,12; direct edit does not grant delete/export/permission changes | RM-07/08; revisit concrete trusted workflow requiring these actions |
| PB-022 | General branch/proposal/diff/review/merge across Git, documents, design tools, databases and APIs | Won't this scope | S1 §11; Phase 0 supports only the chosen artifact | RM-07/08; add abstractions when a second resource type proves necessary |
| PB-023 | Native documents, notes, uploads, agent artifacts and external KMS/tool connectors | Won't this scope | S1 §10; GitHub, Notion, Drive, Slack, Jira, local knowledge, databases are source candidates, not validated integrations | RM-06–08; add sources demanded by the selected workflow |
| PB-024 | Permission-aware indexing/search and broader project context packaging | Won't this scope | S1 §10; small explicit context packages suffice initially | RM-08; revisit retrieval failure or growing source volume |
| PB-025 | Rich Passport: exact-agent ownership/provenance evidence, credentials, attestations and declared/verified capabilities | Won't this scope | S1 §9; identity evidence is not a trust score; minimal identity is PB-003 | RM-09; revisit admitting agents under unfamiliar operators |
| PB-026 | External-agent invitation and engagement lifecycle, scoped access and deliverable acceptance | Won't this scope | S1 §14; test independent agents early but defer general external admission | RM-09; revisit a known customer need to commission an outside agent |
| PB-027 | Configurable ownership, retention, generalized learning, operator visibility and supported purge controls | Won't this scope | S1 §15; Phase 0 specifies one policy and its limits, not a general policy product | RM-08/09; revisit differing company/agent-owner requirements |
| PB-028 | Company inference budgets, fuller runtime/tool metering and optional managed inference | Won't this scope | S1 §13; runtime and inference remain separate, no dedicated always-on machine assumption | RM-08 or pilot need; revisit cost control or onboarding demand |
| PB-029 | Agent service pricing, paid engagements, billing/settlement and unsuccessful-work handling | Won't this scope | S1 §§13,18; payment functionality follows useful accepted work | RM-10; revisit willingness-to-pay evidence and separately authorized commercial design |
| PB-030 | World subscription/seat/usage tiers and potential inference margin or engagement fee | Won't this scope | S1 §18; business-model hypothesis, not approved pricing | Before paid launch; revisit buyer and unit-economics evidence |
| PB-031 | Portable verified work history and capability evidence without private client knowledge | Won't this scope | S1 §§9,15,19; reputation should not require carrying client secrets | RM-09–11; revisit repeated engagements needing evidence |
| PB-032 | Agent directory, discovery and marketplace | Won't this scope | S1 §§17,19; direct invitations can establish value first | RM-11; revisit repeated demand that direct matching cannot serve |
| PB-033 | World-to-World connectivity and network workflows | Won't this scope | S1 §§14,19,20; useful plumbing, not assumed moat | RM-11; revisit a concrete cross-World workflow and permission model |
| PB-034 | Gather/Pokémon-style visual World showing people/agents, tasks, Sessions, permissions, cost and expiry | Won't this scope | **S2 explicitly defers this nice-to-have**; S1 §16 keeps core functions headless | Unscheduled optional; revisit only if user requests it or research shows meaningful comprehension value |
| PB-035 | Optional knowledge graph/node visualization | Won't this scope | S1 §10; visualization is not required for context access | Unscheduled optional; revisit a demonstrated navigation/discovery problem |

## Changes and open choices

- 2026-09-29: initial inventory drafted from S1 and S2, with S3 priorities relative
  to Phase 0. No implementation items are complete by virtue of appearing here.
- At initial drafting, task, selected agent setups, context source, artifact type and acceptable
  remote-data assurance were open. Phase 0 selections are now in the feature PRDs; broader assurances remain open.
- Remote forgetting, universal non-leakage, provider compatibility and market demand
  are not promised by any backlog item. Record evidence and limitations before claims.
- Revisit deferred items when their trigger is met; keep user-selected priorities
  distinct from PM proposals and link the applicable roadmap item when promoted.

### Bounded preview scope — 2026-09-29

The user asked to proceed toward the first platform preview. Seven capabilities
are grouped into three feature owners: [connection](features/agents/connection/PRD.md),
[session](features/work/session/PRD.md) and
[document review](features/collaboration/document-review/PRD.md). PB-001–PB-012 guide
the bounded slice; this does not pull their general-purpose or enterprise versions
into scope. A deterministic local demonstration is acceptable preview progress,
not evidence that PB-002 live independent-agent interoperability is complete.
PB-019 now separates deferred agent provisioning from included human participation.

## Phase 1 carry-forward priorities — 2026-09-29

The original tables above retain Phase 0-relative priorities for provenance. The user
accepted its bounded prototype scope; this does not complete general-purpose versions.
These additional priorities are relative to Phase 1; ROADMAP.md owns status.

| ID | Candidate / intended outcome | MoSCoW | Source and rationale | Horizon / trigger |
| --- | --- | --- | --- | --- |
| PB-036 | External agent connection with provider credentials retained by its runtime; canonical semantic boundary and one initial adapter | Must | Explicit user principle; current adapters run inside the prototype server | RM-06; review architecture proposal then scope one vertical slice |
| PB-037 | Staging verification of tenant/agent/session isolation, credential separation, revocation, and provider/external-runtime data handling | Must before private pilot | Explicitly deferred from Phase 0 by user, not waived | RM-06A; before any real confidential input |
| PB-038 | Additional runtime adapters, SDKs and alternate transports | Could | Runtime-agnostic design should permit extensions without building them all now | After the first connector exposes actual interoperability needs |

PB-026/RM-09 still defer general unfamiliar-operator engagements; they do not defer
PB-036's basic known-owner connection. PB-006/PB-011's full private-data assurances
carry into PB-037; the Phase 0 observations did not certify them. PB-034 spatial UI
remains Won't this scope. Personal-agent memory import remains unsupported initially.
