import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Send,
  ArrowLeft,
  CheckCircle,
  Package,
  User,
  Mail,
  Phone,
  Building,
  Globe,
  MessageSquare,
} from "lucide-react";
import { products } from "../data/products";

const Inquiry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    productId: "",
    quantity: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get("productId");
    const quantity = params.get("quantity");

    if (productId) {
      const product = products.find((p) => p.id === parseInt(productId));
      if (product) {
        setFormData((prev) => ({
          ...prev,
          productId,
          quantity: quantity || product.minOrder.toString(),
          message: `I'm interested in ${product.name} (Product ID: ${productId})`,
        }));
      }
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Inquiry submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      navigate("/");
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Product Inquiry</h1>
              <p className="text-blue-100">
                Submit your inquiry and our team will get back to you within 24
                hours
              </p>
            </div>
            <MessageSquare className="w-16 h-16 opacity-50" />
          </div>
        </div>

        {isSubmitted ? (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold dark:text-white mb-4">
              Inquiry Submitted Successfully!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Thank you for your interest. Our sales team will contact you
              within 24 hours with pricing and availability details.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl"
            >
              Return to Homepage
            </button>
          </motion.div>
        ) : (
          /* Inquiry Form */
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Product Info Card */}
              {formData.productId && (
                <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl">
                      <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">
                        Product Inquiry
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {
                          products.find(
                            (p) => p.id === parseInt(formData.productId),
                          )?.name
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div>
                <label className="block text-sm font-semibold dark:text-white mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold dark:text-white mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold dark:text-white mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold dark:text-white mb-2">
                  <Building className="inline w-4 h-4 mr-1" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold dark:text-white mb-2">
                  <Globe className="inline w-4 h-4 mr-1" />
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                  <option value="AE">United Arab Emirates</option>
                </select>
              </div>

              {formData.productId ? (
                <div>
                  <label className="block text-sm font-semibold dark:text-white mb-2">
                    <Package className="inline w-4 h-4 mr-1" />
                    Quantity *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    min={
                      products.find(
                        (p) => p.id === parseInt(formData.productId),
                      )?.minOrder || 1
                    }
                    step={
                      products.find(
                        (p) => p.id === parseInt(formData.productId),
                      )?.minOrder || 1
                    }
                    className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter quantity"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold dark:text-white mb-2">
                    Product ID (if known)
                  </label>
                  <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 12345"
                  />
                </div>
              )}
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-semibold dark:text-white mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please provide any additional details about your inquiry, such as preferred delivery timeline, specific requirements, or questions about the product..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              Submit Inquiry
            </motion.button>

            {/* Privacy Note */}
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
              By submitting this form, you agree to our Privacy Policy. We will
              never share your information with third parties.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Inquiry;
