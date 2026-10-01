<!-- studio {"id":"byoa-world:decision:native-agents-company-funding","scope":"byoa-world","type":"decision","status":"approved","links":[{"relation":"supersedes","target":"byoa-world:decision:agent-participation"},{"relation":"constrains","target":"byoa-world:roadmap:main"}]} -->
# Decision 004: native agents first; company-funded work

- Decision owner: user; orchestrator records settled direction. Updated: 2026-10-01.
- Authority: user discussed native agents first for an SME audience, stated that company work should be paid for by the company, reviewed the proposed roadmap changes, then instructed: "Sure, update what is necessary, then give me the handoff to the next chat for stage 2".
- Constrains: BYOA-AGD / BYOA-AGT and subsequent ongoing-work/readiness packages in ROADMAP.md.
- Supersedes: Decision 003's initial two-external-Codex route, required owner pairing and external-only funding assumptions. Preserve its cooperation, scoped-context, review, retention, stop and implementation-hold principles. Decision 002 remains unchanged.
- Template: decision-record; context/choice and rationale/consequences retain the core fields. This records direction and documentation authority, not a completed technical specification.

## Context and decision

The intended audience includes SMEs whose employees should be able to use ready-made
agents without operating an agent runtime. Make built-in, platform-operated agents
the first participation route. Verify two real agents doing complementary work in
the existing World foundation, then add optional BYOA using compatible external
connection evidence. Distinct providers are not required. Exact task/roles, provider,
model and runtime implementation remain Stage 2 design choices.

World's domain and work contract remain runtime/provider-neutral. Built-in agents
use that contract and the same scoped permissions, attributable contributions,
human acceptance and stop rules as later external agents. Provider access belongs
to the runtime component; provider credentials must not enter World domain records,
model prompts or browser-facing code. Platform operation adds execution, credential,
usage and reconciliation responsibilities; it does not imply training a model,
hosting a dedicated machine per agent or importing an employee's personal memory.
The placement and protection of the runtime component need technical design.

For company work, distinguish requester/employee, agent/operator and funding account.
Charge company-funded access; never silently fall back to personal employee funds.
Native usage can eventually draw from a company-purchased balance; company-provided
BYOA can use company-funded provider/runtime access. An employee's personally paid
agent is not automatically company-funded: select an approved company access route
or explicit reimbursement policy before offering it as company-funded work.
Do not charge the same provider compute again when a company already pays directly;
any platform/service charge is separate and must be agreed.

Move basic usage and cost control to Stage 2/2.1: attempt identities, payer binding,
per-call/provider usage, versioned price basis, separately billed tool costs where
selected, task totals, pre-execution reservations, concurrent reservation control,
execution ceilings, settlement/release and measured/reported/unknown distinctions.
Usage can be missing or incomplete; unknown is not zero. Billing reconciliation and
an enforceable execution budget are distinct. Specify limits at each model/tool step;
do not promise a fixed complete-task price or guaranteed completion within a budget.

Stage 2 prototypes use explicitly approved development allowances and test accounting.
No real company account system, purchased credit issuance or payment collection is
required merely to prove this local journey. Design real company administration and
funding controls with ongoing work; implement payments/prepaid billing and necessary
private-data/operational readiness before a separately authorized paid SME pilot.
Readiness moves earlier whenever actual private information would otherwise be used.

Native-first and company-funded work are approved direction. Currency balance vs
abstract credits, conversion, markup, subscription/seat pricing, included usage,
payment processor and failure/refund policies remain proposals. The $10/$13 and
one-credit-per-cent examples were illustrative only. No rate or profitability claim
is approved. Keep marketplace/external-expertise commerce conditional in Stage 5.

## Rationale and consequences

External-first onboarding can demand runtime/provider knowledge from the customer.
Ready-made roles let the first test focus on useful World collaboration, with BYOA
preserved as a participation option. Company provider access can remain an option;
unlimited subsidized usage is not selected. SME demand, usability and willingness
to pay are hypotheses requiring observations, not outcomes of this discussion.

Keep the accepted human foundation, Calm design, React/TypeScript/Vite + Node/SQLite,
feature boundaries, saved resources, original attempt/budget records and safe
additive migration/backup requirements. Historical external Codex success proves
one bounded route, not arbitrary interoperability, two external agents, accurate
automated billing or private-data assurance. Native-runtime integration and usage
accounting still require new evidence. Historical reviews cover their original
candidates and do not accept the revised native package.

Orchestrator updates roadmap/strategy/backlog/authority/state and prepares the
[Stage 2 handoff](../handoffs/STAGE-2-NATIVE-AGENTS-HANDOFF.md). Next chat revises
the native participation PRD, technical and UI package for approval before coding.
The Stage 2.1 implementation hold remains. No runtime/authentication preflight,
provider inference, key entry, new spending, installation, data migration or
deployment is authorized by this documentation update. New external spending
allowance remains zero; all original attempts and uncertain usage remain preserved.
Do not resume the weekly pilot. Studio documentation publication follows its
existing authority; no application changes/publication occur in this update.
