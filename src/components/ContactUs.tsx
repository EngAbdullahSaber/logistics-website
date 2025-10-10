"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaShippingFast,
  FaHeadset,
  FaCalculator,
  FaFileAlt,
  FaUsers,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBuilding,
  FaUser,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaComments,
  FaArrowRight,
  FaQuestionCircle,
  FaHandsHelping,
  FaTruck,
} from "react-icons/fa";

const ContactUs = () => {
  const t = useTranslations("ContactUs");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
  });

  const [activeOffice, setActiveOffice] = useState(0);

  const handleInputChange = (
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, hasError: false });

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        hasError: false,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const offices = [
    {
      city: "Alexandria",
      country: "Egypt",
      address:
        "El Shorta buildings No. 3, 10th floor, Kom eldikkah, Alexandria, Egypt",
      phone: "+02 034951015",
      email: "info@logista.com",
      hours: "Sun-Thu: 9AM-5PM EET",
      isHeadquarters: true,
    },
  ];

  const serviceOptions = [
    t("Customs Compliance"),
    t("Duty & Tax Optimization"),
    t("Tariff Classification (HS Codes)"),
    t("Documentation & Declarations"),
    t("Fair Assessment of Customs Duties"),
    t("Import/Export Procedures"),
    t("Valuation Advisory"),
    t("Risk Management & Audits"),
    t("Other"),
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full text-blue-600 text-sm font-semibold mb-8">
              <FaHeadset className="w-4 h-4" />
              {t("Professional Support")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {t("Get In ")}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                {t("Touch")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              {t(
                "Ready to transform your logistics? Our expert team in Alexandria is here to provide tailored customs and shipping solutions for your business needs"
              )}
              .
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {t("Send Us A Message")}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {t(
                      "Fill out the form below and our Alexandria team will get back to you within 24 hours"
                    )}
                  </p>
                </div>

                {formStatus.isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("Message Sent Successfully!")}
                    </h3>
                    <p className="text-gray-600 mb-8">
                      {t(
                        "Thank you for contacting us. Our Alexandria team will respond within 24 hours"
                      )}
                    </p>
                    <button
                      onClick={() =>
                        setFormStatus({
                          isSubmitting: false,
                          isSubmitted: false,
                          hasError: false,
                        })
                      }
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {t("Send Another Message")}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {t("Email Address")} *
                        </label>
                        <div className="relative">
                          <FaEnvelopeOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                            placeholder="john.doe@company.com"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {t("Phone Number")} *
                        </label>
                        <div className="relative">
                          <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                            placeholder="+20 100 000 0000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t("Company Name")} *
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t("Service Needed")}
                      </label>
                      <div className="relative">
                        <FaHandsHelping className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white appearance-none"
                        >
                          <option value="">{t("Select a service")}</option>
                          {serviceOptions.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t("Message")} *
                      </label>
                      <div className="relative">
                        <FaComments className="absolute left-4 top-6 text-gray-400 w-4 h-4" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                          placeholder="Tell us about your customs clearance needs, shipping requirements, or any questions you have about Egyptian import/export procedures..."
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={formStatus.isSubmitting}
                      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                        formStatus.isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          {t("Sending Message")}...
                        </>
                      ) : (
                        <>
                          {t("Send Message")}
                          <FaPaperPlane className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      {t(
                        "By submitting this form, you agree to our Privacy Policy and Terms of Service"
                      )}
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information & Offices */}
            <div className="space-y-8">
              {/* Egypt Office */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {t("Our Alexandria Office")}
                  </h2>
                  <p className="text-gray-600">
                    {t(
                      "Located in the heart of Alexandria, we serve clients throughout Egypt and the Middle East"
                    )}
                  </p>
                </div>

                {/* Office Details */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                        Alexandria, Egypt
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Headquarters
                        </span>
                      </h3>
                    </div>
                    <FaGlobe className="w-6 h-6 text-blue-600" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {t("Address")}
                        </p>
                        <p className="text-gray-600">
                          El Shorta buildings No. 3, 10th floor
                          <br />
                          Kom eldikkah, Alexandria, Egypt
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaPhone className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            {t("Phone")}
                          </p>
                          <a
                            href="tel:+02034951015"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            dir="ltr"
                          >
                            +02 034951015
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaEnvelope className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            {t("Email")}
                          </p>
                          <a
                            href="mailto:info@logista.com"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            info@logista.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaClock className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {t("Business Hours")}
                        </p>
                        <p className="text-gray-600">Sun-Thu: 9AM-5PM EET</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaShippingFast className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {t("Customs Clearance")}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {t("Egyptian ports")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaFileAlt className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {t("Documentation")}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {t("Import/Export")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaExclamationTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t("Emergency Support")}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t(
                        "For urgent customs clearance matters or critical shipping issues at Egyptian ports"
                      )}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+02034951015"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        dir="ltr"
                      >
                        <FaPhone className="w-4 h-4" />
                        +02 034951015
                      </a>
                      <span className="text-sm text-gray-600 flex items-center justify-center">
                        {t("Available 24/7")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("Frequently Asked")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("Questions")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                "Quick answers to common questions about Egyptian customs and logistics services"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Why do I need a customs consultant in Egypt?",
                answer:
                  "Faq1",
              },
              {
                question: "Can you help reduce customs duties in Egypt?",
                answer:
                  "Faq2",
              },
              {
                question:
                  "Do you assist with import procedures in Alexandria ports?",
                answer:
                  "Faq3",
              },
              {
                question: "What Egyptian ports do you cover?",
                answer:
                  "Faq4",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaQuestionCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {t(faq.question)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
