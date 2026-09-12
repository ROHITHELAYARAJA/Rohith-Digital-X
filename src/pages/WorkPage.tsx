import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Sparkles, Filter, CheckCircle2, Layers, Zap } from "lucide-react"
import { useNavigation } from "@/context/NavigationContext"
import { projectsData, ProjectItem, ProjectCategory } from "@/data/projects"
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal"
import { HeyDigitalButton } from "@/components/ui/HeyDigitalButton"
import { WireframePolyhedronCanvas } from "@/components/visual/WireframePolyhedronCanvas"

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
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#FFAE00] selection:text-black">
      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 border-b border-zinc-800/80 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* 3D Wireframe Canvas */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-75 pointer-events-none hidden lg:block">
          <WireframePolyhedronCanvas
            polyhedron="icosahedron"
            size={180}
            lineColor="rgba(255, 174, 0, 0.45)"
            glowColor="rgba(255, 174, 0, 0.15)"
          />
        </div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-start gap-6 sm:gap-10">
            {/* Left Vertical Indicator */}
            <div className="hidden sm:flex flex-col items-center gap-4 pt-2">
              <span className="vertical-side-label text-[11px] font-mono font-bold tracking-[0.25em] text-[#FFAE00]">
                WORK
              </span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFAE00] to-transparent" />
            </div>

            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#FFAE00]" />
                <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
                  SHIPPED ARCHITECTURES &amp; CLIENT SYSTEMS
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-display">
                Digital systems we've{" "}
                <span className="font-boska italic font-light text-[#FFAE00]">
                  shipped
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl font-sans">
                Every project is crafted with obsessive attention to sub-second load times, fluid interactions, and high-converting user journeys.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
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
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer select-none ${
                        isActive
                          ? "bg-[#FFAE00] text-black shadow-lg scale-105"
                          : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Hero Card (JSBuilders) */}
      <section className="py-12 bg-[#0C0C0E] border-b border-zinc-800">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-zinc-800 hover:border-[#FFAE00]/60 transition-all shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-[10px] font-mono font-black text-[#FFAE00]">
                    ★ FEATURED CASE STUDY
                  </span>
                  <span className="text-xs font-mono text-zinc-400">100/100 LIGHTHOUSE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-snug">
                  JSBuilders: Civil Engineering &amp; High-Converting Architectural Platform
                </h2>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                  Replaced an outdated 4.8s WordPress site with a custom Vite/React architecture that boots in 0.32s, delivers sub-second WhatsApp quote routing, and boosted client inquiries by +340%.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="border-l-2 border-[#FFAE00] pl-3">
                    <div className="text-xl font-bold font-mono text-[#FFAE00]">+340%</div>
                    <div className="text-[11px] text-zinc-500">Inquiry Volume</div>
                  </div>
                  <div className="border-l-2 border-[#FFAE00] pl-3">
                    <div className="text-xl font-bold font-mono text-white">0.32s</div>
                    <div className="text-[11px] text-zinc-500">Page Load Time</div>
                  </div>
                  <div className="border-l-2 border-[#FFAE00] pl-3">
                    <div className="text-xl font-bold font-mono text-white">100/100</div>
                    <div className="text-[11px] text-zinc-500">Core Web Vitals</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <HeyDigitalButton
                    variant="amber"
                    size="md"
                    onClick={() => navigate("case-study-web")}
                  >
                    Read Full Case Study ↗
                  </HeyDigitalButton>

                  <button
                    onClick={() => handleDiscussSimilar("JSBuilders Web Experience")}
                    className="px-5 py-2.5 rounded-full border border-zinc-700 hover:border-white text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Build Something Similar
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">jsbuilders.in / lighthouse audit</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-zinc-300">
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span>Performance</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span>Accessibility</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span>Best Practices</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span>SEO</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid (White Background for Rhythm Contrast) */}
      <section className="py-20 bg-white text-zinc-950">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FFAE00]">
                PORTFOLIO CATALOG
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight font-display mt-2">
                Production-ready systems.
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md">
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
                  className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#FFAE00] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.timelineEstimate}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-950 group-hover:text-[#FFAE00] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono font-semibold text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono font-semibold text-zinc-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-200/80 mt-6 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-[#FFAE00] transition-colors">
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
      <section className="py-16 bg-[#070708] border-t border-zinc-800 text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Have a project in mind?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Direct access to founder Rohith E with zero agency bureaucracy. Let's build something exceptional together.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="amber" size="lg" onClick={() => navigate("contact")}>
              Book a 30-Min Discovery Sprint ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
