<!-- studio {"id":"byoa-world:roadmap:main","scope":"byoa-world","type":"roadmap","status":"draft","links":[{"relation":"requires","target":"byoa-world:contract:main"}]} -->
# BYOA World roadmap

Owner: PM; final acceptance: orchestrator within delegated authority.
Last material update: 2026-09-28. Planning horizon: foundation through the first
bounded delivery. Product direction remains draft; this roadmap does not authorize
features, a technology stack or deployment. Existing foundation acceptance is historical.

## Outcomes and sequence

| Item | Intended outcome | Status | Owner | Dependencies | Exit criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| RM-01 | Project foundation available for new chats | accepted | Orchestrator | Organization decision | Project records and modularity rules exist; source provenance recorded; scoped retrieval and links checked; independent review accepted | [Foundation snapshot and acceptance record](https://github.com/JKay93/Product-Studio-v2/blob/f10e4a4/products/byoa-world/STATE.md); [repository bootstrap record](https://github.com/JKay93/Product-Studio-v2/commit/d441600) |
| RM-02 | Initial product direction is clear enough to plan | proposed | PM | RM-01; designated handoff | Handoff reviewed with provenance; users, problem, initial outcomes, scope, exclusions and journeys recorded; blocking product questions resolved and any required direction approval recorded | Pending; link the accepted contract/requirements revisions and decision source |
| RM-03 | First implementation slice has sufficient design and architecture | proposed | Technical Specialist / Designer as needed | Relevant RM-02 requirements | Required module boundaries, interfaces, data/security constraints and experience conventions defined; unresolved issues blocking the slice resolved; verification approach identified | Pending; link relevant design/specification revisions and decisions |
| RM-04 | First bounded slice meets its agreed criteria | proposed | Builder; independent reviewer | Applicable RM-02 and RM-03 records | Actual feature criteria defined before implementation; affected checks pass; independent review resolves material findings; orchestrator records acceptance for the code candidate and spec revisions | Pending; no feature selected yet |
| RM-05 | Accepted slice reaches its authorized delivery state | proposed | Orchestrator | Accepted RM-04 candidate; delivery authority | Requested repository/release actions verified against the delivered revision; environment verification and recovery reference supplied if deployment is in scope | Pending; initial README push is not product delivery |

## Now, next and later

- Next useful task: review the [designated handoff](sources/README.md) and draft product
  requirements. Existing [contract](CONTRACT.md) records current authority.
- Design and technical planning may proceed together once their inputs are sufficiently
  clear. These items are outcomes, not compulsory sequential committees.
- Later feature milestones will replace the generic RM-04/RM-05 planning placeholders
  when scope is known. No dates or invented features are committed here.

## Updates

This is the single milestone-status source. [Backlog](BACKLOG.md) holds actionable
work; [state](STATE.md) holds the current handoff and links here rather than duplicating
the roadmap. Keep milestone IDs stable. Record material changes with their rationale
and authority; preserve previous assessments in Git and referenced evidence. Do not
retroactively redefine accepted work. Reassess only evidence affected by changed inputs.

Use the [shared roadmap template](../../operating-system/templates/roadmap.md) as an
adaptable guide. Review when scope, dependencies or evidence change, without a new
time-based approval gate.
