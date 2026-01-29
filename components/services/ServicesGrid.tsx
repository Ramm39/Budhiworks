"use client";

import { motion } from "framer-motion";
import { StaticTile } from "@/components/ui/StaticTile";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software designed around your business workflows.",
    icon: "💻",
  },
  {
    title: "Website Development",
    description: "Fast, responsive, and reliable websites built for clarity and performance.",
    icon: "🌐",
  },
  {
    title: "Web & Application Development",
    description: "Scalable applications that help teams manage operations and data.",
    icon: "⚡",
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive design that makes complex systems simple.",
    icon: "🎨",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/80 dark:bg-dark-base/80 backdrop-blur-sm">
      {/* LAYER 1: Soft Gradient Beams - Vertical with opacity wave */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* LAYER 2: Ambient Glow Fog around section */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* LAYER 3: Parallax Light Streaks - Horizontal */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.12), rgba(34, 211, 238, 0.08), transparent)",
          filter: "blur(45px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  y: -6,
                  rotateX: 1,
                  rotateY: -1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <StaticTile className="p-8 md:p-10 h-full group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Enhanced glow on hover */}
                  <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/25 via-accent-cyan/20 to-transparent blur-xl" />
                  </div>
                </StaticTile>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
