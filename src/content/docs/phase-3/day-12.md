---
title: "Day 12 — Accessibility Pass"
description: "Make your entire portfolio accessible to everyone."
---


## Day 12 — Accessibility Pass

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Make your entire portfolio accessible to people with disabilities — screen reader users, keyboard-only users, and people with visual impairments.

---

### 📍 What's Happening Today

You covered accessibility basics in Phase 2 (Day 10). Today you're doing a thorough pass across your entire multi-page portfolio. This is more comprehensive because you have more pages, more interactions, and more content to audit.

Accessibility isn't a feature you add at the end — it's a quality standard. But since we're learning iteratively, doing a dedicated pass now ensures nothing slipped through.

---

### The Audit

#### Prompt 1: Semantic Structure Across All Pages

```
Audit the semantic HTML structure across all 5 pages of my portfolio:
- Every page should have exactly one <main> element wrapping the primary content
- Navigation should be in a <nav> element
- The footer should be in a <footer> element
- Sections should use <section> with appropriate aria-labels or headings
- Headings should follow a logical hierarchy on every page (h1 → h2 → h3, no skipping)
- Lists of items (like skills, social links) should use <ul> or <ol> elements
- Fix any issues you find.
```

---

#### Prompt 2: Images and Alt Text

```
Check all images across my portfolio:
- Every <img> tag should have a descriptive alt attribute
- Screenshots should describe what's shown: alt="Screenshot of the Palette Generator showing five color swatches with lock icons"
- Decorative images (that don't convey information) should have alt="" (empty alt) so screen readers skip them
- Icons that convey meaning should have aria-labels
- The photo placeholder on my about page should have alt text ready for when I add a real photo
```

---

#### Prompt 3: Keyboard Navigation

```
Test keyboard navigation across all pages:
- Tab through every page from top to bottom. Is the order logical?
- Can I reach every interactive element (links, buttons, form fields) with Tab?
- Can I activate buttons and links with Enter?
- Can I close the mobile menu with Escape?
- Can I close the lightbox with Escape?
- Is the focus indicator (outline) clearly visible on every interactive element?
- Add a "Skip to main content" link at the top of every page (visible only when focused) that lets keyboard users bypass the navigation
- Fix any elements that are unreachable or have no visible focus state.
```

---

#### Prompt 4: Color and Contrast

```
Check color contrast across my portfolio:
- All body text should have at least 4.5:1 contrast ratio against its background
- Large text (headings) should have at least 3:1 contrast ratio
- Interactive elements (links, buttons) should be distinguishable without relying on color alone
- Check my accent color against both light and dark backgrounds — is it readable?
- If any text fails contrast, suggest a slightly adjusted color that passes while staying close to my design intent
```

---

#### Prompt 5: Motion and Reduced Motion

```
Add reduced motion support across my entire portfolio:
- Wrap all animations and transitions in a media query that checks for prefers-reduced-motion
- When reduced motion is preferred:
  - Disable scroll-triggered animations (elements should just be visible)
  - Disable the page transition fade
  - Disable parallax effects
  - Keep essential transitions (like focus indicators) but make them instant
  - The lightbox should still work but without the scale animation
- Test by enabling "Reduce motion" in your system accessibility settings
```

---

#### Prompt 6: Forms Accessibility

```
Audit my contact form for accessibility:
- Every input must have a visible <label> element associated with it (using "for" attribute matching the input's "id")
- Error messages should be announced to screen readers (use aria-live="polite" on the error container)
- Required fields should be marked with aria-required="true"
- The form should be navigable and submittable entirely by keyboard
- Success/error states should be announced to screen readers, not just shown visually
```

---

### How to Test

1. **Keyboard only:** Unplug your mouse (or just don't touch it). Navigate your entire site with Tab, Enter, Escape, and arrow keys.
2. **Screen reader:** On Mac, turn on VoiceOver (Cmd + F5). Listen to how your site is announced. Does it make sense without seeing it?
3. **Reduced motion:** Go to System Settings → Accessibility → Display → Reduce motion. Check that your site respects this.
4. **Lighthouse:** Run an accessibility audit in Chrome DevTools. Aim for 95+.

> 💡 Full accessibility validation requires testing with real assistive technologies and expert review. What you're doing today covers the fundamentals — and puts you ahead of most websites on the internet.

---

### 💡 What You Learned Today

- How to audit semantic HTML structure across a multi-page site
- How to write meaningful alt text for different types of images
- How to ensure full keyboard navigability
- How to check and fix color contrast issues
- How to respect motion preferences with prefers-reduced-motion
- How to make forms accessible to screen reader users
- That accessibility is a spectrum — every improvement helps real people

---

### ⏭️ Tomorrow

You'll do a final polish pass and deploy the complete portfolio.

---

> 🎯 **Checkpoint:** Tab through your entire site without using a mouse. Can you reach everything? Is the focus always visible? If you get "stuck" somewhere (focus disappears or you can't reach an element), try: "When I tab through my page, the focus gets lost after [specific element]. Can you check the tab order and make sure all interactive elements are reachable?"
