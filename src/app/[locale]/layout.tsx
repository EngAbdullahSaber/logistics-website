import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono, Almarai } from "next/font/google";

import "./globals.css";
import { Metadata } from "next";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Global Logistics - Customs Consulting & Global Supply Chain Solutions",
  description:
    "Professional customs consultancy, Egyptian customs services, and end-to-end logistics solutions. 25+ years experience in global trade.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "customs consulting",
    "Egyptian customs",
    "logistics services",
    "supply chain management",
    "customs clearance",
    "global trade",
  ],
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

// Static message loading for static export
async function getStaticMessages(locale: string) {
  try {
    if (locale === "en") {
      return (await import("@/messages/en.json")).default;
    } else if (locale === "ar") {
      return (await import("@/messages/ar.json")).default;
    }
    return {};
  } catch (error) {
    console.error("Error loading messages:", error);
    return {};
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Use static message loading instead of dynamic getMessages()
  const messages = await getStaticMessages(locale);

  // Set direction: RTL for Arabic, LTR for everything else
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} data-scroll-behavior="smooth">
      <head>
        <meta
          name="google-site-verification"
          content="Gq4CemEKc7C2_yOiQj3C8tincxsmMUZ38ZaK7er5Rqg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${almarai.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
