import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 450) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-30 sm:hidden flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950/85 backdrop-blur-md text-white shadow-lg border border-zinc-800 hover:bg-[#FF4D3D] hover:border-[#FF4D3D] transition-all duration-200 focus:outline-none cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="h-3.5 w-3.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
