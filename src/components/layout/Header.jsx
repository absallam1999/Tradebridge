import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Menu,
  X,
  Home,
  Info,
  Phone,
  Package,
  Layers,
  Tag,
  Search,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Building2,
  Plus,
} from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import SearchBar from "../ui/SearchBar";

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for modern sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <Home size={18} />,
      description: "Home Page",
    },
    {
      path: "/products",
      label: "Products",
      icon: <Package size={18} />,
      description: "Browse Catalog",
    },
    {
      path: "/categories",
      label: "Categories",
      icon: <Layers size={18} />,
      description: "Product Categories",
    },
    {
      path: "/brands",
      label: "Brands",
      icon: <Tag size={18} />,
      description: "Trusted Brands",
    },
    {
      path: "/suppliers",
      label: "Suppliers",
      icon: <Building2 size={18} />,
      description: "Verified Partners",
    },
    {
      path: "/about",
      label: "About",
      icon: <Info size={18} />,
      description: "Our Story",
    },
  ];

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 shadow-soft"
          : "py-4 bg-gradient-to-b from-white/95 to-white/85 dark:from-gray-900/95 dark:to-gray-900/85"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="group flex items-center space-x-3 relative">
              {/* Animated Background Effect */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Logo Container */}
              <div className="relative p-2.5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-100/80 dark:border-gray-800/80 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <ShoppingBag className="w-6 h-6 text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <div className="flex items-baseline space-x-2">
                  <h1 className="text-2xl font-bold tracking-tight">
                    <span className="gradient-text font-extrabold">Trade</span>
                    <span className="text-gray-900 dark:text-white font-bold">
                      Bridge
                    </span>
                  </h1>
                </div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5 tracking-wide">
                  B2B Wholesale Platform
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.path} className="relative">
                <Link
                  to={item.path}
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group flex flex-col items-center justify-center ${
                    location.pathname === item.path
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {/* Text Label */}
                  <span className="text-xs font-medium transition-colors duration-300">
                    {item.label}
                  </span>

                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>

                  {/* Hover Border Animation */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-800 rounded-lg transition-all duration-300 -z-10"></div>
                </Link>

                {/* Hover Tooltip */}
                {activeHover === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 text-xs font-medium rounded-lg shadow-lg z-50 min-w-max"
                  >
                    {item.description}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45"></div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="hidden lg:block w-64">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search products, suppliers..."
                className="w-full"
                darkMode={darkMode}
                size="small"
              />
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-1">
              <div className="hidden sm:block">
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </div>

            {/* Request Inquiry Button */}
            <div className="relative">
              <button
                onClick={() => navigate("/inquiry")}
                className="group relative flex items-center justify-between px-2 py-2 bg-primary-600 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden min-w-[140px]"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Left Side Content */}
                <div className="relative flex items-center space-x-2">
                  {/* Icon Container */}
                  <div className="p-1.5 rounded-lg bg-gray-900 group-hover:bg-primary-500 transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <span className="text-sm font-semibold px-1">
                    New Request
                  </span>
                </div>

                {/* Right Arrow */}
                <ChevronRight
                  size={16}
                  className="relative transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                />

                {/* Success Indicator */}
                <div className="absolute -bottom-6 right-2 w-12 h-12 bg-success-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:-translate-y-6 transition-all duration-500"></div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-100 dark:border-gray-800 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-primary-500/5 to-transparent">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="p-2.5 bg-primary-600 rounded-lg">
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <div>
                      <p className="font-bold text-lg dark:text-white">
                        TradeBridge
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        B2B Platform
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search in Mobile Menu */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                  <SearchBar
                    onSearch={handleSearch}
                    placeholder="Search products..."
                    className="w-full"
                    compact={true}
                    darkMode={darkMode}
                  />
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all group ${
                          location.pathname === item.path
                            ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {/* Icon Container */}
                          <div
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              location.pathname === item.path
                                ? "bg-primary-100 dark:bg-primary-900/30"
                                : "bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20"
                            }`}
                          >
                            {React.cloneElement(item.icon, {
                              className: `w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                                location.pathname === item.path
                                  ? "text-primary-600 dark:text-primary-400"
                                  : "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                              }`,
                            })}
                          </div>

                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="font-medium">{item.label}</p>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Active Indicator */}
                        {location.pathname === item.path ? (
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Quick Actions
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => {
                          navigate("/inquiry");
                          setIsMenuOpen(false);
                        }}
                        className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-center hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-sm transition-all"
                      >
                        <Sparkles className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                        <span className="text-xs font-medium">New RFQ</span>
                      </button>
                      <button className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-center hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-sm transition-all">
                        <TrendingUp className="w-5 h-5 text-success-500 mx-auto mb-2" />
                        <span className="text-xs font-medium">Analytics</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
