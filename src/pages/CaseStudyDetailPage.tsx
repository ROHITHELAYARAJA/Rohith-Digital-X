import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, ArrowRight, ExternalLink, Zap, Shield, TrendingUp, Layers } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const CaseStudyDetailPage: React.FC = () => {
  const { navigate, setContactPrefill } = useNavigation()

  const handleDiscussSimilar = () => {
    setContactPrefill({
      service: "High-Converting Custom Web Experience",
      budgetRange: "₹25,000 - ₹50,000",
      description: "I want to build an ultra-fast web experience similar to the JSBuilders Case Study (<0.4s load speed, 100/100 Lighthouse, high conversion).",
    })
    navigate("contact", "contact")
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-sky-500 selection:text-white">
      {/* Top Navigation Strip */}
      <div className="pt-28 pb-4 container max-w-6xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => navigate("work")}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-400 hover:text-sky-400 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL WORK</span>
        </button>
      </div>

      {/* Case Study Hero Section - Fastlane / Home Style */}
      <section className="relative pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Ambient Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-[11px] font-mono font-bold text-sky-300">
                FEATURED CLIENT • CASE STUDY
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                CIVIL &amp; ARCHITECTURAL ENGINEERING
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              JSBuilders: Re-architected for <span className="text-sky-400">sub-0.4s speed</span> &amp; 340% more inquiries<span className="text-[#FF4D3D]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
              How we rebuilt a sluggish WordPress brochure into a high-octane React &amp; Vite platform with instant WhatsApp quoting, interactive project portfolios, and flawless Core Web Vitals.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <HeyDigitalButton variant="sky" size="lg" onClick={handleDiscussSimilar}>
                Build a Similar Website ↗
              </HeyDigitalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-zinc-950/80 border-b border-zinc-800 py-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="border-l-2 border-sky-500 pl-4">
              <div className="text-2xl sm:text-4xl font-bold font-mono text-sky-400">+340%</div>
              <div className="text-xs text-zinc-400 mt-1">Inquiry Form Submissions</div>
            </div>
            <div className="border-l-2 border-[#FF4D3D] pl-4">
              <div className="text-2xl sm:text-4xl font-bold font-mono text-white">0.32s</div>
              <div className="text-xs text-zinc-400 mt-1">First Contentful Paint</div>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <div className="text-2xl sm:text-4xl font-bold font-mono text-purple-400">100/100</div>
              <div className="text-xs text-zinc-400 mt-1">Lighthouse Performance</div>
            </div>
            <div className="border-l-2 border-[#FF4D3D] pl-4">
              <div className="text-2xl sm:text-4xl font-bold font-mono text-white">14 Days</div>
              <div className="text-xs text-zinc-400 mt-1">Turnaround from Kickoff to Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Challenge vs Solution (Deep Black Theme with Dark Luxury Cards) */}
      <section className="py-20 bg-[#070708] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-sky-400">
                THE CHALLENGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
                High commercial traffic, high bounce rates<span className="text-[#FF4D3D]">.</span>
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed font-sans">
                JSBuilders had premium civil engineering and construction contracts in Tamil Nadu, but their online presence was running on an outdated WordPress theme that took over 4.8 seconds to load on mobile.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="h-5 w-5 rounded-full bg-red-500/10 text-[#FF4D3D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                  <span>4.8s initial load time causing 68% mobile visitor drop-off</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="h-5 w-5 rounded-full bg-red-500/10 text-[#FF4D3D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                  <span>Clunky contact forms with no direct WhatsApp lead routing</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="h-5 w-5 rounded-full bg-red-500/10 text-[#FF4D3D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                  <span>Heavy unoptimized image galleries freezing mobile browsers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-950/90 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="text-xs font-mono text-sky-400 uppercase font-bold">Client Testimonial</div>
                <p className="text-base sm:text-lg italic font-normal text-zinc-200 leading-relaxed">
                  "Rohith completely transformed our business identity. We saw inquiries more than triple in the first month because customers can now view our projects instantly and message us on WhatsApp with one click."
                </p>
                <div className="pt-2 border-t border-zinc-800 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                    JS
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Managing Director</div>
                    <div className="text-xs text-zinc-400">JSBuilders Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="space-y-8 pt-6 border-t border-zinc-800">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-sky-400">
                THE ARCHITECTURAL SOLUTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mt-2">
                Re-engineered with sub-second precision<span className="text-[#FF4D3D]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-sky-500/60 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] transition-all space-y-3">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Vite + React Static Generation</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  All pages pre-compiled into lightweight static assets served via edge CDN. The site boots up in just 320ms on 4G networks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-[#FF4D3D]/60 hover:shadow-[0_0_25px_rgba(255,77,61,0.25)] transition-all space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#FF4D3D]/10 text-[#FF4D3D] flex items-center justify-center font-bold">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">1-Click WhatsApp Lead Routing</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Engineered direct WhatsApp links with prefilled project scope data, allowing prospects to initiate pricing discussions in seconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 hover:shadow-purple-glow transition-all space-y-3">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Fluid Visual Showcase</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Responsive grid layouts with hardware-accelerated image zooming, allowing clients to review floor plans and completed architectural photos effortlessly.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-950/60 border-t border-zinc-800 text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
            Ready for similar results<span className="text-[#FF4D3D]">?</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery call directly with Rohith E to review your current site and discuss an upgrade sprint.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="sky" size="lg" onClick={handleDiscussSimilar}>
              Book 30-Min Discovery Sprint ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
