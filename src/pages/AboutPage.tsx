import React from "react"
import { motion } from "framer-motion"
import { AboutSection } from "@/components/sections/AboutSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Top Page Header */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-start gap-6 sm:gap-10">
            {/* Left Vertical Indicator */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
              <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.25em] text-[#FFAE00]">
                ABOUT
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
                <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
                  FOUNDER PROFILE &amp; PHILOSOPHY
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-display">
                Architecting digital systems with{" "}
                <span className="font-boska italic font-light text-[#FFAE00]">
                  speed &amp; taste
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Full-stack engineer &amp; founder Rohith E. Delivering production-grade web platforms, native mobile applications, and AI integrations with direct founder accountability.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <HeyDigitalButton
                  variant="amber"
                  size="lg"
                  onClick={() => navigate("contact")}
                >
                  Book a Call with Rohith ↗
                </HeyDigitalButton>

                <HeyDigitalButton
                  variant="dark"
                  size="lg"
                  onClick={() => navigate("work")}
                >
                  View Selected Work
                </HeyDigitalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Trust & Methodology Principles */}
      <TrustSection />

      {/* Bottom Action */}
      <div className="py-20 container max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white space-y-6 shadow-2xl border border-zinc-800">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display">Ready to build your next product?</h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Direct founder-level engineering, transparent pricing, and rapid sprint delivery with zero agency overhead.
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <HeyDigitalButton
              variant="amber"
              size="lg"
              onClick={() => navigate("contact")}
            >
              Start Your Project Sprints ↗
            </HeyDigitalButton>
          </div>
        </div>
      </div>
    </div>
  )
}
