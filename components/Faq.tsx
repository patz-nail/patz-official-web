// Brief: briefs/04-faq-cta-footer.md
"use client";

import { useState } from "react";
import { BLOB_FAQ, ICON_PLUS } from "@/lib/figma-assets";

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
      className="max-w-[1440px] mx-auto py-[64px] md:py-[120px] px-5 md:px-0 relative overflow-hidden"
    >
      {/* Decorative blob composition from Figma */}
      <img
        src={BLOB_FAQ}
        alt=""
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute inset-x-0 top-0 w-full h-auto opacity-70"
      />

      {/* Header */}
      <div className="relative max-w-[800px] mx-auto text-center px-4 md:px-0">
        <p className="text-[36px] md:text-[64px] font-bold text-brand-pink text-center leading-[1.1]">
          FAQ
        </p>
        <h2 className="text-[28px] md:text-[48px] font-bold text-brand-ink text-center mt-4 md:mt-6 leading-[1.2]">
          자주 묻는 질문
        </h2>
        <p className="text-[15px] md:text-[20px] font-light text-iron-600 text-center mt-3 md:mt-4 leading-[1.5]">
          파츠에 대해 가장 많이 궁금해하시는 내용을 모았어요.
        </p>
      </div>

      {/* Accordion */}
      <div className="relative max-w-[800px] mx-auto mt-[56px] md:mt-[120px]">
        {ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <div key={idx} className="border-b border-iron-200">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-8 px-3 md:px-8 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="text-[16px] md:text-[24px] font-semibold text-brand-ink tracking-[-0.3px] md:tracking-[-0.5px]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative inline-flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <img src={ICON_PLUS} alt="" aria-hidden="true" className="h-6 w-6" />
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
                  <p className="text-[15px] md:text-[18px] text-iron-600 leading-[1.7] px-3 md:px-8 pb-5 md:pb-8">
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
