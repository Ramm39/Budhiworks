"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const solutions = [
  {
    title: "Custom Software Development",
    outcome: "Tailored applications built around your specific workflows and business logic.",
    icon: "💻",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
    delay: 0,
  },
  {
    title: "Web & App Development",
    outcome: "Scalable web and mobile applications that perform reliably under load.",
    icon: "🌐",
    gradient: "from-[#22D3EE] to-[#4F7DF3]",
    delay: 0.1,
  },
  {
    title: "Internal Tools & Automation",
    outcome: "Systems that eliminate manual work and connect your existing tools.",
    icon: "⚡",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
    delay: 0.2,
  },
  {
    title: "System Modernization",
    outcome: "Upgrade legacy systems for better performance, maintainability, and integration.",
    icon: "🔄",
    gradient: "from-[#22D3EE] to-[#4F7DF3]",
    delay: 0.3,
  },
  {
    title: "UI/UX for Products",
    outcome: "Design that makes complex systems intuitive and efficient to use.",
    icon: "🎨",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
    delay: 0.4,
  },
];

export function SolutionAreas() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeSmooth }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent">
              Build
            </span>
          </h2>
        </motion.div>

        {/* Staggered Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: solution.delay, ease: easeSmooth }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`group relative ${isLarge ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Brighter gradient border - normal state */}
                <div className={`relative bg-gradient-to-br ${solution.gradient} opacity-30 group-hover:opacity-60 rounded-3xl p-[2px] transition-all duration-500 h-full shadow-lg group-hover:shadow-2xl`}>
                  <div className="relative bg-[#0A0E17] rounded-3xl p-8 h-full flex flex-col backdrop-blur-sm">
                    {/* Icon with brighter gradient background */}
                    <motion.div 
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-4xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {solution.icon}
                    </motion.div>
                    
                    {/* Brighter title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#4F7DF3] group-hover:to-[#22D3EE] transition-all duration-500">
                      {solution.title}
                    </h3>
                    
                    {/* Much brighter text */}
                    <p className="text-base md:text-lg text-gray-100 leading-relaxed flex-1 group-hover:text-white transition-colors duration-500">
                      {solution.outcome}
                    </p>

                    {/* Multiple glow effects */}
                    <motion.div 
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-2xl`}
                      animate={{
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Inner glow on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
