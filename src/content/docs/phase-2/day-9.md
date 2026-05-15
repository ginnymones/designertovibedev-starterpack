---
title: "Day 9 — Contact Form"
description: "Add an email signup form with validation and visual feedback."
---


## Day 9 — Contact Form

**Time needed:** 30–45 minutes
**Goal:** Add an email signup or contact form with validation and visual feedback.

---

### What's Happening Today

So far, your landing page talks *at* visitors. Today you're adding a way for visitors to talk *back* — through a form. This could be an email signup ("Get notified about updates") or a contact form ("Say hello").

Forms are one of the most common elements on the web, and they introduce a new concept: **user input**. Instead of just displaying content, you're now *receiving* data from people.

---

### The Concept

A form has a few parts:
- **Input fields** — where people type (text boxes, email fields, text areas)
- **Labels** — what each field is for
- **Validation** — checking that the input makes sense (is that actually an email address?)
- **Feedback** — telling the user what happened (success, error)
- **Submission** — what happens with the data

For this exercise, we'll build the form and handle validation visually. We won't connect it to a real backend (server) yet — that's a more advanced topic. But the form will *feel* complete.

---

### Let's Go

#### Prompt 1: Build the Form

```
Add a "Stay in the Loop" section above the footer. Include a simple email signup form with:
- A heading: "Stay in the loop"
- A subtitle: "Get notified when we add new features. No spam, ever."
- An email input field with placeholder text "your@email.com"
- A submit button that says "Notify Me"
- Place the input and button side by side on desktop (like a single-line form)
- Style it cleanly — rounded corners on the input and button, comfortable height (at least 48px), and make the button a bold color that matches your page's accent color
```

---

#### Prompt 2: Validation

What if someone types "asdfgh" instead of an email? Let's handle that:

```
Add email validation to the form:
- When the user clicks "Notify Me" with an empty field, show a message below the input: "Please enter your email address" in a red/error color
- When the email format is invalid (no @ symbol, no domain), show: "That doesn't look like a valid email"
- When the email is valid, show a success message: "You're on the list! 🎉" in a green/success color and hide the form
- Add a subtle shake animation to the input field when there's an error
- Add a green checkmark icon inside the input field when the email format is valid (real-time, as they type)
```

---

#### Prompt 3: Visual States

Forms have multiple visual states. Let's make each one clear:

```
Style the form input states:
- Default: subtle border, light background
- Focused (when clicked into): brighter border color, subtle glow/shadow
- Error: red border, red text below
- Success: green border, checkmark icon
- Make sure the transition between states is smooth (about 0.2 seconds)
- On mobile, stack the input and button vertically (input on top, full-width button below)
```

---

### Design Thinking: Form UX

Forms are where a lot of websites lose people. Good form design:
- **Minimizes fields** — only ask for what you need (just email here, not name + company + phone)
- **Gives immediate feedback** — don't wait until submission to show errors
- **Looks inviting** — generous sizing, clear labels, not cramped
- **Respects the user** — clear privacy note, no tricks

You're already thinking about this because you're a designer. The difference is now you're implementing it, not just speccing it.

---

### Bonus: A Thank-You State

```
After successful submission, replace the entire form section with a thank-you message:
- A large checkmark or celebration emoji
- "You're in! We'll let you know when something new drops."
- A subtle confetti animation or a gentle bounce on the checkmark
- This state should persist if they refresh (save it to localStorage)
```

---

### What You Learned Today

- How to build a form with input fields and buttons
- How to add validation (checking that input is correct before accepting it)
- How to design multiple visual states (default, focus, error, success)
- That forms are about conversation — receiving input and giving feedback
- The importance of form UX (keep it simple, give immediate feedback)

---

### Tomorrow

You'll tackle performance and accessibility — making sure your page loads fast and works for everyone, including people using screen readers or keyboard navigation.

---

> 🎯 **Checkpoint:** You should have a working email form that validates input and shows appropriate success/error messages. If validation isn't triggering, try: "The form submits even with an invalid email. Can you add JavaScript validation that checks the email format before showing the success message?"
