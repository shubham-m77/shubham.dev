import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge"

export const CardHeader = ({title,desc,className}:{title:string,desc:string,className?:string}) => {
  return (
     <div className={twMerge("flex max-w-sm flex-col p-4 md:p-6",className)}>
       <div className="inline-flex items-center gap-2">
        <StarIcon  className="text-blue-700 size-7"/>
        <h3 className="text-xl font-serif tracking-tighter font-medium">{title}</h3></div> 
        <p className="text-sm md:text-base text-white/60 leading-tight md:leading-none mt-1.5">{desc}</p></div>
  )
}

export default CardHeader
