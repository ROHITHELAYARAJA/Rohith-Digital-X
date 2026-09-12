import React from "react"
import { motion } from "framer-motion"

interface ArchitecturalArcArtProps {
  className?: string
}

export const ArchitecturalArcArt: React.FC<ArchitecturalArcArtProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-[280px] h-[780px] select-none pointer-events-none hidden lg:block ${className}`}>
      <svg
        viewBox="0 0 280 780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Structural Grid Lines */}
        <line x1="20" y1="20" x2="260" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="20" y1="260" x2="260" y2="260" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="20" y1="520" x2="260" y2="520" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="20" y1="760" x2="260" y2="760" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        <line x1="20" y1="20" x2="20" y2="760" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="140" y1="20" x2="140" y2="760" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="260" y1="20" x2="260" y2="760" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* Section 1: Top Arch & Cross (Inverted U Arc) */}
        <path
          d="M 20 260 A 120 120 0 0 1 260 260"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 20 140 A 120 120 0 0 0 260 140"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.2"
        />

        {/* Section 2: Middle Concentric Circles & Crosshairs */}
        <circle
          cx="140"
          cy="390"
          r="120"
          stroke="rgba(255,255,255,0.24)"
          strokeWidth="1.2"
        />
        <circle
          cx="140"
          cy="390"
          r="60"
          stroke="rgba(255,174,0,0.35)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* Animated radar tick */}
        <motion.circle
          cx="140"
          cy="390"
          r="120"
          stroke="rgba(255,174,0,0.4)"
          strokeWidth="1.5"
          strokeDasharray="20 740"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 390px" }}
        />

        {/* Section 3: Bottom Arcs & Geometry */}
        <path
          d="M 20 640 A 120 120 0 0 1 260 640"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.2"
        />
        <path
          d="M 20 520 A 120 120 0 0 0 260 520"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Precision Coordinate Markers & Crosses */}
        {[
          { x: 20, y: 20 },
          { x: 140, y: 20 },
          { x: 260, y: 20 },
          { x: 140, y: 260 },
          { x: 140, y: 390 },
          { x: 140, y: 520 },
          { x: 20, y: 760 },
          { x: 140, y: 760 },
          { x: 260, y: 760 },
        ].map((pt, i) => (
          <g key={i}>
            <line x1={pt.x - 4} y1={pt.y} x2={pt.x + 4} y2={pt.y} stroke="#8B5CF6" strokeWidth="1" />
            <line x1={pt.x} y1={pt.y - 4} x2={pt.x} y2={pt.y + 4} stroke="#8B5CF6" strokeWidth="1" />
          </g>
        ))}

        {/* Subtle Tech Coordinates Label */}
        <text
          x="30"
          y="250"
          fill="rgba(255,255,255,0.3)"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.15em"
        >
          SYS.ARC_01 // 44.20
        </text>
        <text
          x="30"
          y="510"
          fill="rgba(255,255,255,0.3)"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.15em"
        >
          GEOM.CORE // 02
        </text>
      </svg>
    </div>
  )
}
