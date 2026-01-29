"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export function CompanyCTA() {
  return (
    <section id="contact" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Soft focused light */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.06) 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
        animate={{
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft light streak */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.08), rgba(34, 211, 238, 0.06), transparent)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 25,
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance relative leading-tight tracking-tight">
            Let&apos;s work{" "}
            <span className="text-gray-600 dark:text-gray-400">
              together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            If you&apos;re looking for a reliable partner to build software that lasts, we&apos;d like to hear from you.
          </p>
          
          {/* CTA Button */}
          <CTAButton href="/start-conversation" />
        </motion.div>
      </div>
    </section>
  );
}
