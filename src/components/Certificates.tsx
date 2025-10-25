'use client';
import React, { useState } from 'react';
import '@/app/Certificates.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface Certificate {
  name: string;
  link: string;
}

const certificates: Certificate[] = [
  { name: 'GirlGeekHack\'23 NITK Hackathon', link: 'https://drive.google.com/file/d/1Q9yD9Xzdm5b8vxBYDEVc2i8_wFBaYzHB/view?usp=drivesdk' },
  { name: 'Data Structures and Algorithms in C++', link: 'https://drive.google.com/file/d/1sqNn0_wMuXbdD0HE9Z5e4sxAyWbGsF6n/view?usp=drivesdk' },
  { name: 'CS50-Computer Science, Havard University', link: 'https://drive.google.com/file/d/1y11A-bkfSQ3Y3oNqVmJvEjJQ91zlLXyf/view?usp=drivesdk' },
  { name: 'Python Programming', link: 'https://drive.google.com/file/d/1squ26HNsRAFZvQSQKyCzYrmaPgQV__3c/view?usp=drivesdk' },
  { name: 'C Programming', link: 'https://drive.google.com/file/d/1CYU1R21RvbjkdR7uh6RAGYOwD4ZE8MNN/view?usp=drivesdk' },
  { name: 'Networking Basics-Cisco', link: 'https://drive.google.com/file/d/1CHOM4_226G1Z6yNBzYbrhMtcEsv-Ph6e/view?usp=drivesdk' },
  { name: 'CyberSecurity', link: 'https://drive.google.com/file/d/1CqciWZ4H7_rObCoUqRC67gBwkt7ZpkSP/view?usp=drivesdk' },
  { name: 'AWS Certified Developer', link: 'https://drive.google.com/file/d/1Y-uN52vJ9Gjn6vPhrNaniH92wkz756Ec/view?usp=drivesdk' },
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
      <h2
        className="certificates-heading"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Certificates
      </h2>

      <div
        className="certificate-container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
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
