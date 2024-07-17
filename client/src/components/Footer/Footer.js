import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [linkClicked, setLinkClicked] = useState(false);

  useEffect(() => {
    if (linkClicked) {
      window.scrollTo(0, 0); 
      setLinkClicked(false); 
    }
  }, [linkClicked]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="Footer-logo">
          LOGO
        </Link>
        <ul className="footer-grid">
          <li className="Footer-item">
            <Link to="/" className="Footer-links" onClick={() => setLinkClicked(true)}>
              Home
            </Link>
          </li>
          <li className="Footer-item">
            <Link to="/about" className="Footer-links" onClick={() => setLinkClicked(true)}>
              About
            </Link>
          </li>
          <li className="Footer-item">
            <Link to="/impact" className="Footer-links" onClick={() => setLinkClicked(true)}>
              Our Impact
            </Link>
          </li>
          <li className="Footer-item">
            <Link to="/programs" className="Footer-links" onClick={() => setLinkClicked(true)}>
              Programs
            </Link>
          </li>
          <li className="Footer-item">
            <Link to="/contact-us" className="Footer-links" onClick={() => setLinkClicked(true)}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
        <p className="copy-rights">&copy; {new Date().getFullYear()} Tech-57. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
