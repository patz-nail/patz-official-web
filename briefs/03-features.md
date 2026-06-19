# Brief 03 — Features (5 feature blocks)

Read [`_shared.md`](_shared.md) first.

## Files to create
- `components/Features.tsx` — the wrapping section containing 5 feature blocks

You can implement each block as a small local component within `Features.tsx`,
OR factor a `FeatureBlock` subcomponent — your call.

## Figma node IDs
- Parent: **1503:8938** (1200 × 4635)
- Block 1 (onboarding): **1481:3394**
- Block 2 (home): **1481:3395**
- Block 3 (search): **1481:3424**
- Block 4 (location): **1481:3473**
- Block 5 (community): **1481:3502**

Call `get_design_context` on **1503:8938** first to see the full block, then on
individual blocks if needed.

## Section shell
- `<section id="service">` with `bg-white max-w-[1440px] mx-auto py-[120px]`
- Inner container `max-w-[1200px] mx-auto`

## Each feature block — shared layout
Each block is ~815 tall, alternating left/right between phone mockup and copy:
- Block 1 (onboarding): phone LEFT, copy RIGHT
- Block 2 (home): copy LEFT, phone RIGHT
- Block 3 (search): phone LEFT, copy RIGHT
- Block 4 (location): copy LEFT, phone RIGHT
- Block 5 (community): phone LEFT, copy RIGHT

### Phone mockup (decorative)
- ~400×815, rounded `rounded-[48px] bg-iron-900` border `border-iron-800` shadow-lg
- Inner content: a small `rounded-full bg-iron-900` "dynamic island" 116×33 at top-center
- The body can be blank gray (`bg-iron-300`) or use an emoji placeholder for now

### Copy column
Vertical layout, gap-[48px]:

1. **Step number + label** row:
   - Big number `text-[64px] font-bold text-brand-pink` (e.g. "01")
   - Below it: a horizontal divider `bg-iron-300 w-[80px] h-[1px]` then a label
     in `text-[24px] font-medium text-iron-500 uppercase tracking-wide`
2. **Headline** `text-[48px] font-bold leading-[1.4] text-brand-ink`
3. **Body copy** `text-[18px] text-iron-600 leading-[1.6] max-w-[500px]`
4. **Feature bullets** (two rows, each: checkmark vector + text):
   - Checkmark: `text-brand-pink` ~56×44 SVG (or simple `✓` styled large)
   - Bullet text: `text-[20px] text-iron-700 font-medium`

## Block contents (exact Korean copy)

### Block 1 — Onboarding
- Number: **01**, label: `onboarding`
- Headline: "네일 취향, 5초면 끝나요"
- Body: "좋아하는 디자인을 최대 5개만 골라주세요. 파츠가 당신의 취향을 감별해 홈 추천을 가득 채워드려요."
- Bullets:
  - "이미지를 고르면 자동으로 취향 분석"
  - "위치 허용 시 더 정밀한 지역 기반 추천"

### Block 2 — Home
- Number: **02**, label: `home`
- Headline: "당신의 취향을 한데 모은 큐레이션"
- Body: "이번 주 PICK부터 찜한 디자인과 비슷한 추천까지. 파츠만의 네일 큐레이션을 매주 새롭게 만나보세요."
- Bullets:
  - "취향 기반 맞춤 디자인 추천"
  - "매주 업데이트되는 이번 주 PICK"

### Block 3 — Search
- Number: **03**, label: `search`
- Headline: "고민은 줄이고, 취향은 정확하게"
- Body: "시술 종류, 스타일, 모양, 지역까지. 원하는 조건으로 필터링해 마음에 쏙 드는 네일만 빠르게 찾아요."
- Bullets:
  - "젤네일·프렌치·마블·오로라 등 세부 필터"
  - "추천순&인기순으로 정렬"

### Block 4 — Location
- Number: **04**, label: `location`
- Headline: "집 앞 5분 거리 네일샵까지"
- Body: "내 주변 네일샵을 지도로 한눈에. 디자인·리뷰를 확인하고 마음에 드는 샵을 바로 팔로우하세요."
- Bullets:
  - "위치 기반 거리순 정렬"
  - "샵별 디자인 및 영업 정보를 한눈에"

### Block 5 — Community
- Number: **05**, label: `community`
- Headline: "당신의 네일로 이어져요"
- Body: "모델 모집, 자랑·질문, 일상 등 같은 취향을 가진 사람들과 네일로 소통하고, 영감을 나눠요."
- Bullets:
  - "카테고리별 피드로 빠르게 탐색"
  - "연습 모델 모집 및 후기 공유"

## After you write the file
- Add `// Brief: briefs/03-features.md` at the top.
- Make sure all 5 blocks render in order top-to-bottom.
- Return the list of files you created.
