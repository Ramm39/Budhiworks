"use client";

import { motion } from "framer-motion";

const results = [
  {
    number: "85%",
    keyword: "Reduction",
    statement: "in manual processing time",
  },
  {
    number: "300%",
    keyword: "Increase",
    statement: "in system capacity and performance",
  },
  {
    number: "99.9%",
    keyword: "Uptime",
    statement: "for critical production systems",
  },
  {
    number: "60%",
    keyword: "Faster",
    statement: "time to market for new features",
  },
];

export function ResultsImpact() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Strong contrast background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 dark:from-gray-900/30 to-transparent" />

      {/* LAYER 2: Ambient Glow Fog */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.08) 0%, rgba(34, 211, 238, 0.06) 50%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center leading-tight"
        >
          Results & Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
                  {result.number}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {result.keyword}
                </span>
              </div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {result.statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
