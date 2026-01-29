"use client";

import { motion } from "framer-motion";
import { StaticTile } from "@/components/ui/StaticTile";

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
}

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function ServiceCaseStudies({ caseStudies }: ServiceCaseStudiesProps) {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* LAYER 1: Soft Gradient Beams */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/3 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* LAYER 2: Ambient Glow Fog */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* LAYER 3: Parallax Light Streaks */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.12), rgba(34, 211, 238, 0.08), transparent)",
          filter: "blur(48px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 dark:text-white text-center leading-tight"
        >
          Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: "1000px" }}
            >
              <StaticTile className="p-8 md:p-10 h-full group relative overflow-hidden">
                {/* Glow highlight on hover edges */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border border-accent-blue/30 dark:border-accent-cyan/30" />
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent-blue/20 via-accent-cyan/15 to-transparent blur-xl" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white relative z-10 leading-tight">
                  {project.title}
                </h3>
                <div className="space-y-5 relative z-10">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2.5">
                      Problem
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2.5">
                      Solution
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </StaticTile>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
