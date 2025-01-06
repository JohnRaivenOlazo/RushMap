import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-4xl font-bold text-center mb-6">
        Ready to Beat the Rush?
      </h3>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8 opacity-80">
        Get started now by logging in or signing up and experience our
        navigation during rush hour.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/login")}
          className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white py-3 px-8 rounded-md text-sm font-semibold hover:scale-105 transition-transform"
        >
          Log In
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="bg-gradient-to-r from-[#0072ff] to-[#00c6ff] text-white py-3 px-8 rounded-md text-sm font-semibold hover:scale-105 transition-transform"
        >
          Sign Up
        </button>
      </div>
    </motion.section>
  );
};

export default Cta
