import { motion } from "motion/react";
import { Send, MessageSquare } from "lucide-react";

interface Contact3DElementProps {
  size?: "small" | "medium" | "large" | number;
  className?: string;
}

export function Contact3DElement({ 
  size = "large",
  className = "" 
}: Contact3DElementProps) {
  const sizeMap = {
    small: 200,
    medium: 300,
    large: 400,
  };
  
  const pixelSize = typeof size === "number" ? size : sizeMap[size];
  const iconSize = pixelSize / 5;

  // Generate random angles for particles
  const particles = [...Array(16)].map((_, i) => ({
    angle: (i * 22.5) + Math.random() * 10,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    size: 3 + Math.random() * 3,
  }));

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ 
        width: pixelSize, 
        height: pixelSize,
        perspective: "1000px",
      }}
    >
      {/* Main rotating 3D element */}
      <motion.div
        className="relative"
        style={{ 
          width: pixelSize * 0.6,
          height: pixelSize * 0.6,
          transformStyle: "preserve-3d" 
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 8, 0, -8, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Front face with Send icon */}
        <motion.div 
          className="absolute inset-0 rounded-2xl backdrop-blur-sm flex items-center justify-center"
          style={{ 
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(96, 165, 250, 0.1))",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 30px rgba(59, 130, 246, 0.1)",
          }}
        >
          <Send 
            className="text-blue-400" 
            style={{ width: iconSize, height: iconSize }}
          />
        </motion.div>
        
        {/* Back face */}
        <div 
          className="absolute inset-0 rounded-2xl backdrop-blur-sm flex items-center justify-center"
          style={{ 
            transform: "rotateY(180deg) translateZ(-4px)",
            background: "linear-gradient(135deg, rgba(147, 197, 253, 0.2), rgba(59, 130, 246, 0.1))",
            border: "1px solid rgba(147, 197, 253, 0.3)",
          }}
        >
          <MessageSquare 
            className="text-blue-300/80" 
            style={{ width: iconSize, height: iconSize }}
          />
        </div>
      </motion.div>

      {/* Central glow */}
      <div 
        className="absolute rounded-full blur-2xl pointer-events-none"
        style={{
          width: pixelSize * 0.5,
          height: pixelSize * 0.5,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)",
        }}
      />

      {/* Emitting particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: "50%",
            top: "50%",
            marginLeft: -particle.size / 2,
            marginTop: -particle.size / 2,
            background: i % 3 === 0 
              ? "rgba(59, 130, 246, 0.9)" 
              : i % 3 === 1 
                ? "rgba(147, 197, 253, 0.9)" 
                : "rgba(255, 255, 255, 0.8)",
            boxShadow: i % 3 === 0 
              ? "0 0 6px rgba(59, 130, 246, 0.8)" 
              : "0 0 6px rgba(147, 197, 253, 0.6)",
          }}
          animate={{
            x: [
              0,
              Math.cos(particle.angle * Math.PI / 180) * (pixelSize * 0.6),
            ],
            y: [
              0,
              Math.sin(particle.angle * Math.PI / 180) * (pixelSize * 0.6),
            ],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Outer ambient glow */}
      <div 
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ 
          width: pixelSize * 1.1, 
          height: pixelSize * 1.1,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
