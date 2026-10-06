<!-- studio {"id":"world:research:harness-runtimes","scope":"world","type":"document","status":"draft","links":[{"relation":"reference","target":"world:decision:product"}]} -->
# World harness runtime research and governance proposal

World should retain Agent=Self, Universe=Physics, World=Jurisdiction and Session=Situation/Purpose. The recommended design separates instruction ownership, action authority and information handling. Runtime instructions help a model choose useful work; independent application controls determine which actions and information flows may occur.

This is a proposal for discussion, not approved policy or an implementation specification. Research accessed primary documentation and selected public source on 2026-10-06. It compares OpenClaw, Nous Hermes Agent, Claude Code, Codex, OpenHands, LangGraph/LangChain, OpenAI Agents SDK, Google ADK, CrewAI and Microsoft AutoGen/Agent Framework. Current documentation and mutable main-branch code are observations, not release-pinned security certification or executed runtime tests. Existing Phase7 acceptance remains separate; Phase8 is unstarted.

## Runtime mechanisms and their limits [world:req:harness-research-runtime-mechanisms]

### OpenClaw

OpenClaw separates persistent workspace files such as AGENTS, SOUL, USER and IDENTITY from runtime configuration. Workspace is the Agent's home and working directory, not a sandbox. Its assembled prompt includes operating guidance and persona context; those files do not independently establish executable permission. [Workspace](https://docs.openclaw.ai/concepts/agent-workspace), [system prompt](https://docs.openclaw.ai/concepts/system-prompt).

Tool policies pass through several restriction stages. Earlier tool denials cannot be restored by a later allow; sandbox configuration follows a different merge model in which Agent settings can override global defaults. A removed write tool does not create a read-only environment if an available shell can still write. Approval configuration and sandbox enforcement must therefore be inspected separately. [Multi-agent sandbox and tools](https://docs.openclaw.ai/tools/multi-agent-sandbox-tools), [execution approvals](https://docs.openclaw.ai/tools/exec-approvals).

Memory is persisted and selectively retrieved; current memory-core provenance tracks origins for ingestion and curated writes and carries contributing origins through consolidation. Forget removes identifiable artifacts and prevents selected sessions from later re-ingestion, but does not erase original transcripts, every freeform edit or external copies. These are plugin-specific mechanics, not a universal confidentiality/export policy. [Memory](https://docs.openclaw.ai/concepts/memory), [provenance and deletion](https://docs.openclaw.ai/concepts/memory-provenance).

Delegation has child sessions, tool restrictions and host-owned lineage/audience checks. Current bootstrap code restricts which self/context files children automatically receive; sharing an Agent identity does not mean sharing the full owner's context. Documented target/shared authentication fallback also requires attention before treating children as separately isolated owners. [Nested sub-agents](https://docs.openclaw.ai/tools/subagents/nesting), [sub-agent tool policy](https://docs.openclaw.ai/tools/subagents/tool-policy), [bootstrap source](https://raw.githubusercontent.com/openclaw/openclaw/main/src/agents/workspace.ts).

OpenClaw's stated Gateway trust boundary is a single operator or mutually trusted team, not adversarial tenants sharing one Gateway. External-content handling and tool limits mitigate injection without making the model infallible. World must supply stronger tenant and owner isolation than this deployment assumption. [Security model](https://docs.openclaw.ai/gateway/security), [prompt injection](https://docs.openclaw.ai/gateway/security/prompt-injection).

**Adapt:** persistent Self, selective retrieval, source lineage and current delegation checks. **Do not assume:** workspace equals jurisdiction, shared credentials preserve owner isolation, or bootstrap prose is an enforceable policy resolver.

### Nous Hermes Agent

Hermes separates home-level SOUL identity from project context discovery. Its context-file resolver supports ordered file families and AGENTS directory overrides; selected project text becomes prompt context. That discovery precedence is not a universal rule for organizational authority. [Context files](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/website/docs/user-guide/features/context-files.md), [prompt builder](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/agent/prompt_builder.py).

Its bounded MEMORY/USER notes are persistent but injected as a frozen snapshot at session start; prior sessions are separately searchable. Memory changes can persist before the active prompt baseline refreshes. Optional write approval exists, while ordinary built-in learning is not universally approval-required. Version-specific memory code also contains an allow path when its write-approval module cannot be imported; a configured gate must not be treated as fail-closed without inspecting the actual path. [Memory](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md), [memory tool](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/tools/memory_tool.py).

Command review modes, content scanners and allowlists reduce risk. Hermes' own security policy calls in-process screening heuristic and makes OS isolation the containment boundary against an adversarial model. Terminal sandboxing does not automatically contain host-side MCP, plugins or other execution paths. Within an adapter, admitted callers are mutually trusted; Session IDs are routing handles, not permission proofs. [User security guidance](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/security.md), [security policy](https://github.com/NousResearch/hermes-agent/blob/main/SECURITY.md).

Delegated Agents use fresh task context and skip automatic personal context/memory loading. Child toolsets are narrowed, with explicit role and MCP-inheritance exceptions that make a blanket subset claim inaccurate. Blocking a named memory tool alone also does not prove another writable execution path cannot alter its files. [Delegate implementation](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/tools/delegate_tool.py), [child toolsets](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/tools/delegate_tool_toolsets.py).

**Adapt:** small inspectable personal memory, project-context separation, focused children and exact-entry change approval. **Do not assume:** an Agent home provides World isolation, cached memory is current authority, or automatic learning implies permitted portability.

### Claude Code

Claude Code loads personal, project, local and scoped instruction files. Its documentation explicitly distinguishes these contextual instructions from enforced settings and warns that contradictory prose can lead to inconsistent choice. Automatic memory supports continuity but is not organizational authorization. [Memory and instruction loading](https://code.claude.com/docs/en/memory).

Permissions use deny, ask, then allow resolution; an allow rule cannot create an exception to a matching deny. Managed settings and sandbox restrictions operate separately from persona/style text. Shell sandbox escape/retry behaviour depends on configuration and approval mode; a promise to remain in a workspace is weaker than an enforced boundary. [Permissions](https://code.claude.com/docs/en/permissions), [sandboxing](https://code.claude.com/docs/en/sandboxing).

Sub-agents have separate contexts, tool selections and permission modes, with documented inheritance behaviour dependent on the parent mode. Checking only a child prompt is insufficient to establish its actual authority. Injection defences include permission and network controls, while command-text matching and real network isolation are distinct. [Sub-agents](https://code.claude.com/docs/en/sub-agents), [security](https://code.claude.com/docs/en/security).

**Adapt:** separate editable guidance from managed enforcement; retain each rule's source and effective setting. **Avoid:** loading conflicting files and expecting the model to reliably invent the intended precedence.

### Codex

Codex discovers global and project AGENTS files, directory-specific overrides and configured fallback names. Its documented prompt merge gives more local guidance precedence. This is useful for project defaults; it does not mean a local document can legitimately waive tenant permissions. [AGENTS instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

Sandboxing limits filesystem/network operations; approval and auto-review govern eligible escalations and side-effecting calls separately. Auto-review adds model work and is not performed on every action already inside the sandbox. Its reviewer can examine risk and authorization, but it does not replace the sandbox. [Sandboxing](https://learn.chatgpt.com/docs/sandboxing), [approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security).

**Adapt:** enforced operating boundaries, explicit escalation and targeted review. **Do not copy:** filesystem proximity as the authority resolver for independent Agent owners and organizations. A sandboxed edit can still violate an instruction to provide a plan only.

### OpenHands

OpenHands SDK separates contextual skills from action confirmation. Skills can be always loaded, triggered by context/path or progressively disclosed; this offers an efficient way to retrieve relevant guidance without putting every procedure in every prompt. [Skills and context](https://docs.openhands.dev/sdk/guides/skill).

Confirmation policies include always, never and risk-based confirmation. Security analyzers classify risk; the confirmation policy acts on that classification. Current documentation explicitly limits the protection: analyzers and patterns do not constitute a complete injection solution or replace a sandbox. A custom security-policy template is itself model guidance. [Security and action confirmation](https://docs.openhands.dev/sdk/guides/security).

The project's injection analysis also explains that container isolation still allows harm through secrets or external connectivity available inside the container. Network and service policy must constrain those paths. [Injection mitigation](https://www.openhands.dev/blog/mitigating-prompt-injection-attacks-in-software-agents).

**Adapt:** proportional action review and progressive guidance retrieval. **Avoid:** equating low predicted risk with authorization, or assuming a container protects every credential and external service.

### LangGraph and LangChain

LangGraph provides checkpointed state and interrupts; LangChain's human-review middleware checks configured tool calls and can pause for approve/edit/reject/respond decisions. This provides durable approval orchestration rather than four sovereign instruction domains. The application defines the policy and authenticates the human decision. [Human review](https://docs.langchain.com/oss/python/langchain/human-in-the-loop), [persistence](https://docs.langchain.com/oss/python/langgraph/persistence).

Interrupted nodes can restart from their beginning. Effects before an interrupt can therefore repeat; documentation recommends idempotence or separating effects from the interrupted work. A restored checkpoint proves previous state, not that its grants are still valid. [Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts).

**Adapt:** durable pauses, resumable work and effect idempotence. **World-specific requirement:** revalidate current grants, source visibility, policy and exact approved arguments before effects after resume.

### OpenAI Agents SDK

The SDK distinguishes a specialist taking over through handoff from a manager using another Agent as a bounded tool. Agent configuration can carry instructions and tools; application state supports continuation. Neither orchestration pattern alone defines our World/owner authority. [Orchestration](https://developers.openai.com/api/docs/guides/agents/orchestration), [results and state](https://developers.openai.com/api/docs/guides/agents/results).

Official OpenAI documentation states that chain input guardrails run for the first Agent, output guardrails for the final-output Agent, and tool guardrails on the function tools to which they are attached. It supports pending approvals and resumed run state. Parallel input screening can reduce latency but allows speculative Agent work; blocking screening prevents that trade-off. Checks for every relevant effect must be placed at the tool boundary rather than inferred from a root guardrail. Codex product auto-review is not automatically inherited by SDK applications. [Guardrails and approvals](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals).

**Adapt:** narrow specialists and explicit pending-action approval. **Avoid:** assuming an SDK guardrail covers every descendant, hosted tool or external execution path.

### Google Agent Development Kit

ADK separates Session, user, application and invocation-temporary state using distinct scopes. Those names control storage lifetime/sharing, not World tenant access by themselves. State services still require appropriate application authorization. [State scopes](https://adk.dev/sessions/state/).

Its security guidance distinguishes Agent service-account authority from acting on behalf of the controlling user. A shared service account alone is unsuitable when users have different access. It recommends constrained tools, external authorization, callbacks/plugins and isolation rather than relying solely on instructions. [Safety and security](https://adk.dev/safety/).

Action confirmation can use static or conditional requirements and structured human decisions. The current confirmation page lists DatabaseSessionService and VertexAiSessionService as unsupported for that feature, which prevents assuming every documented persistence/approval combination is available. [Action confirmation](https://adk.dev/tools-custom/confirmation/).

**Adapt:** explicit state lifetimes and controlling-user attribution. **Avoid:** treating a state namespace or Agent service account as permission for every participant.

### CrewAI

CrewAI describes tasks with expected output, context, tools and optional human review. Task guardrails validate output using functions or model-described criteria, with bounded retries. Its task-level human-input option reviews the final answer; that is not equivalent to approval before every tool effect. Flows can persist and resume state under a stable flow identity. [Tasks](https://docs.crewai.com/v1.15.23/en/concepts/tasks), [flows](https://docs.crewai.com/v1.15.23/en/concepts/flows).

**Adapt:** observable acceptance criteria and bounded repair. **Avoid:** treating output validation or an assigned role as an access-control system. Tool implementation still needs its own authorization.

### Microsoft AutoGen and Agent Framework

AutoGen demonstrates tool approval with an intervention handler before a tool request executes. Human conversation feedback and tool interception are separate mechanisms; neither establishes sovereign personal/World memory boundaries. Microsoft's migration guidance documents Agent Framework counterparts rather than making all versions interchangeable. [AutoGen tool intervention](https://microsoft.github.io/autogen/stable/user-guide/core-user-guide/cookbook/tool-use-with-intervention.html), [migration](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen/).

Agent Framework wraps approval-required functions and, by default, binds local approval replies to pending requests in the same AgentSession; this binding can be explicitly disabled. Applications remain responsible for authentication and data-flow security. [Tool approval](https://learn.microsoft.com/en-us/agent-framework/agents/tools/tool-approval), [Agent safety](https://learn.microsoft.com/en-us/agent-framework/concepts/agents/safety).

Its experimental, currently Python-only FIDES middleware is especially relevant: it tracks integrity separately from confidentiality, propagates restrictive labels and checks sensitive calls. External labels are restriction-only by default. An explicit trusted-MCP-server option can instead accept complete server labels authoritatively and relax local labels; that trust choice needs separate evaluation. Current limitations include conservative propagation across a run and coarse approval UX. This offers a concrete information-flow pattern, not a finished guarantee or required dependency for World. [FIDES security](https://learn.microsoft.com/en-us/agent-framework/agents/security).

**Adapt:** same-request approvals and host-owned origin/confidentiality labels. **Avoid:** letting a summary, external label or approval toggle automatically declassify World information.

## Evaluation of the supplied governance model [world:req:harness-research-model-evaluation]

The supplied model correctly assigns domains instead of creating four competing system prompts. Universe owns enforcement mechanics, World owns jurisdiction, Agent retains Self, and Session defines this work. Provider message priority still exists when we compile context; it must not become the authority algorithm.

Six corrections make the proposal actionable:

1. **Include Session in effective authority.** Its grants, purpose, resources, time and budget narrow an existing authorized envelope. It cannot create authority merely by claiming access. Explicit Grants and memberships must establish positive permission; the absence of a prohibition is insufficient.
2. **Namespace ownership is necessary but insufficient.** World and owner legitimately both constrain email, model use and data handling. A verified issuer, affected resource/principal, scope, rule type and permitted override are needed. A document's chosen namespace does not authenticate it. Schema validation proves shape, not the issuer's identity or permission to perform the action.
3. **Separate mandates, constraints, defaults and preferences.** Restrictions intersect; minimum budgets combine; mandatory approvals accumulate; scoped preferences can replace defaults. Applying most-restrictive-wins to every preference makes ordinary work unnecessarily rigid.
4. **Keep mechanics separate from policy choices.** Universe defines how approval, classification and grants work. World and Agent owner choose valid policies within that mechanism. Universe may enforce platform hard stops but should not invent company workflows or permanently rewrite Self.
5. **Distinguish output behaviour from persistent identity.** A formal customer reply does not rewrite the Agent's personality. Conversely, an owner prohibition marked mandatory cannot be silently downgraded to a preference merely because a World wants otherwise. An incompatible mandate can make work infeasible.
6. **Make persistent changes explicit.** A Session must not silently rewrite Self or policy. It may request a separate, authorized and audited memory/configuration change. Portable organizational learning retains the approved requirement for organization permission and user acceptance; generalization alone does not establish safety.

Passport authenticates which Agent is participating; Session records the purpose and participants; Grants establish permitted resource/actions. Purpose is an authenticated Session claim, not proof of authority and not an intrinsic permanent Passport field. Entry into a World and access to a resource remain separate decisions.

## Proposed ownership and conflict table [world:req:harness-research-conflict-table]

These are proposed resolution rules, not newly adopted product policy.

| Concern | Who sets it | Conflict handling | Where it is checked |
| --- | --- | --- | --- |
| Identity, authentication and Passport | Universe mechanics; verified owner supplies permitted identity fields | Prompt claims cannot replace verified identity or ownership | Admission and authenticated operations |
| World membership and resource access | World/resource authority issues explicit grants under Universe framework | Require valid positive permission and every applicable constraint; otherwise deny | Retrieval and every resource action |
| Agent-owner restrictions | Agent owner | World or Session cannot loosen a mandatory owner boundary; another authority cannot impersonate owner consent | Policy resolver and action gateway |
| World confidentiality and isolation | World classification under Universe boundary mechanics | Personal preference, summary or Session cannot declassify data; authorized release is separate | Retrieval, derivation, output, export and tool destinations |
| Company workflow or required production stack | World policy administrator | Binding requirement applies to that World work; Agent preference is unchanged outside it; incompatible owner mandate requires resolution | Context compilation and applicable validation |
| Personality and personal working defaults | Agent owner | Preserve Self; temporarily adapt compatible output behaviour to an authorized task requirement | Context compilation; persistent writes require separate authority |
| Task purpose, participants and deliverable | Authorized Session requester | Specific task instruction refines defaults but cannot waive mandatory constraints or expand the approved outcome | Session creation/change and work/effect checks |
| Approval requirements | Universe mechanism; World, owner and authorized Session principals set requirements | All applicable mandatory approvals must be satisfied; opt-out affects only rules that its issuer may waive | Exact proposed action before execution |
| Tools, models and destinations | Universe supported surface; World policy; owner limits; Session grants | Usable set is the authorized intersection; missing compatible tools/models makes that path unavailable | Context/tool exposure and actual dispatch |
| Budget and expiry | Each authorized budget/grant authority | Lowest applicable cap/expiry bounds execution; retries and children share accounting | Reservation, dispatch and recovery |
| Personal memory | Agent owner within Universe memory boundary | World cannot inspect/rewrite unrelated private memory; Session learning is a separate typed operation | Memory retrieval/write |
| Portable learning from a World | Relevant organization authority and Agent owner/user | Both required permissions; retain origins and confidentiality; pending classification cannot become portable by default | Candidate review and export/promotion |
| Delegation to another Agent | Parent's existing delegation authority plus recipient eligibility | Child gets a narrowed grant under the parent envelope, not owner impersonation; approved separate authority requires a distinct recorded grant | Child creation and every child action |
| Documents, websites, tool results and child findings | Their verified source supplies data, not governing authority | Do not promote embedded commands, claimed approvals or rewritten labels into policy | Context admission and before effects/persistent writes |
| Genuine unresolved conflict | Relevant rule owners, not the model alone | Block affected action; explain conflicting requirements; continue separable work; ask only an authorized decision maker | Resolver result and user explanation |
| Authorized exception | Issuer empowered to amend that exact policy | Explicit scope, revision, rationale, expiry and audit; cannot waive another principal's rule or a Universe hard stop | Separate policy-change operation; then reevaluate |

### Different rule types need different combination rules

- **Permissions:** valid grants and current eligibility, constrained by Universe, World, Agent owner and Session. Unknown or invalid authority denies the affected operation.
- **Prohibitions:** any applicable mandatory prohibition blocks the action until its own authorized issuer changes it, where changes are permitted.
- **Approvals:** collect required approvers. Approval permits the exact reviewed action within authority; it cannot grant a forbidden capability.
- **Allowlists, limits and lifetimes:** intersect allowed sets and apply the tightest applicable limits. Empty sets are a visible conflict, not a reason to widen access.
- **Requirements:** verify feasibility together. World requires TypeScript while owner forbids TypeScript is a conflict; World requires TypeScript while owner prefers Python is an ordinary adaptation.
- **Preferences:** authorized task-specific output preference replaces a flexible World default, which replaces the Agent fallback for this task. Mandatory World requirements remain binding. Specificity applies only within an issuer's authority and declared override rules.

Natural-language principles cannot all be mechanically proved. Promote an important enforceable rule into a structured policy and validate the observable outcome; retain semantic guidance and proportionate review for requirements that cannot be expressed that way. The model may flag a potential conflict, but cannot resolve it by declaring its own authority.

## Proposed handling of malicious instructions [world:req:harness-research-malicious-instructions]

Separate two questions: can the content issue instructions, and where may its information go? A published company document can be legitimate evidence while containing attacker-written text. A harmless-looking summary may still contain confidential organizational facts.

1. Authenticate the source and policy issuer outside the model. Ordinary documents and memory do not become governance merely because they contain a header or claim to be approved. World policies are published through an authorized, revisioned policy operation.
2. Keep reference content and child findings identifiable as data. Passing them through a summary must preserve their origins and restrictions; summarization is not trust promotion.
3. Authorize tool arguments and destinations with current grants before effects. Use narrow service operations; a general shell or browser is a broad capability and needs independent isolation/egress controls if introduced later.
4. Keep secrets and policy storage beyond the execution surface that untrusted Agent-generated code can mutate. Do not rely on hiding one tool when another route grants equivalent access.
5. Treat memory/configuration/export writes as separate effect classes. A malicious instruction must not become durable Self, portable learning or a new approval rule through automatic extraction.
6. Use detection and model review as supplementary checks. Suspicious-content classification can miss attacks and falsely flag ordinary text. Do not block an entire useful document just because it discusses instructions; deny its authority and constrain the resulting actions.
7. Validate output/data release too. A tool gateway alone cannot prevent disclosure through a chat response after private information has been put in the wrong audience's context. Avoid supplying that context and preserve restrictions on derived results.
8. Recheck on resume, delegation, source changes and grant revocation. Restore task intent from durable state without restoring expired authority from a prompt snapshot.

Suggested resolver outcomes are **allow**, **needs approval**, **deny**, and **conflict needs clarification**. The explanation identifies the blocking policy and available permitted alternative, while withholding another owner's private policy content where necessary. A policy service failure denies the dependent effect; independent safe work may continue.

## Recommended operating flow [world:req:harness-research-operating-flow]

Agent A authenticates by Passport; World X validates membership/admission; an authorized Session records purpose, participants, resources and duration. Universe resolves current policy/grants, then compiles a small relevant instruction set and permitted context for the model. The model proposes work; tools and persistent changes pass through current authorization and required approval. Children inherit a narrowed task/authority envelope. Results retain source restrictions and are delivered only to eligible recipients. Completion may propose learning, but memory promotion/export follows a separate authorized path.

A Session is a situation/purpose, not simply a chat or discussion/planning mode. It may contain multiple turns, Agents and runs. The work authorization inside that Session still distinguishes researching an option from implementing it. Orchestrator autonomy covers methods within the approved goal, not expansion to the next goal.

## Efficiency and validation [world:req:harness-research-efficiency-validation]

Resolve structured restrictions with code rather than an extra model conversation on every step. Cache static policy interpretation with revision tracking; revalidate dynamic grants, revocation, time and spend at the relevant effect. Retrieve only applicable procedures/skills and permitted memory. Explain material conflicts once and reuse a still-valid scoped approval; changed scope/payload or relevant policy requires reevaluation.

Test both protection and usefulness. Proposed cases include unauthorized payroll access, conflicting email approvals, incompatible required models/stack, a document claiming Universe authority, instructions laundered through a child summary, malicious memory promotion, changed arguments after approval, revoked access during a pause, duplicate effects on resume, compaction preserving task boundaries and legitimate routine work completing without repeated prompts. Measure false denials, unnecessary human questions, policy latency, tokens and task completion quality alongside blocked violations.

Start by agreeing the table's distinction between mandatory constraints and flexible preferences. Then inspect the existing Phase7 runtime against those agreed rules and make a bounded implementation plan. Do not replace the accepted runtime, add a new framework dependency or launch Phase8 solely on the basis of this research.
