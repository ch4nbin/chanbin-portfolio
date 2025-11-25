"use client";

import { motion, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), { damping: 20, stiffness: 300 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), { damping: 20, stiffness: 300 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  const handleClick = () => {
    if (project.githubUrl) window.open(project.githubUrl, '_blank');
    else if (project.projectUrl) window.open(project.projectUrl, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      className="group perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      onClick={handleClick}
    >
      <motion.div 
        className="relative preserve-3d h-full"
        style={{ rotateX, rotateY }}
      >
        <div 
          className="rounded-2xl overflow-hidden h-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Visual Header */}
          <div className="relative h-48 overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.35) 0%, transparent 50%),
                  radial-gradient(ellipse at 70% 70%, rgba(96, 165, 250, 0.25) 0%, transparent 50%),
                  linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)
                `
              }}
            />
            
            {/* Floating 3D icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                y: [-8, 8, -8],
                rotateY: [0, 360],
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
              }}
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center preserve-3d"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(96, 165, 250, 0.2) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
                }}
              >
                <Github className="w-10 h-10 text-white/90" />
              </div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.6)',
                  left: `${15 + i * 10}%`,
                  top: `${20 + (i % 4) * 15}%`,
                }}
                animate={{ 
                  y: [-8, 8, -8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ 
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Category & Year badges */}
            <div 
              className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-medium"
              style={{ 
                background: 'rgba(59, 130, 246, 0.25)',
                border: '1px solid rgba(59, 130, 246, 0.5)',
                color: '#93c5fd',
              }}
            >
              {project.category}
            </div>
            <div className="absolute top-4 right-4 text-white/50 text-sm px-3 py-1">{project.year}</div>
          </div>

          {/* Content */}
          <div className="p-7">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-3" />
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-5">{project.description}</p>
            
            <div className="flex flex-wrap gap-2.5">
              {project.technologies?.slice(0, 4).map((tech: string, i: number) => (
                <span 
                  key={i} 
                  className="px-3.5 py-1.5 text-xs rounded-lg"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <section 
      id="projects" 
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
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
            Portfolio
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Featured </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Full-stack applications & AI-powered solutions showcasing real-world impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.portfolio.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>
    </section>
  );
}
