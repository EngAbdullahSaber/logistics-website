"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";

const AboutArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    shipments: 0,
    countries: 0,
    satisfaction: 0,
  });
  const sectionRef = useRef(null);
  const t = useTranslations("AboutUs");

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  const startCounters = () => {
    const targets = {
      experience: 25,
      shipments: 500000,
      countries: 150,
      satisfaction: 98,
    };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach((key) => {
      const typedKey = key as keyof typeof targets;
      let current = 0;
      const increment = targets[typedKey] / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[typedKey]) {
          current = targets[typedKey];
          clearInterval(timer);
        }

        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepTime);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/about-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/90 to-blue-50/95" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100/30 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-24 bg-blue-200/50 transform rotate-45" />
        <div className="absolute top-1/3 right-1/4 w-2 h-32 bg-orange-200/50 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image + badges */}
          <div className="relative">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-2xl blur-lg" />
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <img
                    src="/about_img_02.png"
                    alt="Customs & logistics"
                    className="w-full rounded-xl"
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {counters.experience}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                      {t("Years Experience")}
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">
                      {t("Industry Leader")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-blue-600 font-semibold text-lg uppercase tracking-wider">
                  {t("Customs & Logistics Consulting")}
                </span>
              </div>

              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 leading-tight">
                {t(
                  "Expert customs guidance, Egyptian-specialized services and end-to-end logistics solutions to keep your trade compliant and efficient"
                )}
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-6" />
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t("heroParagraph1")}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t(
                  "We combine customs expertise with logistics know-how — from documentation and tariff classification to duty optimization and risk mitigation — so you can reduce costs, avoid delays and scale your international operations safely"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 opacity-20" />
    </section>
  );
};

export default AboutArea;
