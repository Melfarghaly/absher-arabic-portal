
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-cairo">
      <Navbar />
      <Hero />
      <Features />
      <Modules />
      <Benefits />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
