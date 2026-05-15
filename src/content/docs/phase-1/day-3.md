---
title: "Day 3 — Copy That Color"
description: "Click any swatch to copy its hex code to your clipboard."
---


## Day 3 — Copy That Color

**Time needed:** 30–45 minutes
**Goal:** Click any swatch to copy its hex code to your clipboard, with visual feedback confirming it worked.

---

### What's Happening Today

You've got a palette generator that shuffles colors. But right now, if you see a color you love, you'd have to manually select the hex text and copy it. That's friction — and as designers, we eliminate friction.

Today you'll make it so clicking a swatch instantly copies its color code. You'll also add a little confirmation so the user knows it worked — because invisible actions feel broken.

---

### The Concept

Think about how "copy to clipboard" works in tools you already use. You click, something briefly flashes or shows a checkmark, and the value is ready to paste. That's exactly what you're building.

---

### Let's Go

#### Prompt 1: Click to Copy

```
Make it so that when I click on any color swatch, its hex code gets copied to my clipboard. I want the entire swatch to be clickable, not just the text.
```

Test it: click a swatch, then paste somewhere (a text file, the search bar, anywhere). You should see the hex code appear.

---

#### Prompt 2: Visual Feedback

Copying worked, but there's no indication that anything happened. Let's fix that:

```
When a swatch is clicked and the color is copied, show a brief visual confirmation. I want:
- The hex code text to briefly change to "Copied!" for about 1.5 seconds, then fade back to showing the hex code
- A subtle flash or pulse animation on the swatch so it feels responsive
- The cursor should be a pointer when hovering over any swatch to signal it's clickable
```

Now click a swatch again. See that "Copied!" confirmation? That's user feedback — and you just designed it through conversation.

---

#### Prompt 3: Polish the Interaction

Let's make it feel even more intentional:

```
Add a slight scale-down effect when a swatch is clicked (like pressing a button), then it springs back. Also add a tooltip-style notification that briefly appears above the clicked swatch showing "Copied to clipboard" and then fades out after 2 seconds.
```

---

### A Design Principle You Already Know

What you just built is a **microinteraction** — a small, contained moment that:
1. Has a trigger (clicking the swatch)
2. Gives feedback (the "Copied!" text, the animation)
3. Communicates state (the user knows the action succeeded)

You've probably designed dozens of these in Figma. The difference is that this one actually works.

---

### Bonus: Sound Effect (Just for Fun)

If you want to experiment:

```
Add a very subtle, short click sound when a color is copied. Keep it quiet and satisfying — like a soft "pop." If this is too annoying, I'll remove it later.
```

This is optional and a matter of taste. But it's a good example of how you can experiment freely — try things, see if they feel right, undo if they don't.

---

### What You Learned Today

- How to make elements respond to clicks with real functionality (not just visual states)
- How to provide user feedback for invisible actions
- That the clipboard is something you can interact with through code
- That microinteraction design translates directly from Figma to code

---

### Tomorrow

You'll add the ability to "lock" individual colors — so when you generate a new palette, your favorites stay put while the rest shuffle. This is where your tool starts feeling genuinely useful.

---

> 🎯 **Checkpoint:** Clicking any swatch should copy its hex code and show a brief "Copied!" confirmation. If the copy isn't working, try asking: "The clipboard copy isn't working. Can you check if it needs to use the modern Clipboard API and make sure it works in my browser?"
