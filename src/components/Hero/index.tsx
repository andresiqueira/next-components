import { StaticImageData } from "next/image"

export interface HeroProps {
  title: string
  subtitle?: string
  text: string
  image: string | StaticImageData | HTMLImageElement
}

export const Hero = ({ title, subtitle, text, image }: HeroProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="
        bg-orange-700 
        min-h-screen
        flex 
        items-center 
        justify-center
        bg-no-repeat
        bg-cover
        box-border
        overflow-hidden
        ">
      <div className="
      text-white
        md:w-[56.25rem]
        min-h-screen
        items-start 
        justify-center
        flex
        flex-col
        relative
        bg-orange-700
        p-4
        lg:p-16
       ">
        <h1 className="
          md:text-4xl
          text-2xl
          font-bold
        ">{title}</h1>
        <h2 className="
          font-semibold
          md:text-2xl
          text-xl
          mx-2
        ">{subtitle}</h2>
        <p className="
          mt-4
          md:text-lg
          text-base
          mx-2
        ">{text}</p>
        <button className="
            mt-12
            rounded-xl
            border-2
            font-bold
            p-4
            md:w-1/2
            w-3/4
            mx-2
            md:self-center
        ">Como Trabalhamos</button>
      </div>
    </div>
  )
}