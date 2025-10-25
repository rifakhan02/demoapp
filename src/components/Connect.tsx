'use client';
import React, { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '@/app/Connect.css';

const Connect: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured properly.');
      setSending(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setSending(false);
        setSent(true);
        form.current?.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setError('Failed to send message. Try again later.');
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="connect-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="connect-heading" data-aos="fade-up" data-aos-duration="1000">
        Connect
      </h2>

      {/* Icons */}
      <div className="connect-icons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <a
          href="mailto:rifakhan827@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-box"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="http://www.linkedin.com/in/azkiya-rifa-khan-aaa32027b"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-box"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/rifakhan02"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-box"
        >
          <FaGithub size={30} />
        </a>
      </div>

      {/* Send Message Form */}
      <form
        ref={form}
        onSubmit={handleSend}
        className="connect-form"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required rows={5} />
        <button type="submit" className="send-btn" disabled={sending}>
          {sending ? 'Sending...' : 'Send'}
        </button>

        {sent && <p className="success-msg">Message sent successfully!</p>}
        {error && <p className="error-msg">{error}</p>}
      </form>
    </section>
  );
};

export default Connect;
