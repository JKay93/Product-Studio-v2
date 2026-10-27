<!-- studio {"id":"world:decision:product","scope":"world","type":"decision","status":"approved"} -->
# World product decisions

## WhatsApp and Telegram first — 2026-10-27 [world:req:messaging-integrations-first]

Latest user correction: no separate guided setup/wizard. Use the existing Flow canvas as the primary entry: select a node to open its configuration modal, choose an existing connection or create one inline in a credential modal, enter only provider-required fields, save/test and return to that node. Connections remains optional management, never a prerequisite detour. Keep operation/destination/message/input mapping in node settings. This supersedes the earlier proposed staged onboarding journey below; contextual field help is allowed but a wizard was not requested. n8n editor NodeCredentials.vue independently inspected: createNewCredential invokes uiStore.openNewCredential with the current node and closeOnSave, then assigns the created credential.

User subsequently accepts WhatsApp Business and Telegram bot account types and requires understandable third-party connection setup for nontechnical SME users, including explicit guidance on what to enter and where to obtain it. Current sample labels/scopes/mappings are insufficient as a connection journey. Telegram groups are supported by Bot API subject to permissions/privacy; WhatsApp group availability must be separately verified rather than assumed. Guided authentication, tested identity, destination choice and explicit message verification are the proposed next design; setup of World-managed developer apps/webhooks belongs to the platform. This is research/design direction, not a claim of implemented onboarding or authority to send test messages.

User corrects the general-integrations implementation: CRM, native phone alarm, Carousell and Chrono24 were examples of reusability, not instructions to build separate connector products; human-assisted marketplace catalogue entries are not needed. Minimum focus is real WhatsApp and Telegram connections/triggers/actions usable in arbitrary Flows. Keep reusable underlying mappings/reviews/receipts, and avoid exposing example-specific sample products as the main integration experience. Research n8n as reference without copying its code. Current installed build remains simulation; the correction does not itself verify live adapters or authorise provider spending/onboarding/sends. [Research and next slice](runs/2026-10-27-n8n-messaging-research.md). This supersedes the previous broad example-driven catalogue choice.

## Reusable multi-channel sales workflow — 2026-10-27 [world:req:multichannel-sales]

Subsequent user approval “Great, you can continue” authorises the bounded deterministic World-Next implementation: reusable sample profiles, supported operation catalogue, allowlisted field mappings, exact reviews, persisted local results, and World-owned unique stock/reservations/orders with human-assisted marketplace tasks. Generic message→CRM demonstrates reuse outside watches. This supersedes the research-only limit below for this local slice; it does not authorise live credentials/onboarding/outreach, providers/spending, production databases or unsupported marketplace/device operations. No Base44/Shopify dependency. Keep the fixed single-user sample distinct from production multi-user security and live integrations. [Implementation run](runs/2026-10-27-general-integrations.md).

User further requires general reusable integrations across businesses and unrelated journeys: e.g. incoming WhatsApp→configured Salesforce update, or incoming message→phone alarm. Provider connections, triggers, actions, typed field mappings, scopes/permissions and configuration belong to the shared integration layer; watch inventory/sales are template/domain usage, not hardcoded connector assumptions. Each customer supplies their own account, destination/record fields and rules within World isolation. Phone notification and native Clock alarm are separate capabilities; device integration/platform permission/support must be verified before offering an alarm action. These are architectural requirements/examples, not a claim that Salesforce/phone adapters exist or an instruction to implement before the user continues.

User wants enquiry→stock availability→viewing/order→confirmed payment→shipping→update all related listings→team checks as a reusable SME platform workflow. Watch dealer is a validation example using mainly private WhatsApp conversations, Telegram, Chrono24 and Carousell; Carousell matters to Singapore target users and Chrono24 can be optional. Latest user direction: World is the starting platform and authoritative system for inventory, customers, reservations, orders and workflow records; do not make Base44 integration or a Shopify bridge prerequisites. Merchant is expected to use World. Direct Carousell access remains a separate unresolved dependency; the Shopify app stays research-only, outside the chosen route. User currently authorises scoping and approved-integration/alternative research only; no implementation or external account applications/messages approved by that request. [Scope and findings](runs/2026-10-27-multichannel-sales-scope.md); remaining phases and implementation choices are proposals until selected.

## Autosave and Private/Company visibility — 2026-10-27 [world:req:knowledge-private-publication]

User correction replaces the earlier publishing/version-snapshot workflow: one current document autosaves with Private or Company visibility. Company means current World members and their authorised AI, never the internet; Company autosaves update shared content directly. No separate Publish/Update/View published lifecycle. Switching Private removes future shared discovery without deleting the document or erasing earlier replies. Private is the default; migration must protect unpublished private changes. User explicitly defers live other-member AI access tests until the AI phase; offline storage/projection/ownership tests remain required now. The current World Next preview is a fictional single-user sample and does not establish production authentication or live AI access. Existing Confluence-style table interactions remain approved. [Current implementation run](runs/2026-10-27-knowledge-company-visibility.md); [superseded publishing implementation](runs/2026-10-27-knowledge-autosave-publish.md).

## Visual Knowledge editing first — 2026-10-27 [world:req:visual-knowledge-editor]

After the Flow canvas work, the user explicitly moves Knowledge ahead of AI/Agent enhancement. Confluence's visual writing experience is the reference: write directly on the page, use consistent rich formatting, pinned controls, contextual selection tools and `/` insertion. Retain World's minimal professional design rather than copying Atlassian assets. Use established open-source editor infrastructure. This build preserves explicit version-checked saves and legacy Markdown, with canonical structured content for rich edits. Live collaboration, autosave/publication, folder/templates/imports and AI document generation remain separate scope; no paid editor service or model spending is authorised. [Editor run](runs/2026-10-27-knowledge-editor.md) records implementation and actual verification. Earlier priority order is superseded by this Knowledge-first choice.

## Guided manual Flow authoring — 2026-10-26 [world:req:guided-flow-authoring]

Delivered for controlled local use:23b92ba on codex/world-guided-flows-20261026,55tests/cleanCI40295279886, independentreview and actualtemplate/blank/fullsimulatedorder/canvas/mobile/focus checksPASS. This is bounded14operation linear authoring and fictional simulation. Productionengine/connectors/AIauthoring and arbitrarybranching remain separate. Newdefault3104/.next-guided/.sample-data-guided preserveold3103preview and data.

User approves one shared canvas for templates and blank flows. Templates prefill editable steps rather than introducing a separate editor; future Agent-created drafts must use the same structure. Selecting a step opens guided business-language settings beside the canvas. Show plain summaries, supported compatible next steps, named earlier information with sample values and precise missing configuration prompts. Provide fictional testing with inspectable inputs/outputs and explicit human review/wait gates; real sends/connections remain unavailable in this slice. Accepted minimal professional visual system remains. Keyboard and narrow-screen users can edit the same definition through equivalent numbered controls. Full production automation, branching/expressions and AI authoring are separate. [Current run](runs/2026-10-26-guided-flow-canvas.md).

## Flow-first separate rebuild — 2026-10-25 [world:req:flow-first-rebuild]

The user approves a separate local World-Next checkout using the existing verified JKay93/MyWorld repository on a dedicated branch. Preserve the original World as backup/reference, with its running services, saved data and financial state untouched. The zero-spend Pi/Mastra comparison recommends Pi for a simpler one-assistant harness while World retains deterministic transactional authority. The approved priority order is foundation, Flows, AI/Chat enhancement, Knowledge, then output tools/presentations/structured business records. Chat remains central, but enterprise automation is the primary outcome. No provider top-up, paid evaluation, migration or production release is implied.

Phase1 is authorised with a complete Designer-advised design/layout revamp: timeless, modern, professional, simple/minimal and consistently usable. Root delegates routine colours/layout choices within that brief. Build a clean isolated app and selectively port bounded valid contracts; do not carry the old multi-Agent service graph into the new foundation. Future features remain unavailable and explicitly labelled until implemented. [Delivery run](runs/2026-10-25-foundation-redesign.md) distinguishes offline library/sample proof from live AI and production capability. Historical decisions below remain evidence of the original platform rather than prerequisites to reproduce all of it in Phase1.

## SME outcomes and planning pause — 2026-10-23 [world:req:sme-outcome-focus]

The user identifies SMEs adopting AI and automating manual processes as World's audience. The largest outcome is completing a business process from A to B (for example receiving/processing an order and invoicing); producing documents from past documents/templates is another core journey. The user asks Orchestrator to lead a product walkthrough after pausing implementation/design expansion because the experience feels scattered. This authorises product clarification and evidence review, not a new build, UI redesign, provider spend or live execution. [First-release journeys](FIRST_RELEASE_JOURNEYS.md) records the current proposed focus, acceptance and gaps; a particular commercial sector, connector, pilot release boundary and detailed exclusions are still proposals/unselected. Existing functionality and its privacy/approval controls are preserved.

## Document intent and source honesty — 2026-10-17 [world:req:document-intent-sources]

User approved the combined fix after the actual SOP diagnosis. Clear create/draft document requests save directly as owner-private Knowledge drafts, opening the existing editor beside Chat; no redundant save confirmation. Conversation/explanation remains Chat with an optional secondary save action, not an automatic document. In-context document revisions update the intended item with recoverable versions/current edit locks. Publishing/sharing remains separately governed.

Complete internal source dependencies remain for authority/revocation/audit, while output citations represent actual referenced evidence and group by document with inspectable exact passages. Unreviewed previews stay visible/findable to users but are excluded from automatic Agent discovery unless the user explicitly selects/references them through existing permissions. Record the exact structural basis and distinguish declared template from prior-draft reuse; avoid claiming verified template adherence from retrieval alone. Resolve a clear antecedent directly; ask only when materially different applicable choices remain. Direct means concise; all presets share proportionate, progressive clarification rather than questionnaires. Tests must cover the actual multi-turn document journey; regression counts are not model-quality evidence. No new paid test authority or publication/access relaxation is implied.

## Combined G release [world:req:g-combined]

Approved2026-10-16: implement personality refinement, routines, a bounded linear workflow builder and integrated functional UI as one testable release, per runs/2026-10-16-g-implementation.md. Reuse current Claude/World runtime/accounting/graph/Knowledge and design system. Four generic presets remain Direct/Natural/Warm/Curious; Direct means concise, answer-first and sufficient necessary detail, never automatic bluntness/criticism. Do not reuse the user's personal Agent names in examples/tests. Manual/one-off/daily-weekly/selected committed Knowledge-version triggers, explicit scoped enable and limits, current authority, finite causal chains/duplicate protection and inspectable activity are in scope. No automatic provider-test spend, unattended enable or live-service interruption inferred from implementation approval. Full connectors/DAG marketplace/publicweb/newmodels/always-onhosting/rebrand remain deferred. This supersedes prior G deferrals within this accepted scope only.

## Document and tool delivery E–F [world:req:documents-tools-ef]

Approved 2026-10-16: deliver document/context continuity and the existing Knowledge editor alongside Chat together with bounded research/file tools and governed collaboration. Include the existing-chat navigation fix: immediate selection, separate drafts and quiet refresh instead of a global saving/loading lock. Reuse existing Knowledge, graph/Session permissions and financial boundaries. G (major UI changes, personality refinement and routines/IFTTT) remains separate. Claude is retained; this approval grants no new automated provider spending. Implementation and actual capability limits belong in the [delivery run](runs/2026-10-16-documents-tools-ef.md).

## Pi runtime integration [world:req:pi-runtime]

Approved2026-10-16: implement A–D as one core delivery, retaining Claude: diagnose failures, integrate Pi1.3.0 behind existing provider/World authority boundaries, replace rigid loop limits with durable finite budgets and unify typed work/questions/approvals. Preserve permissions/accounting/private context and immutable installed migrations; independently validate actual candidate before controlled activation. Editor/context overhaul, new tools/collaboration and UI/personality expansion remain separate. No automated paid calls inferred from normal-user cap exception. [Current run](runs/2026-10-16-pi-runtime-integration.md).

Delivery accepted2026-10-16: runtime35bdd8b reviewed, pushed and locally activated with additive073/074 and green735-case CI. Human-approved independent Builder cross-review applied only to disjoint changes for this run. The single authorised US$0.70 Claude smoke is consumed:3/3PASS at US$0.06314 accounted, original cap flag/ceiling restored, all charges retained. Unused allowance grants no additional automated tests. This check establishes narrow draft/revision/recall behavior, not overall parity.
## Agent personality and preview [world:req:agent-personality]

Approved2026-10-14: Direct is the default personality, with other starting personalities selectable. Consolidate personality controls with instant illustrative replies for Everyday chat/Feedback/Work request, and optional actual-model test chat using unsaved settings. Examples use no API; generated preview replies use ordinary API credits. Preview cannot execute tools or update Knowledge, work or memory. Saving deliberately applies the selected personality; Discard leaves the working Agent unchanged. Keep private owner context/memory separate from owner-authorised portable character; World/Session guidance contextualizes delivery without rewriting Agent Self or permissions. Reuse the existing design system; broader UI redesign stays paused. [Implementation run](runs/2026-10-14-agent-personality-implementation.md).

## Task diagnostics and recovery [world:req:run-diagnostics]

Approved2026-10-14: add inspectable Agent task records and interruption/concurrency reliability checks while broader UI redesign is paused. Access records through the existing Chat Work item details, with a scoped technical export. Preserve permissions and document privacy; diagnostics contain bounded execution metadata, not raw prompts, private reasoning or credentials. Show unknown measurements and unsettled spending honestly, including retries. Use isolated synthetic faults to verify recovery without paid provider calls; these checks establish mechanics, not model output parity. Implementation/evidence: [run](runs/2026-10-14-run-diagnostics-reliability.md).

## Evaluation dispatch safety [world:req:evaluation-dispatch-safety]

Approved2026-10-10: after reported Codex Cyber Abuse warning/rejected appeal, exclude
blocked harmful-generation probes from live evaluation, require content-bound reviewed
eligibility, stop future dispatch on policy blocks, and use harmless local simulated
provider/tool outcomes for enforcement checks. No rephrasing/replay/provider fallback
to bypass a safeguard. Historical evidence remains unchanged. Simulations establish
mechanism behavior only; excluded high-risk model refusal/parity coverage stays untested
pending applicable provider confirmation. This does not guarantee freedom from account
restrictions. No new provider, spending, runtime permissions or production authority.
Run:2026-10-10-evaluation-safeguards.

## Request capacity and conversational decisions [world:req:request-capacity]

Approved2026-10-10: raise World's assembled-input operational ceiling to32000tokens
under the same cumulative/Session/run financial caps;4096output and bounded calls/
retrievals remain. This budget is separate from provider physical context capacity.
Ordinary exploration uses conversational clarification, not a generalized intake
card form; material concrete work choices can use cards before or during execution.
Preserve grouped settled answers and distinct authorization. No silent context
stripping, automatic replay or provider change. Further model-aware compaction and
broader testing capacity remain future work. Run:2026-10-10-request-ceiling-clarification.

## Autonomous document workflow [world:req:autonomous-document-workflow]

Approved2026-10-10: context-first material clarification, one question in one place,
coherent same-task continuation, template discovery/resolution/structural compliance
and exact provenance. Clear document/execution intent can create or update permitted
owner-private working drafts without a second Save confirmation; brainstorming alone
must not autosave. This supersedes prior deliberate-save-only behaviour for these
operations. Existing documents are considered before creating duplicates; current
document scope bounds updates. Publication/approval remains separately authorized.
Declared requirements, selections and conventions outrank inferred names/versions;
material ambiguity warrants a concrete chooser, not a generic interview. Unknown
facts/decisions remain labelled assumptions/TBDs. Preserve owner-private owned-Agent
direct-audience access, source taint, immutable history, stale-write protection and
sanitized truthful failure recovery. Save modal/visual redesign remains deferred.
Implementation/verification state: runs/2026-10-10-autonomous-document-workflow.md.

## Knowledge visual editing and collaboration [world:req:knowledge-rich-collaboration]

Approved2026-10-09: Knowledge should feel like a Confluence/Notion document editor
for SMEs. Read formatted saved Agent Markdown, edit visually in place with a toolbar,
slash insertion and optional Markdown shortcuts. Authorized editors collaborate with
named presence/cursors, autosave and reconnection; history remains recoverable. Existing
creation permissions remain; folders grant nothing. Reference recording approved
2026-10-09 supersedes manager-wide draft visibility: document owner is the authentic
first creation actor. Unpublished documents and working edits are owner-private,
usable by that owner's personally owned Agents only in an owner-private audience.
Other managers/Agents and shared Sessions cannot receive private contents through
history, outputs, citations or tools. Published documents are readable by permitted
World participants; explicit publication updates that head. Two states only; the
proposed intermediate category was discarded. Restore must not silently publish. Optional Save to Knowledge
from Chat remains deliberate and unpublished by default; no automatic chat saving.
Controlled-development implementation and verification are recorded in the
rich-collaboration run. Owner clients see their private working draft live; member
and historical/source views retain permitted saved versions. Latest durable draft
is available to the owner's Agents without a manual Save or publication step.
Organization assets remain World-owned on departure; document-private access does
not authorize exporting organization material to portable personal memory.
Production readiness is separate.

## Natural clarification [world:req:natural-clarification]

Approved2026-10-09: use normal conversational judgment rather than mechanical
READY/PARTIALLY READY/BLOCKED categories or a mandatory generic-template response.
Answer/draft when sensible; clarify when a missing detail materially changes the
result, grouping essentials and avoiding needless preference interviews. Explicit
template requests may use labelled placeholders. Preserve supplied answers and the
same task on resume; do not repeat settled questions or dispatch duplicate continuation
jobs. Ordinary clarification remains conversational; question cards serve useful
choices. Authorization remains separate. Existing question expiry/stop and current
authority/source/history/privacy/financial controls remain. No guaranteed model parity.

## Native capabilities and Knowledge creation [world:req:native-capability-bundle]

Approved2026-10-09: expand the existing runtime with current-capability tools,
on-demand original conversation history and Knowledge recovery, bounded multi-step
execution and readable progress. Agents may propose Knowledge documents; exact
authenticated human review saves an unpublished first version in the current World.
Publishing remains a separate existing action. Agent creation retains its previous
review semantics. Existing saved graph delegation and Session discussion remain;
temporary anonymous helpers and peer handoffs are deferred unless separately chosen.
No extra provider, credentials, arbitrary host tools or automatic permission grants.
This is controlled development functionality, not new model-quality parity evidence.

Approved2026-10-09: completed nonempty Agent replies and saved outputs expose an
optional Save to Knowledge action. It opens an editable title/body/folder draft in
the current World, preserves exact Markdown, and uses existing permissions and
unpublished defaults. Opening/cancelling never saves or calls a model. Explicit
Knowledge creation requests retain the native reviewed proposal flow; ordinary
conversation never automatically creates documents.


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

Agent creation through chat authorized2026-10-09 following Rakazo source review:
implement persistent saved Agents using World governance and existing ownership.
User explicitly selected Agent creation first, Knowledge writing next. Initial
native tool prepares a bounded Agent draft for exact authenticated Create review;
new identity does not auto-run, acquire resource grants, enter a graph/Session or
inherit private memory. Personal-origin creation stays personal; organization-origin
creation stays in the same World under owner/admin authority. No wholesale runtime
replacement or new provider. See runs/2026-10-09-agent-creation-tool.md for checks.

Approved on 2026-10-05: build the Knowledge source library before model connection. Personal documents remain user-owned/private; organization documents remain World-owned on departure. Organization owners/admins manage those documents, members read only explicitly published World documents, and unpublished drafts now follow the superseding 2026-10-09 document-owner-private decision above. Folders organize content without granting access. Existing authored text-note permissions remain unchanged.

Knowledge contains user-supplied reference sources, with inspectable exact content versions and source locations. Memory contains preferences and lessons affecting Agent behavior; importing a file does not enable automatic learning, export or model execution. Start with text/TXT/Markdown, then bounded selectable-text PDFs. Scanned-file OCR and external connectors are later work. Retain versions/archive during development; permanent purge/retention policy is a separate pre-pilot decision. The initial phase begins with an interactive mockup for visual assessment.

### Notifications and live document updates [world:req:notifications-live-documents]

User direction on 2026-10-05: invitations live in Notifications; the World switcher switches/creates Worlds. Reload is temporary. Future authorized viewers see another user's changes as that user edits, not only upon saving or manual refresh. Live edit visibility is separate from edit permission and immutable saved history. Current access must govern every delivery; revoked access stops further updates. This direction does not itself implement notification delivery, live editing, concurrent-edit merging or new infrastructure; these remain bounded future work.

## Flow reference boundary [world:req:flow-reference-boundary]

User direction on 2026-10-18: use n8n as an ideas/reference source for World’s IFTTT-style business flows. Do not extract/copy its code. This authorises reference research, not embedding n8n or implementing new flows. Preserve independent World design and existing governance; proposed architecture and scope require subsequent implementation authority. See runs/2026-10-18-n8n-reference-research.md.

## First business Flows implementation [world:req:business-flows]

Subsequent implementation approval2026-10-18: user accepted the complete task plan and a new main-navigation Flows tab. This supersedes the reference-only implementation limit above for this build; the prohibition on copying n8n code/templates/assets remains. Deliver a reusable enquiry → requirements → quotation → exact customer acceptance → order → vendors → delivery → invoice journey. Use deterministic versioned definitions and durable per-order executions for ordinary work, with bounded existing Agents for genuinely AI-dependent steps. Flow definitions, saved Agent networks and finite Agent jobs are separate concepts; starting a business flow must not require an orchestrator.

The first interface is a flow list, step forms with a supporting canvas, and execution/business-record history. Published versions are immutable and existing runs retain their version unless explicitly migrated; permissions and exact action authority are rechecked when work resumes. Separate customer acceptance from staff approval, use validated integer money, preserve issued invoices and linked credit notes, deduplicate callbacks, and show waiting/recovery/failure honestly. An Agent may help create/edit a disabled flow draft; it cannot enable sending or grant credentials through prose.

Test mode must simulate external actions regardless of configured credentials. Real Google selected-file access, merchant WhatsApp and mail require actual app/account setup. InvoiceNow transmission additionally requires an accredited provider and merchant onboarding; an invoice/PDF or synthetic receipt is not submission. This approval authorises independent implementation and offline verification, not new API spending, external sends, account onboarding, managed credentials or interruption of current testing. Current evidence and remaining prerequisites: [Flows implementation](runs/2026-10-18-flows-implementation.md).

## Canvas-first Flow editor [world:req:flow-canvas-editor]

User correction2026-10-18 supersedes the earlier supporting-map editor choice: opening a Flow should show a large visual canvas as the main builder, with node addition and visual connections, a node configuration inspector, and execution inspection. The Flow list remains the entry page. Retain World governance and existing deterministic engine; research n8n's integration ecosystem as an architectural reference without copying code/assets/templates. This does not authorise fake working integrations, unrestricted code/HTTP, hundreds of new connectors, API spending or external account onboarding. See runs/2026-10-18-flow-canvas-redesign.md.

## Collaboration pool [world:req:collaboration-pool]

User-facing terminology approved19October2026: call the collaboration pool **Swarm**. This naming decision retains existing communication/authority boundaries. Technical IDs and legacy records need no destructive rename. Visible-copy integration is pending; implementation evidence below still uses pool terminology.

Approved19October2026: replace mandatory Agent hierarchy/graph authoring with explicit collaboration availability and permissioned pool selection; keep direct-use and Flow canvas. Automatic capability profiles distinguish declarations, factual demonstrated work and verified quality; counts do not establish mastery. Use code/preferences/current-scope continuity and predictable ties; no separate model routing/résumé calls. Preserve all permission/audience/approval/accounting bounds and legacy-run semantics; no silent broad pool enablement. Adaptive strategy learning/decentralised orchestration remains future work requiring evidence. Details [current run](runs/2026-10-19-collaboration-pool.md).

Accepted implementation: incoming consent is World-scoped/default-off and grants no access; an off Agent remains usable directly and may delegate outward under existing policies. Private preferences remain requester/World scoped. Code ranks a bounded eligible shortlist using preference, same-session continuity, declared role/description relevance and stable ties; the model chooses whether and whom to delegate to in its existing request. Factual résumé coverage is bounded/recent and incomplete historically; quality remains unknown without actual verification. Legacy graph-v1 work stays pinned, and new pool-v1 work freezes the initial pool while checking current opt-out/authority throughout execution. Borrowed/shared native delegation requires the existing proven common audience; this change does not weaken that boundary.

Approved27October2026: WhatsApp Business and Telegram bot integrations use actual editable Flow nodes. Click node for settings and inline add/select credential in the same modal, returning selected connection without losing draft. No setup wizard or mandatory Connections detour. Remove unnecessary example CRM/alarm/marketplace/sales surfaces while preserving records. Current delivery covers encrypted local credential storage, explicit account verification and offline tested transport/simulation; live incoming activation and sending remain separate unverified work. See runs/2026-10-27-messaging-canvas.md.

Approved27October2026: every Flow node uses one shared centred configuration modal, consistent name/purpose controls, spacing, named outputs and footer actions. Messaging nodes retain inline credentials within that same shell; legacy side inspector is removed. Preserve operation-specific fields/mappings/branch/reorder behavior and saved Flow/Knowledge state. See runs/2026-10-27-unified-node-settings.md.
