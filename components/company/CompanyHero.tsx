"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

export function CompanyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Strong color gradient behind headline */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none opacity-0 dark:opacity-100"
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
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight text-white drop-shadow-2xl px-2">
              Building Software{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent relative inline-block">
                the Right Way
                <span className="absolute inset-0 bg-gradient-to-r from-accent-blue/40 to-accent-cyan/40 blur-3xl -z-10" />
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: easeSmooth }}
            className="max-w-3xl px-4"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-100 text-balance leading-relaxed font-light drop-shadow-lg">
              We&apos;re a team of engineers and designers who believe in building software that solves real problems, lasts long, and grows with your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
