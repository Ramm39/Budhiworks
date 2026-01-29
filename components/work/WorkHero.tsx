"use client";

import { motion } from "framer-motion";

export function WorkHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Strong color gradient behind headline */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.15) 0%, rgba(34, 211, 238, 0.12) 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          opacity: [0.15, 0.2, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional accent glows */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* LAYER 3: Parallax Light Streaks */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.2), rgba(34, 211, 238, 0.15), transparent)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight tracking-tight">
            Real{" "}
            <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Projects
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan bg-clip-text text-transparent">
              Real Results
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Custom software, systems, and applications that solve problems and deliver measurable impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
