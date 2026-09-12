import React, { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquare, Calendar, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { ContactSection } from "@/components/sections/ContactSection"
import { CalBookingWidget } from "@/components/ui/CalBookingWidget"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const ContactPage: React.FC = () => {
  const { contactPrefill } = useNavigation()
  const [activeTab, setActiveTab] = useState<"calendar" | "form">("calendar")

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-start gap-6 sm:gap-10">
            {/* Left Vertical Indicator */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
              <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.25em] text-[#FFAE00]">
                CONTACT
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
                <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
                  ACCEPTING NEW SPRINT PROJECTS
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-display">
                Bring the brief. We will ship the{" "}
                <span className="font-boska italic font-light text-[#FFAE00]">
                  product
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Direct founder communication with Rohith E. Zero agency fluff or account managers. Schedule a 30-min discovery call or submit your project details below.
              </p>

              {/* Direct Founder Contact Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href="tel:+919655483130"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFAE00] transition-all group"
                >
                  <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-[#FFAE00] flex items-center justify-center font-bold">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Call / WhatsApp</div>
                    <div className="text-xs font-mono font-bold text-white group-hover:text-[#FFAE00] transition-colors">
                      +91 96554 83130
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:e.rohith3130@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFAE00] transition-all group"
                >
                  <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-[#FFAE00] flex items-center justify-center font-bold">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Founder Email</div>
                    <div className="text-xs font-mono font-bold text-white group-hover:text-[#FFAE00] transition-colors truncate">
                      e.rohith3130@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                  <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-[#FFAE00] flex items-center justify-center font-bold">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Studio Location</div>
                    <div className="text-xs font-mono font-bold text-white">
                      Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Between Interactive Calendar & Inquiry Form */}
              <div className="flex items-center gap-2 pt-4">
                <button
                  onClick={() => setActiveTab("calendar")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "calendar"
                      ? "bg-[#FFAE00] text-black shadow-lg"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>30-Min Discovery Calendar</span>
                </button>

                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "form"
                      ? "bg-[#FFAE00] text-black shadow-lg"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Detailed Project Brief Form</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Booking / Brief Area */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          {activeTab === "calendar" ? (
            <div className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
                  SELECT YOUR TIME
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  Book a 30-minute sprint with Rohith E
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
                  Immediate confirmation sent to your email and WhatsApp. No sales pitch, strictly technical &amp; scope planning.
                </p>
              </div>
              <CalBookingWidget />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
                  SPECIFY YOUR SCOPE
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  Send your project requirements
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
                  Receive an architectural scope breakdown, timeline estimate, and price quote within 24 hours.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-2xl">
                <ContactSection initialFormData={contactPrefill} />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
