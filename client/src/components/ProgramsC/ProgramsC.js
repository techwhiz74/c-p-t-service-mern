import React, { useEffect, useState } from "react";
import "./ProgramsC.css";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProgramCard from "./ProgramCard";
import axios from "axios"; // Import axios library

function ProgramsC() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  
  const [programData, setProgramData] = useState([]);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      });

      animation2.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.4,
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

    axios
      .get("http://localhost:8080/api/programs") 
      .then((response) => {
        setProgramData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, [inView, animation, animation2]);

  return (
    <>
      <motion.h1 className="programsHeading" animate={animation} ref={ref}>
        Any Questions ?
      </motion.h1>
      <motion.p className="programsSubheading" animate={animation2}>
        For more information about a program and how to register, you can{" "}
        <Link className="programsLink" to="/contact-us">
          Contact Us
        </Link>{" "}
        in any way you find easier.
      </motion.p>
      <div className="programsContainer">
        {programData.map((program, index) => (
          <ProgramCard
            key={index}
            program={{
              ...program,
              startDate: new Date(program.startDate).toLocaleDateString(),
            }}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default ProgramsC;
