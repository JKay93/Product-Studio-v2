# Pixel Animation Studio current run

Run: [2026-11-01-pixel-lora-comparison](runs/2026-11-01-pixel-lora-comparison.md)

Status: completed standard FLUX.2 Klein 4B versus Gemini comparison. Read the run's **Compaction handoff** first, then its completed-test outcome; older LoRA test plans are superseded history.

- Project: `Codex-Work/Pixel-Animation-Studio/`, local commit `28367e0`, clean at handoff, no verified app remote. World folders remain references; do not modify them.
- Results: 12 successful requests, no retries; FLUX six calls US$0.094 / mean 9.23s; Gemini six calls US$0.408416 / mean 8.30s. Total US$0.502416, zero holds, reconciled against account balance. Gemini preserved Bram's identity better. Neither exact-grid sprite generation nor strict edit locality is established.
- Spending: both arms are off. Prior seven entries / US$0.4783535 are unchanged; cumulative project spend US$0.9807695. The comparison's US$0.497584 unused money does not authorize more calls after its 12-attempt ceiling. No new generation, training, GPU rental or subscription purchase is authorized.
- View: `http://127.0.0.1:3110/comparison.html`; ignored raw exports, overview sheets, metrics and screenshots under `Pixel-Animation-Studio/output/openrouter-comparison/`. 92 tests and independent code/visual checks passed.
- Latest discussion: user is interested in cheap FLUX + pixel-art LoRA and asked how LoRA works and whether we can train our own. Explained existing-adapter versus custom-training options. No LoRA has been loaded/tested/trained; no fal connection has been configured as of the last credential check.
- Next: resume that discussion from the saved handoff. The recommendation is to evaluate a compatible existing pixel-art adapter before preparing custom training. User has not approved that next experiment or spending. Planning/review via a stronger OpenRouter model and image rendering via a specialist model are proposed architecture, not implemented functionality.
