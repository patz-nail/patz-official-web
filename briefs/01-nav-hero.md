# Brief 01 — Nav + Hero

Read [`_shared.md`](_shared.md) first.

## Files to create
- `components/Nav.tsx`
- `components/Hero.tsx`

## Figma node IDs
- Nav: **1469:3052** (width 1440 × height 64)
- Hero section + background ellipses: **1469:3162** (the hero copy block) + **1469:3152** (decorative vectors layer)
- Top-of-page parent for full-context screenshot: **1469:3051** (Desktop - 1, 1440 × 864)

Call `get_design_context` on **1469:3051** first to see nav + hero in one shot,
then call `get_design_context` on individual sub-nodes if you need typography
specifics.

## Nav contents
Fixed nav at top, 1440 wide, 64 tall, transparent background (sits over hero
ellipses). Layout: logo on the left, center menu, CTA on the right.

- **Logo (left)**: text "patz" in `brand-pink` (#e8175d). Render as inline SVG
  if it's just text — node `1469:3127` is the logo group. The exact glyph isn't
  available; render `patz` in a heavy weight, all-lowercase, in brand-pink, with
  optical kerning. ~72px wide. Add a small decorative dot or accent based on the
  screenshot — but **keep it simple if the SVG details are unclear**.
- **Menu (center)**: four links, evenly spaced (gap ~80px), each in `text-iron-700`,
  `text-[15px]`, `font-medium`:
  - 서비스 → `#service`
  - 지원 → `#support`
  - 팀 → `#team`
  - 블로그 → `#blog`
- **CTA (right)**: dark pill button, `bg-brand-ink`, white text, ~169×40, rounded-full.
  - Apple logo icon (inline SVG, 18×22, white) on the left
  - Label "파츠 다운로드" in white, font-medium, text-[14px]
  - Link `href="#"` (download not wired yet)

## Hero contents
Below nav. Full-width (1440) decorative background:
- Soft `brand-blush` (#f1e9e9) wash centered, with three pink ellipse blobs
  (one large bottom-right, two small mid-left and top-right) — render as inline
  SVG with `aria-hidden`, positioned absolutely behind the copy. Look at node
  `1469:3152` to see them.

Main copy block (centered, vertically positioned around y=265 from top of viewport):
- **H1**: "내 취향 네일 탐색, 이젠 파츠로 쉽게"
  - 1440 wide canvas; the text frame is 564px wide → center on page
  - `text-[64px] font-bold leading-[1.15] tracking-[-0.02em] text-brand-ink text-center`
  - "파츠" should be highlighted in `text-brand-pink`
- **Sub**: "감별된 이미지로 당신에게 꼭 맞는 네일 취향을 찾아드려요. 매주 새로운 큐레이션부터 집 앞 5분 거리 네일샵까지, 파츠 하나로."
  - `text-[18px] text-iron-600 text-center` — single line that wraps once

- **CTA button** (centered, ~70px tall):
  - `bg-brand-ink text-white rounded-full px-8 py-5 flex items-center gap-4`
  - Apple logo 30×37 white inline SVG
  - Label "파츠 다운로드" `text-[20px] font-semibold`

- **Scroll cue** below CTA: a centered double-down-arrow icon (inline SVG, 48×48)
  in `text-iron-400`. Add a subtle bounce: a class with `animate-bounce` is fine.

Hero `<section>` should have `id="hero"`, `min-h-[864px]`, `relative overflow-hidden`,
and `pt-[64px]` (so content clears the fixed nav).

## Apple logo SVG (use this exact path)
```tsx
<svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" aria-hidden="true">
  <path d="M14.84 11.7c0-2.45 2-3.62 2.1-3.68-1.15-1.67-2.93-1.9-3.56-1.93-1.52-.16-2.96.9-3.73.9-.78 0-1.95-.88-3.21-.85-1.65.02-3.18.96-4.02 2.44-1.72 2.98-.44 7.39 1.23 9.81.82 1.18 1.78 2.51 3.04 2.46 1.22-.05 1.69-.8 3.16-.8 1.48 0 1.9.8 3.2.77 1.32-.02 2.16-1.2 2.96-2.4.94-1.37 1.32-2.7 1.34-2.77-.03-.02-2.57-.99-2.6-3.94zM12.4 4.42c.66-.81 1.11-1.93.99-3.04-.95.04-2.1.64-2.79 1.44-.62.71-1.16 1.85-1.02 2.94 1.06.08 2.15-.54 2.82-1.34z" />
</svg>
```

## After you write the files
- Add a 1-line comment on the first line of each new file linking to the brief: `// Brief: briefs/01-nav-hero.md`
- Don't import anything you didn't add; `lint` errors must not be introduced.
- Make sure to return a list of the files you created.
