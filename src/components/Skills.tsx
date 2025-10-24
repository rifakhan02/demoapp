'use client';
import React from 'react';
import {VscCode} from "react-icons/vsc"
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
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-list">

        <div className="skills-row">
          <h3>Programming Languages</h3>
          <div className="icons">
            <SiCplusplus title="C++" />
            <SiPython title="Python" />
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
          </div>
        </div>

        <div className="skills-row">
          <h3>Web Technologies</h3>
          <div className="icons">
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiMysql title="SQL" />
          </div>
        </div>

        <div className="skills-row">
          <h3>Frameworks & Libraries</h3>
          <div className="icons">
            <SiReact title="React.js" />
            <SiNextdotjs title="Next.js" />
            <SiExpress title="Express.js" />
          </div>
        </div>

        <div className="skills-row">
          <h3>Developer Tools</h3>
          <div className="icons">
            <VscCode title="VS Code" />
            <SiFigma title="Figma" />
            <SiGit title="Git" />
            <SiGithub title="GitHub" />
            <SiVercel title="Vercel" />
            <SiVite title="Vite" />
          </div>
        </div>

        <div className="skills-row">
          <h3>CS Fundamentals</h3>
          <div className="icons">
            <FaBrain title="OOPS" />
            <FaDatabase title="DBMS" />
            <SiMysql title="SQL" />
            <SiJavascript title="Computer Networks" />
            <SiExpress title="Operating System" />
          </div>
        </div>

        <div className="skills-row">
          <h3>Soft Skills</h3>
          <div className="icons">
            <FaComments title="Communication" />
            <FaLightbulb title="Problem Solving" />
            <FaBrain title="Leadership" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;