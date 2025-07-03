"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const name = "Shubham M";

export const OpeningLoader = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [displayed, setDisplayed] = useState("");

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(name.slice(0, i + 1));
      i++;
      if (i === name.length) clearInterval(interval);
    }, 120);
  }, []);

  // Intro duration
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400 text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            {displayed}
            <span className="animate-pulse text-blue-300">_</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
