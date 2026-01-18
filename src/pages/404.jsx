import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  AlertCircle,
  RefreshCcw,
  HelpCircle,
} from "lucide-react";

const ErrorPage = ({ errorCode = "404", errorMessage = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Illustration Area */}
        <div className="relative mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-[12rem] sm:text-[16rem] font-black leading-none tracking-tighter opacity-10 select-none">
              {errorCode}
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 relative"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                  <AlertCircle size={24} />
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white shadow-inner">
                  <HelpCircle size={64} className="opacity-90" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -z-20"></div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Oops! {errorMessage}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto text-balance">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all active:scale-95 group"
            >
              <Home
                size={20}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-95"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap justify-center gap-8">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
            >
              <RefreshCcw size={16} />
              Try Refreshing
            </button>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
            >
              <HelpCircle size={16} />
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
