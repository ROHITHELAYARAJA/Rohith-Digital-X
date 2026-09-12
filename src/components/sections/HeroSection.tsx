import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Bot, ShieldCheck, Zap, Sparkles } from "lucide-react"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { useNavigation } from "@/context/NavigationContext"

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-44 pb-12 overflow-hidden bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black border-b border-zinc-800/80"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating 3D Wireframe Polyhedron (Dodecahedron) on the upper right */}
      <div className="absolute right-0 sm:right-6 lg:right-12 top-28 sm:top-24 w-[340px] sm:w-[480px] lg:w-[560px] h-[340px] sm:h-[480px] lg:h-[560px] pointer-events-none opacity-85 z-0">
        <WireframePolyhedronCanvas
          polyhedron="dodecahedron"
          size={190}
          lineColor="rgba(255, 174, 0, 0.42)"
          glowColor="rgba(255, 174, 0, 0.12)"
        />
      </div>

      {/* Ambient luminous glow in background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#FFAE00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex items-start gap-6 sm:gap-12">
          
          {/* Left Vertical Indicator: Exact HeyDigital Signature */}
          <div className="hidden sm:flex flex-col items-center gap-4 pt-3 shrink-0">
            <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.28em] text-[#FFAE00]">
              HOME
            </span>
            <div className="w-[1px] h-28 bg-gradient-to-b from-[#FFAE00] via-[#FFAE00]/40 to-transparent" />
          </div>

          {/* Main Editorial Hero Content */}
          <div className="flex-1 space-y-7 max-w-4xl">
            
            {/* Eyebrow / Agency Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-mono font-semibold text-zinc-300 backdrop-blur-md"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#FFAE00] text-black font-black text-[10px]">01/03</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFAE00] animate-pulse" />
              <span className="text-zinc-200">DIGITAL PRODUCT &amp; ENGINEERING PARTNER</span>
            </motion.div>

            {/* Massive Kinetic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-[-0.035em] text-white leading-[1.05] font-display"
            >
              Digital engineering &amp; design partner for{" "}
              <span className="text-[#FFAE00] inline-block underline decoration-[#FFAE00]/30 decoration-wavy decoration-2 underline-offset-8">
                fast-growing
              </span>{" "}
              businesses.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed font-sans"
            >
              We engineer high-performance web platforms, native mobile apps, and autonomous AI systems that load in under 0.4s and turn visitors into long-term clients.
            </motion.p>

            {/* CTA Buttons: HeyDigital Amber & Dark Pill Pair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <HeyDigitalButton
                variant="amber"
                size="lg"
                onClick={() => navigate("contact")}
              >
                Let's build something good ↗
              </HeyDigitalButton>

              <HeyDigitalButton
                variant="dark"
                size="lg"
                onClick={() => navigate("work")}
              >
                Explore our work ↗
              </HeyDigitalButton>
            </motion.div>

            {/* Micro Credibility Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-zinc-300">Direct Founder Access (Rohith E)</span>
              </div>
              <span className="text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#FFAE00] font-bold">2–4 WEEKS</span>
                <span>Avg. Sprint Turnaround</span>
              </div>
              <span className="text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#FFAE00] font-bold">100/100</span>
                <span>Lighthouse Target</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Ticker / Service Matrix Marquee */}
      <div className="mt-12 sm:mt-16 pt-6 border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-wider text-zinc-400">
            <button
              onClick={() => navigate("services-web")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold">01</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">WEB DEVELOPMENT</span>
              <span className="text-zinc-600">(&lt;0.4s load speed)</span>
            </button>

            <span className="hidden md:inline text-zinc-700">•</span>

            <button
              onClick={() => navigate("services-mobile")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold">02</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">MOBILE APPS</span>
              <span className="text-zinc-600">(iOS &amp; Android)</span>
            </button>

            <span className="hidden md:inline text-zinc-700">•</span>

            <button
              onClick={() => navigate("services-automation")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold">03</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">AI &amp; AUTOMATION</span>
              <span className="text-zinc-600">(WhatsApp &amp; Agents)</span>
            </button>

            <span className="hidden md:inline text-zinc-700">•</span>

            <button
              onClick={() => navigate("packages")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold">04</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">PRICING</span>
              <span className="text-zinc-600">(From ₹5,000)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
