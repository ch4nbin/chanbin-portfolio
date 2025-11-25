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
    <div 
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 70%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #000000 0%, #050510 50%, #000000 100%)
        `
      }}
    >
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