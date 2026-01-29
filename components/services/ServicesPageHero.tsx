"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

export function ServicesPageHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Content Container */}
      <div className="relative z-[10] max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight text-white drop-shadow-2xl px-2">
              Our{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent relative inline-block">
                Services
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 dark:text-gray-100 text-balance leading-relaxed font-light drop-shadow-lg">
              Custom software, websites, and applications built to help your business operate better and scale confidently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
