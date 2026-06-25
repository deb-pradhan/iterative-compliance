# DESIGN SYSTEM — "Vertex" Technical-Editorial Aesthetic

> A reusable design language extracted pixel-by-pixel from the reference UI.
> Drop this into any app or marketing site and the output will carry the same
> calm, precise, developer-grade personality — regardless of the actual content.

---

## 0. Design Philosophy (read this first)

The whole system is built on **three tensions held in balance**:

1. **Warm paper, cold data.** The page lives on a soft warm off-white (paper), but
   everything placed on it is precise, monochrome, and engineered. The warmth keeps
   it from feeling sterile; the precision keeps it from feeling decorative.
2. **Editorial typography, technical ornament.** Huge confident grotesque headlines
   (magazine energy) sit next to blueprint-style ornament — a pixel/dot matrix, node
   graphs, crop-mark corners, and visible grid lines (engineering-drawing energy).
3. **Restraint with one loud accent.** ~95% of the interface is paper, white, ink,
   and gray. A single warm coral/orange does *all* the talking: it marks the active
   state, the primary metric, the live data, and the one link you should click.

**Mantras**
- *If it isn't structural, it's monochrome.* Color is a signal, never a decoration.
- *Two-tone headlines.* Every hero says the literal thing in ink and the aspirational
  thing in gray.
- *Show the grid.* Don't hide the scaffolding — thin rules and module lines are part
  of the look.
- *Data is the hero image.* Product screenshots, node graphs and the dot-matrix are
  the "photography." There are no stock photos.
- *Quiet until it matters.* Motion, shadow and color are spent sparingly so they land
  when used.

---

## 1. Color Tokens

All values sampled from the source. Use the CSS variables; never hardcode hex in
components.

### 1.1 Core surfaces & ink

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F0EFEB` | Primary page background (warm off-white). The default canvas. |
| `--surface` | `#FFFFFF` | Cards, app/product UI, alternating sections, logo bands. |
| `--ink` | `#0A0A0A` | Headlines, primary text on paper/white. Effectively black. |
| `--ink-button` | `#1F1F1F` | Filled dark buttons / dark chips (a hair off true black). |
| `--graphite` | `#2A2A2A` | Dark surfaces, icon chips, node blocks. |
| `--canvas-shell` | `#CACACA` | Neutral gray *outside* the layout (mockup matte only — not used in production full-bleed). |

### 1.2 Text grays (a deliberate, narrow ramp)

| Token | Hex | Use |
|---|---|---|
| `--text-secondary` | `#908F8D` | The "second line" of two-tone headlines. |
| `--text-body` | `#6F6E6A` | Body copy / paragraph text on paper. |
| `--text-muted` | `#8C8B87` | Sub-labels, captions, helper text. |
| `--text-faint` | `#A8A7A3` | Timestamps, meta, eyebrow-on-dark. |

### 1.3 The accent (one color, used everywhere it counts)

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#E85533` | THE coral/orange. Active states, primary metric, live links, the dot-matrix. |
| `--accent-hover` | `#D4452F` | Hover/pressed accent. |
| `--accent-tint` | `#FCE7E0` | Pale coral wash behind accent badges & icon chips. |
| `--accent-tint-2` | `#FFEEE6` | Even lighter coral wash (active nav hover, pills). |

### 1.4 Semantic / status

| Token | Hex | Use |
|---|---|---|
| `--pos-text` | `#1E8A5F` | Positive deltas, "Active" status text. |
| `--pos-bg` | `#E4F5EC` | Pale mint pill behind positive items. |
| `--neg-text` | `#D4452F` | Negative deltas. |
| `--neg-bg` | `#FBE6E3` | Pale red pill behind negative items. |

### 1.5 Lines, borders & ornament

| Token | Hex | Use |
|---|---|---|
| `--border` | `#E6E5E1` | Default border on paper (cards, inputs). |
| `--border-on-white` | `#ECECEC` | Borders/dividers inside white surfaces. |
| `--grid-line` | `#E8E7E3` | The faint structural module lines that span the page. |
| `--dot-on` | `#E85533` | "Lit" pixel in the dot-matrix (= `--accent`). |
| `--dot-off` | `#D8D8D6` | "Unlit" pixel in the dot-matrix (gray). |

```css
:root{
  --paper:#F0EFEB; --surface:#FFFFFF; --ink:#0A0A0A; --ink-button:#1F1F1F;
  --graphite:#2A2A2A; --canvas-shell:#CACACA;
  --text-secondary:#908F8D; --text-body:#6F6E6A; --text-muted:#8C8B87; --text-faint:#A8A7A3;
  --accent:#E85533; --accent-hover:#D4452F; --accent-tint:#FCE7E0; --accent-tint-2:#FFEEE6;
  --pos-text:#1E8A5F; --pos-bg:#E4F5EC; --neg-text:#D4452F; --neg-bg:#FBE6E3;
  --border:#E6E5E1; --border-on-white:#ECECEC; --grid-line:#E8E7E3;
  --dot-on:#E85533; --dot-off:#D8D8D6;
}
```

**Usage ratio (enforce this):** ~60% paper, ~25% white, ~10% ink/gray text, **≤5% accent.**
If a screen looks like it has "a lot of orange," delete most of it.

---

## 2. Typography

The reference uses a **tight, neutral grotesque** for everything — Helvetica/Neue Haas
lineage. Headlines are large with **negative tracking**; body is the same family at a
normal weight. Paths/IDs are monospace.

### 2.1 Font stacks

```css
--font-display: "Neue Haas Grotesk Display", "Söhne", "Helvetica Now Display",
                "Inter", system-ui, sans-serif;   /* headlines */
--font-sans:    "Inter", "Söhne", "Helvetica Neue", system-ui, sans-serif; /* UI + body */
--font-mono:    "Berkeley Mono", "JetBrains Mono", "SF Mono", ui-monospace, monospace; /* paths, IDs, kbd */
```
Free, faithful substitute set: **Inter Display / Inter / JetBrains Mono.**
Premium match: **Neue Haas Grotesk / Söhne / Berkeley Mono.**

### 2.2 The two-tone headline (signature pattern)

Every marketing headline is split into **ink** + **secondary gray**:

```
Bridge the gap between        ← --ink
clicks and capital            ← --text-secondary
```
- Same size/weight for both lines; only the color changes.
- Line 1 = the concrete subject. Line 2 = the value/aspiration.
- Weight 600–700, tracking **-0.02em to -0.03em**, line-height **0.98–1.04**.

```html
<h1 class="display">Powering the next generation<br>
  <span class="display--soft">of industry leaders</span>
</h1>
```
```css
.display{font:700 clamp(2.6rem,5.4vw,4.6rem)/1.0 var(--font-display);
         letter-spacing:-.025em; color:var(--ink); margin:0;}
.display--soft{color:var(--text-secondary);}
```

### 2.3 Type scale

| Role | Size (px / rem) | Weight | Tracking | Color |
|---|---|---|---|---|
| Display / Hero | 42–74 / `clamp(2.6,5.4vw,4.6rem)` | 700 | -0.025em | ink + secondary |
| Section title | 34–44 | 600 | -0.02em | ink + secondary |
| Card / feature title | 18–20 | 550–600 | -0.01em | ink |
| Lead paragraph | 17–18 | 400 | 0 | text-body |
| Body | 15–16 | 400 | 0 | text-body |
| UI label | 14 | 500 | 0 | ink / muted |
| Caption / meta | 12–13 | 400 | 0 | text-muted |
| **Eyebrow / overline** | 11–12 | 600 | **+0.12em, UPPERCASE** | ink or accent |
| Mono path / kbd | 13–14 | 400 | 0 | text-muted |

### 2.4 Eyebrow / overline (signature pattern)

Small uppercase, wide-tracked label — often with a leading bullet or icon, and the
final word in accent:

```
●  NEW ANNOUNCEMENT ON X - READ MORE
🔗 VERTEX EDGE
```
```css
.eyebrow{font:600 .72rem/1 var(--font-sans); letter-spacing:.12em;
         text-transform:uppercase; color:var(--ink); display:inline-flex; gap:.6em; align-items:center;}
.eyebrow .accent{color:var(--accent);}
.eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--ink);}
```

---

## 3. Spacing, Radius, Shadow

### 3.1 Spacing scale (4px base)
`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`
- Component padding: 16–24px. Card padding: 20–28px.
- Section vertical rhythm: **96–128px** between major sections (generous, editorial).
- Tight intra-group gaps (icon↔label): 8–10px.

### 3.2 Radius

| Token | Value | Use |
|---|---|---|
| `--r-xs` | 6px | badges/pills (small), kbd keys |
| `--r-sm` | 8px | buttons, inputs |
| `--r-md` | 10–12px | icon chips, stat cards, list rows |
| `--r-lg` | 16px | product/app container, large cards |
| `--r-pill` | 999px | status pills, metric pills |

> Pills come in **two shapes**: soft-rect (`--r-xs`, e.g. ROOT / VERIFIED / delta
> badges) and full-pill (`--r-pill`, e.g. "Active", "42.1K events"). Keep both.

### 3.3 Shadow (whisper-quiet)
Shadows are barely-there. The look relies on borders + flat fills, not elevation.

```css
--shadow-card: 0 1px 2px rgba(16,15,14,.04);
--shadow-float: 0 8px 24px -12px rgba(16,15,14,.12);  /* floating chips like "Conversion Synced" */
--shadow-pop:  0 12px 40px -16px rgba(16,15,14,.18);  /* hovered product mockups only */
```
Rule: if you can obviously *see* a shadow, it's too strong.

---

## 4. The Structural Grid (do not skip — it defines the look)

The page is a **visible modular grid**. Thin `--grid-line` rules divide the layout
into columns/cells, and content snaps into those cells. Empty cells are allowed and
intentional (logo band has blank cells on the left).

- **12-column** content grid, max-width ~**1200–1280px**, centered.
- **Gutters:** 24–32px. **Outer frame:** a 1px column rule on the far-left and
  far-right edges of the content well, plus internal rules between modules.
- Sections alternate background: **paper → white → paper**. Logo/testimonial bands
  are white with internal cell dividers.
- Treat dividers as part of the design: lead a section with a hairline, separate
  cards with hairlines, fence logos into cells.

```css
.frame{max-width:1280px;margin-inline:auto;
       border-inline:1px solid var(--grid-line);}      /* the "blueprint" edges */
.cellgrid{display:grid;grid-template-columns:repeat(12,1fr);}
.cellgrid > *{border-right:1px solid var(--grid-line);} /* visible module lines */
```

**Bento bands** (logos / testimonials): a grid where some cells hold only a centered
logo and others hold a full testimonial. Mix 1×1 logo cells with 2×2 quote cells.
Divide strictly with hairlines, never with gaps + shadows.

---

## 5. THE DOT-MATRIX (the single most recognizable motif)

A field of small **squares** (not circles) on a regular grid. Most squares are coral
(`--dot-on`), some are gray (`--dot-off`). The field **dissolves**: sparse and mostly
gray at the top edge, denser and more coral toward the bottom — like data
materializing. It is used to **frame product mockups and feature blocks**, bleeding
out from behind/under them.

**Specs**
- Cell ≈ **10px** square, gap ≈ **8px** (≈18px pitch). Squares, ~1px radius max.
- Two-state only: coral or light-gray. No opacity ramp on individual squares — the
  *density* of coral vs gray creates the gradient.
- Probability of a square being "lit" (coral) increases with vertical position +
  proximity to the anchored element. Add light random scatter so it's organic.
- Always sits *under/behind* white cards; the cards punch a clean rectangle through it.

```css
.dotmatrix{--cell:10px;--gap:8px;
  display:grid;grid-auto-rows:var(--cell);
  grid-template-columns:repeat(auto-fill,var(--cell));
  gap:var(--gap);}
.dot{width:var(--cell);height:var(--cell);border-radius:1px;background:var(--dot-off);}
.dot.is-on{background:var(--dot-on);}
```
```js
// lit-probability grows downward + with random scatter (top sparse → bottom dense)
function lit(row, rows){ return Math.random() < (0.12 + 0.6*(row/rows)); }
```
**Do:** let it run edge-to-edge behind screenshots and node graphs.
**Don't:** use circles, multiple colors, or an even 50/50 fill (kills the dissolve).

---

## 6. Components

### 6.1 Buttons (three variants — all three are part of the system)

**A. Primary (filled dark)** — one per view, the main action.
```css
.btn-primary{background:var(--ink-button);color:#fff;border:0;border-radius:var(--r-sm);
  padding:12px 20px;font:500 15px var(--font-sans);display:inline-flex;gap:.5em;align-items:center;}
.btn-primary:hover{background:#000;}
```
Label pattern: `Get Started ›` — append a small chevron `›` (not a heavy arrow).

**B. Outline (hairline)** — secondary, neutral.
```css
.btn-outline{background:transparent;color:var(--ink);border:1px solid var(--border);
  border-radius:var(--r-sm);padding:12px 20px;font:500 15px var(--font-sans);}
.btn-outline:hover{border-color:var(--ink);}
```

**C. Bracket-corner (crop-mark)** — the *signature* secondary. Instead of a full
border, four L-shaped corner ticks frame the label — blueprint/technical feel.
Used for "Book a strategy call", "Case Studies", "Technical Overview".
```css
.btn-bracket{position:relative;background:transparent;color:var(--ink);border:0;
  padding:14px 26px;font:500 15px var(--font-sans);}
.btn-bracket::before,.btn-bracket::after,
.btn-bracket > i::before,.btn-bracket > i::after{
  content:"";position:absolute;width:10px;height:10px;border:1.5px solid var(--ink);}
.btn-bracket::before{top:0;left:0;border-right:0;border-bottom:0;}
.btn-bracket::after{top:0;right:0;border-left:0;border-bottom:0;}
.btn-bracket > i::before{bottom:0;left:0;border-right:0;border-top:0;}
.btn-bracket > i::after{bottom:0;right:0;border-left:0;border-top:0;}
/* markup: <button class="btn-bracket">Case Studies<i></i></button> */
```

**D. Accent (filled coral)** — in-app primary actions only (e.g. "+ Create Link").
Reserve coral fills for the product UI, not the marketing hero.
```css
.btn-accent{background:var(--accent);color:#fff;border:0;border-radius:var(--r-sm);
  padding:10px 16px;font:500 14px var(--font-sans);}
.btn-accent:hover{background:var(--accent-hover);}
```

### 6.2 Badges & Pills

| Variant | Style |
|---|---|
| Accent tag (`ROOT`, `VERIFIED`) | `--accent` text on `--accent-tint`, soft-rect `--r-xs`, 11px uppercase +0.06em |
| Positive delta (`+12.5%`) | `--pos-text` on `--pos-bg`, soft-rect, 12px |
| Negative delta (`-2.4%`) | `--neg-text` on `--neg-bg`, soft-rect, 12px |
| Status (`Active`) | `--pos-text` + check icon on `--pos-bg`, **full pill** |
| Metric (`42.1K events`) | `--text-muted` + glyph on `#F5F5F4`, **full pill** |

```css
.badge{display:inline-flex;align-items:center;gap:.4em;
  padding:3px 9px;border-radius:var(--r-xs);font:500 12px var(--font-sans);}
.badge--accent{color:var(--accent);background:var(--accent-tint);
  text-transform:uppercase;letter-spacing:.06em;font-size:11px;}
.badge--pos{color:var(--pos-text);background:var(--pos-bg);}
.badge--neg{color:var(--neg-text);background:var(--neg-bg);}
.pill{border-radius:var(--r-pill);padding:5px 12px;}
```

### 6.3 Cards

**Base card:** white, 1px `--border`, `--r-lg`, `--shadow-card`, 20–28px padding.

**Stat card** (KPI tile):
```
┌──────────────────────────────┐
│ [□icon]              (+12.5%) │   icon chip top-left, delta badge top-right
│                              │
│ Total Clicks                 │   label — --text-muted, 14px
│ 5,669                        │   value — --ink, 28–32px, 600
└──────────────────────────────┘
```
- Icon chip: 36–40px rounded square, `#F2F2F1` bg, ink stroke icon, `--r-md`.
- One stat may use the accent for its value/icon to mark the "primary" KPI; the rest
  stay monochrome.

**Feature card** (marketing, 3-up): icon chip (the featured one is **filled black**
with white glyph; others are light chips) → title (ink, 18–20) → 2-line body (muted)
→ accent text-link with arrow (`SDK Explorer →`). No card border needed when sitting
on a divided grid — let the module lines do the work.

**List row** (node/domain row): square brand icon chip (rounded, often black or brand
gradient) → title + inline accent tag → mono subpath with `↳` glyph → right side:
metric pill + status pill. Full-width white row separated by hairlines.

### 6.4 Inputs & search
White field, 1px `--border`, `--r-sm`, 40–44px tall, leading search glyph, muted
placeholder. Show a keyboard hint with **kbd keys** on the right:
```css
.kbd{font:500 12px var(--font-mono);color:var(--text-muted);background:#fff;
     border:1px solid var(--border);border-radius:4px;padding:1px 6px;}
/* render as: [⌘] [K] */
```

### 6.5 Navigation (top bar)
- Paper background, ~64px tall, logo left (mark + lowercase wordmark).
- Center nav: 14px medium links, muted, with caret on dropdown items
  (`Product ⌄  Solutions ⌄  Resources ⌄  Enterprise  Customers  Pricing`).
- Right: a **text** "sign-in" link + a **filled dark** "Login" button.
- Hover = link goes ink; active = ink + subtle underline. No heavy bar/pill.

### 6.6 App sidebar (for product UIs)
- White, ~240px, sectioned with uppercase wide-tracked group labels (`GENERAL`,
  `LIBRARY`) in `--text-faint`.
- Items: 14px, icon + label. **Active item = filled `--accent`**, white text, with a
  trailing `›`. Inactive = ink/muted, transparent.
- Footer: round avatar + name + role + gear icon.

### 6.7 Node / integration diagram (the "data" hero)
A small graph that visualizes flow/integration:
- **Nodes:** filled circles (8–10px, ink) as connection points; product is a large
  **black rounded square** holding the white logo mark.
- **Edges:** 1.5–2px solid ink lines, orthogonal (right-angle) routing with dot
  endpoints. Branch out to labeled integration nodes (brand icon + UPPERCASE label).
- **Floating status chip:** white pill, `--shadow-float`, holding an accent cursor
  icon in a coral-tint chip + label (`Conversion Synced`) + accent `VERIFIED` badge.
- Sits on top of the dot-matrix.

---

## 7. Iconography
- **Style:** outline, ~1.75px stroke, rounded joins, 20–24px. Lucide/Feather fit
  perfectly. Mono-ink by default.
- **Icon chips:** icons live in rounded-square chips. Two flavors: light chip
  (`#F2F2F1` bg, ink icon) and **inverted chip** (ink/black bg, white icon) for
  emphasis/featured items. Accent chips (`--accent-tint` bg, accent icon) mark live
  things.
- Inline link arrows use the light arrow `→`; button chevrons use `›`.
- Path/return glyph `↳` precedes mono subpaths.

---

## 8. Motion
Subtle and mechanical — like instruments settling, not bouncing.
- Durations **120–220ms**, easing `cubic-bezier(.2,.6,.2,1)`.
- Hover: color/border shifts only; ≤2px translate on cards; no scale on text.
- Dot-matrix: optional slow, low-amplitude "shimmer" — a few squares toggle coral↔gray
  on a 2–4s random interval. Keep it nearly subliminal.
- Node graph: edges can draw-in once on scroll (stroke-dashoffset), 600ms, once only.
- Respect `prefers-reduced-motion`: disable shimmer and draw-in.

---

## 9. Content & voice
- Headlines: short, declarative, two-tone (concrete + aspirational).
- Body: plain, confident, technical but not jargon-soup. Short sentences.
- Microcopy leans developer-native ("Read Spec", "SDK Explorer", "Initialize for
  free", "Technical Overview"). Numbers are real and specific (`$662.50`, `42.1K events`).
- Eyebrows announce context in CAPS; the clickable word turns accent.

---

## 10. Accessibility
- Body text uses `--text-body` (#6F6E6A) on paper/white — passes AA at ≥16px.
  For text < 16px, darken to `--ink` or ensure ≥4.5:1.
- Never encode meaning in the accent alone: pair coral "active/live" with text or an
  icon (it's used for both UI-active and brand — disambiguate with labels).
- Bracket-corner buttons must keep a visible focus ring (`outline:2px solid var(--accent); outline-offset:3px`).
- Status pills always include the word ("Active"), not just the color/dot.
- Maintain ≥44px touch targets for nav and buttons.

---

## 11. Quick-start recipe (apply to ANY content)

1. Background `--paper`. Center a `--frame` (max 1280, blueprint side-rules).
2. Top nav: mark + wordmark, muted center links with carets, text-link + dark button.
3. Hero: small caps **eyebrow** (accent last word) → **two-tone display** headline →
   muted lead paragraph → **primary (dark)** + **bracket-corner** buttons.
4. Hero visual = your real product/data inside a `--r-lg` white container, framed by
   the **dot-matrix** bleeding underneath.
5. White **logo band** with bordered cells (leave some blank).
6. Alternate paper/white sections at 96–128px rhythm; lead each with a hairline.
7. Feature row: 3 cells on visible grid lines; icon chip (one filled black) → title →
   2-line body → accent arrow-link.
8. Social proof: **bento** of logo cells + testimonial cells, hairline-divided, key
   phrases bolded, avatar + name + role.
9. Keep the whole thing monochrome; spend the coral only on: active state, the single
   primary metric, live/verified data, and the one link you want clicked.

---

## 12. Anti-patterns (these break the aesthetic)
- ❌ Rounded **circle** dots instead of square pixels in the matrix.
- ❌ More than one accent color, or coral used decoratively/large-area.
- ❌ Drop shadows you can actually see; glassy gradients; glows.
- ❌ Hiding the grid — gaps-only layouts with no hairlines feel generic.
- ❌ Tight, timid headlines. Go big, set tracking negative, commit to two-tone.
- ❌ Stock photography or illustration. The data *is* the imagery.
- ❌ Pure black `#000` everywhere — use `--ink`/`--ink-button` for warmth.
- ❌ Mixing many type families. One grotesque + one mono. That's it.

---

### Token cheat-sheet
```
paper #F0EFEB · white #FFFFFF · ink #0A0A0A · button #1F1F1F
secondary #908F8D · body #6F6E6A · muted #8C8B87 · faint #A8A7A3
ACCENT #E85533 · hover #D4452F · tint #FCE7E0
pos #1E8A5F/#E4F5EC · neg #D4452F/#FBE6E3
border #E6E5E1 · grid-line #E8E7E3 · dot-off #D8D8D6
radius 6/8/12/16/pill · shadow: whisper · rhythm 96–128px · accent ≤5%
```