"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const principles = [
  {
    number: "01",
    title: "Build with Purpose",
    explanation: "Every feature and decision should solve a real problem or create real value. We don't build for the sake of building.",
    icon: "🎯",
    color: "from-[#4F7DF3] to-[#4F7DF3]/60",
  },
  {
    number: "02",
    title: "Simplicity over Complexity",
    explanation: "The best solutions are often the simplest ones. We avoid over-engineering and choose clarity over cleverness.",
    icon: "✨",
    color: "from-[#22D3EE] to-[#22D3EE]/60",
  },
  {
    number: "03",
    title: "Long-term Thinking",
    explanation: "We build software that lasts. This means writing maintainable code, choosing the right architecture, and planning for growth.",
    icon: "🔮",
    color: "from-[#4F7DF3] to-[#22D3EE]",
  },
  {
    number: "04",
    title: "Reliability over Speed",
    explanation: "Fast delivery matters, but not at the cost of quality. We build systems that work reliably, even when things go wrong.",
    icon: "⚡",
    color: "from-[#22D3EE] to-[#4F7DF3]",
  },
];

export function OurPhilosophy() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Enhanced background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#4F7DF3]/10 border border-[#4F7DF3]/20 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#4F7DF3]" />
            <span className="text-[#4F7DF3] text-xs tracking-widest font-medium">OUR PHILOSOPHY</span>
            <span className="w-2 h-2 rounded-full bg-[#4F7DF3]" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 relative">
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
              THINK
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: index * 0.1, ease: easeSmooth }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#22D3EE]/30 hover:bg-white/[0.07] transition-all duration-500 ease-out overflow-hidden h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-[#22D3EE]/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[#22D3EE]/60 transition-colors duration-500">
                      <span className="text-2xl">{principle.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#22D3EE]/60 font-medium mb-2 tracking-wider">
                      PRINCIPLE {principle.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-[#22D3EE] transition-colors duration-500">
                      {principle.title}
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {principle.explanation}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${principle.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
