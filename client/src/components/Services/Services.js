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
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "Our web development service focuses on creating dynamic and responsive websites tailored to meet the unique needs of our clients. We utilize the latest technologies and best practices to ensure that your website is not only visually appealing but also user-friendly. Our services include front-end and back-end development, e-commerce solutions, content management systems (CMS), and custom web applications. Whether you need a simple informational site or a complex web platform, we provide end-to-end solutions that enhance your online presence and drive engagement.",
    },
    {
      icon: "fas fa-chart-simple",
      title: "Online Marketing Shops",
      description:
        "Our online marketing shop service is designed to help businesses establish and grow their digital footprint. We specialize in creating effective marketing strategies that encompass search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and email campaigns. By leveraging data-driven insights and targeted approaches, we help you reach your audience, increase brand awareness, and drive sales. Our team works closely with you to develop customized marketing plans that align with your business goals and maximize your return on investment.",
    },
    {
      icon: "fas fa-mobile-screen",
      title: "Mobile Application Development",
      description:
        "We offer comprehensive mobile application development services for both iOS and Android platforms. Our team of skilled developers and designers work collaboratively to create intuitive and engaging mobile apps that provide seamless user experiences. From concept to launch, we ensure that your app is tailored to meet the specific needs of your target audience. Our services include native and cross-platform app development, UI/UX design, app maintenance, and updates. Whether you’re looking to build a new app or enhance an existing one, we are committed to delivering high-quality solutions that drive user engagement and satisfaction.",
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
