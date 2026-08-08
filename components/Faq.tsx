// Brief: briefs/04-faq-cta-footer.md
"use client";

import { useState } from "react";
import { BLOB_FAQ } from "@/lib/figma-assets";

type FaqItem = {
  q: string;
  a: string;
};

const ITEMS: FaqItem[] = [
  {
    q: "파츠는 어떤 앱인가요?",
    a: "파츠는 네일 디자인 큐레이션과 주변 네일샵 검색을 한 번에 제공하는 iOS 앱이에요. 당신의 취향을 분석해 매주 새로운 추천을 보여드려요.",
  },
  {
    q: "네일 취향 분석은 어떻게 하나요?",
    a: "온보딩에서 좋아하는 디자인을 최대 5개 선택해주시면, 파츠가 당신의 취향을 감별해 맞춤 추천을 만들어드려요. 사용할수록 추천이 더 정확해져요.",
  },
  {
    q: "어느 지역에서 사용할 수 있나요?",
    a: "현재 서울 전역(관악·동작·금천·서초·용산·강남·마포 등)에서 사용 가능해요. 점진적으로 서비스 지역을 넓혀가고 있어요.",
  },
  {
    q: "내 주변 네일샵 정보도 볼 수 있나요?",
    a: "네! 위치 권한을 허용하시면 집 앞 5분 거리의 네일샵까지 지도로 한눈에 보여드려요. 디자인, 리뷰, 영업 정보까지 확인할 수 있어요.",
  },
  {
    q: "파츠는 무료인가요?",
    a: "네, 파츠의 핵심 기능은 모두 무료로 사용하실 수 있어요.",
  },
  {
    q: "어떤 네일 스타일을 찾을 수 있나요?",
    a: "젤네일, 프렌치, 마블, 오로라 등 다양한 스타일을 세부 필터로 찾을 수 있어요. 시술 종류·모양·지역까지 원하는 조건으로 골라보세요.",
  },
];

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
