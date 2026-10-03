# Source-derived retrieval graph

Existing Markdown is authoritative; the index is rebuildable. Agents have no duty
to create or maintain knowledge documents. When existing sources use metadata, the
index consumes a one-line studio JSON comment, for example:

```html
<!-- studio {"id":"my-project:decision:funding","scope":"my-project","type":"decision","status":"approved"} -->
```

Stable document IDs and requirement headings ending in [my-project:req:funding]
identify source content. Scope comes from path: operating-system/ is studio;
products/<slug>/ is that project. Conflicting scope declarations fail validation.
Metadata-free records default to draft. Metadata cannot authenticate approval.
Statuses are draft, approved, superseded, archived and rejected.

Links connect document/requirement IDs: constrains, implements, requires,
depends_on, governs, verifies, supersedes, reference. Governing links may target
the same project or shared studio rules. Cross-project reference links are allowed
as examples but excluded from normal retrieval; cross-project governing links fail.
Templates, runs, evidence, hidden/vendor/generated and symlink directories are excluded.

npm run index hashes sources, reuses unchanged chunks, replaces changed chunks,
removes deleted sources, and regenerates/validates graph links. Every query refreshes
source hashes. Approved rules/decisions are returned separately from limited keyword
hits. Linked context uses bounded traversal; retrieval does not guarantee completeness.
Results carry source/chunk hashes, paths and line locations.
Task messages, chat history and machine JSON state are not indexed.
