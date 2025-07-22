import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImg from "@/assets/images/grain.jpg";
import shubhgraphix from "@/assets/images/shubh_graphixx_landing.png";
import veggiegram from "@/assets/images/veggie_gram_landing.png";
import mobihub from "@/assets/images/mobihub_landing.png";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

// Smoother fade/slide animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

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
  return (
    <div
      id="projects"
      className="flex mt-20 md:mt-24 mb-12 md:mb-14 lg:mb-16 items-center justify-center"
    >
      <div className="px-4 md:px-14 lg:px-20 w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <SectionHeader
            title={"Real-world Results"}
            eyebrow="Featured Projects"
            description="See how, I transformed concepts into visual experiences."
          />
        </motion.div>

        <div className="flex flex-col mt-[37px]">
          {portfolioProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              style={{
                top: `calc(64px + ${idx * 40}px)`,
              }}
              className="sticky top-0 outline outline-[2px] my-7 gap-10 px-6 md:px-12 md:pt-10 lg:px-0 pt-6 dark:outline-gray-300/25 outline-blue-700/20 after:z-10 rounded-2xl dark:bg-white/10 bg-blue-700/10 backdrop-blur-sm relative after:content-[''] after:absolute after:inset-0 z-0 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{ backgroundImage: `url(${grainImg.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-24">
                <div className="lg:pb-10 lg:pl-16 flex flex-col justify-center">
                  <div>
                    <span className="uppercase font-bold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
                      {project.company}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl tracking-normal text-gray-950 dark:text-gray-50">
                    {project.title}
                  </h3>
                  <hr className="my-2 border-gray-400/20" />
                  <ul className="flex gap-2 flex-col mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="text-gray-700 dark:text-gray-400 flex items-center text-sm gap-2"
                      >
                        <CheckIcon size={16} />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="">
                    <button className="mt-4 items-center md:w-auto md:px-8 bg-white rounded-lg h-10 w-full text-gray-900 font-semibold inline-flex justify-center gap-1 hover:bg-white/70 group transition duration-300 cursor-pointer shadow-sm hover:shadow-md">
                      View Site
                      <ArrowIcon className="group-hover:-translate-y-0.5 transition duration-300" size={18} />
                    </button>
                  </Link>
                </div>
                <motion.div
                  className="relative lg:col-span-1 overflow-hidden"
                  initial={{ scale: 0.97, opacity: 0.8 }}
                  whileHover={{ scale: 1.01, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                >
                  <Image
                    alt={project.title}
                    className="mt-6 md:-mb-0 lg:mt-0 -mb-4 lg:absolute lg:h-[105%] lg:translate-x-6 top-0 right-0 lg:max-w-none lg:w-auto rounded-xl shadow-lg transition-transform duration-500"
                    src={project.image}
                    placeholder="blur"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
