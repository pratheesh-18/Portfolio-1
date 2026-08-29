import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaExternalLinkAlt, FaGraduationCap, FaCode, FaTrophy } from "react-icons/fa";
import { SiMongodb, SiPython } from "react-icons/si";

const certificates = [
  // --- Course Completion Category ---
  {
    title: "Machine Learning",
    issuer: "Great Learning",
    date: "Nov 2024",
    category: "Course Completion",
    description: "Comprehensive Machine Learning course provided by Great Learning, focusing on core algorithms, predictive models, and data evaluation.",
    skills: ["Machine Learning", "Python", "Data Science"],
    badgeColor: "from-cyan-500/20 to-blue-500/10",
    icon: <FaAward className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Python for Beginners",
    issuer: "Simplilearn",
    date: "Oct 2024",
    category: "Course Completion",
    description: "Foundational Python programming course covering core syntax, control flow, data structures, and object-oriented programming.",
    skills: ["Python", "Data Structures", "OOP"],
    badgeColor: "from-yellow-500/20 to-amber-500/10",
    icon: <SiPython className="text-yellow-400 text-3xl" />,
  },
  {
    title: "MERN Stack Development",
    issuer: "Rexcoders Academy",
    date: "Apr 2024 – Sep 2024",
    category: "Course Completion",
    description: "Intensive 6-month full-stack development program building real-world web applications using MongoDB, Express.js, React.js, and Node.js.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    badgeColor: "from-emerald-500/20 to-teal-500/10",
    icon: <FaCode className="text-emerald-400 text-3xl" />,
  },
  {
    title: "Open Source Tools Training",
    issuer: "Dr.N.G.P. Institute of Technology",
    date: "2024",
    category: "Course Completion",
    description: "Practical hands-on training on essential open-source software tools, version control workflows, Git, and collaborative development.",
    skills: ["Git", "GitHub", "Open Source", "Linux"],
    badgeColor: "from-blue-500/20 to-indigo-500/10",
    icon: <FaCertificate className="text-blue-400 text-3xl" />,
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB Skills",
    date: "Jul 2026",
    category: "Course Completion",
    description: "Certification covering NoSQL document database fundamentals, CRUD operations, indexing, and MongoDB cloud deployment.",
    skills: ["MongoDB", "NoSQL", "Database CRUD"],
    badgeColor: "from-green-500/20 to-emerald-500/10",
    icon: <SiMongodb className="text-emerald-400 text-3xl" />,
  },

  // --- Competitions Category ---
  {
    title: "Technotronz'25",
    issuer: "PSG College of Technology",
    date: "2025",
    category: "Competitions",
    description: "State-level technical symposium and project competition showcasing innovative engineering solutions and project demonstrations.",
    skills: ["Project Expo", "Technical Innovation", "Engineering"],
    badgeColor: "from-purple-500/20 to-indigo-500/10",
    icon: <FaTrophy className="text-purple-400 text-3xl" />,
  },
  {
    title: "Cybenzec 2K25",
    issuer: "Karpagam Academy of Higher Education",
    date: "2025",
    category: "Competitions",
    description: "National-level technical competition and coding event featuring competitive programming and software solution challenges.",
    skills: ["Competitive Coding", "Hackathon", "Problem Solving"],
    badgeColor: "from-pink-500/20 to-rose-500/10",
    icon: <FaTrophy className="text-pink-400 text-3xl" />,
  },
  {
    title: "National Level Srinivasa Ramanujan Mathematical Competition",
    issuer: "ISTE Tamil Nadu Section",
    date: "2024",
    category: "Competitions",
    description: "State/National level mathematics competition testing quantitative reasoning, mathematical logic, and analytical problem-solving skills.",
    skills: ["Mathematics", "Logical Reasoning", "Quantitative"],
    badgeColor: "from-amber-500/20 to-orange-500/10",
    icon: <FaGraduationCap className="text-amber-400 text-3xl" />,
  },
];

export default function Certificates() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterCategories = ["All", "Course Completion", "Competitions"];

  const filteredCertificates =
    selectedFilter === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedFilter);

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden cyan-center-glow">
      {/* Subtle Divider */}
      <hr className="border-slate-800/80 mb-16 mx-auto w-full" />

      {/* Section Title */}
      <div className="text-center mb-12" data-aos="zoom-in-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">
          MY <span className="text-cyan-400">CERTIFICATES</span>
        </h2>
        <p className="text-sm text-slate-400 mt-3 font-medium">
          Certifications earned across course completions and technical competitions
        </p>
      </div>

      {/* Filter Tabs - Only 2 Categories */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14" data-aos="fade-up">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`
              px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer
              ${
                selectedFilter === category
                  ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-white/10 hover:text-white hover:border-cyan-500/40"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Certificates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCertificates.map((cert, index) => (
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                group relative flex flex-col justify-between h-full
                bg-slate-900/60 backdrop-blur-md
                border border-white/10 rounded-3xl p-6 sm:p-7
                hover:border-cyan-400/80 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]
                transition-all duration-500 cursor-pointer
              "
            >
              {/* Background Gradient Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.badgeColor} rounded-full blur-2xl pointer-events-none -mr-8 -mt-8`} />

              <div>
                {/* Header Icon & Year Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60 shadow-inner group-hover:border-cyan-500/40 transition-colors">
                    {cert.icon}
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-semibold tracking-wide">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuing Organization */}
                <p className="mt-1 text-xs font-semibold text-cyan-400/90 tracking-wide">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags & Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-slate-800/80 text-slate-300 border border-slate-700/60 rounded-lg text-[10px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>{cert.category}</span>
                  <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
