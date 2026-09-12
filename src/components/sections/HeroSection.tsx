import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Bot, Zap } from "lucide-react"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { useNavigation } from "@/context/NavigationContext"

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-42 pb-12 overflow-hidden bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black border-b border-zinc-800/80"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating 3D Wireframe Polyhedron floating centered-right with elegant opacity */}
      <div className="absolute right-0 sm:right-8 lg:right-16 top-20 sm:top-16 w-[340px] sm:w-[480px] lg:w-[580px] h-[340px] sm:h-[480px] lg:h-[580px] pointer-events-none opacity-70 z-0">
        <WireframePolyhedronCanvas
          polyhedron="dodecahedron"
          size={195}
          lineColor="rgba(255, 174, 0, 0.38)"
          glowColor="rgba(255, 174, 0, 0.12)"
        />
      </div>

      {/* Secondary ambient soft glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[800px] h-[350px] sm:h-[550px] bg-gradient-to-b from-[#FF4D3D]/6 via-[#FFAE00]/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge (Fastlane-inspired, clean pill, zero blinking ball) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-sans text-zinc-300 backdrop-blur-md shadow-sm"
          >
            <span className="px-2 py-0.5 rounded-full bg-[#FF4D3D] text-white font-extrabold text-[10px] uppercase tracking-wider">
              2026 SPRINT
            </span>
            <span className="text-zinc-300 font-medium">
              Bespoke Web Platforms, Native Mobile &amp; AI Systems
            </span>
          </motion.div>

          {/* Massive Kinetic Headline with Fontshare Boska Italic Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-[-0.035em] text-white leading-[1.06] font-display text-balance"
          >
            Ship{" "}
            <span className="font-boska italic font-light text-[#FF4D3D] inline-block">
              bespoke software
            </span>{" "}
            in{" "}
            <span className="font-boska italic font-light text-[#FFAE00] inline-block underline decoration-[#FFAE00]/30 decoration-wavy decoration-2 underline-offset-8">
              14 days
            </span>
            , not quarters.
          </motion.h1>

          {/* Clear, High-Contrast Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed font-sans"
          >
            We engineer high-performance web applications, native mobile apps, and autonomous AI systems that load in under 0.4s and turn ambitious visitors into paying clients.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
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

          {/* Micro-Trust Line: Pure, Clean Stats without Any Blinking Ball */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-sans text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-zinc-300 font-medium">Direct Founder Access (Rohith E)</span>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#FFAE00] font-khand text-base font-bold tracking-wide">14 DAYS</span>
              <span>Avg. Sprint Turnaround</span>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#FF4D3D] font-khand text-base font-bold tracking-wide">100/100</span>
              <span>Lighthouse Target</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Service Matrix Bar */}
      <div className="mt-12 sm:mt-16 pt-6 border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans tracking-wide text-zinc-400">
            <button
              onClick={() => navigate("services-web")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold font-mono">01</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">WEB DEVELOPMENT</span>
              <span className="text-zinc-500 font-normal">(&lt;0.4s load speed)</span>
            </button>

            <span className="hidden md:inline text-zinc-700">•</span>

            <button
              onClick={() => navigate("services-mobile")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold font-mono">02</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">MOBILE APPS</span>
              <span className="text-zinc-500 font-normal">(iOS &amp; Android)</span>
            </button>

            <span className="hidden md:inline text-zinc-700">•</span>

            <button
              onClick={() => navigate("services-automation")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold font-mono">03</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">AI &amp; AUTOMATION</span>
              <span className="text-zinc-500 font-normal">(WhatsApp &amp; Agents)</span>
            </button>

            <span className="hidden md:inline text-zinc-700">•</span>

            <button
              onClick={() => navigate("packages")}
              className="flex items-center gap-2 hover:text-[#FFAE00] transition-colors cursor-pointer group"
            >
              <span className="text-[#FFAE00] font-bold font-mono">04</span>
              <span className="font-bold text-white group-hover:text-[#FFAE00]">PRICING</span>
              <span className="text-zinc-500 font-normal">(From ₹5,000)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
