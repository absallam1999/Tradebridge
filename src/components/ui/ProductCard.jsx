import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Star,
  Package,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bulk Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold rounded-full">
            BULK
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg dark:text-white line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              {product.brand}
            </p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold dark:text-white">
              {product.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Pricing & Minimum Order */}
        <div className="mb-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                ${product.price}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                per {product.unit}
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <Package className="w-4 h-4 mr-1" />
                Min: {product.minOrder}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ${(product.price * product.minOrder).toFixed(2)} total
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-4 h-4 text-success-500 mr-2" />
            <span className="text-sm font-semibold dark:text-white">
              Features:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/product/${product.id}`} className="block w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>

      {/* Hover Effect Overlay */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default ProductCard;
