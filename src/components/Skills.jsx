import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOpenai,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode className="text-cyan-400 text-xl" />,
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend Stack",
    icon: <FaLaptopCode className="text-cyan-400 text-xl" />,
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend & ORM",
    icon: <FaServer className="text-cyan-400 text-xl" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-400" /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-cyan-400 text-xl" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "AI & GenAI",
    icon: <FaBrain className="text-cyan-400 text-xl" />,
    skills: [
      { name: "Gen AI", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "LLM", icon: <FaRobot className="text-cyan-400" /> },
      { name: "RAG", icon: <FaBrain className="text-purple-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden cyan-center-glow">
      {/* Background Radial Cyan Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-600/20 via-blue-500/15 to-teal-400/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">
          TECH <span className="text-cyan-400">STACK</span>
        </h2>
        <p className="text-sm text-slate-400 mt-3 font-medium">
          My technical expertise and known tools categorized by domain
        </p>
      </div>

      {/* Container Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="
              group relative flex flex-col justify-between
              bg-slate-900/60 backdrop-blur-md
              border border-white/10 rounded-3xl p-6 sm:p-7
              hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]
              transition-all duration-300
            "
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-800/80">
              <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60 shadow-inner group-hover:border-cyan-500/40 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
            </div>

            {/* Category Skills Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="
                    flex flex-col items-center justify-center p-3.5 sm:p-4
                    bg-slate-800/50 backdrop-blur-sm
                    border border-white/5 rounded-2xl
                    cursor-pointer
                    hover:border-cyan-400/80 hover:bg-slate-800/90
                    hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]
                    transition-all duration-300
                  "
                >
                  <div className="text-2xl sm:text-3xl mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 text-center truncate max-w-full">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
