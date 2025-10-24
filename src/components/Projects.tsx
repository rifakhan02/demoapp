'use client';
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiVite, SiStreamlit, SiGooglecolab } from 'react-icons/si';
import '@/app/Projects.css';

interface Project {
  name: string;
  about: string;
  techStack: React.ReactNode[];
  demoLink: string;
}

const projects: Project[] = [
  {
    name: 'URL Shortner',
    about: 'A tool to shorten long URLs quickly and easily.',
    techStack: [<FaJsSquare key="js" />, <FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiNextdotjs key="next" />],
    demoLink: '#',
  },
  {
    name: 'Resume Analyser',
    about: 'Analyzes resumes to extract key skills and experiences.',
    techStack: [<FaReact key="react" />, <SiTypescript key="ts" />, <SiVite key="vite" />, <SiTailwindcss key="tailwind" />],
    demoLink: '#',
  },
  {
    name: 'Todo List',
    about: 'Manage your daily tasks efficiently.',
    techStack: [<SiTailwindcss key="tailwind" />, <FaJsSquare key="js" />, <FaReact key="react" />],
    demoLink: '#',
  },
  {
    name: 'Sudoku Solver',
    about: 'Solve Sudoku puzzles instantly with this tool.',
    techStack: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJsSquare key="js" />],
    demoLink: '#',
  },
  {
    name: 'AI Content Detection Tool',
    about: 'Detect AI-generated content in documents or social media.',
    techStack: [<FaPython key="python" />, <SiStreamlit key="streamlit" />, <SiGooglecolab key="colab" />],
    demoLink: '#',
  },
  {
    name: 'Netflix Clone',
    about: 'Frontend clone of Netflix to showcase movie listing UI.',
    techStack: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />],
    demoLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-about">{project.about}</p>
            <div className="tech-stack">
              {project.techStack.map((icon, i) => (
                <span className="tech-icon" key={i}>{icon}</span>
              ))}
            </div>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-btn">
              Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
