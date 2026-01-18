import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Package,
  Star,
  Filter,
  TrendingUp,
  Globe,
  Award,
  CheckCircle,
  Search,
  Layers,
  BarChart,
  Shield,
  Clock,
  Users,
  Headphones,
  Sparkles,
  Building2,
  BadgeCheck,
  Tag,
  BarChart as ChartBar,
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { brands, products } from "../data/products";

const BrandProducts = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(200);
  const [sortBy, setSortBy] = useState("popular");

  const brand = brands.find((b) => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!brand) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold dark:text-white">Brand not found</h2>
        <Link
          to="/brands"
          className="text-primary-600 dark:text-primary-400 hover:underline mt-4 inline-block"
        >
          Browse all brands
        </Link>
      </div>
    );
  }

  const brandProducts = products.filter((p) => p.brand === brand.name);

  const categories = ["All", ...new Set(brandProducts.map((p) => p.category))];

  const filteredProducts = brandProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
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

  const brandStats = {
    totalProducts: brandProducts.length,
    avgRating: (
      brandProducts.reduce((acc, p) => acc + p.rating, 0) / brandProducts.length
    ).toFixed(1),
    categories: [...new Set(brandProducts.map((p) => p.category))],
    priceRange: {
      min: Math.min(...brandProducts.map((p) => p.price)),
      max: Math.max(...brandProducts.map((p) => p.price)),
    },
    totalRevenue: brandProducts.reduce(
      (acc, p) => acc + p.price * p.minOrder,
      0,
    ),
  };

  return (
    <div className="space-y-12">
      {/* Brand Header */}
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
              to="/brands"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Brands</span>
            </Link>

            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                {brandStats.totalProducts} Products Available
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex items-center justify-center w-32 h-32 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                <BadgeCheck className="w-3 h-3 text-yellow-300" />
                <span className="text-xs font-semibold">Verified Partner</span>
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {brand.name}
                <span className="block text-2xl md:text-3xl text-white/80 font-normal mt-2">
                  {brand.description}
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                  <span className="text-sm">Category: </span>
                  <span className="font-bold text-green-300">
                    {brand.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="font-bold">
                    {brandStats.avgRating} Avg Rating
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span className="font-bold">
                    {brandStats.totalProducts} Products
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Brand Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Products",
                value: brandStats.totalProducts,
                icon: <Package className="w-5 h-5" />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                label: "Avg Rating",
                value: brandStats.avgRating,
                icon: <Star className="w-5 h-5 fill-current" />,
                color: "from-yellow-400 to-orange-400",
              },
              {
                label: "Categories",
                value: brandStats.categories.length,
                icon: <Layers className="w-5 h-5" />,
                color: "from-green-400 to-emerald-400",
              },
              {
                label: "Price Range",
                value: `$${brandStats.priceRange.min}-$${brandStats.priceRange.max}`,
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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
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
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <Layers className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold dark:text-white">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                        : "bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 backdrop-blur-sm"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        selectedCategory === category
                          ? "bg-white/20"
                          : "bg-white dark:bg-gray-700"
                      }`}
                    >
                      <Package className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{category}</span>
                    <span
                      className={`ml-auto text-sm ${
                        selectedCategory === category
                          ? "text-white/80"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {category === "All"
                        ? brandProducts.length
                        : brandProducts.filter((p) => p.category === category)
                            .length}
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
                setSelectedCategory("All");
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

          {/* Brand Info Card */}
          <div className="glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <BarChart className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold dark:text-white">Brand Features</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <BadgeCheck className="w-5 h-5" />,
                  title: "Verified Partner",
                  description: "Fully vetted and certified",
                  color:
                    "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  title: "Premium Quality",
                  description: "Industry-leading standards",
                  color:
                    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  title: "Global Reach",
                  description: "Available in 50+ countries",
                  color:
                    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
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
                  <div className={`p-2 rounded-lg ${feature.color}`}>
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
                    <Building2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {selectedCategory === "All"
                      ? "All Products"
                      : selectedCategory}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Showing {brand.name} products in{" "}
                  {selectedCategory === "All"
                    ? "all categories"
                    : selectedCategory}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-300/50 dark:border-gray-700/50">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedCategory !== "All" ? "1" : "0"} filter
                    {selectedCategory !== "All" ? "" : "s"} active
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

              {/* Brand Summary */}
              <div className="glass p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white mb-2">
                      About {brand.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                      {brand.description}. A trusted wholesale partner
                      delivering quality products with competitive pricing and
                      reliable service for businesses worldwide.
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
                      Why Choose {brand.name}?
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Consistent product quality and specifications",
                        "Reliable supply chain and inventory management",
                        "Competitive wholesale pricing for bulk orders",
                        "Fast shipping and delivery worldwide",
                        "Flexible payment terms for businesses",
                        "Dedicated account management support",
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
                      Order Information
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-300/50 dark:border-gray-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600 dark:text-gray-300">
                            Average MOQ:
                          </span>
                          <span className="font-semibold dark:text-white">
                            {Math.round(
                              brandProducts.reduce(
                                (acc, p) => acc + p.minOrder,
                                0,
                              ) / brandProducts.length,
                            )}{" "}
                            units
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600 dark:text-gray-300">
                            Lead Time:
                          </span>
                          <span className="font-semibold dark:text-white">
                            3-7 business days
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-300">
                            Custom Orders:
                          </span>
                          <span className="font-semibold text-green-600 dark:text-green-400">
                            Available
                          </span>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl">
                        <h5 className="font-semibold dark:text-white mb-2">
                          Categories Offered
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {brandStats.categories.map((category, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
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
                  setSelectedCategory("All");
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

      {/* Related Brands */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold dark:text-white">
              Related Brands
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore similar brands you might be interested in
            </p>
          </div>
          <Link
            to="/brands"
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
          >
            <span>View All</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands
            .filter((b) => b.id !== brand.id && b.category === brand.category)
            .slice(0, 3)
            .map((relatedBrand) => (
              <Link
                key={relatedBrand.id}
                to={`/brand/${relatedBrand.id}`}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-transparent transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-300/50 dark:border-gray-700/50">
                        <img
                          src={relatedBrand.logo}
                          alt={relatedBrand.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                          {relatedBrand.name}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {
                            products.filter(
                              (p) => p.brand === relatedBrand.name,
                            ).length
                          }{" "}
                          products • {relatedBrand.category}
                        </p>
                      </div>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 rotate-180 transform transition-colors" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {relatedBrand.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
