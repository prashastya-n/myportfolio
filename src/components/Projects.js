import React from 'react';

// Project data
const projects = [
  {
    title: "Emoji Memory Match Game",
    description: "A fun memory game using jQuery with theme toggle and sound effects.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    demoLink: "/emoji-memory-match-game/index.html",
    codeLink: "#",
  },
  {
    title: "Responsive Portfolio",
    description: "A personal portfolio built using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Quiz",
    description: "A React quiz app fetching questions from local JSON, testing frontend knowledge.",
    tech: ["React", "JavaScript", "CSS"],
    demoLink: "https://prashastya-n.github.io/Quiz/",
    codeLink: "https://github.com/prashastya-n/Quiz",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-pink-700">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border border-pink-200 rounded-lg p-6 shadow hover:shadow-md transition duration-300 animate-fade-in-up ${
                index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Tech:</strong> {project.tech.join(', ')}
              </p>
              <div className="flex gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.codeLink && project.codeLink !== "#" && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 underline"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
