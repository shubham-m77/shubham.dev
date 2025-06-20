"use client"
import { SectionHeader } from "@/components/SectionHeader";
import grainImg from "@/assets/images/grain.jpg"
  import Image from "next/image";
import book_cover from "@/assets/images/bhagwat_geeta.png"
import Html from "@/assets/icons/html-icon.svg"
import Css from "@/assets/icons/css-icon.svg"
import Javascript from "@/assets/icons/javascript-icon.svg"
import ReactIcon from "@/assets/icons/react-icon.svg"
import Mongodb from "@/assets/icons/mongodb-icon.svg"
import Express from "@/assets/icons/express-icon.svg"
import Node from "@/assets/icons/nodejs-icon.svg"
import TailwindIcon from "@/assets/icons/tailwind-icon.svg"
import TypeScriptIcon from "@/assets/icons/typescript-icon.svg"
import NextJSIcon from "@/assets/icons/nextjs-icon.svg"
import MapboxMap from "@/components/MapboxMap";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import {motion} from "framer-motion"
import { useRef } from "react";

const toolBoxItem = [
  { title: "HTML", icon: <Html className="size-8" /> },
  { title: "CSS", icon: <Css className="size-8" /> },
  { title: "JavaScript", icon: <Javascript className="size-8" /> },
  { title: "TypeScript", icon: <TypeScriptIcon className="size-8" /> },
  { title: "MongoDB", icon: <Mongodb className="size-8" /> },
  { title: "ExpressJS", icon: <Express className="size-8" /> },
  { title: "ReactJS", icon: <ReactIcon className="size-8" /> },
  { title: "NextJS", icon: <NextJSIcon className="size-8" /> },
  { title: "NodeJS", icon: <Node className="size-8" /> },
  { title: "TailwindCSS", icon: <TailwindIcon className="size-8" /> },
];


const hobbies = [
  { title: "Photography", emoji: "📷", top: "5%", left: "4%" },
  { title: "Reading", emoji: "📚", top: "7%", left: "54%" },
  { title: "Gaming", emoji: "🎮", top: "33%", left: "50%" },
  { title: "Music", emoji: "🎧", top: "40%", left: "12%" },
  { title: "Fitness", emoji: "💪", top: "65%", left: "55%" },
  { title: "Travelling", emoji: "📍", top: "72%", left: "10%" },
];

export const AboutSection = () => {
  const constraintsRef=useRef(null);

  return <div id="about" className="py-14 md:py-16 lg:py-20 px-4 md:px-14 lg:px-20">
    <SectionHeader title="About Me"
            eyebrow="More Than Just Code"
            description="Learn about my background, skills, and the mindset that shapes me as a developer."/>
  <div className="mt-16 flex flex-col gap-8 ">
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
    {/* Books Card */}
    <div className="md:col-span-2 lg:col-span-1 overflow-clip h-[320px]  flex  flex-col outline  outline-[2px]  outline-gray-300/25  rounded-3xl bg-white/10 backdrop-blur-sm relative z-0 pointer-events-none" >
      <div className="absolute inset-0 opacity-5 -z-10 rounded-3xl" style={{backgroundImage:`url(${grainImg.src})`}}></div>
      <div className="flex flex-col ">
        <CardHeader title="My Reads" desc="Spiritual reading helps me stay focused, balanced, and growth-minded."/>
        <div className="w-48 mx-auto mt-2 ">
          <Image src={book_cover} alt="Book cover"/>
        </div>
        </div>
        </div>

        {/* Tools Card */}
        <div className="md:col-span-3 lg:col-span-2 overflow-clip  h-[320px]  flex flex-col outline  outline-[2px]  outline-gray-300/25  rounded-3xl bg-white/10 backdrop-blur-sm relative z-0" >
      <div className="absolute inset-0 opacity-5 -z-10 rounded-3xl" style={{backgroundImage:`url(${grainImg.src})`}}></div>
      <div className="flex flex-col gap-4  w-full ">
      <CardHeader className="" title="My Toolbox" desc="These are the tools and technologies that power my development workflow."/>
<div className="w-full flex mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
  <ToolBoxItems items={toolBoxItem} /></div>
</div>
        </div>
        </div>
<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Hobbies Card */}
    <div className="md:col-span-3 lg:col-span-2 flex h-[320px] overflow-clip flex-col outline  outline-[2px] outline-gray-300/25  rounded-3xl bg-white/10 backdrop-blur-sm relative z-0 " >
      <div className="absolute inset-0 opacity-5  -z-10 rounded-3xl" style={{backgroundImage:`url(${grainImg.src})`}}></div>
      <div className="flex gap-4 flex-col h-full">
      <CardHeader title="Beyond The Code" desc="Where code ends, pursuits begins—shaped by clarity, vision, and simplicity."/>
        <div className="relative flex-1" ref={constraintsRef}>
          {hobbies?.map(hobbie=>
            <motion.div drag dragConstraints={constraintsRef} key={hobbie.title} style={{left:hobbie.left,top:hobbie.top}} className="cursor-grab inline-flex absolute bg-gradient-to-r from-emerald-300 to to-blue-700  items-center px-4 py-1.5 md:px-6 md:py-2 gap-1 rounded-full text-base md:text-[17px] font-semibold">
                <span className="text-gray-900 ">{hobbie.title}</span>
                <span>{hobbie.emoji}</span>
            </motion.div>
          )}
     
        </div>
        </div>
        </div>

               {/* Maps Card */}
    <div className="md:col-span-2 lg:col-span-1 flex items-center h-[320px]  justify-center  outline  outline-[2px]   outline-gray-300/25  rounded-3xl bg-white/10 backdrop-blur-sm relative z-0 " >
      <div className="absolute inset-0 opacity-5  -z-10 rounded-3xl" style={{backgroundImage:`url(${grainImg.src})`}}></div>
      <MapboxMap/>
        </div>
  </div>
  </div>
  </div>
};
