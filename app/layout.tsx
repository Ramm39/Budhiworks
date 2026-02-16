import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Buddhiworks - Custom Software & Digital Solutions",
  description: "We design and build custom software, websites, and applications that help businesses operate better, scale confidently, and stay future-ready.",
  icons: {
    icon: "/images/logo.png?v=2",
    apple: "/images/logo.png?v=2",
  },
  other: {
    "preconnect-google-fonts": "https://fonts.googleapis.com",
    "preconnect-google-fonts-2": "https://fonts.gstatic.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable}`}>
        <ThemeProvider>
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
