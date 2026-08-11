// Brief: briefs/01-nav-hero.md
"use client";

import { useEffect, useState } from "react";
import { ICON_APPLE, LOGO_NAV_WORDMARK } from "@/lib/figma-assets";
import { LOGO_NAV_MARK } from "@/lib/constants";
import { APP_STORE_URL } from "@/lib/constants";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "서비스", href: "#service" },
  { label: "지원", href: "#support" },
  { label: "팀", href: "#" },
  { label: "블로그", href: "#" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 w-full border-b border-white/10 bg-brand-ink/70 backdrop-blur-md supports-[backdrop-filter]:bg-brand-ink/60">
      <div className="mx-auto flex h-14 md:h-16 w-full max-w-[1440px] items-center justify-between px-5 md:px-[120px]">
        {/* Logo (droplet mark: /4x/Vector.svg, 55×44 → keep 1.25 ratio; wordmark #F1E9E9, reads on dark) */}
        <a
          href="#hero"
          className="flex items-center gap-[4px]"
          aria-label="patz home"
        >
          <img
            src={LOGO_NAV_MARK}
            alt=""
            aria-hidden="true"
            className="h-6 w-[30px] md:h-[30px] md:w-[38px]"
          />
          <img
            src={LOGO_NAV_WORDMARK}
            alt="patz"
            className="h-3 w-[38px] md:h-4 md:w-[51px]"
          />
        </a>

        {/* Center menu (desktop) */}
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-[80px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[22px] font-normal tracking-[-0.15px] text-white transition-colors hover:text-white/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-side group: CTA + hamburger */}
        <div className="flex items-center gap-2">
          {/* CTA (desktop) — white pill, dark label, dark (unfiltered) apple glyph */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center justify-center gap-[6px] rounded-[19px] bg-white px-6 text-brand-ink md:flex"
          >
            <img
              src={ICON_APPLE}
              alt=""
              aria-hidden="true"
              className="h-[22px] w-[18px]"
            />
            <span className="text-[18px] font-semibold tracking-[-0.194px]">
              파츠 다운로드
            </span>
          </a>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav-panel"
        hidden={!open}
        className="border-t border-white/10 bg-brand-ink md:hidden"
      >
        <nav aria-label="모바일 메뉴" className="px-5 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[16px] font-medium text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-brand-ink"
              >
                <img
                  src={ICON_APPLE}
                  alt=""
                  aria-hidden="true"
                  className="h-[18px] w-[15px]"
                />
                <span className="text-[15px] font-semibold">파츠 다운로드</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
