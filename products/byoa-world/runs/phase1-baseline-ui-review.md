<!-- studio {"id":"byoa-world:review:phase1-baseline-ui","scope":"byoa-world","type":"review","status":"approved","links":[{"relation":"implements","target":"byoa-world:contract:main"}]} -->
# Review: in-app manual baseline

- Reviewer identity / role: independent baseline_ui_review agent.
- Last material update: 2026-09-30.
- Candidate revision and contract/requirement revision: local application working tree atop main 0312413, exact files below; contract In-app baseline usability repair and weekly pilot authorization; PILOT revision 2 and BASELINE measurement protocol.
- Verdict: PASS for the bounded usability repair. Orchestrator records final acceptance. No actual baseline or pilot outcome is claimed.

## Acceptance criteria checked and evidence

Reviewer independently passed 20 affected tests together: weekly pilot 7, external workflow 10, saved-work 3. Tests use isolated temporary evidence and injected runtime stubs, with no provider calls or actual user baseline. Final UI-only correction passed independent syntax checks; unchanged backend checks remain applicable. Whitespace check passed with existing CRLF conversion warnings.

Authenticated owner save uses existing exact-origin and CSRF checks; machine credentials cannot use owner endpoints. Server constructs human-source metadata, checks bounded nonblank text, finite nonnegative time, safe whole handoff counts and all five explicit rubric booleans. False rubric results remain valid. Existing owner-text checks reject credential/restricted-marker content. Serialized-size validation prevents a saved baseline exceeding the reader's limit.

Baseline replacement is atomic. Save and cycle reservation share an exclusive filesystem lock, with conservative failure if a stale lock remains. The exact baseline hash freezes before a first cycle reservation; later edits fail, and exclusive cycle records remain immutable. Tests cover restart persistence, honest false results, malformed input, missing authentication/CSRF, held lock, competing saves/starts and matching frozen hash. Existing history, acceptance and machine-lifecycle regressions pass.

UI provides the fictional exercise, headings/timing instructions, labeled brief/time/handoff fields and five required Yes/No choices. Missing baseline blocks weekly start. Polling preserves dirty draft fields and failed saves retain input. The start action itself rejects unsaved baseline edits; frozen transition displays the actual saved values with an explicit warning and retained unsaved copy. All form controls disable during save and after freeze. The next step states that starting a session does not launch Codex and requires the separately launched bridge. Previous stopped activity is labeled separately from baseline preparation.

Orchestrator reported actual browser checks on an isolated temporary instance: blank submission rejected; test-only form saved with 2.5 minutes, zero handoffs and a false rubric result; reload retained values; dirty start was denied without reservation; a separate owner test start without pairing/inference triggered the frozen display and retained unsaved-copy warning. Real preview baseline remains absent. These browser observations are orchestrator evidence, not reviewer-executed browser checks.

## Document/template comparison

This report preserves the review template's identity, candidate, verdict, acceptance evidence, document comparison, preserved decisions, fixes and limitations. Existing PILOT and BASELINE protocol remain governing sources; the application exercise matches the documented fictional packet and measurement fields. No new product document or material template departure is required for this repair.

## Preserved decisions and required fixes

The review correction addressed stale saved-value starts, concurrent freeze display and editing during an in-flight save. The implementation now guards the action and preserves an explicitly unsaved copy if another client starts the pilot. No outstanding required fix. World never launches Codex; runtime credentials remain outside World; no automatic run, retry, baseline fabrication, new acceptance, provider integration, spending or publication occurs.

## Residual risk / verification limitations

Human-source metadata records the owner's submission, not proof of how the exercise was performed. Client unsaved drafts survive polling and errors, not a full page reload; saved baselines persist. The lock test uses two server instances in one process and a held on-disk lock; cross-process exclusion is supported by inspected exclusive filesystem creation, not a separately spawned process race test. A crashed process may leave a lock requiring deliberate recovery. Trusted owner-local files are not a tamper-proof boundary. Runtime launch still requires an owner-operated bridge. Actual baseline and three live pilot outcomes remain pending.

## Candidate manifest

Paths are relative to BYOA-World. SHA-256 identifies the final reviewed candidate.

| File | SHA-256 |
| --- | --- |
| src/features/work/session/pilot-gate.js | b361aa65050b15886a5dab6af8597a75011de8d7e4f6d2469c422bc2d06cb238 |
| src/features/work/session/ui/panel.js | 9fcdc8851018393e11f660b8382f0ede0175e725b1d56191385d346364543121 |
| src/app/server.js | b7c0b56195b5def78aa6c937e93b4cca52d917d61a0eaa88e464adaa8207841e |
| src/app/ui.js | 1086b04ece01355330b2f1762cf60baf5fc04b92c75bbb5f06ab8671af5df090 |
| src/app/style.css | 432e21a967a2888380ec79e04101a4d2deb54da3b7e989c883a682211ead7b6c |
| src/app/tests/weekly-pilot.test.js | fa2dc04eca60fd6bfd6826d0305a01ae0741a106a4d5a4875fc8e26affc07852 |
