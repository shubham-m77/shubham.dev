import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowIcon from "@/assets/icons/arrow-up-right.svg"
import grainImg from "@/assets/images/grain.jpg"
import shubhgraphix from "@/assets/images/shubh_graphixx_landing.png"
import veggiegram from "@/assets/images/veggie_gram_landing.png"
import mobihub from "@/assets/images/mobihub_landing.png"
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";


const portfolioProjects = [
  {
    company: "VeggieGram",
    year: "2025",
    title: "Ecom. Grocery App ",
    results: [
      { title: "It's mainly focused on farm fresh veggies" },
      { title: "Minimal and Responsive UI" },
      { title: "Easy to use & order" },
    ],
    link: "https://veggiegram.vercel.app",
    image: veggiegram,
  },
  {
    company: "ShubhGraphix",
    year: "2024",
    title: "Portfolio with Backend use",
    results: [
      { title: "Minimal and Responsive UI" },
      { title: "Services data with backend functionality" },
      { title: "User Auth functionality" },
  
    ],
    link: "https://shubhgraphix.onrender.com",
    image: shubhgraphix,
  },
  {
    company: "MobiHub",
    year: "2024-25",
    title: "Startup Ecom. App",
    results: [
      { title: "Mainly focused for Gen-Z users" },
      { title: "Easy to use" },
      { title: "Transformed ecommerce for new Gen." },
    ],
    link: "https://mobihub-shop.vercel.app",
    image: mobihub,
  },
];

export const ProjectsSection = () => {
  return <div id="projects" className="flex mt-20 md:mt-24  mb-12 md:mb-14 lg:mb-16 items-center justify-center" >
    
    <div className="px-4 md:px-14 lg:px-20">
      <RevealOnScroll>
      <SectionHeader title={"Real-world Results"} eyebrow="Featured Projects" description="See how, I transformed concepts into visual experiences."/>
     
      <div className="flex flex-col mt-[37px]  ">
        {portfolioProjects.map((project,idx)=>(
          <div key={project.title} style={{
            top:`calc(64px + ${idx*40}px)`
          }} className="sticky top-0 outline outline-[2px ] my-7 gap-10 px-6 md:px-12 md:pt-10 lg:px-0 pt-6 outline-gray-300/25 after:z-10 rounded-2xl bg-white/10 backdrop-blur-sm relative after:content-[''] after:absolute after:inset-0 z-0 after:pointer-events-none  overflow-hidden ">
            <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage:`url(${grainImg.src})`}}></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">
              <div className="lg:pb-10 lg:pl-16">
            <div>
              <span className="uppercase font-bold bg-gradient-to-r from-blue-300 to to-blue-600 bg-clip-text text-transparent">{project.company}</span>
            </div>
            <h3 className="font-serif text-2xl tracking-tight [word-spacing:-0.35rem]">{project.title}</h3>
            <hr className="my-2 border-gray-400/20" />
            <ul className="flex gap-2 flex-col mt-4">
            {project.results.map((result)=>(
              <li key={result.title} className="text-gray-400  flex items-center text-sm gap-2"><CheckIcon size={4}/>{result.title}</li>
            ))}
            </ul>
            <Link href={project.link} className=""><button className="mt-4 items-center md:w-auto md:px-8 bg-white rounded-lg h-10 w-full text-gray-900 font-semibold inline-flex justify-center gap-1 hover:bg-white/50 group transition duration-300 cursor-pointer">View Site <ArrowIcon className="group-hover:-translate-y-0.5 transition duration-300" size={7}/></button> </Link>
          </div>
          <div className="relative lg:col-span-1 overflow-hidden">
          <Image alt={project.title} className="mt-6 md:-mb-0 lg:mt-0 -mb-4 lg:absolute lg:h-[105%] lg:translate-x-6  top-0 right-0  lg:max-w-none lg:w-auto" src={project.image}/>
          </div></div></div>
        ))}
      </div>
      </RevealOnScroll>
    </div>
  </div>;
};
