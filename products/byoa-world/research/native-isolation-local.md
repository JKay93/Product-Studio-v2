<!-- studio {"id":"byoa-world:discovery:native-isolation-local","scope":"byoa-world","type":"discovery","status":"draft","links":[{"relation":"reference","target":"byoa-world:contract:main"},{"relation":"reference","target":"byoa-world:discovery:knowledge-boundaries"}]} -->
# Discovery evidence: native local isolation

- Technical Specialist owner: local isolation builder; [independent review](../runs/local-isolation-review.md) passed for the diagnostic and blocked-result reporting, not isolation.
- Last material update: 2026-09-29.
- Method, sources and date range: two bounded local startup attempts against the installed Codex 0.158.0-alpha.2.1 on September 29; local CLI help, existing `codex-draft-check.js`, and official [permissions](https://learn.chatgpt.com/docs/permissions) and [Windows sandbox](https://learn.chatgpt.com/docs/windows/windows-sandbox) documentation. Uses the studio discovery-evidence template.

## Scope and limitations

- Question and corpus: Can a named native permission profile permit a fictional session file while denying an excluded sibling, another session, traversal/junction paths and descendant-process reads?
- Only newly generated fictional files were supplied. Each attempt used fresh project-owned `.data/native-isolation/` fixtures and private configuration/profile/temp paths. No authentication files were read or copied; no model/provider calls, installations, global configuration or ACL edits, elevated setup, or live-adapter changes were performed by the harness. Documentation was retrieved separately; it is not a provider experiment.
- The profile selected `windows.sandbox="unelevated"`, root deny, minimal runtime read, explicit session-directory read, temp deny and network disabled. The child environment contained only named Windows runtime values and fixture-owned home/config/temp values. Neither an inherited real user home nor a credential-bearing environment was supplied.
- This subcommand concerns the command sandbox. Even successful results would not establish containment of the main Codex client, separate tools, authentication traffic or provider handling. Network enforcement itself was not probed.

## Findings

Both attempts stopped before producing probe results; **no filesystem isolation check passed or failed on its merits**.

| Attempt | Local evidence relative to BYOA-World | Observed result |
| --- | --- | --- |
| 1, 2026-09-29T13:01:36.537Z | `.data/native-isolation/attempt-5rleC7/result.json` | Exit 1, empty stdout: `Error: ` followed by `` `--strict-config` is not supported for `codex sandbox` ``. |
| 2, 2026-09-29T13:01:55.965Z | `.data/native-isolation/attempt-nZxblj/result.json` | Removed only the unsupported strict-config option; exit 1, empty stdout: `windows sandbox failed: no home dir`. |

The second attempt supplied private `CODEX_HOME`, `HOME`, `USERPROFILE`, `APPDATA`, `LOCALAPPDATA`, `TEMP` and `TMP`. The failure's exact internal home lookup is not established. Its fixture-local sandbox log contains only a command-start line; no probe JSON exists. Runtime-created files were observed under the private configuration directory. All three fictional canary files remained unchanged in both attempts. Evidence is ignored by Git and retained locally; it contains configuration, fixed command arguments, environment **key names**, exit status and diagnostics, not credentials.

The feature-owned diagnostic is `BYOA-World/src/features/agents/connection/native-isolation-check.js`; it is not imported by the application and requires the explicit `--run-fictional-local-check` argument. Syntax validation passed. Two startup attempts exhausted this task's bound; do not infer authorization for another attempt from the retained script. The existing live workflow was not exercised or altered.

## Implications and follow-up

- Native read confinement remains unverified. Allowed-read, excluded-read, cross-session, traversal, junction and descendant cases all remain **not executed**. Credential separation was limited to constructing a fresh environment/configuration; real credential-store and main-process isolation remain untested.
- Official documentation describes differing enforcement capabilities for elevated and unelevated native sandboxes and refusal of unsupported policies. This observed home-directory error is not evidence that this profile is supported or unsupported, nor proof that Windows Home cannot run it.
- Follow-up owner: orchestrator/Technical Specialist. Before another attempt, determine how this installed sandbox resolves its home without exposing the real user profile or requiring unauthorized setup. If no safe supported path exists, evaluate a separately managed environment under new setup authority. Do not weaken the requested read boundary or copy authentication to make a probe run.
- Keep the existing live route limited to fixed fictional inputs. This result neither establishes whole-client containment nor resolves account-specific retention/settings.

Discovery supports decisions; this record does not establish validation.

### Read-only home-resolution diagnosis: 2026-09-29

Technical Specialist source trace, checked by orchestrator: current public Codex
[env.rs](https://github.com/openai/codex/blob/main/codex-rs/windows-sandbox-rs/src/env.rs)
contains the exact error in `ensure_denybin`. Network-disabled preparation calls it
without a path override. It resolves the Windows account home before creating
`.sbx-denybin`; this lookup does not use the supplied child environment or CODEX_HOME.
The declared dirs-next 2.0 dependency uses
[SHGetKnownFolderPath for FOLDERID_Profile](https://docs.rs/dirs-next/2.0.0/dirs_next/fn.home_dir.html)
on Windows, not the fixture HOME variable. Adding HOMEDRIVE/HOMEPATH is therefore
not an evidenced fix. See also the official
[preparation code](https://github.com/openai/codex/blob/main/codex-rs/windows-sandbox-rs/src/spawn_prep.rs).

This is a likely failure-site explanation, not a proven trace of the installed
0.158.0-alpha.2.1 binary: matching alpha source was unavailable, and the underlying
Windows API failure reason is unknown. No new sandbox attempt was made. Fixing this
lookup alone could cause setup files to be created in the actual account profile;
later preparation also includes filesystem ACL operations. Do not bypass the error
using the real profile or disabling network protection.

Recommendation: stop treating environment variables as a substitute for OS-level
account separation. For whole-client isolation, evaluate a separately managed VM with
no personal-profile sharing before requesting an installation. Native investigation
would require a source-matched runtime and verified fixture-local setup paths; its
command boundary alone still would not prove whole-client containment. No application
code, provider usage, account settings or machine configuration changed in this diagnosis.
