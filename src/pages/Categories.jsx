import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  ArrowRight,
  Package,
  Filter,
  Search,
  Grid,
  List,
  Sparkles,
  Building2,
  Users,
  Globe,
} from "lucide-react";
import { categories } from "../data/products";
import CategoryCard from "../components/ui/CategoryCard";

const Categories = () => {
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
            <Layers className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Product <span className="gradient-text">Categories</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our extensive wholesale catalog organized by category. Find
            quality products from verified suppliers with competitive bulk
            pricing.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              {
                label: "Total Categories",
                value: categories.length,
                icon: <Layers className="w-4 h-4" />,
                color: "text-primary-600 dark:text-primary-400",
              },
              {
                label: "Verified Suppliers",
                value: "75+",
                icon: <Building2 className="w-4 h-4" />,
                color: "text-success-600 dark:text-success-400",
              },
              {
                label: "Active Buyers",
                value: "500+",
                icon: <Users className="w-4 h-4" />,
                color: "text-secondary-600 dark:text-secondary-400",
              },
              {
                label: "Countries Served",
                value: "35+",
                icon: <Globe className="w-4 h-4" />,
                color: "text-warning-600 dark:text-warning-400",
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

      {/* Search and Filter Bar */}
      <div className="glass rounded-2xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-auto flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories or products..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>

            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button className="p-2.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-r border-gray-200 dark:border-gray-700">
                <Grid className="w-4 h-4" />
              </button>
              <button className="p-2.5 text-gray-500 dark:text-gray-400">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              All Categories
            </span>
          </div>
          <h2 className="text-3xl font-bold dark:text-white">
            Browse Product Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Select a category to explore products
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {categories.reduce((sum, cat) => sum + cat.productCount, 0)}+ Total
          Products
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Industry Focus Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-800/50"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              Industry Focus
            </span>
          </div>
          <h2 className="text-3xl font-bold dark:text-white mb-4">
            Serving Multiple Industries
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our categories are designed to serve diverse business needs across
            various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Hospitality",
              count: "45",
              color:
                "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
            },
            {
              name: "Retail",
              count: "68",
              color:
                "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
            },
            {
              name: "Food Service",
              count: "52",
              color:
                "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
            },
            {
              name: "Healthcare",
              count: "38",
              color:
                "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${industry.color} mb-4`}
              >
                <span className="text-lg font-bold">{industry.count}</span>
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Suppliers
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bulk Order CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 opacity-90" />

        {/* Content */}
        <div className="relative py-12 md:py-16 px-6 md:px-12 text-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Package className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Multi-Category Orders
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Products From Multiple Categories?
                </h2>

                <p className="text-white/90 text-lg mb-6">
                  Request a custom quote for bulk orders across multiple product
                  categories. Our dedicated procurement team will prepare a
                  comprehensive package tailored to your specific business
                  requirements.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    { text: "Consolidated Shipping", icon: "✓" },
                    { text: "Volume Discounts", icon: "✓" },
                    { text: "Custom Packaging", icon: "✓" },
                    { text: "Dedicated Support", icon: "✓" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{item.icon}</span>
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 min-w-[280px]">
                <Link to="/contact" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link to="/products">
                  <button className="w-full px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                    Browse All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Categories;
