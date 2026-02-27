"use client"

import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { popularRoutes } from "@/data/routes"

const routes = [
  { city: "Chikkamagaluru", image: "/routes/chikmagalur.jpg" },
  { city: "Mysore", image: "/routes/mysore.jpg" },
  { city: "Coimbatore", image: "/routes/coimbatore.jpg" },
  { city: "Madurai", image: "/routes/madurai.jpg" },
]

export default function PopularRoutes() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-800">
          Most Popular Bus Routes from Bangalore
        </h2>
        <div className="w-20 h-1 bg-sky-400 mx-auto mt-2" />

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FaChevronRight />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {popularRoutes.map((route, i) => (
            <div key={i} className="min-w-[260px]">
              <img
                src={route.image}
                alt={route.city}
                className="h-60 w-full object-cover rounded-2xl shadow"
              />
              <p className="mt-3 text-center font-semibold text-gray-800">
                {route.city} →
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}