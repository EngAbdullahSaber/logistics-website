// app/services/page.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesDetails from "@/components/ServicesDetails";
import ServiceSlider from "@/components/ServiceSlider";
import React from "react";

// SEO Metadata for Services Page
export const metadata = {
  title: "Professional Logistics & Customs Services | Glob Logistics",
  description:
    "Expert customs consulting, Egyptian customs services, logistics solutions, and supply chain management. 25+ years experience, 1M+ shipments handled worldwide.",
  keywords:
    "customs consulting services, Egyptian customs experts, logistics solutions, supply chain management, customs clearance, freight forwarding, international trade, Cairo logistics company",
  authors: [{ name: "Glob Logistics" }],
  openGraph: {
    title: "Professional Logistics & Customs Services | Glob Logistics",
    description:
      "Expert customs consulting, Egyptian customs services, logistics solutions, and supply chain management for international trade",
    url: "https://globlogistics.com/services",
    siteName: "Glob Logistics",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glob Logistics - Professional Customs & Logistics Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Logistics & Customs Services | Glob Logistics",
    description:
      "Expert customs consulting and logistics solutions for international trade",
    images: ["/services-twitter-image.jpg"],
    creator: "@globlogistics",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://globlogistics.com/services",
    languages: {
      "en-US": "https://globlogistics.com/en/services",
      "ar-EG": "https://globlogistics.com/ar/services",
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
    name: "Glob Logistics",
    description:
      "Professional customs consulting and global logistics solutions with 25+ years experience",
    url: "https://globlogistics.com",
    logo: "https://globlogistics.com/logo.JPEG",
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
      email: "info@customs-logistics.com",
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
            name: "Glob Logistics",
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
            name: "Glob Logistics",
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
            name: "Glob Logistics",
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
            name: "Glob Logistics",
          },
        },
      },
    ],
  },
};

const ServicePage = () => {
  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <Header />
      <ServiceSlider />
      <ServicesDetails />
      <Footer />
    </div>
  );
};

export default ServicePage;
