---
title: "Day 6 — Project Page Interactions"
description: "Add lightboxes, hover effects, and transitions."
---


## Day 6 — Project Page Interactions

**Time needed:** 30–45 minutes
**Goal:** Add interactive elements to your case study pages — image lightboxes, hover details, and smooth transitions.

---

### What's Happening Today

Your case study pages have content, but they feel static. Today you're adding interactions that make them feel polished and engaging — the kind of details that make someone think "this person knows what they're doing."

---

### Let's Go

#### Prompt 1: Image Lightbox

When visitors click a screenshot, it should expand to full size:

```
Add a lightbox (a full-screen overlay that shows an image at full size) to all project screenshots on my case study pages:
- When a screenshot is clicked, it should expand to fill the screen with a dark overlay behind it
- Show a close button (×) in the top-right corner
- Clicking the overlay or pressing Escape should close it
- Add a smooth scale-up animation when opening and a fade-out when closing
- The cursor should change to a zoom-in icon when hovering over screenshots to signal they're clickable
```

> 💡 A **lightbox** is that full-screen image viewer you see on photography sites — click a thumbnail, it expands over everything. It lets visitors see details without navigating away from the page.

---

#### Prompt 2: Image Hover Effects

```
Add hover effects to the project screenshots:
- On hover, add a subtle overlay with a "View larger" label or a magnifying glass icon
- The image should slightly brighten or increase contrast on hover
- Add a smooth transition (0.3s) for all hover states
- Make sure these effects work on the feature screenshots in the "Key Features" sections too
```

---

#### Prompt 3: Smooth Page Transitions

When navigating between pages, add a subtle transition:

```
Add a simple page transition effect:
- When a link is clicked, the current page content fades out slightly (opacity goes to 0.5 over 0.2s) before navigating
- This gives a smoother feel than the hard cut of a normal page load
- Apply this to navigation links and project card links on the homepage
```

---

#### Prompt 4: Reading Progress Indicator

Case studies are long pages. Help visitors know where they are:

```
Add a reading progress bar to the case study pages:
- A thin colored bar (2-3px) at the very top of the page (below the nav)
- It fills from left to right as the user scrolls down the page
- At the top of the page it's 0% filled, at the bottom it's 100%
- Use my accent color for the bar
- Make it subtle — it should inform, not distract
```

---

### Design Thinking: Purposeful Interaction

Every interaction you add should serve a purpose:
- **Lightbox** → lets visitors see detail without losing context
- **Hover effects** → signals that something is interactive
- **Page transitions** → reduces the jarring feel of navigation
- **Progress bar** → orients the reader in long content

If an interaction doesn't serve the user, it's decoration. Decoration is fine in moderation, but purpose is better.

---

### Bonus: Animated Stats

```
If you have any stats or numbers on your case study pages (like "Built in 7 days" or "14 sessions"), add a count-up animation that triggers when they scroll into view. The number should animate from 0 to its final value over about 1 second.
```

---

### What You Learned Today

- How to build a lightbox (full-screen image viewer) for project screenshots
- How to add meaningful hover states that signal interactivity
- How to create page transition effects for smoother navigation
- How to add a scroll progress indicator
- That interactions should serve a purpose, not just look cool

---

### Tomorrow

You'll build the contact page with a form and your social links.

---

> 🎯 **Checkpoint:** Click any screenshot on your case study pages — it should expand in a lightbox overlay. Hover over images should show a visual indicator. If the lightbox isn't closing, try: "My lightbox opens but won't close. Can you make sure clicking the overlay background, clicking the X button, and pressing the Escape key all close it?"
