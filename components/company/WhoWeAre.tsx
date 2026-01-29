"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const highlights = [
  {
    icon: "🎯",
    title: "Engineers First",
    description: "We care about code quality, system architecture, and maintainability. Every line of code is written with intention.",
  },
  {
    icon: "💼",
    title: "Business-Minded",
    description: "We care about outcomes, not just technology. Your success is our success, and we build solutions that drive real value.",
  },
  {
    icon: "🚀",
    title: "Long-term Focus",
    description: "We build software that lasts. Instead of rushing to launch, we focus on understanding your business and building the right solution.",
  },
];

export function WhoWeAre() {
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
            <span className="text-[#22D3EE] text-xs tracking-widest font-medium">WHO WE ARE</span>
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
              ABOUT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25, ease: easeSmooth }}
              className="relative z-10 block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
            >
              BUDHIWORKS
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-200 dark:text-gray-100 leading-relaxed text-center">
            <p>
              Budhiworks is a software development company that builds custom applications, systems, and tools for businesses. We work with growing companies, startups, and teams who need reliable software that scales.
            </p>
            <p>
              We think about software differently. Instead of rushing to launch or adding unnecessary features, we focus on understanding your business, building the right solution, and making sure it works well for the long term.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
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
                <div className="text-5xl mb-6">{highlight.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-[#22D3EE] transition-colors duration-500">
                  {highlight.title}
                </h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {highlight.description}
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
