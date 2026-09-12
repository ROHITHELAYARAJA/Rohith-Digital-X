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
    <section className="py-14 sm:py-18 bg-white text-zinc-950 relative overflow-hidden border-b border-zinc-200">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[400px] bg-gradient-to-r from-[#FF4D3D]/6 via-purple-500/6 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
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
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-manrope font-bold transition-all cursor-pointer select-none flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-md scale-105"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                }`}
              >
                <span>{story.client}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-[#FF4D3D] text-white" : "bg-zinc-200 text-zinc-600"
                }`}>
                  {story.badge}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Main Spotlight Card (Matching Image 5 layout with creative extensions) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-zinc-50/90 border border-zinc-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_16px_48px_rgba(0,0,0,0.04)] relative overflow-hidden"
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
              {/* Left Column: Spotlight Text & The Famous Orange/Red Box Button */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Image 5 Style SPOTLIGHT Tag without any blinking dots */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-xs font-manrope font-bold tracking-wider text-zinc-800">
                  <span className="uppercase text-[11px] font-extrabold text-[#FF3B30] tracking-widest">
                    SPOTLIGHT
                  </span>
                  <span className="text-zinc-500 font-semibold">{currentStory.category}</span>
                </div>

                {/* Giant Bold Headline */}
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-manrope tracking-tight leading-[1.08] text-balance">
                  {currentStory.metricHeadline}
                </h3>

                {/* Punchy 2-line Subtitle */}
                <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed font-dmsans max-w-xl">
                  {currentStory.summary}
                </p>

                {/* THE SIGNATURE ORANGE/RED BOX BUTTON (User explicitly highlighted from Image 5) */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate("contact")}
                    className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF3B30] via-[#FF4D3D] to-[#FF6B3D] text-white font-manrope font-bold text-sm sm:text-base shadow-[0_12px_28px_rgba(255,59,48,0.38)] hover:shadow-[0_16px_36px_rgba(255,59,48,0.52)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center gap-2.5 cursor-pointer select-none group"
                  >
                    <span>Get started for free</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => navigate("work")}
                    className="px-5 py-3.5 rounded-xl border border-zinc-300 hover:border-zinc-400 bg-white hover:bg-zinc-100 text-zinc-800 font-manrope font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    View Case Study
                  </button>
                </div>

                {/* Founder Sprint Guarantee Line */}
                <div className="flex items-center gap-2 text-xs font-dmsans text-zinc-500 pt-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF3B30]" />
                  <span>Full IP ownership transferred immediately upon deployment • Handled directly by Rohith E</span>
                </div>

              </div>

              {/* Right Column: Creative Live Metrics & Testimonial Card */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 3 Metric Mini-Counters */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-zinc-950 font-manrope">
                      {currentStory.stat1.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-dmsans font-medium mt-1 leading-tight">
                      {currentStory.stat1.label}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#FF3B30] font-manrope">
                      {currentStory.stat2.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-dmsans font-medium mt-1 leading-tight">
                      {currentStory.stat2.label}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-purple-600 font-manrope">
                      {currentStory.stat3.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-dmsans font-medium mt-1 leading-tight">
                      {currentStory.stat3.label}
                    </div>
                  </div>
                </div>

                {/* Client Quote Card */}
                <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-1 text-purple-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 italic font-dmsans leading-relaxed">
                    "{currentStory.quote}"
                  </p>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-zinc-950 font-manrope">
                        {currentStory.author}
                      </div>
                      <div className="text-[11px] text-zinc-500 font-dmsans">
                        {currentStory.role}
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-xs text-zinc-700">
                      ✓
                    </div>
                  </div>
                </div>

                {/* Micro Guarantee Tag */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 text-white flex items-center justify-between text-xs font-dmsans">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-400" />
                    <span>Next Sprint Kickoff</span>
                  </div>
                  <span className="font-bold font-mono text-purple-400">Available This Week</span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
