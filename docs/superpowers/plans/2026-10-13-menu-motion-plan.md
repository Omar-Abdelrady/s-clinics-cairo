# Menu Motion & Floating Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task with verification checkpoints.

**Goal:** Add smooth, accessible FAQ and mobile-menu transitions and turn the fixed header into a compact glassy floating island after scrolling.

**Architecture:** Replace native `<details>` state toggles with small controlled React components. `FaqList` owns one `openIndex` and animates an always-mounted answer panel with CSS grid rows; `SiteHeader` owns mobile-menu and scroll state, rendering semantic buttons and navigation with explicit ARIA state. CSS handles the visual transitions and reduced-motion fallback without changing document flow.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS, Vitest, Testing Library, lucide-react.

## Global Constraints

- Preserve Arabic RTL content, Cairo typography, current S Clinics colors, and existing Lenis scrolling.
- Keep every interactive target at least 44px.
- Use the existing `--ease-out` token and keep interaction motion between 180ms and 320ms.
- Preserve reduced-motion behavior and avoid horizontal overflow.
- Do not add a dependency.

### Task 1: Lock interaction behavior with failing tests

**Files:**
- Modify: `tests/site-header.test.tsx`
- Create: `tests/faq-list.test.tsx`

**Interfaces:**
- Tests consume `SiteHeader` and `FaqList` as public React components.
- Tests produce the expected ARIA and state behavior for implementation.

- [ ] **Step 1: Add failing FAQ accordion tests**

Test that the first question starts expanded, the first answer is visible, clicking another question sets only that question to `aria-expanded="true"`, and the previous answer is collapsed.

- [ ] **Step 2: Add failing mobile-menu tests**

Test that the menu trigger starts with `aria-expanded="false"`, clicking it changes to `true` and reveals the navigation, and clicking a section link closes it and restores `aria-expanded="false"`.

- [ ] **Step 3: Run the focused tests and confirm the expected failures**

Run `npm test -- tests/faq-list.test.tsx tests/site-header.test.tsx`.
Expected: the new assertions fail because the current components still use native `<details>` state and do not expose the new controlled ARIA contract.

### Task 2: Implement controlled FAQ and mobile navigation

**Files:**
- Modify: `components/faq-list.tsx`
- Modify: `components/site-header.tsx`
- Modify: `tests/faq-list.test.tsx`
- Modify: `tests/site-header.test.tsx`

**Interfaces:**
- `FaqList({ items }: { items: readonly ClinicFaq[] })` remains unchanged for `app/page.tsx`.
- `SiteHeader()` remains unchanged for `app/page.tsx`.
- FAQ summaries use buttons with `aria-expanded` and `aria-controls`.
- Mobile navigation trigger controls `mobile-navigation-panel` with `aria-expanded` and `aria-controls`.

- [ ] **Step 1: Convert `FaqList` to a client component with `openIndex`**

Initialize `openIndex` to `0`, set it to the clicked item index, keep answers mounted in a `.faq-answer` wrapper, and connect each button to its answer panel with stable IDs derived from the item index.

- [ ] **Step 2: Convert `SiteHeader` to explicit mobile-menu state**

Track `isMobileMenuOpen`, close it on link selection and Escape, and render a `button` trigger plus a navigation panel with `hidden={!isMobileMenuOpen}` and matching ARIA attributes. Close the menu when the viewport reaches the desktop breakpoint.

- [ ] **Step 3: Run the focused tests and confirm they pass**

Run `npm test -- tests/faq-list.test.tsx tests/site-header.test.tsx`.
Expected: all focused tests pass.

### Task 3: Add smooth FAQ/menu motion and floating glass header styling

**Files:**
- Modify: `app/globals.css`
- Modify: `components/site-header.tsx`

**Interfaces:**
- `SiteHeader` toggles `.is-scrolled` on `.site-header` after 32px of scroll.
- CSS exposes `.faq-answer`, `.faq-answer-inner`, `.mobile-menu-panel`, `.mobile-menu.is-open`, and `.site-header.is-scrolled` states.

- [ ] **Step 1: Add controlled FAQ animation styles**

Animate `.faq-answer` from `grid-template-rows: 0fr` to `1fr`, animate the inner content opacity/transform, rotate the existing plus icon for the expanded button, and keep the collapsed panel non-interactive.

- [ ] **Step 2: Add mobile menu animation styles**

Position the panel below the trigger with opacity/transform/pointer-events transitions, keep its 44px controls, and animate the trigger icon between menu and close states without changing the header layout.

- [ ] **Step 3: Add the scroll-aware glass island state**

Add a 32px scroll listener with passive options, apply the `.is-scrolled` class, and style the header with a max-width inset, rounded corners, stronger blur, background tint, border, and shadow. Keep the desktop and mobile transitions stable.

- [ ] **Step 4: Add reduced-motion overrides**

Disable transition durations and transforms for FAQ, menu, and floating header states inside the existing `prefers-reduced-motion` media query.

### Task 4: Verify behavior and finish the branch

**Files:**
- Modify: `tests/faq-list.test.tsx` only if a test assertion needs correction after real behavior is exercised.

- [ ] **Step 1: Run the complete automated suite**

Run `npm test && npm run typecheck && npm run lint && npm run build`.
Expected: all tests pass, TypeScript/lint/build complete without errors.

- [ ] **Step 2: Run the browser audit at 1440×900 and 375×844**

Verify FAQ open/close motion, single-open behavior, mobile menu open/close, floating header before/after scroll, no horizontal overflow, no console errors, Cairo font, and no interactive element below 44px.

- [ ] **Step 3: Review the final diff and commit**

Run `git diff --check`, inspect the diff, then commit with `feat(ui): animate menus and floating header`.
