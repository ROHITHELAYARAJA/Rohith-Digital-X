import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Filter, CheckCircle2, Layers, Zap } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { projectsData, ProjectItem, ProjectCategory } from "@/data/projects"
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"

export const WorkPage: React.FC = () => {
  const { setContactPrefill, navigate } = useNavigation()
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all")
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)

  const handleDiscussSimilar = (projectTitle: string) => {
    setContactPrefill({
      service: projectTitle,
      description: `I am interested in building a high-velocity solution similar to "${projectTitle}". Let's discuss architecture and timeline.`,
    })
    navigate("contact", "contact")
  }

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "all") return true
    return project.category === selectedCategory
  })

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white">
      {/* Hero Header Section - Replica of HomePage Architecture on Black */}
      <section className="relative pt-24 sm:pt-36 pb-10 sm:pb-16 border-b border-zinc-800/80 overflow-hidden bg-[#070708]">
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[340px] sm:h-[460px] bg-gradient-to-b from-zinc-800/25 via-[#FF4D3D]/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4 sm:space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-manrope text-balance max-w-4xl mx-auto"
          >
            Digital systems we've{" "}
            <span className="font-playfair italic font-medium text-[#FF4D3D] inline-block px-1">
              engineered to scale
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans"
          >
            Every project is built with obsessive attention to sub-second speed, clean architecture, and direct founder accountability.
          </motion.p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "websites", label: "Web Applications" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "backend", label: "Backend Systems" },
              { id: "ai", label: "AI & Automation" },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as ProjectCategory)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold font-sans transition-all cursor-pointer select-none ${
                    isActive
                      ? "bg-[#FF4D3D] text-white shadow-[0_0_20px_rgba(255,77,61,0.35)] scale-105 border border-[#FF4D3D]"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Study Hero Card */}
      <section className="py-10 sm:py-14 bg-[#090A0D] border-b border-zinc-800/80">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-4.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border border-zinc-800 hover:border-[#FF4D3D] transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-3xl font-bold text-white font-sans tracking-tight leading-snug">
                  JSBuilders: Civil Engineering &amp; High-Converting Architectural Platform
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl font-dmsans">
                  Replaced an outdated 4.8s WordPress site with a custom Vite/React architecture that boots in 0.32s, delivers sub-second WhatsApp quote routing, and boosted client inquiries by +340%.
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 sm:pt-2">
                  <div className="border-l-2 border-[#FF4D3D] pl-2 sm:pl-3">
                    <div className="text-base sm:text-xl font-bold font-mono text-[#FF4D3D]">+340%</div>
                    <div className="text-[9px] sm:text-[11px] text-zinc-500 font-dmsans">Inquiries</div>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-2 sm:pl-3">
                    <div className="text-base sm:text-xl font-bold font-mono text-white">0.32s</div>
                    <div className="text-[9px] sm:text-[11px] text-zinc-500 font-dmsans">Load Time</div>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-2 sm:pl-3">
                    <div className="text-base sm:text-xl font-bold font-mono text-white">100/100</div>
                    <div className="text-[9px] sm:text-[11px] text-zinc-500 font-dmsans">Core Vitals</div>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <HeyDigitalButton
                    variant="orange"
                    size="md"
                    onClick={() => navigate("case-study-web")}
                  >
                    Read Full Case Study ↗
                  </HeyDigitalButton>

                  <button
                    onClick={() => handleDiscussSimilar("JSBuilders Web Experience")}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-zinc-700 hover:border-white text-white text-[11px] sm:text-xs font-bold transition-all cursor-pointer font-sans"
                  >
                    Build Something Similar
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">jsbuilders.in / lighthouse audit</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-zinc-300">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Performance</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Accessibility</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Best Practices</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">SEO Score</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid (Deep Dark Background with Balanced Sky/Orange/Purple Accents) */}
      <section className="py-14 sm:py-18 bg-[#070708] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FF4D3D]">
                PORTFOLIO CATALOG
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-manrope mt-2">
                Production-ready systems.
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md font-dmsans">
              Click any project to inspect full architectural specifications, key features, and technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveProject(project)}
                  className="p-6 sm:p-7 rounded-3xl bg-zinc-950/80 border border-zinc-800 transition-all duration-300 cursor-pointer flex flex-col justify-between group backdrop-blur-sm hover:border-[#FF4D3D] hover:shadow-[0_0_30px_rgba(255,77,61,0.22)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF4D3D]/10 text-[#FF4D3D] border border-[#FF4D3D]/25">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.timelineEstimate}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF4D3D] transition-colors leading-snug font-sans tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-dmsans">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-semibold text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-semibold text-zinc-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between text-xs font-bold text-zinc-300 group-hover:text-[#FF4D3D] transition-colors">
                    <span>Inspect Architecture</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        onDiscussSimilar={handleDiscussSimilar}
      />

      {/* Bottom CTA */}
      <section className="py-14 sm:py-18 bg-[#090A0D] border-t border-zinc-800 text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-manrope">
            Have a project in mind?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-dmsans">
            Direct access to founder Rohith E with zero agency bureaucracy. Let's build something exceptional together.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="orange" size="lg" onClick={() => navigate("contact")}>
              Book a 30-Min Discovery Sprint ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
