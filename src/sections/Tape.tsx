import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const keyWords = [
  "Performant",
  "Accessible",
  "SEO-Optimized",
  "Responsive",
  "Scalable",
  "Clean Code",
  "User-Centric",
  "Secure",
];

// Modern tape animation: infinite horizontal scroll with scale/opacity pulse on keywords
const tapeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear",
      },
    },
  },
};

const wordVariants = {
  initial: { scale: 1, opacity: 0.85 },
  animate: {
    scale: [1, 1.12, 1],
    opacity: [0.85, 1, 0.85],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      // Stagger each word's animation for a modern effect
      delay: 0,
    },
  },
};

export const TapeSection = () => {
  // For staggered animation, we can use a delay based on index
  return (
    <div className="py-14 md:py-16 lg:py-20 -rotate-3 select-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r py-3 from-emerald-300 to-blue-700 overflow-x-clip relative"
      >
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Double the tape for seamless infinite scroll */}
          <motion.div
            className="flex flex-none gap-4 md:gap-6 lg:gap-8 mx-auto min-w-max"
            variants={tapeVariants}
            animate="animate"
            style={{ willChange: "transform" }}
          >
            {[...Array(2)].map((_, tapeIdx) => (
              <Fragment key={tapeIdx}>
                {keyWords.map((word, idx) => (
                  <motion.div
                    key={word + tapeIdx}
                    className="inline-flex items-center gap-4 md:gap-6 lg:gap-8 text-gray-900 uppercase font-bold text-sm relative"
                    initial="initial"
                    animate="animate"
                    // Remove variants prop to fix framer-motion error
                    transition={{
                      ...wordVariants.animate.transition,
                      // repeatType must be a valid value: "loop" | "reverse" | "mirror"
                      repeatType: "loop",
                      delay: idx * 0.18 + tapeIdx * keyWords.length * 0.18,
                    }}
                  >
                    <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.04)]">{word}</span>
                    <motion.span
                      animate={{
                        rotate: [-8, 8, -8],
                        scale: [1, 1.2, 1],
                        color: ["#0f172a", "#2563eb", "#0f172a"],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: idx * 0.18 + tapeIdx * keyWords.length * 0.18,
                      }}
                    >
                      <StarIcon className="-rotate-8" />
                    </motion.span>
                  </motion.div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
        {/* Subtle animated gradient overlay for modern shine */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          initial={{ opacity: 0.15, background: "linear-gradient(90deg,rgba(255,255,255,0.12) 0%,rgba(255,255,255,0.22) 50%,rgba(255,255,255,0.12) 100%)" }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>
    </div>
  );
};
