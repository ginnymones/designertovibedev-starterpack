---
title: "Day 0 — Setup & Your First AI Interaction"
description: "Get your tools ready and have your first conversation with an AI coding partner."
---


## Day 0 — Setup & Your First AI Interaction

**⏱️ Time needed:** ~30 minutes

**🎯 Goal:** Get your tools ready and have your first conversation with an AI coding partner.

---

### What We're Doing Today

Before you build anything, you need a workspace — just like you'd set up Figma or Sketch before starting a design project. Today is about getting comfortable in that workspace and proving to yourself that this AI thing actually works.

By the end of this session, you'll have:
- Your coding environment installed
- Your first piece of AI-generated code running in a browser
- The confidence that yes, you can do this

---

### Step 1: Choose Your Setup

You have two options. Pick whichever feels less intimidating:

#### Option A: Browser-Based (Easiest Start)

Use [Replit](https://replit.com) or [StackBlitz](https://stackblitz.com). These are coding environments that run entirely in your browser — nothing to install.

1. Create a free account
2. Start a new project (choose "HTML, CSS, JS" or "Static Site")
3. You'll see a code editor on one side and a live preview on the other

**Good for:** Getting started in under 5 minutes, zero installation headaches.

#### Option B: Local Setup (More Powerful)

Use [Kiro](https://kiro.dev) or [VS Code](https://code.visualstudio.com/) with an AI assistant like GitHub Copilot or Cursor.

1. Download and install your editor
2. Create a new folder on your computer called `palette-generator`
3. Open that folder in your editor
4. Create a file called `index.html`

**Good for:** A more "real" development experience, better for Phases 2 and 3.

> 💡 **Our recommendation:** If you're feeling nervous, start with Option A. You can always switch to Option B later. If you want the full experience from the start, go with Option B — it's what professional developers use, and the AI will help you through any bumps.

---

### Step 2: Set Up Your File Structure

Before you start building, let's organize your workspace. Think of this like setting up layers and pages in Figma before you start designing — a little structure now saves a lot of confusion later.

Ask your AI assistant:

```
Create a project folder structure for a color palette generator. I want:
- An index.html file (the main page)
- A styles.css file (for all the visual styling)
- A script.js file (for interactivity)
- An assets folder (for any images or icons I might add later)
```

Your project should look like this:

```
palette-generator/
├── index.html      ← your page structure (like the wireframe)
├── styles.css      ← your visual styles (like your design tokens)
├── script.js       ← your interactivity (what happens when people click things)
└── assets/         ← images, icons, fonts (like your asset library)
```

**Why separate files?** It's the same reason you don't put every screen in one Figma frame. Separation keeps things findable. When you want to change a color, you know it's in `styles.css`. When something interactive breaks, you check `script.js`. When the layout is wrong, it's in `index.html`.

> 💡 **A quick analogy:**
> - `index.html` = your layout and content (what's on the page and in what order)
> - `styles.css` = your visual design (colors, fonts, spacing, how things look)
> - `script.js` = your interactions and logic (what happens when someone does something)

You'll ask the AI to put code in the right file as you go. If it ever dumps everything into one file, just say: "Can you separate the CSS into styles.css and the JavaScript into script.js?" It'll sort it out.

---

### Step 3: Your First AI Interaction

Let's prove this works. You're going to ask the AI to create something visual — no coding knowledge required.

**Open your AI assistant** (the chat panel in Kiro/Cursor, or the AI feature in Replit) and type this:

```
Create a simple HTML page with a centered heading that says "Hello, I'm a designer who codes now" in a nice sans-serif font, with a soft gradient background going from light purple to light pink.
```

That's it. Hit enter.

---

### Step 4: See It Come to Life

The AI will generate some code. You don't need to understand every line right now. What matters:

1. **Copy the code** into your `index.html` file (or let the AI insert it directly)
2. **Preview it** — in Replit/StackBlitz you'll see it instantly; locally, open the file in your browser
3. **Look at what appeared.** A heading. A gradient. Exactly what you described.

You just went from an idea in your head to something real in a browser. That's the whole game.

---

### Step 5: Try Refining

Now let's practice the core loop — describe, review, refine.

Try asking the AI to change something:

```
Make the heading larger, add a subtle text shadow, and put a small subheading underneath that says "Week 1: Color Palette Generator" in a lighter weight.
```

Notice how you're giving feedback the same way you'd give feedback on a design comp. That's vibe coding.

---

### Step 6: Poke Around (Optional)

If you're curious, look at the code the AI generated. You might notice:
- **HTML** (HyperText Markup Language) — the structure, like layers in your design file
- **CSS** (Cascading Style Sheets) — the styling, like your color and typography choices
- Words like `font-family`, `background`, `color` — they do exactly what they sound like

You don't need to memorize any of this. Just notice that the code reads more like English than you expected.

---

### 💡 What You Learned Today

- How to set up a coding workspace
- How to organize your project files (and why it matters)
- How to talk to an AI coding partner
- The describe → review → refine loop
- That code is less alien than it looks

---

### ⏭️ Tomorrow

You'll start building your Color Palette Generator. We'll put actual colors on screen — and it'll take less time than you think.

---

> 🎯 **Checkpoint:** You should have a project folder with `index.html`, `styles.css`, `script.js`, and an `assets/` folder — plus a working HTML (HyperText Markup Language) page with your heading and gradient visible in a browser. If something didn't work, ask your AI assistant: "This isn't showing up in my browser. Can you help me troubleshoot?" — that's a completely valid use of vibe coding too.
