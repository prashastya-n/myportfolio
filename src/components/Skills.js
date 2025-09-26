// src/components/Skills.js
import React from 'react';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Tailwind CSS',
  'Bootstrap',
  'jQuery',
  'REST APIs',
  'SQL',
  'Version Control (Git)',
  'Problem Solving',
  'Deployment & Releases'
];

const Skills = () => {
  return (
  <section id="projects" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10 text-pink-700"> My Toolkit 💻</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:bg-pink-100 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
