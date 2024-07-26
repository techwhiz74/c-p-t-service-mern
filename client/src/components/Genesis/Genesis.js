import React from "react";
import "./Genesis.css";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Genesis() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  return (
    <motion.div
      className="aboutContainer"
      ref={ref}
    >
      <div className="genContent" id="genesis">
        {/* <video autoplay muted loop className="Genesis_video" >
          <source src="https://www.align.com/hubfs/footerBG-9mb.mp4" type="video/mp4"/>
        </video> */}
        <img src='./genesis.jpg' alt="Genesis" className="Genesis_video"/>
        <h1 className="genHeading">Genesis</h1>
        <motion.p
          className="genText"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are a organization founded in 2019 by a group of young
          investor social entrepreneurs who believe in the power of social
          entrepreneurship to create a better future for San Diego.
        </motion.p>
      </div>
      <div className="listContainer">
        <motion.div
          className="genContent2"
          id="vision"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="headingContainer">
            <h3 className="genHeading2">Our Vision</h3>
            <motion.div
              className="genLogo1"
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <GoGoal />
            </motion.div>
          </div>
          <motion.p
            className="genText2"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We envision a Nigeria where every citizen is empowered to be a
            changemaker
          </motion.p>
        </motion.div>
        <motion.div
          className="genContent2"
          id="mission"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="headingContainer">
            <h3 className="genHeading2">Our Mission</h3>
            <motion.div
              className="genLogo1"
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <GiStairsGoal />
            </motion.div>
          </div>
          <motion.p
            className="genText2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            We support social entrepreneurs with system-changing ideas to
            develop their projects and scale their impact.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Genesis;
