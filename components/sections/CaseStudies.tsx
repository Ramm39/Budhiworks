"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

function CaseStudiesComponent() {
  // Memoize case studies to prevent recalculation
  const caseStudies = useMemo(() => featuredProjects.slice(0, 3), []);
  return (
    <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            {/* Subtle badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 bg-[#4F7DF3]/10 border border-[#4F7DF3]/20 rounded-full backdrop-blur-md">
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4F7DF3]"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[#4F7DF3] text-[10px] sm:text-xs tracking-widest font-medium">PORTFOLIO</span>
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4F7DF3]"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Large animated title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 relative px-2">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 block mb-2"
              >
                SELECTED
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 block bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent"
              >
                WORK
              </motion.span>
              {/* Animated glow */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/40 via-[#22D3EE]/40 to-[#4F7DF3]/40 blur-3xl opacity-50 -z-0"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </h2>

            {/* Animated separator */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-[#4F7DF3]/40 via-[#22D3EE]/40 to-transparent max-w-md mx-auto"
            />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -16, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Floating card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#22D3EE]/40 hover:shadow-2xl hover:shadow-[#22D3EE]/20 transition-all duration-500 relative">
                  {/* Animated glass edges */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />

                  {/* Image */}
                  <div className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={index === 0 ? 90 : 80}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </motion.div>
                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-[#22D3EE]/20 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="p-4 sm:p-6 md:p-8 relative">
                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4 sm:mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + tagIndex * 0.1 + 0.4 }}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-lg bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 text-white relative group-hover:text-[#22D3EE] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      {project.shortDescription}
                    </motion.p>

                    {/* Links */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 1 }}
                    >
                      {project.liveUrl && (
                        <motion.div whileHover={{ x: 5 }}>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#22D3EE] hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all flex items-center gap-2 font-medium touch-manipulation"
                          >
                            <span>→</span> View Live
                          </Link>
                        </motion.div>
                      )}
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#22D3EE] hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all flex items-center gap-2 font-medium touch-manipulation"
                        >
                          <span>→</span> View Code
                        </Link>
                      </motion.div>
                    </motion.div>
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

export const CaseStudies = memo(CaseStudiesComponent);
