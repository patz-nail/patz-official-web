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
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
