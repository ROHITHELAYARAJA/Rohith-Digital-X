import React from "react"
import { motion } from "framer-motion"
import { processSteps } from "@/data/process"
import { Search, Compass, Hammer, Rocket, CheckCircle2, Sparkles } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const STEP_ICONS = [Search, Compass, Hammer, Rocket]

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-14 sm:py-18 bg-[#070708] border-t border-zinc-800/80 relative overflow-hidden text-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-400 font-mono inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Disciplined Delivery Workflow</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-manrope"
          >
            From initial concept to launch in{" "}
            <span className="text-[#FF4D3D] font-black">
              4 disciplined phases.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-normal font-dmsans"
          >
            A predictable, milestone-driven roadmap ensures zero surprises, honest timelines, and seamless execution.
          </motion.p>
        </div>

        {/* 4 Steps Timeline / Cards with Connecting SVG Pipeline Flow */}
        <div className="relative">
          
          {/* Animated Connecting Pipeline Conduit (Visible on lg screens) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-12 h-[2px] z-0 pointer-events-none">
            <svg className="w-full h-10 overflow-visible">
              <line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="#27272A"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <motion.line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="12 180"
                animate={{ strokeDashoffset: [200, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = STEP_ICONS[index] || Search

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="h-full"
                >
                  <TiltCard tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
                    <div className="group relative rounded-3xl border border-zinc-800/90 bg-zinc-900/80 p-6 sm:p-7 shadow-subtle hover:bg-zinc-900 hover:border-purple-500/60 hover:shadow-purple-glow transition-all duration-300 flex flex-col justify-between h-full cursor-default backdrop-blur-sm">
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 border border-zinc-800 text-white group-hover:text-purple-400 group-hover:border-purple-500/50 group-hover:bg-purple-950/40 group-hover:scale-110 transition-all duration-300 shadow-xs">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="font-mono text-xs font-extrabold text-purple-400 tracking-wider px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/60">
                            {step.step}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-lg font-bold tracking-tight text-white mb-1 group-hover:text-purple-400 transition-colors font-manrope">
                          {step.title}
                        </h3>
                        <div className="text-[11px] font-semibold text-zinc-400 mb-3 font-dmsans">
                          {step.tagline}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal font-dmsans">
                          {step.description}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="pt-4 border-t border-zinc-800/80">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-2 font-mono">
                          Key Deliverables
                        </span>
                        <ul className="space-y-1.5">
                          {step.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
