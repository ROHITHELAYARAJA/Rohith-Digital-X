import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  id: string
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  badge?: string
  className?: string
}

export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  onToggle,
  badge,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md transition-all duration-300 overflow-hidden",
        isOpen ? "border-purple-500/60 shadow-[0_0_20px_rgba(139,92,246,0.1)]" : "hover:border-zinc-700",
        className
      )}
    >
      <button
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 md:p-6 text-left font-medium text-white transition-colors hover:text-purple-400 focus-visible:outline-none cursor-pointer"
      >
        <span className="flex items-center gap-3 text-base md:text-lg font-semibold text-white pr-4 font-manrope">
          {title}
          {badge && (
            <span className="inline-block rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs font-mono font-medium text-purple-400">
              {badge}
            </span>
          )}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors",
            isOpen && "bg-purple-950/60 border-purple-500/40 text-purple-400"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800/80 p-5 md:p-6 pt-3 text-zinc-400 leading-relaxed text-sm md:text-base font-dmsans">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
