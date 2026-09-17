import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  allPackagesData,
  packageCategories,
  DetailedPackage,
  PackageCategory,
} from "@/data/packages"
import {
  Check,
  ArrowRight,
  Globe,
  Smartphone,
  Bot,
  Clock,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"
import { scrollToSection } from "@/lib/utils"

interface PackagesSectionProps {
  onSelectPackage?: (pkg: DetailedPackage) => void
}

const CATEGORY_ICONS: Record<PackageCategory, React.ElementType> = {
  website: Globe,
  mobile: Smartphone,
  ai: Bot,
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>("website")

  const currentCategoryMeta =
    packageCategories.find((c) => c.id === selectedCategory) || packageCategories[0]

  const packages = allPackagesData.filter((p) => p.category === selectedCategory)

  const handleChoosePackage = (pkg: DetailedPackage) => {
    if (onSelectPackage) {
      onSelectPackage(pkg)
    }
    scrollToSection("contact")
  }

  // Generate complete, structured WhatsApp inquiry message
  const getWhatsAppUrl = (pkg: DetailedPackage) => {
    const featureBulletList = pkg.features.slice(0, 8).map((f) => `• ${f}`).join("\n")

    const message = `Hi Rohith! 👋

I want to inquire about the following package at Rohith Digital X:

📦 *Package:* ${pkg.name} (Tier ${pkg.tierNumber})
💰 *Investment:* ${pkg.price}
⏱️ *Scope:* ${pkg.pagesOrScreens} (${pkg.supportDays})
🎯 *Target:* ${pkg.idealFor}

*Key Inclusions:*
${featureBulletList}

Please let me know the kickoff process and timeline to get started!`

    return `https://wa.me/919655483130?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="packages" className="py-14 sm:py-18 bg-[#070708] border-t border-zinc-800 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Clean Typography */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2 sm:space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-manrope"
          >
            Clear investment with{" "}
            <span className="font-playfair italic font-medium text-[#FF4D3D]">
              zero surprises
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-base text-zinc-400 leading-relaxed font-normal font-dmsans max-w-2xl mx-auto"
          >
            No hourly bill padding or bloated agency overhead. Transparent milestones, guaranteed delivery sprints, and direct founder-level architecture.
          </motion.p>
        </div>

        {/* Category Switcher Tabs with Sleek Black & White Indicator */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xs gap-1 sm:gap-1.5 flex-wrap justify-center relative">
            {packageCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id]
              const isSelected = selectedCategory === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer select-none z-10 ${
                    isSelected ? "text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activePackageCategoryTab"
                      className="absolute inset-0 rounded-xl bg-white shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 ${isSelected ? "text-zinc-950" : ""}`} />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-400 font-medium">
            {currentCategoryMeta.subtitle}
          </p>
        </div>

        {/* 3 Packages Cards Grid - Professional Black & White with Red/Orange Hover Border */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 items-stretch"
          >
            {packages.map((pkg) => {
              const isPopular = pkg.popular
              const Icon = CATEGORY_ICONS[pkg.category]
              const whatsappUrl = getWhatsAppUrl(pkg)

              return (
                <TiltCard
                  key={pkg.id}
                  tiltMaxAngleX={isPopular ? 4 : 5}
                  tiltMaxAngleY={isPopular ? 4 : 5}
                  scale={1.015}
                  className="h-full flex flex-col"
                >
                  <div
                    className={`group relative rounded-2xl sm:rounded-3xl p-4.5 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-default h-full border ${
                      isPopular
                        ? "bg-[#111114] text-white border-zinc-700/80 shadow-2xl hover:border-[#FF4D3D] hover:shadow-[0_0_35px_rgba(255,77,61,0.25)] z-10"
                        : "bg-[#090A0D] text-white border-zinc-800/80 hover:border-[#FF4D3D] hover:shadow-[0_0_35px_rgba(255,77,61,0.22)]"
                    }`}
                  >
                    {/* Popular Pill Banner: Clean Black & White */}
                    {isPopular && (
                      <div className="mb-3 sm:mb-4 -mt-1 flex items-center justify-center">
                        <span className="w-full py-1 sm:py-1.5 px-3 rounded-full bg-zinc-900 border border-zinc-700 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-sm">
                          <span>{pkg.badge || "Most Popular Choice"}</span>
                        </span>
                      </div>
                    )}

                    <div className="flex-1 flex flex-col">
                      {/* Top: Icon, Tier Number */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div
                          className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border transition-all duration-300 bg-zinc-900 border-zinc-800 text-white group-hover:border-[#FF4D3D]/50 group-hover:text-[#FF4D3D] group-hover:scale-105"
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <span
                          className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 transition-colors"
                        >
                          Tier {pkg.tierNumber}
                        </span>
                      </div>

                      {/* Title & Tagline with standardized min-height for horizontal lockstep alignment */}
                      <div className="sm:min-h-[66px] flex flex-col justify-start mb-2">
                        <h3
                          className="text-lg sm:text-2xl font-bold tracking-tight leading-snug font-manrope text-white group-hover:text-white"
                        >
                          {pkg.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-medium mt-0.5 sm:mt-1 font-mono text-zinc-400">
                          {pkg.tagline}
                        </p>
                      </div>

                      {/* Price Tag with standardized height */}
                      <div className="min-h-[44px] sm:h-[60px] flex items-baseline gap-2 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-zinc-800">
                        <span className="text-2xl sm:text-4xl font-extrabold tracking-tight font-manrope text-white">
                          {pkg.price}
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium font-sans text-zinc-400">
                          turnkey investment
                        </span>
                      </div>

                      {/* Scope & Delivery Info Pills */}
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        <div className="py-2 sm:h-[40px] flex items-center gap-2 px-3 rounded-lg text-xs font-semibold bg-zinc-900/90 text-zinc-200 border border-zinc-800">
                          <Clock className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                          <span className="line-clamp-1">Scope: {pkg.pagesOrScreens}</span>
                        </div>

                        <div className="py-2 sm:h-[40px] flex items-center gap-2 px-3 rounded-lg text-xs font-semibold bg-zinc-900/90 text-emerald-400 border border-zinc-800">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span className="line-clamp-1">{pkg.supportDays}</span>
                        </div>
                      </div>

                      {/* Perfect For Box */}
                      <div className="sm:min-h-[82px] p-3 sm:p-3.5 rounded-xl mb-4 sm:mb-5 text-xs transition-all duration-200 flex flex-col justify-start bg-zinc-900/70 border border-zinc-800/80 text-zinc-300">
                        <span className="font-bold block mb-1 text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider">
                          Perfect For:
                        </span>
                        <p className="leading-relaxed line-clamp-3 text-xs font-sans">{pkg.idealFor}</p>
                      </div>

                      {/* Features List (Flex 1 to occupy remaining height uniformly) */}
                      <div className="flex-1 space-y-2 mb-5">
                        <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-zinc-400 font-sans">
                          Included In This Package:
                        </span>
                        <ul className="space-y-1.5 text-xs">
                          {pkg.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2 p-1 rounded-md transition-colors duration-150 group/feat hover:bg-zinc-900 hover:text-white"
                            >
                              <Check
                                className="h-4 w-4 shrink-0 mt-0.5 text-zinc-300 group-hover/feat:text-[#FF4D3D] group-hover/feat:scale-125 transition-transform"
                              />
                              <span className="leading-relaxed text-xs text-zinc-300 font-sans">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Bottom: WhatsApp Direct & Online Booking CTAs (Perfect baseline alignment across all cards) */}
                    <div className="pt-4 border-t border-zinc-800 space-y-2.5 mt-auto">
                      {/* WhatsApp Action */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 active:bg-zinc-300 text-zinc-950 text-xs sm:text-sm font-bold shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600 fill-current" />
                        <span>Inquire on WhatsApp ({pkg.price})</span>
                      </a>

                      {/* Online Customization CTA */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleChoosePackage(pkg)}
                        className="w-full justify-center gap-2 text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span>Customize Online &amp; Book</span>
                        <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </Button>

                      <p className="text-[10px] leading-relaxed text-center pt-1 text-zinc-400">
                        {pkg.thirdPartyNotes}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Third-Party Service Note Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center max-w-3xl mx-auto text-xs text-zinc-400 space-y-1 shadow-xs"
        >
          <p className="font-semibold text-zinc-200">
            Transparent Pricing & Direct WhatsApp Kickoff:
          </p>
          <p>
            Tap any WhatsApp button above to instantly open a pre-filled chat with founder Rohith E with all package specs and milestones.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
