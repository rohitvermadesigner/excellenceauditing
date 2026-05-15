'use client'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

export type Team = {
  name: string
  designation: string
  img: string
}

export const teams: Team[] = [
  {
    name: 'MD AASIM AASI',
    designation: 'Senior Manager - Audit & Assurance',
    img: '/images/aasim.webp',
  },
  {
    name: 'MONIKA UMRANIYA',
    designation: 'Sr. Manager - Tax Advisory',
    img: '/images/monika.webp',
  },
  {
    name: 'PURVAK UMRANIYA',
    designation: 'Sr. Manager - Accounting & Bookkeeping',
    img: '/images/purvak.webp',
  },
  {
    name: 'JAIDEEP JAYARAJ',
    designation: 'Sr. Manager - Business Consulting',
    img: '/images/jaideep.webp',
  },
  {
    name: 'ABDALLAH ACHLAIBOU',
    designation: 'Sr. Manager - Business Consulting',
    img: '/images/abdallah.webp',
  },
  {
    name: 'IMTIAZ HUSSAIN',
    designation: 'Sr. Manager - Corporate Services',
    img: '/images/imtiaz.webp',
  },
  {
    name: 'ROZEL DE LOS REYES',
    designation: 'Client Servicing Manager',
    img: '/images/rozel.webp',
  },
  {
    name: 'SYED SAYEED ALAM',
    designation: 'Manager - Business Consulting',
    img: '/images/sayeed.webp',
  },
]

export const HeroSection = () => {
  return (
    <section className="bg-[url('/images/hero-banner.webp')] bg-cover bg-bottom bg-no-repeat">
      <div className="relative container pt-8 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-4 md:gap-8 items-center">
          <div className="text-white">
            <Image
              src="/images/10-years.svg"
              alt="Hero Image"
              width={100}
              height={0}
              className="w-36 h-auto"
            />
            <h1 className={`font-bebas relative text-3xl md:text-7xl mt-5`}>
              Of Simplifying your Business with a<br /> Touch of Excellence
            </h1>

            <div className="flex items-center gap-4 space-x-2 md:space-x-4 mt-8">
              <a
                href="#"
                className="bg-white text-[#000000] px-5 md:px-8 py-2 md:py-4 rounded-md font-medium  inline-flex items-center justify-center shadow-md"
              >
                Contact Us
              </a>

              <ul className="flex gap-4 flex-col md:flex-row">
                <li className="">
                  <a
                    href="#"
                    className="text-[#000000] block w-12 h-12 rounded-full flex gap-2 bg-[#FFFFFF] text-[1.2rem] items-center justify-center"
                  >
                    <FaPhoneAlt className="text-md" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] block w-12 h-12 rounded-full flex gap-2 bg-[#FFFFFF] text-[1.2rem] items-center justify-center"
                  >
                    <FaWhatsapp className="text-md" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] block w-12 h-12 rounded-full flex gap-2 bg-[#FFFFFF] text-[1.2rem] items-center justify-center"
                  >
                    <FaEnvelope className="text-md" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              effect="fade"
              speed={1200}
              fadeEffect={{
                crossFade: true,
              }}
            >
              {teams?.map((team, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <Image
                      src={team.img}
                      alt="Hero Image"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                    <span className="bg-white inline-block p-4 absolute bottom-6 left-0 right-0 ml-auto mr-auto w-72 text-center">
                      <h4 className="font-bold text-base">{team.name}</h4>
                      <h4 className="text-sm">{team.designation}</h4>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
