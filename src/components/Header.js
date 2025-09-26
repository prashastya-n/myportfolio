import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-background shadow-md">
      <div className="text-xl font-bold text-textPrimary">Prash's Portfolio</div>
      <nav>
        <ul className="flex space-x-6 text-textSecondary">
          <li>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary transition">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
