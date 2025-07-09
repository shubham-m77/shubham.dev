"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
      <motion.div
        className="flex items-start justify-start"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
        animate={{ rotate: [rotation, rotation + 10, rotation] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="inline-flex"
          style={{ transform: `rotate(${-rotation}deg)` }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2, // randomize timing a bit
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
