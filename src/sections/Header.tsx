'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeButton";

const logo_colored = "/dev_logo.svg";
const logo = "/dev_logo_white.svg";
const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // close menu on link click (mobile)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-4 md:px-16 py-4 fixed z-30 w-full">
      <nav className="flex items-center justify-between h-14 shadow-md rounded-full dark:bg-black/30 bg-white/10 backdrop-blur px-4 md:px-8 ">

        {/* ✅ Left-aligned logo */}
        <Link className="flex items-center h-full" href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={0}
            height={32}
            sizes="auto"
            className="h-8 w-auto object-contain hidden dark:block"
            priority
          />
          <Image
            src={logo_colored}
            alt="Logo"
            width={0}
            height={32}
            sizes="auto"
            className="h-8 w-auto object-contain dark:hidden block"
            priority
          />
        </Link>

        {/* Desktop Links */}
        {/* <ul
className="hidden md:flex gap-3 text-gray-900   dark:text-gray-50  p-4 backdrop-blur transition-all duration-500 ease-in-out "
>
  {sections.map((section) => (
    <li key={section}>
      <button
        onClick={() => scrollToSection(section)}
        className={`navlink px-4 py-2 rounded-full transition duration-200 ${
          active === section
  ? " dark:text-gray-900 dark:hover:bg-white/70 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-50 dark:to-slate-50 text-white"
  : "dark:text-white dark:hover:bg-white/20 text-gray-900 hover:bg-white/50 hover:text-gray-900"

        }`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </button>
    </li>
  ))}
</ul>
         */}
        <div className="flex items-center justify-center gap-5 md:gap-7">
          <ul
            className={`
    fixed top-20 left-4 right-4 flex-col gap-1  text-gray-900   dark:text-gray-50  p-4  transition-all duration-500 ease-in-out transform origin-top
    ${isMenuOpen ? "flex opacity-100 scale-100 z-100 items-center justify-center translate-y-0 bg-black/10 dark:bg-black/50 backdrop-blur-md rounded-2xl" : "opacity-0 scale-95 -translate-y-5 pointer-events-auto"}
    md:static md:flex md:flex-row md:gap-2 md:bg-transparent md:backdrop-blur-none md:p-0 md:opacity-100 md:scale-100 md:translate-y-0
  `}
          >
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`navlink ${active === section
                    ? " dark:text-gray-900 dark:hover:bg-white/70 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-900/50 hover:to-blue-700/50 dark:from-gray-50 dark:to-slate-50 text-white"
                    : "dark:text-white dark:hover:bg-white/20 text-gray-900 hover:bg-white/30 hover:text-gray-900"

                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          {/* ✅ Hamburger icon for mobile */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-6 flex flex-col justify-between items-end group"
            >
              <span
                className={`block h-1 w-[80%] rounded-full bg-gradient-to-r from-blue-900 to-blue-700 dark:from-white dark:to-gray-200
  transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2 w-full" : ""
                  }`}
              />
              <span
                className={`block h-1 w-full rounded-full bg-gradient-to-r from-blue-900 to-blue-700 dark:from-white dark:to-gray-200
 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-1 w-[65%] rounded-full bg-gradient-to-r from-blue-900 to-blue-700 dark:from-white dark:to-gray-200
 transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2 w-full" : ""
                  }`}
              />
            </button>
          </div>
        </div>


      </nav>
    </div>
  );
};
