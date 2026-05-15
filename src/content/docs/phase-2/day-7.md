---
title: "Day 7 — Responsive Deep-Dive"
description: "Make every section look great on phones, tablets, and desktops."
---


## Day 7 — Responsive Deep-Dive

**Time needed:** 30–45 minutes
**Goal:** Make every section of your landing page look great on phones, tablets, and desktops.

---

### What's Happening Today

You've touched on responsive design in bits and pieces. Today you're doing a full pass — checking every section at different screen sizes and fixing anything that breaks or looks awkward.

This is like doing a QA (Quality Assurance — checking that everything works correctly) pass on your designs across multiple device frames in Figma. Same thinking, different tool.

---

### The Concept

**Responsive design** means your layout adapts to the screen it's being viewed on. Instead of building separate pages for mobile and desktop, you build one page that rearranges itself based on available space.

The key tool for this is **breakpoints** — specific screen widths where your layout shifts. Common ones:
- **Mobile:** under 600px wide
- **Tablet:** 600px–1024px
- **Desktop:** over 1024px

Think of breakpoints like the artboard sizes in your design file. You're designing for each one, but the code handles the transitions between them automatically.

---

### Let's Go

#### Prompt 1: Test and Identify Issues

First, let's see what's broken:

```
I want to check my landing page at different screen sizes. Can you help me add a responsive meta tag if it's not already there, and then tell me what CSS media queries we currently have? I want to test at 375px (mobile), 768px (tablet), and 1200px (desktop).
```

> 💡 **How to test:** In your browser, right-click → "Inspect" → click the device icon (looks like a phone and tablet) at the top of the panel. This lets you preview your page at any screen width. Or just resize your browser window.

---

#### Prompt 2: Fix the Hero

```
Check the hero section at mobile size (375px wide):
- The headline is probably too large — scale it down to something readable without scrolling horizontally
- The subtitle should be shorter lines on mobile
- The CTA button should be full-width on mobile
- If there's a hero image, it should stack below the text instead of sitting beside it
- Reduce the vertical padding slightly so the hero doesn't take up 3 full screens on mobile
```

---

#### Prompt 3: Fix the Features Grid

```
Check the features section at different sizes:
- Desktop (1200px): 4 cards in a row (or 2x2 grid)
- Tablet (768px): 2 cards per row
- Mobile (375px): 1 card per row, stacked vertically
- Make sure cards have consistent spacing at every size
- The section heading should scale down on mobile
```

---

#### Prompt 4: Fix Everything Else

```
Do a responsive pass on the remaining sections:
- "How It Works" steps: horizontal on desktop, vertical on mobile with a connecting line on the left
- Testimonials: 3 in a row on desktop, stacked on mobile
- Demo iframe: full-width on tablet, replaced with a link on mobile
- Footer: if it's two columns, stack them on mobile
- Make sure no text is too small to read on mobile (minimum 16px for body text)
- Make sure no horizontal scrolling happens at any size
```

---

### The Responsive Mindset

Here's a mental model that might help:

| Desktop | Think of it as... |
|---------|-------------------|
| Wide layouts, multi-column grids | A magazine spread — lots of space, things sit side by side |
| Tablet | A book page — narrower, things start stacking |
| Mobile | A scroll — single column, everything flows vertically |

You're not designing three separate pages. You're designing one page that *flows* differently depending on the container. Like water taking the shape of its glass.

---

### Bonus: Touch-Friendly Targets

```
Make sure all clickable elements (buttons, nav links, cards) have a minimum tap target size of 44x44px on mobile. This is an accessibility standard — fingers are bigger than mouse cursors, so touch targets need to be larger.
```

---

### What You Learned Today

- How to do a full responsive audit of a multi-section page
- What breakpoints are and how they work (screen widths where layout shifts)
- How to think about layout at mobile, tablet, and desktop scales
- That responsive design is about flow, not separate designs for each device
- The importance of touch-friendly tap targets on mobile

---

### Tomorrow

You'll add scroll-triggered animations — elements that reveal themselves as the visitor scrolls down the page.

---

> 🎯 **Checkpoint:** Open your page at 375px wide (mobile) and scroll through every section. Nothing should overflow horizontally, text should be readable, and the layout should feel intentional — not broken. If something overflows, try: "There's horizontal scrolling on mobile. Can you find what's causing it and fix the overflow?"
