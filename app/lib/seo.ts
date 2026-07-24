import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://global-offer.vercel.app");

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export const brand = {
  name: "MyDesignNexus",
  product: "MDN PropertyFlow",
  email: "contact@mydesignnexus.in",
  telephone: "+91 886 1241 984",
  calendar: "https://cal.com/rakshith-rfmgzr/real-estate-growth-automation",
  whatsapp:
    "https://wa.me/918861241984?text=Hello%20MyDesignNexus%2C%20I%20would%20like%20to%20discuss%20a%20real-estate%20automation%20system.",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl("/og-propertyflow.png");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: brand.product,
      type,
      locale: "en",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "MDN PropertyFlow real-estate automation and AI lead system",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: brand.name,
  alternateName: brand.product,
  url: "https://www.mydesignnexus.in/",
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/icon-512.png"),
    width: 512,
    height: 512,
  },
  image: absoluteUrl("/og-propertyflow.png"),
  email: brand.email,
  telephone: "+918861241984",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "1st Floor, Gunde Gowdana Koppalu Circle, Ring Road",
    addressLocality: "Hassan",
    postalCode: "573201",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  sameAs: ["https://www.instagram.com/mydesignnexus/"],
  knowsAbout: [
    "Real estate automation",
    "AI calling agents for real estate",
    "Real estate lead qualification",
    "Real estate CRM automation and integration",
    "Real estate website development",
    "Property lead follow-up automation",
    "Meta Ads lead integration",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: brand.email,
    telephone: "+918861241984",
    availableLanguage: ["English", "Kannada", "Hindi"],
    areaServed: "Worldwide",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: absoluteUrl("/"),
  name: brand.product,
  alternateName: "MyDesignNexus PropertyFlow",
  description:
    "Real-estate automation, AI calling, CRM integration and conversion website services.",
  publisher: { "@id": organizationId },
  inLanguage: "en",
};
