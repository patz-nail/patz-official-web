// Brief: briefs/01-nav-hero.md
"use client";

import { useEffect, useState } from "react";

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
    <header className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 md:h-16 w-full max-w-[1440px] items-center justify-between px-5 md:px-[97px]">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-1"
          aria-label="patz home"
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="h-7 w-7 md:h-8 md:w-8"
          >
            <circle cx="16" cy="16" r="14" fill="#e8175d" />
            <circle cx="22" cy="10" r="3.5" fill="#15173d" />
          </svg>
          <span
            className="text-[22px] md:text-[30px] font-extrabold leading-none text-brand-pink"
            style={{ letterSpacing: "-0.04em", fontFeatureSettings: '"kern"' }}
          >
            patz
          </span>
        </a>

        {/* Center menu (desktop) */}
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-[80px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-iron-700 transition-colors hover:text-brand-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-side group: CTA + hamburger */}
        <div className="flex items-center gap-2">
          {/* CTA (desktop) */}
          <a
            href="#"
            className="hidden md:flex h-10 w-[169px] items-center justify-center gap-2 rounded-full bg-brand-ink text-white"
          >
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.84 11.7c0-2.45 2-3.62 2.1-3.68-1.15-1.67-2.93-1.9-3.56-1.93-1.52-.16-2.96.9-3.73.9-.78 0-1.95-.88-3.21-.85-1.65.02-3.18.96-4.02 2.44-1.72 2.98-.44 7.39 1.23 9.81.82 1.18 1.78 2.51 3.04 2.46 1.22-.05 1.69-.8 3.16-.8 1.48 0 1.9.8 3.2.77 1.32-.02 2.16-1.2 2.96-2.4.94-1.37 1.32-2.7 1.34-2.77-.03-.02-2.57-.99-2.6-3.94zM12.4 4.42c.66-.81 1.11-1.93.99-3.04-.95.04-2.1.64-2.79 1.44-.62.71-1.16 1.85-1.02 2.94 1.06.08 2.15-.54 2.82-1.34z" />
            </svg>
            <span className="text-[14px] font-medium">파츠 다운로드</span>
          </a>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-iron-700 md:hidden"
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
        className="md:hidden border-t border-iron-200 bg-white"
      >
        <nav aria-label="모바일 메뉴" className="px-5 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[16px] font-medium text-iron-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-ink text-white"
              >
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.84 11.7c0-2.45 2-3.62 2.1-3.68-1.15-1.67-2.93-1.9-3.56-1.93-1.52-.16-2.96.9-3.73.9-.78 0-1.95-.88-3.21-.85-1.65.02-3.18.96-4.02 2.44-1.72 2.98-.44 7.39 1.23 9.81.82 1.18 1.78 2.51 3.04 2.46 1.22-.05 1.69-.8 3.16-.8 1.48 0 1.9.8 3.2.77 1.32-.02 2.16-1.2 2.96-2.4.94-1.37 1.32-2.7 1.34-2.77-.03-.02-2.57-.99-2.6-3.94zM12.4 4.42c.66-.81 1.11-1.93.99-3.04-.95.04-2.1.64-2.79 1.44-.62.71-1.16 1.85-1.02 2.94 1.06.08 2.15-.54 2.82-1.34z" />
                </svg>
                <span className="text-[15px] font-semibold">파츠 다운로드</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
