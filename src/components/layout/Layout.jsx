import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  MessageSquare,
  HelpCircle,
  Shield,
  X,
  Zap,
} from "lucide-react";

const Layout = ({ children, darkMode, setDarkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const { pathname } = useLocation();

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track page changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [children]);

  // Auto ScrollToTop When path changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Fallback for older browsers
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Quick help options
  const helpOptions = [
    {
      icon: <MessageSquare size={16} />,
      label: "Live Chat",
      action: () => window.open("/chat", "_blank"),
    },
    {
      icon: <HelpCircle size={16} />,
      label: "Help Center",
      action: () => window.open("/help", "_blank"),
    },
    {
      icon: <Shield size={16} />,
      label: "Support Ticket",
      action: () => window.open("/support", "_blank"),
    },
    {
      icon: <Zap size={16} />,
      label: "Quick Tour",
      action: () => setIsHelpOpen(false),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 transition-colors duration-500">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400 animate-pulse">
                Loading...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

          {/* Animated Gradients */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-success-500/10 to-warning-500/10 rounded-full blur-3xl animate-float"></div>
        </div>

        {/* Page Content */}
        <motion.div
          key={currentPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="relative"
        >
          {/* Main Children Content */}
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            {children}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Help Button */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsHelpOpen(!isHelpOpen)}
            className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Get help"
          >
            <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.button>

          {/* Help Options */}
          <AnimatePresence>
            {isHelpOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full right-0 mb-3 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Need help?
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    We're here for you
                  </p>
                </div>
                <div className="p-2">
                  {helpOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={option.action}
                      className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <span className="text-gray-500 dark:text-gray-400">
                        {option.icon}
                      </span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Feedback Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFeedback(!showFeedback)}
          className="p-3 bg-success-600 hover:bg-success-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Give feedback"
        >
          <MessageSquare className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Feedback Modal */}
      <AnimatePresence>
        {showFeedback && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFeedback(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Share Feedback
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Help us improve your experience
                  </p>
                </div>
                <button
                  onClick={() => setShowFeedback(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your feedback
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows="4"
                    placeholder="Tell us what you think..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button
                    type="button"
                    onClick={() => setShowFeedback(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
