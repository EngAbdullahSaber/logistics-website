import { getTranslations } from "next-intl/server";

export const getSlides = async () => {
  const t = await getTranslations("Slider");

  const slides = [
    {
      image: "/slider/slide1.jpg",
      category: t("Customs Consulting"),
      title: t("Professional Customs Consulting Services"),
      description: t(
        "A customs consultant helps businesses and individuals ensure smooth, legal, and efficient cross-border trade by navigating complex regulations, tariffs, and duties"
      ),
      features: [
        t("Customs Compliance"),
        t("Tariff Classification & Valuation"),
        t("Duty Optimization"),
        t("Documentation & Risk Management"),
      ],
      stats: { number: "300+", label: t("Consulting Clients Served") },
      cta: t("Request Consultation"),
    },
    {
      image: "/slider/slide2.jpg",
      category: t("Egyptian Customs Services"),
      title: t("Specialized Services for Egyptian Customs"),
      description: t(
        "Support for importers and customs brokers in Egypt, including fair duty assessment, import procedures, customs regulations guidance, and risk reduction"
      ),
      features: [
        t("Fair Duty Assessment"),
        t("Import Procedures Assistance"),
        t("Customs Risk Analysis"),
        t("Time & Effort Saving"),
      ],
      stats: { number: "500+", label: t("Successful Clearances") },
      cta: t("Contact Us"),
    },
    {
      image: "/slider/slide4.jfif",
      category: t("Logistics & Supply Chain"),
      title: t("Innovative Logistics & Global Supply Chain Solutions"),
      description: t(
        "Logistics ensures goods, services, and information move efficiently from origin to destination with cost savings, customer satisfaction, and global connectivity"
      ),
      features: [
        t("Transportation & Warehousing"),
        t("Inventory & Order Management"),
        t("Real-time Tracking"),
        t("Green & Digital Logistics"),
      ],
      stats: { number: "1M+", label: t("Shipments Handled") },
      cta: t("Explore Logistics"),
    },
  ];

  return slides;
};
