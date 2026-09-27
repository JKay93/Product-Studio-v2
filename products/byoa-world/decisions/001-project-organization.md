<!-- studio {"id":"byoa-world:decision:project-organization","scope":"byoa-world","type":"decision","status":"approved","links":[{"relation":"constrains","target":"byoa-world:contract:main"},{"relation":"governs","target":"byoa-world:rule:modularity"}]} -->
# Decision 001: project organization

## Decision

Use `byoa-world` as the stable project scope and BYOA World as the working name.
Organize future feature material by `features/<domain>/<feature>/`. Keep shared
technical records in `architecture/`, shared design conventions in `design-system/`,
and durable decisions in `decisions/`.

Do not create actual domain or feature folders until authoritative product material
or a later user decision establishes them. Do not treat prior examples—including
authentication, OAuth, email-and-password access, agents or organizations—as BYOA
World requirements.

## Rationale

Domain and feature ownership provides a clear future boundary while leaving product
scope open. Separate shared areas make cross-feature architecture and design choices
discoverable without forcing unapproved details into the skeleton.

## Approval source

The user explicitly authorized this organization in the project-creation
conversation on 2026-09-28 and explicitly withheld approval for example features.
Deferring analysis of the product handoff PDF was a scope choice for this skeleton
task, not a user prohibition.
