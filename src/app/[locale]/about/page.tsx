import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import StepArea from "@/components/StepArea";
import WhyChoose from "@/components/WhyChoose";
import React from "react";
export const dynamic = "force-static";

// Generate static params for all locales
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export const metadata = {
  metadataBase: new URL("https://global-logiestics.com"),
  title:
    "Global Logistics - Customs Consulting & Global Supply Chain Solutions",
  description:
    "Professional customs consultancy, Egyptian customs services, and end-to-end logistics solutions. 25+ years experience, 1M+ shipments handled, serving 150+ countries worldwide.",
  keywords:
    "customs consulting, Egyptian customs, logistics services, supply chain management, customs clearance, global trade, freight forwarding, customs consultancy Egypt, logistics company Cairo",
  authors: [{ name: "Global Logistics" }],
  openGraph: {
    title: "Global Logistics - Customs & Global Supply Chain Experts",
    description:
      "Expert customs guidance, Egyptian-specialized services and end-to-end logistics solutions for international trade",
    url: "https://global-logiestics.com/en/home",
    siteName: "Global Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Logistics - Customs & Logistics Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Logistics - Customs & Global Supply Chain Experts",
    description:
      "Professional customs consultancy and logistics solutions for international trade",
    images: ["/twitter-image.jpg"],
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
    canonical: "https://global-logiestics.com/en/home",
    languages: {
      "en-US": "https://global-logiestics.com/en",
      "ar-EG": "https://global-logiestics.com/ar",
    },
  },
};

// Structured Data for SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Global Logistics",
  alternateName: "Global Customs & Logistics",
  url: "https://global-logiestics.com",
  logo: "https://global-logiestics.com/logo.JPEG",
  description:
    "Professional customs consulting and global logistics solutions with 25+ years experience",
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
  sameAs: [
    "https://www.facebook.com/global-logiestics",
    "https://www.linkedin.com/company/global-logiestics",
    "https://twitter.com/global-logiestics",
  ],
  serviceType: [
    "Customs Consultancy",
    "Egyptian Customs Services",
    "Logistics & Supply Chain",
    "Customs Clearance",
    "Risk Management & Compliance",
  ],
};

// Service structured data
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Logistics and Customs Consulting",
  provider: {
    "@type": "Organization",
    name: "Global Logistics",
  },
  areaServed: "Global",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customs Consultancy",
          description:
            "Professional customs consulting services for international trade compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Egyptian Customs Services",
          description:
            "Specialized services for Egyptian customs regulations and import procedures",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Logistics & Supply Chain",
          description:
            "End-to-end logistics solutions including transportation and warehousing",
        },
      },
    ],
  },
};

// Breadcrumb structured data for /en/home
export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://global-logiestics.com/en/home",
    },
  ],
};

const AboutPage = () => {
  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      <Header />
      <Slider />
      <WhyChoose />
      <StepArea />
      <Footer />
    </div>
  );
};

export default AboutPage;
