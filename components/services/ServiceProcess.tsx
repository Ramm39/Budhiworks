"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* LAYER 1: Soft Gradient Beams */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/4 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* LAYER 2: Ambient Glow Fog */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(95px)",
        }}
      />

      {/* LAYER 3: Parallax Light Streaks */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.12), rgba(34, 211, 238, 0.08), transparent)",
          filter: "blur(45px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 dark:text-white text-center leading-tight"
        >
          Our Process
        </motion.h2>

        <div className="space-y-0 relative">
          {/* Connecting gradient line - animated flow */}
          <motion.div
            className="hidden lg:block absolute top-0 left-0 right-0 h-[1px]"
            style={{
              top: "50%",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-accent-blue/40 via-accent-cyan/40 to-transparent"
              style={{
                backgroundSize: "200% 100%",
                width: "100%",
              }}
              animate={{
                backgroundPosition: ["-200% 0", "200% 0"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative py-8 md:py-10 border-b border-gray-200/50 dark:border-gray-800/30 last:border-0"
            >
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 relative">
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-gray-300 dark:text-gray-700 font-mono"
                  >
                    {step.number}
                  </motion.div>
                  {/* Glow effect on reveal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: [0, 0.4, 0], scale: [0.8, 1.2, 0.8] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    className="absolute inset-0 text-3xl md:text-4xl font-bold text-accent-blue/40 dark:text-accent-cyan/40 font-mono blur-md pointer-events-none"
                  >
                    {step.number}
                  </motion.div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
