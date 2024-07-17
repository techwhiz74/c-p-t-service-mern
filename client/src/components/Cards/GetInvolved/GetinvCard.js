import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Getinv.css";

function GetinvCard() {
  const cards = [
    {
      icon: "fas fa-hand-holding-heart",
      heading: "Donate",
      text: "Your donation will help us to continue our work in the community.",
      link: "/donate",
    },
    {
      icon: "fas fa-hands-helping",
      heading: "Volunteer",
      text: "We are always looking for volunteers to help with our programs.",
      link: "/volunteer",
    },
    {
      icon: "fas fa-handshake",
      heading: "Partner",
      text: "We are always looking for partners to help with our programs.",
      link: "/partner",
    },
    {
      icon: "fas fa-lightbulb",
      heading: "Ideas",
      text: "We are always looking for new ideas for programs and projects.",
      link: "/ideas",
    },
  ];
  const headingAnimation = useAnimation(); // Animation control for heading
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (headingInView) {
      headingAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
        },
      });
    } else {
      headingAnimation.start({
        opacity: 0,
        x: -50,
      });
    }
  }, [headingInView, headingAnimation]);

  return (
    <div>
      <motion.h1
        className="cardHeading"
        ref={headingRef}
        animate={headingAnimation}
      >
        More Ways
      </motion.h1>
      <div className="getCardContainer">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function Card({ card, index }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 0.2,
        },
      });
    } else {
      animation.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView, animation, index]);

  return (
    <motion.div
      className="getCard"
      ref={ref}
      animate={animation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="getCardIcon">
        <i className={card.icon}></i>
      </div>
      <div className="getCardText">
        <h3 className="getCardHeading">{card.heading}</h3>
        <p className="getCardPara">{card.text}</p>
        <a href={card.link} target="_blank" rel="noreferrer">
          <button className="getCardBtn">{card.heading}</button>
        </a>
      </div>
    </motion.div>
  );
}

export default GetinvCard;
