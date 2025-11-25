import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { CreativeShowcase } from "./components/CreativeShowcase";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CreativeShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}