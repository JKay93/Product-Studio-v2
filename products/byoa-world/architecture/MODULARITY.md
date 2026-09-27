<!-- studio {"id":"byoa-world:rule:modularity","scope":"byoa-world","type":"rule","status":"approved"} -->
# Modularity rules

These rules preserve the organization authorized for BYOA World. They guide later
implementation without selecting a framework, language or product feature.

## Boundaries

- Group feature-owned code and records by `features/<domain>/<feature>/`.
- Keep a feature cohesive: its behavior, interface adapters, tests and feature-local
  UI belong together unless an approved technical design establishes another owner.
- Compose pages or equivalent user-facing surfaces from cohesive modules. Avoid
  concentrating unrelated domain behavior in a single page, controller or service.
- Cross-domain interaction goes through documented domain interfaces. Do not import
  or depend on another feature's internal files.
- Move behavior into shared code modules only when it has demonstrated cross-feature
  reuse and a clear owner. The later stack-specific module plan will name those code
  paths. The current `architecture/` and `design-system/` directories hold project
  documentation; they are not predetermined code roots or a holding area for
  uncertain code.
- Preserve dependency direction and public interfaces documented by approved
  architecture decisions.

## Planning and review

For a substantive architecture change, the Technical Specialist records a compact
module plan covering ownership, public interfaces, dependencies, migration impact
and verification guidance. The builder follows those boundaries and reports any
necessary deviation. The independent reviewer checks architectural adherence as
part of reviewing the actual candidate.

File length is a review signal: a growing file can indicate mixed responsibilities
or missing composition. It is not an arbitrary acceptance gate, and splitting a
cohesive module solely to meet a line count is not required.

When the technology stack is selected, add suitable automated dependency-boundary
checks to the technical plan. No such automated enforcement exists yet.
