import { motion } from "motion/react";
import { Send, MessageSquare, Mail, Phone, AtSign } from "lucide-react";

/**
 * Standalone 3D Contact Element
 * 
 * A luxurious 3D animated element with:
 * - Spinning envelope/message structure with paper airplane (Send icon)
 * - Messaging icon (MessageSquare) on the back
 * - Orbiting communication icons (Mail, Phone, MessageSquare, AtSign)
 * - Particle effects and energy field
 * - Metallic gold and white accents
 */

interface Contact3DElementProps {
  size?: "small" | "medium" | "large" | number;
  className?: string;
}

export function Contact3DElement({ 
  size = "large",
  className = "" 
}: Contact3DElementProps) {
  // Convert size to pixels
  const sizeMap = {
    small: 200,
    medium: 300,
    large: 400,
  };
  
  const pixelSize = typeof size === "number" ? size : sizeMap[size];
  const iconSize = pixelSize / 5;
  const orbitIconSize = pixelSize / 8;

  const orbitIcons = [Mail, Phone, MessageSquare, AtSign];

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ 
        width: pixelSize, 
        height: pixelSize,
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Message envelope structure */}
        <motion.div
          className="absolute inset-8"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Front face with paper airplane */}
          <div 
            className="absolute inset-0 rounded-3xl backdrop-blur-sm flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Send 
              className="text-white/60" 
              style={{ width: iconSize, height: iconSize }}
            />
          </div>
          
          {/* Back face with messaging icon */}
          <div 
            className="absolute inset-0 rounded-3xl backdrop-blur-sm flex items-center justify-center"
            style={{ 
              transform: "rotateY(180deg) translateZ(-2px)",
              background: "linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.05))",
              border: "1px solid rgba(255, 215, 0, 0.2)",
            }}
          >
            <MessageSquare 
              className="text-[#ffd700]/60" 
              style={{ width: iconSize, height: iconSize }}
            />
          </div>
        </motion.div>

        {/* Orbiting communication symbols */}
        {orbitIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute rounded-xl flex items-center justify-center"
            style={{
              width: orbitIconSize * 1.5,
              height: orbitIconSize * 1.5,
              backgroundColor: i % 2 === 0 ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 215, 0, 0.08)",
              border: `1px solid ${i % 2 === 0 ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 215, 0, 0.15)"}`,
              left: "50%",
              top: "50%",
              marginLeft: -(orbitIconSize * 1.5) / 2,
              marginTop: -(orbitIconSize * 1.5) / 2,
              transformOrigin: `${(pixelSize / 3) + i * (pixelSize / 13)}px center`,
            }}
            animate={{
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon 
              className="w-full h-full p-2"
              style={{ color: i % 2 === 0 ? "#ffffff" : "#ffd700" }}
            />
          </motion.div>
        ))}

        {/* Central glow */}
        <div 
          className="absolute inset-16 rounded-full blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 215, 0, 0.1), transparent)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Surrounding energy field */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ 
            width: pixelSize * 1.2, 
            height: pixelSize * 1.2,
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent)",
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 rounded-full blur-2xl"
          style={{ 
            width: pixelSize / 3, 
            height: pixelSize / 3,
            background: "radial-gradient(circle, rgba(255, 215, 0, 0.1), transparent)",
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Particle effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: pixelSize / 50,
            height: pixelSize / 50,
            left: `${50 + Math.cos(i * 18 * Math.PI / 180) * 40}%`,
            top: `${50 + Math.sin(i * 18 * Math.PI / 180) * 40}%`,
            background: i % 3 === 0 ? 
              "linear-gradient(45deg, #ffffff, #e5e4e2)" :
              i % 3 === 1 ?
              "linear-gradient(45deg, #c0c0c0, #a8a8a8)" :
              "linear-gradient(45deg, #ffd700, #ffed4e)",
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 2, 1],
            x: [0, Math.cos(i * 18 * Math.PI / 180) * 20, 0],
            y: [0, Math.sin(i * 18 * Math.PI / 180) * 20, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

