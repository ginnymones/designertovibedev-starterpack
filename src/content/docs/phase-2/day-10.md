---
title: "Day 10 — Performance & Accessibility"
description: "Make your page load fast and work for everyone."
---


## Day 10 — Performance & Accessibility

**Time needed:** 30–45 minutes
**Goal:** Make your page load fast and work for everyone — including people with disabilities.

---

### What's Happening Today

Your page looks great and works well. But does it load quickly? Can someone using a screen reader navigate it? Can someone who can't use a mouse still interact with everything?

Today is about two things that separate amateur projects from professional ones: **performance** (speed) and **accessibility** (usability for all people).

---

### Why This Matters

**Performance:** If your page takes more than 3 seconds to load, most visitors leave. Speed is a feature.

**Accessibility:** About 15% of the world's population has some form of disability. Building accessible websites isn't just ethical — it's good design. It means more people can use what you build.

As a designer, you already care about usability. Accessibility is usability for *everyone*.

---

### Part 1: Performance

#### Prompt 1: Image Optimization

```
Help me optimize the images on my landing page:
- Check if any images are larger than they need to be (over 200KB)
- Add width and height attributes to all images so the browser knows their size before loading (prevents layout shift)
- Add loading="lazy" to images that are below the fold (not visible on first load) so they only load when the user scrolls near them
- If I'm using any PNG images, suggest converting them to WebP format for smaller file sizes
```

#### Prompt 2: Code Cleanup

```
Help me improve my page's loading performance:
- Make sure CSS is loaded in the head (so styles are ready before content appears)
- Add "defer" to my script.js tag so it doesn't block the page from rendering
- Remove any unused CSS rules if there are any
- Minimize any render-blocking resources
```

---

### Part 2: Accessibility

#### Prompt 3: Semantic Structure

```
Improve the accessibility of my landing page:
- Make sure all sections use proper semantic HTML elements (header, nav, main, section, footer) instead of just divs
- Add descriptive alt text to all images (describe what the image shows, not just "image")
- Make sure headings follow a logical order (h1, then h2, then h3 — no skipping levels)
- Add aria-labels to any icons or buttons that don't have visible text
- Make sure the page has a proper language attribute (lang="en")
```

> 💡 **Semantic HTML** means using elements that describe their purpose. A `<nav>` tells screen readers "this is navigation." A `<main>` says "this is the main content." A `<div>` says nothing — it's just a generic box. Using the right elements helps assistive technology understand your page.

#### Prompt 4: Keyboard Navigation

```
Make sure my entire page is navigable by keyboard:
- All interactive elements (buttons, links, form inputs) should be reachable with the Tab key
- The focus state should be clearly visible (a colored outline or ring) — don't remove the default focus indicator without replacing it
- The mobile menu should be closable with the Escape key
- The tab order should follow the visual order of the page (top to bottom, left to right)
- Add a "Skip to main content" link at the very top that's only visible when focused (for keyboard users to bypass the navigation)
```

#### Prompt 5: Motion and Color

```
Add accessibility considerations for motion and color:
- Add a CSS media query for "prefers-reduced-motion" that disables all animations for users who have motion sensitivity settings enabled on their device
- Make sure all text has sufficient color contrast (at least 4.5:1 ratio for body text, 3:1 for large text)
- Make sure no information is conveyed by color alone (for colorblind users) — if something is red for "error," also include an icon or text
```

> 💡 **prefers-reduced-motion** is a setting users can enable on their device if animations make them dizzy or nauseous. By respecting this preference, your page automatically tones down motion for those users. It's one line of CSS that makes a real difference.

---

### How to Check Your Work

Ask your AI assistant:

```
Can you help me run a basic accessibility check on my page? Look for:
- Missing alt text on images
- Low color contrast
- Missing form labels
- Heading hierarchy issues
- Missing landmark elements (nav, main, footer)
```

For a more thorough check, you can also open your browser's DevTools (right-click → Inspect) and look for the "Lighthouse" tab. Run an accessibility audit — it'll give you a score and specific issues to fix.

---

### What You Learned Today

- How to optimize images and loading for better performance
- What semantic HTML is and why it matters for accessibility
- How to make a page keyboard-navigable
- How to respect motion preferences and color contrast requirements
- That accessibility is usability — and good design means designing for everyone

---

### Tomorrow

You'll add SEO (Search Engine Optimization) basics and social sharing metadata — so your page looks good when shared on social media and can be found through search engines.

---

> 🎯 **Checkpoint:** Tab through your entire page using only the keyboard. Can you reach every button, link, and form field? Is the focus state visible? If you can't see where your focus is, try: "I can't see the keyboard focus indicator on my page. Can you add a visible focus ring style to all interactive elements?"
