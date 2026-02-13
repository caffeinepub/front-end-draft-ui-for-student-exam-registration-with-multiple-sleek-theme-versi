# Specification

## Summary
**Goal:** Create a front-end-only draft UI for a student exam registration website with a minimal, sleek multi-step flow and switchable theme variations.

**Planned changes:**
- Build a concise 5-screen registration flow: Landing/Start, Exam Selection, Registration Details (form), Review, Confirmation.
- Implement mocked/client-only state for selected exam and entered registration details (resets on refresh) with no backend calls.
- Add realistic registration form fields (student name, student ID, email, exam selection, date/time or session, accommodations optional, agreement checkbox) with inline client-side validation and a primary action button that reflects validity (e.g., disabled until valid).
- Provide at least two distinct theme variants (including at least one dark-only and at least one color-theory-based palette) with an in-app theme switcher/preview.
- Apply a consistent minimal layout structure (header/content/actions), typography/spacing system, and component hierarchy across all screens.
- Ensure the UI is responsive for mobile/desktop, keyboard navigable for the core flow, and maintains sufficient contrast in each theme.

**User-visible outcome:** Users can click through a complete exam registration draft—from start through confirmation—entering and reviewing details with clear validation feedback, and can switch between multiple sleek theme versions without reloading or rebuilding.
