import Image from 'next/image'

export const VideoSection = () => {
  return (
    <section className="bg-[#2E276B] bg-[url('/images/video-section-bg.webp')] bg-no-repeat bg-[-20px_calc(100%+80px)]">
      <div className="container py-20">
        <div className="grid grid-cols-[0.7fr_1.3fr] items-center gap-24">
          <div>
            <Image src="/images/logo-white.svg" width={400} height={0} alt="" />
          </div>
          <div className="relative">
            <iframe className="w-full h-full aspect-video bg-[#1A98D5]" />
            <iframe
              className="w-full h-full aspect-video absolute -top-6 -right-6"
              src="https://www.youtube.com/embed/5PjrqdLWVyQ?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
