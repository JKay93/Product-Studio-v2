# Migration from Product-Studio

V2 is separate from original Product-Studio and its OpenClaw consumers.
Selected harness code originated at commit 599ee7498b15190a8b747ac230f8fbe8eb40aee1.
Do not redirect old automation or import project state blindly.

Current governance removes agent project-document duties. Existing approved sources
may be read; no copy/template/authoring step is required to begin an authorized task.
The original project's history and product decisions do not govern new projects.
Historical setup evidence is in VERIFICATION.md; current AGENTS.md, standing orders
and role-routing.json override its earlier practices and model configurations.

State compatibility fields remain where useful. Time estimates are diagnostic;
financial authority, human pause, retry counters and candidate-bound evidence are
distinct controls. SQLite retrieval is local and rebuildable; there is no vector
service, hosted graph, native permission interceptor or automatic scheduler.
