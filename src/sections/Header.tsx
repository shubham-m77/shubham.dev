'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [active, setActive] = useState('home');

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
      {
        threshold: 0.4, // 40% of section should be visible
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

   return <div className="px-4 md:px-16 py-4 fixed z-30 w-full">
    <nav className="flex items-center  justify-center rounded-full md:bg-white/10 md:backdrop:blur">
      <div className="brand hidden md:block">
        <h2 className="text-xl font-serif font-medium px-8 tracking-tight">shubham<span className="text-blue-700">.</span>dev</h2>
      </div>
      <ul className="flex   items-center md:ml-auto md:top-0 sticky md:relative bg-white/10 backdrop:blur md:bg-none md:backdrop-blur-none rounded-full z-30">
        <Link href={"#home"} className={`navlink ${active === "home" ? "bg-gray-50  text-gray-900 hover:bg-white/70" : ""}`}><li>Home</li></Link>
        <Link href={"#projects"} className={`navlink ${active === "projects" ? "bg-gray-50  text-gray-900 hover:bg-white/70" : ""}`}><li>Projects</li></Link>
        <Link href={"#about"} className={`navlink ${active === "about" ? "bg-gray-50  text-gray-900 hover:bg-white/70" : ""}`}><li>About</li></Link>
        <Link href={"#contact"} className={`navlink ${active === "contact" ? "bg-gray-50  text-gray-900 hover:bg-white/70" : ""}`}><li>Contact</li></Link>

      </ul>
    </nav>
  </div>;
};
