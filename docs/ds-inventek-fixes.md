# DS Inventek Website — Fix List for Development
**Prepared by:** UI/UX Critique (Claude · Anthropic)
**Site:** https://ds-inventek-i5u5etfv0-sakthisk.vercel.app/
**Date:** June 2026
**Priority Scale:** 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low

---

## 🔴 CRITICAL — Fix Before Launch

### FIX-001 · Build a real course enrollment flow
**Page:** `/courses` and `/courses/[slug]`
**Problem:** Every "Enroll →" and "Enroll Now →" button currently routes to `/contact` — a generic contact form. A user ready to pay ₹9,999 for the Drone Technology course is dropped into a blank textarea with zero context.
**Required action:**
- Create an enrollment modal (or dedicated `/enroll` page) with these fields:
  - Course name (pre-filled and read-only, passed via query param or context)
  - Full Name (required)
  - Email Address (required)
  - Phone Number (required, 10-digit Indian mobile)
  - City (required)
  - Age Group dropdown: `< 14 / 14–18 / 18–25 / 25+`
  - Prior Experience dropdown: `None / Basic / Intermediate / Advanced`
  - Preferred Batch dropdown: `Online Weekday / Online Weekend / Offline Weekday / Offline Weekend`
  - Course fee displayed as a confirmation summary (e.g. "Drone Technology · ₹9,999")
- On submit: POST to `/api/enroll` → Nodemailer sends formatted email to `sakthikumaran.dsinventek@gmail.com`
- Show success toast. Close modal. Reset form.
- "Enroll →" on course cards must pass the specific course slug/name into the modal.

---

### FIX-002 · Fix `og:url` pointing to localhost
**File:** `app/layout.tsx` (root metadata)
**Problem:** `og:url` is hardcoded to `http://localhost:3002`. This is a deployment artifact. Every link preview on LinkedIn, WhatsApp, and Twitter will show broken or missing metadata, and Google may index `localhost:3002` as the canonical URL.
**Required action:**
- Set `og:url` to the production domain: `https://dsinventek.com` (or the Vercel URL until custom domain is live)
- Use an environment variable:
  ```ts
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ds-inventek-i5u5etfv0-sakthisk.vercel.app'
  ```
- Update `metadataBase` in root `layout.tsx`:
  ```ts
  export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    ...
  }
  ```

---

### FIX-003 · Add `og:image` for social sharing
**File:** `app/layout.tsx`
**Problem:** No `og:image` tag exists. Every share on WhatsApp, LinkedIn, and Twitter shows a blank/grey preview card — wasting every organic share as a missed impression.
**Required action:**
- Create a 1200×630px OG image: DS Inventek logo centred on the deep purple brand background, with the tagline "World Champions in Robotics Education"
- Save as `/public/og-image.png`
- Add to metadata:
  ```ts
  openGraph: {
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DS Inventek — Robotics Education' }]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  }
  ```

---

### FIX-004 · Remove or replace the testimonial disclaimer
**Page:** `/` (homepage) and `/courses`
**Problem:** The line *"ℹ️ Note: Official parent and school reviews are being aggregated and will be updated soon"* appears immediately below the testimonials section. It actively tells visitors the reviews may not be real, destroying their credibility entirely.
**Required action — choose one:**
- **Option A (Recommended):** Remove the disclaimer. Remove the three placeholder testimonials. Replace with one real, verified quote — full name, photo, institution name, and course/service used. One credible review is worth more than three unverified ones.
- **Option B:** Keep the testimonials but remove the disclaimer. The testimonials as written are plausible and do no harm without the caveat.
- Do NOT keep both the testimonials and the disclaimer together.

---

## 🟠 HIGH PRIORITY — Fix Within First Sprint

### FIX-005 · Fix "Get More Info →" service card links
**Page:** `/` (homepage), Services preview section
**Problem:** All three service cards ("EduTech Curriculum", "Robotics Lab Setup", "Experience Zone Setup") link to `/contact` — the generic contact page. The user loses all service context.
**Required action:**
- "Get More Info →" on each service card must link to the corresponding service detail page: `/services/[slug]`
  - EduTech Curriculum → `/services/edutech-curriculum`
  - Robotics Lab Setup → `/services/robotics-lab-setup`
  - Experience Zone Setup → `/services/experience-zone`
- If individual service detail pages don't exist yet, create them (see PRD Section 5.3.2).
- The detail page CTA ("Get a Quotation") opens the Quotation Modal (see PRD Section 5.3.3).

---

### FIX-006 · Build the service quotation modal
**Page:** `/services/[slug]`
**Problem:** No quotation request flow exists. Institutional buyers (schools, colleges, mall operators) have no structured path to request a quote — they land on a generic contact form.
**Required action:**
- Create a `QuotationModal` component triggered by "Get a Quotation" button on each service page
- Fields:
  - Full Name (required, min 2 chars)
  - Organisation Name (optional)
  - Email Address (required, valid format)
  - Phone Number (required, 10-digit Indian mobile)
  - Service Interest (dropdown, pre-selected from current service page)
  - Budget Range (dropdown): `< ₹1L / ₹1–5L / ₹5–20L / ₹20L+ / Prefer to discuss`
  - Message / Requirements (required, min 20 chars)
- On submit: POST to `/api/quotation` → email to `sakthikumaran.dsinventek@gmail.com`
- Subject line format: `[DS Inventek] Quotation Request — {Service} — {Name}`

---

### FIX-007 · Add audience segmentation section to homepage
**Page:** `/` (homepage)
**Problem:** The homepage hero targets both B2C students and B2B institutions simultaneously. The dual CTA ("Explore Courses →" / "Set Up a Robotics Lab") leaves a first-time visitor unsure which path applies to them.
**Required action:**
- Add a two-path section below the hero stats bar:
  ```
  ┌─────────────────────┐  ┌─────────────────────┐
  │   FOR STUDENTS      │  │  FOR INSTITUTIONS   │
  │  Learn robotics.    │  │  Equip your school. │
  │  Build real bots.   │  │  Lab · Curriculum · │
  │                     │  │  Experience Zones   │
  │  [Explore Courses]  │  │  [Get a Quotation]  │
  └─────────────────────┘  └─────────────────────┘
  ```
- Two equal glassmorphic cards, one violet-accented (student), one cyan-accented (institution)
- This replaces the need for the hero to do double duty

---

### FIX-008 · Show course pricing on the homepage course strip
**Page:** `/` (homepage), Courses Preview section
**Problem:** Course prices (₹2,499 – ₹11,999) only appear on `/courses`. Homepage course cards show no pricing, so users must navigate away to discover costs before they can make a decision.
**Required action:**
- Add price to each course card in the homepage strip:
  ```
  Basic Electronics · ₹2,499 · 8 hrs
  ```
- Display price in `JetBrains Mono` font, smaller than the course title, styled in the cyan accent colour
- Keep it subtle — it's a prompt, not the headline

---

### FIX-009 · Fix Twitter card type
**File:** `app/layout.tsx`
**Problem:** Twitter/X card type is set to `summary` (small square thumbnail). For a visual brand this renders as a tiny icon preview.
**Required action:**
- Change to `summary_large_image`:
  ```ts
  twitter: {
    card: 'summary_large_image',
  }
  ```
- Requires FIX-003 (og:image) to be completed first

---

## 🟡 MEDIUM PRIORITY — Fix in Second Sprint

### FIX-010 · Add `aria-hidden` to all emoji icons
**Pages:** All pages
**Problem:** Emoji used as icons (📚, 🖥️, ✨, ⚡, ◈, ▲, 🏆, 🌍 etc.) are read aloud by screen readers verbatim — "books emoji", "monitor emoji", "sparkles emoji". This is a poor and confusing screen reader experience.
**Required action:**
- Wrap all decorative emoji in a `<span>` with `aria-hidden="true"`:
  ```tsx
  <span aria-hidden="true">📚</span>
  <span className="sr-only">Education</span>
  ```
- For level badges (⚡ Beginner, ◈ Intermediate, ▲ Advanced), the text label is sufficient — just add `aria-hidden` to the symbol:
  ```tsx
  <span aria-hidden="true">⚡</span> Beginner
  ```

---

### FIX-011 · Add `prefers-reduced-motion` support
**File:** Global CSS / Framer Motion config
**Problem:** Floating orb animations, scroll-triggered fade-ups, stat counter animations, and floating badge animations all play regardless of the user's OS accessibility setting.
**Required action:**
- Add to global CSS:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- For Framer Motion components, use the `useReducedMotion()` hook:
  ```tsx
  const shouldReduceMotion = useReducedMotion()
  const animProps = shouldReduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 } }
  ```

---

### FIX-012 · Add trust signals near course pricing CTAs
**Page:** `/courses` listing page and `/courses/[slug]` detail pages
**Problem:** Certification badges (DPIIT, AICTE, NITI Aayog) appear in the hero and footer but not near the moment a user sees a price and considers enrolling. Trust signals must be positioned at the point of decision.
**Required action:**
- Below each course price or next to the "Enroll" CTA, add a compact trust strip:
  ```
  ✓ DPIIT Recognised  ✓ Certificate included  ✓ Materials included
  ```
- These are single-line text items, not logo badges — keep it lightweight
- Also add: "🔒 Secure enrollment · Confirmation within 24 hours"

---

### FIX-013 · Reduce certification badge strip to 3 items
**Page:** `/` (homepage), below hero
**Problem:** Five certification badges (DPIIT, NITI Aayog, DSIR, AICTE, Startup India) are displayed in a horizontal strip. Most visitors won't recognise all five. Showing all five at once dilutes the impact of each.
**Required action:**
- Show only the 3 most recognisable: DPIIT Recognised · AICTE Approved · Startup India
- Give them more breathing room and slightly larger logotype/text
- The other two (NITI Aayog, DSIR) can appear on the About page or footer

---

### FIX-014 · Fix stat counter order on homepage
**Page:** `/` (homepage), Stats Bar
**Problem:** Current order is `10+ Years → 5,000+ Students → 300+ Wins → 7 Verticals`. Social proof (students, wins) should lead over operational facts (years, verticals) to build the conversion case faster.
**Required action:**
- Reorder to: `5,000+ Students Trained → 300+ Competition Wins → 10+ Years of Excellence → 7 Business Verticals`
- This front-loads the most persuasive numbers

---

### FIX-015 · Add `sizes` prop to all Next.js Image components
**Pages:** All pages with `<Image>` components
**Problem:** Course and service card images are being fetched at `w=3840` (Next.js default when `sizes` is not specified). On a mobile device displaying a 300px card, this requests a 3840px image — a massive performance waste.
**Required action:**
- Add `sizes` to every `<Image>` component based on its rendered size:
  ```tsx
  // For course/service cards in a 3-column grid:
  <Image sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" ... />

  // For the logo:
  <Image sizes="96px" ... />

  // For hero full-width images:
  <Image sizes="100vw" ... />
  ```

---

### FIX-016 · Rewrite weak service card copy
**Page:** `/` (homepage) and `/services`
**Problem:** Current descriptions are feature-led, not benefit-led. They describe what the service is, not what the customer gets.
**Required action — replace these exactly:**

| Current | Replace with |
|---|---|
| "Structured robotics curriculum designed for CBSE and state board integration." | "Give your school a competitive edge — a CBSE-aligned robotics curriculum with full teacher training and lab support." |
| "End-to-end robotics lab design, equipment procurement, and installation." | "From empty classroom to fully operational robotics lab — we handle design, sourcing, and setup." |
| "Interactive robotics experience zones that engage the public." | "Turn footfall into fascination — robotics experience zones for malls, museums, and public venues." |

---

### FIX-017 · Add WhatsApp CTA `aria-label`
**Pages:** All pages (floating button, bottom-right)
**Problem:** The WhatsApp floating button "Chat with Us" opens a pre-filled WhatsApp message but has no `aria-label` describing its function to keyboard/screen reader users.
**Required action:**
```tsx
<a
  href="https://wa.me/919943336712?text=..."
  aria-label="Chat with DS Inventek on WhatsApp"
  target="_blank"
  rel="noopener noreferrer"
>
  Chat with Us
</a>
```

---

### FIX-018 · Add hero section for `/courses` page
**Page:** `/courses`
**Problem:** The courses page opens directly with the course grid — no hero, no headline context, no filtering. The PRD specifies a hero with animated headline and a filter bar (All / Beginner / Intermediate / Advanced).
**Required action:**
- Add hero section: headline "Courses That Ship Real Projects", subheadline "Every course ends with hardware you built yourself."
- Add client-side filter bar above the grid:
  - Buttons: All · Beginner · Intermediate · Advanced
  - Active filter highlights with violet background
  - Filters the visible course cards without page reload
  - No URL change required (client-side JS only)

---

## 🟢 LOW PRIORITY — Polish & Nice-to-Have

### FIX-019 · Reduce footer navigation links
**Pages:** All pages
**Problem:** The footer contains 12 outbound navigation links (4 services, 6 courses, 2 company). On conversion-oriented pages, this many exits compete with primary CTAs.
**Required action:**
- Reduce course footer links to 4 (most popular): Basic Electronics, Quad Bot, Robotic Arm, Drone Technology
- Add "View all courses →" as the final item

---

### FIX-020 · Add phone number to Contact page and footer
**Page:** `/contact`, footer
**Problem:** The contact page shows only an email address (`info@dsinventek.com`). No phone number is listed. Indian B2B buyers (school procurement managers) strongly prefer calling before committing to a lab setup purchase.
**Required action:**
- Add the team's phone/WhatsApp number to the Contact page left column
- Add to footer alongside the email
- If a dedicated sales number exists, use that rather than a personal number

---

### FIX-021 · Add Google Maps embed to Contact page
**Page:** `/contact`
**Problem:** The PRD specifies a Google Maps embed for the Chennai/Pondicherry office location. It is currently absent. In-person training buyers need to know where the center is.
**Required action:**
- Embed Google Maps iframe for the Chennai center
- If exact address is not yet confirmed, add a placeholder card: "Chennai & Pondicherry centers — address confirmation coming soon"
- Do not leave the contact page with email as the only location signal

---

### FIX-022 · Add `Back to top` button
**Pages:** All long-scroll pages
**Problem:** On mobile, after scrolling through the full homepage (hero → certifications → stats → services → courses → testimonials → CTA → footer), there is no way to return to the top without scrolling. The nav is sticky but doesn't provide a "back to top" affordance.
**Required action:**
- Add a "↑" button that appears after 400px of scroll, fixed bottom-right (above the WhatsApp button)
- On click: `window.scrollTo({ top: 0, behavior: 'smooth' })`
- Style to match the glassmorphic design system

---

### FIX-023 · Add `font-display: swap` confirmation
**File:** `next.config.ts` / font configuration
**Problem:** Google Fonts loaded without `font-display: swap` will cause FOIT (Flash of Invisible Text) on slow connections — the page shows blank text while fonts load.
**Required action:**
- If using `next/font/google` (recommended):
  ```ts
  import { Orbitron, Inter } from 'next/font/google'
  const orbitron = Orbitron({ subsets: ['latin'], display: 'swap' })
  ```
- Confirm `display: 'swap'` is set on all three font definitions (Orbitron, Inter, JetBrains Mono)

---

### FIX-024 · Add `rel="noopener noreferrer"` to external links
**Pages:** All pages with social links (LinkedIn, Instagram, YouTube, WhatsApp)
**Problem:** External links that open in `target="_blank"` without `rel="noopener noreferrer"` expose the page to a `window.opener` security vulnerability (reverse tabnapping).
**Required action:**
- All `<a target="_blank">` links must include `rel="noopener noreferrer"`:
  ```tsx
  <a href="https://linkedin.com/company/ds-inventek" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  ```

---

## Summary Table

| Fix | Area | Priority | Effort |
|-----|------|----------|--------|
| FIX-001 | Enrollment modal flow | 🔴 Critical | High |
| FIX-002 | Fix `og:url` localhost bug | 🔴 Critical | Low |
| FIX-003 | Add `og:image` | 🔴 Critical | Medium |
| FIX-004 | Remove testimonial disclaimer | 🔴 Critical | Low |
| FIX-005 | Fix service card links | 🟠 High | Low |
| FIX-006 | Build quotation modal | 🟠 High | High |
| FIX-007 | Audience segmentation section | 🟠 High | Medium |
| FIX-008 | Show pricing on homepage cards | 🟠 High | Low |
| FIX-009 | Fix Twitter card type | 🟠 High | Low |
| FIX-010 | `aria-hidden` on emoji | 🟡 Medium | Low |
| FIX-011 | `prefers-reduced-motion` | 🟡 Medium | Low |
| FIX-012 | Trust signals near pricing | 🟡 Medium | Low |
| FIX-013 | Reduce certification badges to 3 | 🟡 Medium | Low |
| FIX-014 | Reorder stat counters | 🟡 Medium | Low |
| FIX-015 | Add `sizes` to Image components | 🟡 Medium | Low |
| FIX-016 | Rewrite service card copy | 🟡 Medium | Low |
| FIX-017 | WhatsApp button `aria-label` | 🟡 Medium | Low |
| FIX-018 | Courses page hero + filter bar | 🟡 Medium | Medium |
| FIX-019 | Reduce footer links | 🟢 Low | Low |
| FIX-020 | Add phone number | 🟢 Low | Low |
| FIX-021 | Google Maps embed | 🟢 Low | Low |
| FIX-022 | Back to top button | 🟢 Low | Low |
| FIX-023 | `font-display: swap` | 🟢 Low | Low |
| FIX-024 | `rel="noopener noreferrer"` | 🟢 Low | Low |

---

*Document generated from UI/UX critique of https://ds-inventek-i5u5etfv0-sakthisk.vercel.app/ · June 2026*
