import React from "react"
import { motion } from "framer-motion"
import { AboutSection } from "@/components/sections/AboutSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Top Page Header */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* 3D Wireframe Canvas */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-75 pointer-events-none hidden lg:block">
          <WireframePolyhedronCanvas
            polyhedron="dodecahedron"
            size={180}
            lineColor="rgba(255, 174, 0, 0.45)"
            glowColor="rgba(255, 174, 0, 0.15)"
          />
        </div>

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-mono font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#FFAE00] animate-pulse" />
                <span>FOUNDER PROFILE &amp; PHILOSOPHY</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Know <span className="text-[#FFAE00]">Rohith E</span> as I am.
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Full-stack software engineer &amp; digital product designer building robust, conversion-focused digital systems from Tamil Nadu, India.
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
