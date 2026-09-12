import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"

interface HeyDigitalButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: "purple" | "orange" | "dark" | "white" | "amber"
  size?: "sm" | "md" | "lg"
  direction?: "right" | "down"
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export const HeyDigitalButton: React.FC<HeyDigitalButtonProps> = ({
  children,
  onClick,
  href,
  variant = "purple",
  size = "md",
  direction = "right",
  className = "",
  disabled = false,
  type = "button",
}) => {
  const isPurple = variant === "purple" || variant === "amber"
  const isOrange = variant === "orange"
  const isDark = variant === "dark"
  const isWhite = variant === "white"

  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-xs"
      : size === "lg"
      ? "px-7 py-4 text-sm"
      : "px-6 py-3 text-xs sm:text-sm"

  const containerClasses = `
    group relative inline-flex items-center gap-3 ${sizeClasses} rounded-full
    font-sans font-bold uppercase tracking-wider select-none cursor-pointer
    transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
    ${
      isOrange
        ? "bg-[#FF4D3D] hover:bg-[#FF3B2B] text-white shadow-[0_8px_25px_-5px_rgba(255,77,61,0.45)] hover:shadow-[0_12px_32px_-4px_rgba(255,77,61,0.6)]"
        : isPurple
        ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_8px_25px_-5px_rgba(139,92,246,0.45)] hover:shadow-[0_12px_32px_-4px_rgba(139,92,246,0.6)]"
        : isDark
        ? "bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 shadow-sm"
        : "bg-white hover:bg-zinc-100 text-zinc-950 border border-zinc-200 shadow-md"
    }
    ${className}
  `

  const ArrowIcon = direction === "down" ? ArrowDown : ArrowRight

  const content = (
    <>
      <span className="truncate">{children}</span>
      <span
        className={`
          flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full shrink-0 transition-transform duration-300
          ${
            direction === "right"
              ? "group-hover:translate-x-1"
              : "group-hover:translate-y-1"
          }
          ${
            isOrange
              ? "bg-white text-[#FF4D3D]"
              : isPurple
              ? "bg-white text-purple-700"
              : isDark
              ? "bg-white/10 text-white group-hover:bg-purple-600 group-hover:text-white"
              : "bg-zinc-950 text-white"
          }
        `}
      >
        <ArrowIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={containerClasses}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={containerClasses}
    >
      {content}
    </button>
  )
}
