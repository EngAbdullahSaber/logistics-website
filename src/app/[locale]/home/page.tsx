import AboutArea from "@/components/AboutArea";
import CounterArea from "@/components/CounterArea";
import { getSlides } from "@/components/useSlides";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Slider from "@/components/Slider";

// Generate metadata based on your company data
export const metadata = {
  title: "Glob Logistics - Customs Consulting & Global Supply Chain Solutions",
  description:
    "Professional customs consultancy, Egyptian customs services, and end-to-end logistics solutions. 25+ years experience in global trade, customs compliance, and supply chain management.",
  keywords:
    "customs consulting, Egyptian customs, logistics services, supply chain management, customs clearance, global trade, freight forwarding, warehousing, air freight, ocean freight, risk management",
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

// Add structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Glob Logistics",
  alternateName: "Global Customs & Logistics",
  url: "https://globlogistics.com",
  logo: "https://globlogistics.com/logo.JPEG",
  description: "Professional customs consulting and global logistics solutions",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cairo, Egypt",
    addressCountry: "EG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+02-034951015",
    contactType: "customer service",
    email: "info@logitrans.com",
    areaServed: "Global",
    availableLanguage: ["en", "ar"],
  },
  sameAs: [
    "https://www.facebook.com/globlogistics",
    "https://www.linkedin.com/company/globlogistics",
    "https://twitter.com/globlogistics",
  ],
};

export default function Home() {
  return (
    <div>
      {/* Add structured data to page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <Slider />
      <AboutArea />
      <CounterArea />
      <Service />
      <Footer />
    </div>
  );
}
