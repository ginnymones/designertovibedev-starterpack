---
title: "Day 13 — Deploy & Custom Domain"
description: "Deploy your landing page and connect a custom domain."
---


## Day 13 — Deploy & Custom Domain

**Time needed:** 30–40 minutes
**Goal:** Deploy your landing page and optionally connect a custom domain.

---

### What's Happening Today

You've done this before (Phase 1, Day 7), so this should feel familiar. The difference is that this time you're deploying a more polished, multi-section page — and optionally giving it a professional URL.

---

### Step 1: Deploy

Use the same platform you used for Phase 1 (Vercel, Netlify, or your preferred host):

```
Help me deploy my palette-landing-page project to Vercel (or Netlify). This is a static HTML/CSS/JS project with no build step. Walk me through the commands or steps.
```

If you're using **Netlify's drag-and-drop:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `palette-landing-page` folder onto the page
3. Done — you get a live URL

If you're using **Vercel:**
1. Run `npx vercel` in your project folder (or use the Vercel dashboard)
2. Follow the prompts
3. Get your live URL

---

### Step 2: Test the Deployment

Before sharing, check everything:

```
My landing page is now deployed at [YOUR-URL]. Can you give me a checklist of things to verify:
- Does the page load correctly?
- Do all images appear?
- Does the embedded demo (iframe) work?
- Do the scroll animations trigger?
- Does the mobile layout work?
- Do the OG/social sharing tags work? (test with opengraph.xyz)
```

Open the URL on:
- Your laptop browser
- Your phone
- A different browser (if you usually use Chrome, try Firefox or Safari)

---

### Step 3: Custom Domain (Optional)

A custom domain makes your project feel professional. Instead of `palette-landing.vercel.app`, you could have `palettemaker.design` or `yourname.dev`.

```
How do I add a custom domain to my Vercel (or Netlify) deployment? I want to use a custom URL. Walk me through:
1. Where to buy a domain (recommend affordable registrars)
2. How to connect it to my hosting platform
3. How to set up HTTPS (secure connection)
```

**Affordable domain registrars:**
- [Namecheap](https://www.namecheap.com) — straightforward, good prices
- [Porkbun](https://porkbun.com) — fun interface, competitive pricing
- [Google Domains](https://domains.google) (now Squarespace Domains)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) — at-cost pricing

A `.com` or `.dev` domain typically costs $10–15/year. A `.design` domain is around $30/year but looks great for a designer's project.

---

### Step 4: Update Your Phase 1 Links

Now that your landing page is live, make sure the connections work:

```
On my landing page, update the "Try It Free" CTA button to link to my deployed palette generator from Phase 1. Also make sure the embedded demo iframe URL is correct. Both should point to the live Phase 1 deployment.
```

---

### Two Projects, Connected

Look at what you have now:
- **A working tool** (palette generator) at one URL
- **A landing page** for that tool at another URL
- The landing page links to the tool and embeds it
- Both are live on the internet

This is how real products work. A marketing site that points to the actual product. You built both.

---

### What You Learned Today

- How to deploy a more complex project (same process, more confidence)
- How to verify a deployment across devices and browsers
- How to connect a custom domain (optional but professional)
- That deploying gets less scary every time you do it

---

### Tomorrow

You'll share your work, gather feedback, and wrap up Phase 2.

---

> 🎯 **Checkpoint:** Your landing page should be live at a public URL, with the embedded demo working and all links pointing to the right places. If the iframe demo isn't loading on the deployed version, try: "The iframe works locally but not on my deployed site. Could this be a cross-origin issue? How do I fix it?"
