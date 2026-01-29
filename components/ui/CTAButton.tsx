"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: (e?: React.MouseEvent | React.FormEvent) => void;
  className?: string;
  variant?: "default" | "outline";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function CTAButton({ href = "/start-conversation", onClick, className = "", variant = "default", type = "button", disabled = false }: CTAButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center
    px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5
    text-sm sm:text-base md:text-lg font-semibold
    rounded-lg sm:rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/50 focus:ring-offset-2 focus:ring-offset-black
    overflow-hidden
    touch-manipulation
    ${className}
  `;

  const defaultClasses = `
    ${baseClasses}
    bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3]
    text-white
    shadow-2xl shadow-[#22D3EE]/30
    backdrop-blur-sm
  `;

  const outlineClasses = `
    ${baseClasses}
    bg-white/10 dark:bg-dark-tile/50
    border-2 border-[#22D3EE]/40 dark:border-[#22D3EE]/40
    text-[#22D3EE]
    backdrop-blur-sm
    hover:bg-[#22D3EE]/10 dark:hover:bg-[#22D3EE]/10
    hover:border-[#22D3EE]/60 dark:hover:border-[#22D3EE]/60
  `;

  const buttonClasses = variant === "outline" ? outlineClasses : defaultClasses;

  const buttonContent = (
    <motion.div
      className={buttonClasses}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.98,
        y: 0,
        transition: { duration: 0.15 }
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] opacity-100"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear"
        }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-[2px] rounded-xl opacity-75"
        style={{
          background: "linear-gradient(135deg, #4F7DF3, #22D3EE, #4F7DF3)",
          filter: "blur(8px)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Outer glow on hover */}
      <motion.div
        className="absolute -inset-[4px] rounded-xl opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%)",
          filter: "blur(12px)",
        }}
        whileHover={{
          opacity: 1,
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      />

      {/* Animated particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/60"
          style={{
            left: `${20 + i * 15}%`,
            top: "50%",
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Button text with glow */}
      <span className="relative z-10 text-white drop-shadow-lg">
        Start a Conversation
      </span>

      {/* Arrow icon */}
      <motion.span
        className="relative z-10 ml-2 text-xl"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        →
      </motion.span>
    </motion.div>
  );

  if (onClick || type === "submit") {
    return (
      <button onClick={onClick} type={type} disabled={disabled}>
        {buttonContent}
      </button>
    );
  }

  if (href.startsWith("#") || href.startsWith("http")) {
    return (
      <a href={href}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href}>
      {buttonContent}
    </Link>
  );
}
