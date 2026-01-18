import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Package,
  Users,
  Shield,
  Truck,
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Globe,
  Award,
  Clock,
  Zap,
  BarChart,
  Sparkles,
  Building2,
  Target,
  Layers,
  ShoppingCart,
} from "lucide-react";

import ProductCard from "../components/ui/ProductCard";
import CategoryCard from "../components/ui/CategoryCard";
import { products, categories } from "../data/products";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProducts] = useState(products.slice(0, 8));
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Premium Wholesale Marketplace",
      subtitle: "Source quality products in bulk",
      description:
        "Direct manufacturer access with competitive pricing and reliable global delivery",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600",
      cta: "Browse Products",
      color: "from-primary-600 to-secondary-600",
      icon: <Package className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Global Supply Chain Network",
      subtitle: "Connect with verified suppliers",
      description: "Access 1000+ verified manufacturers across 30+ countries",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600",
      cta: "Explore Suppliers",
      color: "from-success-600 to-primary-600",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "B2B Excellence",
      subtitle: "Trusted by industry leaders",
      description: "Enterprise-grade platform for secure bulk transactions",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600",
      cta: "View Enterprise",
      color: "from-warning-600 to-error-600",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  // Stats data
  const stats = [
    {
      label: "Products",
      value: "1.5K+",
      icon: <Package className="w-5 h-5" />,
      change: "+12%",
      color: "text-primary-600 dark:text-primary-400",
    },
    {
      label: "Active Buyers",
      value: "500+",
      icon: <Users className="w-5 h-5" />,
      change: "+28%",
      color: "text-success-600 dark:text-success-400",
    },
    {
      label: "Brand Partners",
      value: "75+",
      icon: <Building2 className="w-5 h-5" />,
      change: "+15%",
      color: "text-secondary-600 dark:text-secondary-400",
    },
    {
      label: "Countries",
      value: "35+",
      icon: <Globe className="w-5 h-5" />,
      change: "+8%",
      color: "text-warning-600 dark:text-warning-400",
    },
  ];

  // Features bento grid
  const bentoFeatures = [
    {
      title: "Quality Assurance",
      description: "All products undergo 3-stage quality verification",
      icon: <Shield className="w-6 h-6" />,
      color:
        "border-primary-200 dark:border-primary-800 bg-primary-50/30 dark:bg-primary-900/10",
      size: "col-span-2",
    },
    {
      title: "Volume Discounts",
      description: "Up to 40% savings on bulk purchases",
      icon: <TrendingUp className="w-6 h-6" />,
      color:
        "border-success-200 dark:border-success-800 bg-success-50/30 dark:bg-success-900/10",
      size: "col-span-1",
    },
    {
      title: "Fast Logistics",
      description: "Global shipping in 7-14 days",
      icon: <Truck className="w-6 h-6" />,
      color:
        "border-secondary-200 dark:border-secondary-800 bg-secondary-50/30 dark:bg-secondary-900/10",
      size: "col-span-1",
    },
    {
      title: "Custom Solutions",
      description: "Tailored packaging & private labeling",
      icon: <Layers className="w-6 h-6" />,
      color:
        "border-warning-200 dark:border-warning-800 bg-warning-50/30 dark:bg-warning-900/10",
      size: "col-span-1",
    },
    {
      title: "Secure Payments",
      description: "Escrow protection & flexible terms",
      icon: <Shield className="w-6 h-6" />,
      color:
        "border-primary-200 dark:border-primary-800 bg-primary-50/30 dark:bg-primary-900/10",
      size: "col-span-1",
    },
    {
      title: "24/7 Support",
      description: "Dedicated account managers",
      icon: <Clock className="w-6 h-6" />,
      color:
        "border-success-200 dark:border-success-800 bg-success-50/30 dark:bg-success-900/10",
      size: "col-span-2",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="space-y-20">
      {/* Hero Slider */}
      <section className="relative h-[600px] rounded-3xl overflow-hidden">
        <AnimatePresence mode="wait">
          {heroSlides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-20`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full container-custom flex items-center">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="max-w-2xl text-white"
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                        {slide.icon}
                        <span className="text-sm font-semibold">
                          {slide.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p className="text-xl text-gray-200 mb-8 max-w-xl">
                        {slide.description}
                      </p>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-4">
                        <Link to="/products">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-xl flex items-center gap-3 overflow-hidden"
                          >
                            <span className="relative">{slide.cta}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                          </motion.button>
                        </Link>
                        <Link to="/contact">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded-xl backdrop-blur-sm transition-all"
                          >
                            Get Custom Quote
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Trending Now
              </span>
            </div>
            <h2 className="text-3xl font-bold dark:text-white">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Best sellers with volume discounts
            </p>
          </div>
          <Link
            to="/products"
            className="group flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary-50 dark:bg-secondary-900/20 rounded-full mb-4">
            <Layers className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
              Browse Categories
            </span>
          </div>
          <h2 className="text-3xl font-bold dark:text-white mb-4">
            Popular Product Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the right products for your business needs across different
            industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom">
        <div className="text-center mb-12">
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
              Why Choose TradeBridge
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold dark:text-white mb-4"
          >
            Enterprise-Grade <span className="gradient-text">Features</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Designed for businesses that demand reliability, security, and
            efficiency in bulk procurement
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className={`relative overflow-hidden group cursor-pointer ${
                feature.size === "md:col-span-2 md:row-span-2"
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Glass effect container */}
              <div className="relative h-full glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border-transparent group-hover:scale-[1.02] group-hover:shadow-2xl">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl`}
                  ></div>
                </div>

                <div className="absolute bottom-0 right-0 w-16 h-16 translate-x-8 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col h-full">
                  <div className="mb-4">
                    <div
                      className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${feature.gradient} bg-opacity-10 dark:bg-opacity-20`}
                    >
                      <div className="relative">
                        {feature.icon}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold dark:text-white mb-3 flex items-center gap-2">
                      {feature.title}
                      <span className="text-xs px-2 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-600 dark:text-primary-400 rounded-full">
                        New
                      </span>
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature highlights */}
                  {feature.highlights && (
                    <div className="mt-auto pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Learn more →
                      </span>
                      <span className="px-2 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-secondary-600/5 to-primary-600/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

        <div className="relative container-custom py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Target className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Enterprise Ready
              </span>
            </div>

            <h2 className="text-4xl font-bold dark:text-white mb-6">
              Ready to Scale Your Procurement?
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join 500+ businesses that trust TradeBridge for reliable bulk
              purchasing
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative">Request Enterprise Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                </motion.button>
              </Link>

              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  Browse Catalog
                </motion.button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Volume discounts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
