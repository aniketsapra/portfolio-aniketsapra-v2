"use client";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import About from "./About";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState("dark");

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Scroll observer to update active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row bg-gray-200 text-black dark:bg-emerald-950 dark:text-white transition-colors duration-300">
     <div
  className="fixed inset-0 pointer-events-none transition-all duration-200"
  style={{
    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${
      theme === "dark"
        ? "rgba(255, 255, 255, 0.07)"  // White glow in dark mode
        : "rgba(107, 114, 128, 0.20)" // Gray-500 glow in light mode
    } 0%, rgba(0,0,0,0) 40%)`,
  }}
>
</div>

          


      {/* Left Side (Navigation) */}
      <div className="lg:w-[48%] lg:h-screen text-gray-600 dark:text-gray-400 flex flex-col py-10 px-7 xl:px-45 lg:py-25 lg:sticky top-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-5xl text-black dark:text-gray-200 font-bold mb-2">Aniket Sapra</h1>
            <h2 className="text-xl lg:text-2xl text-black dark:text-gray-200 mb-2">Full-Stack Developer</h2>
            <p className="text-sm mb-4 lg:mb-10">
              I craft modern, scalable, and intuitive web applications using the MERN stack, FastAPI, and Python — blending clean design with robust backend architecture.
            </p>
          </div>

         {/* Theme Toggle Button */}
  <button
            onClick={toggleTheme}
            className="p-2 fixed z-50 bottom-4 left-4 md:bottom-10 md:left-10 rounded-full bg-gray-200 dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
          >
            {theme === "light" ? <DarkModeIcon sx={{ fontSize:35}} /> : <LightModeIcon sx={{ fontSize:35}} />}
          </button>
          
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-col mt-10 gap-5 font-bold text-sm scroll-smooth">
          {["about", "experience", "projects"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActiveSection(section)}
              className={`relative flex items-center transition-all duration-300 group ${
                activeSection === section
                  ? "text-black dark:text-gray-100"
                  : "hover:text-black dark:hover:text-gray-100"
              }`}
            >
              {/* Expanding Line */}
              <span
                className={`h-[3px] bg-black dark:bg-gray-100 transition-all duration-300 ${
                  activeSection === section ? "w-12" : "w-6 group-hover:w-12"
                }`}
              ></span>

              {/* Moving Text */}
              <span
                className={`px-3 transition-all duration-300 ${
                  activeSection === section ? "translate-x-2" : "group-hover:translate-x-2"
                }`}
              >
                {section.toUpperCase()}
              </span>
            </a>
          ))}
        </div>

        <a href="/resume.pdf" download="Aniket_Resume.pdf">
          <button className="lg:absolute lg:bottom-30 text-lg text-black dark:text-gray-200 hover:text-emerald-600 hover:underline cursor-pointer transition-all duration-300 pb-2">
            View Resume
          </button>
        </a>

        
        
        {/* Social Links */}
        <ul className="flex gap-3 lg:absolute lg:bottom-20">
          <li>
            <a
              href="https://www.linkedin.com/in/aniketsapra/"
              target="_blank"
              className="hover:text-black dark:hover:text-gray-100 cursor-pointer transition-all duration-300"
            >
              <LinkedInIcon sx={{ fontSize: 35 }} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aniketsapra"
              target="_blank"
              className="hover:text-black dark:hover:text-gray-100 cursor-pointer transition-all duration-300"
            >
              <GitHubIcon sx={{ fontSize: 35 }} />
            </a>
          </li>
          <li>
            <a
            href="https://www.upwork.com/freelancers/~0150aadaf4d54cca74?mp_source=share"
              target="_blank"
              className="hover:text-black dark:hover:text-gray-100 cursor-pointer transition-all duration-300 text-xl flex items-center justify-center p-1">
             UpWork
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side (Scrollable Content) */}
      <div className="lg:w-[52%] text-black dark:text-white p-5 lg:pr-40 lg:py-28 text-md text-left scroll-smooth">
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        
        <footer className="mt-20">
          <p className="text-gray-700 dark:text-gray-500 text-xs md:text-base flex items-center">
            Coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
          </p>
          <h2 className="text-gray-700 dark:text-gray-500 hover:text-black dark:hover:text-gray-200 font-bold flex justify-center items-center">
            aniketsapra
          </h2>
        </footer>
      </div>
    </div>
  );
}
