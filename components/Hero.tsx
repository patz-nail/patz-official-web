// Brief: briefs/01-nav-hero.md
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[640px] md:min-h-[864px] overflow-hidden pt-[56px] md:pt-[64px]"
    >
      {/* Decorative background: blush wash + pink ellipse blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Centered soft wash */}
        <div className="absolute inset-0 bg-brand-blush" />

        {/* Large bottom-right ellipse */}
        <svg
          className="absolute -right-32 -bottom-40 hidden md:block"
          width="640"
          height="640"
          viewBox="0 0 640 640"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="blob-lg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8175d" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#e8175d" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#e8175d" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="320" cy="320" rx="320" ry="320" fill="url(#blob-lg)" />
        </svg>

        {/* Small mid-left ellipse */}
        <svg
          className="absolute -left-24 top-[260px] md:-left-20 md:top-[420px] opacity-60 md:opacity-100 h-[220px] w-[220px] md:h-[320px] md:w-[320px]"
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="blob-sm-left" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e28ca9" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#e28ca9" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#e28ca9" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="160" rx="160" ry="160" fill="url(#blob-sm-left)" />
        </svg>

        {/* Small top-right ellipse */}
        <svg
          className="absolute -right-12 top-[20px] md:right-[180px] md:top-[40px] opacity-50 md:opacity-100 h-[160px] w-[160px] md:h-[240px] md:w-[240px]"
          viewBox="0 0 240 240"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="blob-sm-right" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8175d" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#e8175d" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#e8175d" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="120" cy="120" rx="120" ry="120" fill="url(#blob-sm-right)" />
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 md:px-[97px]">
        {/* Copy block — vertically positioned so h1 baseline lands near y=265 */}
        <div className="mt-[80px] md:mt-[180px] flex flex-col items-center gap-6 md:gap-8">
          <h1
            className="max-w-[340px] md:max-w-[564px] text-center text-[36px] md:text-[64px] font-bold leading-[1.2] md:leading-[1.2] tracking-[-0.02em] text-brand-ink"
          >
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
            <svg
              viewBox="0 0 18 22"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 md:h-[37px] md:w-[30px]"
            >
              <path d="M14.84 11.7c0-2.45 2-3.62 2.1-3.68-1.15-1.67-2.93-1.9-3.56-1.93-1.52-.16-2.96.9-3.73.9-.78 0-1.95-.88-3.21-.85-1.65.02-3.18.96-4.02 2.44-1.72 2.98-.44 7.39 1.23 9.81.82 1.18 1.78 2.51 3.04 2.46 1.22-.05 1.69-.8 3.16-.8 1.48 0 1.9.8 3.2.77 1.32-.02 2.16-1.2 2.96-2.4.94-1.37 1.32-2.7 1.34-2.77-.03-.02-2.57-.99-2.6-3.94zM12.4 4.42c.66-.81 1.11-1.93.99-3.04-.95.04-2.1.64-2.79 1.44-.62.71-1.16 1.85-1.02 2.94 1.06.08 2.15-.54 2.82-1.34z" />
            </svg>
            <span className="text-[16px] md:text-[20px] font-semibold">파츠 다운로드</span>
          </a>

          {/* Scroll cue */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="animate-bounce text-iron-400 h-9 w-9 md:h-12 md:w-12"
              aria-hidden="true"
            >
              <path
                d="M12 16l12 12 12-12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 28l12 12 12-12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
