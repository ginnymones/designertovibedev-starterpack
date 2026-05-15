---
title: "Day 3 — Project Grid"
description: "Build the project cards that link to your case studies."
---


## Day 3 — Project Grid

**Time needed:** 30–45 minutes
**Goal:** Build the project cards on your homepage that link to your case studies.

---

### What's Happening Today

The homepage project section is the most important part of your portfolio. It's the first thing potential clients or employers look at. Today you're turning those placeholder cards from Day 1 into polished, clickable project previews.

---

### The Concept

Project cards on a portfolio typically show:
- A thumbnail or preview image (a screenshot of the project)
- The project title
- A short description (one line)
- A category or tag (e.g., "Tool," "Landing Page")

They should be visually consistent, clearly clickable, and give just enough information to make someone want to click through.

---

### Let's Go

#### Prompt 1: Design the Project Cards

```
On my homepage, replace the placeholder project cards with polished versions. I have 2 projects:

Card 1:
- Title: "Palette Generator"
- Description: "A color tool that generates, locks, and saves palettes for designers."
- Tag: "Web Tool"
- Link: projects/palette-generator.html
- Thumbnail: use a colored gradient placeholder for now (I'll add a screenshot later)

Card 2:
- Title: "Palette Generator Landing Page"
- Description: "A marketing page with live demo, scroll animations, and responsive design."
- Tag: "Landing Page"
- Link: projects/landing-page.html
- Thumbnail: use a different colored gradient placeholder

Each card should:
- Have a large thumbnail area (about 60% of the card height)
- Show the title in bold below the thumbnail
- Show the description in a muted, smaller font
- Show the tag as a small pill/badge
- Have a hover effect — subtle scale-up (1.02x) and shadow increase
- Be clickable (the entire card is a link)
- Use consistent border-radius and spacing

Arrange them in a 2-column grid on desktop, single column on mobile.
```

---

#### Prompt 2: Thumbnail Styling

```
Make the thumbnail areas more interesting:
- Add a subtle inner shadow or gradient overlay at the bottom of each thumbnail so text would be readable if placed over it
- On hover, add a slight zoom effect on the thumbnail image (scale 1.05x with overflow hidden so it doesn't break the card boundary)
- Add a smooth transition (0.3s) for all hover effects
- Make sure the thumbnails have a consistent aspect ratio (16:9 works well for project previews)
```

---

#### Prompt 3: Section Header

```
Above the project cards, add a section header:
- Heading: "Selected Work"
- Subtitle: "Things I've designed and built recently"
- Keep it left-aligned (not centered) for a more editorial feel
- Add a subtle horizontal line or divider below the subtitle before the cards start
```

---

### Preparing Your Screenshots

You'll want real screenshots of your projects for the thumbnails. Here's how:

```
Help me take good screenshots of my projects for my portfolio:
- What dimensions should I capture? (suggest a consistent size)
- Should I use a browser mockup frame around them?
- Any tips for making screenshots look polished?
```

**Quick tips:**
- Capture at 1280×800 or 1440×900 for consistency
- Use a tool like [CleanShot](https://cleanshot.com), [Screenshot.rocks](https://screenshot.rocks), or just your browser's built-in screenshot
- Consider wrapping them in a browser frame mockup for a professional look
- Save them in `assets/images/` as `palette-generator-thumb.png` and `landing-page-thumb.png`

---

### Bonus: A "More Coming Soon" Indicator

```
Below the two project cards, add a subtle message: "More projects coming soon" in a muted color, or a third card with a dashed border and a "+" icon that hints at future work. Keep it understated.
```

---

### What You Learned Today

- How to build a project card grid with thumbnails, titles, and hover effects
- How to make entire cards clickable (wrapping content in a link)
- How to maintain consistent aspect ratios for images
- That project presentation is about giving just enough to spark curiosity

---

### Tomorrow

You'll build your first case study page — a deep dive into your Palette Generator project.

---

> 🎯 **Checkpoint:** Your homepage should have two polished project cards in a grid, each with a thumbnail area, title, description, tag, and hover effect. Clicking a card should navigate to the corresponding project page (even if that page is empty for now). If the cards aren't linking correctly, try: "Clicking my project card doesn't go to the project page. Can you make sure the entire card is wrapped in an anchor tag linking to the correct HTML file?"
