# SIMTI — Website Design Direction

**Skin Integrity & Management Training Institute**
_Complete frontend design system, page structure, and component guide_

---

## 1. Brand Identity Summary

| Attribute    | Value                                                |
| ------------ | ---------------------------------------------------- |
| Name         | SIMTI                                                |
| Full name    | Skin Integrity & Management Training Institute       |
| Tagline      | _Barrier First, Always_                              |
| Audience     | Licensed pharmacists in Nigeria                      |
| Tone         | Clinical authority meets practitioner empowerment    |
| Core promise | Pharmacists leave as certified clinical skin experts |

---

## 2. Colour System

### Primary Palette

| Name            | Hex       | Usage                                              |
| --------------- | --------- | -------------------------------------------------- |
| **Brand Brown** | `#614136` | Primary brand — nav bg, headings, dark sections    |
| **Warm Cream**  | `#F7F1E8` | Page background, card backgrounds, light sections  |
| **Deep Navy**   | `#1A4A5C` | Clinical authority — feature sections, footer      |
| **Teal**        | `#2E7A8F` | Accents — hover states, tags, progress bars, links |
| **Gold**        | `#B8963A` | Premium signal — CTAs, badges, highlights, icons   |

### Extended Palette (Derived)

| Name            | Hex       | Derived From | Usage                                       |
| --------------- | --------- | ------------ | ------------------------------------------- |
| **Dark Brown**  | `#3D1F18` | Brown × 60%  | Body text on cream, high contrast           |
| **Light Brown** | `#8A6059` | Brown × 140% | Borders, dividers, inactive states          |
| **Pale Gold**   | `#D4B47A` | Gold × 140%  | Hover state on gold buttons, subtle accents |
| **Deep Teal**   | `#1D5A6B` | Teal × 80%   | Pressed states, dark variant                |
| **Near Black**  | `#120A07` | Brown × 20%  | Absolute dark text, nav text                |

### CSS Custom Properties

```css
:root {
  /* Brand */
  --color-brown: #614136;
  --color-brown-dark: #3d1f18;
  --color-brown-light: #8a6059;
  --color-cream: #f7f1e8;
  --color-cream-dark: #ede3d4;

  /* Clinical */
  --color-navy: #1a4a5c;
  --color-navy-dark: #0f2e3a;
  --color-teal: #2e7a8f;
  --color-teal-dark: #1d5a6b;
  --color-teal-light: #4a9aaf;

  /* Premium */
  --color-gold: #b8963a;
  --color-gold-light: #d4b47a;
  --color-gold-pale: #edd9a3;

  /* Neutral */
  --color-black: #120a07;
  --color-white: #ffffff;

  /* Semantic */
  --color-text-primary: #3d1f18;
  --color-text-secondary: #8a6059;
  --color-text-on-dark: #f7f1e8;
  --color-text-on-brown: #f7f1e8;
  --color-text-on-navy: #f7f1e8;
  --color-bg-page: #f7f1e8;
  --color-bg-section-alt: #ede3d4;
  --color-border: #d4c5ba;
}
```

### Colour Pairings (Safe Combinations)

| Background           | Text                 | Accent              | Use                    |
| -------------------- | -------------------- | ------------------- | ---------------------- |
| `#614136` Brown      | `#F7F1E8` Cream      | `#B8963A` Gold      | Hero, Nav, dark CTAs   |
| `#F7F1E8` Cream      | `#3D1F18` Dark Brown | `#B8963A` Gold      | Body sections, cards   |
| `#1A4A5C` Navy       | `#F7F1E8` Cream      | `#2E7A8F` Teal      | Feature blocks, footer |
| `#EDE3D4` Cream Dark | `#3D1F18` Dark Brown | `#614136` Brown     | Alternating sections   |
| `#3D1F18` Dark Brown | `#F7F1E8` Cream      | `#D4B47A` Pale Gold | Footer, testimonials   |

---

## 3. Typography

### Font Stack

```css
/* Display — authority, sophistication */
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap");

/* Body — clean, legible, professional */
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap");

/* Mono — data, credentials, stats */
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap");
```

> **Why Cormorant Garamond?** It carries medical/academic gravitas — the same energy as a university emblem or a clinical journal masthead. Paired with DM Sans, it bridges credentialing institute and modern professional brand.

### Type Scale

```css
:root {
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --font-mono: "DM Mono", "Courier New", monospace;

  /* Scale */
  --text-xs: 0.75rem; /* 12px — labels, captions */
  --text-sm: 0.875rem; /* 14px — small body, metadata */
  --text-base: 1rem; /* 16px — body default */
  --text-lg: 1.125rem; /* 18px — lead text */
  --text-xl: 1.25rem; /* 20px — subheadings */
  --text-2xl: 1.5rem; /* 24px — section titles */
  --text-3xl: 1.875rem; /* 30px — page titles */
  --text-4xl: 2.25rem; /* 36px — hero sub */
  --text-5xl: 3rem; /* 48px — hero heading */
  --text-6xl: 3.75rem; /* 60px — hero display */
  --text-7xl: 4.5rem; /* 72px — large hero display */

  /* Line heights */
  --leading-tight: 1.15;
  --leading-snug: 1.35;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  /* Letter spacing */
  --tracking-tighter: -0.03em;
  --tracking-tight: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
  --tracking-widest: 0.2em;
}
```

### Typography Usage Rules

- **Page/Section display titles** → Cormorant Garamond, 500–700 weight, tight tracking
- **Body copy** → DM Sans 400, 16–18px, relaxed leading (1.7)
- **Labels, tags, eyebrows** → DM Sans 500–600, uppercase, wide tracking (0.15em)
- **Stats, numbers, credentials** → DM Mono 500
- **Italics** → Cormorant Garamond italic for pull quotes and emphasis
- **Button text** → DM Sans 600, slight wide tracking

---

## 4. Spacing & Layout

### Spacing Scale

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
  --space-32: 8rem; /* 128px */
}
```

### Grid System

```css
:root {
  --grid-columns: 12;
  --grid-gutter: 1.5rem; /* 24px */
  --grid-gutter-lg: 2rem; /* 32px */
  --container-max: 1280px;
  --container-padding: 1.5rem; /* mobile */
  --container-padding-lg: 4rem; /* desktop */
}
```

### Section Padding

| Breakpoint | Section vertical padding |
| ---------- | ------------------------ |
| Mobile     | 64px (4rem)              |
| Tablet     | 80px (5rem)              |
| Desktop    | 96–128px (6–8rem)        |

---

## 5. Border & Shadow System

```css
:root {
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Borders */
  --border-thin: 1px solid var(--color-border);
  --border-medium: 2px solid var(--color-border);
  --border-brand: 2px solid var(--color-brown);
  --border-gold: 2px solid var(--color-gold);

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(97, 65, 54, 0.08), 0 1px 2px rgba(97, 65, 54, 0.05);
  --shadow-md: 0 4px 6px rgba(97, 65, 54, 0.07), 0 2px 4px rgba(97, 65, 54, 0.06);
  --shadow-lg: 0 10px 25px rgba(97, 65, 54, 0.12), 0 4px 8px rgba(97, 65, 54, 0.08);
  --shadow-xl: 0 20px 40px rgba(97, 65, 54, 0.15), 0 8px 16px rgba(97, 65, 54, 0.1);
  --shadow-gold: 0 4px 20px rgba(184, 150, 58, 0.25);
}
```

---

## 6. Component Library

### 6.1 Buttons

#### Primary (Gold CTA)

```css
.btn-primary {
  background: var(--color-gold);
  color: var(--color-black);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}
.btn-primary:hover {
  background: var(--color-gold-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-gold);
}
.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary (Outlined Brown)

```css
.btn-secondary {
  background: transparent;
  color: var(--color-brown);
  border: 2px solid var(--color-brown);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 12px 30px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: var(--color-brown);
  color: var(--color-cream);
}
```

#### Ghost (On dark backgrounds)

```css
.btn-ghost {
  background: transparent;
  color: var(--color-cream);
  border: 1.5px solid rgba(247, 241, 232, 0.5);
  /* same padding/font as secondary */
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  border-color: var(--color-cream);
  background: rgba(247, 241, 232, 0.1);
}
```

---

### 6.2 Navigation

**Structure:** Fixed top nav, height 72px
**Behaviour:** Transparent on hero → solid `#3D1F18` after 80px scroll, with backdrop blur

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 72px;
  padding: 0 var(--container-padding-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease;
}
.navbar.scrolled {
  background: rgba(61, 31, 24, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(184, 150, 58, 0.15);
}
.navbar__logo {
  height: 40px;
  /* SIMTI wordmark or emblem */
}
.navbar__links {
  display: flex;
  gap: var(--space-8);
  list-style: none;
}
.navbar__link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-cream);
  text-decoration: none;
  letter-spacing: var(--tracking-wide);
  opacity: 0.85;
  transition:
    opacity 0.2s ease,
    color 0.2s ease;
}
.navbar__link:hover {
  opacity: 1;
  color: var(--color-gold-light);
}
.navbar__link.active {
  color: var(--color-gold);
  opacity: 1;
}
.navbar__cta {
  /* use .btn-primary, smaller */
  padding: 10px 24px;
}
```

**Nav Links:** Home · About · Fellows Programme · Curriculum · Testimonials · Apply Now (CTA)

---

### 6.3 Cards

#### Programme Feature Card

```css
.card-feature {
  background: var(--color-cream);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.card-feature::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-gold), var(--color-teal));
}
.card-feature:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
.card-feature__icon {
  width: 48px;
  height: 48px;
  background: var(--color-gold-pale);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-5);
}
.card-feature__title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-brown-dark);
  margin-bottom: var(--space-3);
}
.card-feature__body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

#### Testimonial Card

```css
.card-testimonial {
  background: var(--color-navy);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  position: relative;
}
.card-testimonial::before {
  content: '"';
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--color-gold);
  opacity: 0.3;
  position: absolute;
  top: 16px;
  left: 32px;
  line-height: 1;
}
.card-testimonial__quote {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-style: italic;
  color: var(--color-cream);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-6);
  position: relative;
  z-index: 1;
}
.card-testimonial__author {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-gold-light);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}
.card-testimonial__role {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-teal-light);
  margin-top: var(--space-1);
}
```

#### Curriculum Module Card

```css
.card-module {
  background: var(--color-cream);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-teal);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--space-6) var(--space-8);
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
}
.card-module__number {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-teal);
  font-weight: 500;
  min-width: 2rem;
  padding-top: 3px;
}
.card-module__title {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-brown-dark);
  margin-bottom: var(--space-2);
}
.card-module__desc {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

---

### 6.4 Section Eyebrow (Label Above Heading)

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}
.eyebrow::before {
  content: "";
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--color-gold);
}
/* On dark bg */
.eyebrow--light {
  color: var(--color-gold-light);
}
.eyebrow--teal {
  color: var(--color-teal-light);
}
.eyebrow--teal::before {
  background: var(--color-teal-light);
}
```

---

### 6.5 Stat Block

```css
.stat-block {
  text-align: center;
  padding: var(--space-8);
}
.stat-block__number {
  font-family: var(--font-mono);
  font-size: var(--text-5xl);
  font-weight: 500;
  color: var(--color-gold);
  display: block;
  line-height: 1;
  margin-bottom: var(--space-2);
}
.stat-block__label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-cream);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  opacity: 0.8;
}
```

---

### 6.6 Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
.badge--gold {
  background: var(--color-gold-pale);
  color: var(--color-brown-dark);
  border: 1px solid var(--color-gold);
}
.badge--teal {
  background: rgba(46, 122, 143, 0.12);
  color: var(--color-teal-dark);
  border: 1px solid var(--color-teal);
}
.badge--brown {
  background: rgba(97, 65, 54, 0.1);
  color: var(--color-brown);
  border: 1px solid var(--color-brown-light);
}
```

---

### 6.7 Divider

```css
.divider {
  width: 64px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-gold), transparent);
  margin: var(--space-6) 0;
}
.divider--center {
  margin: var(--space-6) auto;
}
.divider--full {
  width: 100%;
  background: var(--color-border);
  height: 1px;
}
```

---

## 7. Page Structure — Section by Section

### Section 1: Navigation

- Fixed, transparent → dark scroll
- Logo left (SIMTI emblem + wordmark)
- Links centre (desktop) or hamburger (mobile)
- "Apply Now" CTA right — gold button

---

### Section 2: Hero

**Layout:** Full-viewport height. Two-column split (60/40) on desktop, stacked on mobile.

**Left column:**

- Eyebrow label: `FELLOWS PROGRAMME · COHORT 2025`
- Display heading (Cormorant Garamond, 60–72px):
  _"Train to Become Nigeria's Leading Clinical Skin Expert"_
- Body text (DM Sans 18px): Brief 2-line value proposition
- Two CTAs side by side: `Apply for the Fellowship` (gold primary) + `See Curriculum` (ghost)
- Below CTAs: 3 inline trust signals (icon + text)
  - `✓ PCN-Recognized Curriculum`
  - `✓ Cohort-Based Learning`
  - `✓ Certified SIMTI Fellow`

**Right column:**

- Asymmetric image composition — pharmacist in clinical setting
- Floating card overlay (bottom-left): stat or mini-testimonial
- Subtle decorative element: thin gold vertical line or bracket

**Background:** Deep brown `#3D1F18` with a very subtle grain texture overlay (SVG noise filter)

**Animation:** Staggered fade-up on load — eyebrow → heading → body → CTAs → trust signals (each 80ms apart)

---

### Section 3: The Problem (Why SIMTI Exists)

**Background:** `#EDE3D4` Cream Dark
**Layout:** Left text block + right visual/pull quote panel

**Content direction:**

- Eyebrow: `THE GAP IN PHARMACY TRAINING`
- Heading: _"Pharmacists are the first line of skin care advice in Nigeria. Most aren't equipped for it."_
- 3 short problem statements (no bullet list — use inline paragraph blocks separated by a thin gold left border, like editorial pull notes)
  - Bleaching creams dispensed without guidance
  - Topical steroids misused at the point of sale
  - Skin of colour conditions misdiagnosed or overlooked

**Right panel:** Navy background `#1A4A5C`, large italic Cormorant Garamond pull quote:
_"The dispensing point is a clinical touchpoint. SIMTI prepares you to use it well."_

---

### Section 4: The Solution — Barrier-First Framework

**Background:** `#F7F1E8` Cream
**Layout:** Centre-aligned heading + 3-column card grid below

**Eyebrow:** `THE SIMTI METHOD`
**Heading:** _"Science-Led. Practitioner-Focused."_
**Sub-heading:** One sentence intro to the Barrier-First Framework

**3 Feature Cards (use `.card-feature`):**

1. **The Barrier-First Framework** — Understand how the skin barrier works before any recommendation
2. **Skin of Colour Expertise** — Trained specifically for the dermatological realities of Nigerian patients
3. **Clinical Confidence at the Counter** — Turn every dispensing moment into expert skin consultation

---

### Section 5: The Fellows Programme

**Background:** `#1A4A5C` Navy
**Layout:** Two-column — left: text + programme details; right: visual or icon grid

**Eyebrow:** `FELLOWS PROGRAMME` (teal variant)
**Heading (cream):** _"A Structured Path to Certification"_
**Body:** 3–4 sentences on the cohort model, community, and credential

**Programme details block** (4 items in a 2×2 grid):
| Icon | Detail |
|------|--------|
| 📅 | Cohort-based intake — next opening Q1 2026 |
| ⏱ | [X]-week structured curriculum |
| 🎓 | SIMTI Certified Fellow on completion |
| 👥 | Community of practice post-fellowship |

**CTA:** Gold button — `Apply for the Next Cohort`

---

### Section 6: Curriculum Overview

**Background:** `#F7F1E8` Cream
**Layout:** Left sidebar (module list) + right content panel, OR simple stacked list with `.card-module` components

**Eyebrow:** `WHAT YOU'LL LEARN`
**Heading:** _"From Skin Biology to Clinical Practice"_

**Curriculum modules (sample — adapt with actual content):**

- Module 01 — Skin Anatomy & the Barrier Function
- Module 02 — Understanding Skin of Colour
- Module 03 — Barrier Disruptors: Products, Environment, Behaviour
- Module 04 — Condition Assessment at the Dispensing Point
- Module 05 — Evidence-Based Product Recommendation
- Module 06 — Managing Common Skin Presentations
- Module 07 — Topical Steroids — Safe Guidance Protocol
- Module 08 — Case Studies & Clinical Practice

**Bottom CTA:** Download Curriculum PDF (secondary button)

---

### Section 7: Social Proof — Testimonials

**Background:** `#3D1F18` Dark Brown
**Layout:** Heading centred + 3-column testimonial card grid (`.card-testimonial`)

**Eyebrow:** `FROM SIMTI FELLOWS`
**Heading (cream, Cormorant):** _"Pharmacists Who Changed How They Practice"_

**Card content:** Name, state/city, quote about impact on patient interactions

---

### Section 8: Stats / Impact Bar

**Background:** `#614136` Brown
**Layout:** Single row, 4 stat blocks centred

**Stats (use `.stat-block`, adapt numbers to reality):**

- `142+` Fellows Trained
- `11` Nigerian States Reached
- `8` Core Curriculum Modules
- `96%` Fellows Report Increased Clinical Confidence

---

### Section 9: Who This Is For

**Background:** `#F7F1E8` Cream
**Layout:** Two-column — left: heading + body; right: eligibility checklist

**Eyebrow:** `IS THIS FOR YOU?`
**Heading:** _"Built for Practising Pharmacists Ready to Specialise"_
**Body:** 2 short paragraphs on the right pharmacist profile

**Right side — checklist (custom styled):**

- ✔ Licensed pharmacist (PCN registered)
- ✔ Customer-facing role (community or hospital pharmacy)
- ✔ Regularly asked about skin conditions and products
- ✔ Ready to add a clinical specialty to your practice

---

### Section 10: Application CTA

**Background:** `#1A4A5C` Navy (or a textured dark bg)
**Layout:** Centred, full-width, generous vertical padding (128px)

**Eyebrow:** `BARRIER FIRST, ALWAYS`
**Heading (large, Cormorant italic):** _"The next cohort of SIMTI Fellows starts soon."_
**Sub:** One line — application period, or urgency note
**CTA:** Gold button — `Apply Now` (large, 52px height)
**Below CTA:** _"Questions? Email us at hello@simti.ng"_ (teal link)

---

### Section 11: Footer

**Background:** `#120A07` Near Black
**Layout:** 4-column grid (desktop), stacked (mobile)

**Column 1 — Brand:**

- SIMTI logo (cream variant)
- Tagline: _Barrier First, Always_
- Social icons (Instagram, LinkedIn)

**Column 2 — Programme:**

- About SIMTI
- Fellows Programme
- Curriculum
- Apply

**Column 3 — Resources:**

- Blog / Articles
- Skin of Colour Resources
- For Pharmacies
- FAQ

**Column 4 — Contact:**

- Email
- Phone
- Location (Nigeria)
- PCN Accreditation badge (if applicable)

**Bottom bar:** Copyright line + Privacy Policy + Terms (cream text, 12px, 30% opacity)

---

## 8. Motion & Animation Guidelines

```css
/* Global transitions */
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --transition-slow: 0.4s ease;
  --transition-spring: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Entrance animation (use with Intersection Observer) */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-on-scroll {
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}
.animate-on-scroll.in-view {
  animation-play-state: running;
}

/* Stagger delays for card grids */
.stagger-1 {
  animation-delay: 0ms;
}
.stagger-2 {
  animation-delay: 80ms;
}
.stagger-3 {
  animation-delay: 160ms;
}
.stagger-4 {
  animation-delay: 240ms;
}
```

**Animation principles:**

- Entrance: fade + translate-up (24px → 0)
- Duration: 0.5–0.7s, ease or ease-out
- Stagger child elements: 80ms apart
- Hover: translateY(-2px to -4px) on cards
- No infinite animations on primary content
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Responsive Breakpoints

```css
/* Mobile-first */
--bp-sm: 480px; /* large phone */
--bp-md: 768px; /* tablet */
--bp-lg: 1024px; /* small desktop */
--bp-xl: 1280px; /* desktop */
--bp-2xl: 1536px; /* large desktop */
```

### Key Responsive Rules

| Element           | Mobile         | Desktop      |
| ----------------- | -------------- | ------------ |
| Container padding | 24px           | 64px         |
| Hero layout       | Stacked        | 60/40 split  |
| Nav               | Hamburger menu | Inline links |
| Card grids        | 1 col          | 3 col        |
| Section padding   | 64px           | 96–128px     |
| Hero heading      | 40–48px        | 60–72px      |
| Stat bar          | 2×2 grid       | 4-col row    |
| Footer            | Stacked        | 4-col grid   |

---

## 10. Recommended Tech Stack

| Layer          | Choice                                                | Reason                                                  |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| Framework      | **Next.js 14 (App Router)**                           | SEO critical for credentialing brand; fast static pages |
| Styling        | **Tailwind CSS v4** + custom CSS variables            | Utility classes + design token system                   |
| Animations     | **Framer Motion**                                     | Scroll-triggered, staggered, spring physics             |
| Fonts          | Google Fonts (Cormorant Garamond + DM Sans + DM Mono) | Free, fast CDN                                          |
| Icons          | **Lucide React**                                      | Clean, consistent, lightweight                          |
| Forms          | **React Hook Form** + **Zod**                         | Application form validation                             |
| CMS (optional) | **Sanity.io**                                         | For testimonials, cohort dates, curriculum updates      |
| Hosting        | **Vercel**                                            | Zero-config Next.js deployment                          |

---

## 11. SEO & Meta Defaults

```html
<title>SIMTI — Barrier First, Always | Clinical Skin Training for Pharmacists</title>
<meta
  name="description"
  content="SIMTI trains Nigerian pharmacists to become certified clinical skin experts through the Barrier-First Framework. Join the Fellows Programme today."
/>
<meta property="og:image" content="/og-image.png" />
<!-- og:image: 1200×630px, brown background, cream SIMTI logo + tagline -->

<!-- Schema.org: EducationalOrganization -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SIMTI",
    "description": "Clinical skin training institute for pharmacists in Nigeria",
    "url": "https://simti.ng",
    "areaServed": "NG"
  }
</script>
```

---

## 12. Asset Checklist

- [ ] SIMTI logo — full colour (cream/gold on dark, brown on light)
- [ ] SIMTI emblem / circular badge only
- [ ] Hero image — pharmacist in clinical/professional setting
- [ ] Fellow portraits (for testimonials)
- [ ] Programme imagery (classroom, cohort, online session)
- [ ] OG image (1200×630px)
- [ ] Favicon (32×32, 180×180 Apple touch)
- [ ] PCN accreditation badge (if available)
- [ ] Curriculum PDF for download CTA

---

## 13. Quick Reference — Design Do's & Don'ts

### ✅ Do

- Use Cormorant Garamond for all display headings — it carries the academic weight
- Pair brown backgrounds with cream text + gold accents only
- Use navy sections to signal clinical authority and break up warmth
- Keep body text at minimum 16px with 1.7 line-height
- Use the eyebrow component above every major section heading
- Use DM Mono for all numbers, stats, and credentials
- Maintain generous whitespace — this is a premium credentialing brand

### ❌ Don't

- Use generic sans-serif (Inter, Poppins, etc.) for headings
- Mix more than 3 colours in any single section
- Use teal as a primary background — it's an accent only
- Use the gold as a text colour on cream (insufficient contrast)
- Place dark text directly on brown (`#614136`) without contrast check
- Add decorative elements that compete with content

---

_Document version: 1.0 — SIMTI Brand & Design System_
_Prepared for frontend implementation — June 2025_
