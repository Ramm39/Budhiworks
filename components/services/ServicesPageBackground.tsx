"use client";

import { ServicesHeroBackground } from "@/components/ui/ServicesHeroBackground";

export function ServicesPageBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      <ServicesHeroBackground />
    </div>
  );
}
