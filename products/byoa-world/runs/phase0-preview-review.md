# Review: Phase 0 local working preview

- Reviewer identity / role: independent reviewer `/root/phase0_qa`.
- Last material update: 2026-09-29.
- Candidate revision and contract/requirement revision: local application commit 748edf9, identified additionally by SHA-256 manifest below; authorized Phase 0 contract and all three PRDs revision 1, design and technical specification dated 2026-09-29.
- Verdict: PASS for local synthetic preview, combining independent implementation/automated review with attributed final orchestrator browser evidence. PARTIAL for overall Phase 0 live-agent feasibility.
- Acceptance criteria checked and evidence: independently ran `npm test` after initial builder corrections, 17 tests passed, zero failed. Read actual session, connection, review, persistence, HTTP and browser composition code. Tests exercise authorization, context separation, late results after stop, expiry/restart, revisions/canonical state, HTTP workflow, disk persistence, safe text rendering and feature import boundaries.
- Document/template comparison: the three PRDs preserve problem/outcome/scope, requirement behavior/exceptions/acceptance, and readiness fields. Design preserves users/journeys, design system, and adaptation/access/acceptance. Technical specification preserves interfaces/behavior, approach/dependencies, verification/readiness with useful cross-feature ownership additions. Connectivity research preserves discovery scope/findings/follow-up and explains its technical-source corpus. No unexplained material structural departure found.
- Preserved decisions checked: domain/feature folders with public index interfaces; one owner with no agent; one project, two explicitly simulated participants; synthetic data; human acceptance; no spatial UI, publication, or paid provider calls.
- Required fixes: none outstanding in reviewed code. Final activity session filtering and stopped proposal labeling corrections were inspected; the new current-session activity regression passes. Three initial findings were corrected: prior proposal versions were overwritten; stopped/failed badges could incorrectly read in-progress/ready; polling disconnect silently left stale state appearing current. History is now stored and inspectable, status precedence corrected, and offline state is explicit with disabled actions.
- Residual risk / verification limitations: local owner sessions are not production identity; another process under the same OS account is outside the boundary. JSON storage is local plaintext. Request changes records feedback and supports manual owner revision, not automatic agent re-execution. The two participants are deterministic fixtures, not live agents. Codex's separate successful CLI smoke proves one response path only; no runtime read isolation or integrated live collaboration is established. Claude adapter is gated and tested with fake HTTP responses only; no credential/allowance or paid request is present. Call allowance is process-local, resets at restart, and is not dollar metering. No universal non-leakage or remote deletion claim is supported.

## Detailed evidence

Independent automated run: `npm test` exited 0; 17 passed, 0 failed. The suite includes a noncooperative late connector that returns after stop, denied company vault and cross-agent-private retrieval, no private markers in stored/returned state, actor spoofing, missing identity/CSRF/Origin/JSON and unexpected Host, static traversal/secret-file requests, stale acceptance, canonical preservation across sessions, and mocked Claude request bounds. These checks prove the tested cases only.

The orchestrator separately reported rendered desktop and 390px mobile inspection and a browser flow through simulated contributions, feedback, owner revision, acceptance, new session and stop. This is attributed orchestration evidence, not an independent browser run by this reviewer. Final updated-server browser check confirmed current-session activity, stopped read-only state and ended-access footer; 390px layout had no horizontal overflow. Screenshots are linked in the verification report. Orchestrator owns acceptance.

The application code is separate from studio documentation. Repository publication/commit is not implied by this review.

## Candidate SHA-256 manifest

```text
668E610B3F0D32451083552E1FABD2946FE93BD5141075A0ADE1AC25C527AB09  .gitignore
FD19EE6FAFDEAD85FE4B56F418E1EB257417D0A5764907BE0C4505A883AEE1DE  package.json
8D1F01108337119931FDFCD0CF47B2892BD7AB7A70E3E0BFD271FDE077249C98  README.md
3D6E53237CFED6C8EED8F450650BE91231F82ADDFA4DBEE19B60878925422AA4  src/app/boundaries.test.js
1C90D81D903134472A37567FAA7CF222CA3CF4EAADE3578EF9457C45C0734B96  src/app/repository.js
E325F88C4B677B9BBF13E960477372ADEC4F148EE32CF814B34FB9A088D72F42  src/app/server.js
C9049294DDFBF627ECFD747C04D6B1FB7CA6CCBD1ABFB4C6502487CBB02A680E  src/app/server.test.js
89704B2520A178B939FC249FE73E264883A7677D9FBE463DD726E6B12E73C567  src/app/shell.html
1C30F110FF17693C8A5C4A5B81B51E205B77CAF45C8FC6E677D235456FB8EF29  src/app/start.js
179542B7ACC807CBB166F43265AA28FBF151CC3045A8D498CA67C59E52E7D6C2  src/app/style.css
F855A9CFD1A54E110EB9EE61A876F81780E73C5EE37BA7029133B2E7F137F585  src/app/ui.js
3952E39411886EA56A88D6468BA554D080BFCB8582EBEB218E782EE478C196BE  src/features/agents/connection/adapters/claude-api.js
6022ECEF633155C4851E662676339D33C78175D0F4A940691F7B41C0F92B6ACA  src/features/agents/connection/adapters/synthetic.js
316BDB476E8CF72A4850DEBA8E5C5905B7DE7BF570173336D9D16B68DD86E2AF  src/features/agents/connection/index.js
61F38E13DF815548C167B91AAC512C4729184A45695DEF4E442074762AE8B6BF  src/features/agents/connection/service.js
8980E07F560A8FB2E3FE339453787E47FCE960FF36181A760A54898E56707D19  src/features/agents/connection/tests/adapters.test.js
267B7576955A78A66A43FF0574A4F6067709665C9AE100F0256DFEB3AFACBB95  src/features/agents/connection/ui/panel.js
4742B4EA58D292F2D963F10AABD284D70C98EBAFE93FA2FE6A12898D35DFF9D7  src/features/collaboration/document-review/index.js
C131AC288F2342A8C63259E88965B273FC08A1248CEC841CFCA5D85A8956BD95  src/features/collaboration/document-review/service.js
E28F4B43A7A962913718B41B56B9C22E932B8A897CBB111704781F2F30D55992  src/features/collaboration/document-review/ui/panel.js
74BE100CDD4424F3936847615A79765584254B8F2327C4E1BDCA70E33FC2FF0D  src/features/work/session/context.js
F913559A5E9A94A670490CD572A12FE62B4CEA1F8746641A87DE92BDAF19308A  src/features/work/session/index.js
88DD0E980AA12361120A4BFF53333D5C3F92211EC9A3D37E78EB53049D1899BA  src/features/work/session/model.js
85BD09BAA31C28A74B9172B3CB7994259772DE92CBD3439DDAEAB64C8837F098  src/features/work/session/service.js
17AAF80FEA547A7844D1C699610C4E74CFCF9FDD98AA632E2A8419447B872063  src/features/work/session/tests/activity-scope.test.js
D2ED35166B34EDDC245C835618FE44812B46602AB06F8D4F6574B5A9655C4824  src/features/work/session/tests/session.test.js
ED71CAC74CFDCB9CAE704E78EBCBC9CDB53C032660C854339C03CBB79BCBCF93  src/features/work/session/ui/activity-scope.js
5FC1D601F2E95C85E2637B273334C8D3385496E3847AEDABF84F851CCAD718C3  src/features/work/session/ui/panel.js
D0E054C45B47EFB8EB8CBC6D503209ED0B0715DA6D425C2309601DDB7A916657  src/shared/dom.js
040DC2E2C9634756C11EF149C6037BAED2C0DA031850641546B8730AAAB000BA  src/shared/errors.js
```
