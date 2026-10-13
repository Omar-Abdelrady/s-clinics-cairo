# Menu Motion & Floating Header Design

## Goal

Make the FAQ and mobile navigation open and close smoothly, while transforming the header into a compact, glassy floating navbar after the user scrolls past the hero.

## Approved behavior

- The FAQ behaves as a single-open accordion: opening one item closes any previously open item.
- FAQ content expands and collapses without a sudden layout jump. The answer fades and moves a few pixels as the row opens.
- The FAQ plus icon rotates 45 degrees for the open item.
- The mobile menu uses an explicit expanded/collapsed state, with the menu panel fading and translating into place. Selecting a link closes it.
- After approximately 32px of page scroll, the header receives a floating “island” treatment: reduced horizontal width, rounded capsule corners, stronger glass blur, a subtle border/shadow, and a short enter/exit transition.
- The header remains fixed and does not change document flow when its visual state changes.
- All meaningful states remain keyboard accessible and expose `aria-expanded`/`aria-controls` where applicable.
- `prefers-reduced-motion: reduce` disables decorative transitions while preserving the same open/closed functionality.

## Architecture

`FaqList` becomes a client component with a controlled `openIndex` state. Each answer remains in the DOM so the layout can animate using a CSS grid row from `0fr` to `1fr`; hidden content uses `overflow: hidden`, and the answer text receives opacity/transform transitions.

`SiteHeader` becomes a client component with `isScrolled` and `isMobileMenuOpen` state. A passive scroll listener toggles the `is-scrolled` class at the threshold. The mobile menu uses a real button with `aria-expanded` and an associated navigation panel, avoiding the browser’s instant `<details>` display toggle.

The existing visual tokens, Cairo typography, 44px minimum touch targets, and Lenis smooth scrolling remain unchanged. The new motion uses the existing `--ease-out` token and stays within 180–320ms for interaction feedback.

## Accessibility and edge cases

- The menu button keeps a descriptive Arabic accessible name and updates it to indicate closing when open.
- Escape closes the mobile menu; clicking a navigation link closes it as well.
- The mobile menu closes when the viewport changes back to desktop sizing.
- FAQ summaries remain real buttons with clear expanded state and keyboard operation.
- Reduced-motion users get instant state changes with no animated transform or opacity.
- No animation may create horizontal overflow or reduce any interactive target below 44px.

## Validation

- Add component tests for single-open FAQ behavior, `aria-expanded`, and mobile menu open/close behavior.
- Run the existing Vitest suite, typecheck, lint, and production build.
- Verify the header and FAQ at 1440×900 and 375×844: no horizontal overflow, no console errors, no undersized controls, and smooth visual state changes.
