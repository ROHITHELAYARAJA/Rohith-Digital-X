import React from "react"
import { motion } from "framer-motion"
import { Smartphone, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Bell, CloudRain } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const MobileAppPage: React.FC = () => {
  const { navigate, setContactPrefill } = useNavigation()

  const handleBookService = () => {
    setContactPrefill({
      service: "Native Cross-Platform Mobile Application",
      budgetRange: "₹50,000 - ₹1,00,000",
      description: "Looking to develop a cross-platform mobile app for iOS and Android with modern UI, offline capabilities, and cloud sync.",
    })
    navigate("contact", "contact")
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              Native-grade apps for{" "}
              <span className="font-boska italic font-light text-purple-400">
                iOS &amp; Android
              </span>
              <span className="text-[#FF4D3D]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
              We craft fluid, offline-capable mobile applications that feel instantly responsive, publish smoothly to the App Store and Google Play, and delight your end users.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <HeyDigitalButton
                variant="purple"
                size="lg"
                onClick={handleBookService}
              >
                Book App Discovery Call ↗
              </HeyDigitalButton>

              <HeyDigitalButton
                variant="dark"
                size="lg"
                onClick={() => navigate("work")}
              >
                Explore Shipped Apps
              </HeyDigitalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-zinc-950/80 border-b border-zinc-800 py-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="border-l-2 border-purple-500 pl-4">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">60 FPS</div>
              <div className="text-xs text-zinc-400 mt-1">Silky Smooth UI Motion</div>
            </div>
            <div className="border-l-2 border-[#FF4D3D] pl-4">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">iOS &amp; Android</div>
              <div className="text-xs text-zinc-400 mt-1">Single Codebase Efficiency</div>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">Offline Sync</div>
              <div className="text-xs text-zinc-400 mt-1">Local SQLite &amp; Cloud Relays</div>
            </div>
            <div className="border-l-2 border-[#FF4D3D] pl-4">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">App Stores</div>
              <div className="text-xs text-zinc-400 mt-1">End-to-End Submission Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Pillars (Deep Black Background with Glass Cards) */}
      <section className="py-20 bg-[#070708] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-400">
                CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mt-2">
                Engineered for handheld mastery<span className="text-[#FF4D3D]">.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              From intuitive on-demand logistics to interactive client portals, we build apps that stay on your customers' home screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Cross-Platform Unified Core</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Build once, deploy seamlessly to iPhone, iPad, and all modern Android devices with 95%+ shared codebase, reducing build time and ongoing costs by half.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>React Native with Expo &amp; Hermes engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Flutter Dart high-velocity rendering</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <Bell className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Push Notifications &amp; Engagement</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Keep users coming back with automated transactional notifications, order updates, and marketing broadcasts powered by Firebase Cloud Messaging.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>FCM &amp; Apple APNs background triggers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Biometric face &amp; fingerprint unlock</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-purple-500/60 transition-all space-y-4">
              <div className="h-10 w-10 rounded-xl bg-[#FF4D3D]/10 text-[#FF4D3D] flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">App Store Approval Guarantee</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We handle code signing, privacy declarations, screenshot generation, TestFlight betas, and compliance reviews until your app is live in store.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>100% Apple &amp; Google guidelines adherence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF4D3D]" />
                  <span>OTA (Over-the-air) live bug updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-zinc-950/60 border-t border-zinc-800 text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
            Have an app concept you want to validate?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery call directly with Rohith E to review architecture, timeline, and budget.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="purple" size="lg" onClick={handleBookService}>
              Book Mobile App Discovery Call ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
