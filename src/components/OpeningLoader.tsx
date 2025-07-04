"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const logo = "/dev_logo_2.svg";

export const OpeningLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setHideLoader(true),
    });

    tl.set(containerRef.current, { opacity: 0 })
      .set(textRef.current, { opacity: 0, y: 50, filter: "blur(10px)" })
      .to(containerRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
      })
      .to(textRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.4,
      })
      .to(
        containerRef.current,
        {
          opacity: 0,
          scale: 1.05,
          duration: 0.6,
          ease: "expo.inOut",
        },
        "-=0.3"
      );
  }, []);

  if (hideLoader) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 backdrop-blur-md"
    >
      <div
        ref={textRef}
        className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
      >
        <Image
          src={logo}
          alt="Logo"
          fill
          sizes="auto"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
