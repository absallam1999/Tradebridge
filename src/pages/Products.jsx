import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Grid,
  List,
  TrendingUp,
  X,
  SlidersHorizontal,
  Package,
  Sparkles,
  Zap,
  Award,
  Truck,
  Clock,
  CheckCircle,
  Tag,
  ShoppingBag,
  Star,
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import FilterPanel from "../components/ui/FilterPanel";
import SearchBar from "../components/ui/SearchBar";
import { products, categories, brands } from "../data/products";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState(200);
  const [minRating, setMinRating] = useState(0);
  const [minOrder, setMinOrder] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      const matchesPrice = product.price <= priceRange;
      const matchesRating = product.rating >= minRating;
      const matchesMinOrder = minOrder === 0 || product.minOrder >= minOrder;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesRating &&
        matchesMinOrder
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default: // 'popular'
          return b.rating - a.rating;
      }
    });

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setPriceRange(200);
    setMinRating(0);
    setMinOrder(0);
    setSortBy("popular");
  };

  const activeFiltersCount = [
    selectedCategory,
    selectedBrand,
    priceRange < 200,
    minRating > 0,
    minOrder > 0,
  ].filter(Boolean).length;

  // Quick stats
  const stats = [
    {
      label: "Products",
      value: products.length,
      icon: <Package className="w-4 h-4" />,
      color: "text-primary-600 dark:text-primary-400",
    },
    {
      label: "Categories",
      value: categories.length,
      icon: <ShoppingBag className="w-4 h-4" />,
      color: "text-success-600 dark:text-success-400",
    },
    {
      label: "Brands",
      value: brands.length,
      icon: <Award className="w-4 h-4" />,
      color: "text-secondary-600 dark:text-secondary-400",
    },
    {
      label: "Lowest Price",
      value: "$45.99",
      icon: <Tag className="w-4 h-4" />,
      color: "text-warning-600 dark:text-warning-400",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600/5 via-secondary-600/5 to-primary-600/5 border border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white mb-6 shadow-lg"
          >
            <Package className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Wholesale <span className="gradient-text">Products</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Discover premium products at competitive wholesale prices. Direct
            manufacturer access with bulk discounts for businesses.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`p-2 rounded-lg ${stat.color} bg-opacity-10 dark:bg-opacity-20`}
                  >
                    {stat.icon}
                  </div>
                  <span className="text-xs font-semibold bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 px-2 py-1 rounded-full">
                    +8%
                  </span>
                </div>
                <div className="text-2xl font-bold dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full">
            <SearchBar
              placeholder="Search products by name, brand, category, or description..."
              onSearch={setSearchQuery}
              size="large"
              showFilterButton
              onFilterClick={() => setShowMobileFilters(true)}
              className="w-full"
            />
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors">
              <Zap className="w-4 h-4" />
              Advanced Search
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          {
            icon: <Truck className="w-5 h-5" />,
            label: "Global Shipping",
            color:
              "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
          },
          {
            icon: <Clock className="w-5 h-5" />,
            label: "24/7 Support",
            color:
              "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
          },
          {
            icon: <CheckCircle className="w-5 h-5" />,
            label: "Quality Checked",
            color:
              "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
          },
          {
            icon: <Sparkles className="w-5 h-5" />,
            label: "Verified Suppliers",
            color:
              "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-4 rounded-xl border ${feature.color.split(" ")[0].replace("bg-", "border-")}/20`}
          >
            <div className={`p-2 rounded-lg ${feature.color}`}>
              {feature.icon}
            </div>
            <span className="text-sm font-medium dark:text-white">
              {feature.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Panel - Desktop */}
        <div className="lg:block hidden">
          <FilterPanel
            categories={categories}
            brands={brands}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minRating={minRating}
            setMinRating={setMinRating}
            minOrder={minOrder}
            setMinOrder={setMinOrder}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Products Section */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header Bar */}
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      Search Results
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white">
                    {filteredProducts.length} Products Found
                  </h2>
                </div>
                {activeFiltersCount > 0 && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium rounded-full">
                    <SlidersHorizontal className="w-3 h-3" />
                    {activeFiltersCount} active filter
                    {activeFiltersCount !== 1 ? "s" : ""}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort By */}
                <div className="relative">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 dark:text-gray-300 text-sm font-medium appearance-none pr-6"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                  </div>
                </div>

                {/* View Toggle */}
                <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2.5 ${viewMode === "grid" ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-r border-gray-200 dark:border-gray-700" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2.5 ${viewMode === "list" ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 bg-white/20 text-xs rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Active Filters */}
            <AnimatePresence>
              {activeFiltersCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm">
                        Category: {selectedCategory}
                        <button
                          onClick={() => setSelectedCategory("")}
                          className="hover:text-primary-900 dark:hover:text-primary-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {selectedBrand && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 rounded-full text-sm">
                        Brand: {selectedBrand}
                        <button
                          onClick={() => setSelectedBrand("")}
                          className="hover:text-secondary-900 dark:hover:text-secondary-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {priceRange < 200 && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 rounded-full text-sm">
                        Max Price: ${priceRange}
                        <button
                          onClick={() => setPriceRange(200)}
                          className="hover:text-success-900 dark:hover:text-success-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {minRating > 0 && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400 rounded-full text-sm">
                        Min Rating: {minRating}+
                        <button
                          onClick={() => setMinRating(0)}
                          className="hover:text-warning-900 dark:hover:text-warning-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {minOrder > 0 && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm">
                        Min Order: {minOrder}+ units
                        <button
                          onClick={() => setMinOrder(0)}
                          className="hover:text-orange-900 dark:hover:text-orange-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm font-medium"
                    >
                      <X className="w-3 h-3" />
                      Clear all
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-full rounded-xl overflow-hidden group">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                              -20%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold dark:text-white">
                                {product.name}
                              </h3>
                              <span className="px-2 py-0.5 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 text-xs font-bold rounded-full">
                                Bestseller
                              </span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                              {product.brand} • {product.category}
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {product.rating} ({product.reviews || 24})
                              </span>
                            </div>
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            ${product.price}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Package className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Min Order:{" "}
                                <span className="font-semibold dark:text-white">
                                  {product.minOrder}
                                </span>{" "}
                                units
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Tag className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Total:{" "}
                                <span className="font-semibold dark:text-white">
                                  ${product.price * product.minOrder}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="px-5 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                              Quick View
                            </button>
                            <button className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors">
                              Add to Inquiry
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 card"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">
                No Products Found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're
                looking for.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing 1-{filteredProducts.length} of {filteredProducts.length}{" "}
                products
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-xl">
                  1
                </button>
                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  10
                </button>
                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Panel */}
      <FilterPanel
        isMobile
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        categories={categories}
        brands={brands}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minRating={minRating}
        setMinRating={setMinRating}
        minOrder={minOrder}
        setMinOrder={setMinOrder}
        onClearFilters={clearFilters}
      />

      {/* Bulk Order CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-800/50"
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-6">
            <ShoppingBag className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              Bulk Order Special
            </span>
          </div>
          <h2 className="text-3xl font-bold dark:text-white mb-4">
            Need Large Quantities?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our sales team for custom pricing on large volume orders. We
            offer additional discounts for bulk purchases across multiple
            products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
              Request Bulk Quote
            </button>
            <button className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              Download Catalog
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
