import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Internship", href: "#internships" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievement" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
];

export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for backdrop blur and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy section detector
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3"
          : "bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2 text-2xl sm:text-3xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">
              Pratheesh
            </span>
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-3.5 py-2 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-7xl mx-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 pl-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                        : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400 hover:pl-6"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
