import { forwardRef, LegacyRef } from 'react'
import Link from 'next/link'

interface TailwindNextLinkProps {
  href: string
  children: string
  className?: string
}

const tailwindNextLink = (props: TailwindNextLinkProps, ref:LegacyRef<HTMLAnchorElement>) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
}

export const TailwindNextLink = forwardRef(tailwindNextLink)

