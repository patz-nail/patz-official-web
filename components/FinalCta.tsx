// Brief: briefs/04-faq-cta-footer.md
import { BLOB_FINAL_CTA, ICON_APPLE } from "@/lib/figma-assets";

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="max-w-[1440px] mx-auto pt-[80px] pb-[96px] md:pt-[125px] md:pb-[160px] px-5 md:px-0 relative overflow-hidden"
    >
      {/* Decorative blob composition from Figma */}
      <img
        src={BLOB_FINAL_CTA}
        alt=""
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute inset-x-0 top-0 w-full h-auto opacity-70"
      />

      <div className="relative max-w-[812px] mx-auto text-center px-2 md:px-0">
        <h2 className="text-[32px] md:text-[64px] font-bold leading-[1.25] md:leading-[1.2] text-brand-ink text-center tracking-[-0.02em]">
          취향에 꼭 맞는 네일, 지금{" "}
          <span className="text-brand-pink">파츠에서</span> 시작하세요
        </h2>
        <p className="text-[15px] md:text-[20px] font-light text-iron-600 text-center mt-5 md:mt-8 leading-[1.5]">
          오늘 바로 나만의 네일 큐레이션을 만나보세요.
        </p>
      </div>

      <div className="relative mt-[40px] md:mt-[64px] flex justify-center px-5 md:px-0">
        <a
          href="#"
          className="bg-brand-ink text-white rounded-full px-6 md:px-8 py-4 md:py-5 w-full md:w-auto inline-flex items-center justify-center gap-3 md:gap-4 hover:opacity-90 transition-opacity"
        >
          <img
            src={ICON_APPLE}
            alt=""
            aria-hidden="true"
            className="h-[27px] w-[22px] [filter:invert(1)_brightness(2)]"
          />
          <span className="text-[17px] md:text-[20px] font-semibold">
            파츠 다운로드
          </span>
        </a>
      </div>
    </section>
  );
}
