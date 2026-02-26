"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminKeyProvider, useAdminKey } from "./context/AdminKeyContext";

function AdminKeyGate({ children }: { children: React.ReactNode }) {
  const { adminKey, setAdminKey } = useAdminKey();
  const [input, setInput] = useState("");
  const [requireAuth, setRequireAuth] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/admin/require-auth")
      .then((r) => r.json())
      .then((data) => setRequireAuth(data.require === true))
      .catch(() => setRequireAuth(false));
  }, []);

  // Still loading
  if (requireAuth === null) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <p className="text-gray-500 dark:text-gray-400">Loading…</p>
      </div>
    );
  }

  // No secret configured: go straight to panel
  if (!requireAuth) {
    return <>{children}</>;
  }

  // Secret configured: show key form until they enter it
  if (adminKey === null) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Admin key
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Enter the admin key (same as BLOG_ADMIN_SECRET in your environment).
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setAdminKey(input.trim());
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Admin key"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400"
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-accent-blue dark:bg-accent-cyan text-white font-medium hover:opacity-90"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

function AdminNav() {
  const pathname = usePathname();
  const { clearKey } = useAdminKey();
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link
            href="/admin"
            className={`text-sm font-medium ${pathname === "/admin" ? "text-accent-blue dark:text-accent-cyan" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/blog"
            className={`text-sm font-medium ${pathname?.startsWith("/admin/blog") ? "text-accent-blue dark:text-accent-cyan" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
          >
            Blog
          </Link>
          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            View blog →
          </Link>
        </nav>
        <button
          type="button"
          onClick={clearKey}
          className="text-xs text-gray-500 hover:text-red-500"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminKeyProvider>
      <AdminKeyGate>
        <AdminNav />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">{children}</div>
      </AdminKeyGate>
    </AdminKeyProvider>
  );
}
