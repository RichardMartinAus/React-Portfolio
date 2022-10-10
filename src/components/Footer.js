import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icon-section">
        <a href="https://github.com/RichardMartinAus" target="blank">
          <FaGithub style={{ color: '#FFEC1F', fontSize: '50px' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-martin-55502723/"
          target="blank"
        >
          <FaLinkedin style={{ color: '#FFEC1F', fontSize: '50px' }} />
        </a>
      </div>
      <div className="footer-text-section">
        <p className="footer-text">
          Website built using React by Richard Martin © 2022
        </p>
      </div>
    </footer>
  );
}

export default Footer;
