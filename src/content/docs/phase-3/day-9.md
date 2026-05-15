---
title: "Day 9 — Responsive Across All Pages"
description: "Full responsive pass on every page of your portfolio."
---


## Day 9 — Responsive Across All Pages

**Time needed:** 30–45 minutes
**Goal:** Do a full responsive pass on every page of your portfolio.

---

### What's Happening Today

You've done responsive work before (Phase 1 Day 6, Phase 2 Day 7). Today you're applying it across your entire multi-page site — making sure every page works beautifully on phones, tablets, and desktops.

This is a QA (Quality Assurance) pass. Systematic, thorough, and satisfying when everything clicks into place.

---

### The Process

Open your browser's device preview mode (right-click → Inspect → device icon) and check each page at three widths: 375px (mobile), 768px (tablet), 1200px (desktop).

#### Prompt 1: Homepage Responsive

```
Check my homepage at mobile (375px), tablet (768px), and desktop (1200px) sizes. Fix any issues:
- Hero text should scale down on mobile (smaller heading, shorter line lengths)
- Project cards should stack to single column on mobile
- Navigation should switch to hamburger menu on mobile
- All spacing should feel proportional at each size (not too cramped on mobile, not too sparse on desktop)
- No horizontal scrolling at any size
```

---

#### Prompt 2: About Page Responsive

```
Check my about page at all sizes:
- The two-column layout (photo + bio) should stack on mobile (photo on top, bio below)
- Skills pills/tags should wrap naturally on smaller screens
- The "Currently" section should remain readable at all sizes
- Photo placeholder should be a reasonable size on mobile (not full-width, maybe 200px)
```

---

#### Prompt 3: Case Study Pages Responsive

```
Check both case study pages at all sizes:
- The hero screenshot should scale down proportionally
- The alternating image/text feature sections should stack on mobile (image on top, text below — always in the same order)
- The content max-width should have comfortable side margins on mobile (at least 16-20px)
- The lightbox should work on mobile (full-screen, closable with tap)
- The progress bar should still work on mobile
```

---

#### Prompt 4: Contact Page Responsive

```
Check my contact page at all sizes:
- Form inputs should be full-width on mobile
- The submit button should be full-width on mobile
- Social links should wrap if needed on very small screens
- Labels should remain visible and not overlap inputs
- Tap targets should be at least 44px tall on mobile
```

---

#### Prompt 5: Global Consistency Check

```
Do a final global responsive check:
- Is the base font size readable on mobile? (minimum 16px for body text to prevent iOS zoom)
- Are all headings scaling down appropriately? (not overflowing on small screens)
- Is the nav consistent across all pages at all sizes?
- Is the footer consistent across all pages at all sizes?
- Are there any elements that overflow their containers on mobile?
- Test the hamburger menu on every page — does it work everywhere?
```

---

### A Responsive Checklist

Use this as a mental checklist for any page:

- [ ] No horizontal scrolling at any width
- [ ] Text is readable without zooming (16px minimum body text)
- [ ] Tap targets are at least 44×44px on mobile
- [ ] Images scale down and don't overflow
- [ ] Multi-column layouts stack on mobile
- [ ] Spacing feels proportional (not too tight, not too loose)
- [ ] Navigation works at all sizes
- [ ] Forms are usable on mobile (full-width inputs, large buttons)

---

### What You Learned Today

- How to do a systematic responsive audit across a multi-page site
- That responsive design is about consistency — every page should feel intentional at every size
- How to use a checklist approach for QA (Quality Assurance) passes
- That mobile isn't an afterthought — it's often the primary experience

---

### Tomorrow

You'll optimize performance and add loading states across the site.

---

> 🎯 **Checkpoint:** Open every page on your phone (or at 375px in the browser). Scroll through each one completely. Nothing should overflow, text should be readable, and navigation should work. If you find issues on one page but not others, try: "My about page has horizontal scrolling on mobile but my other pages don't. Can you find what element is overflowing and fix it?"
