import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-navbar">
      <div className="footer-icons">
        <a href="mailto:arshhhhdip@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <FaEnvelope size={22} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin size={22} />
        </a>
      </div>
      <div className="footer-rights">&copy; {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  );
};

export default Footer;