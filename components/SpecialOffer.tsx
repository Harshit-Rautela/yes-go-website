"use client"

import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { specialOffers } from "@/data/offers"

const offers = [
  {
    title: "Ticket Booking",
    desc: "10% off on basic fare for passengers",
    image: "/offers/ticket.png",
  },
  {
    title: "Special Offers",
    desc: "Independence Day Special Offers",
    image: "/offers/special.png",
  },
  {
    title: "First Bus",
    desc: "New User Offer On First Bus",
    image: "/offers/firstbus.png",
  },
  {
    title: "Instant Discount",
    desc: "10% on Booking",
    image: "/offers/discount.png",
  },
]

export default function SpecialOffers() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-800">
          Special Offers
        </h2>
        <div className="w-16 h-1 bg-sky-400 mx-auto mt-2" />

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
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {specialOffers.map((offer, i) => (
            <div
              key={i}
              className="min-w-65 border border-blue-300 rounded-2xl p-4 bg-blue-50"
            >
              <h3 className="font-semibold text-gray-800">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {offer.description}
              </p>

              <img
                src={offer.image}
                alt={offer.title}
                className="h-28 mx-auto mt-4"
              />

              <button className="mt-4 bg-blue-700 text-white text-xs px-4 py-1 rounded-full">
                View Offers
              </button>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="bg-linear-to-r from-blue-700 to-blue-900 text-white px-8 py-2 rounded-full text-sm">
            VIEW ALL
          </button>
        </div>

      </div>
    </section>
  )
}