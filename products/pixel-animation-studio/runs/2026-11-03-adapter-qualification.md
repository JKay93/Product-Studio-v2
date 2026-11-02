<!-- studio {"id":"pixel-animation-studio:run:2026-11-03-adapter-qualification","scope":"pixel-animation-studio","type":"run","status":"complete"} -->
# Pretrained pixel adapter qualification

Goal: user says proceed and return the result after correcting the laptop assumption. Complete the public-evidence qualification of the existing Limbic/Klein4B candidate, including a practical cloud runtime and cost basis. Laptop fit is optional, not a product/selection gate. Existing pretrained LoRAs may be considered; own training remains deferred. Supersedes laptop-gated recommendations in the previous review, preserving their historical evidence.

Scope: public source, model metadata/history, licences and infrastructure pricing only. No inference, generation/conversion, purchases, cloud resources, account/credential/financial/.runtime access, model/repository downloads, installation, app/UI changes or training. No fresh paid authority inferred from generic proceed or previous unused allowances. No outreach to authors without explicit user instruction. Studio continuity delivery remains authorized.

Tasks: Q1 Root checks adapter version/provenance from public files/history and a fixed-cloud deployment option; Q2 bounded Technical Specialist validates exact inference dependencies/weight loading/reference/alpha/size contract from pinned source; Q3 consolidate concrete GO/CONDITIONAL/NO-GO verdicts and independent check of material findings. Workers return concise chat only; Root owns continuity. No Builder needed for source review.

Acceptance: do not claim locally run or performance-tested. Distinguish licence grants from provenance assurances, base from adapter, original from republished weights, large raster from logical pixel grid, and quoted GPU rates from measured cost per accepted sprite. Provide exact available artifact/version and reproducible future runtime recipe where supportable; otherwise identify the specific unresolved step without guessing. Cloud compute remains unprovisioned and unapproved. Finish with a decision, not another unbounded research plan.

Inputs: previous independent-pixel-feasibility run and linked primary sources. Selected family remains pretrained pixel adapter on Klein4B; no new catalogue sweep. PIA remains research reference; SD-πXL's laptop constraint is removed but published multi-hour processing remains a product trade-off. Next: public artifact/history and cloud/runtime checks.

## Qualification result — source review, not execution

**Decision: conditional GO for one research pilot; NO-GO for production adoption or claiming exact-size sprite capability.** No proprietary competitor generation API is required. Laptop fit is removed as a gate. Source review cannot establish a runtime pass or visual quality; no load/inference was performed.

| Gate | Result |
| --- | --- |
| Obtainable artifact and loading route | Static PASS: published corrected Diffusers weight, immutable revision and SHA256 identified. |
| Independent cloud operation | Feasible prospective Linux/CUDA route; no resources created and no runtime verification. |
| Software/base/adapter licence labels | Apache2.0 labels found; this does not establish public-domain training data or give a commercial quality/provenance warranty. |
| Training-data account | PARTIAL: public documentation identifies a synthetic generation chain; CC0/count/version claims remain unreconciled. No inference of infringement from this mismatch. |
| Native transparency | FAIL for the standard documented pipeline: VAE has three input/output channels; no alpha generation stage appears in the inspected pipeline. Any future background removal is a separate operation. |
| Logical 16×32 / 32×64 control | NOT ESTABLISHED: recipe controls 512×512 delivery, without a logical-grid parameter or demonstrated size-specific artistic acceptance. |
| Identity, outlines, artistic quality, latency and cost per accepted asset | UNTESTED. Existing standard FLUX results did not use this adapter. |

### Fixed artifacts and candidate runtime

Adapter: Limbicnation/pixel-art-lora, revision **0ac8e5c3400af68228811edc324721e25fc26777**, file **pytorch_lora_weights.safetensors**, size325,280,664 bytes, SHA256 **72ac6e652196cd9f450d4d3256d197978d3fa690e22dc21361d3bd4fb4e8250e**. The [republish commit](https://huggingface.co/Limbicnation/pixel-art-lora/commit/0ac8e5c3400af68228811edc324721e25fc26777) records Diffusers-native format/metadata; the separate ComfyUI file and old hash d0414baa… are not interchangeable assumptions. This fixes a documented loading issue in source history, not a locally verified compatibility result.

Base: black-forest-labs/FLUX.2-klein-4B, [revision e7b7dc27f91deacad38e78976d1f2b499d76a294](https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/commit/e7b7dc27f91deacad38e78976d1f2b499d76a294).

Prospective Linux/Python3.11/CUDA12.6 software pins: Torch2.7.1, Diffusers0.37.1, Transformers4.57.6, PEFT0.20.0, Accelerate1.12.0. Release source/package metadata was inspected: [Diffusers](https://raw.githubusercontent.com/huggingface/diffusers/v0.37.1/setup.py), [Transformers](https://raw.githubusercontent.com/huggingface/transformers/v4.57.6/setup.py), [PEFT](https://raw.githubusercontent.com/huggingface/peft/v0.20.0/setup.py), [Accelerate](https://raw.githubusercontent.com/huggingface/accelerate/v1.12.0/setup.py); the specialist checked official Torch previous-version instructions. These are top-level candidate pins, **not a resolved transitive lockfile, tested container or compatibility certification**. First future environment setup must resolve dependencies, record the complete lock/container digest, run package/import checks and stop on failure before inference.

Future load recipe: Flux2KleinPipeline.from_pretrained with the base revision and torch.bfloat16; load_lora_weights with the adapter revision, explicit weight_name above and use_safetensors=True; enable_model_cpu_offload if needed. Use fixed seed0, four steps, guidance1, height512/width512 for the creator-recipe smoke case. No loading or generation command was executed.

The [released pipeline](https://github.com/huggingface/diffusers/blob/v0.37.1/src/diffusers/pipelines/flux2/pipeline_flux2_klein.py) accepts image=PIL.Image or a list for reference conditioning, but offers no unchanged-region/identity guarantee or logical cell-size control. The [base VAE config](https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/blob/main/vae/config.json) has in_channels=3/out_channels=3. The creator's transparent RGBA claim is therefore unsupported by the standard pipeline; prompting for transparency does not add an alpha channel.

### Provenance outcome

The [model history](https://huggingface.co/Limbicnation/pixel-art-lora/commits/main) shows the comprehensive model card preceded v2 training weights. The v2 [training config](https://huggingface.co/Limbicnation/pixel-art-lora/blob/main/config.yaml) points to a private hf_snapped training folder. That chronology could explain stale claims; it does not reconcile the actual training set.

The [public dataset card](https://huggingface.co/datasets/Limbicnation/pixel-art-character/blob/main/README.md) describes 500 synthetic images made through Z-Image-Turbo, Qwen-Image-Edit-2511 and a multiple-angles adapter, with an Apache2.0 distribution label. This differs from the model card's all-CC0 and1,010-image claims. Z-Image and Qwen publisher metadata independently show Apache2.0; the third named adapter's page could not be verified in this pass. No per-image manifest linking the actual v2 training set was verified. Treat it as a pretrained synthetic-data adapter with an unresolved documentation/provenance gap, not verified CC0 art. Do not repeat the dataset author's unsupported legal assurances or claim the mismatch proves infringement. This uncertainty is retained for a research pilot; production adoption is not cleared.

### Cloud cost basis and boundaries

One concrete unprovisioned option: a single Linux **A40 48GB** Pod, advertised **US$0.59/hour**, with80GB temporary container disk. This is a capacity choice with headroom, not a measured peak-memory guarantee. [Runpod public pricing](https://www.runpod.io/pricing), accessed3November2026. Actual availability/rate/cloud tier must be verified at provisioning. Container disk is listed atUS$0.10/GB/month;80GB isUS$8/month prorated. Illustrative one-hour compute plus disk is approximatelyUS$0.60 before tax/any separately applicable fees, assuming730hours/month; this is arithmetic, not a session quote.

[Pod billing documentation](https://docs.runpod.io/pods/pricing) bills compute/storage by time and requires at least one hour of configuration credit for an on-demand deployment. Minimum top-up/payment requirements were not checked. Installation, model transfer/loading, failures and idle time count toward experiment cost. Persistent disks can continue billing after compute stops. No pod, volume, account, payment, worker or subscription was created or inspected.

Proposed future ceiling: **US$2 TOTAL**, including setup, failed attempts, idle time, temporary storage and generation, and at most60minutes wall time on this proposed rate. This is an unapproved experiment ceiling, not an existing allowance or per-image quote. Auto-pay off, one resource, no serverless/always-on endpoint; terminate compute and remove temporary resources after preserving results. If rate/top-up/fees cannot fit, stop before provisioning. No price per sprite or “cheaper than Nano” claim is justified until full-session accepted-output cost is measured.

SD-πXL laptop feasibility is no longer an exclusion. Its published1.5–2.5hours per image remains material: at the currently advertised RTX4090US$0.89/hour, that would be aboutUS$1.34–2.23 compute per image before setup/storage, **if published runtime carried over**. This is an estimate, not a quote or our benchmark. Defer it for current low-cost interactive aims; cloud hardware alone does not remove the latency/economics trade-off.

### Fixed pilot proposal and stopping conditions

If a later explicit cloud budget/access authorizes execution, use the previous fixed cat/male/goth briefs at16×32 and32×64 (six size-specific outputs), one documented setting per size, no retries or per-character repairs. Preserve raw RGB and report delivery raster versus inferred logical lattice separately. A512×512 image can contain a16×32 logical sprite with padding; inspect the art's grid and occupied bounds rather than reject it merely for its PNG dimensions. Don't shrink arbitrary illustrations and call that native-size compliance.

The hypothesis is narrower than “LoRA solves pixel art”: does pixel-specific pretrained adaptation produce size-appropriate structure that survives lossless grid recovery, with clean outlines and recognisable identity? If there is no defensible common square-cell grid at the requested logical size, record failure; do not invent a converter, manually redraw or spend unused funds on replacements. Alpha remains a separate unsupported pipeline capability. This six-case pilot tests text generation only; a reference-identity/edit pilot would be separate, not silently doubled to12calls. Mechanical size/grid checks, visual art and character fidelity remain separate; animation is deferred. Freeze prompts/seeds/canvas policy and human pass criteria before launch.

### Outcome, review and handoff

Q1/Q2 complete. Technical Specialist /root/independent_pixel_checkpoint reused after current route/role read: requested gpt-6.1-sol/medium/fork none, routing SHA2561C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F; actual backend activation unknown. Returned exact corrected artifact/base revisions and static runtime recipe; no inference. Root pinned Accelerate1.12.0 from release source and retained untested-lockfile qualification.

Q3 complete: independent reviewer /root/goth_context_qa (requested gpt-6.1-sol/medium/fork none, existing route verified against the same current routing hash before follow-up; actual activation unknown) returned PASS. Verified artifact revision/hash/size, three-channel alpha limitation, candidate release pins, chronology/provenance qualifications, pricing arithmetic and six-text-output scope. Root accepts the completed qualification and research recommendation, not runtime compatibility, artwork or production adoption.

User-facing result is a qualified research candidate, two documented feature gaps and a cost-bounded proposed deployment. No model execution, image generation, training, downloads/installs, application changes or new external API/hosting spend. Host chat/subagent costs are unexposed and not asserted zero. Application remains at8c66973 with no remote; no app commit needed. Studio continuity delivered to verified JKay93/Product-Studio-v2 under standing authority, remote receipt in host history.

Questions resolved: laptop compatibility is optional, pretrained adapters permitted, own training deferred. Open: actual load compatibility, logical-size artistic performance, alpha stage and fully reconciled training provenance. Qualification work is complete. Next proposed action is the fixed cloud pilot with safeguards/account access and explicit new total budget; no automatic provisioning, download, inference, prototype or commercial adoption follows this review. Prior Nano allowances and uncertain holds stay untouched.

