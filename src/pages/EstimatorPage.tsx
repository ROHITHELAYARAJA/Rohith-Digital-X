import React from "react"
import { motion } from "framer-motion"
import { ProjectEstimator } from "@/components/sections/ProjectEstimator"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const EstimatorPage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()

  const handleApplyEstimate = (estimateData: {
    service: string
    budgetRange: string
    features: string[]
    description: string
  }) => {
    setContactPrefill({
      service: estimateData.service,
      budgetRange: estimateData.budgetRange,
      description: estimateData.description,
    })
    navigate("contact", "contact")
  }

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
                ESTIMATOR
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
                <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
                  DYNAMIC SCOPE &amp; BUDGET CALCULATOR
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-display">
                Calculate project{" "}
                <span className="font-boska italic font-light text-[#FFAE00]">
                  investment
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Customize your required features, view real-time estimates, and send your scope directly to Rohith E for immediate sprint planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Estimator Component */}
      <div className="py-16 container max-w-5xl mx-auto px-4 sm:px-6">
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />
      </div>
    </div>
  )
}
