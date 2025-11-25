"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert('Message sent successfully!');
    } catch { 
      alert('Failed to send message.'); 
    }
    finally { setIsSubmitting(false); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: MapPin, label: "Location", value: siteConfig.contact.location },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
          linear-gradient(180deg, #0a0a0f 0%, #000000 50%, #0a0a0f 100%)
        `
      }}
    >
      {/* Floating 3D shapes */}
      <motion.div
        className="absolute top-24 right-[15%] w-20 h-20 rounded-2xl preserve-3d"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.12) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          boxShadow: '0 0 45px rgba(59, 130, 246, 0.3)',
          y: y1,
        }}
        animate={{ 
          y: [-15, 15, -15], 
          rotateY: [0, 360],
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
        }}
      />
      
      <motion.div
        className="absolute bottom-36 left-[10%] w-16 h-16 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.25) 100%)',
          boxShadow: '0 0 35px rgba(59, 130, 246, 0.4)',
          y: y2,
        }}
        animate={{ 
          y: [10, -15, 10],
          scale: [1, 1.15, 1],
          rotateZ: [0, 360],
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 14, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Orbiting ring */}
      <motion.div
        className="absolute top-1/2 left-8 w-24 h-24 rounded-full border border-blue-500/20"
        style={{ transform: 'rotateX(70deg)' }}
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

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
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
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
            Contact
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Get In </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Let's collaborate on exciting projects and build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:border-blue-500/50"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:border-blue-500/50"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
              </div>
              
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-5 py-4 rounded-xl text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:border-blue-500/50"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
                rows={6}
                className="w-full px-5 py-4 rounded-xl text-white placeholder-white/40 resize-none transition-all duration-300 focus:outline-none focus:border-blue-500/50"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-10 py-5 rounded-xl font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.15) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.25)',
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }} 
                    />
                    <span className="text-white">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6" 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            {/* Contact details cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="flex items-center gap-5 p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 0 25px rgba(59, 130, 246, 0.15)',
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.12) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                  }}
                >
                  <info.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm mb-1">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-lg font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability Card */}
            <motion.div 
              className="p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(96, 165, 250, 0.06) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white font-medium">Available for Opportunities</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Currently open to internships, research positions, and interesting collaborative projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            y: y1,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)',
            y: y2,
          }}
        />
      </div>
    </section>
  );
}
