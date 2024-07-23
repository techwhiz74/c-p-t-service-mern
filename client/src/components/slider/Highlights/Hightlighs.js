import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Highlights.css";

function Highlights() {
  const images = [
    "../highlight/image-1.jpg",
    "../highlight/image-2.jpg",
    "../highlight/image-3.jpg",
    "../highlight/image-4.jpg",
    "../highlight/image-5.jpg",
    "../highlight/image-6.jpg",
    "../highlight/image-7.jpg",
    "../highlight/image-8.jpg",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          arrow: false,
        },
      },
    ],
  };
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const h1Animation = useAnimation();
  const divAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      h1Animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.2,
        },
      });

      divAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.4,
        },
      });
    } else {
      h1Animation.start({
        opacity: 0,
        y: 60,
      });

      divAnimation.start({
        opacity: 0,
        y: 60,
      });
    }
  }, [inView, h1Animation, divAnimation]);

  return (
    <motion.div className="highlightsContainer" ref={ref}>
      <motion.h1 className="highlightsHeading" animate={h1Animation}>
        Highlights
      </motion.h1>
      <motion.div animate={divAnimation}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={image}
                alt={`img-${index}`}
                className="highlightsImage"
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
}

export default Highlights;



