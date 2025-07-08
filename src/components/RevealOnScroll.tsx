"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string) => {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, translateX: -40 },
        visible: {
          opacity: 1,
          translateX: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };
    case "right":
      return {
        hidden: { opacity: 0, translateX: 40 },
        visible: {
          opacity: 1,
          translateX: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };
    default: // "up"
      return {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };
  }
};

export const RevealOnScroll = ({ children, direction = "up" }: RevealOnScrollProps) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
