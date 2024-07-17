import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Getinv.css";
import GetinvCard from "../../Cards/GetInvolved/GetinvCard";

function Getinv() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
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
      animation3.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });

      animation2.start({
        opacity: 0,
        y: 50,
      });
      animation3.start({
        opacity: 0,
        y: 50,
      });
    }

    console.log("inView", inView);
  }, [inView, animation, animation2, animation3]);
  return (
    <div className="getContainer">
      <motion.div className="getContent" ref={ref}>
        <motion.h1 className="getHeading" animate={animation}>
          Get Involved
        </motion.h1>
        <motion.p className="getText" animate={animation2}>
          There are many ways to get involved with the work of the Foundation.
          You can make a donation, volunteer your time, or become a partner in
          our work. We are always looking for new ideas and new ways to help the
          community. If you have an idea for a project or a program, please
          contact us.
        </motion.p>
      </motion.div>
      <GetinvCard />
    </div>
  );
}

export default Getinv;
