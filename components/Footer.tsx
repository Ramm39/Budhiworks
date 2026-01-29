"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  "Custom Software",
  "Website Development",
  "Web Applications",
  "UI/UX Design",
];

const solutions = [
  "For Growing Businesses",
  "For Startups",
  "Internal Tools",
  "Modernization",
];

function FooterComponent({ transparent }: { transparent?: boolean }) {
  return (
    <footer
      className={
        transparent
          ? "border-t border-white/10 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-transparent"
          : "border-t dark:border-dark-border border-gray-200/50 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-base"
      }
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8">
          {/* About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png?v=2"
                alt="Budhiworks"
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
                loading="lazy"
                quality={85}
              />
            </Link>
            <p className={`text-sm mb-2 ${transparent ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
              Custom software and digital solutions
            </p>
            <p className={`text-sm ${transparent ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
              built around your business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${transparent ? "text-white" : "text-gray-900 dark:text-white"}`}>
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className={`text-sm transition-colors hover:text-accent-blue dark:hover:text-accent-cyan ${transparent ? "text-gray-300 hover:text-accent-cyan" : "text-gray-600 dark:text-gray-400"}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${transparent ? "text-white" : "text-gray-900 dark:text-white"}`}>
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution}>
                  <a
                    href="#solutions"
                    className={`text-sm transition-colors hover:text-accent-blue dark:hover:text-accent-cyan ${transparent ? "text-gray-300 hover:text-accent-cyan" : "text-gray-600 dark:text-gray-400"}`}
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${transparent ? "text-white" : "text-gray-900 dark:text-white"}`}>
              Contact
            </h4>
            <ul className={`space-y-2 text-sm transition-colors ${transparent ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
              <li>
                <a
                  href="mailto:budhiworks@gmail.com"
                  className="hover:text-accent-cyan transition-colors"
                >
                  budhiworks@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919978635290"
                  className="hover:text-accent-cyan transition-colors"
                >
                  +91 99786 35290
                </a>
              </li>
              <li>
                <a
                  href="/start-conversation"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Start a Conversation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          className={
            transparent
              ? "border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
              : "border-t dark:border-dark-border border-gray-200/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
          }
        >
          <p className={`text-xs sm:text-sm text-center sm:text-left ${transparent ? "text-gray-400" : "text-gray-500 dark:text-gray-500"}`}>
            © {new Date().getFullYear()} Budhiworks. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className={`text-xs sm:text-sm transition-colors hover:text-accent-cyan touch-manipulation ${transparent ? "text-gray-400 hover:text-accent-cyan" : "text-gray-500 dark:text-gray-500 hover:text-accent-blue dark:hover:text-accent-cyan"}`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`text-xs sm:text-sm transition-colors hover:text-accent-cyan touch-manipulation ${transparent ? "text-gray-400 hover:text-accent-cyan" : "text-gray-500 dark:text-gray-500 hover:text-accent-blue dark:hover:text-accent-cyan"}`}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
