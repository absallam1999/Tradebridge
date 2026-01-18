import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Truck,
  Package,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  Rocket,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
      description: "15+ years in wholesale distribution",
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
      description: "Supply chain optimization expert",
    },
    {
      name: "Emma Rodriguez",
      role: "Sales Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop",
      description: "B2B sales specialist",
    },
    {
      name: "David Kim",
      role: "Quality Assurance",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      description: "Product certification expert",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "The Vision",
      description: "Founded with a mission to digitize bulk commerce.",
    },
    {
      year: "2017",
      title: "Global Reach",
      description: "Expanded operations to 10+ international markets.",
    },
    {
      year: "2019",
      title: "Platform 2.0",
      description: "Launched our AI-driven wholesale marketplace.",
    },
    {
      year: "2021",
      title: "Enterprise Scale",
      description: "Reached 500+ satisfied business clients.",
    },
    {
      year: "2023",
      title: "Logistics Hub",
      description: "Opened our 50,000 sq ft distribution center.",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Unwavering Integrity",
      description:
        "Transparent pricing and honest business practices are the foundation of our marketplace.",
      color: "bg-blue-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Obsession",
      description:
        "Every product undergoes a multi-stage verification process before listing.",
      color: "bg-primary-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strategic Partnership",
      description:
        "We don't just sell; we build long-term growth strategies with our clients.",
      color: "bg-secondary-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Responsibility",
      description:
        "Committed to sustainable sourcing and eco-friendly logistics solutions.",
      color: "bg-success-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Rocket size={14} />
              <span>Our Story & Vision</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Revolutionizing{" "}
              <span className="gradient-text">Bulk Commerce</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Empowering businesses worldwide with a seamless, transparent, and
              high-quality wholesale marketplace since 2015.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Bento Style */}
      <div className="container-custom -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <TrendingUp />,
              value: "1000+",
              label: "Premium Products",
              color: "text-blue-600",
            },
            {
              icon: <Users />,
              value: "500+",
              label: "Business Partners",
              color: "text-primary-600",
            },
            {
              icon: <Globe />,
              value: "30+",
              label: "Countries Served",
              color: "text-secondary-600",
            },
            {
              icon: <Package />,
              value: "50M+",
              label: "Units Delivered",
              color: "text-success-600",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-none text-center group hover:scale-[1.02] transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-2xl mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div
                className={`text-4xl font-black tracking-tighter mb-1 ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision - Glassmorphism Cards */}
      <div className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold tracking-tight dark:text-white">
              Driven by <span className="text-primary-600">Purpose</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Founded in 2005, TradeBridge began with a simple mission: to
                make bulk purchasing accessible and efficient for businesses of
                all sizes. We saw the challenges businesses faced in sourcing
                quality products at wholesale prices.
              </p>
              <p>
                Today, we've grown into a trusted wholesale marketplace,
                connecting thousands of businesses with reliable suppliers
                worldwide. Our digital platform streamlines the entire bulk
                purchasing process, from discovery to delivery.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-950 bg-gray-200 overflow-hidden"
                  >
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Trusted by{" "}
                <span className="text-gray-900 dark:text-white font-bold">
                  5,000+
                </span>{" "}
                business owners
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 sm:p-12 bg-gray-900 rounded-[3rem] text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl font-bold">Our Core Mission</h3>
              <div className="space-y-8">
                {[
                  {
                    icon: <Target />,
                    title: "Empower Businesses",
                    desc: "Provide competitive wholesale pricing to help businesses grow.",
                  },
                  {
                    icon: <Globe />,
                    title: "Global Access",
                    desc: "Connect businesses with quality suppliers worldwide.",
                  },
                  {
                    icon: <CheckCircle2 />,
                    title: "Quality Assurance",
                    desc: "Ensure every product meets our strict quality standards.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/10 rounded-2xl text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-900 py-24 border-y border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The principles that guide every transaction and partnership on our
              platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-[2rem] border border-transparent hover:border-primary-500/20 hover:bg-white dark:hover:bg-gray-800 transition-all group"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center ${value.color} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="container-custom py-12">
        <div className="p-12 bg-gray-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-400">
                Milestones in our growth and development
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative text-center lg:text-left"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 mx-auto lg:mx-0 shadow-lg shadow-primary-600/20 relative z-10">
                      {m.year.slice(2)}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{m.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {m.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
