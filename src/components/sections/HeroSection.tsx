import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Award } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import VaporizeTextCycle from "@/components/ui/vapour-text-effect"

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation()

  const tickerItems = [
    { num: "01", title: "WEB APPS", desc: "<0.4s load speed", route: "services-web" as const },
    { num: "02", title: "MOBILE APPS", desc: "iOS & Android", route: "services-mobile" as const },
    { num: "03", title: "AI AGENTS", desc: "WhatsApp & Autopilot", route: "services-automation" as const },
    { num: "04", title: "PACKAGES", desc: "From ₹5,000", route: "packages" as const },
  ]

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-hidden bg-white text-zinc-950 selection:bg-[#0066FF] selection:text-white border-b border-zinc-200/80"
    >
      {/* Top Ambient Speed Glow (Electric Blue Aura) */}
      <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[320px] sm:h-[420px] bg-gradient-to-b from-[#0066FF]/15 via-[#38BDF8]/8 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-0" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center text-center">
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge (Clean pill, electric blue 'New' tag, zero dots) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-zinc-200/90 text-xs font-dmsans text-zinc-700 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md hover:border-blue-300 transition-colors"
          >
            <span className="px-2 py-0.5 rounded-full bg-[#0066FF] text-white font-extrabold text-[10px] tracking-wide uppercase">
              New
            </span>
            <span className="font-medium text-zinc-700 sm:text-xs text-[11px]">
              High-performance web applications &amp; AI systems in 14-day sprints
            </span>
          </motion.div>

          {/* Kinetic Headline (Manrope Sans + Playfair Display Italic Contrast) */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-[-0.035em] text-zinc-950 leading-[1.07] font-manrope text-balance"
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans"
          >
            The fastest way to engineer web applications, native mobile apps, and autonomous AI systems — delivered in 14 days directly by founder Rohith E.
          </motion.p>

          {/* Dynamic Particle Vaporization Effect (Image 2: Larger, Slow & Smooth) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="w-full max-w-xl mx-auto h-14 sm:h-16 flex items-center justify-center px-6 rounded-2xl bg-white/95 border border-blue-500/25 shadow-[0_8px_30px_rgba(0,102,255,0.08)] backdrop-blur-md"
          >
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#0066FF] font-extrabold mr-3 shrink-0">
              BUILDING:
            </div>
            <div className="flex-1 h-12 flex items-center justify-center overflow-hidden">
              <VaporizeTextCycle
                texts={[
                  "High-Converting Web Platforms",
                  "Native Mobile iOS & Android Apps",
                  "Autonomous AI Automation Agents",
                  "Sub-0.4s Scalable Backend APIs"
                ]}
                font={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "17px",
                  fontWeight: 800,
                }}
                color="rgb(24, 24, 27)"
                spread={3}
                density={5}
                animation={{
                  vaporizeDuration: 2.6,
                  fadeInDuration: 0.9,
                  waitDuration: 2.8,
                }}
                direction="left-to-right"
                alignment="center"
              />
            </div>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 pt-1"
          >
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-[#0066FF] text-white font-manrope font-bold text-sm sm:text-base shadow-[0_8px_20px_rgba(0,102,255,0.2)] hover:shadow-[0_12px_28px_rgba(0,102,255,0.35)] active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Get Started for Free</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate("work")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 font-manrope font-semibold text-sm sm:text-base shadow-xs hover:border-blue-400 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-500" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Service Matrix Bar (Image 4: Smooth Continuous Scrolling Marquee with Increased Font Size) */}
      <div className="mt-8 sm:mt-10 pt-4 pb-4 border-t border-zinc-200/80 bg-zinc-50/70 backdrop-blur-md overflow-hidden relative">
        <div className="flex w-max items-center gap-8 animate-marquee hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <button
              key={`${item.num}-${idx}`}
              onClick={() => navigate(item.route)}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 hover:bg-white border border-zinc-200 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer group shrink-0"
            >
              <span className="text-[#0066FF] font-black font-mono text-sm sm:text-base tracking-tight">
                {item.num}
              </span>
              <span className="font-extrabold text-zinc-900 group-hover:text-[#0066FF] font-manrope text-sm sm:text-base tracking-tight transition-colors">
                {item.title}
              </span>
              <span className="text-zinc-500 font-normal font-dmsans text-xs sm:text-sm">
                ({item.desc})
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
