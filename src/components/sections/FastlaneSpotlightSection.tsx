import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Star, ShieldCheck, Sparkles } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"

interface SpotlightStory {
  id: string
  client: string
  category: string
  metricHeadline: string
  summary: string
  stat1: { label: string; value: string }
  stat2: { label: string; value: string }
  stat3: { label: string; value: string }
  badge: string
  quote: string
  author: string
  role: string
}

const SPOTLIGHT_STORIES: SpotlightStory[] = [
  {
    id: "carepulse",
    client: "CarePulse Health",
    category: "Healthcare SaaS Platform",
    metricHeadline: "CarePulse booked 1,200+ patient visits in week one",
    summary:
      "One full-stack clinical scheduling platform engineered and deployed in 14 days by Rohith E. Zero downtime. Nonstop qualified patient bookings.",
    stat1: { label: "First Week Bookings", value: "1,240+" },
    stat2: { label: "First Contentful Paint", value: "0.28s" },
    stat3: { label: "Sprint Delivery Time", value: "14 Days" },
    badge: "14-Day Sprint",
    quote:
      "Rohith took our raw healthcare wireframes and delivered a live, HIPAA-compliant booking portal in exactly 14 days. Our clinic saved over ₹2.4 Lakhs compared to legacy agency quotes.",
    author: "Dr. K. Senthil",
    role: "Medical Director, CarePulse Clinics",
  },
  {
    id: "jsbuilders",
    client: "JSBuilders Enterprise",
    category: "Construction & Logistics ERP",
    metricHeadline: "JSBuilders processed ₹45L+ material orders with zero manual data entry",
    summary:
      "A custom product catalog and automated WhatsApp invoicing engine. 100% order accuracy, real-time inventory tracking, and sub-second catalog search.",
    stat1: { label: "Material GMV Processed", value: "₹45.8L" },
    stat2: { label: "Order Processing Time", value: "Under 2m" },
    stat3: { label: "Sprint Delivery Time", value: "12 Days" },
    badge: "Zero-Lag ERP",
    quote:
      "Our site supervisors place orders straight from mobile web without app downloads. Rohith E built our entire digital catalog and invoicing flow with superhuman turnaround.",
    author: "J. Soundar",
    role: "Managing Director, JSBuilders",
  },
  {
    id: "zenithai",
    client: "Zenith Commerce AI",
    category: "Autonomous CRM & AI Agents",
    metricHeadline: "Zenith AI cut customer lead response from 4 hours to 8 seconds",
    summary:
      "An autonomous WhatsApp AI agent and CRM pipeline that qualifies buyers 24/7, syncs with Google Sheets/Postgres, and triggers real-time payment links.",
    stat1: { label: "Response Latency", value: "8.2s" },
    stat2: { label: "Lead Conversion Lift", value: "+34%" },
    stat3: { label: "Uptime Reliability", value: "99.98%" },
    badge: "Autonomous AI",
    quote:
      "The WhatsApp agent Rohith deployed handles 400+ inquiries daily without dropping a single lead. It paid for itself in the first 72 hours of going live.",
    author: "Praveen M.",
    role: "VP of Growth, Zenith Commerce",
  },
]

export const FastlaneSpotlightSection: React.FC = () => {
  const { navigate } = useNavigation()
  const [activeStoryIdx, setActiveStoryIdx] = useState(0)
  const currentStory = SPOTLIGHT_STORIES[activeStoryIdx]

  return (
    <section className="py-14 sm:py-20 bg-[#070708] text-white relative overflow-hidden border-b border-zinc-800/80">
      {/* Background Soft Ambient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Story Selector Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {SPOTLIGHT_STORIES.map((story, idx) => {
            const isActive = idx === activeStoryIdx
            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryIdx(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-manrope font-bold transition-all cursor-pointer select-none flex items-center gap-2 border ${
                  isActive
                    ? "bg-zinc-800 text-white border-zinc-600 shadow-md scale-105"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 border-zinc-800"
                }`}
              >
                <span>{story.client}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-[#FFAE00] text-black" : "bg-zinc-800 text-zinc-400"
                }`}>
                  {story.badge}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Main Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Spotlight Text & Signature CTA Button */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* SPOTLIGHT Tag */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 shadow-xs text-xs font-manrope font-bold tracking-wider text-zinc-300">
                  <span className="uppercase text-[11px] font-extrabold text-[#FFAE00] tracking-widest">
                    SPOTLIGHT
                  </span>
                  <span className="text-zinc-400 font-semibold">{currentStory.category}</span>
                </div>

                {/* Giant Bold Headline */}
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-manrope tracking-tight leading-[1.08] text-balance">
                  {currentStory.metricHeadline}
                </h3>

                {/* Punchy 2-line Subtitle */}
                <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed font-dmsans max-w-xl">
                  {currentStory.summary}
                </p>

                {/* THE SIGNATURE ORANGE/AMBER BOX BUTTON */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate("contact")}
                    className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FFAE00] via-[#FF9500] to-[#FF8000] text-black font-manrope font-extrabold text-sm sm:text-base shadow-[0_12px_28px_rgba(255,174,0,0.35)] hover:shadow-[0_16px_36px_rgba(255,174,0,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center gap-2.5 cursor-pointer select-none group"
                  >
                    <span>Get started for free</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => navigate("work")}
                    className="px-5 py-3.5 rounded-xl border border-zinc-750 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-zinc-200 font-manrope font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    View Case Study
                  </button>
                </div>

                {/* Founder Sprint Guarantee Line */}
                <div className="flex items-center gap-2 text-xs font-dmsans text-zinc-400 pt-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Full IP ownership transferred immediately upon deployment • Handled directly by Rohith E</span>
                </div>

              </div>

              {/* Right Column: Live Metrics & Testimonial Card */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 3 Metric Mini-Counters */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                    <div className="text-xl sm:text-2xl font-black text-white font-manrope">
                      {currentStory.stat1.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-dmsans font-medium mt-1 leading-tight">
                      {currentStory.stat1.label}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#FFAE00] font-manrope">
                      {currentStory.stat2.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-dmsans font-medium mt-1 leading-tight">
                      {currentStory.stat2.label}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 font-manrope">
                      {currentStory.stat3.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-dmsans font-medium mt-1 leading-tight">
                      {currentStory.stat3.label}
                    </div>
                  </div>
                </div>

                {/* Client Quote Card */}
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-1 text-[#FFAE00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 italic font-dmsans leading-relaxed">
                    "{currentStory.quote}"
                  </p>

                  <div className="pt-3 border-t border-zinc-850 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-white font-manrope">
                        {currentStory.author}
                      </div>
                      <div className="text-[11px] text-zinc-400 font-dmsans">
                        {currentStory.role}
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
                      ✓
                    </div>
                  </div>
                </div>

                {/* Micro Guarantee Tag */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white flex items-center justify-between text-xs font-dmsans">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#FFAE00]" />
                    <span>Next Sprint Kickoff</span>
                  </div>
                  <span className="font-bold font-mono text-[#FFAE00]">Available This Week</span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
