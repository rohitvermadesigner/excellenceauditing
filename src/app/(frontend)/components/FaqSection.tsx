// components/FaqSection.jsx
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const leftFaqs = [
  {
    question:
      'Is Excellence registered and approved auditors in DMCC, DIFC, JAFZA, DAFZA, and other free zones?',
    answer:
      'Mansoor Mulla Auditing of Accounts, our legal entity for auditing, is a registered and approved auditor in DMCC, DIFC, JAFZA, DED, DWC, DAFZA, TECOM, Dubai Media City, SAIF Zone, Dubai Internet City, DSO, Hamriyah Free Zone, The Dubai Design District (D3), and other major free zones and regulatory authorities.',
  },
  {
    question: 'How can Excellence help with your audit in DMCC?',
    answer:
      'Excellence is a leading audit firm in UAE, registered as a DMCC approved auditor and of other regulatory bodies. We follow statutory requirements, International Financial Reporting Standards (IFRS), and International Standards on Auditing (ISAs) to verify the accuracy of financial records, validate transactions, and issue an auditor’s report reflecting our findings.',
  },
  {
    question: 'Is Excellence approved by the Ministry of Economy?',
    answer: 'Yes, we are approved by the Ministry of Economy under registration number 843.',
  },
  {
    question: 'Is Excellence registered with UAE Banks?',
    answer: 'Yes, our audit reports are widely accepted by all major banks in the UAE.',
  },
  {
    question: 'What standards does Excellence follow in auditing and accounting services?',
    answer:
      'Excellence adheres to International Financial Reporting Standards (IFRS) for auditing and International Accounting Standards Board (IASB) guidelines for accounting.',
  },
]

const rightFaqs = [
  {
    question:
      'Is auditing mandatory for companies in DMCC, DIFC, JAFZA, DAFZA, DSO, and other free zones?',
    answer:
      'Yes, auditing is mandatory for companies in the DMCC and other free zones. Every company within the DMCC and other free zones is required to maintain audited financial statements and reports for the past five years. Failure to submit the required documents to the free zone authority could result in a penalty of up to AED 5,000 or the rejection of the company’s trade license during renewal.',
  },
  {
    question: 'What is the importance of hiring a DMCC approved Auditor?',
    answer:
      'Hiring a DMCC approved auditor is crucial for ensuring that your financial statements comply with DMCC regulations. Only the registered auditors or audit firms that are in the list of approved auditors for DMCC are authorized to examine and certify your financial accounts.',
  },
  {
    question: 'Why is it mandatory to hire a DMCC approved Auditor?',
    answer:
      'According to DMCC regulations, every company must appoint a registered auditor or audit firm to examine and report on its financial accounts.',
  },
  {
    question: 'What documents need to be maintained for the audit?',
    answer:
      'To prepare for an audit, businesses should organize their documents according to accepted standards. Common documents required during the audit process include the trial balance, VAT return filings, key general ledger entries, important business contracts, and bank reconciliations.',
  },
  {
    question: 'What is the scope of Excellence accounting services?',
    answer:
      'Our comprehensive accountancy services cover the daily recording and management of payments, receipts, sales, purchases, expenses, and inventory.',
  },
]

interface FaqItem {
  question: string
  answer: string
}

function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>

            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-5 pb-5 text-gray-600 leading-7">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FaqSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">Faq's</h2>
            <ChevronDown className="w-6 h-6 text-gray-700" />
          </div>

          <p className="text-gray-600 leading-7">
            With our proactive and client-centric approach, clients gain peace of mind knowing they
            are fully compliant and well-positioned for success in a dynamic regulatory landscape.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Accordion items={leftFaqs} />
          <Accordion items={rightFaqs} />
        </div>
      </div>
    </section>
  )
}
