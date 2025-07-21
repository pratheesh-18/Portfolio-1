import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaVideo,
  FaReact,
  FaNode,
  FaPython
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiCanva,
  SiWix,
  SiGoogleanalytics,
  SiMysql
} from 'react-icons/si';

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400" /> },
  { name: "React js", level: 75, icon: <FaReact className='text-blue-400' /> },
  { name: "Node.js", level: 70, icon: <FaNode className="text-green-600" /> },
  { name: "SQL", level: 70, icon: <SiMysql className="text-blue-600" /> },
  { name: "Tailwind CSS", level: 90, icon: <RiTailwindCssFill className="text-cyan-400" /> },
  { name: "Python", level: 70, icon: <FaPython className="text-yellow-400" /> },
];

const Skills = () => {
  return (
    <div id='skills'>
      <h1 className='text-white text-4xl text-center font-semibold pt-10'>
        My <span className='text-cyan-500'>Skills</span>
      </h1>

      <div className="max-w-7xl mx-auto bg-black text-white p-6 mt-6 rounded-2xl shadow-xl">
        <div className="flex flex-wrap -mx-4 ">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-6 h-16 ">
              <div className="flex items-center gap-3 mb-1">
                <div className="text-2xl">{skill.icon}</div>
                <span className="font-medium">{skill.name}</span>
                <span className="ml-auto text-sm text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-4 ">
                <div
                  className="bg-purple-500 h-4  transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
