---
title: "Day 8 — Shared Navigation & Footer"
description: "Make nav and footer consistent across all pages."
---


## Day 8 — Shared Navigation & Footer

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Make your navigation and footer consistent across all pages and easy to update in one place.

---

### 📍 What's Happening Today

Right now, your nav and footer are copy-pasted into every HTML file. That means if you want to change a link or update your footer text, you'd have to edit 5 files. That's fragile and annoying.

Today you're solving this with a technique that keeps your shared elements (the parts that appear on every page) in one place so changes propagate everywhere.

---

### The Problem

You have 5 HTML pages, each with the same nav and footer. If you:
- Add a new project to the nav → edit 5 files
- Change your footer text → edit 5 files
- Fix a typo in a link → edit 5 files

This is the same problem as not using components in Figma — if you update a button style, you'd have to manually update every instance. Components solve this in design. We need something similar in code.

---

### The Solution: JavaScript Includes

For a static HTML site (no framework), the simplest approach is using JavaScript to inject shared elements:

#### Prompt 1: Create Shared Components

```
Help me create a system where my navigation and footer are defined once and shared across all pages. I want:

1. Create a file called "scripts/components.js" that contains:
   - A function that generates the navigation HTML and inserts it into a placeholder element
   - A function that generates the footer HTML and inserts it into a placeholder element
   - The nav should highlight the current page's link (active state)

2. On each HTML page, replace the full nav and footer code with simple placeholder elements like <div id="nav-placeholder"></div> and <div id="footer-placeholder"></div>

3. The components.js script should run on page load and fill in those placeholders

This way I only edit the nav/footer in one file (components.js) and it updates everywhere.
```

---

#### Prompt 2: Active Page Highlighting

```
Make the navigation highlight which page the user is currently on:
- The current page's nav link should have a different color or an underline
- Detect the current page automatically based on the URL (don't hardcode it per page)
- The active style should be subtle but clear — maybe your accent color or a bottom border
```

---

#### Prompt 3: Consistent Styling

```
Make sure the shared nav and footer look identical on every page:
- Same height, same spacing, same font sizes
- The nav should be fixed/sticky at the top on all pages
- The footer should always sit at the bottom of the page (even on short pages that don't fill the viewport)
- Test by clicking through all 5 pages — the nav and footer should feel rock-solid consistent
```

> 💡 A footer that sticks to the bottom of the viewport (the visible browser window area) even on short pages is called a **sticky footer**. It prevents that awkward gap where the footer floats in the middle of the screen when there isn't enough content to push it down.

---

#### Prompt 4: Mobile Nav Across All Pages

```
Make sure the mobile hamburger menu works on all pages:
- The menu open/close logic should be in the shared components.js
- It should work identically on every page
- When a nav link is clicked in the mobile menu, the menu should close and navigate to the new page
- Add a smooth slide-down animation for the mobile menu
```

---

### 🎯 Why This Matters

This is your first taste of **DRY** (Don't Repeat Yourself) — a principle that says: if you're writing the same thing in multiple places, find a way to write it once and reference it everywhere.

In design, you already do this with:
- Components/symbols (reusable UI elements)
- Styles/tokens (shared colors and fonts)
- Templates (consistent page structures)

In code, the same principle applies. Today you applied it to your nav and footer. As projects grow, this thinking becomes essential.

---

### 🎁 Bonus: Breadcrumbs on Project Pages

```
On the case study pages, add a breadcrumb navigation below the main nav:
"Home → Projects → Palette Generator"

Each part should be a clickable link (except the current page, which is just text). Style it small and muted — it's a wayfinding aid, not a primary element.
```

---

### 💡 What You Learned Today

- How to create shared/reusable elements across multiple pages (like components in Figma)
- The DRY principle (Don't Repeat Yourself) — write once, use everywhere
- How to detect the current page and highlight the active nav link
- How to make a sticky footer that works on short pages
- That maintainability matters — future-you will thank present-you for this

---

### ⏭️ Tomorrow

You'll make every page fully responsive — a complete pass across all 5 pages.

---

> 🎯 **Checkpoint:** Navigate between all 5 pages. The nav and footer should look identical on each one, and the current page should be highlighted in the nav. If the nav isn't appearing on some pages, try: "The navigation isn't showing up on my project pages. Can you check that the script path in those HTML files is correct? They're in a subfolder, so the path might need to go up one level (../scripts/components.js)."
