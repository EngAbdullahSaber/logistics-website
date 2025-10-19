import { getSlides } from "@/components/useSlides";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import StepArea from "@/components/StepArea ";
import WhyChoose from "@/components/WhyChoose";
import React from "react";

// SEO Metadata
export const metadata = {
  title: "Glob Logistics - Customs Consulting & Global Supply Chain Solutions",
  description:
    "Professional customs consultancy, Egyptian customs services, and end-to-end logistics solutions. 25+ years experience, 1M+ shipments handled, serving 150+ countries worldwide.",
  keywords:
    "customs consulting, Egyptian customs, logistics services, supply chain management, customs clearance, global trade, freight forwarding, customs consultancy Egypt, logistics company Cairo",
  authors: [{ name: "Glob Logistics" }],
  openGraph: {
    title: "Glob Logistics - Customs & Global Supply Chain Experts",
    description:
      "Expert customs guidance, Egyptian-specialized services and end-to-end logistics solutions for international trade",
    url: "https://globlogistics.com",
    siteName: "Glob Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glob Logistics - Customs & Logistics Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glob Logistics - Customs & Global Supply Chain Experts",
    description:
      "Professional customs consultancy and logistics solutions for international trade",
    images: ["/twitter-image.jpg"],
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

  alternates: {
    canonical: "https://globlogistics.com",
    languages: {
      "en-US": "https://globlogistics.com/en",
      "ar-EG": "https://globlogistics.com/ar",
    },
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Glob Logistics",
  alternateName: "Global Customs & Logistics",
  url: "https://globlogistics.com",
  logo: "https://globlogistics.com/logo.JPEG",
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
    email: "info@customs-logistics.com",
    areaServed: "Global",
    availableLanguage: ["en", "ar"],
  },
  sameAs: [
    "https://www.facebook.com/globlogistics",
    "https://www.linkedin.com/company/globlogistics",
    "https://twitter.com/globlogistics",
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
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Logistics and Customs Consulting",
  provider: {
    "@type": "Organization",
    name: "Glob Logistics",
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

const page =   () => {
 
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
      <Slider   />
      <WhyChoose />
      <StepArea />
      <Footer />
    </div>
  );
};

export default page;
