'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { FaWhatsapp, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { Facebook } from 'lucide-react'
// import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType; mobileMenuOpen: boolean }> = ({
  data,
  mobileMenuOpen,
}) => {
  const navItems = data?.navItems || []

  console.log('navItems37', navItems)

  return (
    <>
      <nav
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row gap-3 md:items-center w-full md:w-auto`}
      >
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="text-[#4D4D4D] uppercase text-[1rem] justify-start md:justify-center py-[2px] md:py-0 border-b-[1px] md:border-0 border-[#ccc] transition-colors duration-300 block rounded-none py-2 md:py-0 md:hover:no-underline"
            />
          )
        })}
        {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5" />
      </Link> */}
      </nav>
      <ul className={`${mobileMenuOpen ? 'block' : 'hidden'} flex md:flex gap-4 mt-3 md:mt-0`}>
        <li>
          <Link
            href="/about"
            className="bg-[#1A98D5] text-white py-3 px-4 rounded-md hover:bg-[#1A98D5]/90 block"
          >
            <span className="flex items-center gap-2">
              <FaWhatsapp />
              Chat Now
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="bg-[#1A98D5] text-white py-3 px-4 rounded-md hover:bg-[#1A98D5]/90 block"
          >
            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              Call Now
            </span>
          </Link>
        </li>
      </ul>
    </>
  )
}
