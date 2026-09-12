import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LegalModal } from "@/components/modals/LegalModal"
import { GuestbookModal } from "@/components/modals/GuestbookModal"
import { AssetsModal } from "@/components/modals/AssetsModal"
import { useNavigation } from "@/context/NavigationContext"

interface CapsuleFooterItemProps {
  label: string
  onClick?: () => void
  href?: string
  isExternal?: boolean
  isActive?: boolean
}

const CapsuleFooterItem: React.FC<CapsuleFooterItemProps> = ({
  label,
  onClick,
  href,
  isExternal = false,
  isActive = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 select-none cursor-pointer ${
        isHovered || isActive
          ? "bg-white text-zinc-950 font-bold shadow-md scale-[1.03]"
          : "text-zinc-400 hover:text-white"
      }`}
    >
      <span>{label}</span>
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.span
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -3 }}
            transition={{ duration: 0.12 }}
            className="text-zinc-950 font-bold text-xs leading-none"
          >
            {isExternal ? "↗" : "→"}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-block"
        >
          {content}
        </a>
      </li>
    )
  }

  return (
    <li>
      <button onClick={onClick} className="text-left inline-block">
        {content}
      </button>
    </li>
  )
}

export const Footer: React.FC = () => {
  const { navigate, currentPage } = useNavigation()
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null)
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false)
  const [assetsModalState, setAssetsModalState] = useState<{
    isOpen: boolean
    tab: "assets" | "bucketlist" | "attribution"
  }>({
    isOpen: false,
    tab: "attribution",
  })
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Sleek Dark Executive Footer Layout with Interactive White Capsule Links */}
      <footer className="bg-[#090A0B] text-zinc-300 pt-16 pb-10 border-t border-zinc-800/80 relative overflow-hidden font-sans">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
          
          {/* Main 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-850">
            
            {/* Left Bio Section (Col 5) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Brand Monogram Logo */}
              <button
                onClick={() => navigate("home")}
                className="flex items-center gap-2 group cursor-pointer text-left"
              >
                <div className="flex items-baseline font-sans text-2xl font-black tracking-tight text-white leading-none">
                  <span className="font-outfit">RDX</span>
                  <span className="text-[#FFAE00] text-xl font-bold ml-0.5">.</span>
                </div>
              </button>

              <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-sm">
                I'm <strong className="text-white font-bold">Rohith E</strong> — full-stack engineer, product architect &amp; founder of Rohith Digital X. Based in Tamil Nadu, India.
              </p>

              <div className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <div>Phone: <a href="tel:+919655483130" className="text-white hover:text-[#FFAE00]">+91 96554 83130</a></div>
                <div>Email: <a href="mailto:e.rohith3130@gmail.com" className="text-white hover:text-[#FFAE00]">e.rohith3130@gmail.com</a></div>
              </div>
            </div>

            {/* Vertical Divider for large screens */}
            <div className="hidden lg:block lg:col-span-1 border-l border-zinc-800/60 h-full" />

            {/* Right 3 Navigation Columns (Col 6) */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8">
              
              {/* Column 1: GENERAL */}
              <div className="space-y-4">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FFAE00]">
                  GENERAL
                </p>
                <ul className="space-y-1.5 text-xs">
                  <CapsuleFooterItem
                    label="Home"
                    onClick={() => navigate("home")}
                    isActive={currentPage === "home"}
                  />
                  <CapsuleFooterItem
                    label="Services"
                    onClick={() => navigate("services")}
                    isActive={currentPage === "services"}
                  />
                  <CapsuleFooterItem
                    label="Portfolio"
                    onClick={() => navigate("work")}
                    isActive={currentPage === "work"}
                  />
                  <CapsuleFooterItem
                    label="Pricing"
                    onClick={() => navigate("packages")}
                    isActive={currentPage === "packages"}
                  />
                </ul>
              </div>

              {/* Column 2: SERVICES */}
              <div className="space-y-4">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FFAE00]">
                  SPECIALTIES
                </p>
                <ul className="space-y-1.5 text-xs">
                  <CapsuleFooterItem
                    label="Web Development"
                    onClick={() => navigate("services-web")}
                    isActive={currentPage === "services-web"}
                  />
                  <CapsuleFooterItem
                    label="Mobile Apps"
                    onClick={() => navigate("services-mobile")}
                    isActive={currentPage === "services-mobile"}
                  />
                  <CapsuleFooterItem
                    label="AI & Automation"
                    onClick={() => navigate("services-automation")}
                    isActive={currentPage === "services-automation"}
                  />
                  <CapsuleFooterItem
                    label="Case Studies"
                    onClick={() => navigate("case-study-web")}
                    isActive={currentPage === "case-study-web"}
                  />
                </ul>
              </div>

              {/* Column 3: CONNECT */}
              <div className="space-y-4">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FFAE00]">
                  CONNECT
                </p>
                <ul className="space-y-1.5 text-xs">
                  <CapsuleFooterItem
                    label="Book a call"
                    onClick={() => navigate("contact")}
                    isActive={currentPage === "contact"}
                  />
                  <CapsuleFooterItem
                    label="WhatsApp Direct"
                    href="https://wa.me/919655483130"
                    isExternal
                  />
                  <CapsuleFooterItem
                    label="About Rohith"
                    onClick={() => navigate("about")}
                    isActive={currentPage === "about"}
                  />
                  <CapsuleFooterItem
                    label="Guestbook"
                    onClick={() => setIsGuestbookOpen(true)}
                  />
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright & Legal Links Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-normal">
            <p>© {currentYear} <strong className="font-semibold text-zinc-200">Rohith Digital X</strong>. All rights reserved</p>
            
            <div className="flex items-center gap-4 text-zinc-400">
              <button
                onClick={() => setLegalModalType("privacy")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModalType("terms")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Use
              </button>
              <span>•</span>
              <button
                onClick={() => navigate("attribution")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Attribution
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Guestbook Modal */}
      <GuestbookModal
        isOpen={isGuestbookOpen}
        onClose={() => setIsGuestbookOpen(false)}
      />

      {/* Assets & Attribution Modal */}
      <AssetsModal
        isOpen={assetsModalState.isOpen}
        initialTab={assetsModalState.tab}
        onClose={() => setAssetsModalState({ ...assetsModalState, isOpen: false })}
      />

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType || "privacy"}
      />
    </>
  )
}
