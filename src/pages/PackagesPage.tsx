import React from "react"
import { motion } from "framer-motion"
import { PackagesSection } from "@/components/sections/PackagesSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { DetailedPackage } from "@/data/packages"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"

export const PackagesPage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()

  const handleSelectPackage = (pkg: DetailedPackage) => {
    let serviceName = "Business Website Development"
    if (pkg.category === "mobile") serviceName = "Mobile App Development"
    if (pkg.category === "ai") serviceName = "AI Automation Agents"

    let budget = "< ₹25,000"
    if (pkg.numericPrice >= 100000) {
      budget = "₹1,00,000+"
    } else if (pkg.numericPrice >= 50000) {
      budget = "₹50,000 - ₹1,00,000"
    } else if (pkg.numericPrice >= 25000) {
      budget = "₹25,000 - ₹50,000"
    }

    setContactPrefill({
      service: serviceName,
      budgetRange: budget,
      description: `I would like to proceed with the "${pkg.name}" package (${pkg.price} • Tier ${pkg.tierNumber}). Please connect to initiate discovery and project planning.`,
    })
    navigate("contact", "contact")
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Top Page Header */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* 3D Wireframe Canvas */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-75 pointer-events-none hidden lg:block">
          <WireframePolyhedronCanvas
            polyhedron="icosahedron"
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
                PRICING
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-mono font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#FFAE00] animate-pulse" />
                <span>TRANSPARENT FIXED ENGAGEMENT TIERS</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Clear packages<span className="text-[#FFAE00]">.</span> No hidden fees<span className="text-[#FFAE00]">.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Flat, predictable pricing with 100% source code ownership, rapid turnaround, and direct founder sprint delivery.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <HeyDigitalButton
                  variant="amber"
                  size="lg"
                  onClick={() => navigate("contact")}
                >
                  Book Discovery Sprint ↗
                </HeyDigitalButton>

                <HeyDigitalButton
                  variant="dark"
                  size="lg"
                  onClick={() => navigate("estimator")}
                >
                  Custom Cost Estimator
                </HeyDigitalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* FAQ Component */}
      <FaqSection />
    </div>
  )
}
