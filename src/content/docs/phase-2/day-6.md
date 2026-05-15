---
title: "Day 6 — Navigation & Footer"
description: "Add a sticky navigation bar and a footer."
---


## Day 6 — Navigation & Footer

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Add a sticky navigation bar and a footer to tie the whole page together.

---

### 📍 What's Happening Today

Your page has great content, but no way to navigate it. Right now, visitors have to scroll through everything linearly. Today you're adding a navigation bar at the top (so people can jump to any section) and a footer at the bottom (for links, credits, and closure).

These are the structural bookends of any website. They frame the content and give visitors control.

---

### 🧠 The Concept

**Navigation (nav bar):** A horizontal bar at the top of the page with links to each section. On landing pages, these usually scroll smoothly to the relevant section rather than loading a new page.

**Footer:** The bottom of the page. It typically contains secondary links, social media, copyright info, and sometimes a final call-to-action.

---

### 🚀 Let's Go

#### Prompt 1: The Navigation Bar

```
Add a navigation bar fixed to the top of the page. It should:
- Have your logo or product name "Palette Generator" on the left (just text is fine for now, styled in bold)
- Have navigation links on the right: "Features", "How It Works", "Demo", "Testimonials"
- When clicked, each link should smooth-scroll to that section of the page
- Use a white or slightly frosted/blurred background so content is readable behind it when scrolling
- Add a subtle bottom border or shadow so it feels separated from the page content
- Keep it slim — don't let it take up too much vertical space
- Make sure the page content starts below the nav bar (not hidden behind it)
```

---

#### Prompt 2: Mobile Navigation

On smaller screens, a horizontal nav with 4+ links gets cramped. Let's handle that:

```
On mobile screens (under 768px wide):
- Hide the navigation links
- Show a hamburger menu icon (three horizontal lines) on the right
- When tapped, show the navigation links in a vertical dropdown or slide-in panel
- Add a smooth animation for opening and closing the mobile menu
- Make sure the menu links still smooth-scroll to sections and close the menu after clicking
```

> 💡 A **hamburger menu** is that ☰ icon you see on mobile websites. It's called that because the three lines look like a burger between two buns. Designers have debated its usability for years — but for a landing page with just a few links, it works fine.

---

#### Prompt 3: The Footer

```
Add a footer at the very bottom of the page:
- Include the product name "Palette Generator" in bold
- A short tagline: "Made with vibes by [Your Name]"
- Links to: your deployed palette generator, your GitHub (if you have one), and your social media
- A small copyright line: "© 2025 [Your Name]. Built with vibe coding."
- Use a dark background (charcoal or dark navy) with light text for contrast
- Add comfortable padding (60-80px top and bottom)
- Center the content or use a simple two-column layout (info on left, links on right)
```

---

#### Prompt 4: Active State Navigation

A nice touch — highlight which section the visitor is currently viewing:

```
As the user scrolls down the page, highlight the corresponding navigation link. For example, when the "Features" section is in view, the "Features" nav link should have a different color or an underline. This should update automatically as they scroll.
```

> 💡 This is called **scroll spy** — the navigation "watches" where you are on the page and updates itself. It's a subtle detail that makes the page feel polished and professional.

---

### 🎨 Design Thinking: Consistency

Your nav bar and footer are the frame around your content. They should feel like they belong to the same family:
- Same font as the rest of the page
- Colors that complement your palette
- Spacing that matches the rhythm you've established

Think of them like the header and footer of a presentation template — consistent, understated, always there.

---

### 🎁 Bonus: Back to Top Button

```
Add a small "back to top" button that appears in the bottom-right corner when the user has scrolled past the hero section. It should be a small circle with an up arrow (↑), and clicking it smooth-scrolls back to the top. Fade it in and out based on scroll position.
```

---

### 💡 What You Learned Today

- How to build a fixed navigation bar with smooth-scroll links
- How to create a responsive mobile menu (hamburger pattern)
- How to build a footer with links and credits
- The concept of scroll spy — navigation that responds to scroll position
- That structural elements (nav, footer) frame your content and give visitors control

---

### ⏭️ Tomorrow

You'll dive deep into responsive design — making sure every section of your page looks great on phones, tablets, and desktops.

---

> 🎯 **Checkpoint:** You should have a sticky nav bar at the top with working smooth-scroll links, a mobile hamburger menu, and a footer at the bottom. If the nav bar is covering your hero content, try: "The navigation bar is overlapping the top of my page content. Can you add enough top padding to the page body so the content starts below the fixed nav?"
