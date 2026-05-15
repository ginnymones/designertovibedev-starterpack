---
title: "Day 1 — Planning Your Portfolio"
description: "Define your portfolio structure and build the homepage layout."
---


## Day 1 — Planning Your Portfolio

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Define your portfolio structure, set up the project, and build the homepage layout.

---

### Welcome to Phase 3

This is the capstone. You're building a multi-page portfolio site that showcases the two projects you've already built — your palette generator and your landing page — as proper case studies.

By the end of this phase, you'll have a professional online presence. Not a template. Not a Squarespace site. Something you built yourself, that reflects your taste and tells your story.

---

### What's Different in Phase 3

**Multi-page architecture.** Phases 1 and 2 were single pages. This is a site with multiple pages linked together — a homepage, project pages, an about page, and a contact page.

**More technical vocabulary.** You've been coding for a month now. Terms like "component," "routing," and "deployment" should feel familiar. We'll still include brief clarifiers (in parentheses like this) when introducing something new, but we trust you to handle the language.

**More creative freedom.** The prompts in this phase are less prescriptive. You know how to talk to your AI partner. We'll give you direction, but the design decisions are yours.

---

### Step 1: Plan Your Pages

A portfolio site typically has:

| Page | Purpose |
|------|---------|
| Homepage | First impression — who you are, what you do, featured work |
| Project pages (×2) | Case studies for each project (palette generator + landing page) |
| About | Your story, skills, background |
| Contact | How to reach you |

That's 5 pages total. Manageable, and enough to feel like a real site.

---

### Step 2: Set Up the Project

```
Create a new project folder called "design-portfolio" with this structure:
- index.html (homepage)
- about.html (about page)
- contact.html (contact page)
- projects/palette-generator.html (case study page)
- projects/landing-page.html (case study page)
- styles/ folder with:
  - global.css (shared styles across all pages — fonts, colors, reset)
  - homepage.css (homepage-specific styles)
  - project.css (shared styles for project case study pages)
  - about.css (about page styles)
  - contact.css (contact page styles)
- scripts/ folder with:
  - main.js (shared functionality — navigation, etc.)
- assets/ folder with subfolders:
  - assets/images/ (screenshots, photos)
  - assets/icons/ (any icons you use)

Set up index.html with a basic HTML structure that links to global.css and homepage.css, and includes main.js.
```

Your structure:

```
design-portfolio/
├── index.html
├── about.html
├── contact.html
├── projects/
│   ├── palette-generator.html
│   └── landing-page.html
├── styles/
│   ├── global.css
│   ├── homepage.css
│   ├── project.css
│   ├── about.css
│   └── contact.css
├── scripts/
│   └── main.js
└── assets/
    ├── images/
    └── icons/
```

> 💡 Notice how this is more organized than Phases 1 and 2. As projects grow, separating styles into multiple files keeps things manageable. Each page has its own stylesheet, plus a global one for shared styles. Think of `global.css` like your design tokens file — the source of truth for colors, fonts, and spacing.

---

### Step 3: Define Your Design Tokens

Before building any pages, establish your visual foundation:

```
In global.css, set up CSS custom properties (variables) for my portfolio's design system:
- 2-3 neutral colors (for text, backgrounds, borders)
- 1-2 accent colors (for links, buttons, highlights)
- A font stack: one for headings, one for body text
- A spacing scale (small, medium, large, xlarge)
- A consistent border-radius value
- A max-width for content containers (around 1200px)
- A base transition speed (0.2s or 0.3s)

Also include a CSS reset and set box-sizing: border-box globally.
```

> 💡 **CSS custom properties** (also called CSS variables) work like design tokens in Figma — define a color once, use it everywhere. Change it in one place, it updates across the whole site. You'll reference these throughout all your pages.

---

### Step 4: Build the Homepage Layout

```
Build the homepage (index.html) with this structure:
- A navigation bar at the top with links to: Home, Projects, About, Contact
- A hero section with:
  - A greeting: "Hi, I'm [Your Name]"
  - A short tagline: "Designer who builds. I create tools and experiences for the web."
  - A subtle CTA: "See my work ↓" that scrolls to the projects section
- A "Featured Projects" section below with 2 project cards (we'll flesh these out tomorrow)
  - For now, just create placeholder cards with a title and a colored background
- A minimal footer with your name and social links

Keep the design clean and spacious. Let the work speak for itself — portfolios should be understated, not flashy.
```

---

### 💡 What You Learned Today

- How to plan a multi-page site architecture
- How to organize files for a larger project (separate stylesheets, scripts folder, asset subfolders)
- How to set up design tokens as CSS custom properties (variables that store your design decisions)
- That a portfolio should be a frame for your work, not a distraction from it

---

### ⏭️ Tomorrow

You'll build the about page — your story, your skills, and what makes you different.

---

> 🎯 **Checkpoint:** You should have a project folder with the full file structure, a `global.css` with your design tokens defined, and a homepage with a nav, hero, placeholder project cards, and footer. If your pages aren't linking to the CSS correctly, try: "My styles aren't loading on the page. Can you check that the CSS file paths in my HTML link tags are correct relative to where each HTML file lives?"
