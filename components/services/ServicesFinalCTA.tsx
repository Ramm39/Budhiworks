"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const easeSmooth = [0.25, 0.1, 0.25, 1];

export function ServicesFinalCTA() {
  return (
    <section id="contact" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeSmooth }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance relative leading-tight tracking-tight text-white">
            Let&apos;s build something that{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent relative">
              works for your business
              <span className="absolute inset-0 bg-gradient-to-r from-accent-blue/40 to-accent-cyan/40 blur-3xl -z-10 opacity-60" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Tell us about your idea, challenge, or system — we&apos;ll help you figure out the next step.
          </p>
          <CTAButton href="/start-conversation" />
        </motion.div>
      </div>
    </section>
  );
}
