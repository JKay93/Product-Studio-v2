<!-- studio {"id":"null-me:run:2026-11-11-navigation","scope":"null-me","type":"run","status":"draft"} -->
# Navigation feedback and pointer investigation
Goal: resolve user's report that live-browser navigation cannot be clicked and has no hover response.
Baseline clean app a87fc34d20dd2f60ec7ae389faf399068142ec0f. Native anchors/routes work through browser automation; that alone does not establish user's physical-pointer path. CSS confirmed hover and rest both #171717, so no visible hover response.
Tasks: N1 Builder inspect click blockers and fix definite invisible-hover feedback within approved palette; N2 root compare actual mouse clicks via Chrome and embedded preview; N3 independent QA; N4 accepted delivery and honest limitations.
Acceptance: nav has visible primary-palette hover, pointer cursor and existing visible keyboard focus; preserve no underline/fill/coral nav, route destinations, layout and content; no speculative click hacks. Check/build and desktop/mobile evidence. Establish click outcome as far as actual tools permit; distinguish verified site links from unresolved user-side preview behavior.
Authority: user requests live navigation fix; existing accepted repository delivery authority, no deployment/new dependencies.
Routing: blob77d3fc3b200a99e66f1b17bebd1dd67d2889f354 builder gpt-6.1-sol/low/forknone, QA gpt-6.1-sol/medium/forknone. Activation/token/cost unknown.
Status active. No user decisions pending. Root owns records; workers source/QA only.

## User clarification and revised acceptance
User confirms website navigation works in their external browser; issue persists only in embedded preview. They explicitly request coral text hover, superseding ink-only navigation guidance. Set nav hover to existing readable coral #BA492E, no background highlight or underline; preserve ink at rest/current weight and ink focus outline. Pointer cursor retained. No website click workaround warranted. Prior native-browser inspection stopped because Windows Computer Use could not confidently identify Chrome URL; do not claim embedded preview repaired. Finish bounded CSS/docs correction, check/build and independent review. Reuse rendered layout evidence for unchanged geometry; inspect hover via supported browser surface if available.
