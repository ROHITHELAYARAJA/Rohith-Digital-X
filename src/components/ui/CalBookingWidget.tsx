import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  MessageSquare,
  User,
  Mail,
  Phone,
  FileText,
  CalendarPlus,
  Download,
  Check,
} from "lucide-react"

interface CalBookingWidgetProps {
  className?: string
  calLink?: string
  onSuccess?: (bookingDetails: {
    date: string
    time: string
    name: string
    email: string
    phone: string
    projectType: string
    notes: string
  }) => void
}

const TIME_SLOTS_12H = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "3:00 PM",
  "4:30 PM",
]

const TIME_SLOTS_24H = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "15:00",
  "16:30",
]

const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const PROJECT_TYPES = [
  "High-Speed Web App",
  "Mobile iOS & Android",
  "AI & Workflow Automation",
  "Design & Brand Sprint",
  "Consultation / Scope Review",
]

const getOrdinalSuffix = (n: number): string => {
  const s = ["th", "st", "nd", "rd"]
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

export const CalBookingWidget: React.FC<CalBookingWidgetProps> = ({
  className = "",
  calLink = "https://cal.com/rohith-e-3130/secret",
  onSuccess,
}) => {
  const [currentStep, setCurrentStep] = useState<"calendar" | "form" | "confirmed">("calendar")

  // Starting reference: September 2026
  const initialDate = useMemo(() => new Date(2026, 8, 1), [])
  const [viewDate, setViewDate] = useState<Date>(initialDate)
  const [selectedDay, setSelectedDay] = useState<number>(14)
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM")
  const [is24Hour, setIs24Hour] = useState<boolean>(false)

  // Booking Form State
  const [guestName, setGuestName] = useState("")
  const [guestEmail, setGuestEmail] = useState("")
  const [guestPhone, setGuestPhone] = useState("")
  const [projectType, setProjectType] = useState("High-Speed Web App")
  const [guestNotes, setGuestNotes] = useState("")
  const [showAddGuests, setShowAddGuests] = useState(false)
  const [additionalGuest, setAdditionalGuest] = useState("")
  const [formError, setFormError] = useState("")

  // Dynamic Calendar Calculations
  const currentYear = viewDate.getFullYear()
  const currentMonthIndex = viewDate.getMonth()
  const currentMonthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  // Start day of the week (0 = Sunday, 1 = Monday, ...)
  const startDayOffset = new Date(currentYear, currentMonthIndex, 1).getDay()
  // Exact days in this month
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate()

  // Selected date object to accurately compute real weekday name
  const selectedDateObj = useMemo(() => {
    const validDay = Math.min(Math.max(selectedDay, 1), daysInMonth)
    return new Date(currentYear, currentMonthIndex, validDay)
  }, [currentYear, currentMonthIndex, selectedDay, daysInMonth])

  const selectedWeekdayShort = selectedDateObj.toLocaleDateString("en-US", { weekday: "short" })
  const selectedWeekdayLong = selectedDateObj.toLocaleDateString("en-US", { weekday: "long" })
  const selectedMonthShort = selectedDateObj.toLocaleDateString("en-US", { month: "short" })
  const selectedDayOrdinal = getOrdinalSuffix(selectedDay)

  const canGoBack = viewDate > initialDate

  const handlePrevMonth = () => {
    if (!canGoBack) return
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
    setSelectedDay(1)
  }

  const handleNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
    setSelectedDay(1)
  }

  const handleSelectDay = (day: number) => {
    setSelectedDay(day)
  }

  const handleProceedToForm = () => {
    setCurrentStep("form")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!guestName.trim()) {
      setFormError("Please enter your name")
      return
    }
    if (!guestEmail.trim() || !guestEmail.includes("@")) {
      setFormError("Please enter a valid business email")
      return
    }

    setFormError("")
    setCurrentStep("confirmed")

    if (onSuccess) {
      onSuccess({
        date: `${selectedWeekdayLong}, ${selectedMonthShort} ${selectedDayOrdinal}, ${currentYear}`,
        time: selectedTime,
        name: guestName,
        email: guestEmail,
        phone: guestPhone,
        projectType,
        notes: guestNotes,
      })
    }
  }

  // Generate WhatsApp Direct Confirmation Link
  const generateWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hi Rohith! 👋\n\nI just scheduled a 30-min discovery sprint:\n\n` +
      `📅 Date: ${selectedWeekdayLong}, ${selectedMonthShort} ${selectedDayOrdinal}, ${currentYear}\n` +
      `⏰ Time: ${selectedTime} IST\n` +
      `👤 Name: ${guestName}\n` +
      `💼 Focus: ${projectType}\n` +
      (guestNotes ? `📝 Scope: ${guestNotes}\n\n` : `\n`) +
      `Looking forward to connecting on Google Meet!`
    )
    return `https://wa.me/919655483130?text=${text}`
  }

  // Generate Google Calendar Link
  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`30-Min Discovery Sprint: Rohith E × ${guestName || "Client"}`)
    const details = encodeURIComponent(
      `Discovery sprint for ${guestName} (${guestEmail}) with founder Rohith E.\n\n` +
      `Focus: ${projectType}\n` +
      `Notes: ${guestNotes || "None provided"}\n\n` +
      `Direct Contact: +91 9655483130 | e.rohith3130@gmail.com\n` +
      `Cal.com: ${calLink}`
    )
    const location = encodeURIComponent("Google Meet / Video Call")
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`
  }

  // Download .ICS calendar file
  const handleDownloadICS = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Rohith Digital X//Discovery Sprint//EN",
      "BEGIN:VEVENT",
      `SUMMARY:30-min Technical Discovery with Rohith E`,
      `DESCRIPTION:Discovery sprint for ${guestName} (${projectType}). Notes: ${guestNotes}`,
      `LOCATION:Google Meet / Video Call`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" })
    const link = document.createElement("a")
    link.href = window.URL.createObjectURL(blob)
    link.setAttribute("download", `rohith-discovery-${selectedDay}-${selectedMonthShort}.ics`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const activeTimeSlots = is24Hour ? TIME_SLOTS_24H : TIME_SLOTS_12H

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-2xl sm:rounded-[2rem] bg-[#0C0D11] border border-zinc-800/90 text-white shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden font-sans ${className}`}>
      <AnimatePresence mode="wait">
          {/* STEP 1: Interactive Calendar & Time Slots */}
          {currentStep === "calendar" && (
            <motion.div
              key="calendar-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800"
            >
              {/* Left Info Panel */}
              <div className="lg:col-span-4 p-4.5 sm:p-8 space-y-4 sm:space-y-6 bg-[#090A0D]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/rdx-r-logo.png" alt="Rohith Digital X" className="h-6 w-6 sm:h-7 sm:w-7 object-contain invert" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white font-manrope">
                      Rohith Digital X
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium italic font-dmsans">Founder: Rohith E</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    30 min meeting
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 sm:mt-2 leading-relaxed font-dmsans">
                    Fast, no-pitch technical discovery call. We review your architecture, scope, budget, and timeline.
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2 text-xs text-zinc-400 font-medium font-dmsans">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-zinc-500" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="h-4 w-4 text-zinc-500" />
                    <span>Google Meet / Cal Video</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="h-4 w-4 text-zinc-500" />
                    <span>Asia/Kolkata (IST)</span>
                  </div>
                </div>
              </div>

              {/* Center Calendar View */}
              <div className="lg:col-span-5 p-4.5 sm:p-8 space-y-4 sm:space-y-5 bg-[#0C0D11]">
                {/* Month Navigation Header */}
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight tabular-nums font-manrope">
                    {currentMonthLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevMonth}
                      disabled={!canGoBack}
                      className={`p-1.5 sm:p-2 rounded-lg border border-zinc-800 transition-colors ${
                        canGoBack
                          ? "hover:bg-zinc-800 text-zinc-300 cursor-pointer"
                          : "opacity-30 text-zinc-600 cursor-not-allowed"
                      }`}
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-1.5 sm:p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 text-zinc-300 transition-colors cursor-pointer"
                      aria-label="Next month"
                    >
                      <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>

                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {DAYS_OF_WEEK.map((day) => (
                    <div
                      key={day}
                      className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-500 py-0.5 sm:py-1"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                  {/* Empty Offset Slots */}
                  {Array.from({ length: startDayOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-8 sm:h-10" />
                  ))}

                  {/* Month Day Buttons */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1
                    const isSelected = day === selectedDay

                    return (
                      <motion.button
                        key={`day-${day}`}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSelectDay(day)}
                        className={`
                          relative h-8 sm:h-10 w-full rounded-full text-xs font-bold font-manrope flex items-center justify-center transition-all cursor-pointer
                          ${
                            isSelected
                              ? "bg-white text-black font-bold shadow-[0_0_16px_rgba(255,255,255,0.15)] scale-105 z-10"
                              : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                          }
                        `}
                      >
                        <span>{day}</span>
                      </motion.button>
                    )
                  })}
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 font-mono">
                  <span>Timezone: Asia/Kolkata</span>
                  <span>Slots updated real-time</span>
                </div>
              </div>

              {/* Right Time Slots Panel */}
              <div className="lg:col-span-3 p-4.5 sm:p-8 flex flex-col justify-between space-y-4 bg-[#090A0D]">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header with Selected Weekday & 12h/24h Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-white font-manrope">
                      {selectedWeekdayShort} {selectedDayOrdinal}
                    </div>

                    <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono">
                      <button
                        onClick={() => setIs24Hour(false)}
                        className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                          !is24Hour ? "bg-white text-black font-bold" : "text-zinc-400"
                        }`}
                      >
                        12h
                      </button>
                      <button
                        onClick={() => setIs24Hour(true)}
                        className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                          is24Hour ? "bg-white text-black font-bold" : "text-zinc-400"
                        }`}
                      >
                        24h
                      </button>
                    </div>
                  </div>

                  {/* Time Slots List with Smooth Scroll */}
                  <div className="max-h-[250px] sm:max-h-[300px] overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
                    {activeTimeSlots.map((time) => {
                      const isSelected = selectedTime === time

                      return (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            w-full py-2 sm:py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer
                            ${
                              isSelected
                                ? "bg-white text-black font-bold border border-white/20"
                                : "bg-zinc-900/90 text-zinc-300 hover:bg-zinc-800 border border-zinc-800/80"
                            }
                          `}
                        >
                          <span>{time}</span>
                          {isSelected && <Check className="h-3.5 w-3.5 text-black" />}
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* Next Step Action Button - Professional White */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleProceedToForm}
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white hover:bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer font-manrope"
                >
                  <span>Next: Details</span>
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Client Project Intake Details */}
          {currentStep === "form" && (
            <motion.div
              key="form-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 space-y-6 max-w-2xl mx-auto"
            >
              {/* Back Link */}
              <button
                type="button"
                onClick={() => setCurrentStep("calendar")}
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Change Date &amp; Time</span>
              </button>

              {/* Header */}
              <div className="space-y-1.5 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-manrope">
                  Enter Your Discovery Details
                </h3>
                <p className="text-xs text-zinc-400 font-medium italic font-dmsans">
                  {selectedWeekdayLong}, {selectedMonthShort} {selectedDayOrdinal}, {currentYear} at {selectedTime} IST
                </p>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rohith / Client"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Business Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@company.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-zinc-500" />
                    <span>WhatsApp / Phone (For Meeting Link)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 96554 83130"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                {/* Project Focus Selection */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-zinc-300">Project Focus</label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          projectType === type
                            ? "bg-white text-black font-bold"
                            : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 border border-zinc-700/60"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-zinc-500" />
                    <span>Project brief / notes (optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share website link, goals, target deadline, or current tech stack..."
                    value={guestNotes}
                    onChange={(e) => setGuestNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                {/* Optional Add Guests */}
                {!showAddGuests ? (
                  <button
                    type="button"
                    onClick={() => setShowAddGuests(true)}
                    className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span>+ Add colleague / team member</span>
                  </button>
                ) : (
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs text-zinc-400 font-medium">Team member email</label>
                    <input
                      type="email"
                      placeholder="teammate@company.com"
                      value={additionalGuest}
                      onChange={(e) => setAdditionalGuest(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}

                {formError && (
                  <p className="text-xs text-red-400 font-semibold text-left">{formError}</p>
                )}

                <p className="text-[11px] text-zinc-500 text-left">
                  Direct calendar invitation will be sent to your email. Zero marketing spam. Strictly technical &amp; scope discussion.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep("calendar")}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer font-manrope"
                  >
                    Confirm 30-Min Sprint →
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3: Confirmation State */}
          {currentStep === "confirmed" && (
            <motion.div
              key="confirmed-step"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 text-center space-y-6 max-w-lg mx-auto"
            >
              <div className="h-16 w-16 rounded-full bg-zinc-900 text-white flex items-center justify-center mx-auto border border-zinc-700 shadow-lg">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-manrope">
                  Meeting Scheduled!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-dmsans">
                  Calendar invite prepared for <strong className="text-white">{guestName}</strong> ({guestEmail}).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-left space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Date:</span>
                  <span className="text-white font-bold tabular-nums">
                    {selectedWeekdayLong}, {selectedMonthShort} {selectedDayOrdinal}, {currentYear}
                  </span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Time:</span>
                  <span className="text-white font-bold tabular-nums">{selectedTime} IST</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Focus:</span>
                  <span className="text-zinc-200 font-medium">{projectType}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Host:</span>
                  {/* Cleaned: Removed "(Principal)" as requested */}
                  <span className="text-white font-semibold">Rohith E</span>
                </div>
              </div>

              {/* Direct Instant Action Links */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={generateWhatsAppConfirmation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-98"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Confirm on WhatsApp with Rohith</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={generateGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-xs transition-colors"
                  >
                    <CalendarPlus className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Google Calendar</span>
                  </a>

                  <button
                    onClick={handleDownloadICS}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Download .ICS</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setCurrentStep("calendar")
                    setGuestName("")
                    setGuestEmail("")
                    setGuestPhone("")
                    setGuestNotes("")
                  }}
                  className="pt-2 text-xs text-zinc-400 hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  Schedule Another Sprint
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}
