# Pixel Animation Studio current run

Run: [2026-11-01-native-drawing-harness-review](runs/2026-11-01-native-drawing-harness-review.md)

Status: read full ChatGPT chat **LoRA Training Explained** (6ae66a0c-7cc4-83ec-b316-e906b84b81bc, all5turns) and evaluated latest native drawing-harness suggestion. Research only; no implementation, model choice or new spending approved.

- Latest suggestion is an untrained tool-capable vision-language model emitting validated drawing commands on an indexed logical grid, local deterministic rendering/layers, visual feedback and bounded repairs. Not another PNG-generation or LoRA-training proposal.
- Verdict: technically feasible and worth a small test; renderer can guarantee dimensions/palette/no interpolation. Semantic colour placement, anatomy, identity, style and animation remain unproven. Colour bleeding as blending vs wrong allowed colour placement are distinct. Need human artistic acceptance.
- Primary evidence checked: Render-in-the-Loop paper explicitly used trained visualfeedback; naive off-the-shelf loop suboptimal. SVG results are not proof of pixel-sprite ability. PXG-Tiny is trained/restricted16x16,32colours,38classes, with procedural priors and retries; not an untrained general harness proof. Links and independent technical opinion in run.
- Proposed future minimum: one model, batched integer shapes/masks/palette rows/patches, explicitlayers/undo, native plus nearest-neighbour previews, <=2correction rounds; one32x48Bram andsimpleobject first. Onepass baseline vsfeedback; all model/vision/correction costs and latency, human artpass. No fixed dollar estimate/model selected yet. No arbitrary generated code or automatic persistent agent team. Largergrids/walks deferred. Reuseexisting platform rather than rebuild.
- Earlier [model evaluation](MODEL_EVALUATION.md):62catalogue entries/21endpoint snapshots; Sunburst/NanoBanana2.1/SeedFlash PNG challengers remain untested, proposedUS$2/12call phase NOT approved. Harness is a different output interface; do not silently start old comparison or walking plan.
- No provider inference/weights/training/account/credential read or server change this review. Both arms off; historicalUS$0.9807695 retained, no new spend. App remainsunchanged, lastacceptedlocalcommit28367e0, noverifiedremote; Worldreferencesuntouched. Existing92tests verifyolderharness, not this proposeddrawingengine.
- Next: user direction on whether to prototype the native drawing approach and agree any paid test separately. Do not auto-run from this pointer.
