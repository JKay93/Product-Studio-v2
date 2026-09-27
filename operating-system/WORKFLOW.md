<!-- studio {"id":"studio:guide:workflow","scope":"studio","type":"guide","status":"approved"} -->
# Delivery workflow

Use the smallest process that resolves the task. Agents decide ordinary implementation
details within approved scope; templates and specialist roles are aids, not mandatory
stages. No new approval is needed for an already authorized action. One compact
assignment and one relevant independent review normally suffice for implementation.

1. Select the project and read its contract, current state and applicable decisions.
2. Define a compact assignment: goal, owner, edit scope, preserved decisions, open
   implementation choices, acceptance criteria and required evidence/reviewer.
3. Resolve concrete technical uncertainty with an optional Technical Specialist
   compact assignment before implementation; use its agreed design for the builder.
   Delegate the implementation. Send relevant excerpts and source paths, not the
   whole studio history. Workers may read additional dependencies when needed.
4. Builder implements, runs affected checks and returns a concise evidence-backed report.
5. A separate reviewer checks the candidate against the assignment. Consolidate fixes
   into one correction packet. Do not rerun unrelated evaluation suites by habit.
6. Orchestrator accepts or requests focused corrections. Save the result and next action
   in the project. Separate local acceptance from repository and release delivery.

## Establish foundations, then reuse them

For a new product, the orchestrator selects only the roles needed for its initial
foundations: PM for requirements, scope and journeys; Designer for shared experience
conventions; Technical Specialist for architecture. Where design and architecture
interact, develop them alongside each other before dependent substantial implementation.
Resolve relevant trade-offs without specifying the entire future product. Reuse clear
existing foundations and refine the task breakdown from new findings.

For later features, update only affected records. Bring the designer back for new
journeys, interaction patterns or shared components; bring the Technical Specialist
back for changed module boundaries, API/data contracts, security or unresolved technical
uncertainty. Settled fixes use existing requirements and conventions directly. A new
PRD, design document or architecture review is not required for every task.

## Record consequential decisions

The relevant specialist authors a short project-local decision record when a choice
materially affects product behavior, shared design, architecture, security or future
work. PM owns product decisions, Designer design decisions, and Technical Specialist
technical decisions; the orchestrator records operational decisions when useful.

Record the choice, rationale, significant alternatives, conditions and authority
source. The orchestrator can approve choices within delegated authority; only decisions
outside it need the user. Mark proposals as draft. Do not manufacture user approval.
Routine coding details need no decision document. Preserve reversed decisions as
superseded, create a replacement linked with `supersedes`, and update affected sources
and assignments. Documents remain the source of truth; generated indexes follow them.

## Correct the cause of failure

The orchestrator consolidates findings into a focused correction, addressed to the
role that can resolve the cause:

| Cause | Owner |
| --- | --- |
| Code or test defect | Builder |
| Flawed technical approach | Technical Specialist, then Builder |
| Ambiguous or conflicting requirements | PM |
| Unresolved experience or visual design | Designer |
| Missing product/business authority | User, with a concrete decision request |

Defaults are two implementation retries, two test/debug retries in structured contracts,
and one review correction cycle, each after its initial attempt/review. These are
separate counters, not a requirement to exhaust every allowance. Compact assignments
follow the written policy; structured state validates recorded counters. Never repeat
an unchanged failure or denial. At the limit, replan the approach or request appropriate
expertise/model capability within existing authority. Do not reset counters by renaming
the same task or replacing the worker. Record genuinely revised scope/approach and
preserve previous attempts; user approval is needed only for an authority boundary.
Recheck affected evidence and retain unaffected current checks.

## Coordinate studio and application repositories

Keep project requirements, specifications, decisions and acceptance records in the
studio. Application code, tests, dependencies and deployment configuration belong in
the application repository. Record its location and repository authority in the project
contract. Give workers explicit repository/path edit scopes and source references.

For cross-repository work, the acceptance record identifies the code candidate and
the relevant requirements/specification revisions (commit IDs or source hashes).
Changing either requires reassessing affected evidence. Reference authoritative records
rather than maintaining competing copies. Repositories do not commit atomically:
record any partially delivered change and the remaining action honestly.

Acceptance is not a claim of push, merge or deployment. Continue through remaining
goal work and authorized delivery; stop for completion, user pause or a genuine blocker.

| Change | Normal roles and verification |
| --- | --- |
| Administrative correction | Orchestrator and direct check |
| Settled bug or bounded implementation | Builder and one independent reviewer |
| Product ambiguity/new feature | PM clarification, then builder/relevant reviewer |
| Architecture, API/data/security planning or difficult debugging | Technical Specialist input, then builder and independent review |
| New screen/journey | Design input before build, UI/functional review |
| Auth, payment, permissions, migration | Specialist risk review and stronger checks |

Explicitly request the configured model and effort when dispatching a specialist:
Technical Specialist uses gpt-5.6-sol at medium effort; builder remains gpt-5.6-luna
at max effort. Verify host availability and surface any unavailable requested route.
Choose other capable available models using the host's settings. Route by task complexity,
uncertainty and consequence; escalate after a concrete capability failure. Record
requested and observed routing separately. Configuration alone does not prove activation.
Use deterministic tooling for formatting, indexing and mechanical validation.

Use isolated task context when the runtime supports it. Retain only task-local context
for corrections; a new assignment receives a fresh packet. Do not let context economy
remove exceptions, governing decisions, security constraints or evidence of blockers.

The CLI is not an agent scheduler or permission interceptor. Host permissions and
human authorization remain the enforcement boundary for external actions.
