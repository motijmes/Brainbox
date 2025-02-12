'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { usePathname } from 'next/navigation'
const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Demo' },
  { href: '/policy', label: 'Privacy Policy' },
]

function DesktopNav({isHome}) {
  const pathname = usePathname()

  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className={`flex items-center px-4 py-3 text-base font-medium relative ${
              isHome ? "text-white transition-colors data-hover:bg-text-white/10" : "text-gray-950 bg-blend-multiply data-hover:bg-text-white/10"
            }`}
          >
            {label}
            <div className={`absolute bottom-0 left-4 right-4 h-[2px] bg-current transform origin-left transition-transform duration-300 ${
              pathname === href ? 'scale-x-100' : 'scale-x-0'
            }`} />
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton({ isHome }) {
  return (
    <DisclosureButton
      className={`flex size-12 items-center justify-center self-center rounded-lg  data-hover:bg-text-white/10 lg:hidden ${isHome ? 'text-white' : 'text-primary-1'}`}
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav({ isHome }) {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
            className="relative"
          >
            <Link
              href={href}
              className={`text-base font-medium relative inline-block ${
                isHome ? 'text-text-white hover:text-text-white/90' : 'text-primary-1 hover:text-text-primary-1/90'
              }`}
            >
              {label}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-current transform origin-left transition-transform duration-300 ${ window.location.pathname === href ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-text-white/10" />
        <div className="absolute inset-x-0 top-2 border-t border-text-white/10" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner, section }) {
  const isAboutUs = section === 'aboutUs'
  const isHome = section === 'home'
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between" isHome={isHome}>
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo
                  className="h-9 text-text-white"
                  
                />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav isHome={isHome} />
          <MobileNavButton isHome={isHome} />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav isHome={isHome} />
    </Disclosure>
  )
}
