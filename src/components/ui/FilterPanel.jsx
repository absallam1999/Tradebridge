import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  Sliders,
  DollarSign,
  Tag,
  Check,
  Star,
  Package,
} from "lucide-react";

const FilterPanel = ({
  categories = [],
  brands = [],
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  minOrder,
  setMinOrder,
  onClearFilters,
  isMobile = false,
  isOpen = false,
  onClose = null,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    price: true,
    rating: true,
    order: true,
  });

  const priceMarks = [0, 50, 100, 150, 200];
  const ratingOptions = [4.5, 4.0, 3.5, 3.0, 2.5];
  const minOrderOptions = [1, 5, 10, 20, 50, 100];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterSection = ({ title, icon, sectionKey, children }) => (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 px-1 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {icon}
          </div>
          <span className="font-semibold dark:text-white">{title}</span>
        </div>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      <AnimatePresence>
        {expandedSections[sectionKey] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const FilterPanelContent = () => (
    <div className="space-y-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold dark:text-white">Filters</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Refine your search results
            </p>
          </div>
        </div>
        {isMobile && onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <FilterSection
        title="Categories"
        icon={<Tag className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
        sectionKey="category"
      >
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory("")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedCategory === "" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
          >
            <span>All Categories</span>
            {selectedCategory === "" && <Check className="w-4 h-4" />}
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                selectedCategory === category.name
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  selectedCategory === category.name
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}
              >
                {category.icon && <category.icon className="w-5 h-5" />}
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium dark:text-white">
                  {category.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {category.productCount} products
                </div>
              </div>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Brand Filter */}
      <FilterSection
        title="Brands"
        icon={
          <Package className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        }
        sectionKey="brand"
      >
        <div className="space-y-2">
          <button
            onClick={() => setSelectedBrand("")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedBrand === "" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
          >
            <span>All Brands</span>
            {selectedBrand === "" && <Check className="w-4 h-4" />}
          </button>

          {brands.map((brand) => (
            <button
              key={brand.id || brand}
              onClick={() => setSelectedBrand(brand.name || brand)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedBrand === (brand.name || brand) ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
            >
              <span className="flex items-center gap-3">
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name || brand}
                    className="w-6 h-6 object-contain rounded"
                  />
                )}
                <span>{brand.name || brand}</span>
              </span>
              {selectedBrand === (brand.name || brand) && (
                <Check className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection
        title="Price Range"
        icon={
          <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
        }
        sectionKey="price"
      >
        <div className="px-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 dark:text-gray-300">Max Price</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${priceRange}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="200"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-600 [&::-webkit-slider-thumb]:to-purple-500 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing"
          />

          <div className="flex justify-between mt-2">
            {priceMarks.map((mark) => (
              <div key={mark} className="flex flex-col items-center">
                <div className="w-1 h-1 bg-gray-400 rounded-full mb-1" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ${mark}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FilterSection>

      {/* Minimum Rating */}
      <FilterSection
        title="Minimum Rating"
        icon={<Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />}
        sectionKey="rating"
      >
        <div className="space-y-2">
          {ratingOptions.map((rating) => (
            <button
              key={rating}
              onClick={() => setMinRating(minRating === rating ? 0 : rating)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${minRating === rating ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
            >
              <span className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="ml-2">{rating}+</span>
              </span>
              {minRating === rating && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Minimum Order Quantity */}
      <FilterSection
        title="Min Order Quantity"
        icon={
          <Package className="w-4 h-4 text-orange-600 dark:text-orange-400" />
        }
        sectionKey="order"
      >
        <div className="space-y-2">
          {minOrderOptions.map((quantity) => (
            <button
              key={quantity}
              onClick={() => setMinOrder(minOrder === quantity ? 0 : quantity)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${minOrder === quantity ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
            >
              <span>
                {quantity === 1 ? "Any quantity" : `${quantity}+ units`}
              </span>
              {minOrder === quantity && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Actions */}
      <div className="pt-6 space-y-4">
        <button
          onClick={onClearFilters}
          className="w-full py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          Clear All Filters
        </button>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          {selectedCategory ||
          selectedBrand ||
          minRating > 0 ||
          minOrder > 0 ? (
            <span className="text-blue-600 dark:text-blue-400">
              Filters applied
            </span>
          ) : (
            "No filters applied"
          )}
        </div>
      </div>
    </div>
  );

  // Mobile Modal View
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Filter Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <FilterPanelContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Desktop View
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
      <FilterPanelContent />
    </div>
  );
};

export default FilterPanel;
