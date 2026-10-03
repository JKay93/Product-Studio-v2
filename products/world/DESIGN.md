<!-- studio {"id":"world:decision:design","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World design decisions

The user selected Calm Fluent-inspired for World after comparing three directions. This approved design direction was recorded on 2026-10-03. UI UX Pro Max supports design work for World only; its availability does not make World's design a studio-wide requirement.

## Visual direction [world:req:visual-direction]

Use cool neutral surfaces, restrained blue accents, modest rounding, subtle depth and clear typography. The interface should make everyday work, responsibility and permissions easy to understand for nontechnical SME users.

Use semantic tokens for surfaces, text, borders, primary actions, approval, danger, focus, spacing, corners and motion. Keep status meaning distinct from decoration and pair color with words or icons. Phase 1 resolved the following implementation values within the approved direction; their authoritative code is `World/src/app/globals.css`.

| Purpose | Values |
| --- | --- |
| Canvas / surface / muted surface | `#F5F7FA` / `#FFFFFF` / `#EEF2F6` |
| Text / muted text | `#1F2937` / `#526176` |
| Decorative / control border | `#D8E0E8` / `#7B8798` |
| Primary / hover / pressed | `#245EA8` / `#1E508F` / `#194378` |
| Selected surface / focus | `#EAF1FB` / `#245EA8` |
| Success text / surface | `#17623B` / `#EAF5EE` |
| Approval text / surface | `#805500` / `#FFF4D6` |
| Danger text / surface | `#B42318` / `#FDEDEA` |

Use system fonts headed by Segoe UI, without a downloaded font. Essential labels, ownership, permissions and activity use at least 14px text; incidental metadata may use 12px. Body text is 16/24px, section headings 20/28px and page headings 28/36px. Shared controls have a 44px minimum height. Control/card/dialog corners are 6/8/12px. Control feedback uses 120ms and overlay entry 180ms; reduced motion removes animations and transitions. Focus uses a visible 2px outline with an offset. Decorative borders do not identify controls alone.

The local skill's generic flat/teal marketing recommendation was rejected; its Fluent 2 and accessibility guidance supported the chosen direction. Rendered checks and final acceptance are tracked in [the current run](CURRENT_RUN.md).

Implement the chosen look through Tailwind tokens and canonical Radix-based components. The theme does not require adopting Microsoft's component framework. Claymorphism and the earlier Warm Swiss proposal are not the selected direction.

## Main experience [world:req:main-experience]

Make working on and reviewing useful tasks the primary experience. Offer an Agent relationship canvas that shows the orchestrator and editable sub-agent relationships, with expandable branches. Agent cards emphasize identity, ownership, role, permissions and current activity.

The user's reference image informs the linked cards and relationship layout. Its token balances, breeding, trading and other cryptocurrency content are not World requirements.

When a PM uses a colleague designer's Agent, display its real identity and ownership, the delegation relationship and access scope. Reflect the relationship and activity for the owner as well. Borrowing does not imply cloning or ownership transfer.

## Interaction and quality [world:req:interaction-quality]

Make the active World and Session clear. Personal and organizational content remain distinguishable. Standing access and approval settings show their scope. Disabling consequential approval needs an explicit danger warning, visible ongoing status, and an obvious restoration control.

Design empty, loading, error, permission-denied, stale-approval and revoked-access states alongside successful journeys. Use clear labels, visible keyboard focus, readable contrast, responsive layouts and motion that respects reduced-motion preferences. Check representative components on desktop and mobile.

Use a small Storybook gallery to demonstrate shared components and meaningful states. Apply UI UX Pro Max recommendations only when they fit the approved product and stack. Keep implemented theme values in code; do not automatically generate additional design documents through the skill's persistence option.

The approved decision is the visual direction and experience boundaries. Phase 1 will produce the reusable design system; phase 2 will complete the mock journey. Neither preview interaction nor a UI-only demonstration establishes backend security.

### Onboarding and composer [world:req:onboarding-composer]

On 2026-10-04 the user accepted keeping the direct Agent creation shown in the revised preview: a small avatar, optional color/shape choices, editable default name and Get started placed directly on the workspace canvas. Preserve this direction; later refinement of Agent appearance is deferred. This visual acceptance does not approve production implementation or establish real Agent persistence.

The user accepted the compact chat composer with an inline placeholder and no visible Message your Agent heading. Keep an accessible input name. Place quiet example prompts beneath the composer, following the supplied reference; selecting one fills an editable draft without automatic submission or overwriting existing input. Keep the composer at the bottom of the chat area with conversation above; sending and hiding the empty-state greeting must not pull the input upward. Preserve Calm Fluent, Agent/World context and consequential approvals. Keep ownership and approval details available in the Agent identity view rather than crowding the input with repeated explanatory text.

The input grows upward from one line to a bounded height, then scrolls internally; use roughly 5–6 visible lines on desktop and fewer on mobile. Keep the caret visible and preserve the draft while scrolling or editing. Conversation scrolls independently above the composer. Sending clears the draft and returns the input to one line. Exact height limits belong to implementation, not competitor measurements.

The user accepted the checked mockup on 2026-10-04. Use its current revision (`93DF6D0408158CC7654D7005C4EB30FE796D0F6BD0A0BB923228CCE6F447A7A0`, evidence in the current run) as the implementation reference. The prototype input limits are 44px minimum, 164px desktop maximum and 116px mobile maximum. Its fixed chat-stage dimensions are for the mockup; production must fit available space and account for the mobile keyboard. Preserve the accepted creation, sidebar controls, compact composer and example placement while reusing World’s existing UI components. Acceptance is visual/interaction approval, not evidence of implemented authentication, persistence, authority or model behavior.
