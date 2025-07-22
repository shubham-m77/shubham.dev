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

    // Set initial state immediately for better performance
    gsap.set(element, animVars);

    // Use requestAnimationFrame to ensure smoothness
    let animation: gsap.core.Tween | null = null;
    let trigger: ScrollTrigger | null = null;

    requestAnimationFrame(() => {
      animation = gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7, // slightly shorter for snappier feel
        delay,
        ease: "power2.out", // lighter ease for smoother effect
        overwrite: "auto",
        scrollTrigger: {
          trigger: element,
          start: "top 50%", // trigger a bit earlier for smoother entry
          toggleActions: "play none none none",
          onEnter: () => {
            // Only animate if not already visible
            if (animation && !animation.isActive()) {
              animation.play();
            }
          },
          // Clean up on leave if you want to re-animate on re-enter
          // onLeaveBack: () => {
          //   gsap.set(element, animVars);
          // },
        },
      });
      trigger = ScrollTrigger.getById(element as any) || null;
    });

    // Cleanup on unmount
    return () => {
      if (animation) animation.kill();
      if (trigger) trigger.kill();
      ScrollTrigger.refresh();
    };
  }, [direction, delay]);

  return (
    <div
      ref={ref}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        // Reduce paint issues on some browsers
      }}
    >
      {children}
    </div>
  );
};
