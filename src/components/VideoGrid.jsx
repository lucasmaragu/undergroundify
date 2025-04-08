"use client"

const VideoGrid = ({ videos, onVideoSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="cursor-pointer group" onClick={() => onVideoSelect(video)}>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={video.thumbnailUrl || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs rounded">{video.duration}</div>
          </div>

          <div className="mt-2 flex gap-3">
            <img
              src={video.artist.avatarUrl || "/placeholder.svg"}
              alt={video.artist.name}
              className="w-9 h-9 rounded-full object-cover"
            />

            <div>
              <h3 className="font-medium line-clamp-2">{video.title}</h3>
              <p className="text-sm text-zinc-400">{video.artist.name}</p>
              <p className="text-xs text-zinc-500">
                {video.views} views • {video.uploadDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoGrid
