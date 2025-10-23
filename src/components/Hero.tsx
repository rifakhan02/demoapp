'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SplineScene from './SplineScene';


const Hero: React.FC = () => {
  return (
    <div>
      <div className="layer-blur"></div>

      <div className="container">
        <header>
          <h1 className="logo">𝕽𝖎𝖋𝖆</h1>
          <nav>
            <a href="#">About</a>
            <a href="#">Education</a>
            <a href="#">Skills</a>
            <a href="#">Certificates</a>
            <a href="#">Projects</a>
          </nav>
          <button className="btn-signing">Connect</button>
        </header>

        <main>
          <div className="box">
            <div className="content">
              <div className="tag-box">
                <div className="tag">Portfolio</div>
              </div>

              <div className="typewriter-container">
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


              <p className="description">
                A passionate problem solver and quick learner.
                Crafting seamless digital experiences through design and logic
              </p>

              <div className="buttons">
                <a href="#" className="btn-get-started">
                  Hire Me
                </a>
                <a href="#" className="btn-signing-main">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </main>

        <SplineScene />

      </div>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.85/build/spline-viewer.js"></script>
    </div>
  );
};

export default Hero;
