import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Package,
  Filter,
  TrendingUp,
  Star,
  Globe,
  Tag,
  CheckCircle,
  Search,
  Layers,
  BarChart,
  Shield,
  Users,
  Zap,
  Headphones,
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { categories, products } from "../data/products";

const CategoryProducts = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [priceRange, setPriceRange] = useState(200);
  const [sortBy, setSortBy] = useState("popular");

  const category = categories.find((c) => c.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold dark:text-white">
          Category not found
        </h2>
        <Link
          to="/categories"
          className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
        >
          Browse all categories
        </Link>
      </div>
    );
  }

  const categoryProducts = products.filter((p) => p.category === category.name);

  const filteredProducts = categoryProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubcategory =
        selectedSubcategory === "All" ||
        product.subcategory === selectedSubcategory;

      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesSubcategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default: // 'popular'
          return b.rating - a.rating;
      }
    });

  const categoryStats = {
    totalProducts: categoryProducts.length,
    avgRating: (
      categoryProducts.reduce((acc, p) => acc + p.rating, 0) /
      categoryProducts.length
    ).toFixed(1),
    priceRange: {
      min: Math.min(...categoryProducts.map((p) => p.price)),
      max: Math.max(...categoryProducts.map((p) => p.price)),
    },
    brands: [...new Set(categoryProducts.map((p) => p.brand))].length,
  };

  // Get icon component properly
  const CategoryIcon = category.icon;

  return (
    <div className="space-y-12">
      {/* Category Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white"
        >
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/categories"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Categories</span>
            </Link>

            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                {category.productCount} Products Available
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex items-center justify-center w-32 h-32 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform">
                {CategoryIcon && <CategoryIcon className="w-16 h-16" />}
              </div>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                <span className="text-xs font-semibold">Featured Category</span>
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {category.name}
                <span className="block text-2xl md:text-3xl text-white/80 font-normal mt-2">
                  {category.description}
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                  <span className="text-sm">Growth: </span>
                  <span className="font-bold text-green-300">
                    {category.growth}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="font-bold">
                    {categoryStats.avgRating} Avg Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Category Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Products",
                value: categoryStats.totalProducts,
                icon: <Package className="w-5 h-5" />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                label: "Avg Rating",
                value: categoryStats.avgRating,
                icon: <Star className="w-5 h-5 fill-current" />,
                color: "from-yellow-400 to-orange-400",
              },
              {
                label: "Brands",
                value: categoryStats.brands,
                icon: <Users className="w-5 h-5" />,
                color: "from-green-400 to-emerald-400",
              },
              {
                label: "Price Range",
                value: `$${categoryStats.priceRange.min}-$${categoryStats.priceRange.max}`,
                icon: <Tag className="w-5 h-5" />,
                color: "from-purple-400 to-pink-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group-hover:scale-[1.02] transition-all duration-300">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 mb-4`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Enhanced Filters Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Search Card */}
          <div className="glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
            <div className="relative mb-6">
              <div className="absolute left-3 top-3.5">
                <Search className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search in category..."
                className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Subcategory Filter */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <Layers className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold dark:text-white">Subcategories</h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedSubcategory("All")}
                  className={`group w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                    selectedSubcategory === "All"
                      ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                      : "bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 backdrop-blur-sm"
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-lg ${
                      selectedSubcategory === "All"
                        ? "bg-white/20"
                        : "bg-white dark:bg-gray-700"
                    }`}
                  >
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="font-medium">All Subcategories</span>
                  <span
                    className={`ml-auto text-sm ${
                      selectedSubcategory === "All"
                        ? "text-white/80"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {categoryProducts.length}
                  </span>
                </button>
                {category.subcategories.map((subcat, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSubcategory(subcat.name)}
                    className={`group w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                      selectedSubcategory === subcat.name
                        ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                        : "bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 backdrop-blur-sm"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        selectedSubcategory === subcat.name
                          ? "bg-white/20"
                          : "bg-white dark:bg-gray-700"
                      }`}
                    >
                      {subcat.icon && <subcat.icon className="w-4 h-4" />}
                    </div>
                    <span className="font-medium">{subcat.name}</span>
                    <span
                      className={`ml-auto text-sm ${
                        selectedSubcategory === subcat.name
                          ? "text-white/80"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {
                        categoryProducts.filter(
                          (p) => p.subcategory === subcat.name,
                        ).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <Tag className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold dark:text-white">Price Range</h3>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  ${priceRange}
                </span>
              </div>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary-600 [&::-webkit-slider-thumb]:to-secondary-600"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2 px-2">
                <span className="font-medium">$0</span>
                <span className="font-medium">$200</span>
              </div>
            </div>

            {/* Sort */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <TrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold dark:text-white">Sort By</h3>
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none pl-10 pr-8"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <TrendingUp className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                <div className="absolute right-3 top-3.5 pointer-events-none">
                  <div className="w-4 h-4 border-r-2 border-b-2 border-gray-400 rotate-45 transform"></div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSubcategory("All");
                setPriceRange(200);
                setSortBy("popular");
              }}
              className="group w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Clear All Filters</span>
              <span className="group-hover:rotate-180 transition-transform">
                ↺
              </span>
            </button>
          </div>

          {/* Category Info Card */}
          <div className="glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <BarChart className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold dark:text-white">
                Category Insights
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "Fast Delivery",
                  description: "24-48 hour dispatch for most items",
                  color:
                    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Quality Verified",
                  description: "All suppliers are vetted and certified",
                  color:
                    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  title: "Global Shipping",
                  description: "Available in 50+ countries",
                  color:
                    "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                },
                {
                  icon: <Headphones className="w-5 h-5" />,
                  title: "Dedicated Support",
                  description: "24/7 customer service",
                  color:
                    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div
                    className={`p-2 rounded-lg ${feature.color} ${feature.color.split(" ")[0].replace("bg-", "bg-")}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-medium dark:text-white">
                      {feature.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Products Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-3 space-y-6"
        >
          {/* Enhanced Header */}
          <div className="glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
                    <CategoryIcon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {selectedSubcategory === "All"
                      ? "All Products"
                      : selectedSubcategory}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Showing results for{" "}
                  {selectedSubcategory === "All"
                    ? "all products"
                    : selectedSubcategory}{" "}
                  in {category.name}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-300/50 dark:border-gray-700/50">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedSubcategory !== "All" ? "1" : "0"} filter
                    {selectedSubcategory !== "All" ? "" : "s"} active
                  </span>
                </div>

                <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Export List
                </button>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <>
              {/* Products Grid */}
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

              {/* Category Summary */}
              <div className="glass p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white mb-2">
                      About {category.name} Category
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                      Discover the finest selection of{" "}
                      {category.name.toLowerCase()} products from trusted
                      suppliers worldwide. Each item is carefully vetted for
                      quality and value.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-sm font-medium dark:text-white">
                      Quality Assured
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold dark:text-white mb-4">
                      Benefits
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Competitive bulk pricing for businesses",
                        "Direct manufacturer relationships",
                        "Fast and reliable shipping",
                        "Quality control and certification",
                        "Flexible payment terms",
                        "Dedicated account management",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="p-0.5 rounded-full bg-green-100 dark:bg-green-900/30 mt-1">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white mb-4">
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Restaurants & Cafes",
                        "Hotels & Resorts",
                        "Retail Chains",
                        "Catering Services",
                        "Corporate Events",
                        "Food Manufacturers",
                        "Export Businesses",
                        "Hospitality Industry",
                      ].map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="glass p-12 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-xl"></div>
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
                  <Package className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">
                No Products Found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubcategory("All");
                  setPriceRange(200);
                  setSortBy("popular");
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Related Categories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold dark:text-white">
              Related Categories
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore similar categories you might be interested in
            </p>
          </div>
          <Link
            to="/categories"
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
          >
            <span>View All</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories
            .filter((c) => c.id !== category.id)
            .slice(0, 3)
            .map((relatedCategory) => {
              const RelatedIcon = relatedCategory.icon;
              return (
                <Link
                  key={relatedCategory.id}
                  to={`/category/${relatedCategory.id}`}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-transparent transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
                          {RelatedIcon && (
                            <RelatedIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                            {relatedCategory.name}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {relatedCategory.productCount} products •{" "}
                            {relatedCategory.growth} growth
                          </p>
                        </div>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 rotate-180 transform transition-colors" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {relatedCategory.description}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
