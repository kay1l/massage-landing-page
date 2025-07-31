"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showBubble, setShowBubble] = useState(true); // show tooltip initially

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
      setShowBubble(false); // hide tooltip after click
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/water.mp3" loop autoPlay muted />

      <div className="fixed bottom-6 left-6 z-50">
        {/* Fancy speech bubble */}
        {showBubble && (
          <div className="absolute left-16 bottom-1/2 translate-y-1/2 bg-[#FFF9F0] text-[#5C4A42] text-sm px-4 py-2 rounded-2xl shadow-xl border border-[#F3C623] whitespace-nowrap font-medium animate-bounce">
            🎵 Tap to play music
            {/* Tail */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFF9F0] border-l border-b border-[#F3C623] rotate-45 shadow-md" />
          </div>
        )}

        {/* Mute / Unmute button */}
        <button
          onClick={toggleMute}
          className="bg-[#F3C623] p-3 rounded-full shadow-lg hover:scale-105 transition"
          aria-label="Toggle background music"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </>
  );
}
