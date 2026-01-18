import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center min-h-[400px]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="text-blue-600 dark:text-blue-400"
      >
        <Loader className="w-8 h-8" />
      </motion.div>
    </motion.div>
  );
};

export default LoadingSpinner;
