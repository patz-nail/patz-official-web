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
      className="relative min-h-[640px] md:min-h-[864px] overflow-hidden pt-[56px] md:pt-[64px]"
    >
      {/* Decorative background: blush wash + Figma blob composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-brand-blush" />
        <img
          src={BLOB_HERO}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-auto w-[110%] -translate-x-1/2 opacity-90 md:w-full"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 md:px-[97px]">
        <div className="mt-[80px] md:mt-[180px] flex flex-col items-center gap-6 md:gap-8">
          <h1 className="max-w-[340px] md:max-w-[564px] text-center text-[36px] md:text-[64px] font-bold leading-[1.2] tracking-[-0.02em] text-brand-ink">
            내 취향 네일 탐색, 이젠{" "}
            <span className="text-brand-pink">파츠</span>로 쉽게
          </h1>

          <p className="max-w-[320px] md:max-w-[640px] text-center text-[14px] md:text-[18px] leading-[1.6] md:leading-[1.75] text-iron-600">
            감별된 이미지로 당신에게 꼭 맞는 네일 취향을 찾아드려요. 매주 새로운
            큐레이션부터 집 앞 5분 거리 네일샵까지, 파츠 하나로.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="mt-2 md:mt-4 flex w-full md:w-auto items-center justify-center gap-3 md:gap-4 rounded-full bg-brand-ink px-6 md:px-8 py-4 md:py-5 text-white max-w-[320px]"
          >
            <img
              src={ICON_APPLE}
              alt=""
              aria-hidden="true"
              className="h-6 w-5 md:h-[37px] md:w-[30px] [filter:invert(1)_brightness(2)]"
            />
            <span className="text-[16px] md:text-[20px] font-semibold">
              파츠 다운로드
            </span>
          </a>

          {/* Scroll cue */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <img
              src={ICON_SCROLL_DOWN}
              alt=""
              aria-hidden="true"
              className="animate-bounce h-9 w-9 md:h-12 md:w-12 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
