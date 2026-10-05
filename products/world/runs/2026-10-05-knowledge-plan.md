<!-- studio {"id":"world:run:2026-10-05-knowledge-plan","scope":"world","type":"run","status":"draft"} -->
# Plan Knowledge before Agent connection

## Goal and scope
User requests the next phase plan and proposes bringing the Knowledge segment forward before connecting Agents to inference. Produce a concrete proposal grounded in accepted Phase 4, then show it. Planning/documentation only; no application, migrations, uploads, providers, jobs, new spending or deployment. Approved ROADMAP remains unchanged until sequence approval.

## Tasks and acceptance
- world:task:knowledge-inventory — existing Builders, read-only: identify reusable current Knowledge/Memory/domain/UI boundaries, actual missing behaviors and implementation dependencies. No code changes or duplicate reports.
- world:task:knowledge-proposal — Orchestrator: specify user journey, Knowledge versus Memory, phase boundaries, lean architecture/module reuse, acceptance criteria, proposed revised sequence and material choices. Save a draft under products/world with stable scoped IDs.
- world:task:knowledge-plan-delivery — Orchestrator: reconcile advice, verify draft/IDs and preserve current implementation, deliver planning records to studio and present proposal. User acceptance of the draft is distinct from planning delivery.

## Outcomes
Proposal complete; planning artifact accepted for delivery, product scope/sequence remains draft. Baselines: World c326f6362b397208d3458603fd5a424eb203d94a; studio8717db44e28e3e96995aa91a4f2208f4c351c0ec; both clean. Phase 4 controlled development acceptance and qualified email/mobile checks remain valid.

## Questions and decisions
No missing input blocks a proposal. Knowledge-first is the user's proposed direction, not an approved roadmap replacement. Distinguish an inspectable information library from learned Agent behavior; inference and actual learning remain separate milestones.

## Routing
Current route hash1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. New/historical specialist activation is still unavailable at the known host thread limit; do not silently substitute existing Builder routes for PM/Technical Specialist. Existing Builders at recorded gpt-6.1-sol/low/none can inventory their own implementation read-only. Root handles proposal/sequence; no specialist consensus or independent implementation acceptance is claimed. Previous one-run reviewer exception ended with Phase 4. Activation/token/cost remain unknown.

## Deferred work and handoff
No implementation in this run. Both Builder inventories completed read-only. Draft PHASE_5_KNOWLEDGE_PLAN.md proposes UI mockup → saved text/version library → bounded imports → source search → real access/processing verification. Present the draft; wait for scope/sequence acceptance before implementation. Approved roadmap and application remain unchanged; future phase numbering needs user acceptance.

## Inventory evidence and proposal outcome
Backend and UI inventories agree: current Knowledge works without an Agent/Session and reuses authenticated scope, saved text/provenance references, revision checks, retries and canonical UI. Missing document entities, retrievable historical bodies, private Storage policies, reader, folders, search/paging and ingestion are explicit. Existing memory source-version references are not a full document archive. Dedicated immutable item/version/passage records and paged endpoints prevent a second editable copy or an oversized workspace snapshot.

Proposal distinguishes Knowledge reference sources from behavioral Memory, preserves personal/World boundaries, and recommends explicit published World-document access rather than copying current note permissions. TXT/Markdown precede bounded text PDF; OCR/connectors/providers/automatic learning/semantic retrieval remain outside scope. Current official Supabase docs verified native full-text ranking and private Storage RLS; signed bearer URLs retain validity until expiry, so fresh authenticated file delivery is recommended for revocation.

Worker receipts: /root/world_phase4_personal_live and /root/world_phase4_personal_ui resumed at their recorded/current Builder gpt-6.1-sol/low/none route after fresh routing/role reads, hash above. No specialist consensus/QA acceptance is claimed. Orchestrator consolidated and checked the draft. No source, database, file-upload, provider or preview effects occurred. Current World tree remains unchanged. All planning tasks complete; proposal acceptance and future implementation remain pending user discussion.

Delivery: studio-only draft/README/current pointer/run records prepared for standing authorized delivery. Exact push/remote evidence belongs to the host receipt; do not mistake draft delivery for an approved roadmap revision.
