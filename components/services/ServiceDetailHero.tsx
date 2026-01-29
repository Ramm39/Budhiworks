"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function ServiceDetailHero({ title, subtitle, backgroundImage }: ServiceDetailHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Optional subtle background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover opacity-[0.07]"
            priority
            quality={90}
          />
        </div>
      )}
      {/* LAYER 1: Soft Gradient Beams - Vertical with opacity wave */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-[2px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to bottom, transparent, #4F7DF3, #22D3EE, transparent)",
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 16,
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
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* LAYER 2: Ambient Glow Fog around title */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* LAYER 3: Parallax Light Streaks - Horizontal */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 125, 243, 0.15), rgba(34, 211, 238, 0.1), transparent)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 right-0 h-[1px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, rgba(34, 211, 238, 0.12), rgba(79, 125, 243, 0.08), transparent)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["200%", "-100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight tracking-tight text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
