"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaClock,
  FaShippingFast,
  FaGlobe,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Footer");
  const { locale } = useParams();

  const isRTL = locale === "ar"; // Fixed: Arabic is RTL, English is LTR

  // Function to open WhatsApp chat
  const openWhatsApp = (phoneNumber: string) => {
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${cleanPhone}`;
    window.open(whatsappUrl, "_blank");
  };

  // Function to open Gmail compose
  const openGmail = (email: string) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}`;
    window.open(gmailUrl, "_blank");
  };

  const footerData = {
    company: {
      name: t("Global Customs & Logistics"),
      description: t("FooterParagraph"),
    },
    contact: {
      address: t("Cairo, Egypt – Serving global trade routes"),
      phones: ["+20 100 417 6030"], // Fixed phone number format
      emails: ["info@customs-logistics.com", "support@customs-logistics.com"],
      hours: t("Available 24/7 for international trade support"),
    },
    links: {
      services: [
        {
          name: t("Customs Consultancy"),
          href: "/services/customs-consultancy",
        },
        {
          name: t("Egyptian Customs Services"),
          href: "/services/egyptian-customs",
        },
        { name: t("Logistics & Supply Chain"), href: "/services/logistics" },
        { name: t("Customs Clearance"), href: "/services/customs-clearance" },
      ],
      company: [
        { name: t("About Us"), href: "/about" },
        { name: t("Contact"), href: "/contact" },
      ],
      support: [
        { name: t("Get a Quote"), href: "/contact" },
        { name: t("Consulting Support"), href: "/contact" },
        { name: t("FAQs"), href: "/contact" },
      ],
    },
    socialLinks: [
      {
        icon: FaFacebookF,
        href: "https://www.facebook.com/share/1C1h1hkfk6/",
        name: t("Facebook"),
      },
      { icon: FaTwitter, href: "#", name: t("Twitter") },
      { icon: FaInstagram, href: "#", name: t("Instagram") },
    ],
  };

  // Helper functions for RTL/LTR
  const getTextAlignment = () => (isRTL ? "text-right" : "text-left");
  const getFlexDirection = () => (isRTL ? "flex-row-reverse" : "flex-row");
  const getJustifyAlignment = () => (isRTL ? "justify-end" : "justify-start");
  const getHoverTranslate = () =>
    isRTL ? "hover:-translate-x-2" : "hover:translate-x-2";
  const getUnderlinePosition = () => (isRTL ? "right-0 w-12" : "left-0 w-12");

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.03) 50%, transparent 51%)
            `,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Information - Takes more space */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <div className={`flex   mb-6`}>
                  <Image
                    src={"/logo1.png"}
                    alt="Logista Logo"
                    width={70}
                    height={40}
                    style={{ width: "auto", height: "auto" }} // Just add this line
                  />
                </div>
                <p
                  className={`text-gray-400 text-base leading-relaxed mb-8 ${getTextAlignment()}`}
                >
                  {footerData.company.description}
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className={`flex items-start gap-4 group `}>
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
                      <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className={getTextAlignment()}>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {footerData.contact.address}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className={`flex items-start gap-4 group `}>
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/30 transition-colors">
                      <FaWhatsapp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className={`space-y-1 ${getTextAlignment()}`}>
                      {footerData.contact.phones.map((phone, index) => (
                        <div key={index}>
                          <button
                            onClick={() => openWhatsApp(phone)}
                            className={`text-gray-300 hover:text-white transition-colors text-sm block w-full hover:underline ${getTextAlignment()}`}
                          >
                            {phone}
                            <span className="text-green-400 text-xs ml-1">
                              (WhatsApp)
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div className={`flex items-start gap-4 group  `}>
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                      <FaEnvelope className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className={`space-y-1 ${getTextAlignment()}`}>
                      {footerData.contact.emails.map((email, index) => (
                        <div key={index}>
                          <button
                            onClick={() => openGmail(email)}
                            className={`text-gray-300 hover:text-white transition-colors text-sm block w-full hover:underline ${getTextAlignment()}`}
                          >
                            {email}
                            <span className="text-purple-400 text-xs ml-1">
                              (Gmail)
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className={`flex items-start gap-4 group  `}>
                    <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600/30 transition-colors">
                      <FaClock className="w-4 h-4 text-orange-400" />
                    </div>
                    <span
                      className={`text-gray-300 text-sm ${getTextAlignment()}`}
                    >
                      {footerData.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2">
              <h3
                className={`text-white text-xl font-bold mb-8 relative ${getTextAlignment()}`}
              >
                {t("Our Services")}
                <div
                  className={`absolute bottom-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${getUnderlinePosition()}`}
                ></div>
              </h3>
              <div className="space-y-3">
                {footerData.links.services.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className={`text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 py-2 group ${getFlexDirection()} ${getJustifyAlignment()} ${getHoverTranslate()}`}
                    >
                      <FaArrowRight
                        className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-400 ${
                          isRTL ? "rotate-180" : ""
                        }`}
                      />
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h3
                className={`text-white text-xl font-bold mb-8 relative ${getTextAlignment()}`}
              >
                {t("Company")}
                <div
                  className={`absolute bottom-0 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full ${getUnderlinePosition()}`}
                ></div>
              </h3>
              <div className="space-y-3">
                {footerData.links.company.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className={`text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 py-2 group ${getFlexDirection()} ${getJustifyAlignment()} ${getHoverTranslate()}`}
                    >
                      <FaArrowRight
                        className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-green-400 ${
                          isRTL ? "rotate-180" : ""
                        }`}
                      />
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Support & Latest Posts */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Support Links */}
                <div>
                  <h3
                    className={`text-white text-xl font-bold mb-8 relative ${getTextAlignment()}`}
                  >
                    {t("Support")}
                    <div
                      className={`absolute bottom-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full ${getUnderlinePosition()}`}
                    ></div>
                  </h3>
                  <div className="space-y-3">
                    {footerData.links.support.map((link, index) => (
                      <div key={index}>
                        <Link
                          href={link.href}
                          className={`text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 py-2 group ${getFlexDirection()} ${getJustifyAlignment()} ${getHoverTranslate()}`}
                        >
                          <FaArrowRight
                            className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-purple-400 ${
                              isRTL ? "rotate-180" : ""
                            }`}
                          />
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom Bar */}
          <div className="border-t border-slate-800 mt-16 pt-8">
            <div
              className={`flex flex-col lg:flex-row justify-between items-center gap-6 ${
                isRTL ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-medium">
                  {t("Follow Us")}:
                </span>
                <div className={`flex space-x-3  `}>
                  {footerData.socialLinks.map(
                    ({ icon: Icon, href, name }, index) => (
                      <Link
                        key={index}
                        href={href}
                        title={name}
                        className="w-12 h-12 px-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Copyright */}
              <div className={getTextAlignment()}>
                <p className="text-gray-400 text-sm">
                  © 2025{" "}
                  <span className="text-white font-semibold">
                    {t("Logista")}
                  </span>
                  . {t("All rights reserved")}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {t("Designed with ❤️ for global logistics excellence")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
