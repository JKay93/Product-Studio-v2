# Harness guide

Local routing, validation, retrieval and optional machine-state tools. The host
launches agents and enforces permissions. This CLI does not schedule agents,
change sessions, purchase compute or generate project documents.

## Task delivery

Use a bounded task message, Builder checks, one independent review and Orchestrator
acceptance. All replies are concise. Orchestrator records tasks, acceptance criteria,
outcomes/evidence, questions, decisions, deferred work and handoff for every work run;
see [run-record rules](../operating-system/RUN_RECORDS.md). Extra specifications and
worker reports are not prerequisites. Specialists answer their assigned questions.
Read current routing and role instructions before every dispatch. Explicitly pass
model, reasoning_effort and fork_turns: "none"; retain request/hash/agent-ID receipts
in host history or optional machine state. Requested and actual routing are distinct.
Unsupported routes block dispatch; there is no implicit fallback.
New task preparation/initiation must match active routing. Historical checkpoints
retain their frozen requested routes and do not retroactively prove activation.

## Retrieval

```sh
node harness/cli.mjs check
node harness/cli.mjs index build
node harness/cli.mjs retrieve --project existing-project --query "funding" --limit 8
```

An existing products/<slug>/ folder is required for retrieval, not for delivery.
Sources are Markdown in that project and operating-system/. Normal retrieval excludes
templates, runs, evidence, hidden/vendor/generated directories and symlinks.
Changed sources replace indexed chunks; deleted sources disappear. Every query
checks source hashes. Metadata links form a source-derived graph, rejecting duplicate
IDs, broken links, scope spoofing and cross-project governing relationships.
Only selected-project/studio records are returned. Approved rules and decisions are
included separately from keyword hits; superseded/archived/rejected records stay out.
Results include paths, line numbers and source/chunk hashes for provenance.
This is SQLite keyword/graph search, not semantic search or chat memory. Messages
and machine JSON state are not indexed. Orchestrator maintains approved product
decisions; workers consume relevant sources. Read CURRENT_RUN.md and its archived
run directly for resumption, since ordinary retrieval excludes runs/. Read known
paths first, reuse current context and investigate missing facts narrowly.

## Optional machine state

The concise Markdown run record and CURRENT_RUN.md pointer are required by the
working rules; optional structured state can supplement them. The CLI does not
automatically capture chats or write Markdown run records. JSON
examples show schemas, not real approval, PASS evidence or confirmed model activation.
Use current configuration when preparing tasks; example routes are not substitutes
for rereading live routing. Workers do not create prose reports.

```sh
node harness/cli.mjs handoff routing validate
node harness/cli.mjs handoff contract validate --file path/to/task.json
node harness/cli.mjs handoff validate --contract path/to/task.json --checkpoint path/to/checkpoint.json
node harness/cli.mjs state init --file products/my-project/runs/run.json --run-id run-001 --product my-project
node harness/cli.mjs state task init --file products/my-project/runs/run.json --contract path/to/task.json --task-id task-001
node harness/cli.mjs state show --file products/my-project/runs/run.json
node harness/cli.mjs state validate --file products/my-project/runs/run.json
```

Task/candidate revisions bind completions and reviews; stale evidence cannot advance
delivery. Duplicate events are idempotent. Reviews remain independent; acceptance,
merge and preview verification are separate states. Generated Git checkpoints derive
real hashes rather than inventing PASS. Merge proof uses Git ancestry/upstream;
preview proof binds served identity to candidate plus substantive verification.
Legacy time/budget fields are diagnostic, not spending authorization or deadlines.
Human pauses, retry limits and authority boundaries remain controls.
Optional metrics keep unavailable cost/token observations unknown; compare real
equivalent tasks before claiming savings.

## Checks

npm test covers scoped retrieval, metadata, routing, revisions, evidence freshness,
duplicate events, retries, pause and delivery verification. npm run check validates
shared metadata/routing and refreshes the index. Neither requires product documents.
