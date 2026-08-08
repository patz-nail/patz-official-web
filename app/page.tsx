import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
