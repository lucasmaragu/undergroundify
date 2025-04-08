"use client"

import { useState, useRef, useEffect } from "react"

const ArtistSpotlight = ({ artists }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef(null)

  const scroll = (direction) => {
    const container = containerRef.current
    const scrollAmount = 300

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const container = containerRef.current

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const showLeftButton = scrollPosition > 20
  const showRightButton = containerRef.current
    ? scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 20
    : true

  return (
    <div className="mt-12 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Artists</h2>
        <a href="#" className="text-red-500 hover:text-red-400 text-sm font-medium">
          View All
        </a>
      </div>

      <div className="relative">
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 rounded-full p-2 -ml-4"
          >
            <i className="bx bx-chevron-left text-2xl"></i>
          </button>
        )}

        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {artists.map((artist) => (
            <div key={artist.id} className="flex-shrink-0 w-48">
              <div className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={artist.avatarUrl || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-red-600 hover:bg-red-700 rounded-full p-2 transition">
                    <i className="bx bx-play text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-sm text-zinc-400">{artist.subscribers} subscribers</p>
              </div>
            </div>
          ))}
        </div>

        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 rounded-full p-2 -mr-4"
          >
            <i className="bx bx-chevron-right text-2xl"></i>
          </button>
        )}
      </div>
    </div>
  )
}

export default ArtistSpotlight
