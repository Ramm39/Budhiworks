"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "For Growing Businesses",
    description: "Systems that scale with your growth.",
    icon: "📈",
    highlight: "Scalable",
  },
  {
    title: "For Startups & Founders",
    description: "Turn ideas into usable products without overbuilding.",
    icon: "🚀",
    highlight: "Fast MVP",
  },
  {
    title: "Internal Tools & Automation",
    description: "Replace manual workflows with connected systems.",
    icon: "⚙️",
    highlight: "Efficient",
  },
  {
    title: "Software Modernization",
    description: "Upgrade outdated systems for speed + maintainability.",
    icon: "🔄",
    highlight: "Modern",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            {/* Large animated title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight mb-4 sm:mb-6 relative px-2">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 block mb-2"
              >
                WHO WE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
              >
                WORK WITH
              </motion.span>
              {/* Animated glow */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/40 via-[#22D3EE]/40 to-[#4F7DF3]/40 blur-3xl opacity-50 -z-0"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </h2>
          </motion.div>

          {/* Solutions List */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Floating glass card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 hover:border-[#22D3EE]/40 hover:bg-white/8 transition-all duration-500 relative overflow-hidden">
                  {/* Animated reflections */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  {/* Animated glow dots */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 sm:gap-3">
                    <motion.div 
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#22D3EE]/40 group-hover:bg-[#22D3EE] transition-colors"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#4F7DF3]/40 group-hover:bg-[#4F7DF3] transition-colors"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 relative z-10 pr-8 sm:pr-0">
                    {/* Animated icon */}
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#4F7DF3]/20 to-[#22D3EE]/20 flex items-center justify-center text-3xl sm:text-4xl backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {solution.icon}
                    </motion.div>
                    
                    <div className="flex-1 w-full">
                      {/* Title */}
                      <motion.h3 
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-[#22D3EE] transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {solution.title}
                      </motion.h3>
                      
                      {/* Description */}
                      <motion.p 
                        className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        {solution.description}
                      </motion.p>
                      
                      {/* Animated highlight badge */}
                      <motion.div 
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-lg sm:rounded-xl backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#22D3EE]"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs sm:text-sm text-[#22D3EE] font-medium">{solution.highlight}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Pulse border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#22D3EE]/20 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(34, 211, 238, 0)",
                        "0 0 20px rgba(34, 211, 238, 0.3)",
                        "0 0 0px rgba(34, 211, 238, 0)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
