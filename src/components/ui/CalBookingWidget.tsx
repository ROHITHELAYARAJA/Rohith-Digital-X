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
  Sparkles,
  User,
  Mail,
  Phone,
  FileText,
  CalendarPlus,
  Download,
  Check,
} from "lucide-react"

interface CalBookingWidgetProps {
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

export const CalBookingWidget: React.FC<CalBookingWidgetProps> = ({ onSuccess }) => {
  const [currentStep, setCurrentStep] = useState<"calendar" | "form" | "confirmed">("calendar")
  
  // Starting reference: September 2026 (matching system context & reference)
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

  // Exact start day of the week (0 = Sunday, 1 = Monday, ...)
  const startDayOffset = new Date(currentYear, currentMonthIndex, 1).getDay()
  // Exact days in this month (handles 28, 29, 30, 31)
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate()

  // Selected date object to accurately compute real weekday name (never hardcode "Mon"!)
  const selectedDateObj = useMemo(() => {
    const validDay = Math.min(Math.max(selectedDay, 1), daysInMonth)
    return new Date(currentYear, currentMonthIndex, validDay)
  }, [currentYear, currentMonthIndex, selectedDay, daysInMonth])

  const selectedWeekdayShort = selectedDateObj.toLocaleDateString("en-US", { weekday: "short" })
  const selectedWeekdayLong = selectedDateObj.toLocaleDateString("en-US", { weekday: "long" })
  const selectedMonthShort = selectedDateObj.toLocaleDateString("en-US", { month: "short" })
  const selectedDayOrdinal = getOrdinalSuffix(selectedDay)

  // Can navigate back only if later than initial month
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

  const handleSelectSlot = (slot: string) => {
    setSelectedTime(slot)
  }

  const handleProceedToForm = () => {
    setCurrentStep("form")
  }

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!guestName.trim()) {
      setFormError("Please enter your name")
      return
    }
    if (!guestEmail.trim() || !guestEmail.includes("@")) {
      setFormError("Please enter a valid work email")
      return
    }
    if (!guestPhone.trim() || guestPhone.length < 8) {
      setFormError("Please enter a valid phone or WhatsApp number")
      return
    }

    setFormError("")
    setCurrentStep("confirmed")

    const details = {
      date: `${selectedWeekdayShort}, ${selectedMonthShort} ${selectedDayOrdinal}, ${currentYear}`,
      time: selectedTime,
      name: guestName,
      email: guestEmail,
      phone: guestPhone,
      projectType,
      notes: guestNotes,
    }

    onSuccess?.(details)
  }

  const generateWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hi Rohith! I just scheduled a 30-min discovery sprint:\n\n` +
      `📅 Date: ${selectedWeekdayLong}, ${selectedMonthShort} ${selectedDayOrdinal}, ${currentYear}\n` +
      `⏰ Time: ${selectedTime} IST\n` +
      `👤 Name: ${guestName}\n` +
      `💼 Email: ${guestEmail}\n` +
      `📱 WhatsApp: ${guestPhone}\n` +
      `🚀 Category: ${projectType}\n` +
      `📝 Scope: ${guestNotes || "Discussion on project requirements"}`
    )
    return `https://wa.me/919655483130?text=${text}`
  }

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent("30-min Technical Discovery Sprint with Rohith E (RDX)")
    const details = encodeURIComponent(
      `Technical discovery & architecture consultation with Rohith E (Founder, Rohith Digital X).\n` +
      `Client: ${guestName} (${guestEmail})\n` +
      `Category: ${projectType}\n` +
      `Notes: ${guestNotes}\n` +
      `Google Meet / Cal Video link will be provided.`
    )
    const location = encodeURIComponent("Google Meet (Video Conference)")
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`
  }

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

  return (
    <div className="w-full max-w-4xl mx-auto rounded-[2rem] bg-[#111215] border border-zinc-800 text-white shadow-2xl overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {currentStep === "calendar" && (
          <motion.div
            key="calendar-step"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800"
          >
            {/* Left Info Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 bg-[#0E0F12]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#FFAE00] flex items-center justify-center text-zinc-950 font-black text-sm shadow-md">
                  ✋
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Rohith Digital X
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium">Rohith E (Principal)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  30 min meeting
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Fast, no-pitch technical discovery call. We review your architecture, scope, budget, and timeline.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs text-zinc-300 font-medium">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#FFAE00]" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="h-4 w-4 text-[#FFAE00]" />
                  <span>Google Meet / Cal Video</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="h-4 w-4 text-[#FFAE00]" />
                  <span>Asia/Kolkata (IST)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-400 leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#FFAE00] font-bold mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Instant Founder Direct</span>
                </div>
                Connect directly with Rohith E. No junior reps or account runarounds.
              </div>
            </div>

            {/* Center Calendar View */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-5">
              {/* Month Navigation Header */}
              <div className="flex items-center justify-between">
                <span className="text-base font-extrabold text-white tracking-tight tabular-nums">
                  {currentMonthLabel}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevMonth}
                    disabled={!canGoBack}
                    title="Previous Month"
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-300 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    title="Next Month"
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Day of Week Labels */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold tracking-wider text-zinc-400">
                {DAYS_OF_WEEK.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              {/* Day Cells Grid */}
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {/* Empty padding cells for start of month */}
                {Array.from({ length: startDayOffset }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-9 sm:h-10" />
                ))}

                {/* Days in Month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const isSelected = selectedDay === day
                  
                  // In September 2026, past days are < 12 (today is Sep 12)
                  const isPast =
                    viewDate.getFullYear() === 2026 &&
                    viewDate.getMonth() === 8 &&
                    day < 12

                  // Sunday check (0 = Sunday)
                  const dayOfWeek = new Date(currentYear, currentMonthIndex, day).getDay()
                  const isSunday = dayOfWeek === 0
                  const isAvailable = !isPast && !isSunday

                  return (
                    <button
                      key={day}
                      disabled={!isAvailable}
                      onClick={() => handleSelectDay(day)}
                      className={`
                        h-9 sm:h-10 rounded-xl text-sm font-semibold flex items-center justify-center transition-all cursor-pointer relative tabular-nums
                        ${
                          isSelected
                            ? "bg-[#FFAE00] text-zinc-950 font-black shadow-[0_0_15px_rgba(255,174,0,0.4)] scale-105 border border-[#FFAE00]"
                            : isAvailable
                            ? "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 hover:text-white border border-zinc-800/80 hover:border-[#FFAE00]/60"
                            : "text-zinc-600 bg-zinc-950/40 cursor-not-allowed border border-transparent opacity-30"
                        }
                      `}
                    >
                      <span>{day}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Available Time Slots Column */}
            <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between bg-[#0E0F12]">
              <div className="space-y-4">
                {/* Selected Day Header & 12h/24h Switch */}
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-xs font-bold text-white tabular-nums tracking-wide">
                    {selectedWeekdayShort} {selectedDayOrdinal}
                  </span>
                  
                  {/* 12h / 24h Toggle */}
                  <div className="flex items-center p-0.5 rounded-lg bg-zinc-800/80 text-[11px] font-semibold">
                    <button
                      onClick={() => setIs24Hour(false)}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        !is24Hour ? "bg-[#FFAE00] text-zinc-950 font-bold shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      12h
                    </button>
                    <button
                      onClick={() => setIs24Hour(true)}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        is24Hour ? "bg-[#FFAE00] text-zinc-950 font-bold shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      24h
                    </button>
                  </div>
                </div>

                {/* Time Slots List */}
                <div className="space-y-2 max-h-[310px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                  {(is24Hour ? TIME_SLOTS_24H : TIME_SLOTS_12H).map((slot) => {
                    const isSelected = selectedTime === slot
                    return (
                      <button
                        key={slot}
                        onClick={() => handleSelectSlot(slot)}
                        className={`
                          w-full py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer tabular-nums flex items-center justify-between
                          ${
                            isSelected
                              ? "bg-[#FFAE00] text-zinc-950 border-[#FFAE00] shadow-[0_0_15px_rgba(255,174,0,0.35)]"
                              : "border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:bg-[#FFAE00]/10 hover:border-[#FFAE00] hover:text-[#FFAE00]"
                          }
                        `}
                      >
                        <span className="mx-auto">{slot}</span>
                        {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Confirm / Next CTA button */}
              <div className="pt-4 mt-auto">
                <button
                  onClick={handleProceedToForm}
                  className="w-full py-3 px-4 rounded-xl bg-[#FFAE00] hover:bg-[#FFB800] text-zinc-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Next: Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Intake Details Form */}
        {currentStep === "form" && (
          <motion.div
            key="form-step"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-6 sm:p-10 space-y-6"
          >
            {/* Header / Back */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <button
                onClick={() => setCurrentStep("calendar")}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer tabular-nums"
              >
                <ArrowLeft className="h-4 w-4 text-[#FFAE00]" />
                <span>
                  Change Slot ({selectedWeekdayShort}, {selectedMonthShort} {selectedDayOrdinal} • {selectedTime})
                </span>
              </button>
              <div className="text-xs font-bold text-[#FFAE00]">
                Step 2 of 2
              </div>
            </div>

            <form onSubmit={handleConfirmBooking} className="space-y-4 max-w-xl mx-auto">
              {/* Selected Slot Summary Pill */}
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CalendarIcon className="h-4 w-4 text-[#FFAE00]" />
                  <span className="font-bold text-white">
                    {selectedWeekdayLong}, {selectedMonthShort} {selectedDayOrdinal}, {currentYear}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#FFAE00] font-bold">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{selectedTime} IST</span>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>Your full name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Karthik Raja"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFAE00] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>Work email *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFAE00] transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>WhatsApp / Phone number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFAE00] transition-colors tabular-nums"
                />
              </div>

              {/* Project Type Chips */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-zinc-300">
                  Primary requirement / focus
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        projectType === type
                          ? "bg-[#FFAE00] text-zinc-950 font-bold shadow-sm"
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
                  <FileText className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>Project brief / notes (optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Share website link, goals, target deadline, or current tech stack..."
                  value={guestNotes}
                  onChange={(e) => setGuestNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFAE00] transition-colors resize-none"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-[#FFAE00]"
                  />
                </div>
              )}

              {formError && (
                <p className="text-xs text-red-400 font-semibold text-left">{formError}</p>
              )}

              <p className="text-[11px] text-zinc-500 text-left">
                Direct calendar invitation will be sent to your email. Zero marketing spam. Strictly technical & scope discussion.
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
                  className="px-7 py-3 rounded-xl bg-[#FFAE00] hover:bg-[#FFB800] text-zinc-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  Confirm 30-Min Sprint →
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 3: Confirmation State */}
        {currentStep === "confirmed" && (
          <motion.div
            key="confirmed-step"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 text-center space-y-6 max-w-lg mx-auto"
          >
            <div className="h-16 w-16 rounded-full bg-[#FFAE00]/20 text-[#FFAE00] flex items-center justify-center mx-auto border border-[#FFAE00]/40 shadow-lg">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Meeting Scheduled!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Calendar invite prepared for <strong className="text-white">{guestName}</strong> ({guestEmail}).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-left space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-zinc-400">
                <span>Date:</span>
                <span className="text-white font-bold tabular-nums">
                  {selectedWeekdayLong}, {selectedMonthShort} {selectedDayOrdinal}, {currentYear}
                </span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Time:</span>
                <span className="text-[#FFAE00] font-extrabold tabular-nums">{selectedTime} IST</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Focus:</span>
                <span className="text-zinc-200 font-medium">{projectType}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Host:</span>
                <span className="text-white font-semibold">Rohith E (Principal)</span>
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
                  <CalendarPlus className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>Google Calendar</span>
                </a>

                <button
                  onClick={handleDownloadICS}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-[#FFAE00]" />
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
