'use client';
import React from 'react';
import '@/app/About.css'; // link your CSS file

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 data-aos="fade-up" data-aos-duration="1000">About Me</h2>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Passionate and detail-oriented Computer Science Engineering student in the 7th semester,
          with a strong academic record (9.31/10 CGPA) and problem-solving experience using Data Structures and Algorithms in C++.
          Proficient in full-stack development, including front-end technologies like HTML, CSS, JavaScript, React,
          and backend development with serverless and traditional approaches. Experienced in independently building
          and deploying production-ready applications, demonstrating strong software design skills and a continuous drive
          to learn and grow in software development.
        </p>
      </div>
    </section>
  );
};

export default About;
