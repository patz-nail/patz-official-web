// Brief: briefs/02-problem-painpoints.md

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
          {/* Nail photo placeholder */}
          <div
            className="aspect-square w-full shrink-0 overflow-hidden bg-iron-200 md:size-[259px]"
            aria-hidden="true"
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

        {/* Decorative background blob behind right callout column */}
        <div
          aria-hidden="true"
          className="hidden md:absolute md:left-[846px] md:top-[338px] md:block md:size-[560px] md:rounded-full md:bg-brand-pill/15 md:blur-2xl"
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

          <p className="relative whitespace-nowrap text-center text-[18px] font-medium leading-[28px] tracking-[-0.5px] md:text-[32px] md:leading-[70px] md:tracking-[-1px]">
            <span className="text-brand-pink">디자인 탐색</span>
            <span className="text-iron-800">에 소요되는 시간</span>
          </p>
          <p className="relative whitespace-nowrap text-center text-[18px] font-medium leading-[28px] tracking-[-0.5px] md:text-[32px] md:leading-[70px] md:tracking-[-1px]">
            <span className="text-brand-pink">집 근처</span>{" "}
            <span className="text-iron-800">네일샵 탐색</span>
          </p>
        </div>

        {/* Solution headline block */}
        <div className="relative left-0 top-0 flex w-full flex-col items-center gap-6 md:absolute md:left-[429px] md:top-[1219px] md:w-[582px] md:gap-[40px]">
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
        <div className="relative left-0 top-0 flex translate-x-0 flex-col items-center gap-6 md:absolute md:left-1/2 md:top-[1572px] md:-translate-x-1/2 md:gap-[40px]">
          <div
            className="relative mr-2 flex h-[100px] w-full items-center justify-center md:h-[187px] md:w-[582px]"
            aria-label="patz"
          >
            {/* Decorative droplet glyphs (left of wordmark) */}
            <div
              className="relative -mr-4 h-[80px] w-[90px] md:h-[160px] md:w-[140px]"
              aria-hidden="true"
            >
              <span className="absolute left-0 top-3 block size-[60px] rounded-full bg-brand-pink/85 md:top-6 md:size-[110px]" />
              <span className="absolute left-[35px] top-0 block h-[65px] w-[40px] rounded-full bg-brand-pill/80 md:left-[70px] md:h-[120px] md:w-[70px]" />
            </div>
            <span className="text-[80px] font-black leading-none tracking-[-0.06em] text-brand-ink md:text-[160px]">
              patz
            </span>
          </div>

          {/* iPhone mockups — stylized rounded rect placeholders */}
          <div
            className="relative h-[420px] w-full max-w-[360px] overflow-visible md:h-[597px] md:w-[1000px] md:max-w-none"
            aria-hidden="true"
          >
            {/* Back / larger frame */}
            <div className="absolute left-1/2 top-[20px] h-[400px] w-[600px] -translate-x-1/2 md:top-[34px] md:h-[563px] md:w-[1000px]">
              <div className="mx-auto h-full w-[180px] rounded-[28px] bg-brand-ink shadow-[0_20px_40px_-15px_rgba(21,23,61,0.3)] md:w-[292px] md:rounded-[48px] md:shadow-[0_30px_60px_-15px_rgba(21,23,61,0.35)]" />
            </div>
            {/* Front / smaller frame, tilted */}
            <div className="absolute left-[60%] top-[40px] h-[300px] w-[160px] rotate-[8deg] rounded-[24px] bg-brand-ink shadow-[0_15px_30px_-12px_rgba(21,23,61,0.4)] md:left-[525px] md:top-[26px] md:h-[450px] md:w-[250px] md:rounded-[42px] md:shadow-[0_25px_50px_-12px_rgba(21,23,61,0.4)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
