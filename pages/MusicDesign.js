import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    { name: 'Cupid', src: 'song.mp3', thumbnail: 'https://images.genius.com/d383c213dfdcede4fd45fa7c1570463e.1000x1000x1.jpg' },
    { name: 'Clyde', src: 'song2.mp3', thumbnail: 'https://images.genius.com/89cb8f4c43bc185242f660876eb4f308.1000x1000x1.jpg' },
    { name: 'Song 3', src: 'path/to/song3.mp3', thumbnail: 'song3_thumbnail.jpg' }
  ]);
  
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleSongClick = (songIndex) => {
    setCurrentSongIndex(songIndex);
    setThumbnail(song.thumbnail);
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

  const handleSkipClick = () => {
    setCurrentSongIndex(currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1);

  };
  const playPauseButton = isPlaying ? (
    <button onClick={handlePlayPauseClick} className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
     
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
    </button>
  ) : (
    <button onClick={handlePlayPauseClick} className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" >
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
    </button>
  );

  const currentSong = songs[currentSongIndex];
  const handleSkipBackClick = () => {
    audioRef.current.currentTime -= 10;
  };

  

  
  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
 
   
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    

     
      <div className="bg-gray-900 shadow-lg rounded p-3">
        <div className="group relative">
        <img className="w-full md:w-72 block rounded" src={currentSong.thumbnail} alt={`${currentSong.name} thumbnail`} />
          <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            
          <button onClick={handleSkipBackClick} className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
</button>


<button>
      {playPauseButton}
    </button>

            <button  onClick={handleSkipClick}  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
             
            </button>
            

            
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-white text-lg">{currentSong.name}</h3>
          
        </div>
      </div>
      
    </section>
    <audio
  ref={audioRef}
  src={currentSong.src}
  onEnded={() => setIsPlaying(false)}
  onLoadedData={() => setIsPlaying(true)}
  autoPlay
/>
</main>
  )
}

export default MusicPlayer