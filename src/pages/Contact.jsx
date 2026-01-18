import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  User,
  Building,
  Globe,
  ArrowRight,
  Headphones,
  Briefcase,
  HelpCircle,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Customer Support",
      description: "For order tracking and general inquiries.",
      contact: "support@tradebridge.com",
      color: "bg-blue-500",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Sales Department",
      description: "For bulk quotes and partnership deals.",
      contact: "sales@tradebridge.com",
      color: "bg-primary-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Logistics",
      description: "For international shipping and customs.",
      contact: "contact@tradebridge.com",
      color: "bg-secondary-600",
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
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
              <PhoneCall size={14} />
              <span>We're here to help</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Let's build your <span className="gradient-text">Business</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Have a specific requirement or need a custom quote? Our dedicated
              wholesale experts are ready to assist you.
            </p>
          </motion.div>
        </div>
      </div>

      <div>
        {/* Contact Methods */}
        <div className="space-y-4">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-5">
                <div
                  className={`w-14 h-14 flex items-center justify-center ${method.color} text-white rounded-2xl shadow-lg`}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold dark:text-white">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {method.description}
                  </p>
                  <a
                    href={`mailto:${method.contact}`}
                    className="text-sm font-bold text-primary-600 hover:underline flex items-center gap-1"
                  >
                    {method.contact}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-custom -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-600 text-white rounded-2xl shadow-lg shadow-primary-600/20">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold dark:text-white">
                    Send a Message
                  </h2>
                  <p className="text-sm text-gray-500">
                    Typical response time: &lt; 2 hours
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-success-50 dark:bg-success-900/20 text-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold dark:text-white mb-4">
                      Message Received!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                      Thank you for reaching out. One of our account managers
                      will contact you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-primary-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                          Full Name
                        </label>
                        <div
                          className={`relative transition-all duration-300 ${focusedField === "name" ? "scale-[1.02]" : ""}`}
                        >
                          <User
                            className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === "name" ? "text-primary-600" : "text-gray-400"}`}
                          />
                          <input
                            type="text"
                            name="name"
                            required
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary-500/20 rounded-2xl outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                          Work Email
                        </label>
                        <div
                          className={`relative transition-all duration-300 ${focusedField === "email" ? "scale-[1.02]" : ""}`}
                        >
                          <Mail
                            className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === "email" ? "text-primary-600" : "text-gray-400"}`}
                          />
                          <input
                            type="email"
                            name="email"
                            required
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary-500/20 rounded-2xl outline-none transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                          Company
                        </label>
                        <div
                          className={`relative transition-all duration-300 ${focusedField === "company" ? "scale-[1.02]" : ""}`}
                        >
                          <Building
                            className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === "company" ? "text-primary-600" : "text-gray-400"}`}
                          />
                          <input
                            type="text"
                            name="company"
                            onFocus={() => setFocusedField("company")}
                            onBlur={() => setFocusedField(null)}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary-500/20 rounded-2xl outline-none transition-all"
                            placeholder="Business Name Inc."
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                          Subject
                        </label>
                        <select
                          name="subject"
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary-500/20 rounded-2xl outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="quote">Bulk Quote Request</option>
                          <option value="partnership">
                            Partnership Opportunity
                          </option>
                          <option value="support">Technical Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary-500/20 rounded-2xl outline-none transition-all resize-none"
                        placeholder="How can we help your business today?"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full py-5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-xl shadow-primary-600/20 flex items-center justify-center gap-3 transition-all"
                    >
                      <span>Send Message</span>
                      <Send size={20} />
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Info & Methods */}
          <div className="lg:col-span-5 space-y-8">
            {/* Office Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-gray-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold">Global Headquarters</h3>
                </div>
                <div className="space-y-4 text-gray-400">
                  <p className="text-lg leading-relaxed">
                    123 Commerce Street, Suite 500
                    <br />
                    New York, NY 10001, USA
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <Clock size={18} className="text-primary-400" />
                    <span className="text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primary-400" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                </div>
                <button className="w-full mt-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                  Get Directions
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>

            {/* FAQ Quick Link */}
            <div className="p-8 bg-primary-50 dark:bg-primary-900/20 rounded-[2.5rem] border border-primary-100 dark:border-primary-800/50">
              <div className="flex items-center gap-4 mb-4">
                <HelpCircle className="text-primary-600" />
                <h3 className="text-xl font-bold dark:text-white">
                  Quick Help
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                Check our frequently asked questions for instant answers about
                shipping, bulk pricing, and more.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 font-bold text-primary-600 hover:gap-3 transition-all"
              >
                Visit Help Center
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
