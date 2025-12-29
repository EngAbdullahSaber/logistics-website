import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesDetails from "@/components/ServicesDetails";
import ServiceSlider from "@/components/ServiceSlider";
import React from "react";
export const dynamic = "force-static";

// Generate static params for all services and locales
export function generateStaticParams() {
  const services = [
    "customs-consultancy",
    "egyptian-customs",
    "logistics",
    "customs-clearance",
    "shipping",
  ];
  const locales = ["en", "ar"];

  const params = [];
  for (const locale of locales) {
    for (const service of services) {
      params.push({ locale, id: service });
    }
  }
  return params;
}

// SEO Metadata for Services Page
export const metadata = {
  metadataBase: new URL("https://global-logiestics.com"),
  title: "Professional Logistics & Customs Services | Global Logistics",
  description:
    "Expert customs consulting, Egyptian customs services, logistics solutions, and supply chain management. 25+ years experience, 1M+ shipments handled worldwide.",
  keywords:
    "customs consulting services, Egyptian customs experts, logistics solutions, supply chain management, customs clearance, freight forwarding, international trade, Cairo logistics company",
  authors: [{ name: "Global Logistics" }],
  openGraph: {
    title: "Professional Logistics & Customs Services | Global Logistics",
    description:
      "Expert customs consulting, Egyptian customs services, logistics solutions, and supply chain management for international trade",
    url: "https://global-logiestics.com/en/services",
    siteName: "Global Logistics",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Logistics - Professional Customs & Logistics Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Logistics & Customs Services | Global Logistics",
    description:
      "Expert customs consulting and logistics solutions for international trade",
    images: ["/services-twitter-image.jpg"],
    creator: "@globallogistics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://global-logiestics.com/en/services",
    languages: {
      "en-US": "https://global-logiestics.com/en/services",
      "ar-EG": "https://global-logiestics.com/ar/services",
    },
  },
};

// Structured Data for SEO
const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Logistics and Customs Consulting",
  provider: {
    "@type": "Organization",
    name: "Global Logistics",
    description:
      "Professional customs consulting and global logistics solutions with 25+ years experience",
    url: "https://global-logiestics.com",
    logo: "https://global-logiestics.com/logo.JPEG",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cairo, Egypt",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+02-034951015",
      contactType: "customer service",
      email: "info@global-logiestics.com",
      areaServed: "Global",
      availableLanguage: ["en", "ar"],
    },
  },
  areaServed: "Global",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics and Customs Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customs Consultancy",
          description:
            "Professional customs consulting services for international trade compliance and duty optimization",
          serviceType: "Customs Consulting",
          provider: {
            "@type": "Organization",
            name: "Global Logistics",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Egyptian Customs Services",
          description:
            "Specialized services for Egyptian customs regulations, import procedures, and risk management",
          serviceType: "Customs Services",
          provider: {
            "@type": "Organization",
            name: "Global Logistics",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Logistics & Supply Chain",
          description:
            "End-to-end logistics solutions including transportation, warehousing, and supply chain optimization",
          serviceType: "Logistics Services",
          provider: {
            "@type": "Organization",
            name: "Global Logistics",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customs Clearance",
          description:
            "Professional customs clearance services for imports and exports with documentation support",
          serviceType: "Customs Clearance",
          provider: {
            "@type": "Organization",
            name: "Global Logistics",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shipping Services",
          description:
            "Comprehensive shipping solutions including air freight, ocean freight, and land transportation",
          serviceType: "Shipping Services",
          provider: {
            "@type": "Organization",
            name: "Global Logistics",
          },
        },
      },
    ],
  },
};

// Breadcrumb structured data
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://global-logiestics.com/en/home",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://global-logiestics.com/en/services",
    },
  ],
};

const ServiceDetailPage = () => {
  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Header />
      <ServiceSlider />
      <ServicesDetails />
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
