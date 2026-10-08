<!-- studio {"id":"world:decision:tech-stack","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:architecture"}]} -->
# World tech stack decisions

Rich replies (approved2026-10-08) pin react-markdown10.1.0, remark-gfm4.0.1 and
rehype-highlight7.0.2. One shared React renderer covers chat/output previews, skips
raw HTML, disables application URL/action navigation and remote image loads; typed
source/approval controls remain separate. Existing dev-tool audit findings are
unchanged; no new renderer chain finding was reported. Current acceptance is in
the rich-chat-behaviour run; runtime/authority/source storage architecture is retained.

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
| Model access | Direct Anthropic Claude behind a thin server-only adapter initially |
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

Phase 1 pins Next.js 16.3.8, React 19.3.0, TypeScript 5.9.3, Tailwind 4.3.3, Radix Dialog 1.1.23, Storybook 10.6.1 and Vitest 5.0.3. All dependencies have exact manifest versions plus `package-lock.json`; consult those files for the complete resolved set. Node 24.15 or later is required by the selected tooling, with bundled Node 24.19 used for checks. Libraries are added only when their phase needs them. Prettier supports readable source formatting.

The approved Agent-page spatial UI refinement uses locked `@xyflow/react@12.12.0` for the custom relationship canvas. Phase 4 adds locked `@supabase/ssr@0.12.7` and `@supabase/supabase-js@2.117.2` for request-local Auth and caller-authenticated API access; `pg@8.23.1` supports authorized migration/integration tooling only. Node24.19.0 is the tested bundled runtime, meeting the existing >=24.15 requirement. PostgreSQL test connections verify the supplied CA and hostname; production application requests do not use privileged database credentials. Worker/provider libraries remain deferred to their roadmap phases. Implementation checks and acceptance are tracked in CURRENT_RUN.md.

Slice 5.3 adds locked `pdfjs-dist@6.4.299` for text extraction only. Development PDF processing uses the configured Windows Python launcher and OS Job Object limits around a credential-free Node child; other hosts fail closed. TXT/Markdown remain bounded request processing. Node's built-in crypto supplies AES-256-GCM original encryption and HMAC attestations; separate retained server keys stay in ignored environment files. `tests/integration/setup-import-signing.mjs` and `setup-import-encryption.mjs` configure the authorized development environment after migrations, without printing keys. No service-role application client, worker/queue deployment or encryption dependency was added. Actual limits and privacy guarantees are in ARCHITECTURE.md and the import run.

Hosting, paid plans, CI provider and deployment configuration remain open. The source snapshot of UI UX Pro Max is recorded alongside its local installation; its upstream commit is currently unknown.

Phase5 passage search uses existing PostgreSQL full-text search: simple tokenization, weighted title/body vectors, GIN indexing and ranked bounded retrieval through caller-authenticated RPC. No additional search dependency/service or vector database is required. Exact immutable item/version/page/paragraph references remain available for later grounded Agent answers; provider execution stays Phase6 after Knowledge acceptance.

## Phase6 provider selection [world:req:phase6-provider-stack]

User approved direct Claude using existing credit. The supplied key passed the free official model-list check and `claude-sonnet-5-5` is available. This is the selected initial model behind `src/adapters/models/`; replacing providers does not replace persistent Agent identity. Use bounded standard text requests, free token counting and an atomic cumulative US$4 development-test ceiling. Key and narrow worker connection stay server-only and ignored; privileged migration/test database access is never a runtime fallback. No credit replenishment, paid tools, new infrastructure purchases or production release are authorized. Implementation and live inference are independently accepted for controlled development in the [Phase6 run](runs/2026-10-05-phase6-working-agent.md). Worker activation follows its recorded financial authority; production remains separate.

Phase6 pins `pg-boss@12.36.0` for the shared initialized queue and direct development `esbuild@0.27.7` for bundling its TypeScript entry. The existing `pg` adapter also supplies the certificate-verified restricted worker connection. Anthropic uses the official HTTP interface through Node fetch, avoiding a second SDK dependency. Current bounds are12,000 input characters,8,000 serialized input tokens,2,048 output tokens,3 attempts and15-minute finite delegation. Conservative standard-rate reservations include a25% margin; unknown usage stays held. See ARCHITECTURE.md for authority/attempt/source fencing and CURRENT_RUN.md for actual acceptance. No production worker is deployed.

Phase 7 retains these dependencies and one shared worker. Additive PostgreSQL run/node/dependency records coordinate bounded descendants and idempotent parent continuation rather than adding queues or workers per Agent. Initial limits are depth 2, six child jobs total, two concurrent provider steps, a shared 15-minute deadline, three attempts per step and a US$0.50 run limit within the unchanged cumulative US$4 ledger. Actual installation and acceptance remain in CURRENT_RUN.md.
