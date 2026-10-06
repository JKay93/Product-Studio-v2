<!-- studio {"id":"world:decision:product","scope":"world","type":"decision","status":"approved"} -->
# World product decisions

These are the approved product choices from the user discussion, recorded on 2026-10-03. They apply to World. They describe intended behavior, not completed implementation.

## Audience and first workflow [world:req:audience-workflow]

Serve nontechnical SME owners and people who want useful AI agents and automation without technical setup. The first workflow is pasted meeting notes, editable action items, assigned internal tasks, and follow-up drafts. Recording and external sending are outside the initial workflow.

## Identity and ownership [world:req:identity-ownership]

Agent means the persistent digital extension of its owner. Universe means the platform mechanisms that enforce boundaries. A World is a persistent environment and trust boundary. A Session defines a particular instance of work.

On signup or login, a user without an Agent is asked to create a primary personal Agent. Additional Agents are allowed. Organizations may own their own Agents too. Joining or leaving an organization does not transfer ownership of a personal Agent. The Agent keeps its identity when the underlying model changes.

A user and personal Agent may participate in multiple Worlds, such as an employer and a separate startup. Their work remains isolated by World and Session. A Passport identifies an Agent; access still requires grants.

## Collaboration and approval [world:req:collaboration-approval]

Users can create an orchestrator and inspect or change its linked sub-agents. A colleague's Agent can participate through delegated access while retaining its identity and ownership. The borrowing relationship and activity must also be visible to its owner.

Standing access is explicit, scoped, revocable permission for repeated delegation without asking for access on every request. Consequential actions require approval by default. An authorized user may disable approval for a specific Agent, World and action scope, with a clear danger warning, visible indicator, audit trail, and easy restoration. This cannot override Universe rules, World restrictions, another owner's limits, or Session grants.

Phase 7 approved implementation scope: internal-task creation policy is exact to actor, World, Session and effect Agent, with a current policy revision captured when work starts. Initially only a personally owned Agent in the user's personal World or an organization-owned Agent managed by that World's owner/admin may waive approval. Borrowing permission alone never grants permission to waive another owner's approval. Owners see borrowed usage metadata (actor, World/Session, status, attempt and time), without prompts, outputs, sources or unrelated private configuration. Delegation uses the same initiating actor throughout; hierarchy edges never grant authority. Provider execution is finite, while retained results and pending proposals remain available subject to current authority. Fresh manual approval rechecks exact payload, lineage and sources; automatic effects remain execution-bounded. See the [Phase 7 plan](PHASE_7_COLLABORATION_PLAN.md) and current run for implementation evidence.

### Policy changes during work [world:req:policy-change-timing]

User accepted on 2026-10-06: completed actions retain the policy revision effective when authorized/executed. Starting a Session or task does not freeze its rules for later actions. Subsequent protected actions must satisfy current applicable authority and approval requirements; policy notifications improve responsiveness but do not replace server enforcement. Already dispatched external operations may finish under their original authorization, with cancellation dependent on the service; transmitted context and completed effects cannot be recalled. Preserve audit history rather than retroactively judging completed effects under a later rule. This is approved intended behavior, not proof of a generalized live-policy implementation.

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

## Release priorities [world:req:release-priorities]

The first usable release must demonstrate personal continuity, standing colleague access, authorized portable learning and safe departure, using one provider. The full first-release sequence is in [Roadmap](ROADMAP.md).

Multiple providers follow next, then memory import. External Agents means agents running outside World, such as another vendor's runtime; interoperability is a later, low-priority expansion. Broad SaaS integrations, billing details and production-scale infrastructure are not initial requirements. Import formats, exact retention periods and provider selection remain undecided.

## Knowledge library [world:req:knowledge-library]

Approved on 2026-10-05: build the Knowledge source library before model connection. Personal documents remain user-owned/private; organization documents remain World-owned on departure. Organization owners/admins manage those documents, members read only explicitly published World documents, and unpublished drafts are visible only to authorized owner/admin. Folders organize content without granting access. Existing authored text-note permissions remain unchanged.

Knowledge contains user-supplied reference sources, with inspectable exact content versions and source locations. Memory contains preferences and lessons affecting Agent behavior; importing a file does not enable automatic learning, export or model execution. Start with text/TXT/Markdown, then bounded selectable-text PDFs. Scanned-file OCR and external connectors are later work. Retain versions/archive during development; permanent purge/retention policy is a separate pre-pilot decision. The initial phase begins with an interactive mockup for visual assessment.

### Notifications and live document updates [world:req:notifications-live-documents]

User direction on 2026-10-05: invitations live in Notifications; the World switcher switches/creates Worlds. Reload is temporary. Future authorized viewers see another user's changes as that user edits, not only upon saving or manual refresh. Live edit visibility is separate from edit permission and immutable saved history. Current access must govern every delivery; revoked access stops further updates. This direction does not itself implement notification delivery, live editing, concurrent-edit merging or new infrastructure; these remain bounded future work.
