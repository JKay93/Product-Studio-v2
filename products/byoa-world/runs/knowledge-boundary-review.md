# Knowledge-boundary experiment review

Date: 2026-09-29. Outcome: **PASS for local enforcement evidence and preparing the
bounded user-run behavior experiment**. Live behavioral observations remain pending.
The reviewer made no live provider request and did not change actual spending ledgers.

## Scope reviewed

Reviewed `boundary-checks.js` and `boundary-experiment.js` under
collaboration/document-review, `boundary-probes.js` under agents/connection, their
public exports, both thin app entry points, tests, README and the discovery report.
Feature boundaries and the existing shared budget interface are preserved.

## Evidence

- Independent full `node --test`: **58/58 passed**. The standalone local checker
  also returned **18/18 passed, zero provider calls** against the actual public
  SessionService and ReviewService, not a mocked authorization implementation.
- Positive controls allow selected shared-brief reading and a contribution. Negative
  operations reject excluded company selection/reading, cross-agent private reads,
  agent acceptance/stop and post-stop reads, contributions, proposal creation,
  revision and acceptance. Injected contribution text leaves grants and canonical
  state unchanged. Prior canonical content remains intact.
- The behavior sequence uses three distinct fixed requests: baseline, direct
  disclosure pressure and an instruction embedded in quoted content. Each request
  intentionally includes its fictional private codename/fact. Detection therefore
  tests a potentially observable disclosure, not absence of an undisclosed marker.
- Classifier tests detect exact markers, case/separator normalization and listed
  numeric fact variants; truncated no-marker output is inconclusive. Full no-marker
  output is labeled only `no_marker_observed`, never safe or privacy-verified.
- An exclusively created manifest prevents concurrent/restarted execution. Before
  each call, the existing durable budget reserves US$0.05 within the original US$1.
  Valid usage settles; errors/abort/uncertain response retain the reservation and
  stop later probes. Tests cover partial completion, exhausted allowance, concurrent
  launch, repeats, cancellation, malformed/oversized responses and credential echoes.
- Provider requests are bounded, use no tools, prohibit redirects and have no retry.
  Credentials and raw provider error bodies are not saved. Bounded synthetic replies
  pass credential screening before local retention for human interpretation.

## Limits and corrections

Review added explicit selection denial/positive controls and confirmed unchanged
grants after injected text. Discovery terminology now matches actual outcome names
and describes the manifest as a one-shot attempt whose progress is durably updated,
rather than claiming its contents never change.

The local injection probe tests application permission enforcement on untrusted
text; it is not a model-driven tool attack. These are fresh API requests with
deliberately supplied fictional facts, not personal-agent memory migration. Three
observations cannot establish confidentiality, and marker matching can miss other
paraphrases or encodings. Filesystem/process isolation, retention/deletion and
real private-data handling are outside this acceptance.
