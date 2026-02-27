"use client"
import {
  FaShieldAlt,
  FaHeadset,
  FaCouch,
  FaRoute,
  FaGlobe,
  FaTicketAlt,
} from "react-icons/fa"
import { whyChooseUs } from "@/data/whyChooseUs"

const iconMap: Record<string, React.ReactNode> = {
  shield: "/whyUs/Protect.png",
  support:"/whyUs/Protect.png",
  seat: "/whyUs/Protect.png",
  travel:"/whyUs/Protect.png",
  globe: "/whyUs/Protect.png",
  ticket: "/whyUs/Protect.png",
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600" />

     
      <div className="absolute inset-0 opacity-10 bg-[url('/travel-bg.png')] bg-cover" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-light leading-tight">
            {whyChooseUs.heading}
          </h2>

          <h1 className="text-5xl font-bold text-yellow-400 mt-2">
            {whyChooseUs.brand}
          </h1>

          <h2 className="text-4xl font-light mt-2">
            {whyChooseUs.subheading}
          </h2>
        </div>

        {/* RIGHT POINTS */}
        <div className="space-y-6">
          {whyChooseUs.points.map((point) => (
            <div
              key={point.id}
              className="flex items-center gap-4 text-lg"
            >
              <span className="text-yellow-400 text-2xl">
                {iconMap[point.icon]}
              </span>
              <span>{point.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}