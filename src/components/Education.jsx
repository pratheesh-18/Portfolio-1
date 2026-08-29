import React from "react";

const educationItems = [
  {
    year: "2024 – Present",
    level: "Engineering",
    details: "B.Tech IT Dr.N.G.P.Institute Of Technology",
    resultLabel: "Current CGPA: 8.4",
  },
  {
    year: "2022 – 2024",
    level: "Higher Secondary",
    details: "S.L.B. Government Higher Secondary School, Nagercoil",
    resultLabel: "Percentage: 80%",
  },
  {
    year: "2021 – 2022",
    level: "Secondary Education",
    details: "Ed Willmott Memorial SDA Higher Secondary School, Nagercoil",
    resultLabel: "Percentage: 80%",
  },
];

export default function Education() {
  return (
    <section className="about-section pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100 relative cyan-center-glow" id="education">
      {/* Subtle Divider */}
      <hr className="border-slate-800/80 mb-16 mx-auto w-full" />

      {/* Section Title */}
      <div className="text-center mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white about-heading">
          My <span className="text-cyan-500">Education</span>
        </h2>
      </div>

      {/* Desktop Horizontal / Mobile Vertical Timeline Container */}
      <div className="relative mt-12">
        {/* Glowing Timeline Bar (Desktop Horizontal) */}
        <div className="hidden md:block absolute top-6 left-12 right-12 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

        {/* Timeline Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" data-aos="fade-right" data-aos-duration="1000">
          {educationItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative flex flex-col group"
            >
              {/* Timeline Node (Desktop Top Indicator) */}
              <div className="hidden md:flex items-center justify-center mx-auto mb-8">
                <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-[0_0_16px_rgba(6,182,212,0.9)] group-hover:scale-125 group-hover:bg-cyan-300 transition-all duration-300" />
              </div>

              {/* Glassmorphism Card */}
              <div className="about-edu-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xl">
                <div>
                  {/* Year Tag */}
                  <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-semibold tracking-wide mb-4 about-body">
                    {item.year}
                  </div>

                  {/* Level Title */}
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-white transition-colors about-heading">
                    {item.level}
                  </h3>

                  {/* Institution Details */}
                  <p className="mt-2 text-sm text-slate-200 leading-relaxed about-body">
                    {item.details}
                  </p>
                </div>

                {/* Result / CGPA Badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-800 text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors about-body shadow-sm">
                    {item.resultLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}