"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("consultant");
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  // Close dialog when clicking outside content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };

    if (isVideoOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  // Solution 1: Direct Facebook embed
  const getVideoUrl = () => {
    return "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D883985150197602&show_text=false&width=500";
  };

  // Solution 2: Alternative URL formats to try
  const alternativeUrls = [
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D883985150197602&show_text=false&width=500",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2F1A14MHs9YK%2F&show_text=false&width=500",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D883985150197602&show_text=false&width=500",
  ];

  return (
    <>
      <section
        className="relative py-20 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg/step-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
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
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    {tab.icon} {tab.title}
                  </button>
                ))}
              </div>

              {/* Active Tab */}
              {activeTabData && (
                <div className="bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl backdrop-blur-sm">
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
                className="relative cursor-pointer rounded-3xl overflow-hidden group"
                onClick={openVideo}
              >
                <img
                  src="/bg/why-choose-img.png"
                  alt="Logista Video"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-300">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      🎥
                    </div>
                    <div className="font-bold text-lg">{t("videoWatch")}</div>
                    <div className="text-sm opacity-90">
                      {t("videoDescription")}
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 animate-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">
                  {t("videoWatch")}
                </h3>
              </div>
              <button
                onClick={closeVideo}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-200 group"
                aria-label="Close video"
              >
                <svg
                  className="w-6 h-6 text-slate-300 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Video Container - Try multiple solutions */}
            <div className="aspect-video bg-black flex items-center justify-center">
              {/* Solution 1: Facebook Embed */}
              <iframe
                src={getVideoUrl()}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Logista Services Video"
                scrolling="no"
                frameBorder="0"
                style={{ border: "none", overflow: "hidden" }}
              />
            </div>

            {/* Fallback message */}
            <div className="p-4 bg-slate-800/50 border-t border-slate-700/30">
              <p className="text-slate-400 text-center text-sm">
                {t("videoNotAvailable") ||
                  "If the video is not available, please check the video permissions or try alternative solutions."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhyChoose;
