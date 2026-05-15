---
title: "Day 10 — Performance & Loading"
description: "Optimize loading speed and add polished loading states."
---


## Day 10 — Performance & Loading

**Time needed:** 30–45 minutes
**Goal:** Optimize your site's loading speed and add polished loading states.

---

### What's Happening Today

A portfolio that loads slowly makes a bad first impression — especially to other designers and developers who notice these things. Today you're making your site fast and adding loading states so nothing feels janky during load.

---

### Part 1: Performance Optimization

#### Prompt 1: Image Optimization

```
Help me optimize all images across my portfolio site:
- What format should my screenshots be in? (WebP, PNG, JPEG — recommend the best option)
- What dimensions should they be? (I don't want to serve a 3000px image in a 600px container)
- Add width and height attributes to all <img> tags to prevent layout shift (that jumpy thing that happens when images load and push content around)
- Add loading="lazy" to all images that aren't visible on initial page load
- If possible, suggest a way to serve different image sizes for mobile vs desktop
```

---

#### Prompt 2: Code Performance

```
Optimize my site's code for faster loading:
- Make sure all CSS files are linked in the <head> so styles load before content appears
- Add "defer" attribute to all script tags so JavaScript doesn't block page rendering
- Check if I have any unused CSS rules that can be removed
- Make sure my fonts are loaded efficiently — use font-display: swap so text is visible immediately (even before the custom font loads)
- Add preconnect hints for any external resources (like Google Fonts)
```

> 💡 **font-display: swap** tells the browser: "Show the text immediately using a system font, then swap in the custom font once it's loaded." Without this, text can be invisible for a few seconds while fonts download — which feels broken.

---

#### Prompt 3: Measure Performance

```
Help me check my site's performance:
- What tools can I use to measure loading speed? (Lighthouse, PageSpeed Insights, WebPageTest)
- Walk me through running a Lighthouse audit in Chrome DevTools
- What scores should I aim for? (explain what the numbers mean)
```

**Target scores:**
- Performance: 90+ (how fast it loads)
- Accessibility: 90+ (how usable it is for everyone)
- Best Practices: 90+ (following web standards)
- SEO: 90+ (how findable it is)

---

### Part 2: Loading States

#### Prompt 4: Image Loading States

```
Add loading states for images across my site:
- Before an image loads, show a subtle placeholder — either a blurred low-quality version, a solid color matching the image's dominant color, or a simple skeleton rectangle with a subtle shimmer animation
- Once the image loads, fade it in smoothly (opacity 0 to 1 over 0.3s)
- This prevents that jarring pop-in when images appear suddenly
```

> 💡 **Skeleton screens** are those gray placeholder shapes you see on apps like LinkedIn or Facebook while content loads. They show the *shape* of what's coming, which feels faster than a blank page or a spinning loader.

---

#### Prompt 5: Page Load Animation

```
Add a subtle page load animation to all pages:
- When a page first loads, the content should fade in smoothly (over about 0.4s)
- This masks any brief flash of unstyled content
- Keep it fast — anything over 0.5s feels slow
- Make sure it only plays on initial load, not on every scroll or interaction
```

---

### What You Learned Today

- How to optimize images for the web (format, dimensions, lazy loading)
- How to prevent layout shift (width/height attributes, font-display: swap)
- How to measure performance with Lighthouse
- How to add loading states (skeleton screens, fade-in images)
- That perceived performance (how fast it *feels*) matters as much as actual performance (how fast it *is*)

---

### Tomorrow

You'll add SEO and social sharing metadata to all pages of your portfolio.

---

> 🎯 **Checkpoint:** Run a Lighthouse audit on your homepage (Chrome DevTools → Lighthouse tab → Generate report). Aim for 90+ on Performance. If your score is low, the report will tell you exactly what to fix. Try: "My Lighthouse performance score is [X]. The report says [specific issue]. How do I fix this?"
