'use client';
import React from 'react';
import { VscCode } from "react-icons/vsc";
import '@/app/Skills.css';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiVercel,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma,
  SiMysql,
} from 'react-icons/si';
import { FaBrain, FaComments, FaLightbulb, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      icons: [SiCplusplus, SiPython, SiJavascript, SiTypescript],
      labels: ['C++', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web Technologies',
      icons: [SiHtml5, SiCss3, SiTailwindcss, SiMysql],
      labels: ['HTML5', 'CSS3', 'Tailwind CSS', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      icons: [SiReact, SiNextdotjs, SiExpress],
      labels: ['React.js', 'Next.js', 'Express.js'],
    },
    {
      title: 'Developer Tools',
      icons: [VscCode, SiFigma, SiGit, SiGithub, SiVercel, SiVite],
      labels: ['VS Code', 'Figma', 'Git', 'GitHub', 'Vercel', 'Vite'],
    },
    {
      title: 'CS Fundamentals',
      icons: [FaBrain, FaDatabase, SiMysql, SiJavascript, SiExpress],
      labels: ['OOPS', 'DBMS', 'SQL', 'Computer Networks', 'Operating System'],
    },
    {
      title: 'Soft Skills',
      icons: [FaComments, FaLightbulb, FaBrain],
      labels: ['Communication', 'Problem Solving', 'Leadership'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading" data-aos="fade-up" data-aos-duration="1000">
        Skills
      </h2>

      <div className="skills-list">
        {skillsData.map((row, index) => (
          <div
            key={row.title} // unique key for each row
            className="skills-row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <h3>{row.title}</h3>
            <div className="icons">
              {row.icons.map((Icon, i) => (
                <div key={row.labels[i]} className="icon-wrapper" tabIndex={0}>
                  <Icon />
                  <span className="tooltip">{row.labels[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
