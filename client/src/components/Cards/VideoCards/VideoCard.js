import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./VideoCard.css";

function VideoCard() {
  const knowMoreRef = useRef(null);

  useEffect(() => {
    if (knowMoreRef.current && window.location.hash === "#knowMore") {
      knowMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.2,
        },
      });

      animation2.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 20,
      });

      animation2.start({
        opacity: 0,
        y: 20,
      });
    }

    console.log("inView", inView);
  }, [inView, animation, animation2]);

  return (
    <motion.div className="videoContainer" id="knowMore" ref={knowMoreRef}>
      <motion.h1 className="videoHeading" animate={animation} >
        Get To Know Us
      </motion.h1>
      <div className="videoContent" ref={ref}>
        <motion.iframe
          src="https://youtu.be/7rgkyriwJLc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          animate={animation2}
          whileHover={{ scale: 1.05 }}
        ></motion.iframe>
      </div>
    </motion.div>
  );
}

export default VideoCard;
