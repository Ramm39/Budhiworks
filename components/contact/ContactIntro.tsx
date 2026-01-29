"use client";

import { motion } from "framer-motion";

export function ContactIntro() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Calm background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.03) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This isn&apos;t a sales pitch. We&apos;re interested in understanding your situation, discussing possibilities, and exploring whether we can help. Whether you have a clear vision or just a challenge you&apos;re trying to solve, we&apos;d like to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
