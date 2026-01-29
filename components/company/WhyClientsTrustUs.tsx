"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const trustSignals = [
  {
    title: "Focus on Long-term Partnerships",
    description: "We're not here for quick projects. We build relationships and software that grows with your business over years, not months.",
    icon: "🤝",
  },
  {
    title: "Outcome-driven Delivery",
    description: "We measure success by the impact on your business—reduced costs, improved efficiency, enabled growth—not just by completing tasks.",
    icon: "🎯",
  },
  {
    title: "Technical Accountability",
    description: "We take responsibility for the code we write. If something breaks or needs improvement, we fix it. No excuses, no blame-shifting.",
    icon: "✅",
  },
  {
    title: "Post-launch Support",
    description: "Launch is just the beginning. We provide ongoing maintenance, monitoring, and improvements to keep your systems running smoothly.",
    icon: "🔄",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear estimates, explain costs, and work within agreed budgets.",
    icon: "💰",
  },
];

export function WhyClientsTrustUs() {
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
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            <span className="text-[#22D3EE] text-xs tracking-widest font-medium">WHY CLIENTS TRUST US</span>
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 relative">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: easeSmooth }}
              className="relative z-10 block mb-2"
            >
              BUILDING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25, ease: easeSmooth }}
              className="relative z-10 block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
            >
              TRUST
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {trustSignals.map((signal, index) => (
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
                  <div className="text-4xl flex-shrink-0">{signal.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-[#22D3EE] transition-colors duration-500">
                      {signal.title}
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {signal.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
