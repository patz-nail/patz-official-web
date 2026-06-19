// Brief: briefs/04-faq-cta-footer.md

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "서비스", href: "#service" },
  { label: "지원", href: "#support" },
  { label: "팀", href: "#" },
  { label: "블로그", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-[1440px] mx-auto border-t border-iron-200 px-5 md:px-[120px] pt-[48px] md:pt-[80px] pb-[32px] md:pb-[40px]">
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Left column */}
        <div className="flex flex-col">
          <p className="text-brand-pink text-[32px] md:text-[40px] font-black leading-none tracking-[-0.02em]">
            patz
          </p>
          <p className="text-[13px] md:text-[14px] text-iron-500 mt-3 md:mt-4 max-w-full md:max-w-[420px] leading-[1.6]">
            네일 취향 검색은 파츠에게. 감별된 이미지로 꼭 맞는 취향을 찾고, 내
            주변 네일샵까지 한 번에.
          </p>
          <p className="text-[13px] md:text-[14px] text-iron-500 mt-4 md:mt-6">
            서비스 지역 · 서울 전역(관악 · 동작 · 금천 · 서초 · 용산 · 강남 ·
            마포 등)
          </p>
        </div>

        {/* Right column: nav list */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-row flex-wrap gap-x-8 gap-y-3 md:gap-[100px] items-start">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] md:text-[14px] font-semibold text-iron-700 hover:text-brand-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mt-[40px] md:mt-[80px] border-t border-iron-200 pt-[20px] md:pt-[24px]">
        <p className="text-[12px] md:text-[14px] text-iron-500 leading-[1.6]">
          © {year} patz. All rights reserved.
        </p>
        <div className="flex gap-6 md:gap-[40px]">
          <a
            href="#"
            className="text-[12px] md:text-[14px] text-iron-500 hover:text-iron-700 transition-colors"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-[12px] md:text-[14px] text-iron-500 hover:text-iron-700 transition-colors"
          >
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
