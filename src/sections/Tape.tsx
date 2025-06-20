import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";
const keyWords=[
  "Performant",
  "Accessible",
  "SEO-Optimized",
  "Responsive",
  "Scalable",
  "Clean Code",
  "User-Centric",
  "Secure"
];

export const TapeSection = () => {
  return <div className="py-14 md:py-16 lg:py-20  -rotate-3 ">
    <div className="bg-gradient-to-r py-3 from-emerald-300 to to-blue-700 overflow-x-clip">
  <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <div className="flex flex-none gap-4 md:gap-6 lg:gap-8 mx-auto animate-move-left [animation-duration:30s] will-change-transform" >
    {[...new Array(2).fill(0).map((_,idx)=>(
      <Fragment key={idx}>
        {
        keyWords?.map((word=>(
      <div key={word} className="inline-flex  items-center gap-4 md:gap-6  lg:gap-8 text-gray-900 uppercase font-bold text-sm">
        <span>{word}</span>
        <StarIcon size={6} className="-rotate-8"/>
      </div>
    )))
    }
      </Fragment>
    ))]}
    </div></div></div></div>;
};
