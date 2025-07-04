'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ✅ Professional icons

const logo_2 = "/dev_logo_2.svg";
const logo = "/dev_logo.svg";
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
      <nav className="flex items-center justify-between h-14 shadow-md rounded-full bg-black/30 backdrop-blur px-4 md:px-8">

        {/* ✅ Left-aligned logo */}
        <div className="flex items-center h-full">
          <Image
            src={logo}
            alt="Logo"
            width={0}
            height={40}
            sizes="auto"
            className="h-10 w-auto object-contain hidden md:block"
            priority
          />
          <Image
            src={logo_2}
            alt="Mobile Logo"
            width={0}
            height={40}
            sizes="auto"
            className="h-10 w-auto object-contain block md:hidden"
            priority
          />
        </div>

        {/* ✅ Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ Nav links */}
        <ul
          className={`
            absolute top-16 left-4 right-4 flex-col gap-2 rounded-xl p-4 bg-black/60 backdrop-blur transition-all items-center duration-300 justify-center
            ${isMenuOpen ? "flex" : "hidden"}
            md:static md:flex md:flex-row md:gap-4 md:bg-transparent md:backdrop-blur-none md:p-0 md:top-auto md:left-auto md:right-auto md:justify-none
          `}
        >
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`navlink px-4 py-2 rounded-full transition duration-200 ${
                  active === section
                    ? "bg-gray-50 text-gray-900 hover:bg-white/70"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
