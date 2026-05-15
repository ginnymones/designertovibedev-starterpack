---
title: "Day 1 — Your First Colors on Screen"
description: "Display a row of five color swatches on your page."
---


## Day 1 — Your First Colors on Screen

**Time needed:** 30–45 minutes
**Goal:** Display a row of five color swatches on your page.

---

### The Big Picture

Over the next seven sessions, you're going to build a color palette generator — a tool that creates random color combinations at the click of a button. It's the kind of tool you might actually use in your design work.

Today, we start simple: get five colored rectangles on screen. That's it. No interactivity yet, no fancy features. Just colors, arranged nicely.

---

### What You're Building Today

Imagine five paint chips sitting side by side, each a different color, each showing its hex code underneath. Like a Pantone fan deck, but on screen and made by you.

---

### Let's Go

#### A Quick Note on File Organization

Remember your file structure from Day 0? As you work through today's prompts, make sure the AI puts things in the right place:
- Page structure → `index.html`
- Colors, spacing, fonts, layout → `styles.css`
- Anything interactive (we'll get to this tomorrow) → `script.js`

If the AI puts everything in one file, just ask: "Can you split this into separate HTML, CSS, and JS files?" It's a good habit to build now.

#### Prompt 1: The Basic Layout

Open your AI assistant and try this:

```
Create an HTML page with 5 color swatches displayed in a horizontal row. Each swatch should:
- Be a tall rectangle (about 200px wide and 300px tall)
- Have a different color as its background
- Display the hex color code centered at the bottom of each swatch in a clean, small font
- Use these colors: #264653, #2A9D8F, #E9C46A, #F4A261, #E76F51

Make the page background a light neutral gray. Center the row of swatches on the page. Use a modern sans-serif font.
```

> 💡 **Notice what you just did.** You described a layout — dimensions, spacing, colors, typography. You already know how to do this. You do it every day in your design tools.

---

#### Review: What You Should See

After the AI generates the code and you preview it, you should see:
- Five colored rectangles in a row
- Hex codes displayed on each one
- Everything centered on a light background

If something looks off — maybe the swatches are stacking vertically instead of sitting side by side, or the text is hard to read — that's fine. That's what the refine step is for.

---

#### Prompt 2: Refine the Details

Now give feedback, just like you would in a design review:

```
The swatches look good but I want to refine them:
- Add rounded corners (about 12px) to each swatch
- Add a subtle shadow behind each one so they feel like cards
- Make the hex code text white with a slight transparency so it doesn't overpower the color
- Add some breathing room between the swatches (about 16px gap)
```

See how natural that feels? You're describing visual properties — border radius, elevation, opacity, spacing. The AI translates that into code.

---

#### Prompt 3: Add a Title

Let's make it feel like a real tool:

```
Add a header above the swatches that says "Palette Generator" in a bold, large font. Add a short subtitle underneath that says "Your daily dose of color inspiration" in a lighter weight. Keep everything centered.
```

---

### Take a Step Back

Look at your browser. You have:
- A title and subtitle
- Five color swatches with rounded corners and shadows
- Hex codes displayed on each

That's a real interface. You designed it with words instead of dragging rectangles, but the thinking was identical.

---

### Bonus: Make It Yours

If you have extra time or energy, try asking the AI to:
- Change the font to something you like (e.g., "Use Inter for the body text and a serif font for the heading")
- Adjust the color palette to your taste
- Add a footer with your name

These are low-risk experiments. You can't break anything — and if you do, just ask the AI to fix it.

---

### What You Learned Today

- How to describe a layout to an AI and get working code back
- How to refine visual details through follow-up prompts
- That building for the web uses the same thinking as designing in Figma — dimensions, colors, spacing, typography

---

### Tomorrow

You'll add a button that generates random colors every time you click it. Your static paint chips are about to come alive.

---

> 🎯 **Checkpoint:** You should have a page with five styled color swatches in a row, each showing its hex code, with a title above them. If your swatches aren't lining up horizontally, try asking: "The swatches are stacking vertically. Can you make them sit side by side in a row?"
