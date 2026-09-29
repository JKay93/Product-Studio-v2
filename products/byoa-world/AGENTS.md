<!-- studio {"id":"byoa-world:rule:project-instructions","scope":"byoa-world","type":"rule","status":"approved"} -->
# BYOA World project instructions

These instructions apply only to BYOA World. Before project work, read
[CONTRACT.md](CONTRACT.md), [STATE.md](STATE.md), and the applicable approved
records under [decisions/](decisions/). Follow the shared studio
[standing orders](../../operating-system/STANDING_ORDERS.md).

The current authorization includes the bounded Phase 0 local implementation and
preview described in CONTRACT.md, following the user's 2026-09-29 instruction to
proceed. Broader strategy remains draft. Do not infer extra features from examples,
templates or the working name. Preserve explicit synthetic-versus-live labeling.

When product scope is approved, organize feature-owned material as
`features/<domain>/<feature>/`. Create actual domain or feature folders only from
an authoritative requirement or decision. Keep cross-cutting technical material in
`architecture/`, shared UI conventions in `design-system/`, and durable decisions
in `decisions/`.

Use proportional delivery. Give builders bounded assignments with relevant source
paths, preserved decisions, acceptance checks and edit scope. Substantive
implementation receives one relevant independent review. Engage a Technical
Specialist for substantive architecture, API, data, security planning or difficult
debugging; routine fixes and administrative updates do not need extra forms or a
committee.

Do not add application code, select a stack, spend externally, change sensitive
access, or publish or deploy an application without authority recorded in the
contract or a later approved decision. Existing studio-repository authority governs
documentation updates to this project; application repository push, merge and
release authority must be recorded separately when that repository is selected.

## Closeout and handoff organisation

User direction, 2026-09-29: keep phase closeouts in `closeouts/` and next-chat
handoffs in `handoffs/`, using phase-specific filenames. Keep these growing record
collections out of the project root. STATE.md links to the current records.
