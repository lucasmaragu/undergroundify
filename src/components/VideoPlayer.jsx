"use client"

import { useState, useRef, useEffect } from "react"

const VideoPlayer = ({ video, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    // Reset player state when video changes
    setIsPlaying(false)
    setCurrentTime(0)

    // Auto play new video after a short delay
    const timer = setTimeout(() => {
      videoRef.current.play()
      setIsPlaying(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [video])

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration)
  }

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration
    videoRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  const handleVolumeChange = (e) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    videoRef.current.volume = newVolume
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="mb-8" ref={playerRef}>
      <div className="relative group">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl}
          className="w-full rounded-lg aspect-video bg-zinc-900 object-contain"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={onNext}
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/70 via-transparent to-black/30 p-4">
          {/* Top controls */}
          <div className="flex justify-end">
            <button className="text-white p-2 rounded-full hover:bg-black/30">
              <i className="bx bx-x text-2xl"></i>
            </button>
          </div>

          {/* Center play button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={togglePlay} className="text-white p-4 rounded-full bg-black/30 hover:bg-black/50">
              <i className={`bx ${isPlaying ? "bx-pause" : "bx-play"} text-4xl`}></i>
            </button>
          </div>

          {/* Bottom controls */}
          <div className="space-y-2">
            {/* Progress bar */}
            <div className="h-1 w-full bg-white/30 rounded cursor-pointer" onClick={handleSeek}>
              <div className="h-full bg-red-500 rounded" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="text-white p-1 rounded-full hover:bg-black/30">
                  <i className={`bx ${isPlaying ? "bx-pause" : "bx-play"} text-xl`}></i>
                </button>

                <button onClick={onNext} className="text-white p-1 rounded-full hover:bg-black/30">
                  <i className="bx bx-skip-next text-xl"></i>
                </button>

                <div className="relative">
                  <button
                    className="text-white p-1 rounded-full hover:bg-black/30"
                    onMouseEnter={() => setShowVolumeControl(true)}
                    onMouseLeave={() => setShowVolumeControl(false)}
                  >
                    <i
                      className={`bx ${volume === 0 ? "bx-volume-mute" : volume < 0.5 ? "bx-volume-low" : "bx-volume-full"} text-xl`}
                    ></i>
                  </button>

                  {showVolumeControl && (
                    <div
                      className="absolute bottom-full left-0 mb-2 p-2 bg-zinc-800 rounded shadow-lg"
                      onMouseEnter={() => setShowVolumeControl(true)}
                      onMouseLeave={() => setShowVolumeControl(false)}
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 accent-red-500"
                      />
                    </div>
                  )}
                </div>

                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button className="text-white p-1 rounded-full hover:bg-black/30">
                  <i className="bx bx-list-ul text-xl"></i>
                </button>

                <button onClick={toggleFullscreen} className="text-white p-1 rounded-full hover:bg-black/30">
                  <i className={`bx ${isFullscreen ? "bx-exit-fullscreen" : "bx-fullscreen"} text-xl`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-4">
        <h1 className="text-xl font-bold">{video.title}</h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <img
              src={video.artist.avatarUrl || "/placeholder.svg"}
              alt={video.artist.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{video.artist.name}</p>
              <p className="text-sm text-zinc-400">{video.artist.subscribers} subscribers</p>
            </div>
          </div>

          <button className="ml-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-medium transition">
            Subscribe
          </button>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-full">
              <i className="bx bx-like"></i>
              <span>{video.likes}</span>
            </button>
            <button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-full">
              <i className="bx bx-dislike"></i>
            </button>
            <button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-full">
              <i className="bx bx-share"></i>
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="mt-4 p-4 bg-zinc-900 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.uploadDate}</span>
          </div>
          <p className="mt-2 text-sm whitespace-pre-line">{video.description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
