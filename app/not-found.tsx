import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0a0e1a] px-4">
      <h1 className="text-2xl font-semibold text-white mb-2">404</h1>
      <p className="text-white/70 mb-6">This page could not be found.</p>
      <Link
        href="/"
        className="text-[#4F7DF3] hover:underline font-medium"
      >
        Return home
      </Link>
    </main>
  );
}
