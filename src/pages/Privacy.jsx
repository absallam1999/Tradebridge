import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Mail,
  Cookie,
  Settings,
  ChevronRight,
  Download,
  Printer,
  ExternalLink,
  Info,
  CheckCircle2,
  AlertCircle,
  Scale,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "intro",
      icon: <Info className="w-5 h-5" />,
      title: "Introduction",
      content:
        "At TradeBridge, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our wholesale marketplace platform. As a B2B focused entity, we understand the importance of protecting business-sensitive data alongside personal information.",
    },
    {
      id: "collection",
      icon: <Shield className="w-5 h-5" />,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create a business account, place a bulk order, or contact our support team. This includes:",
      list: [
        "Personal identifiers (Name, Email, Phone Number)",
        "Business credentials (Tax ID, Business License, Company Name)",
        "Financial data (Billing address, payment method details)",
        "Commercial information (Purchase history, inquiry records)",
      ],
    },
    {
      id: "usage",
      icon: <Lock className="w-5 h-5" />,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services. Specifically for:",
      list: [
        "Processing and fulfilling wholesale transactions",
        "Verifying business credentials for marketplace security",
        "Sending technical notices, updates, and security alerts",
        "Personalizing your marketplace experience based on industry",
      ],
    },
    {
      id: "sharing",
      icon: <Eye className="w-5 h-5" />,
      title: "Information Sharing",
      content:
        "We do not sell your personal or business information. We may share information with third-party vendors who perform services on our behalf, such as:",
      list: [
        "Logistics and shipping partners for order fulfillment",
        "Payment processors and fraud prevention services",
        "Cloud infrastructure and data analysis providers",
        "Legal authorities when required by applicable law",
      ],
    },
    {
      id: "cookies",
      icon: <Cookie className="w-5 h-5" />,
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar tracking technologies to track activity on our website and hold certain information. This helps us remember your preferences and understand how you interact with our bulk listing tools.",
    },
    {
      id: "rights",
      icon: <Scale className="w-5 h-5" />,
      title: "Your Rights & Choices",
      content:
        "Depending on your location (e.g., GDPR, CCPA), you have specific rights regarding your data:",
      list: [
        "Right to access and export your data",
        "Right to rectify inaccurate information",
        "Right to request deletion of your account",
        "Right to object to automated decision-making",
      ],
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "Contact Our Privacy Team",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please reach out to our dedicated privacy office:",
      contactInfo: {
        email: "privacy@tradebridge.com",
        address:
          "Privacy Officer, TradeBridge Inc., 123 Commerce Street, New York, NY 10001",
        response: "Typical response time: 2-3 business days",
      },
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Header */}
      <div className="relative py-20 overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} />
              <span>Trust & Transparency</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Last updated: January, 2026 • Version 1.0.0
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                <Download size={18} />
                Download PDF
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                <Printer size={18} />
                Print Policy
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-28 space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                Contents
              </p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                      : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-900 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={
                      activeSection === section.id ? "opacity-100" : "opacity-0"
                    }
                  />
                </button>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl text-white shadow-xl">
                <h4 className="font-bold mb-2">Need help?</h4>
                <p className="text-xs text-white/80 mb-4 leading-relaxed">
                  Our legal team is here to clarify any data-related questions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors"
                >
                  Contact Support
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-3xl">
            <div className="space-y-16">
              {sections.map((section) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm text-primary-600">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {section.content}
                    </p>

                    {section.list && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                        {section.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm"
                          >
                            <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contactInfo && (
                      <div className="mt-8 p-8 bg-gray-900 dark:bg-gray-800 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-3xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                              <Mail className="w-5 h-5 text-primary-400" />
                            </div>
                            <span className="font-bold text-lg">
                              {section.contactInfo.email}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {section.contactInfo.address}
                          </p>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                            <AlertCircle
                              size={14}
                              className="text-primary-400"
                            />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                              {section.contactInfo.response}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                This policy is designed to comply with global data protection
                regulations including GDPR, CCPA, and LGPD. By continuing to use
                our services, you acknowledge and agree to these terms.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
