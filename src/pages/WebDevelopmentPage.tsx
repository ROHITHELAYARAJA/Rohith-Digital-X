import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Zap, Shield, Sparkles, Monitor, Layers, Gauge, Cpu } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"
import { ArchitecturalArcArt } from "@/components/visual/ArchitecturalArcArt"

export const WebDevelopmentPage: React.FC = () => {
  const { navigate, setContactPrefill } = useNavigation()

  const handleBookService = () => {
    setContactPrefill({
      service: "Custom Web Application & High-Converting Website",
      budgetRange: "₹25,000 - ₹50,000",
      description: "Interested in a bespoke, ultra-fast website built with modern React / Vite / Next.js stack with sub-second page speeds.",
    })
    navigate("contact", "contact")
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* 3D Polyhedron Ambient Geometry */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-75 pointer-events-none hidden lg:block">
          <WireframePolyhedronCanvas
            polyhedron="dodecahedron"
            size={180}
            lineColor="rgba(255, 174, 0, 0.45)"
            glowColor="rgba(255, 174, 0, 0.15)"
          />
        </div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-start gap-6 sm:gap-10">
            {/* Left Vertical Indicator */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
              <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.25em] text-[#FFAE00]">
                SERVICE / 01
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-mono font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#FFAE00] animate-pulse" />
                <span>CORE ENGINEERING CAPABILITY</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Websites built for{" "}
                <span className="text-[#FFAE00]">speed, taste</span> &amp; conversion.
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                We engineer lightning-fast digital storefronts, SaaS landing pages, and web applications that load under 0.4s and convert visitors into paying clients.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <HeyDigitalButton
                  variant="amber"
                  size="lg"
                  onClick={handleBookService}
                >
                  Book Web Sprint ↗
                </HeyDigitalButton>

                <HeyDigitalButton
                  variant="dark"
                  size="lg"
                  onClick={() => navigate("work")}
                >
                  View Web Portfolio
                </HeyDigitalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Highlights Strip */}
      <section className="bg-[#0C0C0E] border-b border-zinc-800 py-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">&lt;0.4s</div>
              <div className="text-xs text-zinc-400 mt-1">Average Page Load Speed</div>
            </div>
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">100/100</div>
              <div className="text-xs text-zinc-400 mt-1">Lighthouse Performance</div>
            </div>
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">2 - 3 Weeks</div>
              <div className="text-xs text-zinc-400 mt-1">Rapid Sprint Delivery</div>
            </div>
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 mt-1">Code &amp; Asset Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Capabilities Matrix (Crisp White Card Contrast) */}
      <section className="py-20 bg-white text-zinc-950 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
                WHAT WE DELIVER
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight font-display mt-2">
                Engineered from the ground up.
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md">
              No bloated templates. Every site is custom crafted with modern component libraries, clean semantic code, and obsessive attention to typography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950">Sub-Second Performance</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Zero lag. We optimize fonts, SVG graphics, code splits, and dynamic bundles to ensure your website passes Google's Core Web Vitals with flawless 100/100 scores.
              </p>
              <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Vite / Next.js Static &amp; SSR caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Next-gen WebP &amp; SVG asset pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Sub-300ms First Contentful Paint</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950">Fluid Animations &amp; Taste</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Smooth 60fps micro-interactions, scroll-triggered reveals, and 3D wireframe canvases that captivate visitors without slowing down mobile devices.
              </p>
              <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Framer Motion &amp; Lenis smooth physics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Canvas 2D/3D hardware-accelerated art</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Custom magnetic cursor &amp; hover reactions</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950">High-Converting Architecture</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Strategic user journeys designed to guide prospects straight to inquiry forms, Calendly/Cal booking, or direct WhatsApp chats with zero friction.
              </p>
              <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Direct WhatsApp 1-click lead routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Interactive Cal.com scheduler embeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Automated email confirmations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-16 bg-[#070708] border-t border-zinc-800">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500">
            POWERED BY MODERN PRODUCTION INFRASTRUCTURE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-zinc-400 font-mono text-xs sm:text-sm">
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold">React 18</span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold">Next.js 15</span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold">TypeScript</span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold">Tailwind CSS</span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold">Framer Motion</span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold">Vercel Edge</span>
          </div>

          <div className="pt-6">
            <HeyDigitalButton variant="amber" size="lg" onClick={handleBookService}>
              Start Your Website Sprint ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
