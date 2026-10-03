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

Hosting, model/provider choice, paid plans, budgets, CI provider and deployment configuration remain open. This record authorizes no new spending or production release. The source snapshot of UI UX Pro Max is recorded alongside its local installation; its upstream commit is currently unknown.
