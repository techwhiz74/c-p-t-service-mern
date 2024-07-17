import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 }); 

  return (
    <div className="hero-container" ref={ref}>
      <div className={`hero-content ${inView ? "animate" : ""}`}>
        <motion.h1
          className="heroHeading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to Our Website
        </motion.h1>
        <motion.p
          className="heroText"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We are your one-stop solution for all your needs. Explore our products
          and services now!
        </motion.p>

        <motion.button
          className={`cta-button ${inView ? "animate" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/about" className="cta-link">
            Explore Now
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
