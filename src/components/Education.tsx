'use client';
import React from 'react';
import '@/app/Education.css';

const educationData = [
  { degree: 'BE in Computer Science', college: 'P.A. College of Engineering', year: '2022-2016', cgpa: '9.31 CGPA' },
  { degree: 'PUC', college: 'Kanachur Pre University for Women', year: '2020-2022', cgpa: '95%' },
  { degree: '10th CBSE', college: 'Kanachur Public School', year: '2020', cgpa: '88.8%' },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <h2
        className="education-heading"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Education
      </h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200} // sequential delay
          >
            <div>
              <h3>{edu.degree}</h3>
              <p className="college">{edu.college}</p>
              <p>{edu.year}</p>
              <p>{edu.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
