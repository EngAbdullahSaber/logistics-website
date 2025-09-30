"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("consultant");
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("WhyChoose");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: "consultant",
      icon: "🌍",
      title: t("tabConsultantTitle"),
      subtitle: t("tabConsultantSubtitle"),
      content: t("tabConsultantContent"),
      image: "/bg/customs-consultant.png",
      features: [
        "Customs compliance & legal guidance",
        "Accurate tariff classification (HS codes)",
        "Duty optimization & Free Trade Agreements",
        "Customs valuation & risk management",
      ],
      stats: { number: "15+", label: t("Years Expertise") },
    },
    {
      id: "egypt",
      icon: "🇪🇬",
      title: t("tabEgyptTitle"),
      subtitle: t("tabEgyptSubtitle"),
      content: t("tabEgyptContent"),
      image: "/bg/egyptian-customs.png",
      features: [
        "Fair duty & tax assessment",
        "Import procedures & documentation support",
        "Guidance on customs laws & regulations",
        "Risk analysis & penalty prevention",
      ],
      stats: { number: "300+", label: "Egyptian Clients" },
    },
    {
      id: "logistics",
      icon: "🚚",
      title: t("tabLogisticsTitle"),
      subtitle: t("tabLogisticsSubtitle"),
      content: t("tabLogisticsContent"),
      image: "/bg/logistics.png",
      features: [
        "Transportation & warehousing solutions",
        "Inventory & order management",
        "AI-driven route optimization",
        "Sustainable & green logistics",
      ],
      stats: { number: "1M+", label: "Shipments Handled" },
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const openVideo = () => {
    window.open("https://www.youtube.com/watch?v=gyGsPlt06bo", "_blank");
  };

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg/step-bg.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full text-cyan-300 text-sm font-medium mb-6 backdrop-blur-sm border border-cyan-400/30 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="tracking-wide">{t("sectionBadge")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("sectionTitle")}
          </h2>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t("sectionDescription")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { number: "1M+", label: t("statsDeliveries") },
              { number: "150+", label: t("statsCountries") },
              { number: "99.8%", label: t("statsOnTime") },
              { number: "24/7", label: t("statsSupport") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col xl:flex-row justify-center items-start gap-12 lg:gap-16">
          {/* Tabs */}
          <div className="w-full xl:w-3/5">
            {/* Tabs Nav */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  {tab.icon} {tab.title}
                </button>
              ))}
            </div>

            {/* Active Tab */}
            {activeTabData && (
              <div className="bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {activeTabData.title}
                </h3>
                <p className="text-slate-300">{activeTabData.content}</p>
              </div>
            )}
          </div>

          {/* Video Section */}
          <div className="w-full xl:w-2/5">
            <div
              className="relative cursor-pointer rounded-3xl overflow-hidden"
              onClick={openVideo}
            >
              <img
                src="/bg/why-choose-img.png"
                alt="Logista Video"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎥</div>
                  <div className="font-bold">{t("videoWatch")}</div>
                  <div className="text-sm">{t("videoDescription")}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl border border-cyan-400/30 text-center">
              <h4 className="text-white font-bold text-lg mb-2">
                {t("ctaTitle")}
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                {t("ctaDescription")}
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold">
                {t("ctaButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
