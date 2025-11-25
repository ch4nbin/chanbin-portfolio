"use client";

import { motion } from "motion/react";
import { Github, Linkedin, ArrowUp, Heart } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  ].filter(link => link.href);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer 
      className="relative py-16 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0f 0%, #000000 100%)
        `
      }}
    >
      {/* Top decorative line */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-4xl font-black mb-3"
              style={{
                background: 'linear-gradient(to right, #ffffff, #93c5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {siteConfig.company.name}
            </h3>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div 
                className="h-px w-16"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5))' }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-blue-400"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div 
                className="h-px w-16"
                style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5), transparent)' }}
              />
            </div>
            
            <p className="text-white/50 text-sm max-w-md">
              {siteConfig.company.description}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  borderColor: 'rgba(59, 130, 246, 0.5)',
                  background: 'rgba(59, 130, 246, 0.15)',
                }}
                title={social.label}
              >
                <social.icon className="w-5 h-5 text-white/70" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="pt-8 border-t border-white/5 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/30 text-sm flex items-center justify-center gap-2">
              © {siteConfig.legal.copyrightYear} {siteConfig.legal.copyrightHolder}
              <span className="text-white/10">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-blue-400" /> 
              </span>
            </p>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute top-8 right-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          whileHover={{ 
            scale: 1.1, 
            y: -3,
            borderColor: 'rgba(59, 130, 246, 0.5)',
            background: 'rgba(59, 130, 246, 0.15)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ArrowUp className="w-5 h-5 text-white/70" />
        </motion.button>
      </div>

      {/* Ambient glow */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }}
      />
    </footer>
  );
}
