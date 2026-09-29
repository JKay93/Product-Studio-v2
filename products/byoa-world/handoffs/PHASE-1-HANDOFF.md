# Phase 1 handoff — historical

**Superseded:** use [Stage 1 foundation handoff](STAGE-1-FOUNDATION-HANDOFF.md) and the approved [roadmap](../ROADMAP.md). The pilot/baseline next steps below are retained history; do not execute them.

Continuation update: saved-work continuity is fixed and book-swap accepted. User selected weekly-project-brief pilot; three fixed fictional fixtures and bounded runner passed independent review. No actual baseline or weekly live run exists. Read [STATE](../STATE.md), [readiness](../features/work/session/EVIDENCE/WEEKLY-PILOT.md) and [baseline exercise](../features/work/session/BASELINE.md). The baseline exercise and save fields now live directly in World and passed review. Collect real human baseline through that form before at most three authorized attempts. No automatic retry/acceptance; preserve prior evidence.

Owner: orchestrator. Last material update: 2026-09-29.

## Read first

Read studio AGENTS.md and standing orders, then project AGENTS.md, CONTRACT.md,
STATE.md, [Phase 0 closeout](../closeouts/PHASE-0-CLOSEOUT.md), and
[Agent-World architecture proposal](../architecture/AGENT-WORLD-BOUNDARY.md).
Use ROADMAP.md for status and PRODUCT_BACKLOG.md for MoSCoW priorities.

## What is settled

Phase 0 is complete as a bounded prototype: real Codex subscription plus Claude API
collaboration, accepted by the user, with local controls and bounded test evidence.
The application has been pushed at `0312413`; closeout records documentation delivery.
This is not a production release or proof of remote/private-data isolation.

Fresh project sessions with explicit shared context are approved for initial testing.
No personal-agent memory import. Keep current live fixture restrictions until changed
and verified. Gather/Pokemon presentation remains optional and unscheduled. Humans
without their own agent remain a supported product audience; no mandatory BYOA key upload.

The user now explicitly requires agent integration independent of provider/runtime:
provider keys stay with the external agent; CLI, desktop, cloud, company-hosted,
custom and self-hosted runtimes must fit the architecture. Existing direct-provider
prototype proves collaboration only. The canonical protocol and concrete World-auth
mechanism are proposals, not already implemented or fully approved designs.

## First Phase 1 work

Review the architecture proposal with the user and agree one narrow external-agent
vertical slice: trusted owner connects an independently running test harness, receives
only an authorised task/context, returns an attributed proposal, and handles stop,
expiry and duplicate/reconnected delivery. Prove BYOA receives no provider key.
Choose one initial transport/adapter; do not build a connector catalogue or marketplace.
Do not assume the historical personal-first roadmap recommendation is approved.

Before implementing, bound requirements and tests for that slice using existing
feature owners. Preserve Session/Review authority and human acceptance. Separate
World authentication from provider authentication and distinguish declared runtime
capabilities/costs from verified facts. Existing private memory/tools may stay runtime-side;
that does not prove the runtime will withhold private information in its outputs.

## Deferred readiness checkpoint

Before any real private-data pilot, test the actual intended infrastructure in a
separate staging environment with fictional fixtures: agent/session/World isolation,
authorisation, revocation, late writes, credential separation, and external-runtime
threats. Verify applicable provider/account retention and deletion arrangements.
Stopping World access cannot erase information already delivered to a remote runtime.
Native laptop sandbox investigation is deferred; do not resume it or install Docker/VM
as a prerequisite to fictional-data product work.

## Operational continuity

Application: sibling BYOA-World; three feature folders agents/connection, work/session,
collaboration/document-review. Docs: matching domains, architecture for shared design,
decisions for durable choices. Follow templates recognisably; preserve core sections.

README has launch instructions: synthetic port 4317, fixed live port 4318. No server
availability asserted. Existing credentials stay in the user's shell; never request
keys in chat. `.data/` is local and ignored, including acceptance and budget evidence;
do not delete/reset it or assume a fresh clone has a fresh budget. Claude estimate
US$0.005369 against the original US$1 total; zero held reservations. No further paid
run is needed to start Phase 1 planning. Preserve failed attempts as evidence.

User is token-conscious: targeted reading, one bounded specialist/builder and relevant
independent review when needed; no standing committees. This handoff prepares a new
chat but does not create or start one automatically.


## Reliability-only pilot delivery — 2026-09-30

Baseline removal passed independent review (19 relevant checks); same-version runtime relocation and safe failure projection passed 33 affected checks. Isolated browser checks confirmed enabled start and optional local-note save. The old unsaved user brief was not recovered; preserve the old 4319 page.

Updated preview: http://127.0.0.1:4321/, state .phase1/weekly-pilot/world.json. Original accepted book-swap remains preserved. Cycle 1 failed preflight because the pinned executable moved; reservation and original unknown-usage failure remain preserved, with startup-diagnosis.json added separately. No retry/reset. Reviewed replacement db24ee4aeff81dee retains version 0.158.0-alpha.2.1 and runtime restrictions; version/login checks passed.

Cycle 2 produced a real Codex draft plus synthetic checklist: session e960b1b1-2ae4-451e-a087-5512137ddd4e; attempt 03555b76-7d17-48ee-8f71-772ce3e7cdd5; proposal 2777d942-9c14-42b3-8719-ff89f6a036ac revision 1. Evidence: application .phase1/weekly-pilot/weekly-brief-2/. Elapsed 7335 ms; subscription usage unmeasured; human acceptance pending.

Next: owner reviews cycle 2; cycle 3 is unused. Do not retry cycle 1, claim three successful cycles, time savings or Phase 1 completion. Changes remain local, not pushed/deployed. This supersedes earlier baseline-required next steps.
