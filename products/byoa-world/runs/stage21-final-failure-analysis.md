# Final Stage 2.1 trial — failure analysis

- Technical Specialist `/root/agent_config_technical`;2026-10-03. Requested gpt-6.1-sol/medium/no-history route freshly matched by root to routing SHA2568E7006FA200C6A88958E5AAEE409AB93C60A3FD7E3765241B3FE7C27246E3A45; actual backend activation unknown.
- Scope: read-only diagnosis of latest CONTRACT/STATE, production document-review source and root's sanitized `tmp/byoa-stage21-final-20261003/{actual-outcome,content-gate-findings}.json`. No original database/environment/credential access, app/pinned-package change, test launch, provider request or spending. This record does not authorize implementation or another trial.

## Evidence and exact cause

The retained nonsynthetic session `bd36e096-f874-41ff-bebd-833f060642a5` failed after A `eaa52f18-11a7-4375-89ee-e9e5493b2a8a`. Provider result ended normally with `end_turn`/terminal `complete`,914 input/477 output tokens, within512. Its validated local raw-token estimate is914+477×5=3299microUSD. Receipt/contribution retain body hash `fdab3f22f6fdb5ebcbe9907e0ca134ff031b770f3251ee9b163e16e0aedd7a37`. Known expense settled; this is neither truncation nor an unknown-cost/transport failure.

Production `minimumRemainingContent` tests lowercase prose with regex substrings. Independent reading of the actual response/source confirms these failures:

| Required regex | Actual wording | Consequence |
|---|---|---|
| `/cutoff/` | “Orders close 15:00 working-day prior (Friday for Monday delivery)” | Timing meaning is present but the exact word is absent |
| `/food.?handling/` | “food safety/handling protocols” | At most one character between food and handling is allowed; this wording does not match |
| `/booking/` | “stated interest only, not booked demand or market validation” | The substantive distinction is present; booked does not contain booking |

The general `eligible` function separately requires A's body to include offer/contribution/cutoff/assumption. Therefore adding synonyms only to `minimumRemainingContent` would still leave `eligible` rejecting this response for missing cutoff. There are two overlapping lexical gates, neither a complete semantic rubric.

The application retained A with `complete:false`, failed the session and never admitted B. Brief-confirmation/acceptance counts are zero, canonical note remains revision1. The consumed one-shot authority and history cannot be reopened or relabelled as success. Current exposure/estimate is422476microUSD; arithmetic remainder205024 is not account credit or renewed authority. Invoice remains unverified.

## Semantic limitations

The observed rejection includes false negatives for meaningful paraphrases. That does **not** establish that the whole offer is suitable or accepted. The response now supplies explicit trial observations, but also lists “four interested contacts will order” as an assumption. Although labelled rather than claimed as completed bookings, this is an unsupported demand-conversion assumption needing owner scrutiny. It conflicts with treating four interested contacts solely as interest evidence if relied upon to justify demand.

The response gives14/box,9 variable cost,20-box280−180=100/day and says the4/box minimum is met, but never explicitly states the required5/box contribution. A reader can derive it; the approved explicit arithmetic requirement still needs assessment. The present lexical patterns do not enforce that fact or its correct relationship to the minimum. Numbers/words appearing anywhere could satisfy the gate while arithmetic, negation, provenance or feasibility is wrong. The same concern applies to capacity relationships and whether assumptions are justified. Structural checks cannot confer semantic quality or human acceptance.

## Minimum reusable offline direction

Stop the keyword→prompt wording→paid rerun loop. Adding booked/booking, orders-close/cutoff or food-safety/handling synonyms would repair these individual false negatives, but preserve the brittle design and its false positives. Prompting the model to recite gate keywords would reward vocabulary rather than approved meaning.

A bounded offline replan should consolidate the duplicated content rules into one explicit requirement map and evaluation report: provenance/limits and objective fixture relationships; evidence/assumption distinctions; required observation coverage; and human semantic review. Preserve existing fail-closed behavior until a reviewed replacement contract is chosen. Use the two retained actual responses as an offline regression corpus alongside clear equivalent paraphrases, genuine omissions, wrong arithmetic, negated facts and unsupported bookings. Each case should have human-authored expected reasons; tests must prove both false-negative and false-positive resistance rather than mirror regex implementation.

For objective facts, prefer a small explicitly structured artifact contract with independently checked numeric relationships/source IDs/status fields and a separately readable narrative, rather than searching prose for numbers. Verify5=14−9,100=20×5,500=5×100 conditional on orders,110=30+4×20 and150=30+4×30. Demand should encode interest separately from confirmed orders; observations should describe what to measure without fabricated results. Assess whether that compact contract actually fits the existing512 bound offline; do not assume a larger token budget, model change or automatic repair. Narrative quality and unsupported assumptions still need actual human review, not an unapproved paid model judge.

This is a correction/replanning direction, not a ready replacement validator or a new execution proposal. Any altered checkpoint eligibility policy must retain approved substantive requirements and be reviewed explicitly; it cannot retroactively bypass the consumed failed session. Stage2.1 remains incomplete because no real A→owner checkpoint→B→human acceptance/reopen occurred. No retry follows this analysis.
