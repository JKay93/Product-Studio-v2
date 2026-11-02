<!-- studio {"id":"pixel-animation-studio:run:2026-11-02-cat16-conversion-study","scope":"pixel-animation-studio","type":"run","status":"complete"} -->
# Cat16 offline conversion comparison

## Goal and authority

User says “Let's try it” to a zero-API-cost comparison of the saved cat: A existing nearest conversion, B automatic palette/area reduction, C B with explicit feature priorities. No new artwork generation, model/provider requests, downloads, dependencies, UI, training or animation. No credential, actual financial or .runtime access. Previous paid allowances and uncertain holds remain untouched. Git delivery of Studio records follows standing authority; application has no remote.

Fixed source: Pixel-Animation-Studio/output/cat16-reference-2026-11-02/original.png, 384×688, SHA256 de5f04f3ca33eaa8919f5d111839d36b8f5b3f1a83b40cd59f0443f521f23b71. Baseline target-16x32.png, SHA256 8d4085d8569d3a6af7e9857b3ff9765c38092051ceb6cc625ac702288788ee4b. Source tail is already clipped at the right edge; no recovery attempted.

## Tasks and acceptance

- Builder: isolated offline RGBA helper, focused tests and case exporter using installed Sharp. Preserve previous sources, code and exports.
- Root: locate source feature rectangles, run/inspect native and enlarged comparisons, judge artistic quality separately from mechanics, maintain continuity.
- Independent QA: inspect candidate, source, provenance, exports and reproducibility; no financial files or model calls.
- All outputs 16×32, binary alpha, same keyed source and integer contain geometry (16×29 inside canvas, top offset 1). **A common source mask does not imply an identical target silhouette.** Different sampling/coverage changes the target boundary.
- B has no cat coordinates or landmark input. C is a manually guided diagnostic, not an automatic detector. C uses existing B palette, at most six mapped cells and at most one source-supported leg-gap alpha removal; empty constraints reproduce B. Preserve B pixels outside declared edits.
- Initial candidate plus at most two named offline corrections. No parameter sweep, full redraw, production integration or claim to implement the full Gerstner research algorithm.

## Implementation and evidence

New application files: scripts/cat16-conversion-method.mjs, scripts/cat16-conversion-method.test.mjs, scripts/cat16-conversion-study.mjs, examples/conversion/cat16-feature-priorities-v1.json.

Reproduce from application root into a fresh directory:
`node scripts/cat16-conversion-study.mjs NEW_OUTPUT_DIR examples/conversion/cat16-feature-priorities-v1.json`

Actual output: output/cat16-conversion-study-2026-11-02-v1/. Contains A/B/C native PNGs, exact 16× nearest previews, comparison-1x/16x, source mask, palette, copied feature configuration and method manifest with geometry, hashes, source support and changed cells. Outputs remain local under the existing ignored output directory; scripts/configuration are versioned.

- A: unchanged nearest baseline, 238 opaque pixels, 186 opaque colours.
- B: deterministic weighted median-cut grouping with actual source RGB representatives; foreground-only palette assignment and exact fractional-area categorical vote, opaque coverage ≥0.5. Twelve palette entries, ten used, 237 opaque pixels. PNG SHA256 2fd5c3e53981724c8bd94d37637895f2739a9f428b7f2915a39657329b80353b. No interpolation, dithering or landmarks.
- C: manual source ROIs for two eyes, nose, mouth and empty leg gap; projected overlap selects bounded target cells. Only one cell changes: right eye (8,10), orange [218,144,38] to existing dark [49,15,31]. No alpha change; other priorities already have matching cells. SHA256 7fe08fff6db63dfd1832d1129b504af9e1e0d8dbfa78071f134ad541b52dc484.
- A→B alpha differs at **53 cells**, despite nearly equal opaque totals. This is palette plus sampling/coverage, not a palette-only change or preserved target silhouette.

Root verification: six focused tests pass (fractional area, alpha/palette, geometry, determinism, bounds/budget, actual constrained changes). Fresh in-memory regeneration exactly matches saved B/C decoded bytes; A byte-identical, source hash unchanged, exact dimensions/binary alpha. No correction rounds used. No provider calls or new API spending; financial state was not read or changed.

## Review and judgment

Routing read before dispatch: harness/role-routing.json SHA256 1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F. Builder requested gpt-6.1-sol/low/fork none, agent /root/conversion_builder. QA existing requested gpt-6.1-sol/medium/fork none checked against current route before follow-up to /root/goth_context_qa. Actual backend activation unknown.

Independent QA: **mechanical PASS, visual PARTIAL**. Verified six tests, actual regeneration, original/baseline integrity, palette source membership, alpha, exact preview crops and C's single allowed eye edit. Confirmed 53 changed target alpha cells and visible hat/foot changes.

Root accepts the bounded experiment and helper, not the art as production quality. B reduces colour noise but weakens hat brim/top, ear separation and some foot/outline structure. C restores the missing right eye; face remains coarse. Overall artistic improvement and production suitability are **not established**. Do not adopt B/C as a production default. A manually annotated single character cannot establish automated feature preservation or model capability.

## Remaining uncertainties and next action

Deferred: structure/edge preservation, automatic feature detection, multiple characters/sizes, human preference checks and production integration. Existing source already has scale/placement limitations; this does not establish a model/runtime cause. Deliver native and enlarged A/B/C, explain manual C and changed silhouette, then await user judgment. No automatic further generation, spending, redraw or platform work. Scoped application files committed locally as 8c66973; no application remote exists. Studio continuity goes to verified JKay93/Product-Studio-v2 under standing authority.

