"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const logo = "/dev_logo_2.svg";

export const OpeningLoader = ({ onFinish }: { onFinish: () => void }) => {
  const [hideLoader, setHideLoader] = useState(false);

  // ✅ Call onFinish AFTER fade-out completes
  useEffect(() => {
    if (hideLoader) {
      const timer = setTimeout(() => {
        onFinish();
      }, 600); // should match the exit animation duration
      return () => clearTimeout(timer);
    }
  }, [hideLoader, onFinish]);

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#0ff] via-[#7f00ff] to-[#ff0099] opacity-20 blur-[120px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.2 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* Logo Animation */}
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            initial={{
              opacity: 0,
              scale: 0.4,
              rotate: -30,
              y: 60,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              scale: 1.2,
              rotate: 0,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotate: 20,
              y: -80,
              filter: "blur(12px)",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              // ✅ Start exit animation after logo loads
              setTimeout(() => setHideLoader(true), 900);
            }}
          >
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
