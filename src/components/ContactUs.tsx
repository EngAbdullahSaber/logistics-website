"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaHeadset,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBuilding,
  FaUser,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";

const ContactUs = () => {
  const t = useTranslations("ContactUs");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
  });

  const WHATSAPP_NUMBER = "01126054336";
  const COMPANY_NAME = "Global Logistics";

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

  // Fixed WhatsApp function
  const openWhatsApp = (phoneNumber: string, message?: string) => {
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    let formattedNumber = cleanPhone;

    // Handle Egyptian numbers
    if (formattedNumber.startsWith("0")) {
      formattedNumber = "20" + formattedNumber.substring(1);
    }

    if (!formattedNumber.startsWith("20") && !formattedNumber.startsWith("+")) {
      formattedNumber = "20" + formattedNumber;
    }

    formattedNumber = formattedNumber.replace(/^200+/, "20");

    // URL encode the message
    const encodedMessage = message ? encodeURIComponent(message) : "";
    const whatsappUrl = `https://wa.me/${formattedNumber}${
      message ? `?text=${encodedMessage}` : ""
    }`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const generateWhatsAppMessage = () => {
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Cairo",
      dateStyle: "full",
      timeStyle: "short",
    });

    return `
*New Contact Form Submission - ${COMPANY_NAME}*

👤 *Contact Information*
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone || "Not provided"}
• Company: ${formData.company || "Not provided"}

💬 *Message*
${formData.message}

📅 *Submitted on:* ${timestamp}
📍 *Source:* Website Contact Form
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      alert(t("Please fill in all required fields"));
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, hasError: false });

    try {
      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage();

      // Open WhatsApp with the message
      openWhatsApp(WHATSAPP_NUMBER, whatsappMessage);

      // Simulate sending delay for better UX
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          hasError: false,
        });

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      }, 1500);
    } catch (error) {
      console.error("Error preparing WhatsApp message:", error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
      });
    }
  };

  const offices = [
    {
      city: "Alexandria",
      country: "Egypt",
      address:
        "El Shorta buildings No. 3, 10th floor, Kom eldikkah, Alexandria, Egypt",
      phone: "+201004176030",
      displayPhone: "+20 100 417 6030",
      email: "info@logista.com",
      hours: "Sun-Thu: 9AM-5PM EET",
    },
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
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full text-green-600 text-sm font-semibold mb-8">
              <FaWhatsapp className="w-4 h-4" />
              {t("Direct WhatsApp Support")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {t("Get In ")}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                {t("Touch")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              {t(
                "Ready to transform your logistics? Send us a message directly on WhatsApp for fast response and personalized service"
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
                  <div className="flex items-center gap-3 mb-4">
                    <FaWhatsapp className="w-8 h-8 text-green-600" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t("Send Message via WhatsApp")}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg">
                    {t(
                      "Fill out the form below and send directly to our support team on WhatsApp"
                    )}
                  </p>
                </div>

                {formStatus.isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("Ready to Send!")}
                    </h3>
                    <p className="text-gray-600 mb-8">
                      {t("Your message is ready to be sent on WhatsApp")}
                    </p>
                    <button
                      onClick={() => {
                        const message = generateWhatsAppMessage();
                        openWhatsApp(WHATSAPP_NUMBER, message);
                      }}
                      className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      {t("Open WhatsApp Now")}
                    </button>
                    <button
                      onClick={() =>
                        setFormStatus({
                          isSubmitting: false,
                          isSubmitted: false,
                          hasError: false,
                        })
                      }
                      className="mt-4 text-gray-600 hover:text-gray-900 font-medium"
                    >
                      {t("Create New Message")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t("First Name")} *
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                              placeholder="John"
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t("Last Name")} *
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
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
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
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
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                              placeholder="+20 100 000 0000"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {t("Company Name")}
                        </label>
                        <div className="relative">
                          <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                            placeholder="Your Company Ltd."
                          />
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
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                            placeholder="Tell us about your customs clearance needs, shipping requirements, or any questions you have about Egyptian import/export procedures..."
                          />
                        </div>
                      </div>

                      {formStatus.hasError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                          <p className="font-medium">
                            {t("Error preparing message. Please try again.")}
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                          formStatus.isSubmitting
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            {t("Preparing Message")}...
                          </>
                        ) : (
                          <>
                            <FaWhatsapp className="w-5 h-5" />
                            {t("Send via WhatsApp")}
                          </>
                        )}
                      </button>

                      <div className="text-center text-sm text-gray-500 p-4 bg-gray-50 rounded-xl">
                        <p className="font-medium mb-1">
                          <FaWhatsapp className="inline w-3 h-3 mr-1" />
                          {t("WhatsApp Number")}: {WHATSAPP_NUMBER}
                        </p>
                        <p>
                          {t(
                            "Your message will be sent to our support team on WhatsApp"
                          )}
                        </p>
                      </div>
                    </div>
                  </form>
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
                        {t("Alexandria, Egypt")}
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
                          {t("AddressDetails")}
                          <br />
                          {t("Kom eldikkah, Alexandria, Egypt")}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaWhatsapp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            {t("WhatsApp Support")}
                          </p>
                          <button
                            onClick={() => openWhatsApp(WHATSAPP_NUMBER)}
                            className="text-gray-700 cursor-pointer hover:text-green-600 transition-colors text-sm block text-left w-full hover:underline flex items-center gap-1"
                          >
                            +20 {WHATSAPP_NUMBER}
                            <FaWhatsapp className="w-3 h-3" />
                          </button>
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
                            href="mailto:support@global-logiestics.com"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            support@global-logiestics.com
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
                        <p className="text-gray-600">{t("Sun-Thu: 9AM-5PM")}</p>
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
                      <button
                        onClick={() =>
                          openWhatsApp(
                            WHATSAPP_NUMBER,
                            "URGENT: Need emergency customs clearance assistance!"
                          )
                        }
                        className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        {t("Emergency WhatsApp")}
                      </button>
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
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
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
                answer: "Faq1",
              },
              {
                question: "Can you help reduce customs duties in Egypt?",
                answer: "Faq2",
              },
              {
                question:
                  "Do you assist with import procedures in Alexandria ports?",
                answer: "Faq3",
              },
              {
                question: "What Egyptian ports do you cover?",
                answer: "Faq4",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
