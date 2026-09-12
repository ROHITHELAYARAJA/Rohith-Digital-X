import React, { useState } from "react"
import { CheckCircle2, Calendar } from "lucide-react"

interface CalBookingWidgetProps {
  className?: string
  calLink?: string
}

export const CalBookingWidget: React.FC<CalBookingWidgetProps> = ({
  className = "",
  calLink = "https://cal.com/rohith-e-3130/secret",
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  // Clean dark embed URL for seamless integration into dark luxury theme
  const embedUrl = `${calLink}?embed=true&layout=month_view&theme=dark`

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      {/* Sleek Minimal Executive Container */}
      <div className="rounded-3xl bg-zinc-950 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Subtle, Clean Header Bar — No noisy banners or unwanted links */}
        <div className="px-6 py-4 border-b border-zinc-850 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
            </div>
            <div className="h-3.5 w-[1px] bg-zinc-800" />
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-xs font-mono font-semibold text-zinc-300">
                Rohith E — Direct Calendar Scheduler
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-zinc-500">
            <span>Direct 1-on-1</span>
            <span className="text-zinc-700">•</span>
            <span>30-Min Discovery</span>
          </div>
        </div>

        {/* Embedded Cal.com Scheduler Frame */}
        <div className="relative w-full bg-zinc-950 min-h-[660px] sm:min-h-[720px]">
          {/* Loading placeholder skeleton while Cal.com iframe initializes */}
          {!iframeLoaded && (
            <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center p-8 space-y-3 z-10">
              <div className="h-8 w-8 rounded-full border-2 border-zinc-700 border-t-white animate-spin" />
              <p className="text-xs font-manrope font-semibold text-zinc-400">
                Loading live appointment calendar...
              </p>
            </div>
          )}

          <iframe
            src={embedUrl}
            title="Rohith E | Appointment Scheduler"
            onLoad={() => setIframeLoaded(true)}
            className="w-full h-[680px] sm:h-[740px] border-0 bg-transparent"
            style={{ width: "100%", height: "720px", overflow: "hidden" }}
          />
        </div>
      </div>

      {/* Discreet Trust Note */}
      <div className="pt-3 flex items-center justify-center text-xs text-zinc-500 font-dmsans gap-2">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
        <span>Automated Google Meet link and calendar invitation generated instantly upon booking</span>
      </div>
    </div>
  )
}
