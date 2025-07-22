"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImg from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import CodeIcon from "@/assets/icons/code.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useContactBox } from "@/context/ContactContext";

// Direct SVG imports for profile images for instant render, no network delay
import ProfileLight from "../../public/profile.svg";
import ProfileDark from "../../public/profile_2.svg";

const typewriteWord = "Shubham Mandal";

// Inline SVG rendering utility
function InlineSVG({ svg, className, alt }: { svg: any; className?: string; alt?: string }) {
  // svg is a ReactComponent (from SVGR) or a module with .default
  const SVGComponent = svg.default || svg;
  return <SVGComponent className={className} aria-label={alt} />;
}

export const HeroSection = () => {
  const { router } = useContactBox();

  // Detect dark mode for instant SVG switching
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Use matchMedia to detect dark mode instantly
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(match.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    match.addEventListener("change", handler);
    return () => match.removeEventListener("change", handler);
  }, []);

  return (
    <div id="home" className="pt-32 md:pt-40 lg:pt-44 relative overflow-x-clip z-0 px-4 md:px-16">
      {/* 🔵 Background Grain + Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImg.src})` }} />

        {/* Animated glowing gradient blob */}
        <motion.div
          className="absolute -z-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #10b981)",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Hero rings */}
        <div className="size-[640px] hero-ring " />
        <div className="size-[840px] hero-ring " />
        <div className="size-[1040px] hero-ring " />
        <div className="size-[1240px] hero-ring " />

        {/* 🌟 Animated HeroOrbit icons */}
        {[
          { size: 750, rot: -72, child: <StarIcon className="size-20 text-blue-300 dark:text-blue-300/50" /> },
          { size: 505, rot: 20, child: <StarIcon className="size-12 text-emerald-300 dark:text-emerald-100/80" /> },
          { size: 590, rot: 170, child: <StarIcon className="size-8 text-blue-500 dark:text-blue-300" /> },
          { size: 550, rot: -30, child: <CodeIcon className="size-6 text-blue-500/50 dark:text-blue-100/50" /> },
          { size: 780, rot: 110, child: <CodeIcon className="size-5 text-blue-600/50 dark:text-blue-300/50" /> },
          { size: 250, rot: 140, child: <CodeIcon className="size-8 text-emerald-300/50 dark:text-emerald-100/20" /> },
          { size: 780, rot: -20, child: <div className="size-2 rounded-full bg-emerald-300/80 dark:bg-emerald-100/50" /> },
          { size: 650, rot: 120, child: <div className="size-3 rounded-full bg-emerald-400/50 dark:bg-emerald-100" /> },
          { size: 400, rot: -70, child: <SparkleIcon className="size-7 text-emerald-100/50 dark:text-emerald-100/10" /> },
          { size: 600, rot: 90, child: <SparkleIcon className="size-10 text-emerald-200/50 dark:text-emerald-100/10" /> },
        ].map(({ size, rot, child }, i) => (
          <HeroOrbit key={i} size={size} rotation={rot}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {child}
            </motion.div>
          </HeroOrbit>
        ))}
      </div>

      {/* 🧑‍💻 Main Hero Content */}
      <div className="container">
        <div className="flex items-center flex-col justify-center">
          {/* Profile Image */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{ opacity: 1, y: 0 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Instantly render SVG for light/dark mode */}
              <div className="relative w-[250px] h-[250px]">
                {isDark ? (
                  <InlineSVG svg={ProfileDark} className="w-[250px] h-[250px] dark:block" alt="Coder img dark" />
                ) : (
                  <InlineSVG svg={ProfileLight} className="w-[250px] h-[250px] block" alt="Coder img" />
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Text + Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 mt-4"
          >
            Hey, I’m
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <h1 className="text-3xl flex md:text-4xl font-semibold font-mono mt-1">
              <span className="text-blue-700">&lt;</span>
              <span className="text-gray-950 dark:text-white">
                <TypewriterEffectSmooth text={typewriteWord} />
              </span>
              <span className="text-blue-700">/&gt;</span>
              <span className="ml-1 animate-pulse text-gray-700 dark:text-white text-2xl border-[1.5px]"></span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="text-sm md:text-base text-medium text-gray-700 dark:text-gray-400 mt-2 text-center md:text-left max-w-xl"
          >
            I’m a full stack web developer who turns ideas into engaging digital experiences.  
            From backend logic to frontend design, I build scalable, user-focused websites  
            that bring your vision to life with clean code and visual clarity.
          </motion.p>

          {/* Buttons */}
          <div className="flex mt-4 flex-col gap-2 md:gap-4 md:flex-row items-center justify-center font-medium">
            {/* Explore My Work */}
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
              className="inline-flex transition-all duration-300 group h-10 px-6 gap-1 border-black/20 hover:border-gray-900 dark:border-white/20 dark:hover:border-white border-2 rounded-xl text-sm text-gray-800  dark:text-white items-center justify-center"
            >
              <span>Explore my work</span>
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ArrowDown className="w-[20px] duration-300 transition group-hover:translate-y-0.5" />
              </motion.span>
            </motion.button>

            {/* Let's Connect */}
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.4, ease: "easeOut" }}
              className="inline-flex group px-6 gap-1 rounded-xl text-sm bg-gray-900/10 hover:bg-gray-900 dark:bg-white/20 dark:hover:bg-white transition-all duration-300 text-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900 items-center justify-center h-10"
            >
              <span>Let's Connect</span>
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                👋
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
