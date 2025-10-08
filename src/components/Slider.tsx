"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = useTranslations("Slider");
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

  useEffect(() => {
    if (!isAutoPlaying) return;

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

  return (
    <section className="relative h-[900px] overflow-hidden -mt-20 pt-40">
      {slides.map((slide, index) => (
        <div
          key={index}
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
                  {slide.features.map((feature, featureIndex) => (
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
                      {slide.stats.number}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {slide.stats.label}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href="#services"
                      className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {t("Learn More")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500 w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          goToSlide((currentSlide - 1 + slides.length) % slides.length)
        }
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
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
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

export default Slider;
