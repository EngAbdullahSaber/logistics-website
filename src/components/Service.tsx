"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChartLine,
  FaBox,
  FaShieldAlt,
  FaGlobe,
  FaArrowRight,
  FaShip,
} from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const pathname = usePathname();
  const t = useTranslations("Service");
  const { locale } = useParams();
  const services = [
    {
      id: 1,
      icon: <FaBox className="w-8 h-8" />,
      key: "customsConsultancy",
      title: t("Customs Consultancy"),
      slug: "customs-consultancy",
      description: t("Customs Consultancy Description"),
      features: [
        t("Tariff Classification"),
        t("Customs Valuation"),
        t("Documentation Review"),
        t("Risk Assessment"),
      ],
      stats: { value: "300+", label: t("Clients Served") },
      link: `${locale}/services/customs-consultancy`,
      gradient: "from-blue-600 to-blue-800",
      image: "/services/download (2).jpg",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="w-8 h-8" />,
      key: "egyptianCustoms",
      title: t("Egyptian Customs Services"),
      slug: "egyptian-customs",
      description: t("Egyptian Customs Services Description"),
      features: [
        t("Fair Duty Assessment"),
        t("Import Procedures"),
        t("Risk Analysis"),
        t("Time Optimization"),
      ],
      stats: { value: "500+", label: t("Clearances") },
      link: `${locale}/services/egyptian-customs`,
      gradient: "from-orange-500 to-red-600",
      image: "/services/download (1).jpg",
    },
    {
      id: 3,
      icon: <FaGlobe className="w-8 h-8" />,
      key: "logisticsSupplyChain",
      title: t("Logistics & Supply Chain"),
      slug: "logistics",
      description: t("Logistics & Supply Chain Description"),
      features: [
        t("Multi-Modal Transport"),
        t("Warehousing"),
        t("Inventory Management"),
        t("Real-Time Tracking"),
      ],
      stats: { value: "1M+", label: t("Shipments") },
      link: `${locale}/services/logistics`,
      gradient: "from-teal-600 to-blue-700",
      image: "/services/download (3).jpg",
    },
    {
      id: 4,
      icon: <FaChartLine className="w-8 h-8" />,
      key: "customsClearance",
      title: t("Customs Clearance"),
      slug: "customs-clearance",
      description: t("Customs Clearance Description"),
      features: [
        t("Document Submission"),
        t("Duty Processing"),
        t("Inspections"),
        t("Digital E-Filing"),
      ],
      stats: { value: "99.8%", label: t("Success Rate") },
      link: `${locale}/services/customs-clearance`,
      gradient: "from-purple-600 to-indigo-700",
      image: "/services/Customs.jpg",
    }, // In your Service component, add this to the services array:
    {
      id: 5,
      icon: <FaShip className="w-8 h-8" />, // You'll need to import FaShip from react-icons/fa
      key: "shippingServices",
      title: t("Shipping Services"),
      slug: "shipping",
      description: t(
        "Comprehensive shipping solutions including sea, air, road, and rail freight for efficient global trade and supply chain management"
      ),
      features: [
        t("Sea Freight"),
        t("Air Freight"),
        t("Road Transport"),
        t("Rail Solutions"),
      ],
      stats: { value: "50K+", label: t("Shipments") },
      link: `${locale}/services/shipping`,
      gradient: "from-cyan-600 to-blue-700",
      image: "/services/shipping.jpg",
    },
  ];

  // Set initial slide based on URL
  useEffect(() => {
    const currentSlug = pathname.split("/").pop();
    const serviceIndex = services.findIndex(
      (service) => service.slug === currentSlug
    );
    if (serviceIndex !== -1) {
      setCurrentSlide(serviceIndex);
    }
  }, [pathname, services]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Get current language from pathname
  const getCurrentLanguage = () => {
    return pathname.startsWith("/ar/") ? "ar" : "en";
  };

  // Generate proper link with language
  const getLocalizedLink = (link: string) => {
    const lang = getCurrentLanguage();
    return lang === "ar" ? `/ar${link}` : link;
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
            <FaBox className="w-4 h-4" />
            {t("Our Services")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t("Comprehensive Logistics")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mt-2">
              {t("Solutions")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "From ground transportation to global supply chain management, we deliver excellence"
            )}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative   mx-auto">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`transition-all duration-700 ease-out ${
                    currentSlide === index
                      ? "block opacity-100 scale-100"
                      : "hidden opacity-0 scale-95"
                  }`}
                >
                  <div className="px-4 h-full">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                      <div className="grid lg:grid-cols-2 gap-0 h-full">
                        {/* Left Side - Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-between">
                          {/* Header */}
                          <div>
                            <div className="flex items-start justify-between mb-6">
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300`}
                              >
                                {service.icon}
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                  {service.stats.value}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">
                                  {service.stats.label}
                                </div>
                              </div>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                              {service.title}
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                              {service.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                              {service.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                                  <span className="text-sm font-medium text-gray-700">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <Link
                            href={getLocalizedLink(service.link)}
                            className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group`}
                          >
                            <span>{t("Explore Service")}</span>
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                          {/* Actual Image */}
                          <div className="absolute inset-0">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                              }}
                            />
                          </div>

                          {/* Fallback Gradient Background */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-3xl animate-pulse`}
                            />
                          </div>

                          {/* Fallback Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`text-white/30`}>
                              {React.cloneElement(service.icon, {
                                className: "w-32 h-32",
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group z-10"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Service Cards Preview */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                currentSlide === index
                  ? `bg-gradient-to-br ${service.gradient} text-white shadow-xl scale-105`
                  : "bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={currentSlide === index ? "" : "opacity-60"}>
                  {service.icon}
                </div>
                <span className="text-sm font-semibold text-center">
                  {service.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
