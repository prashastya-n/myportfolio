import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = (
    <>
      <a href="#hero" className="hover:text-pink-500 transition-colors duration-300">
        Home
      </a>
      <a href="#about" className="hover:text-pink-500 transition-colors duration-300">
        About
      </a>
      <a href="#projects" className="hover:text-pink-500 transition-colors duration-300">
        Projects
      </a>
      <a href="#skills" className="hover:text-pink-500 transition-colors duration-300">
        Skills
      </a>
      <a href="#contact" className="hover:text-pink-500 transition-colors duration-300">
        Contact
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-100 bg-opacity-80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <div className="text-2xl font-bold text-pink-700">Prashastya</div> */}

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-pink-700 font-semibold">
          {navLinks}
        </div>

        {/* Mobile hamburger icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-700 text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-pink-100 text-pink-700 font-semibold space-y-3 flex flex-col">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
