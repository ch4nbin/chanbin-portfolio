"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {

      const sectionElements = sections.map(section => document.getElementById(section.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Navigation - centered, always rounded pill */}
      <motion.nav
        className="fixed left-1/2 transform -translate-x-1/2 z-50 top-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Desktop Navigation */}
        <div 
          className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: 'rgba(0, 0, 0, 0.35)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`relative px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeSection === section.id 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/90'
              }`}
              onClick={() => scrollToSection(section.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Active indicator - with more padding */}
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.08) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                  }}
                  layoutId="activeNav"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              
              <span className="relative z-10 font-medium">{section.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-4 rounded-full"
          style={{
            background: 'rgba(0, 0, 0, 0.35)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
      >
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'rgba(0, 0, 0, 0.9)', 
            backdropFilter: 'blur(20px)' 
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <motion.div
          className="absolute top-28 left-1/2 transform -translate-x-1/2 w-[calc(100%-3rem)]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: isMobileMenuOpen ? 0 : -20, 
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="rounded-3xl p-6 space-y-2"
            style={{
              background: 'rgba(15, 15, 25, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                className={`block w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-white'
                    : 'text-white/50'
                }`}
                style={{
                  background: activeSection === section.id 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)'
                    : 'transparent',
                }}
                onClick={() => scrollToSection(section.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-lg font-medium">{section.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side Dot Navigation */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4 hidden lg:block">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            className="relative w-3 h-3 rounded-full transition-all duration-300 group block"
            style={{
              background: activeSection === section.id 
                ? 'rgba(59, 130, 246, 0.9)' 
                : 'rgba(255, 255, 255, 0.2)',
              transform: activeSection === section.id ? 'scale(1.4)' : 'scale(1)',
              boxShadow: activeSection === section.id ? '0 0 12px rgba(59, 130, 246, 0.6)' : 'none',
            }}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            title={section.name}
          >
            {/* Active ring */}
            {activeSection === section.id && (
              <motion.div
                className="absolute -inset-1.5 rounded-full border border-blue-400/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            )}
            
            {/* Tooltip */}
            <div 
              className="absolute right-7 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
              style={{
                background: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
              }}
            >
              {section.name}
            </div>
          </motion.button>
        ))}
      </nav>
    </>
  );
}
