<!-- studio {"id":"byoa-world:backlog:product","scope":"byoa-world","type":"backlog","status":"draft","links":[{"relation":"requires","target":"byoa-world:strategy:main"},{"relation":"requires","target":"byoa-world:roadmap:main"}]} -->
# BYOA World product backlog — MoSCoW

Owner: Product Manager. Last material update: 2026-09-29. Draft for user review.
This is the durable inventory of product candidates, including deferred ideas.
It does not approve features or assign implementation work. [BACKLOG.md](BACKLOG.md)
tracks planning/delivery tasks; [ROADMAP.md](ROADMAP.md) alone owns milestone status.

## How to read and use this backlog

**All priorities are relative to the initial feasibility milestone, RM-04 / Phase 0.**
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
| PB-012 | Basic owner control surface to assign, inspect, review and end work; headless participation | Must | S1 §16; S2 spatial UI deferred, basic control still necessary | Phase 0; choose simplest usable surface during specification |
| PB-013 | Clear failure/disconnect handling and recovery, avoiding duplicate accepted outputs | Should | S3 reliability recommendation; happy-path demos can conceal coordination burden | Phase 0 if practical; promote if task integrity depends on retries |
| PB-014 | Dollar-oriented usage visibility for available runtime/inference/tool charges; label unknown costs | Should | S1 §13; useful cost understanding distinct from commerce | Phase 0; allowance remains required in PB-004; promote metering if needed to enforce it |
| PB-015 | A selected external context/tool connection for the chosen workflow | Should | S1 §10; real context matters, broad connector catalogue can wait | Phase 0 if workflow needs it; otherwise next pilot; promote if essential to task |
| PB-016 | Minimal reusable task/context templates and readable Session history | Could | S3 reduces experiment setup friction | Phase 0 only if low effort; revisit repeated setup overhead |

## Deferred product inventory

| ID | Candidate / intended outcome | MoSCoW | Source and rationale | Candidate horizon / revisit trigger |
| --- | --- | --- | --- | --- |
| PB-017 | Personal World creation, persistent projects, resources and work state | Won't this scope | S1 §§7,17; feasibility needs a bounded workspace before general product administration | RM-06 or chosen pilot; revisit demonstrated repeat workflow |
| PB-018 | Shared/team/company Worlds, memberships, teams, roles and concurrent work coordination | Won't this scope | S1 §§7,17; broad multiplayer product is beyond two-agent feasibility | RM-07; small-team-first may move this ahead of PB-017 |
| PB-019 | Human-only mode, company agents and a platform/reference default agent | Won't this scope | S1 §§7,13; BYOA remains optional in the vision | Pilot phases; revisit onboarding needs and chosen audience |
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
- First task, selected agent setups, context source, artifact type and acceptable
  remote-data assurance remain open. Their selection may change Must/Should labels.
- Remote forgetting, universal non-leakage, provider compatibility and market demand
  are not promised by any backlog item. Record evidence and limitations before claims.
- Revisit deferred items when their trigger is met; keep user-selected priorities
  distinct from PM proposals and link the applicable roadmap item when promoted.
