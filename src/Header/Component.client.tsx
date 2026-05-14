'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <>
      <header className="relative z-20 shadow-md" {...(theme ? { 'data-theme': theme } : {})}>
        <div className="py-2 flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex justify-between w-full md:w-auto items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={220}
                height={60}
                className="w-[180px] md:w-[220px]"
              />
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen((current) => !current)
                setOpenDropdown(null)
              }}
              className="block md:hidden text-white bg-[#251F5D] rounded-md p-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}> */}
          <HeaderNav data={data} mobileMenuOpen={mobileMenuOpen} />
          {/* </div> */}
        </div>
      </header>

      <nav className="bg-[#251F5D] text-white 2xl:text-base xl:text-sm z-100 relative">
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-0 justify-center m-0 p-0">
            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <button
                type="button"
                onClick={() => toggleDropdown('audit')}
                className="w-full text-left py-3 px-4 flex gap-4 justify-between items-center hover:bg-[#f0f0f0] hover:text-[#000] transition-colors md:inline-flex"
              >
                Audit & Assurance
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDropdown === 'audit' ? 'rotate-180' : ''}`}
                />
              </button>
              <ul
                className={`${
                  openDropdown === 'audit' ? 'flex' : 'hidden'
                } md:group-hover:flex md:absolute md:left-0 md:top-full md:min-w-[350px] md:flex-col bg-[#ffffff] shadow-lg flex-col w-full text-[92%]`}
              >
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    External/Statutory Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Internal Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Stock Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Liquidation Report
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Review/Management Report
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Interim Audit Report
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Consolidation of Financial Statements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Special Purpose Audit Report
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Cost Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Compliance Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Sales/Revenue Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Forensic Audit
                  </Link>
                </li>

                {/* <li className="relative group border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('audit-external')}
                    className="w-full text-left py-2 px-4 flex justify-between items-center hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Example
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openDropdown === 'audit-external' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <ul
                    className={`${
                      openDropdown === 'audit-external' ? 'flex' : 'hidden'
                    } md:group-hover:flex md:absolute md:left-full md:top-0 md:min-w-[220px] bg-[#0f0a2a] shadow-lg flex-col w-full`}
                  >
                    <li>
                      <Link
                        href="/audit-assurance/external/statutory"
                        className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                      >
                        one
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/audit-assurance/external/compliance"
                        className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                      >
                        two
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </li>

            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <button
                type="button"
                onClick={() => toggleDropdown('accounting')}
                className="w-full text-left py-3 px-4 flex gap-4 justify-between items-center hover:bg-[#f0f0f0] hover:text-[#000] transition-colors md:inline-flex"
              >
                Accounting & Bookkeeping
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDropdown === 'accounting' ? 'rotate-180' : ''}`}
                />
              </button>
              <ul
                className={`${
                  openDropdown === 'accounting' ? 'flex' : 'hidden'
                } md:group-hover:flex md:absolute md:left-0 md:top-full md:min-w-[350px] md:flex-col bg-[#ffffff] shadow-lg flex-col w-full text-[92%]`}
              >
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Bookkeeping and Monthly MIS Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Management Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Review and reconciliation of accounts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Payroll Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Cost Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Assistance for statutory audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Physical verification of inventory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-assurance/internal"
                    className="block py-2 px-4 hover:bg-[#f0f0f0] text-[#000] transition-colors"
                  >
                    Budgeting, Costing, and Forecasting
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <Link
                href="/business-advisory"
                className="block py-3 px-4 hover:bg-[#f0f0f0] hover:text-[#000] transition-colors"
              >
                Business Advisory
              </Link>
            </li>

            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <Link
                href="/compliance-advisory"
                className="block py-3 px-4 hover:bg-[#f0f0f0] hover:text-[#000] transition-colors"
              >
                Compliance Advisory
              </Link>
            </li>

            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <Link
                href="/corporate-services"
                className="block py-3 px-4 hover:bg-[#f0f0f0] hover:text-[#000] transition-colors"
              >
                Corporate Services
              </Link>
            </li>

            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <Link
                href="/tax-advisory"
                className="block py-3 px-4 hover:bg-[#f0f0f0] hover:text-[#000] transition-colors"
              >
                Tax Advisory
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="/industries"
                className="py-3 px-4 block border-r-[#3D3399] border-r hover:bg-[#f0f0f0] hover:text-[#000] transition-colors flex gap-3 items-center"
              >
                Industries
                <ChevronDown size={18} />
              </Link>
            </li>

            <li className="relative group border-b border-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <Link
                href="/freezones"
                className="block py-3 px-4 hover:bg-[#f0f0f0] hover:text-[#000] transition-colors"
              >
                Freezones
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="/location"
                className="block py-3 px-4 hover:bg-[#f0f0f0] hover:text-[#000] transition-colors"
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
