import Image from 'next/image'
import Link from 'next/link'

export const AboutSection = () => {
  return (
    <section className="relative py-12">
      <div className="container py-10">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <h2 className={`font-bebas text-5xl text-[#373737]`}>About Us</h2>
            <h3 className="text-2xl text-[#2E276B] font-medium mt-5">
              Trusted experts in audit,
              <br /> compliance and advisory.
            </h3>
            <p className="mt-3 text-[#373737]">
              With a decade-long legacy of redefining industry standards, we lead with unmatched
              expertise and a deep commitment to simplifying complex business requirements. Our
              reputation for excellence is rooted in quality and integrity, allowing us to deliver
              exceptional, consistent, and client-centric audit and assurance, accounting and
              bookkeeping, taxation, compliance, and business advisory services. Licensed by the
              Department of Economic Development and certified by the Ministry of Economy, our
              financial reports are trusted by major banks and approved by regulatory bodies across
              the UAE.
            </p>
            <Link
              href="about"
              className="bg-[#1A98D5] text-white py-3 px-8 rounded-md hover:bg-[#1A98D5]/90 inline-block mt-5"
            >
              Know More
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="/images/about.webp"
              width="800"
              height="0"
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
