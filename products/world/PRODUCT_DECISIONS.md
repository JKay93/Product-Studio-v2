<!-- studio {"id":"world:decision:product","scope":"world","type":"decision","status":"approved"} -->
# World product decisions

## Conversational quality and localisation [world:req:quality-localisation]

Approved2026-10-08: improve the full Agent behaviour against the frozen Codex
comparison, not safety alone. Prioritise scenario passes before efficiency tuning;
still measure latency, token use and cost. Preserve before evidence and fixed
rubrics, report regressions and independently test unseen scenarios. The user
authorises higher bounded root evaluation usage for the enhancement; this does not
expand external action, data-access or production authority.

Store country/region independently from reply language as explicit user preferences.
Use country/region for relevant local information/services/rules; conversational
style/Singlish, IP/VPN and timezone do not establish it. Travel statements are topical
context, not settings mutations or language-switch commands. An explicitly requested
country may guide that answer without changing saved preferences. Reply language
remains the chosen language unless the user explicitly asks otherwise. Critical
local contacts need verified source-backed details; unknown location must not default
to US services. Preferences remain account-private and contextual retrieval respects
the initiating actor and existing authority boundaries.

## Bot quality acceptance [world:req:bot-quality-parity]

Approved2026-10-08: the user requires on-par-or-better bot results against ChatGPT or
Codex, with no negotiated lowering of the acceptance bar. Use versioned inputs and
criteria fixed before execution; retain first failures, and keep unavailable or
uncertain outcomes out of passes. Report complete-scenario quality separately from
individual criteria, runtime controls, latency and token/cost measurements. A finite
sample does not establish universal parity; model/runtime configuration and actual
comparison access must be disclosed. Evaluation does not itself authorize production
behaviour changes. Evidence: comprehensive-agent-evaluation run2026-10-08.

## Conversational defaults versus learned preferences [world:req:conversation-learning-boundary]

Approved2026-10-08: baseline greeting, clarification, useful drafting and question-only
restraint belongs in default Agent working guidance. Newly inferred learning must be
specific to the user or supported work, rather than asking users to adopt generic
platform behaviour. This preserves existing deliberate adoption/current-authority
controls and historical user data. Model attribution alone cannot prove a proposed
lesson is genuinely user-specific; deterministic validation and semantic evaluation
have distinct limits. Rich output display is a renderer capability and never authority.

## Agent team Sessions and useful execution [world:req:agent-session-progress]

Approved2026-10-08: user confirmed both pre-video fixes and subsequent Session
changes for implementation. Sessions bring selected Agent teammates together;
default responder removes compulsorymentions, identity mentions optionally override,
explicit team discussion is finite and a lead is optional. Persistent Agent graphs
remain reusable collaboration configuration, never implicit Session admission.
Human invitations are deferred for new room creation; existing human records and
access stay intact. Questions expire/withdraw with their work, wait without model
calls, and resume explicitly with current authority. Execution-first defaults allow
useful preparation/placeholders while preserving factual accuracy and exact action
approval. Namespace ownership and permission intersections remain authoritative.
Implementation evidence belongs to runs/2026-10-08-agent-session-experience.md;
approved behavior is not a claim of completed acceptance.

These are the approved product choices from the user discussion, recorded on 2026-10-03. They apply to World. They describe intended behavior, not completed implementation.

## Audience and first workflow [world:req:audience-workflow]

Serve nontechnical SME owners and people who want useful AI agents and automation without technical setup. The first workflow is pasted meeting notes, editable action items, assigned internal tasks, and follow-up drafts. Recording and external sending are outside the initial workflow.

## Identity and ownership [world:req:identity-ownership]

Agent means the persistent digital extension of its owner. Universe means the platform mechanisms that enforce boundaries. A World is a persistent environment and trust boundary. A Session defines a particular instance of work.

On signup or login, a user without an Agent is asked to create a primary personal Agent. Additional Agents are allowed. Organizations may own their own Agents too. Joining or leaving an organization does not transfer ownership of a personal Agent. The Agent keeps its identity when the underlying model changes.

A user and personal Agent may participate in multiple Worlds, such as an employer and a separate startup. Their work remains isolated by World and Session. A Passport identifies an Agent; access still requires grants.

## Collaboration and approval [world:req:collaboration-approval]

Graph/profile implementation approved2026-10-07: saved collaboration links may be reciprocal and share the same Agent across multiple relationships; they are available pathways, never permanent recursive ownership or permission grants. A run compiles its reachable saved network into a bounded acyclic assignment structure with one participant per Agent identity. Repeated/ancestor targets become explicit nonblocking existing-participant references, not recursive new jobs. Model-driven request/reply capabilities must be distinguished from references and cannot be implied by a static graph. Groups organize the directory only. Existing three-total-layer/6children/2concurrent/deadline/retry/budget and current-authority limits remain. User requested actual loop tests; acceptance evidence lives in [the graph/profile run](runs/2026-10-07-agent-graph-implementation.md).

Users can create an orchestrator and inspect or change its linked sub-agents. A colleague's Agent can participate through delegated access while retaining its identity and ownership. The borrowing relationship and activity must also be visible to its owner.

Standing access is explicit, scoped, revocable permission for repeated delegation without asking for access on every request. Consequential actions require approval by default. An authorized user may disable approval for a specific Agent, World and action scope, with a clear danger warning, visible indicator, audit trail, and easy restoration. This cannot override Universe rules, World restrictions, another owner's limits, or Session grants.

Phase 7 approved implementation scope: internal-task creation policy is exact to actor, World, Session and effect Agent, with a current policy revision captured when work starts. Initially only a personally owned Agent in the user's personal World or an organization-owned Agent managed by that World's owner/admin may waive approval. Borrowing permission alone never grants permission to waive another owner's approval. Owners see borrowed usage metadata (actor, World/Session, status, attempt and time), without prompts, outputs, sources or unrelated private configuration. Delegation uses the same initiating actor throughout; hierarchy edges never grant authority. Provider execution is finite, while retained results and pending proposals remain available subject to current authority. Fresh manual approval rechecks exact payload, lineage and sources; automatic effects remain execution-bounded. See the [Phase 7 plan](PHASE_7_COLLABORATION_PLAN.md) and current run for implementation evidence.

### Agent-owner restrictions and approval [world:req:agent-owner-controls]

Approved2026-10-06: separate working guidance (personality, tone, methods/skills), enforced owner restrictions and private personal memory. First owner restrictions reuse World-specific participation/borrowing consent, allow an owner delegation veto, and allow mandatory approval for supported consequential internal-task actions. World/Session permissiveness cannot loosen an owner restriction; owner permissiveness cannot loosen World/Universe/Session restrictions. Preserve current settings and individual approval defaults. Learning or imported prose cannot silently change permissions. Organization-owned Agent controls belong to its owning World owner/admin. An authorized person requesting borrowed-Agent work approves its exact actions; the Agent owner's consent governs use, without requiring that owner to approve every colleague task. A separate "require my approval personally" queue is deferred. Working guidance can adapt to task-specific output instructions; it is not a grant or hard permission rule.

Implementation accepted for controlled development2026-10-06: see [Agent owner rules](AGENT_OWNER_RULES.md) for `owner-v1` defaults, immutable root/child policy binding, outgoing delegation and contributing-team approval floors, private authoring, conflict cases and verification. Complete Self guidance composition/learning and a personal-owner approval queue remain deferred.

### Policy changes during work [world:req:policy-change-timing]

User accepted on 2026-10-06: completed actions retain the policy revision effective when authorized/executed. Starting a Session or task does not freeze its rules for later actions. Subsequent protected actions must satisfy current applicable authority and approval requirements; policy notifications improve responsiveness but do not replace server enforcement. Already dispatched external operations may finish under their original authorization, with cancellation dependent on the service; transmitted context and completed effects cannot be recalled. Preserve audit history rather than retroactively judging completed effects under a later rule. This is approved intended behavior, not proof of a generalized live-policy implementation.

## Session work contract and timed guest access [world:req:session-controls]

Approved2026-10-06 after Session proposal discussion: a persistent Session may contain multiple bounded execution runs. Purpose/output guidance stays distinct from authenticated permission settings. Optional Agent/resource/action restrictions, stricter execution limits, cumulative Session spending and open/pause/close behavior narrow existing authority and preserve legacy defaults. Session owner or destination World owner/admin manages policy without acquiring new scoped-waiver authority. Pause blocks automation while retaining authorized review/manual approval; close blocks new effects and retains authorized history. Reopen/off-on and permission extension must not revive stale jobs. Exact requester approval and current World/owner/Universe restrictions remain effective. Ordinary retry may renew its execution window within current Session/attempt/budget constraints; team deadlines remain immutable.

An Agent owned in World B may visit World A through explicit source-owner consent and destination authorization; identity and ownership remain unchanged. World A rules govern the destination work, applicable owner constraints remain, and World B local procedures are not automatically imported. Source-World knowledge/private memory and destination confidential work do not cross boundaries merely through participation. No second source-owner task approval queue is introduced. Full external-runtime/Passport interoperability and learning remain deferred.

Time gates belong to grants: broader World participation and narrower Session access have explicit windows, with earliest applicable expiry governing subsequent retrieval/execution/effects. Alternative valid grants remain alternative authority. Session details show effective access-until status; Permissions manages broader guest authority. Standing means reusable within scope/window, not permanent. Extending access requires explicit current authority, audit and stale-work protection. New foreign organization guest windows are finite; World defaults are seven days and maximum30days within the Universe30-day ceiling. Existing personal participation defaults are preserved.

An optional overall Session work deadline is distinct from the per-run execution timer and access windows. It stops new automation and manual effects at expiry; completed proposals remain reviewable after a run timer expires only while current access and the overall deadline permit. Closed or expired work cannot be revived by reopen/extension, including a deadline originally unset then tightened and expired. Current source restrictions also apply to retained output; durable identity remains available for authorized recovery.

The initial separate-owner request uses an Agent ID deliberately shared by its owner. Destination management verifies only safe identity/source metadata and admits the visit; source management consents through outgoing visits without joining or reading destination private Sessions. The ID itself grants nothing. Source issuer authority loss revokes consent, and role restoration alone cannot restore it. Current implemented definitions and proof/limits: [Session rules](SESSION_RULES.md) and its run; full Passport interoperability remains deferred.

## World harness configuration [world:req:world-harness-configuration]

Approved on 2026-10-06: World harnesses have two authoring paths. Initially provide shared safe defaults across Worlds, configurable by authorized World owners/admins through settings toggles and scoped options (for example, allowing external Agents). Later allow enterprises to author their own World harnesses within the platform. Enterprise authoring is deferred, but the foundation must accommodate it without replacing the core policy/enforcement model. A configurable external-Agent policy does not itself implement external-runtime interoperability.

Both paths remain subject to Universe hard boundaries, Agent-owner constraints and valid Session grants. Settings changes do not grant an administrator authority over another Agent's private Self or another World. Enterprise language, schema, editor and import formats remain undecided. This records intended behavior and extension requirements, not implemented settings or enterprise capabilities.

Delegated implementation accepted2026-10-06: first controls are colleague personal-Agent use (default on), bounded delegation (default on), and a mandatory internal-task approval floor (default off). They restrict existing authority and preserve current approval defaults. Borrowing excludes the actor's own personal Agent and organization-owned Agents, which retain their separate permission paths. A real settings change conservatively invalidates all active World work; turning it back cannot revive old jobs. Grant records, saved graphs and completed receipts remain. Settings are implemented under the shared versioned definitions; enterprise authoring remains deferred. [World policy rules](WORLD_POLICY_RULES.md) contain the conflict table and current proof.

### Combined harness metrics [world:req:harness-success-metrics]

User-approved on 2026-10-06: assess the combined Universe/World/Agent/Session harness by Output Accuracy %, end-to-end latency, and token/cost efficiency. Freeze task-specific evaluation rubrics and declare the dataset/denominator; test-pass rates or deterministic security fixtures do not establish semantic model accuracy. Latency covers accepted request to usable root result, including queue/model/children/retries, with approval waiting shown separately. Efficiency includes all attempts/children and distinguishes reliable usage estimates from uncertain held charges and provider invoices. Numerical targets remain undecided. See UNIVERSE_FOUNDATION_REPORT.md for current measurements and limits.

## Personal and organizational knowledge [world:req:knowledge-continuity]

Personal knowledge, memory and private chats remain confidential. Organizations can inspect effective configuration and work within their World; membership does not expose unrelated private knowledge or harness settings.

World knowledge includes organizational documents, conversations and derived learning. It stays within that World by default. The organization must permit selected learning to leave, and the user must accept it. General rules such as “when X happens, do Y” may still reveal confidential processes and cannot be treated as automatically portable.

Initial personal continuity includes preferences, communication style and working habits, with the ability to inspect and correct memory. On departure, permitted personal continuity remains. Organizational grants, pending approvals and queued work are revoked; late results are rejected. Organizational chats and activity remain available to authorized organizational reviewers. Private personal chats remain private.

### Continuous learning and adoption review [world:req:continuous-learning-adoption]

User confirmed on 2026-10-07: learning operates continuously during work through feedback, proposed lessons, deliberate adoption, future application and correction. A popup or notification asks the appropriate authorized person whether to adopt a proposed lesson. Ignoring a suggestion does not adopt it or interrupt ordinary work. Personal learning is reviewed by its owner; organizational learning retains World publication authority, and portable organizational learning still requires organization release plus recipient acceptance. Authorized portability can occur during employment; departure governs access/continuity rather than triggering learning. The Phase 8 draft specifies the nonblocking notice, review and exact-version/current-authority checks; these controls are not implemented yet, and the clarification does not authorize the whole runtime build.

## Release priorities [world:req:release-priorities]

Subsequent implementation approval2026-10-07: user said “Proceed” after the reviewed Phase 8 plan refinement. The whole plan and recommended defaults are accepted: Suggest/Off, deliberate inferred adoption, selected exact named-World preference sharing, distinct authorized World publication and organization release/recipient acceptance, correction with immutable revisions and immediate stop-use with retained history. Implementation and whole-phase proof are in progress under existing authority and cumulative US$4, with no production, automatic inferred adoption or purge. The preceding clarification-only authorization limit is historical, not a restriction on this approved run.

The first usable release must demonstrate personal continuity, standing colleague access, authorized portable learning and safe departure, using one provider. The full first-release sequence is in [Roadmap](ROADMAP.md).

Multiple providers follow next, then memory import. External Agents means agents running outside World, such as another vendor's runtime; interoperability is a later, low-priority expansion. Broad SaaS integrations, billing details and production-scale infrastructure are not initial requirements. Import formats, exact retention periods and provider selection remain undecided.

## Knowledge library [world:req:knowledge-library]

Approved on 2026-10-05: build the Knowledge source library before model connection. Personal documents remain user-owned/private; organization documents remain World-owned on departure. Organization owners/admins manage those documents, members read only explicitly published World documents, and unpublished drafts are visible only to authorized owner/admin. Folders organize content without granting access. Existing authored text-note permissions remain unchanged.

Knowledge contains user-supplied reference sources, with inspectable exact content versions and source locations. Memory contains preferences and lessons affecting Agent behavior; importing a file does not enable automatic learning, export or model execution. Start with text/TXT/Markdown, then bounded selectable-text PDFs. Scanned-file OCR and external connectors are later work. Retain versions/archive during development; permanent purge/retention policy is a separate pre-pilot decision. The initial phase begins with an interactive mockup for visual assessment.

### Notifications and live document updates [world:req:notifications-live-documents]

User direction on 2026-10-05: invitations live in Notifications; the World switcher switches/creates Worlds. Reload is temporary. Future authorized viewers see another user's changes as that user edits, not only upon saving or manual refresh. Live edit visibility is separate from edit permission and immutable saved history. Current access must govern every delivery; revoked access stops further updates. This direction does not itself implement notification delivery, live editing, concurrent-edit merging or new infrastructure; these remain bounded future work.
