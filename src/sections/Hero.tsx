"use client";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg"
import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import memoji from "@/assets/images/memoji-computer.png"
import profile from "@/assets/images/profile_pic.png"
import grainImg from "@/assets/images/grain.jpg"
import { motion } from "framer-motion";
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit";
import CodeIcon from "@/assets/icons/code.svg"
import SparkleIcon  from "@/assets/icons/sparkle.svg"
import { useEffect, useState } from "react";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import { useContactBox } from "@/context/ContactContext";
export const HeroSection = () => {
const {router} =useContactBox();
const typewriteWord = "Shubham Mandal"

  return <div id="home" className="pt-32 md:pt-40 lg:pt-44 relative overflow-x-clip z-0 px-4 md:px-16">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none ">
    <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url(${grainImg.src})`}}></div>
  <div className="size-[640px] hero-ring "></div>
  <div className="size-[840px] hero-ring "></div>
  <div className="size-[1040px] hero-ring "></div>
  <div className="size-[1240px] hero-ring "></div>
  <HeroOrbit size={750} rotation={-72}>
    <StarIcon className="size-20 text-blue-300/50"/>
    </HeroOrbit>
    <HeroOrbit size={505} rotation={20}>
    <StarIcon className="size-12 text-emerald-100/80"/>
    </HeroOrbit>
     <HeroOrbit size={590} rotation={170}>
    <StarIcon className="size-8 text-blue-300"/>
    </HeroOrbit>
     <HeroOrbit size={550} rotation={-30}>
    <CodeIcon className="size-6 text-blue-100/50"/>
    </HeroOrbit>
    <HeroOrbit size={780} rotation={110}>
    <CodeIcon className="size-5 text-blue-300/50"/>
    </HeroOrbit>
    <HeroOrbit size={250} rotation={140}>
    <CodeIcon className="size-8 text-emerald-100/20"/>
    </HeroOrbit>
    <HeroOrbit size={780} rotation={-20}>
    <div className="size-2 rounded-full bg-emerald-100/50"/>
    </HeroOrbit>
     <HeroOrbit size={650} rotation={120}>
    <div className="size-3 rounded-full bg-emerald-100"/>
    </HeroOrbit>
    <HeroOrbit size={400} rotation={-70}>
    <SparkleIcon className="size-7 text-emerald-100/10"/>
    </HeroOrbit>
    <HeroOrbit size={600} rotation={90}>
    <SparkleIcon className="size-10 text-emerald-100/10"/>
    </HeroOrbit>
    </div>
    <div className="container "> <div className="flex items-center flex-col justify-center ">
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <motion.img
    src={profile.src}
    alt="Coder img"
    className="relative w-[200px] md:w-[250px]"
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
</motion.div>
     
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg font-medium text-gray-200 mt-4"
          >
        Hey, I’m
      </motion.div>
      <motion.div   initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.5 }}>
     <h1
  className="text-2xl flex md:text-4xl font-semibold font-serif mt-1"
>
  <span className="text-blue-700">&lt;</span>
  <span className="text-white"><TypewriterEffectSmooth text={typewriteWord}/></span>
  <span className="text-blue-700">/&gt;</span>
  <span className="ml-1 animate-pulse text-white text-2xl border-[1.5px]"></span>
</h1>
  </motion.div>
   

           {/* <hr className="w-[80%] border-gray-400/50 mb-2 mt-1  border-[1px] "/> */}

  <div className="max-w-xl ">
     <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
  className="text-sm md:text-base text-medium text-gray-400 mt-2 text-center md:text-left"
>
  I’m a full stack web developer who turns ideas into engaging digital experiences.  
  From backend logic to frontend design, I build scalable, user-focused websites  
  that bring your vision to life with clean code and visual clarity.
</motion.p>

      <div className="flex mt-4 flex-col gap-2 md:gap-4 md:flex-row items-center justify-center font-medium">
        <motion.button onClick={()=> router.push("#projects")}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }} className="inline-flex transition-all duration-300 group h-10 px-6 gap-1 border-white/20 hover:border-white border-2 rounded-xl text-sm items-center justify-center ">
          <span>Explore my work</span>
          <motion.span initial={{ rotate: 0 }}
    whileHover={{ rotate: 20 }}
    transition={{ type: 'spring', stiffness: 200 }}><ArrowDown className="w-[20px] duration-300 transition group-hover:translate-y-0.5"/></motion.span>

        </motion.button>
        <motion.button onClick={()=> router.push("#contact")}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex group px-6 gap-1 rounded-xl text-sm bg-white/20 hover:bg-white transition-all duration-300 text-white hover:text-gray-900 items-center justify-center h-10"
>
  <span>Let's Connect</span>
  <motion.span
    initial={{ rotate: 0 }}
    whileHover={{ rotate: 20 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    👋
  </motion.span>
</motion.button>

      </div></div>
    </div>
    </div>
  </div>
};
