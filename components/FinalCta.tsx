// Brief: briefs/04-faq-cta-footer.md

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="max-w-[1440px] mx-auto pt-[80px] pb-[96px] md:pt-[125px] md:pb-[160px] px-5 md:px-0 relative overflow-hidden"
    >
      {/* Decorative blush blobs (same pattern as hero) */}
      <svg
        aria-hidden="true"
        className="hidden md:block absolute -left-[80px] top-[80px] w-[320px] h-[320px] opacity-60"
        viewBox="0 0 320 320"
        fill="none"
      >
        <ellipse cx="160" cy="160" rx="160" ry="160" fill="#f1e9e9" />
      </svg>
      <svg
        aria-hidden="true"
        className="hidden md:block absolute right-[40px] top-[40px] w-[220px] h-[220px] opacity-60"
        viewBox="0 0 220 220"
        fill="none"
      >
        <ellipse cx="110" cy="110" rx="110" ry="110" fill="#f1e9e9" />
      </svg>
      <svg
        aria-hidden="true"
        className="hidden md:block absolute right-[120px] bottom-[40px] w-[260px] h-[260px] opacity-60"
        viewBox="0 0 260 260"
        fill="none"
      >
        <ellipse cx="130" cy="130" rx="130" ry="130" fill="#f1e9e9" />
      </svg>
      <svg
        aria-hidden="true"
        className="hidden md:block absolute left-[120px] bottom-[80px] w-[160px] h-[160px] opacity-60"
        viewBox="0 0 160 160"
        fill="none"
      >
        <ellipse cx="80" cy="80" rx="80" ry="80" fill="#f1e9e9" />
      </svg>

      {/* Copy */}
      <div className="relative max-w-[812px] mx-auto text-center px-2 md:px-0">
        <h2 className="text-[32px] md:text-[64px] font-bold leading-[1.25] md:leading-[1.2] text-brand-ink text-center tracking-[-0.02em]">
          취향에 꼭 맞는 네일, 지금{" "}
          <span className="text-brand-pink">파츠에서</span> 시작하세요
        </h2>
        <p className="text-[15px] md:text-[20px] font-light text-iron-600 text-center mt-5 md:mt-8 leading-[1.5]">
          오늘 바로 나만의 네일 큐레이션을 만나보세요.
        </p>
      </div>

      {/* CTA button */}
      <div className="relative mt-[40px] md:mt-[64px] flex justify-center px-5 md:px-0">
        <a
          href="#"
          className="bg-brand-ink text-white rounded-full px-6 md:px-8 py-4 md:py-5 w-full md:w-auto inline-flex items-center justify-center gap-3 md:gap-4 hover:opacity-90 transition-opacity"
        >
          <svg
            width="22"
            height="27"
            viewBox="0 0 18 22"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.84 11.7c0-2.45 2-3.62 2.1-3.68-1.15-1.67-2.93-1.9-3.56-1.93-1.52-.16-2.96.9-3.73.9-.78 0-1.95-.88-3.21-.85-1.65.02-3.18.96-4.02 2.44-1.72 2.98-.44 7.39 1.23 9.81.82 1.18 1.78 2.51 3.04 2.46 1.22-.05 1.69-.8 3.16-.8 1.48 0 1.9.8 3.2.77 1.32-.02 2.16-1.2 2.96-2.4.94-1.37 1.32-2.7 1.34-2.77-.03-.02-2.57-.99-2.6-3.94zM12.4 4.42c.66-.81 1.11-1.93.99-3.04-.95.04-2.1.64-2.79 1.44-.62.71-1.16 1.85-1.02 2.94 1.06.08 2.15-.54 2.82-1.34z" />
          </svg>
          <span className="text-[17px] md:text-[20px] font-semibold">파츠 다운로드</span>
        </a>
      </div>
    </section>
  );
}
