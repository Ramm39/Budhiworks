"use client";

export function BlurredSections({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 w-full bg-black/15 dark:bg-black/20">
      {children}
    </div>
  );
}
