"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 relative ${className}`}>
      {/* Faint blue glow behind heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gradient-to-r from-accent-blue/10 via-accent-cyan/8 to-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance relative">
          {title}
          {/* Shimmering gradient line under heading */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 md:w-32 h-[1px] shimmer-line" />
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
