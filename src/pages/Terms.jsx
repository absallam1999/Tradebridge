import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Scale,
  AlertCircle,
  BookOpen,
  CheckCircle,
  XCircle,
  ChevronRight,
  Download,
  Printer,
  ExternalLink,
  Gavel,
  CreditCard,
  Truck,
  ShieldAlert,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const [activeSection, setActiveSection] = useState("agreement");

  const sections = [
    {
      id: "agreement",
      icon: <BookOpen className="w-5 h-5" />,
      title: "Agreement to Terms",
      content:
        "By accessing or using TradeBridge, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you (whether personally or on behalf of an entity) and TradeBridge Inc. regarding your access to and use of our wholesale marketplace.",
    },
    {
      id: "accounts",
      icon: <Scale className="w-5 h-5" />,
      title: "Wholesale Accounts",
      content:
        "To access our B2B marketplace, users must register for a professional account. You represent and warrant that:",
      list: [
        "You have the legal capacity to bind your business entity",
        "All registration information is truthful and accurate",
        "You will maintain the security of your account credentials",
        "You are a verified business entity or authorized representative",
      ],
    },
    {
      id: "products",
      icon: <Info className="w-5 h-5" />,
      title: "Product Information",
      content:
        "We strive for maximum accuracy in product listings. However, as a marketplace connecting multiple suppliers:",
      list: [
        "Product images are for illustrative purposes only",
        "Bulk quantities may have slight variations in packaging",
        "Pricing is subject to change based on market conditions",
        "Availability is not guaranteed until order confirmation",
      ],
    },
    {
      id: "payment",
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payment & Financials",
      content: "Our payment terms are designed for secure B2B transactions:",
      list: [
        "Minimum order value (MOV) is $500.00 USD",
        "Net-30 terms available for verified enterprise accounts",
        "Accepted: Wire Transfer, ACH, and major Corporate Cards",
        "All prices exclude VAT, Sales Tax, and Customs Duties",
      ],
    },
    {
      id: "shipping",
      icon: <Truck className="w-5 h-5" />,
      title: "Shipping & Logistics",
      content:
        "We facilitate global logistics through our network of carriers:",
      list: [
        "FOB (Free On Board) shipping point by default",
        "Estimated lead times are provided but not guaranteed",
        "Consignee is responsible for all import documentation",
        "Insurance is recommended for high-value bulk shipments",
      ],
    },
    {
      id: "returns",
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Returns & Claims",
      content:
        "Due to the wholesale nature of our platform, our return policy is strictly defined:",
      list: [
        "All sales are final upon shipment from the warehouse",
        "Claims for damages must be filed within 48 hours of receipt",
        "Defective items require photographic evidence for credit",
        "Restocking fees of 20% apply to authorized returns",
      ],
    },
    {
      id: "prohibited",
      icon: <XCircle className="w-5 h-5" />,
      title: "Prohibited Activities",
      content: "Users are strictly prohibited from engaging in:",
      list: [
        "Circumventing our marketplace fee structure",
        "Scraping product data for competitive analysis",
        "Posting fraudulent or misleading business credentials",
        "Interfering with the platform's security infrastructure",
      ],
    },
    {
      id: "liability",
      icon: <Gavel className="w-5 h-5" />,
      title: "Limitation of Liability",
      content:
        "TradeBridge provides a platform 'as is'. Our liability is limited to the maximum extent permitted by law. We are not responsible for indirect, consequential, or punitive damages arising from marketplace transactions or platform downtime.",
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
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Gavel size={14} />
              <span>Legal Framework</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Effective date: January 2026 • Version 1.0.0
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                <Download size={18} />
                Download PDF
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                <Printer size={18} />
                Print Terms
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
                Legal Sections
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

              <div className="mt-8 p-6 bg-gray-900 dark:bg-gray-800 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/20 blur-2xl"></div>
                <h4 className="font-bold mb-2 relative z-10">Legal Inquiry?</h4>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed relative z-10">
                  Direct your legal questions to our compliance department.
                </p>
                <a
                  href="mailto:contact@tradebridge.com"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors relative z-10"
                >
                  contact@tradebridge.com
                  <ExternalLink size={12} />
                </a>
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
                      <ul className="grid grid-cols-1 gap-3 list-none p-0">
                        {section.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm"
                          >
                            <div className="w-6 h-6 flex items-center justify-center bg-primary-50 dark:bg-primary-900/30 rounded-full shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Summary Box */}
            <div className="mt-20 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-[2.5rem] border border-blue-100/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-primary-600" />
                <h3 className="text-xl font-bold dark:text-white">
                  Important Summary
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                By using TradeBridge, you acknowledge that we are a B2B
                marketplace. All transactions are commercial in nature. Standard
                consumer protection laws may not apply in the same manner as B2C
                transactions. Please ensure you review your bulk orders
                carefully before final commitment.
              </p>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                TradeBridge Inc. • 123 Commerce Street, Alexandria, 220743 • +2
                (010 2345 6789)
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Terms;
