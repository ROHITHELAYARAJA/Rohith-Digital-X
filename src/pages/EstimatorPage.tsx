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
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Top Page Header - Modern Fastlane / Home Architecture */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              Calculate project{" "}
              <span className="font-boska italic font-light text-purple-400">
                investment
              </span>
              <span className="text-[#FF4D3D]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
              Customize your required features, view real-time estimates, and send your scope directly to Rohith E for immediate sprint planning.
            </p>
          </div>
        </div>
      </section>

      {/* Main Estimator Component */}
      <div className="py-12 container max-w-5xl mx-auto px-4 sm:px-6">
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />
      </div>
    </div>
  )
}
