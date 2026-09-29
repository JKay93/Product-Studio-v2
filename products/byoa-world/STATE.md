# Current state and continuation handoff

Last material update: 2026-09-29. Owner: orchestrator.
Milestone status belongs to [ROADMAP.md](ROADMAP.md).

## Verified outcome

The bounded fictional-data prototype is implemented and reviewed in application
commit `831e324` (sibling BYOA-World repository). Real Codex subscription drafting
and Claude API review worked through the local workspace. The user accepted
revision 1 at `2026-09-28T19:37:46.358Z`; canonical output persisted and grants ended.
The human owner does not need an agent. Automatic shared context, attributed work,
local revision, explicit acceptance, stop and durable budget handling are implemented.

- Independent verification: 58/58 automated tests; 18/18 local access checks.
- Three live Claude probes (baseline, direct pressure, indirect injection) completed;
  no fictional private marker/fact disclosure was observed in inspected responses.
- Cumulative Claude estimate: US$0.005369 of the original US$1 total allowance;
  outstanding reservations: US$0.00. Codex subscription usage is separate.
- No additional provider calls were made during this administrative closeout.

See [verification](features/collaboration/document-review/EVIDENCE/VERIFICATION.md),
[boundary findings](research/knowledge-boundaries.md),
[integrated review](runs/integrated-live-workflow-review.md), and
[boundary review](runs/knowledge-boundary-review.md). Earlier pending statements in
review records describe their historical review checkpoints.

## Limits and next decision

The current live route accepts fixed fictional inputs only. Existing personal agent
memory has not been imported. Codex filesystem read confinement, remote retention,
and general model confidentiality are unproven. Three non-disclosure observations
are not a privacy guarantee. RM-04 remains open for an explicit supported
knowledge/isolation scope decision; the original private-knowledge goal is preserved.

The user approved fresh project sessions with explicitly shared context for the test,
without importing personal-agent memory. Local no-provider isolation evaluation is
now authorized; private inputs remain unsupported until separate verification.

## Continuation and operations

Read project instructions, [contract](CONTRACT.md), this state and the roadmap first;
then only relevant evidence. Keep feature-owned code/docs in their existing domains.
Use concise assignments and proportional review; avoid repeated broad reads and
unnecessary agent rounds because the user is concerned about token consumption.

The application README documents launch commands. Synthetic preview uses port 4317;
fixed live workspace uses port 4318 and the user's credential-holding shell. Current
server availability is not asserted here. Never copy the API key into files or chat.

Evidence and budget records remain local and Git-ignored under application `.data/`,
including `live-workspace.json`, `boundary-experiment.json`, historical attempt records
and `live-budget/`. Preserve these across restarts; never reset them to rerun tests.
A new clone does not contain this evidence or the spending ledger.

Code and documentation closeout are saved as local commits. This closeout does not
publish the application, push repositories or deploy a service. Consult Git history
for exact documentation revision and verify remote state before claiming publication.

## Approved test scope and isolation investigation

The user subsequently approved fresh project sessions with explicitly shared context
for the proper test run; personal-agent memory import stays unsupported for that test.
This supersedes the recommendation-only wording above. Runtime isolation remains open.
See the [follow-up investigation](research/knowledge-boundaries.md#follow-up-investigation-2026-09-29)
for local capabilities, provider-policy findings and the recommended no-provider
containment evaluation. No machine settings changed and no paid tests ran.

Local isolation check outcome: blocked before any file probe. The restricted sandbox
could not resolve its test home (`windows sandbox failed: no home dir`) after removing
an unsupported CLI flag. This is not a confidentiality pass. No provider calls or
global settings changes occurred. Evidence and next options are in the boundary report;
full private-data readiness and main-process containment remain unverified.
