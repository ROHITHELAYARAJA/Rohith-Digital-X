import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Award } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 overflow-hidden bg-white text-zinc-950 selection:bg-[#FF4D3D] selection:text-white border-b border-zinc-200/80"
    >
      {/* Fastlane-style Top Ambient Speed Glow (Atmospheric soft red/coral haze at the top) */}
      <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[340px] sm:h-[460px] bg-gradient-to-b from-[#FF4D3D]/18 via-[#FFAE00]/10 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-0" />

      {/* Subtle fine architectural dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-0 opacity-70" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center text-center">
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge (Fastlane-inspired, clean pill, vibrant red 'New' tag) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-zinc-200/80 text-xs font-dmsans text-zinc-700 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md hover:border-zinc-300 transition-colors"
          >
            <span className="px-2 py-0.5 rounded-full bg-[#FF3B30] text-white font-extrabold text-[10px] tracking-wide uppercase">
              New
            </span>
            <span className="font-medium text-zinc-700 sm:text-xs text-[11px]">
              High-performance web applications &amp; AI systems in 14-day sprints
            </span>
          </motion.div>

          {/* Fastlane-style Massive Kinetic Headline (Manrope Sans + Playfair Display Italic Contrast) */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-[-0.035em] text-zinc-950 leading-[1.07] font-manrope text-balance"
          >
            Ship{" "}
            <span className="font-playfair italic font-medium text-zinc-950 inline-block px-1">
              bespoke software
            </span>{" "}
            in{" "}
            <span className="font-playfair italic font-medium text-zinc-950 inline-block px-1">
              14 days
            </span>
            , not quarters.
          </motion.h1>

          {/* Crisp, High-Impact 2-Line Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans"
          >
            The fastest way to engineer web applications, native mobile apps, and autonomous AI systems — delivered in 14 days directly by founder Rohith E.
          </motion.p>

          {/* Action CTA Buttons: Sleek Fastlane-Style Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#111111] hover:bg-black text-white font-manrope font-bold text-sm sm:text-base shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Get Started for Free</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate("work")}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 font-manrope font-semibold text-sm sm:text-base shadow-xs hover:border-zinc-400 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-500" />
            </button>
          </motion.div>

          {/* Micro-Trust Line: Pure, Clean Stats without Any Distracting Blinking Balls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm font-dmsans text-zinc-600"
          >
            <div className="flex items-center gap-1.5 font-medium text-zinc-800">
              <ShieldCheck className="h-4 w-4 text-[#FF3B30]" />
              <span>Direct Founder Access (Rohith E)</span>
            </div>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-[#FFAE00]" />
              <span className="font-bold text-zinc-950 font-manrope">14-Day Delivery</span>
              <span className="text-zinc-500">Guarantee</span>
            </div>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-[#FF3B30]" />
              <span className="font-bold text-zinc-950 font-manrope">100/100</span>
              <span className="text-zinc-500">Lighthouse Target</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Service Matrix Bar: Clean, Minimal Strip */}
      <div className="mt-12 sm:mt-16 pt-5 border-t border-zinc-200/80 bg-zinc-50/70 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-dmsans text-zinc-600">
            <button
              onClick={() => navigate("services-web")}
              className="flex items-center gap-2 hover:text-[#FF3B30] transition-colors cursor-pointer group"
            >
              <span className="text-[#FF3B30] font-bold font-mono">01</span>
              <span className="font-bold text-zinc-900 group-hover:text-[#FF3B30]">WEB APPS</span>
              <span className="text-zinc-500 font-normal">(&lt;0.4s load speed)</span>
            </button>

            <span className="hidden md:inline text-zinc-300">•</span>

            <button
              onClick={() => navigate("services-mobile")}
              className="flex items-center gap-2 hover:text-[#FF3B30] transition-colors cursor-pointer group"
            >
              <span className="text-[#FF3B30] font-bold font-mono">02</span>
              <span className="font-bold text-zinc-900 group-hover:text-[#FF3B30]">MOBILE APPS</span>
              <span className="text-zinc-500 font-normal">(iOS &amp; Android)</span>
            </button>

            <span className="hidden md:inline text-zinc-300">•</span>

            <button
              onClick={() => navigate("services-automation")}
              className="flex items-center gap-2 hover:text-[#FF3B30] transition-colors cursor-pointer group"
            >
              <span className="text-[#FF3B30] font-bold font-mono">03</span>
              <span className="font-bold text-zinc-900 group-hover:text-[#FF3B30]">AI AGENTS</span>
              <span className="text-zinc-500 font-normal">(WhatsApp &amp; Autopilot)</span>
            </button>

            <span className="hidden md:inline text-zinc-300">•</span>

            <button
              onClick={() => navigate("packages")}
              className="flex items-center gap-2 hover:text-[#FF3B30] transition-colors cursor-pointer group"
            >
              <span className="text-[#FF3B30] font-bold font-mono">04</span>
              <span className="font-bold text-zinc-900 group-hover:text-[#FF3B30]">PACKAGES</span>
              <span className="text-zinc-500 font-normal">(From ₹5,000)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
