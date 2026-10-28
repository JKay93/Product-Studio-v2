<!-- studio {"id":"world:rebuild-blueprint:20261029","scope":"world","type":"plan","status":"proposed"} -->
# World rebuild blueprint

29 October 2026. PM, Designer and Technical Specialist independently planned and discussed the rebuild; Orchestrator consolidated the recommendations. The user has chosen the simpler product direction. Runtime, first capability, navigation and visual direction below are proposed build choices, not installed software or validated market advantages.

**Build one assistant that performs useful company work through reusable tools, supported by durable workflows and company Knowledge.** Begin with a complete quotation-preparation journey. Establish a distinctive working interface through comparative compositions before filling it with features. Preserve both old local reference folders and start implementation in a new checkout.

## Product and first outcome

World combines conversation, company information and supported business actions. A person should not need to create agents, wire an agent hierarchy or learn a canvas to get their first result. Multiple workers may be an internal option later when evidence justifies them.

The first capability should be **Prepare quotation**: use an enquiry, company template and approved rate facts to produce an editable, reviewed and downloadable quotation. This is the beginning of the existing enquiry-to-invoice journey and a concrete instance of document creation from company templates. It avoids making document work and automation separate products.

The first release ends at an accepted draft/export. It does not claim the entire enquiry-to-invoice lifecycle is automated. Sending, recording customer acceptance, fulfilment and invoicing are later extensions using the same job and capability contracts. A non-quotation template can test reuse without becoming a second product release.

First-use scenario: paste an enquiry, select the company template and price source, and ask World to prepare the quotation. It opens a persistent job, drafts what is possible, identifies missing required facts and calculates totals from supplied structured inputs. The document can be edited directly. Return later to find the same current draft, unresolved facts and next action. Repeated use reuses the selected company method instead of asking the setup questions again.

Normal conversation remains normal conversation. A greeting or a question about how something works does not automatically launch a workflow or create a job. The assistant can handle open discussion without forcing it into a quotation form.

## Harness responsibilities

The harness is the machinery surrounding the model that makes work useful, controlled and recoverable. It must have clear ownership boundaries rather than a growing collection of overlapping agent loops.

| Layer | Owns | Must not be mistaken for |
| --- | --- | --- |
| Model runtime | Native tool loop, provider transport and streamed model output | Company authority or definitive business facts |
| Application harness | Identity, scoped context, tool admission, conversational behaviour and usage limits | Another custom provider/tool loop |
| Durable workflow | Typed execution steps, checkpoints, waits, timeouts and controlled restart | A guarantee of exactly-once external effects |
| Business state and authority | Accepted facts, revisions, permissions, approvals, command receipts and outcomes | A free-form conversation summary |
| Product interface | Editing, questions, decisions, real progress and recovery | A transcript of internal orchestration |

### Runtime recommendation

Technical recommends **Mastra’s ordinary Agent and native Workflows**, retaining Claude behind a provider adapter initially. The reason is explicit business steps and persisted suspension, not a claim of better model answers. Mastra documents typed workflows and stored suspend/resume snapshots. [Workflow structure](https://mastra.ai/docs/workflows/overview), [suspension and resumption](https://mastra.ai/docs/workflows/suspend-and-resume)

This revisits the earlier Pi recommendation: that comparison assumed World’s existing SQL execution boundary would remain. A fresh build removes that particular reason to prefer Pi. The previous real-library, zero-spend tests remain useful historical evidence; they do not establish conversational quality or current production recovery.

Pi is still credible. Pi agent-core is a small agent-loop foundation, while **Pi Durable now explicitly supplies checkpointed tasks, safe-replay declarations and atomic transcript/application-document commits**. Its release describes it as experimental and currently one process owns a store. We must not justify Mastra by incorrectly claiming Pi has no durability. The recommendation is a fit judgment, subject to a small real-library build check and dependency review. [Pi Durable](https://earendil.com/posts/pi-durable/)

Avoid Mastra’s beta durable-agent wrapper in the first slice. Its docs warn recovery can repeat model and tool calls. Native workflows also use an advisory lease that does not fence application writes; execution can repeat the current step after some failures. Application command deduplication and version checks remain mandatory. [Durable-agent limitations](https://mastra.ai/docs/harness/durable-agents), [native workflow recovery limits](https://mastra.ai/docs/workflows/overview)

Use one TypeScript application, one worker and one transactional database service to start. Orchestrator recommends PostgreSQL for the first persisted application slice, locally and later in cloud, to exercise the intended transaction and concurrency semantics early. A separate SQLite fixture is fine for experiments, not evidence of cloud concurrency. Keep framework snapshots and application-owned domain records logically separate even when stored in the same database service. Local development must use a fresh database and artifact directory, with no inherited credentials or old application data. Mastra’s production guidance also identifies PostgreSQL as a useful default. [Storage guidance](https://mastra.ai/docs/storage)

Do not add a second workflow engine, distributed queue or multi-agent layer without a demonstrated need. Pin and review dependency versions/licences before installation. No performance claim follows from the framework choice.

### Behaviour and context

Use the native model/tool interaction. Do not generate an answer in one system and independently turn the same uncertainty into cards in another. Tool results, questions and job events should be explicit typed records; the UI must not infer actions or completion from prose.

The assistant receives a scoped context bundle: current request, relevant conversation, accepted job facts, permitted source excerpts, applicable company rules, available capabilities and usage limits. It retrieves more as needed rather than loading every document into every reply. Summaries are navigational aids; accepted facts, outstanding decisions and original sources remain durable and retrievable.

Inspect available context before asking. Ask a focused question when a missing fact materially affects the next sound decision. Proceed with independent sections where possible. A missing price must not stop drafting scope; it must prevent a falsely complete total. Ambiguous template selection is resolved from explicit selection, metadata or established convention; materially different remaining choices require clarification.

Use ordinary conversation for ordinary clarification. Structured questions help when a genuine choice needs explicit capture; they should not duplicate a question already asked in the reply. Tie them to a job/version with an owner, resolved/cancelled/expired state and next action. Expiry never means consent. Stopping work resolves or closes obsolete prompts and prevents repeated waiting loops.

Clarification collects facts. Accepting a draft records a quality decision. Authorisation permits a protected action. They are distinct. Downloading an ordinary permitted draft does not require an invented approval. A company may explicitly require quotation signoff. Future external sending has a separate payload-bound authorisation.

Keep response style concise by default. Saved language and region preferences are independent; travel or location must not silently change language. Local commercial facts come from company sources or explicit inputs, not invented assumptions. Attach source references only to facts actually supported by those sources; label the template used separately from factual evidence. Conversation context should not flood the source list.

### State and execution boundaries

Persist companies, actors, conversations, jobs, accepted inputs, source revisions, capability definitions, artifact revisions, pending decisions, commands, outcomes and usage. Company scope comes from the authenticated session, never a model-supplied identifier. Access is checked before retrieval and again on opening/exporting a source. Private and company-visible material must remain distinct; an uploaded document is not automatically company policy.

Serialize turns within a conversation and protect job changes with versions/claims. Independent jobs may run concurrently. Each command transaction checks authority and expected version, stores a unique command receipt, updates business state and writes an outbox event. Workflow checkpoints refer to command receipts; they cannot grant authority independently. Repeated commands return the recorded result; conflicting input under the same key fails.

Artifact edits create immutable revisions behind the editable latest version. Protected action approval binds the exact artifact/input revision, recipient, destination, attachments, relevant rules, approver and expiry. Material changes invalidate it. Recheck authority immediately before execution; an old approval cannot bypass revocation.

Bound tool steps, model attempts, deadlines and spend. Transient provider retries are separate from retrying external effects. Ordinary cancellation preserves completed work and stops future dispatch where possible; it cannot undo an effect already sent. A missing response after an external attempt becomes **outcome unknown** until reconciled. Never turn an uncertain send into an automatic resend.

Keep an accurate cost ledger across attempts and worker calls. Development starts with providers/network denied and scripted model responses. No automated live call is authorised by this plan; later semantic checks need a fresh bounded allowance. Local checks cannot prove model quality, real latency or live delivery reliability.

## Tools and workflows

A capability tool is the supported contract the assistant invokes, such as `quotation.prepare@1`. Its workflow may contain interpretation/drafting steps as well as deterministic operations. Predictable steps should run without an extra model decision between each one.

For example, inputs can reference the enquiry, exact template and rate revisions, plus the expected job version. Trusted context supplies company, actor and policy. Output includes the job, saved artifact revision, validation issues, missing facts and actual state. The model does not supply its own permission or declare validation passed.

| Core pillar | What to build first |
| --- | --- |
| Structured inputs and provenance | Typed fields, source/version references, required versus optional inputs and explicit uncertainty |
| Deterministic correctness | Field validation, decimal monetary calculations, company-supplied rate/discount/terms rules and reproducible rendering |
| Controlled decisions and actions | Separate clarification, draft review and protected effects; apply current authority at execution |
| Durable follow-through | Checkpoints, cancellation, ownership, command deduplication and honest failure/unknown states |
| Reusable company methods | Versioned template/source/rule configuration, examples and readable execution steps |

Developers provide safe primitives and adapters. Company owners configure templates, data mappings, rules and roles through concrete choices. The assistant may propose a method, but cannot silently activate executable code or grant itself new access. Reuse a reviewed capability on the next request.

Manual invocation comes first. Later, a message or schedule can trigger the same capability; the trigger never adds permissions. Connection setup belongs beside the action requiring it. A supported connector must have a secure credential lifecycle, a test mode, explicit allowed resources and a recovery strategy. Begin with one justified adapter, not an integration catalogue.

No advanced canvas is necessary for the first usable slice. Tools can show inputs, boundaries, steps and results with a sample test. A visual editor can be introduced later if real authoring tasks require it. Existing flow definitions, validators and mapping code are reference candidates; the business owner need not assemble them node by node.

## Design direction

The likely previous failure was composition and behaviour being left to generic screen generation. A token sheet standardises ingredients; it does not decide the focal object, information hierarchy, interruption model or next useful action. UI PRO MAX or any component generator cannot supply those product decisions for us. This is a diagnosis of reported symptoms, not a new audit of every old screen.

Proposed navigation is **Work, Knowledge, Tools**, with company administration and connections in settings or relevant tool configuration. One assistant is available across the application. Tools should use business capability names, not framework terminology.

Work begins with a small request composer and compact **Needs you, In progress, Recently finished** rows. A job shows its latest editable result as the principal surface, with contextual conversation alongside it. Pure conversations can use the main surface without creating a document. Requests, missing fields and downloads must not require hunting through the transcript.

Use Things’ distinction between captured work and attention, Linear’s predictable controls and quick inspection, and a strong document editor’s focus on the content as interaction references. These are references, not appearance specifications or proof our proposal is usable. [Things guide](https://culturedcode.com/things/support/articles/6378414/), [Linear custom views and inspection](https://linear.app/docs/custom-views), [Linear interface rationale](https://linear.app/now/behind-the-latest-design-refresh)

### Compare two distinct compositions

| | Editorial workroom | Dispatch desk |
| --- | --- | --- |
| Structure | Narrow navigation, generous document surface, optional conversation margin | Slim navigation, persistent queue, compact split inspector |
| Typography | Source Serif 4 document headings; Source Sans 3 controls/body; approximately16px body and28–32px document title | IBM Plex Sans interface; Plex Mono for identifiers/amounts only; approximately14–15px body and20–24px title |
| Rhythm | 8px base,24–32px region spacing,52px work rows | 4px base,12–20px region spacing,40–44px rows |
| Surfaces | Neutral paper, charcoal text, fine separators, document whitespace | Deep navigation, pale inspection surface, aligned ruled rows |
| Controls | Standard40px controls,6px radius, one clear primary action and contextual editing controls | More compact filters and explicit row actions,4px radius, keyboard navigation |
| Intended feel | Authored, calm and substantial | Precise, brisk and operational |

Designer provisionally prefers Editorial workroom for drafting and reviewing. The recommendation is not permission to generate another cream card grid. Dispatch desk must differ in information density and composition, not just colour. Neither should use gradients, sparkle imagery, decorative dashboards, fake activity or cards around every item. Fonts, colour and final density remain design choices to assess visually.

### How to achieve and verify the design

Create both compositions with identical realistic content: a work queue, quotation with a missing rate, a revised result and an interrupted job. Include a long document as a layout stress test. Compare expanded/collapsed navigation and responsive compositions before committing to one system. Then build one small interactive path using fixture data.

Derive tokens and reusable components from the chosen composition: type hierarchy, spacing, columns, surfaces, borders, radii, icons, input states, focus, toolbars, dialogs, tables, banners and status wording. A familiar accessible primitive library can supply focus/menu/dialog mechanics; it should not dictate the whole layout. Review actual rendered states rather than treating shared CSS as proof of integration.

Planned checks: long titles and tables; edited/stale/incomplete documents; keyboard editing and review; focus return; opaque overlays; visible affordances for opening/closing rails; preserved selection/scroll; 200% zoom; mobile with one active pane and clear navigation; contrast; non-colour status cues; reduced motion; safe loading/error/empty states. These are future acceptance checks, not passed tests.

## Build sequence and acceptance

| Slice | Concrete result | Gate before expanding |
| --- | --- | --- |
| 1 Design proof and contracts | Two comparable compositions; one fictional quotation journey; typed job, source, capability and artifact contracts | The user can understand what to do and where the result lives; domain examples and calculations are specified |
| 2 Working foundation | Fresh application, ordinary chat, scoped Knowledge, native runtime/tool workflow, durable job and editable artifact | Scripted real-library execution, storage/access checks, edit/reopen and interruption tests pass with provider/network calls denied |
| 3 Usable quotation capability | Company template/rate configuration, missing-field handling, deterministic totals and reviewed export | Repeated use preserves settled setup; sources trace correctly; no invented rate/commitment; cancelled work does not restart itself |
| 4 Controlled action and connection | One warranted external action plus exact approval and receipts | Fake-connector failure/concurrency/reconciliation checks first; separately authorised live connection and spending before real effects |
| 5 Extend the same job | Acceptance, order, fulfilment and invoice capabilities selected from actual need | Each extension has a supported data source, responsible owner and tested completion/exception rules |

Maintain a small explicit acceptance matrix instead of using a growing test count as the headline. Test malformed tool arguments, wrong-company IDs, private sources, ambiguous templates, conflicting rates, changed policy, stale artifact edits, duplicate requests, concurrent resumes, expired decisions, cancellation and crashes before/after domain commits. Fake external effects must cover tampered recipients and an uncertain result with no automatic resend. Test framework snapshots and business transactions as different boundaries.

Conversational quality needs later authorised model evaluation: ordinary chat, a vague but actionable request, a genuine blocker, remembered corrections, language/region preferences and one complete quotation. Compare deliverable quality and total human effort as well as latency, tokens and cost. Zero-spend fixtures prove mechanics, not these semantic outcomes.

## Use of old work and open decisions

Prior runtime comparison identifies pure validators, mapping, document-version and receipt concepts as reuse candidates. Rich editor and rendering work may be adapted after inspection and dependency review. Rebuild application composition, state ownership and the user experience. Do not copy layered SQL migrations, worker loops, old navigation or the whole feature inventory. This is a bounded reference review, not a completed code-port audit.

The approved foundation is the simple one-assistant product. Open recommendations are the Mastra implementation choice, PostgreSQL-first persistence, quotation-first exemplar, Work/Knowledge/Tools navigation and final visual composition. The immediate next deliverable is a concrete comparison of the two designs plus the first executable capability contract. No production application was built in this planning run; no reference data, credentials, services or MyWorld files were changed.
