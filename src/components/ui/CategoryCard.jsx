import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const CategoryCard = ({ category, index }) => {
  // Create icon components with props
  const IconComponent = category.icon;
  const iconElement = IconComponent ? (
    <IconComponent {...category.iconProps} />
  ) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative"
    >
      <Link to={`/category/${category.id}`} className="block h-full">
        <div
          className={`h-full ${category.bgColor} border ${category.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-transparent overflow-hidden`}
        >
          {/* Background Gradient Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          />

          {/* Header */}
          <div className="relative flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Icon Container */}
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-sm`}
              >
                {iconElement}
              </div>

              {/* Category Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {category.productCount} products
                  </span>
                  <span className="flex items-center text-xs font-bold text-success-600 bg-success-100 dark:bg-success-900/30 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {category.growth}
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Indicator */}
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transform group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* Description */}
          <p className="relative text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {category.description}
          </p>

          {/* Subcategories */}
          <div className="relative">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Popular Items
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.slice(0, 5).map((sub, idx) => {
                const SubIconComponent = sub.icon;
                const subIconElement = SubIconComponent ? (
                  <SubIconComponent {...sub.iconProps} />
                ) : null;

                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors"
                  >
                    <span className="text-gray-500 dark:text-gray-400">
                      {subIconElement}
                    </span>
                    <span>{sub.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View More Button */}
          <div className="relative mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center group-hover:underline transition-colors">
              View all {category.productCount} products
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
