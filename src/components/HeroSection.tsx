"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "../config/siteConfig";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sectionRef = useRef<HTMLElement>(null);

  const springConfig = { damping: 25, stiffness: 400 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(event.clientX - centerX);
        mouseY.set(event.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.04) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0f 100%)
        `
      }}
    >
      {/* Advanced particle system */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 3 === 0 ? 'rgba(255, 255, 255, 0.6)' : 
                         i % 3 === 1 ? 'rgba(59, 130, 246, 0.5)' : 
                         'rgba(96, 165, 250, 0.4)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -100, -200],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0 perspective-2000"
        style={{ rotateX, rotateY }}
      >
        {/* Large central crystal */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 preserve-3d"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="absolute inset-0 rounded-xl border border-blue-400/30"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, transparent 100%)',
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-tl from-transparent to-blue-400/10 rounded-lg" />
            <div className="absolute inset-4 bg-gradient-to-br from-blue-400/5 to-transparent rounded-md animate-pulse" />
          </div>
        </motion.div>

        {/* Floating sphere - right side */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-24 h-24 preserve-3d"
          animate={{
            rotateY: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-full h-full rounded-full border border-blue-300/20"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(37, 99, 235, 0.3) 100%)',
              boxShadow: '0 0 50px rgba(59, 130, 246, 0.4), inset -10px -10px 30px rgba(255, 255, 255, 0.1)',
            }}
          />
        </motion.div>

        {/* Prismatic triangular elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute preserve-3d"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateZ: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          >
            <div 
              className="w-16 h-16 border border-blue-400/25"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)',
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
              }}
            />
          </motion.div>
        ))}

        {/* Orbiting rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 border-2 rounded-full preserve-3d"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              marginLeft: `-${100 + i * 50}px`,
              marginTop: `-${100 + i * 50}px`,
              borderColor: `rgba(59, 130, 246, ${0.3 - i * 0.08})`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [360, 0],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, ${0.1 - i * 0.02}), transparent)`,
              }}
            />
          </motion.div>
        ))}

        {/* Additional floating cubes */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-20 h-20 preserve-3d"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [-15, 15, -15],
          }}
          transition={{
            rotateX: { duration: 18, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 14, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div 
            className="w-full h-full rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.25)',
            }}
          />
        </motion.div>

        {/* Bottom left sphere */}
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-28 h-28 preserve-3d"
          animate={{
            rotateY: [0, 360],
            y: [10, -20, 10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 25% 25%, rgba(147, 197, 253, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(30, 64, 175, 0.2) 100%)',
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.35), inset -15px -15px 40px rgba(0, 0, 0, 0.3), inset 10px 10px 30px rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-9xl lg:text-[14rem] font-black tracking-tighter mb-8 relative">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
              }}
            >
              {siteConfig.company.name}
            </span>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 rounded-full"
              style={{ 
                width: "80%",
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)',
              }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </h1>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-white/60 max-w-4xl mx-auto">
            {siteConfig.company.tagline}
          </p>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {/* Primary Button - View My Work with saber border trail */}
            <motion.button
              className="group saber-border"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Button content */}
              <div 
                className="saber-border-inner flex items-center justify-center"
                style={{ padding: '20px 56px' }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.15) 0%, transparent 60%)' }}
                />
                <span className="relative z-10 text-sm font-medium uppercase tracking-wider text-white">
                  View My Work
                </span>
              </div>
            </motion.button>

            {/* Secondary Button - GitHub Profile with saber border trail */}
            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group saber-border saber-border-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Button content */}
              <div 
                className="saber-border-inner flex items-center justify-center"
                style={{ padding: '20px 56px' }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 60%)' }}
                />
                <span className="relative z-10 text-sm font-medium uppercase tracking-wider text-white/60 group-hover:text-white transition-colors duration-300">
                  GitHub Profile
                </span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="text-white/40 text-sm uppercase tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to Explore
        </motion.div>
        <div className="relative">
          <ChevronDown className="w-8 h-8 text-white/60" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)' }}
        />
      </div>
    </section>
  );
}

