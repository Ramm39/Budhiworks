"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.25, 0.1, 0.25, 1];

const problems = [
  {
    problem: "Manual processes slowing down operations and increasing errors",
    icon: "⚙️",
    color: "from-[#4F7DF3]",
  },
  {
    problem: "Legacy systems that can't scale or integrate with modern tools",
    icon: "🔧",
    color: "from-[#22D3EE]",
  },
  {
    problem: "Disconnected data and workflows creating bottlenecks",
    icon: "🔗",
    color: "from-[#4F7DF3]",
  },
  {
    problem: "Lack of visibility into operations and decision-making",
    icon: "👁️",
    color: "from-[#22D3EE]",
  },
  {
    problem: "Technical debt limiting growth and innovation",
    icon: "📊",
    color: "from-[#4F7DF3]",
  },
  {
    problem: "Teams spending too much time on repetitive tasks instead of strategic work",
    icon: "⏱️",
    color: "from-[#22D3EE]",
  },
];

export function ProblemsWeSolve() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeSmooth }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Challenges We{" "}
            <span className="bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent">
              Tackle
            </span>
          </h2>
        </motion.div>

        {/* Vertical Timeline Style */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4F7DF3]/30 via-[#22D3EE]/30 to-[#4F7DF3]/30" />
          
          <div className="space-y-8">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-10 top-4 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} to-transparent border-2 border-white/20 shadow-lg`}>
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} to-transparent`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </div>

                {/* Content card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[#22D3EE]/40 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed flex-1">
                      {item.problem}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
