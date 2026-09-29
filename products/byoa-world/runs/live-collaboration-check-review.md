# Standalone collaboration check review

Date: 2026-09-29. Outcome: **PASS for launching the bounded experiment**; live
collaboration results remain pending. No provider calls were made by this reviewer.

Reviewed application candidate: `src/app/check-collaboration.js`,
`features/agents/connection/{codex-draft-check,collaboration-connectors}.js`,
`features/collaboration/document-review/live-check.js`, public exports, README and
their mocked tests. Feature ownership and public import boundaries are preserved;
the preview runtime remains unchanged.

- Original connection ledger is read and its known cost recomputed before dispatch.
  The new exclusive durable ledger reserves only the remaining original US$1
  allowance, including the earlier US$0.000067. Concurrent attempts, restarts and
  failures cannot automatically spend again. Unknown usage remains unknown.
- Codex uses a fixed absolute executable, argument array without a shell, empty
  temporary directory and allowlisted environment excluding the Claude key.
  Event validation, time/output bounds and credential-shaped text rejection gate
  the onward handoff. Claude gets one bounded request with no tools or retries.
- Exact draft and Claude prompt hashes accompany attributed contributions.
  Synthetic sentinel omission is only payload evidence; explicit report flags deny
  private-isolation, UI-integration and direct-agent-communication claims.
- Independent `node --test`: **30/30 passed**. Subsequent UTF-8 handling and CLI
  configuration corrections received an affected runner-suite rerun: **3/3 passed**.
  Coverage includes concurrent/restart locks, prior-cost uncertainty, credential
  echoes, unexpected events, unsafe output, output limits and nonclosing timeout.

Corrections completed: timeout failure now settles without waiting indefinitely
for process close and handles a nonzero process-tree termination result. Technical
specialist's no-provider strict-config differential probe found the installed CLI
rejects `bundled_skills.enabled`; builder removed it. Remaining exact configuration
passed strict parsing to the deliberately nonexistent provider sentinel; an unknown
key negative control was rejected. This proves parsing only, not a live model run.

Limitations: credential-pattern filtering is not comprehensive DLP. Tool settings
and read-only mode do not establish filesystem read confinement. Remote retention,
real collaboration quality and successful user-shell execution require subsequent
evidence. The helper is a one-shot synthetic sequential handoff, not a general live
agent service.

## Startup failure and explicit recovery review

The user's actual first attempt ended `codex_failed_no_claude_request` in 329 ms,
with `verified: false`. The initial no-provider configuration probe did not use
the final scrubbed child environment, so it missed a runtime home-resolution
failure. Technical specialist reproduced `Could not find home directory` with
the exact executable, arguments, empty working directory and allowlisted
environment. Supplying `CODEX_HOME` derived from `USERPROFILE/.codex` advanced the
same probe to the deliberate nonexistent-provider error, with no provider turn.

Follow-up candidate review: **PASS for one explicitly launched recovery attempt**.
Independent full mocked suite: **35/35 passed**. The environment fallback preserves
an existing explicit Codex home and does not read authentication files or forward
the Claude key. Persisted failure diagnostics contain only allowlisted codes and
numeric exit status; raw stderr and exception messages remain excluded.

`check:collaboration:recovery` uses a fixed separate ledger and accepts only a
terminal predecessor recording no Claude request, no new cost/usage/contributions,
false verification, and matching original allowance, prior estimate and runtime.
Unknown, reserved, successful, Claude-started or mismatched predecessors refuse
before dispatch. The predecessor hash is recorded; original evidence remains
unchanged. Concurrent and repeated recovery calls are locked by exclusive ledger
creation. This is not an automatic retry, a reset, or a new spending allowance.

No actual ledger was modified and no live provider call was made during this
review. Successful full startup and live collaboration still require the user's
explicit recovery execution; the corrected preflight establishes local startup
parity only up to provider selection.

## Second failure: subprocess cleanup

The explicit recovery also failed before any Claude request, in 273 ms, with an
unclassified diagnostic. Technical specialist exercised the actual Node runner:
the no-provider override produced a classified exit, while an unexpected-event
child kept alive during asynchronous termination reproduced an `EBUSY` cleanup
error that masked the original rejection. The original live rejection cannot be
recovered from the two existing reports.

Lifecycle repair review: **PASS for further Codex-only diagnostic execution**.
Independent full suite: **37/37 passed**, including actual subprocess tests for
preserving the primary error across simulated cleanup failure and waiting for
child close before directory removal. Cleanup now waits for close with a bound,
retries transient removal failures, and records sanitized cleanup flags without
overwriting the primary diagnostic. If a process does not close, cleanup is
deferred and the failure remains closed to onward handoff.

This does not establish readiness for another paid collaboration request. Actual
Codex-only success is required before involving the user in another paid launch.
No new recovery ledger/path was added. Both failed attempt ledgers remain immutable;
this review made no provider calls or changes to those ledgers.

The orchestrator subsequently identified the actual startup error events as local
configuration warnings: a deprecated redundant `features.web_search` override and
the deliberate unstable host-skill-discovery override. Focused repair review:
**PASS, 8/8 runner tests independently passed**. The deprecated override is removed,
top-level web search remains disabled, and the documented unstable-warning
suppression is enabled. Strict event acceptance remains unchanged. Diagnostic
event/item names are mapped to fixed enums rather than persisting arbitrary text.
This enables a Codex-only synthetic validation; it does not establish live success
or authorize another paid launch from review evidence alone.

## Verified draft continuation

The orchestrator then observed a successful actual Codex-only run and saved its
synthetic book-swap draft. Review of `check:collaboration:review`: **PASS**.
Independent full suite: **40/40 passed**. The continuation validates both failed
attempts as no-Claude terminal results, checks their predecessor hash chain and
original allowance, and accepts only the pinned SHA-256 of the observed draft
with its expected source metadata. It reuses that exact draft and explicitly
records `ranSeparately: true`; it does not launch Codex again.

Additional independent integration check used the actual four source files read
only, a temporary output ledger and a mocked Claude response. The chain and pinned
draft passed, exactly one mocked request occurred, and attribution retained the
separate Codex run. No real provider request or mutation of existing ledgers took
place. Invalid/missing/null sources, changed draft metadata/hash, broken chains,
concurrent calls and repeats are covered. The fixed new review ledger preserves
the same original US$1 cumulative limit and does not reset any earlier evidence.

The remaining live action is the user's explicit Claude-only continuation from
their credential-holding shell. A successful mocked integration is not a live
Claude review result.
