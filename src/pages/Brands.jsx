import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  TrendingUp,
  Package,
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  Truck,
  Zap,
  Headphones,
  BadgeCheck,
  ShoppingBag,
  BarChart,
  Building2,
  Target,
  Layers,
} from "lucide-react";
import { brands, products } from "../data/products";

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Foods", "Drinks", "Non-Food"];

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || brand.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getBrandStats = (brandId) => {
    const brandProducts = products.filter(
      (p) => p.brand === brands.find((b) => b.id === brandId)?.name,
    );
    const avgRating =
      brandProducts.reduce((acc, p) => acc + p.rating, 0) /
      brandProducts.length;

    return {
      productCount: brandProducts.length,
      avgRating: avgRating.toFixed(1),
      categories: [...new Set(brandProducts.map((p) => p.category))],
      minOrder: Math.min(...brandProducts.map((p) => p.minOrder)),
      totalRevenue: brandProducts.reduce(
        (acc, p) => acc + p.price * p.minOrder,
        0,
      ),
    };
  };

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600/5 via-secondary-600/5 to-primary-600/5 border border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white mb-6 shadow-lg"
          >
            <Building2 className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Our Trusted <span className="gradient-text">Brands</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Discover premium wholesale brands trusted by businesses worldwide.
            Every partner is carefully vetted for quality, reliability, and
            competitive pricing.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              {
                label: "Total Brands",
                value: brands.length,
                icon: <Building2 className="w-4 h-4" />,
                color: "text-primary-600 dark:text-primary-400",
              },
              {
                label: "Categories",
                value: "12+",
                icon: <Layers className="w-4 h-4" />,
                color: "text-warning-600 dark:text-warning-400",
              },
              {
                label: "Verfied Product",
                value: "200+",
                icon: <Package className="w-4 h-4" />,
                color: "text-secondary-600 dark:text-secondary-400",
              },
              {
                label: "Verified Suppliers",
                value: "75+",
                icon: <Building2 className="w-4 h-4" />,
                color: "text-success-600 dark:text-success-400",
              },
            ].map((stat, index) => (
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
                    +12%
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

      {/* Search & Filters Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-end">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Search className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-sm font-semibold dark:text-white">
                Search Brands
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand name, description, or specialty..."
                className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
          </div>

          <div className="w-full lg:w-72">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Filter className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-sm font-semibold dark:text-white">
                Filter by Category
              </span>
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none pl-10 pr-8"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
              <div className="absolute right-3 top-3.5 pointer-events-none">
                <div className="w-4 h-4 border-r-2 border-b-2 border-gray-400 rotate-45 transform"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            Clear All
          </button>
        </div>
      </motion.div>

      {/* Results Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold dark:text-white mb-2">
            Premium Brand Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {filteredBrands.length} of {brands.length} brands match your
            criteria
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-300/50 dark:border-gray-700/50">
            <ShoppingBag className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {filteredBrands.length}{" "}
              {filteredBrands.length === 1 ? "brand" : "brands"} selected
            </span>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand, index) => {
          const stats = getBrandStats(brand.id);

          return (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative cursor-pointer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Brand Card */}
              <div className="relative h-full glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm group-hover:border-transparent transition-all duration-300 group-hover:shadow-2xl overflow-hidden">
                {/* Animated Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-xl"></div>
                </div>

                <div className="absolute bottom-0 right-0 w-16 h-16 translate-x-8 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-xl"></div>
                </div>

                {/* Brand Header with Logo */}
                <div className="relative mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-primary-500/50 transition-colors duration-300">
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                          <BadgeCheck className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {brand.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-medium">
                            {brand.category}
                          </span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(stats.avgRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                              />
                            ))}
                            <span className="ml-1 text-xs font-medium dark:text-white">
                              {stats.avgRating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Brand Stats */}
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        icon: <Package className="w-4 h-4" />,
                        value: stats.productCount,
                        label: "Products",
                        color: "from-blue-500 to-cyan-500",
                        bg: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                      },
                      {
                        icon: <Users className="w-4 h-4" />,
                        value: `${stats.productCount * 100}+`,
                        label: "Customers",
                        color: "from-green-500 to-emerald-500",
                        bg: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                      },
                      {
                        icon: <TrendingUp className="w-4 h-4" />,
                        value:
                          "$" + (stats.totalRevenue / 1000).toFixed(0) + "K",
                        label: "Revenue",
                        color: "from-purple-500 to-pink-500",
                        bg: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                      },
                    ].map((stat, idx) => (
                      <div key={idx} className="relative group/stat">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl blur-xl opacity-0 group-hover/stat:opacity-20 transition-opacity`}
                        ></div>
                        <div
                          className={`relative flex flex-col items-center p-3 rounded-xl ${stat.bg.split(" ")[0]} backdrop-blur-sm`}
                        >
                          <div className="mb-2">{stat.icon}</div>
                          <div className="text-lg font-bold">{stat.value}</div>
                          <div className="text-xs opacity-80">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories & Features */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-semibold dark:text-white">
                      Specialties
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stats.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6 border-t border-gray-200/30 dark:border-gray-700/30 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold dark:text-white">
                        Features
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        icon: <Truck className="w-3 h-3" />,
                        text: "Global Shipping",
                      },
                      {
                        icon: <Zap className="w-3 h-3" />,
                        text: "Fast Dispatch",
                      },
                      {
                        icon: <Headphones className="w-3 h-3" />,
                        text: "24/7 Support",
                      },
                      {
                        icon: <BarChart className="w-3 h-3" />,
                        text: "Bulk Discounts",
                      },
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        {feature.icon}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/brand/${brand.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn w-full py-3.5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/10 to-primary-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative">View Brand Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform relative" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredBrands.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 text-center"
        >
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-xl"></div>
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
              <Building2 className="w-12 h-12 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold dark:text-white mb-4">
            No Brands Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Try adjusting your search or filter criteria to find what you're
            looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}

      {/* Partner CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl glass border border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-full mb-4 border border-primary-200/50 dark:border-primary-800/50"
            >
              <div className="relative">
                <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Join Our Network
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Become a <span className="gradient-text">Partner Brand</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Join our network of trusted suppliers and reach thousands of
              businesses looking for quality wholesale products. Get access to
              exclusive features, dedicated support, and premium placement.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Brands;
