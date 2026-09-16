import React from "react"
import { motion } from "framer-motion"
import { Bot, CheckCircle2, ArrowRight, Zap, MessageSquare, Cpu, Workflow, GitBranch } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const AutomationPage: React.FC = () => {
  const { navigate, setContactPrefill } = useNavigation()

  const handleBookService = () => {
    setContactPrefill({
      service: "AI Agents & Autonomous WhatsApp Automation",
      budgetRange: "₹25,000 - ₹50,000",
      description: "Interested in setting up automated WhatsApp lead capture, AI customer agents, and automated database sync.",
    })
    navigate("contact", "contact")
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Hero Header Section */}
      <section className="relative pt-24 sm:pt-40 pb-12 sm:pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-display">
              Autonomous workflows &amp;{" "}
              <span className="font-boska italic font-light text-purple-400">
                AI Agents
              </span>
              <span className="text-[#FF4D3D]">.</span>
            </h1>

            <p className="text-sm sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
              Cut 20+ hours of repetitive manual operations every week. We build automated WhatsApp bots, AI customer support reps, and autonomous pipeline syncs that run 24/7.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <HeyDigitalButton
                variant="purple"
                size="lg"
                onClick={handleBookService}
              >
                Book Automation Consultation ↗
              </HeyDigitalButton>

              <HeyDigitalButton
                variant="dark"
                size="lg"
                onClick={() => navigate("work")}
              >
                Explore Automation Case Studies
              </HeyDigitalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-zinc-950/80 border-b border-zinc-800 py-6 sm:py-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
            <div className="border-l-2 border-purple-500 pl-3 sm:pl-4">
              <div className="text-xl sm:text-3xl font-bold font-mono text-white">24/7/365</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Autonomous Uptime</div>
            </div>
            <div className="border-l-2 border-[#FF4D3D] pl-3 sm:pl-4">
              <div className="text-xl sm:text-3xl font-bold font-mono text-white">&lt;5 Sec</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">WhatsApp Lead Response</div>
            </div>
            <div className="border-l-2 border-purple-500 pl-3 sm:pl-4">
              <div className="text-xl sm:text-3xl font-bold font-mono text-white">0 Errors</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Automated Data Capture</div>
            </div>
            <div className="border-l-2 border-[#FF4D3D] pl-3 sm:pl-4">
              <div className="text-xl sm:text-3xl font-bold font-mono text-white">10x ROI</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Operational Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Architecture (Deep Black Background with Glass Cards) */}
      <section className="py-12 sm:py-20 bg-[#070708] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-sky-400">
                CORE WORKFLOWS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mt-2">
                Replace manual chaos with software<span className="text-[#FF4D3D]">.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Custom integrations that bridge WhatsApp, Google Sheets, Supabase, Stripe, and your custom backend seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4.5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-sky-500/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all space-y-3 sm:space-y-4">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                <MessageSquare className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">WhatsApp Business Automation</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Automatically reply to customer inquiries, capture lead qualification data, verify phone numbers, and push customer profiles straight into your CRM.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Official WhatsApp Cloud API verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Instant PDF brochure &amp; catalog dispatch</span>
                </li>
              </ul>
            </div>

            <div className="p-4.5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 hover:shadow-purple-glow transition-all space-y-3 sm:space-y-4">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <Bot className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Custom GenAI Customer Agents</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Trained exclusively on your business documentation, pricing guides, and FAQs to answer technical and commercial inquiries with 100% brand voice accuracy.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Grounded in your private business data (RAG)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Seamless human fallback escalation</span>
                </li>
              </ul>
            </div>

            <div className="p-4.5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-[#FF4D3D]/60 hover:shadow-[0_0_20px_rgba(255,77,61,0.2)] transition-all space-y-3 sm:space-y-4">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#FF4D3D]/10 text-[#FF4D3D] flex items-center justify-center font-bold">
                <Workflow className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Multi-Service Webhook Relays</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Connect payment gateways like Razorpay and Stripe to automatically provision user accounts, trigger invoices, and alert your staff via Telegram / Discord.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>Real-time webhook signature verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>Automated invoice &amp; receipt generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 sm:py-16 bg-zinc-950/60 border-t border-zinc-800 text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Automate your operational bottleneck today<span className="text-[#FF4D3D]">.</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery call directly with Rohith E to blueprint your automated pipeline.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="purple" size="lg" onClick={handleBookService}>
              Book Automation Discovery Call ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
