// Brief: briefs/01-nav-hero.md
import {
  BLOB_HERO,
  ICON_APPLE,
  ICON_SCROLL_DOWN,
} from "@/lib/figma-assets";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[640px] overflow-hidden pt-[56px] md:min-h-[864px] md:pt-[64px]"
    >
      {/* Decorative background: dark wash + Figma blob composition (left-anchored, bleeds above nav) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-brand-ink" />
        <img
          src={BLOB_HERO}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-0 aspect-[1431/873] w-[130%] -translate-x-1/2 md:left-[85px] md:top-[-56px] md:w-[1409px] md:translate-x-0"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 md:px-[120px]">
        <div className="mt-[72px] flex flex-col items-center gap-8 md:mt-[137px] md:gap-[56px]">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <h1 className="max-w-[340px] text-center text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-white md:max-w-none md:text-[88px] md:leading-[118px] md:tracking-[-5.5px]">
              내 취향 네일 탐색,
              <br />
              이젠 <span className="text-brand-pink">파츠</span>로 쉽게
            </h1>

            <p className="max-w-[320px] text-center text-[14px] font-extralight leading-[1.6] tracking-[-1px] text-iron-50 md:max-w-none md:text-[24px] md:leading-[42px]">
              감별된 이미지로 당신에게 꼭 맞는 네일 취향을 찾아드려요.
              <br className="hidden md:block" />
              매주 새로운 큐레이션부터 집 앞 5분 거리 네일샵까지,
              <br className="hidden md:block" />
              파츠 하나로.
            </p>
          </div>

          {/* CTA — white pill, dark label, dark (unfiltered) apple glyph */}
          <a
            href="#"
            className="flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-brand-ink md:w-auto md:max-w-none md:gap-1 md:px-6 md:py-4"
          >
            <img
              src={ICON_APPLE}
              alt=""
              aria-hidden="true"
              className="h-6 w-5 md:h-[37px] md:w-[30px]"
            />
            <span className="text-[16px] font-semibold md:text-[24px] md:tracking-[-0.305px]">
              파츠 다운로드
            </span>
          </a>

          {/* Scroll cue — chevron inside a translucent circle */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 shadow-[-1.263px_1.263px_7.579px_2.526px_rgba(0,0,0,0.06)]">
            <img
              src={ICON_SCROLL_DOWN}
              alt=""
              aria-hidden="true"
              className="h-[30px] w-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
