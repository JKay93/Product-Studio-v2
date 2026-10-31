<!-- studio {"id":"pixel-animation-studio:run:2026-11-01-sprite-size-tests","scope":"pixel-animation-studio","type":"run","status":"complete"} -->
# Sprite resolution comparison

## Goal and authority
User requests small sprite-size tests including16x32 and32x64 after discussing native sprite export. Root stated zero-spend saved-art comparison. Use corrected-hands.png from previous run; do not call providers, change financial ledger/arm, animate or overwrite originals. App has no remote.

## Tasks and acceptance
- B1 Builder: reproducible offline Sharp script exporting16x32,24x48,32x64,48x96,64x96,64x128 PNGs and labelled nearest-neighbor comparison. Character-framing crop documented; maintain aspect ratio and use consistent source/crop. Include native1x sizes and equal-height enlarged comparisons, label as downsampled existing illustration, not native generated sprites. Validate exact dimensions and unchanged source.
- Q1 Independent QA: verify crop/frame ratio preservation, nearest-neighbor path, dimensions, proof no source/ledger edits/network and honest labels.
- R1 Root: inspect contact sheet at native/enlarged sizes, report material readability losses and recommend next resolution test; retain local artifacts and commit accepted helper/records.

## Starting evidence
App d66ed80; source output/region-editing/corrected-hands.png1024square. Previous cumulativeUS$0.3410865, holds0, unusedUS$0.1589135, five attempts, disarmed. Prior phase results are not evidence of animation-ready sprites. No new spend authority.

## Questions / deferred / next
None outstanding. Offline size tests complete; user reviews comparison and chooses desired art scale. Native generation quality and animation deferred. No further provider authority granted.

## Evidence and decisions
Application delivery: local commit2f12c821428039464002bfd00d74265acba9e309, clean worktree, no remote. Artifacts ignored/private local only. Studio continuity commit includes only this run/current pointer and goes to verified origin main.
Builder /root/sprite_size_builder requested gpt-6.1-sol low none; QA /root/sprite_size_review requested gpt-6.1-sol medium none. Routing hash1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; actual activation unknown. Root owns continuity, workers limited offline helper/artifacts or read-only QA.

Helper scripts/compare-sprite-sizes.mjs uses existing Sharp, no new dependency. Six exact-size exports, manifest and1600x810 labelled contact-sheet.png under ignored output/sprite-size-tests. All use same448x832 framing crop from1024square source, nearest-neighbor proportional fit/padding. Actual fitted sizes:16x30,24x44,32x59,48x89,52x96,64x119; target canvases16x32,24x48,32x64,48x96,64x96,64x128. Cream retained; these are downsampled illustrations, not newly generated/native pixel art or transparent game assets.

Root inspected contact sheet native and enlarged rows. Subjective visual result:16x32 loses facial/prosthetic details;24x48 improves silhouette but remains rough;32x64 readable character with reduced distinctive hand detail;48x96 and64x96 retain more face/hand information;64x128 most detail but larger asset. Recommend64x96 for current Bram identity/detail,32x64 if intentional simpler style with cleanup; not a universal game resolution decision. Resampling still leaves uneven pixel clusters; does not establish animation consistency or model low-resolution generation capability.

Builder execution/assertions and root syntax/diff checks pass. Immutable hashes before/after: source1E6264875AE4CCD16B60312DE05ACFA3AEACABE443E76CC335026865C581D624; ledger00F6301124A723BABE60709C020F9F5D987FD81A07C399C117D420851DB4327E; arm1EB01FC4C1DA8CEECC8E12AA50316A17668F198C3CF6EEC9730EA8464D2149D2. New spend0; prior financial state unchanged. No UI/server behavior modified, so no broad application regression rerun necessary. Independent QA PASS on helperSHA256E07B79D7603AB0E8DE19E77E71F57BB26138289BF8D16A6C5D719329669DD31B: six exact dimensions, hashes, proportional crop/padding, native sheet pixels, nearest384px enlargement, visual labels, source/ledger/arm immutability independently verified read-only in memory. No findings. Root accepted helper and artifacts; local application commit only because no remote. Studio continuity delivery uses verified Product-Studio-v2 repository.
