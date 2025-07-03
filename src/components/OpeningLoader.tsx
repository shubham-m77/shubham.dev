"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const OpeningLoader = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-neutral-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-white text-5xl md:text-7xl font-extrabold tracking-wide"
            initial={{ opacity: 0, letterSpacing: "-0.25em", scale: 0.8 }}
            animate={{ opacity: 1, letterSpacing: "0em", scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
              duration: 1.4,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Shubham M
            </span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
