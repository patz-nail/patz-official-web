# Brief 02 — Problem + PainPoints

Read [`_shared.md`](_shared.md) first.

## Files to create
- `components/Problem.tsx`
- `components/PainPoints.tsx`

## Figma node IDs
- Problem section parent: **1469:3153** (1440 × 783) — sits between hero and pain points
- PainPoints section parent: **1481:3181** (1440 × 2488)

Call `get_design_context` on each parent node and inspect the screenshot before
implementing.

---

## 1. Problem section (`components/Problem.tsx`)

Concept: "look how painful the current way to book nails is" — the journey shown
as a vertical descent of pill-shaped steps that get narrower toward the bottom.

### Layout
- `<section>` with `id="problem"` (no anchor used; just for clarity)
- 1440 wide × ~783 tall, `bg-brand-blush` (#f1e9e9) top strip with a `Rectangle 5`
  shape at top: a 608px wide × 204px tall rounded rectangle, brand-blush-toned,
  containing the headline.

### Headline (inside the rounded rect at left)
- Text: "네일을 받기까지, 복잡한 절차를 거치지 않았나요?"
- `text-[36px] font-bold leading-[1.4] text-brand-ink`
- Positioned left-side, padding ~120 from left edge, 32 top, 32 right.

### Step pills (right column, 4 stacked, each 102 tall, indented progressively)
Order top → bottom, with two pills on the FIRST row (side-by-side):

Row 1: two side-by-side pills, each ~301×102, gap 8:
- "인스타그램에서 #네일 검색"
- "네이버에서 '네일' 검색"

Row 2: ~508×102, centered: "원하는 디자인 탐색 및 가격표 비교"
Row 3: ~407×102, centered: "카카오톡/네이버 예약으로 예약 양식 첨부"
Row 4: ~305×102, centered: "예약 확정 및 수정"

Each pill:
- `bg-white` border `border-iron-200` `rounded-full`
- `text-[24px] font-medium text-iron-700` centered within pill
- subtle shadow `shadow-sm`

The 4 pills should stack with `gap-[32px]` and progressively indent so they look
like a tapering funnel (the Figma shows them each shifting right by a fixed
amount). Position the pill column on the right side of the section (`pl-[710px]`
from left within the 1440 canvas, but use Tailwind grid to express it cleanly).

---

## 2. PainPoints section (`components/PainPoints.tsx`)

Concept: empathize with user frustrations. A photo of nails on the left, four
"thought-bubble" pill quotes on the right. Below them, a transition headline that
introduces PATZ as the solution, with iPhone mockups.

### Top strip
- 1440 wide pink-blush bar at top (`Rectangle 5` from Figma): `bg-brand-blush`,
  204 tall, with the headline centered:
  - "네일 정할 때마다, 느꼈던 그 고민"
  - `text-[36px] font-bold text-brand-ink`

### Two-column block (below headline)
Left column (~259 wide, starts ~74 from left):
- A rounded square placeholder image, `bg-iron-200 rounded-2xl`, 259×259. Inside
  add a subtle 💅 emoji or simply leave the gray block; this represents a nail
  photo. Add `aria-label="네일 이미지"` to the wrapper.

Right column (~500 wide, starting ~341 from left), 4 stacked pill quotes,
each ~102 tall, with brand-pill (#e28ca9) circle "underline" highlights behind
key words:
1. "내 손에 뭐가 잘 어울리는지 모르겠어..." (width ~418)
2. "마음에 드는 디자인 찾느라 한 시간째 검색 중 🥲" (width ~500)
3. "예약하고 갔는데 막상 내 스타일이 아니야" (width ~442)
4. "집 근처에 잘하는 네일샵은 어디 있지?" (width ~413)

Pills: `bg-white rounded-full border border-iron-200 text-[24px] text-iron-700
font-medium px-10 py-4 shadow-sm`, gap-[32px] between.

Place two pink-pill highlight shapes (`bg-brand-pill rounded-full`) positioned
absolutely behind specific phrases — see node `1481:3310`. One pill behind
"디자인 탐색에 소요되는 시간" (~146×35), another behind "집 근처 네일샵 탐색" (~93×35).
You can simplify this: just add a `<span className="bg-brand-pill/40 px-2 rounded">`
around the matching substring inside the two relevant pill quotes.

### Solution headline (centered, below the pain pills)
- "네일 고민하는 시간, 파츠가 줄여드릴게요" — `text-[52px] font-bold leading-[1.3]
  text-brand-ink text-center`. "파츠가" highlighted with a `bg-brand-pill/60` rounded
  underline span behind it.
- Sub: "취향 분석부터 디자인 탐색, 내 주변 샵 찾기와 커뮤니티까지. 네일에 필요한 모든 순간을 하나의 흐름으로 이어요."
  `text-[20px] text-iron-600 text-center max-w-[552px] mx-auto mt-6`

### PATZ logo lockup (decorative)
Below the solution headline (~187 tall), render large stylized "patz" wordmark
in `text-brand-pink` text-[160px] font-black tracking-tight, centered. The
Figma has bespoke SVG glyphs at node `1481:3334`; we approximate with text here.

### iPhone mockups (decorative)
Two stylized iPhone frames, side-by-side, centered below the wordmark. Each is a
rounded rectangle (`rounded-[48px] bg-brand-ink`, ~500×500 the smaller and one
larger 1000×563). You can render simple dark rounded rects as placeholders; the
images inside will come later. Position them at the bottom of the section.

---

## After you write the files
- Add `// Brief: briefs/02-problem-painpoints.md` at the top of each file.
- Use semantic HTML.
- Return the list of files you created.
