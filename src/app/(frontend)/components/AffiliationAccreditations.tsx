import React from 'react'

const AffiliationAccreditations = () => {
  return (
    <section className="bg-[url('/images/affiliation-accreditations.webp')] bg-cover bg-top bg-bottom bg-no-repeat">
      <div className="container py-20">
        <h2 className={`font-bebas text-5xl text-white text-center`}>
          Affiliations & Accreditations
        </h2>
        <p className="text-base text-white text-center mt-6">
          Our relentless pursuit of excellence, proven through our prestigious International and
          Local accreditations, sets us apart from others. This track record makes us the go-to
          consulting and business services provider in the UAE, with approvals from prominent free
          zones and mainland regulatory bodies. We deliver high-quality, reliable, and tailor-made
          entrepreneurial service packages that empower businesses to achieve their goals.
        </p>

        <ul className="flex flex-col md:flex-row gap-5 uppercase text-white text-center mt-12">
          <li className="bg-[#2E276B52] p-6 rounded-xl border-1 border-[#878787] flex-1 text-xl md:text-2xl flex items-center justify-center">
            International <br /> Standard Of Quality
          </li>
          <li className="bg-[#2E276B52] p-6 rounded-xl border-1 border-[#878787] flex-1 text-xl md:text-2xl items-center justify-center">
            International Register of Quality Assessed organizations (IRQAO)
          </li>
          <li className="bg-[#2E276B52] p-6 rounded-xl border-1 border-[#878787] flex-1 text-xl md:text-2xl items-center justify-center">
            Global Trusted
            <br /> E-Network
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AffiliationAccreditations
