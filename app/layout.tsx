import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MDN PropertyFlow | AI Lead-to-Close Systems for Real Estate",
    template: "%s | MDN PropertyFlow",
  },
  description:
    "AI calling agents, real-estate websites, CRM integration, automation and custom software for brokerages, property teams and developers.",
  keywords: [
    "real estate automation",
    "real estate AI calling agent",
    "brokerage CRM integration",
    "property lead automation",
    "real estate website development",
  ],
  other: {
    "codex-preview": "development",
  },
  openGraph: {
    title: "Turn every property enquiry into a qualified conversation",
    description:
      "One connected AI lead-to-close system for calls, WhatsApp, web, CRM and follow-up—built for modern property teams.",
    type: "website",
    locale: "en",
    siteName: "MDN PropertyFlow",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
