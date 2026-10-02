<!-- studio {"id":"byoa-world:design:stage2-native-package","scope":"byoa-world","type":"design","status":"draft","links":[{"relation":"requires","target":"byoa-world:decision:native-agents-company-funding"},{"relation":"requires","target":"byoa-world:roadmap:main"}]} -->
# Stage 2 native participation package — proposed for approval

Owner: orchestrator consolidating PM, Technical Specialist and Designer proposals. Updated: 2026-10-01. Revision: native 1. This is the single approval entry point; linked records supply the detailed requirements, technical contract and screen states. No new approval is recorded here.

## Proposed choices

| Area | Recommendation |
| --- | --- |
| Task | Fictional Little Hearth Bakery plans a Monday–Friday office lunch-box trial using one saved planning note. No private company data or real orders. |
| Complementary roles | Offer planner A produces a launch brief; Operations planner B uses that exact retained brief and the frozen note to produce a fulfillment/staffing/launch plan with a concise offer summary. Two genuine separately attributable executions; the same provider/model is acceptable. |
| Quality | Correct fictional price/contribution and capacity arithmetic, honest demand assumptions, prior-working-day cutoff, five-day operations/responsibilities, exact A provenance, and explicit human review/acceptance. Full fixture and six pass/fail rubric rows are in the PRD. |
| Native runtime | Platform-operated server-side worker, separate from World domain/browser, using first-party Anthropic Messages API and pinned Claude Haiku 4.5. Same scoped World work/permission contract as later BYOA. No customer runtime launch or pairing. This recommendation is documentation-supported, not locally preflighted or live-verified. |
| Permissions | A reads the frozen selected note and submits its own proposal. B reads that note plus the exact committed A artifact and submits its own proposal. Neither may read other resources, use personal memory/tools, edit canonical notes, accept, change funding/permissions or dispatch extra work. |
| Funding | Requester, agent, platform operator and company test payer are separate. Clearly labelled test funding; no purchased credits or company membership claim. No employee personal fallback, automatic top-up or duplicate provider-compute charge. Commercial retail pricing remains open. |
| Basic usage | Durable account/task/step reservation before work; one in-flight inference; versioned model/rate/usage basis; idempotent settlement/release; failed, incomplete and unknown costs held for reconciliation. Raw provider expense is separate from any future customer/service charge. |
| UI | Preserve Calm workspace and the human editor. Add Work entry, two ready-made roles, recipient/input/operator/payer/limit disclosure, A→B status, stop, review/edit/explicit acceptance and retained history/usage states. Text wireframes and edge states are in the design record. |
| Preservation | Reuse World, planning-note, local owner, UI and SQLite interfaces. Adapt compatible historical Session/proposal/denial concepts without starting old runtime/pilot code. Additive schema changes, backup/restore and compatible human-only fallback; no automatic legacy import or accounting reset. |

## One complete user journey

Save the fictional bakery note → choose **Offer planner + Operations planner** → inspect exactly what each receives, who operates them and which company test account funds work → inspect the reservation for both steps and task ceilings → explicitly start once → A's brief is retained → inspect its facts/capacity/assumptions and select **Continue to operations plan** → that confirmation binds the exact unedited A artifact to B's input → B's combined plan is retained → inspect both originals, edit a human review copy if desired → explicitly accept the selected copy into the existing planning note against its current revision → reopen history after Session end/restart without renewed grants.

If A fails, B cannot start. If B fails, A remains reviewable and may be explicitly accepted as a labelled partial result. Stop closes World authority and prevents dependent dispatch; it does not prove remote cancellation or make already supplied information disappear. Revision conflict retains the review draft and newer canonical note for deliberate resolution. Human edits never silently trigger new inference or alter the frozen handoff.

Automatic A checks cover authorized provenance, structure, limits and complete termination. The owner's checkpoint assesses business content; it is not canonical acceptance or a claim of automatic semantic verification. Declining or missing the checkpoint prevents B. The proposed 240-second task deadline includes this waiting period; expiry preserves A and prevents B, so the first demonstration may end partial if review takes longer.

## Detailed package and delivery boundaries

- [Native PRD](../features/agents/connection/STAGE-2-NATIVE-PRD.md): exact fictional fixture, role instructions, linked deliverables, rubric and company payer policy.
- [Native technical plan](STAGE-2-NATIVE-PARTICIPATION-PLAN.md): source reuse map, supported route evidence/alternatives, credential placement, runtime-neutral contracts, schema, reservations/reconciliation, migration/rollback and bounded Stage 2.1 assignments/checks.
- [Native screen design](../design-system/STAGE-2-NATIVE-PARTICIPATION-DESIGN.md): setup/disclosure/work/review/usage/stop/reopen states, text wireframes and future accessibility/browser checks.
- [Assignment and independent review](../runs/stage2-native-participation-design.md): routing provenance, actual candidate identity, review findings and disposition.

Stage 2.1 follows ROADMAP BYOA-AGT-01–08: establish neutral grants/work/accounting interfaces, implement the native adapter and feature-owned UI, integrate exact handoff/proposals/human acceptance, verify denials/history/accounting/preservation offline, then independently review the actual candidate. Real cooperative demonstration is a separate authorized step; mocks never satisfy the two-real-agent outcome. Future keyboard, narrow viewport and actual 200% zoom checks apply to changed screens.

## Separate later execution proposal — not authorized

The technical recommendation proposes a fresh **US$0.42 maximum raw provider token expense**, conditional on its pinned model/rate/feature constraints: two inference calls A then B, at most two free counting requests, no tools/retries/provider fallback, A output ≤1,500 tokens, B ≤2,000, estimated input admission thresholds 4,000/6,000, 60 seconds per provider request and 240 seconds overall. Conservative full-context reservations total US$0.4175 (A US$0.2075 + B US$0.2100), rounded up for the proposed allowance. Counting estimates are not the hard exposure proof; a deadline is not a billing cap. Technical evidence and assumptions govern this arithmetic.

Before any real run: reviewed implementation must enforce that envelope; exact disclosed prompts/inputs and A-handoff construction must be bound; an actual sponsor/provider funding account must be named; current applicable rates/account terms must be verified; prior unknown exposure sharing that account must be reconciled or independent authorized funding established. Do not reuse/reset the historical US$1 test authority. No credit purchase, tax-inclusive payment ceiling or commercial customer price is approved by this token-expense proposal.

## Approval requested

Approve or revise this native participation design as one package: fictional bakery task/roles/rubric, native runtime approach, scoped authority, company test funding/accounting, Calm UI and bounded offline-first delivery plan. **Design approval alone does not resume coding or authorize live calls.** An explicit Stage 2.1 resume is still required; real inference/spending needs its own concrete authorization. Payments/credits/markup, production/private readiness, optional BYOA and ongoing company administration remain later decisions.

Stage 1/1.1 stays accepted. Stage 2.1 remains paused, weekly pilot stopped and new external-spending authority zero. No application code, provider preflight, credential access, live execution, installation, migration or publication was part of this design task.

Template applicability: this is an orchestration approval summary, not a replacement PRD/spec/design. It consolidates choices and authority; the content owners retain recognizable template sections and detailed checks in the linked records. Historical reviewed external-pair documents and receipts remain unchanged.
