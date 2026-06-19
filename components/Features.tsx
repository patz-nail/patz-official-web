// Brief: briefs/03-features.md
import type { ReactNode } from "react";

type Bullet = string;

type Block = {
  number: string;
  label: string;
  headline: ReactNode;
  body: ReactNode;
  bullets: [Bullet, Bullet];
  phoneFirst: boolean;
  phoneEmoji: string;
  gap: number; // gap between phone and copy
};

const BLOCKS: Block[] = [
  {
    number: "01",
    label: "onboarding",
    headline: "네일 취향, 5초면 끝나요",
    body: (
      <>
        좋아하는 디자인을 최대 5개만 골라주세요.
        <br className="hidden md:inline" />
        파츠가 당신의 취향을 감별해 홈 추천을 가득 채워드려요.
      </>
    ),
    bullets: [
      "이미지를 고르면 자동으로 취향 분석",
      "위치 허용 시 더 정밀한 지역 기반 추천",
    ],
    phoneFirst: true,
    phoneEmoji: "💅",
    gap: 180,
  },
  {
    number: "02",
    label: "home",
    headline: (
      <>
        당신의 취향을
        <br className="hidden md:inline" />
        한데 모은 큐레이션
      </>
    ),
    body: (
      <>
        이번 주 PICK부터 찜한 디자인과 비슷한 추천까지.
        <br className="hidden md:inline" />
        파츠만의 네일 큐레이션을 매주 새롭게 만나보세요.
      </>
    ),
    bullets: ["취향 기반 맞춤 디자인 추천", "매주 업데이트되는 이번 주 PICK"],
    phoneFirst: false,
    phoneEmoji: "🏠",
    gap: 180,
  },
  {
    number: "03",
    label: "search",
    headline: (
      <>
        고민은 줄이고,
        <br className="hidden md:inline" />
        취향은 정확하게
      </>
    ),
    body: (
      <>
        시술 종류, 스타일, 모양, 지역까지.
        <br className="hidden md:inline" />
        원하는 조건으로 필터링해 마음에 쏙 드는 네일만 빠르게 찾아요.
      </>
    ),
    bullets: ["젤네일·프렌치·마블·오로라 등 세부 필터", "추천순&인기순으로 정렬"],
    phoneFirst: true,
    phoneEmoji: "🔍",
    gap: 150,
  },
  {
    number: "04",
    label: "location",
    headline: (
      <>
        집 앞 5분 거리
        <br className="hidden md:inline" />
        네일샵까지
      </>
    ),
    body: (
      <>
        내 주변 네일샵을 지도로 한눈에.
        <br className="hidden md:inline" />
        디자인·리뷰를 확인하고 마음에 드는 샵을 바로 팔로우하세요.
      </>
    ),
    bullets: ["위치 기반 거리순 정렬", "샵별 디자인 및 영업 정보를 한눈에"],
    phoneFirst: false,
    phoneEmoji: "📍",
    gap: 180,
  },
  {
    number: "05",
    label: "community",
    headline: "당신의 네일로 이어져요",
    body: (
      <>
        모델 모집, 자랑·질문, 일상 등 같은 취향을
        <br className="hidden md:inline" />
        가진 사람들과 네일로 소통하고, 영감을 나눠요.
      </>
    ),
    bullets: ["카테고리별 피드로 빠르게 탐색", "연습 모델 모집 및 후기 공유"],
    phoneFirst: true,
    phoneEmoji: "💬",
    gap: 150,
  },
];

function PhoneMockup({ emoji }: { emoji: string }) {
  return (
    <div
      className="relative w-[280px] h-[570px] md:w-[400px] md:h-[815px] shrink-0"
      aria-hidden="true"
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[34px] md:rounded-[48px] bg-iron-900" />

      {/* Inner screen */}
      <div className="absolute left-[13px] top-[11px] right-[13px] bottom-[11px] rounded-[36px] md:left-[18.67px] md:top-[15.33px] md:right-[18.67px] md:bottom-[15.33px] md:rounded-[50px] bg-iron-300 overflow-hidden flex items-center justify-center">
        <span className="text-[84px] md:text-[120px] opacity-70 select-none">{emoji}</span>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-[18px] md:top-[26px] left-1/2 -translate-x-1/2 w-[82px] md:w-[116px] h-[23px] md:h-[33px] rounded-full bg-iron-900" />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 56 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 md:w-[56px] md:h-[44px] mt-1 md:mt-0"
    >
      <path
        d="M8 22L22 36L48 8"
        stroke="#e8175d"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyColumn({ block }: { block: Block }) {
  return (
    <div className="flex flex-col gap-[28px] md:gap-[48px] items-start shrink-0 w-full md:w-auto">
      <div className="flex flex-col gap-[24px] md:gap-[48px] items-start w-full md:w-auto">
        {/* Number + divider + label */}
        <div className="flex flex-col items-start">
          <p className="text-[28px] md:text-[44px] font-bold text-brand-pink leading-[40px] md:leading-[70px] tracking-[-1.5px] md:tracking-[-3px]">
            {block.number}
          </p>
          <div className="flex gap-[16px] items-center">
            <div className="w-[48px] md:w-[80px] h-px bg-brand-pink" />
            <p className="text-[28px] md:text-[44px] font-semibold text-brand-pink leading-[40px] md:leading-[70px] tracking-[-0.5px] md:tracking-[-1px] whitespace-nowrap">
              {block.label}
            </p>
          </div>
        </div>

        {/* Headline + body */}
        <div className="flex flex-col gap-[16px] md:gap-[48px] items-start w-full md:w-auto">
          <h3 className="text-[28px] md:text-[44px] font-bold text-iron-900 leading-[40px] md:leading-[70px] tracking-[-1px] md:tracking-[-3px] whitespace-normal md:whitespace-nowrap break-keep">
            {block.headline}
          </h3>
          <p className="text-[16px] md:text-[28px] font-light text-iron-700 leading-[26px] md:leading-[44px] tracking-[-0.3px] md:tracking-[-1px] whitespace-normal md:whitespace-nowrap break-keep max-w-[335px] md:max-w-none">
            {block.body}
          </p>
        </div>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-[10px] md:gap-[16px] items-start w-full md:w-[401px]">
        {block.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-[10px] md:gap-[12px] items-start md:items-center">
            <CheckIcon />
            <span className="text-[15px] md:text-[24px] font-normal text-iron-900 leading-[22px] md:leading-[51px] tracking-[-0.3px] md:tracking-[-1px] whitespace-normal md:whitespace-nowrap break-keep">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureBlock({ block }: { block: Block }) {
  const phone = <PhoneMockup emoji={block.phoneEmoji} />;
  const copy = <CopyColumn block={block} />;
  const mdGapClass = block.gap === 150 ? "md:gap-[150px]" : "md:gap-[180px]";

  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 ${mdGapClass}`}
    >
      {block.phoneFirst ? (
        <>
          {phone}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {phone}
        </>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="service"
      aria-labelledby="service-heading"
      className="bg-white max-w-[1440px] mx-auto py-[64px] md:py-[120px] px-5 md:px-0"
    >
      <h2 id="service-heading" className="sr-only">
        주요 기능
      </h2>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[72px] md:gap-[140px]">
        {BLOCKS.map((block) => (
          <FeatureBlock key={block.number} block={block} />
        ))}
      </div>
    </section>
  );
}
