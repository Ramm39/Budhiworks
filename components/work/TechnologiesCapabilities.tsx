"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    accentColor: "from-accent-blue to-blue-400",
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    accentColor: "from-accent-cyan to-teal-400",
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    accentColor: "from-purple-500 to-accent-blue",
  },
  {
    category: "Cloud / DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    accentColor: "from-accent-cyan to-cyan-400",
  },
];

export function TechnologiesCapabilities() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Calm background to balance visual energy */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.03) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 dark:text-white text-center leading-tight"
        >
          Technologies & Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-2xl bg-gray-50 dark:bg-[#0A0E17] border border-gray-200/30 dark:border-gray-800/20">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-dark-base border border-gray-200/50 dark:border-gray-800/30 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
