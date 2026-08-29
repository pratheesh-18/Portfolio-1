import { useEffect } from "react";
import About from "./About";
import Achievements from "./Achievements";
import Education from "./Education";
import Head from "./head";
import Projects from "./Projects";
import Skills from "./Skills";
import "aos/dist/aos.css";
import Aos from "aos";
import ParticlesBackground from "./Particles";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import Certificates from "./Certificates";
import Internship from "./Internship";

export default function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

 


  return (
    <>
      <div>
        <Head />
        <div className="min-h-screen pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between pl-[10px] pr-6 max-w-7xl mx-auto gap-12 relative cyan-center-glow" id="home">
          {/* Left Hero Content */}
          <div className="flex-1 max-w-xl text-left z-10" data-aos="fade-right">
            <h3 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
              WELCOME TO MY WORLD
            </h3>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-3">
              Hi, I'm{" "}
              <span className="text-cyan-400 font-semibold">Pratheesh</span>
            </h1>
            <h2 className="text-2xl sm:text-5xl font-bold text-cyan-400 mt-3 hero">
              <Typewriter
                words={["WEB DEVELOPER", "FULL STACK DEVELOPER"]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6">
              Hello, I'm Pratheesh. I am a dedicated Full Stack Developer
              committed to delivering clean, efficient, and user-focused
              solutions. A personal portfolio is a collection of your work,
              achievements, and skills that highlights your abilities and
              professional growth.
            </p>
          </div>

          {/* Right End Image Container with Scanning Animation */}
          <div className="flex-1 flex justify-center lg:justify-end items-center z-10" data-aos="fade-left">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1200}
              scale={1.05}
              transitionSpeed={1000}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#06b6d4"
            >
              <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_45px_rgba(6,182,212,0.3)] hover:border-cyan-400 hover:shadow-[0_0_65px_rgba(6,182,212,0.5)] transition-all duration-500">
                {/* Cyber Laser Scan Line Overlay */}
                <div className="scan-line" />

                <img
                  src="/pratheesh_profile_new.png"
                  alt="Pratheesh"
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </Tilt>
          </div>
        </div>

        <About />

        <Education />

        <Internship />

        <div className="  p-6">
          <Skills />
        </div>
        <div>
          <Achievements />
        </div>
        <div>
          <Certificates />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
