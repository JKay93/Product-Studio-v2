# Source register

Last material update: 2026-09-29.

## S1: Product handoff

- Source: `C:/Users/jingk/Downloads/byoa_world_handoff.pdf`.
- Title: BYOA WORLD - Product & Architecture Handoff, 27 September 2026, 9 pages.
- Read in this conversation to recover the product thesis and complete feature inventory.
- A working thesis and constraint set, not implementation approval. It deliberately
  omits phases and asks for assumptions and sequencing to be challenged.
- The original remains outside the repository; this local path is not portable.

## S2: User direction in this conversation

- The user shared an earlier ChatGPT roadmap as a reference, not a settled plan.
- Latest direction before the documentation request: first determine how agents
  connect to one platform through subscription/API arrangements, then whether they
  can share useful work while protecting agent-private and company-private knowledge.
- Gather/Pokemon visualization is a nice-to-have, explicitly deferred.
- On 2026-09-29 the user requested roadmap documents, PM-authored product strategy,
  and an additional MoSCoW backlog to review before proceeding.

## S3: Assistant recommendations, not user-approved scope

- Connect existing runtimes before attempting complete agent recreation.
- Test a small common interface with two independently operated agents; verify
  supported subscription and API routes separately.
- Introduce minimal identity, Sessions, permissions, context handling, proposals,
  and audit in the feasibility experiment.
- Do not promise remote forgetting; distinguish controlled execution from remote access.
- Later personal/shared World sequencing and all detailed exit criteria remain proposals.

Drafts: [strategy](../STRATEGY.md), [roadmap](../ROADMAP.md),
[product backlog](../PRODUCT_BACKLOG.md). No provider feasibility or market research
has been verified in this documentation task.
