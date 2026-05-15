'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 4,
    name: 'Alex Andarakis',
    company: 'Andarakis Advisory Services',
    thumbnail: '/images/testimonial-4-thumbnail.webp',
    logo: '/images/testimonial-logo-4.png',
    author: '/images/testimonial-4.webp',
    video: 'https://www.youtube.com/embed/y8df77TMjYc?autoplay=1',
    logoWidth: 80,
  },
  {
    id: 1,
    name: 'Firas Abdulzahra Lafta Al Saedi',
    company: 'Luxury Wheels',
    thumbnail: '/images/testimonial-1-thumbnail.webp',
    logo: '/images/testimonial-logo-1.png',
    author: '/images/testimonial-1.webp',
    video: 'https://www.youtube.com/embed/Y-Iaa2hGqhQ?autoplay=1',
    logoWidth: 100,
  },
  {
    id: 2,
    name: 'Massimiliano Donnarumma',
    company: 'Sartoria Rossi',
    thumbnail: '/images/testimonial-2-thumbnail.webp',
    logo: '/images/testimonial-logo-2.png',
    author: '/images/testimonial-2.webp',
    video: 'https://www.youtube.com/embed/ojugIywgXEM?autoplay=1',
    logoWidth: 100,
  },
  {
    id: 3,
    name: 'Georges Kaawar',
    company: 'Taps & More',
    thumbnail: '/images/testimonial-3-thumbnail.webp',
    logo: '/images/testimonial-logo-3.png',
    author: '/images/testimonial-3.webp',
    video: 'https://www.youtube.com/embed/8fYUJtQyJqo?autoplay=1',
    logoWidth: 55,
  },
]

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-bebas text-5xl text-[#373737] text-center">Client Testimonials</h2>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          pagination={false}
          simulateTouch={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="pb-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
                <Image
                  src={item.thumbnail}
                  alt={item.name}
                  width={500}
                  height={0}
                  className="w-full object-cover"
                />

                <Image
                  src={item.logo}
                  alt="Company Logo"
                  width={item.logoWidth}
                  height={80}
                  className="absolute top-4 right-4"
                />

                <button
                  onClick={() => setActiveVideo(item.video)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-black/80 text-white flex items-center justify-center hover:scale-110 transition">
                    ▶
                  </div>
                </button>

                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <Image src={item.author} alt={item.name} width={70} height={70} className="" />

                  <div className="text-white">
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm">{item.company}</p>
                  </div>
                </div>

                {/* <div className="absolute inset-0 bg-black/30 pointer-events-none"></div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 bg-white text-black rounded-full w-10 h-10"
            >
              ✕
            </button>

            {/* Video */}
            <div className="aspect-video">
              <iframe
                src={activeVideo}
                title="Testimonial Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
