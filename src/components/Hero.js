import React from 'react';
import profileImage from '../assets/profile.png'; // adjust the path if needed

const Hero = () => {
  return (
    <section id="hero" className="bg-pink-50 text-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Text Section - now on the left */}
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4 animate-fade-in-up">
            Hello, I'm Prashastya
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
            A front-end developer passionate about crafting beautiful and accessible web experiences.
          </p>
          <a
            href="#projects"
            className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded transition duration-300" 
            aria-label="View my projects"
          >
            View My Work
          </a>
        </div>

        {/* Image Section - now on the right */}
        <div className="md:w-1/2 flex justify-center">
          <img 
          src={profileImage}
          alt="Prashastya's profile"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-pink-200"
          loading="lazy" 
          width="256"
          height="256"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;
