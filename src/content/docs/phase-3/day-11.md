---
title: "Day 11 — SEO & Social Sharing"
description: "Add metadata to all pages for discoverability."
---


## Day 11 — SEO & Social Sharing

**⏱️ Time needed:** 30–40 minutes

**🎯 Goal:** Add metadata to all pages so your portfolio is discoverable and looks great when shared.

---

### 📍 What's Happening Today

You did this for your landing page in Phase 2 (Day 11). Now you're applying the same principles across your entire portfolio — every page gets proper SEO (Search Engine Optimization) tags and social sharing metadata.

The difference this time: you have multiple pages, so each one needs its own unique title, description, and share image.

---

### 🚀 Let's Go

#### Prompt 1: Page-Specific Meta Tags

```
Add unique SEO meta tags to each page of my portfolio:

Homepage (index.html):
- Title: "[Your Name] — Designer & Builder"
- Description: "Portfolio of [Your Name], a designer who builds. Featuring web tools, landing pages, and case studies."

About (about.html):
- Title: "About — [Your Name]"
- Description: "Learn about [Your Name]'s design background, skills, and approach to building for the web."

Contact (contact.html):
- Title: "Contact — [Your Name]"
- Description: "Get in touch with [Your Name] for design projects, collaborations, or just to say hello."

Palette Generator case study:
- Title: "Palette Generator — [Your Name]"
- Description: "Case study: A browser-based color palette tool built in one week using AI-assisted development."

Landing Page case study:
- Title: "Landing Page Project — [Your Name]"
- Description: "Case study: A responsive, accessible marketing page with scroll animations and live demo."

Add a canonical URL tag to each page pointing to its deployed URL.
```

---

#### Prompt 2: Open Graph Tags for All Pages

```
Add Open Graph and Twitter Card meta tags to every page:
- Each page should have its own og:title and og:description (matching the SEO tags above)
- The homepage and project pages should have unique og:image tags (we'll create share images)
- The about and contact pages can share a generic portfolio OG image
- Set og:type to "website" for all pages
- Set twitter:card to "summary_large_image" for all pages
```

---

#### Prompt 3: Create Share Images

```
Help me plan OG images (the preview images that appear when sharing links) for my portfolio:
- Homepage: my name + "Designer & Builder" + a subtle visual element
- Palette Generator case study: project title + a screenshot or color swatches
- Landing Page case study: project title + a screenshot preview

Each should be 1200x630px. Suggest the simplest way to create these — can I make them as HTML pages and screenshot them, or should I use Figma/Canva?
```

---

#### Prompt 4: Structured Data

```
Add JSON-LD structured data to my portfolio:
- Homepage: mark it as a "Person" with my name, job title, and links to my social profiles
- Project pages: mark them as "CreativeWork" with the project name and description
- This helps search engines understand the content and potentially show rich results
```

> 💡 **Structured data** (in JSON-LD format) is like adding labels to your content that search engines can read. It's the difference between Google showing a plain link vs. showing your name, photo, and job title in search results. It takes 5 minutes to add and can make a real difference in how your portfolio appears in search.

---

#### Prompt 5: Sitemap & Robots

```
Create two small files for search engines:
1. A sitemap.xml that lists all 5 pages of my portfolio with their URLs
2. A robots.txt that allows all search engines to crawl my site and points them to the sitemap

These help search engines discover and index all your pages.
```

---

### Testing Your Social Sharing

After deploying, test each page's sharing preview:
- Use [opengraph.xyz](https://www.opengraph.xyz) to preview how each URL looks when shared
- Share a link in a private message to yourself on Twitter/LinkedIn to see the real card
- Check that each page shows its unique title, description, and image

---

### 💡 What You Learned Today

- How to add unique SEO metadata to each page of a multi-page site
- How to create page-specific Open Graph images and tags
- How to add structured data for better search engine understanding
- How to create a sitemap and robots.txt for search engine crawling
- That SEO for a portfolio is about being findable when someone searches your name or your project names

---

### ⏭️ Tomorrow

You'll do a full accessibility pass across all pages.

---

> 🎯 **Checkpoint:** Deploy your site and test at least 2 pages with [opengraph.xyz](https://www.opengraph.xyz). Each should show its unique title, description, and image. If images aren't appearing, remember: OG image URLs must be absolute (start with https://), not relative paths.
