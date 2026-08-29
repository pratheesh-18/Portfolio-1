import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaRegFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialSidebar() {
  return (
    <>
      {/* Left Fixed Social Bar */}
      <div className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-center">
        <a
          href="https://github.com/pratheesh-18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/pratheesh-p-s-226809328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          aria-label="X (Twitter)"
        >
          <FaXTwitter size={22} />
        </a>
        <a
          href="https://www.instagram.com/zx._.goat._.18/profilecard/?igsh=bzU4OWJyeTE3Zzh5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-pink-500 hover:scale-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]"
          aria-label="Instagram"
        >
          <FaInstagram size={22} />
        </a>
      </div>

      {/* Bottom Right Resume Button */}
      {/* <a
        href="#home"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-widest text-slate-300 hover:text-white hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] rounded-xl transition-all duration-300 group"
      >
        <span>RESUME</span>
        <FaRegFileAlt className="text-cyan-400 group-hover:scale-110 transition-transform" />
      </a> */}
    </>
  );
}
