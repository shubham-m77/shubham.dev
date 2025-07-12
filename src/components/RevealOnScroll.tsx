"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const getVariants = (direction: string, delay = 0) => {
  const transition = { duration: 0.6, ease: "easeOut", delay };

  const offset = 40;
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -offset : direction === "right" ? offset : 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition,
    },
  };

  return variants;
};

export const RevealOnScroll = ({
  children,
  direction = "up",
  delay = 0,
}: RevealOnScrollProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants(direction, delay)}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};
