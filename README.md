# Verified — EU compliance landing page

A Next.js (App Router) landing page for **Verified**, an EU compliance-ops product
for cross-border founders. The copy comes from `compliance-landing-page.html`; the
visual language implements the **"Vertex" technical-editorial design system**
defined in `design.md` (warm paper, one coral accent, grotesque type, blueprint
grid, the dot-matrix motif, bracket-corner buttons).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** (strict)
- `next/font` — Inter (UI + display) and JetBrains Mono (paths, IDs, citations)
- Plain CSS with design tokens — no UI framework, faithful to `design.md`
- Fully static (SSG): the whole page prerenders to HTML

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks + prerenders)
npm start        # serve the production build
```

## Structure

```
app/
  layout.tsx        # fonts + metadata
  globals.css       # design tokens + primitives (buttons, tags, dot-matrix, frame)
  components.css     # section-level layout styles
  page.tsx          # section composition
components/
  Nav, Hero, DocumentPanel, DotMatrix, TrustStrip, Problem, HowItWorks,
  Differentiator, Pricing, WhoFor, Faq, FinalCta, Footer, CookieConsent,
  ScrollReveal
```

## Design-system notes

- **Tokens only** — colors/radii/shadows live in `:root` (`globals.css`); components
  never hardcode hex. Accent coral is held to ≤5% of the surface per `design.md`.
- **Two-tone headlines** — `.display` (ink) + `.display--soft` (secondary gray).
- **Dot-matrix** (`DotMatrix.tsx`) — squares whose coral density grows downward, so
  the field reads as "data materializing." The lit pattern uses a seeded PRNG
  (Mulberry32), not `Math.random`, so server and client render identical markup —
  no hydration mismatch, no flash. It bleeds behind the hero panel and the final CTA.
- **Status mapping** — verified → `--pos` (mint/green); gaps & "required" flags →
  `--neg` (red); live/active & primary signals → `--accent` (coral).

## Accessibility & motion

- Scroll reveals are progressive-enhancement only (content is visible without JS).
- All animation respects `prefers-reduced-motion`.
- Status is never color-only — pills always carry a word ("Verified", "Gap").
- Focus-visible rings on all interactive elements; FAQ uses real buttons with
  `aria-expanded`.
