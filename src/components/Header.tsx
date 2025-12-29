"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";

// Professional Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams() as { locale: string };

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  // Function to switch language
  const switchLanguage = (locale: string) => {
    const pathSegments = pathname.split("/");
    if (["en", "ar"].includes(pathSegments[1])) {
      pathSegments[1] = locale;
    } else {
      pathSegments.splice(1, 0, locale);
    }
    const newPath = pathSegments.join("/");
    router.push(newPath);
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  // Function to handle service submenu click
  const handleServiceClick = (serviceType: string) => {
    const serviceSlug = serviceType.toLowerCase().replace(/\s+/g, "-");
    const servicesPath = `/${locale}/services/${serviceSlug}`;
    router.push(servicesPath);
    closeMobileMenu();
  };

  // Service submenu items with their respective slugs
  const serviceSubmenuItems = [
    {
      key: "customsConsultancy",
      value: t("Customs Consultancy"),
      slug: "customs-consultancy",
    },
    {
      key: "egyptianCustoms",
      value: t("Egyptian Customs Services"),
      slug: "egyptian-customs",
    },
    {
      key: "logisticsSupplyChain",
      value: t("Logistics & Supply Chain"),
      slug: "logistics",
    },
    {
      key: "customsClearance",
      value: t("Customs Clearance"),
      slug: "customs-clearance",
    },
    {
      key: "shippingServices",
      value: t("Shipping Services"),
      slug: "shipping",
    },
  ];

  // Get current locale from path
  const currentLocale = useMemo(() => {
    const pathSegments = pathname.split("/");
    return pathSegments[1] === "ar" ? "ar" : "en";
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const mobileMenu = document.querySelector(".mobile-menu");
        const target = event.target as Node;
        if (mobileMenu && !mobileMenu.contains(target)) {
          closeMobileMenu();
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed mx-auto w-full lg:w-[90%] xl:w-[80%] z-50 transition-all left-1/2 -translate-x-1/2 duration-300 ${
          isScrolled ? "top-0" : "top-0 lg:top-4"
        }`}
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
      >
        {/* Top Info Bar - Hidden on mobile */}
        <div className="bg-slate-800 text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center text-sm">
            <div
              className={`flex space-x-4 md:space-x-6 ${
                currentLocale === "ar" ? "space-x-reverse" : ""
              }`}
            >
              <span className="flex items-center text-xs md:text-sm">
                <svg
                  className={`w-3 h-3 md:w-4 md:h-4 ${
                    currentLocale === "ar" ? "ml-1 md:ml-2" : "mr-1 md:mr-2"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("hours")}
              </span>
            </div>
            <div
              className={`flex space-x-3 md:space-x-4 items-center ${
                currentLocale === "ar" ? "space-x-reverse" : ""
              }`}
            >
              <span className="hidden sm:flex items-center text-xs md:text-sm">
                <svg
                  className={`w-3 h-3 md:w-4 md:h-4 ${
                    currentLocale === "ar" ? "ml-1 md:ml-2" : "mr-1 md:mr-2"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span
                  dir="ltr"
                  style={{
                    unicodeBidi: "bidi-override",
                    fontFamily: "monospace",
                  }}
                >
                  +02 034951015
                </span>{" "}
              </span>
              <span className="hidden md:flex items-center text-xs md:text-sm">
                <svg
                  className={`w-3 h-3 md:w-4 md:h-4 ${
                    currentLocale === "ar" ? "ml-1 md:ml-2" : "mr-1 md:mr-2"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@global-logiestics.com
              </span>
              {/* Language Switcher - Desktop */}
              <div
                className={`flex items-center space-x-2 border-gray-600 pl-3 ml-3 ${
                  currentLocale === "ar"
                    ? "border-r pr-3 mr-3 border-l-0 pl-0 ml-0 space-x-reverse"
                    : "border-l"
                }`}
              >
                <button
                  onClick={() => switchLanguage("en")}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    currentLocale === "en"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage("ar")}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    currentLocale === "ar"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div
          className={`bg-white shadow-lg transition-all duration-300 ${
            isScrolled ? "shadow-2xl" : "shadow-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex justify-between items-center py-3 md:py-4">
              {/* Logo */}
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-32 h-12 sm:w-32 sm:h-12 md:w-32 md:h-12 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt="Glob logistics"
                    width={120}
                    height={45}
                    priority // Add this prop
                    className="w-auto h-full object-contain rounded-lg"
                  />
                </div>
                <div
                  className={
                    currentLocale === "ar" ? "text-right" : "text-left"
                  }
                >
                  {/* <h1 className="text-base sm:text-lg md:text-2xl leading-4.5 text-center font-extrabold text-[#292f5d] ">
                    GLOB<span className="font-bold block">logistics</span>
                  </h1> */}
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav
                className={`hidden lg:flex items-center ${
                  currentLocale === "ar"
                    ? "space-x-reverse space-x-6 xl:space-x-8"
                    : "space-x-6 xl:space-x-8"
                }`}
              >
                {[
                  { name: t("home"), href: "/home" },
                  { name: t("about"), href: "/about" },
                  {
                    name: t("services"),
                    href: "/services/customs-consultancy", // Main services page
                    submenu: serviceSubmenuItems,
                  },
                  { name: t("contact"), href: "/contact" },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <Link
                      href={
                        locale ? `/${locale}${item.href}` : item.href || "#"
                      }
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 flex items-center text-sm xl:text-base"
                    >
                      {item.name}
                      {item.submenu && (
                        <svg
                          className={`w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:rotate-180 ${
                            currentLocale === "ar" ? "mr-1" : "ml-1"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </Link>
                    {item.submenu && (
                      <div
                        className={`absolute top-full ${
                          currentLocale === "ar" ? "right-0" : "left-0"
                        } mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => handleServiceClick(subItem.slug)}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.value}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Button & Search - Desktop */}
              <div
                className={`hidden lg:flex items-center ${
                  currentLocale === "ar"
                    ? "space-x-reverse space-x-3"
                    : "space-x-3"
                }`}
              >
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <Link
                  href={`/${locale}/contact`}
                  className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
                >
                  {t("getQuote")}
                </Link>
              </div>

              {/* Mobile Controls */}
              <div
                className={`flex items-center lg:hidden ${
                  currentLocale === "ar"
                    ? "space-x-reverse space-x-2"
                    : "space-x-2"
                }`}
              >
                {/* Mobile Search Button */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Search"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
              <div className="pb-3 md:pb-4">
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base ${
                      currentLocale === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={currentLocale === "ar" ? "rtl" : "ltr"}
                  />
                  <button
                    className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${
                      currentLocale === "ar" ? "left-3" : "right-3"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#00000030] bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto mobile-menu transform transition-transform duration-300 ease-in-out ${
              currentLocale === "ar" ? "left-0" : "right-0"
            } lg:hidden`}
          >
            <div className="p-4 sm:p-6">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {t("Global logistics")}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
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

              {/* Mobile Language Switcher */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  {currentLocale === "ar" ? "اللغة" : "Language"}
                </h3>
                <div
                  className={`flex p-1 bg-gray-100 rounded-lg ${
                    currentLocale === "ar"
                      ? "space-x-reverse space-x-1"
                      : "space-x-1"
                  }`}
                >
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentLocale === "en"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLanguage("ar")}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentLocale === "ar"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {[
                  { name: t("home"), href: "/home" },
                  { name: t("about"), href: "/about" },
                  {
                    name: t("services"),
                    href: "/services", // Main services page
                    submenu: serviceSubmenuItems,
                  },
                  { name: t("contact"), href: "/contact" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.href || "#"}
                        className="text-gray-700 font-medium flex-1 py-3 text-base hover:text-blue-600 transition-colors"
                        onClick={item.submenu ? undefined : closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-2"
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeSubmenu === index ? "rotate-180" : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.submenu && activeSubmenu === index && (
                      <div className="pl-4 pb-3 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => handleServiceClick(subItem.slug)}
                            className="block w-full text-left text-gray-600 py-2 px-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm"
                          >
                            {subItem.value}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA and Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="#"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold mb-6 hover:bg-blue-700 transition-colors text-base"
                  onClick={closeMobileMenu}
                >
                  {t("getQuote")}
                </Link>

                <div className="space-y-3 text-sm text-gray-600">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    {currentLocale === "ar" ? "تواصل معنا" : "Contact Info"}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-4 h-4 text-blue-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+02 033955582</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-4 h-4 text-blue-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>support@global-logiestics.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from being hidden behind fixed header */}
    </>
  );
};

export default Header;
