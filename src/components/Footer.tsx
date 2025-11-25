"use client";

import { siteConfig } from "../config/siteConfig";

export function Footer() {
  return (
    <footer className="relative py-8 px-6">
      {/* Top decorative line */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-sm text-center">
          © {siteConfig.legal.copyrightYear} {siteConfig.legal.copyrightHolder}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
