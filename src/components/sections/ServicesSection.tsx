import React, { useState } from "react"
import { motion } from "framer-motion"
import { servicesData, ServiceItem } from "@/data/services"
import { ServiceCard } from "./ServiceCard"
import { ServiceDetailModal } from "@/components/modals/ServiceDetailModal"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceId: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenDetails = (service: ServiceItem) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-250 text-xs font-semibold text-zinc-700 shadow-xs"
            >
              <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-zinc-600">
                FULL-STACK CAPABILITIES
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-[1.08] font-manrope"
            >
              End-to-end solutions built for{" "}
              <span className="font-playfair italic font-medium text-[#FF3B30]">
                revenue
              </span>{" "}
              and speed.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal font-dmsans"
            >
              Whether you are launching a high-converting web platform, a native iOS/Android application, or an autonomous AI agent, we deliver modular, scalable architecture with zero bloat.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="gap-2 text-xs font-bold bg-white hover:border-zinc-950 shadow-xs hover:scale-105 transition-all"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </motion.div>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectServiceForInquiry={onSelectServiceForInquiry}
      />
    </section>
  )
}
