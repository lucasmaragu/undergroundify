"use client"

import { useState } from "react"

const Navbar = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button onClick={onMenuClick} className="p-2 rounded-full hover:bg-zinc-800">
              <i className="bx bx-menu text-2xl"></i>
            </button>

            <div className="flex items-center gap-2">
              <i className="bx bxs-music text-red-500 text-3xl"></i>
              <span className="text-xl font-bold tracking-tight">UnderBeats</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search artists, tracks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              />
              <i className="bx bx-search absolute left-3 top-2.5 text-zinc-400"></i>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 rounded-full hover:bg-zinc-800">
              <i className="bx bx-search text-xl"></i>
            </button>
            <button className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-medium transition">
              <i className="bx bx-user-plus"></i>
              <span>Sign Up</span>
            </button>
            <button className="p-2 rounded-full hover:bg-zinc-800">
              <i className="bx bx-user-circle text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
