import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react"
import { testimonialsData, TestimonialItem } from "@/data/testimonials"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { useNavigation } from "@/context/NavigationContext"

export const HeyDigitalTestimonialsSection: React.FC = () => {
  const { navigate } = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const activeReview = testimonialsData[currentIndex]

  return (
    <section className="py-14 sm:py-18 bg-[#070708] text-white relative overflow-hidden border-b border-zinc-800/80">
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-manrope leading-[1.08]">
              From founders we've{" "}
              <span className="font-playfair italic font-medium text-[#FF3B30]">
                partnered with
              </span>
              .
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full border border-zinc-800 bg-zinc-900/90 hover:bg-purple-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full border border-zinc-800 bg-zinc-900/90 hover:bg-purple-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              {/* Star Rating & Metric Badge */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-purple-400">
                  {[...Array(activeReview.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono font-bold text-purple-400">
                  {activeReview.metricBadge}
                </span>
                <span className="text-xs font-mono text-zinc-500">VERIFIED CLIENT PARTNER</span>
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-100 leading-relaxed font-sans">
                "{activeReview.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-850">
                <div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${activeReview.avatarColor} flex items-center justify-center font-bold text-black text-base shadow-md`}
                >
                  {activeReview.avatarText}
                </div>
                <div>
                  <div className="text-base font-bold text-white font-display">
                    {activeReview.clientName}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    {activeReview.role} • <span className="text-purple-400">{activeReview.company}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mini Matrix */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4 text-xs font-mono text-zinc-400">
              <div className="font-bold pb-2 border-b border-zinc-800 uppercase text-[11px] tracking-wider text-purple-400">
                Client Engagement Specs
              </div>
              <div className="flex justify-between">
                <span>Founder:</span>
                <span className="text-white font-bold">Rohith E</span>
              </div>
              <div className="flex justify-between">
                <span>Speed Benchmark:</span>
                <span className="text-emerald-400 font-bold">&lt;0.4s FCP</span>
              </div>
              <div className="flex justify-between">
                <span>Code Ownership:</span>
                <span className="text-white font-bold">100% Client Handover</span>
              </div>
              <div className="flex justify-between">
                <span>Support Period:</span>
                <span className="text-purple-400 font-bold">14-Day Post-Launch</span>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={() => navigate("contact")}
                  className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-purple-600 text-white hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Your Project</span>
                  <span>↗</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
