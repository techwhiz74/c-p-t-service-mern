import React, { useState, useEffect } from "react";
import "./backgroundSlider.css";
import imageslider from "../../data/slider-data";
import { motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function BackgroundSlider() {
  const [currentState, setcurrentState] = useState(0);

  const nextIndex = (currentIndex) => (currentIndex + 1) % imageslider.length;
  const previousIndex = (currentIndex) =>
    (currentIndex - 1 + imageslider.length) % imageslider.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setcurrentState(nextIndex(currentState));
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageUrl = imageslider[currentState].url;

  return (
    <div className="container">
      <motion.div
        className="slider"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="arrow arrow-left"
          onClick={() => setcurrentState(previousIndex(currentState))}
          whileHover={{ scale: 1.1 }}
        >
          <SlArrowLeft />
        </motion.div>
        <motion.div
          className="arrow arrow-right"
          onClick={() => setcurrentState(nextIndex(currentState))}
          whileHover={{ scale: 1.1 }}
        >
          <SlArrowRight />
        </motion.div>
      </motion.div>
      <div className="discreption">
        <div className="carousel-boullt">
          {imageslider.map((image, index) => (
            <span
              key={index}
              onClick={() => setcurrentState(index)}
              className={index === currentState ? "active" : ""}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackgroundSlider;
