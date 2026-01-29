"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

export function SolutionsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
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

      {/* Parallax Light Streaks */}
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

      {/* Content Container */}
      <div className="relative z-[10] max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight text-white drop-shadow-2xl">
              Solutions That{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent relative inline-block">
                Work
                <span className="absolute inset-0 bg-gradient-to-r from-accent-blue/40 to-accent-cyan/40 blur-3xl -z-10" />
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: easeSmooth }}
            className="max-w-3xl"
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-200 dark:text-gray-100 text-balance leading-relaxed font-light drop-shadow-lg">
              We build custom software, systems, and tools that solve real business problems—engineered for reliability, designed for scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
