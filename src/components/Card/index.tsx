import { StaticImageData } from "next/image"

export interface CardProps {
  title: string
  subtitle?: string
  text: string
  image?: string | StaticImageData | HTMLImageElement
}

export const Card = ({ title, subtitle, text, image }: CardProps) => {
  return (
    <div
      style={{backgroundImage: `url(${image})` }}
      className={`
        flex
        justify-center
        relative
        border
        shadow-md
        w-[18.75rem]
        h-96
        rounded-xl
        overflow-hidden
        box-border
        bg-no-repeat
        bg-cover
    `}>
      <div className="
        absolute
        bottom-0
        flex
        flex-col
        items-center
        justify-end
        text-white
        bg-gradient-to-t
        from-black
        to-black/0
        w-full
        h-3/4
        p-6
        text-center
      ">
        <h3 className="
        text-2xl
        font-bold
        mb-1
      ">{title}</h3>
        <h4 className="
        text-xl
        font-semibold
        mb-2
      ">{subtitle}</h4>
        <p className="
          text-sm
        ">{text}</p>
      </div>
    </div>
  )
}