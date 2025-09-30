"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";

const CounterArea = () => {
  const t = useTranslations("CounterArea");
  const counterData = [
    {
      id: 1,
      target: 1200,
      text: t("Customs Compliance Cases"),
      icon: "📑",
      suffix: "+",
      delay: 100,
      description: t(
        "Expert guidance on trade laws, tariffs, and duty optimization"
      ),
    },
    {
      id: 2,
      target: 800,
      text: t("Egyptian Customs Projects"),
      icon: "🇪🇬",
      suffix: "+",
      delay: 300,
      description: t(
        "Fair duty assessment, import procedures & risk reduction services"
      ),
    },
    {
      id: 3,
      target: 300,
      text: t("Logistics Solutions"),
      icon: "🚛",
      suffix: "+",
      delay: 500,
      description: t("Transport, warehousing, and supply chain optimization"),
    },
    {
      id: 4,
      target: 95,
      text: t("Efficiency Improvement"),
      icon: "⚡",
      suffix: "%",
      delay: 700,
      description: t(
        "Helping clients save time, cost, and reduce clearance risks"
      ),
    },
  ];

  const [counters, setCounters] = useState(
    counterData.map((item) => ({ ...item, current: 0 }))
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          setTimeout(() => {
            animateCounters();
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    counters.forEach((counter, index) => {
      setTimeout(() => {
        const duration = 2500;
        const steps = 60;
        const stepValue = counter.target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += stepValue;
          if (current >= counter.target) {
            current = counter.target;
            clearInterval(timer);
          }

          setCounters((prev) =>
            prev.map((item) =>
              item.id === counter.id
                ? { ...item, current: Math.floor(current) }
                : item
            )
          );
        }, duration / steps);
      }, counter.delay);
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden"
    >
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              {t("Our Achievements")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("Delivering Excellence")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                {" "}
                {t("Worldwide")}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t(
                "Trusted by thousands of businesses globally, our track record speaks for our commitment to excellence"
              )}
            </p>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div
              key={counter.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />

                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {counter.icon}
                  </div>

                  {/* Counter Number */}
                  <div className="mb-4">
                    <span className="text-5xl lg:text-6xl font-bold text-white block leading-none">
                      {hasAnimated ? formatNumber(counter.current) : "0"}
                      <span className="text-orange-400">{counter.suffix}</span>
                    </span>
                  </div>

                  {/* Counter Label */}
                  <h3 className="text-xl font-semibold text-gray-200 mb-3 leading-tight whitespace-pre-line">
                    {counter.text}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {counter.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full group-hover:w-24 transition-all duration-300" />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/5 group-hover:to-orange-500/5 rounded-2xl transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              {t("Start Your Journey")}
            </Link>
            <div className="hidden sm:block text-gray-400">
              <span className="text-sm">
                {t("Join our growing network of satisfied customers")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600" />
    </section>
  );
};

export default CounterArea;
