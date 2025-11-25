"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect } from "react";
import { GraduationCap, Code, Briefcase, Rocket } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const springConfig = { damping: 25, stiffness: 400 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), springConfig);

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

  const stats = [
    { icon: GraduationCap, value: "Princeton", label: "University", color: "#3b82f6" },
    { icon: Code, value: "10+", label: "Technologies", color: "#93c5fd" },
    { icon: Briefcase, value: "3", label: "Internships", color: "#60a5fa" },
    { icon: Rocket, value: "5+", label: "Projects", color: "#3b82f6" },
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
          linear-gradient(180deg, #0a0a0f 0%, #000000 50%, #0a0a0f 100%)
        `
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - 3D Visual Element */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            style={{ y, opacity }}
          >
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96 perspective-2000"
              style={{ rotateX, rotateY }}
            >
              {/* Main floating card */}
              <motion.div
                className="absolute inset-0 rounded-3xl preserve-3d"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.08) 50%, rgba(6, 182, 212, 0.05) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), 0 0 100px rgba(59, 130, 246, 0.15), inset 0 0 60px rgba(59, 130, 246, 0.05)',
                  transform: 'translateZ(40px)',
                }}
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="text-7xl font-black text-blue-400 mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      CS
                    </motion.div>
                    <div className="text-white/60 text-sm uppercase tracking-widest">Princeton '28</div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    inset: `${-20 - i * 20}px`,
                    border: `2px solid rgba(59, 130, 246, ${0.3 - i * 0.08})`,
                    transform: `rotateX(${70 + i * 5}deg)`,
                  }}
                  animate={{
                    rotateZ: i % 2 === 0 ? [0, 360] : [360, 0],
                  }}
                  transition={{
                    duration: 20 + i * 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Orbiting spheres */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.9)' : 'rgba(147, 197, 253, 0.8)'} 0%, transparent 70%)`,
                    boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(147, 197, 253, 0.4)'}`,
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [Math.cos(i * 60 * Math.PI / 180) * 140, Math.cos((i * 60 + 180) * Math.PI / 180) * 140],
                    y: [Math.sin(i * 60 * Math.PI / 180) * 140, Math.sin((i * 60 + 180) * Math.PI / 180) * 140],
                  }}
                  transition={{
                    duration: 5 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                />
              ))}

              {/* Floating cube */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-xl preserve-3d"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.1) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                }}
                animate={{
                  y: [-15, 15, -15],
                  rotateY: [0, 360],
                  rotateX: [0, 180, 0],
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Small floating sphere */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.5) 0%, rgba(59, 130, 246, 0.2) 100%)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
                }}
                animate={{
                  y: [10, -15, 10],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-blue-400 text-sm uppercase tracking-widest mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.span>
              <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
                <span className="text-white">Building the </span>
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
                  }}
                >
                  Future
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-white/70 leading-relaxed">
                I'm a <span className="text-blue-400 font-medium">Computer Science student</span> at Princeton University 
                with a passion for building impactful software—from LLM-powered automation tools to full-stack web applications.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                I thrive at the intersection of <span className="text-white/80">AI and software engineering</span>, 
                leveraging technologies like LangChain, React, and cloud platforms to solve real-world problems.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'rgba(59, 130, 246, 0.4)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-4" style={{ color: stat.color }} />
                  <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wide mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)' }}
        />
      </div>
    </section>
  );
}
