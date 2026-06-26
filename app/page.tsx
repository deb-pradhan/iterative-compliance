import Nav from "@/components/main/Nav";
import Hero from "@/components/main/Hero";
import WhoWeAre from "@/components/main/WhoWeAre";
import Services from "@/components/main/Services";
import Products from "@/components/main/Products";
import WhyPartner from "@/components/main/WhyPartner";
import About from "@/components/main/About";
import MainFaq from "@/components/main/MainFaq";
import FinalCta from "@/components/main/FinalCta";
import Footer from "@/components/main/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="frame" id="top">
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Products />
        <WhyPartner />
        <About />
        <MainFaq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
