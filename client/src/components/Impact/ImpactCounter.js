import React, { useEffect } from "react";
import "./ImpactCounter.css";
import CountUp from "react-countup";
import { FaUsers, FaDonate } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ImpactCounter() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      });

      animation2.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: -100,
      });

      animation2.start({
        opacity: 0,
        x: 100,
      });
    }

    console.log("inView", inView);
  }, [inView, animation, animation2]);
  return (
    <>
      <div className="impactContainer" ref={ref}>
        <motion.div className="impactContent" animate={animation}>
          <h1 className="impactHeading">Our impact</h1>
          <p className="impactText">
            We have helped over 200 people in the world to achieve their goals
            and dreams by creating a platform where they can share their stories
            with other people who are passionate about what they do or want to
            learn more about it.
          </p>
        </motion.div>
        <motion.div className="impactCard" animate={animation2}>
          <div className="cardItem">
            <FaUsers className="icon" />
            <CountUp
              end={100}
              suffix="+"
              duration={5}
              className="impactCounter"
            />
            <h2>Volunteers</h2>
          </div>
          <div className="cardItem">
            <FaDonate className="icon" />
            <CountUp
              end={49876}
              prefix="$"
              duration={5}
              className="impactCounter"
            />
            <h2>In total raised money</h2>
          </div>
          <div className="cardItem">
            <MdDoneAll className="icon" />
            <CountUp
              end={250}
              suffix="+"
              duration={5}
              className="impactCounter"
            />
            <h2>Projects completed</h2>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ImpactCounter;
