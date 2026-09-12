import React from "react"
import { motion } from "framer-motion"
import { Zap, Eye, ShieldCheck, ArrowRight } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"

export const ThreeReasonsSection: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <section className="py-14 sm:py-20 bg-[#070708] text-white relative overflow-hidden border-b border-zinc-800/80">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-zinc-800"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-bold text-zinc-400">
              <span>THE FOUNDER GUARANTEE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-manrope leading-[1.08]">
              Three reasons they <span className="font-playfair italic font-medium text-[#FFAE00]">stay</span>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed font-dmsans">
            No endless meetings or account-manager bureaucracy. Just high-velocity engineering, direct access to founder Rohith E, and code you actually own.
          </p>
        </motion.div>

        {/* 3 Reason Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Speed. */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFAE00] hover:shadow-2xl transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-manrope font-bold text-[#FFAE00] uppercase tracking-wider">
                  01 / 14-DAY SPRINTS
                </span>
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-[#FFAE00] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-manrope">
                  Speed<span className="text-[#FFAE00]">.</span>
                </h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-dmsans">
                  Shipped in 14 days, not quarters. Direct WhatsApp updates with founder Rohith E, rapid iterations, and immediate deployment.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 mt-8 text-xs font-dmsans text-zinc-400 flex items-center justify-between">
              <span>Rapid Deployment</span>
              <span className="text-[#FFAE00] font-bold font-mono text-sm tracking-wide">&lt;0.4s Web Vitals</span>
            </div>
          </motion.div>

          {/* Card 2: Taste. */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:shadow-2xl transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-[11px] font-manrope font-bold text-zinc-300 uppercase tracking-wider">
                  02 / HIGH TASTE
                </span>
                <div className="h-10 w-10 rounded-xl bg-zinc-800 text-zinc-200 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Eye className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-manrope">
                  <span className="font-playfair italic font-normal">Taste</span><span className="text-[#FF3B30]">.</span>
                </h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-dmsans">
                  Obsession with typography, 60fps micro-animations, and visual balance. We don't build generic websites; we create memorable digital storefronts.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 mt-8 text-xs font-dmsans text-zinc-400 flex items-center justify-between">
              <span>Modern Aesthetics</span>
              <span className="text-white font-bold font-manrope">Award-Grade Craft</span>
            </div>
          </motion.div>

          {/* Card 3: Stay. */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/60 hover:shadow-2xl transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-manrope font-bold text-emerald-400 uppercase tracking-wider">
                  03 / 14-DAY SUPPORT
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-manrope">
                  Stay<span className="text-emerald-400">.</span>
                </h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-dmsans">
                  Launch day isn't the finish line. Every sprint includes a 14-day warranty, DNS setup, and live performance auditing.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 mt-8 text-xs font-dmsans text-zinc-400 flex items-center justify-between">
              <span>Post-Launch Warranty</span>
              <span className="text-white font-bold font-manrope">100% Code Handover</span>
            </div>
          </motion.div>

        </div>

        {/* Action Callout with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800"
        >
          <div>
            <h4 className="text-xl font-bold font-manrope text-white">
              Ready to work with a dedicated technical partner?
            </h4>
            <p className="text-xs text-zinc-400 mt-1 font-dmsans">
              Direct founder availability • Fixed pricing from ₹5,000 • Zero fluff.
            </p>
          </div>

          <button
            onClick={() => navigate("contact")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFAE00] to-[#FF9500] text-black font-manrope font-extrabold text-sm shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Let's build something good</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
