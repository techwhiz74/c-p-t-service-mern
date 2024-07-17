import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // Create a CSS file for styling the button

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="back-to-top-button" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    )
  );
};

export default BackToTopButton;
