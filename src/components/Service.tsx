"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      key: "customsConsultancy",
      title: "Customs Consultancy",
      slug: "customs-consultancy",
      description:
        "A Customs Consultant is a professional expert who provides advice and guidance to businesses and individuals engaged in international trade. They ensure goods move across borders smoothly, efficiently, and legally while helping navigate complex and constantly changing trade laws, tariffs, and duties",
      features: [
        "Customs Compliance & Risk Management",
        "Documentation Preparation & Review (Invoices, Declarations, Certificates of Origin)",
        "Tariff Classification & HS Code Determination",
        "Customs Valuation & Duty Optimization",
        "Audit & Risk Assessment of Trade Processes",
        "Liaison with Customs Authorities to resolve disputes",
      ],
      benefits: [
        "Smooth cross-border operations",
        "Avoid costly fines and penalties",
        "Reduce duties with legal optimization strategies",
        "Save time with expert guidance",
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          description:
            "Review current trade operations and identify compliance gaps",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Design a tailored compliance and duty optimization strategy",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "Assist with documentation, HS code classification, and customs filings",
        },
        {
          step: 4,
          title: "Ongoing Support",
          description:
            "Continuous monitoring, risk analysis, and liaison with customs authorities",
        },
      ],
      stats: { value: "300+", label: "Consulting Clients" },
      link: "/services/customs-consultancy",
      gradient: "from-blue-600 to-blue-800",
      image: "/services/download.jfif",
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      ),
      key: "egyptianCustoms",
      title: "Egyptian Customs Services",
      slug: "egyptian-customs",
      description:
        "Specialized customs consulting services in Egypt, providing technical advice and representation to importers and brokers for fair duty assessment, risk reduction, and compliance with local laws and regulations.",
      features: [
        "Fair Assessment of Customs Duties",
        "Support with Import Procedures & Documentation",
        "Guidance on Customs Regulations & Instructions",
        "Customs Risk Analysis & Mitigation",
        "Time & Effort Optimization in Clearance",
        "Risk Reduction & Penalty Avoidance",
        "Efficiency Improvements in Import/Export Operations",
      ],
      benefits: [
        "Local expertise in Egyptian customs laws",
        "Avoid import penalties and risks",
        "Faster and smoother clearance in Egypt",
        "Save operational costs and time",
      ],
      process: [
        {
          step: 1,
          title: "Fair Duty Assessment",
          description:
            "Assist importers in evaluating customs duties on imports/exports",
        },
        {
          step: 2,
          title: "Import Procedures Support",
          description: "Provide technical guidance and document preparation",
        },
        {
          step: 3,
          title: "Customs Risk Analysis",
          description:
            "Analyze potential risks and recommend preventive measures",
        },
        {
          step: 4,
          title: "Clearance & Efficiency",
          description:
            "Streamline clearance to save time, reduce risks, and increase efficiency",
        },
      ],
      stats: { value: "500+", label: "Successful Clearances" },
      link: "/services/egyptian-customs",
      gradient: "from-orange-500 to-red-600",
      image: "/services/download (1).jfif",
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
        </svg>
      ),
      key: "logisticsSupplyChain",
      title: "Logistics & Supply Chain",
      slug: "logistics",
      description:
        "Logistics is the backbone of global trade — managing the flow of goods, services, and information from origin to consumption. It includes transportation, warehousing, inventory, and order fulfillment to ensure efficiency, cost savings, and customer satisfaction.",
      features: [
        "Transportation by Road, Rail, Sea & Air",
        "Warehousing & Storage Solutions",
        "Inventory Management & Order Fulfillment",
        "Supply Chain Optimization",
        "Digital Tracking & Real-Time Visibility",
        "Eco-friendly & Green Logistics Practices",
      ],
      benefits: [
        "Reduce costs through optimized logistics",
        "Improve customer satisfaction with timely deliveries",
        "Gain competitive advantage with efficiency",
        "Enable global trade with streamlined operations",
      ],
      process: [
        {
          step: 1,
          title: "Supply Chain Analysis",
          description:
            "Evaluate logistics processes and identify inefficiencies",
        },
        {
          step: 2,
          title: "Solution Design",
          description:
            "Create customized logistics solutions transport, warehousing, etc",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "Deploy systems, processes, and digital tools for efficiency",
        },
        {
          step: 4,
          title: "Monitoring & Optimization",
          description:
            "Continuously track performance and adopt emerging technologies",
        },
      ],
      stats: { value: "1M+", label: "Shipments Handled" },
      link: "/services/logistics",
      gradient: "from-teal-600 to-blue-700",
      image: "/services/download (3).jfif",
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      key: "customsClearance",
      title: "Customs Clearance",
      slug: "customs-clearance",
      description:
        "Customs clearance is the process of preparing and submitting the required documents to allow imports and exports. It ensures compliance with regulations, payment of duties and taxes, and smooth release of goods",
      features: [
        "Documentation Submission (Invoices, Packing List, Bills of Lading)",
        "Customs Examination & Inspections",
        "Duty & Tax Payment Processing",
        "Release & Collection of Goods",
        "Digital Customs Systems & E-Filing",
        "Risk-Based Inspections & Trade Facilitation",
      ],
      benefits: [
        "Ensure compliance with trade laws",
        "Prevent costly delays and illegal trade issues",
        "Facilitate faster supply chain movement",
        "Reduce clearance costs with digital efficiency",
      ],
      process: [
        {
          step: 1,
          title: "Documentation",
          description:
            "Prepare and submit invoices, declarations, and certificates",
        },
        {
          step: 2,
          title: "Customs Examination",
          description:
            "Coordinate inspection of goods or paperwork verification",
        },
        {
          step: 3,
          title: "Duty & Tax Payment",
          description: "Calculate and pay all duties, VAT, and taxes.",
        },
        {
          step: 4,
          title: "Release of Goods",
          description: "Clear shipments and arrange import/export delivery",
        },
      ],
      stats: { value: "99.8%", label: "Clearance Rate" },
      link: "/services/customs-clearance",
      gradient: "from-purple-600 to-indigo-700",
      image: "/services/download (2).jfif",
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      key: "riskManagement",
      title: "Risk Management & Compliance",
      slug: "risk-management",
      description:
        "Comprehensive risk management and compliance solutions to protect your business from customs-related risks, penalties, and operational disruptions in international trade.",
      features: [
        "Customs Compliance Audits",
        "Risk Assessment & Mitigation Strategies",
        "Regulatory Change Management",
        "Internal Controls Implementation",
        "Penalty Prevention & Dispute Resolution",
        "Trade Security Programs",
      ],
      benefits: [
        "Protect your business from costly penalties",
        "Ensure continuous compliance with regulations",
        "Minimize operational disruptions",
        "Build trust with customs authorities",
      ],
      process: [
        {
          step: 1,
          title: "Risk Assessment",
          description:
            "Identify potential compliance risks and vulnerabilities",
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Create customized risk mitigation strategies",
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy compliance controls and monitoring systems",
        },
        {
          step: 4,
          title: "Ongoing Monitoring",
          description: "Continuous compliance monitoring and adjustment",
        },
      ],
      stats: { value: "95%", label: "Risk Reduction" },
      link: "/services/risk-management",
      gradient: "from-green-600 to-emerald-700",
      image: "/services/risk-management.jpg",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-blue-600/10 text-blue-600 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Logistics
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ground transportation to global supply chain management, we
            provide end-to-end logistics solutions tailored to meet your
            business needs with reliability and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {service.stats.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-gray-600 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/link"
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none" />
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our logistics experts can design a tailored solution that
              perfectly fits your unique business requirements. Contact us for a
              personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/services"
                className="border border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
