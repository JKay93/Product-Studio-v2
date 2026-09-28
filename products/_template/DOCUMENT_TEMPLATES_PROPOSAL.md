# Draft proposal: project document templates

> **Review only — inactive.** This proposal does not create requirements, change studio
> routing, or grant bring-your-own-agent (BYOA) scope. Nothing below is required or
> approved until the user accepts a later, concrete studio change.

## Purpose and ownership
Add a small reusable library under `operating-system/templates/`. Completed product
documents remain under `products/<project>/`, narrowing from product/domain context to
feature detail and linking upward instead of copying decisions across layers.

The PM chooses which documents and sections to add, omit or merge for product clarity;
unused sections should be deleted, not filled with placeholders. The Technical Specialist
owns technical accuracy in context and specifications, and the Designer owns experience
accuracy. Builders own implementation notes and tests, reviewers own findings, and the
orchestrator owns final acceptance. Templates never imply specialist sign-off.

Use the smallest set that resolves the work. Settled fixes and small changes should cite
existing records rather than require a full document pack or new gate.

## Add, combine and omit
Add shared templates for product strategy, roadmap, technical context, adaptable design,
decision records, and verification/release reports. Add `discovery-evidence.md` only as an
optional way to preserve research that materially informs strategy or requirements.

Expand the existing `technical-design.md` into `technical-specification.md`, retaining
Technical Specialist ownership. Add a shared `prd.md` authoring template while retaining
the lean project `PRD.md` as a bootstrap file unless implementation review recommends a
simpler migration. Combine foundation and feature prompts in one adaptable design
template; completed foundation and feature records may still be separate. Combine
verification and release state around the same candidate and specification revisions,
while reusing [`review.md`](../../operating-system/templates/review.md) for independent
findings.

Omit a mandatory market-requirements document, a second milestone tracker, duplicate
feature status sheets, role/phase paperwork, and approvals based only on template
existence. Ignore the source notes' Obsidian `Macro`, `Micro` and `Status` header.

## Shared authoring rules
- Label completed records `draft`, `approved`, `superseded`, `archived` or `rejected`;
  name an accountable owner and the last material update.
- Separate observed current state from proposed or planned state. Plans are not evidence.
- Give durable records and referenced requirements stable project-prefixed IDs; link to
  authoritative project records with relative paths.
- Treat documents as living sources versioned by Git. Ordinary edits within delegated
  direction do not need user approval on every revision.
- Preserve the approved baseline. Present material direction changes as proposals for the
  appropriate authority rather than silently rewriting them.
- When a consequential decision reverses, retain the old record as `superseded` and link
  a new record with `supersedes`.
- Scope changes govern later work. They do not retroactively move acceptance criteria or
  turn a previously assessed candidate into a failure; record the new revision and
  reassess only affected evidence.
- Completion claims identify both the implementation candidate and the relevant contract,
  requirement and specification revisions.

## Product strategy

```markdown
# Product strategy: <product or domain>
- ID / status / PM owner / last material update:
- Approved direction and source:

## Vision, mission and users
- Long-term outcome / near-term purpose:
- Primary users and urgent jobs:

## Evidence and positioning
- Validated evidence and links:
- Alternatives, strengths and constraints:

## Strategic choices
| Pillar | Intended outcome | Measure | Assumption | Risk |
| --- | --- | --- | --- | --- |

## Success, boundaries and review
- Outcome metric and baseline / guardrail metric:
- Illustrative only: reduce median task time from 8 to 5 minutes while maintaining at
  least 95% successful completion. Replace with accepted measures.
- Non-goals / dependencies:
- Optional readiness note or evidence that would justify revisiting this strategy:
```

## Product requirements

```markdown
# Product requirements: <feature or outcome>
- ID / status / PM owner:
- Implements contract / strategy:
- Current candidate and requirement revision:

## Problem, outcome and scope
- User, context and unmet need / evidence and assumptions:
- Intended observable outcome:
- In scope / non-goals / dependencies and constraints:

## Requirement [PROJECT:req:001]
- Behavior or user story:
- Exceptions and error states:
- Acceptance criteria / evidence required:

## Experience, system and readiness
- Journey and design links / accessibility expectations:
- Data inputs, outputs and boundaries:
- Success and guardrail measures:
- Open product choices and owner:
- Readiness conditions for implementation, when needed:
```

## Technical context

```markdown
# Technical context: <system or domain>
- ID / status / Technical Specialist owner:
- Requirements and decisions / last verified revision:

## Current state (observed)
- Architecture and component responsibilities:
- Data flow, storage and integrations:
- Runtime, infrastructure and operational limits:
- Security, privacy and access boundaries:
- Observability, expected load and bottlenecks:

## Planned state (not yet implemented)
- Proposed changes and target outcomes:
- Dependencies, sequencing, migration, compatibility and rollback:

## Decisions and risks
- Existing decisions / accepted debt / fragile areas:
- Unknown, investigation owner and evidence needed:
- Sources supporting material technical claims:
```

## Roadmap

```markdown
# Roadmap: <product or domain>
- ID / status / PM owner:
- Strategy or contract revision / horizon / last update:

## Outcomes and sequence
| Item | Outcome / measure | Status | Owner | Dependencies | Exit criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| <ID> | <observable result> | proposed | <role/person> | <links> | <conditions> | pending |

Example only: `RM-01 | first-time task completed | candidate | builder | REQ-01 |
20 scripted attempts pass | candidate abc + spec revision def + check results`.

Statuses: proposed, ready, active, blocked, candidate, accepted, released, paused,
dropped. `Accepted` requires an acceptance source; `released` requires delivery evidence.
Dates are forecasts unless explicitly evidenced.

## Now / next / later
- Now — why the sequence is justified:
- Next — dependency or evidence that makes it ready:
- Later — uncertainty or constraint preventing commitment:

## Change control
- Material shift from approved baseline and authority needed:
- Cross-item risk, mitigation owner and dependencies:
- Next review trigger (event or evidence, not elapsed-time approval):
```

The completed roadmap is the sole milestone-status source. PRDs and reports link to item
IDs rather than repeat dates or status tables.

## Technical specification

```markdown
# Technical specification: <feature>
- ID / status / Technical Specialist owner:
- Requirements, context and decisions implemented:
- Current vs planned: planned until candidate evidence is linked

## Interfaces and behavior
- Components and responsibility boundaries:
- API, events, data model and invariants:
- Failure behavior, compatibility, security, privacy and access controls:

## Approach and dependencies
- Chosen approach, material alternatives and trade-offs:
- Dependencies, rollout order, migration and rollback:
- Observability:

## Verification and readiness
- Technical risks / open questions / owner:
- Required tests, measurements and review evidence:
- Readiness conditions for implementation, when needed:
```

## Design record — foundation or feature

```markdown
# Design: <foundation or feature>
- ID / mode: foundation | feature
- Status / Designer owner / requirements and approved decisions:

## Users and journeys
- User context and primary flow:
- Edge, empty, loading and error states:
- Content and interaction expectations:

## Design system
- Existing components, tokens and patterns reused:
- New or changed shared conventions (foundation mode):
- Feature-specific composition (feature mode):

## Adaptation, access and acceptance
- Responsive and platform behavior:
- Keyboard, screen reader, contrast and motion requirements:
- Localization or content constraints:
- Prototypes, references and open choices / owner:
- Feature acceptance criteria and design evidence, when applicable:
```

## Decision record

```markdown
# Decision: <concise choice>
- ID / status / decision owner:
- Date / authority source:
- Constrains / supersedes / superseded by:

## Context and decision
- Trigger and relevant facts:
- Choice / conditions / exceptions:

## Rationale and consequences
- Significant alternatives:
- Benefits, trade-offs and risks:
- Follow-up owner, dependency and evidence:
```

Use this only for consequential product, design, technical, security or operational
choices. Routine implementation details stay with the implementation.

## Verification and release report

```markdown
# Verification and release report: <task or release>
- ID / status / report owner:
- Candidate revision:
- Contract, requirement, design and technical-specification revisions:
- Independent review: <relative link to completed review>

## Verification
| Acceptance criterion | Result | Evidence | Limitation / owner |
| --- | --- | --- | --- |

## Completion and delivery state
- Local acceptance: pending | accepted, with source
- Repository: local | pushed | merged, with revision/link
- Release: not released | staged | released, with environment/evidence
- Rollback or recovery reference:

## Residuals
- Known risks, deferred items and owners:
- Evidence invalidated by later changes:
- Next authorized action or genuine blocker:
```

The report summarizes evidence without replacing raw checks or independent review.
`Accepted`, `pushed`, `merged` and `released` remain separate claims.

## Optional discovery evidence
Use a compact record with ID/status/owner; method, sources and date range; scope and
limitations; findings and contrary evidence; implications; source links; and follow-up
owner. Discovery supports decisions but is not a mandatory gate or inferred validation.

## Proposed review and activation path

1. Review this proposal for coverage and proportionality.
2. Seek Technical Specialist or Designer input only where an accepted template contains
   material technical or design uncertainty.
3. Await explicit user approval before implementing an accepted subset or changing any
   studio routing, rules or active templates; validate links and graph metadata then.

Approval should identify the accepted subset and requested edits. This draft itself is
not approval.
