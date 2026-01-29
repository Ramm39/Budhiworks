export default function Loading() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-[#0a0e1a]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 rounded-full border-2 border-[#4F7DF3]/40 border-t-[#4F7DF3] animate-spin"
          aria-hidden
        />
        <span className="text-sm text-white/60">Loading...</span>
      </div>
    </main>
  );
}
