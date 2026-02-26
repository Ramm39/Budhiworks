"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

export function BlogHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 125, 243, 0.15) 0%, rgba(34, 211, 238, 0.12) 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{ opacity: [0.15, 0.2, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-[10] max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeSmooth }}
            className="space-y-3"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-balance leading-tight text-gray-900 dark:text-white px-2">
              Insights &{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: easeSmooth }}
            className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Thoughts on software, design, and building products that last.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
