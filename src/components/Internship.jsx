import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaCalendarAlt, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const internships = [
  {
    company: "REXKNAR CREATIVE SOLUTIONS",
    companyUrl: "https://rexknar.com/",
    role: "FULL STACK INTERN",
    period: "MAY 1st 2026 – MAY 30 2026",
    bullets: [
      "Building AI-powered Chat Bot, integrating LLM providers into production workflows.",
      "Learn about Nest JS and Express JS and working on it.",
      "Learnt about RAG and LLM and working on it.",
      
    ],
    tech: ["React JS", "LLMs", "RAG", "FastAPI", "Express JS"],
  },
  
];

export default function Internship() {
  const containerRef = useRef(null);

  // Track scroll progress inside the internship section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth spring physics for line fill height
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="internships"
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden cyan-center-glow"
    >
      {/* Subtle Divider */}
      <hr className="border-slate-800/80 mb-16 mx-auto w-full" />

      {/* Section Header */}
      <div className="text-center mb-20" data-aos="zoom-in-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">
          MY <span className="text-cyan-400">INTERNSHIPS</span>
        </h2>
        <p className="text-sm text-slate-400 mt-3 font-medium">
          Professional experience, engineering internships, and hands-on industry roles
        </p>
      </div>

      {/* Center Timeline Wrapper */}
      <div className="relative">
        {/* Static Center Background Line (Grey/Dark Rail) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800/90 rounded-full" />

        {/* Scroll-Reactive Animated Center Line Fill (Fills Cyan as you scroll) */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-300 to-blue-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.9)] z-10"
        />

        {/* Mobile Left Timeline Rail */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-slate-800" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-300 to-blue-500 z-10"
        />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {internships.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-center">
                {/* Center Timeline Node Dot (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-20 items-center justify-center w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_16px_rgba(6,182,212,0.9)] group-hover:scale-125 transition-all duration-300" />

                {/* Mobile Dot */}
                <div className="md:hidden absolute left-[11px] top-8 z-20 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950" />

                {/* Alternating Card: Left (Even) / Right (Odd) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`
                    w-full md:w-[46%] pl-10 md:pl-0
                    ${isEven ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"}
                  `}
                >
                  <div className="group bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-cyan-400/80 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] transition-all duration-500">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                            {item.company}
                          </h3>
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-white transition-colors"
                            aria-label={item.company}
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        </div>
                        <h4 className="text-sm font-semibold text-cyan-400/90 mt-0.5">
                          {item.role}
                        </h4>
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/90 border border-cyan-500/30 rounded-full text-[11px] font-bold text-cyan-400 shadow-sm">
                        <FaCalendarAlt size={10} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-cyan-400 mt-1 flex-shrink-0">
                            <FaCheckCircle size={10} />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      {item.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-[11px] font-semibold tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
