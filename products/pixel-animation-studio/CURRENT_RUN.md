# Pixel Animation Studio current run

Run: [2026-11-01-native-drawing-self-test](runs/2026-11-01-native-drawing-self-test.md)

Status: completed user's request to try native drawing on current assistant. Offline renderer built/reviewed; root personally drew32x48Bram and performed2visual corrections. No external generation/API spend, no appUI/server integration, no animation.

- App acceptedlocalcommit14f6283, clean, noverifiedremote. Worldfolders/runtime/credentials/financialledgers/arms untouched; botharms off; historicalUS$0.9807695unchanged. Hostsubscriptiontokens/costnotexposed, notclaimedfree.
- Renderer scripts/native-pixel-renderer.mjs (~141lines): integerrectangles/paletterows/pixelbatches,<=32colours/16layers, binaryalpha, bounds/limitsvalidated, exactPNG/layers/8xnearestpreview. 4meaningfulfocusedtests+independentengine/artifactreview PASS. No provider or arbitrarycode path, no newdeps. Transparentdrawing no-op noterase; editingthroughmodifiedcommandsandverifiedrerender, notgenericeditAPI.
- ActualBram:32x48(1536cells),8layers,22opaque colours+transparent. v1->v2eyes/beard23changedpixels, outsidehead0; v2->v3woodhand17changedpixels,outsidehand0. IndependentdecodedPNGs exactlymatchcommands/palette; all3versionsretained. Rootviewedaftereachround; noimagegenerationmodel/resizedsourceused.
- Inlineproof/artifacts: Pixel-Animation-Studio/output/native-drawing-self-test/before-after.png (first/final8xandtrue1x),v1/v2/v3native.png/zoom/layers, JSONaudits,session. Sourcecommandexamplescommittedexamples/native-drawing/bram-v1/v2/v3.json. CLI fromappcwd: node scripts/native-pixel-renderer.mjs examples/native-drawing/bram-v3.json output/new-native-example (newdirectory).
- Verdict: mechanicalgrid/palette/editcontrol demonstrated. Art is a recognisable roughfarmer, face/nose/woodhandcrude. Notindustryquality/referencefidelity/animationpass. Currentassistantmanualtooluseproof, not autonomousOpenRouterharnesscomparison. No statisticalquality/costclaim.
- Previous [native-harness suggestion review](runs/2026-11-01-native-drawing-harness-review.md) read all5turns ofChatGPT **LoRA Training Explained**. Directpixelcommands plausible; citedRenderInLoopusedtraining/SVG andPXGTinytrained/restricted16x16. Neitherprovesofftheshelfpixelartistquality.
- [Earlier model research](MODEL_EVALUATION.md) shortlistSunburst/NanoBanana2.1/SeedFlash PNGcomparisonUS$2/12calls NOTapproved. LoRAtraining/fal/morecharacters/animation/walkingNOTapproved. Noautomatednextphase.
- Next: userjudgesdisplayedart and choosesdirection. Canreuseexistingworkspace later; do not rebuildplatform orstartpaidcallsfromthispointer.
