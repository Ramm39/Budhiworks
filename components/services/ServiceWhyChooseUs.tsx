"use client";

import { motion } from "framer-motion";

const whyChooseUs = [
  {
    title: "Business-first thinking",
    description: "We understand your business goals and build solutions that align with your strategy.",
    color: "accent-blue",
  },
  {
    title: "Clear communication",
    description: "Regular updates, transparent processes, and no technical jargon—just clear conversations.",
    color: "accent-cyan",
  },
  {
    title: "Built to scale",
    description: "Every solution is designed to grow with your business, not hold it back.",
    color: "accent-blue",
  },
  {
    title: "Support beyond delivery",
    description: "We're here for the long term, providing maintenance, updates, and ongoing support.",
    color: "accent-cyan",
  },
];

export function ServiceWhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          {/* Title Section - Floating in space */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center"
          >
            {/* Subtle badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#4F7DF3]/10 border border-[#4F7DF3]/20 rounded-full mb-8 backdrop-blur-md"
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#4F7DF3]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#4F7DF3] text-xs tracking-widest font-medium">WHY CHOOSE US</span>
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#4F7DF3]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
            
            {/* Large animated title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 relative">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 inline-block"
              >
                WHY
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 inline-block ml-4 md:ml-6 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
              >
                CHOOSE US
              </motion.span>
              {/* Animated glow behind title */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/40 via-[#22D3EE]/40 to-[#4F7DF3]/40 blur-3xl opacity-60 -z-0"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </h2>
            
            {/* Animated separator */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent max-w-md mx-auto"
            />
          </motion.div>

          {/* Features Grid - Floating cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Floating glass card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:border-[#22D3EE]/40 hover:bg-white/8 transition-all duration-500 overflow-hidden">
                  {/* Animated background glow */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      feature.color === "accent-blue" 
                        ? "bg-gradient-to-br from-[#4F7DF3]/20 via-transparent to-transparent"
                        : "bg-gradient-to-br from-[#22D3EE]/20 via-transparent to-transparent"
                    }`}
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title with animated underline */}
                    <div className="mb-6">
                      <motion.h3 
                        className="text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-[#22D3EE] transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>
                      {/* Animated neon underline */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        className={`h-0.5 bg-gradient-to-r ${
                          feature.color === "accent-blue" 
                            ? "from-[#4F7DF3]/80 via-[#4F7DF3]/40 to-transparent" 
                            : "from-[#22D3EE]/80 via-[#22D3EE]/40 to-transparent"
                        } rounded-full`}
                      />
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-lg md:text-xl text-gray-200 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                  
                  {/* Side accent bar */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                      feature.color === "accent-blue" ? "bg-[#4F7DF3]" : "bg-[#22D3EE]"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
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
