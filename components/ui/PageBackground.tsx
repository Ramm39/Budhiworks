"use client";

import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";
import { StaticHeroBackground } from "./StaticHeroBackground";

const FuturisticHeroBackground = dynamic(
  () => import("@/components/ui/FuturisticHeroBackground").then((mod) => ({ default: mod.FuturisticHeroBackground })),
  { ssr: false }
);

const ServicesHeroBackground = dynamic(
  () => import("@/components/ui/ServicesHeroBackground").then((mod) => ({ default: mod.ServicesHeroBackground })),
  { ssr: false }
);

const MOBILE_BREAKPOINT = 1024;
const DEFER_3D_MS = 3200;

function PageBackgroundComponent({ variant = "home" }: { variant?: "home" | "alt" }) {
  const [load3D, setLoad3D] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);

    if (mq.matches) {
      return () => mq.removeEventListener("change", handler);
    }

    const t = setTimeout(() => setLoad3D(true), DEFER_3D_MS);
    return () => {
      clearTimeout(t);
      mq.removeEventListener("change", handler);
    };
  }, []);

  const show3D = load3D && !isMobile;

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      <StaticHeroBackground variant={variant} />
      {show3D && (
        variant === "home" ? (
          <FuturisticHeroBackground />
        ) : (
          <ServicesHeroBackground />
        )
      )}
    </div>
  );
}

export const PageBackground = memo(PageBackgroundComponent);
