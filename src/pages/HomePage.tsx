import React from "react"
import { HeroSection } from "@/components/sections/HeroSection"
import { FastlaneSpotlightSection } from "@/components/sections/FastlaneSpotlightSection"
import { ThreeReasonsSection } from "@/components/sections/ThreeReasonsSection"
import { DigitalProductCapabilitiesSection } from "@/components/sections/DigitalProductCapabilitiesSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { PackagesSection } from "@/components/sections/PackagesSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { HeyDigitalTestimonialsSection } from "@/components/sections/HeyDigitalTestimonialsSection"
import { CalBookingWidget } from "@/components/ui/CalBookingWidget"
import { FaqSection } from "@/components/sections/FaqSection"
import { DetailedPackage } from "@/data/packages"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const HomePage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()

  const handleSelectServiceForInquiry = (serviceId: string) => {
    let serviceName = "Business Website Development"
    if (serviceId === "mobile-apps") serviceName = "Mobile App Development"
    if (serviceId === "backend-systems") serviceName = "Backend, Storage & Authentication"
    if (serviceId === "ai-automation") serviceName = "AI Automation Agents"

    setContactPrefill((prev) => ({
      ...prev,
      service: serviceName,
      description: `Inquiry regarding ${serviceName}. Please provide scope consultation.`,
    }))
    navigate("contact", "contact")
  }

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

  const handleDiscussSimilar = (projectTitle: string) => {
    setContactPrefill((prev) => ({
      ...prev,
      description: `I am interested in building a solution similar to "${projectTitle}". Let's discuss requirements and architecture.`,
    }))
    navigate("contact", "contact")
  }

  return (
    <div className="bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* 1. Fastlane-Inspired Light Hero Section */}
      <HeroSection />

      {/* 2. Fastlane Spotlight Section (Matching Image 5 with Signature Glowing Orange Box Button) */}
      <FastlaneSpotlightSection />

      {/* 3. Signature "Three Reasons They Stay" Section */}
      <ThreeReasonsSection />

      {/* 2.5. Fastlane-Inspired Proprietary Architecture & Bento Capabilities */}
      <DigitalProductCapabilitiesSection />

      {/* 3. Featured Flagship Work Section (JSBuilders + Catalog) */}
      <WorkSection onDiscussSimilar={handleDiscussSimilar} />

      {/* 4. Core Services Breakdown */}
      <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

      {/* 5. "From Brands We've Worked With" Testimonials Section */}
      <HeyDigitalTestimonialsSection />

      {/* 6. Transparent Packages & Pricing Section */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* 7. Interactive Cal.com-Style 30-Min Discovery Booking Suite */}
      <section className="py-14 sm:py-18 bg-[#070708] border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-xs">
              <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
                DIRECT CALENDAR ACCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-manrope leading-[1.08]">
              Let's build something{" "}
              <span className="font-playfair italic font-medium text-[#FF3B30]">
                extraordinary
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed font-dmsans">
              Book a 30-minute technical discovery call directly with founder Rohith E. We will map your system architecture, scope, and sprint timeline with zero fluff.
            </p>
          </div>

          <CalBookingWidget />
        </div>
      </section>

      {/* 8. Frequently Asked Questions Section (Crisp White Accordion) */}
      <FaqSection />
    </div>
  )
}
