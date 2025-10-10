"use client";
import { useParams, useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ServiceDetail {
  key: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  image: string;
}

const ServicesDetails = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const t = useTranslations("ServicesDetails");

  // Build service data with real domain content
  const servicesData: Record<string, ServiceDetail> = {
    "customs-consultancy": {
      key: "customsConsultancy",
      title: t("Customs Consultancy"),
      slug: "customs-consultancy",
      description: t(
        "service1complex and constantly changing trade laws, tariffs, and duties"
      ),
      features: [
        t("Customs Compliance & Risk Management"),
        t(
          "Documentation Preparation & Review (Invoices, Declarations, Certificates of Origin)"
        ),
        t("Tariff Classification & HS Code Determination"),
        t("Customs Valuation & Duty Optimization"),
        t("Audit & Risk Assessment of Trade Processes"),
        t("Liaison with Customs Authorities to resolve disputes"),
      ],
      benefits: [
        t("Smooth cross-border operations"),
        t("Avoid costly fines and penalties"),
        t("Reduce duties with legal optimization strategies"),
        t("Save time with expert guidance"),
      ],
      process: [
        {
          step: 1,
          title: t("Assessment"),
          description: t(
            "Review current trade operations and identify compliance gaps"
          ),
        },
        {
          step: 2,
          title: t("Planning"),
          description: t(
            "Design a tailored compliance and duty optimization strategy"
          ),
        },
        {
          step: 3,
          title: t("Implementation"),
          description: t(
            "Assist with documentation, HS code classification, and customs filings"
          ),
        },
        {
          step: 4,
          title: t("Ongoing Support"),
          description: t(
            "Continuous monitoring, risk analysis, and liaison with customs authorities"
          ),
        },
      ],
      image: "/services/download (2).JPG",
    },

    "egyptian-customs": {
      key: "egyptianCustoms",
      title: t("Egyptian Customs Services"),
      slug: "egyptian-customs",
      description: t(
        "Specialized customs consulting services in Egypt, providing technical advice and representation to importers and brokers for fair duty assessment, risk reduction, and compliance with local laws and regulations."
      ),
      features: [
        t("Fair Assessment of Customs Duties"),
        t("Support with Import Procedures & Documentation"),
        t("Guidance on Customs Regulations & Instructions"),
        t("Customs Risk Analysis & Mitigation"),
        t("Time & Effort Optimization in Clearance"),
        t("Risk Reduction & Penalty Avoidance"),
        t("Efficiency Improvements in Import/Export Operations"),
      ],
      benefits: [
        t("Local expertise in Egyptian customs laws"),
        t("Avoid import penalties and risks"),
        t("Faster and smoother clearance in Egypt"),
        t("Save operational costs and time"),
      ],
      process: [
        {
          step: 1,
          title: t("Fair Duty Assessment"),
          description: t(
            "Assist importers in evaluating customs duties on imports/exports"
          ),
        },
        {
          step: 2,
          title: t("Import Procedures Support"),
          description: t("Provide technical guidance and document preparation"),
        },
        {
          step: 3,
          title: t("Customs Risk Analysis"),
          description: t(
            "Analyze potential risks and recommend preventive measures"
          ),
        },
        {
          step: 4,
          title: t("Clearance & Efficiency"),
          description: t(
            "Streamline clearance to save time, reduce risks, and increase efficiency"
          ),
        },
      ],
      image: "/services/download (1).JPG",
    },

    logistics: {
      key: "logisticsSupplyChain",
      title: t("Logistics & Supply Chain"),
      slug: "logistics",
      description: t(
        "Logistics is the backbone of global trade — managing the flow of goods, services, and information from origin to consumption. It includes transportation, warehousing, inventory, and order fulfillment to ensure efficiency, cost savings, and customer satisfaction."
      ),
      features: [
        t("Transportation by Road, Rail, Sea & Air"),
        t("Warehousing & Storage Solutions"),
        t("Inventory Management & Order Fulfillment"),
        t("Supply Chain Optimization"),
        t("Digital Tracking & Real-Time Visibility"),
        t("Eco-friendly & Green Logistics Practices"),
      ],
      benefits: [
        t("Reduce costs through optimized logistics"),
        t("Improve customer satisfaction with timely deliveries"),
        t("Gain competitive advantage with efficiency"),
        t("Enable global trade with streamlined operations"),
      ],
      process: [
        {
          step: 1,
          title: t("Supply Chain Analysis"),
          description: t(
            "Evaluate logistics processes and identify inefficiencies"
          ),
        },
        {
          step: 2,
          title: t("Solution Design"),
          description: t(
            "Create customized logistics solutions transport, warehousing, etc"
          ),
        },
        {
          step: 3,
          title: t("Implementation"),
          description: t(
            "Deploy systems, processes, and digital tools for efficiency"
          ),
        },
        {
          step: 4,
          title: t("Monitoring & Optimization"),
          description: t(
            "Continuously track performance and adopt emerging technologies"
          ),
        },
      ],
      image: "/services/download (3).JPG",
    },

    "customs-clearance": {
      key: "customsClearance",
      title: t("Customs Clearance"),
      slug: "customs-clearance",
      description: t(
        "Customs clearance is the process of preparing and submitting the required documents to allow imports and exports. It ensures compliance with regulations, payment of duties and taxes, and smooth release of goods"
      ),
      features: [
        t("Documentation Submission (Invoices, Packing List, Bills of Lading)"),
        t("Customs Examination & Inspections"),
        t("Duty & Tax Payment Processing"),
        t("Release & Collection of Goods"),
        t("Digital Customs Systems & E-Filing"),
        t("Risk-Based Inspections & Trade Facilitation"),
      ],
      benefits: [
        t("Ensure compliance with trade laws"),
        t("Prevent costly delays and illegal trade issues"),
        t("Facilitate faster supply chain movement"),
        t("Reduce clearance costs with digital efficiency"),
      ],
      process: [
        {
          step: 1,
          title: t("Documentation"),
          description: t(
            "Prepare and submit invoices, declarations, and certificates"
          ),
        },
        {
          step: 2,
          title: t("Customs Examination"),
          description: t(
            "Coordinate inspection of goods or paperwork verification"
          ),
        },
        {
          step: 3,
          title: t("Duty & Tax Payment"),
          description: t("Calculate and pay all duties, VAT, and taxes."),
        },
        {
          step: 4,
          title: t("Release of Goods"),
          description: t("Clear shipments and arrange import/export delivery"),
        },
      ],
      image: "/services/Customs.JPG",
    },
  };

  // Narrow id to string
  const serviceId = Array.isArray(id) ? id[0] : id;
  const service = servicesData[serviceId || ""];

  // Handle phone call
  const handleCall = () => {
    window.open("tel:+02033955582", "_self");
  };

  // Handle email
  const handleEmail = () => {
    window.open("mailto:info@customs-logistics.com", "_self");
  };

  // Handle 404 - service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("Service Not Found")}
          </h1>
          <p className="text-gray-600 mb-6">
            {t("The service you're looking for doesn't exist.")}
          </p>
          <button
            onClick={() => router.push("/services")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            {t("Back to Services")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            className="text-white hover:bg-white/10 mb-6 px-4 py-2 rounded-lg transition-colors flex items-center"
            onClick={() => router.back()}
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            {t("Back")}
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 bg-gray-200">
                <div className="relative h-80 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl overflow-hidden group">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-blue-400/20 animate-gradient bg-size-200" />
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>
                  </div>

                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    quality={90}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect while loading */}
                  <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("Key Features")}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("Benefits")}
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("Our Process")}
              </h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("Get Started")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("Contact us today to learn more about this service")}
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleCall}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FaPhone className="w-4 h-4 mr-2" />
                  {t("Call Us")}
                </button>
                <button
                  onClick={handleEmail}
                  className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  {t("Email Us")}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-500 mb-2">
                  {t("Business Hours")}
                </p>
                <p className="text-gray-900 font-medium">
                  {t("Sun - Thu: 9:00 AM - 6:00 PM")}
                </p>
                <p className="text-gray-600 text-sm">
                  {t("Sat: 10:00 AM - 2:00 PM")}
                </p>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t("Other Services")}
              </h3>
              <div className="space-y-2">
                {Object.values(servicesData)
                  .filter((s) => s.slug !== serviceId)
                  .map((relatedService) => (
                    <button
                      key={relatedService.slug}
                      onClick={() =>
                        router.push(`/services/${relatedService.slug}`)
                      }
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {relatedService.title}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("Ready to Get Started?")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("Contact our team today for a free consultation")}
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            {t("Contact Us Now")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
