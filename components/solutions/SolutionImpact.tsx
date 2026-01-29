"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const impacts = [
  {
    keyword: "Reduce",
    statement: "operational overhead and manual work",
    stat: "85%",
    statLabel: "reduction in manual tasks",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
  },
  {
    keyword: "Improve",
    statement: "system reliability and uptime",
    stat: "99.9%",
    statLabel: "uptime achieved",
    gradient: "from-[#22D3EE] to-[#4F7DF3]",
  },
  {
    keyword: "Enable",
    statement: "faster decision-making with real-time data",
    stat: "3x",
    statLabel: "faster decisions",
    gradient: "from-[#4F7DF3] to-[#22D3EE]",
  },
  {
    keyword: "Support",
    statement: "scalable growth without technical constraints",
    stat: "300%",
    statLabel: "capacity increase",
    gradient: "from-[#22D3EE] to-[#4F7DF3]",
  },
];

export function SolutionImpact() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real{" "}
            <span className="bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent">
              Results
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${impact.gradient} p-[2px] rounded-2xl overflow-hidden`}>
                <div className="bg-[#0A0E17] rounded-2xl p-8 h-full">
                  {/* Large Stat Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {impact.stat}
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.25 }}
                    className="text-sm text-gray-400 mb-6"
                  >
                    {impact.statLabel}
                  </motion.p>

                  {/* Keyword and Statement */}
                  <div className="space-y-2">
                    <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent`}>
                      {impact.keyword}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {impact.statement}
                    </p>
                  </div>

                  {/* Animated progress bar */}
                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${impact.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                  />
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
