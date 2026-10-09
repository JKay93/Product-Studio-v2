<!-- studio {"id":"world:run:2026-10-09-knowledge-scroll","scope":"world","type":"run","status":"complete"} -->
# Knowledge reader scrolling

Goal: repair the reported inability to reach the end of a Knowledge note. Also
answer the user's product question about saving without explicit repeated commands;
that UX proposal is discussion only, not authority for automatic saving changes.
Tasks: S1 Builder diagnose/fix bounded layout; S2 independent review and root browser
proof; S3 accepted scoped delivery. Acceptance: long selected notes and their bottom
controls remain reachable at normal/narrow/short viewports, without breaking Chat
scrolling or nested sidebar/reader controls. Reuse current reader, preserve content,
permissions, installed001–054 and worker budget; zero paid model tests, no migrations.
Questions: none required. Proposed saving UX: optional reply action/nonblocking
suggestion on reusable deliverables, deliberate saving, ordinary chat unaffected.
Deferred: implementing new saving heuristics/actions pending user direction.
Existing World main8bbbb9d/Studioe22cb93, only generated next-env/tsconfig dirty.
Routing current SHA1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F;
reuse matching Builder gpt-6.1-sol/low/forknone, activation/cost unknown. Root owns
records/live operations; worker offline bounded writes, no credentials/DB/provider.

S1 complete: /root/knowledge_creation_ui_builder extended the existing direct-child
page scroll rule to Knowledge and named its keyboard-focusable region. Only
src/ui/patterns/workspace.css and knowledge-library.tsx changed. Typecheck, scoped
lint and 44 focused Knowledge/search/import/working-Agent UI tests passed using a
single threads worker; initial sandbox Vite ENOENT was environmental.
S2 complete: /root/agent_creation_contract requested gpt-6.1-sol/medium/forknone,
same routing hash, independent source PASS and 13 Knowledge UI tests PASS. Its Chat
test collection encountered sandbox ENOENT before assertions; Builder's affected
44 tests include Chat. Root actual signed-in Launch Checklist (46 paragraphs):
before fix parent clipped a 3542px non-scrolling page; after fix overflow auto,
886px viewport, native wheel reaches paragraph46 and bottom controls. PageUp moves
scrollTop2656 to1960.8. At760x500 keyboard reaches final note and edit control.
Normal viewport restored; fresh localhost tab4 confirms scrollTop2656=max2656,
last paragraph, Edit and Memory footer visible. Original tab3 became unavailable
after context resumption; replacement tab4 retained as preview. No note edits,
model calls, database changes or service interruption. Root accepts bounded fix.
S3 complete: World main b5e6528623525592ecfda859b7580cc48bfeeb14 committed/pushed;
origin refs/heads/main verified identical. Generated next-env.d.ts/tsconfig.json excluded.
Decision: save-on-deliverable suggestion remains a proposal, no automatic save or
new suggestion logic implemented. No blockers. Next: user tests repaired scrolling;
new save UX awaits user direction. Studio record delivery accompanies this receipt.
