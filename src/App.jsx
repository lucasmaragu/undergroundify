"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import VideoPlayer from "./components/VideoPlayer"
import VideoGrid from "./components/VideoGrid"
import ArtistSpotlight from "./components/ArtistSpotlight"
import Footer from "./components/Footer"
import { featuredArtists, videos } from "./data"

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleVideoSelect = (video) => {
    setCurrentVideo(video)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
          {currentVideo && (
            <VideoPlayer
              video={currentVideo}
              onNext={() => {
                const currentIndex = videos.findIndex((v) => v.id === currentVideo.id)
                const nextIndex = (currentIndex + 1) % videos.length
                setCurrentVideo(videos[nextIndex])
              }}
            />
          )}

          <ArtistSpotlight artists={featuredArtists} />

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Trending Videos</h2>
            <VideoGrid videos={videos} onVideoSelect={handleVideoSelect} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
