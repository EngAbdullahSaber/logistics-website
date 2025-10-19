import ContactUs from "@/components/ContactUs";
import { getSlides } from "@/components/useSlides";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import React from "react";

// SEO Metadata for Contact Page
export const metadata = {
  title:
    "Contact Glob Logistics - Customs & Logistics Experts | Get Free Consultation",
  description:
    "Contact our customs consulting and logistics experts for professional support. Get free consultation for customs compliance, duty optimization, Egyptian customs services, and global logistics solutions.",
  keywords:
    "contact customs consultant, logistics support, customs compliance help, Egyptian customs services, duty optimization consultation, global logistics contact, customs clearance support",
  authors: [{ name: "Glob Logistics" }],
  openGraph: {
    title:
      "Contact Glob Logistics - Customs & Logistics Experts | Get Free Consultation",
    description:
      "Get professional customs consulting and logistics support. Contact our experts for customs compliance, duty optimization, and Egyptian customs services.",
    url: "https://globlogistics.com/contact",
    siteName: "Glob Logistics",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Glob Logistics - Customs & Logistics Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Glob Logistics - Customs & Logistics Experts",
    description:
      "Get professional customs consulting and logistics support. Free consultation available.",
    images: ["/contact-twitter-image.jpg"],
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
    canonical: "https://globlogistics.com/contact",
    languages: {
      "en-US": "https://globlogistics.com/en/contact",
      "ar-EG": "https://globlogistics.com/ar/contact",
    },
  },
};

// Structured Data for Contact Page
const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Glob Logistics",
  description:
    "Contact our customs consulting and logistics experts for professional support and free consultation",
  url: "https://globlogistics.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Glob Logistics",
    description:
      "Professional customs consulting and global logistics solutions",
    url: "https://globlogistics.com",
    logo: "https://globlogistics.com/logo.JPEG",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cairo, Egypt – Serving global trade routes",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+02-034951015",
        contactType: "customer service",
        email: "info@customs-logistics.com",
        areaServed: "Global",
        availableLanguage: ["en", "ar"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          opens: "09:00",
          closes: "18:00",
          dayOfWeek: [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ],
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+02-01004176030",
        contactType: "whatsapp",
        areaServed: "Global",
        availableLanguage: ["en", "ar"],
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://globlogistics.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://globlogistics.com/contact",
      },
    ],
  },
};

// FAQ Structured Data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do I need a customs consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customs consultants help you navigate international trade laws, tariffs, and regulations to avoid costly mistakes and delays in your import/export operations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help reduce customs duties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Through Free Trade Agreements, correct HS classification, and duty drawback programs, we identify legal ways to lower your customs costs and optimize your trade operations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you assist with import procedures in Egypt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We provide expert guidance on Egyptian import procedures, fair assessment of duties, and complete documentation support for customs authorities in Egypt.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support importers, exporters, customs brokers, logistics companies, manufacturers, and businesses across all industries involved in global supply chains and international trade.",
      },
    },
  ],
};

const page = () => {
  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Header />
      <Slider />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
