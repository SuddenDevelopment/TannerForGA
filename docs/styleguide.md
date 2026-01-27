# TannerForGA — Style Guide (inspired by reference campaigns)

This guide synthesizes common patterns from the reference sites in [README.md](../README.md):
- https://www.friendsofdumont.com/ (Squarespace)
- https://www.chrishardenforcongress.com/ (Wix)
- https://jodilewisforgeorgia.com/ (custom/CMS)
- https://www.chaneyforgeorgia.com/ (Wix)

Goal: capture the *best, reusable* visual/structural ideas (not copy exact designs) and translate them into consistent, static-site-friendly rules for Tanner’s site.

> Note: Without installing a full browser engine in this environment, the guide focuses on observable structure/content patterns and broadly-used campaign design conventions (rather than exact, pixel-perfect font names/hex codes).

---

## 1) Common Patterns Worth Borrowing

### 1.1 Above-the-fold clarity
All four sites prioritize a fast “who/what/where” read:
- Candidate name + office/district
- A short, values-forward tagline
- One primary CTA (almost always **Donate**) plus a secondary (**Volunteer**, **Request a Yard Sign**, or **Email Us**)

### 1.2 Simple navigation + persistent CTA
A compact header with:
- Left: logo/name lockup
- Center: 3–6 anchors/pages (About, Priorities, Get Involved, Events, Contact)
- Right: a contrasting **Donate** button

### 1.3 Modular sections (scroll storytelling)
The dominant structure is a vertical “section stack”:
- Hero
- About / bio
- Issues / priorities (usually 3–6)
- Ways to help (volunteer modes)
- Email signup
- Donate block (with quick amounts)
- Footer with socials + disclaimer

### 1.4 Image use: human-first
Strong preference for:
- Large candidate photo in hero
- Alternating image/text sections (“issue copy” paired with a photo)
- Occasional supporting images as background texture (subtle)

### 1.5 CTA repetition (intentionally)
The best performing pattern is repeating the same 2–3 CTAs at natural points:
- After hero
- After priorities
- Near footer

---

## 2) Site-by-site Notes (what to borrow)

### 2.1 Friends of Dumont (Squarespace)
Noteworthy influences:
- Minimal header + prominent Donate.
- Very clean section rhythm: headline → short paragraph → supporting image.
- Quick-donate amounts near “Join the team” reduce friction.
- Uses multiple candidate images to keep the page personal.

Borrow for Tanner:
- “Join the Team” quick amounts block.
- Alternating priorities with a consistent image treatment.

### 2.2 Chris Harden for Congress (Wix)
Noteworthy influences:
- Big, bold hero headline with immediate CTA.
- Strong “ways to help” grid with icons (canvass, phone bank, etc.).
- Priorities written as longer, persuasive sections.
- Lots of conversion points: volunteer form + donate grid.

Borrow for Tanner:
- Volunteer “ways to help” card grid.
- Optional long-form priority pages/sections for SEO + credibility.

### 2.3 Jodi Lewis for Georgia
Noteworthy influences:
- Clear issue categories presented right up top (acts like an on-page table of contents).
- Repeats a 3-CTA cluster: Volunteer / Donate / Yard Sign.
- Messaging is short, plain language, and “kitchen-table” oriented.

Borrow for Tanner:
- Anchor-link issue navigation (fast jumping).
- Consistent 2–3 CTA cluster used site-wide.

### 2.4 Chaney for Georgia (Wix)
Noteworthy influences:
- “Movement” framing and community-forward tone.
- Adds social proof with supporter quotes/testimonials.
- Adds “Latest updates” / blog cards to show activity.
- Clear donation and contact sections.

Borrow for Tanner:
- Optional testimonials/social-proof section.
- Optional updates/news section (even if lightweight).

---

## 3) Recommended Visual System for Tanner (tokens + rules)

### 3.1 Color scheme (campaign-safe, high contrast)
These sites generally lean into classic campaign contrast: deep blue + bright accent + lots of white.

Recommended palette (aligned to Tanner’s provided logo assets):
- **Primary (Navy):** `#062c53` — used for headers, key text, footer backgrounds.
- **Accent (Red):** `#d1222c` — used sparingly for buttons, underline rules, badges.
- **Background (White/Off-white):** dominant canvas.
- **Neutral grays:** body text + borders.
- **Optional highlight:** a warm gold/tan for “Georgia warmth” (use carefully).

Rules:
- Keep the page mostly light; reserve dark backgrounds for hero overlays and the footer.
- Don’t use more than 1 accent color at a time in a component.
- Ensure CTA buttons meet WCAG contrast.

### 3.2 Typography (static-friendly and readable)
All sites use a bold, campaign-style headline font paired with a highly readable body font.

Recommended typography choices:
- **Headings:** a bold sans-serif (works well in ALL CAPS for short headlines).
- **Body:** a neutral sans-serif with strong readability.

Implementation-friendly options:
- Use system fonts (fastest) or one Google Font family for body + one for headings.

Rules:
- Keep headlines short (1–2 lines) and punchy.
- Prefer sentence case for paragraphs; reserve ALL CAPS for labels and small headings.
- Use generous line-height for body copy.

### 3.3 Spacing + layout
Common across reference sites:
- Wide hero, but content constrained with a max width.
- Consistent vertical spacing between sections.

Recommended layout rules:
- **Max content width:** 1100–1200px.
- **Grid:** 12-column mental model; implement with CSS grid/flex.
- **Section padding:** large on desktop, medium on mobile.

### 3.4 Buttons + CTAs
Recommended hierarchy:
- **Primary CTA:** filled button (Donate).
- **Secondary CTA:** outline button (Volunteer / Email Us).
- **Tertiary CTA:** text link (Request a yard sign, Events).

Button shape and feel:
- Moderate corner radius.
- Bold label.
- Clear hover/focus states.

### 3.5 Photography + imagery placement
Hero image guidance:
- Use a high-resolution candidate photo.
- Crop for different breakpoints (desktop wide, mobile tighter).
- Use subtle overlay to guarantee readable text.

In-page images:
- Alternate image/text sections for priorities.
- Use consistent aspect ratios per section type.
- Prefer a small set of strong images over many mediocre ones.

### 3.6 Section templates (recommended)
Use these repeating section patterns:

1) **Hero**
- Name + office/district
- Tagline
- CTA cluster (Donate / Volunteer / Updates)

2) **About**
- 1–2 paragraphs + headshot
- 3 bullet “credibility markers” (local ties, service, priorities)

3) **Priorities (3–5)**
- Cards or alternating blocks
- Each priority: headline + 2–4 sentences + optional “Learn more” anchor

4) **Get involved**
- A “ways to help” grid (3–6 cards)

5) **Email signup**
- Simple form with short privacy reassurance

6) **Donate**
- Quick amounts + “Other”
- Short persuasive line

7) **Footer**
- Social links
- Address/contact (if applicable)
- Required disclaimer

### 3.7 Tone + microcopy
Across the references, copy tends to be:
- Short sentences.
- Concrete benefits (“lower costs”, “strong schools”, “public safety”).
- Values-forward but not abstract.

Rules:
- Each section should answer “What is the problem?” + “What will Tanner do?” in 2–4 sentences.
- Avoid jargon; favor “kitchen-table” language.

---

## 4) Interaction & Accessibility

Minimum standard to match modern campaign sites:
- Keyboard focus visible on links/buttons.
- Clear hover states.
- Sufficient contrast for text and buttons.
- Alt text for meaningful images.
- Avoid heavy animations; use subtle transitions.

---

## 5) Practical implementation notes (for this repo)

Because TannerForGA is static (plain HTML/CSS/JS):
- Prefer CSS variables for color tokens.
- Keep components simple: hero, cards, form, footer.
- Optimize images (responsive `srcset`, modern formats if available).
- Keep forms and donation links external-friendly (e.g., ActBlue links).
