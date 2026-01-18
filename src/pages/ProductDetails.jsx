import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Package,
  Truck,
  Shield,
  Check,
  Star,
  Minus,
  Plus,
  MessageSquare,
  Calendar,
  Globe,
} from "lucide-react";
import { products } from "../data/products";
import InquiryModal from "../components/ui/InquiryModal";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold dark:text-white">
          Product not found
        </h2>
        <Link
          to="/products"
          className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
        >
          Browse all products
        </Link>
      </div>
    );
  }

  const handleInquiry = () => {
    setShowInquiryModal(true);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/products"
          className="ml-4 flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full">
                BULK DEAL
              </span>
            </div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Category & Brand */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                {product.category}
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                {product.subcategory}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                by {product.brand}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-bold dark:text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                {product.rating} • Min Order: {product.minOrder}{" "}
                {product.unit.split(" ")[0]}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Unit Price
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${product.price}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    per {product.unit}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Minimum Order
                  </div>
                  <div className="text-2xl font-bold dark:text-white">
                    {product.minOrder} units
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold dark:text-white mb-3">
                Quantity (Multiples of {product.minOrder})
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    setQuantity(
                      Math.max(product.minOrder, quantity - product.minOrder),
                    )
                  }
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="text-2xl font-bold dark:text-white px-6 py-3 bg-white dark:bg-gray-800 rounded-xl">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + product.minOrder)}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
                <div className="text-lg dark:text-white ml-4">
                  Total:{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInquiry}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Request Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold rounded-xl flex items-center gap-2"
              >
                <Package className="w-5 h-5" />
                Save Product
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold dark:text-white mb-6">
              Product Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${selectedFeature === index ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-200 dark:border-gray-700 hover:border-blue-300"}`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${selectedFeature === index ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"}`}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium dark:text-white">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Shipping & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500 text-white rounded-xl">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold dark:text-white">
                  Shipping Info
                </h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Global shipping available
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Door-to-door delivery
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Insurance included
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500 text-white rounded-xl">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold dark:text-white">
                  Quality Assurance
                </h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Certified quality standards
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Batch testing reports
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Money-back guarantee
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold dark:text-white mb-8">
            Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={relatedProduct.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h4 className="font-bold dark:text-white mb-2">
                  {relatedProduct.name}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    ${relatedProduct.price}
                  </span>
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <InquiryModal
            product={product}
            quantity={quantity}
            onClose={() => setShowInquiryModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
