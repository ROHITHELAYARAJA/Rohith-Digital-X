import React, { useState } from "react"
import { motion } from "framer-motion"
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
    <section id="faq" className="py-14 sm:py-18 bg-[#070708] border-t border-zinc-800 relative text-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-xs">
            <span className="font-manrope font-bold text-[11px] uppercase tracking-wider text-zinc-400">
              TRANSPARENT ANSWERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] font-manrope">
            Everything you need to{" "}
            <span className="font-playfair italic font-medium text-[#FF3B30]">
              know
            </span>
            .
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal font-dmsans">
            Direct, candid answers about sprint timelines, founder communication, code ownership, and post-launch guarantees.
          </p>
        </motion.div>

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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-extrabold text-xs shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:bg-purple-500 transition-all cursor-pointer"
            >
              <span>Chat with Rohith E on WhatsApp ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
