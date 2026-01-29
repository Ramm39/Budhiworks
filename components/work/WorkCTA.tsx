"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export function WorkCTA() {
  return (
    <section id="contact" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* LAYER 1: Soft Gradient Beams */}
      <motion.div
        className="absolute left-1/3 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/3 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Strong background glow or gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.12) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 100%)",
          filter: "blur(130px)",
        }}
        animate={{
          opacity: [0.12, 0.18, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* LAYER 3: Parallax Light Streaks */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.15), rgba(34, 211, 238, 0.12), transparent)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance relative leading-tight tracking-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent relative">
              impactful
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Tell us about your project or challenge—we&apos;ll help you build a solution that delivers real results.
          </p>
          
          {/* CTA Button */}
          <CTAButton href="/start-conversation" />
        </motion.div>
      </div>
    </section>
  );
}
