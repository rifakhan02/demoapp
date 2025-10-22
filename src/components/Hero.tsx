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
          <h1 className="logo">MCODE</h1>
          <nav>
            <a href="#">COMPANY</a>
            <a href="#">FEATURES</a>
            <a href="#">RESOURCES</a>
            <a href="#">DOCS</a>
          </nav>
          <button className="btn-signing">SIGNING</button>
        </header>

        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">INTRUCING &amp; wedbar</div>
            </div>

            <h1>
              ENAIL FOR
              <br />
              DEVELOPERS
            </h1>

            <p className="description">
              the best way to reach uumans insted of spam folders, clever
              transactional and marketing emails at scale.
            </p>

            <div className="buttons">
              <a href="#" className="btn-get-started">
                Documentation &gt;
              </a>
              <a href="#" className="btn-signing-main">
                Getstared &gt;
              </a>
            </div>
          </div>
</main>

          <SplineScene/>
        
      </div>

    </div>
  );
};

export default Hero;
