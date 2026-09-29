# Phase 1 handoff

Owner: orchestrator. Last material update: 2026-09-29.

## Read first

Read studio AGENTS.md and standing orders, then project AGENTS.md, CONTRACT.md,
STATE.md, [Phase 0 closeout](PHASE-0-CLOSEOUT.md), and
[Agent-World architecture proposal](architecture/AGENT-WORLD-BOUNDARY.md).
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
