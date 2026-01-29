"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";

function HeroComponent() {
  // Memoize features array
  const features = useMemo(
    () => [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        ),
        title: "Custom Solutions",
        description: "Tailored to your needs",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12.75 12l10.5 11.25-19.5 0z" />
          </svg>
        ),
        title: "Scalable",
        description: "Grows with your business",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "24/7 Support",
        description: "Always here to help",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        ),
        title: "Future-Ready",
        description: "Built for tomorrow",
      },
    ],
    []
  );
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-[1]" />

      {/* Content Container */}
      <div className="relative z-[10] max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-12">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight text-white drop-shadow-2xl px-2">
              Custom Software &{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent relative inline-block">
                Digital Solutions
                {/* Enhanced glow behind gradient text */}
                <span className="absolute inset-0 bg-gradient-to-r from-accent-blue/40 to-accent-cyan/40 blur-3xl -z-10" />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl px-4"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-100 text-balance leading-relaxed font-light drop-shadow-lg">
              We design and build custom software, websites, and applications that help businesses operate better, scale confidently, and stay future-ready.
            </p>
          </motion.div>

          {/* Quick Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pt-6 sm:pt-8 md:pt-12 w-full px-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="group relative"
                >
                  <motion.div
                    className="relative flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-gray-500/10 dark:border-gray-400/10 transition-all duration-300"
                    style={{ willChange: "transform" }}
                    whileHover={{
                      y: -4,
                      borderColor: "rgba(79, 125, 243, 0.4)",
                      backgroundColor: "rgba(79, 125, 243, 0.05)",
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, 
                          rgba(79, 125, 243, 0.15), 
                          transparent 70%)`,
                        filter: "blur(12px)",
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative z-10 text-accent-blue dark:text-accent-cyan transition-colors duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6">{feature.icon}</div>
                      {/* Icon glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle, 
                            rgba(79, 125, 243, 0.4), 
                            transparent 70%)`,
                          filter: "blur(8px)",
                        }}
                      />
                    </motion.div>

                    {/* Text */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-xs sm:text-sm md:text-base font-medium text-white mb-0.5 sm:mb-1 transition-colors duration-300 group-hover:text-accent-blue dark:group-hover:text-accent-cyan">
                        {feature.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 dark:text-gray-400 font-light leading-tight sm:leading-normal">
                        {feature.description}
                      </p>
                    </div>

                    {/* Animated border gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, 
                          rgba(79, 125, 243, 0.2), 
                          rgba(34, 211, 238, 0.2))`,
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        padding: "1px",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
