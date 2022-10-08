import React from 'react';
import Github from '../assets/images/github.svg';
import LinkedIn from '../assets/images/linkedin-in.svg';
import '../components/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icon-section">
        <img alt="github icon" className="footer-icon" src={Github} />
        <img alt="linkedin icon" className="footer-icon" src={LinkedIn} />
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
