import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaBrain, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiFlask, SiOpenai } from "react-icons/si";

const projects = [
  {
    title: "Mechanic On Road",
    description:
      "An online mechanic service platform helping users locate, request, and book roadside mechanic assistance during vehicle breakdowns.",
    image: "/mechanic.jpg",
    githubUrl: "https://github.com/pratheesh-18/MechanicOnRoad",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express", icon: <SiExpress className="text-slate-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    ],
  },
  {
    title: "Home2Hustel",
    description:
      "An e-commerce marketplace platform for home-based product creators to list, sell, and purchase homemade crafts and artisanal goods.",
    image: "/home2hustel.jpg",
    githubUrl: "https://github.com/pratheesh-18/Home2Hustel",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express", icon: <SiExpress className="text-slate-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    ],
  },
  {
    title: "SportLink",
    description:
      "A LinkedIn-inspired sports networking platform enabling athletes to showcase talents and connect directly with coaches and organizations.",
    image: "/sportlink.jpg",
    githubUrl: "https://github.com/pratheesh-18/sportsLink",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express", icon: <SiExpress className="text-slate-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    ],
  },
  {
    title: "School Management System",
    description:
      "A comprehensive full-stack CRUD application for managing schools, student profiles, records updates, and attendance tracking.",
    image: "/school.jpg",
    githubUrl: "https://github.com/pratheesh-18/School_management",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express", icon: <SiExpress className="text-slate-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    ],
  },
  {
    title: "Home Service Booking System",
    description:
      "A geolocation-based platform enabling users to discover and book local household services like plumbing, cleaning, and maintenance.",
    image: "/homeservice.jpg",
    githubUrl: "https://github.com/pratheesh-18/MiniProject_Home_service",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express", icon: <SiExpress className="text-slate-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    ],
  },
  {
    title: "AI Logo Generator",
    description:
      "An AI-powered generator integrating Google's Gemini LLM with a React frontend and Flask backend to produce vector logos based on user prompts.",
    image: "/ailogo.jpg",
    githubUrl: "https://github.com/pratheesh-18/AI_IMAGE_GENERATOR",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Flask", icon: <SiFlask className="text-slate-200" /> },
      { name: "Gemini LLM", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "Gen AI", icon: <FaBrain className="text-purple-400" /> },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden cyan-center-glow">
      {/* Subtle Divider */}
      <hr className="border-slate-800/80 mb-16 mx-auto w-full" />

      {/* Section Header */}
      <div className="text-center mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">
          MY <span className="text-cyan-400">PROJECTS</span>
        </h2>
        <p className="text-sm text-slate-400 mt-3 font-medium">
          Featured full-stack web applications, AI tools, and platforms built by me
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#06b6d4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                group relative flex flex-col justify-between h-full
                bg-slate-900/60 backdrop-blur-md
                border border-white/10 rounded-3xl overflow-hidden
                hover:border-cyan-400/80 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]
                transition-all duration-500 cursor-pointer
              "
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative overflow-hidden h-52 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800/80 rounded-xl border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 transition-colors"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  <div className="w-0 h-[2px] bg-cyan-400 group-hover:w-16 transition-all duration-500 mt-2" />

                  <p className="text-sm text-slate-300 leading-relaxed mt-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack Icons Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="
                        flex items-center gap-1.5 px-2.5 py-1
                        bg-slate-800/80 backdrop-blur-sm
                        border border-slate-700/60 rounded-xl
                        text-xs font-semibold text-slate-200
                        group-hover:border-cyan-500/40 transition-colors
                      "
                    >
                      <span className="text-sm">{t.icon}</span>
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
