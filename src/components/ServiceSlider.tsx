"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
type ServiceSlug =
  | "customs-consultancy"
  | "egyptian-customs"
  | "logistics"
  | "customs-clearance"
  | "shipping";

interface SlideData {
  category: string;
  title: string;
  description: string;
  features: string[];
  stats: {
    number: string;
    label: string;
  };
  cta: string;
}
const ServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = useTranslations("ServiceSlider");
  const st = useTranslations("Service");
  const { id } = useParams(); // Get the service ID from URL

  // Generate 3 slides for the specified service only
  const generateServiceSlides = () => {
    const services = {
      "customs-consultancy": {
        slug: "customs-consultancy",
        title: st("Customs Consultancy"),
        images: [
          "/slider/customs-consulting-1.JPG",
          "/slider/customs-consulting-2.webp",
          "/slider/customs-consulting-1.webp",
        ],
      },
      "egyptian-customs": {
        slug: "egyptian-customs",
        title: st("Egyptian Customs Services"),
        images: [
          "/slider/egyptian-customs-1.jpg",
          "/slider/egyptian-customs-2.png",
          "/slider/egyptian-customs-3.webp",
        ],
      },
      logistics: {
        slug: "logistics",
        title: st("Logistics & Supply Chain"),
        images: [
          "/slider/logistics-1.JPEG",
          "/slider/logistics-2.jpg",
          "/slider/logistics-3.JFIF",
        ],
      },
      "customs-clearance": {
        slug: "customs-clearance",
        title: st("Customs Clearance"),
        images: [
          "/slider/customs-clearance-1.jpg",
          "/slider/customs-clearance-2.jpg",
          "/slider/customs-clearance-3.JPEG",
        ],
      },
      shipping: {
        slug: "shipping",
        title: st("Shipping Services"),
        images: [
          "/slider/shipping-1.jpg",
          "/slider/shipping-2.JPG",
          "/slider/shipping-3.JPEG",
        ],
      },
    };

    // Get the specific service based on ID, or default to first service
    const serviceId = id as string;
    const service =
      services[serviceId as keyof typeof services] ||
      services["customs-consultancy"];

    const slides = [];

    // Create 3 slides only for the specified service
    for (let i = 0; i < 3; i++) {
      const slideData = getSlideData(service.slug, i, service.title);
      slides.push({
        ...slideData,
        image: service.images[i] || service.images[0], // Fallback to first image
        serviceSlug: service.slug,
        slideIndex: i + 1,
        totalSlides: 3,
      });
    }

    return slides;
  };

  // Helper function to get slide content based on service and slide index
  const getSlideData = (
    serviceSlug: any,
    slideIndex: number,
    serviceTitle: string
  ): SlideData | {} => {
    const slideDataMap: Record<any, any[]> = {
      "customs-consultancy": [
        {
          category: serviceTitle,
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
          category: serviceTitle,
          title: t("Expert Trade Compliance Guidance"),
          description: t(
            "Our experienced consultants provide comprehensive trade compliance solutions to help you navigate international regulations and avoid costly penalties"
          ),
          features: [
            t("Regulatory Compliance"),
            t("Risk Assessment"),
            t("Audit Support"),
            t("Legal Guidance"),
          ],
          stats: { number: "25+", label: t("Years Experience") },
          cta: t("Get Expert Advice"),
        },
        {
          category: serviceTitle,
          title: t("Customs Risk Management Solutions"),
          description: t(
            "Proactive risk management strategies to protect your business from customs-related issues and ensure smooth international operations"
          ),
          features: [
            t("Risk Analysis"),
            t("Compliance Monitoring"),
            t("Dispute Resolution"),
            t("Authority Liaison"),
          ],
          stats: { number: "99%", label: t("Client Satisfaction") },
          cta: t("Start Compliance Check"),
        },
      ],
      "egyptian-customs": [
        {
          category: serviceTitle,
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
          category: serviceTitle,
          title: t("Egyptian Import/Export Expertise"),
          description: t(
            "Deep understanding of Egyptian customs laws and procedures to ensure efficient and compliant import/export operations"
          ),
          features: [
            t("Local Regulation Knowledge"),
            t("Documentation Support"),
            t("Duty Calculation"),
            t("Clearance Optimization"),
          ],
          stats: { number: "50+", label: t("Customs Experts") },
          cta: t("Get Egyptian Support"),
        },
        {
          category: serviceTitle,
          title: t("Local Customs Regulation Compliance"),
          description: t(
            "Ensure full compliance with Egyptian customs regulations while optimizing your import/export processes for maximum efficiency"
          ),
          features: [
            t("Regulatory Updates"),
            t("Compliance Checking"),
            t("Penalty Prevention"),
            t("Process Optimization"),
          ],
          stats: { number: "24/7", label: t("Support Available") },
          cta: t("Request Assessment"),
        },
      ],
      logistics: [
        {
          category: serviceTitle,
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
        {
          category: serviceTitle,
          title: t("End-to-End Supply Chain Management"),
          description: t(
            "Comprehensive supply chain solutions that optimize every step from procurement to delivery, ensuring efficiency and reliability"
          ),
          features: [
            t("Supply Chain Optimization"),
            t("Multi-Modal Transport"),
            t("Warehousing Solutions"),
            t("Distribution Management"),
          ],
          stats: { number: "150+", label: t("Countries Served") },
          cta: t("Get Quote"),
        },
        {
          category: serviceTitle,
          title: t("Digital Logistics & Tracking Solutions"),
          description: t(
            "Leverage advanced technology for real-time visibility, automated processes, and data-driven logistics optimization"
          ),
          features: [
            t("Real-Time Tracking"),
            t("Digital Documentation"),
            t("Automated Processes"),
            t("Data Analytics"),
          ],
          stats: { number: "99.8%", label: t("On-Time Delivery") },
          cta: t("Optimize Supply Chain"),
        },
      ],
      "customs-clearance": [
        {
          category: serviceTitle,
          title: t("Efficient Customs Clearance Services"),
          description: t(
            "Professional customs clearance services ensuring smooth and timely processing of your imports and exports with complete documentation support"
          ),
          features: [
            t("Document Submission"),
            t("Duty Processing"),
            t("Inspections Coordination"),
            t("Digital E-Filing"),
          ],
          stats: { number: "99.8%", label: t("Success Rate") },
          cta: t("Get Clearance Quote"),
        },
        {
          category: serviceTitle,
          title: t("Fast & Reliable Clearance Processing"),
          description: t(
            "Streamlined customs clearance processes that minimize delays and ensure your goods move quickly through customs checkpoints"
          ),
          features: [
            t("Expedited Processing"),
            t("Document Verification"),
            t("Customs Liaison"),
            t("Status Updates"),
          ],
          stats: { number: "2-4", label: t("Days Average Clearance") },
          cta: t("Start Clearance"),
        },
        {
          category: serviceTitle,
          title: t("Digital Customs Documentation"),
          description: t(
            "Modern digital solutions for customs documentation, reducing paperwork and accelerating the clearance process"
          ),
          features: [
            t("Electronic Filing"),
            t("Digital Signatures"),
            t("Document Management"),
            t("Compliance Checking"),
          ],
          stats: { number: "50K+", label: t("Documents Processed") },
          cta: t("Upload Documents"),
        },
      ],
      shipping: [
        {
          category: serviceTitle,
          title: t("Comprehensive Shipping & Freight Solutions"),
          description: t(
            "Complete shipping services including sea, air, road, and rail freight with global coverage and competitive pricing"
          ),
          features: [
            t("Sea Freight"),
            t("Air Freight"),
            t("Road Transport"),
            t("Rail Solutions"),
          ],
          stats: { number: "50K+", label: t("Shipments Delivered") },
          cta: t("Get Shipping Quote"),
        },
        {
          category: serviceTitle,
          title: t("Global Shipping Network"),
          description: t(
            "Extensive global shipping network ensuring reliable and efficient transportation solutions for businesses of all sizes"
          ),
          features: [
            t("Global Coverage"),
            t("Multi-Modal Options"),
            t("Competitive Pricing"),
            t("Reliable Partners"),
          ],
          stats: { number: "100+", label: t("Shipping Routes") },
          cta: t("Book Shipment"),
        },
        {
          category: serviceTitle,
          title: t("Multi-Modal Transport Services"),
          description: t(
            "Integrated multi-modal transportation solutions that combine different shipping methods for optimal efficiency and cost-effectiveness"
          ),
          features: [
            t("Integrated Solutions"),
            t("Cost Optimization"),
            t("Route Planning"),
            t("Cargo Tracking"),
          ],
          stats: { number: "4.9/5", label: t("Customer Rating") },
          cta: t("Track Delivery"),
        },
      ],
    };

    return (
      slideDataMap[serviceSlug]?.[slideIndex] ||
      slideDataMap[serviceSlug]?.[0] ||
      {}
    );
  };

  const slides = generateServiceSlides();

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  // Get current slide info
  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[900px] overflow-hidden -mt-20 pt-40">
      {slides.map((slide, index) => (
        <div
          key={`${slide.serviceSlug}-${slide.slideIndex}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl pt-48">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full uppercase tracking-wider">
                    {slide.category}
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {slide.features?.map((feature: any, featureIndex: any) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                    >
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                  <div className="text-center sm:text-left">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {slide.stats?.number}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {slide.stats?.label}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={`/services/${slide.serviceSlug}`}
                      className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots - Only show if we have multiple slides */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              title={`Slide ${slide.slideIndex}`}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows - Only show if we have multiple slides */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-200 z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-200 z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-white/70 text-sm mb-2">{t("Scroll Down")}</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
