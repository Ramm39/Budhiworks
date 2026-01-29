"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand the business",
    description: "We start by learning about your goals, challenges, and vision.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Plan & design",
    description: "We create a clear roadmap and design that aligns with your needs.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Build & iterate",
    description: "We develop your solution with regular feedback and improvements.",
    icon: "🔨",
  },
  {
    number: "04",
    title: "Launch & support",
    description: "We deploy your system and provide ongoing support and maintenance.",
    icon: "🚀",
  },
];

export function Process() {
  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-10 md:mb-12 text-center"
          >
            {/* Large animated title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 relative px-2">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 block mb-2"
              >
                HOW WE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
              >
                WORK
              </motion.span>
              {/* Animated glow */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/40 via-[#22D3EE]/40 to-[#4F7DF3]/40 blur-3xl opacity-50 -z-0"
                animate={{ opacity: [0.4, 0.5, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 relative">
            {/* Animated vertical timeline line */}
            <motion.div
              className="hidden sm:block absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22D3EE]/40 via-[#4F7DF3]/40 to-[#22D3EE]/40"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                  {/* Animated timeline node */}
                  <div className="relative flex-shrink-0 w-full sm:w-auto flex sm:block items-center sm:items-start">
                    <motion.div 
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#22D3EE]/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[#22D3EE] group-hover:bg-[#22D3EE]/10 transition-all duration-300 shadow-lg shadow-black/20"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span 
                        className="text-2xl sm:text-3xl"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        whileHover={{ rotate: 0, scale: 1.2 }}
                      >
                        {step.icon}
                      </motion.span>
                    </motion.div>
                    {/* Animated pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#22D3EE] opacity-0 group-hover:opacity-50"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden sm:block absolute left-1/2 top-full w-0.5 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-[#22D3EE]/50 to-[#4F7DF3]/50 transform -translate-x-1/2"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      />
                    )}
                  </div>
                  
                  {/* Content card */}
                  <motion.div 
                    className="flex-1 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#22D3EE]/40 hover:bg-white/8 transition-all duration-500 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Step number */}
                    <motion.div 
                      className="text-[10px] sm:text-xs text-[#22D3EE]/60 font-medium mb-3 sm:mb-4 tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      STEP {step.number}
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-[#22D3EE] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                    >
                      {step.description}
                    </motion.p>
                    
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/5 via-[#22D3EE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
