# Harness guide

This is a local validation and retrieval toolkit. It does not launch agents, enforce
host tool permissions, purchase compute or schedule background work. The orchestrator
uses the available host runtime to dispatch bounded assignments.

## Everyday use

Most bounded tasks need only the compact assignment in operating-system/templates,
a builder report, one relevant independent review and a recorded acceptance decision.
Do not create structured state solely to satisfy paperwork. For multi-step work,
concurrent completions or resumable delivery, the structured API below provides
revision checks, deduplication and persisted state.

## Retrieval

Run commands from this studio or a child directory:

```sh
node harness/cli.mjs check
node harness/cli.mjs index build
node harness/cli.mjs retrieve --project my-project --query "funding" --limit 8
```

The project must exist under products/. Results include source paths, line locations,
content hashes, scope and status. Approved rules/decisions are included separately
from keyword matches. Metadata and graph conventions live in graph/README.md.
The generated SQLite index is ignored by Git and can be rebuilt from source.
Unchanged documents reuse indexed chunks; all source hashes are checked for freshness.
This is keyword/graph retrieval, not embedding-based semantic search.

## Structured work (optional)

The JSON templates illustrate the inherited contract/state interface. Replace example
IDs, paths and revisions with the real task. Example PASS outcomes are schema examples,
not evidence for this studio. The model routing file is advisory at the harness level
because this CLI cannot launch agents; its routes are mandatory under the studio
standing orders. Read it before every dispatch, verify host availability, explicitly
request model/effort/isolated context, and record the returned agent ID. Block an
unsupported route rather than silently inheriting or substituting a model. Distinguish
requested from observed activation; the file cannot activate it. PM and Technical Specialist
use the compact assignment/document workflow;
the structured implementation/review protocol retains builder/productDesign/qaRelease roles.
Optional productManager and technicalSpecialist routing entries are validated when
present, including confirmed observations and checkpoint consistency. A configured
optional role need not be dispatched or have a confirmed observation. The inherited
builder technical-plan mode remains compatible; use compact specialist assignments
for new architecture/API/data/security planning and technical documents.

```sh
node harness/cli.mjs handoff routing validate
node harness/cli.mjs handoff contract validate --file path/to/task.json
node harness/cli.mjs handoff validate --contract path/to/task.json --checkpoint path/to/checkpoint.json
node harness/cli.mjs state init --file products/my-project/runs/run.json --run-id run-001 --product my-project
node harness/cli.mjs state task init --file products/my-project/runs/run.json --contract path/to/task.json --task-id task-001
node harness/cli.mjs state show --file products/my-project/runs/run.json
node harness/cli.mjs state validate --file products/my-project/runs/run.json
```

Completion ingestion, Git checkpoint generation and delivery verification retain the
existing API in cli.mjs. They bind task and candidate revisions, reject stale evidence,
and distinguish implemented, reviewed, accepted, merged and preview-verified states.
A passing builder report alone is not final acceptance.

Time counters and legacy time fields are diagnostic. V2 does not block work when an
estimated duration is exceeded, or ask for a time extension. Explicit human pauses,
retry limits and authority restrictions still apply. The compatibility budget interface
must not be interpreted as financial accounting or approval to spend.

Financial allowances are project authority records enforced through host approvals
and the orchestrator; this CLI is not a billing interceptor. Unknown cost measurements
remain unknown. Use harness/metrics.mjs for optional pilot measurement; do not claim
cost savings until comparable real task data supports them.

## Checks

`npm test` exercises scope isolation, incremental indexing, graph validation, contract
validation, evidence freshness, task events, retries, pause and delivery controls.
`npm run check` validates studio retrieval metadata and routing, with no dependency on
another project's requirements. Node's built-in SQLite may emit an experimental warning.
