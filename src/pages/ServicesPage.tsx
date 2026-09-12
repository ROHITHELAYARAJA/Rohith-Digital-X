import React from "react"
import { motion } from "framer-motion"
import { Code, Smartphone, Bot, ArrowRight, CheckCircle2, Zap, Layers, ShieldCheck, Sparkles } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { ArchitecturalArcArt } from "@/components/visual/ArchitecturalArcArt"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { CalBookingWidget } from "@/components/ui/CalBookingWidget"

export const ServicesPage: React.FC = () => {
  const { navigate, setContactPrefill } = useNavigation()

  const handleSelectService = (serviceName: string, budget: string) => {
    setContactPrefill({
      service: serviceName,
      budgetRange: budget,
      description: `Inquiry regarding ${serviceName}. Let's schedule a 30-min discovery session.`,
    })
    navigate("contact", "contact")
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-start gap-6 sm:gap-10">
            {/* Left Vertical Indicator */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
              <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.25em] text-[#FFAE00]">
                SERVICES
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#FFAE00]" />
                <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
                  WHAT WE BUILD &amp; SHIP
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-display">
                Digital capabilities engineered to{" "}
                <span className="font-boska italic font-light text-[#FFAE00]">
                  convert
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                We combine architectural precision, fluid animations, and high-velocity code to help ambitious brands dominate their category.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <HeyDigitalButton
                  variant="amber"
                  size="lg"
                  onClick={() => navigate("contact")}
                >
                  Book Discovery Sprint ↗
                </HeyDigitalButton>

                <HeyDigitalButton
                  variant="dark"
                  size="lg"
                  onClick={() => navigate("packages")}
                >
                  View Fixed Pricing
                </HeyDigitalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Crisp White Background Rhythm) */}
      <section className="py-20 bg-white text-zinc-950">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
                THREE SPECIALTIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight font-display mt-2">
                Focused mastery. Zero fluff.
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md">
              We don't try to do everything. We focus on the three highest-leverage digital assets a modern business needs to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Web Development */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Code className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400">01 / WEB</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-zinc-950 font-display">Web Development</h3>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    Custom business websites, web applications, and landing pages with sub-0.4s load speed, SEO mastery, and 100/100 Lighthouse scores.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-700 pt-2 border-t border-zinc-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Next.js 15, Vite &amp; React architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>60fps fluid micro-interactions &amp; 3D canvas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Turnaround in 2 to 4 weeks</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col gap-2.5">
                <button
                  onClick={() => navigate("services-web")}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-[#FFAE00] text-white hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Web Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleSelectService("Web Development", "₹25,000 - ₹50,000")}
                  className="w-full py-2 px-4 rounded-xl border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-semibold transition-all cursor-pointer"
                >
                  Book Web Sprint
                </button>
              </div>
            </div>

            {/* Service 2: Mobile Apps */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400">02 / APP</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-zinc-950 font-display">Mobile Apps</h3>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    Native-grade cross-platform apps for iOS and Android with push notifications, offline SQLite sync, and App Store publishing support.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-700 pt-2 border-t border-zinc-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>React Native &amp; Flutter high-velocity UI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Firebase Cloud Messaging &amp; Auth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>100% App Store approval warranty</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col gap-2.5">
                <button
                  onClick={() => navigate("services-mobile")}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-[#FFAE00] text-white hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Mobile Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleSelectService("Mobile App Development", "₹50,000 - ₹1,00,000")}
                  className="w-full py-2 px-4 rounded-xl border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-semibold transition-all cursor-pointer"
                >
                  Book App Sprint
                </button>
              </div>
            </div>

            {/* Service 3: AI & Automation */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400">03 / AUTO</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-zinc-950 font-display">Automation &amp; AI</h3>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    Autonomous WhatsApp lead capture, 24/7 AI customer support bots, and automated CRM pipelines that save 20+ hours of manual labor per week.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-700 pt-2 border-t border-zinc-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>WhatsApp Cloud API direct integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Trained on your private documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Webhook sync to Sheets &amp; Supabase</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col gap-2.5">
                <button
                  onClick={() => navigate("services-automation")}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-[#FFAE00] text-white hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore AI Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleSelectService("AI & Automation Workflows", "₹25,000 - ₹50,000")}
                  className="w-full py-2 px-4 rounded-xl border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-semibold transition-all cursor-pointer"
                >
                  Book AI Sprint
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <ProcessSection />

      {/* Embedded 30-Min Discovery Booking Section */}
      <section className="py-20 bg-[#070708] border-t border-zinc-800">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
              DIRECT CALENDAR ACCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Let's schedule your 30-minute discovery call.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Pick a convenient time below. You will speak directly with founder Rohith E to review requirements and get a concrete execution plan.
            </p>
          </div>

          <CalBookingWidget />
        </div>
      </section>
    </div>
  )
}
