<!-- studio {"id":"world:run:2026-10-29-model-shortlist","scope":"world","type":"run","status":"completed"} -->
# Model selection: cost and accuracy before speed

## Authority and criteria
User requests a model comparison/recommendation for World through OpenRouter, prioritising cost and accuracy over speed. Research only; no generation calls, key use, activation or implementation. Preserve existing strategy and company-template assistant scope. Root owns research/record; independent QA checks the recommendation and source limits.

Criteria: choose the lowest cost per accepted whole job after a minimum quality gate, rather than the lowest token rate. Quality includes factual fidelity to supplied material, correct tools, template preservation, follow-up corrections and sensible clarification. Permission or approval failures disqualify a candidate. Speed breaks ties after cost and quality. Published broad benchmarks are screening evidence, not World accuracy or pass percentages.

## Price evidence, 29 October 2026
Read public unauthenticated OpenRouter /api/v1/models/{model}/endpoints. Select standard originating-provider endpoints, not cheapest aggregate headline prices, batch, flex or promotional inference hosts. All four chosen endpoints advertise tools/reasoning, but metadata is not a successful protocol test.

| Model and exact endpoint tag | USD input/output per million tokens | Illustrative 10k input + 2k billable output |
| --- | --- | --- |
| anthropic/claude-haiku-5.5 · anthropic | 0.10 / 0.50 | $0.0020 |
| z-ai/glm-5.3-flash · z-ai/fp8 | 0.15 / 0.50 | $0.0025 |
| google/gemini-3.8-flash · google-ai-studio | 0.75 / 3.75 | $0.0150 |
| openai/gpt-6.1-terra · openai | 1.00 / 5.00 | $0.0200 |

These are arithmetic illustrations, not measured job costs. Include all model/tool-result rounds, billed reasoning, errors, retries and cache charges in live measurement. No cache discounts or credit-purchase fees included here. Rate tiers and endpoint prices must be refreshed at activation. World currently caps output per round at1500; the2k example can represent aggregated output across calls and is not proposed configuration.

Sources: [Haiku OpenRouter](https://openrouter.ai/anthropic/claude-haiku-5.5), [GLM endpoints](https://openrouter.ai/api/v1/models/z-ai/glm-5.3-flash/endpoints), [Gemini OpenRouter](https://openrouter.ai/google/gemini-3.8-flash), [Terra OpenRouter](https://openrouter.ai/openai/gpt-6.1-terra). Public endpoint pricing checked directly without credentials. DeepSeek was also inspected, but its generic V4.1 Flash route has many third-party variants; the newer1017 benchmark cannot be assigned to that older generic model. Keep it outside this small initial bake-off until an exact version/host pair is selected; do not call it inferior.

## Quality and speed evidence
[Artificial Analysis Haiku5.5 Max](https://artificialanalysis.ai/models/claude-haiku-5-5) reports intelligence index36, output240tokens/s, and very high reasoning/output volume on its evaluation. [Terra Max](https://artificialanalysis.ai/models/gpt-6-1-terra) reports51 and91tokens/s. [Gemini3.8Flash High](https://artificialanalysis.ai/models/gemini-3-8-flash) reports31 and140tokens/s. [GLM5.3Flash](https://artificialanalysis.ai/models/glm-5-3-flash) currently lacks an updated aggregate index and reports74tokens/s. Settings, hosts, tokenizers and evaluation coverage differ; these are not controlled latency measurements or World task accuracy. Do not infer lower-effort accuracy from Max results or assign zero quality to missing data. Aggregate index methodology recently changed; avoid mixing older scores with current ones.

[Official Terra documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra) requires Responses API for tool calling. OpenRouter advertises tool support, but its Chat-Completions translation into this model is not yet verified in World's actual adapter. This is a compatibility gate, not proof of incompatibility or permission to rewrite now. The current1500-output-token limit and absence of explicit reasoning-effort configuration may constrain reasoning models; test/adjust explicitly within cumulative allowance rather than comparing accidental truncations as model-quality failures.

## Recommendation and proposed next check
Provisional starting candidate: Haiku5.5 for economical text/Knowledge/tool work, based on current evidence rather than prior Claude preference. Challenger: GLM5.3Flash for comparable low-cost work. Higher-capability comparator: Terra, subject to the tool protocol gate. Gemini is reserve for later document/multimodal needs, not the first paid test given this price/evidence snapshot. Do not enable automatic model routing or declare a winner yet.

Propose a small matched live check after explicit allowance: three candidates, same authorised/synthetic fixtures and scoring,12 scenarios each (36 jobs), bounded enough to stop if US$1 total cannot cover the suite. Categories: vague request, simple extraction, grounded answer, absent fact, competing templates, exact structure, follow-up correction, earlier fact retrieval, factual consistency, current-source change, approval separation and missing information. Freeze expected answers before running. Report successful/failed cases, grounded fact accuracy, all-round cost per accepted job, total tokens including reasoning where exposed, total charged/uncertain cost and end-to-end duration. Cost per accepted job equals total cost of all attempts, including failures, divided by the number of accepted jobs. With zero accepted jobs, this metric is undefined and the candidate has not demonstrated usable value. Unknown charges stay held. The first36 jobs are a screening sample, not statistical proof; do not invent a pass rate before testing. Budget US$1 remains proposed, not authorised.

## Status
Research complete; independent review requested from existing /root/m4_review, recorded gpt-6.1-sol/medium/none, routing hash1C46027A5AABE051940D9F912FC39A77D1068F68E6B04FE4BC3DCDF7DA997E3F unchanged; actual host activation/usage unknown. No application/configuration change, provider inference or financial spending. Independent review verified primary benchmark figures, price arithmetic and the Terra compatibility caveat; corrected its finding to include failed-attempt costs in the numerator, never failures in the accepted-job denominator. Research accepted for delivery; live inputs remain a separate gate.
