// Brief: briefs/02-problem-painpoints.md
import {
  ELLIPSE_PAINPOINTS,
  LOGO_PAINPOINTS_LARGE,
  PHOTO_NAIL,
  SCREEN_PAINPOINTS_BACK,
  SCREEN_PAINPOINTS_FRONT,
} from "@/lib/figma-assets";

type QuotePillProps = {
  children: React.ReactNode;
  className?: string;
};

function QuotePill({ children, className }: QuotePillProps) {
  return (
    <li
      className={`flex h-auto min-h-[56px] items-center justify-center rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[8px] border border-iron-200 bg-white px-5 py-3 text-[14px] font-normal leading-[20px] tracking-[-0.4px] text-iron-600 shadow-[-1px_1px_12px_2px_rgba(0,0,0,0.06)] md:h-[102px] md:rounded-tl-[40px] md:rounded-tr-[40px] md:rounded-br-[40px] md:rounded-bl-[10px] md:px-10 md:py-4 md:text-[24px] md:leading-[70px] md:tracking-[-1px] ${className ?? ""}`}
    >
      <p className="whitespace-normal break-keep text-center leading-[20px] md:whitespace-nowrap md:leading-[70px]">
        {children}
      </p>
    </li>
  );
}

export default function PainPoints() {
  return (
    <section
      id="painpoints"
      className="relative w-full bg-gradient-to-b from-[#f4f4f4] via-[#f4f4f4] via-50% to-[#ecc5d2]"
      aria-labelledby="painpoints-heading"
    >
      <div className="relative mx-auto flex w-full flex-col gap-12 px-6 py-12 md:block md:h-[2488px] md:w-[1440px] md:gap-0 md:px-0 md:py-0">
        {/* Blush headline strip — full bleed across canvas */}
        <div
          className="relative left-0 top-0 -mx-6 h-auto w-screen border-y border-[#f4f4f4] bg-[#f4f4f4] py-8 md:absolute md:left-0 md:top-[58px] md:mx-0 md:h-[204px] md:w-[1440px] md:py-0"
          aria-hidden="true"
        />

        {/* Headline centered on blush strip */}
        <h2
          id="painpoints-heading"
          className="relative left-0 top-0 translate-x-0 translate-y-0 text-center text-[26px] font-bold leading-[40px] tracking-[-1.5px] text-iron-800 md:absolute md:left-1/2 md:top-[160px] md:-translate-x-1/2 md:-translate-y-1/2 md:text-[44px] md:leading-[70px] md:tracking-[-3px]"
        >
          <span className="block leading-[40px] md:leading-[70px]">
            네일 정할 때마다,
          </span>
          <span className="block leading-[40px] md:leading-[70px]">
            느꼈던 그 <span className="text-brand-pink">고민</span>
          </span>
        </h2>

        {/* Two-column: nail photo placeholder + speech-bubble quotes */}
        <div className="relative left-0 top-0 flex flex-col items-stretch gap-6 md:absolute md:left-[74px] md:top-[398px] md:flex-row md:items-start md:gap-[8px]">
          {/* Nail photo (Figma asset) */}
          <img
            src={PHOTO_NAIL}
            alt=""
            aria-hidden="true"
            className="aspect-square w-full shrink-0 object-cover md:size-[259px]"
          />

          {/* Speech-bubble quotes */}
          <ul className="flex w-full flex-col items-stretch gap-3 md:w-[500px] md:items-start md:gap-[32px]">
            <QuotePill>내 손에 뭐가 잘 어울리는지 모르겠어...</QuotePill>
            <QuotePill className="w-full">
              마음에 드는 디자인 찾느라 한 시간째 검색 중 🥲
            </QuotePill>
            <QuotePill>예약하고 갔는데 막상 내 스타일이 아니야</QuotePill>
            <QuotePill>집 근처에 잘하는 네일샵은 어디 있지?</QuotePill>
          </ul>
        </div>

        {/* Decorative ellipse behind right callout column (Figma asset) */}
        <img
          src={ELLIPSE_PAINPOINTS}
          alt=""
          aria-hidden="true"
          className="hidden md:absolute md:left-[846px] md:top-[338px] md:block md:size-[560px]"
        />

        {/* Right callout labels with pink pill highlights */}
        <div className="relative left-0 top-0 flex w-full flex-col items-center gap-2 md:absolute md:left-[999px] md:top-[564px] md:w-[253px] md:gap-0">
          {/* Pink underline pill behind "디자인 탐색" */}
          <div
            className="hidden md:absolute md:left-[-51px] md:top-[17px] md:block md:h-[35px] md:w-[146px] md:bg-[#ffbbd1]"
            aria-hidden="true"
          />
          {/* Pink underline pill behind "집 근처" */}
          <div
            className="hidden md:absolute md:left-[2px] md:top-[87px] md:block md:h-[35px] md:w-[93px] md:bg-[#ffbbd1]"
            aria-hidden="true"
          />

          <p className="relative whitespace-nowrap text-center text-[18px] font-medium leading-[28px] tracking-[-0.5px] md:text-[32px] md:leading-[70px]">
            <span className="text-brand-pink">디자인 탐색</span>
            <span className="text-iron-800">에 소요되는 시간</span>
          </p>
          <p className="relative whitespace-nowrap text-center text-[18px] font-medium leading-[28px] tracking-[-0.5px] md:text-[32px] md:leading-[70px]">
            <span className="text-brand-pink">집 근처</span>{" "}
            <span className="text-iron-800">네일샵 탐색</span>
          </p>
        </div>

        {/* Solution headline block */}
        <div className="relative left-0 top-0 flex w-full flex-col items-center gap-6 md:absolute md:left-[426px] md:top-[1219px] md:w-[552px] md:gap-[40px]">
          <h3 className="relative text-center font-bold tracking-[-3px] text-iron-800">
            {/* Soft highlight behind 파츠가 줄여드릴게요 */}
            <span
              className="hidden md:absolute md:left-[62px] md:top-[78px] md:block md:h-[73px] md:w-[428px] md:bg-[rgba(93,95,118,0.2)]"
              aria-hidden="true"
            />
            <span className="relative block text-[26px] leading-[36px] md:text-[44px] md:leading-[80px]">
              네일 고민하는 시간,
            </span>
            <span className="relative block text-[32px] leading-[40px] text-brand-ink md:text-[56px] md:leading-[80px]">
              파츠가 줄여드릴게요
            </span>
          </h3>
          <p className="w-full whitespace-normal break-keep text-center text-[14px] font-extralight leading-[22px] tracking-[-0.2px] text-iron-800 md:whitespace-pre-wrap md:text-[24px] md:leading-[36px] md:tracking-[-0.24px]">
            취향 분석부터 디자인 탐색, 내 주변 샵 찾기와 커뮤니티까지.{"\n"}
            네일에 필요한 모든 순간을 하나의 흐름으로 이어요.
          </p>
        </div>

        {/* PATZ wordmark + decorative droplets */}
        <div className="relative left-0 top-0 flex translate-x-0 flex-col items-center gap-6 md:absolute md:left-[702px] md:top-[1607px] md:-translate-x-1/2 md:gap-[40px]">
          {/* Large stylized PATZ wordmark with droplet glyphs (Figma asset) */}
          <img
            src={LOGO_PAINPOINTS_LARGE}
            alt="patz"
            className="aspect-[601/262] w-[60%] max-w-[400px] md:w-[582px] md:max-w-none"
          />

          {/* iPhone mockups — two pre-rotated (~13°) screen renders overlapping.
              Gallery phone sits behind/upper-right; home phone in front/lower-left. */}
          <div
            className="relative h-[440px] w-full max-w-[360px] overflow-visible md:h-[600px] md:w-[1000px] md:max-w-none"
            aria-hidden="true"
          >
            {/* Gallery grid — behind, upper right */}
            <img
              src={SCREEN_PAINPOINTS_FRONT}
              alt=""
              aria-hidden="true"
              className="absolute left-[52%] top-0 w-[46%] md:left-[500px] md:top-0 md:w-[440px]"
            />
            {/* Home screen — in front, lower left */}
            <img
              src={SCREEN_PAINPOINTS_BACK}
              alt=""
              aria-hidden="true"
              className="absolute left-[2%] top-[10%] w-[54%] md:left-[150px] md:top-[55px] md:w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
