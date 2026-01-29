"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const audiences = [
  {
    title: "Growing Businesses",
    description: "Systems that scale with your growth without requiring constant rework.",
    icon: "📈",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
  },
  {
    title: "Startups & Founders",
    description: "Turn ideas into working products quickly, without overbuilding or technical debt.",
    icon: "🚀",
    gradient: "from-[#22D3EE] to-[#4F7DF3]",
  },
  {
    title: "Operations Teams",
    description: "Automation and tools that eliminate bottlenecks and manual work.",
    icon: "⚙️",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
  },
  {
    title: "Enterprises Modernizing Legacy Systems",
    description: "Upgrade outdated infrastructure while maintaining business continuity.",
    icon: "🏢",
    gradient: "from-[#22D3EE] to-[#4F7DF3]",
  },
];

export function WhoSolutionsFor() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeSmooth }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Solutions{" "}
            <span className="bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent">
              For You
            </span>
          </h2>
        </motion.div>

        {/* Tabbed/Accordion Style Layout */}
        <div className="space-y-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-500 overflow-hidden ${
                hoveredIndex === index ? "border-[#22D3EE]/50 bg-white/[0.08] scale-[1.02]" : ""
              }`}>
                {/* Left accent bar */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${audience.gradient} rounded-l-xl`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredIndex === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-center gap-6 pl-4">
                  {/* Icon circle */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${audience.gradient} flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110 rotate-6" : ""
                  }`}>
                    {audience.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-500 ${
                      hoveredIndex === index 
                        ? `bg-gradient-to-r ${audience.gradient} bg-clip-text text-transparent` 
                        : "text-white"
                    }`}>
                      {audience.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="text-2xl text-gray-400"
                    animate={{ x: hoveredIndex === index ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </div>

                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
