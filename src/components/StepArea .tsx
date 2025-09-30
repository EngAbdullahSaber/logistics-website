"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const StepArea = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const t = useTranslations("StepArea");

  const steps = [
    {
      number: "01",
      title: t("Customs Consultant"),
      subtitle: t("Compliance & Guidance"),
      description: t("WhyChooseParagraph"),
      icon: "🌍",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-500",
      features: [
        t("Customs compliance & legal guidance"),
        t("Accurate tariff classification (HS codes)"),
        t("Duty optimization strategies"),
        t("Risk management & authority liaison"),
      ],
    },
    {
      number: "02",
      title: t("Egyptian Customs Services"),
      subtitle: t("Local Expertise"),
      description: t(
        "Specialized services tailored to Egyptian regulations, helping importers save time, reduce risks, and ensure fair duty assessments"
      ),
      icon: "🇪🇬",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-500",
      features: [
        t("Fair duty & tax assessment"),
        t("Import procedures & documentation"),
        t("Understanding customs regulations"),
        t("Customs risk analysis & reduction"),
      ],
    },
    {
      number: "03",
      title: t("Logistics Excellence"),
      subtitle: t("Global Supply Chains"),
      description: t(
        "Logistics connects suppliers, manufacturers, and consumers by managing transport, warehousing, inventory, and information flows efficiently."
      ),
      icon: "🚚",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-500",
      features: [
        t("Transportation & warehousing"),
        t("Inventory & order management"),
        t("AI & digital tracking systems"),
        t("Green & sustainable logistics"),
      ],
    },
    {
      number: "04",
      title: t("Customs Clearance"),
      subtitle: t("Smooth Trade Flow"),
      description: t(
        "The process of preparing and submitting documents to import or export goods, ensuring legal compliance, proper duties, and faster clearance"
      ),
      icon: "📑",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-500",
      features: [
        t("Documentation submission"),
        t("Customs examination"),
        t("Duty & tax payment"),
        t("Release of goods"),
      ],
    },
  ];

  return (
    <section
      style={{ backgroundImage: "url('/bg/step-bg.png')" }}
      className="relative min-h-screen w-full py-12 lg:py-24 bg-center bg-cover bg-no-repeat overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("Simple Steps to")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("Ship Anywhere")}
            </span>
          </h2>
        </div>
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Step Card */}
              <div
                className={`relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 h-full overflow-hidden border border-white/20 ${
                  hoveredStep === index
                    ? "scale-105 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg"
                    : ""
                }`}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-lg lg:text-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 text-5xl lg:text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    {step.subtitle}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm lg:text-base">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-sm flex-shrink-0`}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className={`absolute inset-0 border-2 rounded-3xl transition-all duration-300 pointer-events-none border-transparent group-hover:${step.borderColor}`}
                ></div>
              </div>

              {/* Connection Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${
                      step.color
                    } rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      hoveredStep === index ? "scale-125" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}

              {/* Mobile Connection */}
              {index < steps.length - 1 && (
                <div className="xl:hidden flex justify-center my-6">
                  <div
                    className={`w-1 h-12 bg-gradient-to-b ${step.color} rounded-full opacity-50`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline for Large Screens */}
        <div className="hidden xl:block relative">
          {/* Main Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-emerald-500 via-blue-500   to-orange-500 rounded-full shadow-lg"></div>

          {/* Timeline Steps */}
          <div className="relative flex justify-between items-center py-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative z-10"
              >
                {/* Timeline Node */}
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                    step.color
                  } shadow-lg border-4 border-slate-900 flex items-center justify-center transform transition-all duration-300 ${
                    hoveredStep === index ? "scale-125" : ""
                  }`}
                >
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Step Label */}
                <div className="mt-4 text-center max-w-[120px]">
                  <div className="text-sm font-semibold text-white">
                    {step.title.split(" ")[0]}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {step.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepArea;
