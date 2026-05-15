---
title: "Day 5 — Live Demo"
description: "Embed your actual palette generator into the landing page."
---


## Day 5 — Live Demo

**Time needed:** 30–45 minutes
**Goal:** Embed your actual palette generator into the landing page so visitors can try it without leaving.

---

### What's Happening Today

This is the moment your two projects connect. You're going to put your working palette generator *inside* your landing page. Visitors won't just read about your tool — they'll use it, right there on the page.

This is called an **embedded demo** — and it's one of the most effective things you can put on a landing page. Nothing sells a product like letting people try it.

---

### The Concept

There are two ways to embed your tool:

1. **Iframe embed** — your palette generator lives at its own URL (from Phase 1 deployment), and you display it inside a frame on the landing page. Like embedding a YouTube video, but it's your own tool.

2. **Rebuild it inline** — copy the palette generator code directly into the landing page. More work, but more seamless.

We'll go with option 1 (iframe) because it's simpler and your tool is already deployed.

---

### Let's Go

#### Prompt 1: Create the Demo Section

```
Below the testimonials section, add a "Try It Yourself" section. Include:
- A heading: "Try it yourself"
- A subtitle: "No signup needed. Just click and play."
- An iframe that loads my palette generator from [YOUR-DEPLOYED-URL-HERE]
- Make the iframe large enough to be usable — at least 800px wide and 600px tall on desktop
- Center it on the page with a subtle shadow or border around it so it feels like a contained window
- Add rounded corners to the iframe container to make it feel polished
```

> 💡 Replace `[YOUR-DEPLOYED-URL-HERE]` with the actual URL of your deployed palette generator from Phase 1 (Day 7). It'll look something like `https://your-project.vercel.app` or `https://your-project.netlify.app`.

---

#### Prompt 2: Style the Demo Container

```
Make the demo embed feel premium:
- Wrap the iframe in a container that looks like a browser window — add a thin top bar with three small colored dots (red, yellow, green) to mimic a browser chrome
- Add a subtle gradient shadow behind the whole container so it feels elevated off the page
- Give the section a slightly darker or colored background to make the demo pop
- Add padding around the container so it doesn't touch the edges on any screen size
```

---

#### Prompt 3: Responsive Demo

```
Make the demo section work on smaller screens:
- On tablet, reduce the iframe width to fit the screen with comfortable margins
- On mobile, either make the iframe scrollable within its container, or replace it with a button that says "Open Palette Generator →" and links to the full tool in a new tab
- Add a small note below the demo on mobile: "For the best experience, try this on a larger screen"
```

---

### Why This Matters

You just connected two separate projects. Your landing page isn't just *about* your tool — it *contains* your tool. This is a pattern used by real products everywhere:

- Figma's landing page has an embedded editor
- Stripe's docs have live code playgrounds
- CodePen's homepage shows live pens

You're doing the same thing. At week 3. That's not nothing.

---

### Bonus: A CTA Below the Demo

```
Right below the demo, add a call-to-action:
- Text: "Like it? It's free forever."
- A button: "Open Full Tool →" that links to your deployed palette generator in a new tab
- Style it as a gentle nudge, not aggressive — muted background, comfortable spacing
```

---

### What You Learned Today

- How to embed external content using an iframe (a window into another page)
- How to create a "browser mockup" container for visual polish
- How to handle responsive behavior for embedded content
- That connecting projects together creates something greater than the sum of its parts

---

### Tomorrow

You'll build the navigation and footer — the structural elements that tie the whole page together and let visitors jump between sections.

---

> 🎯 **Checkpoint:** You should have your palette generator embedded and usable within the landing page. If the iframe isn't loading, check that your Phase 1 project is still deployed and the URL is correct. Try: "The iframe isn't showing my tool. Can you help me check if the URL is correct and if there are any issues with embedding it?"
