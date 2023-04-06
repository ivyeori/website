import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    { name: 'Song 1', src: 'song.mp3', thumbnail: 'https://images.genius.com/d383c213dfdcede4fd45fa7c1570463e.1000x1000x1.jpg' },
    { name: 'Song 2', src: 'song2.mp3', thumbnail: 'https://images.genius.com/89cb8f4c43bc185242f660876eb4f308.1000x1000x1.jpg' },
    { name: 'Song 3', src: 'path/to/song3.mp3', thumbnail: 'song3_thumbnail.jpg' }
  ]);
  

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    audioRef.current.volume = 0.1;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold mb-8">Music Player</h1>
      <h2 className="text-white text-2xl font-medium mb-4">Now playing: {currentSong.name}</h2>
      <ul className="text-white">
        {songs.map((song) => (
          <li
            key={song.name}
            onClick={() => handleSongClick(song)}
            className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
          >
            {song.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-4">
        <button onClick={handlePlayPauseClick} className="mx-4">
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm9 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm9 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <audio
  ref={audioRef}
  src={currentSong.src}
  onEnded={() => setIsPlaying(false)}
  onLoadedData={() => setIsPlaying(true)}
  autoPlay
/>
      </div>
    </div>
  );
};

export default MusicPlayer;
