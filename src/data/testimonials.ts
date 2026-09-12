export interface TestimonialItem {
  id: string
  clientName: string
  role: string
  company: string
  avatarText: string
  avatarColor: string
  quote: string
  metricBadge: string
  stars: number
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "jsbuilders",
    clientName: "J. Subramanian",
    role: "Managing Director",
    company: "JSBuilders Civil & Architecture",
    avatarText: "JS",
    avatarColor: "from-[#FFAE00] to-amber-700",
    quote:
      "Rohith completely revolutionized our commercial pipeline. Our previous site took 5 seconds to load on mobile and lost inquiries daily. Rohith rebuilt it to load in 0.3 seconds with direct WhatsApp quoting. Inquiries tripled in the first 30 days.",
    metricBadge: "+340% Inquiries",
    stars: 5,
  },
  {
    id: "carepulse",
    clientName: "Dr. K. Ramasamy",
    role: "Medical Director",
    company: "CarePulse Health Clinic",
    avatarText: "KR",
    avatarColor: "from-blue-600 to-indigo-800",
    quote:
      "The online appointment scheduler eliminated our front-desk phone congestion overnight. Patient no-shows dropped significantly thanks to automated WhatsApp confirmations. Professional, punctual, and technically exceptional.",
    metricBadge: "0 Patient No-Shows",
    stars: 5,
  },
  {
    id: "novamarket",
    clientName: "P. Vignesh",
    role: "Operations Head",
    company: "NovaMarket Retail Distribution",
    avatarText: "PV",
    avatarColor: "from-emerald-600 to-teal-800",
    quote:
      "We needed a lightweight digital catalog that didn't require heavy app downloads or monthly SaaS subscriptions. Rohith delivered an ultra-fast web catalog with 1-click WhatsApp cart checkout in just 10 days.",
    metricBadge: "10-Day Delivery",
    stars: 5,
  },
  {
    id: "servicelink",
    clientName: "A. Arvind",
    role: "Founder & CEO",
    company: "ServiceLink On-Demand Tech",
    avatarText: "AA",
    avatarColor: "from-purple-600 to-violet-800",
    quote:
      "Working with Rohith feels like having an in-house lead engineer. No agency fluff, no account manager game of telephone. You talk directly with the engineer who is writing the code. Flawless execution.",
    metricBadge: "Direct Founder Access",
    stars: 5,
  },
]
