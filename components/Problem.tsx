// Brief: briefs/02-problem-painpoints.md
import ScaleToFitCanvas from "@/components/ScaleToFitCanvas";

type StepPillProps = {
  children: React.ReactNode;
  width: number;
  gradient: string;
  className?: string;
};

function StepPill({ children, width, gradient, className }: StepPillProps) {
  return (
    <div
      className={`flex h-auto min-h-[60px] w-full items-center justify-center rounded-full px-5 py-3 text-[15px] font-medium leading-[22px] tracking-[-0.5px] text-iron-800 shadow-[-1px_1px_12px_2px_rgba(0,0,0,0.06)] md:h-[102px] md:w-[var(--pill-w)] md:px-10 md:py-4 md:text-[24px] md:leading-[70px] md:tracking-[-1px] ${gradient} ${className ?? ""}`}
      style={{ ["--pill-w" as string]: `${width}px` }}
    >
      <p className="whitespace-normal break-keep text-center leading-[22px] md:whitespace-nowrap md:leading-[70px]">
        {children}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative w-full bg-[#f4f4f4] md:overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <ScaleToFitCanvas designHeight={783}>
      <div className="relative mx-auto w-full px-6 py-12 md:h-[783px] md:w-[1440px] md:px-0 md:py-0">
        {/* Headline strip — blush block from left edge */}
        <div
          className="relative left-0 top-0 mb-8 h-auto w-full bg-[#f4f4f4] py-8 md:absolute md:left-0 md:top-[173px] md:mb-0 md:h-[204px] md:w-[608px] md:border-y md:border-[#f4f4f4] md:py-0"
          aria-hidden="true"
        />

        {/* Headline text overlaid on strip */}
        <h2
          id="problem-heading"
          className="relative left-0 top-0 px-4 text-[26px] font-bold leading-[40px] tracking-[-1.5px] text-iron-800 md:absolute md:left-[120px] md:top-[173px] md:flex md:h-[204px] md:flex-col md:justify-center md:px-0 md:text-[44px] md:leading-[70px] md:tracking-[-3px]"
        >
          <span className="block leading-[40px] md:leading-[70px]">
            네일을 받기까지,
          </span>
          <span className="block leading-[40px] md:leading-[70px]">
            복잡한 <span className="text-brand-pink">절차</span>를 거치지
            않았나요?
          </span>
        </h2>

        {/* Step pills column — right-aligned, tapered funnel */}
        <ol
          className="relative left-0 top-0 mt-8 flex w-full flex-col items-stretch gap-3 md:absolute md:left-[710px] md:top-[173px] md:mt-0 md:w-[610px] md:items-end md:gap-[32px]"
          aria-label="네일 예약을 위한 현재의 복잡한 절차"
        >
          {/* Row 1: two side-by-side pills */}
          <li className="flex w-full flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-end md:gap-[8px]">
            <StepPill
              width={301}
              gradient="bg-gradient-to-b from-cool-400 to-cool-300"
            >
              <span>
                인스타그램에서{" "}
                <span className="font-bold text-iron-950">#네일</span> 검색
              </span>
            </StepPill>
            <StepPill
              width={301}
              gradient="bg-gradient-to-b from-cool-400 to-cool-300"
            >
              <span>
                네이버에서{" "}
                <span className="font-bold text-iron-950">‘네일&#39;</span> 검색
              </span>
            </StepPill>
          </li>

          {/* Row 2 */}
          <li>
            <StepPill
              width={508}
              gradient="bg-gradient-to-b from-cool-300 to-cool-200"
            >
              <span>
                원하는{" "}
                <span className="font-bold text-iron-950">
                  디자인 탐색 및 가격표 비교
                </span>
              </span>
            </StepPill>
          </li>

          {/* Row 3 */}
          <li>
            <StepPill
              width={407}
              gradient="bg-gradient-to-b from-cool-200 to-cool-100"
            >
              <span>
                카카오톡/네이버 예약으로{" "}
                <span className="font-bold text-iron-950">예약 양식 첨부</span>
              </span>
            </StepPill>
          </li>

          {/* Row 4 */}
          <li>
            <StepPill
              width={305}
              gradient="bg-gradient-to-b from-cool-100 to-cool-50"
            >
              예약 확정 및 수정
            </StepPill>
          </li>
        </ol>
      </div>
      </ScaleToFitCanvas>
    </section>
  );
}
