import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Package, TrendingUp, ArrowRight } from "lucide-react";

const BrandCard = ({ brand, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
    >
      {/* Brand Header */}
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-contain p-6"
        />
      </div>

      {/* Brand Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold dark:text-white mb-1">
              {brand.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {brand.category}
            </p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold dark:text-white">4.5</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2">
          {brand.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold dark:text-white">
              {brand.productCount}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Products
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold dark:text-white">30+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Countries
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/brand/${brand.id}`} className="block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center group/btn"
          >
            <span>View Products</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BrandCard;
