import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShieldCheck,
  Truck,
  Globe,
  ArrowRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Shop: [
      { label: "All Products", path: "/products" },
      { label: "Categories", path: "/categories" },
      { label: "Brands", path: "/brands" },
      { label: "Featured Products", path: "/products?featured=true" },
    ],
    Company: [
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Careers", path: "/careers" },
      { label: "Press", path: "/press" },
    ],
    Support: [
      { label: "FAQ", path: "/faq" },
      { label: "Shipping Info", path: "/shipping" },
      { label: "Returns", path: "/returns" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
    Business: [
      { label: "Become a Supplier", path: "/supplier" },
      { label: "Wholesale Program", path: "/wholesale" },
      { label: "Corporate Orders", path: "/corporate" },
      { label: "Custom Packaging", path: "/custom-packaging" },
    ],
  };

  return (
    <footer className="relative bg-white dark:bg-gray-950 pt-24 pb-12 overflow-hidden border-t border-gray-100 dark:border-gray-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="relative mb-20 p-8 sm:p-12 bg-gray-900 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Stay ahead of the market
              </h3>
              <p className="text-gray-400 text-lg">
                Get weekly insights on wholesale trends and exclusive bulk deals
                delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form
                className="relative group"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full pl-6 pr-32 py-5 bg-white/10 border border-white/10 focus:border-primary-500/50 rounded-2xl text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95">
                  <span className="text-sm font-semibold">Join us</span>
                  <Send size={16} />
                </button>
              </form>
              <p className="mt-4 px-2 text-[10px] text-gray-500 text-center lg:text-left uppercase tracking-widest font-bold">
                No spam. Just business. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="group flex items-center space-x-3 mb-8">
              <div className="p-2.5 bg-primary-600 rounded-xl shadow-lg shadow-primary-600/20 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight dark:text-white">
                Trade<span className="text-primary-600">Bridge</span>
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              The world's leading B2B marketplace. We connect millions of buyers
              and suppliers around the world.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={20} />, label: "Facebook" },
                { icon: <Twitter size={20} />, label: "Twitter" },
                { icon: <Instagram size={20} />, label: "Instagram" },
                { icon: <Linkedin size={20} />, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns  */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="group flex items-center py-2"
                      >
                        {/* Dot Indicator */}
                        <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3 group-hover:scale-150 group-hover:bg-primary-500 dark:group-hover:bg-primary-400 transition-all duration-300"></span>

                        {/* Text with Color Shift */}
                        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white font-medium transition-colors duration-300 relative">
                          {link.label}
                        </span>

                        {/* Counter Badge */}
                        {link.count && (
                          <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300">
                            {link.count}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-gray-100 dark:border-gray-900 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-2xl">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold dark:text-white">Secure Trading</p>
              <p className="text-sm text-gray-500">Verified suppliers only</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 rounded-2xl">
              <Truck size={24} />
            </div>
            <div>
              <p className="font-bold dark:text-white">Global Logistics</p>
              <p className="text-sm text-gray-500">
                Shipping to 190+ countries
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-success-50 dark:bg-success-900/20 text-success-600 rounded-2xl">
              <Globe size={24} />
            </div>
            <div>
              <p className="font-bold dark:text-white">24/7 Support</p>
              <p className="text-sm text-gray-500">Multi-language assistance</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-gray-500">
            <p>© {new Date().getFullYear()} TradeBridge Inc.</p>
            <Link
              to="/privacy"
              className="hover:text-primary-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-primary-600 transition-colors"
            >
              Sitemap
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                System Operational
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe size={14} />
              <select className="bg-transparent border-none focus:outline-none font-medium cursor-pointer">
                <option>English (US)</option>
                <option>Euro (EUR)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
