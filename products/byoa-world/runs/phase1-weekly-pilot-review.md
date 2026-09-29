<!-- studio {"id":"byoa-world:review:phase1-weekly-pilot","scope":"byoa-world","type":"review","status":"approved","links":[{"relation":"implements","target":"byoa-world:contract:main"}]} -->
# Review: bounded weekly project brief pilot

- Reviewer identity / role: independent weekly_pilot_review agent, technical and document review.
- Last material update: 2026-09-30.
- Candidate revision and contract/requirement revision: local working tree atop application main 0312413; exact reviewed files below. Contract weekly project brief pilot authorization; PILOT.md revision 2, PILOT-001/002.
- Verdict: PASS for implementation readiness, conditional on actual human baseline before live dispatch. This is not pilot outcome acceptance. Orchestrator records final acceptance.

## Acceptance criteria checked and evidence

Independently passed 18 distinct affected checks: external workflow 10, saved-work 3, weekly pilot 5. Seventeen passed together, then the final test-only addition passed with all five weekly tests; no claim of one combined 18-test execution. Builder reports full 95-test suite before that final test, giving 96 distinct builder checks. All reviewer executions used temporary fictional state and injected runtime stubs; no provider calls, actual baseline values or user acceptance were generated.

Server accepts only four named fixed fixtures (original book-swap plus exactly three weekly packets), and bridge validates exact task/context envelope. Edited/mixed content and custom fields are denied. Fresh weekly sessions receive distinct identities and preserve fixture ID/version in saved summaries. Original book-swap behavior remains supported. Each packet stands alone; no preceding agent memory is needed. Weekly checklist is explicitly deterministic, not a second AI review or a quality verdict.

Weekly start requires a human-source completed baseline shape; all rubric booleans may be false. The first start freezes its exact SHA-256, later starts reject changed baselines, and each exclusive cycle reservation records baseline and fixture hashes. The server gate applies equally to owner UI and coordinator. Competing Worlds sharing the evidence directory cannot consume the same cycle twice; failed or uncertain execution stays consumed across restart. Reserving before pairing intentionally means a pre-inference failure may also consume a cycle. No automatic new inference, acceptance, retry or fourth cycle exists.

Coordinator verifies reservation session identity before bridge invocation, records proposal/attempt identity and unknown usage, and preserves safe failure evidence. Loopback origin and redirect rejection apply. The existing 60-second inference bound, clean World environment, runtime-side provider authentication, idempotent result replay and late-write denial remain intact. Human edits do not redispatch. No existing .data or .phase1 evidence was altered by reviewer.

UI code inspection verifies cycle/version labels distinguish otherwise identical weekly tasks in saved-work selection; matching-version original fictional packets are exposed with selected historical work. Project heading is neutral. Earlier saved owner review, revision and acceptance remain separate from the current session and agent authority. Actual browser rendering is an orchestrator check. Diff whitespace check passed, with only existing CRLF conversion warnings.

## Document/template comparison

This report preserves the selected review template fields: identity/candidate, verdict, checked evidence, template comparison, decisions, fixes and limitations. PILOT revision 2 retains PRD essential content and recognizable structure; no material departures. BASELINE.md is a small supporting exercise, with actual user observations explicitly pending, not a claimed completed experiment. Matched packets have similar fictional library update complexity; later cycles are modestly longer. Four headings cover all five rubric checks. Hands-on time excludes interruptions/waiting and assistant intervention must be recorded separately. Three observations are expressly feasibility evidence, not statistical validation.

## Preserved decisions and required fixes

One review correction set resolved ambiguous historical cycle/packet provenance, book-swap-only heading, missing baseline/fixture fingerprints, owner-helper redirects and missing helper success/failure/mismatch verification. No outstanding required technical fixes. Root owns baseline collection, measures, state/roadmap and human acceptance. No new provider, API spending, private inputs, publication or deployment is inferred.

## Residual risk / verification limitations

Baseline source metadata cannot prove a human actually performed the exercise: orchestrator must record only the user's real response. Local evidence files and test injection parameters assume the trusted owner process; this is not a tamper-proof security boundary. Fixture history disclosure depends on unchanged versioned fixture definitions, so future edits must increment versions and retain needed earlier versions. Reservation is conservative and never automatically reclaimed. Actual live quality, owner effort, three accepted cycles and restart retrieval still require the pilot; no benefit or completion claim is established here. Private-data readiness remains separate.

## Candidate manifest

Application paths are relative to BYOA-World; document paths refer to features/work/session in the studio product.

| File | SHA-256 |
| --- | --- |
| src/features/work/session/external-fixtures.js | 0136d3977468ac5ce1ad4b6b680ac5de23e7e81ac451ae5ee045f6ee32d1a7a3 |
| src/features/work/session/pilot-gate.js | 6d0595eaef12362555a5cf4a8ef79d036d3f660a269283300fa2e59187c3510f |
| src/features/work/session/service.js | c9933788be032ce351098ee5a84a2c39c54139afb9e301c292f668046c489fd7 |
| src/features/work/session/index.js | e0240481f025b0f52194b2f39557bc6946a960dffc22522f7c1991f0ea9702d8 |
| src/features/work/session/ui/panel.js | 37470b6fe60c90fca992fb46a22b15be3c924c02fffd94f468f55947a479e963 |
| src/features/agents/connection/external-bridge.js | 01832de7a62649c5c652e9324129c9663105a5841900badf7e67f2f969a1f3c3 |
| src/features/collaboration/document-review/service.js | d9538488fb843b7e1f12fc92530a213ebadb83eb3f8a022a8d9d5c51360c7b3a |
| src/features/collaboration/document-review/ui/panel.js | 9662aacd552c41dddaac8cca35bdd7ba7dd5dc82a13e24bb0b07e9f33be86a6f |
| src/app/server.js | 5cf6a5f04d4c5bf58093d52a8cc21da889b49a80755b94bc4512122570bb7bc8 |
| src/app/ui.js | 066c27d64e9146371cb0af125fbbba90a2f9be1f257fde29a7563802afb832de |
| src/app/run-weekly-pilot.js | 69b5d484f431196e403c2cbfa0c0b5aadf3273e10f16e7bd2e903aee5b4826e5 |
| src/app/tests/weekly-pilot.test.js | 78df009dfbc710437a932bb261f2b8252f85f8da154263cd691f0f09e954a6ee |
| PILOT.md revision 2 | d98b22cf4cd13442f4df7b11becc147733b6e9ffb7a036b8571dba8c450ae1c6 |
| BASELINE.md | 7d6bfe5e99083170ba837a1a3aa499eebed01e512235485b74d90491127f2b8f |
