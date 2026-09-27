# Migration from Product-Studio

V2 is a clean studio with selected harness code adapted from JKay93/Product-Studio
at commit `599ee7498b15190a8b747ac230f8fbe8eb40aee1`. The original repository and its
OpenClaw consumers remain unchanged. Its PMLeaderboard requirements, historical
runs, screenshots, PDFs and project-specific validators are not part of this studio.

The downloaded reference checkout is outside this folder under `../tmp/` and is not
part of the new repository. Its Windows checkout was incomplete because of long paths;
the harness source used for v2 was present.

Do not point old automation at v2 or import state blindly. For each migrated project:
copy its authoritative documents into its own folder, identify actual approved
decisions, add metadata only where useful, validate links, then pilot one bounded task.
Retain old evidence in the original repository as historical reference.

The state/contract API retains compatibility fields where useful. Time estimates are
diagnostic in v2, never authorization deadlines. Financial authority, retry counters,
human pause and revision-bound review remain distinct controls.

No vector service, hosted graph database, runtime interceptor or automatic scheduler
is introduced. SQLite search and metadata links are local and rebuildable. Design-skill
selection and measured token/cost improvements require a real project pilot; this setup
does not claim those outcomes.
