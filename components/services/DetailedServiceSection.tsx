"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easeSmooth = [0.25, 0.1, 0.25, 1];

interface DetailedServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  index: number;
  image?: string;
}

export function DetailedServiceSection({ title, description, features, index, image }: DetailedServiceSectionProps) {
  const isEven = index % 2 === 0;
  const slideDirection = isEven ? -24 : 24;

  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeSmooth }}
          className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: slideDirection }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.08, ease: easeSmooth }}
            className={isEven ? "" : "lg:order-2"}
          >
            <div className="text-sm font-mono text-accent-blue dark:text-accent-cyan mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: idx * 0.06, ease: easeSmooth }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-blue dark:bg-accent-cyan mt-2.5" />
                  <span className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Section with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.12, ease: easeSmooth }}
            className={isEven ? "" : "lg:order-1"}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-white/5 backdrop-blur-sm">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading={index < 2 ? "eager" : "lazy"}
                  quality={90}
                  priority={index === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: easeSmooth }}
                    className="text-center p-8"
                  >
                    <div className="text-6xl mb-4">💻</div>
                    <p className="text-sm text-gray-400">Service visual placeholder</p>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
