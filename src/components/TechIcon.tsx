import React from "react"
export const TechIcon = ({comp}:{comp:React.ElementType}) => {
    const Component =comp;
  return (
    <>
    <Component className="size-7 fill-[url(#tech-icon-gradient)]"/>
    <svg className="size-0 absolute">
      <linearGradient id="tech-icon-gradient">
      <stop offset="0%" stopColor="rgb(110, 231, 183)"/>  
      <stop offset="100%" stopColor="rgb(29, 78, 216)"/>  
      
      </linearGradient>
    </svg>
</>
  )
}

export default TechIcon
