"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TileProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "solid";
}

export function Tile({ children, className = "", hover = true, variant = "default" }: TileProps) {
  return (
    <motion.div
      className={`
        relative rounded-[20px] backdrop-blur-sm
        dark:bg-[rgba(255,255,255,0.04)] dark:border dark:border-[rgba(255,255,255,0.06)]
        bg-white/80 border border-gray-200/50
        ${variant === "solid" ? "dark:bg-[rgba(255,255,255,0.05)]" : ""}
        shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_rgba(79,125,243,0.08)]
        ${className}
      `}
      whileHover={hover ? {
        y: -6,
        rotateX: 1,
        rotateY: -1,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      transition={{ duration: 0.2 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div className="group relative h-full">
        {/* Inner highlight - top-left stroke */}
        <div className="absolute top-0 left-0 w-full h-full rounded-[20px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[1px] bg-gradient-to-r from-accent-blue/40 via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 left-0 w-[1px] h-[60%] bg-gradient-to-b from-accent-blue/40 via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Outer glow on hover */}
        <div className="absolute -inset-[1px] rounded-[21px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-[21px] bg-gradient-to-br from-accent-blue/20 via-accent-cyan/15 to-transparent blur-xl" />
        </div>

        {/* Ambient shadow */}
        <div className="absolute -inset-2 rounded-[24px] bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-2xl" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
