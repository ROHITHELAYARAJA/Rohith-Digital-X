import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { techStackData } from "@/data/techStack"
import { TiltCard } from "@/components/ui/tilt-card"
import { MacDock } from "@/components/ui/mac-dock"

const CLIENT_LOGOS = [
  { name: "INTERWOVE", font: "font-serif tracking-[0.25em]" },
  { name: "ZARNAMA", font: "font-mono tracking-[0.2em]" },
  { name: "LAKSHITA", font: "font-sans font-bold tracking-[0.15em]" },
  { name: "DINO SYSTEMS", font: "font-mono font-bold tracking-tight" },
  { name: "NOVAMARKET", font: "font-sans font-bold tracking-wider" },
  { name: "CAREPULSE", font: "font-sans font-bold tracking-widest" },
]

export const AboutSection: React.FC = () => {
  const [localTime, setLocalTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      setLocalTime(timeStr)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#070708] text-white border-t border-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 relative z-10">
        
        {/* Top: "A SUMMARY" & "Know me as I am." */}
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Headline & Story */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF4D3D]">
                A SUMMARY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-manrope">
                Know <span className="font-playfair italic font-normal text-zinc-400">me</span> as I am<span className="text-[#FF4D3D]">.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal pt-1 font-dmsans">
                <span className="text-[#FF4D3D] font-semibold">I design products that get out of the way.</span> 3+ years across SaaS, mobile ecosystems, and consumer platforms — from discovery to deployment. I care about speed, clarity, and the high-fidelity details that elevate a brand.
              </p>
            </div>

            {/* Right Column: Minimalist Metadata Table with Dividers */}
            <div className="lg:col-span-6 space-y-0 text-xs sm:text-sm divide-y divide-zinc-800 border-t border-b border-zinc-800">
              
              {/* Row 1: BASED */}
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-zinc-500">
                  BASED
                </span>
                <div className="flex items-center gap-2.5 font-bold text-white font-sans">
                  <span>Tamil Nadu, IN</span>
                  <span className="text-zinc-600">·</span>
                  <span className="font-mono text-xs text-zinc-400">{localTime || "08:38 PM"}</span>
                </div>
              </div>

              {/* Row 2: CURRENTLY */}
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-zinc-500">
                  CURRENTLY
                </span>
                <div className="flex items-center gap-2.5 font-bold text-white font-sans">
                  <span>Founder &amp; Lead Engineer</span>
                  <span className="text-zinc-600">·</span>
                  <span className="font-mono text-xs text-zinc-400">rdx.agency</span>
                </div>
              </div>

              {/* Row 3: DOMAIN */}
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-zinc-500">
                  DOMAIN
                </span>
                <div className="font-semibold text-zinc-300 text-right font-sans">
                  <span>Mobile Apps • Web Platforms • AI Agents</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom of Summary: "SOFTWARE & TOOLS" macOS Floating Dock */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/80">
            <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-500 text-left">
              SOFTWARE &amp; TOOLS
            </p>
            
            {/* Interactive macOS Dock */}
            <MacDock />
          </div>

        </div>

        {/* 3-Frame Showcase */}
        <div className="space-y-6 text-center border-t border-zinc-800/80 pt-16">
          
          {/* Centered Top Badge */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
            <span>ABOUT &amp; METHODOLOGY</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight font-manrope">
            Building Apps<span className="text-[#FF4D3D]">.</span> Designing Products<span className="text-[#FF4D3D]">.</span> Crafting Systems<span className="text-[#FF4D3D]">.</span>
          </h3>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
            Software engineer and product builder turning complex problems into calm, high-performance digital products. From architecture to production — obsessed with clarity, speed, and precision.
          </p>

          {/* 3 Minimalist Rounded Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            
            {/* FRAME 1: System Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[32px] bg-zinc-950/90 border border-zinc-800/90 p-7 sm:p-8 flex flex-col justify-between h-[340px] sm:h-[380px] shadow-2xl hover:border-[#FF4D3D]/50 hover:shadow-[0_0_25px_rgba(255,77,61,0.2)] hover:bg-zinc-900/60 transition-all duration-300 group">
                  
                  {/* Frame Header */}
                  <div className="space-y-2 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-center gap-1.5">
                      <span>FRAME 1</span>
                    </span>
                    <h4 className="text-xl font-bold text-white font-manrope">Backend &amp; Architecture</h4>
                  </div>

                  {/* Frame Visual Preview */}
                  <div className="my-auto p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>ENGINEERING DISCIPLINE</span>
                      <span className="text-emerald-400 font-bold">STABLE</span>
                    </div>
                    <p className="text-xs font-medium text-zinc-300 leading-snug font-sans">
                      Java Spring Boot, relational PostgreSQL, database indexing, and strict token authorization.
                    </p>
                    <div className="flex gap-1.5 pt-1 text-[10px] font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Java 21</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">SQL</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">JWT</span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 text-center">
                    Resilient Data Models
                  </p>

                </div>
              </TiltCard>
            </motion.div>

            {/* FRAME 2: Frontend & Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[32px] bg-zinc-950/90 border border-zinc-800/90 p-7 sm:p-8 flex flex-col justify-between h-[340px] sm:h-[380px] shadow-2xl hover:border-[#FF4D3D]/60 hover:shadow-[0_0_25px_rgba(255,77,61,0.25)] hover:bg-zinc-900/60 transition-all duration-300 group">
                  
                  <div className="space-y-2 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-center gap-1.5">
                      <span>FRAME 2</span>
                    </span>
                    <h4 className="text-xl font-bold text-white font-manrope">UI/UX &amp; Mobile Apps</h4>
                  </div>

                  <div className="my-auto p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>CONVERSION PSYCHOLOGY</span>
                      <span className="text-[#FF4D3D] font-bold">FLUID</span>
                    </div>
                    <p className="text-xs font-medium text-zinc-300 leading-snug font-dmsans">
                      React 19, TypeScript, React Native, micro-animations, and sub-second responsive viewport scaling.
                    </p>
                    <div className="flex gap-1.5 pt-1 text-[10px] font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">React 19</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">iOS/Android</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Tailwind</span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 text-center">
                    High-Converting Products
                  </p>

                </div>
              </TiltCard>
            </motion.div>

            {/* FRAME 3: AI & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[32px] bg-zinc-950/90 border border-zinc-800/90 p-7 sm:p-8 flex flex-col justify-between h-[340px] sm:h-[380px] shadow-2xl hover:border-[#FF4D3D]/50 hover:shadow-[0_0_25px_rgba(255,77,61,0.2)] hover:bg-zinc-900/60 transition-all duration-300 group">
                  
                  <div className="space-y-2 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-center gap-1.5">
                      <span>FRAME 3</span>
                    </span>
                    <h4 className="text-xl font-bold text-white font-manrope">AI &amp; Autonomous Agents</h4>
                  </div>

                  <div className="my-auto p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>INTELLIGENT PIPELINES</span>
                      <span className="text-[#FF4D3D] font-bold">SMART</span>
                    </div>
                    <p className="text-xs font-medium text-zinc-300 leading-snug font-dmsans">
                      Trained RAG knowledge bases, 24/7 WhatsApp customer bots, and webhook CRM synchronization.
                    </p>
                    <div className="flex gap-1.5 pt-1 text-[10px] font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Gemini</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">RAG</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Webhooks</span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 text-center">
                    Automated Growth
                  </p>

                </div>
              </TiltCard>
            </motion.div>

          </div>

        </div>

        {/* Client Logos Bar */}
        <div className="text-center space-y-6 pt-4 border-t border-zinc-800/80">
          <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-500">
            TRUSTED BY AMBITIOUS BUSINESSES &amp; CLIENTS
          </p>

          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap opacity-65 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, idx) => (
              <span
                key={idx}
                className={`text-sm sm:text-base text-zinc-400 hover:text-[#FF4D3D] transition-colors cursor-default select-none ${client.font}`}
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>

        {/* "Little about myself" Banner with Bold Stats */}
        <div className="border-t border-b border-zinc-800/80 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story Bio Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FF4D3D]">
                KNOW ME
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-manrope italic">
                Little about myself<span className="text-[#FF4D3D]">.</span>
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal font-dmsans">
                <strong className="text-white">I'm Rohith</strong>. I started in engineering, moved into building high-converting digital products and full-stack systems, giving me a distinct instinct — less <em>"make it generic,"</em> more <strong className="text-[#FF4D3D]">"will this actually convert, perform with zero lag, and deliver real business ROI?"</strong>
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-medium text-zinc-500 font-mono">
                <span>Namakkal, Tamil Nadu, India</span>
                <span className="text-zinc-700">/</span>
                <span className="text-white font-bold">Available for Projects</span>
              </div>
            </div>

            {/* Bold Stats Column */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8">
              
              <div className="space-y-1.5">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-manrope italic leading-none">
                  03
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-zinc-500 leading-tight tracking-wider">
                  Years In<br />Full-Stack
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-manrope italic leading-none">
                  15+
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-zinc-500 leading-tight tracking-wider">
                  Projects<br />Delivered
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-manrope italic leading-none">
                  100%
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-zinc-500 leading-tight tracking-wider">
                  Code &amp; IP<br />Ownership
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Technical Stack Matrix */}
        <div className="space-y-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 font-mono">
              Production Architecture &amp; Engineering Standards
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-manrope mt-1">
              Production-grade technologies we employ<span className="text-[#FF4D3D]">.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStackData.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015} className="h-full">
                  <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-2xl hover:border-[#FF4D3D]/50 hover:bg-zinc-900/60 transition-all duration-300 space-y-3 h-full cursor-default flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#FF4D3D] transition-colors uppercase tracking-wider font-manrope">
                        {category.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1.5">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                      {category.skills.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-medium text-zinc-300 hover:border-[#FF4D3D]/50 hover:text-[#FF4D3D] transition-colors cursor-default"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
