---
title: "Day 5 — Save Your Palettes"
description: "Save favorite palettes and display them in a collection."
---


## Day 5 — Save Your Palettes

**⏱️ Time needed:** 30–45 minutes

**🎯 Goal:** Save favorite palettes and display them in a collection below the generator.

---

### 📍 What's Happening Today

You can generate palettes and lock colors, but the moment you close your browser, everything disappears. Today you're giving your tool a memory — the ability to save palettes you love and see them listed below the generator.

---

### 🧠 The Concept

Think of it like a "favorites" or "bookmarks" feature. You find a palette you love, hit save, and it appears in a collection below. Next time you open the page, your saved palettes are still there.

Where do they get saved? In something called local storage — a small storage space built into every browser that remembers data between visits. Think of it as a tiny filing cabinet that lives inside your browser.

---

### 🚀 Let's Go

#### Prompt 1: Add a Save Button

```
Add a "Save Palette" button next to the "Generate New Palette" button. Style it as a secondary action — maybe an outline style or a lighter color so it's clearly different from the primary Generate button. When clicked, it should save the current set of 5 colors.
```

---

#### Prompt 2: Display Saved Palettes

```
Below the main generator, add a section called "Saved Palettes." When I click "Save Palette," the current 5 colors should appear as a new row in this section — show them as small color circles or mini swatches in a horizontal row, with the option to delete a saved palette. Each saved palette row should also show a subtle timestamp like "Saved just now" or "Saved 2 min ago."
```

Try it: generate a palette you like, hit Save, and watch it appear in the collection below.

---

#### Prompt 3: Make It Persist

Right now, if you refresh the page, your saved palettes disappear. Let's fix that:

```
Save the palettes to the browser's local storage so they persist between page visits. When the page loads, check if there are any saved palettes in local storage and display them in the Saved Palettes section. Make sure the save and delete actions update local storage too.
```

Now refresh your page. Your saved palettes should still be there. That's persistence — your tool remembers things even after you close it.

---

#### Prompt 4: Load a Saved Palette

Let's make saved palettes useful, not just decorative:

```
When I click on a saved palette in the collection, load those colors back into the main generator swatches. This way I can revisit a palette I saved earlier and continue tweaking it.
```

---

### A Small Celebration

Look at what you have now:
- A generator that creates random palettes
- Lock/unlock to protect colors you like
- Click-to-copy for easy use
- Save/load for building a collection
- Data that persists between sessions

This is a functional tool. Not a tutorial exercise — a thing that works, that you could actually use in your design process.

You built this in five sessions. With words.

---

### 🎁 Bonus: Export Options

If you're feeling ambitious:

```
Add a small "Copy as CSS" button on each saved palette that copies all 5 colors as CSS custom properties (variables), formatted like:
--color-1: #264653;
--color-2: #2A9D8F;
etc.
Show a "Copied!" confirmation when clicked.
```

This makes your tool genuinely useful for web design work — you can paste these directly into a project.

---

### 💡 What You Learned Today

- How to save and retrieve data using the browser's local storage
- How to display a growing list of items (your saved palettes collection)
- How to make data persist between page visits
- That "memory" in web apps is just data stored somewhere and loaded back when needed

---

### ⏭️ Tomorrow

You'll polish everything — typography, spacing, transitions, responsive layout — so it looks as good as it works. Design time.

---

> 🎯 **Checkpoint:** You should be able to save palettes, see them listed below the generator, refresh the page and still see them, and click a saved palette to load it back. If palettes disappear on refresh, try: "My saved palettes aren't persisting after I refresh. Can you check that they're being saved to localStorage correctly and loaded on page init?"
