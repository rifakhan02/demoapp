'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '@/app/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Copyright */}
      <p className="footer-text">
        &copy; 2025 Rifa Khan. All Rights Reserved.
      </p>

      {/* Social Icons (not clickable) */}
      <div className="footer-icons">
        <FaGithub size={28} />
        <FaLinkedin size={28} />
        <FaTwitter size={28} />
      </div>
    </footer>
  );
};

export default Footer;
