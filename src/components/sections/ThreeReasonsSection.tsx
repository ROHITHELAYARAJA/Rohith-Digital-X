import React from "react"
import { motion } from "framer-motion"
import { Zap, Eye, ShieldCheck, ArrowRight } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const ThreeReasonsSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section className="py-24 sm:py-32 bg-white text-zinc-950 relative overflow-hidden border-b border-zinc-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-zinc-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300/80 text-[11px] font-mono font-bold text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-[#FFAE00]" />
              <span>THE FOUNDER GUARANTEE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight font-display leading-[1.08]">
              Three reasons they <span className="font-boska italic font-light text-[#FF4D3D]">stay</span>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-md font-normal leading-relaxed font-sans">
            Most agencies overpromise, pad estimates with account-manager overhead, and ship bloated templates. We do things differently.
          </p>
        </div>

        {/* 3 Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Speed. */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FF4D3D] hover:shadow-2xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FF4D3D]/10 border border-[#FF4D3D]/20 text-[11px] font-sans font-bold text-[#FF4D3D] uppercase tracking-wider">
                  01 / 2 TO 4 WEEKS
                </span>
                <div className="h-10 w-10 rounded-xl bg-[#FF4D3D]/10 text-[#FF4D3D] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display">
                  Speed<span className="text-[#FF4D3D]">.</span>
                </h3>
                <p className="text-sm text-zinc-600 mt-3 leading-relaxed font-sans">
                  Turnaround in 2 to 4 weeks, not endless quarters. You talk directly with engineer &amp; founder Rohith E with zero bureaucracy, instant WhatsApp updates, and rapid build iterations.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200/80 mt-8 text-xs font-sans text-zinc-500 flex items-center justify-between">
              <span>Rapid Prototyping</span>
              <span className="text-zinc-900 font-bold font-khand text-base tracking-wide text-[#FF4D3D]">&lt;0.4s Web Vitals</span>
            </div>
          </div>

          {/* Card 2: Taste. */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] hover:shadow-2xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-sans font-bold text-[#FFAE00] uppercase tracking-wider">
                  02 / HIGH TASTE
                </span>
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-[#FFAE00] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Eye className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display">
                  <span className="font-boska italic font-normal">Taste</span><span className="text-[#FFAE00]">.</span>
                </h3>
                <p className="text-sm text-zinc-600 mt-3 leading-relaxed font-sans">
                  Obsession with typography, 60fps micro-animations, and visual balance. We don't build generic websites; we create memorable digital storefronts that stand out in crowded industries.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200/80 mt-8 text-xs font-sans text-zinc-500 flex items-center justify-between">
              <span>Bespoke 3D &amp; Motion</span>
              <span className="text-zinc-900 font-bold">Award-Grade Craft</span>
            </div>
          </div>

          {/* Card 3: Stay. */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500 hover:shadow-2xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-sans font-bold text-emerald-600 uppercase tracking-wider">
                  03 / 14-DAY SUPPORT
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display">
                  Stay<span className="text-emerald-500">.</span>
                </h3>
                <p className="text-sm text-zinc-600 mt-3 leading-relaxed font-sans">
                  Launch day isn't the finish line. Every sprint comes with a 14-day warranty, full performance audits, DNS configuration, and continuous optimization so you never feel abandoned.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200/80 mt-8 text-xs font-sans text-zinc-500 flex items-center justify-between">
              <span>Post-Launch Warranty</span>
              <span className="text-zinc-900 font-bold">100% Code Handover</span>
            </div>
          </div>

        </div>

        {/* Action Callout */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800">
          <div>
            <h4 className="text-xl font-bold font-display text-white">
              Ready to work with a partner who cares about your product as much as you do?
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Direct founder availability • Transparent fixed pricing from ₹5,000 • Zero fluff.
            </p>
          </div>

          <HeyDigitalButton
            variant="amber"
            size="md"
            onClick={() => navigate("contact")}
          >
            Let's build something good ↗
          </HeyDigitalButton>
        </div>

      </div>
    </section>
  )
}
