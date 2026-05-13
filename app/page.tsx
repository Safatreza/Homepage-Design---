import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Services from "@/components/Services";
import QuoteSection from "@/components/QuoteSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Services />
      <QuoteSection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
