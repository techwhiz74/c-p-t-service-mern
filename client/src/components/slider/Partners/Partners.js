import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Partners.css";
import partnersSlider from "../../../data/partners-data";

function Partners() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          delay: 0.2, // Delay for h1 animation
        },
      });

      divAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.4, // Delay for div animation
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
    <div className="slider-container" ref={ref}>
      <motion.h1 className="partnersHeading" animate={h1Animation}>
        Our Partners
      </motion.h1>
      <motion.div animate={divAnimation}>
        <Slider {...settings}>
          {partnersSlider.map((slide) => (
            <div key={slide.id}>
              <img src={slide.url} alt="images" className="partnersImg" />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Partners;