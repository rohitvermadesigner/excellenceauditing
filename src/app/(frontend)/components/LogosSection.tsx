'use client'
import Image from 'next/image'

const logos = [
  '/images/affiliation/1.webp',
  '/images/affiliation/2.webp',
  '/images/affiliation/3.webp',
  '/images/affiliation/4.webp',
  '/images/affiliation/5.webp',
  '/images/affiliation/6.webp',
  '/images/affiliation/7.webp',
  '/images/affiliation/8.webp',
  '/images/affiliation/9.webp',
  '/images/affiliation/10.webp',
]

const firstRow = logos.slice(0, 5)
const secondRow = logos.slice(5, 10)

export const LogosSection = () => {
  return (
    <section className="py-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-6 md:gap-24">
          {firstRow.map((logo, index) => (
            <div key={index} className="">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                height={250}
                width={150}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 md:gap-24 -translate-x-6 md:-translate-x-12">
          {secondRow.map((logo, index) => (
            <div key={index} className="">
              <Image
                src={logo}
                alt={`Logo ${index + 6}`}
                height={250}
                width={150}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
