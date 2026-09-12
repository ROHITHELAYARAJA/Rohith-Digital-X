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
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  Clock,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
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
        <div className="max-w-3xl mx-auto text-center mb-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 shadow-xs"
          >
            <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-purple-300">
              TRANSPARENT FIXED PRICING
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] font-manrope"
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
            className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal font-dmsans max-w-2xl mx-auto"
          >
            No hourly bill padding or bloated agency overhead. Transparent milestones, guaranteed delivery sprints, and direct founder-level architecture.
          </motion.p>
        </div>

        {/* Category Switcher Tabs with Morphing Background Indicator */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xs gap-1.5 flex-wrap justify-center relative">
            {packageCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id]
              const isSelected = selectedCategory === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer select-none z-10 ${
                    isSelected ? "text-white font-extrabold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activePackageCategoryTab"
                      className="absolute inset-0 rounded-xl bg-purple-600 shadow-md ring-1 ring-purple-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative z-10 h-4 w-4 ${isSelected ? "text-white" : ""}`} />
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

        {/* 3 Packages Cards Grid - Fully Height Aligned & Clear-Cut */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
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
                    className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-default h-full ${
                      isPopular
                        ? "bg-zinc-900/90 text-white shadow-2xl ring-2 ring-purple-500 z-10 border border-purple-500/50"
                        : "bg-zinc-950/80 text-white border border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-900/60"
                    }`}
                  >
                    {/* Popular Card Animated Laser Border Beam */}
                    {isPopular && (
                      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <BorderBeam size={180} duration={7} colorFrom="#8B5CF6" colorTo="#EC4899" borderWidth={2} />
                      </div>
                    )}

                    {/* Popular Illuminated Header Pill Banner (Cleanly Integrated, Never Clipped) */}
                    {isPopular && (
                      <div className="mb-4 -mt-1 flex items-center justify-center">
                        <span className="w-full py-1 px-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-sm">
                          <Sparkles className="h-3 w-3 fill-white" />
                          <span>{pkg.badge || "Most Popular Choice"}</span>
                        </span>
                      </div>
                    )}

                    <div className="flex-1 flex flex-col">
                      {/* Top: Icon, Tier Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isPopular
                              ? "bg-purple-950/60 border-purple-800/80 text-purple-400 group-hover:scale-110"
                              : "bg-zinc-900 border-zinc-800 text-zinc-300 group-hover:border-purple-500/60 group-hover:text-purple-400 group-hover:scale-110"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                            isPopular
                              ? "bg-purple-900/50 text-purple-200 border border-purple-700/50"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                          }`}
                        >
                          Tier {pkg.tierNumber}
                        </span>
                      </div>

                      {/* Title & Tagline with standardized min-height for horizontal lockstep alignment */}
                      <div className="min-h-[66px] flex flex-col justify-start mb-2">
                        <h3
                          className={`text-xl font-bold tracking-tight leading-snug transition-colors font-display ${
                            isPopular ? "text-white" : "text-white group-hover:text-purple-300"
                          }`}
                        >
                          {pkg.name}
                        </h3>
                        <p className="text-xs font-semibold mt-1 font-mono text-purple-400">
                          {pkg.tagline}
                        </p>
                      </div>

                      {/* Price Tag with standardized height */}
                      <div className="h-[60px] flex items-baseline gap-2 pb-4 mb-4 border-b border-zinc-800">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors font-trench text-white">
                          {pkg.price}
                        </span>
                        <span className="text-xs font-medium font-general text-zinc-400">
                          turnkey investment
                        </span>
                      </div>

                      {/* Scope & Delivery Info Pills (Locked to 40px each) */}
                      <div className="space-y-2 mb-4">
                        <div className="h-[40px] flex items-center gap-2 px-3 rounded-lg text-xs font-semibold bg-zinc-900/90 text-zinc-200 border border-zinc-800">
                          <Clock className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                          <span className="line-clamp-1">Scope: {pkg.pagesOrScreens}</span>
                        </div>

                        <div className="h-[40px] flex items-center gap-2 px-3 rounded-lg text-xs font-semibold bg-zinc-900/90 text-emerald-400 border border-zinc-800">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span className="line-clamp-1">{pkg.supportDays}</span>
                        </div>
                      </div>

                      {/* Perfect For Box (Locked min-height for uniform horizontal alignment) */}
                      <div className="min-h-[82px] p-3 rounded-xl mb-5 text-xs transition-all duration-200 flex flex-col justify-start bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                        <span className="font-bold block mb-0.5 text-[11px] text-zinc-400 uppercase tracking-wider">
                          Perfect For:
                        </span>
                        <p className="leading-relaxed line-clamp-3 text-xs">{pkg.idealFor}</p>
                      </div>

                      {/* Features List (Flex 1 to occupy remaining height uniformly) */}
                      <div className="flex-1 space-y-2 mb-5">
                        <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-zinc-400">
                          Included In This Package:
                        </span>
                        <ul className="space-y-1.5 text-xs">
                          {pkg.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2 p-1 rounded-md transition-colors duration-150 group/feat hover:bg-zinc-900 hover:text-white"
                            >
                              <Check
                                className="h-4 w-4 shrink-0 mt-0.5 text-purple-400 group-hover/feat:scale-125 transition-transform"
                              />
                              <span className="leading-relaxed text-xs text-zinc-300">
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
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0 fill-current" />
                        <span>Inquire on WhatsApp ({pkg.price})</span>
                      </a>

                      {/* Online Customization CTA */}
                      <Button
                        variant={isPopular ? "outline" : "default"}
                        size="sm"
                        onClick={() => handleChoosePackage(pkg)}
                        className={`w-full justify-center gap-2 text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                          isPopular
                            ? "bg-purple-600 text-white hover:bg-purple-500 border-none shadow-md shadow-purple-600/30"
                            : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                        }`}
                      >
                        <span>Customize Online &amp; Book</span>
                        <ArrowRight className="h-3.5 w-3.5 text-purple-300" />
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
