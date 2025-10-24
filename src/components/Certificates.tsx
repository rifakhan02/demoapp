'use client';
import React, { useState } from 'react';
import '@/app/Certificates.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface Certificate {
  name: string;
  link: string;
}

const certificates: Certificate[] = [
  { name: 'React Developer Certificate', link: 'https://drive.google.com/file/d/xyz1/view' },
  { name: 'JavaScript Mastery Certificate', link: 'https://drive.google.com/file/d/xyz2/view' },
  { name: 'Python Programming Certificate', link: 'https://drive.google.com/file/d/xyz3/view' },
  // Add more certificates here
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const openCertificate = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="certificates-heading">Certificates</h2>

      <div className="certificate-container">
        <button className="arrow-btn left" onClick={prevCertificate}>
          <FiArrowLeft />
        </button>

        <div className="certificate-box">
          <p className="certificate-name">{certificates[currentIndex].name}</p>
          <button
            className="view-btn"
            onClick={() => openCertificate(certificates[currentIndex].link)}
          >
            View
          </button>
        </div>

        <button className="arrow-btn right" onClick={nextCertificate}>
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Certificates;
