import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaVideo,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiWix, SiGoogleanalytics, SiMysql } from "react-icons/si";
import Tilt from "react-parallax-tilt";


const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400" /> },
  { name: "React js", level: 75, icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", level: 70, icon: <FaNode className="text-green-600" /> },
  { name: "SQL", level: 70, icon: <SiMysql className="text-blue-600" /> },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: <RiTailwindCssFill className="text-cyan-400" />,
  },
  { name: "Python", level: 70, icon: <FaPython className="text-yellow-400" /> },
];

const Skills = () => {
  return (
   <section id="skills" className="py-20 px-6 skill-card" >
<h1 className="text-center text-5xl font-bold text-white mb-14">
My <span className="text-cyan-500">Skills</span>
</h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {skills.map((skill, index) => (
      <Tilt
        key={index}
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1200}
        scale={1.05}
        transitionSpeed={1000}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#22d3ee"
        glarePosition="all"
      >
        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-lg
          p-8
          h-[200px]
          flex
          flex-col
          justify-center
          items-center
          text-center
          transition-all
          duration-500
          hover:border-cyan-400
          hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />

          <div className="relative text-6xl mb-5">
            {skill.icon}
          </div>

          <h2 className="relative text-xl font-semibold text-white">
            {skill.name}
          </h2>

          <div
            className="
            relative
            mt-4
            px-4
            py-1
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/30
            text-cyan-400
            text-sm
            font-medium
            "
          >
            {skill.level}% Proficiency
          </div>

          <div className="w-full mt-4">
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        </div>
      </Tilt>
    ))}
  </div>
</section>
  );
};

export default Skills;
