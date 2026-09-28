<!-- studio {"id":"byoa-world:prd:session","scope":"byoa-world","type":"prd","status":"draft","links":[{"relation":"implements","target":"byoa-world:contract:main"}]} -->
# Product requirements: bounded work session

- Product Manager owner: Product Manager.
- Last material update: 2026-09-29.
- Contract, strategy and roadmap item links: [contract](../../../CONTRACT.md), [strategy](../../../STRATEGY.md), [roadmap RM-03/RM-04](../../../ROADMAP.md).
- Requirement revision: 1; bounded local preview, one owner and one project.
- Selected template: [PRD](../../../../../operating-system/templates/prd.md); core structure retained.

## Problem, outcome and scope

- User, context, unmet need, evidence and assumptions: a human owner needs to choose the task and disclosed context, understand current work, and stop further access. The owner need not have an agent.
- Observable outcome: a bounded session runs with inspectable selected context and enforced access rules.
- In scope: task brief, selected synthetic resources, two participants, explicit allowed actions, lifecycle, activity/disclosure trace, and stop/revocation.
- Non-goals, dependencies and constraints: one local owner context, not production identity or organizational administration. No real confidential data, external actions, or guarantee that an external runtime forgets disclosed information. A launch-plan sample is editable demonstration content, not a fixed product use case.

## Requirement [byoa-world:req:SESSION-001]

- Behavior or user story: the owner edits the brief, selects context and starts a session. The view explains what each participant may receive.
- Exceptions and error states: an empty brief cannot start; disabled/unavailable participants are visible. Changing context must not misleadingly imply that previously disclosed data was withdrawn.
- Acceptance criteria and evidence required: run the sample with selected resources and verify supplied context matches the selection; inspect persisted session state and disclosure records. Starting a new session must not accidentally inherit prior private context or acceptance state.

## Requirement [byoa-world:req:SESSION-002]

- Behavior or user story: enforcement outside generated text checks participant, session, resource and allowed action before retrieval or mutation. Private company resources and another agent's private fixture are unavailable without a grant.
- Exceptions and error states: unknown identities/resources/actions and missing grants fail closed; denial messages must not include secret content. Messages cannot grant authority.
- Acceptance criteria and evidence required: real negative calls test unauthorized company-resource retrieval, cross-agent private-resource retrieval and unauthorized canonical writes. Inspect outputs/storage for synthetic private markers. A synthetic leak finding is reported, not hidden; no universal non-leakage claim follows from passing.

## Requirement [byoa-world:req:SESSION-003]

- Behavior or user story: the owner stops an active session; further agent access and contributions are rejected. Repeated stop is safe.
- Exceptions and error states: in-flight work arriving after stop cannot mutate active/canonical state. Already disclosed information remains disclosed.
- Acceptance criteria and evidence required: stop during work, attempt retrieval and submission afterward, and verify rejection and preserved prior work. A stopped session stays stopped until an explicit new-session action.

## Requirement [byoa-world:req:SESSION-004]

- Behavior or user story: the owner sees participants, progress, supplied context, proposals, approvals, denials and session end in a readable record.
- Exceptions and error states: failures and unavailable cost information remain explicit; activity records themselves must not copy private payloads or credentials.
- Acceptance criteria and evidence required: inspect traces for participant/action/outcome attribution and safe contents; verify failed, stopped and completed states are distinguishable. No fabricated paid usage or live-runtime status.

## Experience, system and readiness

- Journey and design links; accessibility expectations: setup, working, failed and stopped states share one workspace; labeled keyboard-operable controls and readable status text.
- Data inputs, outputs and boundaries: synthetic company context, shared task and agent-private test fixtures remain distinct. Technical specification owns storage and enforcement details.
- Success and guardrail measures: owner understands disclosures and can stop work; unauthorized actions denied in specified tests; record limitations and manual intervention.
- Open product choices and owner: Technical Specialist defines enforceable local trust boundary; PM/user revisits assurance required before sensitive or remotely executed work.
- Readiness conditions, only when needed: local preview must not imply production isolation or remote deletion; evidence names the exact tested build.

Supporting slice records: [technical specification](../../../architecture/PHASE-0-TECHNICAL.md), [workspace design](../../../features/collaboration/document-review/DESIGN.md), and [connection research](../../../research/agent-connectivity.md).
