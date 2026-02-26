"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "blog-admin-key";

type AdminKeyContextValue = {
  adminKey: string | null;
  setAdminKey: (key: string) => void;
  clearKey: () => void;
  getHeaders: () => Record<string, string>;
};

const AdminKeyContext = createContext<AdminKeyContextValue>({
  adminKey: null,
  setAdminKey: () => {},
  clearKey: () => {},
  getHeaders: () => ({}),
});

export function AdminKeyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [adminKey, setKeyState] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    setKeyState(stored);
    setMounted(true);
  }, []);

  const setAdminKey = useCallback((key: string) => {
    setKeyState(key);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, key);
  }, []);

  const clearKey = useCallback(() => {
    setKeyState(null);
    if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getHeaders = useCallback((): Record<string, string> => {
    if (adminKey) return { "x-admin-key": adminKey };
    return {};
  }, [adminKey]);

  return (
    <AdminKeyContext.Provider
      value={{
        adminKey: mounted ? adminKey : null,
        setAdminKey,
        clearKey,
        getHeaders,
      }}
    >
      {children}
    </AdminKeyContext.Provider>
  );
}

export function useAdminKey() {
  const ctx = useContext(AdminKeyContext);
  if (!ctx) throw new Error("useAdminKey must be used within AdminKeyProvider");
  return ctx;
}
