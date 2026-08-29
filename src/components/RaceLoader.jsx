import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { engineSoundDataUri } from "./engineSoundData";

export default function RaceLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Start engine sound immediately when loader appears
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.85;
    audio.muted = false;

    // Try to play immediately on page load
    const startEngine = async () => {
      try {
        await audio.play();
        console.log("🏎️ Engine sound started automatically");
      } catch (error) {
        console.log(
          "Browser blocked autoplay. Waiting for first user interaction."
        );
      }
    };

    startEngine();

    // Fallback: start sound on the first interaction
    const startOnInteraction = async () => {
      try {
        audio.muted = false;
        audio.volume = 0.85;

        if (audio.paused) {
          await audio.play();
        }

        console.log("🏎️ Engine sound started after user interaction");

        // Remove listeners after successful start
        window.removeEventListener("pointerdown", startOnInteraction);
        window.removeEventListener("keydown", startOnInteraction);
        window.removeEventListener("touchstart", startOnInteraction);
      } catch (error) {
        console.log("Audio could not be started:", error);
      }
    };

    window.addEventListener("pointerdown", startOnInteraction);
    window.addEventListener("keydown", startOnInteraction);
    window.addEventListener("touchstart", startOnInteraction);

    return () => {
      window.removeEventListener("pointerdown", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
    };
  }, []);

  // Mute / unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  // Loading progress
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2800;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(
        100,
        (elapsed / duration) * 100
      );

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden cursor-crosshair select-none"
    >

      {/* ENGINE AUDIO */}
      <audio
        ref={audioRef}
        src={engineSoundDataUri}
        preload="auto"
        autoPlay
        playsInline
      />

      {/* Cyan Center Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[550px]
          h-[380px]
          bg-cyan-500/15
          rounded-full
          blur-[110px]
          pointer-events-none
        "
      />

      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="speed-streak w-64 top-1/4"
          style={{ animationDelay: "0s" }}
        />

        <div
          className="speed-streak w-96 top-1/3"
          style={{ animationDelay: "0.4s" }}
        />

        <div
          className="speed-streak w-48 top-1/2"
          style={{ animationDelay: "0.9s" }}
        />

        <div
          className="speed-streak w-80 top-2/3"
          style={{ animationDelay: "1.3s" }}
        />

        <div
          className="speed-streak w-56 top-3/4"
          style={{ animationDelay: "0.2s" }}
        />
      </div>

      {/* Audio Button */}
      <button
        onClick={toggleMute}
        className="
          absolute
          top-6
          right-6
          z-50
          p-3
          bg-slate-900/80
          backdrop-blur-md
          border
          border-white/10
          rounded-2xl
          text-slate-300
          hover:text-cyan-400
          hover:border-cyan-400/60
          transition-all
          duration-300
          flex
          items-center
          gap-2
          text-xs
          font-semibold
        "
      >
        {isMuted ? (
          <>
            <FaVolumeMute className="text-red-400 text-base" />
            <span className="hidden sm:inline">
              MUTED
            </span>
          </>
        ) : (
          <>
            <FaVolumeUp className="text-cyan-400 text-base" />
            <span className="hidden sm:inline font-mono">
              RACE FLYBY AUDIO
            </span>
          </>
        )}
      </button>

      {/* Loading UI */}
      <div className="relative z-10 flex flex-col items-center justify-center">

        <div className="text-center font-mono tracking-widest">

          <div
            className="
              text-6xl
              sm:text-7xl
              font-extrabold
              text-cyan-400
              drop-shadow-[0_0_25px_rgba(6,182,212,0.85)]
            "
          >
            {Math.round(progress)}
            <span className="text-3xl sm:text-4xl text-cyan-500/80 ml-1">
              %
            </span>
          </div>

          <div
            className="
              text-xs
              sm:text-sm
              font-sans
              font-semibold
              tracking-[0.3em]
              text-slate-400
              uppercase
              mt-4
            "
          >
            Loading System Performance
          </div>

        </div>

        {/* Progress Bar */}
        <div
          className="
            w-72
            sm:w-96
            h-2.5
            bg-slate-900/90
            border
            border-white/10
            rounded-full
            overflow-hidden
            mt-8
            shadow-[0_0_20px_rgba(0,0,0,0.9)]
          "
        >
          <div
            className="
              h-full
              bg-gradient-to-r
              from-cyan-500
              via-cyan-400
              to-blue-500
              rounded-full
              shadow-[0_0_18px_rgba(6,182,212,0.9)]
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>
    </motion.div>
  );
}