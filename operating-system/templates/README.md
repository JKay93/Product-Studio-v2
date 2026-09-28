# Project document templates

These are optional authoring aids. Copy only the templates that resolve the current
work into `products/<project>/`, adapt them, and delete unused prompts. The PM chooses
which product documents and sections to add, omit or merge. Template use does not add
an approval gate, require specialist sign-off or prove that a workflow step occurred.

| Need | Template | Accountable content owner | Normal project location |
| --- | --- | --- | --- |
| Product direction and strategic choices | [strategy.md](strategy.md) | Product Manager | `products/<project>/STRATEGY.md` |
| Feature or outcome requirements | [prd.md](prd.md) | Product Manager | `products/<project>/features/<domain>/<feature>/PRD.md` |
| Observed system context and planned change | [technical-context.md](technical-context.md) | Technical Specialist | `products/<project>/architecture/CONTEXT.md` |
| Milestone outcomes and evidence | [roadmap.md](roadmap.md) | Product Manager | `products/<project>/ROADMAP.md` |
| Interfaces and implementation constraints | [technical-specification.md](technical-specification.md) | Technical Specialist | `products/<project>/features/<domain>/<feature>/TECHNICAL.md` |
| Product foundation or feature experience | [design.md](design.md) | Designer | `products/<project>/design-system/<record>.md` or `products/<project>/features/<domain>/<feature>/DESIGN.md` |
| Consequential product, design, technical or operational choice | [decision-record.md](decision-record.md) | Relevant specialist | `products/<project>/decisions/<number>-<slug>.md` |
| Candidate verification and delivery state | [verification-release-report.md](verification-release-report.md) | Independent reviewer; orchestrator records acceptance | `products/<project>/features/<domain>/<feature>/EVIDENCE/VERIFICATION.md` |
| Research that materially informs a decision | [discovery-evidence.md](discovery-evidence.md) | Product Manager or named researcher | `products/<project>/research/<topic>.md` |

[assignment.md](assignment.md) and [review.md](review.md) remain independent workflow
records. A verification report may link a completed review, but it does not replace the
reviewer's findings.

## Authoring rules

- Use the smallest useful document set. Settled fixes and small changes normally cite
  existing records.
- Completed records live in their project. Narrow from strategy or contract to feature
  detail and link upward instead of copying decisions.
- The accountable owner may combine sections or remove irrelevant ones. The Technical
  Specialist owns technical accuracy; the Designer owns experience accuracy; builders
  own implementation notes and tests; reviewers own findings; the orchestrator owns
  final acceptance.
- Separate observed state from proposals. Draft plans do not authorize implementation
  and are not evidence of completion.
- Give durable records and referenced requirements stable project-prefixed IDs. Record
  `draft`, `approved`, `superseded`, `archived` or `rejected`, an accountable owner and
  the last material update. Preserve superseded decisions and link their replacements.
- A completion claim names the implementation candidate and applicable contract,
  requirement, design and technical-specification revisions.

Each template starts with a valid HTML studio metadata comment using `PROJECT` and an
uppercase record placeholder such as `FEATURE`, `CHOICE`, `TASK` or `TOPIC`. After
copying, replace every placeholder with a stable identifier for that document instance.
Keep only relationship links whose targets exist in the project, add other relevant
links, and keep the comment valid JSON on one line. Optional templates do not imply that
every linked document must be created. The shared templates themselves are excluded from
the generated project index. Metadata expresses relationships; it does not authenticate
approval.

The completed `ROADMAP.md` is the project's single source for milestone status. PRDs,
state notes and reports link to roadmap item IDs instead of repeating status or dates.
