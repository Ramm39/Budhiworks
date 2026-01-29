"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { useEffect, useState } from "react";

export function FinalCTA() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative"
          >
            {/* Smooth particles drifting upward */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    width: `${2 + Math.random() * 3}px`,
                    height: `${2 + Math.random() * 3}px`,
                    left: `${particle.x}%`,
                    bottom: '-10%',
                    background: `radial-gradient(circle, rgba(34, 211, 238, ${0.4 + Math.random() * 0.4}) 0%, transparent 70%)`,
                    boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(34, 211, 238, 0.6)`,
                  }}
                  animate={{
                    y: [-100, -window.innerHeight - 100],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Title with strong centralized glow */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 text-white leading-tight relative px-2">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block mb-2 sm:mb-3"
              >
                Let&apos;s build something that
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent relative"
              >
                works for your business
                {/* Strong animated glow */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/70 to-[#22D3EE]/70 blur-3xl opacity-70 -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
            >
              Tell us about your idea, challenge, or system — we&apos;ll help you figure out the next step.
            </motion.p>

            {/* CTA Button with bright spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
              className="flex justify-center relative"
            >
              {/* Bright spotlight glow on button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[#22D3EE]/40 rounded-full blur-3xl" />
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-[#4F7DF3]/30 rounded-full blur-3xl" />
              </motion.div>
              <div className="relative z-10">
                <CTAButton href="/start-conversation" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
