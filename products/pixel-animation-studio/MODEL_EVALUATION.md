<!-- studio {"id":"pixel-animation-studio:research:model-evaluation-2026-11-01","scope":"pixel-animation-studio","type":"research","status":"proposed"} -->
# Sprite model evaluation — 1 November 2026

This is a completed zero-spend capability/pricing evaluation and proposed experimental shortlist. It is not a new live benchmark or a demonstrated model-quality ranking. Research was checked against public provider metadata, official documentation, creator model cards and the project's saved outputs. User values accuracy and cost; speed is secondary.

## Recommendation

Do not treat the existing Gemini Flash integration as the selected production sprite renderer. No model has passed this project's exact-grid, identity-preserving asset workflow. Retain its saved artwork as the historical concept/reference baseline.

For a bounded OpenRouter comparison, advance these three different hypotheses:

1. **openai/gpt-image-2.5-sunburst:** precision/editing challenger, with transparent-background and quality controls. The developer positions it for precise editing. This justifies testing, not an accuracy win.
2. **google/gemini-nano-banana-2.1:** Google successor challenger, retaining the same broad reference-generation workflow and a lower image-output token rate. Input/text-output rates are higher than the existing Flash; do not promise half-price requests.
3. **bytedance-seed/seedream-5-0-flash:** predictable low-cost challenger, with reference editing, seed and portrait aspect controls. It has no established pixel-grid advantage.

Defer animation until a candidate passes a usable logical-grid base and reference-edit test. If these candidates all fail, stop this general-model experiment and evaluate a specialised pixel pipeline. Do not keep purchasing progressively more expensive general models without a specific new capability hypothesis.

For a separate specialist experiment, the existing **Limbicnation/pixel-art-lora on compatible distilled FLUX.2 Klein 4B** is a practical low-cost candidate with hosted create/edit routes. **e-n-v-y/Krea-2-Pixel-Art** is more explicitly documented around logical 32/64/128 grids, but the inspected hosted LoRA route lacks reference-image editing. Neither is a validated replacement. These are custom adapters, not the standard FLUX/Krea entries on OpenRouter.

## What was actually evaluated

- Read all **62 image-catalogue entries** in the current OpenRouter public Images API catalogue. This count includes variants/older models, not 62 independently tested architectures. Sixty-one list image input; one is text-only. Text/image modality alone does not prove useful editing.
- Deep-checked **21 public model/endpoint snapshots**: three OpenAI endpoints and eighteen other endpoints, with model pages used to clarify charges. Screened other catalogue entries by model role, modality and variant relevance.
- Separately examined pixel-specific adapters and hosting schemas; no weights downloaded or inference performed.
- Reopened saved Bram and cozy base/edit comparison sheets and reviewed existing raw-output metrics.
- Two Technical Specialists reviewed current general-model and specialist routes; a Product Manager challenged acceptance/budget methodology. Requested gpt-6.1-sol / medium / fork none, backend activation unknown. Root verified key sources and consolidated findings.
- Public unauthenticated documentation/metadata requests only. No credential, credit-balance or account reads, no paid generation, training, subscription, server refresh or application-code changes.

Public snapshots are preserved under the application's ignored `output/model-evaluation/`: catalogue.json, three GPT endpoint JSON files and non-openai-endpoints.json. They are supporting observations, not committed app state. Prices are USD and can change.

## The actual requirement

Evaluate these separately:

| Requirement | Evidence needed |
| --- | --- |
| Description to character | Required proportions, style, pose, colours and anatomy from a fixed brief. |
| Concept reference to character | Recognisable age, face/hair, costume, silhouette and asymmetric features. |
| Existing sprite to variant | Preserve an authentic source grid, palette/identity and unchanged areas. Still untested: an actual authored source was unavailable. |
| Requested logical size | A common square-cell grid whose recovered asset fits the specified logical cell, with documented padding/origin. A large delivery canvas can qualify; shrinking an arbitrary illustration to the right file dimensions cannot establish the pass. |
| Local edit | Requested change, identity preserved and unrelated areas unchanged or visibly within an agreed tolerance. Model output versus app-side crop/compositing must be reported separately. |
| Animation | Pose order, identity, anatomy, stable scale/pivot, contacts and loop continuity. Not evaluated by this research or the earlier standard-model comparison. |

Image size, visible character bounds, logical sprite resolution and atlas/frame dimensions are distinct. More image megapixels or a claim of rendering 10px text is not evidence of an exact sprite grid.

## General-model shortlist and cost basis

| Model | Verified public billing / controls | Evidence and decision |
| --- | --- | --- |
| **openai/gpt-image-2.5-sunburst** | $30/M image-output tokens; $8/M image-input tokens; $5/M text-input tokens. Six quality levels, transparent background, up to16 references. No fixed per-image price inferred. | Best documented precision challenger; no project sprite outputs yet. Advance. [Model](https://openrouter.ai/openai/gpt-image-2.5-sunburst), [endpoint](https://openrouter.ai/api/v1/images/models/openai/gpt-image-2.5-sunburst/endpoints). |
| **google/gemini-nano-banana-2.1** | $30/M image-output tokens; public page also lists $1.50/M input and $7.50/M text output. 1K/2K/4K, up to14 references. | Successor/editing claims make it worth comparing. No grid, identity or total-cost result measured here. Advance. [Model](https://openrouter.ai/google/gemini-nano-banana-2.1). |
| **bytedance-seed/seedream-5-0-flash** | Seed endpoint $0.018/output image, image inputs $0; 1K/2K, up to14 references, seed, 1:2 and other ratios. | Clear low-cost alternative, reference-friendly billing. Quality untested. Advance. [Model](https://openrouter.ai/bytedance-seed/seedream-5-0-flash), [endpoint](https://openrouter.ai/api/v1/images/models/bytedance-seed/seedream-5-0-flash/endpoints). |
| google/gemini-3.1-flash-image | AI Studio $60/M image-output; $0.50/M input and $3/M text-output shown on model page. Prior six requests averaged **$0.0680693** actual total each. | Existing concept/identity baseline, not a native-sprite winner. Reuse saved evidence; fresh matched control only if budget explicitly covers it. [Model](https://openrouter.ai/google/gemini-3.1-flash-image). |

The token prices above are not per-image quotations. Identical token rates do not imply identical image costs: quality, output token count and references matter. Higher input costs can offset lower output rates. Do not use the old Flash's image-token count as an asserted price for Sunburst or Nano Banana2.1.

OpenAI's current official guide distinguishes Sunburst's editing focus from Flare's speed focus, documents transparency and large-raster custom-size limits, and explicitly warns of character/layout inconsistency. Its minimum pixel count is655,360, so direct64x96 output is not a documented option. An enlarged, correctly gridded sprite remains a hypothesis to inspect. The public OpenRouter endpoint exposes fewer controls than the direct vendor API: never assume vendor masks, arbitrary size or fidelity settings are available through the selected route. [Official OpenAI documentation](https://developers.openai.com/api/docs/guides/image-generation).

None of the deep-checked general endpoints exposes a documented logical-sprite-cell constraint, fixed palette, walking-frame correspondence or guaranteed local pixel preservation. This is a capability gap in the inspected contract, not proof that every generated image must fail.

## Alternatives screened and why they are not first

The following are comparisons of documented controls and costs, not measured sprite accuracy. Output fees exclude any separately listed input fee. Where metadata omits a fee, do not invent a free-input guarantee.

| Exact model ID | Snapshot billing | Decision |
| --- | --- | --- |
| openai/gpt-image-2.5-flare | Same $30/M output-image, $8/M input-image and $5/M text-input rates as Sunburst. | Speed-oriented alternative; accuracy is currently the bottleneck. Same rates do not guarantee same per-image cost. |
| openai/gpt-image-2 | Same token rates; endpoint background enum is auto/opaque, unlike2.5 transparency option. | Older route with no established sprite advantage. |
| black-forest-labs/flux-3-image-klein | $0.008 at768; $0.009 at1K; $0.011 at1.5K; $0.014 at2K; $0.036 at4K output. PNG, seed, up to10 refs. | Strong cheap reserve. Prior FLUX2 failure says nothing conclusive about FLUX3. No grid-specific evidence; cap initial model count. |
| black-forest-labs/flux-3-image | $0.041/768, $0.048/1K, $0.070/1.5K, $0.100/2K, $0.607/4K output. | Premium without documented logical-grid advantage. |
| black-forest-labs/flux.2-klein-4b | Metadata $0.014/output MP; descriptive pricing uses first/additional MP schedule. Prior six actual calls averaged $0.0156667. | Existing failure evidence on Bram identity and inconsistent pixel clusters; don't repeat plain-FLUX test as a LoRA test. |
| black-forest-labs/flux.2-max | Endpoint lists $0.070/output MP; model page describes first-output-MP pricing and $0.03/input MP. | Incomplete endpoint tariff for bounding; premium, no grid-specific reason to advance. |
| google/gemini-3-pro-image | $120/M output-image and $2/M input-image; public page $12/M text output. | Higher expense without measured sprite advantage. |
| google/gemini-3.1-flash-lite-image | $30/M output-image listed; 1K only, up to14 refs. | Cost-tier hypothesis overlaps newer Google challenger; no demonstrated precision advantage. |
| bytedance-seed/seedream-5-0-lite | $0.035/output, input images $0, 2K/4K. | Larger delivery tiers do not establish better small-grid control. |
| bytedance-seed/seedream-5-0-pro | $0.045/output, high_resolution variant $0.090; $0.003/input. | Precision reserve if first comparison identifies an edit-specific weakness. Variant-to-resolution mapping needs confirmation before bounds. |
| qwen/qwen-image-2.1-turbo | $0.0184/output at1K/2K, image inputs $0, up to4 refs, seed. | Competitive cost reserve; overlaps Seedream Flash test hypothesis. |
| qwen/qwen-image-3 | $0.030/output at1K/2K plus $0.003/input; up to3 refs. | No documented pixel-grid advantage. |
| qwen/qwen-image-3-pro | $0.040/1K or $0.075/2K output plus $0.003/input. | Detail/text claims do not establish sprite-grid control. |
| sourceful/riverflow-v2.6-pro | $0.130 standard, $0.150/2K, $0.170/4K output; transparency, up to10 refs. | Useful general asset controls, expensive relative to unproven sprite result. |
| krea/k3-edit | $0.030/1K or $0.060/2K output; $0.020/1K or $0.070/2K per input; optional $0.020 high-thinking surcharge. | Editing-only route requires a reference, so not a full description-to-base candidate; no native-grid guarantee. |
| krea/krea-2-medium | $0.030 normal, $0.035 style-reference, $0.040 moodboard output variants;1K. | Standard model is not the custom pixel adapter. |
| x-ai/grok-imagine-image-2.0 | $0.040 low1K, $0.060 low2K/medium1K, $0.080 medium2K output; $0.010/input. | Plausible general editor, no inspected sprite-specific advantage to justify another initial runner. |

Exact endpoint source pattern: `https://openrouter.ai/api/v1/images/models/<exact-model-id>/endpoints`. Full public catalogue: https://openrouter.ai/api/v1/images/models . Snapshot files retain the fetched fields and timestamps. Other entries include previews, earlier variants, vectors/style models and larger general models; absence from the first comparison is not a claim they are worse at pixel art.

## Pixel-specialist routes

| Candidate | Strength of evidence | Cost / limitation / decision |
| --- | --- | --- |
| **Limbicnation/pixel-art-lora**, FLUX.2 Klein4B | Creator documents pixel-character style, distilled4-step512x512 recipe and LoRA loading. BFL demonstrates this adapter. | fal distilled create **$0.01/output MP**, edit **$0.01/input+output MP**; fal's one1MP reference plus one1MP output example **$0.02**. Compatible hosted loading, actual grid, reference identity and alpha are untested. Practical specialist candidate; no training purchase needed. |
| **e-n-v-y/Krea-2-Pixel-Art** | Separate32/64/128 logical-square adaptations on1024 delivery; creator recommends a dedicated modal-grid/palette refiner. More specific grid evidence than a generic pixel-style prompt. | fal Krea2Turbo LoRA **$0.01/MP**. Inspected schema is text-to-image, without a reference-edit input. This adapter's hosted compatibility, rectangular targets and identity remain unverified. Reserve for description-to-base work, not the full workflow yet. |

Sources: [Limbic adapter](https://huggingface.co/Limbicnation/pixel-art-lora), [BFL guide](https://huggingface.co/blog/black-forest-labs/flux-2-klein-lora), [distilled create](https://fal.ai/models/fal-ai/flux-2/klein/4b/lora), [distilled edit and example](https://fal.ai/models/fal-ai/flux-2/klein/4b/edit/lora), [Krea pixel adapter](https://huggingface.co/e-n-v-y/Krea-2-Pixel-Art), [Krea hosted schema](https://fal.ai/models/fal-ai/krea-2/turbo/lora/api), [Krea pricing](https://fal.ai/models/fal-ai/krea-2/turbo/lora).

These prices correct an earlier overly narrow emphasis on fal's **base** LoRA route. The base-edit route is a different variant at$0.016/input+output MP (example$0.032); do not silently switch model/checkpoint to make a comparison look cheaper. A tiny logical sprite does not imply a tiny billed delivery image, and pricing floors/rounding must be checked before any test.

License/provenance caveats: Limbic weights are labelled Apache2.0, but its card's CC0 claim and dataset description conflict; linked dataset has500 synthetic images and an Apache2.0 label. Do not repeat a verified-public-domain claim. Krea pixel adapter's MIT label does not replace Krea base Community License or service terms. Commercial deployment requires a separate targeted terms review. [Limbic dataset](https://huggingface.co/datasets/Limbicnation/pixel-art-character), [Krea base](https://huggingface.co/krea/Krea-2-Raw).

Exclude the conveniently named fal spritesheet LoRA as a walking solution: its48 curated training pairs are vehicles/objects across camera angles, not pixel-character walk phases. [Model card](https://huggingface.co/fal/flux-2-klein-4b-spritesheet-lora). A fixed grid produced by a refiner is post-processing; its art preservation must still pass visual inspection.

## What our existing measurements establish

| Model | Calls / actual total | Mean full request latency | Quality finding |
| --- | --- | --- | --- |
| Gemini3.1Flash Image | 6 / $0.408416 | 8.301sec | Better Bram age/beard/reference identity; requested patch side wrong in cozy case. Exact logical-grid pass not established. |
| Standard FLUX2Klein4B | 6 / $0.094000 | 9.225sec | Lost Bram age/hair/beard; unstable inferred pixel clusters. Cheap generation did not establish usable sprite value. |

These are three bases plus three edits per model, not six independent characters. Same briefs, but different routes, delivery dimensions and codecs; JPEG noise contaminates raw changed-pixel counts. They are limited observations, not accuracy percentages, an unbiased general leaderboard or statistical proof of latency superiority. Previous code tests verify the harness, not artistic accuracy. Prior grid recovery lost detail; no restart of that rejected method as an assumed fix.

## Acceptance and cost measurement

Use hard accuracy gates before ranking cost. No weighted average can rescue a failed required grid or lost identity.

1. **Logical grid:** exact target after defensible recovery, with common square-cell structure, documented origin/padding and preserved important details. Retain original and processed images separately. Correct output file dimensions alone do not pass.
2. **Identity/instruction:** freeze six visible requirements per brief before generation, including asymmetry. All critical facts preserved; no extra/missing anatomy. Evaluate at1x and integer zoom.
3. **Edit:** requested change succeeds, identity preserved, unrelated changes measured separately; flag app-side compositing. Proposed test tolerance, frozen before dispatch: compare on the validated unchanged logical grid without registration/warping to hide drift; count exact RGBA differences and also differences over16/255 in any RGBA channel. At most1% of outside-selection pixels may exceed that threshold, with no outside-region silhouette/anatomy/identity changes on visual review. These are experimental thresholds, not industry standards. Report codec noise and raw output separately. A stricter app-composited result must have zero changed outside pixels and cannot be scored as native model locality. No invented precision percentage from one example.
4. **Usability:** no manual anatomical redraw; measure active cleanup and actual usable export. Predeclare a small base cleanup allowance (proposed10min), distinct from engineering work and generation waiting. User approves the native-size visual result.

For qualifying results report **each model's own charges including its rejected attempts / its accepted assets**, plus accepted/attempted counts, cleanup minutes and turnaround for that model. Show experiment-wide cost per accepted asset separately as research efficiency; it cannot rank individual models. If none pass, cost per accepted asset is **undefined: zero accepted**, never the low per-image fee. Example only: a$0.018 model needing five attempts costs$0.09 before cleanup, versus one accepted$0.068 result. These are illustrative, not measured acceptance rates.

Do not award documentary 90%/95% accuracy scores. Quality of untested challengers remains unknown. General image leaderboards/photo examples are not representative sprite tests.

## Proposed bounded next experiment — not authorized

PM-reviewed maximum12 attempts across the three challengers, no model substitution/reroll:

- First six: same fixed description brief at32x64 and64x96 logical sizes for each model, one result per cell. Fix supported portrait delivery settings, preserve all raw results and record differing native settings.
- Advancement is size-specific: a passing32x64 result does not establish64x96 capability. Models passing both sizes rank ahead of one-size survivors; if more than two qualify, choose lower own-model cost per accepted screening base, then lower cleanup time, then latency as tie-breaks. No model with zero qualifying bases advances.
- Up to four: at most two survivors receive the same Bram concept at both sizes. The second size checks reference behaviour explicitly; a previous failure is retained, not erased. If no base passes, stop; do not purchase edits or walk frames.
- Up to two: one identical targeted edit per surviving model on its qualifying reference result. Prefer64x96 if both qualify, otherwise use the one qualifying size and mark results as size-specific; do not present different-size edits as matched. If both share only32x64, use that common size. Use conditional pass rates and don't pretend the survivors' edit scores cover eliminated runners.
- Authentic authored-sprite preservation remains explicitly untested until a suitable rights-cleared source exists. A generated concept is not a substitute. Two sizes are different requirements, not statistical repetitions.
- Existing Gemini outputs are historical context. A fresh matched baseline must replace a planned cell within the agreed cap/call count or receive explicit amended scope; no silently added control calls.
- After this screen, advance a model/method to focused validation or reject it for this workflow. One/two examples do not prove production reliability or enable animation by default.

Proposed ceiling **US$2 total new charges plus uncertain holds**, at most12 requests, whichever limit comes first. This is a planning allowance, not a claim all calls can safely fit. Before requesting live execution, verify conservative provider-specific reservations/limits for selected quality/resolution/input settings; token-priced OpenAI Images must not inherit Gemini's$0.22 hold by assumption. If safe bounds cannot be established, reduce scope or exclude that live route and report the limitation. No paid planner/vision evaluator, subscriptions, GPU rental, training, automatic retry or fallback. Root alone handles actual ledger/arm. Preserve all historic charges/holds; stop on technical failure or unknown billing.

No new budget is approved. No fal connection/account is assumed. Current ordinary generation remains off. The completed outcome of this evaluation is a defensible shortlist and explicit decision rule, not a secretly changed default model or a live-quality winner.
