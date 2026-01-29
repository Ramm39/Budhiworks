"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the challenge",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect the solution",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop and iterate",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Launch and support",
  },
];

export function ProcessHighlight() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Diagonal gradient flow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(79, 125, 243, 0.05) 0%, transparent 50%, rgba(34, 211, 238, 0.05) 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Color connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[2px] z-0">
                  <div
                    className="h-full w-full"
                    style={{
                      background: "linear-gradient(to right, rgba(79, 125, 243, 0.3), rgba(34, 211, 238, 0.3))",
                    }}
                  />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue dark:text-accent-cyan font-mono mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
