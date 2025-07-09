import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImg from "@/assets/images/grain.jpg"
import { Fragment } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-14 md:py-16 lg:py-20">
    <RevealOnScroll>
            <SectionHeader title={"Happy Clients"} 
            eyebrow="What Client's Says"
            description="Discover, How client's showed their Love about my work."
             />
  <div className="mt-12  flex overflow-x-clip   py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex flex-none gap-8 animate-move-left hover:[animation-state-play:paused] [animation-duration:90s]">
      {[...new Array(2).fill(0).map((_,idx)=>(
        <Fragment key={idx}>
          {testimonials?.map((testimonial)=>(
      <div key={testimonial.name} className="hover:-rotate-3 transition duration-300 flex items-center justify-center flex-col outline outline-offset-1  outline-[2px] p-6   outline-gray-300/25  rounded-3xl bg-white/10 backdrop-blur-sm relative z-0  max-w-xs md:max-w-sm " >
      <div className="absolute inset-0 opacity-5 -z-10 rounded-3xl" style={{backgroundImage:`url(${grainImg.src})`}}></div>
      <div className="flex gap-4 items-center">
        <div className="rounded-full  inline-flex items-center flex-shrink-0 justify-center bg-gray-700/20 size-12">
        <Image src={testimonial.avatar} alt={testimonial.name} className=""/></div>
        <div><h2 className="text-md font-medium">{testimonial.name}</h2>
         <p className="text-sm leading-tight text-gray-400">{testimonial.position}</p></div></div>
          <p className="text-sm mt-3 md:mt-4 text-gray-200/90">{testimonial.text}</p>
      </div>
    ))}
    </Fragment>
      ))]}
    
  </div>
  </div>
  </RevealOnScroll>
  </div>;
};

