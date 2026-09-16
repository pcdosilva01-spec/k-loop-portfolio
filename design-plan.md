# K/LOOP — Frontend Design Plan

## COLOR TOKENS (4–6 named hex values)

- **bg**: `#120A20` — deep dark violet; brand foundation; used as primary background
- **primary**: `#5B2EFF` — vibrant purple; identity element; used as accent color, not background wash
- **accent**: `#FF7A18` — orange; identity element; used sparingly as highlight on interactive elements or dividers
- **on-bg**: `#FFF6FF` — off-white; body text on dark background; primary text color
- **muted**: `#6B3FFF` — desaturated purple; secondary text, borders, subtle dividers; derived from primary at lower saturation

**Usage philosophy**: Purple and orange function as signature elements, not decoration. Each color appears in deliberate moments — a purple accent on a hover state, an orange divider separating sections — never as generic fills or gradients covering large areas. The dark bg #120A20 dominates; color is injected through typography, accents, and selective elements.

---

## TYPEFACE

- **Display**: Syne — geometric, modern, distinctive; used for headlines, hero title, section labels
- **Body**: Manrope — clean, readable, wide; used for body text, meta info, smaller labels
- **Type scale** (following *The Elements of Typographic Style* guidance, ratio ~1.6):

| Size | Family | Weight | Line-height |
|------|--------|--------|-------------|
| 64px | Syne | 800 | 72px |
| 48px | Syne | 700 | 56px |
| 32px | Syne | 600 | 40px |
| 24px | Manrope | 400 | 32px |
| 16px | Manrope | 400 | 24px |
| 13px | Manrope | 500 | 18px |

**Treatment when type is visual**: Syne used as active visual element — oversized, tracking adjusted, weight contrasted against Manrope body. Not a neutral delivery vehicle; the form carries personality.

**Line length**: Default < 80 characters for sans-serif body text. Serif-like density compensated with slightly higher line-height (Manrope at 24px/16px = 1.5, but can open to 1.65 in wide measures).

**Avoided defaults**: No single-word italic/bold accent in headlines. No all-caps labels. No unnecessary labels above content.

---

## LAYOUT CONCEPT

**Prose descriptions + ASCII wireframes used to ideate:**

### Overall philosophy
- Mobile-first, asymmetric grids that break column expectations at larger screen sizes
- Content aligned to a baseline grid vertically, but horizontally ragged/asymmetric where it serves hierarchy
- Large typographic blocks serve as visual anchors; body text flows around them, not the other way around
- K symbol motifs integrated as structural elements, not logos-centralized
- One orchestrated page-load motion moment; all other motion is user-triggered only

### Hero (mobile-first)
```
Mobile:                                       Desktop:
[K FLUID FORM]                                [LAYERS]
   ↘                                           ↘
    "DO CONCEITO AO CLICK"                      [OVERLAPPING SHAPES]
                                           ↘
                                            CTAs stacked, not side-by-side
```

- Hero does NOT center logo + text in middle of screen
- K fluid form appears as a continuous shape, partially outside the grid, with curves extending into the viewport — it is the hero's primary visual anchor, not the logo alone
- "Do conceito ao clique" as giant typographic element — the headline itself is the characteristic thing, with no supporting stats underneath unless genuinely justified
- Two CTAs: "Ver projetos" and "Começar um projeto", stacked vertically on mobile, spaced on desktop
- No glassmorphism or backdrop blur; depth through shape overlap and displacement

### Projects section — "coração do site"
- 1 highlighted project with large visual; secondary projects with varied layouts — NO two projects share the same layout
- Each project: image + name + category + description + technologies + CTA — but arrangement differs per project
- NO grid of 8 identical cards; instead: deliberate layout variations that reflect each project's character

```
Project layout variations:
1. Wide image | text overlay | CTA bottom-right — highlighted project
2. Text-heavy | small thumbnail right | description below — secondary
3. Image full-width | caption centered | technologies as tagged chips below
4. Asymmetric split: 60% text | 40% image | connected by fluid ribbon
```

- "Projetos que saíram do conceito" as section title
- Subtitle: "Uma seleção de sites, lojas e experiências digitais desenvolvidas pela K/LOOP"
- Highlighted project gets prominent visual treatment; secondary projects are compact but distinct in layout

### Services section — editorial composition
- NOT a grid of identical service cards
- Editorial mix of: large service block with typographic treatment, smaller service items, numbers as visual treatment, microinteraction on hover (not persistent)
- Services displayed as: "Lojas Nuvemshop", "Landing Pages", "Sites Institucionais", etc. — but as editorial elements, not cards

```
Possible editorial layout:
[Large typography: "LOJAS NUVEMSHOP"] [accent: underline in orange]
[Smaller text: service description]
[Divider: thin orange ribbon — not a border around the service]
[Next service: "LANDING PAGES"] — different treatment, no visual repetition
```

- Each service has a different visual treatment; some use large numbers, some use symbolic icons, some use typographic treatment only
- No persistent shadow on any service element

### Process section — LOOP-inspired timeline
- NOT a corporate flow chart (01 → 02 → 03 → 04 → 05)
- Movement, continuity, evolution, cycle — related to LOOP concept
- Serpentine timeline weaves left-to-right with fluid curves connecting stages; numbers as subtle badges, not "01/02/03" markers
- The curve itself forms a loop at the end, reinforcing the LOOP concept visually

```
Non-flow-chart timeline:
[DESVCOBRIMENTO] ← fluid curve → [DESIGN]
       ↓                            ↗
[PROCESSO] ← ribbon curve → [DESENVOLVIMENTO]
```

- Stages: Descoberta, Estratégia, Design, Desenvolvimento, Entrega
- Visual connections are fluid curves, not rigid lines
- A small loop/icon at the end of the timeline reinforces the LOOP concept without making it a literal flow chart
- Numbers present as subtle badges integrated into the curve, not as separate numbered markers

### About section — real person behind the work
- "Quem está por trás da K/LOOP?"
- Text: "Sou [SEU NOME], web designer e desenvolvedor de sites."
- Space for future photo — but designed as visual moment, not empty space
- Portrait integrated with typography and background form, not just pasted into a card

### Contact section — visually strong
- "Tem uma ideia?" as title
- Body: "Vamos transformar ela em algo que as pessoas possam ver, usar e lembrar."
- CTAs: "Começar um projeto" and "Falar comigo"
- WhatsApp FAB integrated visually, not as invasive element
- Instagram link + email link as part of composition

---

## PRINCIPLES (what makes this page unique)

1. **K + fluid forms as structural device** — the logo's fluid forms motif carries through as actual compositional elements (curves that divide sections, ribbons that connect, shapes that displace), not repeated as decorative pattern. Each curve/ribbon has a functional role in organizing content.
2. **No repeated section architecture** — each section (hero, projects, services, process, about, contact) has a distinctly different visual structure; the eye never experiences deja-vue. Hero is typographic/formal, projects are image-varied, services are editorial, process is curvilinear timeline, about is portrait-integrated, contact is composition-driven.
3. **Purple & orange as identity signals, never decoration** — these colors appear in exactly 3–4 deliberate moments per page: a purple hover state, an orange divider/accent, a purple badge in the timeline. Never as background wash, gradient fill, or card accent across the whole page.
4. **Headline as hero characteristic** — the hero opens with "Do conceito ao clique" as a giant typographic element, because the core proposition (from concept to click) is the most characteristic thing about K/LOOP, not a generic avatar image or stock photo.
5. **Large typography as visual anchor** — headlines aren't small supporting elements; they dominate their section and define its character. A 64px Syne headline is the first thing seen in each section, carrying the page's personality.
6. **Broken grid at purposeful points only** — grid breaks where it serves hierarchy: K fluid form outside grid in hero, asymmetric project splits, process curves. But body text and lists remain on stable grid for readability. The broken grid is a tool, not a style.
7. **Layering through shape, not shadow** — depth suggested by overlapping shapes and displaced elements, overlap of the K fluid form with typography, project images overlapping each other. No rgba(0,0,0,.1) shadow on every card — that reads as template.
8. **One orchestrated motion moment, zero scattered effects** — one page-load sequence (K fluid form reveals, typography scales in) lands better than fade-and-slide-up on every section. All other motion is user-triggered (hover, click). Respects prefers-reduced-motion completely.
9. **K symbol integrated, not centered** — the K form is part of the visual composition, sometimes driving the layout, sometimes emerging from it. It is never a giant logo sitting in the middle of the screen waiting to be seen.