"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Send, Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Contact3DElement } from "./Contact3DElement";

export function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xdkvjoje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert('Message sent successfully! I\'ll get back to you soon.');
      } else {
        throw new Error('Failed to send');
      }
    } catch { 
      alert('Failed to send message. Please try again or email me directly.'); 
    }
    finally { setIsSubmitting(false); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Phone, label: "Phone", value: "626-807-8660", href: "tel:626-807-8660" },
    { icon: MapPin, label: "Location", value: siteConfig.contact.location },
  ];

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  ].filter(link => link.href);

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden"
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

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-20" 
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Side - Form */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-5 rounded-2xl text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
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
                  className="w-full px-6 py-5 rounded-2xl text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
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
                className="w-full px-6 py-5 rounded-2xl text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
                rows={8}
                className="w-full px-6 py-5 rounded-2xl text-white placeholder-white/40 resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-6 rounded-2xl font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.15) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)',
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

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-5"
              style={{ marginTop: '30px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white/50 text-base" style={{ marginRight: '12px' }}>Connect:</span>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                  }}
                  title={social.label}
                >
                  <social.icon className="w-7 h-7 text-white/80" />
                </motion.a>
              ))}
            </motion.div>

            {/* Availability Card */}
            <motion.div 
              className="px-8 py-6 rounded-2xl"
              style={{
                marginTop: '30px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.08) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-2">
                <motion.div 
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white font-medium text-lg">Available for Opportunities</span>
              </div>
              <p className="text-white/50 text-base leading-relaxed">
                Currently open to internships, research positions, and interesting collaborative projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Element and Contact Info */}
          <motion.div 
            className="flex flex-col items-center h-full" 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            {/* 3D Element */}
            <div className="mb-8">
              <Contact3DElement size={280} />
            </div>

            {/* Contact Info Cards */}
            <div className="w-full space-y-4 mt-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-6 p-6 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    borderColor: 'rgba(59, 130, 246, 0.4)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)',
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.1) 100%)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>
    </section>
  );
}
