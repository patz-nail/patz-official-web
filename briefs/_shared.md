# Shared brief — PATZ landing page

PATZ (파츠) is a Korean nail-discovery iOS app. The entire site is the landing page
at `app/page.tsx`. All copy is **Korean**. Do not translate.

## Tech stack
- Next.js 16 App Router, React 19, TypeScript
- Tailwind v4 (CSS-based theme — config lives in `app/globals.css`)
- Pretendard variable font (already wired)

## Design tokens (Tailwind classes — all already registered in `app/globals.css`)

| Token | Hex | Tailwind class | Use |
|---|---|---|---|
| brand-ink | `#15173d` | `text-brand-ink` / `bg-brand-ink` | Primary text / dark backgrounds (CTAs, footer) |
| brand-pink | `#e8175d` | `text-brand-pink` / `bg-brand-pink` | Signature accent color (logo, key highlights) |
| brand-pill | `#e28ca9` | `bg-brand-pill` | Soft pink for pill-highlights behind text |
| brand-blush | `#f1e9e9` | `bg-brand-blush` | Section background (problem strip) |
| cool-50..400 | various | `bg-cool-50` etc | Cool neutrals (backgrounds) |
| iron-50..950 | various | `text-iron-500` etc | Warm neutrals (body text, dividers) |

**Use these tokens — never hard-code hex unless the brief tells you to.**

## File conventions
- Components: `components/<Name>.tsx`, default-exported function component
- Section components are server components by default; mark `"use client"` only when needed (e.g. FAQ accordion, scroll behavior)
- All sections accept no props (data is inline)
- Wrap each section in a `<section id="...">` so nav anchors work
- Canvas reference width is **1440px**. Center content with `max-w-[1440px] mx-auto`. Build pixel-faithful at 1440. Do **not** add mobile responsive classes yet — the design agent will spec the mobile redesign in a later phase and a second dev pass will apply it.

## Anchor IDs (used by Nav)
- `#service` → Features section
- `#support` → FAQ section
- `#team` → (no anchor on landing; link can go to `#` for now)
- `#blog` → (link to `#` for now)

## Figma access
You have `mcp__figma-desktop__get_design_context` and `get_screenshot`.
Call them with the **node ID** in the brief to fetch the latest reference for
your assigned section. Always look at the screenshot before writing markup.

## Required Korean glyph rendering
The font stack already prioritizes Pretendard and falls back to Apple SD Gothic
Neo / Noto Sans KR. Do not import other fonts.

## Do
- Match Figma typography sizes (px) using arbitrary Tailwind values, e.g. `text-[64px]`
- Use semantic HTML: `<header>`, `<section>`, `<h1>`–`<h3>`, `<nav>`, `<footer>`
- Decorative SVG ellipses/vectors → inline SVG with `aria-hidden="true"` (or `bg-` gradients if simple)

## Don't
- Don't use external image services (no Unsplash, no placehold.it)
- Don't add npm deps. Stick to what's installed.
- Don't translate copy to English.
- Don't worry about mobile yet.
