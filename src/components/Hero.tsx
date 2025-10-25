'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SplineScene from './SplineScene';

const Hero: React.FC = () => {
  return (
    <div>
      <div className="layer-blur"></div>

      <div className="container">
        <header data-aos="fade-down" data-aos-duration="1500">
          <h1 className="logo">𝕽𝖎𝖋𝖆</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#certificates">Certificates</a>
            <a href="#projects">Projects</a>
          </nav>

          <a href="#contact" className="btn-signing-main">Connect</a>
        </header>

        <hr className="border-gray-800 opacity-80" />

        <main>
          <div className="box">
            <div className="content">

              {/* Portfolio tag */}
              <div className="tag-box" data-aos="fade-up" data-aos-duration="1000">
                <div className="tag">Portfolio</div>
              </div>

              {/* Typewriter */}
              <div
                className="typewriter-container"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h1>
                  <Typewriter
                    words={['Hi, I’m AZKIYA RIFA KHAN', 'Full Stack Developer']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </div>

              {/* Description */}
              <p
                className="description"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                A passionate problem solver and quick learner.
                Crafting seamless digital experiences through design and logic
              </p>

              {/* Buttons */}
              <div
                className="buttons"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <a href="#contact" className="btn-get-started">
                  Hire Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1eGWH_IOwEQ6xIlCH4f_3Ra8Au-B5FZjq/view?usp=drivesdk"
                  className="btn-signing-main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>

              </div>

            </div>
          </div>
        </main>

        {/* SplineScene stays untouched */}
        <SplineScene />

      </div>
    </div>
  );
};

export default Hero;
