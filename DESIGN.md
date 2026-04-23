---
name: BlueUP Portal
colors:
  # ── Surface system (Dark) ───────────────────────────
  surface-dark: "#030712"
  surface-dim-dark: "#030712"
  surface-bright-dark: "#1f2937"
  surface-container-dark: "#111827"
  on-surface-dark: "#e5e7eb"
  on-surface-variant-dark: "#9ca3af"
  outline-dark: "#4b5563"
  
  # ── Surface system (Light) ──────────────────────────
  surface-light: "#f9fafb"
  surface-dim-light: "#f3f4f6"
  surface-bright-light: "#ffffff"
  surface-container-light: "#e5e7eb"
  on-surface-light: "#111827"
  on-surface-variant-light: "#4b5563"
  outline-light: "#d1d5db"
  
  # ── Brand blue palette ─────────────────────────────

  # ── Brand blue palette ─────────────────────────────
  primary: "#3b82f6"
  on-primary: "#ffffff"
  primary-container: "#2563eb"
  on-primary-container: "#ffffff"
  inverse-primary: "#1d4ed8"
  brand-50: "#eff6ff"
  brand-100: "#dbeafe"
  brand-200: "#bfdbfe"
  brand-300: "#93c5fd"
  brand-400: "#60a5fa"
  brand-500: "#3b82f6"
  brand-600: "#2563eb"
  brand-700: "#1d4ed8"
  brand-800: "#1e40af"
  brand-900: "#1e3a8a"
  brand-950: "#0c1a3d"

  # ── Accent violet ──────────────────────────────────
  secondary: "#7c3aed"
  on-secondary: "#ffffff"
  secondary-container: "#6d28d9"
  on-secondary-container: "#ede9fe"

  # ── Semantic accents ───────────────────────────────
  accent-purple: "#a855f7"
  accent-amber: "#f59e0b"
  accent-emerald: "#34d399"
  accent-sky: "#38bdf8"
  accent-rose: "#fb7185"
  accent-violet: "#8b5cf6"

  # ── Functional status ──────────────────────────────
  success: "#34d399"
  on-success: "#022c22"
  success-container: "rgba(52, 211, 153, 0.1)"
  error: "#f87171"
  on-error: "#450a0a"
  error-container: "rgba(248, 113, 113, 0.1)"

  # ── Background & overlays ──────────────────────────
  background-dark: "#030712"
  on-background-dark: "#e5e7eb"
  background-light: "#f9fafb"
  on-background-light: "#111827"
  scrim: "rgba(3, 7, 18, 0.75)"
  glass-surface-dark: "rgba(255, 255, 255, 0.03)"
  glass-surface-hover-dark: "rgba(255, 255, 255, 0.06)"
  glass-border-dark: "rgba(255, 255, 255, 0.06)"
  glass-surface-light: "rgba(255, 255, 255, 0.6)"
  glass-surface-hover-light: "rgba(255, 255, 255, 0.8)"
  glass-border-light: "rgba(0, 0, 0, 0.05)"
  glass-border-hover: "rgba(37, 99, 235, 0.3)"

  # ── Gradient endpoints ─────────────────────────────
  gradient-start: "#2563eb"
  gradient-end: "#7c3aed"
  gradient-text-mid: "#7c3aed"

typography:
  display:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: "900"
    lineHeight: 0.9
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 1.1
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 1.2
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 1.3
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 1.4
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 1.5
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "300"
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.6
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 1.4
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 1.3
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 1.2
    letterSpacing: 0.1em
    textTransform: uppercase

rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 1rem
  lg: 1.25rem
  xl: 1.5rem
  full: 9999px

spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  section-y: 96px
  section-y-lg: 128px
  container-max: 1280px
  container-padding: 16px
  container-padding-sm: 24px
  container-padding-lg: 32px

elevation:
  glass-blur: 20px
  nav-blur: 16px
  decorative-blur: 48px
  shadow-card-hover: 0 25px 60px -12px rgba(37, 99, 235, 0.15)
  shadow-button-hover: 0 10px 25px -5px rgba(37, 99, 235, 0.25)
  shadow-video: 0 25px 50px -12px rgba(124, 58, 237, 0.05)
  shadow-contact-card: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

motion:
  duration-fast: 200ms
  duration-normal: 300ms
  duration-slow: 400ms
  duration-reveal: 800ms
  easing-default: ease
  easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)
  easing-bounce: cubic-bezier(0.4, 0, 0.6, 1)
  reveal-translate-y: 30px
  hover-translate-y: -6px
  button-hover-translate-y: -2px
  gradient-cycle: 6s
  float-cycle: 6s
  pulse-cycle: 4s
  reveal-stagger-step: 150ms

components:
  # ── Navigation ─────────────────────────────────────
  navbar:
    backgroundColor: "rgba(3, 7, 18, 0.75)"
    backdropFilter: blur(16px)
    borderBottom: 1px solid rgba(255, 255, 255, 0.05)
    height: 64px
    position: fixed
    zIndex: 50
  nav-link:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    fontWeight: "400"
  nav-link-hover:
    textColor: "{colors.on-primary}"
  nav-link-accent:
    textColor: "{colors.brand-400}"
    fontWeight: "500"

  # ── Glass cards ────────────────────────────────────
  glass-card:
    backgroundColor: "{colors.glass-surface}"
    backdropFilter: blur(20px)
    border: 1px solid {colors.glass-border}
    rounded: "{rounded.xl}"
    padding: 32px
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
  glass-card-hover:
    backgroundColor: "{colors.glass-surface-hover}"
    borderColor: "{colors.glass-border-hover}"
    transform: translateY(-6px)
    boxShadow: "{elevation.shadow-card-hover}"

  # ── Buttons ────────────────────────────────────────
  button-primary:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.lg}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    boxShadow: "{elevation.shadow-button-hover}"
    transform: translateY(-2px)
  button-ghost:
    backgroundColor: rgba(255, 255, 255, 0.05)
    textColor: "#d1d5db"
    typography: "{typography.label-lg}"
    rounded: "{rounded.lg}"
    border: 1px solid rgba(255, 255, 255, 0.1)
    padding: 14px 28px
  button-ghost-hover:
    backgroundColor: rgba(255, 255, 255, 0.1)
    borderColor: rgba(255, 255, 255, 0.2)
    textColor: "{colors.on-primary}"
    transform: translateY(-2px)

  # ── Tech badge ─────────────────────────────────────
  tech-badge:
    backgroundColor: "rgba(37, 99, 235, 0.1)"
    textColor: "{colors.brand-300}"
    border: 1px solid rgba(37, 99, 235, 0.2)
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  tech-badge-hover:
    backgroundColor: "rgba(37, 99, 235, 0.2)"
    borderColor: "rgba(37, 99, 235, 0.4)"

  # ── Status badge ───────────────────────────────────
  status-badge-active:
    backgroundColor: "rgba(52, 211, 153, 0.1)"
    textColor: "#34d399"
    border: 1px solid rgba(52, 211, 153, 0.2)
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  # ── Section separator ──────────────────────────────
  section-separator:
    height: 1px
    background: linear-gradient(to right, transparent, rgba(37, 99, 235, 0.2), transparent)

  # ── Eyebrow label ──────────────────────────────────
  section-eyebrow:
    textColor: "{colors.brand-400}"
    typography: "{typography.label-sm}"
    letterSpacing: 0.1em
    textTransform: uppercase
    fontWeight: "600"

  # ── Architecture step ──────────────────────────────
  arch-step:
    paddingLeft: 32px
    borderLeft: 2px solid
    borderImage: linear-gradient(to bottom, #2563eb, #7c3aed) 1

  # ── Icon container ─────────────────────────────────
  icon-container-brand:
    backgroundColor: "rgba(37, 99, 235, 0.1)"
    border: 1px solid rgba(37, 99, 235, 0.2)
    rounded: "{rounded.lg}"
    size: 48px
  icon-container-purple:
    backgroundColor: "rgba(124, 58, 237, 0.1)"
    border: 1px solid rgba(124, 58, 237, 0.2)
    rounded: "{rounded.lg}"
    size: 48px
  icon-container-amber:
    backgroundColor: "rgba(245, 158, 11, 0.1)"
    border: 1px solid rgba(245, 158, 11, 0.2)
    rounded: "{rounded.lg}"
    size: 48px

  # ── Language switcher ──────────────────────────────
  lang-switcher:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    border: 1px solid rgba(255, 255, 255, 0.08)
    rounded: 10px
    padding: 2.8px
  lang-button:
    textColor: "rgba(156, 163, 175, 0.7)"
    typography: "{typography.label-md}"
    fontWeight: "600"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  lang-button-active:
    backgroundColor: "rgba(37, 99, 235, 0.2)"
    textColor: "{colors.brand-300}"
    boxShadow: 0 0 12px rgba(37, 99, 235, 0.15)

  # ── Gradient text ──────────────────────────────────
  gradient-text:
    background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 50%, #2563eb 100%)
    backgroundSize: 200% 200%
    backgroundClip: text
    textFillColor: transparent
    animation: gradientX 6s ease infinite

  # ── Glow border ────────────────────────────────────
  glow-border:
    pseudo: "::before"
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(124, 58, 237, 0.4), rgba(37, 99, 235, 0.1))
    opacity-default: 0
    opacity-hover: 1
    transition: opacity 0.4s ease
---

## Brand & Style

BlueUP is a cybersecurity-forward corporate portal that communicates **trust, technical depth, and modern sophistication**. The visual language draws from the intersection of enterprise authority and bleeding-edge technology.

The design system supports both **Dark Glassmorphism** and **Light Glassmorphism** aesthetics. In dark mode, it uses an inky, near-black canvas punctuated by controlled bursts of blue and violet light. In light mode, it shifts to an airy, pristine light-gray canvas where depth is created through subtle shadows and layered frosted glass. In both modes, every surface is semi-transparent, creating a layered feel — as though the user is peering through hardened glass panels into the infrastructure beneath.

The brand mark is a gradient-filled rounded rectangle (blue → violet, 135°) bearing a bold white "B" in Inter 700. This diagonal gradient — `#2563eb` to `#7c3aed` — is the DNA of the entire visual identity and recurs in text highlights, decorative orbs, border glows, and architectural diagrams.

## Colors

The palette is built around a **single chromatic axis** — electric blue to deep violet — applied against either a near-black canvas or a pristine light-gray canvas.

- **Canvas:** In dark mode, the body sits at `#030712` (gray-950). In light mode, it uses `#f9fafb` (gray-50).
- **Surfaces:** Dark mode glass components use white at 3–6% opacity (`rgba(255,255,255, 0.03)`). Light mode glass uses white at 60–80% opacity (`rgba(255,255,255, 0.6)`) to ensure contrast against the light background.
- **Brand gradient:** The hero text and logo use a 135° gradient from Blue-600 (`#2563eb`) through Violet (`#7c3aed`) back to Blue-600.
- **Accent differentiation:** Each product vertical has a signature hue — Blue-600 for BC, Purple-600 for IDColab, and Amber-500 for Nexus.
- **Text hierarchy:** Primary text is white in dark mode and gray-900 in light mode. Muted text uses gray-400 (dark) or gray-500 (light).

## Typography

The system uses **Inter** exclusively — loaded from Google Fonts at weights 300–900 with OpenType features `cv02`, `cv03`, `cv04`, `cv11` enabled for disambiguated letterforms.

- **Display (hero):** 96px / 900 weight / 0.9 line-height / -0.025em tracking. The extreme weight and tight leading create a monumental, impactful headline that anchors the viewport.
- **Section headlines:** 36–48px / 700 weight. Always white. Often paired with a colored eyebrow label above (brand-400, uppercase, widest tracking).
- **Body:** 16–18px / 300–400 weight / 1.5–1.6 line-height. Subtitles use 300 (light) for an airy, editorial feel; paragraph body uses 400 (regular). The generous line-height compensates for the dark background, which can make dense text feel oppressive.
- **Labels & badges:** 11–12px / 500–600 weight / uppercase / wide letter-spacing (0.05–0.1em). These small elements rely on tracking and weight rather than size to maintain legibility at scale.
- **Font feature settings:** The four OpenType variants ensure that characters like `1`, `l`, `I` and `a`, `g` are visually distinct — critical for a product that displays technical identifiers and code references.

## Layout & Spacing

The layout is a **single-column, vertically scrolling** long-page with a fixed navigation bar. Content is constrained to a `max-width: 1280px` centered container with responsive horizontal padding (16px mobile → 24px tablet → 32px desktop).

- **Rhythm:** An 8px base unit, with the most common spacing values being 16px (gaps), 24px (section internal padding), 32px (card padding), and 96–128px (vertical section separation).
- **Grid:** Product cards and tech-stack categories use CSS grid (3-column on desktop, stacking to single-column on mobile) with 24–32px gaps.
- **Section anatomy:** Each section follows a consistent pattern — colored eyebrow label → large white headline → gray subtitle → content grid — with a horizontal gradient separator (`transparent → blue-200@20% → transparent`) between sections.
- **Negative space:** Large vertical padding (96px+) and the dark background create a sense of "floating islands" of content, reinforcing the glass card metaphor.

## Elevation & Depth

Depth is constructed through **blur, opacity, and light simulation** rather than traditional shadow-based elevation.

- **Level 0 (Background):** `#030712` canvas, overlaid with a subtle 60×60px grid pattern at 2% white opacity and radial gradient "orbs" (blue and violet at 6–12% opacity, heavily blurred) that create ambient luminosity.
- **Level 1 (Navbar):** `rgba(3,7,18, 0.75)` background with 16px backdrop blur and a 1px bottom border at 5% white. The navbar is `position: fixed; z-index: 50`.
- **Level 2 (Glass cards):** `rgba(255,255,255, 0.03)` background, 20px backdrop blur, 1px border at 6% white. On hover, background rises to 6%, the border shifts to a blue tint, the card lifts 6px, and a diffused blue shadow appears (`0 25px 60px -12px rgba(37,99,235, 0.15)`).
- **Level 3 (Glow border):** An absolutely positioned `::before` pseudo-element with a blue-violet gradient appears at full opacity on hover, creating a luminous "glow" around the card perimeter — simulating light refraction at the glass edge.
- **Decorative orbs:** Large (288–384px) circles of brand-600 and purple-600 at 10% opacity with `blur-3xl` (48px) create the ambient light pools in the hero section. These pulse on a 4-second `cubic-bezier(0.4, 0, 0.6, 1)` cycle.

## Shapes

The shape language is **systematically rounded** to convey approachability within a technical context.

- **Cards:** `1.5rem` (24px) radius — large enough to feel soft and modern without becoming playful.
- **Buttons:** `1.25rem` (20px) radius — slightly smaller than cards, maintaining visual distinction between containers and actions.
- **Icon containers:** `0.75rem` (12px) radius within a 48×48px frame. The reduced radius creates a "squircle" feel distinct from the larger card radius.
- **Badges:** `9999px` (full pill) for tech badges and status indicators, creating compact, self-contained labels.
- **Contact CTA card:** `1.5rem` (24px) radius, matching the product cards but at a larger scale (full-width).
- **Logo mark:** `6px` radius on the 32×32px SVG rectangle, creating a softer icon that still reads as a structured shape.

### Glass Cards

The primary content container. Background at 3% white with 20px backdrop blur creates a frosted-glass effect that reveals the ambient gradient orbs beneath. The 6% white border provides just enough edge definition to separate the card from the void without creating a "boxy" feel. On hover, the card lifts 6px and a glow-border pseudo-element fades in (0→1 opacity over 400ms), creating a dramatic but not jarring interaction.

### Buttons & CTAs

Two tiers: **primary** (solid Blue-600 fill, white text) and **ghost** (5% white fill, 10% white border, gray-300 text). Both use 14px 28px padding and 20px radius. Primary buttons gain a blue shadow on hover (`0 10px 25px -5px rgba(37,99,235, 0.25)`); ghost buttons brighten their fill and border. Both lift 2px on hover for tactile feedback.

### Section Separators

1px-tall gradient lines that fade from transparent through blue-600@20% back to transparent. These act as visual breathing spaces between major content blocks and reinforce the blue chromatic thread without adding visual weight.

### Scroll Reveal Animations

Elements tagged with `.reveal` begin at `opacity: 0; translateY(30px)` and transition to their final position over 800ms with an `ease` curve when they enter the viewport (at 10% intersection, with a -50px root margin). Staggered delays of 150ms per item create a cascading "waterfall" reveal effect within card grids. Once revealed, elements remain visible and do not re-animate on scroll-up.

### Navigation

The navbar is a frosted glass bar (`rgba(3,7,18, 0.75)` + 16px blur) pinned to the top with `z-index: 50`. It houses the logo, section links (gray-400 → white on hover), a colored documentation link (brand-400), and a language switcher. The mobile menu expands via a `max-height` transition (0 → 400px over 400ms) with the same smooth easing curve used throughout.

### Hero Section

The hero occupies the full viewport height (`min-h-screen`) and features the animated gradient text, a pulsing "Active Platforms" eyebrow badge (with a 1.5px animated dot), a stats row, and two CTA buttons. Decorative blur orbs float behind the content. A scroll-indicator chevron floats at the bottom with a continuous 6-second vertical oscillation animation.
