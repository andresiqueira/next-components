import { WhatsappLogo } from "phosphor-react"

export interface ButtonProps {
  phone: string
  message: string
}

export const ChatButton = ({ phone, message }: ButtonProps) => {

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="      
        flex
        justify-center
        items-center
        bg-green-600
        text-white
        w-12
        h-12
        rounded-full
        fixed
        bottom-14
        right-8
        md:bottom-8
        md:right-10
        shadow-md"
    >
      <WhatsappLogo size={28} />
      <h6 className="absolute bottom-14 text-xs">Whatsapp</h6>
    </a>
  )
}