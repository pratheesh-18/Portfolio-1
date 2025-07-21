import { useEffect } from "react";
import About from "./About";
import Achievements from "./Achievements";
import Education from "./Education";
import Head from "./head";
import Projects from "./Projects";
import Skills from "./Skills";
import "aos/dist/aos.css"
import Aos from "aos";
import ParticlesBackground from "./Particles";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  useEffect(()=>{
     
    Aos.init({})
 
 
 },[])

  return (
    <>
   
    <div >
      <Head />
      <div className="pt-32 home flex justify-around " id="home">
        <div className="mt-32">
          <h1 className="text-white  text-xl">WELCOME TO MY WORLD</h1>
          <h1 className="text-white  text-5xl hero pt-5">
            Hi, Im <span className="text-red-500 font-semibold">Pratheesh</span>
          </h1>
          <h1 className=" text-5xl text-red-500 hero pt-5 font-semibold"  >
          <Typewriter
    words={['WEB DEVELOPER', 'FULL STACK DEVELOPER']}
    loop={0} // 0 = infinite
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={60}
    delaySpeed={1500}
  />
          </h1>
          <p className=" text-white text-lg w-[100vh] pt-8 ">
            {" "}
            Hello, I'm Pratheesh. I am a dedicated Full Stack Developer
            Committed to delivering clean, efficient, and user-focused
            solutions.A personal portfolio is a collection of your work,
            achievements, and skills 
            that highlights your abilities and professional growth.{" "}
          </p>
        </div>
        <div className="relative"  data-aos="fade-up-right" data-aos-easing="linear"
     data-aos-duration="1000">
            <h1 className="text-white font-bold text-6xl pt-20 image up-down-animation">WEB DEVELOPER</h1>
            <img src="/prat (1).png" alt="" className="h-[70vh] w-[70vh] absolute top-5 right-4 border rounded-[10vh] border-none" />
            
        </div>
        
      </div>
     

      <About/>

      <Education/>
      <div className="  p-6">
      <Skills/>

      </div>
      <div >
      <Achievements/>
      </div>
      <div >
        <Projects/>
      </div>
      </div>
    </>
  );
}
