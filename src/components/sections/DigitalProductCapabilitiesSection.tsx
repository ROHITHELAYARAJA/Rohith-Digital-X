import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Users,
  Brain,
  Layers,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Zap,
  Activity,
  Code2,
  Smartphone,
  Bot,
  Globe,
  Sliders,
  Check,
} from "lucide-react"

export const DigitalProductCapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"performance" | "security">("performance")
  const [activeChip, setActiveChip] = useState<number>(0)
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5]) // Mon-Fri

  const toggleDay = (idx: number) => {
    setSelectedDays((prev) =>
      prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx]
    )
  }

  return (
    <section className="py-14 sm:py-18 bg-[#FAF7F2] text-zinc-950 border-t border-b border-[#E8DFC8]/60 relative overflow-hidden font-sans">
      {/* Subtle background grid inspired by editorial Swiss design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl"
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.08] font-manrope">
              Engineered with <span className="font-playfair italic font-medium text-[#FF3B30]">taste</span> and microsecond speed.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed font-dmsans">
            Every digital product built by Rohith Digital X blends editorial elegance with rock-solid full-stack code. Inspired by modern fast-lane workflows.
          </p>
        </motion.div>

        {/* Bento Grid: 3-column top row, 2-column bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Coral Red Company Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] bg-gradient-to-br from-[#FF5C4D] via-[#FF4D3D] to-[#E6392A] p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between min-h-[380px] relative overflow-hidden"
          >
            {/* Subtle glow overlay */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              {/* Stacked White Notification Pills */}
              <div className="space-y-2.5">
                {[
                  {
                    icon: <Users className="h-4 w-4 text-indigo-600" />,
                    text: "Your market is ambitious modern businesses",
                    selected: activeChip === 0,
                  },
                  {
                    icon: <Sparkles className="h-4 w-4 text-purple-500" />,
                    text: "Here's where your brand stands out",
                    selected: activeChip === 1,
                  },
                  {
                    icon: <Brain className="h-4 w-4 text-rose-500" />,
                    text: "Zero template bloat. 100% custom code.",
                    selected: activeChip === 2,
                  },
                  {
                    icon: <Layers className="h-4 w-4 text-emerald-600" />,
                    text: "Sub-second load times & 60 FPS fluidity",
                    selected: activeChip === 3,
                  },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChip(idx)}
                    className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer ${
                      item.selected
                        ? "bg-white text-zinc-950 shadow-md font-bold scale-[1.02] ring-2 ring-white/40"
                        : "bg-white/95 text-zinc-800 hover:bg-white text-xs font-semibold shadow-xs"
                    }`}
                  >
                    <div className="h-7 w-7 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs truncate">{item.text}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Product & Scope Blueprint
              </h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                We analyze your market dynamics and convert complex requirements into clean, scalable features.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Warm Sand Oatmeal Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] bg-[#EFE8D8] border border-[#E2D8C7] p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-sm relative overflow-hidden"
          >
            {/* Inner Floating White Modal */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-md space-y-4">
              <div className="flex items-center text-[11px] font-semibold text-zinc-600">
                <span>Bespoke Engineering Studio</span>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight font-manrope">
                Create with <span className="font-playfair italic text-[#FF3B30]">RDX</span>
              </div>

              {/* Action Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Full-Stack Web App",
                  "iOS & Android",
                  "AI Automation",
                  "Custom Backend",
                ].map((chip, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-[10px] font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight font-manrope">
                Crafted Without Templates
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed font-dmsans">
                Enter our digital workshop. Hand-coded interfaces with bespoke visuals and modern API endpoints.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Minimalist Schedule & Sprint Calendar Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] bg-white border border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-sm relative"
          >
            {/* Calendar UI Mockup */}
            <div className="bg-zinc-50/80 rounded-2xl p-5 border border-zinc-200/60 space-y-4 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <span className="font-bold text-zinc-900">Sprint Cadence</span>
                <span className="text-zinc-500 text-[11px]">Weekly Sync</span>
              </div>

              {/* Day Circle Buttons */}
              <div className="flex items-center justify-between pt-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => {
                  const isActive = selectedDays.includes(i)
                  return (
                    <button
                      key={i}
                      onClick={() => toggleDay(i)}
                      className={`h-7 w-7 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                        isActive
                          ? "bg-zinc-950 text-white shadow-xs"
                          : "bg-zinc-200 text-zinc-500 hover:bg-zinc-300"
                      }`}
                    >
                      {d}
                    </button>
                  )
                })}
              </div>

              <div className="space-y-1.5 pt-1 text-[11px] text-zinc-600">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Lead Engineer:</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FF4D3D] text-white font-bold text-[10px]">
                    Rohith E (Principal)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Status:</span>
                  <span className="font-bold text-zinc-800">Ready for Launch</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg text-[11px] font-bold text-zinc-600 bg-zinc-200/70">
                  Sprint Active
                </span>
                <span className="px-3 py-1 rounded-lg text-[11px] font-bold text-white bg-zinc-950">
                  On Time
                </span>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                Predictable Production Sprints
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Structured milestones with live preview deployments, daily commits, and direct founder accountability.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bento Row: Analytics Dashboard (2 cols) & Live Traffic Card (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 4: Advanced Analytics Dashboard (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-8 rounded-[2rem] bg-white border border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6">
              {/* Header Bar with Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("performance")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer font-manrope ${
                      activeTab === "performance"
                        ? "bg-zinc-950 text-white shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Core Performance
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer font-manrope ${
                      activeTab === "security"
                        ? "bg-zinc-950 text-white shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Security & Scale
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold font-dmsans">
                  <Activity className="h-3.5 w-3.5 text-[#FF3B30]" />
                  <span>Realtime Telemetry</span>
                </div>
              </div>

              {/* 3 Metric Sub-Cards (Inspired by Fastlane cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-900 font-manrope">
                    <span>Web Core Vitals</span>
                    <Globe className="h-3.5 w-3.5 text-[#FF3B30]" />
                  </div>
                  <div className="space-y-1">
                    <div className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-emerald-700 font-mono">
                      100/100 Lighthouse
                    </div>
                    <div className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-800 font-mono">
                      &lt;0.38s Page Load
                    </div>
                    <div className="text-[10px] text-zinc-500 pt-0.5 font-dmsans">
                      Zero cumulative layout shift
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-900 font-manrope">
                    <span>Mobile Native</span>
                    <Smartphone className="h-3.5 w-3.5 text-indigo-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-indigo-700 font-mono">
                      60 FPS Fluidity
                    </div>
                    <div className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-800 font-mono">
                      iOS & Android
                    </div>
                    <div className="text-[10px] text-zinc-500 pt-0.5 font-dmsans">
                      Offline SQLite cache sync
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-900 font-manrope">
                    <span>AI & Automation</span>
                    <Bot className="h-3.5 w-3.5 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-purple-700 font-mono">
                      Automated Pipeline
                    </div>
                    <div className="px-2 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-800 font-mono">
                      Zero Human Lag
                    </div>
                    <div className="text-[10px] text-zinc-500 pt-0.5 font-dmsans">
                      WhatsApp, CRM & webhooks
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Input & Coral Button Bar */}
              <div className="flex items-center gap-2 p-2 rounded-2xl bg-zinc-100/80 border border-zinc-200">
                <input
                  type="text"
                  readOnly
                  value="Ready to scale: Web apps, mobile systems & automation"
                  className="w-full bg-transparent px-3 text-xs text-zinc-700 font-medium focus:outline-none font-dmsans"
                />
                <button className="shrink-0 px-4 py-2 rounded-xl bg-[#FF3B30] hover:bg-[#E03627] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer font-manrope">
                  <span>Explore Stack</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight font-manrope">
                Observability & Production Quality
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed font-dmsans">
                Real-time telemetry, automated testing, and performance metrics built into every single deployment.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Live Traffic & Surge Growth Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-[2rem] bg-white border border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Floating Visitors Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-900 shadow-xs">
                <Zap className="h-3.5 w-3.5 text-[#FF4D3D]" />
                <span className="font-khand text-base font-bold tracking-tight text-[#FF4D3D]">
                  1,025
                </span>
                <span className="text-zinc-600 font-medium">Live Visitors</span>
              </div>

              {/* SVG Glowing Line Chart (Matching Image 3) */}
              <div className="h-40 w-full relative pt-2">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 300 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF4D3D" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#FF4D3D" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Filled Area */}
                  <path
                    d="M 10,105 Q 60,95 100,75 T 180,50 T 250,20 L 290,10 L 290,120 L 10,120 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Bezier Stroke */}
                  <path
                    d="M 10,105 Q 60,95 100,75 T 180,50 T 250,20 L 285,10"
                    stroke="#FF4D3D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Dots along line */}
                  <circle cx="20" cy="103" r="3.5" fill="#FF4D3D" />
                  <circle cx="100" cy="75" r="3.5" fill="#FF4D3D" />
                  <circle cx="180" cy="50" r="3.5" fill="#FF4D3D" />
                  <circle cx="250" cy="20" r="3.5" fill="#FF4D3D" />

                  {/* Big End Dot with Arrow */}
                  <circle cx="285" cy="10" r="5" fill="#FF4D3D" />
                  <circle cx="285" cy="10" r="10" fill="#FF4D3D" fillOpacity="0.25" />
                </svg>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 text-xs">
                <span className="text-zinc-500 font-medium">Conversion Lift</span>
                <span className="font-khand text-lg font-bold text-emerald-600">
                  +340% Higher
                </span>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                High-Traffic Conversions
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Architected to smoothly handle viral traffic surges and enterprise volume with zero performance degradation.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
