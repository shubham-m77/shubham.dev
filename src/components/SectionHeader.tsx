export const SectionHeader = ({title,eyebrow,description}:{title:string,eyebrow:string,description:string})=>{
  return(  <div className="flex justify-center flex-col">
          <p className="uppercase font-semibold tracking-widest text-center bg-gradient-to-r from-emerald-300 to to-blue-700 bg-clip-text text-transparent">{title}</p>
      <h2 className="text-center mt-2 font-serif text-xl md:text-3xl tracking-tight font-medium">{eyebrow}</h2>
      <p className="text-center text-gray-400 leading-tight">{description}</p>
  </div>)
}