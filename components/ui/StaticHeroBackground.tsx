"use client";

/**
 * Static CSS-only hero background. No Three.js, no heavy JS.
 * Used when 3D is deferred or on mobile to achieve CPU idle for Lighthouse.
 */
export function StaticHeroBackground({ variant = "home" }: { variant?: "home" | "alt" }) {
  const isAlt = variant === "alt";
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1419] to-[#050810]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e]/40 via-transparent to-[#0f1419]/60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1419]/50 via-transparent to-[#1a2332]/30" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#4F7DF3]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#22D3EE]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      {isAlt && (
        <>
          <div className="absolute top-1/4 right-1/4 w-[900px] h-[900px] bg-[#22D3EE]/12 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-[#4F7DF3]/12 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1.2s", animationDuration: "10s" }} />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 1200px 900px at center, transparent 60%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />
    </div>
  );
}
