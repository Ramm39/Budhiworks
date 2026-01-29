"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software designed around your business workflows.",
    icon: "⚙️",
  },
  {
    title: "Website Development",
    description: "Fast, responsive, and reliable websites built for clarity and performance.",
    icon: "🌐",
  },
  {
    title: "Web & Application Development",
    description: "Scalable applications that help teams manage operations and data.",
    icon: "📱",
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive design that makes complex systems simple.",
    icon: "🎨",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-16 text-center"
          >
            {/* Large animated title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 relative px-2">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] bg-clip-text text-transparent block"
              >
                WHAT WE BUILD
              </motion.span>
              {/* Animated glow */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3]/40 via-[#22D3EE]/40 to-[#4F7DF3]/40 blur-3xl opacity-60 -z-0"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent max-w-xs mx-auto"
            />
          </motion.div>

          {/* Services List */}
          <div className="space-y-4 sm:space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Floating card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#22D3EE]/40 hover:bg-white/8 transition-all duration-500 relative overflow-hidden">
                  {/* Animated glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  
                  {/* Content */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 relative z-10">
                    {/* Animated icon */}
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#4F7DF3]/20 to-[#22D3EE]/20 flex items-center justify-center text-2xl sm:text-3xl backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <div className="flex-1 w-full">
                      {/* Animated separator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        className="h-px bg-gradient-to-r from-[#22D3EE]/40 to-transparent mb-3 sm:mb-4"
                      />
                      
                      {/* Title */}
                      <motion.h3 
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-[#22D3EE] transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      {/* Description */}
                      <motion.p 
                        className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
