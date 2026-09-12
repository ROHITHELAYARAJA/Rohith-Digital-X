import React, { useState } from "react"
import { faqsData } from "@/data/faqs"
import { AccordionItem } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-zinc-200 relative text-zinc-950">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FFAE00] font-mono">
            TRANSPARENT ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight font-display">
            Frequently asked{" "}
            <span className="text-[#FFAE00]">
              questions
            </span>.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed font-normal">
            Direct, candid answers about pricing, speed, communication, and post-launch guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq, index) => (
            <AccordionItem
              key={index}
              id={`faq-${index}`}
              title={faq.question}
              badge={faq.category}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 text-center space-y-4 shadow-xl">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white">
            Have a specific question not covered here?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
            Founder Rohith E is available on WhatsApp and email to review your technical requirements.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/919655483130?text=Hello%20Rohith,%20I%20have%20a%20question%20regarding%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFAE00] text-black font-extrabold text-xs shadow-md hover:bg-[#FFB800] transition-all"
            >
              <span>Chat with Rohith E on WhatsApp ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
