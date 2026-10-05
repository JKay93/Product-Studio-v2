<!-- studio {"id":"world:plan:phase5-knowledge","scope":"world","type":"plan","status":"draft","links":[{"relation":"requires","target":"world:decision:product"},{"relation":"requires","target":"world:decision:architecture"},{"relation":"requires","target":"world:decision:roadmap"},{"relation":"requires","target":"world:decision:code-organization"},{"relation":"requires","target":"world:decision:design"}]} -->
# Proposed Phase 5 Knowledge library

Bring Knowledge forward before model connection and the meeting workflow. A nontechnical user should be able to store reference material, find the relevant passage, inspect its source and understand who can read it. This produces a useful library now and a reliable source layer for later Agent answers. This is a proposal requested on 2026-10-05, not implementation authority or an approved roadmap replacement.

## What exists and what changes [world:knowledge-plan:baseline]

Phase 4 already saves personal memory/preferences and World text notes with ownership, current access checks, revision conflicts, retries and provenance references. Its Knowledge page works without an Agent or Session. It has no document titles/folders, file imports, reader, paging, search, archive/restore or retrievable historical source bodies. Memory corrections increment revision and retain source-version references; they do not provide a complete document version archive.

Knowledge contains material the user supplies: SOPs, policies, reference notes and documents. Memory contains preferences and lessons that affect Agent behavior. Keep those destinations distinct and preserve existing records. This phase does not make Agents learn automatically or answer questions. Later retrieval may select relevant authorized passages; it does not fine-tune a model.

## User experience [world:knowledge-plan:journey]

Use the existing Knowledge navigation entry and current World selector. Its collapsible/resizable context rail contains All knowledge, folders and Archived. The main area has search, type/status filters, an Add knowledge action and a readable list of titles, source types, processing states and update times. Opening an item shows its reading view. A compact detail drawer holds source, owner, access, version and history; settings stay out of the reading surface.

A user selects Personal space or their organization World, adds a note or imports a supported file, confirms the visible destination and sees processing progress. They inspect extracted text before publishing it. Searching returns authorized passages with a document title and page/section reference; opening a result goes to the passage. Replace/edit creates a new version. Archive removes it from ordinary search and Restore brings it back. Empty, upload, processing, unsupported-format, failed, retry, conflict and access-revoked states are explicit.

Example acceptance journey: an authorized Acme administrator adds an escalation SOP to the Customers folder, reviews the extracted text and publishes it. An authorized member searches for escalation, sees the matching passage and opens the cited version. Switching Worlds removes those results. After membership revocation, an already-open reader cannot request further content.

## Proposed scope and access [world:knowledge-plan:scope]

Personal libraries belong to the user, rather than to one Agent. Personal items stay private and are excluded from organization work by default. Organization documents belong to their World, remain there after an employee leaves, and never automatically become portable learning. Folders organize items; they do not create or transfer permission.

Recommended initial document policy, requiring product acceptance: personal owner manages their own library; organization owner/admin manages World documents; members read only documents explicitly published to that World's library. Organization drafts are visible only to authorized owner/admin, and publishing clearly states the intended member audience. Do not derive access to unpublished documents merely from membership, Session participation or a borrowing grant. Existing World text-note permissions remain unchanged; a new document policy must be explicit.

In scope: authored text, folders, titles, paginated browsing, immutable document versions, current-authority access, archive/restore, TXT/Markdown import, bounded selectable-text PDF import, extraction preview, ranked keyword search and source locations. No public links or cross-World sharing. Ready means searchable within its allowed scope, not that an Agent has learned it.

Out of scope: scanned PDF/OCR, spreadsheets/slides/Word parsing, URL crawling, Drive/Notion/email sync, automatic summaries/learning, embeddings/semantic search, provider calls, Agent execution, portable export and permanent deletion. Existing authorized infrastructure is reused; this proposal grants no paid capacity or new deployment.

## Build sequence and acceptance [world:knowledge-plan:sequence]

| Slice | Deliverable | Acceptance |
| --- | --- | --- |
| 5.1 Knowledge interaction mockup | Reuse Calm Fluent shell, primitives and list/detail patterns. Show personal/World scope, folders, reading/detail views and all main states before implementing the library backend. | User can assess the proposed experience; keyboard, resizing and mobile focus work. Demonstration data is clearly identified. |
| 5.2 Saved text library | Domain/contracts, item/version/folder records, authorized list/detail, title/body editing, conflicts and archive/restore. Preserve existing memory/World notes through a compatible view or source-preserving migration, without two editable copies. | Items and selection survive reload; retries create one item/version; stale edits conflict; history opens the exact original body; ownership cannot be forged or reassigned. |
| 5.3 Private file import | Reserve scoped upload, TXT/Markdown first, then bounded selectable-text PDF; retain original, extraction output and parser/version metadata. Preview before publish, recover safely after interruption. | Unsupported/encrypted/scanned/damaged files report a useful state. Failed upload/finalization does not create a false ready item. Retry/resume cannot duplicate or revive revoked work. |
| 5.4 Search and passage inspection | Server-side paginated ranked keyword search with title/body matches and immutable page/paragraph/section references. List/detail/search use dedicated endpoints. | A fixed fixture set finds expected passages; snippets/counts expose only permitted records; old versions are identified; archived/unpublished items stay out of ordinary search. No AI answer is fabricated. |
| 5.5 Real verification and delivery | Actual personal/two-World identities, storage/API/direct-database checks, processing/revocation races, browser journey, focused regression/build checks and independent review. | Wrong scope, stale tokens/versions and unauthorized original-file requests fail. Personal/borrowed-Agent private content remains excluded. Accepted app/product records are separately pushed and verified. |

The first implementation task after scope approval is the interactive Knowledge mockup. Deliver the saved text slice before broadening imports. A hard PDF dependency cannot silently delay the text library or be labeled complete without proof.

## Architecture and reuse [world:knowledge-plan:architecture]

Keep Next.js/React, Supabase PostgreSQL/Auth and private Storage. Use framework-free public contracts in src/modules/knowledge, dedicated repositories in src/adapters/database and src/adapters/storage, thin knowledge API routes, and focused UI components composing existing primitives. The current knowledge module contains demo fixtures; separate demo data from live domain interfaces. Reuse caller verification, scope/version checks, idempotency, audit and stale-response protection. Avoid enlarging the workspace controller or full workspace snapshot with every document body.

Use distinct items, immutable versions and source passages, with owner/World constraints on every record. Search and lists load bounded results; readers fetch a selected version on demand. Provenance identifies original item/version and location. Attachment processing and search follow the same current-authority boundary as text content; derived text is equally private.

Recommendation: begin with PostgreSQL full-text search and ranked passages. This keeps retrieval inside the existing database; evaluate semantic retrieval later against real search misses rather than adding another search service. Supabase documents built-in [tokenization and ranking](https://supabase.com/docs/guides/database/full-text-search).

[Private buckets](https://supabase.com/docs/guides/storage/buckets/fundamentals) enforce RLS, including authenticated downloads. Use authenticated delivery with a fresh scope check for original files. Do not promise immediate membership revocation for already-issued bearer signed URLs; they [remain valid until expiry](https://supabase.com/docs/guides/storage/serving/downloads). Already delivered bytes cannot be recalled; new requests must be denied after revocation.

Storage and database publication are not one transaction. Reserve an item/version, validate bytes/type/size, upload to its authorized object path, extract into pending derived records, then recheck authority/version and publish atomically in the database. Handle orphan cleanup, retries and revocation between stages. Document HTML/Markdown is untrusted text: no executable embeds, automatic remote fetches or authority instructions.

Use bounded request processing for small TXT/Markdown. PDF ingestion needs a measured parser spike with CPU/time/page/text limits; if durable processing is necessary, use the already approved single Node/pg-boss worker locally, with persisted stage/retry state and exact resource authority checks before processing/publication. No extra queue/service per Agent. Parser choice and worker credential boundaries must be reviewed before implementation; unrestricted service-role access is not an acceptable shortcut.

## Proposed roadmap change [world:knowledge-plan:roadmap]

| Proposed phase | Outcome |
| --- | --- |
| 5 | Knowledge library and source retrieval preparation |
| 6 | One-provider meeting workflow and grounded answers using authorized source versions |
| 7 | Actual Agent collaboration and scoped autonomy |
| 8 | Learning, portable continuity and full safe leaving |
| 9 | SME pilot |

Phases 1–4 remain unchanged. This preserves the first workflow and later requirements while inserting Knowledge first. Approved ROADMAP.md still contains the original sequence until the user accepts this proposal. Stable record IDs are retained when display numbering changes.

## Choices before implementation [world:knowledge-plan:choices]

Recommended starting formats are authored text, TXT, Markdown and selectable-text PDF; other formats remain later work. Exact byte/page/text/concurrency quotas follow a bounded parser spike, must be visible in upload UI and must not require paid capacity. Proposed document roles/publication defaults above need acceptance. Retain versions and archived items during development; permanent purge/retention policy remains a separate decision before pilot. Existing Phase 4 email-link session proof remains an onboarding check, independent of Knowledge planning.
