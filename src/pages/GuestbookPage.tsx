import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Heart } from "lucide-react"
import { Confetti } from "@/components/ui/confetti"

interface GuestMessage {
  id: string
  name: string
  location: string
  message: string
  date: string
  avatarColor: string
}

const INITIAL_MESSAGES: GuestMessage[] = [
  {
    id: "1",
    name: "Alex Thompson",
    location: "San Francisco, USA",
    message: "Stunning aesthetic and micro-animations! The stacked cards and macOS dock physics are world-class.",
    date: "Today at 07:15 PM",
    avatarColor: "bg-purple-600",
  },
  {
    id: "2",
    name: "Priya Sundaram",
    location: "Bengaluru, India",
    message: "Rohith built our clinic's patient platform and it cut booking friction by 60%. Highly recommend!",
    date: "Yesterday",
    avatarColor: "bg-emerald-600",
  },
  {
    id: "3",
    name: "Marcus Vance",
    location: "London, UK",
    message: "Top-tier full-stack architecture. Incredible attention to typography and performance.",
    date: "2 days ago",
    avatarColor: "bg-[#FF4D3D]",
  },
]

export const GuestbookPage: React.FC = () => {
  const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES)
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [message, setMessage] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      const newMsg: GuestMessage = {
        id: Date.now().toString(),
        name: name.trim(),
        location: location.trim() || "Earth",
        message: message.trim(),
        date: "Just now",
        avatarColor: "bg-purple-600",
      }
      setMessages([newMsg, ...messages])
      setName("")
      setLocation("")
      setMessage("")
      setIsSubmitting(false)
      setShowConfetti(true)
    }, 400)
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-purple-600 selection:text-white pt-24 sm:pt-32 pb-20 space-y-12">
      {showConfetti && <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />}

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display"
        >
          Digital Guestbook<span className="text-[#FF4D3D]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-lg text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed font-sans"
        >
          Leave a message, feedback, or say hello on our community wall.
        </motion.p>
      </div>

      <div className="container max-w-2xl mx-auto px-4 space-y-8">
        {/* Input Form Card */}
        <form onSubmit={handleSubmit} className="p-4.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/90 text-white border border-zinc-800 shadow-2xl space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Heart className="h-5 w-5 fill-purple-500/30" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">Sign the Wall</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your Name (e.g. Rohith)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <input
              type="text"
              placeholder="Location (e.g. Tamil Nadu, IN)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <textarea
            placeholder="Share your thoughts, review, or feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          />

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !message.trim()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-600/30 disabled:opacity-50 transition-all cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Publish Signature</span>
            </button>
          </div>
        </form>

        {/* Message Feed */}
        <div className="space-y-4">
          {messages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-2xl space-y-2 text-left"
            >
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                <div className="flex items-center gap-2.5">
                  <span className={`h-7 w-7 rounded-full ${item.avatarColor} text-white flex items-center justify-center text-xs font-bold shrink-0`}>
                    {item.name.charAt(0)}
                  </span>
                  <span className="font-bold text-sm text-white font-sans truncate">{item.name}</span>
                  <span className="text-xs text-zinc-500 font-mono shrink-0">• {item.location}</span>
                </div>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-mono pl-9 xs:pl-0">{item.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 pl-0 xs:pl-9 pt-1 leading-relaxed font-sans font-normal break-words">
                {item.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
