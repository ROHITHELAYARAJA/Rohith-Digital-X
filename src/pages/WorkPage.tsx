import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Sparkles, Filter, CheckCircle2, Layers, Zap } from "lucide-react"
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
      {/* Hero Header Section */}
      <section className="relative pt-28 sm:pt-36 pb-16 border-b border-zinc-800/80 overflow-hidden bg-[#070708]">
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[340px] sm:h-[450px] bg-gradient-to-b from-purple-600/15 via-[#FF4D3D]/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-purple-300">
              SHIPPED ARCHITECTURES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-manrope max-w-4xl mx-auto text-balance">
            Digital systems we've{" "}
            <span className="font-playfair italic font-medium text-purple-400">
              shipped
            </span>
            .
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto font-dmsans">
            Every project is crafted with obsessive attention to sub-second load times, fluid micro-interactions, and high-converting user journeys.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
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
                  className={`px-4 py-2 rounded-full text-xs font-bold font-manrope transition-all cursor-pointer select-none ${
                    isActive
                      ? "bg-purple-600 text-white shadow-purple-glow scale-105"
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

      {/* Featured Case Study Hero Card (JSBuilders) */}
      <section className="py-14 bg-[#090A0D] border-b border-zinc-800/80">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border border-zinc-800 hover:border-purple-500/60 transition-all shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-[10px] font-mono font-black text-purple-300">
                    ★ FEATURED CASE STUDY
                  </span>
                  <span className="text-xs font-mono text-zinc-400">100/100 LIGHTHOUSE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-manrope leading-snug">
                  JSBuilders: Civil Engineering &amp; High-Converting Architectural Platform
                </h2>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-dmsans">
                  Replaced an outdated 4.8s WordPress site with a custom Vite/React architecture that boots in 0.32s, delivers sub-second WhatsApp quote routing, and boosted client inquiries by +340%.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="text-xl font-bold font-mono text-purple-400">+340%</div>
                    <div className="text-[11px] text-zinc-500">Inquiry Volume</div>
                  </div>
                  <div className="border-l-2 border-[#FF4D3D] pl-3">
                    <div className="text-xl font-bold font-mono text-white">0.32s</div>
                    <div className="text-[11px] text-zinc-500">Page Load Time</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="text-xl font-bold font-mono text-white">100/100</div>
                    <div className="text-[11px] text-zinc-500">Core Web Vitals</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <HeyDigitalButton
                    variant="purple"
                    size="md"
                    onClick={() => navigate("case-study-web")}
                  >
                    Read Full Case Study ↗
                  </HeyDigitalButton>

                  <button
                    onClick={() => handleDiscussSimilar("JSBuilders Web Experience")}
                    className="px-5 py-2.5 rounded-full border border-zinc-700 hover:border-white text-white text-xs font-bold transition-all cursor-pointer font-manrope"
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
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
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

      {/* Projects Grid (Deep Dark Background) */}
      <section className="py-14 sm:py-18 bg-[#070708] text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-400">
                PORTFOLIO CATALOG
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-manrope mt-2">
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
                  className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800 hover:border-purple-500/70 hover:shadow-purple-glow transition-all cursor-pointer flex flex-col justify-between group backdrop-blur-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/60">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.timelineEstimate}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors leading-snug font-manrope">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-dmsans">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-semibold text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-semibold text-zinc-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between text-xs font-bold text-zinc-300 group-hover:text-purple-400 transition-colors">
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
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-manrope">
            Have a project in mind?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-dmsans">
            Direct access to founder Rohith E with zero agency bureaucracy. Let's build something exceptional together.
          </p>
          <div className="pt-2">
            <HeyDigitalButton variant="purple" size="lg" onClick={() => navigate("contact")}>
              Book a 30-Min Discovery Sprint ↗
            </HeyDigitalButton>
          </div>
        </div>
      </section>
    </div>
  )
}
