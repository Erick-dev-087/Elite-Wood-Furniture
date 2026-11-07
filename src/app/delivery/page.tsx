'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';
import DeliveryProcess from '@/components/delivery/DeliveryProcess';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/constants';

const faqs = [
  {
    q: 'How does Pay on Delivery work?',
    a: 'We understand that furniture is an important household investment. When your furniture is dispatched to your home or office, our delivery team brings it inside. You inspect the joinery, upholstery, cushions, and finish. Once completely satisfied, you settle the payment.',
  },
  {
    q: 'Which areas do you deliver to in Kenya?',
    a: 'We deliver throughout Nairobi, Kiambu, Thika, Machakos, Nakuru, Eldoret, Kisumu, Mombasa, and across all major counties in Kenya. Delivery within Nairobi and Kiambu is usually same-day or next-day for in-stock pieces.',
  },
  {
    q: 'How much are the delivery fees?',
    a: 'Delivery charges vary based on distance from our Ruiru workshop and the size of the pieces ordered. We calculate exact transport costs upfront when confirming your order on WhatsApp so there are never surprises.',
  },
  {
    q: 'Can I pick up my furniture directly from your showroom?',
    a: 'Yes, absolutely! You are welcome to collect your items directly from our showroom and workshop in Ruiru Kihunguro, along Thika Road next to The Mark Hotel, during our operating hours (Mon – Sat, 6:30 AM – 8:00 PM).',
  },
  {
    q: 'What is the difference between HD and Spring cushions?',
    a: 'High-Density (HD) foam cushions provide firm, resilient, and ergonomic support that retains crisp geometric lines for years. Spring cushions feature responsive pocket springs that give a plush, luxurious bounce with soft sink-in comfort.',
  },
  {
    q: 'Can I choose a different cushion colour or fabric?',
    a: 'Yes! For our made-to-order sofa models, we offer popular upholstery shades including navy blue, charcoal grey, warm rust, forest green, and ivory cream. You can select your preferred shade when adding to bag or discuss colour samples on WhatsApp.',
  },
  {
    q: 'What should I do if an item arrives damaged or incorrect?',
    a: 'Because we operate on a Pay on Delivery policy, you inspect the items upon arrival. In the unlikely event of any transit flaw or mismatch, notify the delivery team immediately and we will promptly replace or correct the item at no extra charge.',
  },
];

export default function DeliveryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F7F3ED] min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E51B24]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-[#181818]">Delivery &amp; FAQs</span>
        </nav>

        {/* Heading */}
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522] mb-2 block">
              Reliable Transit
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl lg:text-5xl">
              Delivery Information &amp; FAQs
            </h1>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Transparent, safe, and stress-free delivery to your home or office anywhere in Kenya.
            </p>
          </div>
        </SectionReveal>

        <DeliveryProcess />

        {/* FAQs Accordion */}
        <SectionReveal>
          <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-stone-200/60 mb-16">
            <h2 className="font-serif text-2xl font-bold text-[#181818] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left gap-4 font-sans text-sm sm:text-base font-semibold text-[#181818] hover:text-[#E51B24] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={`text-lg transition-transform ${isOpen ? 'rotate-180 text-[#E51B24]' : 'text-gray-400'}`}>
                        ⌄
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed pr-6">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {/* Help Banner */}
        <SectionReveal>
          <div className="rounded-2xl bg-[#181818] p-8 text-center text-white">
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Have a specific question about your location?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6">
              Call or message our delivery coordinator on WhatsApp at <strong>{PHONE_NUMBER}</strong> for
              instant delivery quotes and timelines.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent("Hi! I'd like to check delivery cost and timelines to my area.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Ask on WhatsApp: 0725 781 911
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
