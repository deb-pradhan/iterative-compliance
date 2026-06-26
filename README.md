# Iterative Research — site

A Next.js (App Router) project housing two sites that share one design language,
the **"Vertex" technical-editorial design system** from `design.md` (warm paper,
one coral accent, grotesque type, blueprint grid, the dot-matrix motif,
bracket-corner buttons):

- **`/`** — the **Iterative Research** main site. Content extracted from the live
  Framer site at iterativeresearch.xyz (home, about, and FAQ pages): hero,
  services, the four products (AnalyzIR, DreamIR, StringIR, ScripIR) with their
  real product screenshots, why-partner, about (stats + values), and FAQ.
- **`/compliance`** — the **Verified** EU compliance-ops landing page. Copy from
  `compliance-landing-page.html`. Linked from the main site nav, footer, and the
  AnalyzIR product card.

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
  layout.tsx          # fonts + default (Iterative Research) metadata
  globals.css         # design tokens + primitives (buttons, tags, dot-matrix, frame)
  components.css      # shared section-level layout styles
  main.css            # main-site section styles
  page.tsx            # Iterative Research main site
  compliance/page.tsx # Verified compliance landing (own metadata)
components/
  main/               # Iterative Research sections (Nav, Hero, Services,
                      #   Products, WhyPartner, About, MainFaq, FinalCta, Footer)
  DotMatrix, ScrollReveal   # shared primitives (used by both sites)
  Nav, Hero, DocumentPanel, TrustStrip, Problem, HowItWorks, Differentiator,
  Pricing, WhoFor, Faq, FinalCta, Footer, CookieConsent  # compliance sections
public/assets/        # logo-orb + product screenshots + OG image
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
