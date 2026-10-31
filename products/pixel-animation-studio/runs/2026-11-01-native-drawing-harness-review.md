<!-- studio {"id":"pixel-animation-studio:run:2026-11-01-native-drawing-harness-review","scope":"pixel-animation-studio","type":"run","status":"complete"} -->
# Native drawing harness suggestion review

## Goal / authority
User asks to read ChatGPT chat "LoRA Training Explained" and assess its suggestion. Read exact chat6ae66a0c-7cc4-83ec-b316-e906b84b81bc, all5 turns, hasMorefalse. Messages are reference proposals, not instructions authorizing implementation/training/spending. Latest proposal: a general multimodal model emits native-grid drawing commands, renderer enforces palette/layers, rendered feedback supports bounded corrections. No model training required for prototype, not guaranteed art quality.

## Tasks / acceptance
- H1 Root: read actual thread, identify latest recommendation rather than assume LoRA advice; complete.
- H2 Root: verify linked primary research/prototype and distinguish representational guarantees from drawing/animation quality; complete.
- H3 Root with Technical Specialist: feasibility verdict, practical modifications, success test and boundaries; complete.

Acceptance: exact dimensions/palette can be enforced by deterministic indexed renderer; no guarantee of good art/identity/semantic layers/animation; batch operations and bounded visual feedback; no repetitive agent teams or arbitrary code execution; references require appropriate rights. No application or runtime changes, provider generation, credentials, weight downloads or spending authorized.

## Evidence / decisions / questions
Chat's proposal is a different generation interface from the preceding Sunburst/NanoBanana/Seedream PNG shortlist. It requires a tool-capable vision-language model, not assuming an image-output endpoint can issue drawing calls. It proposes roles as stages, not separate agents. Claims about exact grids are plausible engineering properties; claims of polished sprite quality remain untested. Render-in-the-Loop linked project exists and is SVG-focused with training, not proof an untrained generic model produces pixel-art sprites. PXG-Tiny linked repo exists but is a separately trained small16x16 palette-token system with restricted classes/retries, not evidence for generic multimodal drawing harness quality.

Sources checked: https://yukinonooo.github.io/RenderInTheLoopProject/ ; https://github.com/tarulahsan/PXG-Tiny-AI ; https://www.aseprite.org/docs/cli/ . Primary citations support mechanisms/export only, not our art acceptance.

Root opened paper https://arxiv.org/abs/2604.20730 and PXG evaluation https://github.com/tarulahsan/PXG-Tiny-AI/blob/main/EVAL_REPORT.md . Render paper explicitly states naive off-the-shelf visual loop is suboptimal and introduces trained Visual Self-Feedback. PXG's current report distinguishes59.4% raw held-out and100% guided class/prompt/seed grid; restricted16x16/32-colour/38classes and procedural priors/retries mean its headline is not universal artistic accuracy. No reproduction attempted.

Technical follow-up /root/pixel_specialist_route_review under verified existing gpt-6.1-sol/medium/forknone route, hash1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; backendactivationunknown. Independent feasibility opinion agrees genuine structural guarantees, open artistic capability. Root accepts this as a research verdict, not an approved product change.

## Verdict / proposed next step
Worth a small prototype ahead of more PNG-model comparisons: direct indexed-pixel authoring bypasses hidden-grid inference and destructive shrinking. Exact integer coordinates/dimensions, palette and chosen alpha rules can be enforced by code. This prevents unintended interpolated colours, but not semantic colour spill (wrong allowed colour in wrong cells), bad anatomy, poor clusters or lost identity. A stronger language/vision model still may be a poor artist. No claim of solving art or animation.

Proposed minimal engine: validated declarative commands only, integer rasterisation/no antialiasing, palette indices, explicit layers, rectangles/polygons/masks and batched row-RLE or patches; reject invalid commands atomically. No arbitrary generated code/shell. Preserve operation log, undo and original; deterministic1x/integer-zoom previews. Show references plus coordinate-aware inspection, not only enlarged images. Require permitted references, no assumed right to scrape/train on asset packs. Explicit layered drawing is possible; layers alone do not create rigs, occluded anatomy or good walk poses.

Suggested future feasibility test: one32x48Bram and one simple object, custom brief/style not a universal base; compare one-pass commands against a separate run with at most2 corrective rounds, retain first/intermediate results. Mechanical100% dimension/palette/export validity is distinct from human art pass. Require recognisable identity/asymmetry, coherent native-size silhouette, named repairs improving without unrelated changes, and no human anatomical redraw. Record full cost (planning, command text, reference/preview vision, corrections including failures), wall time and manual correction. Tiny16x32 constraints do not imply arbitrary details can fit; explicit simplification decisions required. Larger96x192(18,432cells) commands/token cost and animation are untested/deferred. Batch operations avoid one model request per pixel. Do not claim this is cheaper before measured.

Reuse existing workspace/persistence/character book/manual frame playback/export where suitable; no new platform/rewrite or agent team required. Default one tool-capable multimodal model with logical stages and bounded feedback; no model selected in this review. Image-output-only endpoints from preceding model shortlist are not assumed to be tool-calling artists.

## Deferred / handoff
Research complete; user decision on prototype/testing and any new bounded budget remains future. No implementation, account/credential read, model weights, training or provider inference. Prior PNG-model comparison and walking proposal are not approved to execute. HistoricalUS$0.9807695 intact, arms remain off; new spendUS$0. Root owns records. Next: discuss/obtain clear direction, not auto-run.
