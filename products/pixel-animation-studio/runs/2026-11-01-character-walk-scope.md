<!-- studio {"id":"pixel-animation-studio:run:2026-11-01-character-walk-scope","scope":"pixel-animation-studio","type":"run","status":"complete"} -->
# One-character walking feasibility scope

Superseded as the next-execution proposal: user pointed out the unresolved logical-grid blocker. Orchestrator withdrew walking as the next experiment; subsequent model evaluation is in 2026-11-01-model-evaluation.md. This historical plan grants no spending or animation authority.

## Goal and authority
User requests an exact one-character test scope, pass criteria, base-to-walk method and proposed budget. Planning only: no new paid generation, training, implementation or activation is authorized. Existing generation arms remain off and historical ledgers unchanged. Prior comparison and compaction facts: [completed comparison](2026-11-01-pixel-lora-comparison.md).

## Tasks / acceptance
- S1 Orchestrator: choose a bounded end-to-end artifact and stage gates; provide measurable technical gates, observable visual gates, correction limits and decision after failure.
- S2 Technical Specialist: independently critique the proposed base/reference-to-six-frame route and limitations. Read-only, no provider calls/credentials/edits. Requested gpt-6.1-sol / medium / fork none; routing SHA256 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; host task /root/character_walk_scope_review; actual backend activation unknown.
- S3 Orchestrator: consolidate scope and cost estimate; retain proposal status, refresh continuity and deliver concise plan. No execution inferred from scoping.

## Evidence / preliminary direction
Existing local measurements: six Gemini image calls cost US$0.408416 (~US$0.0681/call); neither animation nor reliable exact logical grids proven. Prior forced conversion damaged details and was rejected. Current OpenRouter page still describes google/gemini-3.1-flash-image as image generation/editing, not an animation engine. Godot supports individual frames and sheets; Aseprite supports sprite-sheet import with specified cell dimensions. Sources checked 1 November 2026:
- https://openrouter.ai/google/gemini-3.1-flash-image
- https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html
- https://www.aseprite.org/docs/sprite-sheet/

Proposed scope: custom Bram-derived farmer, single right-facing side walk, six unique poses at 8 fps, fixed 64x96 logical frame. Base first, lock identity/palette/baseline, generate reference-conditioned walk contact sheet with explicit pose order, extract/register conservatively, inspect before corrections, then import and play in Godot and import in Aseprite. Native artwork and any conversions retained separately. Contact-sheet inference is an unproven experiment; no claim that model understands gait or guarantees frames.

Proposed budget: US$1 new TOTAL maximum, at most six image requests including corrections; likely US$0.40-0.70 based on prior image costs, not a quote/guarantee. Two base attempts max, two walk-sheet attempts max, two targeted fixes max, all within one ceiling and stop rules. Code/offline inspections/export do not incur provider charges; no separate paid planner/evaluator calls, LoRA/fal/training/video. Price/reservation checks required before any future approved phase; existing ~US$0.22 maximum reservation requires enough remaining budget before dispatch. Uncertain costs retain holds and stop. Historical charges remain counted separately. No approval yet.

## Questions / decisions / deferred
S1-S3 complete. Specialist supports six frames / 64x96 / 8fps and early base gate. Refinements: gutters between generated cells; reject overlap/cropped/missing limbs before extraction; consistent foot-contact baseline allowing intentional body bob; inspect last-to-first seam; base allows room for stride. Import into one available tool is sufficient, preferably Godot. A PNG sprite sheet importable into Aseprite is a deliverable, not a claim of authored layered .aseprite.

Pass proposal (all required): intended age, grey beard/outfit/prosthetic side preserved across six anatomically valid distinct poses; exact 64x96 transparent logical cells, common square-pixel structure with no destructive recovery/detail loss; readable alternating support/swing, controlled bob and no obvious loop snap/shimmer at 1x and integer zoom; stable scale/contact registration; saved/reopened playback and actual tool import; <=20 minutes active per-asset mechanical cleanup (crop/align/background/palette), no anatomical redraw or frame-by-frame repainting. Track one-time engineering separately from recurring cleanup, generation waits and review. User visual acceptance necessary; technical export success separate from art/animation pass.

Result pack: accepted base, six frames, 384x96 horizontal transparent sheet, timing metadata, loop preview, native-size/integer-zoom comparisons, import evidence, actual attempts/cost/holds/latency/cleanup and defects. Retain raw model images separately from processed outputs. No slide/bob-only animation disguised as gait, blind destructive downsampling, or hidden provider fallback. Static image-sheet generation is unproven; failure within bounds ends the experiment with a named cause. One success proves only this character/direction, not universal animation reliability.

Detailed scope/budget are proposals, not approved product decisions. Four directions, attacks, minute-long movie, arbitrary input coverage, rigs, LoRA/training and platform expansion deferred until this slice passes. No code or settings changed; new provider spend US$0.

## Handoff
Scope complete; await user decision on execution and new US$1 ceiling. Historical US$0.9807695 intact; unused past allowances do not carry. Before future execution update project authority, build/review minimum bounded test harness and exercise offline checks before arming; do not alter running server during this planning turn.
