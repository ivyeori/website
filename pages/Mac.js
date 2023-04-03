import React, { useEffect, useState } from "react";
function Main() {
    const [volume, setVolume] = useState(0.5);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handleVolumeChange = (event) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    };
  
    const handlePlay = () => {
      setIsPlaying(true);
      audioRef.current.play();
    };
  
    const handleStop = () => {
      setIsPlaying(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  
    const audioRef = React.useRef();
  return (
    <div class="bg-gray-100 h-screen">
  <div class="bg-white shadow-lg rounded-t-lg">
    <div class="flex justify-between items-center px-4 py-2">
      <div class="flex items-center">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 mx-2 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <span class="ml-2 font-bold">Finder</span>
      </div>
      <div class="flex items-center">
        <button class="bg-gray-200 rounded-full px-2 py-1 mr-2">
          <i class="fas fa-window-minimize"></i>
        </button>
        <button class="bg-gray-200 rounded-full px-2 py-1 mr-2">
          <i class="fas fa-expand-arrows-alt"></i>
        </button>
        <button class="bg-gray-200 rounded-full px-2 py-1">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div class="px-4 py-2">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-gray-700">Music Player</span>
        <div class="flex items-center">
          <button class="bg-gray-200 rounded-full px-2 py-1 mr-2">
            <i class="fas fa-plus"></i>
          </button>
          <button class="bg-gray-200 rounded-full px-2 py-1 mr-2">
            <i class="fas fa-sort"></i>
          </button>
          <button class="bg-gray-200 rounded-full px-2 py-1">
            <i class="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
      <div className="relative z-20 flex items-center">
          <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto bg-gray-700 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-white">
              <svg className="w-12 h-12 mb-4 text-green-500 fill-current" viewBox="0 0 512 512">
                <path d="M294.28 256L96 402.67V109.33L294.28 256zM416 256L217.73 402.67V109.33L416 256zM480 256L281.73 402.67V109.33L480 256zM32 256L230.27 109.33v293.34L32 256z" />
              </svg>
              <p className="text-xl font-bold">Music Player</p>
            </div>
            <div className="flex items-center justify-center mt-4">
              <audio ref={audioRef} src="song.mp3" preload="metadata" loop />
              <div className="flex items-center">
                <button
                  className="mr-4 bg-green-500 text-white rounded-full p-3 hover:bg-green-600 focus:outline-none"
                  onClick={isPlaying ? handleStop : handlePlay}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-32 mr-4 appearance-none bg-gray-700 rounded-full h-2 overflow-hidden focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
    
  </div>
</div>

  )
}

export default Main