"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useRef, useEffect } from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  { 
    company: "WIT Sports", 
    role: "Software Engineer Intern", 
    location: "New York, NY", 
    period: "Winter 2026", 
    status: "Incoming",
    description: "Sports technology and analytics platform development.",
    color: "#3b82f6",
  },
  { 
    company: "Kindred Labs", 
    role: "Software Engineer Intern", 
    location: "Remote", 
    period: "Summer 2025",
    description: "Built LLM automation agent achieving 85% faster turnaround for document processing workflows.",
    highlights: ["LangChain", "GPT-4", "85% Improvement"],
    color: "#60a5fa",
  },
  { 
    company: "Child Creativity Lab", 
    role: "Data Engineer Intern", 
    location: "Santa Ana, CA", 
    period: "Summer 2025",
    description: "Developed ETL pipeline resulting in 75% workload reduction for data processing operations.",
    highlights: ["Python", "ETL", "75% Reduction"],
    color: "#93c5fd",
  },
  { 
    company: "CMU SAMS", 
    role: "Research Fellow", 
    location: "Pittsburgh, PA", 
    period: "Summer 2023",
    description: "Conducted research in cryptography and computer vision applications.",
    highlights: ["RSA", "OpenCV", "Research"],
    color: "#3b82f6",
  },
];

export function CreativeShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start end", "end start"] 
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-4, 4]), springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(event.clientX - rect.left - rect.width / 2);
        mouseY.set(event.clientY - rect.top - rect.height / 2);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
          linear-gradient(180deg, #000000 0%, #0a0a0f 50%, #000000 100%)
        `
      }}
    >
      {/* Floating 3D elements */}
      <motion.div
        className="absolute top-24 right-20 w-20 h-20 rounded-2xl preserve-3d"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.12) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          boxShadow: '0 0 45px rgba(59, 130, 246, 0.3)',
          y: y1,
        }}
        animate={{ 
          y: [-18, 18, -18], 
          rotateY: [0, 360],
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-16 h-16 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.25) 100%)',
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
          y: y2,
        }}
        animate={{ 
          y: [12, -18, 12],
          scale: [1, 1.15, 1],
          rotateZ: [0, 360],
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 16, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Orbiting rings */}
      <motion.div
        className="absolute top-1/3 left-8 w-28 h-28 rounded-full border border-blue-500/20"
        style={{ transform: 'rotateX(70deg)' }}
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
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
              y: [-18, 18, -18],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-blue-400 text-sm uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Journey
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Work </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
              }}
            >
              Experience
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            AI, data engineering & full-stack development across industry and research
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          {/* Timeline line */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
            style={{ 
              background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.4) 10%, rgba(59, 130, 246, 0.4) 90%, transparent)' 
            }} 
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2"
                  style={{ 
                    background: `radial-gradient(circle, ${exp.color} 0%, ${exp.color}70 100%)`,
                    boxShadow: `0 0 20px ${exp.color}70`,
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <motion.div
                    className="group rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      boxShadow: '0 20px 50px rgba(59, 130, 246, 0.15)',
                    }}
                  >
                    <div className="p-7">
                      {exp.status && (
                        <span 
                          className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full mb-4"
                          style={{ 
                            background: `${exp.color}20`,
                            border: `1px solid ${exp.color}50`,
                            color: exp.color,
                          }}
                        >
                          {exp.status}
                        </span>
                      )}
                      
                      <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                      <p className="text-base font-medium mb-4" style={{ color: exp.color }}>{exp.role}</p>
                      
                      <div className="flex flex-wrap gap-4 text-white/50 text-sm mb-5">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-5">{exp.description}</p>
                      
                      {exp.highlights && (
                        <div className="flex flex-wrap gap-2.5">
                          {exp.highlights.map((h, i) => (
                            <span 
                              key={i} 
                              className="px-3.5 py-1.5 text-xs rounded-lg"
                              style={{ 
                                background: 'rgba(255, 255, 255, 0.06)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'rgba(255, 255, 255, 0.7)',
                              }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div 
            className="inline-flex flex-wrap items-center justify-center gap-5 px-10 py-5 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.08) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)',
            }}
          >
            <span className="text-blue-400 font-semibold text-lg">🎓 Princeton University</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white/70">Computer Science '28</span>
          </div>
        </motion.div>
      </div>

      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/3 w-[500px] h-[500px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            y: y1,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)',
            y: y2,
          }}
        />
      </div>
    </section>
  );
}
