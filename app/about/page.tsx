import type { Metadata } from "next";
import Nav from "@/components/main/Nav";
import About from "@/components/main/About";
import Offices from "@/components/main/Offices";
import FinalCta from "@/components/main/FinalCta";
import Footer from "@/components/main/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About · Iterative Research",
  description:
    "Iterative Research is a UAE based AI infrastructure company founded in 2022, delivering secure, scalable solutions for enterprise and government across the UAE and India.",
};

export default function AboutPage() {
  return (
    <div className="frame" id="top">
      <ScrollReveal />
      <Nav />
      <main>
        <About />
        <Offices />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
