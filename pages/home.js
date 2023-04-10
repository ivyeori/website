import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef, useState } from 'react';

function main() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        audioRef.current.play();
        audioRef.current.volume = 0.1;
      }, []);
    useEffect(() => {
        document.title = "Ivyeori | Home Page";   }, []);
        const [isMuted, setIsMuted] = useState(false);
       
      
        const handleMuteClick = () => {
          setIsMuted(!isMuted);
        };

        const handlePlayClick = () => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
          };
          
  return (
    <><audio ref={audioRef} muted={isMuted}>
    <source src="song2.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
  
   

    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script><script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script><main className="relative h-screen overflow-hidden font-mono bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 ">
    <div className="absolute bottom-0 hidden md:block   right-0 w-96 h-96">
              <div className="text-white bottom-0  absolute z-20 text-xl text-extrabold right-6  flex flex-col justify-end p-4 top-1/4">
                 
              <button className="underline" onClick={handlePlayClick}>{isPlaying ? 'Stop it. Not my type ' : 'Wanna play some tunes?'}</button>
              <br/>
                  <button  onClick={handleMuteClick}>
                  {isMuted ? 'Unmute' : 'Mute'}
                  </button>
              </div>
              
          </div>

          
  
          
          <div className="absolute hidden md:block -bottom-32 -left-32 w-96 h-96">
              <div className="absolute z-20 text-xl text-extrabold right-14 text-start top-1/4">
                  <span className="text-7xl">
                      💻
                  </span>
                  <p>
                      Got a project?
                  </p>
                  <a href="https://t.me/ivyeori" className="underline">
                      Let&#x27;s talk
                  </a>
              </div>
              <svg viewBox="0 0 200 200" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFDBB9" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)">
                  </path>
              </svg>
          </div>
          <header className="z-30 flex items-center w-full h-24 sm:h-32">
              <div className="container flex items-center justify-between px-6 mx-auto">

                  <div className="flex items-center">


                  </div>
              </div>
          </header>
          <div className="relative z-20 flex items-center">
              <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
                  <div className="flex flex-col">
                      <img src="https://imgur.com/vqyGsdc.jpg" className="mx-auto rounded-full w-28" />
                      <p className="my-6 text-3xl text-center text-white ">
                          Hi, I&#x27;m Alex
                      </p>
                      <div className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-white md:text-6xl dark:text-white">
                          <h2>
                          
                              Building websites,
                          </h2>
                          <h2>
                              programs 
                          </h2>
                          <h2>
                          <TypeAnimation
                           sequence={[
                            'and experiences.', // Types 'One'
                            2000, // Waits 1s
                            'and friendships.', // Deletes 'One' and types 'Two'
                            3000, // Waits 2s
                            'and partners.', // Types 'Three' without deleting 'Two'
                            2000,
                            () => {
                              console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                          ]}
                          wrapper="div"
                          cursor={true}
                          repeat={Infinity}
                          style={{ fontSize: '1em' }} />
                          </h2>
                      </div>
                      <div className="flex items-center justify-center mt-4">
                          <a href="https://beacons.ai/ivyeori" target="_blank" className="px-4 py-2 my-2 text-white uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-white dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                              CONNECT WITH ME
                          </a>
                      </div>
                  </div>
              </div>
          </div>

      </main>
      </>


  )
}

export default main