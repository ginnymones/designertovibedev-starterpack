---
title: "Day 1 — Setting the Stage"
description: "Plan your landing page structure and build the hero section."
---


## Day 1 — Setting the Stage

**Time needed:** 30–45 minutes
**Goal:** Plan your landing page structure and build the hero section.

---

### Welcome to Phase 2

You built a working tool. Now you're going to build a page that *sells* it.

A landing page is a single-page website designed to present a product and convince visitors to try it. You've seen hundreds of them — every app, tool, and service has one. Now you're making one for your Color Palette Generator.

This is where your design skills really come into play. Landing pages are all about visual hierarchy, storytelling, and guiding the eye. You already know how to do this — you're just doing it with code now.

---

### What's Different in Phase 2

A few things are evolving:

**Your file structure is growing.** A landing page has more moving parts than your palette generator. We'll set up a clean structure from the start.

**The language is shifting.** You'll start hearing terms like "component," "section," and "viewport." We'll always explain them, but you'll notice the vocabulary expanding. That's intentional — you're building fluency.

**You're thinking at page scale.** Phase 1 was a single-screen tool. Phase 2 is a full page with multiple sections that flow together. Think of it like designing a long-scroll Figma prototype.

---

### Step 1: Set Up Your Project

Create a new project folder. Ask your AI assistant:

```
Create a new project folder called "palette-landing-page" with this structure:
- index.html (the main page)
- styles.css (all styling)
- script.js (any interactivity)
- assets/ folder (for images, screenshots, icons)

In the HTML file, set up a basic page with the title "Palette Generator" and link the CSS and JS files. Use a modern CSS reset so we start with consistent styling across browsers.
```

Your structure:

```
palette-landing-page/
├── index.html
├── styles.css
├── script.js
└── assets/
```

Same pattern as Phase 1 — you already know this rhythm.

---

### Step 2: Plan Your Sections

Before building, let's map out what a landing page typically includes. Think of these as sections on a long artboard:

1. **Hero** — the first thing visitors see (headline, subheadline, call-to-action button)
2. **Features** — what the tool does (3–4 key benefits)
3. **How It Works** — a quick walkthrough (3 steps)
4. **Live Demo** — your actual tool embedded in the page
5. **Testimonials** — social proof (we'll make these up for practice)
6. **Call to Action (CTA)** — a final push to try it
7. **Footer** — links, credits, your name

You won't build all of these today. Today is just the hero. But knowing the full picture helps you make better decisions about spacing and rhythm.

---

### Step 3: Build the Hero Section

The hero is the most important section. It's the first impression — like the cover of a case study or the splash screen of an app.

```
Build a hero section for my Color Palette Generator landing page. I want:
- A large, bold headline that says "Find your perfect palette in seconds"
- A subtitle underneath: "A free color tool for designers who move fast. Generate, lock, save, and export beautiful color combinations."
- A prominent CTA button that says "Try It Free" with a bold background color and rounded corners
- A secondary text link below the button that says "See how it works ↓"
- Generous vertical padding so the hero feels spacious and confident
- Center everything horizontally
- Use a clean, modern sans-serif font (Inter or similar)
- Add a subtle gradient or soft background color so it's not plain white
```

---

### Step 4: Review and Refine

Look at your hero. Ask yourself the same questions you'd ask in a design review:

- Does the headline grab attention?
- Is there enough breathing room?
- Does the CTA stand out clearly?
- Does the visual hierarchy guide the eye from headline → subtitle → button?

If something feels off, describe it:

```
The headline feels too small for a hero section. Make it bigger — at least 48px on desktop. Also add more space between the subtitle and the button, it feels cramped.
```

Or:

```
The background gradient is too strong, it's competing with the text. Make it more subtle — barely noticeable, just enough to add warmth.
```

---

### Step 5: Add a Visual Element

A hero without imagery can feel empty. Let's add something:

```
Add a visual element to the hero — either a screenshot/mockup of my palette generator tool, or a decorative arrangement of colorful circles/swatches that hints at what the tool does. Position it below the CTA or to the right of the text on larger screens. Keep it balanced with the text content.
```

> 💡 **Tip:** If you have a screenshot of your Phase 1 project, drop it in your `assets/` folder and tell the AI to use it. Real screenshots are more compelling than placeholders.

---

### What You Learned Today

- How to plan a multi-section page before building it
- How to build a hero section with clear visual hierarchy
- That landing page design uses the same principles you already know — just applied to a scrolling page
- How to give design feedback to refine AI-generated layouts

---

### Tomorrow

You'll build the features section — a grid of benefits that tells visitors what your tool can do.

---

> 🎯 **Checkpoint:** You should have a hero section with a headline, subtitle, CTA button, and some kind of visual element. It should feel spacious and intentional. If the layout feels cramped, try: "Add more vertical padding to the hero section — I want it to feel like it has room to breathe. At least 120px of padding top and bottom."
