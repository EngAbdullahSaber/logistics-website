"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("executive");
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const t = useTranslations("WhyChoose");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: "executive",
      icon: "📊",
      title: t("Executive Summary"),
      subtitle: t("Company Overview"),
      content: t(
        "Glob Logistics is an online logistics and customs clearance platform that offers comprehensive freight forwarding, shipping management, and customs brokerage services for importers and exporters"
      ),
      image: "/bg/customs-consultant.png",
      features: [
        t("Comprehensive freight forwarding services"),
        t("Real-time shipment tracking"),
        t("Simplified documentation & customs clearance"),
        t("Digital platform connecting businesses with carriers"),
      ],
      stats: { number: t("All-in-One"), label: t("Digital Platform") },
      details: {
        mission: t(
          "To simplify global trade by providing fast, transparent, and efficient logistics and customs services through an all-in-one digital platform"
        ),
        vision: t(
          "To become a leading logistics solutions provider in the MENA region, known for reliability, transparency, and innovation"
        ),
        coreServices: [
          t("Freight forwarding"),
          t("Door-to-door delivery"),
          t("Customs clearance"),
          t("Cargo tracking"),
          t("Warehousing"),
          t("Consultancy for trade compliance"),
        ],
      },
    },
    {
      id: "company",
      icon: "🏢",
      title: t("Company Overview"),
      subtitle: t("Digital-First Logistics"),
      content: t(
        "Glob Logistics operates as a digital-first logistics provider offering users an easy way to book and manage shipments, request customs clearance services, and track cargo in real-time through our intuitive platform"
      ),
      image: "/bg/egyptian-customs.png",
      features: [
        t("Digital shipment booking & management"),
        t("Customs clearance service requests"),
        t("Real-time cargo tracking"),
        t("Intuitive user platform"),
      ],
      stats: { number: t("Digital"), label: t("First Approach") },
      details: {
        operations: t(
          "Our platform connects businesses and individuals with reliable carriers while simplifying the entire logistics and customs clearance process"
        ),
        technology: t(
          "Leveraging cutting-edge technology to provide transparent, efficient, and cost-effective logistics solutions"
        ),
        valueProposition: [
          t("Streamlined logistics processes"),
          t("Transparent pricing"),
          t("Real-time visibility"),
          t("Expert customs guidance"),
        ],
      },
    },
    {
      id: "services",
      icon: "🚚",
      title: t("Core Services"),
      subtitle: t("Comprehensive Solutions"),
      content: t(
        "We provide end-to-end logistics and customs solutions designed to meet the diverse needs of modern businesses engaged in international trade"
      ),
      image: "/bg/logistics.png",
      features: [
        t("International freight forwarding"),
        t("Customs brokerage & compliance"),
        t("Supply chain management"),
        t("Trade consultancy services"),
      ],
      stats: { number: t("End-to-End"), label: t("Solutions") },
      details: {
        serviceCategories: [
          {
            category: t("Logistics Services"),
            items: [
              t("Air Freight"),
              t("Sea Freight"),
              t("Land Transportation"),
              t("Warehousing"),
            ],
          },
          {
            category: t("Customs Services"),
            items: [
              t("Customs Clearance"),
              t("Documentation"),
              t("Compliance"),
              t("Duty Optimization"),
            ],
          },
          {
            category: t("Value-Added Services"),
            items: [
              t("Cargo Insurance"),
              t("Trade Consulting"),
              t("Risk Management"),
              t("Supply Chain Optimization"),
            ],
          },
        ],
      },
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

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

  const getVideoUrl = () => {
    return "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D883985150197602&show_text=false&width=500";
  };

  // Safe rendering functions
  const renderExecutiveDetails = (details: any) => {
    if (!details) return null;

    return (
      <div className="space-y-4">
        {details.mission && (
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">{t("Mission")}</h4>
            <p className="text-slate-300">{details.mission}</p>
          </div>
        )}
        {details.vision && (
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">{t("Vision")}</h4>
            <p className="text-slate-300">{details.vision}</p>
          </div>
        )}
        {details.coreServices && details.coreServices.length > 0 && (
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">
              {t("Core Services")}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {details.coreServices.map((service: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCompanyDetails = (details: any) => {
    if (!details) return null;

    return (
      <div className="space-y-4">
        {details.operations && (
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">
              {t("Operations")}
            </h4>
            <p className="text-slate-300">{details.operations}</p>
          </div>
        )}
        {details.technology && (
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">
              {t("Technology")}
            </h4>
            <p className="text-slate-300">{details.technology}</p>
          </div>
        )}
        {details.valueProposition && details.valueProposition.length > 0 && (
          <div>
            <h4 className="text-cyan-300 font-semibold mb-2">
              {t("Value Proposition")}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {details.valueProposition.map((value: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderServicesDetails = (details: any) => {
    if (!details || !details.serviceCategories) return null;

    return (
      <div className="space-y-4">
        {details.serviceCategories.map((category: any, idx: number) => (
          <div key={idx}>
            <h4 className="text-cyan-300 font-semibold mb-2">
              {category.category}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {category.items &&
                category.items.map((item: string, itemIdx: number) => (
                  <div key={itemIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderDetailsContent = () => {
    if (!activeTabData?.details) return null;

    switch (activeTabData.id) {
      case "executive":
        return renderExecutiveDetails(activeTabData.details);
      case "company":
        return renderCompanyDetails(activeTabData.details);
      case "services":
        return renderServicesDetails(activeTabData.details);
      default:
        return null;
    }
  };

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
              <span className="tracking-wide">{t("About Glob Logistics")}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("Transforming Global Trade")}
            </h2>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {t(
                "Your trusted partner for digital logistics and customs clearance solutions"
              )}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { number: "25+", label: t("Years Experience") },
                { number: "1M+", label: t("Shipments Handled") },
                { number: "99%", label: t("Client Satisfaction") },
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

              {/* Active Tab Content */}
              {activeTabData && (
                <div className="bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{activeTabData.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {activeTabData.title}
                      </h3>
                      <p className="text-cyan-300">{activeTabData.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {activeTabData.content}
                  </p>

                  {/* Features */}
                  {activeTabData.features &&
                    activeTabData.features.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {activeTabData.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  {/* Detailed Information */}
                  {activeTabData.details && (
                    <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                      {renderDetailsContent()}
                    </div>
                  )}
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
                  alt="Glob Logistics Services"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-300">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      🎥
                    </div>
                    <div className="font-bold text-lg">
                      {t("Watch Our Story")}
                    </div>
                    <div className="text-sm opacity-90">
                      {t("Learn how we're transforming logistics")}
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

              {/* Additional Info Card */}
              <div className="mt-6 bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                <h4 className="text-white font-bold text-lg mb-3">
                  {t("Why Choose Glob Logistics")}
                </h4>
                <div className="space-y-3">
                  {[
                    t("Digital-first platform for easy management"),
                    t("25+ years of industry expertise"),
                    t("Comprehensive customs and logistics services"),
                    t("Real-time tracking and transparency"),
                    t("Global network with local expertise"),
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
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
                  {t("Glob Logistics - Our Story")}
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

            {/* Video Container */}
            <div className="aspect-video bg-black flex items-center justify-center">
              <iframe
                src={getVideoUrl()}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Glob Logistics Services Video"
                scrolling="no"
                frameBorder="0"
                style={{ border: "none", overflow: "hidden" }}
              />
            </div>

            {/* Fallback message */}
            <div className="p-4 bg-slate-800/50 border-t border-slate-700/30">
              <p className="text-slate-400 text-center text-sm">
                {t(
                  "Learn how Glob Logistics is revolutionizing the logistics and customs clearance industry through digital innovation and expert services"
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhyChoose;
