# Integrated fictional live workflow review

Date: 2026-09-29. Outcome: **PASS for the bounded local implementation**.
This review made no live provider calls. Actual live UI execution remains separate
from the previous successful standalone handoff and the mocked integrated evidence.

## Candidate and boundaries

Reviewed `src/app/start-live.js`, server/UI composition, agents/connection live
budget and bounded adapters, Codex cancellation, work/session fixed fixture,
disclosures and terminal handling, and local document review. Existing feature
ownership/public imports are preserved. The default demo remains separate; live
launch binds loopback port 4318 and takes the key from the user's environment.

Server live start accepts only the mode request and derives fictional task/context.
It rejects injected task/context fields. Provider responses and owner text are
rendered as text. Claude receives the safe exact Codex draft plus fixed review
instructions; trace records show the actual outbound prompt and SHA-256 before
dispatch. No agent memory import or filesystem confidentiality is asserted.

The immutable history chain is validated before carrying forward US$0.001312.
An exclusive filesystem lock serializes durable, exclusive reservation/settlement
records; each session holds US$0.05 before dispatch. Unsettled/failure/stop records
remain charged at that full reserve across restart. Valid completed usage settles
to measured estimated cost. Concurrent processes cannot reserve beyond the original
US$1. Corrupt records, stale locks and unverifiable history fail closed. There is
no reset or automatic retry.

Stop propagates cancellation, revokes grants and rejects late results. A late
valid Claude response after stop cannot settle/release the reserve or contribute.
Provider failures retain the reserve and safe diagnostic text only. Human feedback,
revision and explicit acceptance remain local; they do not trigger provider calls.

## Verification

- Independent complete suite: **48/48 passed** before the final two coverage
  additions. Final affected integrated workflow/budget suite: **9/9 passed**.
  These add historical seed validation/refusal cases and stop during Codex.
- HTTP integrated tests exercise fixed input rejection, exact disclosure hashes,
  Codex-to-Claude draft handoff, local changes/revision/acceptance, stop before
  dispatch and during either provider, late noncooperative results, redacted
  failures, preserved existing work and held reservations.
- Actual subprocess tests exercise Codex cancellation and cleanup; actual competing
  processes test the last available budget reservation. No provider is used by them.
- The orchestrator reported browser verification on a clearly mocked instance:
  start through both contributions, disclosure inspection, requested changes with
  acceptance disabled, revision 2 acceptance, access ended, and a subsequent stop
  before Codex completion with prior canonical content preserved. Desktop and
  390px viewport passed; no horizontal overflow. The stopped empty-proposal wording
  was corrected and rechecked.
- The orchestrator exercised the actual live entry with a fake key and timed
  shutdown: it became ready on 4318 without dispatch. Actual historical seed
  loaded as 1312 microUSD; only the seed record was created, no reservation.

## Corrections and limits

During review, exact prompt disclosure replaced partial task/draft traces; stop
checking moved before settlement; the complete Claude handoff is explicitly capped
at 12,000 UTF-8 bytes. Final tests cover historical chain corruption and stopping
an uncooperative Codex result before onward dispatch.

This is local readiness with mocked integrated providers, not proof of a real UI
run, remote deletion, private-data isolation or product-wide interoperability.
Credential-pattern checks are defense in depth, not comprehensive DLP. The fixed
fictional workflow and original allowance are material limits of this acceptance.
