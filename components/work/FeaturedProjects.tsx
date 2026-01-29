"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto space-y-0">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 md:mb-16"
            >
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
                {/* Image Section */}
                <div className={`relative h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden ${!isEven ? "md:order-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={90}
                  />
                </div>

                {/* Content Section */}
                <div className={`${!isEven ? "md:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-blue/20 dark:bg-accent-cyan/20 text-accent-blue dark:text-accent-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="mr-3 mt-1 text-accent-blue dark:text-accent-cyan flex-shrink-0">✓</span>
                        <span className="text-base text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-accent-blue/10 dark:bg-accent-cyan/10 hover:bg-accent-blue/20 dark:hover:bg-accent-cyan/20 text-accent-blue dark:text-accent-cyan font-medium transition-colors"
                      >
                        View Live Site →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
