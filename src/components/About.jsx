import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaAward, FaCode, FaGraduationCap, FaTrophy, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const statCards = [
  {
    title: "Certificates",
    value: "8+",
    icon: <FaAward className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />,
    styleClass: "about-stat-cyan",
    glowColor: "from-cyan-500/15 to-blue-500/5",
    badgeBorder: "border-cyan-500/30 text-cyan-400",
  },
  {
    title: "LeetCode Solved",
    value: "400+",
    icon: <FaCode className="text-purple-400 text-2xl group-hover:scale-110 transition-transform" />,
    styleClass: "about-stat-purple",
    glowColor: "from-purple-500/15 to-pink-500/5",
    badgeBorder: "border-purple-500/30 text-purple-400",
  },
  {
    title: "CGPA",
    value: "8.4",
    icon: <FaGraduationCap className="text-emerald-400 text-2xl group-hover:scale-110 transition-transform" />,
    styleClass: "about-stat-green",
    glowColor: "from-emerald-500/15 to-teal-500/5",
    badgeBorder: "border-emerald-500/30 text-emerald-400",
  },
  {
    title: "Events",
    value: "10+",
    icon: <FaTrophy className="text-amber-400 text-2xl group-hover:scale-110 transition-transform" />,
    styleClass: "about-stat-orange",
    glowColor: "from-amber-500/15 to-orange-500/5",
    badgeBorder: "border-amber-500/30 text-amber-400",
  },
];

export default function About() {
  return (
    <section className="about-section py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100 relative cyan-center-glow" id="about">
      {/* Subtle Divider */}
      <hr className="border-slate-800/80 mb-16 mx-auto w-full" />

      {/* Section Heading */}
      <div className="text-center mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white about-heading">
          About <span className="text-cyan-500">Me</span>
        </h2>
      </div>

      {/* Two-Column About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: About Text & Contact Info */}
        <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl" data-aos="fade-right" data-aos-duration="1000">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed about-body">
            Hi My name is Pratheesh ,Im a motivated third-year B.Tech IT student passionate about Full stack developement and eager to learn. I enjoy building responsive web applications and exploring new technologies. I adapt quickly, collaborate well, and embrace challenges that help me grow. Excited to apply my skills to real-world projects and make a meaningful impact.
          </p>

          {/* Contact Details */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3 text-slate-300 text-sm sm:text-base about-body">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-slate-800/80 text-cyan-400 rounded-lg">
                <FaPhoneAlt size={14} />
              </span>
              <span><strong>Phone :</strong> 9361029817</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2 bg-slate-800/80 text-cyan-400 rounded-lg">
                <FaEnvelope size={14} />
              </span>
              <span><strong>Email :</strong> pratheehpratheesh2006@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-2 bg-slate-800/80 text-cyan-400 rounded-lg mt-0.5">
                <FaMapMarkerAlt size={14} />
              </span>
              <span><strong>Address:</strong> Main road chunkankadai near RC church kanyakumari 629003</span>
            </div>

            
          </div>
        </div>

        {/* RIGHT COLUMN: Statistics Card Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-duration="1000">
          {statCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group relative overflow-hidden rounded-3xl p-6 about-stat-card ${card.styleClass}`}
            >
              {/* Background Subtle Radial Gradient */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${card.glowColor} rounded-full blur-xl pointer-events-none -mr-6 -mt-6`} />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60 shadow-inner">
                  {card.icon}
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight about-heading">
                {card.value}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 about-body">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}