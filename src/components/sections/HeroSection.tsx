import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import VaporizeTextCycle from "@/components/ui/vapour-text-effect"

const SERVICE_TICKER_ITEMS = [
  {
    number: "01",
    title: "WEB APPS",
    subtitle: "(<0.4s load speed)",
    route: "services-web" as const,
  },
  {
    number: "02",
    title: "MOBILE APPS",
    subtitle: "(iOS & Android)",
    route: "services-mobile" as const,
  },
  {
    number: "03",
    title: "AI AGENTS",
    subtitle: "(WhatsApp & Autopilot)",
    route: "services-automation" as const,
  },
  {
    number: "04",
    title: "PACKAGES",
    subtitle: "(From ₹5,000)",
    route: "packages" as const,
  },
]

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section
      id="hero"
      className="relative flex flex-col pt-28 sm:pt-36 pb-0 overflow-hidden bg-white text-zinc-950 selection:bg-blue-600 selection:text-white border-b border-zinc-200/80"
    >
      {/* Fastlane-style Top Ambient Speed Glow */}
      <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[340px] sm:h-[460px] bg-gradient-to-b from-blue-500/15 via-[#FF4D3D]/10 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-0" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center text-center">
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-zinc-200/90 text-xs font-dmsans text-zinc-700 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md hover:border-zinc-300 transition-colors"
          >
            <span className="px-2 py-0.5 rounded-full bg-[#FF3B30] text-white font-extrabold text-[10px] tracking-wide uppercase">
              New
            </span>
            <span className="font-medium text-zinc-700 sm:text-xs text-[11px]">
              High-performance web applications &amp; AI systems in 14-day sprints
            </span>
          </motion.div>

          {/* Fastlane-style Kinetic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans"
          >
            The fastest way to engineer web applications, native mobile apps, and autonomous AI systems — delivered in 14 days directly by founder Rohith E.
          </motion.p>

          {/* Dynamic Particle Vaporization Effect: Made Bigger, Slower, Smoother */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto h-14 sm:h-16 flex items-center justify-center px-6 sm:px-8 rounded-2xl bg-zinc-50/95 border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-blue-600 font-extrabold mr-3 shrink-0">
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
                  fontSize: "18px",
                  fontWeight: 800,
                }}
                color="rgb(15, 23, 42)"
                spread={3}
                density={6}
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
            className="flex flex-wrap items-center justify-center gap-3 pt-1"
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

          {/* 3rd image removed as requested: Micro-trust badges completely eliminated */}

        </div>
      </div>

      {/* 4th image: Continuous Horizontal Scrolling Marquee Ticker with Larger Font Size */}
      <div className="mt-8 sm:mt-10 py-3.5 border-t border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md overflow-hidden relative">
        <div className="animate-hero-ticker">
          {/* Half 1 */}
          <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 shrink-0">
            {SERVICE_TICKER_ITEMS.map((item, idx) => (
              <button
                key={`ticker-1-${idx}`}
                onClick={() => navigate(item.route)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-zinc-200/70 transition-all cursor-pointer select-none shrink-0 group"
              >
                <span className="text-xs sm:text-sm font-black font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 px-2.5 py-0.5 rounded-md shadow-2xs">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-extrabold font-manrope text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-500">
                  {item.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Half 2 (Exact duplicate for seamless -50% loop) */}
          <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 shrink-0" aria-hidden="true">
            {SERVICE_TICKER_ITEMS.map((item, idx) => (
              <button
                key={`ticker-2-${idx}`}
                onClick={() => navigate(item.route)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-zinc-200/70 transition-all cursor-pointer select-none shrink-0 group"
              >
                <span className="text-xs sm:text-sm font-black font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 px-2.5 py-0.5 rounded-md shadow-2xs">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-extrabold font-manrope text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-500">
                  {item.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
