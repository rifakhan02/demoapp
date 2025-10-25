'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '@/app/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Copyright */}
      <p className="footer-text">
        &copy; 2025 Rifa Khan. All Rights Reserved.
      </p>

      {/* Social Icons */}
      <div className="footer-icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:your@email.com">
          <FaTwitter size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


