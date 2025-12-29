import AboutArea from "@/components/AboutArea";
import CounterArea from "@/components/CounterArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
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
    "Professional customs consultancy, Egyptian customs services, and end-to-end logistics solutions. 25+ years experience in global trade, customs compliance, and supply chain management.",
  keywords:
    "customs consulting, Egyptian customs, logistics services, supply chain management, customs clearance, global trade, freight forwarding, warehousing, air freight, ocean freight, risk management",
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
      "en-US": "https://global-logiestics.com/en/home",
      "ar-EG": "https://global-logiestics.com/ar/home",
    },
  },
};

// Add structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Global Logistics",
  alternateName: "Global Customs & Logistics",
  url: "https://global-logiestics.com",
  logo: "https://global-logiestics.com/logo.JPEG",
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
    email: "support@global-logiestics.com",
    areaServed: "Global",
    availableLanguage: ["en", "ar"],
  },
  sameAs: [
    "https://www.facebook.com/global-logiestics",
    "https://www.linkedin.com/company/global-logiestics",
    "https://twitter.com/globallogistics",
  ],
};

// Homepage specific structured data
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Global Logistics",
  description: "Professional customs consulting and global logistics solutions",
  url: "https://global-logiestics.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://global-logiestics.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
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
