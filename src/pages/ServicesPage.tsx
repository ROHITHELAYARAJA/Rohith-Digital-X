import React from "react"
import { motion } from "framer-motion"
import { Code, Smartphone, Bot, ArrowRight, CheckCircle2, Zap, Layers, ShieldCheck } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
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
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Hero Header Section - Replica of HomePage Architecture on Black */}
      <section className="relative pt-28 sm:pt-36 pb-16 border-b border-zinc-800/80 overflow-hidden bg-[#070708]">
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[340px] sm:h-[460px] bg-gradient-to-b from-zinc-800/25 via-[#FF4D3D]/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.07] font-manrope text-balance max-w-4xl mx-auto"
          >
            Full-stack software built to{" "}
            <span className="font-playfair italic font-medium text-[#FF4D3D] inline-block px-1">
              scale businesses
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans px-3"
          >
            We engineer high-velocity web platforms, native mobile applications, and autonomous AI systems — delivered in 14 days directly by founder Rohith&nbsp;E.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2">
            <HeyDigitalButton
              variant="orange"
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
      </section>

      {/* Services Grid (Deep Black Background with Purple/Orange Accents) */}
      <section className="py-12 sm:py-18 bg-[#090A0D] text-white border-b border-zinc-800/80">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#FF4D3D]">
                THREE SPECIALTIES
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-manrope mt-1.5 sm:mt-2">
                Focused mastery. Zero fluff.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-dmsans">
              We focus on the three highest-leverage digital assets a modern business needs to scale and dominate their category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Service 1: Web Development (Sky Blue Specialty) */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-zinc-800 hover:border-sky-500/70 hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all flex flex-col justify-between group backdrop-blur-sm">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-sky-950/60 border border-sky-800/60 text-sky-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Code className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-zinc-400">01 / WEB</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white font-manrope">Web Development</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-dmsans">
                    Custom business websites, web applications, and landing pages with sub-0.4s load speed, SEO mastery, and 100/100 Lighthouse scores.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 border-t border-zinc-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                    <span>Next.js 15, Vite &amp; React architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                    <span>60fps fluid micro-interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                    <span>Turnaround in 14-day sprints</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col gap-2.5">
                <button
                  onClick={() => navigate("services-web")}
                  className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore Web Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleSelectService("Web Development", "₹25,000 - ₹50,000")}
                  className="w-full py-2.5 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs font-semibold transition-all cursor-pointer hover:text-white"
                >
                  Book Web Sprint
                </button>
              </div>
            </div>

            {/* Service 2: Mobile Apps */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-zinc-800 hover:border-[#FF4D3D]/70 hover:shadow-orange-glow transition-all flex flex-col justify-between group backdrop-blur-sm">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-orange-950/60 border border-orange-800/60 text-[#FF4D3D] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-zinc-400">02 / APP</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-manrope">Mobile Apps</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 sm:mt-2 leading-relaxed font-dmsans">
                    Native-grade cross-platform apps for iOS and Android with push notifications, offline SQLite sync, and App Store publishing support.
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 text-xs text-zinc-300 pt-2 border-t border-zinc-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF4D3D] shrink-0" />
                    <span>React Native &amp; Flutter high-velocity UI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF4D3D] shrink-0" />
                    <span>Firebase Cloud Messaging &amp; Auth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF4D3D] shrink-0" />
                    <span>100% App Store approval warranty</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 sm:pt-8 flex flex-col gap-2 sm:gap-2.5">
                <button
                  onClick={() => navigate("services-mobile")}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-[#FF4D3D] hover:bg-[#FF3B2B] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore Mobile Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleSelectService("Mobile App Development", "₹50,000 - ₹1,00,000")}
                  className="w-full py-2 sm:py-2.5 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs font-semibold transition-all cursor-pointer hover:text-white"
                >
                  Book App Sprint
                </button>
              </div>
            </div>

            {/* Service 3: AI & Automation */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-zinc-800 hover:border-purple-500/70 hover:shadow-purple-glow transition-all flex flex-col justify-between group backdrop-blur-sm">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-purple-950/60 border border-purple-800/60 text-purple-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-zinc-400">03 / AUTO</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-manrope">Automation &amp; AI</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 sm:mt-2 leading-relaxed font-dmsans">
                    Autonomous WhatsApp lead capture, 24/7 AI customer support bots, and automated CRM pipelines that save 20+ hours of manual labor per week.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 border-t border-zinc-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>WhatsApp Cloud API direct integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Trained on your private documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>Webhook sync to Sheets &amp; Supabase</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col gap-2.5">
                <button
                  onClick={() => navigate("services-automation")}
                  className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore AI Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleSelectService("AI & Automation Workflows", "₹25,000 - ₹50,000")}
                  className="w-full py-2.5 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs font-semibold transition-all cursor-pointer hover:text-white"
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
      <section className="py-14 sm:py-18 bg-[#070708] border-t border-zinc-800">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-10">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-sky-400">
              DIRECT CALENDAR ACCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-manrope">
              Let's schedule your 30-minute discovery call.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-dmsans">
              Pick a convenient time below. You will speak directly with founder Rohith E to review requirements and get a concrete execution plan.
            </p>
          </div>

          <CalBookingWidget />
        </div>
      </section>
    </div>
  )
}
