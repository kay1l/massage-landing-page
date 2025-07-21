"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
     
      const enableAudio = () => {
        audio.play().catch(() => {});
        window.removeEventListener("click", enableAudio);
      };
      window.addEventListener("click", enableAudio);
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/spa-audio.mp3"
        loop
        autoPlay
        muted
      />

      {/* Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-[#F3C623] p-3 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Toggle background music"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
}
