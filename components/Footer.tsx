// Brief: briefs/04-faq-cta-footer.md
import { LOGO_FOOTER } from "@/lib/figma-assets";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "서비스", href: "#service" },
  { label: "지원", href: "#support" },
  { label: "팀", href: "#" },
  { label: "블로그", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] px-5 pb-[32px] pt-[48px] md:px-[120px] md:pb-[40px] md:pt-[16px]">
      {/* Top row */}
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-0">
        {/* Left column */}
        <div className="flex flex-col">
          <img
            src={LOGO_FOOTER}
            alt="patz"
            className="h-10 w-[92px] md:h-[51px] md:w-[117px]"
          />
          <p className="mt-3 max-w-full text-[14px] font-light leading-[1.6] text-iron-400 md:mt-4 md:max-w-[420px] md:text-[18px] md:leading-[28px]">
            네일 취향 검색은 파츠에게. 감별된 이미지로 꼭 맞는 취향을 찾고, 내
            주변 네일샵까지 한 번에.
          </p>
          <p className="mt-4 text-[13px] font-extralight text-iron-500 md:mt-6 md:text-[16px] md:tracking-[-1px]">
            서비스 지역 · 서울 전역(관악 · 동작 · 금천 · 서초 · 용산 · 강남 ·
            마포 등)
          </p>
        </div>

        {/* Right column: nav list */}
        <nav aria-label="Footer navigation" className="md:pt-2">
          <ul className="flex flex-row flex-wrap items-start gap-x-8 gap-y-3 md:gap-[100px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-semibold text-iron-50 transition-colors hover:text-white md:text-[18px] md:font-bold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mt-[40px] flex flex-col gap-4 border-t border-white/10 pt-[20px] md:mt-[47px] md:flex-row md:items-center md:justify-between md:gap-0 md:pt-[9px]">
        <p className="text-[12px] font-extralight leading-[1.6] text-iron-600 md:text-[16px] md:tracking-[-1px]">
          © 2026 patz. All rights reserved. · 최종 업데이트 2026.06
        </p>
        <div className="flex gap-6 md:gap-[40px]">
          <a
            href="#"
            className="text-[12px] font-extralight text-iron-600 transition-colors hover:text-iron-400 md:text-[16px] md:tracking-[-1px]"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-[12px] font-extralight text-iron-600 transition-colors hover:text-iron-400 md:text-[16px] md:tracking-[-1px]"
          >
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
