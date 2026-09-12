import React from "react"
import { motion } from "framer-motion"
import { Bot, CheckCircle2, ArrowRight, Zap, MessageSquare, Cpu, Workflow, GitBranch } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"
import { ArchitecturalArcArt } from "@/components/visual/ArchitecturalArcArt"

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
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* 3D Wireframe Canvas */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-75 pointer-events-none hidden lg:block">
          <WireframePolyhedronCanvas
            polyhedron="dodecahedron"
            size={180}
            lineColor="rgba(255, 174, 0, 0.45)"
            glowColor="rgba(255, 174, 0, 0.15)"
          />
        </div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-start gap-6 sm:gap-10">
            {/* Left Vertical Indicator */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
              <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.25em] text-[#FFAE00]">
                SERVICE / 03
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-mono font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#FFAE00] animate-pulse" />
                <span>INTELLIGENT SYSTEMS ENGINEERING</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Autonomous workflows &amp;{" "}
                <span className="text-[#FFAE00]">AI Agents</span>.
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Cut 20+ hours of repetitive manual operations every week. We build automated WhatsApp bots, AI customer support reps, and autonomous pipeline syncs that run 24/7.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <HeyDigitalButton
                  variant="amber"
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
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-[#0C0C0E] border-b border-zinc-800 py-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">24/7/365</div>
              <div className="text-xs text-zinc-400 mt-1">Autonomous Uptime</div>
            </div>
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">&lt;5 Sec</div>
              <div className="text-xs text-zinc-400 mt-1">WhatsApp Lead Response</div>
            </div>
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">0 Human Errors</div>
              <div className="text-xs text-zinc-400 mt-1">Automated Data Capture</div>
            </div>
            <div className="border-l-2 border-[#FFAE00] pl-4">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">10x ROI</div>
              <div className="text-xs text-zinc-400 mt-1">Operational Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Architecture (Crisp White Card Contrast) */}
      <section className="py-20 bg-white text-zinc-950">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
                CORE WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight font-display mt-2">
                Replace manual chaos with software.
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md">
              Custom integrations that bridge WhatsApp, Google Sheets, Supabase, Stripe, and your custom backend seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950">WhatsApp Business Automation</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Automatically reply to customer inquiries, capture lead qualification data, verify phone numbers, and push customer profiles straight into your CRM.
              </p>
              <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Official WhatsApp Cloud API verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Instant PDF brochure &amp; catalog dispatch</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950">Custom GenAI Customer Agents</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Trained exclusively on your business documentation, pricing guides, and FAQs to answer technical and commercial inquiries with 100% brand voice accuracy.
              </p>
              <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Grounded in your private business data (RAG)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Seamless human fallback escalation</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950">Multi-Service Webhook Relays</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Connect payment gateways like Razorpay and Stripe to automatically provision user accounts, trigger invoices, and alert your staff via Telegram / Discord.
              </p>
              <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Real-time webhook signature verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Automated invoice &amp; receipt generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#070708] border-t border-zinc-800 text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Automate your operational bottleneck today.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery call directly with Rohith E to blueprint your automated pipeline.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="amber" size="lg" onClick={handleBookService}>
              Book Automation Discovery Call ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
