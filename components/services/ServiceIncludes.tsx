"use client";

import { motion } from "framer-motion";

interface ServiceIncludesProps {
  items: string[];
}

export function ServiceIncludes({ items }: ServiceIncludesProps) {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* LAYER 1: Soft Gradient Beams */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* LAYER 2: Ambient Glow Fog */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
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
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center leading-tight">
            What This Service Includes
          </h2>
          <ul className="space-y-5">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-blue dark:bg-accent-cyan mt-2.5" />
                <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
