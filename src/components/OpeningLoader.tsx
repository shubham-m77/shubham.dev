"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const OpeningLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(containerRef.current, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 0 })
      .to(containerRef.current, { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)", duration: 1.2 })
      .from(textRef.current, { opacity: 0, y: 30, duration: 1 }, "<")
      .to(containerRef.current, { opacity: 0, duration: 0.8, delay: 0.3 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-black"
    >
      <div
        ref={textRef}
        className="text-[2.5rem] md:text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500"
      >
        Shubham M
      </div>
    </div>
  );
};
