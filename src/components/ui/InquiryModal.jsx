import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Package, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InquiryModal = ({ product, quantity, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: `I'm interested in ${product?.name}. Quantity: ${quantity} ${product?.unit}`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Navigate to inquiry page after submission
      setTimeout(() => {
        navigate(`/inquiry?productId=${product.id}&quantity=${quantity}`);
        onClose();
      }, 2000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Request Quote</h2>
                  <p className="text-blue-100">{product?.name}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSubmitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">
                  Inquiry Started!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Redirecting to full inquiry form for more details...
                </p>
              </motion.div>
            ) : (
              /* Inquiry Form */
              <form onSubmit={handleSubmit}>
                {/* Product Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold dark:text-white">
                        {product?.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Quantity: {quantity} {product?.unit}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ${(product?.price * quantity).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        Estimated Total
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium dark:text-white mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium dark:text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium dark:text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl"
                      placeholder="Your Company Inc."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium dark:text-white mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl"
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </motion.button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InquiryModal;
