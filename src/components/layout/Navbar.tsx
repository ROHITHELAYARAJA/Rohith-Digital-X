import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X as CloseIcon, ArrowUpRight, Phone, Mail, MapPin, ChevronDown, Package, Wrench, CreditCard, BookOpen, Heart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn, scrollToSection } from "@/lib/utils"
import { GuestbookModal } from "@/components/modals/GuestbookModal"
import { AssetsModal } from "@/components/modals/AssetsModal"
import { CommandSearchModal } from "@/components/modals/CommandSearchModal"

import { useNavigation, PageRoute } from "@/context/NavigationContext"

export const Navbar: React.FC = () => {
  const { navigate, currentPage } = useNavigation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [assetsModalState, setAssetsModalState] = useState<{ isOpen: boolean; tab: "assets" | "bucketlist" | "attribution" }>({
    isOpen: false,
    tab: "assets",
  })
  const moreDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleNavClick = (route: PageRoute, targetId?: string) => {
    setIsMobileMenuOpen(false)
    setIsMoreOpen(false)
    navigate(route, targetId)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-4 sm:top-5 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 flex justify-center",
          isScrolled ? "translate-y-0" : "translate-y-0.5"
        )}
      >
        <div className="pointer-events-auto relative" ref={moreDropdownRef}>
          {/* Fastlane-style Single Unified Floating Glass Pill */}
          <nav className="flex items-center gap-2 sm:gap-3 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-xl py-1.5 pl-4 pr-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            
            {/* Logo on Left */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 pr-1.5 text-xs sm:text-sm font-manrope font-extrabold tracking-tight text-zinc-950 dark:text-white hover:text-[#FF4D3D] transition-colors cursor-pointer group"
            >
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-[#FF4D3D] to-[#FFAE00] flex items-center justify-center text-white font-black text-[10px] shadow-2xs group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <span className="font-extrabold tracking-tight">Rohith Digital X</span>
            </button>

            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

            {/* Links in Center (Desktop) */}
            <div className="hidden md:flex items-center gap-0.5">
              {[
                { id: "home" as PageRoute, label: "Home" },
                { id: "services" as PageRoute, label: "Services" },
                { id: "work" as PageRoute, label: "Work" },
                { id: "packages" as PageRoute, label: "Pricing" },
                { id: "about" as PageRoute, label: "About" },
              ].map((link) => {
                const isActive = currentPage === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "relative px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer select-none",
                      isActive
                        ? "text-zinc-950 dark:text-white font-bold bg-zinc-100 dark:bg-zinc-800 shadow-2xs"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                  </button>
                )
              })}

              {/* "More ⌄" Mega Menu Trigger */}
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer select-none",
                  isMoreOpen
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                )}
              >
                <span>More</span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    isMoreOpen ? "rotate-180 text-[#FF4D3D]" : ""
                  )}
                />
              </button>

              {/* Standalone Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search sections"
                className="h-7 w-7 rounded-full text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-all cursor-pointer ml-1 active:scale-90"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Right: Fastlane-Style Action Button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-manrope rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-xs active:scale-95 cursor-pointer ml-1"
            >
              <span>Book a Sprint</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden items-center justify-center h-8 w-8 rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <CloseIcon className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </header>

      <GuestbookModal isOpen={isGuestbookOpen} onClose={() => setIsGuestbookOpen(false)} />
      <AssetsModal isOpen={assetsModalState.isOpen} initialTab={assetsModalState.tab} onClose={() => setAssetsModalState({ ...assetsModalState, isOpen: false })} />
      <CommandSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs xl:hidden"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="flex flex-col text-left">
                  <div className="flex items-baseline font-sans text-lg font-extrabold tracking-tight text-zinc-950 leading-none">
                    <span className="font-black">Rohith</span>
                    <span className="text-zinc-500 font-medium ml-1.5 tracking-tight">Digital</span>
                    <span className="font-black text-[#FFAE00] ml-1.5">
                      X
                    </span>
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-zinc-400 mt-1">
                    Digital Product Studio
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">
                  Available for Projects
                </span>
              </div>

              {/* Mobile Drawer Page Links */}
              <div className="grid grid-cols-2 gap-2 py-4">
                {[
                  { id: "home" as PageRoute, label: "Home" },
                  { id: "services" as PageRoute, label: "Services" },
                  { id: "work" as PageRoute, label: "Work" },
                  { id: "packages" as PageRoute, label: "Packages" },
                  { id: "about" as PageRoute, label: "About" },
                  { id: "estimator" as PageRoute, label: "Estimator" },
                  { id: "guestbook" as PageRoute, label: "Guestbook" },
                  { id: "attribution" as PageRoute, label: "Attribution" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl text-left text-xs font-bold transition-all duration-200 cursor-pointer select-none",
                      currentPage === link.id
                        ? "bg-amber-50 text-amber-900 border border-amber-200 shadow-xs"
                        : "text-zinc-700 hover:text-amber-600 hover:bg-amber-50/50 active:bg-amber-100"
                    )}
                  >
                    <span>{link.label}</span>
                    {currentPage === link.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFAE00]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Contact Info Snippet with Exact User Details */}
              <div className="mt-2 pt-4 border-t border-zinc-100 space-y-2.5 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <a href="tel:+919655483130" className="hover:text-amber-600 font-bold transition-colors font-mono">
                    +91 96554 83130
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <a href="mailto:e.rohith3130@gmail.com" className="hover:text-amber-600 font-bold transition-colors font-mono">
                    e.rohith3130@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-5">
                <Button
                  onClick={() => handleNavClick("contact")}
                  className="w-full justify-center gap-2 text-sm font-black h-11 bg-[#FFAE00] hover:bg-[#FFB800] text-black shadow-md"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
