// Brief: briefs/04-faq-cta-footer.md
import { BLOB_FINAL_CTA, ICON_APPLE } from "@/lib/figma-assets";
import { APP_STORE_URL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="relative mx-auto max-w-[1440px] overflow-hidden px-5 pb-[96px] pt-[80px] md:px-0 md:pb-[120px] md:pt-[125px]"
    >
      {/* Decorative blob composition from Figma (left-anchored, bleeds above the panel) */}
      <img
        src={BLOB_FINAL_CTA}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden aspect-[1421/873] w-full md:block md:left-[85px] md:right-auto md:top-[-56px] md:w-[1409px]"
      />

      <div className="relative mx-auto max-w-[812px] px-2 text-center md:px-0">
        <h2 className="text-center text-[32px] font-bold leading-[1.25] tracking-[-0.02em] text-white md:text-[88px] md:leading-[118px] md:tracking-[-0.0625em]">
          취향에 꼭 맞는 네일,
          <br className="hidden md:block" />{" "}
          지금{" "}
          <span className="inline-block bg-gradient-to-r from-brand-pink to-brand-pill bg-clip-text text-transparent">
            파츠
          </span>
          에서 시작하세요
        </h2>
        <p className="mt-5 text-center text-[15px] font-extralight leading-[1.5] tracking-[-1px] text-iron-50 md:mt-8 md:text-[24px] md:leading-[42px]">
          오늘 바로 나만의 네일 큐레이션을 만나보세요.
        </p>
      </div>

      <div className="relative mt-[40px] flex justify-center px-5 md:mt-14 md:px-0">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-brand-ink transition-opacity hover:opacity-90 md:w-auto md:max-w-none md:gap-1"
        >
          <img
            src={ICON_APPLE}
            alt=""
            aria-hidden="true"
            className="h-[27px] w-[22px] md:h-[37px] md:w-[30px]"
          />
          <span className="text-[17px] font-semibold md:text-[24px] md:tracking-[-0.305px]">
            파츠 다운로드
          </span>
        </a>
      </div>
    </section>
  );
}
