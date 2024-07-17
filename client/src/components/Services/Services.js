import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css";

function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    if (servicesRef.current && window.location.hash === "#services") {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 1,
        },
      });

      animation2.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 1.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 10,
      });

      animation2.start({
        opacity: 0,
        y: 10,
      });
    }

    console.log("inView", inView);
  }, [inView, animation, animation2]);

  const services = [
    {
      icon: "fas fa-film",
      title: "Visual Production",
      description:
        "The skilled creative team excels in authorship, directing, and editing. They utilize advanced techniques and innovative ideas to produce memorable works that leave a lasting impression on the audience.",
    },
    {
      icon: "fas fa-bullhorn",
      title: "Digital Marketing",
      description:
        "In light of this revolution known by digital marketing, we have a creative team that keeps pace with all developments in the digital world and on all social networking sites.",
    },
    {
      icon: "fas fa-id-card",
      title: "Building A Business Identity",
      description:
        "The Media Man team recognizes the profitability of commercial identity for entrepreneurs and aims to create a unified commercial identity for clients by leveraging foundational elements in their work.",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(-1);

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? -1 : index);
  };

  return (
    <div ref={ref}>
      <motion.div
      className="servicesContainer"
      ref={servicesRef}
      id="services"
      animate={animation}
    >
      <h1 className="servicesHeading" >Our Services</h1>
      <motion.div className="cardWrapper" animate={animation2}>
        {services.map((service, index) => (
          <div
            className={`serviceCard ${flippedIndex === index ? "flipped" : ""}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="cardInner">
              <div className="cardFront">
                <div className="serviceIcon">
                  <i className={service.icon}></i>
                </div>
                <h2 className="serviceTitle">{service.title}</h2>
              </div>
              <div className="cardBack">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
    </div>
    
  );
}

export default Services;
