---
title: "Day 8 — Scroll Animations"
description: "Add scroll-triggered animations that reveal content as visitors scroll."
---


## Day 8 — Scroll Animations

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Add scroll-triggered animations that reveal content as visitors scroll down the page.

---

### 📍 What's Happening Today

Static pages feel flat. Today you're adding motion — elements that fade in, slide up, or scale into view as the visitor scrolls. This makes the page feel alive and guides attention to each section as it appears.

You've seen this on every modern landing page. Sections don't just *exist* — they *arrive*.

---

### 🧠 The Concept

**Scroll-triggered animations** work like this:
1. Elements start invisible (or slightly offset)
2. As the visitor scrolls and the element enters the viewport (the visible area of the browser window), it animates into its final position
3. The animation plays once — it doesn't repeat every time you scroll past

This is sometimes called "reveal on scroll" or "animate on scroll."

---

### 🚀 Let's Go

#### Prompt 1: Basic Fade-In

Let's start simple — make sections fade in as they scroll into view:

```
Add scroll-triggered animations to my landing page. When each major section scrolls into view, it should fade in with a subtle upward movement (start 20px lower and at 0 opacity, then animate to its normal position at full opacity over about 0.6 seconds).

Apply this to:
- The features section
- The "How It Works" section
- The testimonials section
- The demo section

Don't animate the hero — it should be visible immediately when the page loads. Use the Intersection Observer API or a simple scroll detection approach.
```

> 💡 **Intersection Observer** is a browser feature that watches for elements entering the viewport. Think of it as a sensor that says "hey, this thing is now visible" — and then you can trigger an animation. You don't need to understand how it works internally; just know it's the standard way to do scroll animations.

---

#### Prompt 2: Staggered Reveals

For sections with multiple items (like feature cards or testimonial cards), stagger the animations:

```
For the feature cards and testimonial cards, don't reveal them all at once. Stagger them — the first card appears, then the second 150ms later, then the third 150ms after that, and so on. This creates a cascading effect that feels more dynamic than everything appearing simultaneously.
```

---

#### Prompt 3: The "How It Works" Steps

The step-by-step section is perfect for sequential animation:

```
For the "How It Works" section, animate the steps one by one:
- Step 1 fades in first
- The connecting line draws itself (animates from left to right)
- Step 2 fades in
- The next connecting line draws
- Step 3 fades in

This should happen over about 1.5 seconds total, triggered when the section scrolls into view. It tells a little story through motion.
```

---

#### Prompt 4: Subtle Polish

```
Add a few more subtle animations:
- The stats numbers (if you have them) should count up from 0 to their final value when they scroll into view
- The hero CTA button should have a very subtle pulse or glow animation that loops gently to draw attention
- Add a parallax effect to the hero background — it should scroll slightly slower than the content, creating depth
```

> 💡 **Parallax** is when background elements move at a different speed than foreground elements during scroll. It creates an illusion of depth — like looking out a car window where nearby trees move fast but distant mountains barely move.

---

### A Word of Caution

Animations should enhance, not distract. A few principles:

- **Less is more.** If everything animates, nothing stands out.
- **Keep them fast.** Anything over 0.8 seconds feels sluggish.
- **Only animate once.** Repeating animations on every scroll pass feels jittery.
- **Respect motion preferences.** Some people get motion sick from animations. We'll handle this in Day 10.

You already have good taste for this from your design work. Trust your gut — if an animation feels like too much, it probably is.

---

### 🎁 Bonus: Smooth Scroll Behavior

```
Make sure all scroll behavior on the page is smooth — when clicking nav links, when using the "back to top" button, and any other scroll-based navigation. Add this as a global CSS rule.
```

---

### 💡 What You Learned Today

- How to add scroll-triggered reveal animations
- How to stagger animations for groups of elements
- The concept of Intersection Observer (detecting when elements become visible)
- Parallax scrolling and counting animations
- That restraint is key — animate with purpose, not for spectacle

---

### ⏭️ Tomorrow

You'll add a contact form or email signup — your first time handling user input.

---

> 🎯 **Checkpoint:** Scroll through your page slowly. Sections should fade/slide into view as they appear. If animations aren't triggering, try: "The scroll animations aren't working. Can you check that the Intersection Observer is set up correctly and that elements start with opacity 0 before being revealed?"
