import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import VaporizeTextCycle from "@/components/ui/vapour-text-effect"

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section
      id="hero"
      className="relative flex flex-col pt-24 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-white text-zinc-950 selection:bg-blue-600 selection:text-white border-b border-zinc-200/80 w-full max-w-full"
    >
      {/* Fastlane-style Top Ambient Speed Glow */}
      <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[350px] sm:w-[1100px] h-[280px] sm:h-[460px] bg-gradient-to-b from-blue-500/15 via-[#FF4D3D]/10 to-transparent rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-0" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center text-center">
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex max-w-full items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 border border-zinc-200/90 text-xs font-dmsans text-zinc-700 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md hover:border-zinc-300 transition-colors"
          >
            <span className="px-1.5 py-0.5 rounded-full bg-[#FF3B30] text-white font-bold text-[9px] sm:text-[10px] tracking-wide uppercase shrink-0">
              New
            </span>
            <span className="font-medium text-zinc-700 text-[10px] sm:text-xs truncate sm:whitespace-normal">
              High-performance web applications &amp; AI systems in 14-day sprints
            </span>
          </motion.div>

          {/* Fastlane-style Kinetic Headline - Responsive Mobile Scaling */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[1.85rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-zinc-950 leading-[1.12] sm:leading-[1.07] font-manrope text-balance px-1"
          >
            Ship{" "}
            <span className="font-playfair italic font-medium text-zinc-950 inline-block px-0.5 sm:px-1">
              bespoke software
            </span>{" "}
            in{" "}
            <span className="font-playfair italic font-medium text-zinc-950 inline-block px-0.5 sm:px-1">
              14 days
            </span>
            , not quarters.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans px-3 text-balance"
          >
            The fastest way to engineer web applications, native mobile apps, and autonomous AI systems — delivered in 14 days directly by founder Rohith&nbsp;E.
          </motion.p>

          {/* Dynamic Particle Vaporization Effect: Clean and Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto h-11 sm:h-16 flex items-center justify-center px-2.5 sm:px-8 rounded-xl sm:rounded-2xl bg-zinc-50/95 border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            <div className="text-[9px] sm:text-xs md:text-sm font-mono uppercase tracking-wider text-blue-600 font-bold mr-2 sm:mr-3 shrink-0">
              BUILDING:
            </div>
            <div className="flex-1 h-9 sm:h-12 flex items-center justify-center overflow-hidden min-w-0">
              <VaporizeTextCycle
                texts={[
                  "High-Converting Web Platforms",
                  "Native Mobile iOS & Android Apps",
                  "Autonomous AI Automation Agents",
                  "Sub-0.4s Scalable Backend APIs"
                ]}
                font={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "12px",
                  fontWeight: 800,
                }}
                color="rgb(15, 23, 42)"
                spread={2}
                density={5}
                animation={{
                  vaporizeDuration: 2.5,
                  fadeInDuration: 1.0,
                  waitDuration: 3.0,
                }}
                direction="left-to-right"
                alignment="center"
              />
            </div>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none"
          >
            <button
              onClick={() => navigate("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] hover:bg-[#FF4D3D] text-white font-manrope font-bold text-xs sm:text-base shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_24px_rgba(255,77,61,0.5)] active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Get Started for Free</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Secondary CTA: Professional black border */}
            <button
              onClick={() => navigate("work")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-transparent border border-zinc-900 text-zinc-900 font-manrope font-semibold text-xs sm:text-base hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
