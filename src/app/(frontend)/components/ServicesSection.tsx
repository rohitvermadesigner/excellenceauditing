'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bebas_Neue } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
})

const services = [
  {
    id: 1,
    title: 'Audit and Assurance',
    description:
      'We specialize in comprehensive audits that fully comply with International Accounting Standards (IAS) and International Financial Reporting Standards (IFRS). Approved by governing bodies in both free zones and the mainland, our highly qualified team of accountants and auditors ensures that every service—whether external audits, review reports, or agreed- upon procedure assignments—meets your regulatory and business requirements.',
    image: '/images/service-audit-assurance.webp',
    subTabs: [
      {
        title: 'External/Statutory Audit',
        link: 'external-statutory-audit',
      },
      {
        title: 'Internal Audit',
        link: 'internal-audit',
      },
      {
        title: 'Stock Audit',
        link: 'stock-audit',
      },
      {
        title: 'Liquidation Report',
        link: 'liquidation-report',
      },
      {
        title: 'Interim Audit Report',
        link: 'interim-audit-report',
      },
      {
        title: 'Consolidation of Financial Statements',
        link: 'consolidation-of-financial',
      },
      {
        title: 'Compliance Audit',
        link: 'compliance-audit',
      },
      {
        title: 'Cost Audit',
        link: 'cost-audit',
      },
      {
        title: 'Review/Management Report',
        link: 'review-management-report',
      },
      {
        title: 'Sales/Revenue Audit',
        link: 'sales-revenue-audit',
      },
      {
        title: 'Forensic Audit',
        link: 'forensic-audit',
      },
      {
        title: 'Special Purpose Audit Report',
        link: 'special-purpose-audit-report',
      },
    ],
  },
  {
    id: 2,
    title: 'Accounting and Bookkeeping',
    description:
      'Led by a team of expert UAE chartered accountants, we deliver world-class bookkeeping and accounting services that stay fully aligned with the latest regulations. We handle everything from managing your financial transactions to generating quarterly, half-yearly, and annual statements, ensuring your business remains financially sound and compliant.',
    image: '/images/service-audit-assurance.webp',
    subTabs: [
      {
        title: 'Bookkeeping & Monthly MIS reporting',
        link: 'Bookkeeping-Monthly-Reporting',
      },
      {
        title: 'Management Accounting',
        link: 'management-accounting',
      },
      {
        title: 'Review and Reconciliation of Accounts',
        link: 'review-reconciliation',
      },
      {
        title: 'Physical Verification of Inventory',
        link: 'physical-verification-inventory',
      },
      {
        title: 'Budgeting, Costing, and Forecasting',
        link: 'budgeting-costing-forecasting',
      },
      {
        title: 'Payroll Accounting',
        link: 'payroll-accounting',
      },
      {
        title: 'Cost Accounting',
        link: 'cost-accounting',
      },
      {
        title: 'Assistance for Statutory Audit',
        link: 'assistance-statutory-audit',
      },
    ],
  },
  {
    id: 3,
    title: 'Taxation Services',
    description:
      'Navigating the complexities of tax regulations is easier with our team of expert company tax accountants, consultants, and advisors. Whether you need assistance with VAT return services, in-depth corporate tax advisory, we provide proactive guidance to ensure compliance, minimize risks, and drive business growth in an ever-evolving regulatory environment.',
    image: '/images/service-audit-assurance.webp',
    subTabs: [
      {
        title: 'External/Statutory Audit',
        link: 'external-statutory-audit',
      },
    ],
  },
  {
    id: 4,
    title: 'Compliance Services',
    description:
      'Specializing in company AML, UBO, and business compliance services, our team stays ahead of regulatory shifts, ensuring your business is always fully aligned with government requirements. Our AML compliance consultants help organizations navigate complex regulatory challenges, empowering them to thrive in a dynamic business environment while aligning with government standards.',
    image: '/images/service-audit-assurance.webp',
    subTabs: [
      {
        title: 'External/Statutory Audit',
        link: 'external-statutory-audit',
      },
    ],
  },
  {
    id: 5,
    title: 'Business Advisory',
    description:
      'With unparalleled expertise in UAE regulations, we help clients overcome operational challenges and implement innovative, professional business plans along with cost-effective solutions that drive growth. Our tailored business advisory services are designed to guide transitions, craft strategic pathways, and drive the achievement of key business goals, ensuring success and sustainable results.',
    image: '/images/service-audit-assurance.webp',
    subTabs: [
      {
        title: 'External/Statutory Audit',
        link: 'external-statutory-audit',
      },
    ],
  },
]

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 overflow-hidden bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`${bebasNeue.className} text-5xl text-[#373737] text-center`}>
          OUR SERVICES
        </h2>

        <div className="flex flex-wrap border-b border-gray-200 pb-4 mb-10 mt-10">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex-1 ${
                activeTab === index
                  ? 'bg-[#2E276B] text-white'
                  : 'bg-white text-[#656565] hover:bg-gray-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2
              className={`${bebasNeue.className} text-3xl md:text-4xl font-bold text-[#2E276B] mb-3`}
            >
              {services[activeTab].title}
            </h2>

            <p className="text-[#373737] text-base leading-relaxed mb-8">
              {services[activeTab].description}
            </p>

            <ul className="flex flex-wrap gap-y-3 gap-x-2">
              {services[activeTab].subTabs?.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 bg-white text-[#373737] px-6 py-3 hover:bg-gray-100 transition duration-300 border-1 border-[#E2E2E2]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].title}
                width={600}
                height={500}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
