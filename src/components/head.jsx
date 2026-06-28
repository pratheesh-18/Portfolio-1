import { useEffect, useState } from "react";
import { LuSunDim } from "react-icons/lu";

export default function Head() {
   
  return (
    <>
      <header className="backdrop-blur-xl h-20 head bg-white/5 fixed top-0 w-full  ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between mt-3">
            <div className="md:flex md:items-center md:gap-12 ">
              <a className="block dark:text-teal-600" href="#">
                <h1 className="text-3xl font-semibold  text-cyan-500">Pratheesh</h1>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-[17px]">
                  <li>
                    <a
                      className="text-white  transition hover:text-red-500  "
                      href="#home"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-red-500 "
                      href="#about"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-red-500 "
                      href="#education"
                    >
                      Career
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-red-500 "
                      href="#skills"
                    >
                     Skills
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-red-500 "
                      href="#achievement"
                    >
                      Achievements
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-red-500 "
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>
                  {/* <li>
                    <button className="text-white transition hover:text-red-500 pt-2 " onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
                    ><LuSunDim size={25}/></button>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
