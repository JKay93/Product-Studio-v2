<!-- studio {"id":"world:decision:tech-stack","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:architecture"}]} -->
# World tech stack decisions

The following stack was accepted for the lean first release and recorded on 2026-10-03. Phase 1 selected compatible local dependencies within that authority and locked them in World's application repository. Deployment remains open.

## Selected tools [world:req:selected-stack]

| Responsibility | Selected approach |
| --- | --- |
| Language | TypeScript across the application and worker |
| Web interface and API | Next.js with React, within a modular monolith |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| File storage | Supabase private storage with access policies |
| Background work | One shared Node worker with pg-boss |
| Model access | One provider behind a thin adapter initially; first provider to be selected |
| Styling | Tailwind with shared semantic theme tokens |
| Accessible controls | Canonical Radix-based primitives |
| Agent relationship canvas | Custom React Flow presentation |
| Component examples | A small Storybook gallery |
| Focused logic tests | Vitest |
| Backend verification | Integration tests for authority, persistence and lifecycle boundaries |
| User journeys | Playwright |
| Design assistance | UI UX Pro Max installed inside World only |

## Design and infrastructure boundaries [world:req:stack-boundaries]

The custom Calm Fluent-inspired direction uses these tools; it does not require switching to Microsoft's Fluent component framework. The selected design is documented in [Design](DESIGN.md).

Avoid adding another queue backend, Redis, a separate vector database, Kubernetes, or one service per Agent. Add infrastructure only when a concrete requirement justifies it. Model inference uses a provider adapter; operating foundation-model servers is not required for the first release.

Phase 1 pins Next.js 16.3.8, React 19.3.0, TypeScript 5.9.3, Tailwind 4.3.3, Radix Dialog 1.1.23, Storybook 10.6.1 and Vitest 5.0.3. All dependencies have exact manifest versions plus `package-lock.json`; consult those files for the complete resolved set. Node 24.15 or later is required by the selected tooling, with bundled Node 24.19 used for checks. Backend, worker, provider and graph libraries are deferred until their phase needs them. Prettier supports readable source formatting.

The approved Agent-page spatial UI refinement uses locked `@xyflow/react@12.12.0` for the custom relationship canvas. Phase 4 adds locked `@supabase/ssr@0.12.7` and `@supabase/supabase-js@2.117.2` for request-local Auth and caller-authenticated API access; `pg@8.23.1` supports authorized migration/integration tooling only. Node24.19.0 is the tested bundled runtime, meeting the existing >=24.15 requirement. PostgreSQL test connections verify the supplied CA and hostname; production application requests do not use privileged database credentials. Worker/provider libraries remain deferred to their roadmap phases. Implementation checks and acceptance are tracked in CURRENT_RUN.md.

Slice 5.3 adds locked `pdfjs-dist@6.4.299` for text extraction only. Development PDF processing uses the configured Windows Python launcher and OS Job Object limits around a credential-free Node child; other hosts fail closed. TXT/Markdown remain bounded request processing. Node's built-in crypto supplies AES-256-GCM original encryption and HMAC attestations; separate retained server keys stay in ignored environment files. `tests/integration/setup-import-signing.mjs` and `setup-import-encryption.mjs` configure the authorized development environment after migrations, without printing keys. No service-role application client, worker/queue deployment or encryption dependency was added. Actual limits and privacy guarantees are in ARCHITECTURE.md and the import run.

Hosting, model/provider choice, paid plans, budgets, CI provider and deployment configuration remain open. This record authorizes no new spending or production release. The source snapshot of UI UX Pro Max is recorded alongside its local installation; its upstream commit is currently unknown.

Phase5 passage search uses existing PostgreSQL full-text search: simple tokenization, weighted title/body vectors, GIN indexing and ranked bounded retrieval through caller-authenticated RPC. No additional search dependency/service or vector database is required. Exact immutable item/version/page/paragraph references remain available for later grounded Agent answers; provider execution stays Phase6 after Knowledge acceptance.
