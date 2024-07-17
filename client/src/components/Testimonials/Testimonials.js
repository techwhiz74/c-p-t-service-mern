import React,{useEffect, useState} from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion ,useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";



const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const h1Animation = useAnimation();
  const divAnimation = useAnimation();
  const [testimonials, setTestimonials] = useState([]);

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

    axios.get("http://localhost:8080/api/testimonials") // Replace with your API endpoint
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, [inView, h1Animation, divAnimation]);
  

  return (
    <motion.div
      className="testimonials-container"
      ref={ref}
    >
      <motion.h1
        className="testimonialHeading"
        
        animate={h1Animation}
        
      >
        Testimonials
      </motion.h1>
      <motion.div
        className="div"
        
        animate={divAnimation}
        
      >
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.testimonie}</p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
