---
title: "Day 7 — Contact Page"
description: "Build your contact page with a form and social links."
---


## Day 7 — Contact Page

**Time needed:** 30–45 minutes
**Goal:** Build your contact page with a form, social links, and a clear call-to-action.

---

### What's Happening Today

The contact page is where interest turns into conversation. Someone liked your work, now they want to reach out. Make it easy, inviting, and frictionless.

---

### Let's Go

#### Prompt 1: Page Layout

```
Build my contact page (contact.html) with:
- Same navigation and footer as all other pages
- A simple, centered layout with:
  - Heading: "Let's work together" (or "Say hello" — pick what feels right)
  - A short paragraph: "Have a project in mind? Want to collaborate? Or just want to chat about design and code? I'd love to hear from you."
  - A contact form below
  - Social links section below the form

Link to global.css and contact.css. Keep the page minimal — contact pages should be fast and focused.
```

---

#### Prompt 2: The Contact Form

```
Build a contact form with these fields:
- Name (text input, required)
- Email (email input, required)
- Subject (text input, optional — with placeholder "What's this about?")
- Message (textarea, required — about 5 rows tall)
- A submit button: "Send Message"

Style the form:
- Full-width inputs with comfortable height (at least 48px for single-line inputs)
- Subtle borders that darken on focus
- Clear labels above each field (not just placeholders — labels should always be visible)
- The submit button should use my accent color and match the button style from the rest of the site
- Add validation: show error messages for required fields if submitted empty, and validate email format
- On successful submission, show a success message: "Message sent! I'll get back to you soon."
- On mobile, everything should be full-width and easy to tap
```

---

#### Prompt 3: Social Links

```
Below the form, add a "Or find me elsewhere" section with social links:
- Email: your@email.com (as a mailto link)
- LinkedIn: [your profile]
- Twitter/X: [your handle]
- Dribbble: [your profile]
- GitHub: [your profile] (you have one now!)

Display these as a horizontal row of icons or labeled links. Use subtle styling — these are secondary to the form. Add hover effects (color change or slight scale) on each link.
```

---

#### Prompt 4: Form Handling Note

Your form looks great, but where does the data actually go? For a static site (no server), you have a few options:

```
Help me connect my contact form to actually send messages. What are my options for a static HTML site? I've heard of:
- Formspree
- Netlify Forms
- Web3Forms

Which is easiest to set up? Walk me through connecting one of them so my form actually sends me an email when someone submits it.
```

> 💡 **Formspree** and similar services act as a middleman — your form sends data to their server, and they forward it to your email. It takes about 5 minutes to set up and most have a free tier. This means your static site can receive messages without you building a backend (server-side code that processes data).

---

### Design Thinking: Reducing Friction

The best contact pages:
- **Don't ask for too much** — name, email, message. That's it. Every extra field reduces submissions.
- **Show personality** — a warm heading and short intro make people feel welcome
- **Provide alternatives** — not everyone wants to fill out a form. Social links give options.
- **Confirm success clearly** — people need to know their message was received

---

### Bonus: Availability Status

```
Add a small "availability" indicator near the top of the contact page:
- A green dot + "Available for freelance projects" (or whatever your status is)
- Or a yellow dot + "Booked until [month] — but let's talk about future projects"
- Style it as a subtle badge or inline element near the heading
```

---

### What You Learned Today

- How to build a multi-field contact form with validation
- How to connect a static form to an email service (Formspree or similar)
- How to present social links as secondary contact options
- That contact pages should minimize friction — fewer fields, clear confirmation, multiple options

---

### Tomorrow

You'll build the shared navigation and footer as reusable elements across all pages.

---

> 🎯 **Checkpoint:** Your contact page should have a working form with validation (shows errors for empty required fields, validates email format) and a success state. Social links should be visible below the form. If validation isn't working, try: "The form submits even when fields are empty. Can you add JavaScript validation that checks required fields before allowing submission?"
