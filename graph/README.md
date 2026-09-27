# Source-derived graph

The Markdown source is authoritative. Add a small metadata comment to durable records:

```html
<!-- studio {"id":"my-project:decision:funding","scope":"my-project","type":"decision","status":"approved","links":[{"relation":"constrains","target":"my-project:req:funding"}]} -->
```

Use IDs for durable records and requirements people need to reference independently.
Routine notes do not need metadata. Requirement headings may end in `[my-project:req:funding]`.
The containing document supplies their scope and status. An ID is stable across renames;
Git records revisions. Returned source and chunk hashes identify the retrieved text.

Scope comes from the path: operating-system is `studio`; products/<slug> is that project.
A conflicting scope declaration fails validation. Templates, historical runs and
evidence directories are excluded from normal retrieval. Represent external evidence
with a project-local source record if it needs a graph relationship.

Statuses: draft, approved, superseded, archived, rejected. Approval is a recorded human
or delegated-authority decision, not a property the index can authenticate. Reviewers
must inspect its source. Metadata-free documents default to draft.

Relationships connect a document ID to another document or requirement ID. Typical
relations are constrains, implements, requires, depends_on, governs, verifies, supersedes and
reference. Governing links may stay in a project or point to shared studio records;
they cannot transfer another project's authority. Cross-project reference links are
examples only and excluded from normal retrieval.

`npm run index` regenerates and validates the graph, rejecting duplicate IDs, broken
references and invalid governing links. It updates changed document chunks and removes
deleted sources. Source files are hashed on each query so stale data is not reused.
No manually maintained parallel graph file or hosted service is required.

The search limit bounds keyword hits, not approved constraints. Approved rule and
decision records are included separately so relevance ranking cannot hide them. Keep
those records concise and inspect source context when a returned passage is ambiguous.
Graph traversal is bounded; retrieval is an aid, not a proof of complete project context.
