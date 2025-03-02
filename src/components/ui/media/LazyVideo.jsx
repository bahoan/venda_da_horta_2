import React, { useState } from 'react';

const LazyVideo = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full bg-black">
      {!isLoaded && (
        <button
          onClick={loadVideo}
          className="absolute inset-0 w-full h-full cursor-pointer group"
        >
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
      {isLoaded && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default LazyVideo;
