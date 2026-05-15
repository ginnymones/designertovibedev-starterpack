---
title: "Day 11 — SEO & Social Sharing"
description: "Make your page discoverable and look great when shared."
---


## Day 11 — SEO & Social Sharing

**Time needed:** 30–40 minutes
**Goal:** Make your page discoverable by search engines and look great when shared on social media.

---

### What's Happening Today

You've built a beautiful, accessible landing page. But if you share the link on Twitter or LinkedIn right now, it'll probably show up as a plain URL with no preview image or description. And if someone searches for "color palette generator," your page won't appear.

Today you're fixing both of those things with **SEO** (Search Engine Optimization — making your page findable through Google and other search engines) and **social sharing metadata** (controlling how your link looks when shared).

---

### The Concept

When you share a link on social media, the platform looks for special tags in your page's code to generate a preview card. These tags are called **Open Graph** (OG) tags — a standard created by Facebook that's now used everywhere.

Similarly, search engines read specific tags to understand what your page is about, what to show in search results, and how to rank it.

Both live in the `<head>` section of your HTML — the part visitors don't see, but machines read.

---

### Let's Go

#### Prompt 1: Basic SEO Tags

```
Add essential SEO meta tags to my landing page's <head> section:
- A descriptive title tag: "Palette Generator — Free Color Tool for Designers"
- A meta description (150-160 characters): "Generate beautiful color palettes instantly. Lock favorites, copy hex codes, and save combinations. Free, fast, and built for designers."
- A canonical URL tag pointing to my deployed page URL
- Make sure the page has proper heading hierarchy (only one h1, logical h2/h3 structure)
```

---

#### Prompt 2: Open Graph Tags

```
Add Open Graph meta tags so my page looks great when shared on social media:
- og:title: "Palette Generator — Free Color Tool for Designers"
- og:description: "Generate beautiful color palettes instantly. Lock, copy, and save your favorite combinations."
- og:image: (we'll create this in a moment)
- og:url: my deployed page URL
- og:type: "website"

Also add Twitter Card tags:
- twitter:card: "summary_large_image"
- twitter:title: same as og:title
- twitter:description: same as og:description
- twitter:image: same as og:image
```

---

#### Prompt 3: Create a Social Share Image

Your share image is what appears as the preview when someone posts your link. It should be eye-catching and informative:

```
Help me create a simple social share image (also called an OG image). I need:
- Dimensions: 1200x630px (the standard for social sharing)
- A clean design with my product name "Palette Generator" in large text
- A subtitle: "Free color tool for designers"
- Some colorful swatches or a visual hint of what the tool does
- A solid or gradient background

Can you create this as an HTML page that I can screenshot, or suggest a tool where I can make it quickly? I'll save it as "og-image.png" in my assets folder.
```

> 💡 **Quick alternatives for creating OG images:**
> - Take a screenshot of your tool and add text overlay in Figma
> - Use a free tool like [OG Image Generator](https://og-image.vercel.app) or Canva
> - Design it in Figma and export as PNG

---

#### Prompt 4: Structured Data (Bonus)

```
Add basic structured data (JSON-LD format) to help search engines understand my page better. Mark it as a "SoftwareApplication" with:
- name: "Palette Generator"
- description: the same description we used for SEO
- applicationCategory: "DesignApplication"
- offers: free
```

> 💡 **Structured data** is a way of labeling your content so search engines understand it more precisely. It can help your page appear with rich results in Google (like star ratings, pricing info, or app details). JSON-LD (JavaScript Object Notation for Linked Data) is just the format it's written in.

---

### How to Test Your Social Sharing

After deploying your updated page:
- **Twitter/X:** Use the [Twitter Card Validator](https://cards-dev.twitter.com/validator) to preview how your link will look
- **Facebook/LinkedIn:** Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to test your OG tags
- **General:** Use [opengraph.xyz](https://www.opengraph.xyz) to preview across platforms

---

### What You Learned Today

- What SEO is and how basic meta tags help search engines find your page
- What Open Graph tags are and how they control social media previews
- How to create a social share image (OG image)
- That the `<head>` section of your page is for machines — search engines and social platforms read it to understand your content

---

### Tomorrow

You'll do a final polish pass — consistency, details, and making everything feel cohesive.

---

> 🎯 **Checkpoint:** Deploy your updated page and test the social sharing preview using one of the tools above. You should see your title, description, and image appear in the preview card. If the image isn't showing, try: "My OG image isn't appearing in social share previews. Can you check that the og:image URL is an absolute URL (starts with https://) and the image is accessible at that URL?"
