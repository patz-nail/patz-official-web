# Brief 04 — FAQ + Final CTA + Footer

Read [`_shared.md`](_shared.md) first.

## Files to create
- `components/Faq.tsx` — needs `"use client"` for accordion toggling
- `components/FinalCta.tsx`
- `components/Footer.tsx`

## Figma node IDs
- FAQ section: **1481:3552** (1440 × 1349)
- Final CTA + footer parent: **1502:3627** (1440 × 1117)
  - Final CTA copy block: **1502:3652**
  - Footer content: nodes 1502:3661 (logo) through 1502:3677 (bottom links)

Call `get_design_context` on each parent to see layout.

---

## 1. FAQ section (`components/Faq.tsx`)

`"use client"` — accordion state.

### Shell
- `<section id="support">` `max-w-[1440px] mx-auto py-[120px] relative overflow-hidden`
- Soft pink-blush ellipses behind the headline area (decorative; use absolute inline SVGs with `aria-hidden`, blurred blobs in `fill="#f1e9e9"` opacity ~0.6)

### Header block (centered, max-w-[800px])
- Eyebrow "FAQ" `text-[64px] font-bold text-brand-pink text-center`
- Headline "자주 묻는 질문" `text-[48px] font-bold text-brand-ink text-center mt-6`
- Sub: "파츠에 대해 가장 많이 궁금해하시는 내용을 모았어요." `text-[20px] text-iron-600 text-center mt-4`

### Accordion (centered, max-w-[800px] mx-auto mt-[120px])
6 items, each a button row (`border-b border-iron-200`, `py-8 px-8`,
`text-[24px] font-semibold text-brand-ink`, with a `+` icon (24×24, brand-ink) on
the right that rotates to × when open. Use `aria-expanded` and `aria-controls`.

Items:
1. **Q**: "파츠는 어떤 앱인가요?"
   **A**: "파츠는 네일 디자인 큐레이션과 주변 네일샵 검색을 한 번에 제공하는 iOS 앱이에요. 당신의 취향을 분석해 매주 새로운 추천을 보여드려요."
2. **Q**: "네일 취향 분석은 어떻게 하나요?"
   **A**: "온보딩에서 좋아하는 디자인을 최대 5개 선택해주시면, 파츠가 당신의 취향을 감별해 맞춤 추천을 만들어드려요. 사용할수록 추천이 더 정확해져요."
3. **Q**: "어느 지역에서 사용할 수 있나요?"
   **A**: "현재 서울 전역(관악·동작·금천·서초·용산·강남·마포 등)에서 사용 가능해요. 점진적으로 서비스 지역을 넓혀가고 있어요."
4. **Q**: "내 주변 네일샵 정보도 볼 수 있나요?"
   **A**: "네! 위치 권한을 허용하시면 집 앞 5분 거리의 네일샵까지 지도로 한눈에 보여드려요. 디자인, 리뷰, 영업 정보까지 확인할 수 있어요."
5. **Q**: "파츠는 무료인가요?"
   **A**: "네, 파츠의 핵심 기능은 모두 무료로 사용하실 수 있어요."
6. **Q**: "어떤 네일 스타일을 찾을 수 있나요?"
   **A**: "젤네일, 프렌치, 마블, 오로라 등 다양한 스타일을 세부 필터로 찾을 수 있어요. 시술 종류·모양·지역까지 원하는 조건으로 골라보세요."

Answer body: when open, render `<p className="text-[18px] text-iron-600
leading-[1.7] px-8 pb-8">{answer}</p>`. Animate height open/close — simplest:
conditionally render with a `motion-safe:transition-all` or just an unanimated
collapse is fine for v1.

Manage state with `useState<number | null>` for the open index. Only one open at
a time.

---

## 2. FinalCta section (`components/FinalCta.tsx`)

### Shell
- `<section>` (no id needed, or `id="cta"`)
- `max-w-[1440px] mx-auto pt-[125px] pb-[160px] relative overflow-hidden`
- Decorative ellipse blobs in the background — same pattern as hero: inline SVGs
  with `aria-hidden`, soft blush blobs.

### Copy (centered)
- H2: "취향에 꼭 맞는 네일, 지금 파츠에서 시작하세요"
  `text-[64px] font-bold leading-[1.2] text-brand-ink text-center max-w-[812px] mx-auto`
  Highlight "파츠에서" in `text-brand-pink`.
- Sub: "오늘 바로 나만의 네일 큐레이션을 만나보세요."
  `text-[20px] text-iron-600 text-center mt-8`

### CTA button (centered)
Same component as the hero CTA — `bg-brand-ink text-white rounded-full px-8
py-5 inline-flex items-center gap-4`, Apple logo + "파츠 다운로드". Margin-top
`mt-[64px]`.

(Use the same Apple SVG path provided in `briefs/01-nav-hero.md` — copy it.)

---

## 3. Footer (`components/Footer.tsx`)

### Shell
- `<footer>` `max-w-[1440px] mx-auto border-t border-iron-200 px-[120px]
  pt-[80px] pb-[40px]`

### Top row (flex justify-between)
Left column:
- Logo: text "patz" `text-brand-pink text-[40px] font-black`
- Tagline below: "네일 취향 검색은 파츠에게. 감별된 이미지로 꼭 맞는 취향을 찾고, 내 주변 네일샵까지 한 번에."
  `text-[14px] text-iron-500 mt-4 max-w-[420px] leading-[1.6]`
- Below tagline: "서비스 지역 · 서울 전역(관악 · 동작 · 금천 · 서초 · 용산 · 강남 · 마포 등)"
  `text-[14px] text-iron-500 mt-6`

Right column: nav list (flex row gap-[100px]) — same items as top nav:
- 서비스 → `#service`
- 지원 → `#support`
- 팀 → `#team`
- 블로그 → `#blog`
Each `text-[14px] font-semibold text-iron-700`.

### Bottom bar (flex justify-between, mt-[80px], border-t border-iron-200, pt-[24px])
Left: "© 2026 patz. All rights reserved. · 최종 업데이트 2026.06"
  `text-[14px] text-iron-500`
Right: two links, gap-[40px]: "개인정보처리방침" (`#`), "이용약관" (`#`)
  `text-[14px] text-iron-500`

---

## After you write the files
- Add `// Brief: briefs/04-faq-cta-footer.md` at the top of each file.
- FAQ must be keyboard-accessible (Tab between questions, Enter/Space to toggle).
- Return the list of files you created.
