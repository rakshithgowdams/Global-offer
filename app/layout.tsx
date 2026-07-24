import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "./components/JsonLd";
import {
  organizationSchema,
  siteUrl,
  websiteSchema,
} from "./lib/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Real Estate Automation & AI Lead Systems | MDN PropertyFlow",
    template: "%s | MDN PropertyFlow",
  },
  description:
    "Real-estate automation, AI calling agents, CRM integration, lead follow-up and conversion websites for property businesses worldwide.",
  applicationName: "MDN PropertyFlow",
  authors: [{ name: "MyDesignNexus", url: "https://www.mydesignnexus.in/" }],
  creator: "MyDesignNexus",
  publisher: "MyDesignNexus",
  category: "Real Estate Technology",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Real Estate Automation & AI Lead Systems",
    description:
      "One connected AI lead-to-close system for calls, WhatsApp, web, CRM and follow-up—built for modern property teams.",
    url: siteUrl,
    type: "website",
    locale: "en",
    siteName: "MDN PropertyFlow",
    images: [
      {
        url: "/og-propertyflow.png",
        width: 1200,
        height: 630,
        alt: "MDN PropertyFlow real-estate automation and AI lead system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Automation & AI Lead Systems",
    description:
      "Connect real-estate leads, AI calling, CRM, follow-up and booking in one measurable workflow.",
    images: ["/og-propertyflow.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070706",
  colorScheme: "dark",
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
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
