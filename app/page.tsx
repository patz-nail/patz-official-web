import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_KO,
  SITE_DESCRIPTION,
  APP_STORE_URL,
} from "@/lib/constants";
import { LOGO_NAV_WORDMARK } from "@/lib/figma-assets";
import { FAQ_ITEMS } from "@/lib/faq";

// Structured data (JSON-LD). Drives rich results for search engines and gives
// generative answer engines (GEO) an explicit, machine-readable description of
// what PATZ is, who publishes it, and the FAQ — mirrored from the visible page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: SITE_NAME_KO,
      url: SITE_URL,
      logo: `${SITE_URL}${LOGO_NAV_WORDMARK}`,
      sameAs: ["https://www.instagram.com/patz.kr/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "ko-KR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: `${SITE_NAME_KO} (${SITE_NAME})`,
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      url: SITE_URL,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "ko-KR",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "KRW",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <PainPoints />
        <Features />
        <Faq />
      </main>
      {/* CTA + footer share one continuous dark gradient panel (Figma 1502:3627) */}
      <div className="bg-gradient-to-b from-brand-ink to-[#040021]">
        <FinalCta />
        <Footer />
      </div>
    </>
  );
}
