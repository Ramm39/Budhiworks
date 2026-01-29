"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Business-first thinking",
    icon: "🎯",
  },
  {
    title: "Clear communication",
    icon: "💬",
  },
  {
    title: "Built to scale",
    icon: "📈",
  },
  {
    title: "Support beyond delivery",
    icon: "🤝",
  },
];

export function WhyChooseUsStrip() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-dark-base border-y border-gray-200/50 dark:border-gray-800/30">
      {/* LAYER 1: Soft Gradient Beams - Vertical with opacity wave */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.02, 0.07, 0.02],
        }}
        transition={{
          duration: 17,
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
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* LAYER 2: Ambient Glow Fog around section */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(85px)",
        }}
      />

      {/* LAYER 3: Parallax Light Streaks - Horizontal */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.1), rgba(34, 211, 238, 0.08), transparent)",
          filter: "blur(40px)",
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0, y: -10 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="text-5xl mb-6"
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-tight"
              >
                {feature.title}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
