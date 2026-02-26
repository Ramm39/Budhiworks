/** Shared Framer Motion config for viewport and transitions. */
export const defaultViewport = { once: true, amount: 0.12 } as const;

export const staggerTransition = {
  duration: 0.4,
  ease: "easeOut" as const,
};
