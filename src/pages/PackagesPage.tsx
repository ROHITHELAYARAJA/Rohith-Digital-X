import React from "react"
import { motion } from "framer-motion"
import { PackagesSection } from "@/components/sections/PackagesSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { DetailedPackage } from "@/data/packages"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

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
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Top Page Header - Matching Modern HomePage Architecture */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              Clear packages<span className="text-[#FF4D3D]">.</span> Zero{" "}
              <span className="font-boska italic font-light text-purple-400">
                hidden fees
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
              Flat, predictable pricing with 100% source code ownership, rapid turnaround, and direct founder sprint delivery by Rohith E.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <HeyDigitalButton
                variant="purple"
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
      </section>

      {/* Main Packages Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* FAQ Component */}
      <FaqSection />
    </div>
  )
}
