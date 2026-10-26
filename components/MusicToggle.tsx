'use client';

import { useState, useRef, useEffect } from 'react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check if audio file exists
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('error', () => {
        setHasAudio(false);
      });
      audio.addEventListener('loadeddata', () => {
        setHasAudio(true);
      });
    }
  }, []);

  const toggleMusic = () => {
    if (!hasAudio) {
      return; // Don't show error if audio doesn't exist
    }
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Silently fail - browser autoplay restriction
            setIsPlaying(false);
          });
      }
    }
  };

  // Don't show button if no audio file
  if (!hasAudio) {
    return null;
  }

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 w-14 h-14 rounded-full bg-white border-2 border-[#D72F4B] text-[#D72F4B] flex items-center justify-center hover:scale-110 hover:bg-[#D72F4B] hover:text-white transition-all shadow-lg shadow-[#E9A0AC]/40"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-2c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
          </svg>
        )}
      </button>
      
      <audio ref={audioRef} loop preload="none">
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
