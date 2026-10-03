<!-- studio {"id":"world:run:contextual-navigation-2026-10-04","scope":"world","type":"run","status":"draft"} -->
# Contextual navigation refinement

## Goal [world:run:contextual-navigation:goal]

User supplied a Canva reference image and local video. Navigation selection should show a second rail only when that section has useful context. Replace distant header Hide context and text Collapse controls with nearby accessible icons. Adapt World's existing Calm Fluent shell; preserve accepted onboarding/chat and all phase 2 mock behavior. Application baseline aea4d1f294f3326f3c831572a7b62aeba1bb082f in JKay93/MyWorld; studio baseline ee96dc8833c9dbead19ce79c3e26d57dacee2689. No backend, spending or deployment.

## Tasks and acceptance [world:run:contextual-navigation:tasks]

| ID | Owner | Work | Acceptance | Status |
| --- | --- | --- | --- | --- |
| N1 | Orchestrator/Designer | Inspect reference and resolve section/context behavior | Video/image observed; useful panels mapped, hide/reopen/repeated selection/mobile behavior explicit | Complete |
| N2 | Builder | Adapt canonical shell/context | Selecting a contextual view reveals its panel; contextless views consume no blank rail; local icon controls have accessible names, focus and 44px targets; drafts/scopes intact | Active |
| N3 | Independent reviewer | Check actual candidate | Desktop/mobile, keyboard, contextual transitions, remembered preferences, short-height composer and phase 2 regression checks pass | Pending |
| N4 | Orchestrator | Accept and deliver | Reviewed application pushed to MyWorld, continuity/approved refinement to studio; remote delivery verified | Pending |

## Questions and decisions [world:run:contextual-navigation:decisions]

User's direction supersedes the global distant context-toggle placement. Section mapping and repeated-click behavior are routine design details for the team to resolve from the references. Maintain active World/Agent/Session visibility and reachable scope selectors even when there is no second rail. No consequential question outstanding.

Resolved design: Chat uses Agent/conversations, Meeting work uses Agent/Sessions, Agents uses identity/list plus compact Session selector (relationships are Session-scoped), Permissions uses compact Agent/Session permission scope; Knowledge/Activity and first-Agent creation have no second rail. Contextual tab selection/reselection opens the appropriate rail; reselecting an open tab does nothing. Local pane-heading icon hides; adjacent left workspace icon reopens. Primary labels toggle is an independent top-of-rail icon. Compact World/Agent/Session identity and a reused scope-selection dialog keep selectors reachable without a sidebar. Mobile keeps one workspace drawer: contextual selection updates it, contextless selection or choice closes it; nested Session form/Escape/focus behavior preserved. Labels preference persists; explicit navigation overrides prior context hiding.

## Evidence [world:run:contextual-navigation:evidence]

Reference image: C:/Users/jingk/AppData/Local/Temp/codex-clipboard-5f54df3f-d950-4ff2-8b9f-e5025ec18da1.png. Video: C:/Users/jingk/Videos/2026-10-04 04-41-30.mkv. Extracted frame scratch files belong in this thread's visualization directory; input media remains untouched. Implementation and review pending. Root owns records; requested routes/receipts retained in host history, actual activation/cost unknown.

Root inspected decoded frames across the 22.817-second supplied video: openmax Chat has conversations, Projects has its issue list, Knowledge has no secondary rail, returning Chat restores its panel. Canva image informs adjacent icon placement. VLC software decoding produced 43 half-second sample frames after disabling incompatible hardware conversion; all owned decode processes finished. Designer `/root/world_contextual_navigation_design` requested gpt-6.1-sol medium fork none under routing SHA256 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; inspected image/contact sheet and canonical sources and resolved the section/focus mapping. Skill defaults/read guidance used; targeted search unavailable to Designer, not represented as verified database output. No additional prototype needed.

## Deferred and handoff [world:run:contextual-navigation:handoff]

Active navigation refinement before phase 3. Preserve all existing product boundaries and mock limitations; do not resume canceled Sites publication. No new page redesign or backend expansion.
