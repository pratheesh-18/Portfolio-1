import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Blog Website",
    description:
      "A full-stack blog platform where users can create, edit, and share posts. Includes user authentication, image uploads, and a responsive UI.",
    image: "/blog.webp",
  },
  {
    title: "Agriculture Technology",
    description:
      "An innovative web app designed to help farmers connect with customers, track crop seasons, and get real-time price recommendations based on seasonal trends.",
    image: "agr.jpg",
  },
  {
    title: "LPG Gas Detector",
    description:
      "An IoT-based system that detects LPG gas leaks and sends real-time alerts via SMS while displaying the leak location on a connected dashboard.",
    image: "lpg.jpg",
  },
  {
    title: "RAG chatbot",
    description:
      "An AI-powered chatbot that utilizes Retrieval-Augmented Generation to provide accurate and contextually relevant responses to user queries.",
    image: "rag.png",
  },
];

export default function Projects() {
  return (
    <>
      <div className=" text-white py-10 px-5 pt-20 project-card" id="projects">
        <hr className="text-gray-500 w-[200vh] mx-10" />
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold pt-10" data-aos="zoom-in-up">
            My <span className="text-cyan-500">PROJECTS</span>
          </h2>
          <p className="text-sm text-gray-400 pt-2">some of my recent works</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto project-float">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              scale={1.03}
              transitionSpeed={1000}
              glareEnable={true}
              glareMaxOpacity={0.12}
            >
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        group
        h-[500px]
        cursor-pointer
        "
              >
              
                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/0
          via-cyan-500/10
          to-purple-500/0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
          "
                />

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
            w-full
            h-[280px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
            "
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3
                    className="
            text-2xl
            font-bold
            text-white
            transition-all
            duration-500
            group-hover:text-cyan-400
            "
                  >
                    {project.title}
                  </h3>

                  <div
                    className="
            w-0
            h-[3px]
            bg-cyan-400
            mt-2
            group-hover:w-20
            transition-all
            duration-500
            "
                  />

                  <p
                    className=" text-gray-300 mt-5 leading-relaxed transition-all duration-500
            group-hover:text-white
            "
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  className="absolute -top-24 -left-24 w-48 h-48 rounded-full  bg-cyan-500/20  blur-3xl opacity-0
          group-hover:opacity-100 transition-all duration-700"
                />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </>
  );
}


