import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Clock,
  TrendingUp,
  Star,
  Package,
  ArrowRight,
  Filter,
} from "lucide-react";

const SearchBar = ({
  placeholder = "Search products, brands, or categories...",
  showSuggestions = true,
  onSearch,
  className = "",
  size = "default",
  variant = "default",
  showFilterButton = false,
  onFilterClick,
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [popularSearches, setPopularSearches] = useState([
    "Potato Chips Bulk",
    "Orange Juice Concentrate",
    "Tomato Paste 25kg",
    "Shower Gel Hotel Size",
    "Cola Syrup 5 Gallon",
  ]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    // Load recent searches from localStorage
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches).slice(0, 5));
    }

    // Close suggestions when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const saveRecentSearch = (searchTerm) => {
    const updatedSearches = [
      searchTerm,
      ...recentSearches.filter((s) => s !== searchTerm),
    ].slice(0, 5);

    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSearch = (searchTerm = query) => {
    const term = searchTerm.trim();
    if (!term) return;

    saveRecentSearch(term);

    if (onSearch) {
      onSearch(term);
    } else {
      navigate(`/products?search=${encodeURIComponent(term)}`);
    }

    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const clearSearch = () => {
    setQuery("");
    setIsFocused(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "minimal":
        return "bg-transparent border-0 shadow-none";
      case "filled":
        return "bg-gray-100 dark:bg-gray-800 border-transparent";
      default:
        return "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 shadow-sm";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "h-10 text-sm";
      case "large":
        return "h-14 text-lg";
      default:
        return "h-12 text-base";
    }
  };

  const SearchSuggestions = () => (
    <AnimatePresence>
      {isFocused && showSuggestions && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
        >
          <div className="p-4">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <h4 className="font-semibold dark:text-white">
                      Recent Searches
                    </h4>
                  </div>
                  <button
                    onClick={clearRecentSearches}
                    className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    Clear all
                  </button>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {search}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <h4 className="font-semibold dark:text-white">
                  Popular Searches
                </h4>
              </div>
              <div className="space-y-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${index < 2 ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`}
                      >
                        {index < 2 ? (
                          <Star className="w-3 h-3" />
                        ) : (
                          <Package className="w-3 h-3" />
                        )}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {search}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold dark:text-white mb-3">
                Quick Filters
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Bulk Deals",
                  "Under $100",
                  "4+ Rating",
                  "Fast Shipping",
                  "Organic",
                ].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleSuggestionClick(filter)}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900/50">
            <button
              onClick={() => handleSearch()}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <Search className="w-4 h-4" />
              Search for "{query || "products"}"
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`relative flex items-center ${getSizeStyles()} ${getVariantStyles()} border rounded-2xl transition-all duration-300 ${isFocused ? "ring-2 ring-blue-500 border-blue-500" : ""}`}
        >
          {/* Search Icon */}
          <div className="absolute left-4 text-gray-400">
            <Search className={`${size === "small" ? "w-4 h-4" : "w-5 h-5"}`} />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={placeholder}
            className={`w-full pl-12 pr-12 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${size === "small" ? "text-sm" : ""}`}
          />

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className={`${size === "small" ? "w-4 h-4" : "w-5 h-5"}`} />
            </button>
          )}

          {/* Filter Button (Optional) */}
          {showFilterButton && onFilterClick && (
            <button
              type="button"
              onClick={onFilterClick}
              className="absolute right-12 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              title="Open filters"
            >
              <Filter
                className={`${size === "small" ? "w-4 h-4" : "w-5 h-5"}`}
              />
            </button>
          )}
        </div>

        {/* Search Button for Large Variant */}
        {size === "large" && (
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        )}
      </form>

      {/* Search Suggestions */}
      <SearchSuggestions />

      {/* Mobile Search Overlay */}
      {isFocused && showSuggestions && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsFocused(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
