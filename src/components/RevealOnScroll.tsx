"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export const RevealOnScroll = ({
  children,
  direction = "up",
  delay = 0,
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const offset = 40;
    const animVars: gsap.TweenVars = {
      opacity: 0,
      y: 0,
      x: 0,
    };

    // Set initial offset based on direction
    switch (direction) {
      case "up":
        animVars.y = offset;
        break;
      case "down":
        animVars.y = -offset;
        break;
      case "left":
        animVars.x = offset;
        break;
      case "right":
        animVars.x = -offset;
        break;
    }

    gsap.fromTo(
      element,
      animVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup on unmount
    // return () => {
    //   ScrollTrigger.getById(element as any)?.kill(true);
    // };
  }, [direction, delay]);

  return (
    <div ref={ref} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
};
