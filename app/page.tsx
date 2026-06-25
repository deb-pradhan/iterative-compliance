import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Differentiator from "@/components/Differentiator";
import Pricing from "@/components/Pricing";
import WhoFor from "@/components/WhoFor";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="frame" id="top">
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <Differentiator />
        <Pricing />
        <WhoFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
