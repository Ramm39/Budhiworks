"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We dive deep into understanding your business needs, goals, and challenges.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We create a comprehensive roadmap tailored to your specific requirements.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "We build your solution with iterative development and thorough testing.",
    icon: "🔨",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "We launch your system and provide continuous support and optimization.",
    icon: "🚀",
  },
];

export function ServicesProcess() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: easeSmooth }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-full mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
              <span className="text-[#22D3EE] text-xs tracking-widest font-medium">OUR PROCESS</span>
              <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 relative">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15, ease: easeSmooth }}
                className="relative z-10 block mb-2"
              >
                HOW WE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.25, ease: easeSmooth }}
                className="relative z-10 block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
              >
                DELIVER
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <motion.div
              className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22D3EE]/40 via-[#4F7DF3]/40 to-[#22D3EE]/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: easeSmooth }}
            />
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.08, ease: easeSmooth }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#22D3EE]/30 hover:bg-white/[0.07] transition-all duration-500 ease-out overflow-hidden h-full">
                  <div className="relative flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-[#22D3EE]/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[#22D3EE]/60 transition-colors duration-500">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#22D3EE]/60 font-medium mb-4 tracking-wider text-center">
                    STEP {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-[#22D3EE] transition-colors duration-500 text-center">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center">
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
