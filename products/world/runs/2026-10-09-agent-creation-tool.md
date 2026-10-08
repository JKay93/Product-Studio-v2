<!-- studio {"id":"world:run:2026-10-09-agent-creation-tool","scope":"world","type":"run","status":"accepted"} -->
# Persistent Agent creation through chat

Goal: implement actual persistent Agent creation through the World runtime, using
selected Rakazo tool patterns while preserving World identity and governance.
User explicitly chose Agent creation first; Knowledge writing is next build.

Tasks: C1 technical contract complete; C2 implementation/offline checks complete;
C3 independent QA complete/PASS; C4 protected zero-spend verification, local
installation and verified MyWorld delivery complete. Studio records delivery follows.

Acceptance: real saved Agent visible in existing directory; correct initiating
actor/World ownership; bounded native tool calls with strict payload validation;
current authority, cancellation/revocation, exact replay/concurrency enforcement;
truthful success/failure; no automatic execution, graph/roster enrollment, grants,
private memory/source copying or Knowledge writes. Existing chat, model accounting,
financial holds and all installed migration bytes remain intact. Appropriate
unit/integration/build checks and independent review pass before live installation.

Questions: scope question answered Agent creation first; Knowledge writing next.
Decisions: no wholesale Rakazo replacement, provider change or production release.
Existing ordinary user testing budget remains; no new paid benchmark authorized.
Root owns live operations and records; workers offline. Preserve unrelated
World/tsconfig.json changes and frozen evaluation evidence.

Routing: SHA1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F.
C1 requested gpt-6.1-sol/medium/forknone, returned /root/agent_creation_contract.
Actual backend activation/token costs unavailable; not inferred from request.

Architecture resolved: one counted/reserved native propose_agent call per job;
completed validated usage is settled before persisting a draft. No general paid
tool loop: current spend keys are unique by job/attempt. Authenticated human Create
confirms exact persisted payload, never a model-authored authorization flag or
natural-language permission classifier. Personal-origin drafts remain personal;
organization-origin drafts remain in the same organization and require owner/admin.
No organization-to-personal configuration export. These are scoped implementation
choices under existing approval/privacy boundaries. Official Anthropic tool-use
documentation inspected: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview.

C1 completed consultation, no edits/live calls. C2 dispatched in disjoint scopes:
/root/agent_creation_provider_builder owns provider/schema/tests;
/root/agent_creation_feature_builder owns runtime/SQL/repository/UI/proofs.
Both requested gpt-6.1-sol/low/forknone after fresh route/Builder reads; same SHA.
Actual backend activation remains unavailable.
Implementation outcomes: native Anthropic propose_agent produces one immutable
review draft, not an immediate write. The initiating human confirms its exact
digest through the existing Chat requests/Work surface. Authenticated creation
saves identity, configuration, profile and one audit atomically; created receipts
open the existing Agent overview. Dismissed/expired drafts cannot create. Existing
manual creation permissions determine destination. Successful creation metadata
is available to later chat context (at most five, current actor/World/Session and
current profile/source guards). No private memory/configuration is copied to it.

Native payload is closed and bounded: ownership, name (120), role (500), instructions
(8000), description (2000). Partial, unknown, multiple, unoffered or malformed calls
fail closed. Actual usage settles before draft persistence; one paid provider call
per job, no second tool-response call. Worker has only the narrow proposal function;
human creation uses existing authenticated permission checks. Cancellation, expiry,
current policy/authority/source revocation and closed Session action restrictions
are enforced before creation. Created retries retain current privacy without
being invalidated solely by the completed job deadline. Shared advisory/work locks
serialize confirmation and dismissal; exact replay returns the same saved identity.

Evidence: full application suite 397 tests/66 files PASS with bounded test workers
and 15-second timeout. The initial default-parallel suite hit two existing workspace
5-second timeouts and a cascaded mobile failure; isolated workspace 12/12 passed,
then the complete bounded suite passed without assertion changes. Independent final
creation suites 44 tests and typecheck PASS; scoped lint and diff checks PASS.
Isolated production build and Storybook build PASS; generated next-env imports
restored to ordinary .next and typecheck rechecked. Pre-existing tsconfig.json
remains excluded. Research source files moved outside the app's broad TS glob to
workspace .research/rakazo; the old ignored research directory retains only hidden
Git metadata. No research code was executed or dependencies installed.

Protected candidate and installed-schema proofs both exit0/PASS: 21 checks cover
native-only/settled usage, replay/conflict, initiating actor, worker privilege,
personal config/audit once, saved context, dismiss/expiry/cancel/revision, retained
saved retry, organization ownership and borrowed identity, member exclusion,
revoked source hidden/read/confirm/dismiss denial, closed action allowlist and
continuation/child/discussion/meeting exclusions. Synthetic fixtures fully roll
back. Actual two-connection isolated race proof exit0/PASS: simultaneous confirmation
creates exactly one Agent/audit; confirmation versus dismissal has one terminal
outcome. All 52 migrations reconstruct in the isolated proof. Final race storage
bucket fixtures use an isolated table, avoiding actual Storage metadata writes.
An earlier empty synthetic bucket left by the Storage deletion guard was verified
object-free and removed with transaction-local storage.allow_delete_query=true;
no persistent guard or human bucket changed. Final generated schemas cleaned.

Actual browser component previews: Create→saved receipt→Open, Dismiss→terminal,
expired no-create, disabled read-only controls, instructions disclosure, and
360px layout with no horizontal overflow. These are prominently synthetic previews
using production components, not a connected database/browser end-to-end proof.
UI/API unit checks and real database proofs are separate evidence. No paid real
Claude native-creation call this run; model choice/frequency of proposing a draft
still requires user testing. Eligible tool-enabled replies buffer until validated
completion to prevent premature saved-success text; incremental streaming is a
known tradeoff for this version. Universal capability/quality parity is not claimed.

Independent final QA /root/agent_creation_contract PASS for controlled development,
read-only (same requested medium/forknone route matches QA after fresh routing and
REVIEWER reads). No remaining implementation blocker; root accepts this candidate.
Installed052 SHA256 B5F155651CC69B9DD91B0DA1223B5051179052C5F5EA23EFAB4F5818025D1350;
all prior installed hashes verified unchanged. Installed migration bytes now immutable.
Pre-install pending0/ledger8188370 microUSD/51migrations; no paid model calls, charge
resets or new funding. Restricted normal worker stopped for update then restored
session30665, ready/provider enabled under the existing configured user-testing cap.
Localhost service retained/HTTP200; exactly one compiled Agent worker process33392
verified. Final pending0/ledger8188370 microUSD/52migrations, unchanged spend. Normal
local preview tab19 retained; temporary component preview/server closed. No production.
MyWorld main096799e607a4768257570e846c74e677e9e39d28 verified with ls-remote after push.
27 scoped files delivered (25 application/test files, project AGENTS and attributes);
052 exact bytes preserved with -text. Unrelated tsconfig.json remains unstaged.
Studio records commit/push receipt follows in host history; only these three World
continuity/decision files belong in Studio delivery.

Handoff: completed for controlled development, implementation/review/protected
proofs/installation/MyWorld delivery verified. No unanswered question, missing human
approval or implementation blocker. User tests Agent creation; Knowledge writing is
the next requested build, not implemented automatically in this scoped run.
Deferred: Knowledge writing, other tools/providers, broad visual redesign and
production. Return to Knowledge after this capability is accepted.
