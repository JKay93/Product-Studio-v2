<!-- studio {"id":"world:decision:design","scope":"world","type":"decision","status":"approved","links":[{"relation":"depends_on","target":"world:decision:product"}]} -->
# World design decisions

The user selected Calm Fluent-inspired for World after comparing three directions. This approved design direction was recorded on 2026-10-03. UI UX Pro Max supports design work for World only; its availability does not make World's design a studio-wide requirement.

## Visual direction [world:req:visual-direction]

Use cool neutral surfaces, restrained blue accents, modest rounding, subtle depth and clear typography. The interface should make everyday work, responsibility and permissions easy to understand for nontechnical SME users.

Use semantic tokens for surfaces, text, borders, primary actions, approval, danger, focus, spacing, corners and motion. Keep status meaning distinct from decoration and pair color with words or icons. Exact colors, font choices, spacing values and component measurements will be established and visually checked during phase 1; the comparison preview is a direction reference, not a finished token specification.

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
