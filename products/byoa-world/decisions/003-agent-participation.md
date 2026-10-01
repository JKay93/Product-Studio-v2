<!-- studio {"id":"byoa-world:decision:agent-participation","scope":"byoa-world","type":"decision","status":"approved","links":[{"relation":"constrains","target":"byoa-world:prd:stage2-participation-plan"},{"relation":"constrains","target":"byoa-world:roadmap:main"}]} -->
# Decision: approve participation design; hold implementation for discussion

- Decision owner: human user; orchestrator records. Updated: 2026-10-01.
- Authority: "approve, will you be pushing to github?", followed by "Do not start anything yet, push to github then i would like some discussion".
- Publication scope: user explicitly selected "Studio plans and application foundation".
- Governs: ROADMAP Stage 2/2.1; supplements Decision 002. The immediate hold supersedes any instruction to begin Stage 2.1 now. Weekly pilot remains stopped.

> Subsequent direction: [Decision 004](004-native-agents-company-funding.md) supersedes the external-first route and onboarding/funding assumptions. The user-approved original candidate identities below remain historical; exact text snapshots are retained in [the archive manifest](../runs/reviewed-candidates/stage2-external-20261001/manifest.json). The implementation hold and preserved work/authority rules remain in force.

## Context and decision

Approve the reviewed participation package: two independently operated Codex bridges,
A develops a project brief and B uses that committed brief with complementary expertise
to develop an action plan. A prepared Session freezes the saved note and disclosure;
pairing and grants are Session-bound. Both attributable contributions are retained.
The owner reviews/edits a proposal and explicitly accepts a selected revision into the
existing planning note. Preserve the human foundation, additive SQLite migration and
backup requirements, uncertainty, stop/revocation limits and v2-compatible fallback.

**Do not begin Stage 2.1 implementation, runtime preflight or live agent execution.**
Publish the studio records/model-routing updates and accepted Stage 1.1 foundation,
then return for discussion. Publication does not release a production service or
restart the weekly pilot. The proposed two-call live allowance has not been approved.
The optional expertise question was not answered: Product planner → Technical architect
and the garden brief → action plan remain examples, not an explicitly selected fixture.
Discussion may settle those details before delivery resumes.

The four presented files are preserved byte-for-byte with their review-time draft
labels. This decision records their approval and the subsequent hold; it does not
rewrite the reviewed package. SHA-256 identities:

| Presented candidate | SHA-256 |
| --- | --- |
| [Participation plan, revision 3](../architecture/STAGE-2-PARTICIPATION-PLAN.md) | 2412327fd1087b6cd532a7eb37ee1817895f382668d02e86409ad4e09c2b3e05 |
| [Route assessment](../research/STAGE-2-ROUTE-ASSESSMENT.md) | 71c6ed58a6849656bfdaf31c9557e6fd096c71a1ce78f67ccc9fa33a5bc71648 |
| [Participation design](../design-system/STAGE-2-PARTICIPATION-DESIGN.md) | bd3fb2dc2e0a39a7fad96883cb3fcf60310bf98d2d0e3e051432e18d56c68ce1 |
| [Interactive concept fragment](../design-system/previews/byoa-stage2-participation.html) | c494711b7ccb2ddf196f99ec89518491555adf78a3a103be361fd21f376323b6 |

Original four-file manifest SHA-256: 5525b408f9260ffc5e64785836dfc88a2082a18943771387cfb49cf97c1d1bff.
Independent QA and actual concept checks: [assignment evidence](../runs/stage2-participation-design.md).
The concept is illustrative UI, not proof of connected runtimes or product persistence.

## Rationale and consequences

Complementary deliverables match the user's request for agents to work together;
a synthetic reviewer alone would not satisfy it. Two runtimes from one provider are
the recommended smallest route, with provider-neutral World boundaries. Alternative
provider selection remains a future route decision requiring supported authentication
and applicable usage authority.

Holding implementation preserves the user's requested discussion before further work.
Current pair/authentication/capabilities and subscription usage remain unverified.
Stop denies future access and writes; it cannot guarantee remote cancellation,
erasure or zero charges. No fresh attempts or accounting reset follows from approval.

Orchestrator publishes only the accepted foundation plus studio records, excluding
uncommitted historical pilot/connector changes and ignored stores, credentials,
budgets and raw evidence. Record clean publication checks and verified remote revisions
separately. Resume implementation only after the user ends the hold; live execution
requires its own concrete allowance and readiness decision.
