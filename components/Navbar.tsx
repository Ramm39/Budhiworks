"use client";

import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Throttle function for scroll events
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
}

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Transform scroll position to opacity and blur values (solid bar, minimal transparency)
  const navbarOpacity = useTransform(scrollY, [0, 20], [0.94, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 20], [0, 20]);
  const navbarY = useTransform(scrollY, [0, 20], [0, -2]);
  const borderOpacity = useTransform(scrollY, [0, 20], [0.15, 0.25]);

  // Memoize nav items
  const navItems = useMemo(() => ["Services", "Solutions", "Work", "Company"], []);

  // Memoize particle shimmer positions
  const particlePositions = useMemo(
    () => Array.from({ length: 6 }, (_, i) => ({
      left: `${15 + i * 15}%`,
      top: `${20 + (i % 3) * 20}%`,
      delay: i * 0.3,
      duration: 4 + i * 0.5,
    })),
    []
  );

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > 20);
    }, 16), // ~60fps
    []
  );

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoize isActive function
  const isActive = useCallback(
    (item: string) => {
      const path = pathname?.toLowerCase() || "";
      const itemPath = item.toLowerCase();
      return path !== "/" && path.includes(itemPath);
    },
    [pathname]
  );

  return (
    <>
      {/* Ambient glow behind navbar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-16 sm:h-20 z-40 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 120% 100% at 50% 0%, 
            ${theme === "dark"
              ? "rgba(79, 125, 243, 0.08)"
              : "rgba(79, 125, 243, 0.04)"
            } 0%, 
            transparent 70%)`,
        }}
        animate={{
          opacity: scrolled ? 0.6 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Particle shimmer effect */}
      <div className="fixed top-0 left-0 right-0 h-16 sm:h-20 z-40 pointer-events-none overflow-hidden">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(79, 125, 243, 0.6), transparent)`,
              left: particle.left,
              top: particle.top,
              willChange: "transform, opacity",
            }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -10, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden"
        style={{
          y: navbarY,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {/* Solid background - high opacity so it doesn't mix with page content */}
        <motion.div
          className={`absolute inset-0 w-full backdrop-blur-md ${
            theme === "dark" ? "bg-[rgba(11,15,25,0.96)]" : "bg-[rgba(255,255,255,0.96)]"
          }`}
          style={{
            backgroundColor: theme === "dark"
              ? `rgba(11, 15, 25, ${navbarOpacity})`
              : `rgba(255, 255, 255, ${navbarOpacity})`,
            backdropFilter: `blur(${navbarBlur}px)`,
            WebkitBackdropFilter: `blur(${navbarBlur}px)`,
          }}
        />

        {/* Bottom border line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px w-full"
          style={{
            background: `linear-gradient(90deg, 
              transparent, 
              ${theme === "dark" ? "rgba(79, 125, 243, 0.3)" : "rgba(79, 125, 243, 0.2)"}, 
              transparent)`,
            opacity: borderOpacity,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full overflow-x-hidden">
          <div className="flex items-center justify-between h-16 sm:h-20 w-full overflow-x-hidden">
            {/* Logo - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="flex-shrink-0 z-10 min-w-0"
            >
              <motion.div
                className="flex items-center relative"
                whileHover="hover"
                initial="rest"
                variants={{
                  rest: {},
                  hover: {},
                }}
              >
                <Link href="/" className="flex items-center group">
                  <motion.div
                    className="relative"
                    variants={{
                      rest: {
                        x: 0,
                      },
                      hover: {
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Image
                      src="/images/logo.png?v=2"
                      alt="budhiworks"
                      width={252}
                      height={63}
                      className="h-10 w-auto sm:h-11 md:h-14 lg:h-16 object-contain transition-all duration-300"
                      priority
                    />
                  </motion.div>
                  <motion.span
                    className="ml-1 sm:ml-1.5 md:ml-2 text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-900 dark:text-white tracking-tight hidden sm:inline-block"
                    variants={{
                      rest: {
                        opacity: 0,
                        x: -10,
                      },
                      hover: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    Budhiworks
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Nav Items - Center */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-6 xl:space-x-8 2xl:space-x-10">
              {navItems.map((item, index) => {
                const href = item === "Services" ? "/services"
                  : item === "Solutions" ? "/solutions"
                    : item === "Work" ? "/work"
                      : item === "Company" ? "/company"
                        : `#${item.toLowerCase()}`;
                const Component = (item === "Services" || item === "Solutions" || item === "Work" || item === "Company")
                  ? Link
                  : "a";
                const active = isActive(item);

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <Component
                      href={href}
                      className="relative group block py-1"
                    >
                      <motion.span
                        className={`inline-block text-sm lg:text-base font-medium tracking-wider transition-all duration-300 ${active
                          ? "text-accent-blue dark:text-accent-cyan"
                          : "text-gray-600 dark:text-gray-400"
                          }`}
                        whileHover={{
                          letterSpacing: "0.06em",
                          color: theme === "dark" ? "#ffffff" : "#0f172a",
                          scale: 1.08,
                        }}
                        animate={active ? {
                          textShadow: [
                            "0 0 8px rgba(79, 125, 243, 0.3)",
                            "0 0 16px rgba(79, 125, 243, 0.6), 0 0 24px rgba(34, 211, 238, 0.4)",
                            "0 0 8px rgba(79, 125, 243, 0.3)",
                          ],
                        } : {}}
                        transition={active ? {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        } : {
                          duration: 0.3,
                        }}
                      >
                        {item}
                      </motion.span>

                      {/* Animated underline - horizontal line only */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 block h-0.5 rounded-full origin-center transition-all duration-300 ${
                          active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        } group-hover:opacity-100 group-hover:scale-x-100`}
                        style={{
                          background: theme === "dark" ? "rgba(79, 125, 243, 0.9)" : "rgba(79, 125, 243, 0.7)",
                        }}
                      />
                    </Component>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side - CTA Button */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 z-10 min-w-0 overflow-x-hidden">
              {mounted && (
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="hidden md:block"
                >
                  <motion.div
                    className="relative overflow-hidden rounded-full outline-none focus-within:outline-none"
                    style={{
                      background: theme === "dark"
                        ? "linear-gradient(135deg, rgba(79, 125, 243, 0.28) 0%, rgba(34, 211, 238, 0.22) 100%)"
                        : "linear-gradient(135deg, rgba(79, 125, 243, 0.22) 0%, rgba(34, 211, 238, 0.18) 100%)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: `1px solid ${theme === "dark" ? "rgba(79, 125, 243, 0.45)" : "rgba(79, 125, 243, 0.35)"}`,
                      boxShadow: "none",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/start-conversation"
                      className="relative block px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-2.5 text-sm md:text-base font-medium tracking-wide text-gray-900 dark:text-white transition-all duration-300 whitespace-nowrap rounded-full hover:text-gray-950 dark:hover:text-white hover:scale-[1.02] [outline:none] [&:focus]:outline-none [&:focus]:ring-0"
                      style={{ outline: "none" }}
                    >
                      Start a Conversation
                    </Link>
                  </motion.div>
                </motion.div>
              )}

              {/* Mobile/Tablet Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden ml-1 sm:ml-2 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-dark-tile transition-colors touch-manipulation"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t dark:border-dark-border border-gray-200/30 py-4 backdrop-blur-xl w-full overflow-x-hidden"
            style={{
              backgroundColor: theme === "dark"
                ? "rgba(11, 15, 25, 0.98)"
                : "rgba(255, 255, 255, 0.98)",
              maxWidth: '100%',
            }}
          >
            <div className="flex flex-col space-y-3 px-3 sm:px-4 w-full overflow-x-hidden max-w-full">
              {navItems.map((item) => {
                const href = item === "Services" ? "/services"
                  : item === "Solutions" ? "/solutions"
                    : item === "Work" ? "/work"
                      : item === "Company" ? "/company"
                        : `#${item.toLowerCase()}`;
                const Component = (item === "Services" || item === "Solutions" || item === "Work" || item === "Company")
                  ? Link
                  : "a";
                const active = isActive(item);

                return (
                  <Component
                    key={item}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-light tracking-wide py-3 px-2 transition-all duration-300 touch-manipulation w-full max-w-full overflow-x-hidden whitespace-nowrap ${active
                      ? "text-accent-blue dark:text-accent-cyan"
                      : "text-gray-600 dark:text-gray-400"
                      }`}
                    style={{
                      maxWidth: '100%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item}
                  </Component>
                );
              })}
              {mounted && (
                <motion.div
                  className="mt-2 w-full max-w-full overflow-x-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-full w-full max-w-full"
                    style={{
                      background: theme === "dark"
                        ? "linear-gradient(135deg, rgba(79, 125, 243, 0.2) 0%, rgba(34, 211, 238, 0.15) 100%)"
                        : "linear-gradient(135deg, rgba(79, 125, 243, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: `1px solid ${theme === "dark" ? "rgba(79, 125, 243, 0.3)" : "rgba(79, 125, 243, 0.2)"}`,
                      maxWidth: '100%',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/start-conversation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 sm:px-6 py-3 text-sm font-light tracking-wide text-gray-900 dark:text-white text-center transition-all duration-300 touch-manipulation w-full overflow-x-hidden whitespace-nowrap"
                      style={{
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Start a Conversation
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}

export const Navbar = memo(NavbarComponent);
