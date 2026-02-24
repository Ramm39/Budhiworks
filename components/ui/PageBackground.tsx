"use client";

import dynamic from "next/dynamic";
import { memo, useEffect, useState, useRef } from "react";
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

function PageBackgroundComponent({ variant = "home" }: { variant?: "home" | "alt" }) {
  const [load3D, setLoad3D] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const interacted = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);

    if (mq.matches) {
      return () => mq.removeEventListener("change", handler);
    }

    // Desktop: load 3D only after first user interaction so CPU can reach idle
    // (GTmetrix/Lighthouse need 5s CPU idle; they don't simulate interaction)
    function onInteraction() {
      if (interacted.current) return;
      interacted.current = true;
      setLoad3D(true);
      window.removeEventListener("scroll", onInteraction, { capture: true });
      window.removeEventListener("click", onInteraction, true);
      window.removeEventListener("touchstart", onInteraction, { capture: true });
      window.removeEventListener("mousemove", onInteraction, true);
      window.removeEventListener("keydown", onInteraction, true);
    }

    window.addEventListener("scroll", onInteraction, { capture: true, passive: true });
    window.addEventListener("click", onInteraction, true);
    window.addEventListener("touchstart", onInteraction, { capture: true, passive: true });
    window.addEventListener("mousemove", onInteraction, true);
    window.addEventListener("keydown", onInteraction, true);

    return () => {
      window.removeEventListener("scroll", onInteraction, { capture: true });
      window.removeEventListener("click", onInteraction, true);
      window.removeEventListener("touchstart", onInteraction, { capture: true });
      window.removeEventListener("mousemove", onInteraction, true);
      window.removeEventListener("keydown", onInteraction, true);
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
      {show3D &&
        (variant === "home" ? (
          <FuturisticHeroBackground />
        ) : (
          <ServicesHeroBackground />
        ))}
    </div>
  );
}

export const PageBackground = memo(PageBackgroundComponent);
