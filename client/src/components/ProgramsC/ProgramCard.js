import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgramCard = ({ program, index }) => {
  const [programRef, programInView] = useInView({
    threshold: 0.4,
  });

  return (
    <motion.div
      className="programContainer"
      ref={programRef}
      initial={{ opacity: 0, y: 20 }}
      animate={programInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      <div className="programCard">
        <div className="programCardInner">
          <div className="programCardFront">
            <h2 className="programTitle">{program.title}</h2>
            <p className="programDescription">{program.description}</p>
          </div>
          <div className="programCardBack">
            <div className="programDetails">
              <p className="programDuration">Duration: {program.duration}</p>
              <p className="programStart">Start Date: {program.startDate}</p>
            </div>
            <p className="programInfo">{program.info}</p>
            <a href={program.link} target="_blank" rel="noreferrer noopener">
              <button className="programButton">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
