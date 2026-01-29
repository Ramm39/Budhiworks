"use client";

export function BlurredSections({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 w-full backdrop-blur-md bg-black/10">
      {children}
    </div>
  );
}
