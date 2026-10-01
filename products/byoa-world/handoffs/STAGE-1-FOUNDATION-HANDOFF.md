<!-- studio {"id":"byoa-world:handoff:stage-1-foundation","scope":"byoa-world","type":"handoff","status":"approved","links":[{"relation":"requires","target":"byoa-world:roadmap:main"},{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# Stage 1 handoff — discuss and design the World foundation

Owner: orchestrator. Updated: 2026-09-30.

> Historical handoff: Stage 1/1.1 is now accepted. Use the [Stage 2 native-agent handoff](STAGE-2-NATIVE-AGENTS-HANDOFF.md) and latest contract/roadmap for new work. Original foundation planning and preservation facts below retain their original dated meaning.

## Start here

The user approved the detailed roadmap and requested its GitHub publication and this
handoff. Approval settles the sequence and planning scope; it does not choose the
foundation's features, architecture, stack or appearance. Begin a design discussion,
not application implementation. This replaces [the historical Phase 1 handoff](PHASE-1-HANDOFF.md).

Read in order, narrowing further reading to the current assignment:

1. Studio `AGENTS.md` and `operating-system/STANDING_ORDERS.md`.
2. Project [AGENTS.md](../AGENTS.md), latest authority in [CONTRACT.md](../CONTRACT.md), and current context in [STATE.md](../STATE.md).
3. [ROADMAP.md](../ROADMAP.md): overview, Stage 1/1.1, orchestration and preservation sections. This is the single milestone-status source.
4. [Organization decision](../decisions/001-project-organization.md) and [modularity rules](../architecture/MODULARITY.md).
5. [Source register](../sources/README.md). Original PDF: `C:/Users/jingk/Downloads/byoa_world_handoff.pdf` (local only, not in GitHub). Read relevant sections before interpreting its product intent; report if unavailable.

Consult the studio template catalog when authoring records. No handoff template exists;
this compact record supplies authority, inputs, next assignments and preservation rules.

## First conversation and bounded work

Start **BYOA-FND-01**: agree who the first user is, what creating a World means,
and which small human task should make the first workspace useful. Discuss what
must exist for the next stage and what waits. Present a small recommendation with
clear choices, rather than a large questionnaire or a predetermined platform.

In parallel where useful, assign read-only **BYOA-FND-02** inspection of the sibling
`BYOA-World/` application: map reusable controls, persistence, review and history;
identify weekly-fixture coupling and changes needed for a general human workspace.
The result is a reuse/preservation map, not permission to rewrite the application.

Then work through FND-03–12 in dependency order. Use bounded assignments naming
package IDs, source records, exact write scope, preserved choices, deliverables,
checks and handoff dependencies. Combine related packages; do not spawn one agent
per row. Use a Technical Specialist for architecture/data/interface decisions and
a Designer for concrete experience decisions. Delegate substantive implementation
to a builder with one relevant independent reviewer when delivery is authorized.

## Reviewable Stage 1 package

Present one coherent package for the user's decision:

- Minimum human journey and must-have/next/later scope, exclusions and acceptance scenarios.
- Screen/navigation map, visual options and selected mockups, including empty, error, saved and narrow-screen states.
- Architecture and ownership diagram, persistence/identity model and Stage 2 extension seams.
- Stack recommendation with alternatives and consequences; migration/reuse and data-preservation plan.
- Stack-specific file tree, cohesive feature boundaries and public interfaces under existing modularity rules.
- Small design system: tokens, components, interaction states, keyboard/accessibility and responsive conventions.
- Relevant UI/design/build/verification skills with reasons; read selected instructions when used, no automatic installation.
- Bounded Stage 1.1 delivery assignments, dependency plan, meaningful checks and user walkthrough.

No stack, database, identity method, native artifact type or visual direction is
selected by roadmap approval. Proposed document paths in the roadmap are not an
instruction to create speculative feature folders. Record concrete decisions once.

Stage **1.1** begins after this package is approved: build and verify the agreed
human World foundation. Two genuinely connected agents belong in **2/2.1**,
followed by ongoing work **3/3.1**, organizational readiness **4/4.1**, and conditional
outside expertise **5/5.1**. Bring private-data readiness forward if needed; never bypass it.

## Preserve before changing anything

The previous pilot-led Phase 1 did not deliver the intended platform. Its useful
components and evidence remain local in `BYOA-World/`; inspect existing uncommitted
changes before future edits. Published application main is `0312413`. This handoff's
documentation publication does not publish the local application candidate.

Preserve `.data/`, `.phase1/`, accepted book-swap output, saved proposals/history,
attempt identities and original budgets. Cycle 1's failed reservation remains consumed;
cycle 2 contains a real Codex draft plus **synthetic** review, with human acceptance
pending. Do not run unused cycle 3, retry/reset failures, invent recovered unsaved
notes, or infer new spending authority. Subscription usage remains unmeasured.

No baseline, manual-copy count, time-saving claim or pilot-success quota gates Stage 1.
No fresh provider call, private input, credential access, installation or deployment
is needed for this design task. Existing connection evidence is not proof of two
independent external agents or private-data assurance. Older pilot next steps are historical.
