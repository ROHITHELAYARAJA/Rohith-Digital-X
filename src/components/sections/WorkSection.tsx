import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { projectsData, ProjectItem } from "@/data/projects"
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal"
import { DeviceMockup } from "@/components/ui/device-mockup"
import { ArrowUpRight, Layers, Sparkles } from "lucide-react"

interface WorkSectionProps {
  onDiscussSimilar?: (projectTitle: string) => void
}

interface StackedCardItem {
  id: string
  title: string
  brandName: string
  tagline: string
  tags: string[]
  description: string
  deviceType: "laptop" | "phone"
  variant: "carepulse" | "novamarket" | "servicelink" | "securecore" | "agentx"
  fullProject: ProjectItem
}

const STACKED_PROJECTS: StackedCardItem[] = [
  {
    id: "healthcare-portal",
    brandName: "CarePulse",
    title: "Healthcare Clinic & Patient Appointment Engine",
    tagline: "CLINIC & DOCTOR APPOINTMENTS",
    tags: ["WEB DEVELOPMENT", "PATIENT PORTAL", "WHATSAPP SYNC", "CALENDAR ENGINE"],
    description:
      "Custom high-speed patient scheduling and private clinic platform designed to eliminate no-shows with instant WhatsApp and SMS confirmation webhooks.",
    deviceType: "laptop",
    variant: "carepulse",
    fullProject: projectsData[0],
  },
  {
    id: "retail-storefront",
    brandName: "NovaMarket",
    title: "Local Retail & Supermarket Catalog Platform",
    tagline: "E-COMMERCE & LOCAL RETAIL",
    tags: ["WEB DEVELOPMENT", "LOCAL BRAND", "E-COMMERCE", "1-CLICK WHATSAPP CART"],
    description:
      "Lightweight, ultra-responsive digital storefront for retail shops and supermarkets. Features sub-second product search and direct-to-owner WhatsApp cart checkout.",
    deviceType: "laptop",
    variant: "novamarket",
    fullProject: projectsData[1],
  },
  {
    id: "field-service-app",
    brandName: "ServiceLink",
    title: "On-Demand Field Technician & Dispatch Mobile App",
    tagline: "NATIVE MOBILE APPS",
    tags: ["REACT NATIVE", "JOB DISPATCH", "IOS & ANDROID", "INVOICE GENERATION"],
    description:
      "Dual-interface native mobile application for home services and field operations. Includes real-time technician GPS tracking, dispatch queue, and instant billing.",
    deviceType: "phone",
    variant: "servicelink",
    fullProject: projectsData[2],
  },
  {
    id: "spring-enterprise-auth",
    brandName: "SecureCore",
    title: "Enterprise Auth Gateway & Role-Based API Infrastructure",
    tagline: "CLOUD & BACKEND ARCHITECTURE",
    tags: ["JAVA SPRING BOOT", "JWT SECURITY", "POSTGRESQL", "HIGH CONCURRENCY"],
    description:
      "Production-grade backend authentication and microservices gateway. Features Ed25519 token rotation, RBAC role hierarchies, and sub-20ms database queries.",
    deviceType: "laptop",
    variant: "securecore",
    fullProject: projectsData[3],
  },
  {
    id: "ai-lead-assistant",
    brandName: "AgentX",
    title: "24/7 AI Lead Qualification & Customer Support Agent",
    tagline: "AI AUTOMATION & RAG",
    tags: ["AI AUTOMATION", "GEMINI / OPENAI", "RAG PIPELINE", "LEAD CAPTURE"],
    description:
      "Trained conversational AI agent embedded on client websites and WhatsApp. Qualifies incoming leads, answers complex FAQs with RAG precision, and syncs directly to CRM.",
    deviceType: "laptop",
    variant: "agentx",
    fullProject: projectsData[4],
  },
]

// Single Card with Scroll Stacking in Luxury Dark Theme
const StackedCard: React.FC<{
  card: StackedCardItem
  index: number
  total?: number
  onOpenModal: (project: ProjectItem) => void
}> = ({ card, index, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="sticky top-24 sm:top-28 mb-8 sm:mb-12"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        className="relative rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-zinc-800 bg-zinc-900/95 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-all duration-300 overflow-hidden"
      >
        {/* Subtle decorative watermark */}
        <div className="absolute top-4 right-8 font-trench text-[90px] sm:text-[140px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
          0{index + 1}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Project Details */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Tagline / Categories with Diamond Separators */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-[10px] sm:text-xs font-pilcrow font-bold uppercase tracking-wider text-zinc-400">
              {card.tags.map((tag, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span className="hover:text-white transition-colors">{tag}</span>
                  {tIdx < card.tags.length - 1 && (
                    <span className="text-[#FFAE00] font-black">✦</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Brand Title with Amber Period */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-manrope">
                {card.brandName}
                <span className="text-[#FFAE00]">.</span>
              </h3>
              <p className="text-sm sm:text-base font-bold text-zinc-300 mt-1 font-playfair">
                {card.title}
              </p>
            </div>

            {/* Description Body */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-normal font-dmsans">
              {card.description}
            </p>

            {/* Key Capabilities Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {card.fullProject.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => onOpenModal(card.fullProject)}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-zinc-950 font-manrope font-extrabold text-xs sm:text-sm shadow-md hover:bg-[#FFAE00] hover:text-black transition-all duration-300 group/btn cursor-pointer active:scale-95"
              >
                <span>PREVIEW THE UI</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 text-zinc-950 group-hover/btn:text-black" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D Device Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center pt-4 lg:pt-0">
            <div
              onClick={() => onOpenModal(card.fullProject)}
              className="cursor-pointer w-full hover:scale-[1.02] transition-transform duration-300"
            >
              <DeviceMockup type={card.deviceType} variant={card.variant} />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onDiscussSimilar }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "ALL", count: STACKED_PROJECTS.length },
    { id: "web", label: "WEB DEVELOPMENT", count: 3 },
    { id: "mobile", label: "MOBILE APPLICATIONS", count: 2 },
    { id: "ai", label: "AI AUTOMATION", count: 2 },
  ]

  const filteredProjects = STACKED_PROJECTS.filter((p) => {
    if (activeCategory === "all") return true
    if (activeCategory === "web") return p.tags.includes("WEB DEVELOPMENT") || p.tags.includes("E-COMMERCE")
    if (activeCategory === "mobile") return p.deviceType === "phone" || p.tags.includes("IOS & ANDROID")
    if (activeCategory === "ai") return p.tags.includes("AI AUTOMATION")
    return true
  })

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="work" className="py-16 sm:py-24 bg-[#070708] text-white border-t border-zinc-800/80 relative">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-xs"
          >
            <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-400">
              PROVEN CLIENT TRACK RECORD
            </span>
          </motion.div>

          {/* High-Impact Headline with Playfair Display Italic Contrast */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.08] font-manrope"
          >
            Engineered for <span className="font-playfair italic font-medium text-[#FFAE00]">scale</span> and measurable growth<span className="text-[#FFAE00]">.</span>
          </motion.h2>

          {/* Clean Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed font-dmsans"
          >
            From high-conversion e-commerce platforms to cross-platform mobile apps and autonomous AI agents. Real systems driving enterprise revenue.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer select-none flex items-center gap-2 border ${
                    isActive
                      ? "bg-white text-zinc-950 border-white shadow-md font-extrabold"
                      : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? "bg-zinc-200 text-zinc-900 font-bold" : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* Stacked Cards Stream */}
        <div className="relative pt-4 sm:pt-6">
          {filteredProjects.map((card, index) => (
            <StackedCard
              key={card.id}
              card={card}
              index={index}
              total={filteredProjects.length}
              onOpenModal={handleOpenProject}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProject(null)
        }}
        onDiscussSimilar={onDiscussSimilar}
      />
    </section>
  )
}
