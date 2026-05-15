---
title: "Day 4 — Lock Your Favorites"
description: "Add a lock toggle so locked colors stay put when you generate a new palette."
---


## Day 4 — Lock Your Favorites

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Add a lock toggle to each swatch so locked colors stay put when you generate a new palette.

---

### 📍 What's Happening Today

Right now, every time you hit "Generate," all five colors change. But what if you find a perfect teal and want to keep it while shuffling the rest? You need a way to protect individual colors.

Today you're adding a lock/unlock toggle to each swatch. Locked colors stay; unlocked colors shuffle. This is the feature that turns your project from a toy into a tool.

---

### 🧠 The Concept

Think of it like pinning a layer in your design file. You're telling the system: "Don't touch this one." The rest can change freely.

---

### 🚀 Let's Go

#### Prompt 1: Add Lock Icons

```
Add a small lock icon to each color swatch. Position it in the top-right corner of the swatch. When a swatch is unlocked, show an open lock icon (use an emoji 🔓 for now). When locked, show a closed lock 🔒. Clicking the icon should toggle between locked and unlocked. Make the icon semi-transparent so it doesn't compete with the color.
```

You should now see a small lock icon on each swatch. Click it — it should toggle between open and closed.

---

#### Prompt 2: Make Locked Colors Stick

The icons toggle, but they don't actually *do* anything yet. Let's connect them to the generate function:

```
When I click "Generate New Palette," only the unlocked swatches should get new random colors. Locked swatches should keep their current color and not change. Make sure the hex code display updates correctly — locked ones stay the same, unlocked ones show their new color.
```

Test it:
1. Generate a palette
2. Lock one or two colors you like
3. Hit Generate again
4. The locked ones should stay put while the others change

That's satisfying, right?

---

#### Prompt 3: Visual Distinction

Let's make it visually clear which swatches are locked:

```
When a swatch is locked, add a subtle visual indicator — maybe a thin border or a slight dimming overlay — so I can tell at a glance which colors are protected without having to look at the lock icon. Keep it subtle so it doesn't distract from the actual color.
```

---

### What's Actually Happening Under the Hood

You don't need to understand this in detail, but here's the concept: each swatch now has a *state* — it's either locked or unlocked. When you click Generate, the code checks each swatch's state before deciding whether to change it.

State is just a fancy word for "what's the current situation of this thing." A light switch has two states: on and off. Your swatches now have two states: locked and unlocked.

You'll encounter this concept a lot in building for the web. Everything interactive has state — is a menu open or closed? Is a form filled out or empty? Is a color locked or unlocked?

---

### 🎁 Bonus: Unlock All Button

```
Add a small "Unlock All" text button near the Generate button. When clicked, it unlocks all swatches at once. Style it as a subtle secondary action — smaller text, no heavy background, just an underline or muted color.
```

This is a quality-of-life feature. Small, but it shows you're thinking about the user experience of your own tool.

---

### 💡 What You Learned Today

- How to add toggle interactions (on/off, locked/unlocked)
- How to make one feature affect another (lock state affects the generate function)
- The concept of "state" — tracking what condition something is in
- That building useful features is about combining simple interactions

---

### ⏭️ Tomorrow

You'll add the ability to save your favorite palettes so you can come back to them later. Your tool is about to get a memory.

---

> 🎯 **Checkpoint:** You should be able to lock individual swatches and have them persist through palette generation. If locked colors are still changing, try: "The locked swatches are still getting new colors when I click Generate. Can you make sure the generate function checks if a swatch is locked before changing its color?"
