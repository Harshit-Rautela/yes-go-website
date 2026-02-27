"use client"

import { FaMapMarkerAlt, FaCalendarAlt, FaExchangeAlt } from "react-icons/fa"

export default function SearchBar() {
  return (
    <form className="mx-auto max-w-5xl bg-white rounded-full shadow-2xl flex items-center overflow-hidden">

      {/* FROM */}
      <div className="flex items-center px-4 flex-1 gap-3">
        <FaMapMarkerAlt className="text-gray-400" />
        <input
          className="w-full py-4 outline-none text-sm text-black"
          placeholder="From City"
        />
      </div>

      {/* SWAP ICON */}
      <div className="h-10 w-10 flex items-center justify-center bg-yellow-400 rounded-full mx-2">
        <FaExchangeAlt className="text-black text-sm" />
      </div>

      {/* TO */}
      <div className="flex items-center px-4 flex-1 gap-3 border-l">
        <FaMapMarkerAlt className="text-gray-400" />
        <input
          className="w-full py-4 outline-none text-sm text-black"
          placeholder="To City"
        />
      </div>

      {/* DATE */}
      <div className="flex items-center px-4 flex-1 gap-3 border-l">
        <FaCalendarAlt className="text-gray-400" />
        <input
          type="date"
          className="w-full py-4 outline-none text-sm"
        />
      </div>

      {/* TODAY / TOMORROW */}
      <select className="px-4 py-4 text-sm outline-none border-l text-gray-600">
        <option>Today</option>
        <option>Tomorrow</option>
      </select>

      {/* SEARCH BUTTON */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 font-semibold rounded-r-full">
        SEARCH
      </button>

    </form>
  )
}