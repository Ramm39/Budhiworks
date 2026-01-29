"use client";

import dynamic from "next/dynamic";
import { memo } from "react";

// Dynamic import for heavy Three.js backgrounds
const FuturisticHeroBackground = dynamic(
  () => import("@/components/ui/FuturisticHeroBackground").then(mod => ({ default: mod.FuturisticHeroBackground })),
  { ssr: false }
);

const ServicesHeroBackground = dynamic(
  () => import("@/components/ui/ServicesHeroBackground").then(mod => ({ default: mod.ServicesHeroBackground })),
  { ssr: false }
);

function PageBackgroundComponent({ variant = "home" }: { variant?: "home" | "alt" }) {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      {variant === "home" ? (
        <FuturisticHeroBackground />
      ) : (
        <ServicesHeroBackground />
      )}
    </div>
  );
}

export const PageBackground = memo(PageBackgroundComponent);
