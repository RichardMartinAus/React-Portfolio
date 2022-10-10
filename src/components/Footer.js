import React from 'react';
import Github from '../assets/images/github.svg';
import LinkedIn from '../assets/images/linkedin-in.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icon-section">
        <a href="https://github.com/RichardMartinAus" target="blank">
          <img alt="github icon" className="footer-icon" src={Github} />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-martin-55502723/"
          target="blank"
        >
          <img
            alt="linkedin icon"
            className="footer-icon"
            src={LinkedIn}
            target="blank"
          />
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
