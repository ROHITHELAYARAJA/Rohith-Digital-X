import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  ExternalLink,
  PhoneCall,
  CheckCircle2,
} from "lucide-react"

interface CalBookingWidgetProps {
  className?: string
  calLink?: string
}

export const CalBookingWidget: React.FC<CalBookingWidgetProps> = ({
  className = "",
  calLink = "https://cal.com/rohith-e-3130/secret",
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  // Embed URL with styling parameters
  const embedUrl = `${calLink}?embed=true&layout=month_view&theme=light`

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      {/* Executive Header Bar */}
      <div className="bg-zinc-950 text-white rounded-t-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FF3B30]/20 via-[#FFAE00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-3 relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-semibold text-zinc-300">
            <span className="text-[#FF3B30] font-bold">OFFICIAL CAL.COM SUITE</span>
            <span className="text-zinc-600">/</span>
            <span className="text-emerald-400 font-bold">LIVE SLOTS</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-manrope tracking-tight text-white leading-tight">
            Schedule a 30-Min Sprint Discovery Call
          </h3>

          <p className="text-sm text-zinc-400 font-dmsans leading-relaxed">
            Book directly into founder <strong>Rohith E's</strong> personal calendar. We will review your product idea, estimate sprint scope, and blueprint the architecture.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-zinc-300 font-dmsans">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#FFAE00]" />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Video className="h-4 w-4 text-[#FF3B30]" />
              <span>Google Meet / Zoom</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>

        {/* Right CTA Button & Quick Info */}
        <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 w-full md:w-auto relative z-10">
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-manrope font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap group"
          >
            <span>Open in Cal.com</span>
            <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://wa.me/919655483130?text=Hi%20Rohith,%20I%20would%20like%20to%20schedule%20a%20project%20discovery%20sprint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 text-emerald-300 font-mono text-xs font-semibold transition-all active:scale-95 cursor-pointer"
          >
            <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* Embedded Live Cal.com Scheduler Frame */}
      <div className="relative w-full rounded-b-3xl bg-white border-x border-b border-zinc-200 shadow-xl overflow-hidden min-h-[680px]">
        {/* Loading placeholder skeleton while Cal.com iframe initializes */}
        {!iframeLoaded && (
          <div className="absolute inset-0 bg-zinc-50 flex flex-col items-center justify-center p-8 space-y-4 z-10">
            <div className="h-10 w-10 rounded-full border-2 border-zinc-300 border-t-[#FF3B30] animate-spin" />
            <p className="text-sm font-manrope font-semibold text-zinc-600">
              Connecting to Rohith E's live Cal.com scheduler...
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              cal.com/rohith-e-3130/secret
            </p>
          </div>
        )}

        <iframe
          src={embedUrl}
          title="Rohith E | Cal.com Appointment Scheduler"
          onLoad={() => setIframeLoaded(true)}
          className="w-full h-[720px] sm:h-[760px] border-0"
          style={{ width: "100%", height: "740px", overflow: "hidden" }}
        />
      </div>

      {/* Trust Footer below booking */}
      <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-zinc-500 font-dmsans px-2 gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span>Calendar invites and Google Meet links generated automatically upon booking</span>
        </div>
        <div className="font-mono text-xs text-zinc-400">
          Direct link:{" "}
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-800"
          >
            cal.com/rohith-e-3130/secret
          </a>
        </div>
      </div>
    </div>
  )
}
