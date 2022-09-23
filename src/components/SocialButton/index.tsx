import { ReactNode } from "react"

export interface ButtonProps {
  link: string
  children: ReactNode
}

export const SocialButton = ({link, children}: ButtonProps) => {

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white"
      >
     {children}
    </a>
  )
}