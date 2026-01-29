"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StaticTile } from "@/components/ui/StaticTile";
import { nonFeaturedProjects } from "@/data/projects";

export function MoreWork() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Reduced color intensity */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.02) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 dark:text-white leading-tight"
        >
          More Work & Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {nonFeaturedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <StaticTile className="p-6 md:p-8 h-full flex flex-col">
                <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-semibold rounded-full bg-accent-blue/20 dark:bg-accent-cyan/20 text-accent-blue dark:text-accent-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-blue dark:text-accent-cyan hover:underline font-medium"
                    >
                      Live →
                    </Link>
                  )}
                </div>
              </StaticTile>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
