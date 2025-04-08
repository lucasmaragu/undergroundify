"use client"

const Sidebar = ({ isOpen, onClose }) => {
  const categories = [
    { name: "Home", icon: "bx-home" },
    { name: "Trending", icon: "bx-trending-up" },
    { name: "Discover", icon: "bx-compass" },
    { name: "New Releases", icon: "bx-calendar-star" },
  ]

  const genres = ["Trap", "Drill", "Hip Hop", "Rap", "Flamenco Urbano", "Reggaeton"]

  const artists = ["Disobey", "Mvrk", "C Mari", "Albany", "Dollar Selmouni", "Beny Jr"]

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/70 z-40 md:hidden" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-zinc-900 border-r border-zinc-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:z-0`}
      >
        <div className="flex flex-col h-full py-6">
          <div className="px-6 mb-6 md:hidden">
            <div className="flex items-center gap-2">
              <i className="bx bxs-music text-red-500 text-3xl"></i>
              <span className="text-xl font-bold tracking-tight">UnderBeats</span>
            </div>
          </div>

          <nav className="flex-1 px-3 space-y-1">
            <div className="mb-6">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-800"
                >
                  <i className={`bx ${category.icon} text-xl`}></i>
                  {category.name}
                </a>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Genres</h3>
              {genres.map((genre) => (
                <a
                  key={genre}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-800"
                >
                  <i className="bx bx-hash text-xl"></i>
                  {genre}
                </a>
              ))}
            </div>

            <div>
              <h3 className="px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Top Artists</h3>
              {artists.map((artist) => (
                <a
                  key={artist}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-800"
                >
                  <i className="bx bx-user text-xl"></i>
                  {artist}
                </a>
              ))}
            </div>
          </nav>

          <div className="px-3 mt-6">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-800">
              <i className="bx bx-cog text-xl"></i>
              Settings
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-800">
              <i className="bx bx-help-circle text-xl"></i>
              Help & Support
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
