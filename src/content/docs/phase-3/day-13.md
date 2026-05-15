---
title: "Day 13 — Final Polish & Deploy"
description: "Final consistency pass and deploy your complete portfolio."
---


## Day 13 — Final Polish & Deploy

**Time needed:** 45–60 minutes
**Goal:** Final consistency pass, last refinements, and deploy your complete portfolio.

---

### What's Happening Today

This is it. The final session before you share your portfolio with the world. Today is about catching the last inconsistencies, adding final touches, and getting everything live.

---

### Part 1: Final Polish

#### Prompt 1: Cross-Page Consistency

```
Do a final consistency audit across all 5 pages of my portfolio:
- Are heading sizes consistent? (h1 should be the same size on every page, same for h2, h3)
- Is body text the same size and line-height everywhere?
- Are section paddings consistent? (same vertical rhythm across pages)
- Are button styles identical everywhere they appear?
- Is the accent color used consistently (same shade, same purpose)?
- Are link styles consistent (same color, same hover effect)?
- Fix any inconsistencies.
```

---

#### Prompt 2: Small Details

```
Final detail pass:
- Add a favicon (the small icon in the browser tab) — use a simple design-related icon or your initials
- Make sure every page has a proper <title> that shows in the browser tab
- Check that all external links open in a new tab (target="_blank") with rel="noopener noreferrer" (a security best practice for external links)
- Make sure there are no broken links — every nav link, project link, and social link should work
- Remove any placeholder text or "Lorem ipsum" that might have been left behind
- Check for typos in all visible text
```

---

#### Prompt 3: Print Stylesheet (Bonus)

```
Add a basic print stylesheet so my portfolio looks decent if someone prints it or saves it as a PDF:
- Hide the navigation and footer
- Remove animations and transitions
- Make sure text is black on white
- Remove background colors and shadows
- Make links show their URL in parentheses after the link text
- This is a nice touch for recruiters who might print your portfolio.
```

---

### Part 2: Deploy

#### Prompt 4: Deploy the Full Site

```
Help me deploy my complete portfolio (all 5 pages, all assets) to Vercel or Netlify:
- This is a static site with multiple HTML pages
- Make sure all pages are accessible at their correct URLs:
  - / → index.html (homepage)
  - /about → about.html
  - /contact → contact.html
  - /projects/palette-generator → projects/palette-generator.html
  - /projects/landing-page → projects/landing-page.html
- Walk me through the deployment steps
```

---

#### Prompt 5: Custom Domain

```
Help me connect a custom domain to my portfolio. I want something professional like:
- [yourname].dev
- [yourname].design
- [yourname]portfolio.com

Walk me through:
1. Buying the domain (cheapest reliable registrar)
2. Connecting it to my hosting platform
3. Setting up HTTPS (secure connection)
4. Making sure all pages work with the new domain
```

---

### Part 3: Final Verification

After deploying, check everything one more time:

**Desktop:**
- [ ] Homepage loads correctly
- [ ] All nav links work
- [ ] Project cards link to case studies
- [ ] Case study pages load with all content
- [ ] About page displays correctly
- [ ] Contact form works (test with a real submission)
- [ ] Lightbox works on project pages
- [ ] Scroll animations trigger

**Mobile:**
- [ ] Hamburger menu works
- [ ] All pages are readable and properly laid out
- [ ] Forms are usable
- [ ] No horizontal scrolling anywhere

**Sharing:**
- [ ] OG images appear when sharing links
- [ ] Each page shows its unique title and description

---

### What You Learned Today

- How to do a final quality pass before launching
- How to deploy a multi-page static site
- How to connect a custom domain
- That the last 10% of polish is what separates good from great
- How to systematically verify a deployment

---

### Tomorrow

You launch. You share. You reflect on everything you've accomplished.

---

> 🎯 **Checkpoint:** Your entire portfolio should be live at a public URL (ideally a custom domain). Every page should load, every link should work, and sharing any page URL should show a proper preview card. If something's broken on the deployed version but works locally, try: "My site works locally but [specific thing] is broken on the deployed version. Can you help me debug what might be different between local and production?"
