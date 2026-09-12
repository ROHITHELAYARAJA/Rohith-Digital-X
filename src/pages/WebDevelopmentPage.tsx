import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Zap, Shield, Sparkles, Monitor, Layers, Gauge, Cpu } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

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
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Hero Header Section - Clean Modern Architecture */}
      <section className="relative pt-32 sm:pt-40 pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        {/* Ambient Glow: Sky Blue & Orange */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              Web platforms built for{" "}
              <span className="font-boska italic font-light text-sky-400">
                speed &amp; taste
              </span>
              <span className="text-[#FF4D3D]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
              We engineer lightning-fast digital storefronts, SaaS platforms, and enterprise web applications that load under 0.4s and convert visitors into paying clients.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <HeyDigitalButton
                variant="sky"
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
                Inspect Live Demos
              </HeyDigitalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-12 border-b border-zinc-800 bg-[#070708] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">&lt;0.4s</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Load Speed</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">100/100</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Lighthouse Score</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">2 - 3 Weeks</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Sprint Turnaround</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Code Handover</div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Capabilities Matrix (Deep Black Theme with Sleek Glass Cards) */}
      <section className="py-20 bg-[#070708] text-white relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-sky-400">
                WHAT WE DELIVER
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mt-2">
                Engineered from the ground up<span className="text-[#FF4D3D]">.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              No bloated templates. Every site is custom crafted with modern component libraries, clean semantic code, and obsessive attention to typography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-sky-500/60 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Sub-Second Performance</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Zero lag. We optimize fonts, SVG graphics, code splits, and dynamic bundles to ensure your website passes Google's Core Web Vitals with flawless 100/100 scores.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Vite / Next.js Static &amp; SSR caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Next-gen WebP &amp; SVG asset pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Sub-300ms First Contentful Paint</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Fluid Animations &amp; Taste</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Smooth 60fps micro-interactions, scroll-triggered reveals, and 3D wireframe canvases that captivate visitors without slowing down mobile devices.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Framer Motion &amp; Lenis smooth physics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Canvas 2D/3D hardware-accelerated art</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Custom magnetic cursor &amp; hover reactions</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-[#FF4D3D]/10 text-[#FF4D3D] flex items-center justify-center font-bold">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">High-Converting Architecture</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Strategic user journeys designed to guide prospects straight to inquiry forms, Calendly/Cal booking, or direct WhatsApp chats with zero friction.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>Direct WhatsApp 1-click lead routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>Interactive Cal.com scheduler embeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>Automated email confirmations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-16 bg-zinc-950/60 border-t border-zinc-800">
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
            <HeyDigitalButton variant="sky" size="lg" onClick={handleBookService}>
              Start Your Website Sprint ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
