// Brief: briefs/04-faq-cta-footer.md
"use client";

import { useState } from "react";
import { BLOB_FAQ } from "@/lib/figma-assets";
import { FAQ_ITEMS as ITEMS } from "@/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="support"
      className="relative mx-auto max-w-[1440px] overflow-hidden px-5 py-[64px] md:px-0 md:py-[120px]"
    >
      {/* Decorative blob composition from Figma (bleeds slightly off the left edge) */}
      <img
        src={BLOB_FAQ}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden aspect-[1425/977] w-full md:block md:-left-[65px] md:right-auto md:top-[26px] md:w-[1425px]"
      />

      {/* Header */}
      <div className="relative mx-auto max-w-[552px] px-4 text-center md:px-0">
        <p className="text-center text-[32px] font-bold leading-[1.1] text-brand-pink md:text-[44px] md:leading-[70px] md:tracking-[2px]">
          FAQ
        </p>
        <h2 className="mt-2 text-center text-[28px] font-bold leading-[1.2] text-iron-900 md:mt-[30px] md:text-[44px] md:leading-[70px] md:tracking-[2px]">
          자주 묻는 질문
        </h2>
        <p className="mt-3 text-center text-[15px] font-light leading-[1.5] text-iron-800 md:mt-4 md:text-[24px] md:tracking-[-1px]">
          파츠에 대해 가장 많이 궁금해하시는 내용을 모았어요.
        </p>
      </div>

      {/* Accordion — stacked white cards */}
      <div className="relative mx-auto mt-[40px] flex max-w-[800px] flex-col gap-3 md:mt-12 md:gap-6">
        {ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-iron-300 bg-white md:rounded-[20px]"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 md:px-9"
                >
                  <span className="text-[16px] font-semibold tracking-[-0.3px] text-iron-900 md:text-[24px] md:tracking-[-1px]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink/15 text-brand-pink transition-transform duration-200 motion-reduce:transition-none md:h-[42px] md:w-[42px] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      className="h-5 w-5 md:h-6 md:w-6"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="motion-safe:transition-all"
                >
                  <p className="px-4 pb-5 text-[15px] leading-[1.7] text-iron-600 md:px-9 md:pb-6 md:text-[18px]">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
