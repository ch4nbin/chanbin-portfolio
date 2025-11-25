"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Code, Cpu, Globe, Zap, Eye, Diamond } from "lucide-react";
import { useRef } from "react";

const skills = [
  {
    icon: Cpu,
    title: "LLM Systems & Agents",
    description: "LangChain/LangGraph orchestration, secure key handling, eval-friendly pipelines for production AI.",
    color: "#3b82f6",
  },
  {
    icon: Globe,
    title: "Full-Stack Web",
    description: "Next.js, React, TypeScript with API routes, authentication, and real-time user experiences.",
    color: "#60a5fa",
  },
  {
    icon: Code,
    title: "Backend & Data",
    description: "PostgreSQL, MongoDB, Supabase/Appwrite with RLS policies and defensive API design.",
    color: "#93c5fd",
  },
  {
    icon: Zap,
    title: "Cloud & DevOps",
    description: "Vercel deployments, containers, environment-scoped configs, Git-first workflows.",
    color: "#3b82f6",
  },
  {
    icon: Eye,
    title: "Data Engineering",
    description: "Python ETL pipelines, pdfplumber/PyPDF2, NumPy for analytics-ready datasets.",
    color: "#60a5fa",
  },
  {
    icon: Diamond,
    title: "Languages & Tooling",
    description: "Java, Python, TypeScript, C/C++, MATLAB, Linux/Bash, Git/GitHub proficiency.",
    color: "#93c5fd",
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), { damping: 20, stiffness: 300 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), { damping: 20, stiffness: 300 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="group perspective-1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{ rotateX, rotateY }}
      >
        <div 
          className="p-8 rounded-2xl h-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          }}
        >
          <motion.div 
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
            style={{
              background: `linear-gradient(135deg, ${skill.color}25 0%, ${skill.color}10 100%)`,
              border: `1px solid ${skill.color}40`,
              transform: 'translateZ(20px)',
            }}
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
          </motion.div>
          
          <h3 className="text-lg font-bold mb-4" style={{ color: skill.color }}>{skill.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{skill.description}</p>
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${skill.color}15 0%, transparent 70%)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section 
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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
              y: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-blue-400 text-sm uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expertise
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Technical </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
              }}
            >
              Skills
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            AI-forward full-stack engineering with resilient data layers and polished user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)' }}
        />
      </div>
    </section>
  );
}
