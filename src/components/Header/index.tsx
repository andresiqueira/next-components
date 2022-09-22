import { Menu, Transition } from '@headlessui/react'
import { TailwindNextLink } from './TailwindNextLink'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { List } from 'phosphor-react'

export interface RoutesProps {
  route: string
  name: string
}

export interface HeaderProps {
  routes: RoutesProps[]
}

export const Header = ({ routes }: HeaderProps) => {
  const router = useRouter()
  const [scrollStyles, setScrollStyles] = useState<string>('lg:bg-transparent lg:py-3')

  const trackScroll = () => {
    if (window.scrollY > 80) {
      setScrollStyles('lg:bg-gray-800 lg:py-1')
    } else {
      setScrollStyles('lg:bg-transparent lg:py-3')
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', trackScroll)
  }, [scrollStyles])


  return (
    <header className={`
      transition-all
      duration-700
      ease-in-out
      fixed
      left-0
      right-0
      top-0
      box-border
      flex
      w-full
      py-3
      px-7
      lg:px-28
      text-white
      items-center
      justify-between
      lg:justify-start
      bg-gray-800
      ${scrollStyles}
    `}>
      <div className=''>
        Logo
      </div>
      <menu>
        <ul className='lg:flex box-border gap-6 py-4 px-16 hidden'>
          {routes.map((route) => (
            <li key={route.route} className='hover:text-orange-600 hover:transition-all'>
              <TailwindNextLink href={route.route} className={`
                    ${router?.asPath == route.route ? 'text-orange-600' : ''}
                  `}>
                {route.name}
              </TailwindNextLink>
            </li>
            ))}
        </ul>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className='lg:hidden relative'>
                <List size={32} />
              </Menu.Button>
              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-y-0 opacity-0"
                enterTo="transform scale-y-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-y-100 opacity-100"
                leaveTo="transform scale-y-0 opacity-0"
                className='absolute w-full inset-x-0 top-[3.8125rem]'
              >
                <Menu.Items className={
                  `
                  absolute
                  bg-gray-800
                  w-full
                  lg:hidden
                  `
                }>
                  {routes.map((route) => (
                    <Menu.Item key={route.route}>
                      {({ active }) => (
                        <TailwindNextLink href={route.route} className={`
                    flex
                    flex-col
                    box-border
                    py-4
                    px-7
                    ${active ? 'text-orange-600' : 'text-white'}
                    ${router?.asPath == route.route ? 'text-orange-600' : ''}
                  `}>
                          {route.name}
                        </TailwindNextLink>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </menu>
    </header>
  )
}