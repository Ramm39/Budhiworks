"use client";

import { motion } from "framer-motion";

export function AlternateContact() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Low emphasis background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.02) 0%, transparent 70%)",
          filter: "blur(85px)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Prefer to reach out directly?
          </p>
          <a
            href="mailto:budhiworks@gmail.com"
            className="block text-base text-gray-700 dark:text-gray-300 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors"
          >
            budhiworks@gmail.com
          </a>
          <a
            href="tel:+919978635290"
            className="block text-base text-gray-700 dark:text-gray-300 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors"
          >
            +91 99786 35290
          </a>
        </motion.div>
      </div>
    </section>
  );
}
